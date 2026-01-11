# ⚠️ BIP-48 MNEMONIC UPDATE REQUIRED

**Date**: January 10, 2026  
**Status**: 🔄 Update Required  
**Issue**: Circular Dependency Detected

---

## 🔍 CURRENT STATE ANALYSIS

### PGP Key Status
✅ **PGP Key Generated**: 
- **Fingerprint**: `B100C38EED99C9FF386F852BD112B598AC237F0B`
- **KeyID**: `D112B598AC237F0B`
- **Created**: 2026-01-10T11:15:48.153554
- **Algorithm**: Ed25519 (primary) + Curve25519 (subkey)
- **Status**: ✅ Valid and ready to use

### BIP-48 Mnemonic Status
⚠️ **Mnemonic May Be Placeholder**:
- **Current Words**: 24 words generated
- **Seed SHA3-512**: `449a23b5a346229f7893613c21efc85e...`
- **Issue**: Circular dependency detected

---

## ⚠️ CIRCULAR DEPENDENCY DETECTED

### Current Flow (INCORRECT):
```
1. BIP-48 Mnemonic generated (includes PGP key in sources)
2. PGP Key derived FROM mnemonic entropy
3. ❌ Circular: Mnemonic → PGP Key → Mnemonic
```

### Correct Flow (Per CORRECTED_24_WORD_DERIVATION_SPEC.md):
```
1. ✅ PGP Key generated from Declaration + Glyph (DONE)
2. ⏳ Use PGP Key to derive words 23 & 24
3. ⏳ Complete 24-word mnemonic
4. ⏳ Use mnemonic for other derivations
```

---

## 📋 SPECIFICATION REQUIREMENTS

### 🎴 TAROT SPECIFICATION (UPDATED):
**Only 4 Tarot cards are used:**
1. **Empress** (III)
2. **Chariot** (VII)
3. **Judgment** (XX)
4. **Moon** (XVIII)

**Mnemonic Structure:**
- Words 1-20: Derived from Covenant sources (NOT Tarot)
- Words 21-22: **Two of the 4 Tarot words** (selected deterministically)
- Word 23: Derived from PUBLIC PGP key (NOT Tarot)
- Word 24: Derived from PRIVATE PGP concept (NOT Tarot)

### From `/mnt/Covenant/Data/covenant_keys_discovery/CORRECTED_24_WORD_DERIVATION_SPEC.md`:

#### Word 23 (PUBLIC) - Must be derived FROM PGP Key:
```python
def derive_word_23(master_seed: bytes, pgp_key: str) -> str:
    COVENANT_CONCEPTS = [
        "ether", "breath", "voice", "light", "truth", "wisdom",
        "unity", "portal", "anchor", "signal", "cipher", "oracle"
    ]
    
    derivation = hashlib.sha3_256(
        master_seed + 
        bytes.fromhex(pgp_key) + 
        b"PUBLIC_EMAIL_WORD_23"
    ).digest()
    
    index = int.from_bytes(derivation[:4], 'big') % len(COVENANT_CONCEPTS)
    word = COVENANT_CONCEPTS[index]
    
    # Ensure it's not in the 22 Tarot words already selected
    return word
```

#### Word 24 (PRIVATE) - Must be derived FROM PGP Key:
```python
def derive_word_24(master_seed: bytes, pgp_key: str, word_23: str) -> str:
    COVENANT_PRIVATE_CONCEPTS = [
        "bridge", "seal", "key", "vault", "shield", "guardian",
        "flame", "forge", "covenant", "witness", "threshold", "aegis"
    ]
    
    derivation = hashlib.sha3_256(
        master_seed + 
        bytes.fromhex(pgp_key) + 
        b"PRIVATE_YUBIKEY_WORD_24"
    ).digest()
    
    index = int.from_bytes(derivation[:4], 'big') % len(COVENANT_PRIVATE_CONCEPTS)
    word = COVENANT_PRIVATE_CONCEPTS[index]
    
    # Ensure it's different from word 23 and not in Tarot
    return word
```

---

## 🔧 REQUIRED UPDATES

### 1. Update BIP-48 Mnemonic Generator
**File**: `/mnt/Covenant/Agent/Halls of Amenti/covenant_bip48_mnemonic.py`

