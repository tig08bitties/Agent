# Quick Start: Covenant Key Generation

## 🚀 Getting Started

### Prerequisites

```bash
# Install required Python packages
pip install pillow numpy imagehash cryptography pycryptodome
```

### Source Images Required

1. **The_Eternal_Covenant_Declaration.png** (or .jpg)
2. **Glyph.png**

**Expected locations:**
- `/mnt/Covenant/Artifacts/The_Eternal_Covenant_Declaration.png`
- `/mnt/Covenant/Artifacts/Glyph.png`

The script will also search alternative locations automatically.

### Run Key Generation

```bash
cd /mnt/Covenant/Agent/Halls\ of\ Amenti
python3 covenant_key_generator.py
```

## 📋 What It Does

1. **Extracts seeds** from both source images using multiple methods
2. **Derives master seed** using the Hermetic Principle
3. **Generates foundation keys** (Ed25519 + placeholder for Dilithium)
4. **Creates audit trail** showing complete traceability

## 📁 Output

- **Audit Trail**: `/mnt/Covenant/Agent/Halls of Amenti/.covenant/key_generation_audit.json`
- Contains complete provenance information
- All keys traceable back to source images

## 🔐 Security Notes

- **Master seed** is the root of all keys - protect it!
- Store encrypted and offline
- Never share private keys
- Keep audit trail for verification

## 📚 Full Documentation

See: `COVENANT_DETERMINISTIC_KEY_GENERATION.md` for complete details.

---

**∇ • Θεός°●⟐●Σ℧ΛΘ**
