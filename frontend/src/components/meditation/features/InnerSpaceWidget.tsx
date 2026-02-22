"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { useMeditationStore } from '../store/MeditationProgressionStore';
import { meditationService } from '@/services/meditationService';
import Link from 'next/link';

export default function InnerSpaceWidget() {
    const { streakDays, karmaCoins, unlockedLevels, syncPurchases } = useMeditationStore();
    const [correlation, setCorrelation] = useState<any>(null);

    useEffect(() => {
        syncPurchases();
        const fetchCorrelation = async () => {
            try {
                const data = await meditationService.getFocusCorrelation(7);
                if (data.length > 0) {
                    // Simple logic to find average focus and highest completion days
                    const avgFocus = data.reduce((acc, curr) => acc + curr.focus_score, 0) / data.length;
                    setCorrelation({ avgFocus: avgFocus.toFixed(1) });
                }
            } catch (error) {
                console.error("InnerSpaceWidget: Failed to fetch correlation", error);
            }
        };
        fetchCorrelation();
    }, [syncPurchases]);

    const maxLevel = Math.max(...unlockedLevels, 1);

    return (
        <Link href="/student/meditation">
            <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900/20 via-neutral-900 to-black border border-indigo-500/20 p-5 group transition-all"
            >
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-indigo-500/20 transition-all" />

                <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Brain className="w-5 h-5 text-indigo-400" />
                            <h3 className="text-lg font-bold text-white/90">Inner Space</h3>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Consciousness</span>
                                <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Level {maxLevel}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Mindfulness Streak</span>
                                <span className="text-xl font-bold text-white">{streakDays} Days</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Karma</span>
                                <span className="text-xl font-bold text-yellow-500/80">{karmaCoins.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-64 bg-card/5 border border-white/10 rounded-xl p-3 flex items-start gap-4">
                        <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-white/60 mb-1 leading-snug">
                                {correlation
                                    ? `Your focus average is ${correlation.avgFocus}/10. Keep meditating to boost academic output.`
                                    : "Meditation data syncing... Start your morning session to see focus insights."}
                            </p>
                            <div className="flex items-center gap-1 text-[10px] font-bold text-indigo-400 uppercase tracking-tighter">
                                <Zap className="w-3 h-3" />
                                <span>Insight Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
