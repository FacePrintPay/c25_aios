#!/usr/bin/env node
console.log("🌐 Companion.js Interface Started");
console.log("DOM injection ready...");

// Simple mock companion
setInterval(() => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Companion.js: Interface active`);
}, 20000);

// Keep process alive
process.on('SIGTERM', () => {
    console.log('Companion.js shutting down...');
    process.exit(0);
});
