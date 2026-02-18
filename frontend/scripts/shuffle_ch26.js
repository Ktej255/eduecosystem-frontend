
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/batch1/history/data/modern/chapter26/mcqs.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Regex to find the start of the array
const startRegex = /export const MODERN_CHAPTER_26_MCQS: any\[\] = \[\s*/;
const match = fileContent.match(startRegex);

if (!match) {
    console.error("Could not find start of array");
    process.exit(1);
}

const dataStartIndex = match.index + match[0].length;
// Extract the array content (roughly) - assuming it ends with '];' at the end of the file
// This is a bit risky if there are other exports, but usually these files are single exports.
// Better approach: Use a true parser or just manual slicing if we know the structure.
// Given the previous view, it's a list of objects.

// Let's rely on the fact that we saw the bad questions start around line 229.
// We'll read the file line by line.

const lines = fileContent.split('\n');
const validLines = [];
let insideRun = false;

// We know lines 1-228 are good. Let's verify line 229 starts the garbage.
// Line 229:     {
// Line 230:         id: 'gen-ch26-Easy-0-1771158192012',

const newQuestions = [];

// Helper to shuffle options
function shuffleQuestion(q) {
    const options = q.options;
    const correctOption = options[q.correctAnswer];

    // Create pairs of [option, isCorrect]
    const pairs = options.map((opt, idx) => ({ opt, isCorrect: idx === q.correctAnswer }));

    // Shuffle pairs
    for (let i = pairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
    }

    // Reconstruct
    q.options = pairs.map(p => p.opt);
    q.correctAnswer = pairs.findIndex(p => p.isCorrect);
    return q;
}

// Extract objects using a safer evaluation
// We will construct a valid JSON-like string from the first part of the file and eval it.
// The file has imports, so we can't eval the whole thing.
// We'll extract lines 3 to 228 (inclusive of the closing brace of the last valid object).

// Looking at the file content from previous turn:
// Line 3: export const MODERN_CHAPTER_26_MCQS: any[] = [
// ...
// Line 228:     },
// Line 229:     {
// Line 230:         id: 'gen-ch26-Easy-0...

// We will take everything up to line 228, add a closing '];' and then parse/eval.
// Wait, evaling TS might be hard if types are present, but this file looks like pure JS object literals inside TS.

const validContentLines = lines.slice(0, 228);
// Add the closing bracket
validContentLines.push('];');

const validContentString = validContentLines.join('\n').replace(/export const MODERN_CHAPTER_26_MCQS: any\[\] = /, 'const questions = ');

// Now we can try to evaluate this code to get the objects
// We need to mock 'Question' or remove the import
const evalCode = validContentString.replace("import { Question } from '../../../../types';", "");

let questions = [];
try {
    eval(evalCode);
    // Now 'questions' variable should hold the array.
    // wait, eval declares 'const questions', but it's block scoped to eval? No, eval in non-strict mode...
    // simpler:
    // const questions = ...
    // return questions;
} catch (e) {
    // If eval fails, we might just have to do string manipulation which is safer anyway.
    console.log("Eval approach failed, falling back to string parsing or manual construction is risky.");
    // Actually, since I'm running this in node, I can just require the file if I strip the TS types? 
    // No, 'import' statement will fail in node CommonJS.
}

// Plan B: Regex/String manipulation to parse the objects is flaky.
// Plan C: Just keep lines 1-228. 
// AND then apply shuffling via regex?
// "correctAnswer: 0," -> we need to change this.
// "options: [ ... ]," -> we need to shuffle this.

// Let's blindly keep lines 1-228 as the "Good Data".
// We will discard everything after line 228 except the final "];" and any trailing newlines (if we want to be clean).
// BUT we still need to shuffle options for the good data because the user says "ALL QUE HAVE OPTION a AS RIGHT ANS".
// Checking lines 1-228 from the view_file output...
// Line 8: correctAnswer: 0
// Line 17: correctAnswer: 0
// ...
// Line 224: correctAnswer: 0
// YES, even the manual questions have 0 as the answer! They were likely imported from a source where A was always correct.

// Conclusion: I MUST parse and shuffle these questions.
// I will use a temporary TS file to export the data, run it with ts-node (or compile it), get the JSON, process it, and write it back.
// Or simpler: Read the file, use regex to match each object structure?
// The structure is very regular.
// {
//    id: '...',
//    question: "...",
//    options: [...],
//    correctAnswer: 0,
//    ...
// }

function parseAndShuffle() {
    let content = lines.slice(3, 229).join('\n'); // Lines inside the array brackets
    // We need to split by "}," to get individual objects?
    // This is getting complicated to robustly parse with regex.

    // ALTERNATIVE: Use the existing file. Compile it to JS. Require it. Process it. Write it back.
    // I can use `esbuild` to bundle just this file to a temp JS file (cjs), then require it!
    // This handles imports and types.
}

// This script will be run by the agent.
console.log("Starting data shuffle workflow...");
