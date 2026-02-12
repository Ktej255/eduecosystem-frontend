
/**
 * Formats question text to ensure numbered statements appear on new lines.
 * Handles patterns like "1.", "2.", "(a)", "(b)", "Statement I:", etc.
 */
export function formatQuestionText(text: string): string[] {
    if (!text) return [];

    // primary split by newline first to preserve existing formatting
    let lines = text.split('\n');

    // re-process lines to catch inline numbering
    const processedLines: string[] = [];

    const statementPatterns = [
        /(\s\d+\.)\s/g,        // " 1. ", " 2. " (Numbers)
        /(\([a-zA-Z]\))\s/g,   // "(a)", "(b)" (Letters in brackets)
        /(Statement\s+[IVX]+:\s)/g // "Statement I: ", "Statement II: "
    ];

    lines.forEach(line => {
        let currentLine = line;

        // Check if the line contains multiple numbered statements inline
        // Example: "1. Statement one. 2. Statement two."

        // We replace the patterns with a newline marker to split later
        // But we must be careful not to match the start of the line if it's already formatted

        // Strategy: Replace matches that are NOT at the start of the string

        // This regex lookbehind simulation helps find patterns preceded by spaces
        // Since JS lookbehind support varies, we use capture groups

        // Simple approach: Replace " 1. " with "\n1. "
        statementPatterns.forEach(pattern => {
            currentLine = currentLine.replace(pattern, (match) => {
                return `\n${match.trim()} `;
            });
        });

        // Split by the newlines we inserted and existing ones
        const split = currentLine.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        processedLines.push(...split);
    });

    return processedLines;
}
