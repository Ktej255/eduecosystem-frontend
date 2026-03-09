const fs = require('fs');
const path = require('path');

const MASTER_SHEET_PATH = 'D:/Graphology/Paid Students/Mians ready Dec 2025/Morning Batch/prelims/History/Ancient History/Ancient History MCQ Master Sheet.txt';
const OUTPUT_DIR = 'd:/Graphology/Master Software/Eduecosystem/frontend/src/components/batch1/history/data/mcqs/ancient';

function parseMasterSheet() {
    const content = fs.readFileSync(MASTER_SHEET_PATH, 'utf-8');
    const normalizedContent = content.replace(/\r\n/g, '\n');

    const chapterSplits = normalizedContent.split(/\n\s*Chapter\s+(\d+)\s*/i);
    const chapters = {};

    for (let i = 1; i < chapterSplits.length; i += 2) {
        const chapterNum = parseInt(chapterSplits[i]);
        const chapterContent = chapterSplits[i + 1];
        if (chapterNum >= 1 && chapterNum <= 27) {
            if (!chapters[chapterNum]) chapters[chapterNum] = "";
            chapters[chapterNum] += chapterContent;
        }
    }

    for (let chNum in chapters) {
        const chContent = chapters[chNum];
        const mcqs = parseMCQsFromContent(chContent, chNum);
        const meta = extractMeta(chContent);

        if (mcqs.length > 0) {
            writeChapterFile(chNum, mcqs, meta);
        }
    }
}

function extractMeta(content) {
    // Look for text before Q1
    const head = content.split(/Q1\./)[0];
    const lines = head.split('\n').map(l => l.trim()).filter(l => l.length > 5);

    let summary = "Content coming soon.";
    let keyPoints = ["Key point 1 placeholder."];

    if (lines.length > 1) {
        summary = lines[0];
        keyPoints = lines.slice(1, 4).filter(l => !l.toLowerCase().includes('batch') && !l.toLowerCase().includes('database'));
    }

    if (keyPoints.length === 0) keyPoints = ["Key point 1 placeholder."];

    return { summary, keyPoints };
}

function parseMCQsFromContent(content, chNum) {
    const mcqs = [];
    const pattern1 = /Q(\d+)\.\s+([\s\S]*?)\n\s*A\)\s+(.*?)\n\s*B\)\s+(.*?)\n\s*C\)\s+(.*?)\n\s*D\)\s+(.*?)\n\s*Answer:\s*([A-D])\s*\|\s*Explanation:\s*(.*?)(?=\n\s*(?:Q\d+\.|Chapter|Batch|$))/gi;
    const pattern2 = /Q(\d+)\.\s+([\s\S]*?)\n\s*A\)\s+(.*?)\s+B\)\s+(.*?)\s+C\)\s+(.*?)\s+D\)\s+(.*?)\n\s*Ans:\s*([A-D])(?:\s*\|\s*Explanation:\s*(.*?))?(?=\n\s*(?:Q\d+\.|Chapter|Batch|$))/gi;

    let match;
    while ((match = pattern1.exec(content)) !== null) {
        mcqs.push(formatMCQ(chNum, match[1], match[2], [match[3], match[4], match[5], match[6]], match[7], match[8]));
    }

    const existingIds = new Set(mcqs.map(m => m.id));
    while ((match = pattern2.exec(content)) !== null) {
        const id = `ch${chNum}-d-${match[1]}`;
        if (!existingIds.has(id)) {
            mcqs.push(formatMCQ(chNum, match[1], match[2], [match[3], match[4], match[5], match[6]], match[7], match[8] || "Explanation coming soon."));
        }
    }
    return mcqs;
}

function formatMCQ(chNum, qNum, question, options, answerChar, explanation) {
    const ansMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
    const idx = ansMap[answerChar.toUpperCase()];
    const cleanStr = (s) => s.replace(/[\r\n]+/g, ' ').trim().replace(/"/g, '\\"');

    let difficulty = "moderate";
    const qNumInt = parseInt(qNum);
    if (qNumInt <= 30) difficulty = "easy";
    else if (qNumInt <= 60) difficulty = "moderate";
    else difficulty = "tough";

    return {
        id: `ch${chNum}-d-${qNum}`,
        question: cleanStr(question),
        options: options.map(cleanStr),
        correctIndex: idx,
        explanation: cleanStr(explanation),
        difficulty: difficulty,
        tags: ["history"]
    };
}

function writeChapterFile(chNum, mcqs, meta) {
    mcqs.sort((a, b) => parseInt(a.id.split('-').pop()) - parseInt(b.id.split('-').pop()));

    const l1 = mcqs.filter(m => parseInt(m.id.split('-').pop()) <= 30);
    const l2 = mcqs.filter(m => {
        const q = parseInt(m.id.split('-').pop());
        return q > 30 && q <= 60;
    });
    const l3 = mcqs.filter(m => parseInt(m.id.split('-').pop()) > 60);

    const fileContent = `import { Flashcard, MCQ, HandwrittenNote, TimelineEvent } from "../../ancient-types-27"; 

export const CH${chNum}_SUMMARY = "${meta.summary}";
export const CH${chNum}_KEY_POINTS = ${JSON.stringify(meta.keyPoints)};
export const CH${chNum}_HANDWRITTEN_NOTES: HandwrittenNote[] = [];
export const CH${chNum}_TIMELINE: TimelineEvent[] = [];
export const CH${chNum}_FLASHCARDS: Flashcard[] = [];

// ==========================================
// INJECTED MCQS FOR CHAPTER ${chNum}
// ==========================================

export const CH${chNum}_L1_MCQS: MCQ[] = ${JSON.stringify(l1, null, 4)};
export const CH${chNum}_L2_MCQS: MCQ[] = ${JSON.stringify(l2, null, 4)};
export const CH${chNum}_L3_MCQS: MCQ[] = ${JSON.stringify(l3, null, 4)};
`;

    fs.writeFileSync(path.join(OUTPUT_DIR, `chapter${chNum}-data.ts`), fileContent);
}

parseMasterSheet();
