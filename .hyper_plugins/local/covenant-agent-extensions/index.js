/**
 * Covenant Agent Extensions for Hyper Terminal
 * 
 * PASSIVE DEFAULTS - All extensions auto-load and are always available
 * 
 * Integrates:
 * - Sphinx Documentation API with index (passive default)
 * - GitHub CLI/API for Replit Bots and Cloudagents (passive default)
 * - Jules (Google Jules) integration (passive default)
 * - Covenant Agent CLI/TUI integration (passive default)
 */

const { spawn, exec } = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const os = require('os');

// Extension paths
const COVENANT_PATH = '/root/Halls of Amenti';
const AGENT_PATH = '/root/Agent';
const KEYS_PATH = '/root/Keys';

// Global extensions instance (passive defaults)
let extensions = null;

/**
 * Main Hyper plugin export
 */
module.exports = (app, config, Hyper) => {
  console.log('🐄 Covenant Agent Extensions loaded (Passive Defaults)');
  
  // Initialize extensions as passive defaults (including all features)
  extensions = {
    sphinx: new SphinxExtension(),  // Basic Sphinx extension
    sphinxAPI: new SphinxAPIExtension(),  // Sphinx API server with endpoints
    github: new GitHubExtension(),
    jules: new JulesExtension(),
    rosetta: new RosettaStoneExtension(),  // Rosetta Stone integration
    hyperbrowser: new HyperbrowserExtension(),  // Hyperbrowser headless browser sessions
    hyperinit: new HyperInitExtension(),  // Hyper-Init dev server auto-launch
    visual: new VisualFeedbackExtension(),  // Visual feedback and hot-reload
    waveterm: new WaveTermCLIExtension(),  // WaveTerm CLI integration (wsh ai equivalent)
    preview: new FilePreviewExtension(),  // File preview system
    blocks: new CommandBlocksExtension(),  // Command blocks
    aichat: new AIChatWidgetExtension(),  // AI chat widget
    files: new FileManagementExtension(),  // File management
    model: new ModelOverrideExtension(),  // Model override (Ollama/LM Studio/OpenAI)
    sudors: new SudoRSExtension(),  // sudo-rs integration (memory-safe privilege escalation)
    agent: new AgentExtension()
  };
  
  // Auto-initialize all extensions (passive defaults)
  initializePassiveDefaults(app, extensions);
  
  // Register commands (for explicit use if needed)
  registerCommands(app, extensions);
  
  // Register key bindings
  registerKeyBindings(app, extensions);
  
  // Register Rosetta Stone commands
  registerRosettaCommands(app, extensions);
  
  // Register Hyperbrowser commands
  registerHyperbrowserCommands(app, extensions);
  
  // Register Hyper-Init commands
  registerHyperInitCommands(app, extensions);
  
  // Register WaveTerm feature commands
  registerWaveTermCommands(app, extensions);
  
  // Register model override commands
  registerModelCommands(app, extensions);
  
  // Register Sphinx API commands
  registerSphinxAPICommands(app, extensions);
  
  // Register sudo-rs commands
  registerSudoRSCommands(app, extensions);
  
  // Auto-launch agent on terminal session start
  app.on('session-add', () => {
    autoLaunchAgent(app, extensions);
  });
  
  // Also try on app ready
  if (app.window) {
    setTimeout(() => {
      autoLaunchAgent(app, extensions);
    }, 2000); // Delay to ensure terminal is ready
  }
  
  return extensions;
};

/**
 * Initialize passive defaults - all extensions available automatically
 */
