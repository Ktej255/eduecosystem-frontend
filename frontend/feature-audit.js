const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'components');

const findFiles = (dir, pattern, filesList = []) => {
    if (!fs.existsSync(dir)) return filesList;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            findFiles(fullPath, pattern, filesList);
        } else if (fullPath.match(pattern)) {
            filesList.push(fullPath);
        }
    }
    return filesList;
};

// Searching for the central chapter registry / config files that define the cards
const tsFiles = findFiles(srcDir, /\.tsx?$/);

let historyChapters = [];
let polityChapters = [];
let geoChapters = [];

tsFiles.forEach(f => {
    if (f.includes('history-chapters.ts') || f.includes('history-registry.ts')) {
        console.log('Found History Registry:', f);
    }
    if (f.includes('polity-chapters.ts') || f.includes('chapter-level-index.ts')) {
        console.log('Found Polity Registry:', f);
    }
    if (f.includes('geography') && f.includes('chapters')) {
         console.log('Found Geo Registry:', f);
    }
});
