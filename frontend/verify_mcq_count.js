import { ancientChapterData as NEW_ANCIENT_REGISTRY } from './src/components/batch1/history/data/mcqs/ancient/registry.js';
import { contentRegistry as LEGACY_ANCIENT_REGISTRY } from './src/components/batch1/history/data/ancient/content-registry.js';

let total = 0;
const chapters = new Set();

// Count Legacy
Object.keys(LEGACY_ANCIENT_REGISTRY).forEach(ch => {
    const qCount = LEGACY_ANCIENT_REGISTRY[ch].mcqs?.length || 0;
    total += qCount;
    chapters.add(ch);
});

// Count New
Object.keys(NEW_ANCIENT_REGISTRY).forEach(ch => {
    const data = NEW_ANCIENT_REGISTRY[ch];
    const l1 = data[`CH${ch}_L1_MCQS`]?.length || 0;
    const l2 = data[`CH${ch}_L2_MCQS`]?.length || 0;
    const l3 = data[`CH${ch}_L3_MCQS`]?.length || 0;
    total += (l1 + l2 + l3);
    chapters.add(ch);
});

console.log(`Total Chapters: ${chapters.size}`);
console.log(`Total Ancient MCQs (Combined): ${total}`);
