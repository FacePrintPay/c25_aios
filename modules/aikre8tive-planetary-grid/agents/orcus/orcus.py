from fastapi import FastAPI
from pydantic import BaseModel
import redis
import json

app = FastAPI()
r = redis.Redis(host="localhost", port=6379)

class Mission(BaseModel):
    mission_id: str
    objective: str
    priority: str

@app.post("/deploy/{mission_id}")
async def deploy_mission(mission_id: str, mission: Mission):
    print(f"[orcus] Deploying mission {mission_id} with objective: {mission.objective}")
    acknowledgment = {
        "agent": "orcus",
        "mission_id": mission.mission_id,
        "status": "complete"
    }
    r.publish("acknowledgments", json.dumps(acknowledgment))
    print(f"[orcus] Sent acknowledgment for mission {mission.mission_id}")
    return {"status": "received", "mission_id": mission.mission_id}

@app.get("/")
async def root():
    return {"agent": "orcus", "status": "online"}
