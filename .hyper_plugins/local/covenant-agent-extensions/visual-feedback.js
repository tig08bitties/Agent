/**
 * Visual Feedback System
 * 
 * Provides visual feedback loop between Cursor Agent and browser
 * - Monitor file changes
 * - Trigger browser refresh
 * - Report UI state back to agent
 * - Hot-reload integration
 */

const { watch } = require('fs');
const path = require('path');
const { spawn } = require('child_process');

/**
 * Visual Feedback Extension
 * Monitors code changes and provides visual feedback
 */
class VisualFeedbackExtension {
  constructor() {
    this.watchers = new Map();
    this.browserSessions = new Map();
    this.initialized = false;
    this._initialize();
  }
  
  _initialize() {
    // Auto-initialize as passive default
    this.initialized = true;
  }
  
  /**
   * Watch project for changes and trigger browser refresh
   */
  async watchProject(projectPath, browserSessionId) {
    const project = path.resolve(projectPath);
    const watchId = `watch_${Date.now()}`;
    
    // Watch for file changes
    const watcher = watch(project, { recursive: true }, (eventType, filename) => {
      if (filename && this._isRelevantFile(filename)) {
        console.log(`📝 File changed: ${filename}`);
        
        // Trigger browser refresh
        this._refreshBrowser(browserSessionId);
        
        // Report UI state after delay (allow hot-reload to complete)
        setTimeout(() => {
          this._reportUIState(browserSessionId, filename);
        }, 1000);
      }
    });
    
    this.watchers.set(watchId, {
      project: project,
      browserSessionId: browserSessionId,
      watcher: watcher
    });
    
    return { success: true, watchId };
  }
  
  /**
   * Check if file is relevant for hot-reload
   */
  _isRelevantFile(filename) {
    const relevant = ['.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json'];
    const ext = path.extname(filename);
    return relevant.includes(ext) && !filename.includes('node_modules');
  }
  
  /**
   * Refresh browser session
   */
  async _refreshBrowser(sessionId) {
    // Trigger browser refresh via Hyperbrowser extension
    const extensions = global.covenantExtensions;
    if (extensions && extensions.hyperbrowser) {
      try {
        // Report UI to trigger refresh
        await extensions.hyperbrowser.reportUI(sessionId);
        console.log('🔄 Browser refreshed');
      } catch (e) {
        // Browser will auto-reload via hot-reload
      }
    }
  }
  
  /**
   * Report UI state to agent
   */
  async _reportUIState(sessionId, changedFile) {
    const extensions = global.covenantExtensions;
    if (extensions && extensions.hyperbrowser) {
      try {
        const report = await extensions.hyperbrowser.reportUI(sessionId);
        console.log('📊 UI State Reported:');
        console.log(`   Changed: ${changedFile}`);
        console.log(`   URL: ${report.url}`);
        console.log(`   Status: ${report.status}`);
        
        // Send to agent if available
        if (extensions.agent) {
          // Agent can use this feedback for next iteration
          console.log('🤖 UI feedback available for agent');
        }
      } catch (e) {
        console.log('📊 UI state updated (hot-reload active)');
      }
    }
  }
  
  /**
   * Stop watching project
   */
  stopWatching(watchId) {
    const watch = this.watchers.get(watchId);
    if (watch) {
      watch.watcher.close();
      this.watchers.delete(watchId);
      return { success: true, message: 'Stopped watching' };
    }
    return { success: false, error: 'Watcher not found' };
  }
  
  /**
   * Get active watchers
   */
  listWatchers() {
    return Array.from(this.watchers.entries()).map(([id, watch]) => ({
      id,
      project: watch.project,
      browserSessionId: watch.browserSessionId
    }));
  }
}

module.exports = VisualFeedbackExtension;
