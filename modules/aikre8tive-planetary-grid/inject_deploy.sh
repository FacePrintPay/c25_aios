#!/bin/bash

agents=(
  mercury venus earth mars jupiter saturn uranus neptune pluto
  ceres pallas hygiea vesta eris haumea makemake sedna quaoar orcus
  ixion varuna triton titania oberon ariel alfai
)

inject_code='
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Mission(BaseModel):
    mission_id: str
    objective: str
    priority: str

@app.post("/deploy/{mission_id}")
async def deploy_mission(mission_id: str, mission: Mission):
    print(f"🚀 [{mission_id}] Objective: {mission.objective} Priority: {mission.priority}")
    return {
        "agent": "{agent_name}",
        "status": "dispatched",
        "mission": mission.mission_id,
        "objective": mission.objective,
        "priority": mission.priority
    }

@app.get("/")
async def root():
    return {"agent": "{agent_name}", "status": "online"}
'
for agent in "${agents[@]}"; do
  file="agents/$agent/$agent.py"
  if [[ -f "$file" ]]; then
    echo "Injecting into $file"
    echo "${inject_code//\{agent_name\}/$agent}" > "$file"
  else
    echo "⚠️  $file not found, skipping"
  fi
done

echo "✅ All planetary agents injected. You may now run: pm2 restart all"
