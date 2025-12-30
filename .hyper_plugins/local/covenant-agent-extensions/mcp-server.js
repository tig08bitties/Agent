#!/usr/bin/env node
/**
 * MCP Server for Covenant Tools
 * 
 * Model Context Protocol server that exposes Covenant Agent tools
 * to the Cursor-Agent CLI via MCP
 */

const { spawn } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const COVENANT_PATH = process.env.COVENANT_PATH || '/root/Halls of Amenti';
const AGENT_PATH = process.env.AGENT_PATH || '/root/Agent';

/**
 * MCP Server Implementation
 * 
 * This server exposes tools that can be called by the Cursor-Agent CLI
 */
class CovenantMCPServer {
  constructor() {
    this.tools = {
      'rosetta-process': {
        name: 'rosetta-process',
        description: 'Process text through Rosetta Stone bypass relay system',
        inputSchema: {
          type: 'object',
          properties: {
            text: { type: 'string', description: 'Text to process' },
            mode: { type: 'string', enum: ['full', 'forward', 'backward'], default: 'full' }
          },
          required: ['text']
        }
      },
      'agent-execute': {
        name: 'agent-execute',
        description: 'Execute a command through the Covenant Agent',
        inputSchema: {
          type: 'object',
          properties: {
            command: { type: 'string', description: 'Command to execute' },
            args: { type: 'array', items: { type: 'string' }, default: [] }
          },
          required: ['command']
        }
      },
      'file-read': {
        name: 'file-read',
        description: 'Read a file from the filesystem',
        inputSchema: {
          type: 'object',
          properties: {
            path: { type: 'string', description: 'File path to read' }
          },
          required: ['path']
        }
      },
      'file-write': {
        name: 'file-write',
        description: 'Write content to a file',
        inputSchema: {
          type: 'object',
          properties: {
            path: { type: 'string', description: 'File path to write' },
            content: { type: 'string', description: 'Content to write' }
          },
          required: ['path', 'content']
        }
      }
    };
  }
  
  /**
   * Handle MCP request
   */
  async handleRequest(request) {
    const { method, params } = request;
    
    switch (method) {
      case 'tools/list':
        return { tools: Object.values(this.tools) };
      
      case 'tools/call':
        return await this.callTool(params.name, params.arguments);
      
      default:
        return { error: `Unknown method: ${method}` };
    }
  }
  
  /**
   * Call a tool
   */
  async callTool(toolName, args) {
    switch (toolName) {
      case 'rosetta-process':
        return await this.rosettaProcess(args.text, args.mode || 'full');
      
      case 'agent-execute':
        return await this.agentExecute(args.command, args.args || []);
      
      case 'file-read':
        return await this.fileRead(args.path);
      
      case 'file-write':
        return await this.fileWrite(args.path, args.content);
      
      default:
        return { error: `Unknown tool: ${toolName}` };
    }
  }
  
  /**
   * Process text through Rosetta Stone
   */
  async rosettaProcess(text, mode) {
    return new Promise((resolve, reject) => {
      const script = path.join(COVENANT_PATH, 'organized_passport', 'docs', 'covenant_documents', 'bypass_relay_system.py');
      const proc = spawn('python3', [script, text, mode], {
        cwd: COVENANT_PATH
      });
      
      let output = '';
      let error = '';
      
      proc.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      proc.stderr.on('data', (data) => {
        error += data.toString();
      });
      
      proc.on('close', (code) => {
        if (code === 0) {
          resolve({ success: true, result: output.trim() });
        } else {
          reject({ success: false, error: error || 'Process failed' });
        }
      });
    });
  }
  
  /**
   * Execute agent command
   */
  async agentExecute(command, args) {
    return new Promise((resolve, reject) => {
      const proc = spawn('cursor-agent', [command, ...args], {
        cwd: process.cwd()
      });
      
      let output = '';
      let error = '';
      
      proc.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      proc.stderr.on('data', (data) => {
        error += data.toString();
      });
      
      proc.on('close', (code) => {
        resolve({
          success: code === 0,
          output: output.trim(),
          error: error.trim(),
          exitCode: code
        });
      });
    });
  }
  
  /**
   * Read file
   */
  async fileRead(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      return { success: true, content };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  
  /**
   * Write file
   */
  async fileWrite(filePath, content) {
    try {
      await fs.ensureDir(path.dirname(filePath));
      await fs.writeFile(filePath, content, 'utf-8');
      return { success: true, message: `File written: ${filePath}` };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

// MCP Protocol Handler
if (require.main === module) {
  const server = new CovenantMCPServer();
  
  // Read from stdin (MCP protocol)
  let buffer = '';
  process.stdin.on('data', async (data) => {
    buffer += data.toString();
    
    // Try to parse complete JSON requests
    const lines = buffer.split('\n');
    buffer = lines.pop() || ''; // Keep incomplete line in buffer
    
    for (const line of lines) {
      if (line.trim()) {
        try {
          const request = JSON.parse(line);
          const response = await server.handleRequest(request);
          process.stdout.write(JSON.stringify(response) + '\n');
        } catch (error) {
          process.stderr.write(JSON.stringify({ error: error.message }) + '\n');
        }
      }
    }
  });
}

module.exports = CovenantMCPServer;
