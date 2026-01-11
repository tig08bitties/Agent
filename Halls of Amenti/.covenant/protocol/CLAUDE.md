# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Covenant Layered Cryptographic Protocol** - a deterministic key derivation system that generates cryptographic identities (OpenPGP keys, BIP-39 mnemonics, Ethereum-compatible keys) from verifiable sources embedded in images. The protocol uses a 7-layer hash chain where **no algorithm is ever reused**.

## Running the Protocol

```bash
# Run main protocol (generates mnemonic and layered audit)
python3 covenant_layered_protocol.py

# Generate OpenPGP keys
python3 covenant_openpgp_generator.py
```

**Dependencies**: `cryptography`, `mnemonic`, `pgpy` (optional)

## Architecture

### Layered Protocol Chain

```
Layer 0: SOURCE_COLLECTION → Raw C2PA data extraction from Declaration.png
Layer 1: SHA-256          → Master Hash derivation
Layer 2: SHA-512          → Extended seed (64 bytes)
Layer 3: SHA3-256         → Covenant entropy mixing
Layer 4: SHA3-512         → Full entropy expansion
Layer 5: BLAKE2b-512      → Key derivation function
Layer 6: SHAKE256 (XOF)   → Final mnemonic entropy (256 bits)
Layer 7: RESERVED         → Post-quantum algorithms (future)
```

### Core Classes (Python)

| File | Class | Purpose |
|------|-------|---------|
| `covenant_layered_protocol.py` | `CovenantSources` | Dataclass holding all cryptographic source material |
| `covenant_layered_protocol.py` | `LayeredProtocol` | Executes 7-layer hash chain derivation |
| `covenant_openpgp_generator.py` | `CovenantConstants` | Immutable cryptographic anchors |
| `covenant_openpgp_generator.py` | `CovenantKeyDeriver` | Derives Ed25519/secp256k1 keys |
| `covenant_openpgp_generator.py` | `CovenantOpenPGPGenerator` | Generates ASCII-armored PGP keys |

### Key Derivation Path

```
BIP-48: 0'/7'/7'/7'/48/m
```

---

## Moon Phase PGP Integration (Conceptual)

**"Moonspo" (Lunar Astronomy & Encryption)** - Cryptographic operations bound to celestial mechanics.

### Temporal Salting: Lunar Signing Schedule

| Phase | Covenant Script | PGP Action | Purpose |
|-------|-----------------|------------|---------|
| **🌑 New Moon** | Aramaic (𐡀) | **Key Generation** | Create new identity |
| **🌓 Waxing** | Egyptian (𓏺) | **Encrypt** | Gather/accumulate |
| **🌕 Full Moon** | Syriac (ܬ) | **Sign & Publish** | Master Seal |
| **🌗 Waning** | Egyptian (𓀀) | **Revoke/Rotate** | Cleanse keys |

**Security**: "You cannot fake the moon." - Signatures only valid if timestamp matches astronomical phase.

### MagicClaim (#354) Lunar Binding

- **354 days** = Lunar Year (Islamic Calendar)
- Contract #6 (𐡅 Vav) follows the moon cycle for unlocking
- Current progress calculated as: `days_elapsed / 354 = % unlocked`

---

## Cryptographic Constants

These are the verified anchors - **never modify**:

| Constant | Value |
|----------|-------|
| Declaration Inner | `883e529de31c586131a831a9953113a6d75edd87c97369a2fa3a791209952f5a` |
| Declaration Outer | `e374c94009e32a6c3cc8f89ea6102ce6886c3302324aaaf1563ace8f10332ebf` |
| Master Hash | `69f7ddaab06f2c2e0259729b188f0c922658a1aacde1d9a307aaba26ff9df71e` |
| Glyph Hash | `1288840c0d7d6f78065a2e084ad40147e40cccc6e6ed275342edbba45cac136b` |
| Witnessed Handshake | `a6eb42d8b50a2da46327212acbb3d1b9484cb1a4300f3e9fb751ed8f834de750` |
| PGP Fingerprint | `A6EB 42D8 B50A 2DA4 6327 212A CBB3 D1B9 484C B1A4` |

---

## Key Design Principles

1. **No Algorithm Reuse**: Each hash algorithm appears exactly once in the chain
2. **Deterministic Derivation**: Same inputs always produce same outputs
3. **Verifiable Sources**: All entropy derives from hashes of physical artifacts (Declaration.png, Glyph.png, Enochian Call)
4. **Dual Persona Support**: Generates both Ed25519 (personal) and secp256k1 (Web3/digital) keys
5. **Temporal Binding**: Moon phases determine when cryptographic operations should occur (conceptual)

---

## Related Files

**Protocol Core**:
- `COVENANT_PUZZLE_MAP.md` - Complete system architecture and verification framework
- `Layers/LAYER_SPECIFICATION.md` - Technical specification for each layer

**Keys & Sources**:
- `../Keys/OpenPGP/` - Generated key files (public/private for theos and archivist personas)
- `../Sources/Images/` - Source images (Declaration.png, Glyph.png, Master_Vault_Key.png)
- `../Sources/Enochian/Second_Call_of_30_Aethyrs.txt` - Sacred entropy source

**Archived (for future use)**:
- `/mnt/Covenant/temp/ruby_scripts_archive/` - Legacy Ruby extraction toolkit

---

## Working with This Codebase

- The 22 TreasureDAO contracts are mapped to 22 Aramaic letters (𐡀-𐡕) - see `COVENANT_PUZZLE_MAP.md` Section V
- DAUS coordinates (5 Bosnian Pyramid locations) encode GPS → Ethereum block mappings
- Identity numbers (#295, #57103) are not arbitrary - they link to physical documents and contract indices
- **MagicClaim (#354)** follows the 354-day lunar year for unlock scheduling
