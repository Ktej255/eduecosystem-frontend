"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Flame,
    Snowflake,
    Trophy,
    Calendar,
    Coins,
    TrendingUp,
    Star,
    Zap,
    Gift,
    Target,
} from "lucide-react";

interface StreakData {
    currentStreak: number;
    longestStreak: number;
    freezeTokens: number;
    totalActiveDays: number;
    coinsEarned: number;
    milestones: {
        "7_day": boolean;
        "30_day": boolean;
        "100_day": boolean;
    };
}

interface StreakWidgetProps {
    data?: StreakData;
    onLogActivity?: () => void;
    compact?: boolean;
}

// Dummy data for testing
const DUMMY_DATA: StreakData = {
    currentStreak: 7,
    longestStreak: 14,
    freezeTokens: 2,
    totalActiveDays: 45,
    coinsEarned: 350,
    milestones: {
        "7_day": true,
        "30_day": false,
        "100_day": false,
    },
};

export default function StreakWidget({
    data = DUMMY_DATA,
    onLogActivity,
    compact = false,
}: StreakWidgetProps) {
    const [isAnimating, setIsAnimating] = useState(false);
    const [showCoinPop, setShowCoinPop] = useState(false);

    // Animate flame on mount
    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 2000);
        return () => clearTimeout(timer);
    }, [data.currentStreak]);

    const getStreakColor = (streak: number) => {
        if (streak >= 30) return { primary: "#f97316", secondary: "#fbbf24", glow: "orange" };
        if (streak >= 7) return { primary: "#ef4444", secondary: "#f97316", glow: "red" };
        if (streak >= 3) return { primary: "#eab308", secondary: "#f97316", glow: "yellow" };
        return { primary: "#6b7280", secondary: "#9ca3af", glow: "gray" };
    };

    const colors = getStreakColor(data.currentStreak);

    const getMilestoneProgress = () => {
        if (!data.milestones["7_day"]) return { next: 7, current: data.currentStreak };
        if (!data.milestones["30_day"]) return { next: 30, current: data.currentStreak };
        if (!data.milestones["100_day"]) return { next: 100, current: data.currentStreak };
        return { next: 365, current: data.currentStreak };
    };

    const milestone = getMilestoneProgress();
    const progressPercent = (milestone.current / milestone.next) * 100;

    if (compact) {
        // Compact version for header/sidebar
        return (
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800/80 border border-neutral-700"
            >
                <motion.div
                    animate={{
                        scale: isAnimating ? [1, 1.2, 1] : 1,
                        rotate: isAnimating ? [0, -5, 5, 0] : 0,
                    }}
                    transition={{ duration: 0.5, repeat: isAnimating ? 2 : 0 }}
                >
                    <Flame
                        className="w-5 h-5"
                        style={{ color: colors.primary }}
                    />
                </motion.div>
                <span className="font-bold text-white">{data.currentStreak}</span>
                {data.freezeTokens > 0 && (
                    <div className="flex items-center gap-1 text-cyan-400">
                        <Snowflake className="w-3 h-3" />
                        <span className="text-xs">{data.freezeTokens}</span>
                    </div>
                )}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 relative overflow-hidden"
        >
            {/* Animated background glow */}
            <motion.div
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                }}
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl pointer-events-none"
                style={{
                    background: `radial-gradient(circle, ${colors.primary}40 0%, transparent 70%)`,
                }}
            />

            {/* Header */}
            <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                    <motion.div
                        animate={{
                            y: [0, -3, 0],
                            scale: isAnimating ? [1, 1.3, 1] : 1,
                        }}
                        transition={{
                            y: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 0.5 },
                        }}
                        className="relative"
                    >
                        <Flame
                            className="w-10 h-10"
                            style={{ color: colors.primary }}
                        />
                        {/* Glow effect */}
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute inset-0 blur-xl"
                            style={{ background: colors.primary, opacity: 0.3 }}
                        />
                    </motion.div>
                    <div>
                        <h3 className="text-lg font-bold text-white">Your Streak</h3>
                        <p className="text-sm text-gray-400">Keep the fire burning!</p>
                    </div>
                </div>

                {/* Freeze tokens */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/30"
                >
                    <Snowflake className="w-5 h-5 text-cyan-400" />
                    <div className="text-right">
                        <p className="text-sm font-bold text-cyan-400">{data.freezeTokens}</p>
                        <p className="text-xs text-cyan-400/70">Freeze Tokens</p>
                    </div>
                </motion.div>
            </div>

            {/* Main Streak Display */}
            <div className="flex items-center justify-center py-8 relative z-10">
                <motion.div
                    className="text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                >
                    <motion.div
                        animate={{
                            textShadow: [
                                `0 0 20px ${colors.primary}40`,
                                `0 0 40px ${colors.primary}80`,
                                `0 0 20px ${colors.primary}40`,
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-7xl font-black"
                        style={{
                            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        {data.currentStreak}
                    </motion.div>
                    <p className="text-xl text-gray-400 mt-2">
                        {data.currentStreak === 1 ? "Day" : "Days"} in a row
                    </p>
                </motion.div>
            </div>

            {/* Milestone Progress */}
            <div className="mb-6 relative z-10">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Target className="w-4 h-4" />
                        Next Milestone: {milestone.next} Days
                    </div>
                    <span className="text-sm font-medium" style={{ color: colors.primary }}>
                        {progressPercent.toFixed(0)}%
                    </span>
                </div>
                <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(progressPercent, 100)}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                            background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                        }}
                    />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 relative z-10">
                <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-4 rounded-xl bg-neutral-800/50 text-center"
                >
                    <Trophy className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{data.longestStreak}</p>
                    <p className="text-xs text-gray-400">Longest Streak</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-4 rounded-xl bg-neutral-800/50 text-center"
                >
                    <Calendar className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{data.totalActiveDays}</p>
                    <p className="text-xs text-gray-400">Total Days</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-4 rounded-xl bg-neutral-800/50 text-center relative"
                >
                    <Coins className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{data.coinsEarned}</p>
                    <p className="text-xs text-gray-400">Coins Earned</p>

                    {/* Coin pop animation */}
                    <AnimatePresence>
                        {showCoinPop && (
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: -30 }}
                                exit={{ opacity: 0 }}
                                className="absolute top-0 left-1/2 -translate-x-1/2 text-amber-400 font-bold"
                            >
                                +10
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Milestone Badges */}
            <div className="mt-6 pt-6 border-t border-neutral-800 relative z-10">
                <p className="text-sm text-gray-400 mb-3">Milestones</p>
                <div className="flex items-center gap-4">
                    <MilestoneBadge
                        icon={Star}
                        label="7 Days"
                        achieved={data.milestones["7_day"]}
                    />
                    <MilestoneBadge
                        icon={Zap}
                        label="30 Days"
                        achieved={data.milestones["30_day"]}
                    />
                    <MilestoneBadge
                        icon={Gift}
                        label="100 Days"
                        achieved={data.milestones["100_day"]}
                    />
                </div>
            </div>
        </motion.div>
    );
}

function MilestoneBadge({
    icon: Icon,
    label,
    achieved,
}: {
    icon: React.ElementType;
    label: string;
    achieved: boolean;
}) {
    const IconComp = Icon as any;
    return (
        <motion.div
            whileHover={achieved ? { scale: 1.1, rotate: 5 } : {}}
            className={`
                flex flex-col items-center gap-1 p-3 rounded-xl
                ${achieved
                    ? "bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30"
                    : "bg-neutral-800/50 opacity-50"
                }
            `}
        >
            <IconComp
                className={`w-6 h-6 ${achieved ? "text-amber-400" : "text-gray-600"}`}
            />
            <span className={`text-xs ${achieved ? "text-amber-400" : "text-gray-600"}`}>
                {label}
            </span>
            {achieved && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-3 h-3 rounded-full bg-green-500"
                />
            )}
        </motion.div>
    );
}
