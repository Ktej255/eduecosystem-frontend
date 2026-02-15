"use client";

import React from 'react';
import { getSecurityContent } from './data/registry';
import SecurityTopicViewer from './SecurityTopicViewer';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import Link from 'next/link';

export default function GenericSecurityPage({ topicId }: { topicId: string }) {
    const content = getSecurityContent(topicId);

    if (!content) {
        const formatTitle = (id: string) => {
            return id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        };

        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
                <Card className="max-w-md w-full text-center p-8 border-slate-800 bg-slate-950 text-slate-100 shadow-2xl">
                    <div className="w-20 h-20 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-900">
                        <ShieldAlert className="h-10 w-10 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{formatTitle(topicId)}</h2>
                    <p className="text-slate-500 mb-8 font-mono text-sm">
                        [CLASSIFIED] Intelligence gathering in progress.
                        Briefing not yet authorized for this sector.
                    </p>
                    <Link href="/student/batch1/security">
                        <Button className="bg-red-600 hover:bg-red-700 text-white w-full font-bold uppercase tracking-widest">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Return to Command
                        </Button>
                    </Link>
                </Card>
            </div>
        );
    }

    return <SecurityTopicViewer content={content} />;
}
