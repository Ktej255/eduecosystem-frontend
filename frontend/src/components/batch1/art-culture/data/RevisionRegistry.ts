import { ART_CULTURE_CONFIG } from './art-culture-config';

export const ART_CULTURE_REVISION_CHAPTERS = ART_CULTURE_CONFIG.chapters.map(ch => ({
    id: ch.chapter,
    title: ch.topic,
    content: null,
    flashcards: [],
    mcqs: []
}));
