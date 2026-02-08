"use client";

import { use, Suspense } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TOPIC_TITLES } from "@/components/batch1-1/polity/data/polity-types-95";
import ChapterLevelGame from "@/components/batch1-1/polity/revision/ChapterLevelGame";

interface MCQPageProps {
    params: Promise<{ topicId: string }>;
}

function MCQContent({ topicId }: { topicId: number }) {
    const router = useRouter();
    const topic = TOPIC_TITLES.find(t => t.id === topicId);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
            <div className="max-w-5xl mx-auto p-4 md:p-8">
                {/* Back Button */}
                <Button
                    variant="ghost"
                    onClick={() => router.push(`/student/batch1-1/polity/${topicId}`)}
                    className="mb-6 text-slate-600 hover:text-slate-900"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Chapter
                </Button>

                {/* Header */}
                <div className="mb-8">
                    <Badge className="mb-3 bg-slate-200 text-slate-700 font-mono">
                        Chapter {topicId}
                    </Badge>
                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2">
                        {topic?.title || `Topic ${topicId}`}
                    </h1>
                </div>

                {/* Chapter Level Game */}
                <ChapterLevelGame
                    topicId={topicId}
                    onComplete={(level, score) => {
                        console.log(`Completed Level ${level} with ${score}% score`);
                    }}
                />
            </div>
        </div>
    );
}

export default function MCQPage({ params }: MCQPageProps) {
    const { topicId } = use(params);
    const id = parseInt(topicId, 10);

    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <MCQContent topicId={id} />
        </Suspense>
    );
}
