import type { Flashcard } from '@/components/upsc/infrastructure/flashcard/flashcard-utils';
import { CHAPTER_16_FLASHCARDS } from "./flashcards/chapter16-flashcards";
import { CHAPTER_17_FLASHCARDS } from "./flashcards/chapter17-flashcards";

// Combine and Adapt for Week 1 Day 3 (Standardized Format)
const RAW_FLASHCARDS = [
    ...CHAPTER_16_FLASHCARDS,
    ...CHAPTER_17_FLASHCARDS
];

export const DAY3_FLASHCARDS: Flashcard[] = RAW_FLASHCARDS.map(c => ({
    id: String(c.id),
    front: c.question,
    back: c.answer,
    category: (['concept', 'fact', 'article', 'comparison'].includes(c.category.toLowerCase())
        ? c.category.toLowerCase()
        : 'fact') as 'concept' | 'fact' | 'article' | 'comparison',
    source: `Ch ${c.chapterId}`,
    subtopicId: c.category // Store original category as subtopic for context
}));
