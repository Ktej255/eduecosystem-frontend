"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

interface ProcessTimerProps {
    durationSeconds: number;
    onComplete: () => void;
    isPaused?: boolean;
    processName: string;
    processIndex: number;
    totalProcesses: number;
}

export default function ProcessTimer({
    durationSeconds,
    onComplete,
    isPaused = false,
    processName,
    processIndex,
    totalProcesses
}: ProcessTimerProps) {
    const [remainingSeconds, setRemainingSeconds] = useState(durationSeconds);
    const [isComplete, setIsComplete] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const hasCompletedRef = useRef(false);

    const progress = ((durationSeconds - remainingSeconds) / durationSeconds) * 100;

    // Format time as MM:SS
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Get color based on remaining time
    const getTimerColor = (): string => {
        const percentRemaining = (remainingSeconds / durationSeconds) * 100;
        if (percentRemaining > 50) return "#3B82F6"; // Blue
        if (percentRemaining > 20) return "#10B981"; // Green
        return "#F59E0B"; // Orange/Amber
    };

    // Timer countdown logic
    useEffect(() => {
        if (isPaused || isComplete) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            return;
        }

        intervalRef.current = setInterval(() => {
            setRemainingSeconds((prev) => {
                if (prev <= 1) {
                    if (!hasCompletedRef.current) {
                        hasCompletedRef.current = true;
                        setIsComplete(true);
                        setTimeout(() => onComplete(), 100);
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused, isComplete, onComplete]);

    // Reset on duration change
    useEffect(() => {
        setRemainingSeconds(durationSeconds);
        setIsComplete(false);
        hasCompletedRef.current = false;
    }, [durationSeconds, processName]);

    const radius = 120;
    const strokeWidth = 8;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            {/* Process Name */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                key={processName}
                className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
            >
                {processName}
            </motion.h1>

            {/* Circular Timer */}
            <div className="relative">
                {/* Breathing animation background */}
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: `radial-gradient(circle, ${getTimerColor()}20 0%, transparent 70%)`,
                        transform: "scale(1.5)"
                    }}
                />

                <svg
                    width={radius * 2 + strokeWidth * 2}
                    height={radius * 2 + strokeWidth * 2}
                    className="transform -rotate-90"
                >
                    {/* Background circle */}
                    <circle
                        cx={radius + strokeWidth}
                        cy={radius + strokeWidth}
                        r={radius}
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth={strokeWidth}
                    />
                    {/* Progress circle */}
                    <motion.circle
                        cx={radius + strokeWidth}
                        cy={radius + strokeWidth}
                        r={radius}
                        fill="none"
                        stroke={getTimerColor()}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 0.5, ease: "linear" }}
                        style={{
                            filter: `drop-shadow(0 0 10px ${getTimerColor()})`
                        }}
                    />
                </svg>

                {/* Time display in center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                        key={remainingSeconds}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        className="text-5xl md:text-6xl font-mono font-bold text-white"
                    >
                        {formatTime(remainingSeconds)}
                    </motion.span>
                    <span className="text-sm text-muted-foreground mt-2">
                        {isPaused ? "PAUSED" : "REMAINING"}
                    </span>
                </div>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-2 mt-10">
                {Array.from({ length: totalProcesses }).map((_, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ scale: 0.8 }}
                        animate={{
                            scale: idx === processIndex ? 1.2 : 1,
                            backgroundColor: idx < processIndex
                                ? "#10B981" // Completed - green
                                : idx === processIndex
                                    ? "#3B82F6" // Current - blue
                                    : "rgba(255,255,255,0.2)" // Upcoming - dimmed
                        }}
                        className="w-3 h-3 rounded-full transition-all"
                    />
                ))}
            </div>

            {/* Process counter */}
            <p className="text-muted-foreground mt-4">
                Process {processIndex + 1} of {totalProcesses}
            </p>
        </div>
    );
}
