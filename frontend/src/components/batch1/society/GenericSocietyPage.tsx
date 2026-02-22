"use client";

import React from 'react';
import SocietyTopicViewer from './SocietyTopicViewer';
import { SOCIETY_CONTENT_MAP } from './data/society-schedule-data';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users } from "lucide-react";
import Link from 'next/link';
import { ContentItem } from "../types";

export default function GenericSocietyPage({ topicId }: { topicId: string }) {
    const topicData = SOCIETY_CONTENT_MAP[topicId];

    // If content exists, render using the Topic Viewer
    if (topicData && topicData.content) {
        return <SocietyTopicViewer content={topicData.content} />;
    }

    const formatTitle = (id: string) => {
        return id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div className="min-h-screen bg-rose-50 dark:bg-black p-8 flex flex-col items-center justify-center">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-20 h-20 bg-card dark:bg-rose-900/20 rounded-full flex items-center justify-center mx-auto border-4 border-rose-100 dark:border-rose-900">
                    <Users className="h-10 w-10 text-rose-500 dark:text-rose-400" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">{formatTitle(topicId)}</h1>
                    <p className="text-sm text-rose-500 font-mono mt-2 uppercase tracking-widest">GS-1 Society Module</p>
                </div>
                <div className="p-4 bg-card dark:bg-stone-900/50 rounded-lg border border-rose-100 dark:border-rose-900 shadow-sm text-stone-600 dark:text-stone-400 text-sm">
                    <strong>Coming Soon:</strong> Detailed sociological analysis, demographic data, and case studies for this topic are being prepared.
                </div>
                <div className="flex justify-center gap-4">
                    <Link href="/student/batch1/society">
                        <Button variant="outline" className="gap-2 border-rose-200 dark:border-rose-800 hover:bg-rose-50 dark:hover:bg-rose-900/20 text-rose-700 dark:text-rose-300">
                            <ArrowLeft className="h-4 w-4" /> Back to Society
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
