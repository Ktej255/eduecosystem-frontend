"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BarChart3,
    Calendar,
    TrendingUp,
    Zap,
    Brain,
    Clock,
    Target,
    ChevronRight,
    Sparkles,
    FileText,
    History
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
    getDailyAnalytics,
    getWeeklyAnalytics,
    get15DayAnalytics,
    getMonthlyAnalytics,
    RevisionAnalytics,
    TopicPerformance
} from '@/lib/revision/revision-analytics-service';

type ReportType = 'daily' | 'weekly' | '15day' | 'monthly';

export default function RevisionDeepReports() {
    const [activeReport, setActiveReport] = useState<ReportType>('daily');
    const [analytics, setAnalytics] = useState<RevisionAnalytics | null>(null);

    useEffect(() => {
        const fetchAnalytics = () => {
            switch (activeReport) {
                case 'daily': setAnalytics(getDailyAnalytics()); break;
                case 'weekly': setAnalytics(getWeeklyAnalytics()); break;
                case '15day': setAnalytics(get15DayAnalytics()); break;
                case 'monthly': setAnalytics(getMonthlyAnalytics()); break;
            }
        };
        fetchAnalytics();
    }, [activeReport]);

    const reports = [
        { id: 'daily', label: 'Today', icon: Zap },
        { id: 'weekly', label: 'Weekly', icon: Calendar },
        { id: '15day', label: '15-Day', icon: TrendingUp },
        { id: 'monthly', label: 'Monthly', icon: FileText }
    ];

    // Derive display values
    const recallValue = analytics ? `${analytics.avgRecallRetention}%` : '—';
    const focusValue = analytics ? `${analytics.totalFocusHours}h` : '—';
    const cyclesValue = analytics ? analytics.totalCycles : 0;
    const strongTopics = analytics?.strongTopics || [];
    const weakTopics = analytics?.weakTopics || [];

    return (
        <div className="space-y-8">
            {/* Report Selector Header */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-card/40 p-3 rounded-[2rem] border border-slate-100 shadow-sm backdrop-blur-xl">
                <div className="flex gap-2 p-1">
                    {reports.map((rep) => (
                        <button
                            key={rep.id}
                            onClick={() => setActiveReport(rep.id as ReportType)}
                            className={`px-8 py-3 rounded-2xl text-sm font-black transition-all flex items-center gap-2 ${activeReport === rep.id
                                ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/20'
                                : 'text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-white hover:bg-muted dark:hover:bg-slate-800'
                                }`}
                        >
                            <rep.icon className="w-4 h-4" />
                            {rep.label}
                        </button>
                    ))}
                </div>
                <div className="px-6 py-2 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> {cyclesValue} Cycles Tracked
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeReport}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                    {/* Main Stats Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Big Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <StatCard
                                icon={Brain}
                                label="Recall Retention"
                                value={recallValue}
                                sub={analytics && analytics.avgRecallRetention > 70 ? "Strong retention" : "Needs improvement"}
                                color="indigo"
                            />
                            <StatCard
                                icon={Clock}
                                label="Focus Intensity"
                                value={focusValue}
                                sub={`${cyclesValue} total cycles`}
                                color="orange"
                            />
                        </div>

                        {/* Visual Insight Section */}
                        <Card className="border-none bg-card rounded-[2.5rem] shadow-xl overflow-hidden">
                            <CardContent className="p-10">
                                <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                                    <Target className="text-indigo-600" /> Topic Performance Index
                                </h3>
                                <div className="space-y-6">
                                    {strongTopics.length > 0 ? (
                                        strongTopics.map((t, i) => (
                                            <TopicProgressItem key={i} topic={t.topicName} score={Math.round(t.avgRecallScore)} trend={t.trend} />
                                        ))
                                    ) : (
                                        <p className="text-muted-foreground italic text-sm">No topic data available yet. Complete some cycles to see your performance.</p>
                                    )}
                                    {weakTopics.length > 0 && weakTopics.map((t, i) => (
                                        <TopicProgressItem key={`weak-${i}`} topic={t.topicName} score={Math.round(t.avgRecallScore)} trend={t.trend} status="low" />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* AI Feedback / Automation Column */}
                    <div className="space-y-8">
                        {/* Automated Summary Box */}
                        <Card className="border-none bg-slate-900 text-white rounded-[2.5rem] shadow-2xl p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Sparkles className="w-32 h-32" />
                            </div>
                            <div className="relative z-10">
                                <header className="mb-8">
                                    <Badge className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 mb-4 px-3 py-1 font-black uppercase tracking-widest text-[10px]">
                                        AI Executive Summary
                                    </Badge>
                                    <h4 className="text-2xl font-black mb-2">Automated {activeReport} Focus</h4>
                                </header>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-medium italic">
                                    {analytics && analytics.totalCycles > 0
                                        ? `You've completed ${analytics.totalCycles} cycles with an average recall of ${analytics.avgRecallRetention}%. ${weakTopics.length > 0 ? `Focus on "${weakTopics[0]?.topicName}" for improvement.` : 'Great progress!'}`
                                        : "Start your first study cycle to receive personalized AI insights and recommendations."
                                    }
                                </p>
                                <div className="space-y-4">
                                    {strongTopics.length > 0 && (
                                        <div className="flex items-center gap-3 text-xs font-bold text-emerald-400">
                                            <div className="p-1.5 bg-emerald-500/10 rounded-lg">
                                                <TrendingUp className="w-4 h-4" />
                                            </div>
                                            Strength: {strongTopics[0]?.topicName || 'N/A'}
                                        </div>
                                    )}
                                    {weakTopics.length > 0 && (
                                        <div className="flex items-center gap-3 text-xs font-bold text-rose-400">
                                            <div className="p-1.5 bg-rose-500/10 rounded-lg">
                                                <Target className="w-4 h-4" />
                                            </div>
                                            Weakness: {weakTopics[0]?.topicName || 'N/A'}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Card>

                        {/* Task Transition */}
                        <Card className="border-none bg-indigo-50 dark:bg-indigo-900/10 rounded-[2.5rem] p-10 border border-indigo-100 dark:border-indigo-800">
                            <h4 className="text-lg font-black mb-4 text-indigo-900 dark:text-indigo-100">Ready for next session?</h4>
                            <p className="text-indigo-700/60 dark:text-indigo-400/60 text-xs mb-8 font-medium">
                                {weakTopics.length > 0
                                    ? `We recommend focusing on "${weakTopics[0]?.topicName}" based on your performance.`
                                    : "Start a new cycle to build your knowledge base."
                                }
                            </p>
                            <Button className="w-full rounded-2xl h-14 bg-indigo-600 text-white font-black shadow-lg shadow-indigo-500/30">
                                Start Study Session <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Card>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function StatCard({ icon: Icon, label, value, sub, color }: any) {
    return (
        <Card className="border-none bg-card rounded-[2.5rem] shadow-lg border border-slate-50">
            <CardContent className="p-10">
                <div className={`w-14 h-14 rounded-2xl bg-${color}-100 dark:bg-${color}-900/20 flex items-center justify-center text-${color}-600 dark:text-${color}-400 mb-6`}>
                    <Icon className="w-7 h-7" />
                </div>
                <div className="text-4xl font-black mb-2 text-foreground tabular-nums tracking-tighter">{value}</div>
                <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">{label}</h4>
                <p className={`text-[10px] font-bold ${sub.includes('Up') ? 'text-emerald-500' : 'text-muted-foreground'}`}>{sub}</p>
            </CardContent>
        </Card>
    );
}

function TopicProgress({ topic, score, speed, status = 'good' }: any) {
    const color = status === 'good' ? 'indigo' : status === 'low' ? 'orange' : 'rose';

    return (
        <div className="space-y-3 p-4 rounded-2xl hover:bg-muted dark:hover:bg-slate-800/40 transition-colors">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-${color}-500 shadow-[0_0_10px_rgba(var(--${color}),0.5)]`} />
                    <span className="font-bold text-muted-foreground">{topic}</span>
                </div>
                <div className="flex items-center gap-4">
                    <Badge variant="outline" className="font-black text-[10px] tracking-widest border-border">{speed} SPEED</Badge>
                    <span className={`font-black text-lg text-${color}-600`}>{score}%</span>
                </div>
            </div>
            <Progress value={score} className="h-1.5 bg-muted" />
        </div>
    );
}

function TopicProgressItem({ topic, score, trend, status = 'good' }: { topic: string; score: number; trend: 'improving' | 'stable' | 'declining'; status?: string }) {
    const color = status === 'good' ? 'indigo' : status === 'low' ? 'orange' : 'rose';
    const trendIcon = trend === 'improving' ? '↑' : trend === 'declining' ? '↓' : '→';
    const trendColor = trend === 'improving' ? 'text-emerald-500' : trend === 'declining' ? 'text-rose-500' : 'text-muted-foreground';

    return (
        <div className="space-y-3 p-4 rounded-2xl hover:bg-muted dark:hover:bg-slate-800/40 transition-colors">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-${color}-500`} />
                    <span className="font-bold text-muted-foreground">{topic}</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className={`font-black text-sm ${trendColor}`}>{trendIcon}</span>
                    <span className={`font-black text-lg text-${color}-600`}>{score}%</span>
                </div>
            </div>
            <Progress value={score} className="h-1.5 bg-muted" />
        </div>
    );
}
