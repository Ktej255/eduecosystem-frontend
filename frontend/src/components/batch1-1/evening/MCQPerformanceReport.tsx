import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    BarChart3,
    CheckCircle2,
    XCircle,
    AlertTriangle,
    Clock,
    ArrowRight,
    TrendingUp,
    ShieldAlert
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { ConfidenceLevel } from '../pomodoro/CycleMCQs';
import { CHAPTER_SUBTOPICS } from '@/components/batch1/polity/data/polity-subtopics';

interface MCQResult {
    questionId: string;
    subtopicId?: string;
    selectedAnswer: number | null;
    correctAnswer: number;
    isCorrect: boolean;
    confidence: ConfidenceLevel | null;
    timeSpent: number;
}

interface MCQPerformanceReportProps {
    results: MCQResult[];
    onClose: () => void;
}

const CONFIDENCE_COLORS = {
    'sure': 'text-green-600 bg-green-50 dark:bg-green-900/20',
    '50-50': 'text-amber-600 bg-amber-50 dark:bg-amber-900/20',
    'blind': 'text-slate-600 bg-slate-100 dark:bg-slate-800'
};

export default function MCQPerformanceReport({ results, onClose }: MCQPerformanceReportProps) {
    const stats = useMemo(() => {
        const total = results.length;
        const correct = results.filter(r => r.isCorrect).length;
        const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

        // Group by subtopic
        const subtopicStats: Record<string, { total: number; correct: number; avgTime: number }> = {};
        results.forEach(r => {
            const sid = r.subtopicId || 'Unknown';
            if (!subtopicStats[sid]) subtopicStats[sid] = { total: 0, correct: 0, avgTime: 0 };
            subtopicStats[sid].total++;
            if (r.isCorrect) subtopicStats[sid].correct++;
            subtopicStats[sid].avgTime += r.timeSpent;
        });

        // Group by confidence
        const confidenceStats = {
            sure: { total: 0, correct: 0 },
            '50-50': { total: 0, correct: 0 },
            blind: { total: 0, correct: 0 }
        };

        results.forEach(r => {
            if (r.confidence) {
                confidenceStats[r.confidence].total++;
                if (r.isCorrect) confidenceStats[r.confidence].correct++;
            }
        });

        // Identify critical weaknesses (Sure but Wrong)
        const criticalWeaknesses = results.filter(r => r.confidence === 'sure' && !r.isCorrect);

        return { total, correct, accuracy, subtopicStats, confidenceStats, criticalWeaknesses };
    }, [results]);

    return (
        <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-500">
            {/* Header / Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="bg-indigo-600 text-white col-span-1 md:col-span-2 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <BarChart3 className="w-32 h-32" />
                    </div>
                    <CardContent className="p-8">
                        <h2 className="text-4xl font-bold mb-2">{stats.accuracy}%</h2>
                        <p className="text-indigo-100 font-medium">Global Session Accuracy</p>
                        <div className="mt-6 flex items-center gap-4">
                            <div className="bg-white/20 px-3 py-1 rounded-full text-xs">
                                {stats.correct} / {stats.total} Correct
                            </div>
                            <div className="bg-white/20 px-3 py-1 rounded-full text-xs">
                                {Math.floor(results.reduce((s, r) => s + r.timeSpent, 0) / 60)}m Total Time
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50 shadow-sm">
                    <CardContent className="p-6 flex flex-col justify-center items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                            <CheckCircle2 className="text-green-700" />
                        </div>
                        <h4 className="text-2xl font-bold text-green-800">{stats.confidenceStats.sure.total}</h4>
                        <p className="text-xs text-green-700 font-bold uppercase tracking-wider">High Confidence</p>
                        <p className="text-[10px] text-green-600 mt-1 italic font-medium">
                            Accuracy: {stats.confidenceStats.sure.total > 0 ? Math.round((stats.confidenceStats.sure.correct / stats.confidenceStats.sure.total) * 100) : 0}%
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50 shadow-sm">
                    <CardContent className="p-6 flex flex-col justify-center items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                            <ShieldAlert className="text-red-700" />
                        </div>
                        <h4 className="text-2xl font-bold text-red-800">{stats.criticalWeaknesses.length}</h4>
                        <p className="text-xs text-red-700 font-bold uppercase tracking-wider">Sure but Wrong</p>
                        <p className="text-[10px] text-red-600 mt-1 italic font-medium">Dunning-Kruger Alerts</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Subtopic Breakdown */}
                <div className="lg:col-span-8 space-y-6">
                    <Card className="shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Sub-topic Performance Breakdown</CardTitle>
                            <CardDescription>How you performed across different areas</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6 px-2">
                                {Object.entries(stats.subtopicStats).map(([sid, data]) => {
                                    const acc = Math.round((data.correct / data.total) * 100);
                                    let colorCls = 'bg-green-500';
                                    if (acc < 70) colorCls = 'bg-amber-500';
                                    if (acc < 50) colorCls = 'bg-rose-500';

                                    return (
                                        <div key={sid} className="group">
                                            <div className="flex justify-between items-end mb-2">
                                                <div>
                                                    <span className="text-xs font-bold text-slate-400 uppercase">Subtopic {sid}</span>
                                                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                        Chapter {sid.split('.')[0]} Mastery
                                                    </h5>
                                                </div>
                                                <span className="text-sm font-mono font-bold">{acc}%</span>
                                            </div>
                                            <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${colorCls} transition-all duration-1000`}
                                                    style={{ width: `${acc}%` }}
                                                />
                                            </div>
                                            <div className="flex justify-between mt-2 text-[10px] text-slate-400">
                                                <span>{data.correct}/{data.total} Correct</span>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={10} /> Avg {Math.round(data.avgTime / data.total)}s / question
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Critical Weaknesses Detail */}
                    {stats.criticalWeaknesses.length > 0 && (
                        <Card className="border-red-200 dark:border-red-900/50 bg-red-50/10">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg text-red-700 flex items-center gap-2">
                                    <ShieldAlert /> Misconception Analysis
                                </CardTitle>
                                <CardDescription>Topics where you were "Sure" but incorrect. These need immediate focus.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {stats.criticalWeaknesses.map(w => {
                                        const subtopic = CHAPTER_SUBTOPICS[Number(w.subtopicId?.split('.')[0])]?.find(s => s.id === w.subtopicId);
                                        return (
                                            <div key={w.questionId} className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-red-100 dark:border-red-900/30 flex items-center justify-between">
                                                <div className="text-xs">
                                                    <span className="font-bold text-red-600 mr-2">
                                                        {subtopic ? subtopic.label : `Subtopic ${w.subtopicId}`}:
                                                    </span>
                                                    <span className="text-slate-600 dark:text-slate-400 italic">Conceptual Gap identified.</span>
                                                </div>
                                                <Button variant="ghost" size="sm" className="h-8 text-[10px] text-indigo-600 hover:text-indigo-700">
                                                    Revise Now <ArrowRight size={10} className="ml-1" />
                                                </Button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Integration & Next Steps */}
                <div className="lg:col-span-4 space-y-6">
                    <Card className="bg-slate-900 text-white border-slate-800">
                        <CardHeader>
                            <CardTitle className="text-sm uppercase tracking-widest text-indigo-400">Retention Observer</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                                    Based on this session, the **Antigravity Observer** has updated your knowledge tree.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-[10px] font-bold">
                                        <span>RETENTION TREND</span>
                                        <span className={stats.accuracy >= 70 ? "text-green-400" : "text-amber-400"}>
                                            {stats.accuracy >= 70 ? `+${Math.floor(stats.accuracy / 6)}%` : `+${Math.floor(stats.accuracy / 10)}%`}
                                        </span>
                                    </div>
                                    <div className="h-1 bg-slate-800 rounded-full">
                                        <div
                                            className={`h-full transition-all duration-1000 ${stats.accuracy >= 70 ? "bg-green-400" : "bg-amber-400"}`}
                                            style={{ width: `${Math.max(30, stats.accuracy)}%` }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-xs font-bold flex items-center gap-2">
                                    <TrendingUp size={14} className="text-indigo-400" />
                                    Revision Strategy
                                </h5>
                                <div className="space-y-2">
                                    {Object.entries(stats.subtopicStats)
                                        .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))
                                        .slice(0, 3)
                                        .map(([sid, data]) => {
                                            const acc = (data.correct / data.total) * 100;
                                            let action = "Maintenance";
                                            let color = "text-green-400";

                                            if (acc < 50) {
                                                action = "Urgent Focus";
                                                color = "text-rose-400";
                                            } else if (acc < 75) {
                                                action = "Deep Review";
                                                color = "text-amber-400";
                                            }

                                            return (
                                                <StrategyItem
                                                    key={sid}
                                                    label={`Subtopic ${sid}`}
                                                    action={action}
                                                    color={color}
                                                />
                                            );
                                        })}
                                </div>
                            </div>

                            <Button onClick={onClose} className="w-full bg-indigo-600 hover:bg-indigo-700 py-6 font-bold">
                                Update Knowledge Tree & Exit
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="border-amber-100 bg-amber-50/20">
                        <CardContent className="p-4 flex items-start gap-3">
                            <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                            <div>
                                <h6 className="text-[11px] font-bold text-amber-800">RE-TAKE SUGGESTION</h6>
                                <p className="text-[10px] text-amber-700 leading-relaxed mt-1">
                                    {stats.accuracy < 60
                                        ? "Your overall accuracy is below the target. We recommend reviewing the core material before another attempt."
                                        : "You have a solid foundation. Focus on the 'Deep Review' topics to reach mastery."}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function StrategyItem({ label, action, color }: { label: string, action: string, color: string }) {
    return (
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
            <span className="text-[10px] font-medium">{label}</span>
            <span className={`text-[9px] font-bold px-2 py-0.5 rounded bg-slate-900 ${color}`}>{action}</span>
        </div>
    );
}
