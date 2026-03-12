import { GEOGRAPHY_CONFIG } from './geography-config';

export const GEOGRAPHY_REVISION_CHAPTERS = GEOGRAPHY_CONFIG.chapters.map((ch: { chapter: number; topic: string }) => ({
    id: ch.chapter,
    title: ch.topic,
    content: null,
    flashcards: [],
    mcqs: []
}));
