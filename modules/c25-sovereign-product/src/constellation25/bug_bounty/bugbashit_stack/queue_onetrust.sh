#!/data/data/com.termux/files/usr/bin/bash
# C25 BugBashit Queue OneTrust Strike

C25_ROOT="$HOME/Constellation25"
BB_DIR="$C25_ROOT/bug_bounty/bugbashit_stack"
OBSIDIAN_VAULT="$HOME/Obsidian Vault/C25_Forensics"
MIGRATIONS_DIR="$BB_DIR/../migrations"

GLOBAL_TASK_ID="C25-BB-OT-$(date +%s)"

echo "[C25-DevOps] Creating OneTrust Strike Configuration..."

# 1. Ensure directories exist
mkdir -p "$MIGRATIONS_DIR"

# 2. Generate Migration for OneTrust Strike
cat << MIGEOF > "$MIGRATIONS_DIR/010_onetrust_strike.sql"
-- C25 Migration 010: OneTrust V202606.1.0 Strike Configuration
CREATE TABLE IF NOT EXISTS onetrust_strikes (
    global_task_id TEXT PRIMARY KEY,
    target_host TEXT,
    target_path TEXT,
    strike_status TEXT DEFAULT 'queued',
    queued_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO onetrust_strikes (global_task_id, target_host, target_path) 
VALUES ('$GLOBAL_TASK_ID', 'pentest-app.onetrust.com', '/api/v1/assessments');
MIGEOF
echo "[+] Generated OneTrust Strike Migration: 010_onetrust_strike.sql"

# 3. Update the forensic_engine.cjs to target OneTrust based on bounty details
# The bounty mentioned pentest-app.onetrust.com and the release notes link.
# We'll target /api/v1/assessments as a potential new version endpoint.
sed -i "s|hostname: '[^']*'|hostname: 'pentest-app.onetrust.com'|" "$BB_DIR/forensic_engine.cjs"
sed -i "s|path: '[^']*'|path: '/api/v1/assessments'|" "$BB_DIR/forensic_engine.cjs"

# Add OneTrust-specific headers if any were mentioned (none explicitly stated for this endpoint, but keeping structure)
sed -i '/headers: {/,/}/ s|}|,"X-OneTrust-Version": "202606.1.0"|' "$BB_DIR/forensic_engine.cjs" 2>/dev/null || echo "[!] No default header block found in forensic_engine.cjs, appending new one..."
if ! grep -q "X-OneTrust-Version" "$BB_DIR/forensic_engine.cjs"; then
    sed -i '/"Content-Type": "application\/json"/a\        "X-OneTrust-Version": "202606.1.0",' "$BB_DIR/forensic_engine.cjs"
fi

echo "[C25-DevOps] Updated forensic_engine.cjs for OneTrust V202606.1.0 Strike..."

# 4. Run the orchestrator with the new configuration
node "$BB_DIR/orchestrator.cjs" "$GLOBAL_TASK_ID" "$OBSIDIAN_VAULT/$GLOBAL_TASK_ID" "$BB_DIR/raw_bounty.txt"

