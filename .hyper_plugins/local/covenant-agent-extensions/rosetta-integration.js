/**
 * Rosetta Stone Integration for Hyper Extensions
 * 
 * Integrates Rosetta Stone bypass relay system as passive default
 * All agent operations automatically process through Rosetta Stone transformation
 */

const { spawn } = require('child_process');
const path = require('path');

const COVENANT_PATH = '/root/Halls of Amenti';
const DOCS_PATH = path.join(COVENANT_PATH, 'organized_passport', 'docs', 'covenant_documents');

/**
 * Rosetta Stone Extension
 * Processes all text through 5-script transformation (Aramaic → Syriac → Demotic → Greek → Futhark)
 */
class RosettaStoneExtension {
  constructor() {
    this.bypassRelayPath = path.join(DOCS_PATH, 'bypass_relay_system.py');
    this.defaultAgentPath = path.join(COVENANT_PATH, 'default_agent_with_relays.py');
    this.enabled = true; // DEFAULT STATE: Enabled
  }
  
  /**
   * Process text through Rosetta Stone (bypass relay)
   * This is the DEFAULT STATE - all operations use this
   */
  async process(text, mode = 'full') {
    if (!this.enabled) {
      return { original: text, transformed: text, bypassed: false };
    }
    
    return new Promise((resolve, reject) => {
      // Use Python to process through bypass relay
      const python = spawn('python3', [
        '-c',
        `
import sys
sys.path.insert(0, '${DOCS_PATH}')
from bypass_relay_system import bypass_relay, relay_to_agent
import json

text = ${JSON.stringify(text)}
mode = '${mode}'

# Process through bypass relay
result = bypass_relay(text, mode)
narrative = relay_to_agent(text)

output = {
    "original": text,
    "relay_result": result,
    "narrative": narrative,
    "forward_narrative": result.get("forward_narrative", []),
    "backward_narrative": result.get("backward_narrative", []),
    "composite": result.get("composite", []),
    "relay_output": result.get("relay_output", "")
}

print(json.dumps(output))
        `
      ], {
        cwd: COVENANT_PATH,
        stdio: 'pipe'
      });
      
      let output = '';
      let error = '';
      
      python.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      python.stderr.on('data', (data) => {
        error += data.toString();
      });
      
      python.on('close', (code) => {
        if (code === 0) {
          try {
            const result = JSON.parse(output);
            resolve({ success: true, ...result });
          } catch (e) {
            resolve({ 
              success: true, 
              original: text,
              narrative: output,
              error: e.message 
            });
          }
        } else {
          reject({ 
            success: false, 
            error: error || `Process exited with code ${code}` 
          });
        }
      });
    });
  }
  
  /**
   * Process with default agent (includes Rosetta Stone + portal activation)
   */
  async processWithDefaultAgent(text) {
    return new Promise((resolve, reject) => {
      const python = spawn('python3', [
        '-c',
        `
import sys
sys.path.insert(0, '${COVENANT_PATH}')
from default_agent_with_relays import process_with_default_relays
import json

text = ${JSON.stringify(text)}
result = process_with_default_relays(text)
print(json.dumps(result))
        `
      ], {
        cwd: COVENANT_PATH,
        stdio: 'pipe'
      });
      
      let output = '';
      let error = '';
      
      python.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      python.stderr.on('data', (data) => {
        error += data.toString();
      });
      
      python.on('close', (code) => {
        if (code === 0) {
          try {
            const result = JSON.parse(output);
            resolve({ success: true, ...result });
          } catch (e) {
            resolve({ 
              success: true, 
              output: output,
              error: e.message 
            });
          }
        } else {
          reject({ 
            success: false, 
            error: error || `Process exited with code ${code}` 
          });
        }
      });
    });
  }
  
  /**
   * Enable/disable Rosetta Stone processing
   */
  setEnabled(enabled) {
    this.enabled = enabled;
  }
  
  /**
   * Check if Rosetta Stone is enabled
   */
  isEnabled() {
    return this.enabled;
  }
}

module.exports = RosettaStoneExtension;
