"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
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
    AlertTriangle,
    CheckCircle2,
    XCircle,
    Lightbulb,
} from "lucide-react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

// Topic data for different subjects
const SUBJECT_TOPICS: Record<string, { name: string; chapters: string[] }> = {
    polity: {
        name: "Indian Polity",
        chapters: [
            "Constitutional Framework",
            "Fundamental Rights",
            "Directive Principles",
            "Union Executive",
            "Parliament",
            "State Government",
            "Judiciary",
            "Constitutional Bodies",
            "Local Government",
            "Emergency Provisions"
        ]
    },
    history: {
        name: "History",
        chapters: [
            "Ancient India",
            "Medieval India",
            "Mughal Empire",
            "Rise of British",
            "1857 Revolt",
            "Freedom Movement",
            "Gandhi Era",
            "Independence",
            "Post-Independence",
            "Modern India"
        ]
    },
    geography: {
        name: "Geography",
        chapters: [
            "Physical Geography",
            "Indian Geography",
            "Climate",
            "Rivers",
            "Agriculture",
            "Industries",
            "Natural Resources"
        ]
    },
    "current-affairs": {
        name: "Current Affairs",
        chapters: [
            "National Affairs",
            "International Affairs",
            "Economy",
            "Science & Tech",
            "Environment",
            "Sports",
            "Awards"
        ]
    }
};

// Sample PYQ data (will be replaced with actual data)
const SAMPLE_PYQS: Record<string, { year: string; question: string }[]> = {
    "Constitutional Framework": [
        { year: "2022", question: "Which article of the Constitution provides for equality before law?" },
        { year: "2021", question: "The Preamble to the Constitution was amended by which amendment?" }
    ],
    "Fundamental Rights": [
        { year: "2023", question: "Right to Privacy is derived from which Article?" },
        { year: "2022", question: "Which writ is known as 'postmortem' writ?" }
    ]
};

const COLORS = ['#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#3B82F6', '#EC4899', '#14B8A6', '#F97316'];

