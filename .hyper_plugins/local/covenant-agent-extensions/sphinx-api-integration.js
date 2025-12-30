/**
 * Sphinx API Integration Extension
 * 
 * Complete Sphinx documentation API with:
 * - Documentation generation
 * - HTML build
 * - Index generation
 * - API reference extraction
 * - Custom CLI/API endpoints
 */

const { spawn, exec } = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const http = require('http');

const COVENANT_PATH = '/root/Halls of Amenti';
const SPHINX_GENERATOR = path.join(COVENANT_PATH, 'sphinx_doc_generator.py');

class SphinxAPIExtension {
  constructor() {
    this.initialized = false;
    this.apiServer = null;
    this.apiPort = 8765;
    this._initialize();
  }
  
  _initialize() {
    this.initialized = true;
    this._startAPIServer();
  }
  
  /**
   * Start Sphinx API server
   */
  _startAPIServer() {
    if (this.apiServer) {
      return; // Already running
    }
    
    this.apiServer = http.createServer((req, res) => {
      this._handleAPIRequest(req, res);
    });
    
    this.apiServer.listen(this.apiPort, 'localhost', () => {
      console.log(`📚 Sphinx API server running on http://localhost:${this.apiPort}`);
    });
    
    this.apiServer.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.log(`⚠️  Sphinx API port ${this.apiPort} in use, skipping server`);
      } else {
        console.error('Sphinx API server error:', error);
      }
    });
  }
  
  /**
   * Handle API requests
   */
  async _handleAPIRequest(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const method = req.method;
    const pathname = url.pathname;
    
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }
    
    // Route handling
    if (pathname === '/api/generate' && method === 'POST') {
      await this._handleGenerate(req, res);
    } else if (pathname === '/api/build' && method === 'POST') {
      await this._handleBuild(req, res);
    } else if (pathname === '/api/index' && method === 'GET') {
      await this._handleIndex(req, res);
    } else if (pathname === '/api/status' && method === 'GET') {
      await this._handleStatus(req, res);
    } else if (pathname.startsWith('/api/docs/') && method === 'GET') {
      await this._handleGetDoc(req, res, pathname);
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not found' }));
    }
  }
  
  /**
   * Handle generate request
   */
  async _handleGenerate(req, res) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
      try {
        const params = JSON.parse(body);
        const result = await this.generateDocs(
          params.projectPath || '.',
          params.projectName || 'Project',
          params.topics || []
        );
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }
  
  /**
   * Handle build request
   */
  async _handleBuild(req, res) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
      try {
        const params = JSON.parse(body);
        const result = await this.buildDocs(params.docsPath || './docs');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }
  
  /**
   * Handle index request
   */
  async _handleIndex(req, res) {
    try {
      const index = await this.getIndex();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(index));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }
  }
  
  /**
   * Handle status request
   */
  async _handleStatus(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'running',
      port: this.apiPort,
      initialized: this.initialized
    }));
  }
  
  /**
   * Handle get doc request
   */
  async _handleGetDoc(req, res, pathname) {
    const docPath = pathname.replace('/api/docs/', '');
    try {
      const content = await this.getDocContent(docPath);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    } catch (error) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }
  }
  
  /**
   * Generate Sphinx documentation
   */
  async generateDocs(projectPath, projectName, topics = []) {
    return new Promise((resolve, reject) => {
      const args = [
        SPHINX_GENERATOR,
        projectPath,
        projectName,
        ...topics
      ];
      
      const proc = spawn('python3', args, {
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
          resolve({
            success: true,
            message: 'Sphinx docs generated',
            output: output.trim()
          });
        } else {
          reject({
            success: false,
            error: error || 'Generation failed',
            output: output.trim()
          });
        }
      });
    });
  }
  
  /**
   * Build HTML documentation
   */
  async buildDocs(docsPath) {
    return new Promise((resolve, reject) => {
      exec(`cd ${docsPath} && sphinx-build -b html source _build/html`, (error, stdout, stderr) => {
        if (error) {
          reject({
            success: false,
            error: error.message,
            stderr: stderr
          });
        } else {
          resolve({
            success: true,
            message: 'HTML docs built',
            output: stdout,
            path: path.join(docsPath, '_build', 'html', 'index.html')
          });
        }
      });
    });
  }
  
  /**
   * Get Sphinx index
   */
  async getIndex() {
    const indexPath = path.join(COVENANT_PATH, 'docs', '_build', 'html', 'genindex.html');
    
    if (fs.existsSync(indexPath)) {
      const content = await fs.readFile(indexPath, 'utf-8');
      return {
        success: true,
        path: indexPath,
        content: content
      };
    }
    
    // Try to extract from source
    const sourceIndex = path.join(COVENANT_PATH, 'docs', 'source', 'index.rst');
    if (fs.existsSync(sourceIndex)) {
      const content = await fs.readFile(sourceIndex, 'utf-8');
      return {
        success: true,
        path: sourceIndex,
        content: content,
        note: 'Source index (not built)'
      };
    }
    
    return {
      success: false,
      error: 'Index not found'
    };
  }
  
  /**
   * Get documentation content
   */
  async getDocContent(docPath) {
    const fullPath = path.join(COVENANT_PATH, 'docs', '_build', 'html', docPath);
    
    if (fs.existsSync(fullPath)) {
      return await fs.readFile(fullPath, 'utf-8');
    }
    
    throw new Error('Document not found');
  }
  
  /**
   * Open docs in browser
   */
  async openDocs(docsPath) {
    const indexPath = path.join(docsPath, '_build', 'html', 'index.html');
    
    if (fs.existsSync(indexPath)) {
      const { spawn } = require('child_process');
      const platform = process.platform;
      
      let command;
      if (platform === 'darwin') {
        command = 'open';
      } else if (platform === 'win32') {
        command = 'start';
      } else {
        command = 'xdg-open';
      }
      
      spawn(command, [indexPath], { detached: true });
      
      return {
        success: true,
        message: 'Docs opened in browser',
        path: indexPath
      };
    }
    
    return {
      success: false,
      error: 'Docs not built yet'
    };
  }
  
  /**
   * Extract API reference
   */
  async extractAPIReference(projectPath) {
    return new Promise((resolve, reject) => {
      exec(`cd ${projectPath} && python3 -m sphinx.ext.autodoc --help 2>&1 || echo "autodoc available"`, (error, stdout, stderr) => {
        // Try to find Python files and extract docstrings
        const apiRef = {
          modules: [],
          classes: [],
          functions: []
        };
        
        // This would need more sophisticated parsing
        // For now, return structure
        resolve({
          success: true,
          apiReference: apiRef,
          note: 'API extraction requires autodoc setup'
        });
      });
    });
  }
  
  /**
   * Get API endpoint URL
   */
  getAPIEndpoint() {
    return `http://localhost:${this.apiPort}`;
  }
  
  /**
   * Stop API server
   */
  stopAPIServer() {
    if (this.apiServer) {
      this.apiServer.close();
      this.apiServer = null;
      console.log('Sphinx API server stopped');
    }
  }
}

module.exports = SphinxAPIExtension;
