const fs = require('fs');
const path = require('path');

function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(file));
        } else {
            if (file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

function extractQuestions(filePath, prefix) {
    const questions = [];
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Improved regex to capture any string after "question:" or 'question:'
    // and account for single or double quotes, and template literals
    const regex = /["']?question["']?\s*:\s*(["'`])([\s\S]*?)\1/g;
    
    let match;
    while ((match = regex.exec(content)) !== null) {
        let rawText = match[2];
        
        // Skip obvious non-questions or variable assignments
        if (rawText.includes('${') && rawText.length < 20) continue;
        
        let qText = rawText.trim().toLowerCase();
        // Remove basic punctuation and normalize space for matching
        qText = qText.replace(/[.,?/\\#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s+/g, " ");
        
        if (qText.length > 15) {
            questions.push({
                text: qText,
                file: filePath.replace('d:\\Graphology\\Master Software\\Eduecosystem\\frontend\\src\\components\\upsc\\', prefix)
            });
        }
    }
    return questions;
}

console.log("Loading platform (batch1-1) polity questions...");
const platformDir = "d:\\Graphology\\Master Software\\Eduecosystem\\frontend\\src\\components\\upsc\\platform\\polity\\data";
const platformFiles = getFiles(platformDir);
const platformQuestions = [];
platformFiles.forEach(f => {
    platformQuestions.push(...extractQuestions(f, "[platform-batch1-1] "));
});
console.log(`Found ${platformQuestions.length} questions in platform/polity`);

console.log("Loading subjects (batch1) polity questions...");
const subjectsDir = "d:\\Graphology\\Master Software\\Eduecosystem\\frontend\\src\\components\\upsc\\subjects\\polity\\data";
const subjectsFiles = getFiles(subjectsDir);
const subjectsQuestions = [];
subjectsFiles.forEach(f => {
    subjectsQuestions.push(...extractQuestions(f, "[subjects-batch1] "));
});
console.log(`Found ${subjectsQuestions.length} questions in subjects/polity`);

console.log("Finding exact textual overlaps...");
let exactMatches = 0;
const matchLog = [];

// Use platform as base lookup Map
const platformMap = new Map();
platformQuestions.forEach(q => {
    if (!platformMap.has(q.text)) {
        platformMap.set(q.text, [q.file]);
    } else {
        platformMap.get(q.text).push(q.file);
    }
});

subjectsQuestions.forEach(q => {
    if (platformMap.has(q.text)) {
        exactMatches++;
        if (exactMatches <= 50) { // log first 50
            matchLog.push(`Overlap: "${q.text.substring(0, 70)}..."`);
            matchLog.push(`  Platform file: ${platformMap.get(q.text).join(', ')}`);
            matchLog.push(`  Subjects file: ${q.file}`);
            matchLog.push('');
        }
    }
});

console.log(`\nFound ${exactMatches} OVERLAPPING questions!`);

const report = `Polity MCQ Deduplication Report
--------------------------------
Total MCQs extracted from subjects (batch1): ${subjectsQuestions.length}
Total MCQs extracted from platform (batch1-1): ${platformQuestions.length}
Exact text overlap count: ${exactMatches}

This means ${exactMatches} identical questions exist in BOTH the day-based files (batch1) and chapter-based files (batch1-1).

Sample Overlaps:
${matchLog.join('\n')}
`;

fs.writeFileSync('d:\\Graphology\\Master Software\\Eduecosystem\\frontend\\polity-overlap-report.txt', report);
console.log("Saved report.");
