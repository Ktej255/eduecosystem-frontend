"use client";

import React from 'react';
import EconomyTopicViewer from './EconomyTopicViewer';
import { ECONOMY_CONTENT_MAP } from './data/economy-schedule-data';
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp } from "lucide-react";
import Link from 'next/link';

export default function GenericEconomyPage({ topicId }: { topicId: string }) {
    const topicData = ECONOMY_CONTENT_MAP[topicId];

    // If content exists, render using the Topic Viewer
    if (topicData && topicData.content) {
        return <EconomyTopicViewer
            content={topicData.content}
            mcqs={topicData.mcqs}
            flashcards={topicData.flashcards}
        />;
    }

    const formatTitle = (id: string) => {
        return id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div className="min-h-screen bg-muted dark:bg-black p-8 flex flex-col items-center justify-center">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="h-10 w-10 text-emerald-600" />
                </div>
                <h1 className="text-3xl font-bold text-foreground">{formatTitle(topicId)}</h1>
                <div className="bg-card p-4 rounded-lg border border-border shadow-sm">
                    <p className="text-muted-foreground">
                        Detailed notes and simulations for this Economy module are under development.
                    </p>
                </div>
                <Link href="/student/batch1/economy">
                    <Button variant="outline" className="gap-2 border-emerald-200 hover:bg-emerald-50 text-emerald-700">
                        <ArrowLeft className="h-4 w-4" /> Back to Dashboard
                    </Button>
                </Link>
            </div>
        </div>
    );
}