function initializePassiveDefaults(app, extensions) {
  console.log('✅ Initializing passive defaults...');
  
  // All extensions are now passive defaults - available automatically
  // No explicit initialization needed - they're ready to use
  
  // Make extensions globally available
  global.covenantExtensions = extensions;
  
  console.log('✅ Passive defaults initialized:');
  console.log('   - Sphinx Extension: Ready');
  console.log('   - Sphinx API Extension: Ready (http://localhost:8765)');
  console.log('   - GitHub Extension: Ready');
  console.log('   - Jules Extension: Ready');
  console.log('   - Rosetta Stone Extension: Ready (Bypass Relays)');
  console.log('   - Hyperbrowser Extension: Ready (Headless Browser Sessions)');
  console.log('   - Hyper-Init Extension: Ready (Dev Server Auto-Launch)');
  console.log('   - Visual Feedback Extension: Ready (Hot-Reload & UI Reporting)');
  console.log('   - WaveTerm CLI Extension: Ready (wsh ai equivalent)');
  console.log('   - File Preview Extension: Ready (Rich file previews)');
  console.log('   - Command Blocks Extension: Ready (Isolated commands)');
  console.log('   - AI Chat Widget Extension: Ready (Multi-model chat)');
  console.log('   - File Management Extension: Ready (File operations)');
  console.log('   - Model Override Extension: Ready (Local models, API overrides)');
  console.log('   - sudo-rs Extension: Ready (Memory-safe privilege escalation)');
  console.log('   - Agent Extension: Ready');
}

/**
 * Auto-launch Covenant Agent on terminal startup
 */
function autoLaunchAgent(app, extensions) {
  // Check if this is the first session (after reboot)
  const firstLaunchFlag = path.join(os.homedir(), '.hyper_agent_launched');
  const rebootFlag = '/tmp/hyper_reboot_flag';
  
  // Check if system just rebooted (check /tmp for reboot flag)
  fs.pathExists(rebootFlag).then(justRebooted => {
    if (!justRebooted) {
      // Create reboot flag (will be cleared on next reboot)
      fs.writeFile(rebootFlag, new Date().toISOString()).catch(() => {});
      
      // Check if agent was already launched
      fs.pathExists(firstLaunchFlag).then(exists => {
        if (!exists) {
          // First launch after reboot - launch agent
          console.log('🚀 Auto-launching Covenant Agent (first launch after reboot)...');
          
          // Mark as launched
          fs.writeFile(firstLaunchFlag, new Date().toISOString()).catch(() => {});
          
          // Launch agent by sending command to terminal
          setTimeout(() => {
            // Send command to active terminal session
            if (app.window && app.window.rpc) {
              // Use Hyper's RPC to send command
              try {
                app.window.rpc.emit('session data', {
                  data: 'cursor-agent chariot\n',
                  session: app.window.sessions.activeUid
                });
              } catch (e) {
                // Fallback: use spawn
                launchAgentChariot(extensions);
              }
            } else {
              // Fallback: use spawn
              launchAgentChariot(extensions);
            }
          }, 2000); // Delay to ensure terminal is ready
        } else {
          console.log('✅ Covenant Agent ready (use "cursor-agent chariot" to launch)');
        }
      }).catch(() => {
        // If check fails, try to launch anyway
        launchAgentChariot(extensions);
      });
    } else {
      // Not first launch after reboot
      console.log('✅ Covenant Agent ready (use "cursor-agent chariot" to launch)');
    }
  }).catch(() => {
    // If check fails, try to launch anyway
    launchAgentChariot(extensions);
  });
}

/**
 * Launch Agent Chariot
 */
function launchAgentChariot(extensions) {
  const agentCommand = path.join(AGENT_PATH, 'cursor-agent');
  
  // Spawn agent in interactive mode
  const agent = spawn(agentCommand, ['chariot'], {
    cwd: AGENT_PATH,
    stdio: 'inherit',
    shell: true,
    detached: false
  });
  
  agent.on('error', (error) => {
    console.error('❌ Failed to launch agent:', error.message);
  });
  
  agent.on('close', (code) => {
    console.log('👋 Agent session ended');
  });
}

/**
 * Sphinx Documentation Extension (Passive Default)
 */
class SphinxExtension {
  constructor() {
    this.sphinxPath = path.join(COVENANT_PATH, 'sphinx_doc_generator.py');
    this.docsPath = path.join(COVENANT_PATH, 'docs');
    this.initialized = false;
    this._initialize();
  }
  
  _initialize() {
    // Auto-initialize as passive default
    this.initialized = true;
  }
  
  async generateDocs(projectPath, projectName, topics = []) {
    return new Promise((resolve, reject) => {
      const args = [
        this.sphinxPath,
        projectPath || '.',
        projectName || 'Project',
        ...topics
      ];
      
      const python = spawn('python3', args, {
        cwd: COVENANT_PATH,
        stdio: 'inherit'
      });
      
      python.on('close', (code) => {
        if (code === 0) {
          resolve({ success: true, message: 'Sphinx docs generated' });
        } else {
          reject({ success: false, error: `Process exited with code ${code}` });
        }
      });
    });
  }
  
