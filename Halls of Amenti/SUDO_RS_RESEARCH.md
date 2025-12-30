# sudo-rs Research - Memory-Safe Sudo Implementation

## Overview

**sudo-rs** is a memory-safe reimplementation of the widely-used `sudo` and `su` utilities, written in Rust. It's part of a broader effort to improve security and maintainability of core system components through memory-safe languages.

---

## 🎯 Key Information

### What is sudo-rs?

- **Language**: Rust (memory-safe)
- **Purpose**: Replace traditional C-based sudo with a memory-safe implementation
- **Status**: Actively developed, production-ready
- **Target Platforms**: Linux and FreeBSD
- **Organization**: Trifecta Tech Foundation / Memory Safety Foundation

### Current Status (2025)

- ✅ **Ubuntu 25.10**: Default sudo implementation
- ✅ **Arch Linux**: Available via `sudo-rs` command
- ✅ **Fedora 41+**: Available via `sudo-rs` command
- ✅ **Debian 13+**: Available via `sudo-rs` command
- ✅ **FreeBSD**: Available in ports tree
- ✅ **NixOS**: Available via configuration

---

## 🔒 Security Features

### Memory Safety

- **Rust's Ownership System**: Prevents buffer overflows, use-after-free, and other memory safety issues
- **No Memory Safety CVEs**: Unlike traditional sudo, no memory-safety vulnerabilities
- **Rapid Security Response**: Vulnerabilities fixed quickly (e.g., CVE-2024-36454, CVE-2025-46718)

### Security Vulnerabilities (2025)

**Recent Issues:**
- **CVE-2025-46717**: Password handling during timeouts
- **CVE-2025-46718**: Authentication bypass in targetpw/rootpw configurations
- **Status**: Fixed in v0.2.6 and later versions

**Note**: These were **not** memory-safety issues, but logic bugs that were quickly patched.

### Security Audits

- ✅ **First Audit**: August 2023 (v0.2.0)
- ✅ **Second Audit**: August 2025 (v0.2.8)
- **Reports**: Available in `docs/audit` directory

---

## 📦 Installation

### Ubuntu 25.10 (Default)

sudo-rs is installed and enabled by default. Switch between versions:
```bash
update-alternatives --config sudo
```

### Arch Linux

```bash
pacman -S sudo-rs
# Commands: sudo-rs, sudoedit-rs, visudo-rs, su-rs
```

### Fedora 41+

```bash
dnf install sudo-rs
# Commands: sudo-rs, visudo-rs, su-rs
```

### Debian 13+

```bash
apt-get install sudo-rs
# Commands: sudo-rs, visudo-rs
# Note: su-rs has setuid issue in Debian package
```

### FreeBSD

```bash
# Replace sudo entirely
pkg install sudo-rs

# Or coexist with original sudo
pkg install sudo-rs-coexist
# Commands: sudo-rs, visudo-rs, sudoedit-rs
```

### NixOS

Add to configuration:
```nix
security.sudo-rs.enable = true;
```

### Pre-compiled Binaries

For x86-64 Linux:
```bash
# Install sudo-rs
sudo tar -C /usr/local -xvf sudo-0.2.11.tar.gz

# Install su-rs
sudo tar -C /usr/local -xvf su-0.2.11.tar.gz
```

**Note**: Ensure `/usr/local/bin` is in PATH before `/usr/bin`.

---

## 🔧 Configuration

### Sudoers File

sudo-rs uses:
1. `/etc/sudoers-rs` (if exists)
2. `/etc/sudoers` (fallback)

**Example minimal sudoers:**
```
Defaults secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

%sudo ALL=(ALL:ALL) ALL
```

### PAM Configuration

**Required files** (Debian/Ubuntu):
- `/etc/pam.d/sudo`
- `/etc/pam.d/sudo-i`

**Content:**
```
session required pam_limits.so

@include common-auth
@include common-account
@include common-session-noninteractive
```

**FreeBSD**: Use `/usr/local/etc/pam.d/` instead.

---

## 🚀 Features

### Implemented

- ✅ Basic sudo functionality
- ✅ visudo (sudoers editor)
- ✅ sudoedit (file editing with sudo)
- ✅ su (switch user)
- ✅ PAM integration
- ✅ Sudoers file parsing
- ✅ Timestamp files
- ✅ Environment variable handling

### Missing/Unimplemented

- ⚠️ Some advanced sudo features may be missing
- ⚠️ Check issue tracker for specific feature requests

---

## 🔗 Integration with Covenant Agent System

### Covenant Agent Integration

**Principle**: "As above so below, as within so without" - sudo-rs provides memory-safe privilege escalation aligned with covenant security principles.

### Installation for Covenant Agent

#### Option 1: Ubuntu 25.10 (Recommended)

