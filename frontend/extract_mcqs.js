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
const allMcqs = [];
let totalQuestions = 0;

console.log(`Starting brace-counting extraction from ${rootDir}...`);

for (const file of allFiles) {
    const relativePath = path.relative(rootDir, file).toLowerCase();
    // Broaden search to anything that might be polity
    if (!relativePath.includes('polity') && !relativePath.includes('upsc')) continue;
    
    const content = fs.readFileSync(file, 'utf8');
    if (!content.includes('id:')) continue;

    console.log(`Processing ${relativePath}...`);
    
    let fileCount = 0;
    let pos = 0;
    
    while (true) {
        // Find next "id:"
        const idIndex = content.indexOf('id:', pos);
        if (idIndex === -1) break;
        
        // Find the start of the object "{" before this "id:"
        let startBrace = -1;
        for (let i = idIndex; i >= 0; i--) {
            if (content[i] === '{') {
                startBrace = i;
                break;
            }
            if (content[i] === ';') break; // Don't go back too far
        }
        
        if (startBrace === -1) {
            pos = idIndex + 3;
            continue;
        }
        
        // Count braces to find the end of the object
        let openBraces = 0;
        let endBrace = -1;
        for (let i = startBrace; i < content.length; i++) {
            if (content[i] === '{') openBraces++;
            else if (content[i] === '}') {
                openBraces--;
                if (openBraces === 0) {
                    endBrace = i;
                    break;
                }
            }
        }
        
        if (endBrace === -1) {
            pos = idIndex + 3;
            continue;
        }
        
        const block = content.substring(startBrace, endBrace + 1);
        try {
            // Clean the block: remove TypeScript types and comments
            let cleanedBlock = block.replace(/\/\/.*$/gm, ''); // Remove comments
            cleanedBlock = cleanedBlock.replace(/\/\*[\s\S]*?\*\//g, ''); // Remove block comments
            
            // Remove some common TS annotations if they break eval
            cleanedBlock = cleanedBlock.replace(/: [A-Z]\w+(\[\])?/g, ''); 
            
            // Attempt to eval the block as an object
            // Wrap in parens to make it an expression
            const obj = eval('(' + cleanedBlock + ')');
            
            if (obj && obj.id && (obj.question || obj.statement)) {
                allMcqs.push({
                    ...obj,
                    _sourceFile: relativePath
                });
                fileCount++;
                totalQuestions++;
            }
        } catch (e) {
            // If it fails, move on
        }
        
        pos = endBrace + 1;
    }
    
    if (fileCount > 0) {
        console.log(`  -> Extracted ${fileCount} MCQs`);
    }
}

console.log(`\nFinal Total Extracted: ${totalQuestions}`);
fs.writeFileSync('all_mcqs_extracted.json', JSON.stringify(allMcqs, null, 2));
console.log("Saved to all_mcqs_extracted.json");