  async buildHTML(docsPath = null) {
    const docs = docsPath || this.docsPath;
    return new Promise((resolve, reject) => {
      exec(`cd ${docs} && sphinx-build -b html source _build/html`, (error, stdout, stderr) => {
        if (error) {
          reject({ success: false, error: error.message });
        } else {
          resolve({ success: true, message: 'HTML docs built', output: stdout });
        }
      });
    });
  }
  
  async openDocs(docsPath = null) {
    const docs = docsPath || this.docsPath;
    const indexPath = path.join(docs, '_build', 'html', 'index.html');
    
    if (await fs.pathExists(indexPath)) {
      const open = os.platform() === 'darwin' ? 'open' : 
                   os.platform() === 'win32' ? 'start' : 'xdg-open';
      exec(`${open} ${indexPath}`);
      return { success: true, message: 'Opening documentation' };
    } else {
      return { success: false, error: 'Documentation not built. Run buildHTML() first.' };
    }
  }
  
  async getIndex(docsPath = null) {
    const docs = docsPath || this.docsPath;
    const indexPath = path.join(docs, 'source', 'index.rst');
    
    if (await fs.pathExists(indexPath)) {
      const content = await fs.readFile(indexPath, 'utf-8');
      return { success: true, content };
    } else {
      return { success: false, error: 'Index file not found' };
    }
  }
}

/**
 * GitHub Extension for Replit Bots and Cloudagents (Passive Default)
 */
class GitHubExtension {
  constructor() {
    this.githubPath = path.join(COVENANT_PATH, 'github_integration.py');
    this.username = 'tig08bitties';
    this.initialized = false;
    this._initialize();
  }
  
  _initialize() {
    // Auto-initialize as passive default
    this.initialized = true;
  }
  
  async listReplitBots(username = null) {
    return new Promise((resolve, reject) => {
      const args = [
        this.githubPath,
        'find_replit_bots',
        username || this.username
      ];
      
      const python = spawn('python3', args, {
        cwd: COVENANT_PATH,
        stdio: 'pipe'
      });
      
      let output = '';
      python.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      python.on('close', (code) => {
        if (code === 0) {
          try {
            const bots = JSON.parse(output);
            resolve({ success: true, bots });
          } catch (e) {
            resolve({ success: true, bots: [], raw: output });
          }
        } else {
          reject({ success: false, error: `Process exited with code ${code}` });
        }
      });
    });
  }
  
  async listCloudagents(username = null) {
    return new Promise((resolve, reject) => {
      const args = [
        this.githubPath,
        'find_cloudagents',
        username || this.username
      ];
      
      const python = spawn('python3', args, {
        cwd: COVENANT_PATH,
        stdio: 'pipe'
      });
      
      let output = '';
      python.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      python.on('close', (code) => {
        if (code === 0) {
          try {
            const agents = JSON.parse(output);
            resolve({ success: true, agents });
          } catch (e) {
            resolve({ success: true, agents: [], raw: output });
          }
        } else {
          reject({ success: false, error: `Process exited with code ${code}` });
        }
      });
    });
  }
  
  async cloneRepo(owner, repo, targetPath) {
    return new Promise((resolve, reject) => {
      exec(`cd ${targetPath} && git clone https://github.com/${owner}/${repo}.git`, (error, stdout, stderr) => {
        if (error) {
          reject({ success: false, error: error.message });
        } else {
          resolve({ success: true, message: `Cloned ${owner}/${repo}` });
        }
      });
    });
  }
  
  async getRepoInfo(owner, repo) {
    return new Promise((resolve, reject) => {
      const args = [
        this.githubPath,
        'get_repo',
        owner,
        repo
      ];
      
      const python = spawn('python3', args, {
        cwd: COVENANT_PATH,
        stdio: 'pipe'
      });
      
      let output = '';
      python.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      python.on('close', (code) => {
        if (code === 0) {
          try {
            const info = JSON.parse(output);
            resolve({ success: true, info });
          } catch (e) {
            resolve({ success: true, info: {}, raw: output });
          }
        } else {
          reject({ success: false, error: `Process exited with code ${code}` });
        }
      });
    });
  }
}

