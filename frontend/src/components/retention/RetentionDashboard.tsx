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
} from "lucide-react";
import KnowledgeDecayCurve from "./KnowledgeDecayCurve";
import RetentionHeatmap from "./RetentionHeatmap";
import SmartAlerts from "./SmartAlerts";
import RealityCheck from "./RealityCheck";
import { getLearningProgress, getStudentStats, getDecayCurvePoints } from "@/services/progressStorage";

// Dummy data for demonstration
const DUMMY_CURVE_POINTS = Array.from({ length: 11 }, (_, i) => ({
    day: i,
    retention: Math.exp(-i / 5), // Exponential decay with stability of 5 days
    reviewed: i === 4, // Review on day 4
}));

const DUMMY_DAYS = Array.from({ length: 10 }, (_, i) => ({
    dayNumber: i + 1,
    date: new Date(Date.now() + i * 86400000).toLocaleDateString(),
    isToday: i === 0,
    topics: [
        {
            topicId: i * 4 + 1,
            topicName: `Process ${i * 4 + 1}: Relaxation`,
            stability: 3 + Math.random() * 5,
            retrievability: 0.5 + Math.random() * 0.5,
            status: Math.random() > 0.7 ? "critical" : Math.random() > 0.4 ? "review_soon" : "stable" as any,
            color: Math.random() > 0.7 ? "red" : Math.random() > 0.4 ? "yellow" : "green" as any,
            daysUntilReview: Math.floor(Math.random() * 5),
        },
        {
            topicId: i * 4 + 2,
            topicName: `Process ${i * 4 + 2}: Breath Awareness`,
            stability: 4 + Math.random() * 6,
            retrievability: 0.6 + Math.random() * 0.4,
            status: Math.random() > 0.8 ? "forgotten" : Math.random() > 0.5 ? "stable" : "review_soon" as any,
            color: Math.random() > 0.8 ? "red" : Math.random() > 0.5 ? "green" : "yellow" as any,
            daysUntilReview: Math.floor(Math.random() * 7),
        },
        {
            topicId: i * 4 + 3,
            topicName: `Process ${i * 4 + 3}: Counting Breath`,
            stability: 5 + Math.random() * 4,
            retrievability: 0.7 + Math.random() * 0.3,
            status: Math.random() > 0.6 ? "mastered" : "stable" as any,
            color: "green" as any,
            daysUntilReview: Math.floor(Math.random() * 10),
        },
    ],
}));

const DUMMY_ALERTS = [
    {
        id: 1,
        topicId: 7,
        topicName: "Om Chanting Technique",
        type: "critical" as const,
        message: "Knowledge fading rapidly! You learned this 5 days ago.",
        daysOverdue: 2,
        retention: 0.42,
    },
    {
        id: 2,
        topicId: 12,
        topicName: "Ajna Focus Meditation",
        type: "warning" as const,
        message: "Review recommended within 24 hours to maintain 90% retention.",
        retention: 0.73,
    },
    {
        id: 3,
        topicId: 3,
        topicName: "Breath Awareness",
        type: "reminder" as const,
        message: "Scheduled review for today. Keep your streak going!",
        retention: 0.88,
    },
];

export default function RetentionDashboard() {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [stats, setStats] = useState<any>(null);
    const [curveData, setCurveData] = useState<any>(null);

    useEffect(() => {
        const realStats = getStudentStats();
        const progress = getLearningProgress();

        // Find a topic to display in the curve (first completed topic or random)
        const firstTopic = progress.completedChapters?.[0] || "economy-banking";
        const curve = getDecayCurvePoints(firstTopic);

        setStats({
            avgRetention: 0.85, // Placeholder for calculated avg
            topicsLearned: progress.completedChapters.length,
            criticalCount: 0, // Placeholder
            streak: realStats.overallStreak,
        });
        setCurveData({
            topicName: firstTopic.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
            ...curve
        });
        setIsLoading(false);
    }, []);

    const handleTopicClick = (topicId: string) => {
        setSelectedTopic(topicId);
    };

    const handleQuickReview = (topicId: string) => {
        console.log("Starting quick review for topic:", topicId);
        // Navigate to review mode
    };

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
                                Track your knowledge decay and optimize reviews
                            </p>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center gap-2 transition-colors"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Sync Data
                    </motion.button>
                </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-4 gap-4 mb-8"
            >
                {[
                    { label: "Avg Retention", value: `${(stats.avgRetention * 100).toFixed(0)}%`, icon: TrendingUp, color: "from-green-500 to-emerald-500" },
                    { label: "Topics Learned", value: stats.topicsLearned, icon: BarChart3, color: "from-blue-500 to-indigo-500" },
                    { label: "Need Attention", value: stats.criticalCount, icon: Flame, color: "from-red-500 to-orange-500" },
                    { label: "Day Streak", value: stats.streak, icon: Target, color: "from-purple-500 to-pink-500" },
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
                                <p className="text-gray-400 text-sm">{stat.label}</p>
                                <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
                            </div>
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                        </div>

                        {/* Glow effect */}
                        <div
                            className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-2xl"
                            style={{
                                background: `linear-gradient(135deg, ${stat.color.includes("green") ? "#22c55e" :
                                    stat.color.includes("blue") ? "#3b82f6" :
                                        stat.color.includes("red") ? "#ef4444" : "#a855f7"
                                    } 0%, transparent 70%)`,
                            }}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-12 gap-6">
                {/* Left Column - Curve & Heatmap */}
                <div className="col-span-8 space-y-6">
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
                                nextReviewDays={Math.round(curveData.daysUntilReview)}
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
                <div className="col-span-4 space-y-6">
                    {/* Smart Alerts */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <SmartAlerts
                            alerts={DUMMY_ALERTS.map(a => ({ ...a, topicId: String(a.topicId) }))}
                            onDismiss={(id) => console.log("Dismiss:", id)}
                            onAction={handleQuickReview}
                        />
                    </motion.div>

                    {/* Reality Check Widget */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <RealityCheck
                            topicName="Om Chanting Technique"
                            currentRetention={0.65}
                            stability={4.2}
                            targetDate="Dec 27"
                            forgetDate="Dec 30"
                            daysUntilReview={1}
                            lastReviewDate="Dec 23"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
