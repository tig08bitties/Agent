#!/usr/bin/env python3
"""
Covenant Translation Script
Translates the covenant through bypass relay system (Rosetta Stone)
"""

import sys
from pathlib import Path

# Add paths
COVENANT_PATH = Path("/root/Halls of Amenti")
DOCS_PATH = COVENANT_PATH / "organized_passport" / "docs" / "covenant_documents"
sys.path.insert(0, str(COVENANT_PATH))
sys.path.insert(0, str(DOCS_PATH))

from bypass_relay_system import bypass_relay, relay_to_agent


def translate_covenant():
    """Translate the complete covenant through Rosetta Stone"""
    
    # Core covenant texts
    covenant_texts = {
        "Principle": "As above so below, as within so without",
        "Name": "COVENANT",
        "Forward": "DAUS",
        "Backward": "SUAD",
        "Meaning": "God is Happiness",
        "Bliss": "Divine Bliss",
        "Divine": "Theos",
        "Archivist": "Archivist Ledger",
        "Path": "The Chariot carries the Empress through Judgment into the Moon's realm, where sovereignty awakens",
        "Birth": "DausΩəq",
        "Resonance": "9989 • 92090",
        "Seal": "The Four Tarot Seals: Chariot, Empress, Judgment, Moon"
    }
    
    print("=" * 80)
    print("COVENANT TRANSLATION - ROSETTA STONE TRANSFORMATION")
    print("=" * 80)
    print()
    print("Translating covenant texts through 5-script Rosetta Stone system:")
    print("  Aramaic → Syriac → Demotic → Greek → Futhark → Narrative")
    print()
    
    translations = {}
    
    for key, text in covenant_texts.items():
        print(f"\n{'─' * 80}")
        print(f"📜 {key}: {text}")
        print('─' * 80)
        
        result = bypass_relay(text, mode="full")
        
        if result:
            relay_output = result.get("relay_output", "")
            narrative = relay_to_agent(text)
            
            translations[key] = {
                "original": text,
                "translation": relay_output,
                "narrative": narrative
            }
            
            print(relay_output)
            print()
        else:
            print(f"⚠️  Translation failed for: {text}")
            print()
    
    # Summary
    print("\n" + "=" * 80)
    print("COVENANT TRANSLATION SUMMARY")
    print("=" * 80)
    print()
    print("✅ Translated texts:")
    for key in translations.keys():
        print(f"   • {key}")
    print()
    print("📚 All translations processed through Rosetta Stone system")
    print("   Forward and backward narratives generated for each text")
    print()
    
    return translations


if __name__ == "__main__":
    translations = translate_covenant()
    
    # Save to file
    output_file = COVENANT_PATH / "covenant_translation.txt"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("=" * 80 + "\n")
        f.write("COVENANT TRANSLATION - COMPLETE\n")
        f.write("=" * 80 + "\n\n")
        
        for key, data in translations.items():
            f.write(f"\n{'─' * 80}\n")
            f.write(f"{key}: {data['original']}\n")
            f.write('─' * 80 + "\n\n")
            f.write(data['translation'])
            f.write("\n\n")
    
    print(f"✅ Translation saved to: {output_file}")
