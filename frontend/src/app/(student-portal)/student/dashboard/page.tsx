"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useAuth } from "@/contexts/auth-context";
import { JourneyEngine, DayPlan, UserProgressContext } from "@/lib/journey/journey-engine";
import JourneyTimeline from "@/components/journey/JourneyTimeline";
import {
    getStudentStats,
    getResumePoint,
    StudentStats,
} from "@/services/progressStorage";
import { RefreshCw, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StudentDashboard() {
    const { user } = useAuth();

    // State
    const [stats, setStats] = useState<StudentStats | null>(null);
    const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
    const [isRefreshing, setIsRefreshing] = useState(false);

    // Load stats from storage
    const loadStats = useCallback(async () => {
        setIsRefreshing(true);
        const studentStats = getStudentStats();
        setStats(studentStats);
        setLastUpdated(new Date());
        setIsRefreshing(false);
    }, []);

    // Initial load
    useEffect(() => {
        loadStats();
    }, [loadStats]);

    // Generate Dynamic Journey Plan
    const dayPlan: DayPlan | null = useMemo(() => {
        if (!stats) return null;

        // Construct Progress Context from stats
        const progressContext: UserProgressContext = {
            lastCompletedDate: null, // Not tracked in current StudentStats
            streakDays: stats.overallStreak ?? 0,
            completedChapters: [], // TODO: Fetch actual completed chapters from localStorage
            masteredChapters: [],
            weakTopics: []
        };

        // Pass 'now' as the target date
        return JourneyEngine.generateDailyPlan(new Date(), progressContext);
    }, [stats]);


    if (!stats || !dayPlan) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-[#000]">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    <p className="text-gray-500 animate-pulse">Calculating your optimal journey...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#000] pb-20">
            {/* Top Bar */}
            <div className="sticky top-0 z-30 bg-white/80 dark:bg-[#000]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            Day {dayPlan.dayNumber}
                        </h1>
                        <p className="text-xs text-gray-500">
                            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                            <span className="text-lg">🔥</span>
                            <span className="text-sm font-bold text-orange-700 dark:text-orange-400">{stats.overallStreak} Day Streak</span>
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={loadStats}
                            disabled={isRefreshing}
                            className="text-gray-400 hover:text-blue-600"
                        >
                            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Dynamic Timeline */}
            <div className="pt-8">
                <JourneyTimeline plan={dayPlan} />
            </div>

            {/* Quick Access Modules */}
            <div className="max-w-4xl mx-auto px-4 md:px-8 mt-12">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Jump to Module
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: 'Meditation', href: '/student/meditation', emoji: '🧘', color: 'from-indigo-500 to-purple-600' },
                        { name: 'Graphotherapy', href: '/student/graphotherapy', emoji: '✍️', color: 'from-emerald-500 to-teal-600' },
                        { name: 'Revision', href: '/student/revision', emoji: '🧠', color: 'from-amber-500 to-orange-600' },
                        { name: 'Polity Study', href: '/student/batch1/polity', emoji: '📚', color: 'from-blue-500 to-cyan-600' },
                    ].map((module) => (
                        <a
                            key={module.name}
                            href={module.href}
                            className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${module.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`} />
                            <div className="text-3xl mb-3">{module.emoji}</div>
                            <div className="font-bold text-gray-900 dark:text-white">{module.name}</div>
                            <div className="text-xs text-gray-500 mt-1">Explore →</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}


