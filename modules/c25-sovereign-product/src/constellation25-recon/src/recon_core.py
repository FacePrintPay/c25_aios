#!/usr/bin/env python3
import json, hashlib, os, sys, subprocess
from datetime import datetime
def sha256_file(path):
    h = hashlib.sha256()
    with open(path,'rb') as f:
        for chunk in iter(lambda: f.read(8192), b''): h.update(chunk)
    return h.hexdigest()
def run(cmd): return subprocess.run(cmd,shell=True,capture_output=True,text=True)
def main():
    print(f"[{datetime.now().isoformat()}] Recon core initialized")
    targets = os.environ.get("RECON_TARGETS", "").split(",")
    for t in [x.strip() for x in targets if x.strip()]:
        print(f"  → Scanning: {t}")
        run(f"nmap -sV --open -oA {RECON_HOME}/artifacts/{t.replace('/','_')} {t} 2>/dev/null || true")
    manifest = f"{RECON_HOME}/manifest/recon_{datetime.now().strftime('%Y%m%d_%H%M')}.json"
    with open(manifest,'w') as f: json.dump({"timestamp":datetime.now().isoformat(),"targets":targets,"artifacts":os.listdir(f"{RECON_HOME}/artifacts")},f,indent=2)
    print(f"✅ Manifest: {manifest}")
if __name__=="__main__": main()
