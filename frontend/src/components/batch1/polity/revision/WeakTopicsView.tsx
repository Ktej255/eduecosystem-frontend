"use client";

import React, { useState, useEffect } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    AlertTriangle,
    Target,
    Brain,
    BookOpen,
    TrendingDown,
    Clock,
    Zap,
    RefreshCcw,
    AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import {
    analyzeWeakTopics,
    getPerformanceMetrics,
    WeakTopic,
    PerformanceMetrics,
    ACTION_LABELS
} from './weak-topics-analyzer';

export default function WeakTopicsView() {
    const [weakTopics, setWeakTopics] = useState<WeakTopic[]>([]);
    const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
    const [filter, setFilter] = useState<'all' | 'urgent' | 'review' | 'practice'>('all');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            setIsLoading(true);
            const topics = await analyzeWeakTopics();
            setWeakTopics(topics);
            setMetrics(await getPerformanceMetrics());
            setIsLoading(false);
        };
        load();
    }, []);

    const filteredTopics = weakTopics.filter(t => {
        if (filter === 'all') return t.weaknessScore >= 25;
        return t.recommendedAction === filter;
    });

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-[#030303] dark:via-[#050505] dark:to-[#030303] flex items-center justify-center">
                <div className="text-center">
                    <Brain className="w-12 h-12 text-red-600 mx-auto mb-4 animate-pulse" />
                    <p className="text-muted-foreground">Analyzing your performance...</p>
                </div>
            </div>
        );
    }

    // No data yet
    if (weakTopics.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-[#030303] dark:via-[#050505] dark:to-[#030303] flex items-center justify-center p-6">
                <div className="bg-card dark:bg-[#111] rounded-3xl border border-border p-8 max-w-md w-full text-center shadow-xl">
                    <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                        <AlertCircle className="w-8 h-8 text-amber-600" />
                    </div>
                    <h1 className="text-xl font-black text-foreground mb-2">No Data Yet</h1>
                    <p className="text-muted-foreground mb-6">Start revising chapters to see weak topic analysis. Complete some flashcards or MCQs first!</p>
                    <Link
                        href="/student/batch1/polity/revision"
                        className="inline-block bg-amber-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-amber-700 transition-colors"
                    >
                        Start Revising
                    </Link>
                </div>
            </div>
        );
    }

    const urgentCount = weakTopics.filter(t => t.recommendedAction === 'urgent').length;
    const reviewCount = weakTopics.filter(t => t.recommendedAction === 'review').length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-[#030303] dark:via-[#050505] dark:to-[#030303] pb-20">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white pt-12 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/student/batch1/polity/revision" className="inline-flex items-center gap-2 text-red-200 hover:text-white transition-colors mb-6 text-sm font-medium">
                        <ChevronLeft className="w-4 h-4" />
                        Back to Revision Hub
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-card/20 flex items-center justify-center">
                            <TrendingDown className="w-7 h-7" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-black">Weak Topics Analysis</h1>
                            <p className="text-red-200">Focus on areas that need improvement</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Metrics Cards */}
            {metrics && (
                <div className="max-w-4xl mx-auto px-6 -mt-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-card dark:bg-[#111] rounded-2xl p-4 shadow-lg border border-border">
                            <div className="text-3xl font-black text-foreground">{metrics.overallScore}%</div>
                            <div className="text-xs text-muted-foreground">Overall Score</div>
                        </div>
                        <div className="bg-card dark:bg-[#111] rounded-2xl p-4 shadow-lg border border-border">
                            <div className="text-3xl font-black text-emerald-600">{metrics.strongTopicsCount}</div>
                            <div className="text-xs text-muted-foreground">Strong Topics</div>
                        </div>
                        <div className="bg-card dark:bg-[#111] rounded-2xl p-4 shadow-lg border border-border">
                            <div className="text-3xl font-black text-orange-600">{metrics.needsAttentionCount}</div>
                            <div className="text-xs text-muted-foreground">Needs Attention</div>
                        </div>
                        <div className="bg-card dark:bg-[#111] rounded-2xl p-4 shadow-lg border border-border">
                            <div className="text-3xl font-black text-red-600">{metrics.weakTopicsCount}</div>
                            <div className="text-xs text-muted-foreground">Weak Topics</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Filter Tabs */}
            <div className="max-w-4xl mx-auto px-6 mt-8">
                <div className="flex gap-2 p-1 bg-muted dark:bg-[#0a0a0a] rounded-xl overflow-x-auto">
                    {[
                        { id: 'all', label: 'All Weak', count: weakTopics.filter(t => t.weaknessScore >= 25).length },
                        { id: 'urgent', label: '🚨 Urgent', count: urgentCount },
                        { id: 'review', label: '⚠️ Review', count: reviewCount },
                        { id: 'practice', label: '📝 Practice', count: weakTopics.filter(t => t.recommendedAction === 'practice').length }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setFilter(tab.id as any)}
                            className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${filter === tab.id
                                    ? 'bg-card dark:bg-[#111] shadow text-red-600'
                                    : 'text-muted-foreground'
                                }`}
                        >
                            {tab.label} ({tab.count})
                        </button>
                    ))}
                </div>
            </div>

            {/* Topics List */}
            <div className="max-w-4xl mx-auto px-6 mt-6">
                {filteredTopics.length === 0 ? (
                    <div className="bg-card dark:bg-[#111] rounded-2xl border border-border p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                            <Target className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">No Topics in This Category</h3>
                        <p className="text-muted-foreground">Great job! You don't have any topics matching this filter.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredTopics.map(topic => {
                            const actionLabel = ACTION_LABELS[topic.recommendedAction];
                            return (
                                <div
                                    key={topic.chapterId}
                                    className="bg-card dark:bg-[#111] rounded-2xl border border-border p-5 shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-bold text-muted-foreground">Chapter {topic.chapterId}</span>
                                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${topic.recommendedAction === 'urgent' ? 'bg-red-100 text-red-700' :
                                                        topic.recommendedAction === 'review' ? 'bg-orange-100 text-orange-700' :
                                                            'bg-yellow-100 text-yellow-700'
                                                    }`}>
                                                    {actionLabel.icon} {actionLabel.text}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-foreground">{topic.chapterTitle}</h3>
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-2xl font-black ${topic.weaknessScore >= 70 ? 'text-red-600' :
                                                    topic.weaknessScore >= 50 ? 'text-orange-600' :
                                                        'text-yellow-600'
                                                }`}>
                                                {topic.weaknessScore}
                                            </div>
                                            <div className="text-xs text-muted-foreground">Weakness Score</div>
                                        </div>
                                    </div>

                                    {/* Reasons */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {topic.reasons.map((reason, idx) => (
                                            <span key={idx} className="text-xs px-2 py-1 rounded-lg bg-muted dark:bg-[#0a0a0a] text-muted-foreground dark:text-muted-foreground">
                                                {reason}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                                        <div className="bg-muted dark:bg-[#0a0a0a] rounded-xl p-3">
                                            <div className="text-lg font-bold text-foreground">{Math.round(topic.mcqAccuracy)}%</div>
                                            <div className="text-xs text-muted-foreground">MCQ Score</div>
                                        </div>
                                        <div className="bg-muted dark:bg-[#0a0a0a] rounded-xl p-3">
                                            <div className="text-lg font-bold text-foreground">{Math.round(topic.flashcardAccuracy)}%</div>
                                            <div className="text-xs text-muted-foreground">Flashcards</div>
                                        </div>
                                        <div className="bg-muted dark:bg-[#0a0a0a] rounded-xl p-3">
                                            <div className="text-lg font-bold text-foreground">{topic.srsEaseFactor.toFixed(1)}</div>
                                            <div className="text-xs text-muted-foreground">Ease Factor</div>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <Link
                                        href={`/student/batch1/polity/revision/${topic.chapterId}`}
                                        className="block w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-xl font-bold text-center hover:shadow-lg transition-all"
                                    >
                                        Review This Chapter
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
