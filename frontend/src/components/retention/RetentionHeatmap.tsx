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
    Brain,
    Zap,
    Calendar,
} from "lucide-react";
import { getLearningProgress, getTopicRetention } from "@/services/progressStorage";

interface TopicStatus {
    topicId: string;
    topicName: string;
    stability: number;
    retrievability: number;
    status: "mastered" | "stable" | "review_soon" | "critical" | "forgotten" | "new";
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
    onTopicClick?: (topicId: string) => void;
    onQuickReview?: (topicId: string) => void;
}

export default function RetentionHeatmap({
    onTopicClick,
    onQuickReview,
}: RetentionHeatmapProps) {
    const [days, setDays] = useState<DayData[]>([]);
    const [expandedDay, setExpandedDay] = useState<number | null>(null);
    const [animatedDays, setAnimatedDays] = useState<number[]>([]);

    useEffect(() => {
        // Load data from progressStorage
        const progress = getLearningProgress();
        const logs = progress.chapterLogs || {};
        const completedChapters = progress.completedChapters || [];

        // Generate last 10 days
        const last10Days: DayData[] = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = 9; i >= 0; i--) {
            const d = new Date(today);
            d.setDate(d.getDate() - i);
            const dateStr = d.toDateString();

            // Find chapters completed on this day
            const daysTopics: TopicStatus[] = [];

            Object.entries(logs).forEach(([chapterId, timestamp]) => {
                const logDate = new Date(timestamp);
                logDate.setHours(0, 0, 0, 0);

                if (logDate.getTime() === d.getTime()) {
                    const srData = getTopicRetention(chapterId);
                    daysTopics.push({
                        topicId: chapterId,
                        topicName: formatTopicName(chapterId),
                        stability: srData.stability,
                        retrievability: srData.retrievability,
                        status: srData.status,
                        color: srData.retrievability > 0.8 ? "green" : srData.retrievability > 0.6 ? "yellow" : "red",
                        daysUntilReview: Math.round(srData.daysUntilReview || 0),
                        lastReviewed: new Date(timestamp).toISOString()
                    });
                }
            });

            // If it's today and we have legacy data (completed but no log), maybe show them? 
            // For now, let's just show logged data to be accurate.

            last10Days.push({
                dayNumber: d.getDate(),
                date: dateStr,
                topics: daysTopics,
                isToday: i === 0
            });
        }

        setDays(last10Days);

    }, []);

    // Stagger animation on mount
    useEffect(() => {
        if (days.length > 0) {
            days.forEach((_, index) => {
                setTimeout(() => {
                    setAnimatedDays((prev) => [...prev, index]);
                }, index * 100);
            });
        }
    }, [days]);

    const formatTopicName = (id: string) => {
        return id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

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
                return { bg: "bg-muted-foreground", text: "text-muted-foreground", glow: "shadow-gray-500/50" };
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
                            Retention Velocity
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Real-time protection stats
                        </p>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
                        <span className="text-muted-foreground">Mastered</span>
                    </div>
                </div>
            </div>

            {/* Heatmap Grid */}
            <div className="space-y-3">
                {days.map((day, dayIndex) => {
                    const isVisible = animatedDays.includes(dayIndex);
                    const isExpanded = expandedDay === dayIndex;
                    const dayHealth = getDayHealth(day.topics);

                    return (
                        <motion.div
                            key={dayIndex}
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
                                        <div className="flex flex-col items-center w-12">
                                            <span className="text-xs text-muted-foreground">{day.date.split(' ')[0]}</span>
                                            <span className={`text-xl font-bold ${day.isToday ? "text-indigo-400" : "text-white"}`}>
                                                {day.dayNumber}
                                            </span>
                                        </div>

                                        {/* Topic pills */}
                                        <div className="flex items-center gap-2 flex-wrap">
                                            {day.topics.length === 0 ? (
                                                <span className="text-xs text-muted-foreground italic">No activity</span>
                                            ) : (
                                                <>
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
                                                                title={topic.topicName}
                                                            >
                                                                <CheckCircle2 className="w-4 h-4 text-emerald-900" />
                                                            </motion.div>
                                                        );
                                                    })}
                                                    {day.topics.length > 6 && (
                                                        <span className="text-sm text-muted-foreground">
                                                            +{day.topics.length - 6}
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Stats and expand */}
                                    <div className="flex items-center gap-4">
                                        {/* Day count */}
                                        <div className="text-right">
                                            <div className={`text-lg font-bold ${day.topics.length > 0 ? "text-white" : "text-muted-foreground"}`}>
                                                {day.topics.length}
                                            </div>
                                            <div className="text-xs text-muted-foreground">concepts</div>
                                        </div>

                                        {/* Expand icon */}
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Expanded topic details */}
                            <AnimatePresence>
                                {isExpanded && day.topics.length > 0 && (
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
                                                                <p className="text-xs text-muted-foreground">
                                                                    Mastered on {day.date}
                                                                </p>
                                                            </div>
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
        </div>
    );
}
