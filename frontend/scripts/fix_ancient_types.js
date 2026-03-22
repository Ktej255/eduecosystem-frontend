const fs = require('fs');
const path = require('path');

// Fix 1: ancient history chapters - change SUBTOPICS from Question[] to Subtopic[]
const ancientDir = 'src/components/upsc/subjects/history/data/ancient';
let fixedFiles = [];

if (fs.existsSync(ancientDir)) {
    const files = fs.readdirSync(ancientDir).filter(f => f.endsWith('.ts') && f.startsWith('chapter'));
    files.forEach(file => {
        const fp = path.join(ancientDir, file);
        let c = fs.readFileSync(fp, 'utf8');
        let changed = false;
        
        // Fix SUBTOPICS typed as Question[] to be Subtopic[]
        if (c.includes('SUBTOPICS: Question[]')) {
            c = c.replace(/SUBTOPICS: Question\[\]/g, 'SUBTOPICS: Subtopic[]');
            changed = true;
        }
        
        // Also ensure Subtopic interface imported if not already
        if (changed && c.includes("import { Subtopic, Question }") === false && c.includes("import {")) {
            // Already might have only question import - add Subtopic
            if (!c.includes('Subtopic') && c.includes("import { Question }")) {
                c = c.replace("import { Question }", "import { Subtopic, Question }");
            }
        }
        
        if (changed) {
            fs.writeFileSync(fp, c);
            fixedFiles.push(fp);
        }
    });
}

console.log('Fixed ancient SUBTOPICS types:', fixedFiles.length, 'files');
fixedFiles.forEach(f => console.log('  -', f));

// Fix 2: modern/chapter1.ts - remove the duplicate local MCQ interface since it imports from @/types/mcq
const modernDir = 'src/components/upsc/subjects/history/data/mcqs/modern';
const chapter1Path = path.join(modernDir, 'chapter1.ts');
if (fs.existsSync(chapter1Path)) {
    let c = fs.readFileSync(chapter1Path, 'utf8');
    // Remove the local MCQ interface added by our earlier script
    const localMCQInterface = `export interface MCQ {\n    id: string | number;\n    question: string;\n    options: string[];\n    correctAnswer?: number;\n    explanation?: string;\n    chapterId?: number | string;\n    difficulty?: string;\n}\n\n`;
    if (c.startsWith(localMCQInterface)) {
        c = c.substring(localMCQInterface.length);
        fs.writeFileSync(chapter1Path, c);
        console.log('\nFixed modern/chapter1.ts - removed duplicate MCQ interface');
    }
}

// Fix 3: any other modern chapter that has BOTH a local MCQ interface AND an import
const modernFiles = fs.readdirSync(modernDir).filter(f => f.endsWith('.ts'));
modernFiles.forEach(file => {
    const fp = path.join(modernDir, file);
    let c = fs.readFileSync(fp, 'utf8');
    
    // Check if file has local MCQ interface AND also imports MCQ
    if (c.includes('export interface MCQ {') && c.includes('import { MCQ }')) {
        // Remove the local interface (it's a duplicate)
        const localInterfaceRegex = /export interface MCQ \{[\s\S]*?\}\n\n/;
        c = c.replace(localInterfaceRegex, '');
        fs.writeFileSync(fp, c);
        console.log('Removed duplicate MCQ from:', fp);
    }
});
