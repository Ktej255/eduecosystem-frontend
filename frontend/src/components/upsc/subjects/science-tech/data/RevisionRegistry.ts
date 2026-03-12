import { SCIENCE_TECH_CONFIG } from './science-tech-config';

export const SCIENCE_TECH_REVISION_CHAPTERS = SCIENCE_TECH_CONFIG.chapters.map((ch: any) => ({
    id: ch.chapter,
    title: ch.topic,
    content: null,
    flashcards: [],
    mcqs: []
}));
