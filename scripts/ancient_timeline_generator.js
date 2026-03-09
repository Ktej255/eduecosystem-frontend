const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'frontend', 'src', 'components', 'batch1', 'history', 'data', 'mcqs', 'ancient');

/**
 * Extracts years and events from MCQ data (L1, L2, L3) to create a timeline.
 */
function generateTimelineForChapter(chapterId) {
    const filePath = path.join(DATA_DIR, `chapter${chapterId}-data.ts`);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Extract all MCQs from L1, L2, and L3
    let allMCQs = [];
    ['L1', 'L2', 'L3'].forEach(level => {
        const match = content.match(new RegExp(`export const CH${chapterId}_${level}_MCQS: MCQ\\[\\] = (\\[[\\s\\S]*?\\]);`));
        if (match) {
            try {
                allMCQs = allMCQs.concat(JSON.parse(match[1]));
            } catch (e) { }
        }
    });

    if (allMCQs.length === 0) return;

    // Find questions with years or specific dates
    const timelineEvents = [];
    const yearRegex = /\b(\d{1,4}\s?(BC|B\.C\.|AD|A\.D\.)|circa\.?\s?\d{1,4}|(?:\d{3,4}-\d{3,4})\s?(BC|AD)?)\b/gi;

    for (const q of allMCQs) {
        let match = q.question.match(yearRegex);
        if (!match && q.explanation) match = q.explanation.match(yearRegex);

        if (match && timelineEvents.length < 6) {
            let year = match[0].trim();

            // Extract a short event name
            let event = q.options[q.correctIndex].split('(')[0].trim().slice(0, 40);
            if (event.length < 3) event = q.question.slice(0, 40).split('?')[0].trim();

            let description = q.explanation && q.explanation !== "Explanation coming soon."
                ? q.explanation.slice(0, 120).trim()
                : q.question.slice(0, 120).trim();

            if (!timelineEvents.some(e => e.year === year)) {
                timelineEvents.push({ year, event, description });
            }
        }
    }

    // Sort by year
    timelineEvents.sort((a, b) => {
        const getVal = (s) => {
            let n = parseInt(s.replace(/\D/g, ''));
            if (s.toLowerCase().includes('bc')) return -n;
            return n;
        };
        return getVal(a.year) - getVal(b.year);
    });

    // Replace CHX_TIMELINE
    const timelineRegex = new RegExp(`export const CH${chapterId}_TIMELINE: TimelineEvent\\[\\] = (\\[\\]|\\[[\\s\\S]*?\\]);`, 'g');
    const timelineString = `export const CH${chapterId}_TIMELINE: TimelineEvent[] = ${JSON.stringify(timelineEvents, null, 4)};`;

    if (timelineEvents.length > 0) {
        content = content.replace(timelineRegex, timelineString);
        fs.writeFileSync(filePath, content);
        console.log(`Updated timeline for Chapter ${chapterId} (${timelineEvents.length} events)`);
    }
}

for (let i = 1; i <= 27; i++) {
    generateTimelineForChapter(i);
}
