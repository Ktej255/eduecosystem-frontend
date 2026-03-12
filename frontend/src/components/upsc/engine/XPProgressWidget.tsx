"use client";

import React, { useEffect } from 'react';
import { Flame, Star, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useGamification, useXPProgress } from '@/context/GamificationContext';

export default function XPProgressWidget({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
    const { checkAndUpdateStreak } = useGamification();
    const { level, xp, xpInLevel, xpNeeded, progress, streak, longestStreak } = useXPProgress();

    // Check streak on mount
    useEffect(() => {
        checkAndUpdateStreak();
    }, [checkAndUpdateStreak]);

    if (variant === 'compact') {
        return (
            <div className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-xl">
                <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-300" />
                    <span className="font-bold text-sm">Lvl {level}</span>
                </div>
                <div className="w-20 h-2 bg-card/30 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-yellow-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                {streak > 0 && (
                    <div className="flex items-center gap-1">
                        <Flame className="w-4 h-4 text-orange-400" />
                        <span className="font-bold text-sm">{streak}</span>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-card/20 flex items-center justify-center">
                        <Star className="w-7 h-7 text-yellow-300" />
                    </div>
                    <div>
                        <div className="text-sm text-purple-200">Your Level</div>
                        <div className="text-3xl font-bold">Level {level}</div>
                    </div>
                </div>
                {streak > 0 && (
                    <div className="text-right">
                        <div className="flex items-center gap-1 justify-end">
                            <Flame className="w-5 h-5 text-orange-400" />
                            <span className="text-2xl font-bold">{streak}</span>
                        </div>
                        <div className="text-xs text-purple-200">Day Streak</div>
                    </div>
                )}
            </div>

            {/* XP Progress Bar */}
            <div className="mb-4">
                <div className="flex justify-between text-xs text-purple-200 mb-1">
                    <span>{xpInLevel} XP</span>
                    <span>{xpNeeded} XP</span>
                </div>
                <div className="h-3 bg-card/20 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-yellow-400 to-orange-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-card/10 rounded-xl p-3">
                    <Zap className="w-5 h-5 mx-auto mb-1 text-yellow-300" />
                    <div className="text-lg font-bold">{xp}</div>
                    <div className="text-xs text-purple-200">Total XP</div>
                </div>
                <div className="bg-card/10 rounded-xl p-3">
                    <Flame className="w-5 h-5 mx-auto mb-1 text-orange-400" />
                    <div className="text-lg font-bold">{longestStreak}</div>
                    <div className="text-xs text-purple-200">Best Streak</div>
                </div>
                <div className="bg-card/10 rounded-xl p-3">
                    <TrendingUp className="w-5 h-5 mx-auto mb-1 text-green-400" />
                    <div className="text-lg font-bold">#{Math.max(1, 500 - Math.floor(xp / 20))}</div>
                    <div className="text-xs text-purple-200">Your Rank</div>
                </div>
            </div>
        </div>
    );
}
