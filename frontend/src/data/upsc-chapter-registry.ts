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

    // DD Basu - Introduction to the Constitution of India
    'dd-basu': [
        { id: 1, title: 'The Historical Background', duration: '45 mins', isFree: true, hasMCQ: false, hasFlashcards: false },
        { id: 2, title: 'The Constituent Assembly', duration: '40 mins', isFree: true, hasMCQ: false, hasFlashcards: false },
        { id: 3, title: 'The Preamble', duration: '35 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 4, title: 'The Union and Its Territory', duration: '40 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 5, title: 'Citizenship', duration: '45 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 6, title: 'Fundamental Rights - General', duration: '50 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 7, title: 'Right to Equality', duration: '45 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 8, title: 'Right to Freedom', duration: '50 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 9, title: 'Right Against Exploitation', duration: '35 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 10, title: 'Right to Freedom of Religion', duration: '40 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 11, title: 'Cultural and Educational Rights', duration: '35 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 12, title: 'Right to Constitutional Remedies', duration: '50 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 13, title: 'Directive Principles of State Policy', duration: '55 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 14, title: 'Fundamental Duties', duration: '30 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 15, title: 'The Union Executive - President', duration: '60 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 16, title: 'The Union Executive - Prime Minister & Council', duration: '55 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 17, title: 'The Attorney General', duration: '25 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 18, title: 'Parliament - Composition', duration: '50 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 19, title: 'Parliament - Powers and Privileges', duration: '55 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 20, title: 'Legislative Procedure', duration: '45 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 21, title: 'The Supreme Court', duration: '60 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 22, title: 'State Executive - Governor', duration: '50 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 23, title: 'State Executive - Chief Minister & Council', duration: '45 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 24, title: 'State Legislature', duration: '55 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 25, title: 'The High Courts', duration: '55 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 26, title: 'Subordinate Courts', duration: '40 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 27, title: 'Centre-State Relations', duration: '60 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 28, title: 'Emergency Provisions', duration: '55 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 29, title: 'Amendment of the Constitution', duration: '45 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 30, title: 'Constitutional Bodies - Election Commission', duration: '40 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 31, title: 'Constitutional Bodies - CAG', duration: '35 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 32, title: 'Constitutional Bodies - UPSC', duration: '35 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 33, title: 'Local Self Government', duration: '50 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 34, title: 'Special Provisions for Certain Classes', duration: '45 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
        { id: 35, title: 'Basic Structure Doctrine', duration: '50 mins', isFree: false, hasMCQ: false, hasFlashcards: false },
    ],

    // NCERT Polity Class 11 - Indian Constitution at Work
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

    // NCERT Polity Class 12 - Politics in India Since Independence
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


    // History Books
    // Modern India
    'spectrum': generatePlaceholderChapters(32, 'Modern India'),
    'bipin-chandra': generatePlaceholderChapters(38, 'Independence Movement'),
    'ncert-history-12-3': generatePlaceholderChapters(6, 'Modern India Theme'),

    // Ancient India
    'ancient-india-rs-sharma': generatePlaceholderChapters(29, 'Ancient India'),
    'ncert-history-12-1': generatePlaceholderChapters(4, 'Ancient Theme'),
    'ncert-history-6': generatePlaceholderChapters(12, 'Ancient Past'),

    // Medieval India
    'medieval-india-satish-chandra': generatePlaceholderChapters(22, 'Medieval India'),
    'ncert-history-12-2': generatePlaceholderChapters(5, 'Medieval Theme'),
    'ncert-history-7': generatePlaceholderChapters(10, 'Medieval Past'),

    // World History
    'modern-world-history-norman-lowe': generatePlaceholderChapters(25, 'World History'),
    'history-world-arjun-dev': generatePlaceholderChapters(15, 'World Revolutions'),

    // Geography Books
    'savinder-singh': generatePlaceholderChapters(40, 'Physical Geography'),
    'gc-leong': generatePlaceholderChapters(35, 'Physical Geography'),
    'majid-husain': generatePlaceholderChapters(28, 'Indian Geography'),
    'khullar': generatePlaceholderChapters(32, 'Geography'),
    'ncert-geography-11': generatePlaceholderChapters(16, 'Physical Geo Fundamentals'),
    'ncert-geography-12': generatePlaceholderChapters(12, 'India People & Economy'),

    // Economy Books
    'ramesh-singh': generatePlaceholderChapters(40, 'Economy'),
    'sriram-ias': generatePlaceholderChapters(25, 'Economy'),
    'ncert-economy-11': generatePlaceholderChapters(10, 'Indian Economic Dev'),
    'ncert-economy-12': generatePlaceholderChapters(6, 'Macroeconomics'),

    // Environment Books
    'shankar-ias': generatePlaceholderChapters(18, 'Environment'),
    'pmf-ias': generatePlaceholderChapters(22, 'Environment'),
    'pd-sharma': generatePlaceholderChapters(22, 'Ecology'),
    'ncert-biology-12': generatePlaceholderChapters(4, 'Ecology Unit'),

    // Science & Tech Books
    'science-tech-tmh': generatePlaceholderChapters(15, 'Science & Tech'),
    'ncert-science-10': generatePlaceholderChapters(16, 'General Science'),
    'ncert-physics-11': generatePlaceholderChapters(15, 'Physics'),
    'ncert-chemistry-11': generatePlaceholderChapters(14, 'Chemistry'),

    // Art & Culture Books
    // Art & Culture Books
    'nitin-singhania': generatePlaceholderChapters(20, 'Art & Culture'),
    'ccrt': generatePlaceholderChapters(12, 'Indian Art'),
    'ncert-fine-arts-11': generatePlaceholderChapters(8, 'Indian Art Intro'),
    'ncert-fine-arts-12': generatePlaceholderChapters(10, 'Craft Traditions'),

    // International Relations
    'pavneet-singh': generatePlaceholderChapters(22, 'IR & Foreign Policy'),
    'rajiv-sikri': generatePlaceholderChapters(18, 'Strategic Challenges'),
    'ir-module': generatePlaceholderChapters(55, 'IR Current Affairs'),
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
