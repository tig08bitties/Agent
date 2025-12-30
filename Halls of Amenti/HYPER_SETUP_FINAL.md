# Hyper Terminal Setup - Final Configuration ✅

## ✅ Complete Setup

### 1. **Passive Defaults** ✅
All extensions are **passive defaults** - auto-initialized and always available:
- ✅ Sphinx Extension (auto-initialized)
- ✅ GitHub Extension (auto-initialized)
- ✅ Jules Extension (auto-initialized)
- ✅ Agent Extension (auto-initialized)

**No explicit commands needed** - all extensions ready to use!

### 2. **Auto-Launch on Startup** ✅
Agent **automatically launches** when Hyper terminal starts after reboot:
- Detects first launch after reboot
- Runs `cursor-agent chariot` automatically
- Interactive dialogue starts immediately
- When agent exits, returns to normal shell

---

## 🚀 How It Works

### Startup Sequence

```
1. Hyper Terminal Launches
   ↓
2. Shell Initialization (~/.hyper_shell_init.sh)
   ↓
3. Check Reboot Flag (/tmp/hyper_reboot_flag_*)
   ↓
4. If First Launch After Reboot:
   → Launch cursor-agent chariot (foreground)
   → Create launch flag (~/.hyper_agent_launched)
   → Agent takes over terminal
   ↓
5. Interactive Dialogue Starts
   → You can immediately start talking!
   ↓
6. When Agent Exits:
   → Returns to normal shell
   → Can run cursor-agent chariot again if needed
```

### Passive Defaults

```
Hyper Plugin Loads
   ↓
All Extensions Auto-Initialize
   ├─→ Sphinx (ready)
   ├─→ GitHub (ready)
   ├─→ Jules (ready)
   └─→ Agent (ready)
   ↓
Available Globally
   ↓
Use Anytime - No Setup Needed
```

---

## 📋 Usage

### Automatic (After Reboot)

1. **Reboot system**
2. **Launch Hyper Terminal**
3. **Agent automatically starts** → `cursor-agent chariot` launches
4. **Interactive dialogue begins** → Start talking immediately!
5. **When you exit agent** → Returns to normal shell

### Manual Launch (If Needed)

If you want to launch agent manually:

```bash
cursor-agent chariot
```

Or use key binding:
- `Ctrl+Shift+A` - Launch Agent Chariot

---

## 🔧 Configuration Files

### 1. Hyper Configuration
**File**: `~/.hyper.js`
- Font: Monospace size 13
- Plugin: `covenant-agent-extensions` (loaded)
- Shell: `/bin/bash` with auto-launch script

### 2. Shell Init Script
**File**: `~/.hyper_shell_init.sh`
- Checks reboot flag
- Launches agent on first startup
- Returns to shell after agent exits

### 3. Hyper Plugin
**File**: `~/.hyper_plugins/local/covenant-agent-extensions/index.js`
- Auto-initializes all extensions (passive defaults)
- Makes extensions globally available
- Registers hooks and commands

---

## 🎯 Passive Defaults API

### Access Extensions

**All extensions available globally**:

```javascript
// In any Node.js context within Hyper
const extensions = global.covenantExtensions;

// Sphinx - Generate documentation
await extensions.sphinx.generateDocs('.', 'Project', ['API']);

// GitHub - List Replit bots
const bots = await extensions.github.listReplitBots('tig08bitties');

// GitHub - List Cloudagents
const agents = await extensions.github.listCloudagents('tig08bitties');

// Jules - Analyze code
const analysis = await extensions.jules.analyzeCode(code, 'python');

// Jules - Generate documentation
const docs = await extensions.jules.generateDocs(code, 'markdown');

// Agent - Launch Chariot
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
- `/tmp/hyper_reboot_flag_*` - Created on first session (cleared on reboot)

**How It Works**:
1. System reboots → `/tmp/hyper_reboot_flag_*` cleared
2. Hyper launches → Checks if flag exists
3. If not exists → First launch, launch agent
4. Create flags → Prevent multiple launches

### Disable Auto-Launch

To disable auto-launch:

1. Remove `~/.hyper_agent_launched` flag file
2. Or comment out in `~/.hyper.js` shell args
3. Agent still available via `cursor-agent chariot`

### Re-enable Auto-Launch

To re-enable auto-launch:

1. Remove `~/.hyper_agent_launched` flag file
2. Remove `/tmp/hyper_reboot_flag_*` flag file
3. Next Hyper launch will auto-start agent

---

## ✅ Status

✅ **Passive Defaults**: All extensions auto-initialized  
✅ **Auto-Launch**: Configured via shell init script  
✅ **Reboot Detection**: Flag system working  
✅ **Shell Integration**: `.hyper.js` configured  
✅ **Plugin Loaded**: Extensions available globally  
✅ **Foreground Launch**: Agent takes over terminal  
✅ **Shell Return**: Returns to shell after agent exits  

---

## 🎉 Result

**When you launch Hyper terminal after reboot**:

1. ✅ Terminal opens
2. ✅ All extensions initialize (passive defaults)
3. ✅ Agent automatically launches (`cursor-agent chariot`)
4. ✅ Interactive dialogue shell starts
5. ✅ You can immediately start talking!
6. ✅ When you exit agent, returns to normal shell

**Everything is automatic** - no manual commands needed!

**All extensions are passive defaults** - always available, no setup needed.

---

*Final setup complete. Agent auto-launches and all extensions are passive defaults!*
