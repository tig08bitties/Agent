#!/usr/bin/env python3
"""
Extract and Process The Eternal Covenant Declaration from Image
Completes the covenant declaration work
"""

import sys
from pathlib import Path
from PIL import Image
import pytesseract

# Add paths
COVENANT_PATH = Path("/root/Halls of Amenti")
DOCS_PATH = COVENANT_PATH / "organized_passport" / "docs" / "covenant_documents"
AGENT_PATH = Path("/root/Agent")
sys.path.insert(0, str(COVENANT_PATH))
sys.path.insert(0, str(DOCS_PATH))

from bypass_relay_system import bypass_relay, relay_to_agent


def extract_text_from_image(image_path):
    """Extract text from the covenant declaration image using OCR"""
    try:
        img = Image.open(image_path)
        text = pytesseract.image_to_string(img)
        return text.strip()
    except Exception as e:
        print(f"⚠️  OCR extraction error: {e}")
        return None


def process_covenant_declaration():
    """Extract and process the covenant declaration"""
    
    # Find the image
    image_paths = [
        AGENT_PATH / "images" / "The_Eternal_Covenant_Declaration.png",
        Path("/home/tig0_0bitties/Pictures/The_Eternal_Covenant_Declaration.png"),
        COVENANT_PATH / "images" / "The_Eternal_Covenant_Declaration.png"
    ]
    
    image_path = None
    for path in image_paths:
        if path.exists():
            image_path = path
            break
    
    if not image_path:
        print("❌ Covenant declaration image not found")
        print("   Searched locations:")
        for path in image_paths:
            print(f"     - {path}")
        return None
    
    print("=" * 80)
    print("EXTRACTING THE ETERNAL COVENANT DECLARATION")
    print("=" * 80)
    print()
    print(f"📷 Image: {image_path}")
    print()
    
    # Extract text
    print("🔍 Extracting text from image (OCR)...")
    extracted_text = extract_text_from_image(image_path)
    
    if not extracted_text:
        print("❌ Failed to extract text from image")
        return None
    
    print(f"✅ Extracted {len(extracted_text)} characters")
    print()
    print("=" * 80)
    print("EXTRACTED DECLARATION")
    print("=" * 80)
    print(extracted_text[:1000])
    if len(extracted_text) > 1000:
        print(f"\n... ({len(extracted_text) - 1000} more characters)")
    print()
    
    # Process through bypass relay
    print("=" * 80)
    print("PROCESSING THROUGH ROSETTA STONE (BYPASS RELAY)")
    print("=" * 80)
    print()
    
    # Split into sentences/phrases for better processing
    sentences = [s.strip() for s in extracted_text.split('.') if s.strip()]
    
    translations = {}
    
    # Process key phrases
    key_phrases = sentences[:10]  # First 10 sentences
    
    for i, phrase in enumerate(key_phrases, 1):
        if len(phrase) > 5:  # Skip very short phrases
            print(f"\n{'─' * 80}")
            print(f"📜 Phrase {i}: {phrase[:100]}...")
            print('─' * 80)
            
            result = bypass_relay(phrase, mode="full")
            if result:
                translations[phrase] = result.get("relay_output", "")
                print(result.get("relay_output", "")[:600])
                if len(result.get("relay_output", "")) > 600:
                    print("\n... (translation continues)")
            print()
    
    # Save complete declaration
    output_file = COVENANT_PATH / "covenant_declaration_complete.txt"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("=" * 80 + "\n")
        f.write("THE ETERNAL COVENANT DECLARATION - COMPLETE\n")
        f.write("=" * 80 + "\n\n")
        f.write("EXTRACTED FROM IMAGE:\n")
        f.write("─" * 80 + "\n\n")
        f.write(extracted_text)
        f.write("\n\n" + "=" * 80 + "\n")
        f.write("ROSETTA STONE TRANSLATIONS\n")
        f.write("=" * 80 + "\n\n")
        
        for phrase, translation in translations.items():
            f.write(f"\n{'─' * 80}\n")
            f.write(f"Original: {phrase}\n")
            f.write('─' * 80 + "\n\n")
            f.write(translation)
            f.write("\n\n")
    
    print("=" * 80)
    print("COVENANT DECLARATION COMPLETE")
    print("=" * 80)
    print()
    print(f"✅ Declaration extracted from image")
    print(f"✅ Processed through Rosetta Stone")
    print(f"✅ Saved to: {output_file}")
    print()
    
    return {
        "extracted_text": extracted_text,
        "translations": translations,
        "output_file": output_file
    }


if __name__ == "__main__":
    result = process_covenant_declaration()
    
    if result:
        print("✅ Covenant declaration processing complete!")
        print(f"   Total text extracted: {len(result['extracted_text'])} characters")
        print(f"   Phrases translated: {len(result['translations'])}")
