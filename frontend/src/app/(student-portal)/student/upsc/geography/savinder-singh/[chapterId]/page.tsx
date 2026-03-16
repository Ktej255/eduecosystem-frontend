"use client";

import React, { use } from 'react';
import { notFound, useRouter } from 'next/navigation';
import SavinderSinghModule from '@/components/upsc/subjects/geography/SavinderSinghModule';
import { SAVINDER_SINGH_CHAPTERS } from '@/components/upsc/subjects/geography/data/savinder-singh-data';

export default function SavinderSinghChapterPage({ params }: { params: Promise<{ chapterId: string }> }) {
    const router = useRouter();
    const resolvedParams = use(params);
    const chapter = SAVINDER_SINGH_CHAPTERS.find(c => c.id === resolvedParams.chapterId);

    if (!chapter) return notFound();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-8">
            <SavinderSinghModule 
                chapterId={chapter.id}
                chapterTitle={`Chapter ${chapter.chapterNumber}: ${chapter.title}`}
                level1McqCount={chapter.level1McqCount || 20}
                level2McqCount={chapter.level2McqCount || 15}
                level3McqCount={chapter.level3McqCount || 10}
                onBack={() => router.push('/student/upsc/geography/savinder-singh')}
            />
        </div>
    );
}
