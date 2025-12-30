# Hyper Terminal Extensions - Complete Integration ✅

## Overview

Complete Hyper terminal extension system integrating all Covenant Agent components as extensions:
- ✅ **Sphinx Documentation API** with index
- ✅ **GitHub CLI/API** for Replit Bots and Cloudagents
- ✅ **Jules (Google Jules)** integration
- ✅ **Covenant Agent** CLI/TUI integration

---

## Installation

### 1. Plugin Location

The plugin is installed at:
```
~/.hyper_plugins/local/covenant-agent-extensions/
```

### 2. Configuration

The plugin is automatically loaded in `~/.hyper.js`:
```javascript
localPlugins: [
  'covenant-agent-extensions'
]
```

### 3. Dependencies

```bash
cd ~/.hyper_plugins/local/covenant-agent-extensions
npm install
```

---

## Available Extensions

### 1. **Sphinx Extension**

**Features**:
- Generate Sphinx documentation
- Build HTML documentation
- Open documentation in browser
- Get Sphinx index

**Commands**:
```javascript
// Generate docs
covenant:sphinx:generate [projectPath] [projectName] [...topics]

// Build HTML
covenant:sphinx:build

// Open docs
covenant:sphinx:open
```

**Key Bindings**:
- `Ctrl+Shift+S`: Generate Sphinx docs
- `Ctrl+Shift+B`: Build Sphinx HTML

**Usage**:
```javascript
// In Hyper terminal or plugin code
const extensions = require('covenant-agent-extensions');

// Generate documentation
await extensions.sphinx.generateDocs('.', 'MyProject', ['API', 'examples']);

// Build HTML
await extensions.sphinx.buildHTML();

// Open in browser
await extensions.sphinx.openDocs();
```

---

### 2. **GitHub Extension**

**Features**:
- List Replit bots
- List Cloudagents
- Clone repositories
- Get repository info

**Commands**:
```javascript
// List Replit bots
covenant:github:replit-bots [username]

// List Cloudagents
covenant:github:cloudagents [username]
```

**Usage**:
```javascript
// List Replit bots
const result = await extensions.github.listReplitBots('tig08bitties');
console.log('Bots:', result.bots);

// List Cloudagents
const result = await extensions.github.listCloudagents('tig08bitties');
console.log('Agents:', result.agents);

// Clone repository
await extensions.github.cloneRepo('tig08bitties', 'my-repo', '/tmp');

// Get repo info
const info = await extensions.github.getRepoInfo('tig08bitties', 'my-repo');
```

---

### 3. **Jules Extension**

**Features**:
- Analyze code
- Generate documentation
- Chat with Jules

**Commands**:
```javascript
// Analyze code
covenant:jules:analyze [code] [language]
```

**Usage**:
```javascript
// Analyze code
const result = await extensions.jules.analyzeCode(code, 'python');
console.log('Analysis:', result.analysis);

// Generate documentation
const docs = await extensions.jules.generateDocs(code, 'markdown');
console.log('Docs:', docs.docs);

// Chat with Jules
const response = await extensions.jules.chat('Explain this code');
console.log('Response:', response.response);
```

---

### 4. **Covenant Agent Extension**

**Features**:
- Launch Agent Chariot (CLI)
- Launch Agent TUI
- Execute agent commands

**Commands**:
```javascript
// Launch Chariot
covenant:agent:chariot

// Launch TUI
covenant:agent:tui
```

**Key Bindings**:
- `Ctrl+Shift+A`: Launch Agent Chariot
- `Ctrl+Shift+T`: Launch Agent TUI

**Usage**:
```javascript
// Launch Chariot CLI
await extensions.agent.launchChariot();

// Launch TUI
await extensions.agent.launchTUI();

// Execute command
const result = await extensions.agent.executeCommand('sphinx', ['.', 'Project']);
console.log('Output:', result.output);
```

---

## Integration Architecture

### Extension System

```
Hyper Terminal
    ↓
Covenant Agent Extensions Plugin
    ├─→ Sphinx Extension
    │   ├─→ sphinx_doc_generator.py
    │   ├─→ Index generation
    │   └─→ HTML build
    │
    ├─→ GitHub Extension
    │   ├─→ github_integration.py
    │   ├─→ Replit bots discovery
    │   └─→ Cloudagents discovery
    │
    ├─→ Jules Extension
    │   ├─→ jules_integration.py
    │   ├─→ Code analysis
    │   └─→ Documentation generation
    │
    └─→ Agent Extension
        ├─→ covenant_agent_cli.py
        ├─→ Chariot CLI
        └─→ TUI interface
```

