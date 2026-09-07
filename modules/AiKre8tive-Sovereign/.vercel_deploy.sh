#!/data/data/com.termux/files/usr/bin/bash

# === AiKre8tive Vercel Deployment Hook ===
echo "🌐 [AiKre8tive] Triggering LIVE Vercel Deployment..."

DEPLOY_HOOK="https://api.vercel.com/v1/integrations/deploy/prj_WuJo8mfZgW1Jy4ZH6MQpm0BFHN4u/C5dZhyomlR"

curl -X POST "$DEPLOY_HOOK" \
  -H "Content-Type: application/json" \
  -s -o /dev/null

echo "✅ Vercel deploy hook triggered."
echo "🛰️   Your AiKre8tive interface is deploying now..."
