"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useAuth } from "@/contexts/auth-context";
import { JourneyEngine, DayPlan, UserProgressContext, JourneyStep } from "@/lib/journey/journey-engine";
import JourneyTimeline from "@/components/journey/JourneyTimeline";
import {
    getStudentStats,
    getResumePoint,
    StudentStats,
} from "@/services/progressStorage";
import { getCompletedStepsForDay } from "@/lib/journey/completion-tracker";
import { getUserAccess } from "@/config/user-access-config";
import { RefreshCw, Clock, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useGamification } from "@/context/GamificationContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/language-context";
// Import the RAS Dashboard (Anti-Gravity)
import RASDashboard from "@/components/ras/RASDashboard";
import HabitTracker from "@/components/engagement/HabitTracker";
import StreakWidget from "@/components/engagement/StreakWidget";
import DailyChallengeWidget from "@/components/upsc/DailyChallengeWidget";
import Leaderboard from "@/components/upsc/Leaderboard";
import StudentDNAWidget from "@/components/dashboard/StudentDNAWidget";
import LifeMasteryReport from "@/components/dashboard/LifeMasteryReport";
import { logStudySession } from "@/services/progressStorage";
import InnerSpaceWidget from "@/components/meditation/features/InnerSpaceWidget";
import DailyMissionCard from "@/components/dashboard/DailyMissionCard";
import { pullCloudProgress, processRetryQueue } from "@/services/progressStorage";
import QuickReviewWidget from "@/components/dashboard/QuickReviewWidget";
import { subscribeToPushNotifications } from "@/lib/PushSubscriptionManager";

