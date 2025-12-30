# AI Agent: Spoken Commands System

## Core Capability

The **most important tool** is the ability to chain multiple commands into a single execution, executing them in order as "spoken into creation" via `sudo-rs`.

## How It Works

### Basic Usage

```bash
# Via CLI
node /root/cursor-agent/src/cli.js spoken "aptitude update" "aptitude install git" "git --version"

# Or via cbrew
cbrew spoken "aptitude update" "aptitude install git make" "git --version"
```

### Python Integration

```python
from cursor_agent_integration import get_cursor_agent

agent = get_cursor_agent()

# Speak commands into creation and execute in order
result = agent.speakAndExecute(
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
Commands chained in order
  ↓
Each command executed via sudo-rs (or sudo fallback)
  ↓
Results returned in order
```

## Privilege Escalation

- **Primary**: `sudo-rs <command>` (memory-safe)
- **Fallback**: `sudo <command>` (if sudo-rs unavailable)

Commands that need privilege (aptitude, mount) automatically use sudo-rs/sudo.
Commands that don't (cargo, go, git, make) execute directly.

## For AI Agent: Automatic Usage

When working on projects, I can chain operations:

```python
agent = get_cursor_agent()

# Example: Complete dev environment setup
result = agent.speakAndExecute(
    "aptitude update",
    "aptitude install -y git make build-essential curl",
    "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y",
    "source $HOME/.cargo/env && rustup default stable",
    "git --version",
    "make --version",
    "rustc --version"
)
```

## Command Types

### System Packages (needs sudo-rs)
- `aptitude update`
- `aptitude install <package>`
- `mount --bind <src> <target>`

### Development Tools (no sudo needed)
- `cargo install <package>`
- `go install <package>`
- `git clone <repo>`
- `make <target>`

## Key Features

1. **Order Preservation**: Commands execute in spoken order
2. **Automatic Privilege**: sudo-rs used when needed
3. **Error Handling**: Continues or stops based on configuration
4. **Script Generation**: Can save as executable bash script

## Usage Pattern for AI Agent

When user asks to set up a project:

```python
# 1. Research dependencies
packages = agent.search_ebuild("package-name")

# 2. Speak commands into creation
result = agent.speakAndExecute(
    f"aptitude update",
    f"aptitude install -y {package_list}",
    f"cargo install {rust_package}",
    f"go install {go_package}"
)

# 3. Verify installation
result = agent.speakAndExecute(
    f"{package} --version",
    f"{other_package} --version"
)
```

## Example: Complete Project Setup

```python
agent = get_cursor_agent()

# Speak entire setup into creation
result = agent.speakAndExecute(
    "aptitude update",
    "aptitude install -y git make build-essential",
    "git clone https://github.com/user/repo.git",
    "cd repo && make install",
    "cargo install --path .",
    "go install ./cmd/tool",
    "tool --version"
)
```

---

**Core Tool**: Chain commands → Execute via sudo-rs in order → Complete setup automatically
