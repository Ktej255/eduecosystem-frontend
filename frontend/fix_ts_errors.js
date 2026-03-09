const fs = require('fs');
const path = require('path');

const dir = 'd:/Graphology/Master Software/Eduecosystem/frontend/src/components/batch1/history/data/mcqs/ancient';

// List all chapter files
const files = fs.readdirSync(dir).filter(f => f.startsWith('chapter') && f.endsWith('-data.ts'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Fix 1: Change { id: "a", text: "..." } to { id: "a", content: "..." } for Sequence Drills
    const textRegex = /\{ id:\s*"([^"]+)",\s*text:\s*"([^"]+)"\s*\}/g;
    if (textRegex.test(content)) {
        content = content.replace(textRegex, '{ id: "$1", content: "$2" }');
        changed = true;
    }

    // Fix 2: Add missing `id` to Flashcards
    // The flashcards are usually like `{\n        "front": "...",\n        "back": "...",\n        "tags": [\n            "history"\n        ]\n    }`
    // Let's find any flashcard without an id and add one.
    // We can do this safely by looking for export const CHX_FLASHCARDS: Flashcard[] = [ ... ]
    let match;
    const flashcardRegex = /export const CH(\d+)_FLASHCARDS:\s*Flashcard\[\]\s*=\s*\[([\s\S]*?)\];/;
    const matchArray = content.match(flashcardRegex);
    if (matchArray) {
        const chNum = matchArray[1];
        let flashcardContent = matchArray[2];

        // Replace front: "..." with id: "chX-fc-1", front: "..." if missing id
        let idCounter = 1;
        const replaceMissingId = (matchStr, prefix, p1) => {
            // Already has id?
            if (matchStr.includes('"id":') || matchStr.includes('id:')) {
                return matchStr;
            }
            return `{ "id": "ch${chNum}-fc-${idCounter++}",\n        "front":`;
        };
        
        const newFlashcardContent = flashcardContent.replace(/\{\s*"front":/g, replaceMissingId);
        if (newFlashcardContent !== flashcardContent) {
            content = content.replace(flashcardContent, newFlashcardContent);
            changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Patched ${file}`);
    }
}
