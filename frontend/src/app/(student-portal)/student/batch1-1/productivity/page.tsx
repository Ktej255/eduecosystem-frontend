"use client";

import DailyBriefing from "@/components/batch1-1/productivity/DailyBriefing";
import MathSprint from "@/components/batch1-1/productivity/MathSprint";
import LogicGrid from "@/components/batch1-1/productivity/LogicGrid";
import { ArrowLeft, Zap, Trophy, BrainCircuit } from 'lucide-react';
import Link from 'next/link';

export default function ProductivityPage() {
    return (
        <div className="container mx-auto p-6 max-w-7xl">
            <div className="mb-8">
                <Link
                    href="/student/batch1-1"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 mb-4 transition-colors"
                >
                    <ArrowLeft className="mr-1 h-4 w-4" /> Back to Dashboard
                </Link>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 flex items-center gap-3">
                            <Zap className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                            Productivity War Room
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                            Sharpen your mind with daily drills. Speed, Awareness, and Logic.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Daily Briefing (Full Width on Mobile, Left on Desktop) */}
                <div className="lg:col-span-1 space-y-6">
                    <DailyBriefing />
                </div>

                {/* CSAT Trainer (Stacked on Mobile, Right on Desktop) */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                        {/* Math Sprint */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-semibold px-2">
                                <Trophy className="h-4 w-4" /> CSAT Speed Trainer
                            </div>
                            <MathSprint />
                        </div>

                        {/* Logic Grid */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-teal-700 dark:text-teal-300 font-semibold px-2">
                                <BrainCircuit className="h-4 w-4" /> Logic Protocol
                            </div>
                            <div className="h-[300px]">
                                <LogicGrid />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
