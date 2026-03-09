const fs = require('fs');
const path = require('path');

const dir = 'd:/Graphology/Master Software/Eduecosystem/frontend/src/components/batch1/history/data/mcqs/ancient';
const files = fs.readdirSync(dir).filter(f => f.startsWith('chapter') && f.endsWith('-data.ts'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Fix 1: prompt: "..." -> question: "..."
    const promptRegex = /prompt:\s*"([^"]+)"/g;
    if (promptRegex.test(content)) {
        content = content.replace(promptRegex, 'question: "$1"');
        changed = true;
    }

    // Fix 2: add difficulty: "moderate" if it's missing from SequenceQuestion
    const sequenceRegex = /(explanation:\s*"[^"]+"\s*)\}/g;
    if (sequenceRegex.test(content)) {
        content = content.replace(sequenceRegex, (match, p1) => {
            if (p1.includes('difficulty:')) return match;
            return p1 + ",\n        difficulty: \"moderate\"\n    }";
        });
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Patched prompt and difficulty in ${file}`);
    }
}
