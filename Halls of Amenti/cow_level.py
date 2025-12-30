#!/usr/bin/env python3
"""
The Cow Level Portal
A mystical gateway to a realm of bovine wonder
"""

import random
import time

class CowLevel:
    """The legendary Cow Level - a realm beyond the Halls of Amenti"""
    
    def __init__(self):
        self.name = "The Secret Cow Level"
        self.cows = []
        self.portal_active = False
        
    def generate_cows(self, count=100):
        """Generate the bovine inhabitants"""
        cow_types = [
            "🐄 Regular Cow",
            "🐂 Bull",
            "🐃 Water Buffalo", 
            "🐮 Happy Cow",
            "🐄 Mystical Cow",
            "🐄 Cosmic Cow",
            "🐄 Ancient Cow",
            "🐄 Legendary Cow"
        ]
        
        self.cows = []
        for i in range(count):
            cow_type = random.choice(cow_types)
            level = random.randint(1, 100)
            self.cows.append({
                'id': i + 1,
                'type': cow_type,
                'level': level,
                'moo_power': random.randint(10, 1000)
            })
        
        return self.cows
    
    def enter(self):
        """Enter the Cow Level"""
        if not self.portal_active:
            print("\n  The portal is not active. You need the Dweller's key.\n")
            return False
        
        print("\n" + "="*60)
        print("  ENTERING THE COW LEVEL...")
        print("="*60 + "\n")
        
        time.sleep(1)
        print("  You step through the shimmering portal...\n")
        time.sleep(1)
        
        print("  " + "🌾" * 20)
        print("  " + "🐄" * 20)
        print("  " + "🌾" * 20 + "\n")
        
        time.sleep(1)
        print("  The air is filled with the sound of gentle mooing...\n")
        time.sleep(1)
        
        cows = self.generate_cows(100)
        print(f"  You see {len(cows)} cows grazing in the eternal meadows.\n")
        
        # Show some random cows
        print("  Some of the inhabitants you notice:\n")
        for cow in random.sample(cows, 10):
            print(f"    {cow['type']} (Level {cow['level']}) - Moo Power: {cow['moo_power']}")
        
        print("\n  " + "Moo! " * 5)
        print("\n  Welcome to the Cow Level, seeker!\n")
        
        return True
    
    def activate_portal(self, key):
        """Activate the portal with the Dweller's key"""
        if key and len(key) == 16:
            self.portal_active = True
            print("\n  The portal key resonates with the gateway...")
            print("  The Cow Level portal is now ACTIVE!\n")
            return True
        return False


def main():
    """Main entry point"""
    cow_level = CowLevel()
    
    print("\n" + "="*60)
    print("  THE COW LEVEL PORTAL")
    print("="*60)
    print("\n  This portal requires activation from the Dweller.")
    print("  Run dweller.py first to obtain the portal key.\n")


if __name__ == "__main__":
    main()
