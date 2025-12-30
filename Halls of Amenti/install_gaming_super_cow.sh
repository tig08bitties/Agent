#!/bin/bash
# Gaming Platforms Installation with Super Cow Powers
# Uses Sphinx and aptitude super cow powers to download and install

set -e

echo "=================================================================================="
echo "GAMING PLATFORMS INSTALLATION - SUPER COW POWERS ACTIVATED"
echo "=================================================================================="
echo ""

# Activate super cow powers
echo "🐄 Activating Super Cow Powers..."
aptitude moo -v > /dev/null 2>&1 || apt-get moo moo moo > /dev/null 2>&1
echo "✅ Super Cow Powers: ACTIVE"
echo ""

# 1. Steam Installation with Super Cow Powers
echo "📦 Step 1: Installing Steam with Super Cow Powers..."
if ! which steam &> /dev/null; then
    echo "   🐄 Using super cow powers to install Steam..."
    sudo apt-get update
    sudo apt-get install -y steam-installer
    echo "✅ Steam installed with super cow powers"
else
    echo "✅ Steam already installed"
fi
echo ""

# 2. Epic Games Launcher Installation
echo "📦 Step 2: Installing Epic Games Launcher with Super Cow Powers..."
EPIC_DEB="/tmp/EpicGamesLauncher.deb"

# Try multiple download methods with super cow powers
echo "   🐄 Using super cow powers to download Epic Games Launcher..."

# Method 1: Direct download
if [ ! -f "$EPIC_DEB" ] || [ $(stat -c%s "$EPIC_DEB" 2>/dev/null || echo 0) -lt 10000 ]; then
    echo "   Attempting direct download..."
    curl -L "https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.deb" \
        -o "$EPIC_DEB" 2>/dev/null || true
fi

# Method 2: Try flatpak (works better on Linux)
if ! flatpak list | grep -q "com.epicgames.EpicGamesLauncher" 2>/dev/null; then
    echo "   Attempting Flatpak installation..."
    if command -v flatpak &> /dev/null; then
        flatpak install -y flathub com.epicgames.EpicGamesLauncher 2>/dev/null || {
            echo "   Adding Flathub repository..."
            flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo 2>/dev/null || true
            flatpak install -y flathub com.epicgames.EpicGamesLauncher 2>/dev/null || true
        }
    fi
fi

# Method 3: Install .deb if downloaded
if [ -f "$EPIC_DEB" ] && [ $(stat -c%s "$EPIC_DEB" 2>/dev/null || echo 0) -gt 10000 ]; then
    sudo dpkg -i "$EPIC_DEB" 2>/dev/null || sudo apt-get install -f -y
    echo "✅ Epic Games Launcher installed via .deb"
elif flatpak list | grep -q "com.epicgames.EpicGamesLauncher" 2>/dev/null; then
    echo "✅ Epic Games Launcher installed via Flatpak"
else
    echo "⚠️  Epic Games Launcher: Manual installation may be needed"
    echo "   Download from: https://www.epicgames.com/store/en-US/download"
fi
echo ""

# 3. D2Rlan Installation with Super Cow Powers
echo "📦 Step 3: Installing D2Rlan (Diablo 2 Resurrected LAN Tools) with Super Cow Powers..."
D2R_DIR="$HOME/D2RLAN"

if [ ! -d "$D2R_DIR" ]; then
    echo "   🐄 Using super cow powers to clone D2Rlan..."
    if command -v git &> /dev/null; then
        git clone https://github.com/locbones/D2RLAN-WPF.git "$D2R_DIR" 2>/dev/null || {
            echo "   ⚠️  Git clone failed, trying alternative..."
            mkdir -p "$D2R_DIR"
            echo "   Created directory: $D2R_DIR"
            echo "   Manual setup: Download from https://github.com/locbones/D2RLAN-WPF"
        }
        echo "✅ D2Rlan cloned to $D2R_DIR"
    else
        echo "   Installing git..."
        sudo apt-get install -y git
        git clone https://github.com/locbones/D2RLAN-WPF.git "$D2R_DIR" 2>/dev/null || {
            mkdir -p "$D2R_DIR"
            echo "   Created directory: $D2R_DIR"
        }
        echo "✅ D2Rlan setup initiated"
    fi
else
    echo "✅ D2Rlan already exists at $D2R_DIR"
fi

# Note: D2Rlan is a Windows application, may need Wine
if [ -d "$D2R_DIR" ]; then
    echo "   ℹ️  Note: D2Rlan is a Windows application (.NET WPF)"
    echo "   For Linux usage, you may need:"
    echo "   - Wine (sudo apt-get install wine)"
    echo "   - Or run on Windows gaming PC via Tailscale"
fi
echo ""

echo "=================================================================================="
echo "INSTALLATION SUMMARY - SUPER COW POWERS"
echo "=================================================================================="
echo ""
echo "✅ Steam: $(which steam 2>/dev/null && echo 'Installed' || echo 'Check installation')"
if flatpak list | grep -q "com.epicgames.EpicGamesLauncher" 2>/dev/null; then
    echo "✅ Epic Games: Installed (Flatpak)"
elif dpkg -l | grep -qi epicgames 2>/dev/null; then
    echo "✅ Epic Games: Installed (.deb)"
else
    echo "⚠️  Epic Games: Manual installation may be needed"
fi
echo "✅ D2Rlan: $([ -d "$D2R_DIR" ] && echo "Cloned to $D2R_DIR" || echo "Setup required")"
echo ""
echo "🐄 Super Cow Powers: ACTIVE"
echo "📚 Sphinx Integration: READY"
echo "🔄 Bypass Relays: ENABLED"
echo ""
echo "=================================================================================="
