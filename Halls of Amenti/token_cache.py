#!/usr/bin/env python3
"""
Covenant Token Cache Manager
Optimizes API costs through token caching
Covenant Sovereign Standard: All operations from covenant root
As Above So Below, As Within So Without
"""

import json
import hashlib
from pathlib import Path
from typing import Dict, Optional, Any
from datetime import datetime, timedelta
import time

# Covenant Sovereign Standard Constants
COVENANT_ROOT = Path("/root/Agent/Halls of Amenti")
COVENANT_IDENTITY = "DausΩəq"
COVENANT_PATH = "ܗ/48'/7'/7'/7"
TAROT_SEALS = {
    "CHARIOT": 7,
    "EMPRESS": 3,
    "JUDGMENT": 20,
    "MOON": 18,
    "TOTAL": 48
}


class TokenCache:
    """Manages token caching for cost optimization
    Covenant Sovereign Standard: All operations from covenant root
    """
    
    def __init__(self, cache_dir: Optional[Path] = None):
        self.covenant_root = COVENANT_ROOT
        self.covenant_identity = COVENANT_IDENTITY
        self.covenant_path = COVENANT_PATH
        self.tarot_seals = TAROT_SEALS
        
        if cache_dir is None:
            cache_dir = self.covenant_root / ".covenant" / "token_cache"
        self.cache_dir = cache_dir
        self.cache_dir.mkdir(parents=True, exist_ok=True)
        self.cache_file = self.cache_dir / "token_cache.json"
        self.stats_file = self.cache_dir / "token_stats.json"
        self.cache: Dict[str, Any] = self._load_cache()
        self.stats: Dict[str, Any] = self._load_stats()
        
    def _load_cache(self) -> Dict:
        """Load cache from disk"""
        if self.cache_file.exists():
            try:
                with open(self.cache_file, 'r') as f:
                    return json.load(f)
            except:
                pass
        return {}
    
    def _save_cache(self):
        """Save cache to disk"""
        with open(self.cache_file, 'w') as f:
            json.dump(self.cache, f, indent=2)
    
    def _load_stats(self) -> Dict:
        """Load statistics from disk"""
        if self.stats_file.exists():
            try:
                with open(self.stats_file, 'r') as f:
                    return json.load(f)
            except:
                pass
        return {
            "total_tokens": 0,
            "cached_tokens": 0,
            "requests": 0,
            "cache_hits": 0,
            "cache_misses": 0
        }
    
    def _save_stats(self):
        """Save statistics to disk"""
        with open(self.stats_file, 'w') as f:
            json.dump(self.stats, f, indent=2)
    
    def _hash_content(self, content: str) -> str:
        """Generate hash for content"""
        return hashlib.sha256(content.encode()).hexdigest()
    
    def get_cached_tokens(self, system_instructions: str, context: str) -> Optional[Dict]:
        """Get cached tokens for given content"""
        cache_key = self._hash_content(f"{system_instructions}:{context}")
        
        if cache_key in self.cache:
            cached = self.cache[cache_key]
            # Check if cache is still valid (24 hour TTL)
            if time.time() - cached.get("timestamp", 0) < 86400:
                self.stats["cache_hits"] += 1
                return cached.get("tokens")
        
        self.stats["cache_misses"] += 1
        return None
    
    def cache_tokens(self, system_instructions: str, context: str, tokens: Dict):
        """Cache tokens for future use
        Covenant Sovereign Standard: Includes covenant context
        """
        cache_key = self._hash_content(f"{system_instructions}:{context}")
        
        self.cache[cache_key] = {
            "cache_key": cache_key,
            "timestamp": time.time(),
            "covenant": {
                "identity": self.covenant_identity,
                "path": self.covenant_path,
                "root": str(self.covenant_root)
            },
            "tokens": tokens,
            "metadata": {
                "system_instructions_hash": self._hash_content(system_instructions),
                "context_hash": self._hash_content(context)
            }
        }
        
        self._save_cache()
        print(f"[Covenant] ✅ Tokens cached: {cache_key} (from covenant root: {self.covenant_root})")
    
    def record_request(self, total_tokens: int, cached_tokens: int = 0):
        """Record token usage statistics"""
        self.stats["total_tokens"] += total_tokens
        self.stats["cached_tokens"] += cached_tokens
        self.stats["requests"] += 1
        self._save_stats()
    
    def get_stats(self) -> Dict:
        """Get token usage statistics"""
        stats = self.stats.copy()
        
        if stats["requests"] > 0:
            stats["cache_hit_rate"] = stats["cache_hits"] / (stats["cache_hits"] + stats["cache_misses"])
            stats["token_savings"] = stats["cached_tokens"]
            stats["savings_percentage"] = (
                (stats["cached_tokens"] / stats["total_tokens"] * 100)
                if stats["total_tokens"] > 0 else 0
            )
        else:
            stats["cache_hit_rate"] = 0
            stats["token_savings"] = 0
            stats["savings_percentage"] = 0
        
        return stats
    
    def clear_cache(self):
        """Clear the token cache"""
        self.cache = {}
        self._save_cache()
    
    def reset_stats(self):
        """Reset statistics"""
        self.stats = {
            "total_tokens": 0,
            "cached_tokens": 0,
            "requests": 0,
            "cache_hits": 0,
            "cache_misses": 0
        }
        self._save_stats()


def main():
    """CLI interface for token cache"""
    import sys
    
    cache = TokenCache()
    
    if len(sys.argv) < 2:
        print("Usage: token_cache.py <command> [args...]")
        print("Commands:")
        print("  stats      - Show token usage statistics")
        print("  clear      - Clear token cache")
        print("  reset      - Reset statistics")
        sys.exit(1)
    
    command = sys.argv[1]
    
    if command == "stats":
        stats = cache.get_stats()
        print("Token Usage Statistics:")
        print(f"  Total tokens: {stats['total_tokens']:,}")
        print(f"  Cached tokens: {stats['cached_tokens']:,}")
        print(f"  Requests: {stats['requests']:,}")
        print(f"  Cache hits: {stats['cache_hits']:,}")
        print(f"  Cache misses: {stats['cache_misses']:,}")
        if stats["requests"] > 0:
            print(f"  Cache hit rate: {stats['cache_hit_rate']:.2%}")
            print(f"  Token savings: {stats['token_savings']:,}")
            print(f"  Savings percentage: {stats['savings_percentage']:.2f}%")
    elif command == "clear":
        cache.clear_cache()
        print("✓ Token cache cleared")
    elif command == "reset":
        cache.reset_stats()
        print("✓ Statistics reset")
    else:
        print(f"Unknown command: {command}")


if __name__ == "__main__":
    main()
