#!/data/data/com.termux/files/usr/bin/bash
# C25 YesquidPro Build - Advanced LLM-Powered Vulnerability Parser & Injector

C25_ROOT="$HOME/Constellation25"
BB_DIR="$C25_ROOT/bug_bounty/bugbashit_stack"
OBSIDIAN_VAULT="$HOME/Obsidian Vault/C25_Forensics"
MIGRATIONS_DIR="$BB_DIR/../migrations"

GLOBAL_TASK_ID="C25-YESQ-PRO-$(date +%s)"
PROCESS_PID=$$

# 1. Ensure directories exist
mkdir -p "$MIGRATIONS_DIR"

# 2. Generate Migration for YesquidPro Build
cat << MIGEOF > "$MIGRATIONS_DIR/011_yesquidpro_build.sql"
-- C25 Migration 011: YesquidPro LLM-Powered Build
CREATE TABLE IF NOT EXISTS yesquidpro_runs (
    global_task_id TEXT PRIMARY KEY,
    process_pid INTEGER,
    target TEXT,
    llm_model_used TEXT,
    llm_prompt_tokens INTEGER,
    llm_response_tokens INTEGER,
    status TEXT DEFAULT 'running',
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO yesquidpro_runs (global_task_id, process_pid, target, llm_model_used) 
VALUES ('$GLOBAL_TASK_ID', $PROCESS_PID, 'Dynamic Target from Args', 'Ollama-Qwen-C25');
MIGEOF
echo "[+] Generated YesquidPro Build Migration: 011_yesquidpro_build.sql"

# 3. Function to interact with Local Ollama/Qwen (assuming it's running on localhost:11434)
run_ollama_qwen() {
    local prompt="$1"
    curl -s -X POST http://localhost:11434/api/generate \
         -H "Content-Type: application/json" \
         -d "{\"model\":\"qwen\", \"prompt\":\"$prompt\", \"stream\":false}" | jq -r '.response'
}

# 4. Main YesquidPro Execution
TARGET_BOUNTY_FILE="$BB_DIR/raw_bounty.txt"
if [ ! -f "$TARGET_BOUNTY_FILE" ]; then
    echo "[ERROR] Target bounty file not found: $TARGET_BOUNTY_FILE"
    exit 1
fi

echo "[YesquidPro] Reading bounty target: $TARGET_BOUNTY_FILE"
BOUNTY_TEXT=$(cat "$TARGET_BOUNTY_FILE")

echo "[YesquidPro] Parsing bounty with Ollama/Qwen..."
# Prompt Ollama/Qwen to extract target host, path, and injection points
PARSE_PROMPT="Analyze this bug bounty announcement: '$BOUNTY_TEXT'. Extract the primary target hostname, the main API endpoint path, and suggest 3 potential HTTP header or parameter injection points for security testing. Respond in JSON format: {\"host\":\"...\", \"path\":\"...\", \"injection_points\":[\"...\"]}"
PARSED_JSON=$(run_ollama_qwen "$PARSE_PROMPT")
echo "[YesquidPro] LLM Parse Result: $PARSED_JSON"

# Extract parsed values
TARGET_HOST=$(echo "$PARSED_JSON" | jq -r '.host')
TARGET_PATH=$(echo "$PARSED_JSON" | jq -r '.path')
INJECTION_POINTS=$(echo "$PARSED_JSON" | jq -r '.injection_points[]')

if [ "$TARGET_HOST" == "null" ] || [ "$TARGET_PATH" == "null" ]; then
    echo "[ERROR] Ollama/Qwen failed to parse host/path. Raw response: $PARSED_JSON"
    exit 1
fi

echo "[YesquidPro] Parsed Target Host: $TARGET_HOST"
echo "[YesquidPro] Parsed Target Path: $TARGET_PATH"
echo "[YesquidPro] Parsed Injection Points:"
echo "$INJECTION_POINTS"

# 5. Update forensic_engine.cjs dynamically based on LLM output
sed -i "s|hostname: '[^']*'|hostname: '$TARGET_HOST'|" "$BB_DIR/forensic_engine.cjs"
sed -i "s|path: '[^']*'|path: '$TARGET_PATH'|" "$BB_DIR/forensic_engine.cjs"

# For each injection point suggested by LLM, modify the headers in forensic_engine.cjs accordingly.
# This is a simplified example assuming the LLM suggests headers.
while IFS= read -r injection_point; do
    if [[ $injection_point == *"header"* ]]; then
        sed -i "/\"Content-Type\": \"application\/json\"/a\        \"$injection_point\": \"INJECTED_VALUE_FOR_TESTING\", " "$BB_DIR/forensic_engine.cjs"
    fi
done <<< "$INJECTION_POINTS"

echo "[YesquidPro] Updated forensic_engine.cjs for dynamic target: $TARGET_HOST:$TARGET_PATH"

# 6. Run the orchestrator (which will trigger the updated forensic engine)
echo "[YesquidPro] Running BugBashit Orchestrator for parsed target..."
node "$BB_DIR/orchestrator.cjs" "$GLOBAL_TASK_ID" "$OBSIDIAN_VAULT/$GLOBAL_TASK_ID" "$TARGET_BOUNTY_FILE"

echo "[YesquidPro] Build Complete. Check Obsidian Vault: $OBSIDIAN_VAULT/$GLOBAL_TASK_ID"
