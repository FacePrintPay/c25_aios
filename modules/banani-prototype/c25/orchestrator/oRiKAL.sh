#!/usr/bin/env bash
# oRiKAL - Validator & Executor Agent
# Constellation25 Sovereign Platform

set -euo pipefail

ORIKAL_VERSION="1.0.0"
ORIKAL_HOME="${ORIKAL_HOME:-$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)}"
LOG_FILE="${ORIKAL_HOME}/logs/orikal.log"
MANIFEST_DIR="${ORIKAL_HOME}/manifest"
CONFIG_DIR="${ORIKAL_HOME}/config"
AGENTS_DIR="${ORIKAL_HOME}/agents"

# Colors
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
PURPLE='\033[0;35m'
NC='\033[0m'

log() {
    local level="$1"
    shift
    local msg="$*"
    local ts=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "${ts} [${level}] ${msg}" >> "$LOG_FILE"
    case "$level" in
        INFO) echo -e "${GREEN}[INFO]${NC} ${msg}" ;;
        WARN) echo -e "${YELLOW}[WARN]${NC} ${msg}" ;;
        ERROR) echo -e "${RED}[ERROR]${NC} ${msg}" ;;
        VALIDATE) echo -e "${PURPLE}[VALIDATE]${NC} ${msg}" ;;
        EXEC) echo -e "${CYAN}[EXEC]${NC} ${msg}" ;;
        *) echo -e "[${level}] ${msg}" ;;
    esac
}

validate_script() {
    local script="$1"
    log "VALIDATE" "Checking: $script"
    
    if [[ ! -f "$script" ]]; then
        log "ERROR" "File not found: $script"
        return 1
    fi
    
    # Check shebang
    if ! head -1 "$script" | grep -q '^#!'; then
        log "WARN" "Missing shebang in: $script"
    fi
    
    # Syntax check
    if bash -n "$script" 2>/dev/null; then
        log "INFO" "Syntax OK: $script"
        return 0
    else
        log "ERROR" "Syntax error in: $script"
        return 1
    fi
}

validate_all_agents() {
    log "VALIDATE" "=== Validating All Agents ==="
    local valid=0
    local invalid=0
    
    for agent in "$AGENTS_DIR"/*.sh; do
        [[ -f "$agent" ]] || continue
        if validate_script "$agent"; then
            ((valid++))
        else
            ((invalid++))
        fi
    done
    
    log "INFO" "Validation complete: $valid valid, $invalid invalid"
    echo "{\"valid\":$valid,\"invalid\":$invalid,\"timestamp\":\"$(date -Iseconds)\"}" > "$MANIFEST_DIR/validation_report.json"
}

execute_agent() {
    local agent="$1"
    local args="${2:-}"
    
    log "EXEC" "Executing: $agent $args"
    
    if [[ ! -x "$agent" ]]; then
        chmod +x "$agent"
        log "INFO" "Made executable: $agent"
    fi
    
    if bash "$agent" $args; then
        log "INFO" "Execution successful: $agent"
        return 0
    else
        log "ERROR" "Execution failed: $agent"
        return 1
    fi
}

generate_manifest() {
    log "INFO" "Generating manifest..."
    
    local agents_json="["
    local first=true
    
    for agent in "$AGENTS_DIR"/*.sh; do
        [[ -f "$agent" ]] || continue
        local name=$(basename "$agent" .sh)
        local hash=$(sha256sum "$agent" | cut -d' ' -f1)
        local size=$(stat -c%s "$agent" 2>/dev/null || stat -f%z "$agent" 2>/dev/null || echo "0")
        local modified=$(date -r "$agent" '+%Y-%m-%dT%H:%M:%S' 2>/dev/null || date '+%Y-%m-%dT%H:%M:%S')
        
        if [[ "$first" == "true" ]]; then
            first=false
        else
            agents_json+=","
        fi
        
        agents_json+="{\"name\":\"$name\",\"hash\":\"$hash\",\"size\":$size,\"modified\":\"$modified\"}"
    done
    
    agents_json+="]"
    
    cat > "$MANIFEST_DIR/agents_manifest.json" << EOF
{
    "version": "$ORIKAL_VERSION",
    "generated": "$(date -Iseconds)",
    "total_agents": $(echo "$agents_json" | grep -o '{' | wc -l),
    "agents": $agents_json
}
EOF
    
    log "INFO" "Manifest generated: $MANIFEST_DIR/agents_manifest.json"
}

create_missing_dirs() {
    log "INFO" "Creating required directories..."
    
    local dirs=(
        "$ORIKAL_HOME/agents"
        "$ORIKAL_HOME/config"
        "$ORIKAL_HOME/manifest"
        "$ORIKAL_HOME/logs"
        "$ORIKAL_HOME/modules"
        "$ORIKAL_HOME/deploy"
        "$ORIKAL_HOME/docs"
        "$ORIKAL_HOME/runtime"
        "$ORIKAL_HOME/security"
        "$ORIKAL_HOME/orchestrator"
    )
    
    for dir in "${dirs[@]}"; do
        if [[ ! -d "$dir" ]]; then
            mkdir -p "$dir"
            log "INFO" "Created: $dir"
        fi
    done
}

find_files() {
    local pattern="${1:-*.sh}"
    log "INFO" "Finding files matching: $pattern"
    
    find "$ORIKAL_HOME" -type f -name "$pattern" 2>/dev/null | while read -r file; do
        echo "$file"
    done
}

show_status() {
    echo ""
    echo -e "${CYAN}╔════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}║   oRiKAL Validator & Executor Agent    ║${NC}"
    echo -e "${CYAN}╠════════════════════════════════════════╣${NC}"
    echo -e "${CYAN}║${NC} Version: ${GREEN}$ORIKAL_VERSION${NC}"
    echo -e "${CYAN}║${NC} Home: ${YELLOW}$ORIKAL_HOME${NC}"
    echo -e "${CYAN}╚════════════════════════════════════════╝${NC}"
    echo ""
    
    echo -e "${PURPLE}Directory Structure:${NC}"
    find "$ORIKAL_HOME" -type d | head -20 | sed 's|^|  📁 |'
    
    echo ""
    echo -e "${GREEN}Agent Files:${NC}"
    find "$ORIKAL_HOME/agents" -name "*.sh" 2>/dev/null | sed 's|^|  ✅ |' || echo "  No agents found"
    
    echo ""
    echo -e "${YELLOW}Config Files:${NC}"
    find "$ORIKAL_HOME/config" -name "*.json" -o -name "*.md" 2>/dev/null | sed 's|^|  ⚙️  |' || echo "  No configs found"
    
    echo ""
    echo -e "${CYAN}Manifest Files:${NC}"
    find "$ORIKAL_HOME/manifest" -name "*.json" 2>/dev/null | sed 's|^|  📋 |' || echo "  No manifests found"
}

main() {
    create_missing_dirs
    
    case "${1:-status}" in
        validate)
            validate_all_agents
            ;;
        validate-one)
            [[ -n "${2:-}" ]] && validate_script "$2" || echo "Usage: $0 validate-one <script>"
            ;;
        execute)
            [[ -n "${2:-}" ]] && execute_agent "$2" "${3:-}" || echo "Usage: $0 execute <script> [args]"
            ;;
        manifest)
            generate_manifest
            ;;
        find)
            find_files "${2:-*.sh}"
            ;;
        status|*)
            show_status
            ;;
    esac
}

main "$@"
