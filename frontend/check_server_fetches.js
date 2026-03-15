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

files.forEach(f => {
    if (f.includes(path.join('api', ''))) return;
    
    try {
        const txt = fs.readFileSync(f, 'utf8');
        const isClientComponent = txt.includes('use client') || txt.includes('"use client"') || txt.includes("'use client'");
        
        if (!isClientComponent) {
            if (txt.includes('api.get') || txt.includes('api.post') || txt.includes('Service.') || txt.includes('fetchData')) {
                console.log('[SERVER_DATA_FETCH]', f);
            }
        }
    } catch(e) {}
});
