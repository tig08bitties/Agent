#!/bin/bash
# Installation script for Universal Agent with Bypass Relays

set -e

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  Universal Agent with Bypass Relays - Installation        ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed"
    exit 1
fi
echo "✅ Python 3 found: $(python3 --version)"

# Check Node.js (optional for CLI)
if command -v node &> /dev/null; then
    echo "✅ Node.js found: $(node --version)"
    NODE_AVAILABLE=true
else
    echo "⚠️  Node.js not found (CLI will be limited)"
    NODE_AVAILABLE=false
fi

# Install Python dependencies
echo ""
echo "📦 Installing Python dependencies..."
pip3 install --user -q requests || echo "⚠️  Some dependencies may be missing"

# Install Node.js dependencies (if available)
if [ "$NODE_AVAILABLE" = true ]; then
    echo ""
    echo "📦 Installing Node.js dependencies..."
    if [ -f "package.json" ]; then
        npm install --silent || echo "⚠️  npm install had issues"
    fi
fi

# Make scripts executable
echo ""
echo "🔧 Making scripts executable..."
chmod +x bypass_relay_system.py 2>/dev/null || true
chmod +x universal_agent_with_relays.py 2>/dev/null || true
chmod +x cli_with_relays.js 2>/dev/null || true
chmod +x rosetta_stone_system.py 2>/dev/null || true

# Initialize configuration
echo ""
echo "⚙️  Initializing configuration..."
python3 -c "
from universal_agent_with_relays import UniversalAgentWithRelays
import json
import os
from pathlib import Path

config_path = Path.home() / '.universal-agent'
config_path.mkdir(exist_ok=True)

config = {
    'relay_enabled': True,
    'relay_mode': 'full'
}

config_file = config_path / 'config.json'
with open(config_file, 'w') as f:
    json.dump(config, f, indent=2)

print(f'✅ Configuration saved to {config_file}')
" 2>/dev/null || echo "⚠️  Configuration initialization skipped"

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                    Installation Complete                   ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "Usage:"
echo "  python3 universal_agent_with_relays.py 'DAUS'"
if [ "$NODE_AVAILABLE" = true ]; then
    echo "  node cli_with_relays.js goal 'DAUS'"
    echo "  node cli_with_relays.js chat"
fi
echo ""
echo "✅ Ready to use!"
