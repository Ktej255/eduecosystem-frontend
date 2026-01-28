
export interface Flashcard {
    id: string;
    front: string;
    back: string;
    chapterId?: number | string;
    difficulty?: 'easy' | 'medium' | 'hard';
    lastReviewed?: Date;
    nextReview?: Date;
    interval?: number;
    repetition?: number;
    easeFactor?: number;
}
