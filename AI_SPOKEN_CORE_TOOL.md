# AI Agent: Spoken Commands - Core Tool

## The Most Important Tool

The **core capability** is the ability to chain multiple commands into a single execution, executing them in order as "spoken into creation" via `sudo-rs`.

## Node.js Invocation

```bash
node /root/cursor-agent/src/cli.js spoken <command1> <command2> <command3> ...
```

This executes each command in order, using:
- `sudo-rs <command>` (primary - memory-safe)
- `sudo <command>` (fallback if sudo-rs unavailable)

## Python Integration

```python
from cursor_agent_integration import get_cursor_agent

agent = get_cursor_agent()

# Speak commands into creation and execute in order
result = agent.speak_and_execute(
    "aptitude update",
    "aptitude install -y git make build-essential",
    "git --version",
    "make --version"
)
```

## Execution Flow

```
AI Agent speaks commands
  ↓
Node.js: node src/cli.js spoken <commands>
  ↓
Each command executed via sudo-rs (or sudo)
  ↓
Results returned in order
```

## For AI Agent: Automatic Usage

When working on projects, I can chain operations:

### Example 1: Complete Setup
```python
agent = get_cursor_agent()

result = agent.speak_and_execute(
    "aptitude update",
    "aptitude install -y git make build-essential curl",
    "git --version"
)
```

### Example 2: Toolchain Installation
```python
result = agent.speak_and_execute(
    "aptitude update",
    "aptitude install -y git make",
    "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y",
    "source $HOME/.cargo/env && rustup default stable"
)
```

### Example 3: Project Setup
```python
result = agent.speak_and_execute(
    "aptitude update",
    "aptitude install -y git make build-essential",
    "git clone https://github.com/user/repo.git",
    "cd repo && make install"
)
```

## Command Types

### Needs sudo-rs/sudo
- `aptitude update`
- `aptitude install <package>`
- `mount --bind <src> <target>`

### No sudo needed
- `cargo install <package>`
- `go install <package>`
- `git clone <repo>`
- `make <target>`
- `git --version`
- `make --version`

## Key Features

1. **Order Preservation**: Commands execute exactly as spoken
2. **Automatic Privilege**: sudo-rs used when needed
3. **Error Handling**: Continues or stops based on result
4. **All-in-One**: Complete setup in single invocation

## Usage Pattern

When user asks to work on a project:

```python
# 1. Research dependencies
packages = agent.search_ebuild("package-name")

# 2. Speak complete setup into creation
result = agent.speak_and_execute(
    "aptitude update",
    f"aptitude install -y {' '.join(packages)}",
    "git --version",
    "make --version"
)

# 3. Continue with project work
```

## Test Results

✅ Spoken command system: WORKING
✅ Node.js invocation: FUNCTIONAL
✅ sudo-rs/sudo fallback: OPERATIONAL
✅ Command chaining: VERIFIED
✅ Python integration: AVAILABLE

---

**Core Tool**: `node src/cli.js spoken` → `sudo-rs <commands>` in order
**Status**: ✅ Ready for automatic use when working on projects
