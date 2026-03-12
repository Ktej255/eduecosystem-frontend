import { HISTORY_CONFIG } from './history-config';

// Converts the Planner Config to Revision Registry format
// In a real scenario, this would have actual Flashcards/MCQs imported
export const HISTORY_REVISION_CHAPTERS = HISTORY_CONFIG.chapters.map(ch => ({
    id: ch.chapter,
    title: ch.topic,
    content: null, // Placeholder for text content
    flashcards: [], // Placeholder
    mcqs: [] // Placeholder
}));
