"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    BarChart3,
    Calendar,
    Clock,
    Smile,
    Trophy,
    ArrowLeft,
    TrendingUp,
    Zap,
    Brain
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";


// Import existing report components
import FocusAnalyticsDashboard from "@/components/batch1/FocusAnalyticsDashboard";
import WeeklyProgressReport from "@/components/batch1-1/reports/WeeklyProgressReport";
import RevisionDeepReports from "@/components/revision/reports/RevisionDeepReports";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

export default function Batch1DeepReport() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const defaultTab = searchParams.get('tab') || 'pomodoro';
    const [activeTab, setActiveTab] = useState(defaultTab);

    // Update URL when tab changes without full reload
    const handleTabChange = (value: string) => {
        setActiveTab(value);
        router.push(`/student/batch1-1/deep-report?tab=${value}`, { scroll: false });
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                            <BarChart3 className="h-6 w-6" />
                        </div>
                        Deep Report Center
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1 ml-1">
                        Centralized analytics for your Batch 1 journey
                    </p>
                </div>
                <Link href="/student/batch1-1">
                    <Button variant="outline" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Dashboard
                    </Button>
                </Link>
            </div>

            <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-8">
                <div className="sticky top-0 z-20 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl p-1 rounded-2xl border shadow-sm">
                    <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto p-1 gap-1 bg-transparent">
                        <TabsTrigger value="pomodoro" className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700 py-3 rounded-xl flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span className="hidden md:inline">Pomodoro</span>
                        </TabsTrigger>
                        <TabsTrigger value="weekly" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 py-3 rounded-xl flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="hidden md:inline">Weekly</span>
                        </TabsTrigger>
                        <TabsTrigger value="activity" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-700 py-3 rounded-xl flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            <span className="hidden md:inline">Activity</span>
                        </TabsTrigger>
                        <TabsTrigger value="tests" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700 py-3 rounded-xl flex items-center gap-2">
                            <Trophy className="w-4 h-4" />
                            <span className="hidden md:inline">Sat Tests</span>
                        </TabsTrigger>
                        <TabsTrigger value="revision" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 py-3 rounded-xl flex items-center gap-2">
                            <Brain className="w-4 h-4" />
                            <span className="hidden md:inline">Revision</span>
                        </TabsTrigger>
                        <TabsTrigger value="mood" className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-700 py-3 rounded-xl flex items-center gap-2">
                            <Smile className="w-4 h-4" />
                            <span className="hidden md:inline">Mood</span>
                        </TabsTrigger>
                    </TabsList>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <TabsContent value="pomodoro" className="m-0">
                        <FocusAnalyticsDashboard />
                    </TabsContent>

                    <TabsContent value="weekly" className="m-0">
                        <WeeklyProgressReport />
                    </TabsContent>

                    <TabsContent value="activity" className="m-0">
                        <ActivityReport />
                    </TabsContent>

                    <TabsContent value="tests" className="m-0">
                        <SaturdayTestsReport />
                    </TabsContent>

                    <TabsContent value="revision" className="m-0">
                        <RevisionDeepReports />
                    </TabsContent>

                    <TabsContent value="mood" className="m-0">
                        <MoodAnalyticsReport />
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
}

import { ActivityLogger, ActivityLog } from "@/lib/analytics/ActivityLogger";

