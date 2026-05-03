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
import { RefreshCw, Clock, ChevronRight, Sparkles, Users, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

import { pullCloudProgress, processRetryQueue } from "@/services/progressStorage";
import QuickReviewWidget from "@/components/dashboard/QuickReviewWidget";
import { subscribeToPushNotifications } from "@/lib/PushSubscriptionManager";
import { useDashboardData } from "@/hooks/useDashboardData";
import { SaritLogo, SaritGlobe, SaritIcon, StreakBadge } from "@/components/ui/sarit-primitives";
import { getSubjectColor } from "@/lib/subject-colors";

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
    const [aiMissionStatus, setAiMissionStatus] = useState<{ recovery_mode: boolean, recommended_subject: string } | null>(null);

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
    const [isOnboarded, setIsOnboarded] = useState<boolean>(true); // Default to true to avoid flicker
    const [showMilestone, setShowMilestone] = useState(false);

    // AI Dashboard Data (from StudentDashboardService)
    const { data: dashboardData, loading: dashboardLoading } = useDashboardData();

    // Check onboarding status
    useEffect(() => {
        if (user) {
            setIsOnboarded(user.is_onboarded ?? true);
        }
    }, [user]);

    // Check Day 7 Milestone
    useEffect(() => {
        if (dashboardData?.habit_lock?.day === 7 && !localStorage.getItem('day7_committed')) {
            const timer = setTimeout(() => {
                setShowMilestone(true);
            }, 1000); // Show after transition toast clears
            return () => clearTimeout(timer);
        }
    }, [dashboardData]);

    const handleCommit = () => {
        setShowMilestone(false);
        localStorage.setItem('day7_committed', 'true');
        // Future: Trigger backend record_commitment endpoint
    };

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

        // Check overarching AI mission
        const fetchAiMissionStatus = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;
                const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';
                const response = await fetch(`${baseUrl}/ai-learning/dashboard/mission`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    const data = await response.json();
                    setAiMissionStatus({
                        recovery_mode: data.recovery_mode,
                        recommended_subject: data.recommended_subject
                    });
                }
            } catch (err) {
                console.error("Error fetching AI Mission status", err);
            }
        };
        fetchAiMissionStatus();

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
        <>
            {/* ── Main page ────────────────────────────────────────────────── */}
            <div
                className="topo"
                style={{
                    minHeight: '100vh',
                    background: 'var(--surface)',
                    paddingBottom: 80,
                    transition: 'filter 0.7s',
                    ...(!isOnboarded ? { filter: 'blur(12px) grayscale(1)', pointerEvents: 'none' } : {}),
                }}
            >
                {/* ── SECTION A: Top Navigation ──────────────────────────────── */}
                <nav style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 30,
                    background: 'var(--paper)',
                    borderBottom: '1px solid var(--line)',
                }}>
                    <div style={{
                        maxWidth: 1240,
                        margin: '0 auto',
                        padding: '0 40px',
                        height: 56,
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        {/* Logo */}
                        <div style={{ flexShrink: 0 }}>
                            <SaritLogo size={22} />
                        </div>

                        {/* Center nav links — visual only, Today is active */}
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 4 }}>
                            {(['Today', 'Study', 'Revise', 'Report', 'Syllabus'] as string[]).map(link => (
                                <button
                                    key={link}
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: 13.5,
                                        fontWeight: link === 'Today' ? 600 : 500,
                                        color: link === 'Today' ? 'var(--forest)' : 'var(--ink-70)',
                                        background: link === 'Today' ? 'var(--surface-2)' : 'transparent',
                                        border: 'none',
                                        padding: '8px 14px',
                                        borderRadius: 999,
                                        cursor: 'pointer',
                                        lineHeight: 1,
                                    }}
                                >
                                    {link}
                                </button>
                            ))}
                        </div>

                        {/* Right: streak badge + divider + name + avatar */}
                        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 12 }}>
                            <StreakBadge days={streak || stats.overallStreak || 0} compact />
                            <div style={{ width: 1, height: 20, background: 'var(--line-strong)' }} />
                            <span style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: 13,
                                fontWeight: 500,
                                color: 'var(--ink-70)',
                            }}>
                                {user?.full_name || 'Student'}
                            </span>
                            <div style={{
                                width: 34,
                                height: 34,
                                borderRadius: '50%',
                                background: 'var(--forest)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'var(--font-display)',
                                fontWeight: 600,
                                fontSize: 13,
                                userSelect: 'none',
                                flexShrink: 0,
                            }}>
                                {(user?.full_name || 'S').split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Content wrapper */}
                <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 40px' }}>

                    {/* ── SECTION B: Hero ──────────────────────────────────────── */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1.3fr 1fr',
                        gap: 40,
                        paddingTop: 56,
                        paddingBottom: 48,
                        alignItems: 'center',
                    }}>
                        {/* Left column */}
                        <div>
                            <span
                                className="sl-chip teal"
                                style={{ marginBottom: 20, display: 'inline-flex' }}
                            >
                                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                {' · Day '}{dayPlan.dayNumber}{' of 30'}
                            </span>
                            <h1 style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                fontSize: 42,
                                lineHeight: 1.12,
                                color: 'var(--ink)',
                                margin: '0 0 16px 0',
                                letterSpacing: '-0.02em',
                            }}>
                                Today you command
                                <br />
                                <span style={{ color: 'var(--teal-600)' }}>
                                    {aiMissionStatus?.recommended_subject || 'Your UPSC Journey'}
                                </span>
                            </h1>
                            <p style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: 15,
                                color: 'var(--ink-55)',
                                lineHeight: 1.6,
                                margin: '0 0 28px 0',
                                maxWidth: 440,
                            }}>
                                {(stats.overallStreak ?? 0) > 0
                                    ? `${stats.overallStreak} days strong. Keep the momentum going.`
                                    : 'Begin your first session today.'}
                            </p>
                            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                                <Link href="/student/batch1">
                                    <button style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 8,
                                        height: 44,
                                        padding: '0 24px',
                                        borderRadius: 999,
                                        background: 'var(--forest)',
                                        color: 'white',
                                        border: 'none',
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 600,
                                        fontSize: 14,
                                        cursor: 'pointer',
                                    }}>
                                        <SaritIcon name="play" size={15} color="white" />
                                        Begin today's topic
                                    </button>
                                </Link>
                                <Link href="/student/my-plan">
                                    <button style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        height: 44,
                                        padding: '0 24px',
                                        borderRadius: 999,
                                        background: 'transparent',
                                        color: 'var(--forest)',
                                        border: '1.5px solid var(--forest)',
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 600,
                                        fontSize: 14,
                                        cursor: 'pointer',
                                    }}>
                                        See the plan
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right column — globe */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <SaritGlobe
                                size={260}
                                label={aiMissionStatus?.recommended_subject || 'UPSC'}
                                monthDay={dayPlan.dayNumber}
                                totalDays={30}
                            />
                        </div>
                    </div>

                    {/* ── SECTION C: Stats row ─────────────────────────────────── */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 16,
                        marginBottom: 48,
                    }}>
                        {[
                            { value: streak || stats.overallStreak || 0, icon: 'flame',  label: 'Day Streak' },
                            { value: xp,                                  icon: 'spark',  label: 'Total XP' },
                            { value: 8,                                   icon: 'layers', label: 'Active Subjects' },
                        ].map(({ value, icon, label }) => (
                            <div key={label} style={{
                                background: 'var(--paper)',
                                borderRadius: 'var(--r-lg)',
                                padding: '20px 24px',
                                border: '1px solid var(--line)',
                                boxShadow: 'var(--shadow-card)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 16,
                            }}>
                                <div style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 'var(--r-md)',
                                    background: 'var(--teal-50)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    <SaritIcon name={icon} size={20} color="var(--teal)" />
                                </div>
                                <div>
                                    <div style={{
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 700,
                                        fontSize: 28,
                                        color: 'var(--forest)',
                                        lineHeight: 1,
                                        marginBottom: 4,
                                    }}>
                                        {value}
                                    </div>
                                    <div style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: 13,
                                        color: 'var(--ink-55)',
                                    }}>
                                        {label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── SECTION D: Module cards ───────────────────────────────── */}
                    <div style={{ marginBottom: 56 }}>
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            fontSize: 18,
                            color: 'var(--ink)',
                            margin: '0 0 20px 0',
                        }}>
                            Your Modules
                        </h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: 16,
                        }}>
                            {[
                                { id: 'smart-meditation', name: t('dashboard.meditation'),    href: '/student/meditation',              emoji: '🧘', accessKey: 'meditation',     subjectKey: 'meditation'    },
                                { id: 'grapho-kit',       name: t('dashboard.graphotherapy'), href: '/student/graphotherapy',            emoji: '✍️', accessKey: 'graphotherapy',  subjectKey: 'graphotherapy' },
                                { id: 'evening-session',  name: 'Evening Section',            href: '/student/batch1-1/evening',         emoji: '🔦', accessKey: 'batch1',         subjectKey: 'evening'       },
                                { id: 'revision-portal',  name: t('dashboard.drill'),         href: '/student/revision',                 emoji: '🧠', accessKey: 'revisionPortal', subjectKey: 'revision'      },
                                { id: 'polity',           name: 'Laxmikanth Navigator',       href: '/student/batch1-1/polity',          emoji: '📚', accessKey: 'batch1Polity',   subjectKey: 'polity'        },
                                { id: 'geography',        name: 'Geography Study',            href: '/student/batch1/geography',         emoji: '🌍', accessKey: 'geography',      subjectKey: 'geography'     },
                                { id: 'history_ancient',  name: 'Ancient History',            href: '/student/batch1-1/ancient-history', emoji: '🏛️', accessKey: 'batch1Polity',   subjectKey: 'history'       },
                                { id: 'deep-report',      name: 'Deep Report',                href: '/student/batch1-1/deep-report',     emoji: '📊', accessKey: 'batch1',         subjectKey: 'report'        },
                            ].map((module) => {
                                const userConfig = getUserAccess(user?.email);
                                const accessKey = module.accessKey as keyof typeof userConfig.access;
                                const isLocked = userConfig.access[accessKey] !== true;
                                const isRecommended = aiMissionStatus?.recommended_subject?.toLowerCase() === module.subjectKey;
                                const subjectColor = getSubjectColor(module.subjectKey);
                                const href = isLocked ? `/student/upsc-store?subject=${module.id}` : module.href;

                                return (
                                    <Link key={module.id} href={href}>
                                        <div style={{
                                            background: 'var(--paper)',
                                            borderRadius: 'var(--r-lg)',
                                            border: `1px solid ${isRecommended ? 'rgba(239,159,39,0.4)' : 'var(--line)'}`,
                                            boxShadow: isRecommended
                                                ? '0 0 0 2px rgba(239,159,39,0.12), var(--shadow-card)'
                                                : 'var(--shadow-card)',
                                            overflow: 'hidden',
                                            opacity: isLocked ? 0.75 : 1,
                                            cursor: 'pointer',
                                            transition: 'box-shadow 0.18s, opacity 0.18s',
                                        }}>
                                            {/* Colored subject bar */}
                                            <div style={{ height: 4, background: subjectColor }} />

                                            <div style={{ padding: '16px 18px 18px' }}>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'flex-start',
                                                    marginBottom: 8,
                                                }}>
                                                    <span style={{ fontSize: 22 }}>{module.emoji}</span>
                                                    {isLocked
                                                        ? <SaritIcon name="lock" size={14} color="var(--ink-35)" />
                                                        : isRecommended
                                                            ? <span className="sl-chip amber" style={{ fontSize: 9, padding: '2px 8px' }}>AI Pick</span>
                                                            : null}
                                                </div>

                                                <div style={{
                                                    fontFamily: 'var(--font-display)',
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    color: isLocked ? 'var(--ink-55)' : isRecommended ? '#8a5508' : 'var(--ink)',
                                                    marginBottom: 12,
                                                    lineHeight: 1.3,
                                                }}>
                                                    {module.name}
                                                </div>

                                                <div className="sl-bar" style={{ marginBottom: 14 }}>
                                                    <span style={{ width: '0%' }} />
                                                </div>

                                                {isLocked ? (
                                                    <span style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: 4,
                                                        fontFamily: 'var(--font-display)',
                                                        fontWeight: 600,
                                                        fontSize: 12,
                                                        color: 'var(--teal)',
                                                    }}>
                                                        Unlock <SaritIcon name="arrow" size={12} color="var(--teal)" />
                                                    </span>
                                                ) : (
                                                    <span style={{
                                                        fontFamily: 'var(--font-display)',
                                                        fontWeight: 500,
                                                        fontSize: 12,
                                                        color: 'var(--ink-55)',
                                                    }}>
                                                        Continue →
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── Journey Timeline (preserved exactly) ─────────────────── */}
                    <JourneyTimeline plan={dayPlan} aiOverride={aiMissionStatus?.recovery_mode} />

                </div>
            </div>
        </>
    );
}
