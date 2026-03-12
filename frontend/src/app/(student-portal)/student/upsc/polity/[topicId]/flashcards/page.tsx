"use client";

import { use } from 'react';
import ChapterRevisionView from "@/components/upsc/subjects/polity/revision/ChapterRevisionView";

interface FlashcardPageProps {
    params: Promise<{ topicId: string }>;
}

export default function FlashcardsPage({ params }: FlashcardPageProps) {
    const { topicId } = use(params);
    const id = parseInt(topicId, 10);

    return (
        <ChapterRevisionView
            chapterId={id}
            subjectId="polity"
            backLink="/student/upsc/polity"
            backLabel="Back to Polity Home"
            initialTab="flashcards"
        />
    );
}
