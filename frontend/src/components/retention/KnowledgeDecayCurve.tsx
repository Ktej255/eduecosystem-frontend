"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    TrendingUp,
    TrendingDown,
    Brain,
    Flame,
    AlertTriangle,
    CheckCircle2,
    Clock,
    Zap,
    RotateCcw,
} from "lucide-react";

interface CurvePoint {
    day: number;
    retention: number;
    reviewed?: boolean;
}

interface KnowledgeDecayCurveProps {
    topicName: string;
    stability: number;
    curvePoints: CurvePoint[];
    currentRetention: number;
    nextReviewDays: number;
    onRefresh?: () => void;
}

export default function KnowledgeDecayCurve({
    topicName,
    stability,
    curvePoints,
    currentRetention,
    nextReviewDays,
    onRefresh,
}: KnowledgeDecayCurveProps) {
    const [animatedPoints, setAnimatedPoints] = useState<CurvePoint[]>([]);
    const [isAnimating, setIsAnimating] = useState(true);
    const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

    // Animate curve on mount
    useEffect(() => {
        setIsAnimating(true);
        const animationDuration = 2000;
        const pointDelay = animationDuration / curvePoints.length;

        curvePoints.forEach((point, index) => {
            setTimeout(() => {
                setAnimatedPoints((prev) => [...prev, point]);
                if (index === curvePoints.length - 1) {
                    setIsAnimating(false);
                }
            }, index * pointDelay);
        });

        return () => setAnimatedPoints([]);
    }, [curvePoints]);

    // Calculate SVG path for the curve
    const curvePath = useMemo(() => {
        if (animatedPoints.length < 2) return "";

        const width = 600;
        const height = 200;
        const padding = 40;
        const graphWidth = width - padding * 2;
        const graphHeight = height - padding * 2;

        const points = animatedPoints.map((p, i) => ({
            x: padding + (i / (curvePoints.length - 1)) * graphWidth,
            y: padding + (1 - p.retention) * graphHeight,
        }));

        // Create smooth bezier curve
        let path = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) {
            const prev = points[i - 1];
            const curr = points[i];
            const cp1x = prev.x + (curr.x - prev.x) / 3;
            const cp2x = curr.x - (curr.x - prev.x) / 3;
            path += ` C ${cp1x} ${prev.y}, ${cp2x} ${curr.y}, ${curr.x} ${curr.y}`;
        }

        return path;
    }, [animatedPoints, curvePoints.length]);

    // Get status color based on retention
    const getRetentionColor = (retention: number) => {
        if (retention >= 0.85) return "#22c55e"; // Green
        if (retention >= 0.70) return "#eab308"; // Yellow
        if (retention >= 0.50) return "#f97316"; // Orange
        return "#ef4444"; // Red
    };

    const getRetentionGradient = (retention: number) => {
        if (retention >= 0.85) return "from-green-500 to-emerald-400";
        if (retention >= 0.70) return "from-yellow-500 to-amber-400";
        if (retention >= 0.50) return "from-orange-500 to-amber-500";
        return "from-red-500 to-rose-400";
    };

    const getRetentionStatus = (retention: number) => {
        if (retention >= 0.85) return { text: "Strong Retention", icon: CheckCircle2 };
        if (retention >= 0.70) return { text: "Review Soon", icon: Clock };
        if (retention >= 0.50) return { text: "Fading!", icon: AlertTriangle };
        return { text: "Critical - Review Now!", icon: Flame };
    };

    const status = getRetentionStatus(currentRetention);
    const StatusIcon = status.icon;

    return (
        <div className="w-full bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <Brain className="w-5 h-5 text-indigo-400" />
                        {topicName}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                        Stability: {stability.toFixed(1)} days
                    </p>
                </div>

                {/* Current Retention Badge */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${getRetentionGradient(currentRetention)} flex items-center gap-2`}
                >
                    <StatusIcon className="w-4 h-4 text-white" />
                    <span className="text-white font-bold">
                        {(currentRetention * 100).toFixed(0)}%
                    </span>
                </motion.div>
            </div>

            {/* Animated SVG Curve */}
            <div className="relative h-64 mb-6">
                <svg
                    viewBox="0 0 600 200"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {/* Background grid */}
                    <defs>
                        <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={getRetentionColor(currentRetention)} stopOpacity="0.3" />
                            <stop offset="100%" stopColor={getRetentionColor(currentRetention)} stopOpacity="0" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Danger zone (below 90%) */}
                    <rect
                        x="40"
                        y="40"
                        width="520"
                        height="20"
                        fill="rgba(239, 68, 68, 0.1)"
                        className="transition-opacity duration-500"
                    />

                    {/* Grid lines */}
                    {[0.25, 0.5, 0.75, 1].map((y, i) => (
                        <line
                            key={i}
                            x1="40"
                            y1={40 + (1 - y) * 120}
                            x2="560"
                            y2={40 + (1 - y) * 120}
                            stroke="#333"
                            strokeDasharray="4,4"
                            opacity="0.5"
                        />
                    ))}

                    {/* Y-axis labels */}
                    {[0, 25, 50, 75, 100].map((label, i) => (
                        <text
                            key={i}
                            x="30"
                            y={160 - i * 30}
                            fill="#666"
                            fontSize="10"
                            textAnchor="end"
                            dominantBaseline="middle"
                        >
                            {label}%
                        </text>
                    ))}

                    {/* 90% danger threshold line */}
                    <line
                        x1="40"
                        y1="52"
                        x2="560"
                        y2="52"
                        stroke="#ef4444"
                        strokeWidth="2"
                        strokeDasharray="8,4"
                        opacity="0.7"
                    />
                    <text x="565" y="52" fill="#ef4444" fontSize="10" dominantBaseline="middle">
                        90%
                    </text>

                    {/* Filled area under curve */}
                    {curvePath && (
                        <motion.path
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            d={`${curvePath} L 560 160 L 40 160 Z`}
                            fill="url(#curveGradient)"
                        />
                    )}

                    {/* Main curve line */}
                    <motion.path
                        d={curvePath}
                        fill="none"
                        stroke={getRetentionColor(currentRetention)}
                        strokeWidth="3"
                        strokeLinecap="round"
                        filter="url(#glow)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    />

                    {/* Data points */}
                    {animatedPoints.map((point, i) => {
                        const x = 40 + (i / (curvePoints.length - 1)) * 520;
                        const y = 40 + (1 - point.retention) * 120;

                        return (
                            <motion.g
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: (i / curvePoints.length) * 2, duration: 0.3 }}
                                onMouseEnter={() => setHoveredPoint(i)}
                                onMouseLeave={() => setHoveredPoint(null)}
                                className="cursor-pointer"
                            >
                                {/* Review spike indicator */}
                                {point.reviewed && (
                                    <motion.line
                                        x1={x}
                                        y1={y}
                                        x2={x}
                                        y2="160"
                                        stroke="#22c55e"
                                        strokeWidth="2"
                                        strokeDasharray="4,2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.5 }}
                                    />
                                )}

                                {/* Point circle */}
                                <circle
                                    cx={x}
                                    cy={y}
                                    r={hoveredPoint === i ? 8 : 5}
                                    fill={point.reviewed ? "#22c55e" : getRetentionColor(point.retention)}
                                    className="transition-all duration-200"
                                />

                                {/* Tooltip on hover */}
                                {hoveredPoint === i && (
                                    <g>
                                        <rect
                                            x={x - 35}
                                            y={y - 35}
                                            width="70"
                                            height="25"
                                            rx="4"
                                            fill="#1f2937"
                                            stroke="#374151"
                                        />
                                        <text
                                            x={x}
                                            y={y - 18}
                                            fill="white"
                                            fontSize="11"
                                            textAnchor="middle"
                                        >
                                            Day {point.day}: {(point.retention * 100).toFixed(0)}%
                                        </text>
                                    </g>
                                )}
                            </motion.g>
                        );
                    })}

                    {/* X-axis labels */}
                    {curvePoints.filter((_, i) => i % 2 === 0 || i === curvePoints.length - 1).map((point, i, arr) => {
                        const x = 40 + (curvePoints.indexOf(point) / (curvePoints.length - 1)) * 520;
                        return (
                            <text
                                key={i}
                                x={x}
                                y="175"
                                fill="#666"
                                fontSize="10"
                                textAnchor="middle"
                            >
                                Day {point.day}
                            </text>
                        );
                    })}
                </svg>

                {/* Pulsing glow effect */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.02, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(ellipse at 30% 50%, ${getRetentionColor(currentRetention)}20 0%, transparent 50%)`,
                    }}
                />
            </div>

            {/* Status Bar */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-800/50">
                <div className="flex items-center gap-3">
                    <motion.div
                        animate={{
                            scale: currentRetention < 0.7 ? [1, 1.2, 1] : 1,
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: currentRetention < 0.7 ? Infinity : 0,
                            repeatDelay: 1,
                        }}
                    >
                        {currentRetention >= 0.7 ? (
                            <TrendingUp className="w-6 h-6 text-green-400" />
                        ) : (
                            <TrendingDown className="w-6 h-6 text-red-400" />
                        )}
                    </motion.div>
                    <div>
                        <p className="text-white font-medium">{status.text}</p>
                        <p className="text-sm text-gray-400">
                            {nextReviewDays <= 0
                                ? "Review now to boost retention!"
                                : `Next review in ${nextReviewDays} day${nextReviewDays > 1 ? "s" : ""}`}
                        </p>
                    </div>
                </div>

                {onRefresh && (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onRefresh}
                        className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center gap-2 transition-colors"
                    >
                        <Zap className="w-4 h-4" />
                        Quick Review
                    </motion.button>
                )}
            </div>
        </div>
    );
}
