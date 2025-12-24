"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Moon,
    Smartphone,
    Volume2,
    Eye,
    Sparkles,
    Play,
    Clock,
    CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface PreSessionScreenProps {
    onStart: (timeSlot: string) => void;
    processCount: number;
    estimatedDuration: number; // in minutes
    isUnlockDay: boolean;
    newProcessCount?: number;
}

const TIME_SLOTS = [
    { id: "5-6", label: "5:00 AM", sublabel: "Brahma Muhurta" },
    { id: "6-7", label: "6:00 AM", sublabel: "Dawn Practice" },
    { id: "7-8", label: "7:00 AM", sublabel: "Morning Session" }
];

const GUIDELINES = [
    { icon: Smartphone, text: "Put your phone on Do Not Disturb", color: "text-red-400" },
    { icon: Volume2, text: "Use headphones for best experience", color: "text-blue-400" },
    { icon: Eye, text: "Close your eyes after each announcement", color: "text-purple-400" },
    { icon: Moon, text: "Find a quiet, comfortable place", color: "text-indigo-400" }
];

export default function PreSessionScreen({
    onStart,
    processCount,
    estimatedDuration,
    isUnlockDay,
    newProcessCount = 0
}: PreSessionScreenProps) {
    const [selectedSlot, setSelectedSlot] = useState<string>("6-7");
    const [acknowledged, setAcknowledged] = useState(false);

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
            style={{ backgroundColor: '#0a0a0a' }}
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4" />
                    {isUnlockDay ? `${newProcessCount} New Processes Today` : "Daily Practice"}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Prepare for Your Session
                </h1>
                <p className="text-gray-400">
                    {processCount} processes • ~{estimatedDuration} minutes
                </p>
            </motion.div>

            {/* Guidelines Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-full max-w-md bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 mb-6"
            >
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    Before You Begin
                </h2>
                <div className="space-y-3">
                    {GUIDELINES.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-neutral-800/50"
                        >
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                            <span className="text-gray-300 text-sm">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Time Slot Selection */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full max-w-md bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 mb-6"
            >
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                    Select Your Session Time
                </h2>
                <div className="grid grid-cols-3 gap-3">
                    {TIME_SLOTS.map((slot) => (
                        <button
                            key={slot.id}
                            onClick={() => setSelectedSlot(slot.id)}
                            className={`
                                p-4 rounded-xl border-2 transition-all text-center
                                ${selectedSlot === slot.id
                                    ? 'border-indigo-500 bg-indigo-500/20 text-white'
                                    : 'border-neutral-700 bg-neutral-800/50 text-gray-400 hover:border-neutral-600'
                                }
                            `}
                        >
                            <div className="text-lg font-bold">{slot.label}</div>
                            <div className="text-xs opacity-70">{slot.sublabel}</div>
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Acknowledgment */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full max-w-md mb-6"
            >
                <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                    <input
                        type="checkbox"
                        checked={acknowledged}
                        onChange={(e) => setAcknowledged(e.target.checked)}
                        className="w-5 h-5 rounded accent-indigo-500"
                    />
                    <span className="text-gray-300 text-sm">
                        I am in a quiet place and ready to begin my practice
                    </span>
                </label>
            </motion.div>

            {/* Start Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
            >
                <Button
                    size="lg"
                    disabled={!acknowledged}
                    onClick={() => onStart(selectedSlot)}
                    className={`
                        px-10 py-6 text-lg font-bold rounded-2xl
                        ${acknowledged
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-[0_0_30px_rgba(99,102,241,0.3)]'
                            : 'bg-neutral-700 cursor-not-allowed'
                        }
                    `}
                >
                    <Play className="w-5 h-5 mr-2" />
                    Begin Session
                </Button>
            </motion.div>

            {/* Subtle breathing animation */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="fixed inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, transparent 50%)'
                }}
            />
        </div>
    );
}
