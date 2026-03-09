const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'frontend', 'src', 'components', 'batch1', 'history', 'data', 'mcqs', 'ancient');
const MASTER_SHEET = 'D:\\Graphology\\Paid Students\\Mians ready Dec 2025\\Morning Batch\\prelims\\History\\Ancient History\\Ancient History MCQ Master Sheet.txt';

const titles = {
    1: "The Importance of Ancient Indian History",
    2: "The Construction of Ancient Indian History",
    3: "Geographical Setting",
    4: "Ecology and Environment",
    5: "The Linguistic Background",
    6: "Human Evolution: The Old Stone Age",
    7: "The Neolithic Age: First Food Producers",
    8: "Chalcolithic Cultures",
    9: "Harappan Culture: Bronze Age Urbanization",
    10: "Advent of the Aryans and the Age of the Rig Veda",
    11: "The Later Vedic Phase",
    12: "Jainism and Buddhism",
    13: "Territorial States and the Rise of Magadha",
    14: "The Maurya Age",
    15: "Significance of Maurya Rule",
    16: "Central Asian Contact and its Results",
    17: "The Age of the Satavahanas",
    18: "The Dawn of History in the Deep South",
    19: "Crafts, Trade, and Towns in the Post-Maurya Age",
    20: "The Rise and Growth of the Gupta Empire",
    21: "Life in the Gupta Age",
    22: "Spread of Civilization in Eastern India",
    23: "Harshavardhana and His Times",
    24: "Formation of New States and Rural Expansion in the Peninsula",
    25: "Developments in Philosophy",
    26: "Cultural Interaction with South-East and Central Asia",
    27: "From Ancient to Medieval"
};

/**
 * Intelligently generates Flashcards and Key Points from MCQ data.
 */
function generateContentForChapter(chapterId) {
    const filePath = path.join(DATA_DIR, `chapter${chapterId}-data.ts`);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Extract L1 and L2 MCQs
    const l1Match = content.match(new RegExp(`export const CH${chapterId}_L1_MCQS: MCQ\\[\\] = (\\[[\\s\\S]*?\\]);`));
    const l2Match = content.match(new RegExp(`export const CH${chapterId}_L2_MCQS: MCQ\\[\\] = (\\[[\\s\\S]*?\\]);`));

    if (!l1Match) {
        console.log(`Could not find MCQs for Chapter ${chapterId}`);
        return;
    }

    let mcqs = [];
    try {
        mcqs = JSON.parse(l1Match[1]);
        if (l2Match) {
            mcqs = mcqs.concat(JSON.parse(l2Match[1]));
        }
    } catch (e) {
        console.log(`Failed to parse MCQs for Ch ${chapterId}: ${e.message}`);
        return;
    }

    // Generate Flashcards (Top 10 most factual MCQs)
    const flashcards = mcqs.slice(0, 10).map(q => {
        let front = q.question.replace(/\?$/, '').trim() + '?';
        let back = q.options[q.correctIndex];

        let explanation = q.explanation && q.explanation !== "Explanation coming soon." ? q.explanation : "";
        if (explanation) {
            back = `${back}\n\nContext: ${explanation}`;
        }

        return {
            front,
            back,
            tags: q.tags || ['history']
        };
    });

    // Generate Key Points (Select unique facts)
    const keyPoints = [];
    const seenFacts = new Set();

    for (const q of mcqs) {
        if (keyPoints.length >= 8) break;

        let fact = "";
        let explanation = q.explanation && q.explanation !== "Explanation coming soon." ? q.explanation : "";

        if (explanation) {
            fact = explanation.replace(/^Explanation:\s*/i, '').trim();
        } else {
            // Synthesize fact: Question + Answer
            let qText = q.question.replace(/\?$/, '').trim();
            let ans = q.options[q.correctIndex];

            // Heuristic for cleaning up "Which/Who/What"
            if (/^(Which|Who|What|Identify|The)\s/i.test(qText)) {
                fact = `${qText} is ${ans}.`;
            } else {
                fact = `${qText}: ${ans}.`;
            }

            // Clean up common synth artifacts
            fact = fact.replace(/\sis\sis\s/gi, ' is ')
                .replace(/: is\s/gi, ': ')
                .replace(/\sis\s(.*)\?/gi, ' is $1');
        }

        if (fact && fact.length > 20 && fact.length < 250 && !seenFacts.has(fact)) {
            keyPoints.push(fact);
            seenFacts.add(fact);
        }
    }

    if (keyPoints.length < 3) {
        keyPoints.push("Detailed key points are currently being extracted from RS Sharma's records.");
    }

    // Update the file
    // Replace CHX_SUMMARY
    const title = titles[chapterId] || `Chapter ${chapterId}`;
    const summaryRegex = new RegExp(`export const CH${chapterId}_SUMMARY = ".*?";`, 'g');
    const summaryString = `export const CH${chapterId}_SUMMARY = "${title}";`;
    content = content.replace(summaryRegex, summaryString);

    // Replace CHX_FLASHCARDS
    const flashcardRegex = new RegExp(`export const CH${chapterId}_FLASHCARDS: Flashcard\\[\\] = (\\[\\]|(\\[[\\s\\S]*?\\]));`, 'g');
    const flashcardString = `export const CH${chapterId}_FLASHCARDS: Flashcard[] = ${JSON.stringify(flashcards, null, 4)};`;
    content = content.replace(flashcardRegex, flashcardString);

    // Replace CHX_KEY_POINTS
    const keyPointsRegex = new RegExp(`export const CH${chapterId}_KEY_POINTS = (\\[.*?\\]|(\\[[\\s\\S]*?\\]));`, 'g');
    const keyPointsString = `export const CH${chapterId}_KEY_POINTS = ${JSON.stringify(keyPoints, null, 4)};`;
    content = content.replace(keyPointsRegex, keyPointsString);

    fs.writeFileSync(filePath, content);
    console.log(`Updated Chapter ${chapterId}: ${title}`);
}

// Run for all chapters
for (let i = 1; i <= 27; i++) {
    generateContentForChapter(i);
}