/**
 * Jules (Google Jules) Extension (Passive Default)
 */
class JulesExtension {
  constructor() {
    this.julesPath = path.join(COVENANT_PATH, 'jules_integration.py');
    this.initialized = false;
    this._initialize();
  }
  
  _initialize() {
    // Auto-initialize as passive default
    this.initialized = true;
  }
  
  async analyzeCode(code, language = 'python') {
    return new Promise((resolve, reject) => {
      const args = [
        this.julesPath,
        'analyze',
        code,
        language
      ];
      
      const python = spawn('python3', args, {
        cwd: COVENANT_PATH,
        stdio: 'pipe'
      });
      
      let output = '';
      python.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      python.on('close', (code) => {
        if (code === 0) {
          resolve({ success: true, analysis: output });
        } else {
          reject({ success: false, error: `Process exited with code ${code}` });
        }
      });
    });
  }
  
  async generateDocs(code, format = 'markdown') {
    return new Promise((resolve, reject) => {
      const args = [
        this.julesPath,
        'generate_docs',
        code,
        format
      ];
      
      const python = spawn('python3', args, {
        cwd: COVENANT_PATH,
        stdio: 'pipe'
      });
      
      let output = '';
      python.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      python.on('close', (code) => {
        if (code === 0) {
          resolve({ success: true, docs: output });
        } else {
          reject({ success: false, error: `Process exited with code ${code}` });
        }
      });
    });
  }
  
  async chat(message) {
    return new Promise((resolve, reject) => {
      const args = [
        this.julesPath,
        'chat',
        message
      ];
      
      const python = spawn('python3', args, {
        cwd: COVENANT_PATH,
        stdio: 'pipe'
      });
      
      let output = '';
      python.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      python.on('close', (code) => {
        if (code === 0) {
          resolve({ success: true, response: output });
        } else {
          reject({ success: false, error: `Process exited with code ${code}` });
        }
      });
    });
  }
}

// Import Rosetta Stone Extension
const RosettaStoneExtension = require('./rosetta-integration');

// Import Hyperbrowser Extension
const HyperbrowserExtension = require('./hyperbrowser-integration');

// Import Hyper-Init Extension
const HyperInitExtension = require('./hyper-init-integration');

// Import Visual Feedback Extension
const VisualFeedbackExtension = require('./visual-feedback');

// Import WaveTerm Features
const {
  WaveTermCLIExtension,
  FilePreviewExtension,
  CommandBlocksExtension,
  AIChatWidgetExtension,
  FileManagementExtension
} = require('./waveterm-features');

// Import Model Override Extension
const ModelOverrideExtension = require('./model-override');

// Import Sphinx API Extension
const SphinxAPIExtension = require('./sphinx-api-integration');

// Import sudo-rs Extension
const SudoRSExtension = require('./sudo-rs-integration');

/**
 * Covenant Agent Extension (Passive Default)
 */
class AgentExtension {
  constructor() {
    this.agentPath = path.join(AGENT_PATH, 'covenant_agent_cli.py');
    this.agentCommand = path.join(AGENT_PATH, 'cursor-agent');
    this.initialized = false;
    this._initialize();
  }
  
  _initialize() {
    // Auto-initialize as passive default
    this.initialized = true;
  }
  
  async launchChariot() {
    return new Promise((resolve, reject) => {
      const agent = spawn(this.agentCommand, ['chariot'], {
        cwd: AGENT_PATH,
        stdio: 'inherit',
        shell: true
      });
      
      agent.on('close', (code) => {
        resolve({ success: true, message: 'Agent session ended' });
      });
      
      agent.on('error', (error) => {
        reject({ success: false, error: error.message });
      });
    });
  }
  
  async launchTUI() {
    return new Promise((resolve, reject) => {
      const agent = spawn(this.agentCommand, ['tui'], {
        cwd: AGENT_PATH,
        stdio: 'inherit',
        shell: true
      });
      
      agent.on('close', (code) => {
        resolve({ success: true, message: 'TUI session ended' });
      });
      
      agent.on('error', (error) => {
        reject({ success: false, error: error.message });
      });
    });
  }
  
