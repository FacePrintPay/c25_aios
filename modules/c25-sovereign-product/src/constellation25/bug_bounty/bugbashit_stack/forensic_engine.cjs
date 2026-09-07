const fs = require('fs');
const crypto = require('crypto');
const https = require('https');

const GLOBAL_TASK_ID = process.argv[2];
const OBSIDIAN_PATH = process.argv[3];
const TASK_OBJ = JSON.parse(process.argv[4]);

console.log('[Total Recall v4] Initiating Forensic Capture | Task: ' + GLOBAL_TASK_ID);

// Create Obsidian vault directory
fs.mkdirSync(OBSIDIAN_PATH, { recursive: true });

const req = https.request({
    hostname: 'pentest-app.onetrust.com',
    port: 443,
    path: '/api/v1/assessments',
    method: 'POST',
    headers: {
        "X-OneTrust-Version": "202606.1.0",
        "Content-Type": "application/json"
    ,"X-OneTrust-Version": "202606.1.0"
}, (res) => {
    let body = '';
    res.on('data', function(chunk) { body += chunk; });
    res.on('end', function() {
        const evidence = {
            task_id: GLOBAL_TASK_ID,
            timestamp: new Date().toISOString(),
            request: { 
                host: 'pentest-app.onetrust.com', 
                path: '/api/v1/assessments', 
                headers: res.req._header 
            },
            response: { 
                status: res.statusCode, 
                location: res.headers.location, 
                body_snippet: body.substring(0, 200) 
            }
        };

        const hash = crypto.createHash('sha256').update(JSON.stringify(evidence)).digest('hex');
        const legyc_entry = '[' + evidence.timestamp + '] [HASH:' + hash + '] [PID:' + process.pid + '] ' + JSON.stringify(evidence) + '\n';

        fs.appendFileSync(OBSIDIAN_PATH + '/legyc_ledger.md', legyc_entry);
        console.log('[Total Recall v4] ✅ Evidence Hashed & Logged: ' + hash.substring(0, 16) + '...');
        console.log('[Total Recall v4] Status: ' + res.statusCode + ' | Redirect: ' + (res.headers.location || 'NONE'));
    });
});

req.on('error', function(e) { 
    console.error('[Total Recall v4] ERR: ' + e.message);
    fs.appendFileSync(OBSIDIAN_PATH + '/legyc_ledger.md', '[' + new Date().toISOString() + '] ERROR: ' + e.message + '\n');
});

req.write(JSON.stringify({test: "forensic_scan"}));
req.end();
