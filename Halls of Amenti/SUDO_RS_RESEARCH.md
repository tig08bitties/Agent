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

## 🔗 Integration with Covenant Agent

### Potential Use Cases

1. **Secure Command Execution**
   - Agent can use sudo-rs for privileged operations
   - Memory-safe privilege escalation
   - Reduced risk of security vulnerabilities

2. **System Administration**
   - Safe system configuration changes
   - Package management with elevated privileges
   - File system operations requiring root

3. **Security Hardening**
   - Replace traditional sudo in agent environment
   - Reduce attack surface through memory safety
   - Benefit from rapid security patches

### Implementation Considerations

**Advantages:**
- ✅ Memory safety prevents entire classes of bugs
- ✅ Rapid security response
- ✅ Modern codebase (easier to audit)
- ✅ Active development

**Considerations:**
- ⚠️ May have feature gaps compared to traditional sudo
- ⚠️ Requires Rust toolchain for building from source
- ⚠️ Some distributions use modified command names

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