  async executeCommand(command, args = []) {
    return new Promise((resolve, reject) => {
      const agent = spawn(this.agentCommand, [command, ...args], {
        cwd: AGENT_PATH,
        stdio: 'pipe'
      });
      
      let output = '';
      agent.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      agent.stderr.on('data', (data) => {
        output += data.toString();
      });
      
      agent.on('close', (code) => {
        resolve({ success: code === 0, output });
      });
      
      agent.on('error', (error) => {
        reject({ success: false, error: error.message });
      });
    });
  }
}

/**
 * Register Hyper commands (for explicit use if needed)
 */
function registerCommands(app, extensions) {
  // Commands available but not required - extensions are passive defaults
  app.commands.registerCommand('covenant:sphinx:generate', async (projectPath, projectName, ...topics) => {
    try {
      const result = await extensions.sphinx.generateDocs(projectPath, projectName, topics);
      console.log('✅', result.message);
    } catch (error) {
      console.error('❌', error.error);
    }
  });
  
  app.commands.registerCommand('covenant:agent:chariot', async () => {
    await extensions.agent.launchChariot();
  });
}

/**
 * Register Rosetta Stone commands
 */
function registerRosettaCommands(app, extensions) {
  // Process text through Rosetta Stone
  app.commands.registerCommand('covenant:rosetta:process', async (text, mode) => {
    try {
      const result = await extensions.rosetta.process(text || '', mode || 'full');
      console.log('🔮 Rosetta Stone Result:');
      if (result.forward_narrative) {
        console.log('Forward:', result.forward_narrative.join('\n'));
      }
      if (result.backward_narrative) {
        console.log('Backward:', result.backward_narrative.join('\n'));
      }
      if (result.narrative) {
        console.log('Narrative:', result.narrative);
      }
    } catch (error) {
      console.error('❌', error.error);
    }
  });
  
  // Process with default agent (includes Rosetta Stone)
  app.commands.registerCommand('covenant:rosetta:agent', async (text) => {
    try {
      const result = await extensions.rosetta.processWithDefaultAgent(text || '');
      console.log('🔮 Agent Result:', result.output || result);
    } catch (error) {
      console.error('❌', error.error);
    }
  });
}

/**
 * Register Hyperbrowser commands
 */
function registerHyperbrowserCommands(app, extensions) {
  // Launch browser session
  app.commands.registerCommand('covenant:hyperbrowser:launch', async (url) => {
    try {
      const result = await extensions.hyperbrowser.launchSession(url || 'http://localhost:3000');
      console.log('🌐 Browser Session:', result.sessionId);
      console.log('   URL:', result.session.url);
    } catch (error) {
      console.error('❌', error.error);
    }
  });
  
  // Monitor dev server with browser
  app.commands.registerCommand('covenant:hyperbrowser:monitor', async (projectPath, port) => {
    try {
      const result = await extensions.hyperbrowser.monitorDevServer(projectPath || '.', port || 3000);
      console.log('🌐 Dev Server Monitoring:');
      console.log('   Project:', result.sessionId);
      console.log('   URL:', result.url);
      console.log('   Browser Session:', result.browserSession.sessionId);
    } catch (error) {
      console.error('❌', error.error);
    }
  });
  
  // Report on UI
  app.commands.registerCommand('covenant:hyperbrowser:report', async (sessionId) => {
    try {
      const result = await extensions.hyperbrowser.reportUI(sessionId);
      console.log('📊 UI Report:', result);
    } catch (error) {
      console.error('❌', error.error);
    }
  });
}

/**
 * Register Hyper-Init commands
 */
