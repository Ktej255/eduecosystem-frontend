"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import {
    ArrowLeft,
    Timer,
    Brain,
    Target,
    Trophy,
    Flame,
    BarChart3,
    Calendar,
    CheckCircle2,
} from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
} from "recharts";

interface WeekProgress {
    week: number;
    daysCompleted: number;
    topicsCompleted: number;
    avgRecallScore: number;
    pomodorosCompleted: number;
}

const COLORS = ['#F97316', '#FBBF24', '#10B981', '#8B5CF6', '#3B82F6'];

export default function Batch11AnalyticsPage() {
    const [loading, setLoading] = useState(true);
    const [weeklyProgress, setWeeklyProgress] = useState<WeekProgress[]>([]);
    const [totalStats, setTotalStats] = useState({
        totalPomodoros: 0,
        totalTopics: 0,
        avgRecall: 0,
        daysCompleted: 0,
        currentStreak: 0,
    });

    useEffect(() => {
        loadProgress();
    }, []);

    const loadProgress = () => {
        // Load from localStorage
        const savedProgress = localStorage.getItem('batch11_progress');
        const progressData = savedProgress ? JSON.parse(savedProgress) : {};

        // Generate weekly progress data
        const weeks: WeekProgress[] = [];
        let totalPomodoros = 0;
        let totalTopics = 0;
        let totalRecall = 0;
        let daysCompleted = 0;
        let recallCount = 0;

        for (let week = 1; week <= 20; week++) {
            const weekKey = `batch11_day_${week}`;
            let weekPomodoros = 0;
            let weekTopics = 0;
            let weekRecall = 0;
            let weekDays = 0;

            for (let day = 1; day <= 5; day++) {
                const dayData = localStorage.getItem(`batch11_day_${week}_${day}`);
                if (dayData) {
                    const parsed = JSON.parse(dayData);
                    weekPomodoros += parsed.currentPomodoro || 0;
                    weekTopics += (parsed.completedTopics || []).length;
                    if (parsed.recallResults && parsed.recallResults.length > 0) {
                        const avgRecall = parsed.recallResults.reduce((sum: number, r: any) => sum + (r.recallPercentage || 0), 0) / parsed.recallResults.length;
                        weekRecall += avgRecall;
                        recallCount++;
                    }
                    if (parsed.currentPomodoro >= 12) weekDays++;
                }
            }

            if (weekPomodoros > 0 || weekTopics > 0) {
                weeks.push({
                    week,
                    daysCompleted: weekDays,
                    topicsCompleted: weekTopics,
                    avgRecallScore: weekRecall > 0 ? Math.round(weekRecall) : 0,
                    pomodorosCompleted: weekPomodoros,
                });
            }

            totalPomodoros += weekPomodoros;
            totalTopics += weekTopics;
            daysCompleted += weekDays;
            if (weekRecall > 0) totalRecall += weekRecall;
        }

        setWeeklyProgress(weeks);
        setTotalStats({
            totalPomodoros,
            totalTopics,
            avgRecall: recallCount > 0 ? Math.round(totalRecall / recallCount) : 0,
            daysCompleted,
            currentStreak: calculateStreak(),
        });
        setLoading(false);
    };

    const calculateStreak = () => {
        // Simple streak calculation
        let streak = 0;
        const today = new Date();
        for (let i = 0; i < 30; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const key = `batch11_streak_${date.toISOString().split('T')[0]}`;
            if (localStorage.getItem(key)) {
                streak++;
            } else if (i > 0) {
                break;
            }
        }
        return streak;
    };

    const getChartData = () => {
        return weeklyProgress.map(w => ({
            name: `W${w.week}`,
            pomodoros: w.pomodorosCompleted,
            topics: w.topicsCompleted,
            recall: w.avgRecallScore,
        }));
    };

    const getPieData = () => {
        const completed = totalStats.daysCompleted;
        const remaining = 100 - completed; // 20 weeks * 5 days = 100 days
        return [
            { name: 'Completed', value: completed, color: '#10B981' },
            { name: 'Remaining', value: remaining, color: '#E5E7EB' },
        ];
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/student/batch1-1">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Batch 1.1
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                            📊 Pomodoro Progress Dashboard
                        </h1>
                        <p className="text-muted-foreground text-sm">Track your revision journey</p>
                    </div>
                </div>

                {/* Overview Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <Card className="bg-gradient-to-br from-orange-500 to-amber-600 text-white">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-orange-100 text-sm">Total Pomodoros</p>
                                    <p className="text-4xl font-bold">{totalStats.totalPomodoros}</p>
                                </div>
                                <Timer className="h-12 w-12 text-orange-200" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-green-100 text-sm">Topics Completed</p>
                                    <p className="text-4xl font-bold">{totalStats.totalTopics}</p>
                                </div>
                                <CheckCircle2 className="h-12 w-12 text-green-200" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-purple-100 text-sm">Avg Recall Score</p>
                                    <p className="text-4xl font-bold">{totalStats.avgRecall}%</p>
                                </div>
                                <Brain className="h-12 w-12 text-purple-200" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-blue-100 text-sm">Days Completed</p>
                                    <p className="text-4xl font-bold">{totalStats.daysCompleted}</p>
                                </div>
                                <Calendar className="h-12 w-12 text-blue-200" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-red-500 to-rose-600 text-white">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-red-100 text-sm">Current Streak</p>
                                    <p className="text-4xl font-bold">{totalStats.currentStreak}🔥</p>
                                </div>
                                <Flame className="h-12 w-12 text-red-200" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Weekly Progress Chart */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BarChart3 className="h-5 w-5 text-orange-600" />
                                Weekly Progress
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {weeklyProgress.length > 0 ? (
                                <div className="h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={getChartData()}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                            <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
                                            <YAxis stroke="#6B7280" fontSize={12} />
                                            <Tooltip />
                                            <Bar dataKey="pomodoros" fill="#F97316" name="Pomodoros" radius={[4, 4, 0, 0]} />
                                            <Bar dataKey="topics" fill="#10B981" name="Topics" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            ) : (
                                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                                    <div className="text-center">
                                        <Timer className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                        <p>No progress data yet</p>
                                        <p className="text-sm">Start your first Pomodoro session!</p>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Completion Pie */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Target className="h-5 w-5 text-green-600" />
                                Overall Completion
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[250px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={getPieData()}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {getPieData().map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value: number | undefined) => [`${value} days`, '']} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-2xl font-bold text-green-600">
                                    {Math.round((totalStats.daysCompleted / 100) * 100)}%
                                </p>
                                <p className="text-muted-foreground text-sm">Journey Completed</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Weekly Breakdown */}
                {weeklyProgress.length > 0 && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Weekly Breakdown</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {weeklyProgress.slice(0, 8).map((week) => (
                                    <div key={week.week} className="p-4 bg-muted rounded-lg">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-semibold text-orange-600">Week {week.week}</span>
                                            <span className="text-xs text-muted-foreground">{week.daysCompleted}/5 days</span>
                                        </div>
                                        <Progress value={(week.daysCompleted / 5) * 100} className="h-2 mb-2" />
                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div>
                                                <span className="text-muted-foreground">Pomodoros:</span>
                                                <span className="font-medium ml-1">{week.pomodorosCompleted}</span>
                                            </div>
                                            <div>
                                                <span className="text-muted-foreground">Topics:</span>
                                                <span className="font-medium ml-1">{week.topicsCompleted}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Empty State */}
                {weeklyProgress.length === 0 && (
                    <Card className="p-12 text-center">
                        <Trophy className="h-16 w-16 text-orange-400 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-muted-foreground mb-2">Start Your Journey!</h2>
                        <p className="text-muted-foreground mb-4">Complete your first Pomodoro session to see your progress here.</p>
                        <Link href="/student/batch1-1">
                            <Button className="bg-orange-600 hover:bg-orange-700">
                                <Timer className="mr-2 h-4 w-4" /> Go to Pomodoro Session
                            </Button>
                        </Link>
                    </Card>
                )}
            </div>
        </div>
    );
}
