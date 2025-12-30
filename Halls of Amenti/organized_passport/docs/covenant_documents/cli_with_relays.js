#!/usr/bin/env node
/**
 * Universal Agent CLI with Bypass Relays
 * Integrates Rosetta Stone transformation into CLI workflow
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class UniversalAgentCLI {
    constructor() {
        this.configPath = path.join(process.env.HOME || process.env.USERPROFILE, '.universal-agent');
        this.config = this.loadConfig();
        this.relayEnabled = this.config.relayEnabled !== false; // Default: enabled
    }
    
    loadConfig() {
        const configFile = path.join(this.configPath, 'config.json');
        if (fs.existsSync(configFile)) {
            try {
                return JSON.parse(fs.readFileSync(configFile, 'utf8'));
            } catch (e) {
                return {};
            }
        }
        return {};
    }
    
    saveConfig() {
        const configFile = path.join(this.configPath, 'config.json');
        if (!fs.existsSync(this.configPath)) {
            fs.mkdirSync(this.configPath, { recursive: true });
        }
        fs.writeFileSync(configFile, JSON.stringify(this.config, null, 2));
    }
    
    /**
     * Process goal through bypass relay, then agent
     */
    async processGoal(goal, options = {}) {
        const useRelay = options.relay !== false && this.relayEnabled;
        const relayMode = options.relayMode || 'full';
        
        let relayResult = null;
        
        // Step 1: Bypass Relay Transformation
        if (useRelay) {
            try {
                const relayScript = path.join(__dirname, 'bypass_relay_system.py');
                const relayCmd = `python3 "${relayScript}" "${goal}" --mode ${relayMode}`;
                const relayOutput = execSync(relayCmd, { encoding: 'utf8', timeout: 30000 });
                relayResult = JSON.parse(relayOutput);
            } catch (e) {
                console.warn('⚠️  Bypass relay failed, proceeding without transformation');
                relayResult = null;
            }
        }
        
        // Step 2: Agent Processing
        let agentInput = goal;
        if (relayResult && relayResult.relay_narrative) {
            agentInput = relayResult.relay_narrative;
        }
        
        // Step 3: Process through agent (placeholder - integrate with actual agent)
        const agentResult = await this.processWithAgent(agentInput, goal, relayResult);
        
        // Step 4: Format output
        return this.formatOutput(goal, relayResult, agentResult);
    }
    
    async processWithAgent(narrative, originalGoal, relayResult) {
        // Placeholder - integrate with actual universal_agent.py
        return {
            analysis: `Processed: ${narrative}`,
            recommendations: [],
            nextSteps: []
        };
    }
    
    formatOutput(originalGoal, relayResult, agentResult) {
        const parts = [];
        
        if (relayResult) {
            parts.push('╔════════════════════════════════════════════════════════════╗');
            parts.push('║              BYPASS RELAY TRANSFORMATION                  ║');
            parts.push('╚════════════════════════════════════════════════════════════╝');
            parts.push('');
            
            if (relayResult.relay_output) {
                parts.push(relayResult.relay_output);
                parts.push('');
            }
        }
        
        parts.push('╔════════════════════════════════════════════════════════════╗');
        parts.push('║                    AGENT ANALYSIS                          ║');
        parts.push('╚════════════════════════════════════════════════════════════╝');
        parts.push('');
        parts.push(agentResult.analysis);
        
        return parts.join('\n');
    }
    
    /**
     * CLI command handlers
     */
    async goal(goalText, options = {}) {
        const result = await this.processGoal(goalText, options);
        console.log(result);
    }
    
    async chat() {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        console.log('Universal Agent with Bypass Relays - Chat Mode');
        console.log('Type "exit" to quit, "relay on/off" to toggle relays\n');
        
        const askQuestion = () => {
            rl.question('> ', async (input) => {
                if (input.toLowerCase() === 'exit') {
                    rl.close();
                    return;
                }
                
                if (input.toLowerCase().startsWith('relay ')) {
                    const mode = input.split(' ')[1];
                    if (mode === 'on') {
                        this.relayEnabled = true;
                        this.config.relayEnabled = true;
                        this.saveConfig();
                        console.log('✅ Bypass relays enabled');
                    } else if (mode === 'off') {
                        this.relayEnabled = false;
                        this.config.relayEnabled = false;
                        this.saveConfig();
                        console.log('⏸️  Bypass relays disabled');
                    }
                    askQuestion();
                    return;
                }
                
                const result = await this.processGoal(input);
                console.log('\n' + result + '\n');
                askQuestion();
            });
        };
        
        askQuestion();
    }
    
    init() {
        console.log('Initializing Universal Agent with Bypass Relays...');
        this.config.relayEnabled = true;
        this.config.relayMode = 'full';
        this.saveConfig();
        console.log('✅ Configuration saved');
    }
}

// CLI Interface
const cli = new UniversalAgentCLI();
const command = process.argv[2];
const args = process.argv.slice(3);

(async () => {
    switch (command) {
        case 'goal':
            await cli.goal(args.join(' '));
            break;
        case 'chat':
            await cli.chat();
            break;
        case 'init':
            cli.init();
            break;
        default:
            console.log(`
Universal Agent CLI with Bypass Relays

Usage:
  node cli_with_relays.js goal <text>     Process goal through relay + agent
  node cli_with_relays.js chat            Interactive chat mode
  node cli_with_relays.js init            Initialize configuration

Examples:
  node cli_with_relays.js goal "DAUS"
  node cli_with_relays.js chat
            `);
    }
})();
