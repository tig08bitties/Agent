# Dotfiles Repository

**Personal dotfiles for "un-nukeable" environment recovery.**

This repository contains all configuration files needed to rebuild your development environment from scratch.

## Structure

```
dotfiles/
├── README.md
├── bootstrap.sh          # Main bootstrap script
├── hyper.js              # Hyper terminal configuration
├── bashrc_additions      # Bash additions
├── cursor/               # Cursor IDE configurations
│   ├── mcp.json
│   ├── model-override.json
│   └── cli-config.json
└── install-nerdfonts.sh  # NerdFonts installer
```

## Usage

### Quick Setup

```bash
# Clone this repository
git clone https://github.com/YOUR_USERNAME/dotfiles.git ~/.dotfiles

# Run bootstrap
cd ~/.dotfiles
./bootstrap.sh
```

### Remote Bootstrap

```bash
# One-liner to bootstrap from scratch
curl -fsSL https://raw.githubusercontent.com/YOUR_USERNAME/dotfiles/main/bootstrap.sh | bash
```

## 3-2-1 Backup Strategy

1. **Primary**: Your local machine (NVMe)
2. **Local Backup**: External drive or NAS
3. **Offsite**: This GitHub repository

## What Gets Backed Up

- ✅ Hyper terminal configuration
- ✅ Cursor IDE configurations
- ✅ Shell configurations (.bashrc additions)
- ✅ Model override settings
- ✅ MCP server configurations
- ✅ API keys template (secrets.env structure)

## What Doesn't Get Backed Up

- ❌ Actual API keys (use secrets.env template)
- ❌ Large project files
- ❌ Node modules
- ❌ Personal data

## Recovery Process

1. **Fresh Install**: Run bootstrap.sh
2. **Restore Secrets**: Manually add API keys to `~/.Keys/secrets.env`
3. **Restore Projects**: Clone your repositories
4. **Verify**: Launch Hyper and test agent

## Version Everything

All configurations are version-controlled in this repository. Changes are tracked via Git, allowing you to:
- Roll back to previous configurations
- Track changes over time
- Share configurations across machines
