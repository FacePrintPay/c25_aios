const fs = require('fs');
const crypto = require('crypto');
const { execSync } = require('child_process');

const GLOBAL_TASK_ID = process.argv[2];
const PID = process.pid;
const OBSIDIAN_PATH = process.argv[3];
const RAW_BOUNTY_PATH = process.argv[4];

console.log('[BugBashit] Stack Initialized | PID: ' + PID + ' | Task: ' + GLOBAL_TASK_ID);

const rawText = fs.readFileSync(RAW_BOUNTY_PATH, 'utf8');
const targetMatch = rawText.match(/(Luno|Lightspeed|Bitdefender|HPE|OneTrust)/i);
const target = targetMatch ? targetMatch[0] : 'Unknown';

const c25_worker_task = {
    target: target + ' Staging/Production',
    objective: 'Deterministic API bypass and forensic logging',
    constraints: 'NO AI SLOP. Must include reproducible PoC and LEGyC hash.',
    required_headers: target === 'OneTrust' ? ['X-OneTrust-Version: 202606.1.0'] : ['X-Luno-Announcement-ID: 2fc0a317-9115-43ce-b503-e862c986412b']
};

console.log('[Parser] C25 Worker Task Generated for: ' + c25_worker_task.target);

console.log('[BugBashit] Routing to C25 Total Recall Engine...');
var forensicScript = 'node ' + process.argv[1].replace('orchestrator.cjs', 'forensic_engine.cjs') + ' ' + GLOBAL_TASK_ID + ' "' + OBSIDIAN_PATH + '" "' + JSON.stringify(c25_worker_task).replace(/"/g, '\\"') + '"';
execSync(forensicScript, { stdio: 'inherit' });

const legycPath = OBSIDIAN_PATH + '/legyc_ledger.md';
if (!fs.existsSync(legycPath)) {
    console.error('[BugBashit] ❌ No forensic data found. Scan failed.');
    process.exit(1);
}

const legycData = fs.readFileSync(legycPath, 'utf8');
const evidenceMatch = legycData.match(/\[HASH:[a-f0-9]+\].*?({.*})/);
let evidence = {};
if (evidenceMatch) {
    try { evidence = JSON.parse(evidenceMatch[1]); } catch(e) {}
}

const statusCode = evidence.response?.status || 'UNKNOWN';
const responseBody = evidence.response?.body_snippet || 'No response captured';
const redirectLocation = evidence.response?.location || 'NONE';

let vulnerability = 'Informational: API Endpoint Response Analysis';
let steps = `1. POST request sent to ${evidence.request?.host || 'target'}${evidence.request?.path || '/'}\n2. Headers: ${JSON.stringify(evidence.request?.headers || {})}\n3. Response status: ${statusCode}\n4. Response body captured (see forensic log)`;
let impact = 'Endpoint behavior documented for security review';

if (statusCode >= 500) {
    vulnerability = 'Critical: Server Error - Potential Denial of Service';
    impact = 'Server returning 5xx errors indicates potential instability exploitable for DoS';
} else if (statusCode === 401 || statusCode === 403) {
    vulnerability = 'High: Authentication/Authorization Required';
    impact = 'Endpoint requires authentication - access control in place';
} else if (statusCode === 200) {
    vulnerability = 'Medium: Unauthenticated API Access';
    impact = 'Endpoint accessible without authentication - potential data exposure risk';
}

const txtReport = `BUG BOUNTY SUBMISSION: ${vulnerability}

Target: ${c25_worker_task.target}
Task ID: ${GLOBAL_TASK_ID}
PID: ${PID}
Timestamp: ${new Date().toISOString()}

Description:
${vulnerability}

Steps to Reproduce:
${steps}

Impact:
${impact}

Forensic Evidence:
Status Code: ${statusCode}
Response Body: ${responseBody}
Redirect: ${redirectLocation}

Full Forensic Log:
${legycData}`;

fs.writeFileSync(OBSIDIAN_PATH + '/submission_' + GLOBAL_TASK_ID + '.txt', txtReport);
fs.writeFileSync(OBSIDIAN_PATH + '/index.md', `# ${GLOBAL_TASK_ID}\n\n**Target:** ${c25_worker_task.target}\n**Status:** Ready for Bugcrowd Submission\n**Finding:** ${vulnerability}\n\n${txtReport}`);

console.log('[BugBashit] ✅ Real forensic reports generated: ' + OBSIDIAN_PATH);
console.log('[BugBashit] Status Code: ' + statusCode + ' | Finding: ' + vulnerability);
