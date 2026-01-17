"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    Calendar, Clock, ChevronRight, Play, Target, Brain, CheckCircle2,
    Flame, Trophy, BarChart3, Timer, BookOpen
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FocusAnalyticsDashboard from "@/components/batch1/FocusAnalyticsDashboard";
import WeeklyProgressReport from "@/components/batch1-1/reports/WeeklyProgressReport";
import StudyHeatmap from "@/components/batch1-1/analytics/StudyHeatmap";

// Week configuration
const WEEKS = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Week ${i + 1}`,
    startDate: new Date(2026, 0, 12 + (i * 7)), // Starting Jan 12, 2026 (Monday)
}));

// Days of the week (Mon-Sat)
const WEEKDAYS = [
    { id: 1, name: "Monday", short: "Mon", isSaturday: false },
    { id: 2, name: "Tuesday", short: "Tue", isSaturday: false },
    { id: 3, name: "Wednesday", short: "Wed", isSaturday: false },
    { id: 4, name: "Thursday", short: "Thu", isSaturday: false },
    { id: 5, name: "Friday", short: "Fri", isSaturday: false },
    { id: 6, name: "Saturday", short: "Sat", isSaturday: true },
];

export default function Batch11Page() {
    const router = useRouter();
    const [selectedWeek, setSelectedWeek] = useState(1);
    const [completedTopics, setCompletedTopics] = useState(0);
    const [weekProgress, setWeekProgress] = useState<Record<number, Record<number, boolean>>>({});

    // Load progress from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('batch11_progress');
        if (saved) {
            const data = JSON.parse(saved);
            setWeekProgress(data.weekProgress || {});
            setCompletedTopics(data.completedTopics || 0);
        }
    }, []);

    const currentWeekProgress = weekProgress[selectedWeek] || {};
    const daysCompleted = Object.values(currentWeekProgress).filter(Boolean).length;

    return (
        <div className="space-y-6 max-w-6xl mx-auto p-4 md:p-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white">
                            <Timer className="h-6 w-6" />
                        </div>
                        Batch 1.1: Pomodoro Revision
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                        6-hour daily Pomodoro sessions • Monday to Saturday
                    </p>
                </div>
                <Link href="/student/batch1-1/analytics">
                    <Button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700">
                        <BarChart3 className="mr-2 h-4 w-4" /> View Progress
                    </Button>
                </Link>
            </div>

            {/* Dashboard Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="bg-white dark:bg-gray-800 p-1 rounded-xl border dark:border-gray-700">
                    <TabsTrigger value="overview" className="flex-1 rounded-lg data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700">
                        Overview
                    </TabsTrigger>
                    <TabsTrigger value="reports" className="flex-1 rounded-lg data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Reports & Analytics
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Progress Overview */}
                    <Card className="bg-gradient-to-r from-orange-600 to-amber-600 text-white border-0 shadow-xl">
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                                <div>
                                    <h2 className="text-xl font-bold">Your Revision Journey</h2>
                                    <p className="text-orange-100">Master 100 topics through focused Pomodoro sessions</p>
                                </div>
                                <div className="flex gap-6">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold">{completedTopics}/100</div>
                                        <div className="text-sm text-orange-200">Topics Done</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold">{daysCompleted}/6</div>
                                        <div className="text-sm text-orange-200">This Week</div>
                                    </div>
                                </div>
                            </div>
                            <Progress value={completedTopics} className="h-3 bg-white/20" />
                        </CardContent>
                    </Card>

                    {/* Week Selector */}
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Select Week:</span>
                        <select
                            value={selectedWeek}
                            onChange={(e) => setSelectedWeek(Number(e.target.value))}
                            className="px-4 py-2 rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700 font-medium"
                        >
                            {WEEKS.map(week => (
                                <option key={week.id} value={week.id}>
                                    Week {week.id} ({week.startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Session Structure Info */}
                    <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
                        <CardContent className="p-4">
                            <h3 className="font-semibold text-orange-700 dark:text-orange-300 flex items-center gap-2 mb-3">
                                <Timer className="h-5 w-5" />
                                Daily Session Structure (8 AM - 2 PM)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                                    <span className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-xs font-bold">1</span>
                                    <div>
                                        <div className="font-medium">Pomodoro</div>
                                        <div className="text-xs text-orange-500">25 min focus</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                                    <span className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-xs font-bold">2</span>
                                    <div>
                                        <div className="font-medium">Short Break</div>
                                        <div className="text-xs text-orange-500">5 min rest</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                                    <span className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-xs font-bold">3</span>
                                    <div>
                                        <div className="font-medium">Voice Recall</div>
                                        <div className="text-xs text-orange-500">After 2 sessions</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                                    <span className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-xs font-bold">→</span>
                                    <div>
                                        <div className="font-medium">12 Pomodoros</div>
                                        <div className="text-xs text-orange-500">6 hours total</div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Day Selection Grid */}
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Week {selectedWeek} Schedule
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {WEEKDAYS.map((day) => {
                            const isCompleted = currentWeekProgress[day.id];

                            return (
                                <Card
                                    key={day.id}
                                    className={`cursor-pointer hover:shadow-lg transition-all ${day.isSaturday
                                        ? 'border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20'
                                        : isCompleted
                                            ? 'border-2 border-green-400 bg-green-50 dark:bg-green-900/20'
                                            : 'hover:border-orange-400'
                                        }`}
                                    onClick={() => {
                                        if (day.isSaturday) {
                                            router.push(`/student/batch1-1/${selectedWeek}/saturday-test`);
                                        } else {
                                            router.push(`/student/batch1-1/${selectedWeek}/${day.id}/pomodoro`);
                                        }
                                    }}
                                >
                                    <CardContent className="p-4 text-center">
                                        <div className={`text-2xl font-bold mb-1 ${day.isSaturday
                                            ? 'text-amber-600'
                                            : isCompleted
                                                ? 'text-green-600'
                                                : 'text-orange-600'
                                            }`}>
                                            {day.short}
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">{day.name}</div>

                                        {day.isSaturday ? (
                                            <div className="flex items-center justify-center gap-1 text-xs text-amber-600 font-medium">
                                                <Trophy className="h-3 w-3" />
                                                TEST DAY
                                            </div>
                                        ) : isCompleted ? (
                                            <div className="flex items-center justify-center gap-1 text-xs text-green-600">
                                                <CheckCircle2 className="h-4 w-4" />
                                                Done
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
                                                <Timer className="h-3 w-3" />
                                                6 hours
                                            </div>
                                        )}

                                        <Button
                                            size="sm"
                                            className={`w-full mt-3 ${day.isSaturday
                                                ? 'bg-amber-500 hover:bg-amber-600'
                                                : 'bg-orange-500 hover:bg-orange-600'
                                                }`}
                                        >
                                            {day.isSaturday ? 'Start Test' : 'Start'}
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Indian Polity 95 Topics */}
                    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-3xl">
                                    📜
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Indian Polity</h3>
                                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                                        95 Topics • 11 Parts • Complete UPSC Coverage
                                    </p>
                                </div>
                            </div>
                            <Link href="/student/batch1-1/polity">
                                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                                    Open Polity <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Evening Session Quick Access */}
                    <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-indigo-200 dark:border-indigo-800">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                    <BookOpen className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100">Evening Session</h3>
                                    <p className="text-indigo-600 dark:text-indigo-400 text-sm">
                                        Flashcards • MCQs • CSAT Practice
                                    </p>
                                </div>
                            </div>
                            <Link href={`/student/batch1-1/${selectedWeek}/1/evening`}>
                                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                                    Open Evening Session <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="reports" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="space-y-6">
                        <WeeklyProgressReport />
                        <StudyHeatmap />
                        <FocusAnalyticsDashboard />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

