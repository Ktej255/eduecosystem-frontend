"use client";

import React, { useState, useMemo } from 'react';
import {
    BarChart3, Timer, Trophy, Brain, Target, Zap, TrendingUp,
    CheckCircle2, Clock, Flame
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ActivityLogger, ActivityLog } from '@/lib/analytics/ActivityLogger';

// ========== COMPONENT ==========
export default function PomodoroReport() {
    const data = useMemo(() => {
        if (typeof window === 'undefined') return null;
        const logs = ActivityLogger.getLogs().filter(l => l.type === 'MCQ_POMODORO');
        const stats = ActivityLogger.getStats();

        // Group by topic
        const byTopic: Record<string, { correct: number; total: number; avgTime: number }> = {};
        logs.forEach(log => {
            const topic = log.details.topic || 'Uncategorized';
            if (!byTopic[topic]) byTopic[topic] = { correct: 0, total: 0, avgTime: 0 };
            byTopic[topic].total++;
            if (log.details.isCorrect) byTopic[topic].correct++;
            byTopic[topic].avgTime += (log.details.timeSpent || 0);
        });

        // Calculate averages
        Object.values(byTopic).forEach(t => {
            t.avgTime = t.total > 0 ? Math.round(t.avgTime / t.total) : 0;
        });

        // Group by confidence
        const byConfidence: Record<string, { correct: number; total: number }> = {};
        logs.forEach(log => {
            const conf = log.details.confidence || 'unknown';
            if (!byConfidence[conf]) byConfidence[conf] = { correct: 0, total: 0 };
            byConfidence[conf].total++;
            if (log.details.isCorrect) byConfidence[conf].correct++;
        });

        // Group by day (last 7 days)
        const byDay: Record<string, number> = {};
        const now = Date.now();
        logs.forEach(log => {
            const dayLabel = new Date(log.timestamp).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric' });
            const daysAgo = Math.floor((now - log.timestamp) / (1000 * 60 * 60 * 24));
            if (daysAgo < 7) {
                byDay[dayLabel] = (byDay[dayLabel] || 0) + 1;
            }
        });

        return {
            total: stats.pomodoroMCQs,
            correct: stats.pomodoroCorrect,
            accuracy: stats.pomodoroMCQs > 0 ? Math.round((stats.pomodoroCorrect / stats.pomodoroMCQs) * 100) : 0,
            byTopic,
            byConfidence,
            byDay,
            recentLogs: logs.slice(-20).reverse(),
        };
    }, []);

    if (!data || data.total === 0) {
        return (
            <Card className="p-12 text-center bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 border-orange-200">
                <Timer className="w-12 h-12 text-orange-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">No Pomodoro Data Yet</h3>
                <p className="text-sm text-gray-500 mt-2">Complete MCQs in Pomodoro sessions to see your report here.</p>
            </Card>
        );
    }

    const confidenceLabels: Record<string, { label: string; emoji: string; color: string }> = {
        'sure': { label: 'Sure', emoji: '💪', color: 'bg-green-500' },
        '50-50': { label: '50-50', emoji: '🤔', color: 'bg-yellow-500' },
        'one-option': { label: 'One Known', emoji: '🎯', color: 'bg-blue-500' },
        'blind': { label: 'Blind', emoji: '🎲', color: 'bg-red-500' },
        'unknown': { label: 'Unset', emoji: '❓', color: 'bg-gray-500' },
    };

    return (
        <div className="space-y-6">
            {/* Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
                    <CardContent className="p-4 text-center">
                        <Zap className="w-5 h-5 text-orange-500 mx-auto mb-2" />
                        <div className="text-3xl font-black text-orange-600">{data.total}</div>
                        <div className="text-[10px] font-bold text-orange-500 uppercase mt-1">Total MCQs</div>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                    <CardContent className="p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto mb-2" />
                        <div className="text-3xl font-black text-green-600">{data.correct}</div>
                        <div className="text-[10px] font-bold text-green-500 uppercase mt-1">Correct</div>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
                    <CardContent className="p-4 text-center">
                        <Target className="w-5 h-5 text-indigo-500 mx-auto mb-2" />
                        <div className="text-3xl font-black text-indigo-600">{data.accuracy}%</div>
                        <div className="text-[10px] font-bold text-indigo-500 uppercase mt-1">Accuracy</div>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                    <CardContent className="p-4 text-center">
                        <Brain className="w-5 h-5 text-purple-500 mx-auto mb-2" />
                        <div className="text-3xl font-black text-purple-600">{Object.keys(data.byTopic).length}</div>
                        <div className="text-[10px] font-bold text-purple-500 uppercase mt-1">Topics</div>
                    </CardContent>
                </Card>
            </div>

            {/* Topic-wise Performance */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-indigo-500" />
                        Topic-wise Performance
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {Object.entries(data.byTopic).map(([topic, stats]) => {
                            const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                            return (
                                <div key={topic} className="flex items-center gap-4">
                                    <div className="w-24 text-sm font-semibold text-gray-700 dark:text-gray-300 truncate">{topic}</div>
                                    <div className="flex-1">
                                        <div className="h-6 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden relative">
                                            <div
                                                className={`h-full rounded-full transition-all duration-500 ${accuracy >= 70 ? 'bg-green-500' : accuracy >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                                style={{ width: `${accuracy}%` }}
                                            />
                                            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                                                {stats.correct}/{stats.total} ({accuracy}%)
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-400 w-16 text-right">{stats.avgTime}s avg</div>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Confidence Analysis */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-amber-500" />
                        Confidence vs. Accuracy
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {Object.entries(data.byConfidence).map(([conf, stats]) => {
                            const info = confidenceLabels[conf] || confidenceLabels['unknown'];
                            const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                            return (
                                <div key={conf} className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-lg">{info.emoji}</span>
                                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{info.label}</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className={`text-2xl font-black ${accuracy >= 70 ? 'text-green-600' : accuracy >= 40 ? 'text-yellow-600' : 'text-red-600'}`}>
                                            {accuracy}%
                                        </span>
                                        <span className="text-xs text-gray-400">{stats.correct}/{stats.total}</span>
                                    </div>
                                    <div className="h-1.5 bg-gray-200 rounded-full mt-2">
                                        <div className={`h-full rounded-full ${info.color}`} style={{ width: `${accuracy}%` }} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* 7-Day Activity */}
            {Object.keys(data.byDay).length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-green-500" />
                            Last 7 Days Activity
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-end gap-2 h-32">
                            {Object.entries(data.byDay).map(([day, count]) => {
                                const maxCount = Math.max(...Object.values(data.byDay));
                                const height = maxCount > 0 ? (count / maxCount) * 100 : 0;
                                return (
                                    <div key={day} className="flex-1 flex flex-col items-center gap-1">
                                        <span className="text-xs font-bold text-gray-600">{count}</span>
                                        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-t-lg overflow-hidden relative" style={{ height: '100px' }}>
                                            <div
                                                className="absolute bottom-0 w-full bg-gradient-to-t from-orange-500 to-amber-400 rounded-t-lg transition-all duration-500"
                                                style={{ height: `${height}%` }}
                                            />
                                        </div>
                                        <span className="text-[10px] text-gray-500 font-medium">{day}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
