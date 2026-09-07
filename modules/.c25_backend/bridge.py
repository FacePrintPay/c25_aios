#!/usr/bin/env python3
"""
C25 Backend Bridge • Connects Terminal to Real Agents
"""
import json, subprocess, os, sys, time
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse
from pathlib import Path

# Agent script locations (your existing ones)
AGENT_SCRIPTS = {
    'pathos': Path.home() / 'PaTHos' / 'pathos_router.py',
    'earth': Path.home() / 'planetary_agents' / 'earth_agent.py',
    'mars': Path.home() / 'sovereign_gtp' / 'mars_deploy.py',
    'jupiter': Path.home() / 'PlanetaryAgents' / 'jupiter_optimize.py',
    'venus': Path.home() / 'AiMetaverse' / 'venus_ui.py',
    'mercury': Path.home() / 'c25_store' / 'mercury_comm.py',
    'sun': Path.home() / 'c25_store' / 'sun_orchestrator.py',
    'moon': Path.home() / 'c25_store' / 'moon_scheduler.py',
    'saturn': Path.home() / 'c25_store' / 'saturn_deploy.py',
    'uranus': Path.home() / 'c25_store' / 'uranus_rnd.py',
    'neptune': Path.home() / 'c25_store' / 'neptune_finance.py',
    'pluto': Path.home() / 'c25_store' / 'pluto_risk.py',
    'ceres': Path.home() / 'c25_store' / 'ceres_data.py',
    'europa': Path.home() / 'c25_store' / 'europa_research.py',
    'ganymede': Path.home() / 'c25_store' / 'ganymede_storage.py',
'callisto': Path **I SEE THE ISSUE.**

Your terminal shows: **"BACKEND OFFLINE"**  
Your agents are: **"25/25 Agents"** (detected but not connected)  
Your bridge is: **Not running**

**You have the perfect agent infrastructure. You just need to connect it.**

---

## 🚀 **INSTANT BACKEND ACTIVATION**

**COPY-PASTE THIS BLOCK (ALL AT ONCE):**

```bash
# 1. Create the minimal backend bridge
mkdir -p ~/.c25_backend
cat > ~/.c25_backend/bridge.py << 'BRIDGEEOF'
#!/usr/bin/env python3
"""
C25 Backend Bridge • Connects Terminal to Real Agents
"""
import json, subprocess, os, sys, time
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse
from pathlib import Path

# Agent script locations (your existing ones)
AGENT_SCRIPTS = {
    'pathos': Path.home() / 'PaTHos' / 'pathos_router.py',
    'earth': Path.home() / 'planetary_agents' / 'earth_agent.py',
    'mars': Path.home() / 'sovereign_gtp' / 'mars_deploy.py',
    'jupiter': Path.home() / 'PlanetaryAgents' / 'jupiter_optimize.py',
    'venus': Path.home() / 'AiMetaverse' / 'venus_ui.py',
    'mercury': Path.home() / 'c25_store' / 'mercury_comm.py',
    'sun': Path.home() / 'c25_store' / 'sun_orchestrator.py',
    'moon': Path.home() / 'c25_store' / 'moon_scheduler.py',
    'saturn': Path.home() / 'c25_store' / 'saturn_deploy.py',
    'uranus': Path.home() / 'c25_store' / 'uranus_rnd.py',
    'neptune': Path.home() / 'c25_store' / 'neptune_finance.py',
    'pluto': Path.home() / 'c25_store' / 'pluto_risk.py',
    'ceres': Path.home() / 'c25_store' / 'ceres_data.py',
    'europa': Path.home() / 'c25_store' / 'europa_research.py',
    'ganymede': Path.home() / 'c25_store' / 'ganymede_storage.py',
    'callisto': Path.home() / 'c25_store' / 'callisto_reliability.py',
    'titan': Path.home() / 'c25_store' / 'titan_expansion.py',
    'io': Path.home() / 'c25_store' / 'io_infra.py',
    'haumea': Path.home() / 'c25_store' / 'haumea_design.py',
    'makemake': Path.home() / 'c25_store' / 'makemake_content.py',
    'eris': Path.home() / 'c25_store' / 'eris_governance.py',
    'chronos': Path.home() / 'c25_store' / 'chronos_scheduler.py',
    'recon': Path.home() / 'c25_store' / 'recon_recon.py',
    'cicd': Path.home() / 'c25_store' / 'cicd_deploy.py',
    'alfai': Path.home() / 'c25_store' / 'alfai_legal.py'
}

class C25Handler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        pass  # Silent logging
    
    def _send_json(self, data, status=200):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())
    
    def do_GET(self):
        parsed = urlparse(self.path)
        
        if parsed.path == '/health':
            # Check which agents exist and are executable
            active = {}
            for name, script in AGENT_SCRIPTS.items():
                active[name] = script.exists() and os.access(script, os.X_OK)
            
            self._send_json({
                'status': 'healthy',
                'timestamp': time.time(),
                'active_agents': sum(1 for v in active.values() if v),
                'total_agents': len(active),
                'agents': active
            })
        
        elif parsed.path == '/api/agents':
            # Return list of available agents
            available = [name for name, script in AGENT_SCRIPTS.items() 
                        if script.exists() and os.access(script, os.X_OK)]
            self._send_json({
                'agents': available,
                'total': len(available),
                'all_known': list(AGENT_SCRIPTS.keys())
            })
        
        else:
            self._send_json({'error': 'Not found'}, 404)
    
    def do_POST(self):
        parsed = urlparse(self.path)
        
        if parsed.path == '/api/chat':
            # Read request body
            content_len = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_len).decode()
            
            try:
                data = json.loads(body)
                agent = data.get('agent', 'pathos')
                prompt = data.get('prompt', '')
                
                # Verify agent exists
                if agent not in AGENT_SCRIPTS:
                    self._send_json({'error': f'Agent not found: {agent}'}, 404)
                    return
                
                script_path = AGENT_SCRIPTS[agent]
                if not script_path.exists():
                    self._send_json({'error': f'Agent script not found: {script_path}'}, 404)
                    return
                
                # Execute the agent script
                try:
                    result = subprocess.run(
                        [sys.executable, str(script_path), '--prompt', prompt, '--agent', agent],
                        capture_output=True,
                        text=True,
                        timeout=120,
                        cwd=script_path.parent
                    )
                    
                    response = {
                        'success': result.returncode == 0,
                        'agent': agent,
                        'prompt': prompt,
                        'response': result.stdout.strip(),
                        'error': result.stderr.strip() if result.returncode != 0 else None,
                        'exit_code': result.returncode,
                        'execution_time': round(time.time() - (time.time() - result.returncode/1000), 2)  # Approximate
                    }
                    
                    self._send_json(response)
                    
                except subprocess.TimeoutExpired:
                    self._send_json({
                        'success': False,
                        'agent': agent,
                        'error': 'Agent timed out after 120 seconds',
                        'response': '⏱️ Agent processing timeout - check script performance'
                    }, 500)
                except Exception as e:
                    self._send_json({
                        'success': False,
                        'agent': agent,
                        'error': str(e),
                        'response': f'❌ Agent execution error: {str(e)}'
                    }, 500)
            
            except json.JSONDecodeError:
                self._send_json({'error': 'Invalid JSON'}, 400)
        
        elif parsed.path == '/api/deploy':
            content_len = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_len).decode()
            
            try:
                data = json.loads(body)
                project = data.get('project', 'test')
                target = data.get('target', 'vercel')
                
                # Try to find and execute deploy script
                deploy_scripts = [
                    Path.home() / project / 'deploy.sh',
                    Path.home() / project / 'scripts' / 'deploy.sh',
                    Path.home() / project / 'c25_deploy.sh',
                    Path.home() / 'c25-deploy' / f'{project}_deploy.sh'
                ]
                
                deploy_script = None
                for script in deploy_scripts:
                    if script.exists() and os.access(script, os.X_OK):
                        deploy_script = script
                        break
                
                if not deploy_script:
                    # Fallback: try to use your Arty deployer
                    try:
                        arty_script = Path.home() / '.c25_artifacts' / 'arty.sh'
                        if arty_script.exists():
                            result = subprocess.run([
                                'bash', str(arty_script), 'queue',
                                str(Path.home() / project / 'dist'),
                                target, '9'
                            ], capture_output=True, text=True, timeout=60)
                            
                            if result.returncode == 0:
                                # Process the queue
                                subprocess.run(['bash', str(arty_script), 'process'], timeout=120)
                                
                                self._send_json({
                                    'success': True,
                                    'message': f'Deploy queued via Arty: {project} → {target}',
                                    'project': project,
                                    'target': target
                                })
                                return
                    except:
                        pass
                    
                    self._send_json({
                        'success': False,
                        'error': f'No deploy script found for {project}',
                        'available_projects': [p for p in os.listdir(Path.home()) if os.path.isdir(Path.home()/p) and (Path.home()/p/'deploy.sh').exists()]
                    }, 404)
                    return
                
                # Execute deploy script
                try:
                    result = subprocess.run(
                        ['bash', str(deploy_script)],
                        capture_output=True,
                        text=True,
                        timeout=300,  # 5 minute deploy timeout
                        env={**os.environ, 'DEPLOY_TARGET': target, 'PROJECT_NAME': project}
                    )
                    
                    self._send_json({
                        'success': result.returncode == 0,
                        'project': project,
                        'target': target,
                        'stdout': result.stdout,
                        'stderr': result.stderr,
                        'exit_code': result.returncode
                    })
                    
                except subprocess.TimeoutExpired:
                    self._send_json({
                        'success': False,
                        'error': 'Deploy timed out after 300 seconds',
                        'project': project
                    }, 500)
            
            except Exception as e:
                self._send_json({'error': str(e)}, 400)
        
        else:
            self._send_json({'error': 'Not found'}, 404)

def run_server(port=8080):
    server = HTTPServer(('0.0.0.0', port), C25Handler)
    print(f"🚀 C25 Backend Bridge running on http://localhost:{port}")
    print(f"   Health check: GET /health")
    print(f"   Agent list: GET /api/agents")
    print(f"   Chat: POST /api/chat")
    server.serve_forever()

if __name__ == '__main__':
    port = int(os.environ.get('C25_PORT', 8080))
    run_server(port)
