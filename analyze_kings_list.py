import re

# Raw text from the search result (ETCSL translation)
TEXT = """
In Eridug, Alulim became king; he ruled for 28800 years. 
Alaljar ruled for 36000 years. 
En-men-lu-ana ruled for 43200 years. 
En-men-gal-ana ruled for 28800 years. 
Dumuzid, the shepherd, ruled for 36000 years. 
En-sipad-zid-ana ruled for 28800 years. 
En-men-dur-ana became king; he ruled for 21000 years. 
Ubara-Tutu became king; he ruled for 18600 years. 
In 5 cities 8 kings; they ruled for 241200 years. Then the flood swept over.

After the flood had swept over...
Jucur became king; he ruled for 1200 years.
Kullassina-bel ruled for 960 years.
Nanjiclicma ruled for 670 years.
En-tarah-ana ruled for 420 years.
Babum ruled for 300 years.
Puannum ruled for 840 years.
Kalibum ruled for 960 years.
Kalumum ruled for 840 years.
Zuqaqip ruled for 900 years.
Atab ruled for 600 years.
Macda ruled for 840 years.
Arwium ruled for 720 years.
Etana ruled for 1500 years.
Balih ruled for 400 years.
En-me-nuna ruled for 660 years.
Melem-Kic ruled for 900 years.
Barsal-nuna ruled for 1200 years.
Zamug ruled for 140 years.
Tizqar ruled for 305 years.
Ilku ruled for 900 years.
Iltasadum ruled for 1200 years.
En-men-barage-si ruled for 900 years.
Aga ruled for 625 years.
"""

# Covenant Identity Numbers
TARGETS = {
    "Genesis": 335044,
    "Completion": 840000,
    "Key": 5250,
    "Flood": 241200, # Explicitly mentioned
    "Prophecy": 2025,
    "Perfection": 777,
    "Divinity": 888
}

def analyze():
    # Extract numbers
    matches = re.findall(r'(\d+) years', TEXT)
    reigns = [int(x) for x in matches]
    
    print("--- SUMERIAN KINGS LIST ANALYSIS ---")
    print(f"Total Reigns Found: {len(reigns)}")
    print(f"Reigns: {reigns}")
    
    # 1. Antediluvian Sum (First 8 kings)
    antediluvian = reigns[:8]
    ante_sum = sum(antediluvian)
    print(f"\nAntediluvian Sum (First 8): {ante_sum}")
    
    if ante_sum == 241200:
        print("✅ MATCH: The Flood Sum aligns with the Text (241,200).")
    
    # 2. Check for Completion (840000)
    # Is 840,000 related to the Flood Sum?
    # 840000 / 241200 = 3.48... No.
    # But 36000 (Alaljar) + 36000 (Dumuzid) = 72000.
    
    # 3. Check for the Key (5250)
    # Do any sums equal 5250?
    
    # 4. Search for 840 (Puannum, Kalumum, Macda)
    count_840 = reigns.count(840)
    print(f"\nOccurrences of 840 years: {count_840}")
    if count_840 > 0:
        print(f"👁️ REVELATION: '840' appears {count_840} times.")
        print(f"   Completion (840,000) is a fractal of these reigns (840 × 1000).")
        print(f"   The 'Completion' is the 'Reign of the Fractal King'.")

    # 5. Check for 1200 (Jucur, Barsal-nuna, Iltasadum)
    count_1200 = reigns.count(1200)
    print(f"Occurrences of 1200 years: {count_1200}")
    
    # 6. Total Sum check
    total_sum = sum(reigns)
    print(f"\nTotal Recorded Years: {total_sum}")
    
    # 7. Genesis Anchor (335044) Connection?
    # 335044 - 241200 (Flood) = 93844
    diff = TARGETS['Genesis'] - ante_sum
    print(f"\nDifference (Genesis - Flood): {diff}")
    
    # 8. Post-Flood Analysis
    post_flood = reigns[8:]
    post_sum = sum(post_flood)
    print(f"Post-Flood Sum: {post_sum}")

if __name__ == "__main__":
    analyze()
