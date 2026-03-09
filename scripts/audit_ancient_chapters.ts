import * as fs from 'fs';
import * as path from 'path';

const baseDir = 'd:/Graphology/Master Software/Eduecosystem/frontend/src/components/batch1/history/data/mcqs/ancient';

async function audit() {
    const results = [];
    for (let i = 1; i <= 27; i++) {
        const filePath = path.join(baseDir, `chapter${i}-data.ts`);
        if (!fs.existsSync(filePath)) {
            results.push({ chapter: i, status: 'MISSING' });
            continue;
        }

        const content = fs.readFileSync(filePath, 'utf-8');

        const summaryPlaceholder = content.includes('"Content coming soon."') || content.includes("'Content coming soon.'");
        const flashcardsEmpty = content.includes(`CH${i}_FLASHCARDS: Flashcard[] = []`);

        // Count MCQs
        const l1Count = (content.match(/id: "ch\d+-d-1\d+"/g) || []).length;
        const l2Count = (content.match(/id: "ch\d+-d-2\d+"/g) || []).length;
        const l3Count = (content.match(/id: "ch\d+-d-3\d+"/g) || []).length;

        // Check for corruption (correctIndex: -1)
        const corruptedCount = (content.match(/correctIndex: -1/g) || []).length;

        results.push({
            chapter: i,
            summary: summaryPlaceholder ? 'Placeholder' : 'Populated',
            flashcards: flashcardsEmpty ? 'Empty' : 'Populated',
            l1: l1Count,
            l2: l2Count,
            l3: l3Count,
            corrupted: corruptedCount
        });
    }

    console.table(results);
}

audit();
