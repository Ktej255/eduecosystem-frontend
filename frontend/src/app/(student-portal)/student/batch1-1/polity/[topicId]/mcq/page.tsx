"use client";

import { use } from 'react';
import ChapterRevisionView from "@/components/batch1/polity/revision/ChapterRevisionView";

interface MCQPageProps {
    params: Promise<{ topicId: string }>;
}

export default function MCQPage({ params }: MCQPageProps) {
    const { topicId } = use(params);
    const id = parseInt(topicId, 10);

    return (
        <ChapterRevisionView
            chapterId={id}
            subjectId="polity"
            backLink="/student/batch1-1/polity"
            backLabel="Back to Polity Home"
            initialTab="mcqs"
        />
    );
}