export default function StudentDashboard() {
    const { user } = useAuth();

    useEffect(() => {
        pullCloudProgress();
        processRetryQueue();

        // Request Web Push Permissions gracefully on load
        setTimeout(() => {
            subscribeToPushNotifications();
        }, 5000);
    }, []);
    const { streak, longestStreak, xp } = useGamification() || { streak: 0, longestStreak: 0, xp: 0 };

    // --- CHITRA-SPECIFIC OVERRIDE ---
    // The user 'chitrakumawat33@gmail.com' is on the specific "RAS Revision Plan" (Phases 1-3).
    // We override the generic 'JourneyTimeline' dashboard with her specialized Anti-Gravity Dashboard.
    const isChitra = user?.email?.toLowerCase() === "chitrakumawat33@gmail.com";

    if (isChitra) {
        return <RASDashboard />;
    }
    // --------------------------------

    // State
    const [aiMode, setAiMode] = useState(false);
    
    useEffect(() => {
        const savedMode = localStorage.getItem("aiMode");
        if (savedMode === "true") setAiMode(true);
    }, []);
    
    const toggleAiMode = () => {
        const newMode = !aiMode;
        setAiMode(newMode);
        localStorage.setItem("aiMode", String(newMode));
    };

    const [stats, setStats] = useState<StudentStats | null>(null);
    const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);

    // Load stats from storage
    const loadStats = useCallback(async () => {
        setIsRefreshing(true);
        const studentStats = getStudentStats();
        setStats(studentStats);
        setLastUpdated(new Date());
        setIsRefreshing(false);
    }, []);

    // Load completed steps from localStorage
    const loadCompletedSteps = useCallback(() => {
        const basePlan = JourneyEngine.generateDailyPlan(new Date(), {
            lastCompletedDate: null,
            streakDays: 0,
            completedChapters: [],
            masteredChapters: [],
            weakTopics: []
        });
        const completed = getCompletedStepsForDay(basePlan.dayNumber);
        setCompletedSteps(completed);
    }, []);

    // Initial load
    useEffect(() => {
        loadStats();
        loadCompletedSteps();

        // Log session start (simplified for demo: log 15 mins activity every time dashboard is opened)
        logStudySession(15);

        // Listen for storage changes
        const handleStorage = () => loadCompletedSteps();
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, [loadStats, loadCompletedSteps]);

    // Generate Dynamic Journey Plan with completion status
    const dayPlan: DayPlan | null = useMemo(() => {
        if (!stats) return null;

        // Construct Progress Context from stats
        const progressContext: UserProgressContext = {
            lastCompletedDate: null,
            streakDays: stats.overallStreak ?? 0,
            completedChapters: [],
            masteredChapters: [],
            weakTopics: []
        };

        // Pass 'now' as the target date
        const plan = JourneyEngine.generateDailyPlan(new Date(), progressContext);

        // Update step statuses based on completion data
        const updatedSteps: JourneyStep[] = plan.steps.map(step => {
            // Check if this step's base ID (without day number) is completed
            const stepBaseId = step.id.split('-')[0]; // e.g., "meditation" from "meditation-1"
            const isCompleted = completedSteps.includes(step.id) || completedSteps.includes(stepBaseId);

            return {
                ...step,
                status: isCompleted ? 'completed' : step.status
            };
        });

        return {
            ...plan,
            steps: updatedSteps
        };
    }, [stats, completedSteps]);


    const { t, language } = useLanguage();

    if (!stats || !dayPlan) {
        return (
            <div className="flex items-center justify-center h-screen bg-muted dark:bg-[#000]">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    <p className="text-muted-foreground animate-pulse">{t("common.loading")}</p>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-muted dark:bg-[#000] pb-20">
            {/* Top Bar */}
            <div className="sticky top-0 z-30 bg-card/80 dark:bg-[#000]/80 backdrop-blur-md border-b border-border px-4 py-3">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div>
                        <h2 className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider mb-0.5">
                            {t("dashboard.welcome")}, {user?.full_name?.split(' ')[0] || 'Student'}!
                        </h2>
                        <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            {t("dashboard.day")} {dayPlan.dayNumber}
                        </h1>
                        <p className="text-xs text-muted-foreground capitalize">
                            {new Date().toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <LanguageToggle />
                        <div className="hidden md:block">
                            <StreakWidget
                                data={{
                                    currentStreak: streak || stats?.overallStreak || 0,
                                    longestStreak: longestStreak || streak || 0,
                                    freezeTokens: 1,
                                    totalActiveDays: streak || 0,
                                    coinsEarned: xp,
                                    milestones: {
                                        "7_day": (streak || 0) >= 7,
                                        "30_day": (streak || 0) >= 30,
                                        "100_day": (streak || 0) >= 100
                                    }
                                }}
                                compact={true}
                            />
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={loadStats}
                            disabled={isRefreshing}
                            className="text-muted-foreground hover:text-blue-600"
                        >
                            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                        </Button>
                    </div>
                </div>
            </div>

            <div className={`max-w-4xl mx-auto px-4 pt-6 ${aiMode ? 'border-x border-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.02)]' : ''}`}>
                <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl mb-6 transition-all border ${aiMode ? 'bg-blue-50/50 border-blue-200 dark:bg-blue-900/10 dark:border-blue-800' : 'bg-card border-border'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground">
                      {t("dashboard.studyMode")}:
                    </span>
                    <button
                      onClick={toggleAiMode}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        aiMode 
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      {aiMode ? t("dashboard.aiModeOn") : t("dashboard.manualMode")}
                    </button>
                  </div>
                  {aiMode && (
                    <div className="flex flex-col sm:items-end gap-2">
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {t("dashboard.voiceActive")}
                      </span>
                      <Link href="/student/ai-portal">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm px-6 h-9">
                           {t("dashboard.openPortal")} <Sparkles className="w-3.5 h-3.5 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <DailyMissionCard />
                    <LifeMasteryReport />
                    <InnerSpaceWidget />
                    <StudentDNAWidget />
                    <HabitTracker />
                </div>
            </div>

            {/* Engagement Widgets Section */}
            <div className="max-w-4xl mx-auto px-4 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <QuickReviewWidget />
                    <DailyChallengeWidget />

                    <Link href="/student/holistic/skills">
                        <Card className="bg-gradient-to-br from-purple-900 to-indigo-950 border-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer group overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Sparkles className="w-24 h-24 text-purple-400" />
                            </div>
                            <CardContent className="p-6 relative z-10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-purple-500/20 rounded-lg">
                                        <Sparkles className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">36 Skills Hub</h3>
                                        <p className="text-xs text-white/40">Financial, Digital, & Mindset Mastery</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                            </CardContent>
                        </Card>
                    </Link>

                    <Leaderboard />
                </div>
            </div>

            {/* Dynamic Timeline */}
            <div className="pt-8">
                <JourneyTimeline plan={dayPlan} />
            </div>

            {/* Quick Access Modules */}
            <div className="max-w-4xl mx-auto px-4 md:px-8 mt-12">
                <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {t("dashboard.jumpToModule")}
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { name: t('dashboard.meditation'), href: '/student/meditation', emoji: '🧘', color: 'from-indigo-500 to-purple-600', accessKey: 'meditation' },
                        { name: t('dashboard.graphotherapy'), href: '/student/graphotherapy', emoji: '✍️', color: 'from-emerald-500 to-teal-600', accessKey: 'graphotherapy' },
                        { name: 'Evening Section', href: '/student/batch1-1/evening', emoji: '🔦', color: 'from-purple-500 to-pink-600', accessKey: 'batch1' },
                        { name: t('dashboard.drill'), href: '/student/revision', emoji: '🧠', color: 'from-amber-500 to-orange-600', accessKey: 'revisionPortal' },
                        { name: 'Polity Study', href: '/student/batch1-1/polity', emoji: '📚', color: 'from-blue-500 to-cyan-600', accessKey: 'batch1Polity' },
                        { name: 'Geography Study', href: '/student/batch1/geography', emoji: '🌍', color: 'from-emerald-500 to-green-600', accessKey: 'batch1' },
                        { name: 'Ancient History', href: '/student/batch1-1/ancient-history', emoji: '🏛️', color: 'from-stone-500 to-amber-700', accessKey: 'batch1Polity' },
                        { name: 'Deep Report', href: '/student/batch1-1/deep-report', emoji: '📊', color: 'from-indigo-500 to-violet-600', accessKey: 'batch1' },
                    ]
                        .filter((module) => {
                            // Filter modules based on user access
                            const userConfig = getUserAccess(user?.email);
                            const accessKey = module.accessKey as keyof typeof userConfig.access;
                            return userConfig.access[accessKey] === true;
                        })
                        .map((module) => (
                            <a
                                key={module.name}
                                href={module.href}
                                className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${module.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`} />
                                <div className="text-3xl mb-3">{module.emoji}</div>
                                <div className="font-bold text-foreground">{module.name}</div>
                                <div className="text-xs text-muted-foreground mt-1">{t('dashboard.explore')} →</div>
                            </a>
                        ))}
                </div>
            </div>
        </div>
    );
}


