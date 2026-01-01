"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2, Brain, AlertTriangle, CheckCircle2, Clock, Sparkles } from "lucide-react";
import api from "@/lib/api";

interface TopicStatus {
    topic_id: number;
    topic_name: string;
    stability: number;
    retrievability: number;
    status: string;
    color: string;
    days_until_review: number;
    next_review_date: string | null;
    last_reviewed: string | null;
}

interface DashboardData {
    topics: TopicStatus[];
    due_today: number;
    critical_count: number;
    average_retention: number;
}

export default function KnowledgeMemoryPage() {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await api.get("/retention/dashboard");
            setData(res.data);
        } catch (error) {
            console.error("Failed to fetch retention data:", error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "mastered": return "bg-emerald-500";
            case "stable": return "bg-green-500";
            case "review_soon": return "bg-amber-500";
            case "critical": return "bg-orange-500";
            case "forgotten": return "bg-red-500";
            default: return "bg-gray-500";
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "mastered": return <Sparkles className="h-4 w-4 text-emerald-400" />;
            case "stable": return <CheckCircle2 className="h-4 w-4 text-green-400" />;
            case "review_soon": return <Clock className="h-4 w-4 text-amber-400" />;
            case "critical": return <AlertTriangle className="h-4 w-4 text-orange-400" />;
            case "forgotten": return <AlertTriangle className="h-4 w-4 text-red-400" />;
            default: return null;
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-purple-500">
                <Loader2 className="h-12 w-12 animate-spin mb-4" />
                <p className="text-gray-400 font-medium">Scanning your memory...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10 space-y-8">
            <div className="flex items-center gap-3 mb-2">
                <Brain className="h-8 w-8 text-purple-500" />
                <h1 className="text-4xl font-black text-white">Knowledge Memory</h1>
            </div>
            <p className="text-gray-400 text-lg">
                Track what you remember using science-backed spaced repetition (FSRS).
            </p>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-br from-purple-900/40 to-black border-purple-500/20">
                    <CardContent className="p-6 text-center">
                        <div className="text-4xl font-black text-white mb-1">
                            {data ? Math.round(data.average_retention * 100) : 0}%
                        </div>
                        <p className="text-sm text-gray-400">Average Retention</p>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6 text-center">
                        <div className="text-4xl font-black text-white mb-1">{data?.topics.length || 0}</div>
                        <p className="text-sm text-gray-400">Topics Tracked</p>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6 text-center">
                        <div className="text-4xl font-black text-amber-400 mb-1">{data?.due_today || 0}</div>
                        <p className="text-sm text-gray-400">Due Today</p>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6 text-center">
                        <div className="text-4xl font-black text-red-400 mb-1">{data?.critical_count || 0}</div>
                        <p className="text-sm text-gray-400">Critical</p>
                    </CardContent>
                </Card>
            </div>

            {/* Topic List */}
            <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                    <CardTitle className="text-white">Your Knowledge Map</CardTitle>
                </CardHeader>
                <CardContent>
                    {!data || data.topics.length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                            <Brain className="h-16 w-16 mx-auto mb-4 opacity-30" />
                            <p>No topics tracked yet. Complete lessons with the Feynman Summary feature to start tracking!</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {data.topics.map((topic) => (
                                <div
                                    key={topic.topic_id}
                                    className="flex items-center gap-4 p-4 bg-black/30 rounded-xl border border-gray-800"
                                >
                                    <div className={`w-3 h-3 rounded-full ${getStatusColor(topic.status)}`} />

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            {getStatusIcon(topic.status)}
                                            <span className="font-bold text-white">{topic.topic_name}</span>
                                        </div>
                                        <Progress value={topic.retrievability * 100} className="h-2 bg-gray-800" />
                                    </div>

                                    <div className="text-right">
                                        <div className="text-lg font-bold text-white">{Math.round(topic.retrievability * 100)}%</div>
                                        <div className="text-xs text-gray-500">
                                            {topic.days_until_review === 0
                                                ? "Due today!"
                                                : topic.days_until_review > 0
                                                    ? `Review in ${topic.days_until_review}d`
                                                    : "Overdue!"}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