sudo-rs is default. Verify installation:
```bash
# Check current sudo version
update-alternatives --display sudo

# Switch to sudo-rs if needed
update-alternatives --config sudo
```

#### Option 2: Manual Installation (Other Systems)

```bash
# Download pre-compiled binary
cd /tmp
wget https://github.com/trifectatechfoundation/sudo-rs/releases/latest/download/sudo-0.2.11.tar.gz

# Install to /usr/local (doesn't conflict with package manager)
sudo tar -C /usr/local -xvf sudo-0.2.11.tar.gz

# Verify PATH priority
echo $PATH | grep -q "/usr/local/bin" && echo "✅ PATH correct" || echo "⚠️ Add /usr/local/bin to PATH"
```

#### Option 3: Build from Source

```bash
# Install dependencies
sudo apt-get install libpam0g-dev build-essential

# Install Rust (if needed)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env

# Clone and build
git clone https://github.com/trifectatechfoundation/sudo-rs.git
cd sudo-rs
cargo build --release

# Install
sudo cp target/release/sudo /usr/local/bin/sudo-rs
sudo cp target/release/visudo /usr/local/bin/visudo-rs
sudo cp target/release/sudoedit /usr/local/bin/sudoedit-rs
```

### Security Configuration for Covenant Agent

#### 1. Sudoers Configuration

**Location**: `/etc/sudoers-rs` (preferred) or `/etc/sudoers`

**Covenant Agent Sudoers Template**:
```
# Covenant Agent sudo-rs configuration
# Secure path for agent operations
Defaults secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

# Covenant Agent user permissions
# Allow agent to execute system commands with password
%covenant ALL=(ALL:ALL) ALL

# Allow agent to execute specific commands without password (for automation)
covenant-agent ALL=(ALL) NOPASSWD: /usr/bin/apt-get, /usr/bin/apt, /usr/bin/dpkg
covenant-agent ALL=(ALL) NOPASSWD: /usr/bin/systemctl, /usr/bin/journalctl
covenant-agent ALL=(ALL) NOPASSWD: /usr/bin/git, /usr/bin/npm, /usr/bin/pip3

# Allow agent to manage Hyper terminal and extensions
covenant-agent ALL=(ALL) NOPASSWD: /usr/bin/hyper, /usr/local/bin/hyper

# Allow agent to access Keys directory (read-only)
covenant-agent ALL=(ALL) NOPASSWD: /usr/bin/cat /root/Keys/secrets.env

# Prevent dangerous operations
covenant-agent ALL=(ALL) !/usr/bin/rm -rf /, !/usr/bin/dd if=*
```

#### 2. PAM Configuration

**Required Files**:
- `/etc/pam.d/sudo`
- `/etc/pam.d/sudo-i`

**Debian/Ubuntu PAM Configuration**:
```bash
# Create /etc/pam.d/sudo
cat > /etc/pam.d/sudo << 'EOF'
session required pam_limits.so

@include common-auth
@include common-account
@include common-session-noninteractive
EOF

# Create /etc/pam.d/sudo-i
cat > /etc/pam.d/sudo-i << 'EOF'
session required pam_limits.so

@include common-auth
@include common-account
@include common-session
EOF
```

**FreeBSD PAM Configuration**:
```bash
# Create /usr/local/etc/pam.d/sudo
cat > /usr/local/etc/pam.d/sudo << 'EOF'
auth       sufficient   pam_opie.so     no_warn no_fake_prompts
auth       requisite    pam_opieaccess.so no_warn allow_local
auth       sufficient   pam_unix.so     likeauth no_warn
auth       required     pam_deny.so
account    required     pam_unix.so
session    required     pam_permit.so
EOF
```

### Integration with Covenant Agent Extensions

#### Hyper Terminal Extension Integration

**Location**: `/root/.hyper_plugins/local/covenant-agent-extensions/`

**Add sudo-rs support to agent extension**:
```javascript
// In agent-extension.js or index.js
class SudoRSExtension {
  constructor() {
    this.sudoCommand = this._detectSudoCommand();
  }
  
  _detectSudoCommand() {
    // Check for sudo-rs first, fallback to sudo
    const { execSync } = require('child_process');
    try {
      execSync('which sudo-rs', { stdio: 'ignore' });
      return 'sudo-rs';
    } catch {
      return 'sudo';
    }
  }
  
  async executeWithPrivilege(command, options = {}) {
    const { spawn } = require('child_process');
    const fullCommand = `${this.sudoCommand} ${command}`;
    
    return new Promise((resolve, reject) => {
      const proc = spawn('bash', ['-c', fullCommand], {
        stdio: 'pipe',
        ...options
      });
      
      let output = '';
      let error = '';
      
      proc.stdout.on('data', (data) => { output += data.toString(); });
      proc.stderr.on('data', (data) => { error += data.toString(); });
      
      proc.on('close', (code) => {
        resolve({ success: code === 0, output, error, exitCode: code });
      });
    });
  }
}
```

