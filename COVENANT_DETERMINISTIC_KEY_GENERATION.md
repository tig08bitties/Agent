# Covenant Deterministic Key Generation Guide
## Quantum-Resistant Cryptographic Foundation

**Status**: 🔐 Foundation Document  
**Date**: January 9, 2025  
**Principle**: "As Above, So Below, As Within, So Without"  
**Source Images**: `The_Eternal_Covenant_Declaration.png` + `Glyph.png`

---

## 🎯 The Foundation

### Core Requirement

**ALL cryptographic keys MUST derive from and trace back to:**

1. **Source Images**:
   - `The_Eternal_Covenant_Declaration.png` (The Declaration)
   - `Glyph.png` (The Seal)

2. **The Hermetic Principle**:
   ```
   As Above, So Below, As Within, So Without
   ```

3. **Traceability**: Every key must be verifiably derived from these sources with a complete audit trail.

---

## 📐 The Four-Layer Structure

### Mapping to "As Above, So Below, As Within, So Without"

```
                    {As Above}
              (Symbolic/Macrocosm)
                        │
                        │ Greek (Σ℧ΛΘεός)
                        │ Mathematical Structure
                        │ Post-Quantum Algorithms
                        ↓
                        
{As Within} ◄─────── ⟐ ───────► {So Without}
    │         Aramaic/Syriac        │
    │         𐡀 ──────── ܬ         │
    │         Covenant Seal         │
    │         Image-Based Keys      │
    │                               │
    ↓                               ↓
Egyptian/Demotic              Egyptian/Demotic
(Classical Crypto)            (Hybrid Systems)
    │                               │
    └───────────────┬───────────────┘
                    │
                    ↓
              {So Below}
          (Technical/Microcosm)
        Implementation Layer
```

### Layer Mapping

| Layer | Domain | Cryptographic Function | Key Type |
|-------|--------|------------------------|----------|
| **As Above** | Symbolic/Macrocosm | Post-Quantum Algorithms | Master Seed (PQ) |
| **As Within** | Identity/Internal | Image-Based Derivation | Foundation Keys |
| **So Without** | External/System | Hybrid Classical+PQ | Operational Keys |
| **So Below** | Technical/Microcosm | Implementation | Derived Keys |

---

## 🔬 Quantum-Resistant Standards

### NIST Post-Quantum Cryptography (PQC) Standards

**Status**: NIST PQC Standardization (2024-2025)

#### Category 1: Key Encapsulation Mechanisms (KEM)

1. **CRYSTALS-Kyber** (Selected)
   - **Security Level**: 1, 3, 5
   - **Key Size**: 800-1568 bytes (public), 1632-3168 bytes (secret)
   - **Use Case**: Key exchange, hybrid encryption
   - **Status**: ✅ NIST Standard

2. **BIKE** (Alternative)
   - Code-based cryptography
   - Larger key sizes but proven security

3. **HQC** (Alternative)
   - Code-based with smaller keys than BIKE

#### Category 2: Digital Signatures

1. **CRYSTALS-Dilithium** (Selected)
   - **Security Level**: 2, 3, 5
   - **Signature Size**: 2420-3366 bytes
   - **Use Case**: Digital signatures, authentication
   - **Status**: ✅ NIST Standard

2. **FALCON** (Selected)
   - **Security Level**: 1, 5
   - **Signature Size**: 666-1280 bytes (smaller than Dilithium)
   - **Use Case**: Compact signatures
   - **Status**: ✅ NIST Standard

3. **SPHINCS+** (Selected)
   - **Security Level**: 1, 3, 5
   - **Signature Size**: 7856-49216 bytes (larger but stateless)
   - **Use Case**: Stateless hash-based signatures
   - **Status**: ✅ NIST Standard

### Hybrid Approach (Recommended)

**Classical + Post-Quantum = Future-Proof**

```
Hybrid Key = Classical Key || Post-Quantum Key
```

**Benefits**:
- ✅ Works with existing systems (classical)
- ✅ Future-proof against quantum attacks (PQ)
- ✅ Graceful migration path
- ✅ Defense in depth

---

## 🖼️ Image-Based Key Derivation

### Step 1: Extract Deterministic Seeds from Images

#### From `The_Eternal_Covenant_Declaration.png`

