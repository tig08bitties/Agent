/**
 * Model Override Extension for Hyper Terminal
 * 
 * Allows switching between different AI models:
 * - Local models (Ollama/LM Studio)
 * - OpenAI
 * - Covenant Agent (default)
 * 
 * Uses API overrides to redirect Cursor-Agent CLI to custom models
 */

const fs = require('fs-extra');
const path = require('path');

const MODEL_CONFIG_PATH = path.join(process.env.HOME, '.cursor', 'model-override.json');
const CURSOR_CONFIG_PATH = path.join(process.env.HOME, '.cursor', 'cli-config.json');

class ModelOverrideExtension {
  constructor() {
    this.initialized = false;
    this.config = null;
    this._initialize();
  }
  
  _initialize() {
    this.loadConfig();
    this.initialized = true;
  }
  
  /**
   * Load model override configuration
   */
  loadConfig() {
    try {
      if (fs.existsSync(MODEL_CONFIG_PATH)) {
        this.config = fs.readJsonSync(MODEL_CONFIG_PATH);
      } else {
        // Default config
        this.config = {
          apiOverrides: {
            enabled: false,
            provider: 'covenant',
            baseUrl: 'local',
            model: 'covenant-agent'
          },
          providers: {
            covenant: {
              baseUrl: 'local',
              models: ['covenant-agent'],
              defaultModel: 'covenant-agent',
              useSovereignAgent: true
            }
          },
          activeProvider: 'covenant',
          activeModel: 'covenant-agent'
        };
        this.saveConfig();
      }
    } catch (error) {
      console.error('Error loading model config:', error);
      this.config = { apiOverrides: { enabled: false } };
    }
  }
  
  /**
   * Save model override configuration
   */
  saveConfig() {
    try {
      fs.ensureDirSync(path.dirname(MODEL_CONFIG_PATH));
      fs.writeJsonSync(MODEL_CONFIG_PATH, this.config, { spaces: 2 });
    } catch (error) {
      console.error('Error saving model config:', error);
    }
  }
  
  /**
   * Switch to a different model provider
   */
  async switchProvider(provider, model = null) {
    if (!this.config.providers[provider]) {
      return { success: false, error: `Provider ${provider} not found` };
    }
    
    const providerConfig = this.config.providers[provider];
    const selectedModel = model || providerConfig.defaultModel;
    
    // Update active provider
    this.config.activeProvider = provider;
    this.config.activeModel = selectedModel;
    
    // Update API overrides if enabled
    if (provider !== 'covenant') {
      this.config.apiOverrides.enabled = true;
      this.config.apiOverrides.provider = provider;
      this.config.apiOverrides.baseUrl = providerConfig.baseUrl;
      this.config.apiOverrides.model = selectedModel;
    } else {
      // Covenant uses local sovereign agent
      this.config.apiOverrides.enabled = false;
    }
    
    this.saveConfig();
    
    // Update Cursor CLI config if needed
    await this._updateCursorConfig(provider, providerConfig);
    
    return {
      success: true,
      provider: provider,
      model: selectedModel,
      message: `Switched to ${provider}/${selectedModel}`
    };
  }
  
  /**
   * Update Cursor CLI configuration
   */
  async _updateCursorConfig(provider, providerConfig) {
    try {
      let cursorConfig = {};
      if (fs.existsSync(CURSOR_CONFIG_PATH)) {
        cursorConfig = fs.readJsonSync(CURSOR_CONFIG_PATH);
      }
      
      // Set model override in Cursor config
      if (provider !== 'covenant' && this.config.apiOverrides.enabled) {
        cursorConfig.apiOverride = {
          baseUrl: providerConfig.baseUrl,
          model: this.config.activeModel
        };
      } else {
        delete cursorConfig.apiOverride;
      }
      
      fs.writeJsonSync(CURSOR_CONFIG_PATH, cursorConfig, { spaces: 2 });
    } catch (error) {
      console.error('Error updating Cursor config:', error);
    }
  }
  
  /**
   * Get current model configuration
   */
  getCurrentModel() {
    return {
      provider: this.config.activeProvider,
      model: this.config.activeModel,
      enabled: this.config.apiOverrides.enabled,
      config: this.config.providers[this.config.activeProvider]
    };
  }
  
  /**
   * List available providers and models
   */
  listProviders() {
    const providers = {};
    for (const [name, config] of Object.entries(this.config.providers)) {
      providers[name] = {
        models: config.models,
        defaultModel: config.defaultModel,
        baseUrl: config.baseUrl
      };
    }
    return providers;
  }
  
  /**
   * Test connection to a provider
   */
  async testProvider(provider) {
    const providerConfig = this.config.providers[provider];
    if (!providerConfig) {
      return { success: false, error: 'Provider not found' };
    }
    
    if (provider === 'covenant') {
      // Covenant is always available (local)
      return { success: true, message: 'Covenant Agent available' };
    }
    
    // Test HTTP connection for other providers
    try {
      const http = require('http');
      const url = require('url');
      const parsed = url.parse(providerConfig.baseUrl);
      
      return new Promise((resolve) => {
        const req = http.request({
          hostname: parsed.hostname,
          port: parsed.port || 80,
          path: '/health',
          method: 'GET',
          timeout: 5000
        }, (res) => {
          resolve({ success: true, status: res.statusCode });
        });
        
        req.on('error', (error) => {
          resolve({ success: false, error: error.message });
        });
        
        req.on('timeout', () => {
          req.destroy();
          resolve({ success: false, error: 'Connection timeout' });
        });
        
        req.end();
      });
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

module.exports = ModelOverrideExtension;
