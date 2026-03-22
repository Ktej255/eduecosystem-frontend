export interface MCQ {
    id: number | string;
    question: string;
    options: string[];
    correctAnswer: number; // 0-based index
    correctIndex?: number; // Legacy compatibility
    
    /** @deprecated Use correctAnswer */
    answer?: number; 
    
    explanation?: string;
    
    /** @deprecated Use difficulty */
    level?: string; 
    
    /** Valid difficulty values standardized across L1, L2, L3 and descriptive terms */
    difficulty?: 'Easy' | 'Moderate' | 'Tough' | 'easy' | 'medium' | 'hard' | 'L1' | 'L2' | 'L3' | 'Level_1' | 'Level_2' | 'Level_3';

    // Metadata
    topic?: string;
    chapter?: string;
    subtopic?: string;
    subtopicId?: string; // e.g. "11.1"

    // Adaptive Learning Metadata
    source_mapping?: {
        book: string; // e.g. "M. Laxmikanth"
        chapter: string; // e.g. "Union & Territory"
        page_ref?: number; // e.g. 45
    };
    
    /** @deprecated Use difficulty with 'Level_1' | 'Level_2' | 'Level_3' */
    difficulty_tier?: 'Level_1' | 'Level_2' | 'Level_3';
    
    cognitive_tag?: string;
    associated_product_id?: string;
    chapterId?: number | string; // Optional to support lazy data padding
}
