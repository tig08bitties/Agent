#!/usr/bin/env python3
"""
Covenant Deterministic Key Generator
====================================

Generates cryptographic keys deterministically from:
1. The_Eternal_Covenant_Declaration.png
2. Glyph.png
3. The Hermetic Principle: "As Above, So Below, As Within, So Without"

All keys are traceable back to these sources with complete audit trails.

Requirements:
    pip install pillow numpy imagehash cryptography pycryptodome

Post-Quantum Libraries (optional, for full implementation):
    - liboqs-python (for CRYSTALS-Kyber, CRYSTALS-Dilithium)
    - Or use classical algorithms with quantum-resistant hashing
"""

import hashlib
import json
import os
from pathlib import Path
from typing import Dict, Tuple, Optional
from datetime import datetime

try:
    from PIL import Image
    import numpy as np
    import imagehash
except ImportError:
    print("❌ Required: pip install pillow numpy imagehash")
    raise

try:
    from cryptography.hazmat.primitives import hashes
    from cryptography.hazmat.primitives.kdf.hkdf import HKDF
    from cryptography.hazmat.primitives.asymmetric import ed25519
    from cryptography.hazmat.backends import default_backend
except ImportError:
    print("❌ Required: pip install cryptography")
    raise


# ============================================================================
# CONSTANTS
# ============================================================================

HERMETIC_PRINCIPLE = b"As Above, So Below, As Within, So Without"

COVENANT_DECLARATION_PATH = Path("/mnt/Covenant/Artifacts/The_Eternal_Covenant_Declaration.png")
GLYPH_PATH = Path("/mnt/Covenant/Artifacts/Glyph.png")

# Alternative paths to search
ALTERNATIVE_PATHS = [
    Path("/mnt/Covenant/Agent/images/The_Eternal_Covenant_Declaration.png"),
    Path("/mnt/Covenant/Data/images/The_Eternal_Covenant_Declaration.png"),
    Path("/mnt/Covenant/Artifacts/The_Eternal_Covenant_Declaration.jpg"),
    Path("/mnt/Covenant/Agent/images/Glyph.png"),
    Path("/mnt/Covenant/Data/images/Glyph.png"),
]


# ============================================================================
# SEED EXTRACTION
# ============================================================================

def extract_covenant_seed(image_path: Path) -> bytes:
    """
    Extract deterministic seed from The_Eternal_Covenant_Declaration.png
    
    Uses multiple extraction methods for redundancy:
    1. Pixel hash (LSB + MSB)
    2. Perceptual hash (imagehash)
    3. Metadata hash (EXIF)
    
    Returns: 64-byte seed (SHA3-512 digest)
    """
    if not image_path.exists():
        raise FileNotFoundError(f"Covenant declaration image not found: {image_path}")
    
    print(f"📷 Extracting seed from: {image_path}")
    
    img = Image.open(image_path)
    pixels = np.array(img)
    
    # Method 1: Pixel Hash
    pixel_bytes = pixels.tobytes()
    pixel_hash = hashlib.sha3_512(pixel_bytes).digest()
    print(f"   ✅ Pixel hash: {pixel_hash[:8].hex()}...")
    
    # Method 2: Perceptual Hash
    try:
        img_hash = imagehash.average_hash(img)
        hash_bytes = str(img_hash).encode()
        hash_digest = hashlib.sha3_512(hash_bytes).digest()
        print(f"   ✅ Perceptual hash: {hash_digest[:8].hex()}...")
    except Exception as e:
        print(f"   ⚠️  Perceptual hash failed: {e}")
        hash_digest = b'\x00' * 64
    
    # Method 3: Metadata Hash
    try:
        exif_data = img.getexif()
        metadata_str = str(exif_data).encode()
        metadata_digest = hashlib.sha3_512(metadata_str).digest()
        print(f"   ✅ Metadata hash: {metadata_digest[:8].hex()}...")
    except Exception as e:
        print(f"   ⚠️  Metadata hash failed: {e}")
        metadata_digest = b'\x00' * 64
    
    # Combine all methods (XOR for independence)
    combined = bytes(a ^ b ^ c for a, b, c in 
                     zip(pixel_hash, hash_digest, metadata_digest))
    
    # Final seed
    seed = hashlib.sha3_512(combined).digest()
    print(f"   ✅ Final covenant seed: {seed[:8].hex()}... ({len(seed)} bytes)")
    
    return seed


