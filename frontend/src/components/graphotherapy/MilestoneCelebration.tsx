"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Sparkles, X, Star, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';

interface MilestoneCelebrationProps {
    day: number;
    isOpen: boolean;
    onClose: () => void;
}

export default function MilestoneCelebration({ day, isOpen, onClose }: MilestoneCelebrationProps) {
    const [reward, setReward] = useState({ title: "", body: "", coins: 0 });

    useEffect(() => {
        if (isOpen) {
            // Trigger confetti
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#22c55e', '#fbbf24', '#3b82f6']
            });

            // Set milestone data
            if (day === 7) {
                setReward({
                    title: "The First Wave",
                    body: "You've successfully completed Week 1. Your neurological foundation is set.",
                    coins: 1000
                });
            } else if (day === 14) {
                setReward({
                    title: "Internal Momentum",
                    body: "14 days of consistent practice. Your subconscious is actively rewiring.",
                    coins: 2500
                });
            } else if (day === 21) {
                setReward({
                    title: "Foundation Mastered",
                    body: "Level 1 Complete. You have achieved 21 days of transformation.",
                    coins: 5000
                });
            }
        }
    }, [isOpen, day]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        className="relative bg-neutral-900 border border-white/10 w-full max-w-md rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(34,197,94,0.2)]"
                    >
                        {/* Header Gradient */}
                        <div className="h-32 bg-gradient-to-b from-green-600/20 to-transparent flex items-center justify-center">
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Trophy className="w-16 h-16 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                            </motion.div>
                        </div>

                        <div className="px-8 pb-10 text-center">
                            <h2 className="text-3xl font-black text-white mb-2">Milestone Reached!</h2>
                            <div className="inline-flex items-center gap-2 px-4 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-widest mb-6">
                                <Star className="w-3 h-3 fill-green-400" />
                                Day {day} Completed
                            </div>

                            <div className="space-y-4 mb-8">
                                <h3 className="text-xl font-bold text-white">{reward.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    {reward.body}
                                </p>
                            </div>

                            <div className="bg-neutral-800/50 rounded-3xl p-6 border border-white/5 mb-8">
                                <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mb-2">Transformation Reward</div>
                                <div className="flex items-center justify-center gap-2">
                                    <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                                    <span className="text-4xl font-black text-white">+{reward.coins}</span>
                                    <span className="text-sm font-bold text-neutral-500 uppercase">Coins</span>
                                </div>
                            </div>

                            <Button 
                                onClick={onClose}
                                className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-6 rounded-2xl shadow-xl shadow-green-900/20 transition-all active:scale-95"
                            >
                                Continue Journey
                            </Button>
                        </div>

                        <button 
                            onClick={onClose}
                            className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
