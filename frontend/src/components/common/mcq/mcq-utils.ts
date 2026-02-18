
import { MCQ } from "@/types/mcq";

/**
 * Shuffles the options of an MCQ and updates the correctAnswer index.
 */
export function shuffleMCQOptions(mcq: MCQ): MCQ {
    if (!mcq.options || mcq.options.length <= 1) return mcq;

    // Create an array of indices [0, 1, 2, 3]
    const indices = mcq.options.map((_, i) => i);

    // Shuffle indices
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    // Reorder options based on shuffled indices
    const newOptions = indices.map(i => mcq.options[i]);

    // Find where the correct answer moved to
    // The original correct answer was at mcq.correctAnswer
    // We need to find the index in 'indices' that holds the value 'mcq.correctAnswer'
    const newCorrectAnswer = indices.indexOf(mcq.correctAnswer);

    return {
        ...mcq,
        options: newOptions,
        correctAnswer: newCorrectAnswer
    };
}

/**
 * Deduplicates questions based on ID and exact Question text.
 */
export function deduplicateMCQs(mcqs: MCQ[]): MCQ[] {
    const seenIds = new Set<string>();
    const seenTexts = new Set<string>();

    return mcqs.filter(q => {
        // Normalize text for comparison
        const textKey = q.question.trim().toLowerCase();

        if (seenIds.has(String(q.id)) || seenTexts.has(textKey)) {
            return false;
        }

        seenIds.add(String(q.id));
        seenTexts.add(textKey);
        return true;
    });
}
