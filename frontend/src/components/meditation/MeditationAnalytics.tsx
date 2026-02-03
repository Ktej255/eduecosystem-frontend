"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    TrendingUp, TrendingDown, Minus, Brain, Heart, Focus as FocusIcon,
    Calendar, Sun, Moon, Sparkles, BarChart3, LineChart
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { AnalyticsResponse, GraphDataResponse } from "@/services/meditationService";

export default function MeditationAnalytics() {
    const [analytics, setAnalytics] = useState<AnalyticsResponse | null>(null);
    const [graphData, setGraphData] = useState<GraphDataResponse | null>(null);
    const [timeRange, setTimeRange] = useState<number>(30);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, [timeRange]);

    const loadData = async () => {
        setIsLoading(true);
        try {
            const { meditationService } = await import("@/services/meditationService");
            const [analyticsData, graphsData] = await Promise.all([
                meditationService.getAnalytics(),
                meditationService.getGraphData(timeRange)
            ]);
            setAnalytics(analyticsData);
            setGraphData(graphsData);
        } catch (error) {
            console.error("Failed to load analytics:", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading || !analytics || !graphData) {
        return (
            <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading your progress...</p>
                </div>
            </div>
        );
    }

    const getTrendIcon = () => {
        if (analytics.trend_direction === "improving") {
            return <TrendingUp className="w-5 h-5 text-green-400" />;
        } else if (analytics.trend_direction === "declining") {
            return <TrendingDown className="w-5 h-5 text-red-400" />;
        } else {
            return <Minus className="w-5 h-5 text-gray-400" />;
        }
    };

    const getTrendColor = () => {
        if (analytics.trend_direction === "improving") return "text-green-400";
        if (analytics.trend_direction === "declining") return "text-red-400";
        return "text-gray-400";
    };

    const getWellbeingColor = (score: number) => {
        if (score >= 70) return "text-green-400";
        if (score >= 50) return "text-yellow-400";
        return "text-red-400";
    };

    // Transform graph data for recharts
    const chartData = graphData.improvement_data.map((point, index) => ({
        date: new Date(point.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        stress: graphData.pre_session_data[index]?.stress_level,
        anxiety: graphData.pre_session_data[index]?.anxiety_level,
        focus: graphData.pre_session_data[index]?.focus_level,
        postStress: graphData.post_session_data[index]?.stress_level,
        postAnxiety: graphData.post_session_data[index]?.anxiety_level,
        postFocus: graphData.post_session_data[index]?.focus_level,
        improvement: point.improvement_score
    }));

    return (
        <div className="min-h-screen bg-neutral-950 px-4 py-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Your Meditation Journey
                    </h1>
                    <p className="text-gray-400">
                        Track your mental wellbeing progress over time
                    </p>
                </motion.div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Wellbeing Score */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <Card className="bg-neutral-900/80 border-neutral-800 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-indigo-500/20">
                                    <Brain className="w-5 h-5 text-indigo-400" />
                                </div>
                                <span className="text-gray-400 text-sm font-medium">Wellbeing Score</span>
                            </div>
                            <div className={`text-4xl font-bold mb-2 ${getWellbeingColor(analytics.overall_wellbeing_score)}`}>
                                {analytics.overall_wellbeing_score.toFixed(1)}
                            </div>
                            <div className="flex items-center gap-2">
                                {getTrendIcon()}
                                <span className={`text-sm font-medium ${getTrendColor()}`}>
                                    {analytics.trend_direction}
                                </span>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Total Sessions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="bg-neutral-900/80 border-neutral-800 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-purple-500/20">
                                    <Calendar className="w-5 h-5 text-purple-400" />
                                </div>
                                <span className="text-gray-400 text-sm font-medium">Total Sessions</span>
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">
                                {analytics.total_sessions}
                            </div>
                            <span className="text-sm text-gray-500">
                                Sessions completed
                            </span>
                        </Card>
                    </motion.div>

                    {/* Best Time */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Card className="bg-neutral-900/80 border-neutral-800 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-yellow-500/20">
                                    {analytics.best_time_of_day === "morning" ? (
                                        <Sun className="w-5 h-5 text-yellow-400" />
                                    ) : (
                                        <Moon className="w-5 h-5 text-yellow-400" />
                                    )}
                                </div>
                                <span className="text-gray-400 text-sm font-medium">Best Time</span>
                            </div>
                            <div className="text-2xl font-bold text-white mb-2 capitalize">
                                {analytics.best_time_of_day || "Not enough data"}
                            </div>
                            <span className="text-sm text-gray-500">
                                Most effective for you
                            </span>
                        </Card>
                    </motion.div>

                    {/* Average Improvement */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Card className="bg-neutral-900/80 border-neutral-800 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-green-500/20">
                                    <Sparkles className="w-5 h-5 text-green-400" />
                                </div>
                                <span className="text-gray-400 text-sm font-medium">Avg Improvement</span>
                            </div>
                            <div className="text-4xl font-bold text-green-400 mb-2">
                                +{((analytics.average_stress_improvement + analytics.average_anxiety_improvement + analytics.average_focus_improvement) / 3).toFixed(1)}
                            </div>
                            <span className="text-sm text-gray-500">
                                Per session
                            </span>
                        </Card>
                    </motion.div>
                </div>

                {/* Detailed Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                >
                    <Card className="bg-neutral-900/80 border-neutral-800 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Heart className="w-5 h-5 text-red-400" />
                            <span className="text-white font-semibold">Stress Reduction</span>
                        </div>
                        <div className="text-3xl font-bold text-red-400">
                            -{analytics.average_stress_improvement.toFixed(1)}
                        </div>
                        <span className="text-sm text-gray-500">Average per session</span>
                    </Card>

                    <Card className="bg-neutral-900/80 border-neutral-800 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Sparkles className="w-5 h-5 text-yellow-400" />
                            <span className="text-white font-semibold">Anxiety Reduction</span>
                        </div>
                        <div className="text-3xl font-bold text-yellow-400">
                            -{analytics.average_anxiety_improvement.toFixed(1)}
                        </div>
                        <span className="text-sm text-gray-500">Average per session</span>
                    </Card>

                    <Card className="bg-neutral-900/80 border-neutral-800 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <FocusIcon className="w-5 h-5 text-blue-400" />
                            <span className="text-white font-semibold">Focus Improvement</span>
                        </div>
                        <div className="text-3xl font-bold text-blue-400">
                            +{analytics.average_focus_improvement.toFixed(1)}
                        </div>
                        <span className="text-sm text-gray-500">Average per session</span>
                    </Card>
                </motion.div>

                {/* Charts */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <Card className="bg-neutral-900/80 border-neutral-800 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <LineChart className="w-6 h-6 text-indigo-400" />
                                <h2 className="text-2xl font-bold text-white">Progress Over Time</h2>
                            </div>
                            <div className="flex gap-2">
                                {[7, 30, 90].map((days) => (
                                    <button
                                        key={days}
                                        onClick={() => setTimeRange(days)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${timeRange === days
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-neutral-800 text-gray-400 hover:bg-neutral-700'
                                            }`}
                                    >
                                        {days}d
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Tabs defaultValue="improvement" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-6">
                                <TabsTrigger value="improvement">Overall Improvement</TabsTrigger>
                                <TabsTrigger value="metrics">Individual Metrics</TabsTrigger>
                            </TabsList>

                            <TabsContent value="improvement" className="h-[400px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RechartsLineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                        <XAxis dataKey="date" stroke="#888" />
                                        <YAxis stroke="#888" />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#1a1a1a',
                                                border: '1px solid #333',
                                                borderRadius: '8px'
                                            }}
                                        />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="improvement"
                                            stroke="#8b5cf6"
                                            strokeWidth={3}
                                            dot={{ fill: '#8b5cf6', r: 4 }}
                                            name="Improvement Score"
                                        />
                                    </RechartsLineChart>
                                </ResponsiveContainer>
                            </TabsContent>

                            <TabsContent value="metrics" className="h-[400px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RechartsLineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                        <XAxis dataKey="date" stroke="#888" />
                                        <YAxis stroke="#888" />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#1a1a1a',
                                                border: '1px solid #333',
                                                borderRadius: '8px'
                                            }}
                                        />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="stress"
                                            stroke="#ef4444"
                                            strokeWidth={2}
                                            strokeDasharray="5 5"
                                            name="Stress (Before)"
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="postStress"
                                            stroke="#22c55e"
                                            strokeWidth={2}
                                            name="Stress (After)"
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="focus"
                                            stroke="#3b82f6"
                                            strokeWidth={2}
                                            strokeDasharray="5 5"
                                            name="Focus (Before)"
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="postFocus"
                                            stroke="#06b6d4"
                                            strokeWidth={2}
                                            name="Focus (After)"
                                        />
                                    </RechartsLineChart>
                                </ResponsiveContainer>
                            </TabsContent>
                        </Tabs>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