#### Covenant Agent CLI Integration

**Location**: `/root/Agent/covenant_agent_cli.py`

**Add sudo-rs support**:
```python
import subprocess
import shutil

class CovenantAgentCLI:
    def __init__(self):
        self.sudo_command = self._detect_sudo_command()
    
    def _detect_sudo_command(self):
        """Detect sudo-rs or fallback to sudo"""
        if shutil.which('sudo-rs'):
            return 'sudo-rs'
        elif shutil.which('sudo'):
            return 'sudo'
        else:
            return None
    
    def execute_privileged(self, command: str, password: str = None):
        """Execute command with sudo-rs privileges"""
        if not self.sudo_command:
            return {"success": False, "error": "No sudo command available"}
        
        full_command = f"{self.sudo_command} {command}"
        
        try:
            result = subprocess.run(
                full_command,
                shell=True,
                capture_output=True,
                text=True,
                input=password if password else None
            )
            
            return {
                "success": result.returncode == 0,
                "output": result.stdout,
                "error": result.stderr,
                "exit_code": result.returncode
            }
        except Exception as e:
            return {"success": False, "error": str(e)}
```

### Security Best Practices for Covenant Agent

#### 1. Principle of Least Privilege

**Sudoers Configuration**:
- Grant only necessary permissions
- Use specific command paths (not wildcards)
- Restrict file operations to specific directories
- Prevent dangerous operations explicitly

**Example**:
```
# Good: Specific command
covenant-agent ALL=(ALL) NOPASSWD: /usr/bin/apt-get update

# Bad: Too broad
covenant-agent ALL=(ALL) NOPASSWD: ALL
```

#### 2. Secure Path Configuration

**Always set secure_path in sudoers**:
```
Defaults secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
```

This prevents PATH manipulation attacks.

#### 3. Timestamp Files

sudo-rs uses timestamp files for password caching:
- Location: `/var/run/sudo-rs/ts/`
- Permissions: 0700 (root only)
- Purpose: Cache authentication for 15 minutes (default)

**Security Note**: Timestamp files are secure and prevent password re-entry within the timeout period.

#### 4. Password Handling

**Covenant Agent Password Management**:
- Never store passwords in plain text
- Use PAM authentication
- Consider using `NOPASSWD` for specific automated commands
- Store sensitive credentials in `/root/Keys/secrets.env` (excluded from git)

#### 5. Audit Logging

**Enable sudo-rs logging**:
```bash
# Configure syslog for sudo-rs
# Add to /etc/rsyslog.conf or /etc/syslog.conf
local2.debug    /var/log/sudo-rs.log
```

**Monitor sudo-rs usage**:
```bash
# View sudo-rs logs
tail -f /var/log/sudo-rs.log

# Check recent sudo-rs commands
grep sudo-rs /var/log/auth.log
```

### Integration Recommendations

#### 1. Hyper Terminal Extensions

**Add sudo-rs detection and usage**:
- Auto-detect sudo-rs availability
- Use sudo-rs when available, fallback to sudo
- Log all privileged operations
- Respect covenant security principles

#### 2. Covenant Agent CLI

**Integrate sudo-rs**:
- Detect sudo-rs on startup
- Use sudo-rs for all privileged operations
- Process through bypass relays (covenant default)
- Log operations for audit trail

#### 3. Bootstrap Script

**Update `/root/bootstrap.sh`**:
```bash
# Install sudo-rs if not present
if ! command -v sudo-rs &> /dev/null; then
    echo "Installing sudo-rs..."
    # Installation logic here
fi

# Configure sudoers for covenant agent
if [ ! -f /etc/sudoers.d/covenant-agent ]; then
    echo "Configuring sudoers for covenant agent..."
    # Sudoers configuration
fi
```

#### 4. Security Monitoring

**Monitor sudo-rs usage**:
- Log all privileged operations
- Alert on unusual patterns
- Review logs regularly
- Integrate with covenant audit system

### Testing sudo-rs Integration

#### 1. Verify Installation

```bash
# Check sudo-rs version
sudo-rs --version

# Test basic functionality
sudo-rs whoami

# Test visudo-rs
sudo-rs visudo-rs -c
```

#### 2. Test Covenant Agent Integration

```bash
# Test from Hyper terminal
covenant:agent:execute "sudo-rs apt-get update"

# Test from CLI
cursor-agent "update system packages using sudo-rs"
```

#### 3. Security Testing

