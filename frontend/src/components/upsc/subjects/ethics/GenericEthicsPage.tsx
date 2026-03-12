"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale, BookOpen } from "lucide-react";
import Link from 'next/link';
import { ETHICS_CONTENT_MAP } from './data/ethics-schedule-data';
import EthicsTopicViewer from './EthicsTopicViewer';

export default function GenericEthicsPage({ topicId }: { topicId: string }) {
    // Check if content exists for this topic ID
    const topicData = ETHICS_CONTENT_MAP[topicId];

    if (topicData && topicData.content) {
        return <EthicsTopicViewer content={topicData.content} />;
    }

    // Fallback for missing/in-development topics
    const formatTitle = (id: string) => {
        return id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-black p-8 flex flex-col items-center justify-center">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-20 h-20 bg-stone-100 dark:bg-stone-900 rounded-full flex items-center justify-center mx-auto">
                    <Scale className="h-10 w-10 text-stone-400" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100">{formatTitle(topicId)}</h1>
                    <p className="text-sm text-stone-500 font-mono mt-1">GS Paper IV Module</p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-800 dark:text-amber-200 text-sm">
                    <strong>Coming Soon:</strong> Detailed definitions, case studies, and thinkers for this topic are being curated.
                </div>
                <div className="flex justify-center gap-4">
                    <Link href="/student/upsc/ethics">
                        <Button variant="outline" className="gap-2 border-stone-200 hover:bg-stone-100 dark:hover:bg-stone-900">
                            <ArrowLeft className="h-4 w-4" /> Back to Dashboard
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
