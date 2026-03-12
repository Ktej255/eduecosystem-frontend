import { ENVIRONMENT_CONFIG } from './environment-config';

export const ENVIRONMENT_REVISION_CHAPTERS = ENVIRONMENT_CONFIG.chapters.map((ch: { chapter: number; topic: string }) => ({
    id: ch.chapter,
    title: ch.topic,
    content: null,
    flashcards: [],
    mcqs: []
}));
