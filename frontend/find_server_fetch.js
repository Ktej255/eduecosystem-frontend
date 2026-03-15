const fs = require('fs');
const path = require('path');

function walk(d) {
    let results = [];
    fs.readdirSync(d).forEach(f => {
        let p = path.join(d, f);
        if (fs.statSync(p).isDirectory()) {
            results = results.concat(walk(p));
        } else if (p.endsWith('.ts') || p.endsWith('.tsx')) {
            results.push(p);
        }
    });
    return results;
}

const files = walk('./src/app');

files.forEach(f => {
    // Skip API routes as they are not statically built
    if (f.includes(path.join('api', ''))) return;
    
    try {
        const txt = fs.readFileSync(f, 'utf8');
        const isClientComponent = txt.includes('use client') || txt.includes('"use client"') || txt.includes("'use client'");
        
        if (!isClientComponent && txt.includes('fetch(')) {
            console.log('[SERVER_FETCH]', f);
        }
    } catch(e) {}
});
