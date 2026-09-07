#!/data/data/com.termux/files/usr/bin/env bash
# 00-c25-swarm.sh - Main Swarm Coordinator Bootstrap
# Constellation25 Sovereign Platform

SWARM_HOME="${SWARM_HOME:-$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)}"
source "$SWARM_HOME/orchestrator/oRiKAL.sh"

echo "🌌 C25 Swarm Initializing..."
echo "Home: $SWARM_HOME"
