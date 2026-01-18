"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trophy, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
    ACHIEVEMENTS,
    getUnlockedAchievements,
    getAchievementProgress
} from '@/lib/gamification/achievements';
import { Achievement } from '@/lib/gamification/gamification-types';

export default function AchievementsPage() {
    const router = useRouter();
    const [unlocked, setUnlocked] = useState<Achievement[]>([]);
    const [inProgress, setInProgress] = useState<Array<Achievement & { progress: number; max: number }>>([]);
    const [locked, setLocked] = useState<Achievement[]>([]);

    useEffect(() => {
        const unlockedList = getUnlockedAchievements();
        const progressList = getAchievementProgress();

        // Filter out in-progress from remaining locked to avoid duplicates if any logic overlaps
        // Actually ACHIEVEMENTS is the source. 
        // inProgress returned by getAchievementProgress covers ALL locked achievements with relevant tracking.
        // Some might effectively be 0 progress.

        setUnlocked(unlockedList);
        setInProgress(progressList);
    }, []);

    return (
        <div className="space-y-8 max-w-5xl mx-auto p-4 md:p-6 pb-20">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => router.back()}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                        <Trophy className="h-6 w-6 text-yellow-500" />
                        Achievements Gallery
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Track your milestones and earned badges.
                    </p>
                </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200">
                    <CardContent className="p-4 text-center">
                        <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                            {unlocked.length} / {ACHIEVEMENTS.length}
                        </div>
                        <div className="text-xs text-yellow-700 dark:text-yellow-300 font-medium uppercase tracking-wider mt-1">
                            Badges Earned
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Unlocked Badges */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Unlocked Badges</h2>
                {unlocked.length === 0 ? (
                    <div className="p-8 text-center text-gray-500 italic bg-gray-50 rounded-xl border border-dashed">
                        No badges earned yet. Start studying to unlock!
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {unlocked.map(achievement => (
                            <Card key={achievement.id} className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 text-center hover:scale-105 transition-transform duration-300">
                                <CardContent className="p-6 flex flex-col items-center gap-3">
                                    <div className="text-4xl filter drop-shadow-md">
                                        {achievement.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-sm text-gray-800 dark:text-gray-100">
                                            {achievement.name}
                                        </h3>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                                            {achievement.description}
                                        </p>
                                    </div>
                                    <div className="mt-2 text-xs font-mono font-medium text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full">
                                        +{achievement.xpReward} XP
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </section>

            {/* In Progress */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">In Progress</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {inProgress.map(item => {
                        const percent = Math.min(100, Math.round((item.progress / item.max) * 100));
                        return (
                            <Card key={item.id} className="bg-white dark:bg-gray-800">
                                <CardContent className="p-4 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-2xl grayscale opacity-50">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex justify-between">
                                            <h3 className="font-medium text-sm">{item.name}</h3>
                                            <span className="text-xs text-gray-500">{item.progress} / {item.max}</span>
                                        </div>
                                        <Progress value={percent} className="h-2" />
                                        <p className="text-xs text-gray-500">{item.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
