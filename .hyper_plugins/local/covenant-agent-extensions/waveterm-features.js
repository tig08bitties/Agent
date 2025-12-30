/**
 * WaveTerm Features Integration for Hyper Terminal
 * 
 * Integrates WaveTerm-inspired features:
 * - CLI Integration (wsh ai equivalent)
 * - File preview system
 * - Command blocks
 * - AI chat widget
 * - File management
 * - Context-aware features
 */

const { spawn, exec } = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const http = require('http');

const COVENANT_PATH = '/root/Halls of Amenti';
const AGENT_PATH = '/root/Agent';

/**
 * WaveTerm CLI Integration Extension
 * Equivalent to wsh ai - pipe output or attach files
 */
class WaveTermCLIExtension {
  constructor() {
    this.initialized = false;
    this._initialize();
  }
  
  _initialize() {
    this.initialized = true;
  }
  
  /**
   * Pipe command output to AI (wsh ai equivalent)
   */
  async pipeToAI(command, files = []) {
    return new Promise((resolve, reject) => {
      // Execute command
      exec(command, { cwd: process.cwd() }, async (error, stdout, stderr) => {
        if (error) {
          reject({ success: false, error: error.message });
          return;
        }
        
        // Prepare context for AI
        const context = {
          command: command,
          output: stdout,
          error: stderr,
          files: []
        };
        
        // Attach files if provided
        for (const file of files) {
          try {
            const content = await fs.readFile(file, 'utf-8');
            context.files.push({
              path: file,
              content: content
            });
          } catch (e) {
            // Skip if file can't be read
          }
        }
        
        // Send to Covenant Agent
        const extensions = global.covenantExtensions;
        if (extensions && extensions.agent) {
          const prompt = `Analyze this command output:\n\nCommand: ${command}\n\nOutput:\n${stdout}\n\n${stderr ? `Errors:\n${stderr}\n` : ''}${files.length > 0 ? `\nAttached files: ${files.join(', ')}` : ''}`;
          
          try {
            const result = await extensions.agent.executeCommand('chat', [prompt]);
            resolve({
              success: true,
              command: command,
              output: stdout,
              analysis: result.output
            });
          } catch (e) {
            resolve({
              success: true,
              command: command,
              output: stdout,
              analysis: 'AI analysis unavailable'
            });
          }
        } else {
          resolve({
            success: true,
            command: command,
            output: stdout,
            context: context
          });
        }
      });
    });
  }
  
  /**
   * Attach files to AI context
   */
  async attachFiles(files, prompt = '') {
    const context = {
      files: [],
      prompt: prompt
    };
    
    for (const file of files) {
      try {
        const content = await fs.readFile(file, 'utf-8');
        context.files.push({
          path: file,
          content: content,
          size: content.length
        });
      } catch (e) {
        context.files.push({
          path: file,
          error: e.message
        });
      }
    }
    
    // Send to Covenant Agent
    const extensions = global.covenantExtensions;
    if (extensions && extensions.agent) {
      const fileContents = context.files.map(f => 
        `File: ${f.path}\n${f.content ? `Content:\n${f.content}` : f.error || ''}`
      ).join('\n\n');
      
      const fullPrompt = `${prompt}\n\n${fileContents}`;
      const result = await extensions.agent.executeCommand('chat', [fullPrompt]);
      
      return {
        success: true,
        files: context.files,
        analysis: result.output
      };
    }
    
    return { success: true, files: context.files };
  }
}

/**
 * File Preview Extension
 * Rich file preview system for various file types
 */
class FilePreviewExtension {
  constructor() {
    this.initialized = false;
    this._initialize();
  }
  
  _initialize() {
    this.initialized = true;
  }
  
