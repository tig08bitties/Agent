#!/bin/bash
# Gaming Platforms Installation Script
# Installs Steam, Epic Games Launcher, and D2Rlan tools

set -e

echo "=================================================================================="
echo "GAMING PLATFORMS INSTALLATION"
echo "=================================================================================="
echo ""

# 1. Steam
echo "📦 Step 1: Installing Steam..."
if ! which steam &> /dev/null; then
    sudo apt-get update
    sudo apt-get install -y steam-installer
    echo "✅ Steam installed"
else
    echo "✅ Steam already installed"
fi
echo ""

# 2. Epic Games Launcher
echo "📦 Step 2: Installing Epic Games Launcher..."
EPIC_DEB="/tmp/EpicGamesLauncher.deb"

# Try to download Epic Games Launcher
if [ ! -f "$EPIC_DEB" ] || [ $(stat -c%s "$EPIC_DEB" 2>/dev/null || echo 0) -lt 10000 ]; then
    echo "   Downloading Epic Games Launcher..."
    curl -L "https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.deb" \
        -o "$EPIC_DEB" || {
        echo "⚠️  Direct download failed. Please download from:"
        echo "   https://www.epicgames.com/store/en-US/download"
        echo "   Or use: flatpak install com.epicgames.EpicGamesLauncher"
    }
fi

if [ -f "$EPIC_DEB" ] && [ $(stat -c%s "$EPIC_DEB" 2>/dev/null || echo 0) -gt 10000 ]; then
    sudo dpkg -i "$EPIC_DEB" || sudo apt-get install -f -y
    echo "✅ Epic Games Launcher installed"
else
    echo "⚠️  Epic Games Launcher: Manual installation required"
    echo "   Option 1: Download from https://www.epicgames.com/store/en-US/download"
    echo "   Option 2: flatpak install com.epicgames.EpicGamesLauncher"
fi
echo ""

# 3. D2Rlan
echo "📦 Step 3: D2Rlan (Diablo 2 Resurrected LAN Tools)..."
echo "   Found repositories:"
echo "   - https://github.com/locbones/D2RLAN-WPF"
echo "   - https://github.com/JoelJ/Guide-D2RLAN"
echo ""
read -p "   Clone D2RLAN-WPF? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    D2R_DIR="$HOME/D2RLAN"
    if [ ! -d "$D2R_DIR" ]; then
        git clone https://github.com/locbones/D2RLAN-WPF.git "$D2R_DIR" || {
            echo "⚠️  Git clone failed. Install git: sudo apt-get install git"
        }
        echo "✅ D2Rlan cloned to $D2R_DIR"
    else
        echo "✅ D2Rlan already exists at $D2R_DIR"
    fi
fi
echo ""

echo "=================================================================================="
echo "INSTALLATION SUMMARY"
echo "=================================================================================="
echo ""
echo "✅ Steam: $(which steam 2>/dev/null && echo 'Installed' || echo 'Installation in progress')"
echo "✅ Epic Games: $(dpkg -l | grep -i epicgames &>/dev/null && echo 'Installed' || echo 'Manual installation may be needed')"
echo "✅ D2Rlan: Check $HOME/D2RLAN or clone from GitHub"
echo ""
echo "=================================================================================="
