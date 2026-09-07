#!/usr/bin/env python3
import time
import json
from datetime import datetime

print("🎧 WhisperSync Agent Started")
print("Listening for audio input patterns...")

# Simple mock agent that logs activity
while True:
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] WhisperSync: Monitoring... Signal OK")
    time.sleep(10)
