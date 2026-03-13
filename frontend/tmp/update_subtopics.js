const fs = require('fs');
const path = require('path');

const root = 'd:/Graphology/Master Software/Eduecosystem/frontend/src/components/batch1/history/data/modern';
const chapters = fs.readdirSync(root).filter(f => f.startsWith('chapter'));

chapters.forEach(ch => {
    const num = ch.match(/\d+/)[0];
    const filePath = path.join(root, ch, 'subtopics.ts');
    if (fs.existsSync(filePath)) {
        const content = `import { Subtopic } from "../../../../types";\n\nexport const MODERN_CHAPTER_${num}_SUBTOPICS: Subtopic[] = [];\n`;
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${filePath}`);
    }
});
