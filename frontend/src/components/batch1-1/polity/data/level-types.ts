export interface LevelQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswerIndex: number; // 0 for A, 1 for B, etc.
    explanation?: string;
}

export interface LevelData {
    levelId: 1 | 2 | 3;
    title: string;
    description: string;
    questions: LevelQuestion[];
}

export interface ChapterLevelData {
    topicId: number;
    levels: LevelData[];
}