```python
import hashlib
from PIL import Image
import numpy as np

def extract_covenant_seed(image_path):
    """
    Extract deterministic seed from The_Eternal_Covenant_Declaration.png
    Uses multiple extraction methods for redundancy
    """
    img = Image.open(image_path)
    
    # Method 1: Pixel Hash (LSB + MSB)
    pixels = np.array(img)
    pixel_hash = hashlib.sha3_512(pixels.tobytes()).digest()
    
    # Method 2: Image Hash (Perceptual)
    # Using average hash for stability
    img_hash = imagehash.average_hash(img)
    hash_bytes = str(img_hash).encode()
    hash_digest = hashlib.sha3_512(hash_bytes).digest()
    
    # Method 3: Metadata Hash
    exif_data = img.getexif()
    metadata_str = str(exif_data).encode()
    metadata_digest = hashlib.sha3_512(metadata_str).digest()
    
    # Combine all methods (XOR for independence)
    combined = bytes(a ^ b ^ c for a, b, c in 
                     zip(pixel_hash, hash_digest, metadata_digest))
    
    return hashlib.sha3_512(combined).digest()  # Final 64-byte seed
```

#### From `Glyph.png`

```python
def extract_glyph_seed(image_path):
    """
    Extract deterministic seed from Glyph.png
    Focus on glyph structure and geometric properties
    """
    img = Image.open(image_path)
    
    # Method 1: Geometric Hash (Shape properties)
    # Extract contours, edges, symmetry
    edges = cv2.Canny(np.array(img), 50, 150)
    edge_hash = hashlib.sha3_512(edges.tobytes()).digest()
    
    # Method 2: Color Distribution
    colors = img.getcolors(maxcolors=256*256*256)
    color_str = str(sorted(colors)).encode()
    color_hash = hashlib.sha3_512(color_str).digest()
    
    # Method 3: Glyph-Specific Features
    # Extract the ⟐ symbol properties
    glyph_properties = {
        'center': (img.width // 2, img.height // 2),
        'symmetry': calculate_symmetry(img),
        'density': calculate_density(img)
    }
    prop_str = str(glyph_properties).encode()
    prop_hash = hashlib.sha3_512(prop_str).digest()
    
    # Combine
    combined = bytes(a ^ b ^ c for a, b, c in 
                     zip(edge_hash, color_hash, prop_hash))
    
    return hashlib.sha3_512(combined).digest()  # Final 64-byte seed
```

### Step 2: Combine Seeds with Hermetic Principle

```python
def derive_master_seed(covenant_seed, glyph_seed):
    """
    Combine seeds using "As Above, So Below, As Within, So Without"
    """
    # The Principle as salt
    principle = b"As Above, So Below, As Within, So Without"
    
    # Four-way combination (representing the four layers)
    # Above: covenant_seed (symbolic)
    # Below: glyph_seed (technical)
    # Within: principle (internal)
    # Without: timestamp/context (external)
    
    # Create four sub-seeds
    above = hashlib.sha3_512(covenant_seed + principle).digest()
    below = hashlib.sha3_512(glyph_seed + principle).digest()
    within = hashlib.sha3_512(principle + covenant_seed).digest()
    without = hashlib.sha3_512(principle + glyph_seed).digest()
    
    # Combine all four
    master_seed = hashlib.sha3_512(
        above + below + within + without
    ).digest()
    
    return master_seed  # 64-byte master seed
```

---

## 🔐 Key Generation Hierarchy

### Level 1: Master Seed (As Above)

**Source**: Combined image seeds + Hermetic principle  
**Algorithm**: SHA3-512 (quantum-resistant hash)  
**Size**: 64 bytes (512 bits)  
**Purpose**: Root of all key derivation

```python
master_seed = derive_master_seed(
    extract_covenant_seed("The_Eternal_Covenant_Declaration.png"),
    extract_glyph_seed("Glyph.png")
)
```

### Level 2: Foundation Keys (As Within)

**Source**: Master seed + identity context  
**Algorithms**: 
- **Classical**: Ed25519 (for compatibility)
- **Post-Quantum**: CRYSTALS-Dilithium Level 3

