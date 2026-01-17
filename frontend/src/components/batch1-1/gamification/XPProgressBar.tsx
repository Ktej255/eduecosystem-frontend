"use client";

import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Flame, Sparkles } from 'lucide-react';
import { getUserXP, getLevelIcon, getLevelTitle } from '@/lib/gamification';

interface XPProgressBarProps {
    compact?: boolean;
    showStreak?: boolean;
}

export default function XPProgressBar({ compact = false, showStreak = true }: XPProgressBarProps) {
    const [xpData, setXpData] = useState<ReturnType<typeof getUserXP> | null>(null);

    useEffect(() => {
        const data = getUserXP();
        setXpData(data);

        // Listen for XP updates (custom event)
        const handleXPUpdate = () => {
            setXpData(getUserXP());
        };

        window.addEventListener('xp-updated', handleXPUpdate);
        return () => window.removeEventListener('xp-updated', handleXPUpdate);
    }, []);

    if (!xpData) return null;

    const progressPercent = (xpData.currentXP / xpData.xpToNextLevel) * 100;

    if (compact) {
        return (
            <div className="flex items-center gap-2">
                <span className="text-lg">{getLevelIcon(xpData.level)}</span>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    Lv.{xpData.level}
                </span>
                {showStreak && xpData.streak > 0 && (
                    <Badge className="bg-orange-500 text-white gap-1 text-xs">
                        <Flame className="h-3 w-3" />
                        {xpData.streak}
                    </Badge>
                )}
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-800 border rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl">
                        {getLevelIcon(xpData.level)}
                    </div>
                    <div>
                        <div className="font-bold text-lg text-gray-800 dark:text-gray-200">
                            Level {xpData.level}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            {getLevelTitle(xpData.level)}
                        </div>
                    </div>
                </div>

                {showStreak && (
                    <div className="text-center">
                        <div className="flex items-center gap-1">
                            <Flame className={`h-5 w-5 ${xpData.streak > 0 ? 'text-orange-500' : 'text-gray-300'}`} />
                            <span className={`text-xl font-bold ${xpData.streak > 0 ? 'text-orange-500' : 'text-gray-400'}`}>
                                {xpData.streak}
                            </span>
                        </div>
                        <div className="text-xs text-gray-500">Day Streak</div>
                    </div>
                )}
            </div>

            <div className="space-y-1">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Sparkles className="h-3 w-3 text-indigo-500" />
                        {xpData.currentXP} / {xpData.xpToNextLevel} XP
                    </span>
                    <span className="text-indigo-600 font-medium">
                        {Math.round(progressPercent)}%
                    </span>
                </div>
                <Progress
                    value={progressPercent}
                    className="h-3 bg-gray-100 dark:bg-gray-700"
                />
            </div>

            <div className="mt-3 text-center text-xs text-gray-500">
                Total XP: {xpData.totalXP.toLocaleString()} • Longest Streak: {xpData.longestStreak} days
            </div>
        </div>
    );
}
