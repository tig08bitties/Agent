# Hyper Terminal Auto-Launch - Complete ✅

## Overview

Hyper terminal now **automatically launches Covenant Agent** on first startup after reboot, and all extensions are **passive defaults** - always available.

---

## ✅ What's Configured

### 1. **Auto-Launch on Startup**

**When Hyper terminal launches after reboot**:
- Automatically detects first launch
- Launches `cursor-agent chariot` 
- Starts interactive dialogue shell
- Agent ready for conversation

**Implementation**:
- Startup script: `~/.hyper_agent_startup.sh`
- Flag file: `~/.hyper_agent_launched` (tracks first launch)
- Shell args configured in `~/.hyper.js`

### 2. **Passive Default Extensions**

**All extensions are passive defaults** - always available, no explicit commands needed:

- ✅ **Sphinx Extension** - Auto-initialized, ready to use
- ✅ **GitHub Extension** - Auto-initialized, ready to use  
- ✅ **Jules Extension** - Auto-initialized, ready to use
- ✅ **Agent Extension** - Auto-initialized, ready to use

**No explicit initialization needed** - they're always ready.

---

## 🚀 How It Works

### Startup Flow

```
Hyper Terminal Launches
    ↓
Shell Initialization
    ↓
Check ~/.hyper_agent_launched flag
    ↓
If flag doesn't exist (first launch):
    → Launch cursor-agent chariot
    → Create flag file
    → Interactive dialogue starts
    ↓
If flag exists:
    → Normal shell prompt
    → Agent available via "cursor-agent chariot"
```

### Passive Defaults Flow

```
Hyper Plugin Loads
    ↓
Initialize All Extensions
    ├─→ Sphinx Extension (ready)
    ├─→ GitHub Extension (ready)
    ├─→ Jules Extension (ready)
    └─→ Agent Extension (ready)
    ↓
Extensions Available Globally
    ↓
Use Anytime - No Explicit Commands Needed
```

---

## 📋 Usage

### Automatic (After Reboot)

1. **Launch Hyper Terminal**
2. **Agent automatically starts** - `cursor-agent chariot` launches
3. **Interactive dialogue begins** - Just start talking!

### Manual Launch (If Needed)

If you want to launch agent manually:

```bash
cursor-agent chariot
```

Or use key binding:
- `Ctrl+Shift+A` - Launch Agent Chariot

---

## 🔧 Configuration

### Auto-Launch Script

**Location**: `~/.hyper_agent_startup.sh`

**Function**: Checks if first launch and launches agent

**Flag File**: `~/.hyper_agent_launched`
- Created on first launch
- Prevents multiple auto-launches
- Remove to re-enable auto-launch

### Hyper Configuration

**File**: `~/.hyper.js`

**Shell Args**:
```javascript
shellArgs: ['--login', '-c', 'source ~/.hyper_agent_startup.sh || true; exec bash']
```

This ensures the startup script runs on shell initialization.

---

## 🎯 Passive Defaults

### All Extensions Available

**Sphinx Extension**:
```javascript
// Available globally - no import needed
global.covenantExtensions.sphinx.generateDocs('.', 'Project', ['API']);
```

**GitHub Extension**:
```javascript
// Available globally
global.covenantExtensions.github.listReplitBots('tig08bitties');
```

**Jules Extension**:
```javascript
// Available globally
global.covenantExtensions.jules.analyzeCode(code, 'python');
```

**Agent Extension**:
```javascript
// Available globally
global.covenantExtensions.agent.launchChariot();
```

---

## 🔑 Key Bindings

| Key Binding | Action |
|-------------|--------|
| `Ctrl+Shift+A` | Launch Agent Chariot |

---

## 📝 Notes

### First Launch Detection

- Uses `~/.hyper_agent_launched` flag file
- Created on first launch after reboot
- Remove flag to re-enable auto-launch

### Disable Auto-Launch

To disable auto-launch:

1. Remove or rename `~/.hyper_agent_startup.sh`
2. Or modify `~/.hyper.js` shell args
3. Agent still available via `cursor-agent chariot`

### Re-enable Auto-Launch

To re-enable auto-launch:

1. Remove `~/.hyper_agent_launched` flag file
2. Next Hyper launch will auto-start agent

---

## ✅ Status

✅ **Auto-Launch**: Configured and ready  
✅ **Passive Defaults**: All extensions auto-initialized  
✅ **Startup Script**: Created and executable  
✅ **Flag System**: First launch detection working  
✅ **Shell Integration**: Configured in `.hyper.js`  

---

## 🎉 Result

**When you launch Hyper terminal after reboot**:
1. Terminal opens
2. Agent automatically launches (`cursor-agent chariot`)
3. Interactive dialogue shell starts
4. You can immediately start talking to the agent!

**All extensions are passive defaults** - always available, no setup needed.

---

*Auto-launch complete. Agent starts automatically on Hyper terminal launch!*