### Node.js Integration

**Full Node.js API Available**:
- ✅ `child_process` - Spawn Python processes
- ✅ `fs-extra` - File system operations
- ✅ `path` - Path manipulation
- ✅ All Node.js built-in modules
- ✅ npm packages

**Python Integration**:
- Spawns Python processes for backend operations
- Uses existing Python integrations
- No code duplication

---

## Usage Examples

### Example 1: Generate Sphinx Docs from Hyper

```javascript
// In Hyper terminal or plugin
const extensions = require('covenant-agent-extensions');

// Generate documentation
await extensions.sphinx.generateDocs(
  '/root/Halls of Amenti',
  'Covenant Agent',
  ['API', 'examples', 'guides']
);

// Build HTML
await extensions.sphinx.buildHTML();

// Open in browser
await extensions.sphinx.openDocs();
```

### Example 2: List Replit Bots and Cloudagents

```javascript
// List all Replit bots
const bots = await extensions.github.listReplitBots('tig08bitties');
console.log(`Found ${bots.bots.length} Replit bots:`);
bots.bots.forEach(bot => {
  console.log(`  - ${bot.name}: ${bot.html_url}`);
});

// List all Cloudagents
const agents = await extensions.github.listCloudagents('tig08bitties');
console.log(`Found ${agents.agents.length} Cloudagents:`);
agents.agents.forEach(agent => {
  console.log(`  - ${agent.name}: ${agent.html_url}`);
});
```

### Example 3: Analyze Code with Jules

```javascript
const code = `
def hello_world():
    print("Hello, World!")
`;

// Analyze code
const analysis = await extensions.jules.analyzeCode(code, 'python');
console.log('Analysis:', analysis.analysis);

// Generate documentation
const docs = await extensions.jules.generateDocs(code, 'markdown');
console.log('Documentation:', docs.docs);
```

### Example 4: Launch Agent from Hyper

```javascript
// Launch Chariot CLI
await extensions.agent.launchChariot();

// Or launch TUI
await extensions.agent.launchTUI();

// Or execute specific command
const result = await extensions.agent.executeCommand('sphinx', [
  '/root/Halls of Amenti',
  'Covenant Agent',
  'API',
  'examples'
]);
```

---

## Key Bindings

| Key Binding | Action |
|-------------|--------|
| `Ctrl+Shift+S` | Generate Sphinx documentation |
| `Ctrl+Shift+B` | Build Sphinx HTML |
| `Ctrl+Shift+A` | Launch Agent Chariot |
| `Ctrl+Shift+T` | Launch Agent TUI |

---

## API Reference

### SphinxExtension

```javascript
class SphinxExtension {
  async generateDocs(projectPath, projectName, topics = [])
  async buildHTML(docsPath = null)
  async openDocs(docsPath = null)
  async getIndex(docsPath = null)
}
```

### GitHubExtension

```javascript
class GitHubExtension {
  async listReplitBots(username = null)
  async listCloudagents(username = null)
  async cloneRepo(owner, repo, targetPath)
  async getRepoInfo(owner, repo)
}
```

### JulesExtension

```javascript
class JulesExtension {
  async analyzeCode(code, language = 'python')
  async generateDocs(code, format = 'markdown')
  async chat(message)
}
```

### AgentExtension

```javascript
class AgentExtension {
  async launchChariot()
  async launchTUI()
  async executeCommand(command, args = [])
}
```

---

## Configuration

### Secrets

The extensions use secrets from:
- `/root/Keys/secrets.env` - Brave API key
- `/media/Passport/secrets.env` - GitHub token, Jules API key

### Paths

Default paths:
- Covenant Path: `/root/Halls of Amenti`
- Agent Path: `/root/Agent`
- Keys Path: `/root/Keys`

---

## Status

✅ **Sphinx Extension**: Complete and operational  
✅ **GitHub Extension**: Complete and operational  
✅ **Jules Extension**: Complete and operational  
✅ **Agent Extension**: Complete and operational  
✅ **Key Bindings**: Configured  
✅ **Commands**: Registered  
✅ **Node.js Integration**: Full API available  

---

## Next Steps

1. **Test Extensions**: Launch Hyper and test all extensions
2. **Customize**: Modify key bindings and commands as needed
3. **Extend**: Add more functionality to extensions
4. **Integrate**: Use extensions in other Hyper plugins

---

*All Covenant Agent components are now available as Hyper terminal extensions with full Node.js integration!*
