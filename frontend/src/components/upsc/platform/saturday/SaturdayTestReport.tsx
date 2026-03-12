"use client";

import React, { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    CheckCircle2,
    XCircle,
    HelpCircle,
    Zap,
    Target,
    Brain,
    Clock,
    ArrowLeft,
    ChevronRight,
    ChevronDown,
    BarChart3,
    Search,
    History,
    ZoomIn
} from "lucide-react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from "recharts";

interface QuestionResult {
    id: number | string;
    question: string;
    options: string[];
    explanation: string;
    chapter: string;
    subtopic: string;
    userAnswer: number | null;
    correctAnswer: number;
    confidence: 'sure' | '50-50' | 'one-option' | 'blind' | null;
    timeSpent: number;
    isCorrect: boolean;
    subject?: string; // New field for multi-subject tests
    visitCount?: number;
    attemptRound?: number;
}

interface TestReportProps {
    results: {
        testTitle: string;
        startTime?: string;
        endTime?: string;
        totalTimeTaken: number;
        questions: QuestionResult[];
        subjectScores?: Array<{
            subject: string;
            label: string;
            correct: number;
            wrong: number;
            unattempted: number;
            total: number;
            score: number;
            maxScore: number;
            accuracy: number;
        }>;
        netScore?: number;
        maxScore?: number;
    };
    onBack: () => void;
    onRetake?: () => void;
}

