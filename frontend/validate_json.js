const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.next')) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.json')) {
            results.push(file);
        }
    });
    return results;
}

const dirsToScan = ['./src', './public', '.'];

dirsToScan.forEach(dir => {
    try {
        if(fs.existsSync(dir)) {
            const jsonFiles = walk(dir);
            jsonFiles.forEach(file => {
                if(file === 'package-lock.json' || file.includes('package-lock.json')) return;
                try {
                    const content = fs.readFileSync(file, 'utf8');
                    if (content.trim() === '') {
                        console.log(`[EMPTY] ${file}`);
                    } else {
                        JSON.parse(content);
                    }
                } catch (e) {
                    console.log(`[INVALID] ${file} - ${e.message}`);
                }
            });
        }
    } catch(err) {
        // ignore
    }
});
console.log('JSON validation complete.');
