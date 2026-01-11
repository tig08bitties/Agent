#!/bin/bash
# GUARDIAN Real-time Monitoring

COVENANT_ROOT="/mnt/Covenant"
LOG_FILE="$COVENANT_ROOT/Agent/GUARDIAN/invariant_monitor.log"

echo "🛡️  GUARDIAN monitoring started at $(date)" | tee -a $LOG_FILE

while true; do
    # Check RAW is running
    if pgrep -f sovereignty_engine > /dev/null; then
        echo "[$(date -u +"%H:%M:%S")] ✓ RAW active" >> $LOG_FILE
    else
        echo "[$(date -u +"%H:%M:%S")] ⚠ RAW inactive" >> $LOG_FILE
    fi
    
    # Check state file integrity
    if [ -f "$COVENANT_ROOT/Data/orchestration_state/current.json" ]; then
        STATE_SIZE=$(stat -c%s "$COVENANT_ROOT/Data/orchestration_state/current.json")
        echo "[$(date -u +"%H:%M:%S")] ✓ State: ${STATE_SIZE} bytes" >> $LOG_FILE
    fi
    
    sleep 5
done
