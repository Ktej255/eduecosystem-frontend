"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/auth-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import {
    ArrowLeft,
    TrendingUp,
    TrendingDown,
    Target,
    BookOpen,
    Trophy,
    AlertTriangle,
    BarChart3,
    PieChart as PieChartIcon,
    Calendar,
    Clock,
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
    BarChart,
    Bar,
    Legend,
} from "recharts";

interface TestResult {
    id: number;
    cycle_id: number;
    day_number: number;
    score: number;
    total_questions: number;
    correct_count: number;
    incorrect_count: number;
    unanswered_count: number;
    timestamp: string;
}

interface AnalyticsData {
    totalTests: number;
    avgScorePercent: number;
    bestScore: number;
    worstScore: number;
    totalQuestions: number;
    correctAnswers: number;
    incorrectAnswers: number;
    trends: { date: string; score: number; scorePercent: number }[];
    subjectBreakdown: { name: string; tests: number; avgScore: number; color: string }[];
}

const COLORS = ['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

const SUBJECTS = [
    { id: 'polity', name: 'Indian Polity', icon: BookOpen, color: 'from-purple-500 to-indigo-600', bgColor: 'bg-purple-100', textColor: 'text-purple-700' },
    { id: 'history', name: 'History', icon: Clock, color: 'from-blue-500 to-cyan-600', bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
    { id: 'geography', name: 'Geography', icon: Target, color: 'from-green-500 to-emerald-600', bgColor: 'bg-green-100', textColor: 'text-green-700' },
    { id: 'current-affairs', name: 'Current Affairs', icon: Calendar, color: 'from-orange-500 to-amber-600', bgColor: 'bg-orange-100', textColor: 'text-orange-700' },
];

export default function AnalyticsPage() {
    const { user } = useAuth();
    const [testResults, setTestResults] = useState<TestResult[]>([]);
    const [loading, setLoading] = useState(true);
    const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);

    // FORCE AWS URL
    const API_BASE = "https://a7z4kjysmp.us-east-1.awsapprunner.com/api/v1";

    useEffect(() => {
        fetchTestResults();
    }, []);

    const fetchTestResults = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/batch1/test-results`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data: TestResult[] = await res.json();
                setTestResults(data);
                calculateAnalytics(data);
            }
        } catch (error) {
            console.error("Error fetching test results:", error);
        } finally {
            setLoading(false);
        }
    };

    const calculateAnalytics = (results: TestResult[]) => {
        if (results.length === 0) {
            setAnalytics(null);
            return;
        }

        const totalTests = results.length;
        const totalQuestions = results.reduce((sum, r) => sum + r.total_questions, 0);
        const correctAnswers = results.reduce((sum, r) => sum + r.correct_count, 0);
        const incorrectAnswers = results.reduce((sum, r) => sum + r.incorrect_count, 0);

        // Calculate standardized scores (percentage)
        const scorePercents = results.map(r => (r.correct_count / r.total_questions) * 100);
        const avgScorePercent = scorePercents.reduce((a, b) => a + b, 0) / scorePercents.length;
        const bestScore = Math.max(...scorePercents);
        const worstScore = Math.min(...scorePercents);

        // Trends data (sorted by date)
        const sortedResults = [...results].sort((a, b) =>
            new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        );
        const trends = sortedResults.map(r => ({
            date: new Date(r.timestamp).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }),
            score: r.score,
            scorePercent: Math.round((r.correct_count / r.total_questions) * 100)
        }));

        // Subject breakdown (placeholder - will be enhanced with actual subject data)
        const subjectBreakdown = [
            { name: 'Polity', tests: Math.ceil(totalTests * 0.4), avgScore: Math.round(avgScorePercent + (Math.random() * 10 - 5)), color: COLORS[0] },
            { name: 'History', tests: Math.ceil(totalTests * 0.3), avgScore: Math.round(avgScorePercent + (Math.random() * 10 - 5)), color: COLORS[1] },
            { name: 'CSAT', tests: Math.ceil(totalTests * 0.3), avgScore: Math.round(avgScorePercent + (Math.random() * 10 - 5)), color: COLORS[2] },
        ];

        setAnalytics({
            totalTests,
            avgScorePercent: Math.round(avgScorePercent),
            bestScore: Math.round(bestScore),
            worstScore: Math.round(worstScore),
            totalQuestions,
            correctAnswers,
            incorrectAnswers,
            trends,
            subjectBreakdown,
        });
    };

    const getPerformancePieData = () => {
        if (!analytics) return [];
        return [
            { name: 'Correct', value: analytics.correctAnswers, color: '#10B981' },
            { name: 'Incorrect', value: analytics.incorrectAnswers, color: '#EF4444' },
            { name: 'Unanswered', value: analytics.totalQuestions - analytics.correctAnswers - analytics.incorrectAnswers, color: '#9CA3AF' },
        ];
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/student/batch1">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Batch 1
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                📊 Test Analytics Dashboard
                            </h1>
                            <p className="text-gray-500 text-sm">Track your progress and identify areas for improvement</p>
                        </div>
                    </div>
                </div>

                {!analytics || testResults.length === 0 ? (
                    <Card className="p-12 text-center">
                        <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">No Test Data Yet</h2>
                        <p className="text-gray-500 mb-4">Complete your first test to see analytics here!</p>
                        <Link href="/student/batch1">
                            <Button>Go to Batch 1 Tests</Button>
                        </Link>
                    </Card>
                ) : (
                    <>
                        {/* Overview Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-purple-100 text-sm">Total Tests</p>
                                            <p className="text-4xl font-bold">{analytics.totalTests}</p>
                                        </div>
                                        <Trophy className="h-12 w-12 text-purple-200" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-blue-100 text-sm">Average Score</p>
                                            <p className="text-4xl font-bold">{analytics.avgScorePercent}%</p>
                                        </div>
                                        <BarChart3 className="h-12 w-12 text-blue-200" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-green-100 text-sm">Best Score</p>
                                            <p className="text-4xl font-bold">{analytics.bestScore}%</p>
                                        </div>
                                        <TrendingUp className="h-12 w-12 text-green-200" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-orange-500 to-amber-600 text-white">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-orange-100 text-sm">Questions Attempted</p>
                                            <p className="text-4xl font-bold">{analytics.totalQuestions}</p>
                                        </div>
                                        <Target className="h-12 w-12 text-orange-200" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Charts Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Performance Trend Line Chart */}
                            <Card className="lg:col-span-2">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <TrendingUp className="h-5 w-5 text-blue-600" />
                                        Performance Trend (Standardized %)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={analytics.trends}>
                                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                                <XAxis dataKey="date" stroke="#6B7280" fontSize={12} />
                                                <YAxis domain={[0, 100]} stroke="#6B7280" fontSize={12} />
                                                <Tooltip
                                                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                                                    formatter={(value: number | undefined) => [`${value}%`, 'Score']}
                                                />
                                                <Line
                                                    type="monotone"
                                                    dataKey="scorePercent"
                                                    stroke="#8B5CF6"
                                                    strokeWidth={3}
                                                    dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                                                    activeDot={{ r: 6 }}
                                                />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Accuracy Pie Chart */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <PieChartIcon className="h-5 w-5 text-green-600" />
                                        Overall Accuracy
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[250px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={getPerformancePieData()}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={60}
                                                    outerRadius={80}
                                                    paddingAngle={5}
                                                    dataKey="value"
                                                >
                                                    {getPerformancePieData().map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                                    ))}
                                                </Pie>
                                                <Tooltip formatter={(value: number | undefined) => [value, 'Questions']} />
                                                <Legend />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Subject Cards */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                                <BookOpen className="h-5 w-5" /> Subject-wise Analysis
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {SUBJECTS.map((subject) => {
                                    const subjectData = analytics.subjectBreakdown.find(s =>
                                        s.name.toLowerCase().includes(subject.id.split('-')[0])
                                    );
                                    return (
                                        <Link key={subject.id} href={`/student/batch1/analytics/${subject.id}`}>
                                            <Card className={`hover:shadow-lg transition-all cursor-pointer border-l-4 border-${subject.id === 'polity' ? 'purple' : subject.id === 'history' ? 'blue' : subject.id === 'geography' ? 'green' : 'orange'}-500`}>
                                                <CardContent className="p-4">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <div className={`p-2 rounded-lg ${subject.bgColor}`}>
                                                            <subject.icon className={`h-5 w-5 ${subject.textColor}`} />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-semibold">{subject.name}</h3>
                                                            <p className="text-xs text-gray-500">{subjectData?.tests || 0} tests</p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between text-sm">
                                                            <span className="text-gray-500">Avg Score</span>
                                                            <span className="font-bold">{subjectData?.avgScore || 0}%</span>
                                                        </div>
                                                        <Progress value={subjectData?.avgScore || 0} className="h-2" />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Recent Tests */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-blue-600" />
                                    Recent Test History
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {testResults.slice(0, 5).map((result, idx) => {
                                        const scorePercent = Math.round((result.correct_count / result.total_questions) * 100);
                                        return (
                                            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${scorePercent >= 60 ? 'bg-green-500' : scorePercent >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}>
                                                        {scorePercent}%
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">Cycle {result.cycle_id}, Day {result.day_number}</p>
                                                        <p className="text-xs text-gray-500">
                                                            {new Date(result.timestamp).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold">{result.correct_count}/{result.total_questions}</p>
                                                    <p className="text-xs text-gray-500">Score: {result.score}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    </>
                )}
            </div>
        </div>
    );
}
