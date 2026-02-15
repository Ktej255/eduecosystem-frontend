"use client";

import { useState, useEffect } from "react";
import {
    BarChart3,
    Users,
    TrendingUp,
    Eye,
    Clock,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    Play,
    CheckCircle2,
    BookOpen,
    Video,
    Download,
    AlertTriangle,
} from "lucide-react";
import FeedbackAggregator from "@/components/teacher-portal/analytics/FeedbackAggregator";
import EngagementHeatmap from "@/components/teacher-portal/analytics/EngagementHeatmap";
import BehavioralHeatmap from "@/components/teacher-portal/analytics/BehavioralHeatmap";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

// Chart data
const engagementData = [
    { date: "Mon", views: 245, completions: 180 },
    { date: "Tue", views: 312, completions: 220 },
    { date: "Wed", views: 287, completions: 195 },
    { date: "Thu", views: 356, completions: 268 },
    { date: "Fri", views: 423, completions: 310 },
    { date: "Sat", views: 189, completions: 145 },
    { date: "Sun", views: 167, completions: 120 },
];

const subjectPerformance = [
    { subject: "Polity", students: 156, completion: 78 },
    { subject: "History", students: 148, completion: 65 },
    { subject: "Geography", students: 142, completion: 72 },
    { subject: "Economy", students: 138, completion: 58 },
    { subject: "Environment", students: 134, completion: 45 },
    { subject: "Science", students: 128, completion: 52 },
];

const completionDistribution = [
    { name: "0-25%", value: 120, color: "#f87171" },
    { name: "26-50%", value: 245, color: "#facc15" },
    { name: "51-75%", value: 389, color: "#60a5fa" },
    { name: "76-100%", value: 292, color: "#34d399" },
];

// Top performing content
const topContent = [
    { id: 1, title: "Indian Polity - Constitutional Framework", views: 1234, completions: 890, rating: 4.8 },
    { id: 2, title: "Modern History - Freedom Movement", views: 1156, completions: 823, rating: 4.7 },
    { id: 3, title: "Geography - Physical Geography", views: 1089, completions: 756, rating: 4.6 },
    { id: 4, title: "Economy - Basic Concepts", views: 978, completions: 698, rating: 4.5 },
    { id: 5, title: "Environment - Biodiversity", views: 876, completions: 612, rating: 4.4 },
];

