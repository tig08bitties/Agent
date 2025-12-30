/**
 * Hyper-Init Integration
 * 
 * Auto-launches dev servers when Hyper terminal starts
 * Integrates with hyper-init plugin for command execution
 */

const { spawn, exec } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

/**
 * Hyper-Init Extension
 * Manages auto-launch of dev servers via hyper-init
 */
class HyperInitExtension {
  constructor() {
    this.configPath = path.join(require('os').homedir(), '.hyper-init.json');
    this.projects = new Map();
    this.initialized = false;
    this._initialize();
  }
  
  _initialize() {
    // Auto-initialize as passive default
    this.initialized = true;
    this._loadConfig();
  }
  
  _loadConfig() {
    // Load hyper-init configuration
    if (fs.existsSync(this.configPath)) {
      try {
        const config = JSON.parse(fs.readFileSync(this.configPath, 'utf-8'));
        this.config = config;
      } catch (e) {
        this.config = this._createDefaultConfig();
      }
    } else {
      this.config = this._createDefaultConfig();
    }
  }
  
  _createDefaultConfig() {
    return {
      rules: [
        {
          name: 'Auto-launch dev server',
          condition: 'project_has_package_json',
          commands: {
            before: [],
            after: ['npm run dev']
          }
        }
      ],
      projects: []
    };
  }
  
  /**
   * Register project for auto-launch
   */
  async registerProject(projectPath, options = {}) {
    const project = path.resolve(projectPath);
    const projectId = `project_${Date.now()}`;
    
    // Check if package.json exists
    const packageJson = path.join(project, 'package.json');
    if (!fs.existsSync(packageJson)) {
      return { success: false, error: 'No package.json found' };
    }
    
    // Read package.json to find dev script
    const pkg = JSON.parse(fs.readFileSync(packageJson, 'utf-8'));
    const devCommand = pkg.scripts?.dev || 'npm run dev';
    const port = options.port || this._detectPort(project);
    
    const projectConfig = {
      id: projectId,
      path: project,
      devCommand: devCommand,
      port: port,
      autoLaunch: options.autoLaunch !== false,
      browserUrl: `http://localhost:${port}`
    };
    
    this.projects.set(projectId, projectConfig);
    this._saveConfig();
    
    // Auto-launch if enabled
    if (projectConfig.autoLaunch) {
      await this.launchProject(projectId);
    }
    
    return { success: true, projectId, config: projectConfig };
  }
  
  /**
   * Launch project dev server
   */
  async launchProject(projectId) {
    const project = this.projects.get(projectId);
    if (!project) {
      return { success: false, error: 'Project not found' };
    }
    
    return new Promise((resolve, reject) => {
      // Launch dev server
      const dev = spawn('npm', ['run', 'dev'], {
        cwd: project.path,
        stdio: 'pipe',
        shell: true,
        detached: true
      });
      
      let output = '';
      dev.stdout.on('data', (data) => {
        output += data.toString();
        console.log(`[${projectId}]`, data.toString().trim());
      });
      
      dev.stderr.on('data', (data) => {
        output += data.toString();
        console.error(`[${projectId}]`, data.toString().trim());
      });
      
      dev.on('error', (error) => {
        reject({ success: false, error: error.message });
      });
      
      // Store process
      project.process = dev;
      project.status = 'starting';
      
      // Check if server is ready
      const checkReady = setInterval(() => {
        if (output.includes('ready') || output.includes(`localhost:${project.port}`)) {
          clearInterval(checkReady);
          project.status = 'running';
          resolve({
            success: true,
            projectId,
            url: project.browserUrl,
            status: 'running'
          });
        }
      }, 1000);
      
      // Timeout
      setTimeout(() => {
        clearInterval(checkReady);
        if (project.status === 'starting') {
          project.status = 'running';
          resolve({
            success: true,
            projectId,
            url: project.browserUrl,
            status: 'running',
            note: 'Server may still be starting'
          });
        }
      }, 30000);
    });
  }
  
  /**
   * Detect port from project files
   */
  _detectPort(projectPath) {
    // Check common config files
    const files = [
      'next.config.js',
      'vite.config.js',
      'webpack.config.js',
      '.env',
      '.env.local'
    ];
    
    for (const file of files) {
      const filePath = path.join(projectPath, file);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf-8');
        // Try to extract port
        const portMatch = content.match(/port[:\s=]+(\d+)/i);
        if (portMatch) {
          return parseInt(portMatch[1]);
        }
      }
    }
    
    // Default ports
    return 3000; // Next.js, Create React App default
  }
  
  /**
   * Stop project dev server
   */
  async stopProject(projectId) {
    const project = this.projects.get(projectId);
    if (!project) {
      return { success: false, error: 'Project not found' };
    }
    
    if (project.process) {
      project.process.kill();
      project.status = 'stopped';
      return { success: true, message: 'Dev server stopped' };
    }
    
    return { success: false, error: 'No process running' };
  }
  
  /**
   * List registered projects
   */
  listProjects() {
    return Array.from(this.projects.values()).map(p => ({
      id: p.id,
      path: p.path,
      status: p.status || 'registered',
      url: p.browserUrl
    }));
  }
  
  /**
   * Save configuration
   */
  _saveConfig() {
    this.config.projects = Array.from(this.projects.values());
    fs.writeFileSync(this.configPath, JSON.stringify(this.config, null, 2));
  }
}

module.exports = HyperInitExtension;
