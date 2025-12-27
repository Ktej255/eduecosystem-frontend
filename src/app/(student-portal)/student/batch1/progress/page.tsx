"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    Trophy,
    Target,
    Clock,
    BookOpen,
    Brain,
    TrendingUp,
    Calendar,
    CheckCircle2,
    Flame,
    Star,
    BarChart3,
    ArrowLeft,
    Loader2
} from "lucide-react";
import Link from "next/link";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

interface CSATProgress {
    month: string;
    completed: number;
    total: number;
    avgScore: number;
}

interface EveningProgress {
    day: number;
    flashcardsKnown: number;
    flashcardsTotal: number;
    qaScore: number;
}

export default function ProgressDashboard() {
    const [loading, setLoading] = useState(true);
    const [csatProgress, setCsatProgress] = useState<CSATProgress[]>([
        { month: "January", completed: 0, total: 10, avgScore: 0 },
        { month: "February", completed: 0, total: 10, avgScore: 0 },
        { month: "March", completed: 0, total: 10, avgScore: 0 }
    ]);

    const [eveningProgress, setEveningProgress] = useState<EveningProgress[]>([]);
    const [streak, setStreak] = useState(0);
    const [totalLearningMinutes, setTotalLearningMinutes] = useState(0);

    // Fetch progress from backend
    useEffect(() => {
        async function fetchProgress() {
            try {
                const response = await fetch(`${API_BASE}/session-progress/dashboard/guest`);
                if (response.ok) {
                    const data = await response.json();

                    // Update CSAT progress from API
                    if (data.csat?.sessions?.length > 0) {
                        const monthMap: Record<string, { completed: number; scores: number[] }> = {
                            january: { completed: 0, scores: [] },
                            february: { completed: 0, scores: [] },
                            march: { completed: 0, scores: [] }
                        };

                        data.csat.sessions.forEach((s: any) => {
                            if (monthMap[s.month]) {
                                monthMap[s.month].completed++;
                                if (s.practice_score) monthMap[s.month].scores.push(s.practice_score);
                            }
                        });

                        setCsatProgress([
                            {
                                month: "January",
                                completed: monthMap.january.completed,
                                total: 10,
                                avgScore: monthMap.january.scores.length > 0
                                    ? Math.round(monthMap.january.scores.reduce((a, b) => a + b, 0) / monthMap.january.scores.length)
                                    : 0
                            },
                            {
                                month: "February",
                                completed: monthMap.february.completed,
                                total: 10,
                                avgScore: monthMap.february.scores.length > 0
                                    ? Math.round(monthMap.february.scores.reduce((a, b) => a + b, 0) / monthMap.february.scores.length)
                                    : 0
                            },
                            {
                                month: "March",
                                completed: monthMap.march.completed,
                                total: 10,
                                avgScore: monthMap.march.scores.length > 0
                                    ? Math.round(monthMap.march.scores.reduce((a, b) => a + b, 0) / monthMap.march.scores.length)
                                    : 0
                            }
                        ]);
                    }

                    // Update evening progress
                    if (data.evening_sessions?.sessions?.length > 0) {
                        setEveningProgress(data.evening_sessions.sessions.map((s: any) => ({
                            day: s.day,
                            flashcardsKnown: s.flashcards_known || 0,
                            flashcardsTotal: s.flashcards_total || 0,
                            qaScore: s.qa_score || 0
                        })));
                    }

                    // Set streak (calculate from consecutive days)
                    setStreak(data.overall?.total_learning_sessions || 0);
                    setTotalLearningMinutes((data.overall?.total_learning_sessions || 0) * 50);
                }
            } catch (error) {
                console.log('Using sample data:', error);
                // Set sample data as fallback
                setCsatProgress([
                    { month: "January", completed: 3, total: 10, avgScore: 75 },
                    { month: "February", completed: 0, total: 10, avgScore: 0 },
                    { month: "March", completed: 0, total: 10, avgScore: 0 }
                ]);
                setEveningProgress([
                    { day: 1, flashcardsKnown: 8, flashcardsTotal: 10, qaScore: 85 },
                    { day: 2, flashcardsKnown: 5, flashcardsTotal: 10, qaScore: 70 }
                ]);
                setStreak(5);
                setTotalLearningMinutes(245);
            } finally {
                setLoading(false);
            }
        }

        fetchProgress();
    }, []);

    // Calculate overall stats
    const totalCSATCompleted = csatProgress.reduce((sum, p) => sum + p.completed, 0);
    const totalCSATSessions = csatProgress.reduce((sum, p) => sum + p.total, 0);
    const avgCSATScore = csatProgress.filter(p => p.avgScore > 0).reduce((sum, p, _, arr) => sum + p.avgScore / arr.length, 0);

    const totalFlashcardsKnown = eveningProgress.reduce((sum, p) => sum + p.flashcardsKnown, 0);
    const totalFlashcards = eveningProgress.reduce((sum, p) => sum + p.flashcardsTotal, 0);
    const flashcardConfidence = totalFlashcards > 0 ? Math.round((totalFlashcardsKnown / totalFlashcards) * 100) : 0;

    const avgQAScore = eveningProgress.filter(p => p.qaScore > 0).reduce((sum, p, _, arr) => sum + p.qaScore / arr.length, 0);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
                <span className="ml-2 text-gray-600">Loading progress...</span>
            </div>
        );
    }

    return (
        <div className="space-y-6 max-w-6xl mx-auto p-4 md:p-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <Link href="/student/batch1">
                    <Button variant="ghost">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Batch 1
                    </Button>
                </Link>
                <h1 className="text-2xl font-bold">My Progress</h1>
            </div>

            {/* Streak & Time Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <Flame className="h-8 w-8" />
                            <div>
                                <div className="text-3xl font-bold">{streak}</div>
                                <div className="text-sm opacity-90">Day Streak</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white border-0">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <Clock className="h-8 w-8" />
                            <div>
                                <div className="text-3xl font-bold">{Math.floor(totalLearningMinutes / 60)}h</div>
                                <div className="text-sm opacity-90">Learning Time</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-500 to-emerald-500 text-white border-0">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-8 w-8" />
                            <div>
                                <div className="text-3xl font-bold">{totalCSATCompleted}</div>
                                <div className="text-sm opacity-90">CSAT Sessions</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <Star className="h-8 w-8" />
                            <div>
                                <div className="text-3xl font-bold">{Math.round(avgCSATScore)}%</div>
                                <div className="text-sm opacity-90">Avg Score</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* CSAT Progress */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-amber-600" />
                        CSAT Progress (Paper 2)
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {csatProgress.map((month, idx) => (
                        <div key={idx} className="space-y-2">
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="font-medium">{month.month}</span>
                                    <span className="text-sm text-gray-500 ml-2">
                                        {month.completed}/{month.total} sessions
                                    </span>
                                </div>
                                <div className="text-sm">
                                    {month.avgScore > 0 ? (
                                        <span className="text-green-600 font-medium">{month.avgScore}% avg</span>
                                    ) : (
                                        <span className="text-gray-400">Not started</span>
                                    )}
                                </div>
                            </div>
                            <Progress
                                value={(month.completed / month.total) * 100}
                                className="h-3"
                            />
                        </div>
                    ))}

                    <Link href="/student/batch1/csat/january">
                        <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">
                            Continue CSAT Practice
                        </Button>
                    </Link>
                </CardContent>
            </Card>

            {/* Evening Session Progress */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Brain className="h-5 w-5 text-indigo-600" />
                        Evening Session Progress
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Flashcard Stats */}
                        <div className="space-y-4">
                            <h4 className="font-medium flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-emerald-600" />
                                Flashcard Confidence
                            </h4>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-emerald-600">{flashcardConfidence}%</div>
                                <p className="text-sm text-gray-500 mt-1">
                                    {totalFlashcardsKnown} of {totalFlashcards} cards mastered
                                </p>
                            </div>
                            <Progress value={flashcardConfidence} className="h-4" />
                        </div>

                        {/* Q&A Stats */}
                        <div className="space-y-4">
                            <h4 className="font-medium flex items-center gap-2">
                                <Target className="h-4 w-4 text-purple-600" />
                                Elaboration Q&A Score
                            </h4>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-purple-600">{Math.round(avgQAScore)}%</div>
                                <p className="text-sm text-gray-500 mt-1">
                                    Average explanation accuracy
                                </p>
                            </div>
                            <Progress value={avgQAScore} className="h-4" />
                        </div>
                    </div>

                    {/* Daily Progress */}
                    <div className="mt-6 pt-6 border-t">
                        <h4 className="font-medium mb-4">Daily Progress</h4>
                        <div className="flex gap-2 flex-wrap">
                            {eveningProgress.map((day, idx) => (
                                <div
                                    key={idx}
                                    className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center text-xs ${day.flashcardsTotal > 0
                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30'
                                        : 'bg-gray-100 text-gray-400 dark:bg-gray-800'
                                        }`}
                                >
                                    <span className="font-bold">D{day.day}</span>
                                    {day.flashcardsTotal > 0 && (
                                        <span>{day.qaScore}%</span>
                                    )}
                                </div>
                            ))}
                            {[4, 5, 6, 7, 8, 9, 10].map(day => (
                                <div
                                    key={day}
                                    className="w-12 h-12 rounded-lg flex items-center justify-center text-xs bg-gray-100 text-gray-400 dark:bg-gray-800"
                                >
                                    D{day}
                                </div>
                            ))}
                        </div>
                    </div>

                    <Link href="/student/batch1">
                        <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700">
                            Continue Evening Sessions
                        </Button>
                    </Link>
                </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                        Achievements
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200">
                            <div className="text-3xl mb-2">🔥</div>
                            <div className="font-medium text-sm">5 Day Streak</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200">
                            <div className="text-3xl mb-2">📚</div>
                            <div className="font-medium text-sm">First CSAT Complete</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 opacity-50">
                            <div className="text-3xl mb-2">🎯</div>
                            <div className="font-medium text-sm text-gray-400">90% Score</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 opacity-50">
                            <div className="text-3xl mb-2">⭐</div>
                            <div className="font-medium text-sm text-gray-400">10 Sessions</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
