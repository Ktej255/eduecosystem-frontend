// UPSC Chapter Registry
// Maps book IDs to their chapter lists, pulling from existing RevisionRegistry

import { POLITY_REVISION_CHAPTERS } from '@/components/batch1/polity/data/RevisionRegistry';

export interface UPSCChapter {
    id: number;
    title: string;
    duration: string;
    isFree: boolean;
    pdfUrl?: string;
    hasMCQ: boolean;
    hasFlashcards: boolean;
}

// Helper to generate chapters from registry
const generatePolityChapters = (): UPSCChapter[] => {
    return POLITY_REVISION_CHAPTERS.map((ch, index) => ({
        id: ch.id,
        title: ch.title,
        duration: `${Math.floor(15 + Math.random() * 40)} mins`,
        isFree: index < 3, // First 3 chapters free as samples
        pdfUrl: `/assets/polity/chapter${ch.id}.pdf`,
        hasMCQ: ch.mcqs && ch.mcqs.length > 0,
        hasFlashcards: ch.flashcards && ch.flashcards.length > 0
    }));
};

// Book to Chapters mapping
export const UPSC_BOOKS_CHAPTERS: Record<string, UPSCChapter[]> = {
    // Polity Books
    'laxmikanth': generatePolityChapters(),
    'ncert-polity-11': [
        { id: 1, title: 'Constitution: Why and How?', duration: '30 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 2, title: 'Rights in the Indian Constitution', duration: '45 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 3, title: 'Election and Representation', duration: '40 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 4, title: 'Executive', duration: '35 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 5, title: 'Legislature', duration: '45 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 6, title: 'Judiciary', duration: '40 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 7, title: 'Federalism', duration: '35 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 8, title: 'Local Governments', duration: '30 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 9, title: 'Constitution as a Living Document', duration: '25 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 10, title: 'The Philosophy of the Constitution', duration: '35 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
    ],
    'ncert-polity-12': [
        { id: 1, title: 'Challenges of Nation Building', duration: '40 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 2, title: 'Era of One-Party Dominance', duration: '45 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 3, title: 'Politics of Planned Development', duration: '40 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 4, title: "India's External Relations", duration: '35 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 5, title: 'Challenges to and Restoration of Congress System', duration: '45 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 6, title: 'The Crisis of Democratic Order', duration: '40 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 7, title: 'Rise of Popular Movements', duration: '35 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 8, title: 'Regional Aspirations', duration: '40 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
        { id: 9, title: 'Recent Developments in Indian Politics', duration: '45 mins', isFree: true, hasMCQ: true, hasFlashcards: true },
    ],

    // History Books (Placeholder - will be populated with actual data later)
    'spectrum': generatePlaceholderChapters(25, 'Modern India'),
    'bipin-chandra': generatePlaceholderChapters(30, 'Freedom Struggle'),
    'ancient-india-rs-sharma': generatePlaceholderChapters(20, 'Ancient India'),

    // Geography Books
    'gc-leong': generatePlaceholderChapters(35, 'Physical Geography'),
    'majid-husain': generatePlaceholderChapters(28, 'Indian Geography'),
    'khullar': generatePlaceholderChapters(32, 'Geography'),

    // Economy Books
    'ramesh-singh': generatePlaceholderChapters(40, 'Economy'),
    'sriram-ias': generatePlaceholderChapters(25, 'Economy'),

    // Environment Books
    'shankar-ias': generatePlaceholderChapters(18, 'Environment'),
    'pd-sharma': generatePlaceholderChapters(22, 'Ecology'),

    // Science & Tech Books
    'science-tech-tmh': generatePlaceholderChapters(15, 'Science & Tech'),

    // Art & Culture Books
    'nitin-singhania': generatePlaceholderChapters(20, 'Art & Culture'),
    'ccrt': generatePlaceholderChapters(12, 'Indian Art'),
};

// Helper to generate placeholder chapters for non-Polity books
function generatePlaceholderChapters(count: number, subject: string): UPSCChapter[] {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        title: `${subject} - Chapter ${i + 1}`,
        duration: `${Math.floor(20 + Math.random() * 40)} mins`,
        isFree: i < 2,
        pdfUrl: undefined, // PDF to be uploaded later
        hasMCQ: false,
        hasFlashcards: false
    }));
}

// Helper function to get chapters for a book
export function getBookChapters(bookId: string): UPSCChapter[] {
    return UPSC_BOOKS_CHAPTERS[bookId] || [];
}

// Helper to get a specific chapter
export function getChapter(bookId: string, chapterId: number): UPSCChapter | undefined {
    const chapters = getBookChapters(bookId);
    return chapters.find(ch => ch.id === chapterId);
}
