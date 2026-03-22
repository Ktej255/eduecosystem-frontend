const fs = require('fs');
const path = require('path');

const dir = 'src/components/upsc/subjects/history/data/mcqs/modern';
if (!fs.existsSync(dir)) { 
    console.log('Dir not found: ' + dir);
    process.exit(0);
}
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if MCQ is used but not imported
    if (content.includes(': MCQ[]') && !content.includes("import") ) {
        // Prepend import
        content = `export interface MCQ {\n    id: string | number;\n    question: string;\n    options: string[];\n    correctAnswer?: number;\n    explanation?: string;\n    chapterId?: number | string;\n    difficulty?: string;\n}\n\n` + content;
        fs.writeFileSync(fullPath, content);
        console.log('Fixed: ' + fullPath);
    }
});