export default function AnalyticsPage() {
    const [dateRange, setDateRange] = useState("7days");

    // Live stats from admin-overview endpoint
    const [liveStats, setLiveStats] = useState<{
        total_users: number;
        active_students_24h: number;
        struggle_signals_24h: number;
        total_completions: number;
        est_watch_hours: number;
    } | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';
                const token = localStorage.getItem('edueco_auth_token');
                if (!token) return;

                const res = await fetch(`${baseUrl}/analytics/admin-overview`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) {
                    setLiveStats(await res.json());
                }
            } catch (e) {
                console.warn("Failed to fetch admin overview:", e);
            }
        };
        fetchStats();
    }, []);

    const analyticsStats = [
        {
            label: "Total Users",
            value: liveStats ? liveStats.total_users.toLocaleString() : "—",
            change: "Live",
            trend: "up" as const,
            icon: Users,
            color: "text-blue-600",
            bgColor: "bg-blue-100"
        },
        {
            label: "Active (24h)",
            value: liveStats ? liveStats.active_students_24h.toLocaleString() : "—",
            change: "Live",
            trend: "up" as const,
            icon: Eye,
            color: "text-green-600",
            bgColor: "bg-green-100"
        },
        {
            label: "Completions",
            value: liveStats ? liveStats.total_completions.toLocaleString() : "—",
            change: "Live",
            trend: "up" as const,
            icon: CheckCircle2,
            color: "text-purple-600",
            bgColor: "bg-purple-100"
        },
        {
            label: "Struggle Signals",
            value: liveStats ? liveStats.struggle_signals_24h.toLocaleString() : "—",
            change: "24h",
            trend: liveStats && liveStats.struggle_signals_24h > 5 ? "down" as const : "up" as const,
            icon: AlertTriangle,
            color: "text-amber-600",
            bgColor: "bg-amber-100"
        },
    ];

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                        <BarChart3 className="h-8 w-8 text-emerald-600" />
                        Analytics
                    </h1>
                    <p className="text-gray-600 mt-1">Track student engagement and content performance</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex bg-gray-100 rounded-lg p-1">
                        <Button
                            variant={dateRange === "7days" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setDateRange("7days")}
                        >
                            7 Days
                        </Button>
                        <Button
                            variant={dateRange === "30days" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setDateRange("30days")}
                        >
                            30 Days
                        </Button>
                        <Button
                            variant={dateRange === "all" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setDateRange("all")}
                        >
                            All Time
                        </Button>
                    </div>
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {analyticsStats.map((stat) => (
                    <Card key={stat.label}>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                                        <p className="text-sm text-gray-500">{stat.label}</p>
                                    </div>
                                </div>
                                <div className={`flex items-center text-sm ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                                    {stat.trend === "up" ? (
                                        <ArrowUpRight className="h-4 w-4" />
                                    ) : (
                                        <ArrowDownRight className="h-4 w-4" />
                                    )}
                                    {stat.change}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Engagement Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-emerald-600" />
                            Weekly Engagement
                        </CardTitle>
                        <CardDescription>Views vs Completions over the past week</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={engagementData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="date" stroke="#888" fontSize={12} />
                                <YAxis stroke="#888" fontSize={12} />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="views"
                                    stroke="#60a5fa"
                                    strokeWidth={2}
                                    dot={{ r: 4 }}
                                    name="Views"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="completions"
                                    stroke="#34d399"
                                    strokeWidth={2}
                                    dot={{ r: 4 }}
                                    name="Completions"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Completion Distribution */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                            Completion Distribution
                        </CardTitle>
                        <CardDescription>Student progress breakdown</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-center">
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={completionDistribution}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {completionDistribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex justify-center gap-4 mt-4">
                            {completionDistribution.map((item) => (
                                <div key={item.name} className="flex items-center gap-2">
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <span className="text-sm text-gray-600">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Subject Performance */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-emerald-600" />
                        Subject Performance
                    </CardTitle>
                    <CardDescription>Student enrollment and completion by subject</CardDescription>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={subjectPerformance}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="subject" stroke="#888" fontSize={12} />
                            <YAxis stroke="#888" fontSize={12} />
                            <Tooltip />
                            <Bar dataKey="students" fill="#60a5fa" name="Students" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="completion" fill="#34d399" name="Completion %" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Top Performing Content */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Video className="h-5 w-5 text-emerald-600" />
                        Top Performing Content
                    </CardTitle>
                    <CardDescription>Most viewed and completed segments</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {topContent.map((content, index) => (
                            <div
                                key={content.id}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                                        #{index + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800">{content.title}</h4>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                                            <span className="flex items-center gap-1">
                                                <Eye className="h-3 w-3" />
                                                {content.views.toLocaleString()} views
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <CheckCircle2 className="h-3 w-3" />
                                                {content.completions.toLocaleString()} completions
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                                        ⭐ {content.rating}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            {/* Engagement Heatmap */}
            <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-indigo-600" />
                        Engagement Heatmap
                    </h2>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">Phase 33</span>
                </div>
                <EngagementHeatmap />
            </div>

            {/* Student Behavioral Pulse Monitor */}
            <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <Eye className="h-5 w-5 text-purple-600" />
                        Student Pulse Monitor
                    </h2>
                    <span className="text-xs text-purple-500 bg-purple-100 px-2 py-1 rounded-full">Phase 12 — Live</span>
                </div>
                <BehavioralHeatmap />
            </div>

            {/* Feedback Aggregator */}
            <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <Users className="h-5 w-5 text-indigo-600" />
                        Student Feedback
                    </h2>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">Phase 32</span>
                </div>
                <FeedbackAggregator />
            </div>
        </div>
    );
}
