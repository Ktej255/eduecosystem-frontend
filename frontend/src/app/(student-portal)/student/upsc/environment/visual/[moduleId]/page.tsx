"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";

// Only load the simulation when requested
const FoodWebViz = dynamic(
    () => import('@/components/batch1/environment/visualizations/FoodWebViz'),
    {
        ssr: false,
        loading: () => <div>Loading Ecosystem...</div>
    }
);

export default function VisualEnvironmentModulePage() {
    const params = useParams();
    const router = useRouter();
    const moduleId = params.moduleId;

    if (moduleId !== 'food-web') {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Module Not Found or Under Construction</h1>
                    <Button onClick={() => router.back()}>Go Back</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
            <header className="p-4 border-b border-gray-200 dark:border-white/10 flex items-center bg-white dark:bg-slate-900">
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="mr-4"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                </Button>
                <h1 className="text-lg font-bold">Interactive Food Web Model</h1>
            </header>

            <div className="flex-1 p-8 flex items-center justify-center bg-gray-50 dark:bg-black/50">
                <div className="w-full max-w-5xl">
                    <FoodWebViz />
                </div>
            </div>
        </div>
    );
}
