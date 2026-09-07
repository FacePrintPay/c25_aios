#!/usr/bin/env python3
import time
from datetime import datetime

print("📡 EchoAgent Started")
print("Scanning for inbound tasks...")

# Simple mock agent
while True:
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] EchoAgent: Task scanner active")
    time.sleep(15)
