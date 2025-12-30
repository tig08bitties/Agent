#!/usr/bin/env python3
"""
The Portal Master
Combines the Dweller and Cow Level into a complete experience
"""

from dweller import Dweller
from cow_level import CowLevel

def main():
    """Complete journey through the Halls of Amenti"""
    print("\n" + "="*70)
    print("  " + " " * 15 + "HALLS OF AMENTI")
    print("  " + " " * 10 + "Journey to the Cow Level")
    print("="*70 + "\n")
    
    # Step 1: Meet the Dweller
    dweller = Dweller()
    print("  Step 1: Meeting the Dweller on the Threshold...\n")
    
    key = None
    for encounter in range(3):
        key = dweller.meet(f"Seeker")
        if key:
            print(f"  ✓ Portal Key Obtained: {key}\n")
            break
        time.sleep(0.5)
    
    if not key:
        print("  You need to meet the Dweller 3 times to obtain the key.\n")
        return
    
    # Step 2: Open the portal
    print("  Step 2: Opening the portal...\n")
    if dweller.open_portal(key):
        # Step 3: Enter the Cow Level
        print("  Step 3: Entering the Cow Level...\n")
        cow_level = CowLevel()
        cow_level.activate_portal(key)
        cow_level.enter()
    
    print("\n" + "="*70)
    print("  Journey Complete!")
    print("="*70 + "\n")


if __name__ == "__main__":
    import time
    main()
