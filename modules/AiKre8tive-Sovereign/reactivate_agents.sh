#!/data/data/com.termux/files/usr/bin/bash

echo "🪐 Reactivating Planetary Agents..."

cd ~/planetary_agents || { echo "❌ Directory not found: ~/planetary_agents"; exit 1; }

# Loop through all subdirectories (agents)
for agent in */ ; do
  echo "🔄 Scanning $agent"
  cd "$agent" || { echo "⚠️ Skipping $agent"; continue; }

  if [ -f "main.py" ]; then
    echo "🚀 Launching $agent (Python)"
    nohup python main.py > agent.log 2>&1 &
  elif [ -f "index.js" ]; then
    echo "🚀 Launching $agent (Node.js)"
    nohup node index.js > agent.log 2>&1 &
  elif [ -f "start.sh" ]; then
    echo "🚀 Launching $agent (Shell Script)"
    chmod +x start.sh
    nohup ./start.sh > agent.log 2>&1 &
  else
    echo "⚠️ No recognizable launch script found in $agent"
  fi

  cd ..
done

echo "✅ All available agents launched in background using nohup"
echo "📄 Logs saved as 'agent.log' in each agent's folder"
