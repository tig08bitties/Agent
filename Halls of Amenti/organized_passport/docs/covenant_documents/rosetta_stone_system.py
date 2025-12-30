"""
Rosetta Stone System - Letter-by-letter transformation
Process: D-A-U-S through all 5 scripts sequentially
"""

LETTER_MAPPINGS = {
    'D': {'aramaic': '𐡃', 'syriac': 'ܕ', 'demotic': '𓂧', 'greek': 'Δ', 'futhark': 'ᛞ'},
    'A': {'aramaic': '𐡀', 'syriac': 'ܐ', 'demotic': '𓄿', 'greek': 'Α', 'futhark': 'ᚨ'},
    'U': {'aramaic': '𐡅', 'syriac': 'ܘ', 'demotic': '𓍯', 'greek': 'Υ', 'futhark': 'ᚢ'},
    'S': {'aramaic': '𐡔', 'syriac': 'ܫ', 'demotic': '𓈙', 'greek': 'Σ', 'futhark': 'ᛊ'}
}

def rosetta_stone_transform(word):
    """Process word letter-by-letter through all 5 scripts - clean narrative output"""
    upper_word = word.upper()
    tmp = {}  # Temporary storage (internal use only)
    letter_meanings = {}  # Store meanings for narrative
    
    # Letter meanings for narrative
    meaning_map = {
        'D': {
            'aramaic': 'Door',
            'syriac': 'Unlocked passage',
            'demotic': 'Visual threshold',
            'greek': 'Change and transformation',
            'futhark': 'Dawn, breakthrough'
        },
        'A': {
            'aramaic': 'The beginning',
            'syriac': 'Unlocked origin',
            'demotic': 'Visual first breath',
            'greek': 'The first principle',
            'futhark': 'Divine message, communication'
        },
        'U': {
            'aramaic': 'Connection',
            'syriac': 'Unlocked union',
            'demotic': 'Visual binding',
            'greek': 'The path upward',
            'futhark': 'Strength, primal force'
        },
        'S': {
            'aramaic': 'Fire, spirit',
            'syriac': 'Unlocked flame',
            'demotic': 'Visual illumination',
            'greek': 'Sum, completion',
            'futhark': 'Sun, victory, wholeness'
        }
    }
    
    # Process each letter - store meanings
    for letter in upper_word:
        if letter in LETTER_MAPPINGS and letter in meaning_map:
            tmp[letter] = LETTER_MAPPINGS[letter]
            letter_meanings[letter] = meaning_map[letter]
    
    # Clean narrative output
    print(f'\n╔════════════════════════════════════════════════════════════╗')
    print(f'║                    {upper_word}                                    ║')
    print(f'╚════════════════════════════════════════════════════════════╝\n')
    
    # Show letter transformations
    for letter in upper_word:
        if letter in letter_meanings:
            meanings = letter_meanings[letter]
            print(f'{letter}: {meanings["aramaic"]} → {meanings["syriac"]} → {meanings["demotic"]} → {meanings["greek"]} → {meanings["futhark"]}')
    
    print()
    
    # Generate forward and backward narratives
    forward_narrative = generate_forward_narrative(upper_word, letter_meanings)
    backward_narrative = generate_backward_narrative(upper_word, letter_meanings)
    
    print(forward_narrative)
    print()
    print(backward_narrative)
    
    return {
        'input': upper_word,
        'meanings': letter_meanings,
        'forward_narrative': forward_narrative,
        'backward_narrative': backward_narrative
    }

def generate_forward_narrative(word, letter_meanings):
    """Generate forward narrative - timeline moving forward"""
    lines = []
    lines.append("FORWARD:")
    lines.append("")
    
    for i, letter in enumerate(word):
        if letter in letter_meanings:
            meanings = letter_meanings[letter]
            lines.append(
                f"{letter} begins as {meanings['aramaic']}. "
                f"It unlocks into {meanings['syriac']}. "
                f"Manifests as {meanings['demotic']}. "
                f"Creates through {meanings['greek']}. "
                f"And narrates {meanings['futhark']}."
            )
    
    lines.append("")
    lines.append("The story unfolds: " + build_story_forward(word, letter_meanings))
    
    return "\n".join(lines)

def generate_backward_narrative(word, letter_meanings):
    """Generate backward narrative - timeline moving backward"""
    lines = []
    lines.append("BACKWARD:")
    lines.append("")
    
    reversed_word = word[::-1]
    
    for i, letter in enumerate(reversed_word):
        if letter in letter_meanings:
            meanings = letter_meanings[letter]
            # Reverse the script order
            lines.append(
                f"{letter} completes as {meanings['futhark']}. "
                f"Returns through {meanings['greek']}. "
                f"Dissolves from {meanings['demotic']}. "
                f"Relocks into {meanings['syriac']}. "
                f"And returns to {meanings['aramaic']}."
            )
    
    lines.append("")
    lines.append("The story returns: " + build_story_backward(word, letter_meanings))
    
    return "\n".join(lines)

def build_story_forward(word, letter_meanings):
    """Build the forward story"""
    if word == "DAUS":
        return (
            f"A Door opens, revealing the beginning. "
            f"This beginning connects upward through fire and spirit, "
            f"completing the transformation from form to meaning."
        )
    else:
        parts = []
        for letter in word:
            if letter in letter_meanings:
                parts.append(letter_meanings[letter]['aramaic'])
        return " → ".join(parts)

def build_story_backward(word, letter_meanings):
    """Build the backward story"""
    if word == "DAUS":
        return (
            f"Sun, victory, and wholeness complete, "
            f"returning through the path upward, "
            f"dissolving from visual first breath, "
            f"relocking into unlocked passage, "
            f"and returning to the Door."
        )
    else:
        parts = []
        for letter in reversed(word):
            if letter in letter_meanings:
                parts.append(letter_meanings[letter]['futhark'])
        return " ← ".join(parts)

# Example: DAUS
if __name__ == '__main__':
    result = rosetta_stone_transform('DAUS')