export default function SubjectAnalyticsPage() {
    const params = useParams();
    const subject = params.subject as string;
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [topicPerformance, setTopicPerformance] = useState<{ name: string; score: number; questions: number; weakArea: boolean }[]>([]);
    const [overallStats, setOverallStats] = useState({ avgScore: 0, totalQuestions: 0, testsCount: 0 });

    const subjectData = SUBJECT_TOPICS[subject];

    useEffect(() => {
        // Simulate loading topic performance data
        setTimeout(() => {
            if (subjectData) {
                const performance = subjectData.chapters.map(chapter => ({
                    name: chapter,
                    score: Math.floor(Math.random() * 40) + 40, // 40-80%
                    questions: Math.floor(Math.random() * 20) + 5,
                    weakArea: Math.random() > 0.7
                }));
                setTopicPerformance(performance);

                const avgScore = Math.round(performance.reduce((sum, p) => sum + p.score, 0) / performance.length);
                const totalQuestions = performance.reduce((sum, p) => sum + p.questions, 0);
                setOverallStats({ avgScore, totalQuestions, testsCount: Math.ceil(totalQuestions / 50) });
            }
            setLoading(false);
        }, 500);
    }, [subject, subjectData]);

    const getPieData = () => {
        const strong = topicPerformance.filter(t => t.score >= 70).length;
        const moderate = topicPerformance.filter(t => t.score >= 50 && t.score < 70).length;
        const weak = topicPerformance.filter(t => t.score < 50).length;
        return [
            { name: 'Strong (≥70%)', value: strong, color: '#10B981' },
            { name: 'Moderate (50-70%)', value: moderate, color: '#F59E0B' },
            { name: 'Weak (<50%)', value: weak, color: '#EF4444' },
        ];
    };

    const weakTopics = topicPerformance.filter(t => t.score < 60).sort((a, b) => a.score - b.score);
    const strongTopics = topicPerformance.filter(t => t.score >= 70).sort((a, b) => b.score - a.score);

    if (!subjectData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Card className="p-8 text-center">
                    <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2">Subject Not Found</h2>
                    <p className="text-gray-500 mb-4">Analytics for this subject are coming soon!</p>
                    <Link href="/student/upsc/analytics">
                        <Button>Back to Analytics</Button>
                    </Link>
                </Card>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/student/upsc/analytics">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Analytics
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            📚 {subjectData.name} Analysis
                        </h1>
                        <p className="text-gray-500 text-sm">Topic-wise breakdown and weak area identification</p>
                    </div>
                </div>

                {/* Overview Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                        <CardContent className="p-6">
                            <p className="text-purple-100 text-sm">Average Score</p>
                            <p className="text-4xl font-bold">{overallStats.avgScore}%</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
                        <CardContent className="p-6">
                            <p className="text-blue-100 text-sm">Questions Attempted</p>
                            <p className="text-4xl font-bold">{overallStats.totalQuestions}</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                        <CardContent className="p-6">
                            <p className="text-green-100 text-sm">Topics Covered</p>
                            <p className="text-4xl font-bold">{subjectData.chapters.length}</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Topic Performance Pie */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Target className="h-5 w-5 text-purple-600" />
                                Topic Distribution
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={getPieData()}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={100}
                                            paddingAngle={5}
                                            dataKey="value"
                                            label={({ name, value }) => `${name}: ${value}`}
                                        >
                                            {getPieData().map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Topic Bar Chart */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-blue-600" />
                                Chapter-wise Performance
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={topicPerformance.slice(0, 8)} layout="vertical">
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis type="number" domain={[0, 100]} />
                                        <YAxis dataKey="name" type="category" width={120} fontSize={11} />
                                        <Tooltip formatter={(value) => [`${value}%`, 'Score']} />
                                        <Bar
                                            dataKey="score"
                                            fill="#8B5CF6"
                                            radius={[0, 4, 4, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Weak Areas - Priority Revision */}
                {weakTopics.length > 0 && (
                    <Card className="border-l-4 border-red-500">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-red-600">
                                <AlertTriangle className="h-5 w-5" />
                                🎯 Priority Revision Areas
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 mb-4">Focus on these topics first - consistent mistakes detected</p>
                            <div className="space-y-3">
                                {weakTopics.slice(0, 5).map((topic, idx) => (
                                    <div key={idx} className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <XCircle className="h-4 w-4 text-red-500" />
                                                <span className="font-semibold">{topic.name}</span>
                                            </div>
                                            <span className="text-red-600 font-bold">{topic.score}%</span>
                                        </div>
                                        <Progress value={topic.score} className="h-2 mb-2" />

                                        {/* PYQ References */}
                                        {SAMPLE_PYQS[topic.name] && (
                                            <div className="mt-3 p-2 bg-white dark:bg-gray-800 rounded border">
                                                <p className="text-xs font-semibold text-purple-600 mb-1 flex items-center gap-1">
                                                    <Lightbulb className="h-3 w-3" /> Related PYQ:
                                                </p>
                                                <p className="text-xs text-gray-600">
                                                    ({SAMPLE_PYQS[topic.name][0].year}) {SAMPLE_PYQS[topic.name][0].question}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Strong Areas */}
                {strongTopics.length > 0 && (
                    <Card className="border-l-4 border-green-500">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-green-600">
                                <CheckCircle2 className="h-5 w-5" />
                                ✨ Your Strong Areas
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {strongTopics.slice(0, 6).map((topic, idx) => (
                                    <div key={idx} className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200">
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-sm">{topic.name}</span>
                                            <span className="text-green-600 font-bold">{topic.score}%</span>
                                        </div>
                                        <Progress value={topic.score} className="h-1.5 mt-2" />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* All Topics Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>All Topics Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-2 px-3">Topic</th>
                                        <th className="text-center py-2 px-3">Score</th>
                                        <th className="text-center py-2 px-3">Questions</th>
                                        <th className="text-center py-2 px-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topicPerformance.map((topic, idx) => (
                                        <tr key={idx} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                                            <td className="py-3 px-3 font-medium">{topic.name}</td>
                                            <td className="py-3 px-3 text-center">
                                                <span className={`font-bold ${topic.score >= 70 ? 'text-green-600' : topic.score >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                                                    {topic.score}%
                                                </span>
                                            </td>
                                            <td className="py-3 px-3 text-center text-gray-500">{topic.questions}</td>
                                            <td className="py-3 px-3 text-center">
                                                {topic.score >= 70 ? (
                                                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Strong</span>
                                                ) : topic.score >= 50 ? (
                                                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Moderate</span>
                                                ) : (
                                                    <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Needs Work</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
