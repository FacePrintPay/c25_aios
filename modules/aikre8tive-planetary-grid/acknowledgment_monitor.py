import redis
import json

r = redis.Redis(host="localhost", port=6379)
pubsub = r.pubsub()
pubsub.subscribe("acknowledgments")

print("[Orchestrator] Waiting for agent acknowledgments...")

for message in pubsub.listen():
    if message['type'] == 'message':
        data = json.loads(message['data'])
        print(f"[Orchestrator] Acknowledgment from {data['agent']} for mission {data['mission_id']} with status {data['status']}")
