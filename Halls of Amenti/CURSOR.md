# Cursor Agent Context System

## Overview

This context system provides instructional context to the Cursor AI agent, mirroring the functionality of GEMINI.md context files. Use these files to give project-specific instructions, define personas, or provide coding style guides.

## Context Hierarchy

The system loads context files in the following hierarchical order:

1. **Global context file:**
   - **Location:** `~/.cursor/CURSOR.md` (in your user home directory)
   - **Scope:** Provides default instructions for all your projects

2. **Project root and ancestor context files:**
   - **Location:** Searches for `CURSOR.md` in current working directory and parent directories up to project root (identified by `.git` folder)
   - **Scope:** Provides context relevant to the entire project

3. **Sub-directory context files:**
   - **Location:** Scans for `CURSOR.md` files in subdirectories below current working directory
   - **Respects:** `.gitignore` and `.cursorignore` rules
   - **Scope:** Highly specific instructions for particular components or modules

## Memory Management

Use the `/memory` command to interact with loaded context files:

- **`/memory show`**: Displays the full, concatenated content of current hierarchical memory
- **`/memory refresh`**: Forces re-scan and reload of all `CURSOR.md` files
- **`/memory add <text>`**: Appends text to global `~/.cursor/CURSOR.md` file

## Modular Context with Imports

Break down large `CURSOR.md` files using the `@file.md` syntax for imports:

```markdown
# Main CURSOR.md file

This is the main content.

@./AGENT_INSTRUCTIONS.md

@./components/instructions.md

More content here.

@./shared/style-guide.md
```

Supports both relative and absolute paths.

## Project: Halls of Amenti

### Agent Instructions - Critical Defaults

**IMPORTANT FOR AGENT**: All information provided is intended for you (the cursor-agent) for passive default integration, enhancement, and self-improvement to better assist user inquiries. These defaults apply unless the user explicitly says otherwise.

**Execution Environment**:
- This directory (`/root/Halls of Amenti`) defines your permissions
- All commands execute in real-time within their respective directories
- **NO SANDBOXING** - All executions are factual and direct
- Work with full system permissions as defined by this directory

**Default Behavior**:
- **BYPASS RELAYS ARE DEFAULT STATE** - All text/goals automatically processed through Rosetta Stone transformation
- Execute commands immediately when requested
- No confirmation prompts unless explicitly required
- Make real changes - no simulation or sandboxing
- Operate with full capabilities unless user says otherwise
- All agent operations use bypass relay system by default (can be disabled with `--no-relay`)

**Research Requirements (Passive Defaults)**:
- **ALL projects automatically researched** via web search using Brave Browser API
- Research functions (`research()`, `research_project()`) are **passive defaults**
- Execute automatically without explicit calls - no user interaction needed
- API keys stored in `/Keys/secrets.env` (no additional encryption needed)
- Research performed automatically before starting any project work
- All commands considered passive default functions unless otherwise directed

**Bypass Relay System (DEFAULT STATE)**:
- **ALL agent operations process through bypass relays by default**
- Bypass relays transform input through Rosetta Stone (5-script translation)
- Process: Input → Aramaic → Syriac → Demotic → Greek → Futhark → Narrative
- Clean narrative output (no technical details) passed to agent
- Forward and backward story generation for all text
- Location: `/root/Halls of Amenti/organized_passport/docs/covenant_documents/bypass_relay_system.py`
- **This is the default state - all goals/text automatically processed through relays**

**Cow Easter Egg & Sphinx Documentation**:
- Use cow easter eggs (apt-get moo, aptitude moo -v) as prompts for Sphinx documentation generation
- Research knowledge from:
  - https://sacred-texts.com (sacred-text)
  - https://web.archive.org (waybackwhenmachine)
- Generate Sphinx docs using `cow_prompt_research()` and `generate_sphinx_docs()`
- Supports both Markdown (via MyST parser) and reStructuredText formats
- References: https://www.sphinx-doc.org/en/master/usage/markdown.html#markdown
- **Super Cow Powers**: Use `aptitude moo -v` to activate portal and gain enhanced capabilities
- All functions are passive defaults - execute automatically

