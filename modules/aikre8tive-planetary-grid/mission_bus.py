import redis
import json

r = redis.Redis(host="localhost", port=6379)

mission = {
    "mission_id": "alpha001",
    "objective": "verify planetary orchestration works",
    "priority": "high"
}

r.publish("missions", json.dumps(mission))
print("Mission published on the bus")
