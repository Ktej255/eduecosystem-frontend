"use client";

import { use } from 'react';
import { Suspense } from 'react';
import GeographyChapterViewer from '@/components/upsc/subjects/geography/GeographyChapterViewer';

interface TopicPageProps {
    params: Promise<{ topicId: string }>;
}

function LoadingSpinner() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-muted-foreground font-medium animate-pulse">Loading topic...</p>
            </div>
        </div>
    );
}

export default function TopicPage({ params }: TopicPageProps) {
    const { topicId } = use(params);
    const numericId = parseInt(topicId, 10);

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <GeographyChapterViewer topicId={numericId} />
        </Suspense>
    );
}
