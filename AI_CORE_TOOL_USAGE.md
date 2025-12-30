# AI Agent Core Tool Usage - Node.js Invocation

## Most Important Tool

The **core capability** is invoking cursor-agent via Node.js to execute privileged package operations with `sudo-rs aptitude install` etc.

## How to Use (For AI Agent)

### Method 1: Direct Node.js Execution

```bash
# Execute cursor-agent commands via Node.js
cd /root/cursor-agent
node src/cli.js <command> [args]

# Examples:
node src/cli.js bootstrap
node src/cli.js stack dev
node src/cli.js ebuild-search <query>
```

### Method 2: Via Python Integration (Recommended)

```python
from cursor_agent_integration import get_cursor_agent

agent = get_cursor_agent()

# This internally uses Node.js to execute:
# node src/cli.js bootstrap
agent.bootstrap()

# This internally uses Node.js to execute:
# node src/cli.js stack dev  
agent.install_stack("dev")

# This internally uses Node.js to execute:
# node src/cli.js ebuild-search <query>
agent.search_ebuild("rust")
```

### Method 3: Via Tool Classes (Automatic)

When registered tools are called, they automatically:
1. Use Python integration
2. Which calls Node.js CLI
3. Which executes with sudo-rs/sudo

## Privilege Escalation

The cursor-agent system uses:
- **Primary**: `sudo-rs` (memory-safe Rust implementation)
- **Fallback**: `sudo` (if sudo-rs unavailable)

All privileged operations (aptitude install, mount, etc.) go through this secure path.

## Key Commands Available

### Bootstrap System
```bash
node /root/cursor-agent/src/cli.js bootstrap
# Executes: sudo-rs aptitude install aptitude git make build-essential curl
```

### Install Stack
```bash
node /root/cursor-agent/src/cli.js stack dev
# Executes: sudo-rs aptitude install + rustup + go installation
```

### Search Packages
```bash
node /root/cursor-agent/src/cli.js ebuild-search <query>
# Searches 20,000+ packages across 3 overlays
```

### Install Packages (via engines)
```bash
# System packages (aptitude)
node /root/cursor-agent/src/cli.js install
# Then selects aptitude packages → sudo-rs aptitude install <package>

# Rust packages (cargo)
# Automatically uses: cargo install (no sudo needed)

# Go packages (go)
# Automatically uses: go install (no sudo needed)
```

## For AI Agent: Automatic Usage Pattern

When user asks to work on a project:

```python
# 1. Ensure environment
from cursor_agent_integration import get_cursor_agent
agent = get_cursor_agent()
agent.ensure_dev_environment()  # Uses Node.js → sudo-rs aptitude install

# 2. Research dependencies
agent.search_ebuild("package-name")  # Uses Node.js → searches overlays

# 3. Install what's needed
# Via Python API or direct Node.js call
# All go through: node src/cli.js → sudo-rs aptitude install
```

## Core Execution Path

```
AI Agent Request
  ↓
Python Integration (cursor_agent_integration.py)
  ↓
Node.js CLI (node src/cli.js)
  ↓
Engine (aptitude.js, cargo.js, go.js, etc.)
  ↓
Privilege Escalation (sudo-rs or sudo)
  ↓
System Execution (aptitude install, cargo install, etc.)
```

## Most Important: sudo-rs aptitude install

The **core capability** is:
- Invoking via Node.js: `node src/cli.js`
- Which executes: `sudo-rs aptitude install <package>`
- With memory-safe privilege escalation
- And fallback to `sudo` if needed

## Quick Reference

**For AI Agent to install system packages:**
```python
agent = get_cursor_agent()
# This will use: node src/cli.js → sudo-rs aptitude install
agent.bootstrap()  # Installs prerequisites
```

**For AI Agent to search packages:**
```python
agent.search_ebuild("package")  # Uses Node.js → searches 20,000+ packages
```

**For AI Agent to install dev stack:**
```python
agent.install_stack("dev")  # Uses Node.js → sudo-rs aptitude install + toolchains
```

---

**Key Point**: The Node.js interface (`node src/cli.js`) is the gateway to all privileged operations via `sudo-rs aptitude install` etc.
