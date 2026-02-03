"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe2, Construction } from "lucide-react";
import Link from 'next/link';

export default function GenericGeographyPage({ moduleId }: { moduleId: string }) {
    // Helper to format ID to Title (e.g., 'human-geography' -> 'Human Geography')
    const formatTitle = (id: string) => {
        return id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black p-8 flex flex-col items-center justify-center">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto relative overflow-hidden">
                    <Globe2 className="h-10 w-10 text-slate-400 absolute opacity-20 scale-150" />
                    <Construction className="h-8 w-8 text-indigo-500 relative z-10" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{formatTitle(moduleId)}</h1>
                    <p className="text-sm text-slate-500 font-mono mt-1">Module ID: {moduleId}</p>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                    This module is currently under development in the TerraLab forge.
                    Detailed simulations and content notes are being compiled.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/student/batch1/geography">
                        <Button variant="outline" className="gap-2">
                            <ArrowLeft className="h-4 w-4" /> Return to Hub
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
