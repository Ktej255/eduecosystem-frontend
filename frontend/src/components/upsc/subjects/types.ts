// Core interfaces for content modules
export interface ContentItem {
    id: string;
    title: string;
    description?: string;
    readTime?: string;
    sections?: {
        heading: string;
        content: string; // HTML/Markdown string
    }[];
    content?: string; // Flat HTML/Markdown content
    summary: string;
    source: string;
    tags: string[];
    mcqs?: any[];
    flashcards?: any[];
}

export interface MCQOption {
    id: string;
    text: string;
}

export interface Question {
    id: string;
    question: string;
    options: MCQOption[];
    correctAnswer: string;
    explanation: string;
    difficulty: 'easy' | 'medium' | 'hard';
    tags: string[];
}

export interface MCQSet {
    id: string;
    title: string;
    description: string;
    questions: Question[];
}

export interface Flashcard {
    id: string;
    front: string;
    back: string;
    difficulty: 'easy' | 'medium' | 'hard';
    tags: string[];
}

export interface FlashcardSet {
    id: string;
    title: string;
    description: string;
    cards: Flashcard[];
}

export interface ScheduleItem {
    day: number;
    topic: string;
    subtopics: string[];
    chapterId?: string;
    mcqSetId?: string;
    flashcardSetId?: string;
    content?: ContentItem;
    mcqs?: MCQSet;
    flashcards?: FlashcardSet;
}

// Legacy interfaces (kept for compatibility if needed)
export interface Subtopic {
    id: string | number;
    name: string;
    status?: string;
}

export interface LegacyQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic?: string;
    difficulty?: string;
    level?: number;
    chapterId?: number;
    subject?: string;
    answerRaw?: string;
}
