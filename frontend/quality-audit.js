const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, 'src/components');

// ==========================================
// QUALITY AUDIT ENGINE
// ==========================================

function auditTSFile(filePath, format) {
    const content = fs.readFileSync(filePath, 'utf8');
    const issues = [];
    let totalQs = 0;
    let missingExplanation = 0;
    let missingOptions = 0;
    let truncated = 0;
    let difficultyCount = { easy: 0, medium: 0, hard: 0, moderate: 0, tough: 0, other: 0 };
    let emptyExplanation = 0;
    let shortQuestion = 0;
    let missingCorrectAnswer = 0;

    if (format === 'ancient') {
        // Ancient: id "ch1-d-X", question, options[], correctIndex, explanation, difficulty, tags
        const qBlocks = content.match(/"id"\s*:\s*"[^"]+"\s*,[\s\S]*?(?=\{\s*"id"|$)/g) || [];
        totalQs = (content.match(/"id"\s*:\s*"ch\d+-d-/g) || []).length + (content.match(/"id"\s*:\s*"ch\d+-d-new-/g) || []).length;
        // Recount using question matches
        totalQs = (content.match(/"question"\s*:\s*"/g) || []).length;
        
        // Check for truncated questions (question text contains answer text or multiple Q's in one)
        const questions = content.match(/"question"\s*:\s*"([^"]+)"/g) || [];
        questions.forEach((q, idx) => {
            const qText = q.replace(/"question"\s*:\s*"/, '').replace(/"$/, '');
            if (qText.length < 20) { shortQuestion++; issues.push(`Q${idx+1}: Very short question (${qText.length} chars)`); }
            if (qText.includes('Answer:') || qText.includes('Level 2:') || qText.includes('Level 3:')) {
                truncated++;
                issues.push(`Q${idx+1}: Contains embedded answer/level text — MALFORMED`);
            }
        });

        // Check explanations
        const explanations = content.match(/"explanation"\s*:\s*"([^"]*)"/g) || [];
        explanations.forEach((e, idx) => {
            const eText = e.replace(/"explanation"\s*:\s*"/, '').replace(/"$/, '');
            if (eText.length === 0) emptyExplanation++;
        });

        // Check difficulty
        const diffs = content.match(/"difficulty"\s*:\s*"([^"]+)"/g) || [];
        diffs.forEach(d => {
            const val = d.replace(/"difficulty"\s*:\s*"/, '').replace(/"$/, '').toLowerCase();
            if (difficultyCount[val] !== undefined) difficultyCount[val]++;
            else difficultyCount.other++;
        });

    } else if (format === 'medieval') {
        // Medieval: id "qN", question, options[{id,text}], correctAnswer "a"/"b"/"c"/"d", explanation, difficulty, tags
        totalQs = (content.match(/id:\s*"q\d+"/g) || []).length;
        
        const questions = content.match(/question:\s*"([^"]+)"/g) || [];
        questions.forEach((q, idx) => {
            const qText = q.replace(/question:\s*"/, '').replace(/"$/, '');
            if (qText.length < 20) { shortQuestion++; }
        });

        const explanations = content.match(/explanation:\s*"([^"]*)"/g) || [];
        explanations.forEach(e => {
            const eText = e.replace(/explanation:\s*"/, '').replace(/"$/, '');
            if (eText.length === 0) emptyExplanation++;
        });

        const diffs = content.match(/difficulty:\s*"([^"]+)"/g) || [];
        diffs.forEach(d => {
            const val = d.replace(/difficulty:\s*"/, '').replace(/"$/, '').toLowerCase();
            if (difficultyCount[val] !== undefined) difficultyCount[val]++;
            else difficultyCount.other++;
        });

    } else if (format === 'modern') {
        // Modern: id 'N-N', question, options[], correctAnswer (number), explanation, chapterId
        totalQs = (content.match(/id:\s*'[^']+'/g) || []).length;
        
        const questions = content.match(/question:\s*"([^"]+)"/g) || [];
        questions.forEach((q, idx) => {
            const qText = q.replace(/question:\s*"/, '').replace(/"$/, '');
            if (qText.length < 20) { shortQuestion++; }
        });

        const explanations = content.match(/explanation:\s*"([^"]*)"/g) || [];
        explanations.forEach(e => {
            const eText = e.replace(/explanation:\s*"/, '').replace(/"$/, '');
            if (eText.length === 0) emptyExplanation++;
        });

        // Modern doesn't have difficulty field typically
        const diffs = content.match(/difficulty:\s*["']([^"']+)["']/g) || [];
        diffs.forEach(d => {
            const val = d.replace(/difficulty:\s*["']/, '').replace(/["']$/, '').toLowerCase();
            if (difficultyCount[val] !== undefined) difficultyCount[val]++;
            else difficultyCount.other++;
        });
    
    } else if (format === 'geography') {
        totalQs = (content.match(/id:\s*["'][^"']+["']/g) || []).length;
        
        const questions = content.match(/question:\s*"([^"]+)"/g) || [];
        questions.forEach((q, idx) => {
            const qText = q.replace(/question:\s*"/, '').replace(/"$/, '');
            if (qText.length < 20) { shortQuestion++; }
        });

        const explanations = content.match(/explanation:\s*"([^"]*)"/g) || [];
        explanations.forEach(e => {
            const eText = e.replace(/explanation:\s*"/, '').replace(/"$/, '');
            if (eText.length === 0) emptyExplanation++;
        });

        const diffs = content.match(/difficulty:\s*["']([^"']+)["']/g) || [];
        diffs.forEach(d => {
            const val = d.replace(/difficulty:\s*["']/, '').replace(/["']$/, '').toLowerCase();
            if (difficultyCount[val] !== undefined) difficultyCount[val]++;
            else difficultyCount.other++;
        });
    
    } else if (format === 'polity') {
        totalQs = (content.match(/["']?question["']?\s*:\s*["'`]/g) || []).length;

        const explanations = content.match(/["']?explanation["']?\s*:\s*["']([^"']*)["']/g) || [];
        explanations.forEach(e => {
            const eText = e.replace(/["']?explanation["']?\s*:\s*["']/, '').replace(/["']$/, '');
            if (eText.length === 0) emptyExplanation++;
        });

        const diffs = content.match(/["']?difficulty["']?\s*:\s*["']([^"']+)["']/g) || [];
        diffs.forEach(d => {
            const val = d.replace(/["']?difficulty["']?\s*:\s*["']/, '').replace(/["']$/, '').toLowerCase();
            if (difficultyCount[val] !== undefined) difficultyCount[val]++;
            else difficultyCount.other++;
        });
    }

    return {
        totalQs,
        emptyExplanation,
        shortQuestion,
        truncated,
        difficultyCount,
        issues,
        fileSize: (fs.statSync(filePath).size / 1024).toFixed(0) + 'KB'
    };
}

function auditDir(dirPath, format, chapterPattern) {
    const results = [];
    try {
        const files = fs.readdirSync(dirPath).filter(f => f.match(chapterPattern));
        files.sort((a, b) => {
            const na = parseInt(a.match(/\d+/)[0]);
            const nb = parseInt(b.match(/\d+/)[0]);
            return na - nb;
        });
        files.forEach(f => {
            const r = auditTSFile(path.join(dirPath, f), format);
            r.fileName = f;
            results.push(r);
        });
    } catch(e) {
        console.log('  ERROR:', e.message);
    }
    return results;
}

// ==========================================
// RUN AUDITS
// ==========================================

console.log('='.repeat(70));
console.log('  DEEP QUALITY AUDIT — 5 CORE SUBJECTS');
console.log('  Date: March 13, 2026');
console.log('='.repeat(70));

// ----- ANCIENT HISTORY -----
console.log('\n' + '='.repeat(50));
console.log('  1. ANCIENT HISTORY (R.S. Sharma, 27 Chapters)');
console.log('='.repeat(50));
const ancientResults = auditDir(
    path.join(BASE, 'upsc/subjects/history/data/mcqs/ancient'),
    'ancient',
    /chapter\d+-data\.ts/
);
let aTotal = 0, aTruncated = 0, aEmptyExp = 0, aShort = 0;
ancientResults.forEach(r => {
    const diffStr = Object.entries(r.difficultyCount).filter(([k,v]) => v > 0).map(([k,v]) => `${k}:${v}`).join(' ');
    const flags = [];
    if (r.truncated > 0) flags.push(`⚠️ ${r.truncated} MALFORMED`);
    if (r.emptyExplanation > 0) flags.push(`📝 ${r.emptyExplanation} no-explanation`);
    if (r.shortQuestion > 0) flags.push(`📏 ${r.shortQuestion} short`);
    console.log(`  ${r.fileName.padEnd(22)} ${String(r.totalQs).padStart(4)} Qs | ${r.fileSize.padStart(6)} | ${diffStr} ${flags.length > 0 ? '| ' + flags.join(', ') : ''}`);
    aTotal += r.totalQs;
    aTruncated += r.truncated;
    aEmptyExp += r.emptyExplanation;
    aShort += r.shortQuestion;
});
console.log(`  ${'TOTAL'.padEnd(22)} ${String(aTotal).padStart(4)} Qs | Truncated: ${aTruncated} | Empty Explanations: ${aEmptyExp} | Short: ${aShort}`);

// ----- MEDIEVAL HISTORY -----
console.log('\n' + '='.repeat(50));
console.log('  2. MEDIEVAL HISTORY (Satish Chandra, 20 Chapters)');
console.log('='.repeat(50));
const medievalResults = auditDir(
    path.join(BASE, 'upsc/subjects/history/data/mcqs/medieval'),
    'medieval',
    /chapter\d+\.ts/
);
let mTotal = 0, mEmptyExp = 0;
medievalResults.forEach(r => {
    const diffStr = Object.entries(r.difficultyCount).filter(([k,v]) => v > 0).map(([k,v]) => `${k}:${v}`).join(' ');
    const flags = [];
    if (r.emptyExplanation > 0) flags.push(`📝 ${r.emptyExplanation} no-explanation`);
    console.log(`  ${r.fileName.padEnd(16)} ${String(r.totalQs).padStart(4)} Qs | ${r.fileSize.padStart(6)} | ${diffStr} ${flags.length > 0 ? '| ' + flags.join(', ') : ''}`);
    mTotal += r.totalQs;
    mEmptyExp += r.emptyExplanation;
});
console.log(`  ${'TOTAL'.padEnd(16)} ${String(mTotal).padStart(4)} Qs | Empty Explanations: ${mEmptyExp}`);

// ----- MODERN HISTORY -----
console.log('\n' + '='.repeat(50));
console.log('  3. MODERN HISTORY (Spectrum, 39 Chapters)');
console.log('='.repeat(50));
const modernResults = auditDir(
    path.join(BASE, 'upsc/subjects/history/data/mcqs/modern'),
    'modern',
    /chapter\d+\.ts/
);
let modTotal = 0, modEmptyExp = 0;
modernResults.forEach(r => {
    const diffStr = Object.entries(r.difficultyCount).filter(([k,v]) => v > 0).map(([k,v]) => `${k}:${v}`).join(' ');
    const flags = [];
    if (r.emptyExplanation > 0) flags.push(`📝 ${r.emptyExplanation} no-explanation`);
    console.log(`  ${r.fileName.padEnd(16)} ${String(r.totalQs).padStart(4)} Qs | ${r.fileSize.padStart(6)} | ${diffStr} ${flags.length > 0 ? '| ' + flags.join(', ') : ''}`);
    modTotal += r.totalQs;
    modEmptyExp += r.emptyExplanation;
});
console.log(`  ${'TOTAL'.padEnd(16)} ${String(modTotal).padStart(4)} Qs | Empty Explanations: ${modEmptyExp}`);

// ----- GEOGRAPHY -----
console.log('\n' + '='.repeat(50));
console.log('  4. GEOGRAPHY');
console.log('='.repeat(50));
const geoCore = auditTSFile(path.join(BASE, 'batch1/geography/data/mcqs/geography-mcqs.ts'), 'geography');
const diffStr = Object.entries(geoCore.difficultyCount).filter(([k,v]) => v > 0).map(([k,v]) => `${k}:${v}`).join(' ');
console.log(`  geography-mcqs.ts    ${String(geoCore.totalQs).padStart(4)} Qs | ${geoCore.fileSize.padStart(6)} | ${diffStr}`);

// Check NCERT JSON quality
const ncertData = JSON.parse(fs.readFileSync(path.join(BASE, 'batch1/geography/data/mcqs/ncert-mcqs.json'), 'utf8'));
let ncertMissingExp = 0, ncertMissingOpts = 0, ncertShort = 0;
const ncertDiff = { easy: 0, medium: 0, hard: 0, other: 0 };
ncertData.forEach((q, idx) => {
    if (!q.explanation || q.explanation.length === 0) ncertMissingExp++;
    if (!q.options || q.options.length < 4) ncertMissingOpts++;
    if (!q.question || q.question.length < 20) ncertShort++;
    const d = (q.difficulty || '').toLowerCase();
    if (ncertDiff[d] !== undefined) ncertDiff[d]++;
    else ncertDiff.other++;
});
const ncertDiffStr = Object.entries(ncertDiff).filter(([k,v]) => v > 0).map(([k,v]) => `${k}:${v}`).join(' ');
const ncertFlags = [];
if (ncertMissingExp > 0) ncertFlags.push(`📝 ${ncertMissingExp} no-explanation`);
if (ncertMissingOpts > 0) ncertFlags.push(`⚠️ ${ncertMissingOpts} <4 options`);
if (ncertShort > 0) ncertFlags.push(`📏 ${ncertShort} short`);
console.log(`  ncert-mcqs.json      ${String(ncertData.length).padStart(4)} Qs | ${ncertDiffStr} ${ncertFlags.length > 0 ? '| ' + ncertFlags.join(', ') : ''}`);

// Check NCERT by chapter distribution
const ncertByChapter = {};
ncertData.forEach(q => { ncertByChapter[q.chapter] = (ncertByChapter[q.chapter] || 0) + 1; });
console.log('  NCERT chapter distribution:', JSON.stringify(ncertByChapter));

// Check UPSC NCERT
try {
    const upscNcert = JSON.parse(fs.readFileSync(path.join(BASE, 'upsc/subjects/geography/data/mcqs/ncert-mcqs.json'), 'utf8'));
    let upscMissingExp = 0;
    upscNcert.forEach(q => { if (!q.explanation || q.explanation.length === 0) upscMissingExp++; });
    console.log(`  upsc/ncert-mcqs.json ${String(upscNcert.length).padStart(4)} Qs | ${upscMissingExp > 0 ? '📝 ' + upscMissingExp + ' no-explanation' : 'All have explanations'}`);
} catch(e) {}

// Geo module distribution
const geoContent = fs.readFileSync(path.join(BASE, 'batch1/geography/data/mcqs/geography-mcqs.ts'), 'utf8');
const modules = {};
(geoContent.match(/module:\s*["']([^"']+)["']/g)||[]).forEach(m => {
    const mod = m.replace(/module:\s*["']/, '').replace(/["']$/, '');
    modules[mod] = (modules[mod] || 0) + 1;
});
console.log('  Module distribution:', JSON.stringify(modules));

// ----- POLITY -----
console.log('\n' + '='.repeat(50));
console.log('  5. POLITY (Laxmikanth)');
console.log('='.repeat(50));
const polityDir = path.join(BASE, 'batch1/polity/data/mcqs');
const polityFiles = fs.readdirSync(polityDir).filter(f => f.match(/chapter\d+.*\.ts/));
polityFiles.sort((a, b) => {
    const na = parseInt(a.match(/\d+/)[0]);
    const nb = parseInt(b.match(/\d+/)[0]);
    return na - nb;
});
let pTotal = 0, pEmptyExp = 0;
const polityBuckets = { '40+': 0, '20-39': 0, '10-19': 0, '5-9': 0, '<5': 0 };
polityFiles.forEach(f => {
    const r = auditTSFile(path.join(polityDir, f), 'polity');
    pTotal += r.totalQs;
    pEmptyExp += r.emptyExplanation;
    if (r.totalQs >= 40) polityBuckets['40+']++;
    else if (r.totalQs >= 20) polityBuckets['20-39']++;
    else if (r.totalQs >= 10) polityBuckets['10-19']++;
    else if (r.totalQs >= 5) polityBuckets['5-9']++;
    else polityBuckets['<5']++;
});
console.log(`  Total chapter files: ${polityFiles.length}`);
console.log(`  Total MCQs: ${pTotal}`);
console.log(`  Empty explanations: ${pEmptyExp}`);
console.log('  Distribution by MCQ count:');
Object.entries(polityBuckets).forEach(([k,v]) => console.log(`    ${k} MCQs: ${v} chapters`));

// Polity Saturday test
const satResult = auditTSFile(path.join(BASE, 'upsc/platform/data/saturday-test-data.ts'), 'polity');
console.log(`  Saturday test: ${satResult.totalQs} Qs | Empty exp: ${satResult.emptyExplanation}`);

// batch1-1 polity chapters
const b11Dir = path.join(BASE, 'batch1-1/polity/data/chapters');
if (fs.existsSync(b11Dir)) {
    const b11Files = fs.readdirSync(b11Dir).filter(f => f.endsWith('.ts'));
    let b11Total = 0, b11EmptyExp = 0;
    b11Files.forEach(f => {
        const content = fs.readFileSync(path.join(b11Dir, f), 'utf8');
        b11Total += (content.match(/["']?question["']?\s*:\s*["'`]/g) || []).length;
    });
    console.log(`  batch1-1 chapters: ${b11Files.length} files, ${b11Total} MCQs`);
}

console.log('\n' + '='.repeat(70));
console.log('  AUDIT COMPLETE');
console.log('='.repeat(70));