  /**
   * Preview file (markdown, images, video, PDF, CSV, directories)
   */
  async previewFile(filePath) {
    const file = path.resolve(filePath);
    
    if (!fs.existsSync(file)) {
      return { success: false, error: 'File not found' };
    }
    
    const stats = fs.statSync(file);
    const ext = path.extname(file).toLowerCase();
    
    if (stats.isDirectory()) {
      return this._previewDirectory(file);
    }
    
    switch (ext) {
      case '.md':
      case '.markdown':
        return this._previewMarkdown(file);
      case '.png':
      case '.jpg':
      case '.jpeg':
      case '.gif':
      case '.webp':
        return this._previewImage(file);
      case '.pdf':
        return this._previewPDF(file);
      case '.csv':
        return this._previewCSV(file);
      case '.json':
        return this._previewJSON(file);
      default:
        return this._previewText(file);
    }
  }
  
  async _previewDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    return {
      success: true,
      type: 'directory',
      path: dirPath,
      files: files.map(f => {
        const fullPath = path.join(dirPath, f);
        const stat = fs.statSync(fullPath);
        return {
          name: f,
          type: stat.isDirectory() ? 'directory' : 'file',
          size: stat.size
        };
      })
    };
  }
  
  async _previewMarkdown(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return {
      success: true,
      type: 'markdown',
      path: filePath,
      content: content,
      rendered: content // Could use markdown parser here
    };
  }
  
  async _previewImage(filePath) {
    return {
      success: true,
      type: 'image',
      path: filePath,
      note: 'Image preview available - open in browser or image viewer'
    };
  }
  
  async _previewPDF(filePath) {
    return {
      success: true,
      type: 'pdf',
      path: filePath,
      note: 'PDF preview - open with system PDF viewer'
    };
  }
  
  async _previewCSV(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n').slice(0, 20); // First 20 lines
    return {
      success: true,
      type: 'csv',
      path: filePath,
      preview: lines,
      totalLines: content.split('\n').length
    };
  }
  
  async _previewJSON(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    try {
      const parsed = JSON.parse(content);
      return {
        success: true,
        type: 'json',
        path: filePath,
        data: parsed,
        formatted: JSON.stringify(parsed, null, 2)
      };
    } catch (e) {
      return {
        success: false,
        error: 'Invalid JSON'
      };
    }
  }
  
  async _previewText(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n').slice(0, 50); // First 50 lines
    return {
      success: true,
      type: 'text',
      path: filePath,
      preview: lines.join('\n'),
      totalLines: content.split('\n').length,
      size: content.length
    };
  }
}

/**
 * Command Blocks Extension
 * Isolate and monitor individual commands
 */
class CommandBlocksExtension {
  constructor() {
    this.blocks = new Map();
    this.initialized = false;
    this._initialize();
  }
  
  _initialize() {
    this.initialized = true;
  }
  
  /**
   * Create command block (isolated command execution)
   */
  async createBlock(command, options = {}) {
    const blockId = `block_${Date.now()}`;
    const autoClose = options.autoClose !== false;
    
    return new Promise((resolve, reject) => {
      const cmd = spawn('bash', ['-c', command], {
        cwd: options.cwd || process.cwd(),
        stdio: 'pipe'
      });
      
      let output = '';
      let error = '';
      
      cmd.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      cmd.stderr.on('data', (data) => {
        error += data.toString();
      });
      
      cmd.on('close', (code) => {
        const block = {
          id: blockId,
          command: command,
          exitCode: code,
          output: output,
          error: error,
          completed: true,
          timestamp: new Date().toISOString()
        };
        
        this.blocks.set(blockId, block);
        
        // Auto-close if enabled
        if (autoClose && code === 0) {
          setTimeout(() => {
            this.blocks.delete(blockId);
          }, 5000);
        }
        
        resolve({ success: true, block });
      });
      
      cmd.on('error', (err) => {
        reject({ success: false, error: err.message });
      });
      
      // Store running block
      this.blocks.set(blockId, {
        id: blockId,
        command: command,
        status: 'running',
        process: cmd
      });
    });
  }
  
  /**
   * Get block status
   */
  getBlock(blockId) {
    return this.blocks.get(blockId) || null;
  }
  
  /**
   * List all blocks
   */
  listBlocks() {
    return Array.from(this.blocks.values());
  }
  
