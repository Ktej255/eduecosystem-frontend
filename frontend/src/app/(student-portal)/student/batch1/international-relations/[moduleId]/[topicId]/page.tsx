import React from 'react';
import IrTopicViewer from '@/components/batch1/international-relations/IrTopicViewer';
import { IR_CONTENT_MAP } from '@/components/batch1/international-relations/data/ir-schedule-data';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe } from "lucide-react";
import Link from 'next/link';

export default async function IrTopicPage({ params }: { params: Promise<{ moduleId: string; topicId: string }> }) {
    const { moduleId, topicId } = await params;
    const topicData = IR_CONTENT_MAP[topicId];

    if (topicData && topicData.content) {
        return <IrTopicViewer content={topicData.content} moduleId={moduleId} />;
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black p-8 flex flex-col items-center justify-center">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto">
                    <Globe className="h-10 w-10 text-slate-400" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Topic Not Found</h1>
                    <p className="text-sm text-slate-500 font-mono mt-1">ID: {topicId}</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg text-blue-800 dark:text-blue-200 text-sm">
                    <strong>Under Development:</strong> The content for this detailed topic is being curated by the expert team.
                </div>
                <div className="flex justify-center gap-4">
                    <Link href={`/student/batch1/international-relations/${moduleId}`}>
                        <Button variant="outline" className="gap-2 border-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900">
                            <ArrowLeft className="h-4 w-4" /> Back to Module
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
