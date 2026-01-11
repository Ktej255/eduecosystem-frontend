"use client";

import React, { useState, useEffect } from 'react';
import { GraphotherapyEngine, GraphoDrill } from '@/lib/graphotherapy/grapho-engine';
import { Lock, CheckCircle2, Play, Star, Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GraphoDashboard() {
    const [currentDay, setCurrentDay] = useState(1);
    // Mock user start date (In real app, fetch from UserContext/DB)
    const [startDate, setStartDate] = useState<string | null>("2026-01-01T00:00:00.000Z");
    const [drills, setDrills] = useState<GraphoDrill[]>([]);

    useEffect(() => {
        // Load data
        setDrills(GraphotherapyEngine.getAllDrills());

        // Calculate current day based on mock start date
        const day = GraphotherapyEngine.getCurrentDay(startDate);
        setCurrentDay(day > 0 ? day : 1);
    }, [startDate]);

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
                            <span className="font-bold">Day {currentDay} / 30</span>
                        </div>
                        <div className="bg-neutral-800/50 backdrop-blur border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-400" />
                            <span className="font-bold">Level 1: Foundation</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-4xl mx-auto px-6 mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                        // Determine Status
                        const isUnlocked = GraphotherapyEngine.isDayUnlocked(day, currentDay);
                        const isCompleted = day < currentDay; // Mock completion logic
                        const isCurrent = day === currentDay;
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
                                    {drill?.focus || "Locked"}
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
