# Covenant Agent Extensions for Hyper Terminal

## Overview

Complete extension system for Hyper terminal integrating all Covenant Agent components as **passive defaults**.

---

## ✅ Extensions (All Passive Defaults)

### 1. **Sphinx Extension**
- Generate Sphinx documentation
- Build HTML documentation
- Open docs in browser
- Get Sphinx index

### 2. **GitHub Extension**
- List Replit bots
- List Cloudagents
- Clone repositories
- Get repository info

### 3. **Jules Extension**
- Analyze code
- Generate documentation
- Chat with Jules

### 4. **Rosetta Stone Extension** 🔮
- Process text through bypass relay
- 5-script transformation (Aramaic → Syriac → Demotic → Greek → Futhark)
- Forward & backward narratives
- Default agent with relays

### 5. **Agent Extension**
- Launch Agent Chariot
- Launch Agent TUI
- Execute agent commands

---

## 🚀 Auto-Launch

**Agent automatically launches** when Hyper terminal starts after reboot:
- Detects first launch
- Runs `cursor-agent chariot` automatically
- Interactive dialogue starts immediately

---

## 📋 Usage

### Access Extensions

**All extensions available globally**:
```javascript
const extensions = global.covenantExtensions;

// Sphinx
await extensions.sphinx.generateDocs('.', 'Project', ['API']);

// GitHub
const bots = await extensions.github.listReplitBots('tig08bitties');

// Jules
const analysis = await extensions.jules.analyzeCode(code, 'python');

// Rosetta Stone
const result = await extensions.rosetta.process('DAUS', 'full');

// Agent
await extensions.agent.launchChariot();
```

### Commands

- `covenant:sphinx:generate` - Generate Sphinx docs
- `covenant:github:replit-bots` - List Replit bots
- `covenant:rosetta:process` - Process through Rosetta Stone
- `covenant:agent:chariot` - Launch Agent Chariot

### Key Bindings

- `Ctrl+Shift+A` - Launch Agent Chariot
- `Ctrl+Shift+R` - Process through Rosetta Stone

---

## 🔧 Configuration

### Fonts

**NerdFonts installed**: FiraCode Nerd Font
- Configured in `~/.hyper.js`
- Enhanced icon support
- Better covenant symbol rendering

### Auto-Launch

**Configured in**:
- `~/.hyper.js` - Shell initialization
- `~/.hyper_shell_init.sh` - Startup script
- `~/.bashrc_hyper_agent` - Bash integration

---

## ✅ Status

✅ **All Extensions**: Passive defaults (auto-initialized)  
✅ **Rosetta Stone**: Integrated and ready  
✅ **NerdFonts**: Installed and configured  
✅ **Auto-Launch**: Configured and ready  

---

*All Covenant Agent components are passive defaults in Hyper terminal!*