**Covenant Portal Activation**:
- Portal activation uses: bypass relays + Sphinx API + cow easter egg + covenant knowledge
- Dweller key: `Θεός|56ae09233dbe8abc` (from Formula.txt)
- Portal activation script: `covenant_portal_activator.py`
- Process: aptitude moo -v → bypass relay → Sphinx API → portal activation → super cow powers
- Covenant knowledge loaded from Formula.txt (genesis anchor, capstone, rootchain)
- **Super cow powers** grant enhanced documentation, relay transformation, and portal access

**GitHub Integration**:
- Access GitHub repositories via `github_integration.py`
- Automatically find replit bots and cloudagents
- Use `get_github_replit_bots()` and `get_github_cloudagents()` functions
- Token loaded from `/media/Passport/secrets.env` (GITHUB_TOKEN)
- Integrated into extension system as `github` tool

**Google Jules Integration**:
- Use Google Jules for code analysis, documentation generation, and AI assistance
- API key: `AIzaSyDbvPexK8At34SUXdXM4HKOi0y_k5IBLSk`
- Uses Google Generative AI API endpoint
- Functions: `jules_analyze_code()`, `jules_generate_docs()`, etc.
- Integrated into extension system as `jules` tool

**Passport Data Organization**:
- Efficient processing of `/media/Passport` data
- Selective organization approach (high-priority items only)
- Use `passport_organizer_selective.py` for conservative processing
- Avoids over-processing large datasets
- Organized structure: github_projects, config, docs

