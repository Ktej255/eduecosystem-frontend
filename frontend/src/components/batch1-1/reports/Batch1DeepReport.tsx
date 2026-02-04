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
    Brain,
    X,
    BookOpen,
    Flashlight
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ActivityLogger, ActivityLog } from "@/lib/analytics/ActivityLogger";


// Import existing report components
import FocusAnalyticsDashboard from "@/components/batch1/FocusAnalyticsDashboard";
import SaturdayTestReport from "@/components/batch1-1/saturday/SaturdayTestReport";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

export default function Batch1DeepReport({ embedded = false }: { embedded?: boolean }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const defaultTab = searchParams.get('tab') || 'pomodoro';
    const [activeTab, setActiveTab] = useState(defaultTab);

    // Update URL when tab changes without full reload
    const handleTabChange = (value: string) => {
        setActiveTab(value);
        if (!embedded) {
            router.push(`/student/batch1-1/deep-report?tab=${value}`, { scroll: false });
        }
    };

    return (
        <div className={`space-y-6 ${embedded ? '' : 'max-w-7xl mx-auto p-4 md:p-6 pb-20'}`}>
            {/* Header - Only show if not embedded */}
            {!embedded && (
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
            )}

            <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-8">
                <div className="sticky top-0 z-20 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl p-1 rounded-2xl border shadow-sm">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto p-1 gap-1 bg-transparent">
                        <TabsTrigger value="pomodoro" className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700 py-3 rounded-xl flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>Pomodoro</span>
                        </TabsTrigger>
                        <TabsTrigger value="csat" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 py-3 rounded-xl flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            <span>CSAT</span>
                        </TabsTrigger>
                        <TabsTrigger value="evening" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-700 py-3 rounded-xl flex items-center gap-2">
                            <Flashlight className="w-4 h-4" />
                            <span>Evening</span>
                        </TabsTrigger>
                        <TabsTrigger value="mcq" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-700 py-3 rounded-xl flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            <span>MCQ</span>
                        </TabsTrigger>
                        <TabsTrigger value="saturday" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700 py-3 rounded-xl flex items-center gap-2">
                            <Trophy className="w-4 h-4" />
                            <span>Saturday</span>
                        </TabsTrigger>
                    </TabsList>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <TabsContent value="pomodoro" className="m-0">
                        <FocusAnalyticsDashboard />
                    </TabsContent>

                    <TabsContent value="csat" className="m-0">
                        <CSATReport />
                    </TabsContent>

                    <TabsContent value="evening" className="m-0">
                        <EveningReport />
                    </TabsContent>

                    <TabsContent value="mcq" className="m-0">
                        <ActivityReport />
                    </TabsContent>

                    <TabsContent value="saturday" className="m-0">
                        <SaturdayTestsReport />
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
}

function CSATReport() {
    const [logs, setLogs] = useState<ActivityLog[]>([]);

    useEffect(() => {
        setLogs(ActivityLogger.getLogs());
    }, []);

    const csatLogs = logs.filter(l => l.type === 'MCQ_CSAT');

    const getAccuracy = (items: ActivityLog[]) => {
        if (items.length === 0) return 0;
        const correct = items.filter(l => l.details.isCorrect).length;
        return Math.round((correct / items.length) * 100);
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">CSAT Performance Analytics</h2>
            <Card className="max-w-md">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-indigo-500" />
                        CSAT Breakdown
                    </CardTitle>
                    <CardDescription>Reading Comprehension & Verbal Ability</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl">
                            <div className="text-3xl font-bold text-indigo-600">{csatLogs.length}</div>
                            <div className="text-xs text-indigo-400 font-bold uppercase">Total Questions</div>
                        </div>
                        <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl">
                            <div className="text-3xl font-bold text-emerald-600">{getAccuracy(csatLogs)}%</div>
                            <div className="text-xs text-emerald-400 font-bold uppercase">Accuracy</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function EveningReport() {
    const [logs, setLogs] = useState<ActivityLog[]>([]);

    useEffect(() => {
        setLogs(ActivityLogger.getLogs());
    }, []);

    const eveningLogs = logs.filter(l => l.type === 'MCQ_EVENING');

    const getAccuracy = (items: ActivityLog[]) => {
        if (items.length === 0) return 0;
        const correct = items.filter(l => l.details.isCorrect).length;
        return Math.round((correct / items.length) * 100);
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Evening Session Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Flashlight className="h-5 w-5 text-purple-500" />
                            Core Subject Revision
                        </CardTitle>
                        <CardDescription>MCQs from special focus areas</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
                                <div className="text-3xl font-bold text-purple-600">{eveningLogs.length}</div>
                                <div className="text-xs text-purple-400 font-bold uppercase">Questions</div>
                            </div>
                            <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl">
                                <div className="text-3xl font-bold text-emerald-600">{getAccuracy(eveningLogs)}%</div>
                                <div className="text-xs text-emerald-400 font-bold uppercase">Accuracy</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}


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
                                                        log.type === 'MCQ_SATURDAY' ? 'Saturday Test MCQ' :
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


// --- Sub-components for specialized reports ---

function SaturdayTestsReport() {
    const WEEKS = Array.from({ length: 20 }, (_, i) => ({ id: i + 1 }));
    const [scores, setScores] = useState<any[]>([]);
    const [selectedReport, setSelectedReport] = useState<any>(null);

    useEffect(() => {
        // Scan localStorage for all saturday tests
        const results = WEEKS.map(week => {
            // Check for v2 format first
            const savedV2 = localStorage.getItem(`batch11_saturday_results_v2_w${week.id}`);
            if (savedV2) {
                const data = JSON.parse(savedV2);
                return {
                    weekId: week.id,
                    isV2: true,
                    ...data
                };
            }

            // Fallback to legacy format
            const savedLegacy = localStorage.getItem(`batch11_saturday_${week.id}`);
            if (savedLegacy) {
                const data = JSON.parse(savedLegacy);
                return {
                    weekId: week.id,
                    isV2: false,
                    paper1Results: { score: data.paper1Score },
                    paper2Results: { score: data.paper2Score },
                    lastUpdated: data.lastUpdated
                };
            }
            return null;
        }).filter(Boolean);

        // Also scan for Polity Mock Tests (Jan 31)
        // Keys match the format used in PolityTestPage: polity_test_${testId}_results
        const polityTests = [
            { key: 'polity_test_paper1-jan31_results', id: '1', name: 'Polity Paper 1 (Jan 31)' },
            { key: 'polity_test_paper2-jan31_results', id: '2', name: 'Polity Paper 2 (Jan 31)' }
        ].map(test => {
            const saved = localStorage.getItem(test.key);
            if (saved) {
                const data = JSON.parse(saved);
                // Ensure data structure matches what SaturdayTestReport expects
                // The saved format from PolityTestPage is directly the 'results' object
                return {
                    weekId: `Polity-${test.id}`,
                    isV2: true, // It uses the new format
                    paper1Results: data, // Treat as "Paper 1" for display purposes in the card
                    paper2Results: null,
                    lastUpdated: data.endTime,
                    specialTitle: test.name
                };
            }
            return null;
        }).filter(Boolean);

        setScores([...results, ...polityTests]);
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
            {/* Report Modal */}
            {selectedReport && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="min-h-screen py-8 px-4">
                        <div className="relative max-w-7xl mx-auto">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setSelectedReport(null)}
                                className="absolute -top-4 -right-4 md:top-4 md:right-4 z-[60] text-white hover:bg-white/10 rounded-full"
                            >
                                <X className="h-6 w-6" />
                            </Button>
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <SaturdayTestReport
                                    results={selectedReport}
                                    onBack={() => setSelectedReport(null)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scores.map((score, idx) => (
                    <Card key={idx} className="overflow-hidden border-2 hover:border-indigo-400 transition-all shadow-md">
                        <CardHeader className="bg-gray-50 dark:bg-gray-900/50 pb-4">
                            <CardTitle className="flex justify-between items-center">
                                <span>{score.specialTitle || `Week ${score.weekId}`}</span>
                                <span className="text-[10px] md:text-xs font-normal text-gray-500">
                                    {score.lastUpdated && new Date(score.lastUpdated).toLocaleDateString()}
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="text-center p-3 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/30">
                                    <div className="text-[10px] text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wider mb-1">Paper 1</div>
                                    <div className="text-2xl font-black text-amber-600">
                                        {score.paper1Results?.score ?? score.paper1Results?.accuracy ?? '—'}{score.isV2 ? '%' : '%'}
                                    </div>
                                    {score.isV2 && score.paper1Results && (
                                        <div className="text-[10px] text-amber-600/70 mt-1">
                                            {score.paper1Results.correct || 0}/{score.paper1Results.total || 0} Correct
                                        </div>
                                    )}
                                </div>
                                <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30">
                                    <div className="text-[10px] text-orange-700 dark:text-orange-400 font-bold uppercase tracking-wider mb-1">Paper 2</div>
                                    <div className="text-2xl font-black text-orange-600">
                                        {score.paper2Results?.score ?? score.paper2Results?.accuracy ?? '—'}{score.isV2 ? '%' : '%'}
                                    </div>
                                    {score.isV2 && score.paper2Results && (
                                        <div className="text-[10px] text-orange-600/70 mt-1">
                                            {score.paper2Results.correct || 0}/{score.paper2Results.total || 0} Correct
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Button
                                    className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 font-bold rounded-xl"
                                    onClick={() => setSelectedReport(score.paper1Results)}
                                    disabled={!score.paper1Results || !score.isV2}
                                >
                                    <BarChart3 className="w-4 h-4 mr-2" />
                                    {score.isV2 ? 'View Paper 1 Report' : 'Detailed N/A'}
                                </Button>
                                <Button
                                    className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 font-bold rounded-xl"
                                    onClick={() => setSelectedReport(score.paper2Results)}
                                    disabled={!score.paper2Results || !score.isV2}
                                >
                                    <BarChart3 className="w-4 h-4 mr-2" />
                                    {score.isV2 ? 'View Paper 2 Report' : 'Detailed N/A'}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