```python
def generate_foundation_keys(master_seed, identity_context):
    """
    Generate foundation keys for identity layer
    """
    # Derive key material
    key_material = hkdf_expand(
        master_seed,
        b"COVENANT_FOUNDATION" + identity_context,
        64
    )
    
    # Classical key (Ed25519)
    ed25519_sk = ed25519.SigningKey(key_material[:32])
    ed25519_pk = ed25519_sk.get_verifying_key()
    
    # Post-quantum key (Dilithium)
    dilithium_sk = dilithium.SecretKey.generate(key_material)
    dilithium_pk = dilithium_sk.public_key()
    
    return {
        'classical': {
            'private': ed25519_sk,
            'public': ed25519_pk
        },
        'post_quantum': {
            'private': dilithium_sk,
            'public': dilithium_pk
        }
    }
```

### Level 3: Operational Keys (So Without)

**Source**: Foundation keys + operational context  
**Algorithms**:
- **KEM**: CRYSTALS-Kyber Level 3 (for encryption)
- **Signatures**: Hybrid (Ed25519 + Dilithium)

```python
def generate_operational_keys(foundation_keys, operation_context):
    """
    Generate operational keys for external systems
    """
    # Derive from foundation keys
    context_material = hkdf_expand(
        foundation_keys['classical']['private'].to_bytes(),
        b"OPERATIONAL" + operation_context,
        64
    )
    
    # Kyber key pair (for key exchange)
    kyber_sk, kyber_pk = kyber.generate_keypair(context_material)
    
    # Hybrid signing key (classical + PQ)
    hybrid_signing = {
        'classical': foundation_keys['classical'],
        'post_quantum': foundation_keys['post_quantum'],
        'combined': combine_signatures  # Function to combine both
    }
    
    return {
        'kem': {
            'private': kyber_sk,
            'public': kyber_pk
        },
        'signing': hybrid_signing
    }
```

### Level 4: Derived Keys (So Below)

**Source**: Operational keys + specific use case  
**Algorithms**: Application-specific (AES-256, ChaCha20-Poly1305)

```python
def derive_application_key(operational_keys, application_id):
    """
    Derive application-specific keys
    """
    # Use Kyber for key encapsulation
    shared_secret = kyber.encapsulate(
        operational_keys['kem']['public'],
        application_id
    )
    
    # Derive symmetric key from shared secret
    symmetric_key = hkdf_expand(
        shared_secret,
        b"APPLICATION" + application_id,
        32  # 256 bits for AES-256
    )
    
    return symmetric_key
```

---

## 🔍 Traceability & Verification

### Audit Trail Structure

Every key must include:

1. **Source Provenance**:
   ```json
   {
     "source_images": {
       "covenant_declaration": {
         "path": "The_Eternal_Covenant_Declaration.png",
         "sha3_512": "<hash>",
         "extraction_method": "pixel_hash + perceptual_hash + metadata_hash"
       },
       "glyph": {
         "path": "Glyph.png",
         "sha3_512": "<hash>",
         "extraction_method": "geometric_hash + color_distribution + glyph_features"
       }
     },
     "hermetic_principle": "As Above, So Below, As Within, So Without",
     "master_seed": {
       "sha3_512": "<hash>",
       "derivation_path": "covenant_seed + glyph_seed + principle"
     }
   }
   ```

2. **Key Derivation Path**:
   ```
   Master Seed (As Above)
     ↓
   Foundation Keys (As Within)
     ↓
   Operational Keys (So Without)
     ↓
   Derived Keys (So Below)
   ```

3. **Verification Function**:
   ```python
   def verify_key_provenance(key, audit_trail):
       """
       Verify that a key can be traced back to source images
       """
       # Re-extract seeds from source images
       covenant_seed = extract_covenant_seed(
           audit_trail['source_images']['covenant_declaration']['path']
       )
       glyph_seed = extract_glyph_seed(
           audit_trail['source_images']['glyph']['path']
       )
       
       # Re-derive master seed
       master_seed = derive_master_seed(covenant_seed, glyph_seed)
       
       # Verify matches audit trail
       assert hashlib.sha3_512(master_seed).hexdigest() == \
              audit_trail['master_seed']['sha3_512']
       
       # Re-derive key and verify
       derived_key = derive_key_from_master(master_seed, key['context'])
       assert derived_key == key['material']
       
       return True
   ```

---

## 🛡️ Security Standards

### Recommended Algorithms

