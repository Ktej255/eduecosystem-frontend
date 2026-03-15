const fs = require('fs');
const path = require('path');

function walk(d) {
    let results = [];
    fs.readdirSync(d).forEach(f => {
        let p = path.join(d, f);
        if (fs.statSync(p).isDirectory()) {
            results = results.concat(walk(p));
        } else if (p.endsWith('page.tsx') || p.endsWith('layout.tsx')) {
            results.push(p);
        }
    });
    return results;
}

const files = walk('./src/app');
let serverComps = [];

files.forEach(f => {
    if (f.includes(path.join('api', ''))) return;
    
    try {
        const txt = fs.readFileSync(f, 'utf8');
        const isClientComponent = txt.includes('use client') || txt.includes('"use client"') || txt.includes("'use client'");
        
        if (!isClientComponent) {
            serverComps.push(f);
        }
    } catch(e) {}
});

console.log('--- SERVER COMPONENTS ---');
serverComps.forEach(f => console.log(f));
