#!/usr/bin/env node

/**
 * System76 Extension Integration
 * 
 * Provides System76-specific integration for the Super Sovereign Cursor-Agent CLI
 * - Systemd service management
 * - COSMIC desktop integration
 * - System76 hardware integration
 * - Power management hooks
 */

import { execSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

export class System76Extension {
  constructor(cursorAgentHome = '/root/cursor-agent') {
    this.cursorAgentHome = cursorAgentHome;
    this.extensionPath = join(cursorAgentHome, 'system76-extension');
    this.serviceName = 'cursor-agent.service';
    this.servicePath = `/etc/systemd/system/${this.serviceName}`;
  }

  /**
   * Activate the System76 extension
   */
  activate() {
    console.log('[System76] Activating Super Sovereign Cursor-Agent Extension...\n');
    
    try {
      // 1. Install systemd service
      this._installService();
      
      // 2. Setup mount points
      this._setupMounts();
      
      // 3. Enable service
      this._enableService();
      
      // 4. Start service
      this._startService();
      
      // 5. Create COSMIC desktop entry
      this._createDesktopEntry();
      
      console.log('\n✅ System76 Extension activated successfully!');
      console.log('   Service: cursor-agent.service');
      console.log('   Status: Active and enabled');
      
      return { success: true };
    } catch (error) {
      console.error(`\n❌ Error activating extension: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  /**
   * Deactivate the System76 extension
   */
  deactivate() {
    console.log('[System76] Deactivating extension...\n');
    
    try {
      // Stop service
      execSync(`systemctl stop ${this.serviceName}`, { stdio: 'inherit' });
      
      // Disable service
      execSync(`systemctl disable ${this.serviceName}`, { stdio: 'inherit' });
      
      // Unmount points
      this._unmountPoints();
      
      console.log('\n✅ System76 Extension deactivated');
      
      return { success: true };
    } catch (error) {
      console.error(`\n❌ Error deactivating: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  /**
   * Get extension status
   */
  status() {
    try {
      const isActive = execSync(`systemctl is-active ${this.serviceName}`, {
        encoding: 'utf-8'
      }).trim() === 'active';
      
      const isEnabled = execSync(`systemctl is-enabled ${this.serviceName}`, {
        encoding: 'utf-8'
      }).trim() === 'enabled';
      
      return {
        active: isActive,
        enabled: isEnabled,
        service: this.serviceName
      };
    } catch (error) {
      return {
        active: false,
        enabled: false,
        service: this.serviceName,
        error: error.message
      };
    }
  }

  _installService() {
    const serviceFile = join(this.extensionPath, this.serviceName);
    
    if (!existsSync(serviceFile)) {
      throw new Error(`Service file not found: ${serviceFile}`);
    }
    
    console.log('[System76] Installing systemd service...');
    execSync(`sudo-rs cp ${serviceFile} ${this.servicePath}`, { stdio: 'inherit' });
    execSync(`sudo-rs systemctl daemon-reload`, { stdio: 'inherit' });
  }

  _setupMounts() {
    const manifestPath = join(this.cursorAgentHome, 'manifest.json');
    
    if (!existsSync(manifestPath)) {
      console.log('[System76] No manifest.json found, skipping mounts');
      return;
    }
    
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
    const mounts = manifest.mount_points || [];
    
    console.log('[System76] Setting up mount points...');
    
    for (const mount of mounts) {
      const src = join(this.cursorAgentHome, 'merged-stack', mount.src);
      const target = mount.target;
      
      // Create source directory if needed
      execSync(`mkdir -p ${src}`, { stdio: 'pipe' });
      
      // Mount bind
      try {
        execSync(`sudo-rs mount --bind ${src} ${target}`, { stdio: 'pipe' });
        console.log(`   ✅ Mounted ${src} -> ${target}`);
      } catch (error) {
        // Already mounted or failed
        console.log(`   ⚠️  Mount ${target} already exists or failed`);
      }
    }
  }

  _unmountPoints() {
    const manifestPath = join(this.cursorAgentHome, 'manifest.json');
    
    if (!existsSync(manifestPath)) {
      return;
    }
    
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
    const mounts = manifest.mount_points || [];
    
    for (const mount of mounts) {
      const target = mount.target;
      try {
        execSync(`sudo-rs umount ${target}`, { stdio: 'pipe' });
      } catch (error) {
        // Not mounted or already unmounted
      }
    }
  }

  _enableService() {
    console.log('[System76] Enabling service...');
    execSync(`sudo-rs systemctl enable ${this.serviceName}`, { stdio: 'inherit' });
  }

  _startService() {
    console.log('[System76] Starting service...');
    execSync(`sudo-rs systemctl start ${this.serviceName}`, { stdio: 'inherit' });
  }

  _createDesktopEntry() {
    const desktopEntry = `[Desktop Entry]
Name=Cursor-Agent CLI
Comment=Super Sovereign Cursor-Agent Package Manager
Exec=/usr/local/bin/cbrew
Icon=application-x-executable
Terminal=true
Type=Application
Categories=System;PackageManager;
Keywords=package;manager;cursor;agent;system76;
`;
    
    const desktopPath = '/usr/share/applications/cursor-agent.desktop';
    
    try {
      writeFileSync('/tmp/cursor-agent.desktop', desktopEntry);
      execSync(`sudo-rs cp /tmp/cursor-agent.desktop ${desktopPath}`, { stdio: 'pipe' });
      execSync(`sudo-rs chmod 644 ${desktopPath}`, { stdio: 'pipe' });
      console.log('[System76] Created COSMIC desktop entry');
    } catch (error) {
      console.log(`[System76] ⚠️  Could not create desktop entry: ${error.message}`);
    }
  }
}
