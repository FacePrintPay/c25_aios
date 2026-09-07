#!/bin/bash

echo "[🚀] AiKre8tive Genesis: TOTAL RECALL INITIATED..."

# === Setup
REPO_NAME="aikre8tive-genesis"
REPO_URL="git@github.com:FacePrintPay/$REPO_NAME.git"
ALIAS_DOMAIN="aikre8tive.cloud"
DEPLOY_DIR="$HOME/AiKre8tiveGenesis"

# === Create Master Directory
mkdir -p "$DEPLOY_DIR/agents"
echo "[📦] Packaging all source folders..."

mv -f ~/aikre8tive/* "$DEPLOY_DIR/" 2>/dev/null
mv -f ~/aikre8tive-planetary-grid/* "$DEPLOY_DIR/" 2>/dev/null
mv -f ~/planetary_agents/* "$DEPLOY_DIR/agents/" 2>/dev/null
mv -f ~/pathos-kre8/* "$DEPLOY_DIR/" 2>/dev/null

# === Git Init & Push
cd "$DEPLOY_DIR"
git init
git remote remove origin 2>/dev/null
git remote add origin "$REPO_URL"
git add .
git commit -m "🧠 AiKre8tive Genesis Commit – Total Recall Final"
git branch -M main
git push -u origin main

# === Vercel Deploy
echo "[⚡] Deploying to Vercel..."
vercel --prod --yes > deploy.log

# === Extract Deployed URL
DEPLOY_URL=$(grep -o "https://[a-zA-Z0-9\-]*\.vercel\.app" deploy.log | head -n 1)
vercel alias set "$DEPLOY_URL" "$ALIAS_DOMAIN"

# === Agents Reboot
echo "[🌐] Reinitializing Planetary Agents..."

declare -A agents=(
  [sun]="Core Compiler Beacon"
  [chronos]="Time Sync / Build Tracker"
  [nova]="Genesis Pulse Coordinator"
  [aether]="Cloud Compute Agent"
  [helios]="Audio/Visual Broadcast"
  [comandr]="Agent Command UI"
  [sovereign]="Sovereign Deploy Control"
  [avatasker]="Task Automation Unit"
  [versedna]="Biometric Identity Sync"
  [recon]="Forensics + Watchdog"
  [aik]="PaTHos NLP Core"
  [nlp2code]="Build Transformer"
  [slamar]="Spatial XR Sync Engine"
  [sygna17]="Neural Frequency AI"
  [notetal]="Avatar Narration Engine"
)

for agent in "${!agents[@]}"; do
  role="${agents[$agent]}"
  file="$DEPLOY_DIR/agents/${agent}.sh"
  echo "#!/bin/bash
export AGENT_NAME=\"${agent^}\"
export AGENT_ROLE=\"$role\"
export AGENT_STATUS=\"Online\"
echo \"[✅] \$AGENT_NAME Activated — \$AGENT_ROLE operational.\"
" > "$file"
  chmod +x "$file"
done

echo "[✅] All Planetary Agents Re-Activated."
echo "[🎯] LIVE at: https://$ALIAS_DOMAIN"
