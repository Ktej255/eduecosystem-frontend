const fs = require('fs');
const path = require('path');

const BASE_DIR = 'd:/Graphology/Master Software/Eduecosystem/frontend/src/components/batch1';
const MODERN_DIR = path.join(BASE_DIR, 'history/data/modern');
const FLASHCARDS_DIR = path.join(BASE_DIR, 'history/data/flashcards/modern');
const CA_FILE = path.join(BASE_DIR, 'current-affairs/current-affairs-data.ts');
const OUTPUT_FILE = 'history_status_report.md';

let caData = '';
try {
    caData = fs.readFileSync(CA_FILE, 'utf8');
} catch (e) {
    console.error("Error reading CA file:", e);
}

let output = '# History Hub Content Status Report\n\n';
output += '| Chapter | Cards | L1 (Easy) | L2 (Mod) | L3 (Hard) | Read | Map | CA |\n';
output += '|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n';

for (let i = 1; i <= 39; i++) {
    const chapterDir = path.join(MODERN_DIR, `chapter${i}`);
    const contentFile = path.join(chapterDir, 'content.ts');
    const mcqsFile = path.join(chapterDir, 'mcqs.ts');
    const flashcardsFile = path.join(FLASHCARDS_DIR, `chapter${i}.ts`);

    let read = '❌';
    let l1 = '❌';
    let l2 = '❌';
    let l3 = '❌';
    let cards = '❌';
    let map = '❌';
    let ca = '❌';

    // Check Read Content
    if (fs.existsSync(contentFile)) {
        const content = fs.readFileSync(contentFile, 'utf8');
        if (content.length > 100) read = '✅';
    }

    // Check MCQs
    if (fs.existsSync(mcqsFile)) {
        const mcqContent = fs.readFileSync(mcqsFile, 'utf8');
        if (mcqContent.includes("'Easy'") || mcqContent.includes('"Easy"')) l1 = '✅';
        if (mcqContent.includes("'Moderate'") || mcqContent.includes('"Moderate"')) l2 = '✅';
        if (mcqContent.includes("'Hard'") || mcqContent.includes('"Hard"')) l3 = '✅';

        // Fallback for new chapters where difficulty might not be explicitly set or different case
        if (l1 === '❌' && mcqContent.includes('question:')) l1 = '⚠️ (Unclassified)';
    }

    // Check Flashcards
    if (fs.existsSync(flashcardsFile)) {
        const fcContent = fs.readFileSync(flashcardsFile, 'utf8');
        if (fcContent.length > 50) cards = '✅';
    }

    // Check Current Affairs
    // Check if "chapter: i" exists in the data file
    // Regex looks for: chapter:\s*1[,\s}] 
    const caRegex = new RegExp(`chapter:\\s*${i}[,\\s}]`);
    if (caRegex.test(caData)) ca = '✅';

    output += `| **${i}** | ${cards} | ${l1} | ${l2} | ${l3} | ${read} | ${map} | ${ca} |\n`;
}

fs.writeFileSync(OUTPUT_FILE, output);
console.log(`Report generated at ${OUTPUT_FILE}`);
