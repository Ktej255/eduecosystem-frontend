"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import ChapterRevisionView from '@/components/batch1/polity/revision/ChapterRevisionView';

export default function GenericChapterRevisionPage() {
    // This handles routes like /student/revision/polity/3 or /student/revision/history/1
    const params = useParams();
    const subjectId = params.subjectId as string;
    // Map 'id' to 'chapterId'. In the folder structure [chapterId], the param keys match the folder name.
    // If the folder is named [chapterId], the param is chapterId.
    // I need to be careful about what I name the folder. I will name it [chapterId].
    const chapterId = parseInt(params.chapterId as string);

    if (isNaN(chapterId)) {
        return <div className="p-10 text-center">Invalid Chapter ID</div>;
    }

    return (
        <ChapterRevisionView
            chapterId={chapterId}
            subjectId={subjectId}
            // For generic revision portal, back link goes to the subject dashboard
            backLink={`/student/revision/${subjectId}`}
        />
    );
}