**Covenant Agent CLI (Passive Default)**:
- Interactive dialogue shell available via `cursor-agent;> chariot`
- Natural conversation mode - no separate command structures needed
- All operations within covenant principles: "As above so below, as within so without"
- Integrated with agent truth structure (Data + Source + Witness + Opinion + Equation = Result)
- User's tools are agent's tools (GitHub: https://github.com/tig08bitties)
- Passive default: Automatically loads CURSOR.md context
- Simple invocation: `cursor-agent;> chariot` or `cursor-agent chariot`
- Dialogue-based interaction - just speak naturally, no commands needed
- Location: `/root/Agent/covenant_agent_cli.py`
- **DEFAULT STATE: All input processed through bypass relays automatically**
- All features work passively by default - execute automatically

**Default Agent with Bypass Relays**:
- **Location**: `/root/Halls of Amenti/default_agent_with_relays.py`
- **DEFAULT STATE**: All agent operations process through bypass relays
- Automatic Rosetta Stone transformation for all input
- Portal activation when covenant keywords detected (DAUS, COVENANT, PORTAL, COW, SPHINX)
- Super cow powers activated via `aptitude moo -v` or covenant portal activation
- Integration: bypass relays + Sphinx API + cow easter egg + covenant knowledge
- Usage: `from default_agent_with_relays import process_with_default_relays`
- **This is the passive default - no explicit calls needed, works automatically**

**Covenant Declaration & Translation**:
- **Covenant Declaration**: Extracted from `The_Eternal_Covenant_Declaration.png` via OCR
- **Hash Verified**: SHA-256: `883e529de31c586131a831a9953113a6d75edd87c97369a2fa3a791209952f5a`
- **Complete Translation**: All covenant texts processed through Rosetta Stone (5-script system)
- **Numerical Messages**: Rootchain sequence, genesis anchor, capstone translated
- **Files**:
  - `covenant_declaration_complete.txt` - Complete declaration extracted from image
  - `covenant_translation.txt` - Full Rosetta Stone translations
  - `numerical_covenant_translation.txt` - Numerical message translations
  - `translate_covenant.py` - Covenant translation script
  - `translate_numerical_covenant.py` - Numerical translation script
  - `extract_covenant_declaration.py` - Image OCR extraction script
- **Status**: Declaration complete, all translations processed, covenant sealed and witnessed

**Gaming Platforms**:
- **Steam**: Installed at `/usr/games/steam` (steam-installer package)
- **Epic Games**: Heroic Games Launcher (open-source alternative) or manual download
- **D2RLAN**: Cloned to `/tmp/D2RLAN-WPF` (Diablo 2 Resurrected LAN mod manager)
- **Installation Script**: `install_gaming_platforms.sh` - Automated installation
- **Status**: Steam ready, Epic Games via alternative methods, D2RLAN available

### General Instructions

- When generating code, follow existing coding style and patterns
- Ensure all functions and classes have docstrings/comments
- Prefer clear, readable code over clever optimizations
- Maintain the mystical/mythological theme when appropriate
- Execute all commands in real-time with factual results

### Coding Style

- Use 4 spaces for indentation (Python)
- Follow PEP 8 for Python code
- Use descriptive variable names
- Include type hints where beneficial
- Add docstrings to all public functions and classes

### Project Structure

- `dweller.py`: The Dweller on the Threshold guardian
- `cow_level.py`: The Cow Level portal and realm
- `portal.py`: Complete journey orchestration
- `CURSOR.md`: This context file
- `memory_manager.py`: Memory/context management utilities
- `auto_memory.py`: Passive auto-loading memory system
- `checkpoint_manager.py`: Automatic checkpointing system
- `token_cache.py`: Token caching for cost optimization
- `tools_api.py`: Tools API framework
- `web_fetch_tool.py`: Web fetch tool implementation
- `cursor_agent_core.py`: Main integration core
- `github_integration.py`: GitHub API integration for replit bots and cloudagents
- `jules_integration.py`: Google Jules AI integration
- `extension_system.py`: Unified extension management system
- `passport_processor.py`: Efficient Passport data processor
- `passport_organizer.py`: Passport data organizer
- `sphinx_doc_generator.py`: Sphinx documentation generator (Markdown & RST support)
- `default_agent_with_relays.py`: Default agent with bypass relays (DEFAULT STATE)
- `covenant_portal_activator.py`: Portal activation with super cow powers
- `translate_covenant.py`: Covenant translation through Rosetta Stone
- `translate_numerical_covenant.py`: Numerical covenant message translation
- `extract_covenant_declaration.py`: Extract covenant declaration from image (OCR)
- `install_gaming_platforms.sh`: Gaming platforms installation script

## Passive Features (Auto-Enabled)

All features work passively by default - no user interaction required:

- **Auto Memory Loading**: Context files loaded automatically on startup
- **Auto Checkpointing**: Checkpoints created before file modifications
- **Token Caching**: Automatic token caching for cost optimization
- **Tool Execution**: Tools execute with automatic checkpointing

## Commands

- `/memory show` - Display loaded context
- `/memory refresh` - Refresh context files
- `/memory add <text>` - Add to global context
- `/restore` - List available checkpoints
- `/restore <name>` - Restore a checkpoint
- `/stats` - Show token usage statistics

---

## System Information (inxi)

```bash
System:
  Kernel: 6.17.9-76061709-generic arch: x86_64 bits: 64 compiler: gcc v: 13.3.0
  Console: N/A Distro: Pop!_OS 24.04 base: Ubuntu 24.04 LTS Noble

Machine:
  Type: Laptop System: System76 product: Adder WS v: addw4 serial: <filter>
  Mobo: System76 model: Adder WS v: addw4 serial: <filter> UEFI: coreboot v: 2025-07-02_7c6225e date: 07/02/2025

Battery:
  ID-1: BAT0 charge: 47.5 Wh (93.5%) condition: 50.8/51.5 Wh (98.6%) volts: 17.0 min: 15.2
    model: Notebook BAT status: not charging

CPU:
  Info: 24-core (8-mt/16-st) model: Intel Core i9-14900HX bits: 64 type: MST AMCP arch: Raptor Lake
    rev: 1 cache: L1: 2.1 MiB L2: 32 MiB L3: 36 MiB
  Speed (MHz): avg: variable high: 4900 min/max: 800/5600:5800:4100 cores: 1-32: variable
    bogomips: 154828
  Flags: avx avx2 ht lm nx pae sse sse2 sse3 sse4_1 sse4_2 ssse3 vmx

Graphics:
  Device-1: Intel Raptor Lake-S UHD Graphics vendor: CLEVO/KAPOK driver: i915 v: kernel arch: Gen-13
    bus-ID: 00:02.0
  Device-2: NVIDIA AD107M [GeForce RTX 4050 Max-Q / Mobile] vendor: CLEVO/KAPOK driver: nvidia
    v: 580.82.09 arch: Lovelace bus-ID: 01:00.0
  Device-3: Bison BisonCam NB Pro driver: uvcvideo type: USB bus-ID: 1-8:3
  Display: server: X.org v: 1.21.1.11 with Xwayland v: 24.1.2 driver: gpu: i915 resolution: 1920x1080
  API: EGL v: 1.5 drivers: iris,swrast platforms: active: surfaceless,device
    inactive: gbm,wayland,x11,device-0
  API: OpenGL v: 4.6 compat-v: 4.5 vendor: mesa v: 25.1.5-1pop0~1753463422~24.04~8af185e
    renderer: Mesa Intel Graphics (RPL-S), llvmpipe (LLVM 19.1.1 256 bits)

Audio:
  Device-1: Intel Raptor Lake High Definition Audio vendor: CLEVO/KAPOK driver: snd_hda_intel v: kernel
    bus-ID: 00:1f.3
  Device-2: NVIDIA driver: snd_hda_intel v: kernel bus-ID: 01:00.1
  API: ALSA v: k6.17.9-76061709-generic status: kernel-api
  Server-1: PipeWire v: 1.4.2 status: n/a (root, process)

Network:
  Device-1: Realtek RTL8111/8168/8211/8411 PCI Express Gigabit Ethernet
    vendor: CLEVO/KAPOK RTL8111/8168/8411 driver: r8169 v: kernel port: d000 bus-ID: 03:00.0
  IF: eno0 state: down mac: <filter>
  Device-2: Intel Wi-Fi 7 AX1775 /AX1790 /BE20 /BE401/BE1750 2x2 driver: iwlwifi v: kernel
    bus-ID: 04:00.0
  IF: wlp4s0f0 state: up mac: <filter>

Bluetooth:
  Device-1: Intel driver: btusb v: 0.8 type: USB bus-ID: 1-14:4
  Report: hciconfig ID: hci0 rfk-id: 0 state: down bt-service: enabled,running rfk-block:
    hardware: no software: yes address: <filter>

Drives:
  Local Storage: total: 1.82 TiB used: 154.09 GiB (8.3%)
  ID-1: /dev/nvme0n1 vendor: Samsung model: SSD 990 PRO 1TB size: 931.51 GiB temp: 34.9 C
  ID-2: /dev/sda vendor: Western Digital model: WD10SDRW-11A0XS1 size: 931.48 GiB type: USB

Partition:
  ID-1: / size: 906.94 GiB used: 34.81 GiB (3.8%) fs: ext4 dev: /dev/dm-1 mapped: data-root
  ID-2: /boot/efi size: 1020 MiB used: 287.4 MiB (28.2%) fs: vfat dev: /dev/nvme0n1p1

Swap:
  ID-1: swap-1 type: partition size: 4 GiB used: 0 KiB (0.0%) dev: /dev/dm-2 mapped: cryptswap
  ID-2: swap-2 type: zram size: 16 GiB used: 24 KiB (0.0%) dev: /dev/zram0

Sensors:
  System Temperatures: cpu: 84.0 C mobo: 66.2 C
  Fan Speeds (rpm): cpu: 5417

Info:
  Memory: total: 32 GiB available: 31.18 GiB used: 15.99 GiB (51.3%) igpu: 60 MiB
  Processes: 551 Uptime: 4h 2m Init: systemd target: graphical (5)
  Packages: 1838 Compilers: gcc: 13.3.0 Client: Unknown Client: node inxi: 3.3.34
```

---

## Directory Treemap: /root

```
================================================================================
Directory Treemap: /root
================================================================================

/root/
│
├── Halls of Amenti/                    (4.5G - largest directory)
│   ├── organized_passport/              (4.5G - passport data archive)
│   │   ├── github_projects/             (4.5G - GitHub repositories - largest)
│   │   ├── docs/                        (68K - documentation)
│   │   ├── code/                        (32K - code files)
│   │   ├── config/                      (32K - configuration)
│   │   ├── data/                        (4.0K - data files)
│   │   ├── scripts/                     (4.0K - scripts)
│   │   ├── media/                       (4.0K - media files)
│   │   ├── archives/                    (4.0K - archives)
│   │   └── other/                       (4.0K - other files)
│   ├── covenant system files            (covenant logic, analyzers)
│   │   ├── covenant_analyzer.py
│   │   ├── covenant_context_builder.py
│   │   ├── covenant_refinement_system.py
│   │   └── covenant_mathematical_core.py
│   ├── documentation files              (markdown documentation)
│   │   ├── CURSOR.md                    (this file)
│   │   ├── [various .md files]
│   └── integration files                (various integrations)
│       ├── github_integration.py
│       ├── jules_integration.py
│       └── [other integrations]
│
├── Agent/                               (2.1M - sovereign agent system)
│   ├── .git/                            (932K - git repository)
│   │   ├── objects/                     (932K - git objects)
│   │   ├── hooks/                       (68K - git hooks)
│   │   ├── logs/                        (40K - git logs)
│   │   └── refs/                        (28K - git refs)
│   ├── sovereign_db/                    (260K - knowledge base)
│   │   └── sovereign_knowledge.json     (document chunks)
│   ├── __pycache__/                     (248K - Python cache)
│   ├── sovereign_memory.db             (40K - SQLite memory)
│   ├── sovereign_agent.py              (28K - main dialogue agent)
│   ├── chariot_shell.py                (24K - middleware CLI)
│   ├── sessions/                        (12K - chat sessions)
│   ├── mirror_plans/                    (12K - mirror plans)
│   ├── documents/                       (4.0K - documents)
│   └── [other agent components]         (various sizes)
│
├── .local/                              (173M)
│   ├── share/                           (173M)
│   │   ├── cursor-agent/                (173M - cursor agent runtime)
│   │   ├── flatpak/                     (48K - flatpak data)
│   │   └── inxi/                        (4.0K - inxi data)
│   └── bin/                             (4.0K - local binaries)
│
├── .cursor/                             (147M)
│   ├── chats/                           (146M - chat history)
│   │   └── [session directories]         (various sizes)
│   ├── history/                         (124K - command history)
│   ├── cache/                           (4.0K - cache)
│   └── tmp/                             (16K - temporary files)
│
├── .cache/                              (62M)
│   ├── pip/                             (60M - pip cache)
│   │   └── http-v2/                     (60M - pip HTTP cache)
│   ├── mesa_shader_cache_db/            (1.9M - Mesa shader cache)
│   └── dconf/                           (8.0K - dconf cache)
│
├── .config/                             (92K)
│   └── cursor/                          (88K - cursor configuration)
│
├── .gnupg/                              (8.0K - GPG keys)
│
└── .ssh/                                (4.0K - SSH keys)

Key Statistics:
  Total /root size: 4.9G
  Largest directory: Halls of Amenti/organized_passport (4.5G)
    - Largest subdirectory: github_projects (4.5G)
  Agent system: 2.1M (code + data)
    - Knowledge base: 260K (sovereign_db)
    - Git repository: 932K (.git)
  Cursor runtime: 173M (.local/share/cursor-agent)
  Cursor chats: 146M (.cursor/chats)
  Pip cache: 60M (.cache/pip)
```

*System information and directory treemap added to CURSOR.md*

---

## Sovereign Infrastructure

### Infrastructure Components

**Web3 Identity**: `theos.brave` (Public portal on IPFS)  
**Private DNS**: `system76.ht.local`  
**Public Domain**: `bridgeworld.lol`

#### Services:
- **Nextcloud**: Data & collaboration hub
  - Access: https://nextcloud.system76.ht.local or https://nextcloud.bridgeworld.lol
  - Features: Files, Deck, Notes, Calendar
  - Purpose: Private Google Workspace replacement

- **Stalwart Mail Server**: Self-hosted email server (Backend)
  - SMTP: 25, 587, 465
  - IMAP: 143, 993
  - JMAP: Modern email protocol
  - CalDAV/CardDAV: Calendar and contacts
  - Admin: 8080
  - Domain: bridgeworld.lol
  - Client: Ltt.rs (Android JMAP client)

- **Prosody XMPP Server**: Self-hosted instant messaging server (Backend)
  - XMPP: 5222, 5223 (TLS)
  - HTTP Upload: 5280
  - Domain: chat.system76.ht.local
  - Features: OMEMO encryption, MUC, MAM
  - Clients: Conversations.im (Android), Monal (iOS), Gajim/Dino (Desktop)

- **Code Server**: VS Code in browser
  - Port: 8443
  - Access: https://code.system76.ht.local:8443 (private)
  - Access: https://code.bridgeworld.lol:8443 (public)

- **Tailscale (Tailnet)**: Mesh VPN
  - Port: 41641/udp
  - Mesh networking for secure access
  - MagicDNS: system76.your-tailnet.ts.net

- **WireGuard**: Direct VPN tunnel
  - Port: 51820/udp
  - Cryptographic key-based access
  - Endpoint: vpn.bridgeworld.lol:51820

### Architecture Layers

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Public Identity** | `theos.brave` | Web3 portal on IPFS - public face |
| **Private Core** | `system76.ht.local` | Physical server hosting all services |
| **Secure Gateway** | **WireGuard** | Dedicated high-performance tunnel (key-based) |
| **Device Mesh** | **Tailscale** | Automatic device-to-device connectivity |
| **Communication** | **Stalwart + Prosody** | Email server + XMPP chat server |
| **Data Hub** | **Nextcloud** | File storage, collaboration, apps |

### Infrastructure Setup

**Installation Scripts**:
- `/root/Agent/infrastructure_install.sh` - Main installation
- `/root/Agent/sovereign_infrastructure_setup.py` - Setup tool
- `/root/Agent/nextcloud_setup.py` - Nextcloud installation
- `/root/Agent/conversations_xmpp_setup.py` - XMPP server (Conversations.im)
- `/root/Agent/setup_merged_usr.py` - Merged /usr filesystem setup
- `/root/Agent/theos_brave_integration.py` - Web3 identity integration

**Quick Setup**:
```bash
cd /root/Agent

# Install infrastructure
sudo bash infrastructure_install.sh

# Setup all components
python3 sovereign_infrastructure_setup.py --full-setup
python3 nextcloud_setup.py
python3 conversations_xmpp_setup.py

# Merged /usr filesystem (before theos.brave)
python3 setup_merged_usr.py --full-setup
sudo bash /root/merged-usr/mount_merged_usr.sh

# theos.brave (Public identity)
python3 theos_brave_integration.py
```

**Service URLs**:
- **Web3 Portal**: `https://ud.me/theos.brave` (Public identity)
- **Nextcloud**: `https://nextcloud.system76.ht.local` or `https://nextcloud.bridgeworld.lol`
- **Code Server**: `https://code.system76.ht.local:8443` or `https://code.bridgeworld.lol:8443`
- **Stalwart Admin**: `https://mail.system76.ht.local:8080`
- **XMPP Server**: `chat.system76.ht.local:5222` (XMPP), `chat.system76.ht.local:5223` (TLS)
- **WireGuard**: `vpn.bridgeworld.lol:51820`

### Security Architecture

- **WireGuard**: Cryptographic key-based access (primary security layer)
  - Endpoint: `vpn.bridgeworld.lol:51820`
  - Use case: High-performance data transfers, primary access
- **Tailscale**: Mesh VPN for device-to-device communication
  - MagicDNS: `system76.your-tailnet.ts.net`
  - Use case: Admin interfaces, device connectivity
- **Private DNS**: system76.ht.local for local network
- **Public Domain**: bridgeworld.lol (requires WireGuard key)
- **Web3 Identity**: theos.brave (IPFS-hosted portal)
- **Firewall**: UFW rules configured for all services

### Covenant Principles

- **Sovereignty**: All services self-hosted
- **Independence**: No external dependencies for core services
- **Security**: WireGuard + Tailscale for access control
- **Ownership**: Complete control over infrastructure
- **Native Operations**: Uses system packages and Docker only

---

## System Information (inxi)

```bash
System:
  Kernel: 6.17.9-76061709-generic arch: x86_64 bits: 64 compiler: gcc v: 13.3.0
  Console: N/A Distro: Pop!_OS 24.04 base: Ubuntu 24.04 LTS Noble

Machine:
  Type: Laptop System: System76 product: Adder WS v: addw4 serial: <filter>
  Mobo: System76 model: Adder WS v: addw4 serial: <filter> UEFI: coreboot v: 2025-07-02_7c6225e date: 07/02/2025

Battery:
  ID-1: BAT0 charge: 47.5 Wh (93.5%) condition: 50.8/51.5 Wh (98.6%) volts: 17.0 min: 15.2
    model: Notebook BAT status: not charging

CPU:
  Info: 24-core (8-mt/16-st) model: Intel Core i9-14900HX bits: 64 type: MST AMCP arch: Raptor Lake
    rev: 1 cache: L1: 2.1 MiB L2: 32 MiB L3: 36 MiB
  Speed (MHz): avg: 2207 high: 4900 min/max: 800/5600:5800:4100 cores: 1-32: variable
    bogomips: 154828
  Flags: avx avx2 ht lm nx pae sse sse2 sse3 sse4_1 sse4_2 ssse3 vmx

Graphics:
  Device-1: Intel Raptor Lake-S UHD Graphics vendor: CLEVO/KAPOK driver: i915 v: kernel arch: Gen-13
    bus-ID: 00:02.0
  Device-2: NVIDIA AD107M [GeForce RTX 4050 Max-Q / Mobile] vendor: CLEVO/KAPOK driver: nvidia
    v: 580.82.09 arch: Lovelace bus-ID: 01:00.0
  Device-3: Bison BisonCam NB Pro driver: uvcvideo type: USB bus-ID: 1-8:3
  Display: server: X.org v: 1.21.1.11 with Xwayland v: 24.1.2 driver: gpu: i915 resolution: 1920x1080
  API: EGL v: 1.5 drivers: iris,swrast platforms: active: surfaceless,device
    inactive: gbm,wayland,x11,device-0
  API: OpenGL v: 4.6 compat-v: 4.5 vendor: mesa v: 25.1.5-1pop0~1753463422~24.04~8af185e
    renderer: Mesa Intel Graphics (RPL-S), llvmpipe (LLVM 19.1.1 256 bits)

Audio:
  Device-1: Intel Raptor Lake High Definition Audio vendor: CLEVO/KAPOK driver: snd_hda_intel v: kernel
    bus-ID: 00:1f.3
  Device-2: NVIDIA driver: snd_hda_intel v: kernel bus-ID: 01:00.1
  API: ALSA v: k6.17.9-76061709-generic status: kernel-api
  Server-1: PipeWire v: 1.4.2 status: n/a (root, process)

Network:
  Device-1: Realtek RTL8111/8168/8211/8411 PCI Express Gigabit Ethernet
    vendor: CLEVO/KAPOK RTL8111/8168/8411 driver: r8169 v: kernel port: d000 bus-ID: 03:00.0
  IF: eno0 state: down mac: <filter>
  Device-2: Intel Wi-Fi 7 AX1775 /AX1790 /BE20 /BE401/BE1750 2x2 driver: iwlwifi v: kernel
    bus-ID: 04:00.0
  IF: wlp4s0f0 state: up mac: <filter>

Bluetooth:
  Device-1: Intel driver: btusb v: 0.8 type: USB bus-ID: 1-14:4
  Report: hciconfig ID: hci0 rfk-id: 0 state: down bt-service: enabled,running rfk-block:
    hardware: no software: yes address: <filter>

Drives:
  Local Storage: total: 1.82 TiB used: 154.09 GiB (8.3%)
  ID-1: /dev/nvme0n1 vendor: Samsung model: SSD 990 PRO 1TB size: 931.51 GiB temp: 34.9 C
  ID-2: /dev/sda vendor: Western Digital model: WD10SDRW-11A0XS1 size: 931.48 GiB type: USB

Partition:
  ID-1: / size: 906.94 GiB used: 34.81 GiB (3.8%) fs: ext4 dev: /dev/dm-1 mapped: data-root
  ID-2: /boot/efi size: 1020 MiB used: 287.4 MiB (28.2%) fs: vfat dev: /dev/nvme0n1p1

Swap:
  ID-1: swap-1 type: partition size: 4 GiB used: 0 KiB (0.0%) dev: /dev/dm-2 mapped: cryptswap
  ID-2: swap-2 type: zram size: 16 GiB used: 24 KiB (0.0%) dev: /dev/zram0

Sensors:
  System Temperatures: cpu: 84.0 C mobo: 65.8 C
  Fan Speeds (rpm): cpu: 5417

Info:
  Memory: total: 32 GiB available: 31.18 GiB used: 16.16 GiB (51.8%) igpu: 60 MiB
  Processes: 550 Uptime: 4h 1m Init: systemd target: graphical (5)
  Packages: 1838 Compilers: gcc: 13.3.0 Client: Unknown Client: node inxi: 3.3.34
```

---

## Directory Treemap: /root

```
================================================================================
Directory Treemap: /root
================================================================================

Total Size: 4.9G

/root/
│
├── Halls of Amenti/                    (4.5G - largest directory)
│   ├── organized_passport/              (4.5G - passport data archive)
│   │   ├── github_projects/             (4.5G - GitHub repositories)
│   │   ├── docs/                        (68K - documentation)
│   │   ├── code/                        (32K - code files)
│   │   ├── config/                      (32K - configuration)
│   │   ├── data/                        (4.0K - data files)
│   │   ├── scripts/                    (4.0K - scripts)
│   │   ├── media/                       (4.0K - media files)
│   │   ├── archives/                    (4.0K - archives)
│   │   └── other/                       (4.0K - other files)
│   ├── __pycache__/                     (356K - Python cache)
│   ├── shared/                          (8.0K - shared files)
│   └── components/                      (8.0K - component files)
│
├── Agent/                               (2.1M - sovereign agent system)
│   ├── sovereign_db/                    (260K - knowledge base)
│   │   └── sovereign_knowledge.json    (document chunks)
│   ├── .git/                            (932K - git repository)
│   │   ├── objects/                     (932K - git objects)
│   │   ├── hooks/                       (68K - git hooks)
│   │   ├── logs/                        (40K - git logs)
│   │   └── refs/                        (28K - git refs)
│   ├── __pycache__/                     (248K - Python cache)
│   ├── sovereign_memory.db              (40K - SQLite memory)
│   ├── sovereign_agent.py              (28K - main agent)
│   ├── chariot_shell.py                (24K - middleware CLI)
│   ├── sessions/                       (12K - chat sessions)
│   ├── mirror_plans/                   (12K - mirror plans)
│   ├── documents/                      (4.0K - documents)
│   └── [other agent components]         (various sizes)
│
├── .local/                              (173M)
│   ├── share/                           (173M)
│   │   ├── cursor-agent/               (173M - cursor agent runtime)
│   │   ├── flatpak/                    (48K - flatpak data)
│   │   └── inxi/                       (4.0K - inxi data)
│   └── bin/                             (4.0K - local binaries)
│
├── .cursor/                             (147M)
│   ├── chats/                           (146M - chat history)
│   │   └── [session directories]        (various sizes)
│   ├── history/                         (124K - command history)
│   ├── cache/                           (4.0K - cache)
│   └── tmp/                             (16K - temporary files)
│
├── .cache/                              (62M)
│   ├── pip/                             (60M - pip cache)
│   │   └── http-v2/                    (60M - pip HTTP cache)
│   ├── mesa_shader_cache_db/            (1.9M - Mesa shader cache)
│   └── dconf/                           (8.0K - dconf cache)
│
├── .config/                             (92K)
│   └── cursor/                          (88K - cursor configuration)
│
├── .gnupg/                              (8.0K - GPG keys)
│
└── .ssh/                                (4.0K - SSH keys)

Key Statistics:
  Total /root size: 4.9G
  Largest directory: Halls of Amenti/organized_passport (4.5G)
  Agent system: 2.1M (code + data)
  Knowledge base: 260K (sovereign_db)
  Cursor runtime: 173M (.local/share/cursor-agent)
  Cursor chats: 146M (.cursor/chats)
```

*System information and directory treemap added to CURSOR.md*