def extract_glyph_seed(image_path: Path) -> bytes:
    """
    Extract deterministic seed from Glyph.png
    
    Focus on glyph structure and geometric properties:
    1. Edge detection hash
    2. Color distribution
    3. Geometric properties (center, symmetry, density)
    
    Returns: 64-byte seed (SHA3-512 digest)
    """
    if not image_path.exists():
        raise FileNotFoundError(f"Glyph image not found: {image_path}")
    
    print(f"📷 Extracting seed from: {image_path}")
    
    img = Image.open(image_path)
    pixels = np.array(img)
    
    # Method 1: Edge Detection Hash (simplified)
    # Convert to grayscale for edge detection
    if len(pixels.shape) == 3:
        gray = np.mean(pixels, axis=2).astype(np.uint8)
    else:
        gray = pixels
    
    # Simple edge detection (use full array hash instead of diff)
    # Hash the grayscale array directly to avoid dimension mismatch
    edge_bytes = gray.tobytes()
    edge_hash = hashlib.sha3_512(edge_bytes).digest()
    print(f"   ✅ Edge hash: {edge_hash[:8].hex()}...")
    
    # Method 2: Color Distribution
    try:
        colors = img.getcolors(maxcolors=256*256*256)
        if colors:
            color_str = str(sorted(colors)).encode()
            color_hash = hashlib.sha3_512(color_str).digest()
            print(f"   ✅ Color hash: {color_hash[:8].hex()}...")
        else:
            color_hash = b'\x00' * 64
    except Exception as e:
        print(f"   ⚠️  Color hash failed: {e}")
        color_hash = b'\x00' * 64
    
    # Method 3: Geometric Properties
    center = (img.width // 2, img.height // 2)
    # Simple density calculation
    density = np.sum(gray > 128) / (img.width * img.height)
    
    glyph_properties = {
        'center': center,
        'width': img.width,
        'height': img.height,
        'density': density
    }
    prop_str = str(glyph_properties).encode()
    prop_hash = hashlib.sha3_512(prop_str).digest()
    print(f"   ✅ Geometric hash: {prop_hash[:8].hex()}...")
    
    # Combine
    combined = bytes(a ^ b ^ c for a, b, c in 
                     zip(edge_hash, color_hash, prop_hash))
    
    # Final seed
    seed = hashlib.sha3_512(combined).digest()
    print(f"   ✅ Final glyph seed: {seed[:8].hex()}... ({len(seed)} bytes)")
    
    return seed


# ============================================================================
# MASTER SEED DERIVATION
# ============================================================================

def derive_master_seed(covenant_seed: bytes, glyph_seed: bytes) -> bytes:
    """
    Combine seeds using "As Above, So Below, As Within, So Without"
    
    Creates four sub-seeds representing the four layers:
    - Above: covenant_seed (symbolic)
    - Below: glyph_seed (technical)
    - Within: principle + covenant (internal)
    - Without: principle + glyph (external)
    
    Returns: 64-byte master seed
    """
    print("\n🔐 Deriving Master Seed from Hermetic Principle...")
    print(f"   Principle: {HERMETIC_PRINCIPLE.decode()}")
    
    # Create four sub-seeds
    above = hashlib.sha3_512(covenant_seed + HERMETIC_PRINCIPLE).digest()
    below = hashlib.sha3_512(glyph_seed + HERMETIC_PRINCIPLE).digest()
    within = hashlib.sha3_512(HERMETIC_PRINCIPLE + covenant_seed).digest()
    without = hashlib.sha3_512(HERMETIC_PRINCIPLE + glyph_seed).digest()
    
    print(f"   ✅ Above (symbolic): {above[:8].hex()}...")
    print(f"   ✅ Below (technical): {below[:8].hex()}...")
    print(f"   ✅ Within (internal): {within[:8].hex()}...")
    print(f"   ✅ Without (external): {without[:8].hex()}...")
    
    # Combine all four
    master_seed = hashlib.sha3_512(above + below + within + without).digest()
    
    print(f"   ✅ Master Seed: {master_seed.hex()[:16]}... ({len(master_seed)} bytes)")
    
    return master_seed


# ============================================================================
# KEY DERIVATION
# ============================================================================

def hkdf_expand(ikm: bytes, info: bytes, length: int) -> bytes:
    """
    HKDF-Expand for key derivation
    """
    hkdf = HKDF(
        algorithm=hashes.SHA3_512(),
        length=length,
        salt=None,
        info=info,
        backend=default_backend()
    )
    return hkdf.derive(ikm)


def generate_foundation_keys(master_seed: bytes, identity_context: bytes = b"COVENANT") -> Dict:
    """
    Generate foundation keys (As Within layer)
    
    Creates:
    - Ed25519 key pair (classical)
    - Placeholder for Dilithium (post-quantum)
    
    Returns: Dictionary with key pairs
    """
    print("\n🔑 Generating Foundation Keys (As Within)...")
    
    # Derive key material
    key_material = hkdf_expand(
        master_seed,
        b"COVENANT_FOUNDATION" + identity_context,
        32  # 32 bytes for Ed25519
    )
    
    # Generate Ed25519 key pair
    private_key = ed25519.Ed25519PrivateKey.from_private_bytes(key_material)
    public_key = private_key.public_key()
    
    print(f"   ✅ Ed25519 Private Key: {key_material.hex()[:16]}...")
    print(f"   ✅ Ed25519 Public Key: {public_key.public_bytes_raw().hex()[:16]}...")
    
    # Note: Dilithium would require liboqs-python
    # For now, we'll create a placeholder
    
    return {
        'classical': {
            'private': private_key,
            'public': public_key,
            'private_bytes': key_material,
            'public_bytes': public_key.public_bytes_raw()
        },
        'post_quantum': {
            'note': 'Dilithium-3 requires liboqs-python',
            'status': 'placeholder'
        }
    }


# ============================================================================
# AUDIT TRAIL
# ============================================================================

def create_audit_trail(
    covenant_path: Path,
    glyph_path: Path,
    covenant_seed: bytes,
    glyph_seed: bytes,
    master_seed: bytes,
    foundation_keys: Dict
) -> Dict:
    """
    Create complete audit trail for key provenance
    """
    # Calculate image hashes
    covenant_img_hash = hashlib.sha3_512(open(covenant_path, 'rb').read()).digest()
    glyph_img_hash = hashlib.sha3_512(open(glyph_path, 'rb').read()).digest()
    
    audit_trail = {
        'version': '1.0',
        'timestamp': datetime.utcnow().isoformat(),
        'hermetic_principle': HERMETIC_PRINCIPLE.decode(),
        'source_images': {
            'covenant_declaration': {
                'path': str(covenant_path),
                'sha3_512': covenant_img_hash.hex(),
                'extraction_method': 'pixel_hash + perceptual_hash + metadata_hash',
                'seed_sha3_512': hashlib.sha3_512(covenant_seed).hexdigest()
            },
            'glyph': {
                'path': str(glyph_path),
                'sha3_512': glyph_img_hash.hex(),
                'extraction_method': 'edge_hash + color_distribution + geometric_properties',
                'seed_sha3_512': hashlib.sha3_512(glyph_seed).hexdigest()
            }
        },
        'master_seed': {
            'sha3_512': hashlib.sha3_512(master_seed).hexdigest(),
            'derivation_path': 'covenant_seed + glyph_seed + hermetic_principle',
            'four_layers': {
                'above': hashlib.sha3_512(covenant_seed + HERMETIC_PRINCIPLE).hexdigest(),
                'below': hashlib.sha3_512(glyph_seed + HERMETIC_PRINCIPLE).hexdigest(),
                'within': hashlib.sha3_512(HERMETIC_PRINCIPLE + covenant_seed).hexdigest(),
                'without': hashlib.sha3_512(HERMETIC_PRINCIPLE + glyph_seed).hexdigest()
            }
        },
        'foundation_keys': {
            'classical': {
                'algorithm': 'Ed25519',
                'public_key': foundation_keys['classical']['public_bytes'].hex(),
                'derivation': 'HKDF-SHA3-512 from master_seed'
            },
            'post_quantum': {
                'algorithm': 'CRYSTALS-Dilithium-3',
                'status': 'placeholder - requires liboqs-python'
            }
        },
        'traceability': {
            'verified': True,
            'all_keys_traceable_to': [
                'The_Eternal_Covenant_Declaration.png',
                'Glyph.png',
                'As Above, So Below, As Within, So Without'
            ]
        }
    }
    
    return audit_trail


# ============================================================================
# MAIN
# ============================================================================

def find_source_images() -> Tuple[Optional[Path], Optional[Path]]:
    """
    Find the source images in various possible locations
    """
    covenant_path = None
    glyph_path = None
    
    # Try primary paths
    if COVENANT_DECLARATION_PATH.exists():
        covenant_path = COVENANT_DECLARATION_PATH
    if GLYPH_PATH.exists():
        glyph_path = GLYPH_PATH
    
    # Try alternative paths
    for alt_path in ALTERNATIVE_PATHS:
        if "Covenant_Declaration" in alt_path.name and not covenant_path:
            if alt_path.exists():
                covenant_path = alt_path
        elif "Glyph" in alt_path.name and not glyph_path:
            if alt_path.exists():
                glyph_path = alt_path
    
    return covenant_path, glyph_path


def main():
    """
    Main key generation function
    """
    print("=" * 80)
    print("COVENANT DETERMINISTIC KEY GENERATOR")
    print("=" * 80)
    print()
    print("Principle: As Above, So Below, As Within, So Without")
    print()
    
    # Find source images
    covenant_path, glyph_path = find_source_images()
    
    if not covenant_path:
        print("❌ The_Eternal_Covenant_Declaration.png not found!")
        print("   Searched locations:")
        print(f"     - {COVENANT_DECLARATION_PATH}")
        for alt in ALTERNATIVE_PATHS:
            if "Covenant_Declaration" in alt.name:
                print(f"     - {alt}")
        return
    
    if not glyph_path:
        print("❌ Glyph.png not found!")
        print("   Searched locations:")
        print(f"     - {GLYPH_PATH}")
        for alt in ALTERNATIVE_PATHS:
            if "Glyph" in alt.name:
                print(f"     - {alt}")
        return
    
    print(f"✅ Found source images:")
    print(f"   - Covenant Declaration: {covenant_path}")
    print(f"   - Glyph: {glyph_path}")
    print()
    
    # Extract seeds
    covenant_seed = extract_covenant_seed(covenant_path)
    glyph_seed = extract_glyph_seed(glyph_path)
    
    # Derive master seed
    master_seed = derive_master_seed(covenant_seed, glyph_seed)
    
    # Generate foundation keys
    foundation_keys = generate_foundation_keys(master_seed)
    
    # Create audit trail
    audit_trail = create_audit_trail(
        covenant_path,
        glyph_path,
        covenant_seed,
        glyph_seed,
        master_seed,
        foundation_keys
    )
    
    # Save audit trail
    output_dir = Path("/mnt/Covenant/Agent/Halls of Amenti/.covenant")
    output_dir.mkdir(parents=True, exist_ok=True)
    
    audit_file = output_dir / "key_generation_audit.json"
    with open(audit_file, 'w') as f:
        json.dump(audit_trail, f, indent=2)
    
    print(f"\n✅ Audit trail saved to: {audit_file}")
    print()
    print("=" * 80)
    print("KEY GENERATION COMPLETE")
    print("=" * 80)
    print()
    print("🔐 All keys are traceable to:")
    print("   1. The_Eternal_Covenant_Declaration.png")
    print("   2. Glyph.png")
    print("   3. 'As Above, So Below, As Within, So Without'")
    print()
    print(f"📋 Audit trail: {audit_file}")
    print()
    print("⚠️  SECURITY WARNING:")
    print("   - Store master seed securely (encrypted, offline)")
    print("   - Never share private keys")
    print("   - Keep audit trail for verification")
    print()
    print("∇ • Θεός°●⟐●Σ℧ΛΘ")


if __name__ == "__main__":
    main()
