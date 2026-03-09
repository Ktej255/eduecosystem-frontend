const fs = require('fs');
const path = require('path');

const baseDir = 'd:/Graphology/Master Software/Eduecosystem/frontend/src/components/batch1/history/data/mcqs/ancient';

function audit() {
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

        // Accurate MCQ counting - handle both "id": and id:
        const mcqMatches = content.match(/"?id"?: "ch\d+-d-(\d+)"/g) || [];
        const qNums = mcqMatches.map(m => {
            const numMatch = m.match(/-(\d+)"$/);
            return numMatch ? parseInt(numMatch[1]) : 0;
        });

        const l1 = qNums.filter(n => n <= 30).length;
        const l2 = qNums.filter(n => n > 30 && n <= 60).length;
        const l3 = qNums.filter(n => n > 60).length;

        const corruptedCount = (content.match(/correctIndex: -1/g) || []).length;
        const badExpl = (content.match(/"explanation": ".*Ans: .*"/g) || []).length;

        results.push({
            chapter: i,
            sum: summaryPlaceholder ? 'PLH' : 'POP',
            flash: flashcardsEmpty ? 'EMPTY' : 'POP',
            l1: l1,
            l2: l2,
            l3: l3,
            total: qNums.length,
            corr: corruptedCount,
            expl: badExpl
        });
    }

    console.table(results);
}

audit();
