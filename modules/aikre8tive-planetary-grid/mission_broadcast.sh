#!/data/data/com.termux/files/usr/bin/bash

# mission details
MISSION_ID="alpha123"
OBJECTIVE="Scan planetary nodes"
PRIORITY="high"

# JSON payload
MISSION_PAYLOAD=$(cat <<EOF
{
  "mission_id": "$MISSION_ID",
  "objective": "$OBJECTIVE",
  "priority": "$PRIORITY"
}
EOF
)

# publish to Redis on channel 'missions'
echo "$MISSION_PAYLOAD" | redis-cli -x PUBLISH missions

echo "[Mercury] Mission $MISSION_ID broadcast to planetary agents."
