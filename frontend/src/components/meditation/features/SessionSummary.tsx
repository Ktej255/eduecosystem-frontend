"use client";

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CheckCircle, Share2, Home, Sparkles } from 'lucide-react';
import { MEDITATION_THEME } from '../theme/MeditationTheme';
import Link from 'next/link';

interface SessionSummaryProps {
    durationMinutes: number;
    karmaEarned: number;
    onExit: () => void;
    levelName: string;
}

export default function SessionSummary({
    durationMinutes,
    karmaEarned,
    onExit,
    levelName
}: SessionSummaryProps) {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md text-white pointer-events-auto p-6"
        >
            {/* Celebration Icon */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mb-8 ring-4 ring-emerald-500/50 relative"
            >
                <CheckCircle className="w-12 h-12 text-emerald-400" />

                {/* Particle Burst Mockup */}
                <div className="absolute inset-0 animate-ping opacity-20 rounded-full bg-emerald-400" />
            </motion.div>

            {/* Text Content */}
            <div className="text-center space-y-4 mb-10 max-w-md">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-200 via-white to-emerald-200 bg-clip-text text-transparent">
                    {levelName} Complete
                </h2>
                <p className="text-emerald-100/60 text-lg">
                    You've cultivated mindfulness for <span className="text-white font-medium">{durationMinutes} minutes</span> today.
                </p>
            </div>

            {/* Rewards Card */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/10 ${MEDITATION_THEME.gradients.glassCard} mb-12`}
            >
                <div className="p-3 rounded-full bg-yellow-500/20 text-yellow-400">
                    <Sparkles className="w-6 h-6" />
                </div>
                <div className="text-left">
                    <p className="text-xs uppercase tracking-wider text-yellow-500/80 font-bold">Reward</p>
                    <p className="text-2xl font-bold text-yellow-100">+{karmaEarned} Karma</p>
                </div>
            </motion.div>

            {/* Actions */}
            <div className="flex gap-4">
                <Button
                    onClick={onExit}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-emerald-900/50 transition-all hover:scale-105 flex items-center gap-2"
                >
                    <Home className="w-5 h-5" />
                    Return to Sanctum
                </Button>
                <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 px-6 py-6 rounded-full text-lg"
                    title="Share Achievement"
                >
                    <Share2 className="w-5 h-5" />
                </Button>
            </div>
        </motion.div>
    );
}
