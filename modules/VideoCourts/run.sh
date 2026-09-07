#!/bin/bash
# BANANI BUILD EXECUTION - run.sh
INTENT="/data/data/com.termux/files/home/Agentik/nlp2code/complete_intent.json"
[ -f "$INTENT" ] && echo "🎯 Loading: $(jq -r ".complete_intent.primary_goal" "$INTENT" 2>/dev/null)"

#!/data/data/com.termux/files/usr/bin/bash
echo "🌟 VideoCourts"
curl -s http://localhost:3000/api/proxy > /dev/null && echo "✅ PATHOS"
echo "[VideoCourts] $(date)" >> "/data/data/com.termux/files/home/sovereign_gtp/logs/VideoCourts.log"
