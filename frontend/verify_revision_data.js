
const { MODERN_HISTORY_REVISION } = require('./src/components/batch1/history/revision/modern-revision-data.ts');

console.log("Loading Revision Data...");

if (!MODERN_HISTORY_REVISION) {
    console.error("MODERN_HISTORY_REVISION is undefined");
    process.exit(1);
}

if (!MODERN_HISTORY_REVISION.timeline) {
    console.error("Timeline missing");
} else {
    console.log(`Timeline events: ${MODERN_HISTORY_REVISION.timeline.length}`);
}

if (!MODERN_HISTORY_REVISION.personalities) {
    console.error("Personalities missing");
} else {
    console.log(`Personalities: ${MODERN_HISTORY_REVISION.personalities.length}`);
}

if (!MODERN_HISTORY_REVISION.battles) {
    console.error("Battles missing");
} else {
    console.log(`Battles: ${MODERN_HISTORY_REVISION.battles.length}`);
    MODERN_HISTORY_REVISION.battles.forEach((b, i) => {
        if (!b.parties || typeof b.parties !== 'string') {
            console.error(`Battle ${i} missing parties string:`, b);
        } else if (!b.parties.includes(' vs ')) {
            console.warn(`Battle ${i} parties string might not split correctly (missing ' vs '):`, b.parties);
        }
    });
}

if (!MODERN_HISTORY_REVISION.traps) {
    console.error("Traps missing");
} else {
    console.log(`Traps: ${MODERN_HISTORY_REVISION.traps.length}`);
}

console.log("Verification Complete");
