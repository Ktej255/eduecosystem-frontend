"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Brain,
    AlertTriangle,
    TrendingDown,
    TrendingUp,
    Lightbulb,
    ChevronRight,
    X,
} from "lucide-react";

interface RetentionContext {
    topicName: string;
    retention: number; // 0-1
    daysSinceLastReview: number;
    relatedTopics?: string[];
}

interface RealityCheckOverlayProps {
    currentVideoId: number;
    retentionData?: RetentionContext;
    onDismiss?: () => void;
    onQuickReview?: (topicId: number) => void;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

// Dummy data for testing
const DUMMY_RETENTION: RetentionContext = {
    topicName: "Breath Awareness",
    retention: 0.62,
    daysSinceLastReview: 4,
    relatedTopics: ["Relaxation Response", "Counting Breath"],
};

export default function RealityCheckOverlay({
    currentVideoId,
    retentionData = DUMMY_RETENTION,
    onDismiss,
    onQuickReview,
    position = "top-right",
}: RealityCheckOverlayProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    // Auto-show after 5 seconds of video
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    const getRetentionStatus = (retention: number) => {
        if (retention >= 0.85) return { level: "strong", color: "#22c55e", label: "Strong" };
        if (retention >= 0.70) return { level: "good", color: "#84cc16", label: "Good" };
        if (retention >= 0.50) return { level: "fading", color: "#eab308", label: "Fading" };
        return { level: "critical", color: "#ef4444", label: "Critical" };
    };

    const status = getRetentionStatus(retentionData.retention);
    const retentionPercent = Math.round(retentionData.retention * 100);
    const lostPercent = 100 - retentionPercent;

    const positionClasses = {
        "top-left": "top-4 left-4",
        "top-right": "top-4 right-4",
        "bottom-left": "bottom-20 left-4",
        "bottom-right": "bottom-20 right-4",
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                className={`fixed ${positionClasses[position]} z-50`}
            >
                {/* Compact Badge */}
                {!isExpanded && (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setIsExpanded(true)}
                        className="cursor-pointer"
                    >
                        <div
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-full
                                backdrop-blur-xl border shadow-lg
                                ${status.level === "critical" || status.level === "fading"
                                    ? "bg-red-500/20 border-red-500/40"
                                    : "bg-neutral-800/80 border-neutral-700"
                                }
                            `}
                        >
                            {/* Pulsing indicator for critical */}
                            {status.level === "critical" && (
                                <motion.span
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [1, 0.8, 1],
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-2 h-2 rounded-full bg-red-500"
                                />
                            )}

                            <Brain className="w-4 h-4" style={{ color: status.color }} />
                            <span className="font-medium text-white text-sm">
                                {retentionPercent}%
                            </span>
                            {status.level === "critical" || status.level === "fading" ? (
                                <TrendingDown className="w-4 h-4 text-red-400" />
                            ) : (
                                <TrendingUp className="w-4 h-4 text-green-400" />
                            )}
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                    </motion.div>
                )}

                {/* Expanded Panel */}
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-80 rounded-2xl bg-neutral-900/95 backdrop-blur-xl border border-neutral-800 shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div
                            className="p-4 flex items-center justify-between"
                            style={{
                                background: `linear-gradient(135deg, ${status.color}20, transparent)`,
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <Brain className="w-5 h-5" style={{ color: status.color }} />
                                <span className="font-semibold text-white">Reality Check</span>
                            </div>
                            <button
                                onClick={() => {
                                    setIsExpanded(false);
                                    onDismiss?.();
                                }}
                                className="p-1 rounded-lg hover:bg-neutral-800 transition-colors"
                            >
                                <X className="w-4 h-4 text-gray-400" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-4">
                            {/* Previous Topic Status */}
                            <div>
                                <p className="text-sm text-gray-400 mb-2">
                                    Your previous topic:
                                </p>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-800/50">
                                    <div>
                                        <p className="font-medium text-white">
                                            {retentionData.topicName}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {retentionData.daysSinceLastReview} days ago
                                        </p>
                                    </div>
                                    <div
                                        className="text-2xl font-bold"
                                        style={{ color: status.color }}
                                    >
                                        {retentionPercent}%
                                    </div>
                                </div>
                            </div>

                            {/* Warning Message */}
                            {(status.level === "critical" || status.level === "fading") && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-start gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/30"
                                >
                                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-red-400 font-medium">
                                            You've forgotten {lostPercent}%
                                        </p>
                                        <p className="text-xs text-red-400/70 mt-1">
                                            Quick review before watching to maximize retention
                                        </p>
                                    </div>
                                </motion.div>
                            )}

                            {/* Connection Tip */}
                            {retentionData.relatedTopics && (
                                <div className="flex items-start gap-3 p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30">
                                    <Lightbulb className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-indigo-400 font-medium">
                                            Connection Tip
                                        </p>
                                        <p className="text-xs text-indigo-400/70 mt-1">
                                            This topic builds on: {retentionData.relatedTopics.join(", ")}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex gap-2 pt-2">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => onQuickReview?.(currentVideoId)}
                                    className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors"
                                >
                                    Quick Review
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setIsExpanded(false)}
                                    className="py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-gray-300 font-medium text-sm transition-colors"
                                >
                                    Continue
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
