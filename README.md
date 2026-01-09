# Covenant Agent - Complete Development Environment

**Sovereign AI agent system with Hyper terminal integration, custom models, MCP, and "un-nukeable" bootstrap recovery.**

## 🎯 Overview

This repository contains a complete development environment featuring:

- **Covenant Agent System** - Sovereign AI agent with bypass relay system
- **Hyper Terminal Integration** - Complete extension system with passive defaults
- **Custom Model Support** - Ollama, LM Studio, OpenAI, and Covenant Agent
- **MCP Integration** - Model Context Protocol for custom tools
- **Bootstrap Recovery** - One-command environment restoration
- **WaveTerm Features** - CLI integration, file previews, command blocks
- **Hyperbrowser** - Headless browser sessions with hot-reload
- **Rosetta Stone** - 5-script bypass relay transformation system

## 📁 Repository Structure

```
/
├── Agent/                    # Cursor Agent CLI implementation
├── Agent_repo/              # Agent repository files
├── Halls of Amenti/         # Covenant system core
│   ├── organized_passport/  # Documentation and systems
│   └── *.md                 # Documentation files
├── Keys/                    # API keys (secrets.env template)
├── .hyper_plugins/         # Hyper terminal extensions
│   └── local/
│       └── covenant-agent-extensions/
├── .cursor/                 # Cursor IDE configurations
├── .hyper.js               # Hyper terminal configuration
├── bootstrap.sh            # Environment recovery script
├── core-agent/             # Personal npm package structure
└── dotfiles-template/      # Dotfiles repository template
```

## 🚀 Quick Start

### Initial Setup

```bash
# Clone this repository
git clone https://github.com/tig08bitties/Agent.git ~/Agent-setup
cd ~/Agent-setup

# Run bootstrap script
./bootstrap.sh

# Add your API keys
echo "BRAVE_API_KEY=your_key" >> ~/Keys/secrets.env

# Launch Hyper terminal
hyper
```

### Recovery (After "Nuke")

```bash
# One-liner recovery
curl -fsSL https://raw.githubusercontent.com/tig08bitties/Agent/main/bootstrap.sh | bash
```

## 🔧 Features

### 1. Covenant Agent System

- **Sovereign Agent** - Autonomous AI agent with covenant principles
- **Bypass Relay System** - Rosetta Stone 5-script transformation
- **Chariot Shell** - Interactive agent CLI
- **TUI Shell** - Text-based user interface

### 2. Hyper Terminal Extensions

All extensions are **passive defaults** (auto-initialized):

- ✅ Sphinx Extension - Documentation generation
- ✅ GitHub Extension - Replit bots & Cloudagents
- ✅ Jules Extension - Google Jules integration
- ✅ Rosetta Stone Extension - Bypass relay system
- ✅ Hyperbrowser Extension - Headless browser sessions
- ✅ Hyper-Init Extension - Dev server auto-launch
- ✅ Visual Feedback Extension - Hot-reload monitoring
- ✅ WaveTerm CLI Extension - CLI integration (wsh ai)
- ✅ File Preview Extension - Rich file previews
- ✅ Command Blocks Extension - Isolated commands
- ✅ AI Chat Widget Extension - Multi-model chat
- ✅ File Management Extension - File operations
- ✅ Model Override Extension - Custom model switching
- ✅ Agent Extension - Chariot & TUI

### 3. Custom Model Support

Switch between AI models seamlessly:

```bash
# Switch to Ollama
covenant:model:switch ollama llama3.2

# Switch to LM Studio
covenant:model:switch lmstudio local-model

# Switch to OpenAI
covenant:model:switch openai gpt-4

# Switch back to Covenant Agent
covenant:model:switch covenant
```

**Key Binding**: `Ctrl+Shift+M` - Switch model

### 4. MCP Integration

Model Context Protocol servers:

- `covenant-tools` - Covenant Agent tools
- `rosetta-stone` - Rosetta Stone processing
- `file-operations` - File management
- `github-integration` - GitHub API

### 5. Auto-Launch

Agent automatically launches when Hyper terminal starts after reboot:

```
Hyper Terminal → Agent Auto-Launches → Interactive Dialogue
```

## 📋 Usage

### Launch Agent

```bash
# Interactive chat
cursor-agent

# With initial prompt
cursor-agent "build a todo app"

# List sessions
cursor-agent ls

# Resume session
cursor-agent resume

# Non-interactive mode
cursor-agent -p "analyze this code"
```

### Hyper Terminal Commands

- `covenant:model:switch [provider] [model]` - Switch AI model
- `covenant:waveterm:pipe [command] [files...]` - Pipe command to AI
- `covenant:preview:file [filePath]` - Preview file
- `covenant:blocks:create [command]` - Create command block
- `covenant:aichat:chat [message]` - AI chat
- `covenant:hyperbrowser:launch` - Launch browser session
- `covenant:hyperinit:register` - Register project

### Key Bindings

| Key Binding | Action |
|-------------|--------|
| `Ctrl+Shift+A` | Launch Agent Chariot |
| `Ctrl+Shift+R` | Process through Rosetta Stone |
| `Ctrl+Shift+B` | Launch browser session |
| `Ctrl+Shift+D` | Monitor dev server |
| `Ctrl+Shift+P` | Preview file |
| `Ctrl+Shift+C` | Create command block |
| `Ctrl+Shift+M` | Switch model |

## 🔐 Security

**Important**: This repository does NOT include:
- ❌ Actual API keys (use `Keys/secrets.env` template)
- ❌ Personal authentication tokens
- ❌ Private credentials

Add your API keys manually after cloning:
```bash
echo "BRAVE_API_KEY=your_key" >> ~/Keys/secrets.env
```

## 📚 Documentation

See `Halls of Amenti/` for detailed documentation:

- `COVENANT_SYSTEM_ANALYSIS.md` - System architecture
- `HYPER_SETUP_FINAL.md` - Hyper terminal setup
- `WAVETERM_FEATURES_INTEGRATED.md` - WaveTerm features
- `CUSTOM_MODEL_MCP_BOOTSTRAP_COMPLETE.md` - Custom models & MCP
- `HYPERBROWSER_COMPLETE_SETUP.md` - Hyperbrowser integration

## 🛠️ Development

### Personal NPM Package

Publish your agent as `@tig08bitties/core-agent`:

```bash
cd core-agent
npm publish --access public
```

### Dotfiles Repository

Use `dotfiles-template/` as a starting point for your dotfiles repository.

## 📦 Installation

### Prerequisites

- Node.js 18+ (installed via bootstrap.sh)
- Hyper Terminal
- Python 3.8+
- Git

### Bootstrap Process

The `bootstrap.sh` script automatically:

1. Installs Node.js (via fnm)
2. Installs personal npm package
3. Installs Cursor Agent CLI
4. Sets up Hyper terminal
5. Links dotfiles
6. Configures MCP
7. Sets up model overrides

## 🤝 Contributing

This is a personal development environment. Feel free to fork and adapt for your own use.

## 📄 License

MIT License - See LICENSE file for details

## 🔗 Links

- **Repository**: https://github.com/tig08bitties/Agent.git
- **Data Repository**: https://github.com/thaeos/Data (research archive)
- **Documentation**: See `Halls of Amenti/` directory
- **Data Integration**: See `DATA_REPOSITORY_INTEGRATION.md`
- **Issues**: https://github.com/tig08bitties/Agent/issues

## 🙏 Acknowledgments

- Covenant Agent System
- Hyper Terminal
- Cursor IDE
- WaveTerm (inspiration)
- All open-source contributors

---

**Built with ❤️ for sovereign AI development**
