// ~/.hyper.js
// Covenant Agent Optimized Configuration
// 
// The config object admits the following structure for optimal Covenant Agent TUI experience

module.exports = {
  config: {
    // Font configuration for covenant symbols (🐄, 🔄, 📚, 🔑, 🌾)
    // NerdFonts for enhanced icon support - FiraCode Nerd Font installed
    fontSize: 13,
    fontFamily: '"FiraCode Nerd Font", "FiraCode Nerd Font Mono", "Fira Code", "MesloLGS NF", "MesloLGSDZ Nerd Font", "DejaVu Sans Mono", "Monospace", monospace',
    
    // Colors - Covenant dark theme optimized for TUI
    backgroundColor: '#1e1e1e',
    foregroundColor: '#d4d4d4',
    cursorColor: '#d4d4d4',
    borderColor: '#333333',
    selectionColor: 'rgba(212, 212, 212, 0.3)',
    
    // Color palette for covenant symbols
    colors: {
      black: '#1e1e1e',
      red: '#f48771',
      green: '#89d287',
      yellow: '#f7c45e',
      blue: '#7eb3c9',
      magenta: '#c397d8',
      cyan: '#70c0ba',
      white: '#d4d4d4',
      lightBlack: '#666666',
      lightRed: '#f48771',
      lightGreen: '#89d287',
      lightYellow: '#f7c45e',
      lightBlue: '#7eb3c9',
      lightMagenta: '#c397d8',
      lightCyan: '#70c0ba',
      lightWhite: '#ffffff',
    },
    
    // Enable true color (24-bit) for Textual/prompt_toolkit
    termCSS: `
      x-screen {
        -webkit-font-feature-settings: "liga" on, "calt" on;
      }
      x-screen x-row {
        font-variant-ligatures: initial;
      }
    `,
    
    // Performance settings for real-time TUI interaction
    webGLRenderer: true,
    webLinksActivationKey: 'ctrl',
    
    // Scrolling - large history for covenant agent conversations
    scrollback: 10000,
    
    // Unicode support - full emoji and covenant symbol support
    unicodeVersion: '11',
    
    // Shell for Covenant Agent - Auto-launch on startup
    shell: '/bin/bash',
    shellArgs: ['--login', '-c', 'source ~/.hyper_shell_init.sh; exec bash'],
    
    // Padding for better TUI display
    padding: '5px 10px',
    
    // Window settings
    opacity: 1.0,
    windowSize: [1200, 800],
    
    // Copy on select
    copyOnSelect: true,
    
    // Default profile
    defaultProfile: 'default',
    
    // Plugins for enhanced Covenant Agent experience
    plugins: [
      // 'hyper-statusline',      // Status bar (install: hyper i hyper-statusline)
      // 'hyper-pane',            // Split panes (install: hyper i hyper-pane)
      // 'hyper-search',          // Search (install: hyper i hyper-search)
      // 'hypercwd',              // Current directory (install: hyper i hypercwd)
      // 'hyper-font-ligatures',  // Font ligatures support (install: hyper i hyper-font-ligatures)
    ],
    
    // Local plugins - Covenant Agent Extensions
    localPlugins: [
      'covenant-agent-extensions'  // Sphinx, GitHub, Jules, Agent integrations
    ],
    
    // Keymaps for Covenant Agent shortcuts
    keymaps: {
      // Clear buffer
      'cmd+k': 'editor:clearBuffer',
      'ctrl+l': 'editor:clearBuffer',
      // Pane navigation (if hyper-pane installed)
      // 'cmd+left': 'pane:prev',
      // 'cmd+right': 'pane:next',
    },
    
    // CSS for Covenant Agent TUI styling
    css: `
      /* Covenant Agent TUI Optimizations */
      .hyper_main {
        background-color: #1e1e1e;
      }
      
      /* Better Unicode/Emoji rendering for covenant symbols */
      .unicode-emoji {
        font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif;
      }
      
      /* Covenant symbols support with ligatures */
      .covenant-symbol {
        font-feature-settings: "liga" on, "calt" on;
      }
      
      /* Smooth scrolling for TUI applications */
      x-screen {
        scroll-behavior: smooth;
      }
      
      /* Cursor styling */
      .cursor {
        background-color: #d4d4d4;
        opacity: 0.8;
      }
    `,
  },
  
  // Plugin configurations
  plugins: [],
  
  // Local plugins (if any)
  localPlugins: [],
  
  // Hyper version
  hyperVersion: '3.0.0',
};
