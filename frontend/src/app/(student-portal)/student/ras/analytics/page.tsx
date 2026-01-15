"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RASSessionService, RASTestResult } from "@/lib/ras-api";
import Link from "next/link";
import {
    ArrowLeft,
    TrendingUp,
    Trophy,
    Target,
    BookOpen,
    Calendar,
    BarChart3
} from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
} from "recharts";

export default function RASAnalyticsPage() {
    const [results, setResults] = useState<RASTestResult[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const data = await RASSessionService.getTestResults();
            setResults(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>;

    const latest = results[0];
    const totalTests = results.length;
    const avgScore = results.length > 0 ? (results.reduce((acc, curr) => acc + curr.score, 0) / totalTests).toFixed(2) : 0;
    const bestScore = results.length > 0 ? Math.max(...results.map(r => r.score)) : 0;

    // Trend data
    const chartData = results.slice().reverse().map((r, i) => ({
        name: `Test ${i + 1}`,
        score: r.score,
        date: new Date(r.timestamp).toLocaleDateString()
    }));

    // Subject Breakdown Aggregation
    const subjectStats: { [key: string]: { total: number, correct: number } } = {};
    results.forEach(r => {
        if (r.subjectBreakdown) {
            Object.entries(r.subjectBreakdown).forEach(([subject, stats]) => {
                if (!subjectStats[subject]) subjectStats[subject] = { total: 0, correct: 0 };
                subjectStats[subject].total += stats.total;
                subjectStats[subject].correct += stats.correct;
            });
        }
    });

    const subjectColors: { [key: string]: string } = {
        'History': '#ef4444',
        'Geography': '#22c55e',
        'Polity': '#3b82f6',
        'Science': '#a855f7',
        'General': '#64748b'
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/student/ras">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to RAS Home
                            </Button>
                        </Link>
                        <h1 className="text-3xl font-bold text-slate-900">RAS Analytics Dashboard</h1>
                    </div>
                </div>

                {results.length === 0 ? (
                    <Card className="p-12 text-center">
                        <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">No Test Data Yet</h2>
                        <p className="text-gray-500 mb-4">Take your first mock test to generate analytics!</p>
                        <Link href="/student/ras">
                            <Button>Go to RAS Platform</Button>
                        </Link>
                    </Card>
                ) : (
                    <>
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <Card className="bg-white border-blue-100">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-slate-500">Total Tests</p>
                                            <p className="text-3xl font-bold text-slate-900">{totalTests}</p>
                                        </div>
                                        <div className="p-3 bg-blue-50 rounded-lg">
                                            <Trophy className="h-6 w-6 text-blue-600" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white border-purple-100">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-slate-500">Average Score</p>
                                            <p className="text-3xl font-bold text-slate-900">{avgScore}</p>
                                        </div>
                                        <div className="p-3 bg-purple-50 rounded-lg">
                                            <TrendingUp className="h-6 w-6 text-purple-600" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white border-green-100">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-slate-500">Best Score</p>
                                            <p className="text-3xl font-bold text-slate-900">{bestScore}</p>
                                        </div>
                                        <div className="p-3 bg-green-50 rounded-lg">
                                            <Target className="h-6 w-6 text-green-600" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white border-orange-100">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-slate-500">Latest Score</p>
                                            <p className="text-3xl font-bold text-slate-900">{latest.score}</p>
                                        </div>
                                        <div className="p-3 bg-orange-50 rounded-lg">
                                            <Calendar className="h-6 w-6 text-orange-600" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Trend Chart */}
                            <Card className="lg:col-span-2">
                                <CardHeader>
                                    <CardTitle>Performance Trend</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={chartData}>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                                                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                                                <Tooltip
                                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                                />
                                                <Line type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4, fill: '#4f46e5' }} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Subject Breakdown */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Subject Strength</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {Object.entries(subjectStats).map(([subject, stats]) => {
                                        const accuracy = (stats.correct / stats.total) * 100;
                                        return (
                                            <div key={subject}>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="font-medium text-slate-700">{subject}</span>
                                                    <span className="text-slate-500">{Math.round(accuracy)}%</span>
                                                </div>
                                                <Progress value={accuracy} className="h-2" color={subjectColors[subject] || 'bg-slate-200'} />
                                            </div>
                                        );
                                    })}
                                </CardContent>
                            </Card>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
