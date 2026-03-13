import { Flashcard } from '../../polity/data/polity-flashcards-data';

/**
 * Dynamically loads Flashcards for a given History chapter within a specific section.
 */
export async function loadHistoryFlashcards(chapterId: number, section: string = 'modern'): Promise<Flashcard[]> {
    try {
        const dir = section.toLowerCase().replace(/\s+/g, '_');
        const module = await import(`./flashcards/${dir}/chapter${chapterId}.ts`);

        const flashcards =
            module[`MEDIEVAL_CHAPTER_${chapterId}_FLASHCARDS`] ||
            module[`chapter${chapterId}Flashcards`] ||
            module[`HISTORY_CH${chapterId}_FLASHCARDS`] ||
            module.default ||
            [];

        // Map to standard Flashcard interface if needed (front/back vs question/answer)
        return flashcards.map((fc: any) => ({
            ...fc,
            question: fc.question || fc.front,
            answer: fc.answer || fc.back,
            section: section
        }));
    } catch (error) {
        console.warn(`Flashcard content not yet available for ${section} chapter ${chapterId}.`);
        return [];
    }
}

export async function loadCompiledFlashcards(chapterIds: number[], section: string = 'modern'): Promise<Flashcard[]> {
    const allFlashcards: Flashcard[] = [];

    for (const id of chapterIds) {
        const chapterFc = await loadHistoryFlashcards(id, section);
        allFlashcards.push(...chapterFc);
    }

    return allFlashcards.sort(() => Math.random() - 0.5);
}
