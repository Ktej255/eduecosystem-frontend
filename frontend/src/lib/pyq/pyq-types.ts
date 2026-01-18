export interface PYQQuestion {
    id: string | number;
    year: number;
    subject: string;
    topic: string; // e.g., "Preamble", "Fundamental Rights"
    subtopicId?: string; // Links to our syllabus structure

    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;

    exam: 'CSE Prelims' | 'CDS' | 'CAPF' | 'NDA';
    difficulty: 'Easy' | 'Moderate' | 'Tough';

    tags?: string[];
}

export interface PYQFilter {
    years: number[]; // e.g., [2021, 2022, 2023]
    topics: string[];
    exams: string[];
}
