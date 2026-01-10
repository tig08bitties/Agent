#!/bin/bash

# Get Wayback Machine snapshot for bridgeworld.lol from 2024

set -e

URL="https://bridgeworld.lol"
YEAR="2024"
OUTPUT_DIR="$HOME/Agent/bridgeworld_snapshots"
TIMESTAMP="${YEAR}0101000000"  # Start of 2024

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Fetching Wayback Machine Snapshot"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "URL: $URL"
echo "Year: $YEAR"
echo "Output: $OUTPUT_DIR"
echo ""

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Wayback Machine CDX API endpoint
CDX_API="https://web.archive.org/cdx/search/cdx"

echo "Searching for snapshots in $YEAR..."
echo ""

# Get available snapshots for 2024
echo "Fetching snapshot list from Wayback Machine..."
SNAPSHOTS=$(curl -s "${CDX_API}?url=${URL}&from=${YEAR}&to=${YEAR}1231235959&output=json&limit=10" 2>/dev/null || echo "")

if [ -z "$SNAPSHOTS" ] || [ "$SNAPSHOTS" = "[]" ]; then
    echo "⚠️  No snapshots found for $YEAR"
    echo ""
    echo "Trying alternative approach..."
    
    # Try getting latest snapshot before 2025
    echo "Fetching latest snapshot before 2025..."
    LATEST=$(curl -s "${CDX_API}?url=${URL}&to=20241231235959&output=json&limit=1" 2>/dev/null || echo "")
    
    if [ -z "$LATEST" ] || [ "$LATEST" = "[]" ]; then
        echo "❌ No snapshots found"
        echo ""
        echo "Manual steps:"
        echo "1. Visit: https://web.archive.org/web/*/${URL}"
        echo "2. Select a snapshot from $YEAR"
        echo "3. Save the page"
        exit 1
    fi
fi

# Parse and get snapshot URL
echo "Found snapshots!"
echo ""

# Save snapshot info
echo "$SNAPSHOTS" > "$OUTPUT_DIR/snapshot_list.json"

# Get the first available snapshot from 2024
if command -v python3 >/dev/null 2>&1; then
    echo "Extracting snapshot URLs..."
    OUTPUT_DIR="$OUTPUT_DIR" URL="$URL" python3 << 'PYTHON_EOF'
import json
import sys
import urllib.request
import os

output_dir = os.environ.get('OUTPUT_DIR', '/tmp')
url = os.environ.get('URL', 'https://bridgeworld.lol')

try:
    # Read snapshot list
    with open(f'{output_dir}/snapshot_list.json', 'r') as f:
        data = json.load(f)
    
    if not data or len(data) == 0:
        print("No snapshots found in data")
        sys.exit(1)
    
    # Get first snapshot (skip header if present)
    snapshots = data[1:] if len(data) > 1 and isinstance(data[0], list) and data[0][0] == 'urlkey' else data
    
    if not snapshots:
        print("No valid snapshots found")
        sys.exit(1)
    
    # Extract timestamp and original URL
    first_snap = snapshots[0]
    if len(first_snap) >= 2:
        timestamp = first_snap[1]
        original_url = first_snap[2] if len(first_snap) > 2 else url
        
        # Construct Wayback Machine URL
        wayback_url = f"https://web.archive.org/web/{timestamp}/{original_url}"
        
        print(f"✅ Found snapshot from: {timestamp}")
        print(f"   Wayback URL: {wayback_url}")
        print("")
        print("Downloading snapshot...")
        
        # Download the snapshot
        try:
            response = urllib.request.urlopen(wayback_url, timeout=30)
            html_content = response.read().decode('utf-8', errors='ignore')
            
            # Save to file
            output_file = f"{output_dir}/bridgeworld_{timestamp}.html"
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(html_content)
            
            print(f"✅ Saved to: {output_file}")
            print(f"   Size: {len(html_content)} bytes")
            
            # Also save the wayback URL
            with open(f"{output_dir}/wayback_url.txt", 'w') as f:
                f.write(wayback_url)
            
            print(f"✅ Wayback URL saved to: {output_dir}/wayback_url.txt")
            
        except Exception as e:
            print(f"⚠️  Error downloading: {e}")
            print(f"   Manual URL: {wayback_url}")
            sys.exit(1)
    else:
        print("Invalid snapshot data format")
        sys.exit(1)
        
except Exception as e:
    print(f"Error processing snapshots: {e}")
    import traceback
    traceback.print_exc()
    sys.exit(1)
PYTHON_EOF

    if [ $? -eq 0 ]; then
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "✅ Snapshot Retrieved Successfully!"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        echo "Files saved to: $OUTPUT_DIR"
        ls -lh "$OUTPUT_DIR" | tail -5
        echo ""
        if [ -f "$OUTPUT_DIR/wayback_url.txt" ]; then
            echo "Wayback URL:"
            cat "$OUTPUT_DIR/wayback_url.txt"
        fi
    else
        echo ""
        echo "⚠️  Python processing failed"
        echo ""
        echo "Manual approach:"
        echo "1. Visit: https://web.archive.org/web/*/https://bridgeworld.lol"
        echo "2. Select a snapshot from 2024"
        echo "3. Right-click → Save Page As"
    fi
else
    echo "⚠️  Python3 not available"
    echo ""
    echo "Manual steps:"
    echo "1. Visit: https://web.archive.org/web/*/${URL}"
    echo "2. Select a snapshot from $YEAR"
    echo "3. Save the page"
fi
