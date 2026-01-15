import { ECONOMY_CONFIG } from './economy-config';

export const ECONOMY_REVISION_CHAPTERS = ECONOMY_CONFIG.chapters.map(ch => ({
    id: ch.chapter,
    title: ch.topic,
    content: null,
    flashcards: [],
    mcqs: []
}));
