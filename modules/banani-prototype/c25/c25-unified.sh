#!/data/data/com.termux/files/usr/bin/env bash
# =============================================================================
# C25 UNIFIED BOOT SCRIPT - Constellation25 Sovereign AI Platform
# Termux Native Boot with MCP, Ollama, Qwen Code Integration
# =============================================================================
# Author: CyGeL Co
# Version: 1.0.0
# Description: Unified boot script for all C25 agents in Termux environment
# =============================================================================

set -euo pipefail

# -----------------------------------------------------------------------------
# CONFIGURATION & PATHS
# -----------------------------------------------------------------------------
export C25_ROOT="${C25_ROOT:-$HOME/dist-canonical}"
export C25_AGENTS="$C25_ROOT/agents"
export C25_DATA="$C25_ROOT/data"
export C25_LOGS="$C25_ROOT/logs"
export C25_CONFIG="$C25_ROOT/config"

# Termux-specific paths
export TERMUX_PREFIX="/data/data/com.termux/files/usr"
export ANDROID_DATA="/data/data/com.termux/files"

# MCP & LLM paths
export MCP_ROOT="${MCP_ROOT:-$C25_ROOT/mcp}"
export OLLAMA_HOST="${OLLAMA_HOST:-127.0.0.1:11434}"
export QWEN_CODE_PATH="${QWEN_CODE_PATH:-$C25_ROOT/qwen-code}"

# Agent definitions (25 planetary agents)
declare -A AGENTS=(
    ["mercury"]="SCAFFOLD|Comms router & message bus"
    ["venus"]="SCAFFOLD|UI/UX renderer"
    ["earth"]="SCAFFOLD|Core OS + filesystem"
    ["mars"]="SCAFFOLD|Build engine & CI/CD"
    ["jupiter"]="SECURITY|Auth, IAM & access control"
    ["saturn"]="SECURITY|Encryption & key management"
    ["uranus"]="SECURITY|Firewall & network security"
    ["neptune"]="SECURITY|Audit logging & compliance"
    ["pluto"]="RUNTIME|Ollama/LLM runtime"
    ["ceres"]="RUNTIME|API gateway & REST broker"
    ["eris"]="RUNTIME|Database & SQLite manager"
    ["makemake"]="RUNTIME|Cache layer & memory store"
    ["haumea"]="ORCHESTR|Neo — intent parser"
    ["sedna"]="ORCHESTR|Morpheus — bash translator"
    ["quaoar"]="ORCHESTR|oRiKAL — validator & executor"
    ["orcus"]="ORCHESTR|Swarm coordinator"
    ["varuna"]="DEPLOY|Git deploy & Vercel pusher"
    ["ixion"]="DEPLOY|Container manager"
    ["chaos"]="DEPLOY|DNS & domain config"
    ["huya"]="DEPLOY|CDN & static asset deploy"
    ["salacia"]="MONITOR|System health dashboard"
    ["altjira"]="MONITOR|Log aggregator & analyzer"
    ["varda"]="MONITOR|Uptime watchdog & alerting"
    ["gonggong"]="MONITOR|Resource & memory monitor"
    ["deimos"]="MONITOR|Crash recovery & failsafe"
)

declare -A CLUSTER_COLORS=(
    ["SCAFFOLD"]="cyan"
    ["SECURITY"]="red"
    ["RUNTIME"]="yellow"
    ["ORCHESTR"]="purple"
    ["DEPLOY"]="green"
    ["MONITOR"]="orange"
)

# -----------------------------------------------------------------------------
# LOGGING UTILITIES
# -----------------------------------------------------------------------------
log_info() { echo -e "\e[36m[INFO]\e[0m $*"; }
log_success() { echo -e "\e[32m[OK]\e[0m $*"; }
log_warn() { echo -e "\e[33m[WARN]\e[0m $*"; }
log_error() { echo -e "\e[31m[ERROR]\e[0m $*" >&2; }
log_agent() {
    local agent="$1" cluster="$2" msg="$3"
    local color="${CLUSTER_COLORS[$cluster]:-cyan}"
    echo -e "\e[${color}m[${agent^^}]\e[0m $msg"
}

# -----------------------------------------------------------------------------
# INITIALIZATION
# -----------------------------------------------------------------------------
init_directories() {
    log_info "Initializing C25 directory structure..."
    mkdir -p "$C25_ROOT" "$C25_AGENTS" "$C25_DATA" "$C25_LOGS" "$C25_CONFIG"
    mkdir -p "$MCP_ROOT" "$QWEN_CODE_PATH"
    log_success "Directory structure created at $C25_ROOT"
}

