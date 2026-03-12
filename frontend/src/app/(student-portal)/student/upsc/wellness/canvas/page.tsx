"use client";

import NeuroCanvas from "@/components/upsc/platform/wellness/NeuroCanvas";
import { ArrowLeft, Feather } from 'lucide-react';
import Link from 'next/link';

export default function NeuroCanvasPage() {
    return (
        <div className="container mx-auto p-4 max-w-7xl">
            <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <Link
                        href="/student/batch1-1"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-indigo-600 mb-2 transition-colors"
                    >
                        <ArrowLeft className="mr-1 h-4 w-4" /> Back to Dashboard
                    </Link>
                    <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                        <Feather className="h-8 w-8 text-indigo-500" />
                        Neuro-Canvas
                    </h1>
                    <p className="text-muted-foreground dark:text-muted-foreground mt-1 max-w-2xl">
                        A digital sanctuary for graphotherapy. Practice mindful strokes to improve focus, reduce stress, and retrain your neural pathways.
                    </p>
                </div>

                <div className="hidden md:block text-right">
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Current Session Goal</p>
                    <p className="text-2xl font-bold text-foreground">15 mins</p>
                </div>
            </div>

            <NeuroCanvas />
        </div>
    );
}
