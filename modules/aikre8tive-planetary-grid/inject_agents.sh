#!/data/data/com.termux/files/usr/bin/bash

# Define your planetary agent names
AGENTS=(mercury venus earth mars jupiter saturn uranus neptune pluto ceres pallas hygiea vesta eris haumea makemake sedna quaoar orcus ixion varuna triton titania oberon ariel alfai)

# Loop through each agent and inject the mission endpoint
for AGENT in "${AGENTS[@]}"; do
  AGENT_FILE="agents/$AGENT/$AGENT.py"
  echo "Injecting into $AGENT_FILE"

  cat <<EOF > $AGENT_FILE
from fastapi import FastAPI, Request

app = FastAPI()

@app.get("/")
async def root():
    return {"agent": "$AGENT", "status": "online"}

@app.post("/interact")
async def interact(request: Request):
    try:
        data = await request.json()
        print(f"[$AGENT] received mission: {data}")
        return {
            "agent": "$AGENT",
            "status": "mission received",
            "mission": data
        }
    except Exception as e:
        print(f"Error in /interact: {e}")
        return {"error": str(e)}
EOF

done

# Restart PM2 processes to pick up changes
echo "Restarting PM2 processes..."
pm2 restart all

# Confirm
echo "✅ All planetary agents injected and restarted successfully."