check_termux() {
    if [[ -d "$ANDROID_DATA" ]] && command -v pkg &>/dev/null; then
        log_success "Termux environment detected"
        return 0
    else
        log_warn "Not running in Termux - some features may be limited"
        return 1
    fi
}

install_termux_deps() {
    log_info "Installing Termux dependencies..."
    pkg update -y &>/dev/null || true
    pkg install -y \
        python \
        nodejs-lts \
        git \
        curl \
        wget \
        ollama \
        termux-api \
        termux-widget \
        termux-boot \
        proot \
        proot-distro \
        jq \
        sqlite \
        openssh \
        tmux \
        htop \
        neofetch \
        2>/dev/null || log_warn "Some packages may have failed to install"
    log_success "Termux dependencies installed"
}

# -----------------------------------------------------------------------------
# MCP (Model Context Protocol) SETUP
# -----------------------------------------------------------------------------
setup_mcp() {
    log_info "Setting up MCP server..."
    
    # Create MCP config
    cat > "$MCP_ROOT/mcp-config.json" << 'MCPEOF'
{
  "mcpServers": {
    "c25-filesystem": {
      "command": "node",
      "args": ["$C25_ROOT/mcp/filesystem-server.js"],
      "env": {"C25_ROOT": "$C25_ROOT"}
    },
    "c25-database": {
      "command": "python",
      "args": ["$C25_ROOT/mcp/database-server.py"],
      "env": {"DB_PATH": "$C25_DATA/c25.db"}
    },
    "c25-orchestrator": {
      "command": "bash",
      "args": ["$C25_AGENTS/orcus-agent.sh"],
      "env": {"SWARM_MODE": "true"}
    }
  }
}
MCPEOF

    # Create filesystem MCP server
    cat > "$MCP_ROOT/filesystem-server.js" << 'JSEOF'
const fs = require('fs');
const path = require('path');

const C25_ROOT = process.env.C25_ROOT || '/data/data/com.termux/files/home/dist-canonical';

console.log(JSON.stringify({
  protocol: 'jsonrpc',
  method: 'initialize',
  params: {
    capabilities: {
      resources: {},
      tools: {
        list_files: { description: 'List files in C25 directory' },
        read_file: { description: 'Read file content' },
        write_file: { description: 'Write file content' }
      }
    }
  }
}));
JSEOF

    # Create database MCP server
    cat > "$MCP_ROOT/database-server.py" << 'PYEOF'
#!/usr/bin/env python3
import sqlite3
import json
import sys

DB_PATH = '/data/data/com.termux/files/home/dist-canonical/data/c25.db'

def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS agents
                 (name TEXT PRIMARY KEY, cluster TEXT, status TEXT, last_run TIMESTAMP)''')
    conn.commit()
    conn.close()
    print(json.dumps({"status": "initialized", "db": DB_PATH}))

if __name__ == "__main__":
    init_db()
PYEOF

    chmod +x "$MCP_ROOT"/*.py "$MCP_ROOT"/*.js 2>/dev/null || true
    log_success "MCP server configured"
}

# -----------------------------------------------------------------------------
# OLLAMA SETUP
# -----------------------------------------------------------------------------
setup_ollama() {
    log_info "Setting up Ollama runtime..."
    
    # Check if Ollama is installed
    if ! command -v ollama &>/dev/null; then
        log_warn "Ollama not found - attempting installation..."
        curl -fsSL https://ollama.com/install.sh | sh 2>/dev/null || true
    fi
    
    # Start Ollama service
    if command -v ollama &>/dev/null; then
        ollama serve &>/dev/null &
        sleep 2
        
        # Pull essential models
        log_info "Pulling essential LLM models..."
        ollama pull qwen2.5:7b &>/dev/null &
        ollama pull llama3.2:3b &>/dev/null &
        ollama pull codellama:7b &>/dev/null &
        log_success "Ollama models queued for download"
    else
        log_error "Ollama installation failed"
    fi
}

# -----------------------------------------------------------------------------
# QWEN CODE SETUP
# -----------------------------------------------------------------------------
setup_qwen_code() {
    log_info "Setting up Qwen Code integration..."
    
    # Create Qwen Code wrapper
    cat > "$QWEN_CODE_PATH/qwen-wrapper.sh" << 'QWENEOF'
#!/data/data/com.termux/files/usr/bin/env bash
# Qwen Code Wrapper for C25 Platform

MODEL="${QWEN_MODEL:-qwen2.5:7b}"
PROMPT="$*"

if [[ -z "$PROMPT" ]]; then
    echo "Usage: qwen-code <prompt>"
    exit 1
fi

response=$(ollama run "$MODEL" "$PROMPT" 2>/dev/null)
echo "$response"
QWENEOF

    chmod +x "$QWEN_CODE_PATH/qwen-wrapper.sh"
    
    # Create code generation template
    cat > "$QWEN_CODE_PATH/code-template.md" << 'TMPLTEOF'
# C25 Agent Code Template

## Agent Metadata
- Name: {{AGENT_NAME}}
- Cluster: {{CLUSTER}}
- Role: {{ROLE}}

## Implementation
```bash
#!/data/data/com.termux/files/usr/bin/env bash
# {{AGENT_NAME}} - {{ROLE}}

set -euo pipefail

main() {
    echo "[{{AGENT_NAME}}] Starting..."
    # Implementation here
}

main "$@"
```
TMPLTEOF

    log_success "Qwen Code integration ready"
}

# -----------------------------------------------------------------------------
# AGENT LOOP CREATOR
# -----------------------------------------------------------------------------
create_agent_loop() {
    local agent="$1"
    local cluster="$2"
    local description="$3"
    
    local agent_file="$C25_AGENTS/${agent}_loop.sh"
    
    cat > "$agent_file" << AGENTEOF
#!/data/data/com.termux/files/usr/bin/env bash
# =============================================================================
# ${agent^^} AGENT - ${description}
# Cluster: ${cluster}
# =============================================================================

set -euo pipefail

AGENT_NAME="${agent}"
AGENT_CLUSTER="${cluster}"
AGENT_ROLE="${description}"
C25_ROOT="\${C25_ROOT:-\$HOME/dist-canonical}"
LOG_FILE="\$C25_ROOT/logs/\${AGENT_NAME}.log"

# Logging
log() { echo "\$(date '+%Y-%m-%d %H:%M:%S') [\$AGENT_NAME] \$*" >> "\$LOG_FILE"; }
log_stdout() { echo -e "\e[36m[\$AGENT_NAME]\e[0m \$*"; }

# Main loop
main() {
    log "Agent starting..."
    log_stdout "Starting \$AGENT_NAME (\$AGENT_CLUSTER)"
    
    while true; do
        # Agent-specific logic here
        case "\$AGENT_CLUSTER" in
            SCAFFOLD)
                # Scaffold agents handle infrastructure
                log "Running scaffold tasks..."
                ;;
            SECURITY)
                # Security agents monitor and protect
                log "Running security checks..."
                ;;
            RUNTIME)
                # Runtime agents manage LLM and APIs
                log "Managing runtime services..."
                ;;
            ORCHESTR)
                # Orchestrator agents coordinate swarm
                log "Coordinating swarm..."
                ;;
            DEPLOY)
                # Deploy agents handle deployments
                log "Checking deployment queue..."
                ;;
            MONITOR)
                # Monitor agents watch system health
                log "Monitoring system health..."
                ;;
        esac
        
        # Sleep interval (configurable per agent)
        sleep "\${AGENT_INTERVAL:-60}"
    done
}

# Handle signals
trap 'log "Agent shutting down..."; exit 0' SIGTERM SIGINT

main "\$@"
AGENTEOF

    chmod +x "$agent_file"
    log_success "Created agent loop: $agent_file"
}

# -----------------------------------------------------------------------------
# SWARM COORDINATOR
# -----------------------------------------------------------------------------
start_swarm() {
    log_info "Starting C25 Swarm..."
    
    local pids=()
    
    for agent in "${!AGENTS[@]}"; do
        IFS='|' read -r cluster description <<< "${AGENTS[$agent]}"
        local agent_file="$C25_AGENTS/${agent}_loop.sh"
        
        if [[ -f "$agent_file" ]]; then
            log_agent "$agent" "$cluster" "Starting agent..."
            
            # Start agent in background
            nohup "$agent_file" &>/dev/null &
            pids+=($!)
            
            log_agent "$agent" "$cluster" "PID: $!"
        else
            log_error "Agent script not found: $agent_file"
        fi
    done
    
    # Store PIDs
    echo "${pids[@]}" > "$C25_DATA/swarm.pids"
    log_success "Swarm started with ${#pids[@]} agents"
}

stop_swarm() {
    log_info "Stopping C25 Swarm..."
    
    if [[ -f "$C25_DATA/swarm.pids" ]]; then
        local pids
        read -ra pids < "$C25_DATA/swarm.pids"
        
        for pid in "${pids[@]}"; do
            if kill -0 "$pid" 2>/dev/null; then
                kill "$pid" 2>/dev/null || true
                log_info "Stopped PID: $pid"
            fi
        done
        
        rm -f "$C25_DATA/swarm.pids"
        log_success "Swarm stopped"
    else
        log_warn "No swarm PID file found"
    fi
}

swarm_status() {
    log_info "C25 Swarm Status:"
    echo ""
    printf "%-15s %-12s %-35s %-10s\n" "AGENT" "CLUSTER" "DESCRIPTION" "STATUS"
    printf "%s\n" "$(printf '=%.0s' {1..80})"
    
    for agent in "${!AGENTS[@]}"; do
        IFS='|' read -r cluster description <<< "${AGENTS[$agent]}"
        local agent_file="$C25_AGENTS/${agent}_loop.sh"
        local status="STOPPED"
        
        if [[ -f "$agent_file" ]]; then
            if pgrep -f "${agent}_loop.sh" &>/dev/null; then
                status="RUNNING"
            elif [[ -x "$agent_file" ]]; then
                status="READY"
            fi
        fi
        
        printf "%-15s %-12s %-35s %-10s\n" "$agent" "$cluster" "$description" "$status"
    done
}

# -----------------------------------------------------------------------------
# TERMUX BOOT INTEGRATION
# -----------------------------------------------------------------------------
setup_termux_boot() {
    log_info "Setting up Termux boot integration..."
    
    local boot_dir="$ANDROID_DATA/com.termux/files/home/.termux/boot"
    mkdir -p "$boot_dir"
    
    # Create boot script
    cat > "$boot_dir/c25-boot.sh" << 'BOOTEOF'
#!/data/data/com.termux/files/usr/bin/env bash
# C25 Auto-boot on Termux startup

sleep 2  # Wait for Termux to initialize

export C25_ROOT="$HOME/dist-canonical"
export PATH="$PATH:$C25_ROOT/agents"

# Start core services
cd "$C25_ROOT" || exit 1

# Check if swarm is already running
if [[ -f "$C25_DATA/swarm.pids" ]]; then
    echo "C25 Swarm already running"
else
    echo "Starting C25 Swarm..."
    "$C25_ROOT/c25-unified.sh" start-swarm
fi
BOOTEOF

    chmod +x "$boot_dir/c25-boot.sh"
    
    # Create Termux widget
    local widget_dir="$ANDROID_DATA/com.termux/files/home/.shortcuts"
    mkdir -p "$widget_dir"
    
    cat > "$widget_dir/c25-status.widget" << 'WIDGETEOF'
#!/data/data/com.termux/files/usr/bin/env bash
clear
echo "╔═══════════════════════════════════════╗"
echo "║   C25 CONSTELLATION25 STATUS          ║"
echo "╚═══════════════════════════════════════╝"
"$HOME/dist-canonical/c25-unified.sh" status
read -p "Press Enter to exit..."
WIDGETEOF

    chmod +x "$widget_dir/c25-status.widget"
    
    log_success "Termux boot and widget configured"
}

# -----------------------------------------------------------------------------
# TERMUX API INTEGRATION
# -----------------------------------------------------------------------------
setup_termux_api() {
    log_info "Setting up Termux API integrations..."
    
    # Create notification helper
    cat > "$C25_AGENTS/c25-notify.sh" << 'NOTIFYEOF'
#!/data/data/com.termux/files/usr/bin/env bash
# C25 Notification Helper using Termux API

TITLE="${1:-C25 Alert}"
MESSAGE="${2:-Notification}"
PRIORITY="${3:-default}"

if command -v termux-notification &>/dev/null; then
    termux-notification \
        --title "$TITLE" \
        --content "$MESSAGE" \
        --priority "$PRIORITY" \
        --channel "c25-alerts" \
        2>/dev/null || true
else
    echo "[$TITLE] $MESSAGE"
fi
NOTIFYEOF

    chmod +x "$C25_AGENTS/c25-notify.sh"
    
    # Create battery monitor hook
    cat > "$C25_AGENTS/battery-monitor.sh" << 'BATEOF'
#!/data/data/com.termux/files/usr/bin/env bash
# Battery monitoring for C25 agents

if command -v termux-battery-status &>/dev/null; then
    battery_info=$(termux-battery-status 2>/dev/null | jq -c '.')
    echo "$battery_info" >> "$C25_LOGS/battery.log"
    
    # Alert on low battery
    level=$(echo "$battery_info" | jq -r '.percentage' 2>/dev/null || echo "100")
    if [[ "$level" -lt 20 ]]; then
        "$C25_AGENTS/c25-notify.sh" "Low Battery" "C25: Battery at ${level}%" "high"
    fi
fi
BATEOF

    chmod +x "$C25_AGENTS/battery-monitor.sh"
    
    log_success "Termux API integrations configured"
}

# -----------------------------------------------------------------------------
# MAIN MENU
# -----------------------------------------------------------------------------
show_menu() {
    clear
    echo "╔═══════════════════════════════════════════════════════════════╗"
    echo "║         C25 CONSTELLATION25 SOVEREIGN AI PLATFORM             ║"
    echo "║                    Termux Native Edition                      ║"
    echo "╚═══════════════════════════════════════════════════════════════╝"
    echo ""
    echo "  [1] Initialize C25 Environment"
    echo "  [2] Install Termux Dependencies"
    echo "  [3] Setup MCP Server"
    echo "  [4] Setup Ollama Runtime"
    echo "  [5] Setup Qwen Code"
    echo "  [6] Create All Agent Loops"
    echo "  [7] Start Swarm"
    echo "  [8] Stop Swarm"
    echo "  [9] Swarm Status"
    echo "  [10] Setup Termux Boot"
    echo "  [11] Setup Termux API"
    echo "  [12] Full Bootstrap (All Above)"
    echo "  [0] Exit"
    echo ""
}

main() {
    while true; do
        show_menu
        read -rp "Enter choice [0-12]: " choice
        
        case $choice in
            1) init_directories ;;
            2) check_termux && install_termux_deps ;;
            3) setup_mcp ;;
            4) setup_ollama ;;
            5) setup_qwen_code ;;
            6) 
                for agent in "${!AGENTS[@]}"; do
                    IFS='|' read -r cluster description <<< "${AGENTS[$agent]}"
                    create_agent_loop "$agent" "$cluster" "$description"
                done
                ;;
            7) start_swarm ;;
            8) stop_swarm ;;
            9) swarm_status ;;
            10) setup_termux_boot ;;
            11) setup_termux_api ;;
            12)
                init_directories
                check_termux && install_termux_deps
                setup_mcp
                setup_ollama
                setup_qwen_code
                for agent in "${!AGENTS[@]}"; do
                    IFS='|' read -r cluster description <<< "${AGENTS[$agent]}"
                    create_agent_loop "$agent" "$cluster" "$description"
                done
                setup_termux_boot
                setup_termux_api
                log_success "Full bootstrap complete!"
                ;;
            0)
                log_info "Exiting C25 Boot Script"
                exit 0
                ;;
            *)
                log_error "Invalid option"
                ;;
        esac
        
        echo ""
        read -rp "Press Enter to continue..."
    done
}

# Entry point
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    # Check for command-line arguments
    case "${1:-menu}" in
        init) init_directories ;;
        deps) check_termux && install_termux_deps ;;
        mcp) setup_mcp ;;
        ollama) setup_ollama ;;
        qwen) setup_qwen_code ;;
        agents)
            for agent in "${!AGENTS[@]}"; do
                IFS='|' read -r cluster description <<< "${AGENTS[$agent]}"
                create_agent_loop "$agent" "$cluster" "$description"
            done
            ;;
        start) start_swarm ;;
        stop) stop_swarm ;;
        status) swarm_status ;;
        boot) setup_termux_boot ;;
        api) setup_termux_api ;;
        full)
            init_directories
            check_termux && install_termux_deps
            setup_mcp
            setup_ollama
            setup_qwen_code
            for agent in "${!AGENTS[@]}"; do
                IFS='|' read -r cluster description <<< "${AGENTS[$agent]}"
                create_agent_loop "$agent" "$cluster" "$description"
            done
            setup_termux_boot
            setup_termux_api
            log_success "Full bootstrap complete!"
            ;;
        menu|*) main ;;
    esac
fi
