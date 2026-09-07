#!/data/data/com.termux/files/usr/bin/env bash
# C25 AGENT RUNNER - Execute skills through agent shells
# Usage: agent_runner.sh <agent_name> <skill> [args...]

set -euo pipefail

export C25_ROOT="${C25_ROOT:-$HOME/dist-canonical}"
export AGENTS_DIR="$C25_ROOT/agents"
export SKILLS_DIR="$C25_ROOT/skills"
export CACHE_DIR="$C25_ROOT/cache"

RED='\033[0;31m'; GREEN='\033[0;32m'; CYAN='\033[0;36m'; YELLOW='\033[1;33m'; NC='\033[0m'

log() { echo -e "${CYAN}[RUNNER]${NC} $1"; }
ok() { echo -e "${GREEN}[✓]${NC} $1"; }
err() { echo -e "${RED}[✗]${NC} $1"; exit 1; }

# Load agent skill registry
load_agent_skills() {
    local agent_name="$1"
    local agent_file="$AGENTS_DIR/${agent_name,,}-agent.sh"
    
    if [[ ! -f "$agent_file" ]]; then
        err "Agent not found: $agent_name (expected: $agent_file)"
    fi
    
    # Source the agent file to load its skills
    source "$agent_file"
    log "Loaded agent: $AGENT_NAME from cluster: $AGENT_CLUSTER"
    log "Available skills: ${AGENT_SKILLS[*]}"
}

# Execute a specific skill
execute_skill() {
    local agent_name="$1"
    local skill_name="$2"
    shift 2
    local args=("$@")
    
    log "Executing skill '$skill_name' on agent '$agent_name' with args: ${args[*]}"
    
    # Check if skill function exists
    if declare -f "$skill_name" &>/dev/null; then
        "$skill_name" "${args[@]}"
        ok "Skill '$skill_name' completed successfully"
    else
        # Try generic execute with skill as parameter
        if declare -f "execute" &>/dev/null; then
            execute "$skill_name" "${args[@]}"
        else
            err "Skill '$skill_name' not found on agent '$agent_name'"
        fi
    fi
}

# List all agents and their skills
list_agents() {
    echo -e "${CYAN}╔══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}║${NC}           C25 AGENT SKILL REGISTRY                   ${CYAN}║${NC}"
    echo -e "${CYAN}╚══════════════════════════════════════════════════════════╝${NC}"
    echo
    
    if [[ -f "$SKILLS_DIR/agent_skills.ndjson" ]]; then
        while IFS= read -r line; do
            local agent=$(echo "$line" | jq -r '.agent')
            local skills=$(echo "$line" | jq -r '.skills | join(", ")')
            echo -e "  ${GREEN}●${NC} ${YELLOW}$agent${NC}"
            echo -e "    Skills: ${CYAN}[$skills]${NC}"
            echo
        done < "$SKILLS_DIR/agent_skills.ndjson"
    else
        warn "No skill registry found. Run system.skills first."
    fi
}

# Main
main() {
    if [[ $# -lt 1 ]]; then
        list_agents
        echo "Usage: $0 <agent_name> <skill> [args...]"
        echo "       $0 --list"
        exit 0
    fi
    
    if [[ "$1" == "--list" ]]; then
        list_agents
        exit 0
    fi
    
    local agent_name="$1"
    local skill_name="${2:-execute}"
    shift 2 || true
    
    load_agent_skills "$agent_name"
    execute_skill "$agent_name" "$skill_name" "$@"
}

main "$@"
