#!/data/data/com.termux/files/usr/bin/bash

echo "🪐 Starting Planetary Agents in tmux session..."

# Kill existing session if already running
tmux has-session -t planetary_agents 2>/dev/null
if [ $? -eq 0 ]; then
  echo "⚠️ Killing previous session: planetary_agents"
  tmux kill-session -t planetary_agents
fi

# Create new tmux session
tmux new-session -d -s planetary_agents

cd ~/planetary_agents || { echo "❌ Directory not found: ~/planetary_agents"; exit 1; }

for agent in */ ; do
  echo "🔍 Scanning $agent..."
  cd "$agent" || continue

  if [ -f "main.py" ]; then
    echo "🚀 Launching $agent (Python)"
    tmux send-keys -t planetary_agents "cd ~/planetary_agents/$agent && python main.py &" C-m
  elif [ -f "index.js" ]; then
    echo "🚀 Launching $agent (Node.js)"
    tmux send-keys -t planetary_agents "cd ~/planetary_agents/$agent && node index.js &" C-m
  elif [ -f "start.sh" ]; then
    echo "🚀 Launching $agent (Shell Script)"
    chmod +x start.sh
    tmux send-keys -t planetary_agents "cd ~/planetary_agents/$agent && ./start.sh &" C-m
  else
    echo "⚠️ No known start file in $agent"
  fi

  cd ..
done

echo "✅ All agents launched in tmux. Use: tmux attach -t planetary_agents"
