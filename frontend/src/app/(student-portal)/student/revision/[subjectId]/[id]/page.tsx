"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import ChapterRevisionView from '@/components/batch1/polity/revision/ChapterRevisionView';

export default function ChapterRevisionPage() {
    const params = useParams();
    const id = parseInt(params.id as string);
    const subjectId = params.subjectId as string;

    // We can now pass subjectId if needed, but for now we keep the same logic
    return <ChapterRevisionView chapterId={id} subjectId={subjectId} />;
}