const SaturdayTestReport: React.FC<TestReportProps> = ({ results, onBack, onRetake }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState<'all' | 'correct' | 'incorrect' | 'unattempted'>('all');
    const questions = results?.questions || [];
    const totalTimeTaken = results?.totalTimeTaken || 0;

    // 1. Stats Calculation
    const stats = useMemo(() => {
        const total = questions.length;
        if (total === 0) return { total: 0, answered: 0, correct: 0, incorrect: 0, unattempted: 0, accuracy: "0", score: "0" };
        const answered = questions.filter(q => q.userAnswer !== null).length;
        const correct = questions.filter(q => q.isCorrect).length;
        const incorrect = answered - correct;
        const unattempted = total - answered;
        const accuracy = answered > 0 ? ((correct / answered) * 100).toFixed(1) : "0";
        const score = (correct * 2) - (incorrect * 0.66); // Standard UPSC marking

        return { total, answered, correct, incorrect, unattempted, accuracy, score: score.toFixed(2) };
    }, [questions]);

    // 2. Chapter Analysis
    const chapterData = useMemo(() => {
        const chapters: Record<string, { correct: number; total: number }> = {};
        questions.forEach(q => {
            if (!chapters[q.chapter]) chapters[q.chapter] = { correct: 0, total: 0 };
            chapters[q.chapter].total++;
            if (q.isCorrect) chapters[q.chapter].correct++;
        });

        return Object.entries(chapters).map(([name, data]) => ({
            name,
            accuracy: Math.round((data.correct / data.total) * 100),
            full: 100
        }));
    }, [questions]);

    // 3. Confidence Analysis
    const confidenceData = useMemo(() => {
        const levels = {
            'sure': { correct: 0, total: 0, time: 0 },
            '50-50': { correct: 0, total: 0, time: 0 },
            'one-option': { correct: 0, total: 0, time: 0 },
            'blind': { correct: 0, total: 0, time: 0 },
        };

        questions.forEach(q => {
            if (q.confidence && levels[q.confidence]) {
                levels[q.confidence].total++;
                levels[q.confidence].time += q.timeSpent;
                if (q.isCorrect) levels[q.confidence].correct++;
            }
        });

        return Object.entries(levels).map(([level, data]) => ({
            level: level.toUpperCase(),
            accuracy: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
            avgTime: data.total > 0 ? Math.round(data.time / data.total) : 0,
            count: data.total
        }));
    }, [questions]);

    // COLORS
    const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

    return (
        <div className="min-h-screen bg-[#020617] text-slate-100 p-6 font-sans pb-20">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" onClick={onBack} className="rounded-full bg-slate-900 border border-slate-800 text-muted-foreground hover:text-white">
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Performance Dashboard
                            </h1>
                            <p className="text-muted-foreground font-medium">Deep analysis for {results.testTitle}</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Button
                            variant="outline"
                            className="bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-800"
                            onClick={() => document.getElementById('question-review')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <Search className="w-4 h-4 mr-2" /> Review Questions
                        </Button>
                        {onRetake && (
                            <Button
                                onClick={onRetake}
                                className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                            >
                                Retake Test
                            </Button>
                        )}
                    </div>
                </div>

                {/* Global Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: 'UPSC Score', value: stats.score, sub: 'Out of 200', icon: Target, color: 'blue' },
                        { label: 'Accuracy', value: `${stats.accuracy}%`, sub: 'Attempted Qs', icon: Zap, color: 'emerald' },
                        { label: 'Time Taken', value: `${Math.floor(totalTimeTaken / 60)}m ${totalTimeTaken % 60}s`, sub: 'Speed vs Accuracy', icon: Clock, color: 'purple' },
                        { label: 'Correct Qs', value: stats.correct, sub: `In ${stats.answered} attempts`, icon: CheckCircle2, color: 'amber' },
                    ].map((item, i) => (
                        <Card key={i} className="p-6 bg-slate-900/40 border-slate-800/80 backdrop-blur-md relative overflow-hidden group">
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-${item.color}-500/5 blur-[40px] group-hover:bg-${item.color}-500/10 transition-all`} />
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{item.label}</span>
                                <item.icon className={`w-5 h-5 text-${item.color}-400/80`} />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">{item.value}</div>
                            <div className="text-[10px] text-muted-foreground font-mono tracking-tighter">{item.sub}</div>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Chapter Accuracy Radar */}
                    <Card className="lg:col-span-2 p-8 bg-slate-900/40 border-slate-800/80 backdrop-blur-md">
                        <div className="flex justify-between items-center mb-10">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <Brain className="w-5 h-5 text-blue-400" />
                                Chapter Analysis (Accuracy %)
                            </h3>
                            <div className="text-xs text-muted-foreground italic">Visualizing Retention Strengths</div>
                        </div>
                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    layout="vertical"
                                    data={chapterData.sort((a, b) => b.accuracy - a.accuracy)}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#334155" />
                                    <XAxis type="number" domain={[0, 100]} hide />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        width={120}
                                        tick={{ fill: '#94a3b8', fontSize: 11 }}
                                        interval={0}
                                    />
                                    <Tooltip
                                        cursor={{ fill: '#1e293b' }}
                                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', color: '#f8fafc' }}
                                    />
                                    <Bar dataKey="accuracy" barSize={12} radius={[0, 4, 4, 0]}>
                                        {chapterData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.accuracy >= 75 ? '#10b981' : entry.accuracy >= 50 ? '#f59e0b' : '#ef4444'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    {/* Quick Stats & Action Pane */}
                    <Card className="p-8 bg-slate-900/40 border-slate-800/80 backdrop-blur-md flex flex-col">
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-purple-400" />
                            Quick Summary
                        </h3>

                        <div className="space-y-6 flex-grow">
                            <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-800">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-emerald-400 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Correct</span>
                                    <span className="font-bold text-slate-200">{stats.correct}</span>
                                </div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-red-400 flex items-center gap-1.5"><XCircle className="w-4 h-4" /> Incorrect</span>
                                    <span className="font-bold text-slate-200">{stats.incorrect}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground flex items-center gap-1.5"><HelpCircle className="w-4 h-4" /> Skipper</span>
                                    <span className="font-bold text-slate-200">{stats.unattempted}</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Efficiency Feedback</h4>
                                <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-800">
                                    <p className="text-sm text-slate-300 leading-relaxed italic">
                                        {stats.score && parseFloat(stats.score) > 100
                                            ? "Excellent control! Your accuracy is strong. Focus on decreasing time in '50-50' questions."
                                            : "Good attempt. Your retention in certain chapters is drooping. Refer to the Gap Analysis below."}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 border-none">
                            Download Detailed PDF
                        </Button>
                    </Card>
                </div>

                {/* Subject-wise Breakdown Card (New Section) */}
                {results.subjectScores && results.subjectScores.length > 1 && (
                    <Card className="mb-8 p-8 bg-slate-900/40 border-slate-800/80 backdrop-blur-md">
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-indigo-400" />
                            Subject-wise Performance Breakdown
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {results.subjectScores.map((s, idx) => (
                                <div key={idx} className="p-4 rounded-xl bg-slate-800/30 border border-slate-800">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-sm font-bold text-white">{s.label}</span>
                                        <span className={`text-xs font-bold ${s.accuracy >= 70 ? 'text-emerald-400' : s.accuracy >= 40 ? 'text-amber-400' : 'text-red-400'}`}>
                                            {s.accuracy}%
                                        </span>
                                    </div>
                                    <div className="text-xs text-muted-foreground mb-3">{s.correct} / {s.total} Correct</div>
                                    <div className="w-full h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full ${s.accuracy >= 70 ? 'bg-emerald-500' : s.accuracy >= 40 ? 'bg-amber-500' : 'bg-red-500'}`} 
                                            style={{ width: `${s.accuracy}%` }} 
                                        />
                                    </div>
                                    <div className="mt-2 text-[10px] text-muted-foreground flex justify-between">
                                        <span>Score: {s.score}</span>
                                        <span>Max: {s.maxScore}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                )}

                {/* Confidence & Speed Correlation */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <Card className="p-8 bg-slate-900/40 border-slate-800/80 backdrop-blur-md">
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 line-clamp-1">
                            <History className="w-5 h-5 text-emerald-400" />
                            Accuracy by Confidence Level
                        </h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={confidenceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                    <XAxis dataKey="level" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <Tooltip
                                        cursor={{ fill: '#0f172a' }}
                                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                                    />
                                    <Bar dataKey="accuracy" radius={[6, 6, 0, 0]} barSize={40}>
                                        {confidenceData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} fillOpacity={0.8} stroke={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    <Card className="p-8 bg-slate-900/40 border-slate-800/80 backdrop-blur-md">
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-amber-400" />
                            Speed vs Accuracy (Time Analysis)
                        </h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={confidenceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                    <XAxis dataKey="level" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} unit="s" />
                                    <Tooltip
                                        cursor={{ fill: '#0f172a' }}
                                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                                    />
                                    <Bar dataKey="avgTime" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={40} fillOpacity={0.4} stroke="#3b82f6" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </div>

                {/* Reading Strategy Analysis (Rounds) */}
                <Card className="mb-8 p-8 bg-slate-900/40 border-slate-800/80 backdrop-blur-md">
                    <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                        <Target className="w-5 h-5 text-indigo-400" />
                        Reading Strategy Analysis (Rounds)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map(round => {
                            const roundQs = questions.filter(q => (q.attemptRound || 1) === round || (round === 3 && (q.attemptRound || 0) >= 3));
                            const correct = roundQs.filter(q => q.isCorrect).length;
                            const total = roundQs.length;
                            const acc = total > 0 ? Math.round((correct / total) * 100) : 0;

                            return (
                                <div key={round} className="p-4 rounded-xl bg-slate-800/30 border border-slate-800 flex flex-col items-center text-center">
                                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">
                                        {round === 3 ? '3rd+ Reading' : `${round === 1 ? '1st' : '2nd'} Reading`}
                                    </h4>
                                    <div className="text-3xl font-bold text-white mb-1">{acc}%</div>
                                    <div className="text-xs text-muted-foreground">
                                        Accuracy ({correct}/{total})
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-700/50 rounded-full mt-4 overflow-hidden">
                                        <div className={`h-full ${acc > 70 ? 'bg-emerald-500' : acc > 40 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${acc}%` }} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Card>


                {/* Gap Analysis Table */}
                <Card className="p-8 bg-slate-900/40 border-slate-800/80 backdrop-blur-md">
                    <h3 className="text-lg font-semibold mb-8 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-red-400" />
                        Gap Analysis (Weakest Subtopics)
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-800 text-xs text-muted-foreground uppercase tracking-widest">
                                    <th className="pb-4 font-semibold">Subject Area</th>
                                    <th className="pb-4 font-semibold">Subtopic</th>
                                    <th className="pb-4 font-semibold">Stability</th>
                                    <th className="pb-4 font-semibold">Recommendation</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/50">
                                {questions.filter(q => !q.isCorrect && q.userAnswer !== null).slice(0, 5).map((q, i) => (
                                    <tr key={i} className="group hover:bg-slate-800/20 transition-all">
                                        <td className="py-4 text-sm font-medium text-slate-300">{q.chapter}</td>
                                        <td className="py-4 text-sm text-muted-foreground">{q.subtopic}</td>
                                        <td className="py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                                    <div className="w-1/3 h-full bg-red-500/50" />
                                                </div>
                                                <span className="text-[10px] text-red-400 font-mono">VULNERABLE</span>
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <td className="py-4">
                                                <Button
                                                    variant="ghost"
                                                    className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 group p-0 h-auto font-normal hover:bg-transparent"
                                                    onClick={() => {
                                                        // Simple navigation to revision for now
                                                        window.location.href = `/student/revision?topic=${encodeURIComponent(q.chapter)}`;
                                                    }}
                                                >
                                                    Auto-Schedule Revision <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </td>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

                {/* Detailed Subtopic Analysis Table */}
                <Card className="p-8 bg-slate-900/40 border-slate-800/80 backdrop-blur-md mb-8">
                    <h3 className="text-lg font-semibold mb-8 flex items-center gap-2">
                        <ZoomIn className="w-5 h-5 text-teal-400" />
                        Detailed Subtopic Breakdown
                    </h3>
                    <div className="overflow-x-auto max-h-[400px]">
                        <table className="w-full text-left border-collapse">
                            <thead className="sticky top-0 bg-[#020617] z-10">
                                <tr className="border-b border-slate-800 text-xs text-muted-foreground uppercase tracking-widest">
                                    <th className="pb-4 pl-4 font-semibold">Chapter</th>
                                    <th className="pb-4 font-semibold">Subtopic</th>
                                    <th className="pb-4 text-center font-semibold">Q Count</th>
                                    <th className="pb-4 text-center font-semibold">Accuracy</th>
                                    <th className="pb-4 text-right pr-4 font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/50">
                                {Object.values(questions.reduce((acc: any, q) => {
                                    const key = `${q.chapter}-${q.subtopic}`;
                                    if (!acc[key]) acc[key] = { chapter: q.chapter, subtopic: q.subtopic, total: 0, correct: 0 };
                                    acc[key].total++;
                                    if (q.isCorrect) acc[key].correct++;
                                    return acc;
                                }, {})).sort((a: any, b: any) => a.chapter.localeCompare(b.chapter)).map((item: any, i) => {
                                    const acc = Math.round((item.correct / item.total) * 100);
                                    return (
                                        <tr key={i} className="group hover:bg-slate-800/20 transition-all">
                                            <td className="py-3 pl-4 text-sm font-medium text-slate-300">{item.chapter}</td>
                                            <td className="py-3 text-sm text-muted-foreground">{item.subtopic}</td>
                                            <td className="py-3 text-center text-sm text-muted-foreground">{item.total}</td>
                                            <td className="py-3 text-center">
                                                <span className={`font-mono font-bold ${acc >= 75 ? 'text-emerald-400' : acc >= 40 ? 'text-amber-400' : 'text-red-400'}`}>
                                                    {acc}%
                                                </span>
                                            </td>
                                            <td className="py-3 pr-4 text-right">
                                                <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase ${acc >= 80 ? 'bg-emerald-500/10 text-emerald-400' :
                                                        acc >= 50 ? 'bg-amber-500/10 text-amber-400' :
                                                            'bg-red-500/10 text-red-400'
                                                    }`}>
                                                    {acc >= 80 ? 'Strong' : acc >= 50 ? 'Average' : 'Weak'}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </Card>

                {/* Detailed Question Review Section */}
                <Card id="question-review" className="p-8 bg-slate-900/40 border-slate-800/80 backdrop-blur-md">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <Search className="w-6 h-6 text-blue-400" />
                            Detailed Question Review
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['all', 'correct', 'incorrect', 'unattempted'].map((f) => (
                                <Button
                                    key={f}
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setFilter(f as any)}
                                    className={`capitalize rounded-full px-4 ${filter === f ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'text-muted-foreground hover:text-slate-300'}`}
                                >
                                    {f}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {questions
                            .filter(q => {
                                if (filter === 'correct') return q.isCorrect;
                                if (filter === 'incorrect') return !q.isCorrect && q.userAnswer !== null;
                                if (filter === 'unattempted') return q.userAnswer === null;
                                return true;
                            })
                            .map((q) => (
                                <div key={q.id} className="p-6 rounded-2xl bg-slate-800/20 border border-slate-800/50 hover:border-slate-700/80 transition-all group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sm font-bold text-muted-foreground group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">
                                                {q.id}
                                            </span>
                                            <div>
                                                <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest leading-none mb-1">
                                                    {q.chapter} • {q.subtopic}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {q.isCorrect ? (
                                                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                                                            <CheckCircle2 className="w-3 h-3" /> CORRECT
                                                        </span>
                                                    ) : q.userAnswer === null ? (
                                                        <span className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground">
                                                            <HelpCircle className="w-3 h-3" /> SKIPPED
                                                        </span>
                                                    ) : (
                                                        <span className="flex items-center gap-1 text-[10px] font-bold text-red-400">
                                                            <XCircle className="w-3 h-3" /> INCORRECT
                                                        </span>
                                                    )}
                                                    <span className="w-1 h-1 rounded-full bg-slate-800" />
                                                    <span className="text-[10px] font-mono text-muted-foreground uppercase">{q.confidence || 'No Confidence Set'}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-muted-foreground font-mono">{q.timeSpent}s spent</div>
                                    </div>

                                    <h4 className="text-base font-medium text-slate-200 mb-6 leading-relaxed">
                                        {q.question}
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                        {q.options.map((opt, i) => {
                                            const isUserChoice = q.userAnswer === i;
                                            const isCorrectChoice = q.correctAnswer === i;

                                            let borderClass = "border-slate-800/50 bg-slate-900/20";
                                            let icon = null;
                                            let textClass = "text-muted-foreground";

                                            if (isCorrectChoice) {
                                                borderClass = "border-emerald-500/30 bg-emerald-500/5";
                                                textClass = "text-emerald-400 font-medium";
                                                icon = <CheckCircle2 className="w-4 h-4 ml-auto" />;
                                            } else if (isUserChoice && !q.isCorrect) {
                                                borderClass = "border-red-500/30 bg-red-500/5";
                                                textClass = "text-red-400 font-medium";
                                                icon = <XCircle className="w-4 h-4 ml-auto" />;
                                            }

                                            return (
                                                <div key={i} className={`flex items-center px-4 py-3 rounded-xl border text-sm ${borderClass} ${textClass}`}>
                                                    <span className="w-6 h-6 rounded-lg bg-slate-900/50 flex items-center justify-center mr-3 text-xs font-bold font-mono">
                                                        {String.fromCharCode(65 + i)}
                                                    </span>
                                                    {opt}
                                                    {icon}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/10">
                                        <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
                                            <Zap className="w-4 h-4" /> Comprehensive Explanation
                                        </div>
                                        <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
                                            {q.explanation}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default SaturdayTestReport;