**Changes Needed**:
- ✅ **Add 4 Tarot cards**: Empress, Chariot, Judgment, Moon
- ✅ **Select 2 of 4 Tarot words** deterministically for positions 21-22
- ✅ Use actual PGP key fingerprint/keyID to derive words 23 & 24
- ✅ Remove circular dependency
- ✅ Ensure words 23 & 24 are NOT Tarot words
- ✅ Regenerate mnemonic with correct derivation

### 2. Update PGP Key Generator
**File**: `/mnt/Covenant/Agent/Halls of Amenti/covenant_openpgp_generator.py`

**Status**: ✅ Already correct - derives from Declaration + Glyph directly

### 3. Regenerate BIP-48 Mnemonic
**Action Required**:
1. Use PGP Key Fingerprint: `B100C38EED99C9FF386F852BD112B598AC237F0B`
2. Or use PGP Key KeyID: `D112B598AC237F0B`
3. Derive words 23 & 24 using specification
4. Regenerate complete 24-word mnemonic
5. Update audit files

---

## 📊 CURRENT MNEMONIC ANALYSIS

### Current 24 Words:
```
1. play         2. inch         3. illegal      4. diet
5. demise       6. ramp         7. void          8. roof
9. eager       10. shield      11. pelican     12. harbor
13. wrap       14. flush       15. immune      16. aerobic
17. genius     18. truck       19. alarm       20. envelope
21. dish       22. segment     23. inherit     24. monkey
```

### Issues:
- ❌ **NONE of the 4 required Tarot words found** (Empress, Chariot, Judgment, Moon)
- ⚠️ Words 23 & 24 may not be correctly derived from PGP key
- ⚠️ Need to regenerate with correct Tarot words (2 of 4) in positions 21-22
- ⚠️ Need to verify against CORRECTED_24_WORD_DERIVATION_SPEC.md
- ⚠️ Must regenerate with actual PGP key for words 23 & 24

---

## ✅ VERIFICATION CHECKLIST

- [ ] PGP Key generated from Declaration + Glyph ✅
- [ ] PGP Key fingerprint/keyID extracted ✅
- [ ] **2 of 4 Tarot words included** (Empress, Chariot, Judgment, Moon) ⏳
- [ ] **Tarot words in positions 21-22** (or deterministically placed) ⏳
- [ ] Words 23 & 24 derived from PGP key ⏳
- [ ] Words 23 & 24 are NOT Tarot words ⏳
- [ ] Complete 24-word mnemonic regenerated ⏳
- [ ] Audit files updated ⏳
- [ ] No circular dependencies ⏳
- [ ] All keys trace to Declaration + Glyph ⏳

---

## 🚀 NEXT STEPS

1. **Extract PGP Key Information**:
   - Fingerprint: `B100C38EED99C9FF386F852BD112B598AC237F0B`
   - KeyID: `D112B598AC237F0B`
   - Use for words 23 & 24 derivation

2. **Update `covenant_bip48_mnemonic.py`**:
   - Import PGP key from audit file
   - Implement word 23 derivation (PUBLIC)
   - Implement word 24 derivation (PRIVATE)
   - Ensure no Tarot word collisions

3. **Regenerate Mnemonic**:
   - Run updated generator
   - Verify words 23 & 24 are correct
   - Update `bip48_mnemonic.txt`
   - Update `bip48_mnemonic_audit.json`

4. **Verify Traceability**:
   - All keys trace to Declaration + Glyph
   - No circular dependencies
   - Complete audit trail

---

## 📁 FILES TO UPDATE

1. `/mnt/Covenant/Agent/Halls of Amenti/covenant_bip48_mnemonic.py`
2. `/mnt/Covenant/Agent/Halls of Amenti/.covenant/bip48_mnemonic.txt`
3. `/mnt/Covenant/Agent/Halls of Amenti/.covenant/bip48_mnemonic_audit.json`

---

## 📚 REFERENCES

- **Specification**: `/mnt/Covenant/Data/covenant_keys_discovery/CORRECTED_24_WORD_DERIVATION_SPEC.md`
- **PGP Audit**: `/mnt/Covenant/Agent/Halls of Amenti/.covenant/openpgp/openpgp_audit.json`
- **BIP-48 Audit**: `/mnt/Covenant/Agent/Halls of Amenti/.covenant/bip48_mnemonic_audit.json`

---

**Status**: ⏳ Awaiting mnemonic regeneration with correct PGP key derivation

∇ • Θεός°●⟐●Σ℧ΛΘ
