"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Brain,
    TrendingUp,
    BarChart3,
    Flame,
    Target,
    RefreshCw,
    BookOpen,
    Sparkles,
} from "lucide-react";
import KnowledgeDecayCurve from "./KnowledgeDecayCurve";
import RetentionHeatmap from "./RetentionHeatmap";
import SmartAlerts from "./SmartAlerts";
import RealityCheck from "./RealityCheck";
import {
    getRetentionSummary,
    getDecayCurvePoints,
    RetentionSummary,
    RetentionTopicInfo,
} from "@/services/progressStorage";

export default function RetentionDashboard() {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [summary, setSummary] = useState<RetentionSummary | null>(null);
    const [curveData, setCurveData] = useState<any>(null);
    const [alerts, setAlerts] = useState<any[]>([]);

    useEffect(() => {
        try {
            const retentionData = getRetentionSummary();
            setSummary(retentionData);

            // Generate alerts from real critical/due topics
            const realAlerts: any[] = [];
            let alertId = 1;

            // Critical topics (R < 0.6)
            retentionData.criticalTopics.slice(0, 3).forEach((topic) => {
                realAlerts.push({
                    id: alertId++,
                    topicId: topic.chapterId,
                    topicName: topic.topicName,
                    type: topic.retrievability < 0.3 ? "critical" : "warning",
                    message: topic.retrievability < 0.3
                        ? `Knowledge fading rapidly! Studied ${Math.round(topic.daysSince)} days ago. Only ${(topic.retrievability * 100).toFixed(0)}% retained.`
                        : `Review recommended soon. ${(topic.retrievability * 100).toFixed(0)}% retention remaining.`,
                    daysOverdue: Math.round(topic.daysSince),
                    retention: topic.retrievability,
                });
            });

            // Due today topics (as reminders)
            retentionData.todaysDueTopics.slice(0, 2).forEach((topic) => {
                if (!realAlerts.find((a) => a.topicId === topic.chapterId)) {
                    realAlerts.push({
                        id: alertId++,
                        topicId: topic.chapterId,
                        topicName: topic.topicName,
                        type: "reminder",
                        message: `Scheduled review for today. Keep your streak going!`,
                        retention: topic.retrievability,
                    });
                }
            });

            setAlerts(realAlerts);

            // Decay curve: show the most critical topic (or first available)
            const curveTopic = retentionData.mostCriticalTopic;
            if (curveTopic) {
                const curve = getDecayCurvePoints(curveTopic.chapterId);
                setCurveData({
                    topicName: curveTopic.topicName,
                    ...curve,
                });
            }
        } catch (err) {
            console.error("RetentionDashboard: Error loading stats", err);
        }
        setIsLoading(false);
    }, []);

    const handleTopicClick = (topicId: string) => {
        setSelectedTopic(topicId);
        // Update decay curve to show clicked topic
        const curve = getDecayCurvePoints(topicId);
        const topicName = topicId
            .split("-")
            .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");
        setCurveData({ topicName, ...curve });
    };

    const handleQuickReview = (topicId: string) => {
        // Navigate to the appropriate revision page based on subject prefix
        const subject = topicId.split("-")[0];
        const routes: Record<string, string> = {
            history: "/student/batch1/history/mcq",
            polity: "/student/batch1",
            economy: "/student/batch1",
            geography: "/student/batch1",
            science: "/student/batch1",
            ethics: "/student/batch1",
            security: "/student/batch1",
            art: "/student/batch1",
            ir: "/student/batch1",
            society: "/student/batch1",
        };
        const route = routes[subject] || "/student/batch1";
        window.location.href = route;
    };

    // Derive stats from live summary
    const stats = summary
        ? {
            avgRetention: summary.avgRetention,
            topicsLearned: summary.topicsLearned,
            criticalCount: summary.criticalCount,
            streak: summary.streak,
        }
        : { avgRetention: 0, topicsLearned: 0, criticalCount: 0, streak: 0 };

    // Get the most critical topic for RealityCheck
    const criticalTopic = summary?.mostCriticalTopic;

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                    <Brain className="w-8 h-8 text-indigo-400" />
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <motion.div
                            animate={{
                                rotateY: [0, 360],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30"
                        >
                            <Brain className="w-7 h-7 text-white" />
                        </motion.div>
                        <div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Retention Dashboard
                            </h1>
                            <p className="text-gray-400 mt-1">
                                {stats.topicsLearned > 0
                                    ? `Tracking ${stats.topicsLearned} topics • ${stats.criticalCount} need attention`
                                    : "Start learning topics to see your retention data"}
                            </p>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.location.reload()}
                        className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center gap-2 transition-colors"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Refresh
                    </motion.button>
                </div>
            </motion.div>

            {/* Empty State */}
            {stats.topicsLearned === 0 ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-20"
                >
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-6 border border-indigo-500/30">
                        <BookOpen className="w-12 h-12 text-indigo-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">
                        No Topics Tracked Yet
                    </h2>
                    <p className="text-gray-400 text-center max-w-md mb-6">
                        Start learning any subject — when you rate your confidence
                        after reading a topic, it will automatically appear here
                        with live retention tracking.
                    </p>
                    <div className="flex gap-3">
                        <motion.a
                            href="/student/batch1"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center gap-2"
                        >
                            <Sparkles className="w-4 h-4" />
                            Start Learning
                        </motion.a>
                    </div>
                </motion.div>
            ) : (
                <>
                    {/* Stats Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
                    >
                        {[
                            {
                                label: "Avg Retention",
                                value: `${(stats.avgRetention * 100).toFixed(0)}%`,
                                icon: TrendingUp,
                                color: "from-green-500 to-emerald-500",
                            },
                            {
                                label: "Topics Tracked",
                                value: stats.topicsLearned,
                                icon: BarChart3,
                                color: "from-blue-500 to-indigo-500",
                            },
                            {
                                label: "Need Attention",
                                value: stats.criticalCount,
                                icon: Flame,
                                color: "from-red-500 to-orange-500",
                            },
                            {
                                label: "Day Streak",
                                value: stats.streak,
                                icon: Target,
                                color: "from-purple-500 to-pink-500",
                            },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                                whileHover={{ scale: 1.02, y: -2 }}
                                className="p-5 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 relative overflow-hidden"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-sm">
                                            {stat.label}
                                        </p>
                                        <p className="text-3xl font-bold text-white mt-1">
                                            {stat.value}
                                        </p>
                                    </div>
                                    <div
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                                    >
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div
                                    className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-2xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${stat.color.includes("green")
                                                ? "#22c55e"
                                                : stat.color.includes("blue")
                                                    ? "#3b82f6"
                                                    : stat.color.includes("red")
                                                        ? "#ef4444"
                                                        : "#a855f7"
                                            } 0%, transparent 70%)`,
                                    }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Left Column - Curve & Heatmap */}
                        <div className="lg:col-span-8 space-y-6">
                            {/* Knowledge Decay Curve */}
                            {curveData && (
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <KnowledgeDecayCurve
                                        topicName={curveData.topicName}
                                        stability={curveData.stability}
                                        curvePoints={curveData.points}
                                        currentRetention={curveData.currentRetention}
                                        nextReviewDays={Math.round(
                                            curveData.daysUntilReview || 0
                                        )}
                                        onRefresh={() => window.location.reload()}
                                    />
                                </motion.div>
                            )}

                            {/* 10-Day Heatmap */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <RetentionHeatmap
                                    onTopicClick={handleTopicClick}
                                    onQuickReview={handleQuickReview}
                                />
                            </motion.div>
                        </div>

                        {/* Right Column - Alerts & Reality Check */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Smart Alerts (real data) */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <SmartAlerts
                                    alerts={alerts.map((a) => ({
                                        ...a,
                                        topicId: String(a.topicId),
                                    }))}
                                    onDismiss={(id) =>
                                        setAlerts((prev) =>
                                            prev.filter((a) => a.id !== id)
                                        )
                                    }
                                    onAction={handleQuickReview}
                                />
                            </motion.div>

                            {/* Reality Check Widget (real data) */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                {criticalTopic ? (
                                    <RealityCheck
                                        topicName={criticalTopic.topicName}
                                        currentRetention={criticalTopic.retrievability}
                                        stability={criticalTopic.stability}
                                        targetDate={new Date(
                                            Date.now() +
                                            criticalTopic.daysUntilReview *
                                            86400000
                                        ).toLocaleDateString("en-IN", {
                                            day: "numeric",
                                            month: "short",
                                        })}
                                        forgetDate={new Date(
                                            Date.now() +
                                            criticalTopic.stability *
                                            2 *
                                            86400000
                                        ).toLocaleDateString("en-IN", {
                                            day: "numeric",
                                            month: "short",
                                        })}
                                        daysUntilReview={Math.round(
                                            criticalTopic.daysUntilReview
                                        )}
                                        lastReviewDate={
                                            criticalTopic.lastReviewedDate
                                        }
                                    />
                                ) : (
                                    <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-center">
                                        <Brain className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
                                        <p className="text-gray-400 text-sm">
                                            Complete more topics to see retention predictions
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
