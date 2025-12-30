#!/usr/bin/env node
/**
 * Core Agent CLI
 * 
 * Personal AI agent CLI wrapper around Cursor-Agent
 * Allows model switching, MCP integration, and custom workflows
 */

const { program } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const { spawn } = require('child_process');

const MODEL_CONFIG_PATH = path.join(process.env.HOME, '.cursor', 'model-override.json');

program
  .name('core-agent')
  .description('Personal AI agent CLI - un-nukeable core agent')
  .version('1.0.0');

// Switch model provider
program
  .command('switch')
  .description('Switch AI model provider')
  .argument('<provider>', 'Provider name (covenant, ollama, lmstudio, openai)')
  .argument('[model]', 'Model name (optional)')
  .action(async (provider, model) => {
    try {
      const config = await fs.readJson(MODEL_CONFIG_PATH);
      const providerConfig = config.providers[provider];
      
      if (!providerConfig) {
        console.error(`❌ Provider ${provider} not found`);
        process.exit(1);
      }
      
      const selectedModel = model || providerConfig.defaultModel;
      
      // Update config
      config.activeProvider = provider;
      config.activeModel = selectedModel;
      
      if (provider !== 'covenant') {
        config.apiOverrides.enabled = true;
        config.apiOverrides.provider = provider;
        config.apiOverrides.baseUrl = providerConfig.baseUrl;
        config.apiOverrides.model = selectedModel;
      } else {
        config.apiOverrides.enabled = false;
      }
      
      await fs.writeJson(MODEL_CONFIG_PATH, config, { spaces: 2 });
      
      console.log(`✅ Switched to ${provider}/${selectedModel}`);
    } catch (error) {
      console.error('❌ Error:', error.message);
      process.exit(1);
    }
  });

// List available providers
program
  .command('providers')
  .description('List available AI providers')
  .action(async () => {
    try {
      const config = await fs.readJson(MODEL_CONFIG_PATH);
      console.log('\n📋 Available Providers:\n');
      
      for (const [name, providerConfig] of Object.entries(config.providers)) {
        const isActive = config.activeProvider === name;
        const marker = isActive ? '✅' : '  ';
        console.log(`${marker} ${name}`);
        console.log(`   Models: ${providerConfig.models.join(', ')}`);
        console.log(`   Base URL: ${providerConfig.baseUrl}`);
        if (isActive) {
          console.log(`   Active Model: ${config.activeModel}`);
        }
        console.log('');
      }
    } catch (error) {
      console.error('❌ Error:', error.message);
      process.exit(1);
    }
  });

// Launch Cursor Agent with current model
program
  .command('chat')
  .description('Start interactive chat session')
  .argument('[prompt]', 'Initial prompt (optional)')
  .action((prompt) => {
    // Forward to cursor-agent
    const args = prompt ? [prompt] : [];
    const proc = spawn('cursor-agent', args, {
      stdio: 'inherit',
      shell: true
    });
    
    proc.on('close', (code) => {
      process.exit(code || 0);
    });
  });

// Non-interactive mode
program
  .command('exec')
  .description('Execute command in non-interactive mode')
  .argument('<prompt>', 'Prompt to execute')
  .action((prompt) => {
    const proc = spawn('cursor-agent', ['-p', prompt], {
      stdio: 'inherit',
      shell: true
    });
    
    proc.on('close', (code) => {
      process.exit(code || 0);
    });
  });

// Default: launch chat
if (process.argv.length === 2) {
  program.parse(['node', 'core-agent', 'chat']);
} else {
  program.parse();
}
