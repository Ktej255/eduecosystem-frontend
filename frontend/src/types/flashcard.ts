
export interface Flashcard {
    id: string;
    front: string;
    back: string;
    chapterId?: number | string;
    category?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    lastReviewed?: Date;
    nextReview?: Date;
    interval?: number;
    repetition?: number;
    easeFactor?: number;
}