function registerHyperInitCommands(app, extensions) {
  // Register project for auto-launch
  app.commands.registerCommand('covenant:hyperinit:register', async (projectPath, port) => {
    try {
      const result = await extensions.hyperinit.registerProject(projectPath || '.', { port: port || 3000 });
      console.log('🚀 Project Registered:', result.projectId);
      console.log('   Path:', result.config.path);
      console.log('   URL:', result.config.browserUrl);
    } catch (error) {
      console.error('❌', error.error);
    }
  });
  
  // Launch project
  app.commands.registerCommand('covenant:hyperinit:launch', async (projectId) => {
    try {
      const result = await extensions.hyperinit.launchProject(projectId);
      console.log('🚀 Dev Server Launched:', result.url);
    } catch (error) {
      console.error('❌', error.error);
    }
  });
  
  // List projects
  app.commands.registerCommand('covenant:hyperinit:list', async () => {
    try {
      const projects = extensions.hyperinit.listProjects();
      console.log('📋 Registered Projects:');
      projects.forEach(p => {
        console.log(`   ${p.id}: ${p.path} (${p.status}) - ${p.url}`);
      });
    } catch (error) {
      console.error('❌', error.error);
    }
  });
}

/**
 * Register key bindings
 */
function registerKeyBindings(app, extensions) {
  // Ctrl+Shift+A: Launch Agent Chariot
  app.keymaps.on('ctrl+shift+a', () => {
    app.commands.executeCommand('covenant:agent:chariot');
  });
  
  // Ctrl+Shift+R: Process through Rosetta Stone
  app.keymaps.on('ctrl+shift+r', () => {
    // Get selected text or prompt for input
    app.commands.executeCommand('covenant:rosetta:process', '', 'full');
  });
  
  // Ctrl+Shift+B: Launch browser session
  app.keymaps.on('ctrl+shift+b', () => {
    app.commands.executeCommand('covenant:hyperbrowser:launch', 'http://localhost:3000');
  });
  
  // Ctrl+Shift+D: Monitor dev server
  app.keymaps.on('ctrl+shift+d', () => {
    app.commands.executeCommand('covenant:hyperbrowser:monitor', '.', 3000);
  });
  
  // Ctrl+Shift+P: Preview file
  app.keymaps.on('ctrl+shift+p', () => {
    app.commands.executeCommand('covenant:preview:file', '.');
  });
  
  // Ctrl+Shift+C: Create command block
  app.keymaps.on('ctrl+shift+c', () => {
    app.commands.executeCommand('covenant:blocks:create', '');
  });
  
  // Ctrl+Shift+M: Switch model
  app.keymaps.on('ctrl+shift+m', () => {
    app.commands.executeCommand('covenant:model:switch', '');
  });
}

/**
 * Register model override commands
 */
function registerModelCommands(app, extensions) {
  // Switch model provider
  app.commands.registerCommand('covenant:model:switch', async (provider, model) => {
    try {
      const result = await extensions.model.switchProvider(provider || 'covenant', model);
      console.log('✅', result.message);
      console.log('Provider:', result.provider);
      console.log('Model:', result.model);
    } catch (error) {
      console.error('❌', error.error);
    }
  });
  
  // List providers
  app.commands.registerCommand('covenant:model:list', async () => {
    try {
      const providers = extensions.model.listProviders();
      const current = extensions.model.getCurrentModel();
      
      console.log('📋 Available Providers:');
      for (const [name, config] of Object.entries(providers)) {
        const marker = current.provider === name ? '✅' : '  ';
        console.log(`${marker} ${name}`);
        console.log(`   Models: ${config.models.join(', ')}`);
        console.log(`   Base URL: ${config.baseUrl}`);
        console.log('');
      }
      console.log(`Current: ${current.provider}/${current.model}`);
    } catch (error) {
      console.error('❌', error.message);
    }
  });
  
  // Test provider
  app.commands.registerCommand('covenant:model:test', async (provider) => {
    try {
      const result = await extensions.model.testProvider(provider || 'covenant');
      if (result.success) {
        console.log('✅', result.message || 'Connection successful');
      } else {
        console.log('❌', result.error);
      }
    } catch (error) {
      console.error('❌', error.message);
    }
  });
  
  // Get current model
  app.commands.registerCommand('covenant:model:current', async () => {
    try {
      const current = extensions.model.getCurrentModel();
      console.log('🧠 Current Model:');
      console.log(`   Provider: ${current.provider}`);
      console.log(`   Model: ${current.model}`);
      console.log(`   API Override: ${current.enabled ? 'Enabled' : 'Disabled'}`);
      if (current.config) {
        console.log(`   Base URL: ${current.config.baseUrl}`);
      }
    } catch (error) {
      console.error('❌', error.message);
    }
  });
}

