"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/contexts/auth-context";
import {
    BookOpen,
    Brain,
    TrendingUp,
    ArrowRight,
    PlayCircle,
    Target,
    Pen,
    GraduationCap,
    RefreshCw,
    Clock,
    Rocket,
    Sparkles,
    Bot,
    Trophy,
    Layers,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import {
    getStudentStats,
    getResumePoint,
    getMeditationProgress,
    getGraphotherapyProgress,
    getLearningProgress,
    ResumePoint,
    StudentStats,
} from "@/services/progressStorage";
import { getStudySessionService, StudySessionStats } from "@/services/studySessionService";
import TestHistoryModal from "@/components/batch1/qa/TestHistoryModal";


export default function StudentDashboard() {
    const { user } = useAuth();
    const [stats, setStats] = useState<StudentStats | null>(null);
    const [resumePoint, setResumePoint] = useState<ResumePoint | null>(null);
    const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

    const [isRefreshing, setIsRefreshing] = useState(false);
    const [showHistoryModal, setShowHistoryModal] = useState(false);


    // RAS Data State - ensure /api/v1 suffix
    const [rasDashboard, setRasDashboard] = useState<any | null>(null);
    const [studyStats, setStudyStats] = useState<StudySessionStats | null>(null);
    const [testResults, setTestResults] = useState<any[]>([]);
    // FORCE AWS URL
    const API_BASE = "https://a7z4kjysmp.us-east-1.awsapprunner.com/api/v1";
    const userEmail = user?.email || "";
    const isMasterId = userEmail.toLowerCase() === "ktej255@gmail.com";
    const isSpecialBatch1Student = ["kajaldhannatar@gmail.com", "dikshajakhar0212@gmail.com", "test001@gmail.com"].includes(userEmail.toLowerCase());
    const isRasAuthorized = user?.is_ras_authorized || userEmail === "chitrakumawat33@gmail.com";
    const isBatch1Authorized = true; // FORCE ENABLED FOR VERIFICATION

    // Load stats from storage
    const loadStats = useCallback(async () => {
        setIsRefreshing(true);

        const studentStats = getStudentStats();
        const resume = getResumePoint();

        setStats(studentStats);
        setResumePoint(resume);

        if (userEmail) {
            try {
                const sStats = await getStudySessionService().getStats(userEmail);
                setStudyStats(sStats);
            } catch (e) {
                console.error("Error loading study stats:", e);
            }
        }

        setLastUpdated(new Date());
        setIsRefreshing(false);
    }, [userEmail]);

    // Fetch RAS Data
    useEffect(() => {
        if (!userEmail) return;
        async function fetchRasData() {
            try {
                const res = await fetch(`${API_BASE}/planner/dashboard/${userEmail}`);
                if (res.ok) {
                    const data = await res.json();
                    setRasDashboard(data);
                }
            } catch (error) {
                console.error("Error fetching RAS data:", error);
            }
        }
        fetchRasData();
    }, [userEmail, API_BASE]);

    // Fetch Batch 1 Test Results for dashboard
    useEffect(() => {
        if (!isBatch1Authorized) return;
        async function fetchTestResults() {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch(`${API_BASE}/batch1/test-results`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) {
                    const data = await res.json();
                    setTestResults(data.slice(0, 3)); // Only last 3 tests
                }
            } catch (error) {
                console.error("Error fetching test results:", error);
            }
        }
        fetchTestResults();
    }, [isBatch1Authorized, API_BASE]);

    // Initial load
    useEffect(() => {
        loadStats();
    }, [loadStats]);

    // Listen for storage changes (cross-tab sync)
    useEffect(() => {
        const handleStorageChange = () => {
            loadStats();
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [loadStats]);

    // Auto-refresh on window focus
    useEffect(() => {
        const handleFocus = () => {
            loadStats();
        };

        window.addEventListener('focus', handleFocus);
        return () => window.removeEventListener('focus', handleFocus);
    }, [loadStats]);

    // Auto-refresh every 30 seconds
    useEffect(() => {
        const interval = setInterval(loadStats, 30000);
        return () => clearInterval(interval);
    }, [loadStats]);

    if (!stats) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }


    return (
        <div className="space-y-8 max-w-7xl mx-auto p-4 md:p-6">
            {/* DEBUG BANNER FOR TEST001 */}
            {userEmail.toLowerCase().includes("test") && (
                <div className="bg-red-600 text-white p-4 rounded-lg font-bold text-lg text-center animate-pulse">
                    DEBUG INFO: <br />
                    Email: '{userEmail}' <br />
                    Batch 1 Authorized: {isBatch1Authorized ? "YES" : "NO"} <br />
                    Is Special Student: {isSpecialBatch1Student ? "YES" : "NO"}
                </div>
            )}

            {/* Hero Section with Resume Point */}
            <div className="relative overflow-hidden rounded-3xl bg-indigo-900 text-white shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500 rounded-full blur-3xl opacity-10 -ml-10 -mb-10"></div>

                <div className="relative p-8 md:p-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="space-y-4 max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm border border-white/10">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                Continue Your Practice
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold font-display leading-tight text-white">
                                Welcome Back! 👋
                            </h1>
                            <p className="text-blue-100 text-lg">
                                Keep your {stats?.overallStreak || 0}-day streak alive! You have activities waiting.
                            </p>
                        </div>

                        {/* Resume Learning Card */}
                        {(() => {
                            let displayResume = resumePoint;

                            // Override for RAS if user is not in Batch 1 or has no Batch 1 progress
                            if (isRasAuthorized && (!isBatch1Authorized || !resumePoint?.type || resumePoint.type === 'prelims')) {
                                if (rasDashboard?.next_topic) {
                                    displayResume = {
                                        type: 'ras' as any,
                                        label: rasDashboard.next_topic.name,
                                        href: '/student/my-plan',
                                        details: `Next: Day ${rasDashboard.next_topic.day} • ${rasDashboard.next_topic.subject}`
                                    };
                                } else if (!isBatch1Authorized) {
                                    // If strictly RAS and no dashboard data yet, show link to plan
                                    displayResume = {
                                        type: 'ras' as any,
                                        label: 'RAS Revision Plan',
                                        href: '/student/my-plan',
                                        details: 'Continue your RAS preparation'
                                    };
                                }
                            }

                            if (!displayResume) return null;

                            return (
                                <Link href={displayResume.href}>
                                    <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all cursor-pointer min-w-[280px]">
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-3 mb-2">
                                                <PlayCircle className="h-8 w-8 text-green-400" />
                                                <div>
                                                    <p className="text-white font-semibold">Resume Learning</p>
                                                    <p className="text-blue-200 text-sm">{displayResume.label}</p>
                                                </div>
                                            </div>
                                            <p className="text-blue-300 text-xs">{displayResume.details}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            );
                        })()}
                    </div>
                </div>
            </div>

            {/* Quick Refresh Button */}
            <div className="flex justify-end items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={loadStats}
                    disabled={isRefreshing}
                >
                    <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow-sm border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
                        <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Streak</p>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{stats?.overallStreak || 0} Days 🔥</h4>
                    </div>
                </div>

                <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow-sm border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
                        <Clock className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Total Study</p>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{studyStats?.overall?.total_hours || 0}h</h4>
                    </div>
                </div>

                <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow-sm border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
                        <Brain className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Meditation</p>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">Lv{stats?.meditation?.currentLevel} D{stats?.meditation?.currentDay}</h4>
                    </div>
                </div>

                <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow-sm border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500">
                        <Pen className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Graphotherapy</p>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">Lv{stats?.graphotherapy?.currentLevel} D{stats?.graphotherapy?.currentDay}</h4>
                    </div>
                </div>
            </div>

            {/* Activity Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* RAS Revision Card */}
                {(isRasAuthorized || isMasterId) && (
                    <Card className="border-l-4 border-l-indigo-600 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/20 dark:to-neutral-900 shadow-md">
                        <CardHeader className="pb-2">
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Target className="h-5 w-5 text-indigo-600" />
                                RAS Revision Mastery
                                <span className="ml-auto px-2 py-0.5 text-xs bg-indigo-100 text-indigo-700 rounded-full flex items-center gap-1 animate-pulse">
                                    <Sparkles className="h-3 w-3" />
                                    Live
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Total Topics</span>
                                    <span className="font-semibold">{rasDashboard?.overall_progress?.completed_topics || 0} / {rasDashboard?.overall_progress?.total_topics || 350}</span>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                                        <span>Coverage</span>
                                        <span>{rasDashboard?.overall_progress?.percentage || 0}%</span>
                                    </div>
                                    <Progress value={dashboard_percentage(rasDashboard)} className="h-2" />
                                </div>

                                <Link href="/student/my-plan">
                                    <Button className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700">
                                        Open Revision Plan <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Batch 1 Card */}
                {(user?.is_batch1_authorized || isSpecialBatch1Student || isMasterId) && (
                    <Card className="border-l-4 border-l-blue-600 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-neutral-900 shadow-md">
                        <CardHeader className="pb-2">
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <BookOpen className="h-5 w-5 text-blue-600" />
                                Batch 1: UPSC Prelims
                                <span className="ml-auto px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full flex items-center gap-1">
                                    <Rocket className="h-3 w-3" />
                                    Active
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Continue your systematic 90-day coverage of the UPSC syllabus. 10-Day Polity & History Smart Modules active.
                                </p>

                                {/* Recent Test Scores */}
                                {testResults.length > 0 && (
                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-1">
                                            <Trophy className="h-3 w-3" /> Recent Test Scores
                                        </p>
                                        <div className="space-y-1">
                                            {testResults.map((result, idx) => (
                                                <div key={idx} className="flex justify-between text-xs">
                                                    <span className="text-gray-600 dark:text-gray-400">Day {result.day_number}</span>
                                                    <span className={`font-bold ${result.score >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                        {result.score} ({result.correct_count}/{result.total_questions})
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}


                                <div className="grid grid-cols-2 gap-2">
                                    <Button
                                        variant="outline"
                                        className="w-full text-blue-600 border-blue-200 hover:bg-blue-50"
                                        onClick={() => setShowHistoryModal(true)}
                                    >
                                        <Trophy className="mr-2 h-4 w-4" /> Reports
                                    </Button>
                                    <Link href="/student/batch1" className="w-full">
                                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                            Enter Class <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}

                <TestHistoryModal
                    isOpen={showHistoryModal}
                    onClose={() => setShowHistoryModal(false)}
                />

                {/* Batch 1.1: Pomodoro Revision */}
                {(user?.is_batch1_authorized || isSpecialBatch1Student || isMasterId) && (
                    <Card className="border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 shadow-md">
                        <CardHeader className="pb-2">
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Clock className="h-5 w-5 text-orange-600" />
                                Batch 1.1: Pomodoro Revision
                                <span className="ml-auto px-2 py-0.5 text-xs bg-orange-100 text-orange-700 rounded-full flex items-center gap-1 animate-pulse">
                                    <Sparkles className="h-3 w-3" />
                                    New
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    6-hour daily Pomodoro sessions. 25-min focus + 5-min breaks. Voice recall after every 2 sessions.
                                </p>

                                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                                    <div className="flex items-center gap-2 text-orange-700 dark:text-orange-300 text-sm font-medium mb-2">
                                        <Target className="h-4 w-4" />
                                        Daily Schedule
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-xs text-orange-600 dark:text-orange-400">
                                        <div>🌅 Morning: 8 AM - 2 PM</div>
                                        <div>🌙 Evening: Flashcards & MCQs</div>
                                    </div>
                                </div>

                                <Link href="/student/batch1-1">
                                    <Button className="w-full mt-2 bg-orange-500 hover:bg-orange-600">
                                        Enter Pomodoro Mode <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                )}


                {/* Batch 2 Card */}
                {(user?.is_batch2_authorized || isMasterId) && (
                    <Card className="border-l-4 border-l-purple-600 bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-neutral-900 shadow-md">
                        <CardHeader className="pb-2">
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Layers className="h-5 w-5 text-purple-600" />
                                Batch 2: Sanatana Dharma
                                <span className="ml-auto px-2 py-0.5 text-xs bg-purple-100 text-purple-700 rounded-full flex items-center gap-1">
                                    <Sparkles className="h-3 w-3" />
                                    Active
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Explore the complete hierarchy of Indian philosophical texts. Journey through Upanishads and Bhagavad Gita active.
                                </p>
                                <Link href="/student/batch2">
                                    <Button className="w-full mt-2 bg-purple-600 hover:bg-purple-700">
                                        Go to Batch 2 <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Focused Study (Pomodoro) */}
                <Card className="border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/20 dark:to-neutral-900 shadow-md">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Clock className="h-5 w-5 text-orange-600" />
                            Focused Study
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Pomodoros</span>
                                    <span className="font-semibold">{studyStats?.overall?.study_sessions || 0} complete</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Explanations</span>
                                    <span className="font-semibold">{studyStats?.overall?.explanations || 0}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Avg. Comprehension</span>
                                    <span className="font-semibold text-orange-600">{studyStats?.overall?.average_comprehension || 0}%</span>
                                </div>
                            </div>

                            <Link href="/student/study-session">
                                <Button className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white">
                                    Start Session <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                {/* AI Coach Card */}
                <Card className="border-l-4 border-l-rose-500 bg-gradient-to-br from-rose-50 to-white dark:from-rose-900/20 dark:to-neutral-900 shadow-md">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Bot className="h-5 w-5 text-rose-600" />
                            AI Personal Coach
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Your 24/7 intelligent study companion. Ask doubts, get explanations, and track your learning gaps.
                            </p>

                            <Link href="/student/ai-coach">
                                <Button className="w-full mt-2 bg-rose-500 hover:bg-rose-600 text-white">
                                    Chat with Coach <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                {/* Meditation Card */}
                <Card className="border-l-4 border-l-purple-500">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Brain className="h-5 w-5 text-purple-600" />
                            Meditation
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Current Level</span>
                                <span className="font-semibold">Level {stats?.meditation?.currentLevel}</span>
                            </div>
                            <Progress value={(stats?.meditation?.currentDay / 60) * 100} className="h-2" />
                            <Link href="/student/meditation">
                                <Button variant="outline" className="w-full mt-2 border-purple-500 text-purple-700 hover:bg-purple-50">
                                    Practice Today <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                {/* Graphotherapy Card */}
                <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Pen className="h-5 w-5 text-green-600" />
                            Graphotherapy
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Current Level</span>
                                <span className="font-semibold">Level {stats?.graphotherapy?.currentLevel}</span>
                            </div>
                            <Progress value={(stats?.graphotherapy?.currentDay / 60) * 100} className="h-2" />
                            <Link href="/student/graphotherapy">
                                <Button variant="outline" className="w-full mt-2 border-green-500 text-green-700 hover:bg-green-50">
                                    Practice Today <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Test Analysis Section */}
            <TestAnalysisBoard />
        </div >
    );
}

function TestAnalysisBoard() {
    const [reports, setReports] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const API_BASE = "https://a7z4kjysmp.us-east-1.awsapprunner.com/api/v1";

    useEffect(() => {
        async function fetchReports() {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;

                const res = await fetch(`${API_BASE}/batch1/test-results`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (res.ok) {
                    const data = await res.json();
                    setReports(data);
                }
            } catch (error) {
                console.error("Error fetching test reports:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchReports();
    }, [API_BASE]);

    if (loading) return null;
    if (reports.length === 0) return null;

    return (
        <Card className="border-none shadow-xl bg-white dark:bg-gray-900 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                    <Trophy className="h-8 w-8 text-amber-300" />
                    Daily Test Analysis
                </CardTitle>
                <p className="text-blue-100 opacity-90">Track your performance across Batch 1 Practice Tests</p>
            </CardHeader>
            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-gray-800 text-gray-500 text-sm uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Day / Test</th>
                                <th className="px-6 py-4">Score</th>
                                <th className="px-6 py-4">Accuracy</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                            {reports.map((report) => (
                                <tr key={report.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold">
                                                D{report.day_number}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900 dark:text-gray-100">Batch 1 Practice</div>
                                                <div className="text-xs text-gray-500">Cycle {report.cycle_id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-lg font-bold text-indigo-600">{report.score}</div>
                                        <div className="text-xs text-gray-400">/{report.total_questions * 2} max</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                {Math.round((report.correct_count / report.total_questions) * 100)}%
                                            </div>
                                            <div className="w-24 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-green-500"
                                                    style={{ width: `${(report.correct_count / report.total_questions) * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                        <div className="text-[10px] text-green-600 mt-1">{report.correct_count} Correct</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {new Date(report.timestamp).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                            Details <ArrowRight className="ml-1 h-3 w-3" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}


// Helper to safe get percentage
function dashboard_percentage(data: any): number {
    return data?.overall_progress?.percentage || 0;
}