  /**
   * Close block
   */
  closeBlock(blockId) {
    const block = this.blocks.get(blockId);
    if (block && block.process) {
      block.process.kill();
      this.blocks.delete(blockId);
      return { success: true, message: 'Block closed' };
    }
    if (block) {
      this.blocks.delete(blockId);
      return { success: true, message: 'Block removed' };
    }
    return { success: false, error: 'Block not found' };
  }
}

/**
 * AI Chat Widget Extension
 * Multi-model AI chat widget
 */
class AIChatWidgetExtension {
  constructor() {
    this.models = {
      openai: { available: false },
      claude: { available: false },
      azure: { available: false },
      perplexity: { available: false },
      ollama: { available: false },
      covenant: { available: true } // Our Covenant Agent
    };
    this.initialized = false;
    this._initialize();
  }
  
  _initialize() {
    this.initialized = true;
    this._checkModels();
  }
  
  _checkModels() {
    // Check which models are available
    // For now, Covenant Agent is always available
  }
  
  /**
   * Chat with AI model
   */
  async chat(message, model = 'covenant', context = {}) {
    const extensions = global.covenantExtensions;
    
    if (model === 'covenant' && extensions && extensions.agent) {
      // Use Covenant Agent
      const result = await extensions.agent.executeCommand('chat', [message]);
      return {
        success: true,
        model: 'covenant',
        response: result.output,
        context: context
      };
    }
    
    // Other models would go here
    return {
      success: false,
      error: `Model ${model} not available. Use 'covenant' for Covenant Agent.`
    };
  }
  
  /**
   * Chat with context (terminal output, files, etc.)
   */
  async chatWithContext(message, context = {}) {
    const extensions = global.covenantExtensions;
    
    if (extensions && extensions.agent) {
      // Build context string
      let contextStr = message;
      
      if (context.terminalOutput) {
        contextStr += `\n\nTerminal Output:\n${context.terminalOutput}`;
      }
      
      if (context.files && context.files.length > 0) {
        contextStr += `\n\nFiles:\n${context.files.map(f => `- ${f}`).join('\n')}`;
      }
      
      if (context.command) {
        contextStr += `\n\nCommand: ${context.command}`;
      }
      
      const result = await extensions.agent.executeCommand('chat', [contextStr]);
      
      return {
        success: true,
        model: 'covenant',
        response: result.output,
        context: context
      };
    }
    
    return {
      success: false,
      error: 'Covenant Agent not available'
    };
  }
}

/**
 * File Management Extension
 * Connected file management (local, remote, S3)
 */
class FileManagementExtension {
  constructor() {
    this.initialized = false;
    this._initialize();
  }
  
  _initialize() {
    this.initialized = true;
  }
  
  /**
   * Copy file between locations
   */
  async copyFile(source, destination) {
    try {
      await fs.copy(source, destination);
      return { success: true, message: `Copied ${source} to ${destination}` };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  
  /**
   * Sync files
   */
  async syncFiles(source, destination) {
    // Simple sync - copy if source is newer
    try {
      const sourceStat = fs.statSync(source);
      const destExists = fs.existsSync(destination);
      
      if (!destExists || fs.statSync(destination).mtime < sourceStat.mtime) {
        await fs.copy(source, destination);
        return { success: true, message: 'Files synced', action: 'copied' };
      }
      
      return { success: true, message: 'Files in sync', action: 'skipped' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  
  /**
   * List files with details
   */
  async listFiles(dirPath, options = {}) {
    const dir = path.resolve(dirPath);
    const files = fs.readdirSync(dir);
    
    const details = files.map(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      return {
        name: file,
        path: filePath,
        type: stat.isDirectory() ? 'directory' : 'file',
        size: stat.size,
        modified: stat.mtime.toISOString()
      };
    });
    
    return {
      success: true,
      path: dir,
      files: details
    };
  }
}

module.exports = {
  WaveTermCLIExtension,
  FilePreviewExtension,
  CommandBlocksExtension,
  AIChatWidgetExtension,
  FileManagementExtension
};
