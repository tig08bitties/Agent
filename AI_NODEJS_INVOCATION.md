# AI Agent: Node.js Invocation Reference

## Core Tool: Node.js CLI Interface

The **most important tool** is the ability to invoke cursor-agent via Node.js to execute privileged operations:

```bash
node /root/cursor-agent/src/cli.js <command>
```

This executes commands that internally use:
- `sudo-rs aptitude install` (primary)
- `sudo aptitude install` (fallback)

## Direct Invocation (For AI Agent)

### Install System Packages
```bash
# Via Node.js CLI
node /root/cursor-agent/src/cli.js bootstrap
# → Executes: sudo-rs aptitude install aptitude git make build-essential curl

node /root/cursor-agent/src/cli.js stack dev
# → Executes: sudo-rs aptitude install + rustup + go
```

### Search Packages
```bash
node /root/cursor-agent/src/cli.js ebuild-search <query>
# → Searches 20,000+ Gentoo packages
```

### Interactive Installation
```bash
node /root/cursor-agent/src/cli.js install
# → Interactive TUI for package selection
# → Then: sudo-rs aptitude install <selected-packages>
```

## Python Wrapper (Easier for AI Agent)

```python
from cursor_agent_integration import get_cursor_agent

agent = get_cursor_agent()

# All of these internally call: node src/cli.js
agent.bootstrap()              # → sudo-rs aptitude install
agent.install_stack("dev")     # → sudo-rs aptitude install + toolchains
agent.search_ebuild("rust")    # → searches packages
```

## Privilege Escalation Path

```
AI Agent
  ↓
Python: agent.bootstrap()
  ↓
Node.js: node src/cli.js bootstrap
  ↓
Engine: aptitude.js
  ↓
Command: sudo-rs aptitude install <package>
  ↓
System: Package installed
```

## Key Commands for AI Agent

### When User Needs System Packages
```python
agent = get_cursor_agent()
agent.bootstrap()  # Installs: aptitude, git, make, build-essential, curl
```

### When User Needs Development Stack
```python
agent.install_stack("dev")  # Installs: git, make, build-essential, rustup, go
```

### When User Needs Specific Package
```python
# Search first
results = agent.search_ebuild("package-name")

# Then install via appropriate engine:
# - System package → sudo-rs aptitude install
# - Rust package → cargo install
# - Go package → go install
```

## sudo-rs Priority

The system tries `sudo-rs` first (memory-safe), then falls back to `sudo`:

```javascript
// In aptitude.js
try {
    execSync('sudo-rs aptitude install ...', ...)
} catch (error) {
    execSync('sudo aptitude install ...', ...)  // Fallback
}
```

## For AI Agent: Automatic Usage

When working on projects, automatically:

1. **Research**: `agent.search_ebuild()` → Node.js → searches packages
2. **Configure**: `agent.ensure_dev_environment()` → Node.js → sudo-rs aptitude install
3. **Install**: Via appropriate engine → Node.js → sudo-rs/cargo/go

**All go through the Node.js interface which handles privilege escalation securely.**

---

**Core Tool**: `node /root/cursor-agent/src/cli.js` → `sudo-rs aptitude install`
