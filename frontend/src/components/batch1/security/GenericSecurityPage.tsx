"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";
import Link from 'next/link';

export default function GenericSecurityPage({ topicId }: { topicId: string }) {
    const formatTitle = (id: string) => {
        return id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black p-8 flex flex-col items-center justify-center">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-20 h-20 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto border-2 border-red-100 dark:border-red-900">
                    <Shield className="h-10 w-10 text-red-600 dark:text-red-500" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{formatTitle(topicId)}</h1>
                    <p className="text-sm text-red-500 font-mono mt-2 uppercase tracking-widest">Restricted Access</p>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                    This security briefing is currently being compiled. Intelligence gathering in progress...
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/student/batch1/security">
                        <Button variant="outline" className="gap-2 border-slate-200 dark:border-slate-800 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600">
                            <ArrowLeft className="h-4 w-4" /> Return to Command
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
