"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Trophy,
    Flame,
    Clock,
    CheckCircle2,
    ArrowRight,
    Share2,
    Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SessionSummaryProps {
    processesCompleted: number;
    totalDuration: number; // in minutes
    currentStreak: number;
    dayNumber: number;
    levelNumber: number;
    isNewStreak: boolean;
}

export default function SessionSummary({
    processesCompleted,
    totalDuration,
    currentStreak,
    dayNumber,
    levelNumber,
    isNewStreak
}: SessionSummaryProps) {
    const stats = [
        {
            icon: CheckCircle2,
            label: "Processes",
            value: processesCompleted,
            color: "text-green-400",
            bgColor: "bg-green-500/20"
        },
        {
            icon: Clock,
            label: "Duration",
            value: `${totalDuration} min`,
            color: "text-blue-400",
            bgColor: "bg-blue-500/20"
        },
        {
            icon: Flame,
            label: "Streak",
            value: `${currentStreak} days`,
            color: "text-orange-400",
            bgColor: "bg-orange-500/20"
        },
        {
            icon: Calendar,
            label: "Progress",
            value: `Day ${dayNumber}`,
            color: "text-purple-400",
            bgColor: "bg-purple-500/20"
        }
    ];

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
            style={{ backgroundColor: '#0a0a0a' }}
        >
            {/* Success Animation */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                }}
                className="w-28 h-28 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(34,197,94,0.4)]"
            >
                <Trophy className="w-14 h-14 text-white" />
            </motion.div>

            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-8"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Session Complete!
                </h1>
                <p className="text-gray-400 text-lg">
                    Level {levelNumber} • Day {dayNumber}
                </p>
            </motion.div>

            {/* Streak celebration */}
            {isNewStreak && currentStreak > 1 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30"
                >
                    <div className="flex items-center gap-2 text-orange-400">
                        <Flame className="w-5 h-5" />
                        <span className="font-bold">{currentStreak} Day Streak!</span>
                        <span className="text-sm text-orange-300">Keep it up!</span>
                    </div>
                </motion.div>
            )}

            {/* Stats Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl mb-10"
            >
                {stats.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-2xl p-4 text-center"
                    >
                        <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center mx-auto mb-3`}>
                            <stat.icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Motivational message */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mb-8 max-w-md"
            >
                <p className="text-gray-400 italic">
                    "The mind is everything. What you think, you become."
                </p>
                <p className="text-gray-500 text-sm mt-1">— Buddha</p>
            </motion.div>

            {/* Action buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <Button
                    variant="outline"
                    className="border-gray-700 text-gray-400 hover:text-white px-6"
                >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Progress
                </Button>
                <Link href="/student/meditation">
                    <Button
                        size="lg"
                        className="px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
                    >
                        Continue
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
            </motion.div>

            {/* Background effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%)'
                    }}
                />
            </div>
        </div>
    );
}
