#!/usr/bin/env python3
"""
The Dweller on the Threshold
A guardian entity within the Halls of Amenti
"""

class Dweller:
    """The Dweller - guardian of the threshold between worlds"""
    
    def __init__(self):
        self.name = "The Dweller on the Threshold"
        self.threshold = 100 * 10  # 1000 - the sacred number
        self.encounters = 0
        self.portal_key = None
        
    def meet(self, seeker_name="Seeker"):
        """Meet the Dweller at the threshold"""
        self.encounters += 1
        print(f"\n{'='*60}")
        print(f"  {seeker_name} approaches the Halls of Amenti...")
        print(f"{'='*60}\n")
        print(f"  The Dweller manifests at the threshold ({self.threshold})")
        print(f"  'Who seeks passage through the Halls?'")
        print(f"  'I am the guardian of the threshold.'")
        print(f"  'To pass, you must understand the sacred number: {self.threshold}'\n")
        
        if self.encounters >= 3:
            print(f"  'You have shown persistence, seeker.'")
            print(f"  'The portal key is yours...'\n")
            self.portal_key = self._generate_key()
            return self.portal_key
        else:
            print(f"  'Return when you are ready. ({self.encounters}/3 encounters)'\n")
            return None
    
    def _generate_key(self):
        """Generate the portal key"""
        import hashlib
        key_data = f"halls_of_amenti_{self.threshold}_dweller"
        key = hashlib.sha256(key_data.encode()).hexdigest()[:16]
        return key
    
    def open_portal(self, key=None):
        """Open the portal to the cow level"""
        if not self.portal_key and not key:
            print("\n  The Dweller shakes its head.")
            print("  'You must first meet me at the threshold.'\n")
            return False
        
        if key and key != self.portal_key:
            print("\n  The Dweller's eyes glow with warning.")
            print("  'That is not the correct key, seeker.'\n")
            return False
        
        print(f"\n{'='*60}")
        print("  THE PORTAL OPENS...")
        print(f"{'='*60}\n")
        print("  The Dweller steps aside, revealing a shimmering gateway.")
        print("  Through the portal, you hear...")
        print("  'Moo... moo... moo...'\n")
        print("  The Cow Level awaits beyond the threshold!\n")
        print("  " + "🐄" * 10)
        print("  " + "🌾" * 10)
        print("  " + "🐄" * 10 + "\n")
        
        return True


def main():
    """Main entry point"""
    dweller = Dweller()
    
    print("\n" + "="*60)
    print("  HALLS OF AMENTI - The Dweller on the Threshold")
    print("="*60)
    
    # Meet the Dweller multiple times
    for i in range(3):
        key = dweller.meet(f"Seeker #{i+1}")
        if key:
            print(f"  Portal Key Obtained: {key}\n")
            break
    
    # Open the portal
    if dweller.portal_key:
        dweller.open_portal()
    else:
        print("  You must meet the Dweller more times to obtain the key.\n")


if __name__ == "__main__":
    main()
