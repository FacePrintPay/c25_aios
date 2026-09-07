#!/data/data/com.termux/files/usr/bin/bash
echo "🌌 Sovereign Swarm Launching — Nightfall Protocol"
cd ~/sovereign || { echo "❌ Sovereign root missing"; exit 1; }

# Launch proxy server
python3 -m http.server 8080 --directory ./build &

# Start Cloudflare Tunnel
cloudflared tunnel --url http://localhost:8080 &

# Activate Planetary Agents (symbolic start)
echo "🚀 Mercury, Venus, Earth... all agents awakened."
echo "✅ Build live at: https://aikre8tive.xyz (via DNS + tunnel)"

# Seal execution log
echo "$(date): Nightfall launch executed" >> ~/sovereign/activity.log
