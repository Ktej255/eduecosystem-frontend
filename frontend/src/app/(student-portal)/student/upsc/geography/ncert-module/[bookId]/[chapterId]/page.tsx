"use client";

import React from 'react';
import { notFound, useRouter } from 'next/navigation';
import NCERTChapterModule from '@/components/upsc/subjects/geography/NCERTChapterModule';
import { NCERT_GEOGRAPHY_BOOKS } from '@/components/upsc/subjects/geography/data/ncert-geography-data';

export default function NCERTChapterPage({ params }: { params: { bookId: string; chapterId: string } }) {
    const router = useRouter();
    const { bookId, chapterId } = params;

    const book = NCERT_GEOGRAPHY_BOOKS.find(b => b.id === bookId);
    if (!book) return notFound();

    const chapter = book.chapters.find(c => c.id === chapterId);
    if (!chapter) return notFound();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-8">
            <NCERTChapterModule 
                chapterId={chapterId}
                chapterTitle={chapter.title}
                bookTitle={book.title}
                mcqDataId={chapter.mcqDataId}
                onBack={() => router.push(`/student/upsc/geography`)}
            />
        </div>
    );
}
