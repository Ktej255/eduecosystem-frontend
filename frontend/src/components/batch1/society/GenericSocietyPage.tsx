"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users } from "lucide-react";
import Link from 'next/link';

export default function GenericSocietyPage({ topicId }: { topicId: string }) {
    const formatTitle = (id: string) => {
        return id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black p-8 flex flex-col items-center justify-center">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-20 h-20 bg-pink-50 dark:bg-pink-900/20 rounded-full flex items-center justify-center mx-auto border-2 border-pink-100 dark:border-pink-900">
                    <Users className="h-10 w-10 text-pink-600 dark:text-pink-500" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{formatTitle(topicId)}</h1>
                    <p className="text-sm text-pink-500 font-mono mt-2 uppercase tracking-widest">GS-1 Module</p>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                    Detailed analysis of this social issue, including relevant statistics, schematics, and case studies, is under construction.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/student/batch1/society">
                        <Button variant="outline" className="gap-2 border-slate-200 dark:border-slate-800 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-pink-600">
                            <ArrowLeft className="h-4 w-4" /> Back to Society
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