function ActivityReport() {
    const [stats, setStats] = useState<any>(null);
    const [logs, setLogs] = useState<ActivityLog[]>([]);

    useEffect(() => {
        setStats(ActivityLogger.getStats());
        setLogs(ActivityLogger.getLogs().reverse().slice(0, 50)); // Last 50 items
    }, []);

    if (!stats) return <div className="p-8 text-center text-gray-500">Loading Activity Data...</div>;

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2 text-indigo-700">
                            <Zap className="w-5 h-5" />
                            <span className="font-semibold">Total MCQs Solved</span>
                        </div>
                        <div className="text-4xl font-bold text-gray-900">{stats.totalMCQsSolved}</div>
                        <p className="text-xs text-indigo-600/70 mt-2">Combined Evening & PYQ Bank</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2 text-green-700">
                            <Trophy className="w-5 h-5" />
                            <span className="font-semibold">Accuracy Rate</span>
                        </div>
                        <div className="text-4xl font-bold text-gray-900">
                            {stats.totalMCQsSolved > 0
                                ? Math.round((stats.totalCorrect / stats.totalMCQsSolved) * 100)
                                : 0}%
                        </div>
                        <p className="text-xs text-green-600/70 mt-2">{stats.totalCorrect} Correct Answers</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2 text-amber-700">
                            <Brain className="w-5 h-5" />
                            <span className="font-semibold">Flashcards Reviewed</span>
                        </div>
                        <div className="text-4xl font-bold text-gray-900">{stats.totalFlashcards}</div>
                        <p className="text-xs text-amber-600/70 mt-2">Concepts Reinforced</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity Stream</CardTitle>
                        <CardDescription>Real-time log of your learning actions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {logs.map((log, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
                                    <div className={`mt-1 p-1.5 rounded-full shrink-0 ${log.type === 'MCQ_EVENING' ? 'bg-indigo-100 text-indigo-600' :
                                            log.type === 'MCQ_PYQ' ? 'bg-blue-100 text-blue-600' :
                                                'bg-amber-100 text-amber-600'
                                        }`}>
                                        {log.type.includes('MCQ') ? <Zap size={14} /> : <Brain size={14} />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                                {log.type === 'MCQ_EVENING' ? 'Solved Evening MCQ' :
                                                    log.type === 'MCQ_PYQ' ? 'Solved PYQ' :
                                                        'Flashcard Review'}
                                            </p>
                                            <span className="text-[10px] text-slate-400 whitespace-nowrap ml-2">
                                                {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-1 truncate">
                                            Topic: {log.details.topic || 'General'}
                                            {log.details.subtopic && ` • ${log.details.subtopic}`}
                                        </p>
                                        {log.type.includes('MCQ') && (
                                            <div className="flex gap-2 mt-2">
                                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${log.details.isCorrect
                                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                                    }`}>
                                                    {log.details.isCorrect ? 'Correct' : 'Incorrect'}
                                                </span>
                                                {log.details.confidence && (
                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                                        Confidence: {log.details.confidence}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {logs.length === 0 && (
                                <div className="text-center py-8 text-gray-400 text-sm">
                                    No activity recorded yet. Start solving questions!
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Topic Breakdown</CardTitle>
                        <CardDescription>Focus distribution across subjects</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {Object.entries(stats.byTopic).sort((a: any, b: any) => b[1] - a[1]).slice(0, 8).map(([topic, count]: [string, any], i) => (
                                <div key={i} className="space-y-1">
                                    <div className="flex justify-between text-xs font-medium">
                                        <span className="text-slate-700 dark:text-slate-300">{topic}</span>
                                        <span className="text-slate-500">{count} interactions</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-indigo-500 rounded-full"
                                            style={{ width: `${Math.min(100, (count / (stats.totalMCQsSolved + stats.totalFlashcards || 1)) * 100)}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

// Ensure end of previous function block
function SaturdayTestsReportStub() { return null; }

// --- Sub-components for specialized reports ---

function SaturdayTestsReport() {
    const WEEKS = Array.from({ length: 20 }, (_, i) => ({ id: i + 1 }));
    const [scores, setScores] = useState<any[]>([]);

    useEffect(() => {
        // Scan localStorage for all saturday tests
        const results = WEEKS.map(week => {
            const saved = localStorage.getItem(`batch11_saturday_${week.id}`);
            if (saved) {
                const data = JSON.parse(saved);
                return {
                    weekId: week.id,
                    ...data
                };
            }
            return null;
        }).filter(Boolean);
        setScores(results);
    }, []);

    if (scores.length === 0) {
        return (
            <Card className="bg-gray-50 border-gray-200">
                <CardContent className="p-12 text-center text-gray-500">
                    <Trophy className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <h3 className="text-lg font-semibold mb-2">No Test Data Found</h3>
                    <p>Complete a Saturday Test to see your performance metrics here.</p>
                    <Link href="/student/batch1-1">
                        <Button className="mt-4" variant="outline">Go to Dashboard</Button>
                    </Link>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {scores.map((score, idx) => (
                    <Card key={idx} className="overflow-hidden border-2 hover:border-indigo-400 transition-all">
                        <CardHeader className="bg-gray-50 dark:bg-gray-900/50 pb-4">
                            <CardTitle className="flex justify-between items-center">
                                <span>Week {score.weekId}</span>
                                <span className="text-sm font-normal text-gray-500">
                                    {score.lastUpdated && new Date(score.lastUpdated).toLocaleDateString()}
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-amber-50 rounded-lg">
                                <div className="text-sm text-amber-700 font-medium mb-1">Paper 1</div>
                                <div className="text-2xl font-bold text-amber-600">
                                    {score.paper1Score ?? '—'}%
                                </div>
                            </div>
                            <div className="text-center p-3 bg-orange-50 rounded-lg">
                                <div className="text-sm text-orange-700 font-medium mb-1">Paper 2</div>
                                <div className="text-2xl font-bold text-orange-600">
                                    {score.paper2Score ?? '—'}%
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

function MoodAnalyticsReport() {
    const [entries, setEntries] = useState<any[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('mood_tracker_entries');
        if (saved) {
            setEntries(JSON.parse(saved));
        }
    }, []);

    const chartData = entries.map(e => ({
        ...e,
        date: new Date(e.timestamp).toLocaleDateString(),
        time: new Date(e.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }));

    // Calculate averages
    const avgEnergy = entries.length > 0
        ? Math.round(entries.reduce((acc, curr) => acc + curr.energy, 0) / entries.length * 10) / 10
        : 0;

    const moodCounts = entries.reduce((acc: any, curr: any) => {
        acc[curr.mood] = (acc[curr.mood] || 0) + 1;
        return acc;
    }, {});

    const topMood = Object.entries(moodCounts).sort((a: any, b: any) => b[1] - a[1])[0];

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2 text-pink-700">
                            <Smile className="w-5 h-5" />
                            <span className="font-semibold">Mood Logs</span>
                        </div>
                        <div className="text-4xl font-bold text-gray-900">{entries.length}</div>
                        <p className="text-xs text-pink-600/70 mt-2">Total entries recorded</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2 text-orange-700">
                            <Zap className="w-5 h-5" />
                            <span className="font-semibold">Avg. Energy</span>
                        </div>
                        <div className="text-4xl font-bold text-gray-900">{avgEnergy}/10</div>
                        <p className="text-xs text-orange-600/70 mt-2">Energy level consistency</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2 text-indigo-700">
                            <TrendingUp className="w-5 h-5" />
                            <span className="font-semibold">Dominant Mood</span>
                        </div>
                        <div className="text-4xl font-bold text-gray-900 capitalize">
                            {topMood ? topMood[0] : '—'}
                        </div>
                        <p className="text-xs text-indigo-600/70 mt-2">Most frequent state</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                    <CardTitle>Energy Trends</CardTitle>
                    <CardDescription>Visualizing your energy levels over time</CardDescription>
                </CardHeader>
                <div className="h-[300px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                            <XAxis
                                dataKey="timestamp"
                                tickFormatter={(ts) => new Date(ts).toLocaleDateString([], { month: 'short', day: 'numeric' })}
                                style={{ fontSize: 12 }}
                            />
                            <YAxis domain={[0, 10]} />
                            <Tooltip
                                labelFormatter={(label) => new Date(label).toLocaleString()}
                                contentStyle={{ borderRadius: '0.75rem', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="energy"
                                stroke="#f97316"
                                strokeWidth={3}
                                dot={{ r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Logs</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[...entries].reverse().slice(0, 10).map((entry, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="flex flex-col">
                                    <span className="font-bold capitalize text-gray-800">{entry.mood}</span>
                                    <span className="text-xs text-gray-400">
                                        {new Date(entry.timestamp).toLocaleString(undefined, {
                                            weekday: 'short', month: 'short', day: 'numeric',
                                            hour: '2-digit', minute: '2-digit'
                                        })}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm italic text-gray-500 mr-2 max-w-[200px] truncate hidden md:block">{entry.note}</span>
                                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
                                        Energy: {entry.energy}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {entries.length === 0 && (
                            <div className="text-center text-gray-400 py-8">
                                No mood data available yet.
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
