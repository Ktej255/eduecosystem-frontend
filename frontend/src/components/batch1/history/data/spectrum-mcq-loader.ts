import { MCQ } from "@/types/mcq";

/**
 * Dynamically loads MCQs for a given Spectrum History chapter.
 * Handles the inconsistent naming between chapterXMCQs and HISTORY_CHX_MCQS.
 */
/**
 * Dynamically loads MCQs for a given History chapter within a specific section.
 */
export async function loadHistoryMCQs(chapterId: number, section: string = 'modern'): Promise<MCQ[]> {
    try {
        // Normalize section name for directory matching
        const dir = section.toLowerCase().replace(/\s+/g, '_');
        const module = await import(`./mcqs/${dir}/chapter${chapterId}.ts`);

        const questions =
            module[`chapter${chapterId}MCQs`] ||
            module[`HISTORY_CH${chapterId}_MCQS`] ||
            module.default ||
            [];

        return questions.map((q: MCQ) => ({
            ...q,
            chapterId: chapterId,
            section: section // Inject section for tracking
        }));
    } catch (error) {
        console.warn(`MCQ content not yet available for ${section} chapter ${chapterId}.`);
        return [];
    }
}

/**
 * Loads and compiles MCQs for multiple chapters.
 */
export async function loadCompiledMCQs(chapterIds: number[], limit: number = 60, section: string = 'modern'): Promise<MCQ[]> {
    const allQuestions: MCQ[] = [];

    for (const id of chapterIds) {
        const chapterQs = await loadHistoryMCQs(id, section);
        allQuestions.push(...chapterQs);
    }

    if (allQuestions.length === 0) return [];

    // Shuffle and limit
    return allQuestions
        .sort(() => Math.random() - 0.5)
        .slice(0, limit);
}
