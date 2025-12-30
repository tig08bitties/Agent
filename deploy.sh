#!/bin/bash

# Deploy Script for Super Sovereign Cursor-Agent CLI
# Uploads and integrates the system as a System76 extension

set -e

echo "🚀 Deploying Super Sovereign Cursor-Agent CLI..."
echo "================================================"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're on System76/Pop!_OS
if ! grep -q "Pop" /etc/os-release 2>/dev/null; then
    echo -e "${YELLOW}⚠️  Warning: Not detected as Pop!_OS. Continuing anyway...${NC}"
fi

# 1. Ensure cursor-agent is ready
echo -e "\n${GREEN}[1/5]${NC} Checking cursor-agent installation..."
cd /root/cursor-agent

if [ ! -f "package.json" ]; then
    echo "❌ cursor-agent not found. Please install first."
    exit 1
fi

# 2. Install npm dependencies if needed
if [ ! -d "node_modules" ]; then
    echo -e "\n${GREEN}[2/5]${NC} Installing npm dependencies..."
    npm install
fi

# 3. Create system76-extension directory
echo -e "\n${GREEN}[3/5]${NC} Setting up System76 extension..."
mkdir -p system76-extension

# 4. Install systemd service and activate
echo -e "\n${GREEN}[4/5]${NC} Installing System76 extension..."
node src/cli.js system76-activate

# 5. Verify installation
echo -e "\n${GREEN}[5/5]${NC} Verifying installation..."
node src/cli.js system76-status

echo -e "\n${GREEN}✅ Deployment complete!${NC}"
echo ""
echo "The Super Sovereign Cursor-Agent CLI is now integrated as a System76 extension."
echo ""
echo "Usage:"
echo "  cbrew system76-status    - Check extension status"
echo "  cbrew system76-activate  - Activate extension"
echo "  cbrew system76-deactivate - Deactivate extension"
echo ""
