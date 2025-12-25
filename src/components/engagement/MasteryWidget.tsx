"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Trophy,
    Star,
    Zap,
    Crown,
    Sparkles,
    ChevronRight,
    Gift,
    Lock,
    ArrowUp,
} from "lucide-react";

interface Badge {
    id: string;
    name: string;
    icon: string;
    description: string;
    earned: boolean;
    requiredLevel: number;
}

interface MasteryWidgetProps {
    level?: number;
    levelName?: string;
    currentXP?: number;
    xpToNextLevel?: number;
    totalXP?: number;
    badges?: Badge[];
    onViewDetails?: () => void;
}

// Dummy data
const DUMMY_BADGES: Badge[] = [
    { id: "first_steps", name: "First Steps", icon: "🌱", description: "Reached Level 2", earned: true, requiredLevel: 2 },
    { id: "practitioner", name: "Practitioner", icon: "⭐", description: "Reached Level 5", earned: true, requiredLevel: 5 },
    { id: "adept", name: "Adept", icon: "🔥", description: "Reached Level 7", earned: false, requiredLevel: 7 },
    { id: "grandmaster", name: "Grandmaster", icon: "👑", description: "Reached Level 10", earned: false, requiredLevel: 10 },
];

const LEVEL_COLORS: { [key: number]: { bg: string; text: string; glow: string } } = {
    1: { bg: "from-gray-500 to-gray-600", text: "text-gray-400", glow: "gray" },
    2: { bg: "from-green-500 to-emerald-600", text: "text-green-400", glow: "#22c55e" },
    5: { bg: "from-blue-500 to-indigo-600", text: "text-blue-400", glow: "#3b82f6" },
    7: { bg: "from-purple-500 to-violet-600", text: "text-purple-400", glow: "#8b5cf6" },
    10: { bg: "from-amber-500 to-yellow-500", text: "text-amber-400", glow: "#f59e0b" },
};

export default function MasteryWidget({
    level = 5,
    levelName = "Practitioner",
    currentXP = 320,
    xpToNextLevel = 500,
    totalXP = 1820,
    badges = DUMMY_BADGES,
    onViewDetails,
}: MasteryWidgetProps) {
    const [animatedXP, setAnimatedXP] = useState(0);
    const [showLevelUp, setShowLevelUp] = useState(false);

    const progressPercent = (currentXP / xpToNextLevel) * 100;

    // Animate XP bar on mount
    useEffect(() => {
        const duration = 1000;
        const steps = 50;
        const stepDuration = duration / steps;
        const increment = currentXP / steps;

        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= currentXP) {
                setAnimatedXP(currentXP);
                clearInterval(timer);
            } else {
                setAnimatedXP(Math.floor(current));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [currentXP]);

    // Get color based on level
    const getLevelColor = () => {
        const levels = Object.keys(LEVEL_COLORS)
            .map(Number)
            .sort((a, b) => b - a);
        for (const l of levels) {
            if (level >= l) return LEVEL_COLORS[l];
        }
        return LEVEL_COLORS[1];
    };

    const colors = getLevelColor();
    const earnedBadges = badges.filter((b) => b.earned);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 relative overflow-hidden"
        >
            {/* Glow effect */}
            <motion.div
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                style={{ background: colors.glow, opacity: 0.2 }}
            />

            {/* Header */}
            <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-3">
                    <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center shadow-lg`}
                    >
                        <Trophy className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                        <p className="text-sm text-gray-400">Your Level</p>
                        <div className="flex items-center gap-2">
                            <span className={`text-2xl font-bold ${colors.text}`}>
                                {level}
                            </span>
                            <span className="text-lg font-semibold text-white">
                                {levelName}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Total XP */}
                <div className="text-right">
                    <p className="text-xs text-gray-500">Total XP</p>
                    <p className="text-xl font-bold text-white">{totalXP.toLocaleString()}</p>
                </div>
            </div>

            {/* XP Progress Bar */}
            <div className="mb-4 relative z-10">
                <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                        <Zap className="w-4 h-4 text-amber-400" />
                        {animatedXP} / {xpToNextLevel} XP
                    </span>
                    <span className="text-sm text-gray-400">
                        {xpToNextLevel - currentXP} XP to Level {level + 1}
                    </span>
                </div>
                <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${colors.bg}`}
                        style={{
                            boxShadow: `0 0 10px ${colors.glow}40`,
                        }}
                    />
                </div>
            </div>

            {/* Badges */}
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-400">Badges Earned</p>
                    <span className="text-xs text-gray-500">
                        {earnedBadges.length}/{badges.length}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    {badges.slice(0, 4).map((badge, index) => (
                        <motion.div
                            key={badge.id}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={badge.earned ? { scale: 1.1, rotate: 5 } : {}}
                            className={`
                                relative w-12 h-12 rounded-xl flex items-center justify-center
                                ${badge.earned
                                    ? "bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30"
                                    : "bg-neutral-800/50 opacity-40"
                                }
                            `}
                            title={badge.earned ? badge.name : `Locked: ${badge.description}`}
                        >
                            <span className="text-2xl">{badge.icon}</span>
                            {!badge.earned && (
                                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/60 rounded-xl">
                                    <Lock className="w-4 h-4 text-gray-500" />
                                </div>
                            )}
                        </motion.div>
                    ))}

                    {badges.length > 4 && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={onViewDetails}
                            className="w-12 h-12 rounded-xl bg-neutral-800/50 border border-neutral-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                        >
                            +{badges.length - 4}
                        </motion.button>
                    )}
                </div>
            </div>

            {/* Level Up Animation */}
            <AnimatePresence>
                {showLevelUp && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.5 }}
                        className="absolute inset-0 flex items-center justify-center bg-neutral-900/90 z-20"
                    >
                        <div className="text-center">
                            <motion.div
                                animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                                transition={{ duration: 0.5, repeat: 3 }}
                            >
                                <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                            </motion.div>
                            <h3 className="text-3xl font-bold text-white mb-2">Level Up!</h3>
                            <p className={`text-xl ${colors.text}`}>
                                You are now a {levelName}!
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
