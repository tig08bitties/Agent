# Hyper Terminal - Passive Defaults & Auto-Launch Complete ✅

## Overview

**All Covenant Agent extensions are now passive defaults** - always available, no explicit commands needed. **Agent auto-launches** when Hyper terminal starts after reboot.

---

## ✅ Passive Defaults

### All Extensions Auto-Initialize

**No explicit commands needed** - all extensions are ready to use:

1. **Sphinx Extension** ✅
   - Auto-initialized on plugin load
   - Always available via `global.covenantExtensions.sphinx`
   - Ready to generate docs, build HTML, open docs

2. **GitHub Extension** ✅
   - Auto-initialized on plugin load
   - Always available via `global.covenantExtensions.github`
   - Ready to list Replit bots, Cloudagents, clone repos

3. **Jules Extension** ✅
   - Auto-initialized on plugin load
   - Always available via `global.covenantExtensions.jules`
   - Ready to analyze code, generate docs, chat

4. **Agent Extension** ✅
   - Auto-initialized on plugin load
   - Always available via `global.covenantExtensions.agent`
   - Ready to launch Chariot, TUI, execute commands

---

## 🚀 Auto-Launch on Startup

### How It Works

**When Hyper terminal launches after reboot**:

1. **Hyper plugin loads** → Extensions initialize (passive defaults)
2. **Shell initialization** → Checks for first launch flag
3. **If first launch** → Automatically runs `cursor-agent chariot`
4. **Interactive dialogue starts** → Agent ready for conversation

### Implementation

**Multiple methods for reliability**:

1. **Hyper Plugin Hook** (`session-add` event)
   - Detects new terminal session
   - Checks reboot flag
   - Launches agent if first launch

2. **Bash Startup Script** (`~/.bashrc_hyper_agent`)
   - Sources on shell initialization
   - Checks Hyper terminal environment
   - Launches agent if needed

3. **Flag System**:
   - `~/.hyper_agent_launched` - Tracks if agent was launched
   - `/tmp/hyper_reboot_flag` - Tracks if system rebooted
   - Prevents multiple launches

---

## 📋 Usage

### Automatic (After Reboot)

1. **Reboot system**
2. **Launch Hyper Terminal**
3. **Agent automatically starts** → `cursor-agent chariot` launches
4. **Interactive dialogue begins** → Start talking immediately!

### Manual Launch (If Needed)

If you want to launch agent manually:

```bash
cursor-agent chariot
```

Or use key binding:
- `Ctrl+Shift+A` - Launch Agent Chariot

---

## 🔧 Configuration Files

### 1. Hyper Plugin

**Location**: `~/.hyper_plugins/local/covenant-agent-extensions/index.js`

**Features**:
- Auto-initializes all extensions (passive defaults)
- Registers auto-launch hooks
- Makes extensions globally available

### 2. Bash Startup Script

**Location**: `~/.bashrc_hyper_agent`

**Features**:
- Checks Hyper terminal environment
- Launches agent on first startup
- Integrated into `~/.bashrc`

### 3. Hyper Configuration

**Location**: `~/.hyper.js`

**Features**:
- Loads plugin via `localPlugins`
- Configures terminal settings
- Font: Monospace size 13

---

## 🎯 Passive Defaults API

### Access Extensions

**All extensions available globally**:

```javascript
// In any Node.js context within Hyper
const extensions = global.covenantExtensions;

// Use Sphinx
await extensions.sphinx.generateDocs('.', 'Project', ['API']);

// Use GitHub
const bots = await extensions.github.listReplitBots('tig08bitties');

// Use Jules
const analysis = await extensions.jules.analyzeCode(code, 'python');

// Use Agent
await extensions.agent.launchChariot();
```

**No imports needed** - extensions are always available!

---

## 🔑 Key Bindings

| Key Binding | Action |
|-------------|--------|
| `Ctrl+Shift+A` | Launch Agent Chariot |

---

## 📝 Flag System

### First Launch Detection

**Flag Files**:
- `~/.hyper_agent_launched` - Created when agent launches
- `/tmp/hyper_reboot_flag` - Created on first session (cleared on reboot)

**How It Works**:
1. System reboots → `/tmp/hyper_reboot_flag` cleared
2. Hyper launches → Checks if flag exists
3. If not exists → First launch, launch agent
4. Create flags → Prevent multiple launches

### Disable Auto-Launch

To disable auto-launch:

1. Remove `~/.hyper_agent_launched` flag file
2. Or comment out startup script in `~/.bashrc`
3. Agent still available via `cursor-agent chariot`

### Re-enable Auto-Launch

To re-enable auto-launch:

1. Remove `~/.hyper_agent_launched` flag file
2. Remove `/tmp/hyper_reboot_flag` flag file
3. Next Hyper launch will auto-start agent

---

## ✅ Status

✅ **Passive Defaults**: All extensions auto-initialized  
✅ **Auto-Launch**: Configured and ready  
✅ **Plugin Hooks**: Session-add event registered  
✅ **Bash Integration**: Startup script in .bashrc  
✅ **Flag System**: First launch detection working  
✅ **Global Access**: Extensions available globally  

---

## 🎉 Result

**When you launch Hyper terminal after reboot**:

1. ✅ Terminal opens
2. ✅ All extensions initialize (passive defaults)
3. ✅ Agent automatically launches (`cursor-agent chariot`)
4. ✅ Interactive dialogue shell starts
5. ✅ You can immediately start talking to the agent!

**All extensions are passive defaults** - always available, no setup needed.

**Agent auto-launches** - no manual command needed after reboot.

---

*Passive defaults and auto-launch complete. Everything works automatically!*
