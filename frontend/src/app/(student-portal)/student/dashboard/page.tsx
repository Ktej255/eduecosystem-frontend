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
            lastCompletedDate: stats.lastStudyDate,
            streakDays: stats.overallStreak,
            completedChapters: [], // TODO: Fetch actal completed chapters from localStorage
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
        </div>
    );
}