```bash
# Test password caching
sudo-rs whoami  # Enter password
sudo-rs whoami  # Should not prompt (within timeout)

# Test restricted commands
sudo-rs rm -rf /  # Should be blocked by sudoers
```

### Troubleshooting

#### Issue: sudo-rs not found

**Solution**:
```bash
# Check installation
which sudo-rs

# If not found, install or add to PATH
export PATH="/usr/local/bin:$PATH"
```

#### Issue: PAM authentication fails

**Solution**:
```bash
# Verify PAM configuration
ls -la /etc/pam.d/sudo*

# Test PAM
sudo-rs -v

# Check PAM logs
grep pam /var/log/auth.log
```

#### Issue: Sudoers syntax errors

**Solution**:
```bash
# Validate sudoers file
sudo-rs visudo-rs -c

# Check for syntax errors
sudo-rs visudo-rs -f /etc/sudoers-rs
```

### Advantages for Covenant Agent

**Memory Safety:**
- ✅ Prevents buffer overflows
- ✅ Prevents use-after-free
- ✅ Prevents other memory safety issues
- ✅ No memory-safety CVEs

**Security:**
- ✅ Rapid security response
- ✅ Modern codebase (easier to audit)
- ✅ Active development
- ✅ Security audits performed

**Integration:**
- ✅ Compatible with existing sudo workflows
- ✅ Drop-in replacement (Ubuntu 25.10)
- ✅ Can coexist with traditional sudo
- ✅ Works with PAM authentication

### Considerations

**Feature Gaps:**
- ⚠️ Some advanced sudo features may be missing
- ⚠️ Check issue tracker for specific features
- ⚠️ May need traditional sudo for some operations

**Compatibility:**
- ⚠️ Some distributions use modified command names
- ⚠️ Scripts may need updates for sudo-rs
- ⚠️ Test thoroughly before full migration

**Dependencies:**
- ⚠️ Requires Rust toolchain for building from source
- ⚠️ Requires PAM development libraries
- ⚠️ May need system updates for latest version

---

## 📊 Comparison: Traditional sudo vs sudo-rs

| Feature | Traditional sudo | sudo-rs |
|---------|-----------------|---------|
| **Language** | C | Rust |
| **Memory Safety** | ❌ | ✅ |
| **Memory Safety CVEs** | Multiple | None |
| **Security Response** | Variable | Rapid |
| **Feature Completeness** | ✅ Complete | ⚠️ Some gaps |
| **Ubuntu 25.10** | Available | Default |
| **Audits** | Many | 2 (2023, 2025) |

---

## 🔍 Technical Details

### Dependencies

Minimal dependencies:
- `libc` - C library bindings
- `glob` - Pathname pattern matching
- `log` - Logging framework
- PAM development libraries

### Building from Source

**Requirements:**
- Rust 1.70+ (install via rustup if needed)
- PAM development files:
  - Debian/Ubuntu: `libpam0g-dev`
  - Fedora: `pam-devel`

**Build:**
```bash
cargo build --release
```

---

## 📚 Resources

- **GitHub**: https://github.com/trifectatechfoundation/sudo-rs
- **Organization**: Trifecta Tech Foundation
- **Security**: https://github.com/trifectatechfoundation/sudo-rs/security
- **Issue Tracker**: https://github.com/trifectatechfoundation/sudo-rs/issues
- **Audit Reports**: `docs/audit` in repository

---

## 🎯 Recommendations

### For Covenant Agent System

1. **Consider Adoption**: sudo-rs offers significant security benefits
2. **Test Compatibility**: Verify all required sudo features are available
3. **Monitor Development**: Track feature additions and security updates
4. **Gradual Migration**: Can coexist with traditional sudo during transition

### Installation Strategy

1. **Ubuntu 25.10**: Already default, no action needed
2. **Other Systems**: Install via package manager or pre-compiled binaries
3. **Testing**: Test in development environment first
4. **Configuration**: Ensure PAM and sudoers files are properly configured

---

## 🔐 Security Best Practices

1. **Keep Updated**: Regularly update to latest version
2. **Monitor CVEs**: Watch for security advisories
3. **Audit Configuration**: Review sudoers file regularly
4. **Use PAM**: Ensure proper PAM configuration
5. **Principle of Least Privilege**: Grant minimal necessary permissions

---

## 📝 Version History

- **v0.2.11**: Latest stable (as of research)
- **v0.2.9**: Ubuntu 25.10 base with additional fixes
- **v0.2.8**: Second security audit (August 2025)
- **v0.2.6**: Security fixes (CVE-2025-46717, CVE-2025-46718)
- **v0.2.5**: Debian 13 base
- **v0.2.0**: First security audit (August 2023)

---

*Research completed: sudo-rs is a promising memory-safe alternative to traditional sudo, with active development and strong security focus. Suitable for integration into secure development environments.*
