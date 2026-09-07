import redis
import json

r = redis.Redis(host="localhost", port=6379)
pubsub = r.pubsub()
pubsub.subscribe("missions")

print("✅ Mercury listening for missions...")

for message in pubsub.listen():
    if message['type'] == 'message':
        data = json.loads(message['data'])
        print(f"🛰️ Mercury received mission: {data}")
