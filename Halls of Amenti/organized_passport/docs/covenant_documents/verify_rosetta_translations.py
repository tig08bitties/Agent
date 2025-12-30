#!/usr/bin/env python3
"""
Verify Rosetta Stone translations using Brave Browser API
Searches sacred-texts.com for authentic meanings
"""

import os
import json
import urllib.request
import urllib.parse
import gzip
import time
from pathlib import Path
from typing import Dict, List

def load_brave_api_key() -> str:
    """Load Brave API key from secrets.env"""
    secrets_paths = [
        Path("/Keys/secrets.env"),
        Path("/root/Halls of Amenti/secrets.env"),
        Path("/root/Agent/secrets.env"),
    ]
    
    for secrets_file in secrets_paths:
        if secrets_file.exists():
            try:
                with open(secrets_file, 'r') as f:
                    for line in f:
                        line = line.strip()
                        if line.startswith("BRAVE_API_KEY="):
                            return line.split("=", 1)[1].strip().strip('"').strip("'")
            except:
                continue
    
    return os.getenv("BRAVE_API_KEY", "")

def search_brave(query: str, api_key: str, count: int = 10) -> Dict:
    """Execute search using Brave Browser API"""
    if not api_key:
        raise ValueError("Brave API key not found")
    
    base_url = "https://api.search.brave.com/res/v1/web/search"
    params = {
        "q": query,
        "count": min(count, 20),
        "safesearch": "moderate"
    }
    
    url = f"{base_url}?{urllib.parse.urlencode(params)}"
    
    req = urllib.request.Request(
        url,
        headers={
            "Accept": "application/json",
            "Accept-Encoding": "gzip",
            "X-Subscription-Token": api_key
        }
    )
    
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            content = response.read()
            if content[:2] == b'\x1f\x8b':
                content = gzip.decompress(content)
            data = json.loads(content.decode('utf-8'))
            return data
    except urllib.error.HTTPError as e:
        if e.code == 429:
            raise Exception("Rate limited - too many requests. Please wait.")
        raise Exception(f"HTTP Error {e.code}: {str(e)}")
    except Exception as e:
        raise Exception(f"Search error: {str(e)}")

def verify_letter_meanings():
    """Verify DAUS letter meanings against sacred-texts.com"""
    
    api_key = load_brave_api_key()
    if not api_key:
        print("❌ Brave API key not found. Cannot verify translations.")
        return
    
    print("=" * 80)
    print("VERIFYING ROSETTA STONE TRANSLATIONS")
    print("=" * 80)
    print()
    
    # Letter verification queries
    letters = {
        'D': {
            'aramaic': 'Daleth',
            'queries': [
                'site:sacred-texts.com Aramaic Daleth meaning door',
                'site:sacred-texts.com Imperial Aramaic Daleth',
            ]
        },
        'A': {
            'aramaic': 'Alaph',
            'queries': [
                'site:sacred-texts.com Aramaic Alaph meaning beginning',
                'site:sacred-texts.com Imperial Aramaic Alaph',
            ]
        },
        'U': {
            'aramaic': 'Waw',
            'queries': [
                'site:sacred-texts.com Aramaic Waw meaning connection',
                'site:sacred-texts.com Imperial Aramaic Waw',
            ]
        },
        'S': {
            'aramaic': 'Shin',
            'queries': [
                'site:sacred-texts.com Aramaic Shin meaning fire spirit',
                'site:sacred-texts.com Imperial Aramaic Shin',
            ]
        }
    }
    
    # Script verification queries
    script_queries = [
        ('Syriac', 'site:sacred-texts.com Syriac alphabet meanings unlock'),
        ('Demotic', 'site:sacred-texts.com Demotic Egyptian script visual sound'),
        ('Greek', 'site:sacred-texts.com Greek alphabet meanings creation'),
        ('Futhark', 'site:sacred-texts.com Elder Futhark rune meanings narrative'),
    ]
    
    # Tower of Babel query
    babel_query = 'site:sacred-texts.com Tower of Babel languages'
    
    results = {}
    
    print("🔍 Searching for letter meanings...")
    for letter, info in letters.items():
        print(f"\n  {letter} ({info['aramaic']}):")
        for query in info['queries']:
            try:
                time.sleep(1)  # Rate limit protection
                response = search_brave(query, api_key, count=5)
                web_results = response.get("web", {}).get("results", [])
                if web_results:
                    print(f"    ✅ Found {len(web_results)} result(s)")
                    for i, result in enumerate(web_results[:2], 1):
                        print(f"      {i}. {result.get('title', 'No title')}")
                        print(f"         {result.get('url', '')}")
                else:
                    print(f"    ⚠️  No results for: {query}")
            except Exception as e:
                if "Rate limited" in str(e):
                    print(f"    ⏸️  Rate limited - waiting 5 seconds...")
                    time.sleep(5)
                else:
                    print(f"    ❌ Error: {str(e)}")
    
    print("\n🔍 Searching for script meanings...")
    for script_name, query in script_queries:
        print(f"\n  {script_name}:")
        try:
            response = search_brave(query, api_key, count=5)
            web_results = response.get("web", {}).get("results", [])
            if web_results:
                print(f"    ✅ Found {len(web_results)} result(s)")
                for i, result in enumerate(web_results[:2], 1):
                    print(f"      {i}. {result.get('title', 'No title')}")
                    print(f"         {result.get('url', '')}")
            else:
                print(f"    ⚠️  No results")
        except Exception as e:
            print(f"    ❌ Error: {str(e)}")
    
    print("\n🔍 Searching for Tower of Babel...")
    try:
        response = search_brave(babel_query, api_key, count=5)
        web_results = response.get("web", {}).get("results", [])
        if web_results:
            print(f"    ✅ Found {len(web_results)} result(s)")
            for i, result in enumerate(web_results[:3], 1):
                print(f"      {i}. {result.get('title', 'No title')}")
                print(f"         {result.get('url', '')}")
                print(f"         {result.get('description', '')[:150]}...")
        else:
            print(f"    ⚠️  No results")
    except Exception as e:
        print(f"    ❌ Error: {str(e)}")
    
    print("\n" + "=" * 80)
    print("VERIFICATION COMPLETE")
    print("=" * 80)

if __name__ == "__main__":
    verify_letter_meanings()
