
export type ContentBlockType = 'text' | 'image' | 'video' | 'callout' | 'quiz' | 'simulation';

export type SimulationType = 'ganga-river' | 'brahmaputra-river' | 'monsoon' | 'plate-tectonics' | 'volcano' | 'glacial-landforms';

export interface QuizData {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export interface ContentBlock {
    id: string;
    type: ContentBlockType;
    content: string; // Markdown text, Image URL, or Video URL
    alt?: string;
    caption?: string; // For images/videos
    styles?: string; // Optional custom tailwind classes
    simulationType?: SimulationType; // For simulation blocks
    quizData?: QuizData; // For quiz blocks
}

export interface LessonSection {
    id: string;
    title: string;
    content: ContentBlock[];
}

export interface LessonContent {
    topicId: string; // Matches the MicroTopic ID (e.g., 'origin-universe')
    title: string;
    description: string;
    sections: LessonSection[];
}
