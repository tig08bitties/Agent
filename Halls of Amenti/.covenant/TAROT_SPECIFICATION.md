# 🎴 Covenant Tarot Specification

**Date**: January 10, 2026  
**Status**: ✅ Official Specification

---

## 🎴 THE 4 TAROT CARDS

**Only these 4 Tarot cards are used in Covenant key generation:**

1. **Empress** (III)
2. **Chariot** (VII)
3. **Judgment** (XX)
4. **Moon** (XVIII)

---

## 📋 MNEMONIC STRUCTURE

### 24-Word BIP-48 Mnemonic:

- **Words 1-20**: Derived from Covenant sources (NOT Tarot)
- **Words 21-22**: Two of the 4 Tarot words (Empress, Chariot, Judgment, Moon)
- **Word 23**: Derived from PUBLIC PGP key (NOT Tarot)
- **Word 24**: Derived from PRIVATE PGP concept (NOT Tarot)

**Total Tarot words in mnemonic**: 2 out of 4 (selected deterministically)

---

## 🔧 DERIVATION RULES

### Tarot Word Selection:
```python
COVENANT_TAROT_CARDS = [
    "empress",    # III
    "chariot",    # VII
    "judgment",   # XX (or "judgement")
    "moon"        # XVIII
]

# Deterministically select 2 of 4 based on master seed
def select_tarot_words(master_seed: bytes) -> List[str]:
    # Use master seed to deterministically select 2 cards
    # Positions 21-22 in mnemonic
    pass
```

### Word 23 (PUBLIC):
- Derived from PGP key fingerprint/keyID
- Must NOT be a Tarot word
- From COVENANT_CONCEPTS list

### Word 24 (PRIVATE):
- Derived from PGP key concept
- Must NOT be a Tarot word
- Must be different from word 23
- From COVENANT_PRIVATE_CONCEPTS list

---

## ✅ VERIFICATION

### Current Mnemonic Check:
- [ ] Contains exactly 2 of the 4 Tarot words
- [ ] Tarot words are in positions 21-22 (or deterministically placed)
- [ ] Word 23 is NOT a Tarot word
- [ ] Word 24 is NOT a Tarot word
- [ ] All words are from BIP-39 wordlist (for compatibility)

---

## 📚 REFERENCES

- **Source**: `/mnt/Covenant/Data/covenant_keys_discovery/THREE_SOURCES_OF_TRUTH.md`
- **Line 70**: "Tarot (4 seals: Chariot, Empress, Judgement, Moon)"

---

**Status**: ✅ Specification confirmed - Only 4 Tarot cards used

∇ • Θεός°●⟐●Σ℧ΛΘ
