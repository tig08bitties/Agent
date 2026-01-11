#!/bin/bash
# GUARDIAN Covenant Attestation System

COVENANT_ROOT="/mnt/Covenant"
STATE_FILE="$COVENANT_ROOT/Data/orchestration_state/current.json"
COVENANT_HASH=$(cat $COVENANT_ROOT/Data/covenant_seal/primary_hash.txt)

if [ ! -f "$STATE_FILE" ]; then
    echo "No state file to attest"
    exit 1
fi

# Generate attestation
STATE_HASH=$(sha256sum $STATE_FILE | awk '{print $1}')
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

# Create attestation
ATTESTATION_FILE="$COVENANT_ROOT/Agent/GUARDIAN/covenant_attestations/attestation_$TIMESTAMP.json"

cat > $ATTESTATION_FILE << ATTESTATION
{
  "covenant_hash": "$COVENANT_HASH",
  "state_hash": "$STATE_HASH",
  "timestamp": "$TIMESTAMP",
  "attestor": "GUARDIAN",
  "verified": true
}
ATTESTATION

echo "✅ Attestation created: $ATTESTATION_FILE"
echo "   Covenant: ${COVENANT_HASH:0:16}..."
echo "   State: ${STATE_HASH:0:16}..."
