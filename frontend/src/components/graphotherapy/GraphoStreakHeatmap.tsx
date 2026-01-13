"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Trophy, CalendarCheck } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface GraphoStreakHeatmapProps {
    streak: number;
    lastPracticeDate: string | null;
    totalDays: number; // For calculation context
}

export default function GraphoStreakHeatmap({
    streak,
    lastPracticeDate,

}: GraphoStreakHeatmapProps) {
    // Generate dates for the last 60 days
    const today = new Date();
    const dates = Array.from({ length: 60 }, (_, i) => {
        const d = new Date();
        d.setDate(today.getDate() - (59 - i));
        return d;
    });

    // Determine which dates are part of the 'Active' streak
    const isStreakActive = (date: Date) => {
        // Normalize dates to midnight
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);

        const lastPractice = lastPracticeDate ? new Date(lastPracticeDate) : new Date();
        lastPractice.setHours(0, 0, 0, 0);

        const diffDays = Math.floor((lastPractice.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));

        return diffDays >= 0 && diffDays < streak;
    };

    return (
        <Card className="bg-neutral-900 border-neutral-800 text-white overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-900/20 blur-[100px] rounded-full pointer-events-none" />

            <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-8 items-center">

                    {/* Big Stats */}
                    <div className="flex-shrink-0 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-1 text-neutral-400 text-sm font-medium uppercase tracking-wider">
                            <Flame className={`w-4 h-4 ${streak > 0 ? 'text-orange-500 fill-orange-500' : 'text-neutral-600'}`} />
                            Current Streak
                        </div>
                        <div className="text-5xl font-black text-white tracking-tight flex items-baseline gap-2">
                            {streak}
                            <span className="text-lg font-medium text-neutral-500">days</span>
                        </div>
                        <p className="text-sm text-neutral-400 mt-2 max-w-[200px]">
                            {streak > 0
                                ? "You're on fire! Keep the momentum going to rewire your brain."
                                : "Start your streak today. Consistency is key to graphotherapy."}
                        </p>
                    </div>

                    {/* Heatmap Grid */}
                    <div className="flex-1 w-full overflow-x-auto pb-2">
                        <div className="flex gap-1 min-w-max">
                            {dates.map((date, i) => {
                                const active = isStreakActive(date);
                                const isToday = date.toDateString() === new Date().toDateString();

                                return (
                                    <motion.div
                                        key={i}
                                        title={`${date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}: ${active ? 'Practiced' : 'No practice'}`}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: i * 0.01 }}
                                        className={`
                                            w-3 h-8 rounded-sm transition-all duration-300
                                            ${active
                                                ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]'
                                                : isToday
                                                    ? 'bg-neutral-700 animate-pulse border border-neutral-600'
                                                    : 'bg-neutral-800 hover:bg-neutral-700'
                                            }
                                        `}
                                    />
                                );
                            })}
                        </div>

                        {/* Legend */}
                        <div className="flex justify-between items-center mt-3 text-xs text-neutral-500">
                            <span>Last 60 Days</span>
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm bg-neutral-800"></div> Missed</span>
                                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm bg-green-500"></div> Practiced</span>
                            </div>
                        </div>
                    </div>

                </div>
            </CardContent>
        </Card>
    );
}
