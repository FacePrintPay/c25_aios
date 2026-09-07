import redis
import json
import time

r = redis.Redis(host="localhost", port=6379)

mission_queue = [
    {
        "mission_id": "alpha001",
        "objective": "verify planetary orchestration works",
        "priority": "high"
    },
    {
        "mission_id": "alpha002",
        "objective": "test planetary escalation",
        "priority": "medium"
    }
]

def dispatch_missions():
    for mission in mission_queue:
        r.publish("missions", json.dumps(mission))
        print(f"[Orchestrator] Dispatched mission {mission['mission_id']}")
        time.sleep(5)

if __name__ == "__main__":
    dispatch_missions()