/**
 * Register Sphinx API commands
 */
function registerSphinxAPICommands(app, extensions) {
  // Sphinx API status
  app.commands.registerCommand('covenant:sphinx:api:status', async () => {
    try {
      const status = {
        running: extensions.sphinxAPI.apiServer !== null,
        port: extensions.sphinxAPI.apiPort,
        endpoint: extensions.sphinxAPI.getAPIEndpoint()
      };
      console.log('📚 Sphinx API Status:');
      console.log(`   Running: ${status.running ? 'Yes' : 'No'}`);
      console.log(`   Port: ${status.port}`);
      console.log(`   Endpoint: ${status.endpoint}`);
    } catch (error) {
      console.error('❌', error.message);
    }
  });
  
  // Generate docs via API
  app.commands.registerCommand('covenant:sphinx:api:generate', async (projectPath, projectName, ...topics) => {
    try {
      const result = await extensions.sphinxAPI.generateDocs(
        projectPath || '.',
        projectName || 'Project',
        topics
      );
      console.log('✅', result.message);
      if (result.output) {
        console.log(result.output);
      }
    } catch (error) {
      console.error('❌', error.error || error.message);
    }
  });
  
  // Build docs via API
  app.commands.registerCommand('covenant:sphinx:api:build', async (docsPath) => {
    try {
      const result = await extensions.sphinxAPI.buildDocs(docsPath || './docs');
      console.log('✅', result.message);
      console.log('Path:', result.path);
    } catch (error) {
      console.error('❌', error.error || error.message);
    }
  });
  
  // Get index via API
  app.commands.registerCommand('covenant:sphinx:api:index', async () => {
    try {
      const result = await extensions.sphinxAPI.getIndex();
      if (result.success) {
        console.log('📑 Sphinx Index:');
        console.log(`   Path: ${result.path}`);
        console.log(`   ${result.note || 'Built and ready'}`);
      } else {
        console.log('❌', result.error);
      }
    } catch (error) {
      console.error('❌', error.message);
    }
  });
  
  // Open docs
  app.commands.registerCommand('covenant:sphinx:api:open', async (docsPath) => {
    try {
      const result = await extensions.sphinxAPI.openDocs(docsPath || './docs');
      if (result.success) {
        console.log('✅', result.message);
        console.log('Path:', result.path);
      } else {
        console.log('❌', result.error);
      }
    } catch (error) {
      console.error('❌', error.message);
    }
  });
}

/**
 * Register sudo-rs commands
 */
function registerSudoRSCommands(app, extensions) {
  // Check sudo-rs availability
  app.commands.registerCommand('covenant:sudors:check', async () => {
    try {
      const result = await extensions.sudors.checkAvailability();
      console.log('🔐 sudo-rs Status:');
      console.log(`   Available: ${result.available ? 'Yes' : 'No'}`);
      console.log(`   Command: ${result.command || 'None'}`);
      console.log(`   Using sudo-rs: ${result.isSudoRs ? 'Yes' : 'No'}`);
    } catch (error) {
      console.error('❌', error.message);
    }
  });
  
  // Execute with privilege
  app.commands.registerCommand('covenant:sudors:exec', async (command) => {
    try {
      if (!command) {
        console.log('Usage: covenant:sudors:exec [command]');
        return;
      }
      const result = await extensions.sudors.executeWithPrivilege(command);
      if (result.success) {
        console.log('✅ Command executed successfully');
        if (result.output) {
          console.log(result.output);
        }
      } else {
        console.log('❌ Command failed');
        if (result.error) {
          console.log('Error:', result.error);
        }
      }
    } catch (error) {
      console.error('❌', error.message);
    }
  });
  
  // Validate sudoers
  app.commands.registerCommand('covenant:sudors:validate', async () => {
    try {
      const result = await extensions.sudors.validateSudoers();
      if (result.success && result.valid) {
        console.log('✅ Sudoers configuration is valid');
      } else {
        console.log('❌ Sudoers configuration has errors');
        if (result.error) {
          console.log('Error:', result.error);
        }
      }
    } catch (error) {
      console.error('❌', error.message);
    }
  });
  
  // Get version
  app.commands.registerCommand('covenant:sudors:version', async () => {
    try {
      const result = await extensions.sudors.getVersion();
      if (result.success) {
        console.log('📋 Version Information:');
        console.log(result.version);
      } else {
        console.log('❌', result.error);
      }
    } catch (error) {
      console.error('❌', error.message);
    }
  });
}

