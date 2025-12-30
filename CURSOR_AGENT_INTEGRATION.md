# Cursor-Agent Integration with Agent System

## Overview

The cursor-agent package manager has been fully integrated into your Agent system, allowing the AI agent to automatically manage development environments and packages when working on projects.

## Integration Points

### 1. Global CLI Command
- **Command**: `cbrew`
- **Location**: `/usr/local/bin/cbrew`
- **Usage**: Available system-wide

### 2. Python Integration Module
- **Location**: `Halls of Amenti/cursor_agent_integration.py`
- **Usage**: Import and use in Python scripts

### 3. Agent Core Integration
- **Location**: `Halls of Amenti/cursor_agent_core.py`
- **Status**: Tools registered automatically

### 4. Tool Registration
- **Location**: `Halls of Amenti/cursor_agent_tools.json`
- **Status**: Tools available to AI agent

## Available Tools for AI Agent

When the AI agent works on projects, it can automatically use these tools:

### 1. `cursor_agent_bootstrap`
Bootstrap system prerequisites (aptitude, git, make, build-essential, curl)

**When to use**: At the start of a new project or when setting up a fresh environment

### 2. `cursor_agent_install_dev_stack`
Install the complete development stack (git, make, build-essential, rustup, go)

**When to use**: When a project needs a full development environment

### 3. `cursor_agent_search_package`
Search for packages in Gentoo portage tree and overlays (portage, guru, kde)

**When to use**: When looking for packages or dependencies

**Parameters**:
- `query`: Package name to search for
- `overlay`: Optional overlay name (portage, guru, kde)

### 4. `cursor_agent_get_package_info`
Get detailed information about a Gentoo ebuild package

**When to use**: When checking package details, versions, or dependencies

**Parameters**:
- `package_spec`: Category/package format (e.g., "dev-vcs/git")
- `overlay`: Optional overlay name

### 5. `cursor_agent_ensure_dev_environment`
Ensure development environment is set up and ready

**When to use**: Before starting work on a project

## Usage Examples

### Python Script Usage

```python
from cursor_agent_integration import get_cursor_agent

# Get cursor-agent instance
agent = get_cursor_agent()

# Bootstrap system
result = agent.bootstrap()
if result["success"]:
    print("System bootstrapped successfully")

# Install dev stack
result = agent.install_stack("dev")

# Search for packages
result = agent.search_ebuild("rust", overlay="guru")
print(result["stdout"])

# Get package info
result = agent.ebuild_info("dev-vcs/git")
print(result["stdout"])
```

### CLI Usage

```bash
# Bootstrap system
cbrew bootstrap

# Install dev stack
cbrew stack dev

# Search packages
cbrew ebuild-search rust

# Search specific overlay
cbrew ebuild-search rust --overlay guru

# Get package info
cbrew ebuild-info dev-vcs/git

# Check system state
cbrew check
```

### AI Agent Automatic Usage

The AI agent will automatically use these tools when:

1. **Starting a new project**: Calls `cursor_agent_ensure_dev_environment`
2. **Missing dependencies**: Calls `cursor_agent_search_package` to find packages
3. **Setting up environment**: Calls `cursor_agent_install_dev_stack` if needed
4. **Checking system**: Calls `cursor_agent_bootstrap` to verify prerequisites

## Integration Architecture

```
Agent System
    │
    ├── cursor_agent_core.py
    │   └── Registers cursor-agent tools
    │
    ├── cursor_agent_integration.py
    │   └── Python API wrapper
    │
    ├── cursor-agent/ (symlink)
    │   └── Full cursor-agent package manager
    │
    └── Tools Available to AI:
        ├── cursor_agent_bootstrap
        ├── cursor_agent_install_dev_stack
        ├── cursor_agent_search_package
        ├── cursor_agent_get_package_info
        └── cursor_agent_ensure_dev_environment
```

## Workflow Integration

### When AI Agent Works on Projects

1. **Project Analysis**: Agent analyzes project requirements
2. **Environment Check**: Calls `cursor_agent_ensure_dev_environment`
3. **Dependency Discovery**: Uses `cursor_agent_search_package` to find packages
4. **Package Installation**: Uses appropriate cursor-agent commands
5. **System Validation**: Uses `cursor_agent_bootstrap` to verify setup

### Example Workflow

```
User: "Build a Rust project"
  ↓
Agent: Analyzes project
  ↓
Agent: Calls cursor_agent_ensure_dev_environment
  ↓
Agent: Checks if Rust is installed
  ↓
Agent: If not, calls cursor_agent_search_package("rust")
  ↓
Agent: Installs Rust via cursor-agent
  ↓
Agent: Proceeds with project setup
```

## Configuration

### Agent Config
Location: `Halls of Amenti/agent_config.json`

```json
{
  "agent": {
    "integration": {
      "cursor_agent": {
        "path": "/root/cursor-agent",
        "enabled": true,
        "commands": {
          "bootstrap": "cbrew bootstrap",
          "install": "cbrew install",
          "sync": "cbrew sync",
          "stack": "cbrew stack",
          "ebuild_search": "cbrew ebuild-search",
          "ebuild_info": "cbrew ebuild-info"
        }
      }
    }
  }
}
```

## Benefits

1. **Automatic Environment Setup**: AI agent can set up development environments automatically
2. **Package Discovery**: Access to 20,000+ Gentoo packages for dependency discovery
3. **System Management**: Unified package management across multiple engines
4. **Project Portability**: Entire dev environment in one directory
5. **Memory-Safe Operations**: Uses sudo-rs for secure privilege escalation

## Gentoo Integration

The integration includes full access to:
- **Main Portage**: 20,000+ official packages
- **GURU Overlay**: Community-contributed packages
- **KDE Overlay**: KDE-specific packages

All accessible via the AI agent tools.

## Next Steps

1. **Test Integration**: Try using cursor-agent tools in a project
2. **Customize Manifest**: Edit `/root/cursor-agent/manifest.json` for your needs
3. **Add Custom Stacks**: Create new stacks in manifest.json
4. **Extend Tools**: Add more cursor-agent functions to the integration

---

**Status**: ✅ Fully Integrated
**Available**: Now available to AI agent when working on projects
**Commands**: `cbrew` available globally
