"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    BookOpen,
    AlertTriangle,
    CheckCircle2,
    Clock,
    Flame,
    ChevronDown,
    ChevronUp,
    Brain,
    Zap,
    Calendar,
} from "lucide-react";

interface TopicStatus {
    topicId: number;
    topicName: string;
    stability: number;
    retrievability: number;
    status: "mastered" | "stable" | "review_soon" | "critical" | "forgotten";
    color: "green" | "yellow" | "red";
    daysUntilReview: number;
    lastReviewed?: string;
}

interface DayData {
    dayNumber: number;
    date: string;
    topics: TopicStatus[];
    isToday: boolean;
}

interface RetentionHeatmapProps {
    days: DayData[];
    onTopicClick?: (topicId: number) => void;
    onQuickReview?: (topicId: number) => void;
}

export default function RetentionHeatmap({
    days,
    onTopicClick,
    onQuickReview,
}: RetentionHeatmapProps) {
    const [expandedDay, setExpandedDay] = useState<number | null>(null);
    const [animatedDays, setAnimatedDays] = useState<number[]>([]);

    // Stagger animation on mount
    useEffect(() => {
        days.forEach((_, index) => {
            setTimeout(() => {
                setAnimatedDays((prev) => [...prev, index]);
            }, index * 100);
        });
    }, [days]);

    const getStatusColor = (status: TopicStatus["status"]) => {
        switch (status) {
            case "mastered":
                return { bg: "bg-emerald-500", text: "text-emerald-400", glow: "shadow-emerald-500/50" };
            case "stable":
                return { bg: "bg-green-500", text: "text-green-400", glow: "shadow-green-500/50" };
            case "review_soon":
                return { bg: "bg-yellow-500", text: "text-yellow-400", glow: "shadow-yellow-500/50" };
            case "critical":
                return { bg: "bg-orange-500", text: "text-orange-400", glow: "shadow-orange-500/50" };
            case "forgotten":
                return { bg: "bg-red-500", text: "text-red-400", glow: "shadow-red-500/50" };
            default:
                return { bg: "bg-gray-500", text: "text-gray-400", glow: "shadow-gray-500/50" };
        }
    };

    const getStatusIcon = (status: TopicStatus["status"]) => {
        switch (status) {
            case "mastered":
            case "stable":
                return CheckCircle2;
            case "review_soon":
                return Clock;
            case "critical":
                return AlertTriangle;
            case "forgotten":
                return Flame;
            default:
                return BookOpen;
        }
    };

    const getDayHealth = (topics: TopicStatus[]) => {
        if (topics.length === 0) return { color: "gray", score: 0 };

        const avgRetention =
            topics.reduce((sum, t) => sum + t.retrievability, 0) / topics.length;

        if (avgRetention >= 0.85) return { color: "green", score: avgRetention };
        if (avgRetention >= 0.70) return { color: "yellow", score: avgRetention };
        return { color: "red", score: avgRetention };
    };

    return (
        <div className="w-full bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <motion.div
                        animate={{
                            rotateY: [0, 360],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"
                    >
                        <Brain className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            10-Day Retention Map
                        </h3>
                        <p className="text-sm text-gray-400">
                            Track your knowledge across cycles
                        </p>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                        <span className="text-gray-400">Strong</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                        <span className="text-gray-400">Review Soon</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                        <span className="text-gray-400">Critical</span>
                    </div>
                </div>
            </div>

            {/* Heatmap Grid */}
            <div className="space-y-3">
                {days.map((day, dayIndex) => {
                    const isVisible = animatedDays.includes(dayIndex);
                    const isExpanded = expandedDay === dayIndex;
                    const dayHealth = getDayHealth(day.topics);
                    const criticalCount = day.topics.filter(
                        (t) => t.status === "critical" || t.status === "forgotten"
                    ).length;

                    return (
                        <motion.div
                            key={day.dayNumber}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{
                                opacity: isVisible ? 1 : 0,
                                x: isVisible ? 0 : -50,
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Day Row */}
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                onClick={() => setExpandedDay(isExpanded ? null : dayIndex)}
                                className={`
                                    p-4 rounded-xl cursor-pointer transition-all duration-300
                                    ${day.isToday
                                        ? "bg-indigo-500/20 border border-indigo-500/50"
                                        : "bg-neutral-800/50 hover:bg-neutral-800"
                                    }
                                `}
                            >
                                <div className="flex items-center justify-between">
                                    {/* Day info */}
                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col items-center">
                                            <span className="text-xs text-gray-500">Day</span>
                                            <span className={`text-xl font-bold ${day.isToday ? "text-indigo-400" : "text-white"}`}>
                                                {day.dayNumber}
                                            </span>
                                        </div>

                                        {/* Topic pills */}
                                        <div className="flex items-center gap-2 flex-wrap">
                                            {day.topics.slice(0, 6).map((topic, topicIndex) => {
                                                const colors = getStatusColor(topic.status);
                                                return (
                                                    <motion.div
                                                        key={topic.topicId}
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ delay: topicIndex * 0.1 }}
                                                        whileHover={{ scale: 1.15, y: -2 }}
                                                        className={`
                                                            w-8 h-8 rounded-lg ${colors.bg}
                                                            flex items-center justify-center
                                                            shadow-lg ${colors.glow}
                                                            cursor-pointer transition-all
                                                        `}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            onTopicClick?.(topic.topicId);
                                                        }}
                                                    >
                                                        <span className="text-xs font-bold text-white">
                                                            {(topic.retrievability * 100).toFixed(0)}
                                                        </span>
                                                    </motion.div>
                                                );
                                            })}
                                            {day.topics.length > 6 && (
                                                <span className="text-sm text-gray-500">
                                                    +{day.topics.length - 6}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Stats and expand */}
                                    <div className="flex items-center gap-4">
                                        {/* Critical alert */}
                                        {criticalCount > 0 && (
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.1, 1],
                                                }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: Infinity,
                                                }}
                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/20 text-red-400"
                                            >
                                                <Flame className="w-4 h-4" />
                                                <span className="text-sm font-medium">
                                                    {criticalCount} critical
                                                </span>
                                            </motion.div>
                                        )}

                                        {/* Day average */}
                                        <div className="text-right">
                                            <div className={`text-lg font-bold ${dayHealth.color === "green"
                                                    ? "text-green-400"
                                                    : dayHealth.color === "yellow"
                                                        ? "text-yellow-400"
                                                        : "text-red-400"
                                                }`}>
                                                {(dayHealth.score * 100).toFixed(0)}%
                                            </div>
                                            <div className="text-xs text-gray-500">avg retention</div>
                                        </div>

                                        {/* Expand icon */}
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown className="w-5 h-5 text-gray-500" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Expanded topic details */}
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-3 space-y-2">
                                            {day.topics.map((topic, topicIndex) => {
                                                const colors = getStatusColor(topic.status);
                                                const Icon = getStatusIcon(topic.status);

                                                return (
                                                    <motion.div
                                                        key={topic.topicId}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: topicIndex * 0.05 }}
                                                        className="flex items-center justify-between p-3 rounded-lg bg-neutral-800/50"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}>
                                                                <Icon className="w-4 h-4 text-white" />
                                                            </div>
                                                            <div>
                                                                <p className="text-white font-medium">
                                                                    {topic.topicName}
                                                                </p>
                                                                <p className="text-xs text-gray-500">
                                                                    Stability: {topic.stability.toFixed(1)} days
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center gap-4">
                                                            {/* Retention bar */}
                                                            <div className="w-24">
                                                                <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                                                                    <motion.div
                                                                        initial={{ width: 0 }}
                                                                        animate={{ width: `${topic.retrievability * 100}%` }}
                                                                        transition={{ duration: 0.5, delay: topicIndex * 0.05 }}
                                                                        className={`h-full ${colors.bg}`}
                                                                    />
                                                                </div>
                                                                <p className={`text-xs ${colors.text} mt-1 text-right`}>
                                                                    {(topic.retrievability * 100).toFixed(0)}%
                                                                </p>
                                                            </div>

                                                            {/* Quick review button */}
                                                            {(topic.status === "critical" || topic.status === "forgotten" || topic.status === "review_soon") && (
                                                                <motion.button
                                                                    whileHover={{ scale: 1.05 }}
                                                                    whileTap={{ scale: 0.95 }}
                                                                    onClick={() => onQuickReview?.(topic.topicId)}
                                                                    className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium flex items-center gap-1.5 transition-colors"
                                                                >
                                                                    <Zap className="w-3.5 h-3.5" />
                                                                    Review
                                                                </motion.button>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>

            {/* Summary Footer */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-6 p-4 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-indigo-400" />
                        <div>
                            <p className="text-white font-medium">Cycle Summary</p>
                            <p className="text-sm text-gray-400">
                                {days.reduce((sum, d) => sum + d.topics.filter(t => t.status === "critical" || t.status === "forgotten").length, 0)} topics need attention
                            </p>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
                    >
                        Start Cycle Review
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}
