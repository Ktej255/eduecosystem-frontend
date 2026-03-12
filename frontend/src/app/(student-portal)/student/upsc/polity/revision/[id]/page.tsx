"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import ChapterRevisionView from '@/components/upsc/subjects/polity/revision/ChapterRevisionView';

export default function ChapterRevisionPage() {
    const params = useParams();
    const id = parseInt(params.id as string);

    if (isNaN(id)) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#030303]">
                <div className="text-center p-8 bg-white dark:bg-[#111] rounded-2xl shadow-lg border border-red-100 dark:border-red-900/30">
                    <p className="text-red-500 font-bold mb-2">Invalid Chapter ID</p>
                    <a href="/student/upsc/polity" className="text-blue-600 hover:underline text-sm">Return to Dashboard</a>
                </div>
            </div>
        );
    }

    return <ChapterRevisionView chapterId={id} subjectId="polity" backLink="/student/upsc/polity" />;
}
