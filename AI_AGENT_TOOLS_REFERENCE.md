# AI Agent Tools Reference - Passive Defaults

## Overview

These tools are **passive defaults** for the AI agent to use automatically when working on projects. The user doesn't need to interact with them directly - they're integrated for automatic use.

## When to Use These Tools

### Starting a New Project

**Automatically:**
1. **Research**: Use `cursor_agent_search_package` to find dependencies
2. **Configure**: Use `cursor_agent_ensure_dev_environment` to set up environment
3. **Install**: Use appropriate engines (aptitude, cargo, go, make) via cursor-agent

### During Project Work

**Automatically:**
1. **Analyze**: Check system state with `cursor_agent_check_system`
2. **Improve**: Search for better packages with `cursor_agent_search_package`
3. **Simplify**: Use `cursor_agent_get_package_info` to understand dependencies
4. **Install**: Use engines as needed (aptitude install, cargo, go, make)

## Available Tools

### 1. cursor_agent_ensure_dev_environment
**When**: At project start
**What**: Ensures dev environment is ready
**Auto-use**: Yes, before starting work

### 2. cursor_agent_search_package
**When**: Need to find packages/dependencies
**What**: Search 20,000+ Gentoo packages
**Auto-use**: Yes, when researching dependencies

### 3. cursor_agent_get_package_info
**When**: Need package details
**What**: Get ebuild metadata, versions, dependencies
**Auto-use**: Yes, when analyzing packages

### 4. cursor_agent_bootstrap
**When**: System prerequisites needed
**What**: Install aptitude, git, make, build-essential
**Auto-use**: Yes, if prerequisites missing

### 5. cursor_agent_install_dev_stack
**When**: Full dev stack needed
**What**: Install complete stack (git, make, rustup, go)
**Auto-use**: Yes, if dev stack needed

## Package Management Engines

### Aptitude
**Use for**: System packages (aptitude install)
**Auto-use**: When system packages needed

### Cargo
**Use for**: Rust packages (cargo install)
**Auto-use**: When Rust dependencies needed

### Go
**Use for**: Go packages (go install)
**Auto-use**: When Go dependencies needed

### Make
**Use for**: Building from source
**Auto-use**: When compilation needed

### Git
**Use for**: Cloning, version control
**Auto-use**: When repositories needed

## Workflow Pattern

```
Start Project
  ↓
Auto: cursor_agent_ensure_dev_environment
  ↓
Auto: Research dependencies (cursor_agent_search_package)
  ↓
Auto: Get package info (cursor_agent_get_package_info)
  ↓
Auto: Install via appropriate engine (aptitude/cargo/go/make)
  ↓
Continue project work
```

## Key Points

- **Passive Defaults**: All tools auto-execute when needed
- **No User Interaction**: User doesn't need to call these
- **Automatic Research**: Package discovery happens automatically
- **Automatic Installation**: Dependencies installed automatically
- **Multi-Engine**: Uses best engine for each package type

## Integration Status

✅ All tools registered in CursorAgentCore
✅ Available for automatic use
✅ No manual configuration needed
✅ Works seamlessly with project workflows

---

**These are MY tools to use automatically - the user doesn't need to interact with them.**
