export interface MCQ {
    id: number | string;
    question: string;
    options: string[];
    correctAnswer?: number; // 0-based index
    correctIndex?: number; // Alias for correctAnswer (used in polity-mcqs-data)
    explanation?: string;
    level?: string; // e.g. "Easy", "Moderate", "Tough"
    difficulty?: 'Easy' | 'Moderate' | 'Tough'; // Alias for level

    // Metadata
    topic?: string;
    chapter?: string;
    subtopic?: string;
    subtopicId?: string; // e.g. "11.1"
}
