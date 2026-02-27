"use client";

import { use, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Timer, Trophy, FileText, Clock, Play, CheckCircle2, History, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SaturdayTestSession from "@/components/batch1-1/saturday/SaturdayTestSession";
import SaturdayTestReport from "@/components/batch1-1/saturday/SaturdayTestReport";
import { SATURDAY_TEST_DATABASE } from "@/components/batch1-1/data/saturday-test-data";
import { ActivityLogger } from "@/lib/analytics/ActivityLogger";

interface PageProps {
    params: Promise<{
        weekId: string;
    }>;
}

// Test states
type TestState = 'select' | 'paper1_test' | 'paper2_test' | 'paper1_report' | 'paper2_report';

export default function SaturdayTestPage({ params }: PageProps) {
    const resolvedParams = use(params);
    const weekId = parseInt(resolvedParams.weekId);

    const [testState, setTestState] = useState<TestState>('select');
    const [paper1Results, setPaper1Results] = useState<any>(null);
    const [paper2Results, setPaper2Results] = useState<any>(null);

    const weekData = SATURDAY_TEST_DATABASE[weekId];
    const paper1Qs = weekData?.paper1 || [];
    const paper2Qs = weekData?.paper2 || [];

    // Loading/Missing Check
    if (!weekData || paper1Qs.length === 0) {
        return (
            <div className="min-h-screen bg-[#020617] p-6 flex flex-col items-center justify-center text-center">
                <Link href="/student/batch1-1" className="mb-8">
                    <Button variant="ghost" className="text-slate-400 hover:text-white">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Batch 1.1
                    </Button>
                </Link>
                <div className="p-6 rounded-full bg-slate-900 border border-slate-800 mb-6">
                    <Clock className="w-12 h-12 text-blue-500" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-3">Test Not Available Yet</h1>
                <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
                    The Saturday Polity Test for Week {weekId} has not been released.
                    Tests are activated on Saturday mornings.
                </p>
            </div>
        );
    }

    // Load saved progress
    useEffect(() => {
        const loadProgress = async () => {
            const token = localStorage.getItem("token");
            let loaded = false;
            if (token) {
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/student-reports/batch11_saturday_results_v2_w${weekId}`, {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                    if (res.ok) {
                        const report = await res.json();
                        if (report.data) {
                            setPaper1Results(report.data.paper1Results);
                            setPaper2Results(report.data.paper2Results);
                            loaded = true;
                        }
                    }
                } catch (err) { }
            }
            if (!loaded) {
                const saved = localStorage.getItem(`batch11_saturday_results_v2_w${weekId}`);
                if (saved) {
                    const data = JSON.parse(saved);
                    setPaper1Results(data.paper1Results);
                    setPaper2Results(data.paper2Results);
                }
            }
        };
        loadProgress();
    }, [weekId]);

    // Save progress
    const saveProgress = async (p1Results: any, p2Results: any) => {
        const payload = {
            paper1Results: p1Results,
            paper2Results: p2Results,
            lastUpdated: new Date().toISOString()
        };
        localStorage.setItem(`batch11_saturday_results_v2_w${weekId}`, JSON.stringify(payload));

        const token = localStorage.getItem("token");
        if (token) {
            try {
                await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/student-reports/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        report_type: 'saturday_test',
                        report_key: `batch11_saturday_results_v2_w${weekId}`,
                        data: payload
                    })
                });
            } catch (err) { }
        }
    };

    const handleTestComplete = (results: any, isPaper1: boolean) => {
        if (isPaper1) {
            setPaper1Results(results);
            saveProgress(results, paper2Results);
            setTestState('paper1_report');
        } else {
            setPaper2Results(results);
            saveProgress(paper1Results, results);
            setTestState('paper2_report');
        }

        // Log to activity logger
        results.questions.forEach((q: any) => {
            ActivityLogger.logActivity({
                type: 'MCQ_SATURDAY',
                details: {
                    questionId: q.id.toString(),
                    topic: q.chapter,
                    subtopic: q.subtopic,
                    isCorrect: q.isCorrect,
                    confidence: q.confidence,
                    timeSpent: q.timeSpent
                }
            });
        });
    };

    // Report view
    if (testState === 'paper1_report' && paper1Results) {
        return <SaturdayTestReport results={paper1Results} onBack={() => setTestState('select')} />;
    }
    if (testState === 'paper2_report' && paper2Results) {
        return <SaturdayTestReport results={paper2Results} onBack={() => setTestState('select')} />;
    }

    // Test view
    if (testState === 'paper1_test') {
        return (
            <SaturdayTestSession
                questions={paper1Qs}
                testTitle={`Week ${weekId} - Paper 1: UPSC Prelims 2026 Polity`}
                onComplete={(res) => handleTestComplete(res, true)}
                onCancel={() => setTestState('select')}
            />
        );
    }
    if (testState === 'paper2_test') {
        return (
            <SaturdayTestSession
                questions={paper2Qs}
                testTitle={`Week ${weekId} - Paper 2: UPSC Prelims 2026 Polity`}
                onComplete={(res) => handleTestComplete(res, false)}
                onCancel={() => setTestState('select')}
            />
        );
    }

    // Selection view
    const paper1Completed = !!paper1Results;
    const paper2Completed = !!paper2Results;

    const getScoreStr = (results: any) => {
        if (!results) return null;
        const correct = results.questions.filter((q: any) => q.isCorrect).length;
        const total = results.questions.length;
        return `${Math.round((correct / total) * 100)}%`;
    };

    return (
        <div className="min-h-screen bg-[#020617] p-6 lg:p-12">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <Link href="/student/batch1-1">
                        <Button variant="ghost" className="text-slate-400 hover:text-white">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Batch 1.1
                        </Button>
                    </Link>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                        <History className="w-3 h-3" />
                        Session History Active
                    </div>
                </div>

                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-2">Saturday Test Portal</h1>
                    <p className="text-slate-400">Week {weekId} Assessments • High Intensity Recall Sessions</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Paper 1 Card */}
                    <Card className={`relative overflow-hidden group border-slate-800 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 ${paper1Completed ? 'border-emerald-500/30' : 'hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]'}`}>
                        <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] transition-opacity duration-500 ${paper1Completed ? 'bg-emerald-500/10 opacity-100' : 'bg-blue-500/5 opacity-0 group-hover:opacity-100'}`} />
                        <CardHeader className="pb-4">
                            <div className="flex justify-between items-start mb-2">
                                <div className={`p-3 rounded-2xl ${paper1Completed ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400'}`}>
                                    <FileText className="w-6 h-6" />
                                </div>
                                {paper1Completed && (
                                    <div className="flex flex-col items-end">
                                        <span className="text-2xl font-black text-emerald-400">{getScoreStr(paper1Results)}</span>
                                        <span className="text-[10px] text-emerald-500/70 uppercase tracking-widest font-bold">Accuracy</span>
                                    </div>
                                )}
                            </div>
                            <CardTitle className="text-xl text-white">Paper 1: UPSC 2026</CardTitle>
                            <p className="text-sm text-slate-500">Polity & Current Affairs Integration</p>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-4 text-xs text-slate-400">
                                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-blue-400" /> 120 Mins</div>
                                <div className="flex items-center gap-1.5"><History className="w-3.5 h-3.5 text-purple-400" /> 100 MCQs</div>
                            </div>

                            {paper1Completed ? (
                                <div className="grid grid-cols-2 gap-3 pt-2">
                                    <Button
                                        onClick={() => setTestState('paper1_report')}
                                        className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                                    >
                                        <BarChart3 className="w-4 h-4 mr-2" /> View Report
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => { if (confirm("Retake Paper 1? Progress will be cleared.")) setTestState('paper1_test'); }}
                                        className="border-slate-800 text-slate-500 hover:text-slate-300"
                                    >
                                        Retake
                                    </Button>
                                </div>
                            ) : (
                                <Button
                                    onClick={() => setTestState('paper1_test')}
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold h-12 rounded-xl group"
                                >
                                    Start Paper 1 <Play className="w-4 h-4 ml-2 fill-current group-hover:translate-x-1 transition-transform" />
                                </Button>
                            )}
                        </CardContent>
                    </Card>

                    {/* Paper 2 Card */}
                    <Card className={`relative overflow-hidden group border-slate-800 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 ${paper2Completed ? 'border-emerald-500/30' : paper1Completed ? 'hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]' : 'opacity-50 grayscale'}`}>
                        <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] transition-opacity duration-500 ${paper2Completed ? 'bg-emerald-500/10 opacity-100' : 'bg-purple-500/5 opacity-0 group-hover:opacity-100'}`} />
                        <CardHeader className="pb-4">
                            <div className="flex justify-between items-start mb-2">
                                <div className={`p-3 rounded-2xl ${paper2Completed ? 'bg-emerald-500/10 text-emerald-400' : 'bg-purple-500/10 text-purple-400'}`}>
                                    <FileText className="w-6 h-6" />
                                </div>
                                {paper2Completed && (
                                    <div className="flex flex-col items-end">
                                        <span className="text-2xl font-black text-emerald-400">{getScoreStr(paper2Results)}</span>
                                        <span className="text-[10px] text-emerald-500/70 uppercase tracking-widest font-bold">Accuracy</span>
                                    </div>
                                )}
                            </div>
                            <CardTitle className="text-xl text-white">Paper 2: UPSC 2026</CardTitle>
                            <p className="text-sm text-slate-500">Governance & Institutional Polity</p>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-4 text-xs text-slate-400">
                                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-blue-400" /> 120 Mins</div>
                                <div className="flex items-center gap-1.5"><History className="w-3.5 h-3.5 text-purple-400" /> 100 MCQs</div>
                            </div>

                            {paper2Completed ? (
                                <div className="grid grid-cols-2 gap-3 pt-2">
                                    <Button
                                        onClick={() => setTestState('paper2_report')}
                                        className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                                    >
                                        <BarChart3 className="w-4 h-4 mr-2" /> View Report
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => { if (confirm("Retake Paper 2? Progress will be cleared.")) setTestState('paper2_test'); }}
                                        className="border-slate-800 text-slate-500 hover:text-slate-300"
                                    >
                                        Retake
                                    </Button>
                                </div>
                            ) : (
                                <Button
                                    onClick={() => setTestState('paper2_test')}
                                    disabled={!paper1Completed}
                                    className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold h-12 rounded-xl group disabled:bg-slate-800 disabled:text-slate-600"
                                >
                                    {paper1Completed ? 'Start Paper 2' : 'Unlock After Paper 1'} <Play className="w-4 h-4 ml-2 fill-current" />
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {paper1Completed && paper2Completed && (
                    <div className="mt-12 text-center p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 italic">
                        <Trophy className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-emerald-400 mb-2">Weekend Milestone Achieved</h2>
                        <p className="text-slate-400">All assessments for Week {weekId} are recorded in your Deep Report profile.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
