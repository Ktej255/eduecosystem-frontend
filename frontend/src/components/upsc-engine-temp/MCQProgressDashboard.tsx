"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, TrendingUp, Calendar, Clock } from 'lucide-react';

interface HistoryItem {
    score: number;
    totalQuestions: number;
    date: string;
    chapterTitle: string;
    bookId?: string;
    chapterId?: string | number;
}

export default function MCQProgressDashboard() {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('upsc_mcq_history');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    // Sort by date ascending
                    setHistory(parsed.sort((a: HistoryItem, b: HistoryItem) => new Date(a.date).getTime() - new Date(b.date).getTime()));
                } else {
                    setHistory([]);
                }
            } catch (e) {
                console.error("Failed to parse history", e);
                setHistory([]);
            }
        }
    }, []);

    return (
        <div className="text-center py-12 bg-card rounded-xl border border-border transition-colors">
            <Target className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
            <h3 className="text-lg font-medium text-foreground">No Test History Yet</h3>
            <p className="text-muted-foreground">Take your first test to track your progress!</p>
        </div>
    );

    // Prepare data for chart
    const chartData = history.map((item, index) => ({
        name: `Test ${index + 1}`,
        score: Math.round((item.score / item.totalQuestions) * 100),
        date: new Date(item.date).toLocaleDateString(),
        title: item.chapterTitle
    }));

    const averageScore = Math.round(history.reduce((acc, curr) => acc + (curr.score / curr.totalQuestions) * 100, 0) / history.length);
    const totalTests = history.length;

    return (
        <div className="max-w-6xl mx-auto space-y-6 transition-colors">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
                <TrendingUp className="w-6 h-6 text-primary" />
                Your Progress Dashboard
            </h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Tests Taken</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">{totalTests}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Average Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={`text-3xl font-bold ${averageScore >= 70 ? 'text-green-600' : 'text-orange-600'}`}>
                            {averageScore}%
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Last Test</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-lg font-medium truncate">{history[history.length - 1].chapterTitle}</div>
                        <p className="text-xs text-muted-foreground">{new Date(history[history.length - 1].date).toLocaleDateString()}</p>
                    </CardContent>
                </Card>
            </div>

            {/* Chart */}
            <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg mb-4">Performance Trend</CardTitle>
                </CardHeader>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                            <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} axisLine={false} tickLine={false} />
                            <YAxis domain={[0, 100]} stroke="var(--muted-foreground)" fontSize={12} axisLine={false} tickLine={false} />
                            <Tooltip
                                contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--foreground)' }}
                                formatter={(value: any) => [`${value}%`, 'Score']}
                                labelFormatter={(label: any) => chartData.find(d => d.name === label)?.title || label}
                            />
                            <Line
                                type="monotone"
                                dataKey="score"
                                stroke="var(--primary)"
                                strokeWidth={3}
                                dot={{ fill: 'var(--primary)', r: 4, strokeWidth: 2, stroke: 'var(--card)' }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Card>

            {/* Recent History List */}
            <h3 className="text-xl font-bold mt-8 text-foreground">Recent Activity</h3>
            <div className="space-y-3">
                {[...history].reverse().slice(0, 5).map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:shadow-sm transition-all">
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                                ${(item.score / item.totalQuestions) >= 0.7 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                {Math.round((item.score / item.totalQuestions) * 100)}%
                            </div>
                            <div>
                                <h4 className="font-medium text-foreground">{item.chapterTitle}</h4>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(item.date).toLocaleDateString()}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-medium text-muted-foreground dark:text-muted-foreground">
                                {item.score}/{item.totalQuestions} Questions
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