| Purpose | Classical | Post-Quantum | Hybrid |
|---------|-----------|--------------|--------|
| **Hashing** | SHA-256 | SHA3-512 | SHA-256 + SHA3-512 |
| **Signatures** | Ed25519 | Dilithium-3 | Ed25519 + Dilithium-3 |
| **Key Exchange** | X25519 | Kyber-768 | X25519 + Kyber-768 |
| **Encryption** | AES-256-GCM | - | AES-256-GCM (symmetric) |
| **KEM** | - | Kyber-768 | - |

### Security Levels

- **Level 1**: 128-bit security (Kyber-512, Dilithium-2)
- **Level 3**: 192-bit security (Kyber-768, Dilithium-3) ✅ **Recommended**
- **Level 5**: 256-bit security (Kyber-1024, Dilithium-5)

---

## 📋 Implementation Checklist

### Phase 1: Source Image Verification

- [ ] Locate `The_Eternal_Covenant_Declaration.png`
- [ ] Locate `Glyph.png`
- [ ] Verify image integrity (SHA3-512 hashes)
- [ ] Extract seeds from both images
- [ ] Document extraction methods

### Phase 2: Master Seed Generation

- [ ] Implement seed extraction functions
- [ ] Implement master seed derivation
- [ ] Generate master seed
- [ ] Store master seed securely (encrypted, offline backup)
- [ ] Create audit trail

### Phase 3: Foundation Keys

- [ ] Generate Ed25519 key pair
- [ ] Generate Dilithium-3 key pair
- [ ] Create hybrid signing function
- [ ] Store keys securely
- [ ] Document key derivation path

### Phase 4: Operational Keys

- [ ] Generate Kyber-768 key pair
- [ ] Implement hybrid encryption
- [ ] Test key exchange
- [ ] Document operational context

### Phase 5: Verification System

- [ ] Implement provenance verification
- [ ] Create audit trail structure
- [ ] Test traceability
- [ ] Document verification procedures

---

## 🔐 Security Considerations

### Key Storage

1. **Master Seed**: 
   - Store encrypted (AES-256-GCM)
   - Offline backup (hardware security module)
   - Never store in plaintext

2. **Private Keys**:
   - Use hardware security modules (HSM) when possible
   - Encrypt at rest
   - Limit access (principle of least privilege)

3. **Audit Trails**:
   - Store separately from keys
   - Verify integrity (digital signatures)
   - Immutable log (blockchain or append-only)

### Key Rotation

- **Master Seed**: Never rotate (deterministic source)
- **Foundation Keys**: Rotate only if compromised
- **Operational Keys**: Rotate periodically (e.g., annually)
- **Derived Keys**: Rotate per application policy

---

## 📚 References

### NIST Post-Quantum Cryptography

- **NIST PQC Standardization**: https://csrc.nist.gov/projects/post-quantum-cryptography
- **Selected Algorithms** (2024): CRYSTALS-Kyber, CRYSTALS-Dilithium, FALCON, SPHINCS+
- **Migration Guidance**: NIST SP 800-208

### Quantum-Resistant Libraries

- **liboqs** (Open Quantum Safe): https://github.com/open-quantum-safe/liboqs
- **PQClean**: https://github.com/PQClean/PQClean
- **dilithium-crystals**: https://github.com/pq-crystals/dilithium
- **kyber-crystals**: https://github.com/pq-crystals/kyber

### Hybrid Cryptography

- **RFC 8784**: Mixing Preshared Keys in the Internet Key Exchange Protocol Version 2 (IKEv2)
- **Hybrid Post-Quantum TLS**: https://datatracker.ietf.org/doc/draft-ietf-tls-hybrid-design/

---

## 🎯 Next Steps

1. **Locate Source Images**: Find `The_Eternal_Covenant_Declaration.png` and `Glyph.png`
2. **Implement Seed Extraction**: Create extraction functions
3. **Generate Master Seed**: Derive from images + principle
4. **Create Foundation Keys**: Generate Ed25519 + Dilithium-3
5. **Build Verification System**: Implement traceability
6. **Document Everything**: Document complete derivation path

---

**∇ • Θεός°●⟐●Σ℧ΛΘ**

*"As Above, So Below, As Within, So Without"*

*All keys trace back to the source images and the eternal principle.*

---

**Framework**: Covenant Agent System  
**Repository**: https://github.com/thaeos/Agent  
**Date**: January 9, 2025  
**Status**: 🔐 Foundation Document - Ready for Implementation
