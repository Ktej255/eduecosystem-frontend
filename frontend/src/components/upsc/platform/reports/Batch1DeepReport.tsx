"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    BarChart3,

    Clock,
    Smile,
    Trophy,
    ArrowLeft,
    TrendingUp,
    Zap,
    Brain,
    X,
    BookOpen,
    Flashlight,
    GraduationCap,
    FileBarChart,
    Target,
    Award
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ActivityLogger, ActivityLog } from "@/lib/analytics/ActivityLogger";


// Import existing report components
import FocusAnalyticsDashboard from "@/components/upsc/subjects/FocusAnalyticsDashboard";
import SaturdayTestReport from "@/components/upsc/platform/saturday/SaturdayTestReport";

import MoodTracker from "./MoodTracker";
import SubjectAnalytics from "./SubjectAnalytics";
import { ChapterTestResult } from "@/components/upsc/platform/polity/revision/ChapterLevelGame";
import MasteryTracker from "./MasteryTracker";
import GoalSetting from "./GoalSetting";
import WeakTopicsAlert from "./WeakTopicsAlert";
import CertificateGenerator from "./CertificateGenerator";

export default function Batch1DeepReport({ embedded = false }: { embedded?: boolean }) {
    return (
        <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Report...</div>}>
            <Batch1DeepReportContent embedded={embedded} />
        </React.Suspense>
    );
}

