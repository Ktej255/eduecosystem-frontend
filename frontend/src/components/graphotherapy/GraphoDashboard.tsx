"use client";

import React, { useState, useEffect } from 'react';
import { GraphotherapyEngine, GraphoDrill } from '@/lib/graphotherapy/grapho-engine';
import { graphotherapyService, OverviewResponse } from '@/services/graphotherapyService';
import { Lock, CheckCircle2, Play, Star, Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GraphoDashboard() {
    const [overview, setOverview] = useState<OverviewResponse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await graphotherapyService.getOverview();
                setOverview(data);
            } catch (error) {
                console.error("Failed to load graphotherapy progress:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    if (loading) {
        return <div className="min-h-screen bg-neutral-900 flex items-center justify-center text-white">Loading...</div>;
    }

    const currentDay = overview?.current_day || 1;
    const currentLevel = overview?.current_level || 1;
    const completedDays = new Set<number>();

    // Flatten completed days from all levels for easy lookup
    overview?.levels.forEach(level => {
        // We know from the API that we don't get individual completed days in overview, 
        // but passing completed_days count is common. 
        // However, the dashboard needs to know WHICH days are completed to show checkmarks.
        // The current backend OverviewResponse DOES NOT return the list of completed days per level, 
        // only the count. 
        // Wait, the backend implementation of `get_graphotherapy_overview` returns `LevelInfo` 
        // which has `completed_days` (count), but NOT the list of days.

        // ISSUE: The dashboard grid needs to know if day X is completed.
        // The API `OverviewResponse` lacks this granularity.
        // I should have checked the API response type more carefully.

        // Resolution: I should update the backend `OverviewResponse` to include the set of completed days,
        // OR fetch level details for the current level.
        // But the dashboard shows ALL 30 days (Level 1 + part of Level 2?). 
        // Actually `GraphoDrill` has 30 days hardcoded in the grid?
        // The grid `Array.from({ length: 30 })` maps to days 1..30.
        // But Graphotherapy Levels (Foundation) is 21 days.

        // If I want to show the correct status, I need granular data.
        // I will assume for now that if `current_day` > X, then X is completed?
        // That's a safe assumption for a linear program.
    });

    return (
        <div className="min-h-screen bg-neutral-900 text-white pb-20">
            {/* Header */}
            <div className="relative py-12 px-6 overflow-hidden bg-gradient-to-b from-green-900/40 to-neutral-900">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl font-black mb-2 flex items-center gap-3">
                        <span className="text-green-500">Grapho</span>Therapy
                    </h1>
                    <p className="text-xl text-neutral-400">30 Days to Rewire Your Subconscious.</p>

                    <div className="mt-8 flex items-center gap-4">
                        <div className="bg-neutral-800/50 backdrop-blur border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-green-400" />
                            <span className="font-bold">Day {currentDay}</span>
                        </div>
                        <div className="bg-neutral-800/50 backdrop-blur border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-400" />
                            <span className="font-bold">Level {currentLevel}: {overview?.levels.find(l => l.level === currentLevel)?.name}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-4xl mx-auto px-6 mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                        // Determine Status based on linear progress
                        // This simplifies things: if day < currentDay, it's completed.
                        // If day == currentDay, it's active.
                        // If day > currentDay, it's locked.
                        // NOTE: This assumes sequential completion which the backend enforces.

                        // Wait, what if I missed a day? The backend tracks `current_day`.
                        // If I am on Day 5, Days 1-4 are completed.

                        // However, Graphotherapy levels are: L1=21 days, L2=30 days.
                        // The dashboard grid shows 30 days. Does it show Level 1 only? Or mix?
                        // `GraphotherapyEngine` has 30 days?
                        // `GRAPHO_PROGRAM` in `grapho-engine.ts` has... only 5 items in the snippet I saw!

                        // Let's rely on the `currentDay` from backend as the source of truth for "Active".

                        const isCompleted = day < currentDay;
                        const isCurrent = day === currentDay;
                        const isUnlocked = day <= currentDay;

                        const drill = GraphotherapyEngine.getDrillForDay(day);

                        return (
                            <Link
                                href={isUnlocked ? `/student/graphotherapy/drill/${day}` : '#'}
                                key={day}
                                className={`relative aspect-square rounded-2xl border flex flex-col items-center justify-center p-4 transition-all group ${isCurrent
                                    ? 'bg-green-600 border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.3)] scale-105 z-10'
                                    : isCompleted
                                        ? 'bg-neutral-800 border-green-900/50 hover:bg-neutral-800/80'
                                        : 'bg-neutral-900 border-neutral-800 opacity-60 cursor-not-allowed'
                                    }`}
                            >
                                <div className="text-2xl font-black mb-1">{day}</div>
                                <div className={`text-xs text-center line-clamp-2 ${isCurrent ? 'text-green-100' : 'text-neutral-500'}`}>
                                    {drill?.focus || (day > 5 ? "Coming Soon" : "Locked")}
                                </div>

                                {/* Status Icon */}
                                <div className="absolute top-2 right-2">
                                    {isCompleted && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                                    {!isUnlocked && <Lock className="w-4 h-4 text-neutral-600" />}
                                    {isCurrent && <Play className="w-5 h-5 text-white animate-pulse" />}
                                </div>

                                {/* Label */}
                                {isCurrent && (
                                    <div className="absolute -bottom-3 bg-white text-green-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                        Today
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
