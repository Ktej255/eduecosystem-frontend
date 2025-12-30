"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Brain,
    Calendar,
    TrendingDown,
    TrendingUp,
    AlertCircle,
    Sparkles,
    Clock,
    Target,
} from "lucide-react";

interface RealityCheckProps {
    topicName: string;
    currentRetention: number;
    stability: number;
    targetDate: string; // When retention hits 90%
    forgetDate: string; // When retention hits 50%
    daysUntilReview: number;
    lastReviewDate?: string;
}

export default function RealityCheck({
    topicName,
    currentRetention,
    stability,
    targetDate,
    forgetDate,
    daysUntilReview,
    lastReviewDate,
}: RealityCheckProps) {
    const [animatedRetention, setAnimatedRetention] = useState(0);

    // Animate retention counter
    useEffect(() => {
        const duration = 1500;
        const steps = 60;
        const stepDuration = duration / steps;
        const increment = currentRetention / steps;

        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= currentRetention) {
                setAnimatedRetention(currentRetention);
                clearInterval(timer);
            } else {
                setAnimatedRetention(current);
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [currentRetention]);

    const getRetentionColor = (retention: number) => {
        if (retention >= 0.85) return { ring: "stroke-green-500", text: "text-green-400", bg: "bg-green-500" };
        if (retention >= 0.70) return { ring: "stroke-yellow-500", text: "text-yellow-400", bg: "bg-yellow-500" };
        return { ring: "stroke-red-500", text: "text-red-400", bg: "bg-red-500" };
    };

    const colors = getRetentionColor(currentRetention);
    const circumference = 2 * Math.PI * 40;
    const strokeDashoffset = circumference * (1 - animatedRetention);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800"
        >
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-semibold text-white">Reality Check</h3>
            </div>

            {/* Main content */}
            <div className="flex items-center gap-6">
                {/* Animated circular progress */}
                <div className="relative">
                    <svg className="w-28 h-28 transform -rotate-90">
                        {/* Background ring */}
                        <circle
                            cx="56"
                            cy="56"
                            r="40"
                            stroke="#333"
                            strokeWidth="8"
                            fill="none"
                        />
                        {/* Animated progress ring */}
                        <motion.circle
                            cx="56"
                            cy="56"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            className={colors.ring}
                            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
                            animate={{ strokeDashoffset }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </svg>

                    {/* Center text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <motion.span
                            className={`text-2xl font-bold ${colors.text}`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                        >
                            {(animatedRetention * 100).toFixed(0)}%
                        </motion.span>
                        <span className="text-xs text-gray-500">retained</span>
                    </div>

                    {/* Glow effect */}
                    <motion.div
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle, ${currentRetention >= 0.7 ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)"
                                } 0%, transparent 70%)`,
                        }}
                    />
                </div>

                {/* Prediction info */}
                <div className="flex-1 space-y-3">
                    <div>
                        <p className="text-sm text-gray-400 mb-1">Topic</p>
                        <p className="text-white font-medium">{topicName}</p>
                    </div>

                    {/* Warning message */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className={`p-3 rounded-lg ${currentRetention < 0.7
                                ? "bg-red-500/10 border border-red-500/30"
                                : "bg-indigo-500/10 border border-indigo-500/30"
                            }`}
                    >
                        <div className="flex items-start gap-2">
                            {currentRetention < 0.7 ? (
                                <TrendingDown className="w-4 h-4 text-red-400 mt-0.5" />
                            ) : (
                                <TrendingUp className="w-4 h-4 text-green-400 mt-0.5" />
                            )}
                            <div className="text-sm">
                                {currentRetention < 0.5 ? (
                                    <p className="text-red-400">
                                        <span className="font-semibold">Critical!</span> You will forget 50% of this topic by {forgetDate}.
                                    </p>
                                ) : currentRetention < 0.7 ? (
                                    <p className="text-yellow-400">
                                        You may forget 30% by {targetDate}. Review recommended!
                                    </p>
                                ) : (
                                    <p className="text-green-400">
                                        Strong retention! Next review suggested by {targetDate}.
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer stats */}
            <div className="mt-4 pt-4 border-t border-neutral-800">
                <div className="grid grid-cols-3 gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-center"
                    >
                        <div className="flex items-center justify-center gap-1 text-gray-400 text-sm mb-1">
                            <Target className="w-3.5 h-3.5" />
                            Stability
                        </div>
                        <p className="text-white font-semibold">{stability.toFixed(1)} days</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-center"
                    >
                        <div className="flex items-center justify-center gap-1 text-gray-400 text-sm mb-1">
                            <Clock className="w-3.5 h-3.5" />
                            Next Review
                        </div>
                        <p className={`font-semibold ${daysUntilReview <= 0 ? "text-red-400" : "text-white"
                            }`}>
                            {daysUntilReview <= 0 ? "Now!" : `${daysUntilReview} days`}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="text-center"
                    >
                        <div className="flex items-center justify-center gap-1 text-gray-400 text-sm mb-1">
                            <Calendar className="w-3.5 h-3.5" />
                            Last Review
                        </div>
                        <p className="text-white font-semibold">
                            {lastReviewDate || "Never"}
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
