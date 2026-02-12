
import { formatQuestionText } from './src/lib/mcq-formatter';

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

console.log("Running MCQ Formatter Tests...\n");

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
