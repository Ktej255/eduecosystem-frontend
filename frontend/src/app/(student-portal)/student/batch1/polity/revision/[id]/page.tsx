"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import ChapterRevisionView from '@/components/batch1/polity/revision/ChapterRevisionView';

export default function ChapterRevisionPage() {
    const params = useParams();
    const id = parseInt(params.id as string);

    return <ChapterRevisionView chapterId={id} />;
}
