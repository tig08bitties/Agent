/**
 * sudo-rs Integration Extension for Hyper Terminal
 * 
 * Memory-safe privilege escalation for Covenant Agent operations
 * Integrates sudo-rs for secure command execution
 */

const { spawn, exec } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

class SudoRSExtension {
  constructor() {
    this.initialized = false;
    this.sudoCommand = null;
    this._initialize();
  }
  
  _initialize() {
    this._detectSudoCommand();
    this.initialized = true;
  }
  
  /**
   * Detect sudo-rs or fallback to sudo
   */
  _detectSudoCommand() {
    return new Promise((resolve) => {
      exec('which sudo-rs', (error) => {
        if (!error) {
          this.sudoCommand = 'sudo-rs';
          resolve('sudo-rs');
        } else {
          exec('which sudo', (error2) => {
            if (!error2) {
              this.sudoCommand = 'sudo';
              resolve('sudo');
            } else {
              this.sudoCommand = null;
              resolve(null);
            }
          });
        }
      });
    });
  }
  
  /**
   * Execute command with privilege escalation
   */
  async executeWithPrivilege(command, options = {}) {
    if (!this.sudoCommand) {
      return { success: false, error: 'No sudo command available' };
    }
    
    const fullCommand = `${this.sudoCommand} ${command}`;
    const cwd = options.cwd || process.cwd();
    const env = options.env || process.env;
    
    return new Promise((resolve) => {
      const proc = spawn('bash', ['-c', fullCommand], {
        cwd: cwd,
        env: env,
        stdio: options.stdio || 'pipe'
      });
      
      let output = '';
      let error = '';
      
      if (proc.stdout) {
        proc.stdout.on('data', (data) => {
          output += data.toString();
        });
      }
      
      if (proc.stderr) {
        proc.stderr.on('data', (data) => {
          error += data.toString();
        });
      }
      
      proc.on('close', (code) => {
        resolve({
          success: code === 0,
          output: output.trim(),
          error: error.trim(),
          exitCode: code,
          command: fullCommand
        });
      });
      
      proc.on('error', (err) => {
        resolve({
          success: false,
          error: err.message,
          command: fullCommand
        });
      });
    });
  }
  
  /**
   * Execute command without password (requires NOPASSWD in sudoers)
   */
  async executeNoPassword(command, options = {}) {
    return this.executeWithPrivilege(command, options);
  }
  
  /**
   * Check sudo-rs availability
   */
  async checkAvailability() {
    const command = await this._detectSudoCommand();
    return {
      available: command !== null,
      command: command,
      isSudoRs: command === 'sudo-rs'
    };
  }
  
  /**
   * Validate sudoers configuration
   */
  async validateSudoers() {
    if (!this.sudoCommand) {
      return { success: false, error: 'No sudo command available' };
    }
    
    const visudoCommand = this.sudoCommand === 'sudo-rs' ? 'visudo-rs' : 'visudo';
    
    return new Promise((resolve) => {
      exec(`${visudoCommand} -c`, (error, stdout, stderr) => {
        resolve({
          success: !error,
          output: stdout,
          error: stderr,
          valid: !error
        });
      });
    });
  }
  
  /**
   * Get sudo version information
   */
  async getVersion() {
    if (!this.sudoCommand) {
      return { success: false, error: 'No sudo command available' };
    }
    
    return new Promise((resolve) => {
      exec(`${this.sudoCommand} --version`, (error, stdout, stderr) => {
        resolve({
          success: !error,
          version: stdout.trim(),
          error: stderr.trim()
        });
      });
    });
  }
}

module.exports = SudoRSExtension;