/**
 * Register WaveTerm feature commands
 */
function registerWaveTermCommands(app, extensions) {
  // CLI Integration - Pipe to AI
  app.commands.registerCommand('covenant:waveterm:pipe', async (command, ...files) => {
    try {
      const result = await extensions.waveterm.pipeToAI(command, files);
      console.log('📊 Command Analysis:');
      console.log('Command:', result.command);
      console.log('Output:', result.output);
      if (result.analysis) {
        console.log('AI Analysis:', result.analysis);
      }
    } catch (error) {
      console.error('❌', error.error);
    }
  });
  
  // Attach files to AI
  app.commands.registerCommand('covenant:waveterm:attach', async (prompt, ...files) => {
    try {
      const result = await extensions.waveterm.attachFiles(files, prompt);
      console.log('📎 Files Attached:', result.files.length);
      if (result.analysis) {
        console.log('AI Analysis:', result.analysis);
      }
    } catch (error) {
      console.error('❌', error.error);
    }
  });
  
  // Preview file
  app.commands.registerCommand('covenant:preview:file', async (filePath) => {
    try {
      const result = await extensions.preview.previewFile(filePath || '.');
      console.log('📄 File Preview:', result.type);
      if (result.preview) {
        console.log(result.preview);
      } else if (result.files) {
        result.files.forEach(f => console.log(`  ${f.type === 'directory' ? '📁' : '📄'} ${f.name}`));
      }
    } catch (error) {
      console.error('❌', error.error);
    }
  });
  
  // Create command block
  app.commands.registerCommand('covenant:blocks:create', async (command) => {
    try {
      const result = await extensions.blocks.createBlock(command || 'echo "Command block"');
      console.log('📦 Command Block:', result.block.id);
      console.log('Command:', result.block.command);
      console.log('Status:', result.block.status || 'completed');
    } catch (error) {
      console.error('❌', error.error);
    }
  });
  
  // List command blocks
  app.commands.registerCommand('covenant:blocks:list', async () => {
    try {
      const blocks = extensions.blocks.listBlocks();
      console.log('📦 Command Blocks:', blocks.length);
      blocks.forEach(block => {
        console.log(`  ${block.id}: ${block.command} (${block.status || 'completed'})`);
      });
    } catch (error) {
      console.error('❌', error.error);
    }
  });
  
  // AI Chat
  app.commands.registerCommand('covenant:aichat:chat', async (message, model) => {
    try {
      const result = await extensions.aichat.chat(message || '', model || 'covenant');
      console.log('💬 AI Response:', result.response);
    } catch (error) {
      console.error('❌', error.error);
    }
  });
  
  // File management
  app.commands.registerCommand('covenant:files:copy', async (source, destination) => {
    try {
      const result = await extensions.files.copyFile(source, destination);
      console.log('✅', result.message);
    } catch (error) {
      console.error('❌', error.error);
    }
  });
  
  app.commands.registerCommand('covenant:files:list', async (dirPath) => {
    try {
      const result = await extensions.files.listFiles(dirPath || '.');
      console.log('📁 Files in', result.path + ':');
      result.files.forEach(f => {
        console.log(`  ${f.type === 'directory' ? '📁' : '📄'} ${f.name} (${f.size} bytes)`);
      });
    } catch (error) {
      console.error('❌', error.error);
    }
  });
}

// Export extensions for direct use
module.exports.extensions = {
  SphinxExtension,
  SphinxAPIExtension,
  GitHubExtension,
  JulesExtension,
  RosettaStoneExtension,
  HyperbrowserExtension,
  HyperInitExtension,
  VisualFeedbackExtension,
  WaveTermCLIExtension,
  FilePreviewExtension,
  CommandBlocksExtension,
  AIChatWidgetExtension,
  FileManagementExtension,
  ModelOverrideExtension,
  SudoRSExtension,
  AgentExtension
};
