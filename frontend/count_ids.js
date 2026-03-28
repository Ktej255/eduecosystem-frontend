const fs = require('fs');
const path = require('path');

function getFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getFiles(filePath, fileList);
        } else if (filePath.endsWith('.ts') && !filePath.includes('.d.ts')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const rootDir = path.join(process.cwd(), 'src', 'components');
const allFiles = getFiles(rootDir);
let grandTotal = 0;
const results = [];

for (const file of allFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(/id:\s*[0-9]+/g);
    if (matches && matches.length > 5) { // Only count files with at least 5 IDs to avoid noise
        grandTotal += matches.length;
        results.push({ file: path.relative(rootDir, file), count: matches.length });
    }
}

results.sort((a, b) => b.count - a.count);
console.log(`Grand Total IDs found: ${grandTotal}`);
console.log('\nTop 20 files by ID count:');
console.log(JSON.stringify(results.slice(0, 20), null, 2));