function Batch1DeepReportContent({ embedded = false }: { embedded?: boolean }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const defaultTab = searchParams.get('tab') || 'pomodoro';
    const [activeTab, setActiveTab] = useState(defaultTab);

    // Update URL when tab changes without full reload
    const handleTabChange = (value: string) => {
        setActiveTab(value);
        if (!embedded) {
            router.push(`/student/upsc/deep-report?tab=${value}`, { scroll: false });
        }
    };

    return (
        <div className={`space-y-6 ${embedded ? '' : 'max-w-7xl mx-auto p-4 md:p-6 pb-20'}`}>
            {/* Header - Only show if not embedded */}
            {!embedded && (
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                                <BarChart3 className="h-6 w-6" />
                            </div>
                            Deep Report Center
                        </h1>
                        <p className="text-muted-foreground dark:text-muted-foreground mt-1 ml-1">
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

            {/* Proactive Alerts */}
            <WeakTopicsAlert />

            <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-8">
                <div className="sticky top-0 z-20 bg-card/80/80 backdrop-blur-xl p-1 rounded-2xl border shadow-sm">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto p-1 gap-1 bg-transparent">
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
                        <TabsTrigger value="mood" className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-700 py-3 rounded-xl flex items-center gap-2">
                            <Smile className="w-4 h-4" />
                            <span>Mood</span>
                        </TabsTrigger>
                        <TabsTrigger value="subjects" className="data-[state=active]:bg-cyan-100 data-[state=active]:text-cyan-700 py-3 rounded-xl flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            <span>Analysis</span>
                        </TabsTrigger>
                        <TabsTrigger value="chapters" className="data-[state=active]:bg-violet-100 data-[state=active]:text-violet-700 py-3 rounded-xl flex items-center gap-2">
                            <GraduationCap className="w-4 h-4" />
                            <span>Chapters</span>
                        </TabsTrigger>
                        <TabsTrigger value="certificates" className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700 py-3 rounded-xl flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            <span>Awards</span>
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

                    <TabsContent value="mood" className="m-0">
                        <MoodTracker />
                    </TabsContent>

                    <TabsContent value="subjects" className="m-0">
                        <SubjectAnalytics />
                    </TabsContent>

                    <TabsContent value="chapters" className="m-0">
                        <ChapterMCQReport />
                    </TabsContent>

                    <TabsContent value="certificates" className="m-0">
                        <CertificateGenerator
                            studentName="Current Student"
                            courseName="UPSC Batch 1.1 First Phase"
                            completionDate={new Date().toLocaleDateString('en-GB')}
                            milestoneId="FOUNDATION_PHASE_1"
                        />
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
}

function CSATReport() {
    const [logs, setLogs] = useState<ActivityLog[]>([]);

    useEffect(() => {
        const fetchLogs = async () => {
            const data = await ActivityLogger.getLogs();
            setLogs(data);
        };
        fetchLogs();
    }, []);

    const csatLogs = logs.filter(l => l.type === 'MCQ_CSAT');

    const getAccuracy = (items: ActivityLog[]) => {
        if (items.length === 0) return 0;
        const correct = items.filter(l => l.details.isCorrect).length;
        return Math.round((correct / items.length) * 100);
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">CSAT Performance Analytics</h2>
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
        const fetchLogs = async () => {
            const data = await ActivityLogger.getLogs();
            setLogs(data);
        };
        fetchLogs();
    }, []);

    const eveningLogs = logs.filter(l => l.type === 'MCQ_EVENING');

    const getAccuracy = (items: ActivityLog[]) => {
        if (items.length === 0) return 0;
        const correct = items.filter(l => l.details.isCorrect).length;
        return Math.round((correct / items.length) * 100);
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">Evening Session Analytics</h2>
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


interface ActivityStats {
    totalMCQsSolved: number;
    totalCorrect: number;
    totalFlashcards: number;
    pomodoroMCQs: number;
    pomodoroCorrect: number;
    chapterMCQs: number;
    byTopic: Record<string, number>;
}

function ActivityReport() {
    const [stats, setStats] = useState<ActivityStats | null>(null);
    const [logs, setLogs] = useState<ActivityLog[]>([]);

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                const statsData = await ActivityLogger.getStats();
                setStats(statsData);
                const logsData = await ActivityLogger.getLogs();
                setLogs(logsData.reverse().slice(0, 50)); // Last 50 items
            } catch (err) {
                console.error("Failed to load activity", err);
            }
        };
        fetchActivity();
    }, []);

    if (!stats) return <div className="p-8 text-center text-muted-foreground">Loading Activity Data...</div>;

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2 text-indigo-700">
                            <Zap className="w-5 h-5" />
                            <span className="font-semibold">Total MCQs Solved</span>
                        </div>
                        <div className="text-4xl font-bold text-foreground">{stats.totalMCQsSolved}</div>
                        <p className="text-xs text-indigo-600/70 mt-2">All Sources (Evening, PYQ, Pomodoro, Chapter)</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2 text-green-700">
                            <Trophy className="w-5 h-5" />
                            <span className="font-semibold">Accuracy Rate</span>
                        </div>
                        <div className="text-4xl font-bold text-foreground">
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
                        <div className="text-4xl font-bold text-foreground">{stats.totalFlashcards}</div>
                        <p className="text-xs text-amber-600/70 mt-2">Concepts Reinforced</p>
                    </CardContent>
                </Card>
            </div>

            {/* Pomodoro Specific Stats */}
            {stats.pomodoroMCQs > 0 && (
                <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3 text-orange-700">
                            <Clock className="w-5 h-5" />
                            <span className="font-semibold">Pomodoro MCQ Performance</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="text-center p-3 bg-card/80 rounded-xl">
                                <div className="text-2xl font-bold text-orange-700">{stats.pomodoroMCQs}</div>
                                <div className="text-[10px] font-bold text-orange-500 uppercase">Questions</div>
                            </div>
                            <div className="text-center p-3 bg-card/80 rounded-xl">
                                <div className="text-2xl font-bold text-green-700">{stats.pomodoroCorrect}</div>
                                <div className="text-[10px] font-bold text-green-500 uppercase">Correct</div>
                            </div>
                            <div className="text-center p-3 bg-card/80 rounded-xl">
                                <div className="text-2xl font-bold text-indigo-700">
                                    {stats.pomodoroMCQs > 0 ? Math.round((stats.pomodoroCorrect / stats.pomodoroMCQs) * 100) : 0}%
                                </div>
                                <div className="text-[10px] font-bold text-indigo-500 uppercase">Accuracy</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity Stream</CardTitle>
                        <CardDescription>Real-time log of your learning actions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {logs.map((log, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 bg-muted/40">
                                    <div className={`mt-1 p-1.5 rounded-full shrink-0 ${log.type === 'MCQ_EVENING' ? 'bg-indigo-100 text-indigo-600' :
                                        log.type === 'MCQ_PYQ' ? 'bg-blue-100 text-blue-600' :
                                            log.type === 'MCQ_POMODORO' ? 'bg-orange-100 text-orange-600' :
                                                log.type === 'MCQ_CHAPTER' ? 'bg-violet-100 text-violet-600' :
                                                    'bg-amber-100 text-amber-600'
                                        }`}>
                                        {log.type.includes('MCQ') ? <Zap size={14} /> : <Brain size={14} />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <p className="text-sm font-medium text-foreground">
                                                {log.type === 'MCQ_EVENING' ? 'Solved Evening MCQ' :
                                                    log.type === 'MCQ_PYQ' ? 'Solved PYQ' :
                                                        log.type === 'MCQ_SATURDAY' ? 'Saturday Test MCQ' :
                                                            log.type === 'MCQ_POMODORO' ? '🍅 Pomodoro MCQ' :
                                                                log.type === 'MCQ_CHAPTER' ? '📚 Chapter MCQ' :
                                                                    log.type === 'MCQ_CSAT' ? 'CSAT MCQ' :
                                                                        'Flashcard Review'}
                                            </p>
                                            <span className="text-[10px] text-muted-foreground whitespace-nowrap ml-2">
                                                {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1 truncate">
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
                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground dark:text-muted-foreground">
                                                        Confidence: {log.details.confidence}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {logs.length === 0 && (
                                <div className="text-center py-8 text-muted-foreground text-sm">
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
                            {Object.entries(stats.byTopic).sort((a, b) => (b[1] as any) - (a[1] as any)).slice(0, 8).map(([topic, count], i) => (
                                <div key={i} className="space-y-1">
                                    <div className="flex justify-between text-xs font-medium">
                                        <span className="text-muted-foreground">{topic}</span>
                                        <span className="text-muted-foreground">{count} interactions</span>
                                    </div>
                                    <div className="h-2 bg-muted rounded-full overflow-hidden">
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

interface SaturdayTestPaperResult {
    score?: number;
    accuracy?: number;
    correct?: number;
    total?: number;
    [key: string]: unknown;
}

interface SaturdayTestResult {
    weekId: number | string;
    isV2: boolean;
    paper1Results?: SaturdayTestPaperResult | null;
    paper2Results?: SaturdayTestPaperResult | null;
    lastUpdated?: string;
    specialTitle?: string;
    [key: string]: unknown;
}

const WEEKS = Array.from({ length: 20 }, (_, i) => ({ id: i + 1 }));

function SaturdayTestsReport() {
    // const WEEKS = Array.from({ length: 20 }, (_, i) => ({ id: i + 1 })); // Moved outside
    const [scores, setScores] = useState<any[]>([]);
    const [selectedReport, setSelectedReport] = useState<SaturdayTestResult | null>(null);

    useEffect(() => {
        // Scan localStorage for all saturday tests
        const results = WEEKS.map(week => {
            // Check for v2 format first
            const savedV2 = localStorage.getItem(`batch11_saturday_results_v2_w${week.id}`);
            if (savedV2) {
                try {
                    const data = JSON.parse(savedV2);
                    return {
                        weekId: week.id,
                        isV2: true,
                        ...data
                    };
                } catch (e: any) {
                    console.error('Failed to parse savedV2 for week ' + week.id, e);
                }
            }

            // Fallback to legacy format
            const savedLegacy = localStorage.getItem(`batch11_saturday_${week.id}`);
            if (savedLegacy) {
                try {
                    const data = JSON.parse(savedLegacy);
                    return {
                        weekId: week.id,
                        isV2: false,
                        paper1Results: { score: data.paper1Score },
                        paper2Results: { score: data.paper2Score },
                        lastUpdated: data.lastUpdated
                    };
                } catch (e: any) {
                    console.error('Failed to parse savedLegacy for week ' + week.id, e);
                }
            }
            return null;
        }).filter((r): r is SaturdayTestResult => r !== null);

        // Also scan for Polity Mock Tests (Jan 31)
        // Keys match the format used in PolityTestPage: polity_test_${testId}_results
        const polityTests = [
            { key: 'polity_test_paper1-jan31_results', id: '1', name: 'Polity Paper 1 (Jan 31)' },
            { key: 'polity_test_paper2-jan31_results', id: '2', name: 'Polity Paper 2 (Jan 31)' }
        ].map(test => {
            const saved = localStorage.getItem(test.key);
            if (saved) {
                try {
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
                    } as SaturdayTestResult;
                } catch (e: any) {
                    console.error(`Failed to parse saved history for ${test.key}`, e);
                }
            }
            return null;
        }).filter((r): r is SaturdayTestResult => r !== null);

        setTimeout(() => {
            setScores([...results, ...polityTests]);
        }, 0);
    }, []);

    if (scores.length === 0) {
        return (
            <Card className="bg-muted border-border">
                <CardContent className="p-12 text-center text-muted-foreground">
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
                                className="absolute -top-4 -right-4 md:top-4 md:right-4 z-[60] text-white hover:bg-card/10 rounded-full"
                            >
                                <X className="h-6 w-6" />
                            </Button>
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <SaturdayTestReport
                                    results={selectedReport as any}
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
                        <CardHeader className="bg-muted/50 pb-4">
                            <CardTitle className="flex justify-between items-center">
                                <span>{score.specialTitle || `Week ${score.weekId}`}</span>
                                <span className="text-[10px] md:text-xs font-normal text-muted-foreground">
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
                                    className="w-full bg-slate-900 dark:bg-card dark:text-foreground hover:bg-slate-800 font-bold rounded-xl"
                                    onClick={() => setSelectedReport(score.paper1Results as any)}
                                    disabled={!score.paper1Results || !score.isV2}
                                >
                                    <BarChart3 className="w-4 h-4 mr-2" />
                                    {score.isV2 ? 'View Paper 1 Report' : 'Detailed N/A'}
                                </Button>
                                <Button
                                    className="w-full bg-slate-900 dark:bg-card dark:text-foreground hover:bg-slate-800 font-bold rounded-xl"
                                    onClick={() => setSelectedReport(score.paper2Results as any)}
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


// --- Chapter MCQ Reports Aggregation ---
function ChapterMCQReport() {
    const [allReports, setAllReports] = useState<{ chapterId: any; reports: ChapterTestResult[], subject?: string }[]>([]);
    const [selectedReport, setSelectedReport] = useState<ChapterTestResult | null>(null);
    const [selectedSubject, setSelectedSubject] = useState<'polity' | 'history' | 'geography' | 'economy' | 'environment' | 'science-tech'>('polity');

    useEffect(() => {
        // Scan localStorage for all chapter reports
        const chapters: { chapterId: any; reports: ChapterTestResult[]; subject?: string }[] = [];

        // 1. Polygon Reports (Legacy format)
        for (let i = 1; i <= 53; i++) {
            const key = `polity-chapter-${i}-reports`;
            const saved = localStorage.getItem(key);
            if (saved) {
                try {
                    const reports = JSON.parse(saved) as ChapterTestResult[];
                    if (reports.length > 0) {
                        chapters.push({ chapterId: i, reports, subject: 'Polity' });
                    }
                } catch (e: any) { }
            }
        }

        if (typeof window !== 'undefined') {
            import('@/lib/report-persistence').then(async mod => {
                const historyReports = await mod.getChapterReports('history');
                const polityUniversalReports = await mod.getChapterReports('polity');
                const geographyReports = await mod.getChapterReports('geography');
                const economyReports = await mod.getChapterReports('economy');
                const environmentReports = await mod.getChapterReports('environment');
                const scitechReports = await mod.getChapterReports('science-tech');

                // Group by chapter - Geography
                const geographyByChapter: Record<string | number, ChapterTestResult[]> = {};
                geographyReports.forEach(r => {
                    if (!geographyByChapter[r.chapterId]) geographyByChapter[r.chapterId] = [];
                    const mapped: ChapterTestResult = {
                        chapterNumber: r.chapterId as any,
                        chapterId: r.chapterId as any,
                        chapterTitle: `Geography Day ${r.chapterId}`,
                        topicName: `Geography Day ${r.chapterId}`,
                        levelId: (r.level || 1) as 1 | 2 | 3,
                        levelTitle: 'Level ' + (r.level || 1),
                        score: r.score,
                        totalQuestions: r.totalQuestions,
                        percentage: r.accuracy,
                        totalTimeTaken: r.timeTaken,
                        endTime: r.timestamp,
                        startTime: r.timestamp,
                        questions: r.details?.questions || []
                    };
                    geographyByChapter[r.chapterId].push(mapped);
                });

                Object.entries(geographyByChapter).forEach(([cid, reports]) => {
                    chapters.push({ chapterId: parseInt(cid), reports, subject: 'Geography' });
                });

                // Group by chapter - Economy
                const economyByChapter: Record<string | number, ChapterTestResult[]> = {};
                economyReports.forEach(r => {
                    if (!economyByChapter[r.chapterId]) economyByChapter[r.chapterId] = [];
                    const mapped: ChapterTestResult = {
                        chapterNumber: r.chapterId as any,
                        chapterId: r.chapterId as any,
                        chapterTitle: `Economy Topic ${r.chapterId}`,
                        topicName: `Economy Topic ${r.chapterId}`,
                        levelId: (r.level || 1) as 1 | 2 | 3,
                        levelTitle: 'Level ' + (r.level || 1),
                        score: r.score,
                        totalQuestions: r.totalQuestions,
                        percentage: r.accuracy,
                        totalTimeTaken: r.timeTaken,
                        endTime: r.timestamp,
                        startTime: r.timestamp,
                        questions: r.details?.questions || []
                    };
                    economyByChapter[r.chapterId].push(mapped);
                });

                Object.entries(economyByChapter).forEach(([cid, reports]) => {
                    chapters.push({ chapterId: parseInt(cid), reports, subject: 'Economy' });
                });

                // Group by chapter - Environment
                const environmentByChapter: Record<string | number, ChapterTestResult[]> = {};
                environmentReports.forEach(r => {
                    if (!environmentByChapter[r.chapterId]) environmentByChapter[r.chapterId] = [];
                    const mapped: ChapterTestResult = {
                        chapterNumber: r.chapterId as any,
                        chapterId: r.chapterId as any,
                        chapterTitle: `Environment Topic ${r.chapterId}`,
                        topicName: `Environment Topic ${r.chapterId}`,
                        levelId: (r.level || 1) as 1 | 2 | 3,
                        levelTitle: 'Level ' + (r.level || 1),
                        score: r.score,
                        totalQuestions: r.totalQuestions,
                        percentage: r.accuracy,
                        totalTimeTaken: r.timeTaken,
                        endTime: r.timestamp,
                        startTime: r.timestamp,
                        questions: r.details?.questions || []
                    };
                    environmentByChapter[r.chapterId].push(mapped);
                });

                Object.entries(environmentByChapter).forEach(([cid, reports]) => {
                    chapters.push({ chapterId: parseInt(cid), reports, subject: 'Environment' });
                });

                // Group by chapter - Sci-Tech
                const scitechByChapter: Record<string | number, ChapterTestResult[]> = {};
                scitechReports.forEach(r => {
                    if (!scitechByChapter[r.chapterId]) scitechByChapter[r.chapterId] = [];
                    const mapped: ChapterTestResult = {
                        chapterNumber: r.chapterId as any,
                        chapterId: r.chapterId as any,
                        chapterTitle: `Science & Tech Topic ${r.chapterId}`,
                        topicName: `Science & Tech Topic ${r.chapterId}`,
                        levelId: (r.level || 1) as 1 | 2 | 3,
                        levelTitle: 'Level ' + (r.level || 1),
                        score: r.score,
                        totalQuestions: r.totalQuestions,
                        percentage: r.accuracy,
                        totalTimeTaken: r.timeTaken,
                        endTime: r.timestamp,
                        startTime: r.timestamp,
                        questions: r.details?.questions || []
                    };
                    scitechByChapter[r.chapterId].push(mapped);
                });

                Object.entries(scitechByChapter).forEach(([cid, reports]) => {
                    chapters.push({ chapterId: parseInt(cid), reports, subject: 'Science & Tech' });
                });

                // Group by chapter - History
                const historyByChapter: Record<string | number, ChapterTestResult[]> = {};

                historyReports.forEach(r => {
                    if (!historyByChapter[r.chapterId]) historyByChapter[r.chapterId] = [];

                    // Convert Universal format to ChapterTestResult format expected by this component
                    const levelTitles: Record<number, string> = { 1: 'Fundamentals', 2: 'Intermediate', 3: 'Applied' };
                    const mapped: ChapterTestResult = {
                        chapterNumber: r.chapterId as any,
                        chapterId: r.chapterId as any,
                        chapterTitle: `History Chapter ${r.chapterId}`,
                        topicName: `History Chapter ${r.chapterId}`,
                        levelId: (r.level || 1) as 1 | 2 | 3,
                        levelTitle: levelTitles[r.level || 1] || 'Level ' + (r.level || 1),
                        score: r.score,
                        totalQuestions: r.totalQuestions,
                        percentage: r.accuracy,
                        totalTimeTaken: r.timeTaken,
                        endTime: r.timestamp,
                        startTime: r.timestamp,
                        questions: r.details?.questions || [] // Use questions from details if available
                    };
                    historyByChapter[r.chapterId].push(mapped);
                });

                Object.entries(historyByChapter).forEach(([cid, reports]) => {
                    chapters.push({ chapterId: parseInt(cid), reports, subject: 'History' });
                });

                // Group by chapter - Polity (Universal Format)
                const polityByChapter: Record<string | number, ChapterTestResult[]> = {};

                polityUniversalReports.forEach(r => {
                    if (!polityByChapter[r.chapterId]) polityByChapter[r.chapterId] = [];

                    const levelTitles: Record<number, string> = { 1: 'Fundamentals', 2: 'Intermediate', 3: 'Applied' };
                    const mapped: ChapterTestResult = {
                        chapterNumber: r.chapterId as any,
                        chapterId: r.chapterId as any,
                        chapterTitle: `Polity Chapter ${r.chapterId}`,
                        topicName: `Polity Chapter ${r.chapterId}`,
                        levelId: (r.level || 1) as 1 | 2 | 3,
                        levelTitle: levelTitles[r.level || 1] || 'Level ' + (r.level || 1),
                        score: r.score,
                        totalQuestions: r.totalQuestions,
                        percentage: r.accuracy,
                        totalTimeTaken: r.timeTaken,
                        endTime: r.timestamp,
                        startTime: r.timestamp,
                        questions: r.details?.questions || []
                    };
                    polityByChapter[r.chapterId].push(mapped);
                });

                // Merge Polity universal reports with existing legacy reports
                Object.entries(polityByChapter).forEach(([cid, reports]) => {
                    const existingIdx = chapters.findIndex(c => String(c.chapterId) === String(cid) && c.subject === 'Polity');
                    if (existingIdx >= 0) {
                        // Merge with existing
                        chapters[existingIdx].reports = [...reports, ...chapters[existingIdx].reports];
                    } else {
                        chapters.push({ chapterId: parseInt(cid), reports, subject: 'Polity' });
                    }
                });

                // Update state
                setAllReports(chapters.sort((a, b) => {
                    if (a.subject !== b.subject) return (a.subject || '').localeCompare(b.subject || '');
                    return a.chapterId - b.chapterId;
                }));
            }).catch(err => {
                console.error('Error loading universal reports:', err);
                setAllReports(chapters.sort((a, b) => a.chapterId - b.chapterId));
            });
        } else {
            setAllReports(chapters.sort((a, b) => a.chapterId - b.chapterId));
        }

    }, []);

    const filteredReports = React.useMemo(() => {
        return allReports.filter(c => (c.subject || "Polity").toLowerCase() === (selectedSubject as string));
    }, [allReports, selectedSubject]);

    // Calculate aggregated stats
    const aggregatedStats = React.useMemo(() => {
        let totalAttempts = 0;
        let totalQuestions = 0;
        let totalCorrect = 0;
        let totalTime = 0;
        const confidenceData: Record<string, { correct: number; total: number }> = {
            'sure': { correct: 0, total: 0 },
            '50-50': { correct: 0, total: 0 },
            'one-option': { correct: 0, total: 0 },
            'blind': { correct: 0, total: 0 },
        };
        const levelData: Record<number, { correct: number; total: number }> = {
            1: { correct: 0, total: 0 },
            2: { correct: 0, total: 0 },
            3: { correct: 0, total: 0 },
        };

        filteredReports.forEach(chapter => {
            chapter.reports.forEach(report => {
                totalAttempts++;
                totalQuestions += report.questions.length;
                totalCorrect += report.score;
                totalTime += report.totalTimeTaken;

                // Level stats
                const level = report.levelId;
                (levelData as any)[level].total += report.questions.length;
                (levelData as any)[level].correct += report.score;

                // Confidence stats
                report.questions.forEach(q => {
                    if (q.confidence && (aggregatedStats.confidenceData as any)[q.confidence]) {
                        (aggregatedStats.confidenceData as any)[q.confidence].total++;
                        if (q.isCorrect) (aggregatedStats.confidenceData as any)[q.confidence].correct++;
                    }
                });
            });
        });

        return {
            totalAttempts,
            totalQuestions,
            totalCorrect,
            accuracy: totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0,
            totalTime,
            confidenceData,
            levelData,
        };
    }, [filteredReports]);

    // If viewing a specific report
    if (selectedReport) {
        return (
            <div className="space-y-6">
                <Button variant="ghost" onClick={() => setSelectedReport(null)} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Overview
                </Button>
                <ChapterReportDetail report={selectedReport} />
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Subject Toggle */}
            <div className="flex justify-center">
                <div className="inline-flex bg-muted p-1 rounded-xl">
                    <button
                        onClick={() => setSelectedSubject('polity')}
                        className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${selectedSubject === 'polity' ? 'bg-card dark:bg-black shadow text-foreground' : 'text-muted-foreground hover:text-foreground dark:hover:text-white'}`}
                    >
                        Polity
                    </button>
                    <button
                        onClick={() => setSelectedSubject('history')}
                        className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${selectedSubject === 'history' ? 'bg-card dark:bg-black shadow text-foreground' : 'text-muted-foreground hover:text-foreground dark:hover:text-white'}`}
                    >
                        History
                    </button>
                    <button
                        onClick={() => setSelectedSubject('geography')}
                        className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${selectedSubject === 'geography' ? 'bg-card dark:bg-black shadow text-foreground' : 'text-muted-foreground hover:text-foreground dark:hover:text-white'}`}
                    >
                        Geography
                    </button>
                    <button
                        onClick={() => setSelectedSubject('economy')}
                        className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${selectedSubject === 'economy' ? 'bg-card dark:bg-black shadow text-foreground' : 'text-muted-foreground hover:text-foreground dark:hover:text-white'}`}
                    >
                        Economy
                    </button>
                    <button
                        onClick={() => setSelectedSubject('environment')}
                        className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${selectedSubject === 'environment' ? 'bg-card dark:bg-black shadow text-foreground' : 'text-muted-foreground hover:text-foreground dark:hover:text-white'}`}
                    >
                        Environment
                    </button>
                    <button
                        onClick={() => setSelectedSubject('science-tech')}
                        className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${selectedSubject === 'science-tech' ? 'bg-card dark:bg-black shadow text-foreground' : 'text-muted-foreground hover:text-foreground dark:hover:text-white'}`}
                    >
                        Sci-Tech
                    </button>
                </div>
            </div>

            {/* Analytics Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <MasteryTracker subject={selectedSubject} />
                </div>
                <div>
                    <GoalSetting subject={selectedSubject} />
                </div>
            </div>
            {/* Global Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <p className="text-xs font-bold text-blue-600 uppercase">Questions Solved</p>
                    <p className="text-3xl font-black text-blue-700">{aggregatedStats.totalQuestions}</p>
                </Card>
                <Card className="p-4 text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <p className="text-xs font-bold text-green-600 uppercase">Overall Accuracy</p>
                    <p className="text-3xl font-black text-green-700">{aggregatedStats.accuracy}%</p>
                </Card>
                <Card className="p-4 text-center bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
                    <p className="text-xs font-bold text-amber-600 uppercase">Total Time</p>
                    <p className="text-3xl font-black text-amber-700">{Math.floor(aggregatedStats.totalTime / 60)}m</p>
                </Card>
            </div>

            {/* Level Performance */}
            <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                    <Target className="w-5 h-5 text-indigo-500" />
                    Level-wise Performance
                </h3>
                <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map(level => {
                        const data = (aggregatedStats.levelData as any)[level];
                        const acc = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                        return (
                            <div key={level} className="p-4 bg-muted rounded-xl text-center">
                                <p className="text-xs font-bold text-muted-foreground uppercase">Level {level}</p>
                                <p className="text-2xl font-black text-muted-foreground">{acc}%</p>
                                <p className="text-xs text-muted-foreground">{data.correct}/{data.total} correct</p>
                            </div>
                        );
                    })}
                </div>
            </Card>

            {/* Confidence Analysis */}
            <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-500" />
                    Confidence Level Analysis
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(aggregatedStats.confidenceData).map(([level, data]) => {
                        const acc = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                        const colors: Record<string, string> = {
                            'sure': 'text-emerald-600 bg-emerald-50',
                            '50-50': 'text-orange-600 bg-orange-50',
                            'one-option': 'text-blue-600 bg-blue-50',
                            'blind': 'text-muted-foreground bg-muted',
                        };
                        return (
                            <div key={level} className={`p-4 rounded-xl text-center ${(colors as any)[level] || 'bg-muted'}`}>
                                <p className="text-xs font-bold uppercase">{level.replace('-', ' ')}</p>
                                <p className="text-2xl font-black">{acc}%</p>
                                <p className="text-xs opacity-70">{data.correct}/{data.total} correct</p>
                            </div>
                        );
                    })}
                </div>
            </Card>

            {/* Chapter-by-Chapter Breakdown */}
            <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                    <FileBarChart className="w-5 h-5 text-cyan-500" />
                    Chapter Reports
                </h3>
                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {filteredReports.map((chapter) => (
                        <div key={`${chapter.chapterId}-${chapter.subject}`} className="p-4 bg-muted rounded-xl border border-slate-100">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-bold text-foreground">
                                    <span className="text-xs uppercase font-bold text-muted-foreground block mb-0.5">{chapter.subject || 'Polity'}</span>
                                    Chapter {chapter.chapterId}: {(chapter.reports[0] as any)?.chapterTitle || 'Unknown'}
                                </h4>
                                <span className="text-xs text-muted-foreground">{chapter.reports.length} attempt(s)</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {chapter.reports.slice(0, 6).map((report, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedReport(report)}
                                        className="p-3 bg-card rounded-lg border border-border hover:border-violet-300 hover:bg-violet-50 transition-all text-left"
                                    >
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-medium text-muted-foreground">Level {report.levelId}</span>
                                            <span className={`text-sm font-bold ${report.percentage >= 50 ? 'text-green-600' : 'text-red-600'}`}>
                                                {report.percentage}%
                                            </span>
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {new Date(report.endTime).toLocaleDateString()} • {report.score}/{report.totalQuestions}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}

// --- Chapter Report Detail View ---
function ChapterReportDetail({ report }: { report: ChapterTestResult }) {
    const [filter, setFilter] = useState<'all' | 'correct' | 'incorrect'>('all');

    const confidenceStats = [
        { level: 'Sure', value: 'sure' },
        { level: '50-50', value: '50-50' },
        { level: 'One Option', value: 'one-option' },
        { level: 'Blind', value: 'blind' },
    ].map(opt => {
        const qs = report.questions.filter(q => q.confidence === opt.value);
        const correct = qs.filter(q => q.isCorrect).length;
        return {
            level: opt.level,
            total: qs.length,
            correct,
            accuracy: qs.length > 0 ? Math.round((correct / qs.length) * 100) : 0,
        };
    });

    const filteredQuestions = report.questions.filter(q => {
        if (filter === 'correct') return q.isCorrect;
        if (filter === 'incorrect') return !q.isCorrect;
        return true;
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="p-6 bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/30 dark:to-indigo-900/30 rounded-2xl border border-violet-200 dark:border-violet-800">
                <h2 className="text-2xl font-black text-foreground mb-1">
                    Chapter {report.chapterNumber}: {report.chapterTitle}
                </h2>
                <p className="text-muted-foreground">Level {report.levelId} • {report.levelTitle}</p>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-1">
                    Completed: {new Date(report.endTime).toLocaleString()}
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4 text-center bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-900/10 border-violet-200 dark:border-violet-800">
                    <p className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase">Score</p>
                    <p className="text-3xl font-black text-violet-700 dark:text-violet-300">{report.percentage}%</p>
                </Card>
                <Card className="p-4 text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10 border-green-200 dark:border-green-800">
                    <p className="text-xs font-bold text-green-600 dark:text-green-400 uppercase">Correct</p>
                    <p className="text-3xl font-black text-green-700 dark:text-green-300">{report.score}</p>
                </Card>
                <Card className="p-4 text-center bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/10 border-red-200 dark:border-red-800">
                    <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase">Incorrect</p>
                    <p className="text-3xl font-black text-red-700 dark:text-red-300">{report.totalQuestions - report.score}</p>
                </Card>
                <Card className="p-4 text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10 border-blue-200 dark:border-blue-800">
                    <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Time</p>
                    <p className="text-3xl font-black text-blue-700 dark:text-blue-300">{Math.floor(report.totalTimeTaken / 60)}m</p>
                </Card>
            </div>

            {/* Confidence Analysis */}
            <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">Confidence Analysis</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {confidenceStats.map(stat => (
                        <div key={stat.level} className="p-4 bg-muted rounded-xl text-center">
                            <p className="text-xs font-bold text-muted-foreground uppercase">{stat.level}</p>
                            <p className="text-2xl font-black text-muted-foreground">{stat.accuracy}%</p>
                            <p className="text-xs text-muted-foreground">{stat.correct}/{stat.total}</p>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Question Review */}
            <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Question Review</h3>
                    <div className="flex gap-2">
                        {(['all', 'correct', 'incorrect'] as const).map(f => (
                            <Button
                                key={f}
                                variant={filter === f ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setFilter(f)}
                                className="capitalize"
                            >
                                {f}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                    {filteredQuestions.map((q, i) => (
                        <div key={i} className={`p-4 rounded-xl border ${q.isCorrect ? 'bg-green-50/50 border-green-100' : 'bg-red-50/50 border-red-100'}`}>
                            <div className="flex items-start gap-3 mb-3">
                                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${q.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {i + 1}
                                </span>
                                <div className="flex-1">
                                    <p className="font-medium text-foreground leading-relaxed">{q.question}</p>
                                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                                        <span className={`px-2 py-0.5 rounded-full ${q.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {q.isCorrect ? 'Correct' : 'Incorrect'}
                                        </span>
                                        <span>•</span>
                                        <span>{q.confidence || 'No confidence'}</span>
                                        <span>•</span>
                                        <span>{q.timeSpent}s</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 mt-3">
                                {q.options.map((opt, idx) => {
                                    const isCorrect = idx === q.correctAnswer;
                                    const isUserChoice = idx === q.userAnswer;
                                    let cls = "p-2 rounded-lg text-sm border ";
                                    if (isCorrect) cls += "bg-green-100 border-green-300 text-green-800 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300";
                                    else if (isUserChoice) cls += "bg-red-100 border-red-300 text-red-800 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300";
                                    else cls += "bg-card border-slate-100 text-muted-foreground dark:text-muted-foreground";

                                    return (
                                        <div key={idx} className={cls}>
                                            <span className="font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
                                            {opt}
                                        </div>
                                    );
                                })}
                            </div>

                            {q.explanation && (
                                <div className="mt-3 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                                    <strong>Explanation:</strong> {q.explanation}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}


