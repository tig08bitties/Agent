#!/bin/bash
#
# Bootstrap Script - "Un-Nukeable" Environment Recovery
# 
# This script rebuilds your entire development environment from scratch.
# Store this in a private GitHub repository for easy recovery.
#
# Usage: curl -fsSL https://raw.githubusercontent.com/YOUR_USERNAME/dotfiles/main/bootstrap.sh | bash

set -e

echo "🚀 Starting Environment Bootstrap..."
echo "=================================="

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
DOTFILES_REPO="${DOTFILES_REPO:-https://github.com/YOUR_USERNAME/dotfiles.git}"
DOTFILES_DIR="$HOME/.dotfiles"
NPM_SCOPE="${NPM_SCOPE:-@yourusername}"

# Step 1: Install Node.js & Essential CLI Tools
echo -e "${BLUE}📦 Step 1: Installing Node.js & Essential Tools...${NC}"

# Install fnm (Fast Node Manager)
if ! command -v fnm &> /dev/null; then
    echo "Installing fnm..."
    curl -fsSL https://fnm.vercel.app/install | bash
    export PATH="$HOME/.local/share/fnm:$PATH"
    eval "$(fnm env)"
fi

# Install Node.js LTS
echo "Installing Node.js LTS..."
fnm install --lts
fnm use --lts

# Install essential tools
echo "Installing essential CLI tools..."
npm install -g npm@latest

# Step 2: Install Personal Agent & Core Tools
echo -e "${BLUE}🤖 Step 2: Installing Personal Agent & Core Tools...${NC}"

# Install personal npm package (if published)
if [ -n "$NPM_SCOPE" ]; then
    echo "Installing personal agent package: ${NPM_SCOPE}/core-agent"
    npm install -g "${NPM_SCOPE}/core-agent" || echo "Package not found, skipping..."
fi

# Install Cursor Agent CLI
echo "Installing Cursor Agent CLI..."
npm install -g cursor-agent || echo "Cursor Agent not available, skipping..."

# Install other tools
echo "Installing additional tools..."
npm install -g @google/gemini-cli || echo "Gemini CLI not available, skipping..."

# Step 3: Setup Dotfiles
echo -e "${BLUE}📁 Step 3: Setting Up Dotfiles...${NC}"

if [ ! -d "$DOTFILES_DIR" ]; then
    echo "Cloning dotfiles repository..."
    git clone "$DOTFILES_REPO" "$DOTFILES_DIR" || {
        echo -e "${YELLOW}⚠️  Dotfiles repo not found. Creating local dotfiles directory...${NC}"
        mkdir -p "$DOTFILES_DIR"
    }
fi

