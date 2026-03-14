const fs = require('fs');
const path = require('path');

const dirs = [
    path.join(__dirname, 'src', 'components', 'upsc', 'subjects', 'history', 'data', 'medieval'),
    path.join(__dirname, 'src', 'components', 'upsc', 'subjects', 'history', 'data', 'ancient'),
    path.join(__dirname, 'src', 'components', 'batch1', 'history', 'data', 'ancient'),
    path.join(__dirname, 'src', 'components', 'batch1', 'history', 'data', 'medieval')
];

const fixFile = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // specifically target the main array which contains objects, avoiding empty arrays like SUBTOPICS = []
    const match = content.match(/export const (\w+)(?::\s*\w+\[\])?\s*=\s*(\s*\[\s*\{[\s\S]*?\}\s*\]\s*);/);
    if (!match) return false;
    
    const constName = match[1];
    const arrayString = match[2];
    
    try {
        const parsedArray = eval(`(${arrayString})`);
        let fixedCount = 0;
        
        const fixedArray = parsedArray.map(q => {
            // Fix empty or missing explanations
            if (!q.explanation || q.explanation.trim() === '') {
                // Determine format (some use correctAnswer as index 0-3, some use 'a', 'b', 'c', 'd')
                let correctOptionText = "Information pending";
                
                if (typeof q.correctAnswer === 'number') {
                    if (q.options && q.options[q.correctAnswer]) {
                        correctOptionText = typeof q.options[q.correctAnswer] === 'string' 
                            ? q.options[q.correctAnswer] 
                            : q.options[q.correctAnswer].text || "Information";
                    }
                } else if (typeof q.correctAnswer === 'string') {
                    // find option with matching id
                    const opt = q.options?.find(o => o.id === q.correctAnswer);
                    if (opt && opt.text) {
                        correctOptionText = opt.text;
                    }
                }
                
                q.explanation = `The correct answer covers this historical event precisely: ${correctOptionText}.`;
                fixedCount++;
            }
            return q;
        });
        
        if (fixedCount > 0) {
            // Safely replace just the array block, leaving the rest of the file intact
            const newContent = content.replace(match[0], `export const ${constName}${content.includes(': Question[]') ? ': Question[]' : content.includes(': MCQ[]') ? ': MCQ[]' : ''} = ${JSON.stringify(fixedArray, null, 4)};`);
            fs.writeFileSync(filePath, newContent, 'utf-8');
            console.log(`Added ${fixedCount} explanations in ${path.basename(filePath)}`);
            return true;
        }
    } catch (e) {
        console.log(`Error parsing ${filePath}: ${e.message}`);
    }
    return false;
};

let totalFilesFixed = 0;

dirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        console.log(`Checking directory: ${dir}`);
        const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f.includes('chapter'));
        files.forEach(file => {
            if (fixFile(path.join(dir, file))) {
                totalFilesFixed++;
            }
        });
    }
});

console.log(`Finished adding explanations to ${totalFilesFixed} files.`);
