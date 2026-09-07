#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
export RECON_HOME="${RECON_HOME:-$(pwd)}"
python3 src/recon_core.py
sha256sum "$RECON_HOME/manifest/"*.json 2>/dev/null | tee -a "$RECON_HOME/manifest/MANIFEST.sha256" || true
echo "✅ Recon complete. Hashes: $RECON_HOME/manifest/MANIFEST.sha256"