# Link dotfiles
if [ -d "$DOTFILES_DIR" ]; then
    echo "Linking dotfiles..."
    cd "$DOTFILES_DIR"
    
    # Link .hyper.js
    if [ -f "hyper.js" ]; then
        ln -sf "$DOTFILES_DIR/hyper.js" "$HOME/.hyper.js"
        echo "✅ Linked .hyper.js"
    fi
    
    # Link .bashrc additions
    if [ -f "bashrc_additions" ]; then
        if ! grep -q "bashrc_additions" "$HOME/.bashrc"; then
            echo "" >> "$HOME/.bashrc"
            echo "# Dotfiles additions" >> "$HOME/.bashrc"
            echo "source $DOTFILES_DIR/bashrc_additions" >> "$HOME/.bashrc"
            echo "✅ Added bashrc additions"
        fi
    fi
    
    # Link .cursor configs
    if [ -d "cursor" ]; then
        mkdir -p "$HOME/.cursor"
        for file in cursor/*; do
            if [ -f "$file" ]; then
                ln -sf "$DOTFILES_DIR/$file" "$HOME/.cursor/$(basename $file)"
            fi
        done
        echo "✅ Linked Cursor configs"
    fi
    
    # Link other configs
    for file in .*; do
        if [ -f "$file" ] && [ "$file" != ".git" ] && [ "$file" != "." ] && [ "$file" != ".." ]; then
            ln -sf "$DOTFILES_DIR/$file" "$HOME/$file"
        fi
    done
fi

# Step 4: Setup Hyper Terminal
echo -e "${BLUE}⚡ Step 4: Setting Up Hyper Terminal...${NC}"

# Install Hyper plugins
if [ -d "$HOME/.hyper_plugins" ]; then
    echo "Installing Hyper plugins..."
    cd "$HOME/.hyper_plugins"
    
    # Install covenant-agent-extensions if it exists
    if [ -d "local/covenant-agent-extensions" ]; then
        cd "local/covenant-agent-extensions"
        npm install
        echo "✅ Installed covenant-agent-extensions"
    fi
fi

# Step 5: Setup Covenant Agent
echo -e "${BLUE}🐄 Step 5: Setting Up Covenant Agent...${NC}"

COVENANT_PATH="$HOME/Halls of Amenti"
AGENT_PATH="$HOME/Agent"

# Create directories if they don't exist
mkdir -p "$COVENANT_PATH"
mkdir -p "$AGENT_PATH"
mkdir -p "$HOME/Keys"

# Setup secrets.env if it doesn't exist
if [ ! -f "$HOME/Keys/secrets.env" ]; then
    echo "# API Keys" > "$HOME/Keys/secrets.env"
    echo "BRAVE_API_KEY=" >> "$HOME/Keys/secrets.env"
    echo "✅ Created secrets.env template"
fi

# Step 6: Install NerdFonts (if not already installed)
echo -e "${BLUE}🔤 Step 6: Installing NerdFonts...${NC}"

if ! fc-list | grep -q "FiraCode Nerd Font"; then
    echo "NerdFonts not found. Install manually from: https://www.nerdfonts.com/font-downloads"
    echo "Or run: ./install-nerdfonts.sh (if available)"
else
    echo "✅ NerdFonts already installed"
fi

# Step 7: Setup MCP Configuration
echo -e "${BLUE}🔌 Step 7: Setting Up MCP Configuration...${NC}"

mkdir -p "$HOME/.cursor"
if [ ! -f "$HOME/.cursor/mcp.json" ]; then
    cat > "$HOME/.cursor/mcp.json" << 'EOF'
{
  "mcpServers": {
    "covenant-tools": {
      "command": "node",
      "args": [
        "$HOME/.hyper_plugins/local/covenant-agent-extensions/mcp-server.js"
      ],
      "env": {
        "COVENANT_PATH": "$HOME/Halls of Amenti",
        "AGENT_PATH": "$HOME/Agent"
      }
    }
  }
}
EOF
    echo "✅ Created MCP configuration"
fi

# Step 8: Setup Model Override Configuration
echo -e "${BLUE}🧠 Step 8: Setting Up Model Override Configuration...${NC}"

if [ ! -f "$HOME/.cursor/model-override.json" ]; then
    cat > "$HOME/.cursor/model-override.json" << 'EOF'
{
  "apiOverrides": {
    "enabled": false,
    "provider": "covenant",
    "baseUrl": "local",
    "model": "covenant-agent"
  },
  "activeProvider": "covenant",
  "activeModel": "covenant-agent"
}
EOF
    echo "✅ Created model override configuration"
fi

# Step 9: Finalize
echo -e "${BLUE}✨ Step 9: Finalizing Setup...${NC}"

# Make scripts executable
find "$HOME/.hyper_plugins/local/covenant-agent-extensions" -name "*.js" -type f -exec chmod +x {} \; 2>/dev/null || true
chmod +x "$HOME/.hyper_shell_init.sh" 2>/dev/null || true

echo ""
echo -e "${GREEN}✅ Bootstrap Complete!${NC}"
echo "=================================="
echo ""
echo "Next steps:"
echo "1. Restart your terminal or run: source ~/.bashrc"
echo "2. Launch Hyper Terminal"
echo "3. The agent will auto-launch on first boot"
echo ""
echo "To switch models, use:"
echo "  covenant:model:switch [provider] [model]"
echo ""
echo "Available providers:"
echo "  - covenant (default)"
echo "  - ollama (http://localhost:11434/v1)"
echo "  - lmstudio (http://localhost:1234/v1)"
echo "  - openai (https://api.openai.com/v1)"
echo ""
