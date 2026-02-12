
// Logic from mcq-formatter.ts
function formatQuestionText(text) {
    if (!text) return [];

    let lines = text.split('\n');
    const processedLines = [];

    const statementPatterns = [
        /(\s\d+\.)\s/g,        // " 1. ", " 2. " (Numbers)
        /(\([a-zA-Z]\))\s/g,   // "(a)", "(b)" (Letters in brackets)
        /(Statement\s+[IVX]+:\s)/g // "Statement I: ", "Statement II: "
    ];

    lines.forEach(line => {
        let currentLine = line;

        statementPatterns.forEach(pattern => {
            currentLine = currentLine.replace(pattern, (match) => {
                return `\n${match.trim()} `;
            });
        });

        const split = currentLine.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        processedLines.push(...split);
    });

    return processedLines;
}

// Test Cases
const testCases = [
    {
        input: "Consider the following statements: 1. Statement one. 2. Statement two. Which are correct?",
        expectedIncludes: ["1. Statement one.", "2. Statement two."]
    },
    {
        input: "Match the following: (a) Option A (b) Option B (c) Option C",
        expectedIncludes: ["(a) Option A", "(b) Option B", "(c) Option C"]
    },
    {
        input: "Statement I: The sky is blue. Statement II: The ocean is deep.",
        expectedIncludes: ["Statement I: The sky is blue.", "Statement II: The ocean is deep."]
    }
];

console.log("Running MCQ Formatter Tests (JS)...\n");

let passed = 0;
testCases.forEach((tc, idx) => {
    const result = formatQuestionText(tc.input);
    console.log(`Test Case ${idx + 1}:`);
    console.log("Input:", tc.input);
    console.log("Output:", result);

    const allPresent = tc.expectedIncludes.every(exp => result.some(line => line.includes(exp.trim())));

    if (allPresent && result.length > 1) {
        console.log("✅ PASSED");
        passed++;
    } else {
        console.log("❌ FAILED");
    }
    console.log("-".repeat(20));
});

if (passed === testCases.length) {
    console.log("\nAll tests passed!");
    process.exit(0);
} else {
    console.log(`\n${testCases.length - passed} tests failed.`);
    process.exit(1);
}
