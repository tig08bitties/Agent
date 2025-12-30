#!/usr/bin/env python3
"""
Secrets Inhabited Layer
Auto-applies secrets.env as passive defaults throughout the system
"""

import os
from pathlib import Path
from typing import Dict, Optional
import json


class SecretsInhabitedLayer:
    """Inhabited layer that auto-applies secrets.env as passive defaults"""
    
    def __init__(self, secrets_file: Optional[Path] = None):
        self.secrets_file = secrets_file or Path("/media/Passport/secrets.env")
        self.secrets = {}
        self.load_secrets()
        self.apply_to_environment()
    
    def load_secrets(self) -> Dict:
        """Load all secrets from secrets.env"""
        if not self.secrets_file.exists():
            print(f"Warning: {self.secrets_file} not found")
            return {}
        
        with open(self.secrets_file, 'r') as f:
            content = f.read()
        
        # Parse secrets
        for line in content.split('\n'):
            line = line.strip()
            if not line or line.startswith('#') or line.startswith('##'):
                continue
            
            # Handle different formats
            if '=' in line and not line.startswith('curl'):
                parts = line.split('=', 1)
                if len(parts) == 2:
                    key = parts[0].strip()
                    value = parts[1].strip().strip('"').strip("'")
                    self.secrets[key] = value
        
        return self.secrets
    
    def apply_to_environment(self):
        """Apply secrets to environment variables (passive default)"""
        for key, value in self.secrets.items():
            if key and value:
                # Set environment variable if not already set
                if key not in os.environ:
                    os.environ[key] = value
    
    def get_secret(self, key: str, default: Optional[str] = None) -> Optional[str]:
        """Get a secret value"""
        return self.secrets.get(key, os.getenv(key, default))
    
    def get_all_secrets(self) -> Dict:
        """Get all secrets"""
        return self.secrets.copy()
    
    def get_api_keys(self) -> Dict:
        """Get all API keys"""
        api_keys = {}
        for key, value in self.secrets.items():
            if 'API' in key or 'TOKEN' in key or 'KEY' in key:
                api_keys[key] = value
        return api_keys


# Global instance (passive default - auto-initialized)
_secrets_layer = None

def get_secrets_layer() -> SecretsInhabitedLayer:
    """Get global secrets layer instance (passive default)"""
    global _secrets_layer
    if _secrets_layer is None:
        _secrets_layer = SecretsInhabitedLayer()
    return _secrets_layer

# Auto-initialize on import (passive default)
get_secrets_layer()
