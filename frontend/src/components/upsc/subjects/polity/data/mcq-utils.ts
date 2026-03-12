export interface MCQ {
    id: number | string;
    question: string;
    options: string[];
    correctAnswer?: number; // 0-based index
    answer?: number; // Alias for correctAnswer (used in day66/67-mcqs)
    correctIndex?: number; // Alias for correctAnswer (used in polity-mcqs-data)
    explanation?: string;
    level?: string; // e.g. "Easy", "Moderate", "Tough"
    difficulty?: 'Easy' | 'Moderate' | 'Tough' | 'easy' | 'medium' | 'hard' | 'L1' | 'L2' | 'L3'; // Alias for level

    // Metadata
    topic?: string;
    chapter?: string;
    subtopic?: string;
    subtopicId?: string; // e.g. "11.1"

    // Adaptive Learning Metadata (New)
    source_mapping?: {
        book: string; // e.g. "M. Laxmikanth"
        chapter: string; // e.g. "Union & Territory"
        page_ref?: number; // e.g. 45
    };
    difficulty_tier?: 'Level_1' | 'Level_2' | 'Level_3';
    cognitive_tag?: string;
    associated_product_id?: string;
    chapterId?: number | string;
}
