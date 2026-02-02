"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Play, Star, Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MeditationLevel } from '../store/MeditationProgressionStore';

interface MeditationLevelCardProps {
    level: MeditationLevel;
    isUnlocked: boolean;
    userCoins: number;
    onUnlock: (id: number) => void;
    onPlay: (id: number) => void;
}

export default function MeditationLevelCard({
    level,
    isUnlocked,
    userCoins,
    onUnlock,
    onPlay
}: MeditationLevelCardProps) {
    const canAfford = userCoins >= level.unlockPrice;

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`
                relative overflow-hidden rounded-3xl p-6 border transition-all duration-300
                ${isUnlocked
                    ? 'bg-neutral-900 border-neutral-700 shadow-xl'
                    : 'bg-neutral-950 border-neutral-800 opacity-90'
                }
            `}
        >
            {/* Background Glow */}
            <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${level.color} rounded-full blur-[60px] opacity-20`} />

            {/* Header */}
            <div className="relative z-10 flex justify-between items-start mb-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 text-white/70`}>
                            Level {level.id}
                        </span>
                        {isUnlocked && <Check className="w-4 h-4 text-emerald-500" />}
                    </div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent`}>
                        {level.name}
                    </h3>
                    <p className="text-sm text-neutral-400 font-medium uppercase tracking-wide">
                        {level.theme}
                    </p>
                </div>
                {isUnlocked ? (
                    <div className="p-3 bg-gradient-to-br from-white/10 to-transparent rounded-full border border-white/5">
                        <Play className="w-6 h-6 text-white pill-current" fill="currentColor" />
                    </div>
                ) : (
                    <div className="p-3 bg-neutral-800 rounded-full border border-neutral-700">
                        <Lock className="w-6 h-6 text-neutral-500" />
                    </div>
                )}
            </div>

            {/* Description */}
            <p className="relative z-10 text-neutral-400 text-sm leading-relaxed mb-8 h-16 line-clamp-3">
                {level.description}
            </p>

            {/* CTA */}
            <div className="relative z-10 mt-auto">
                {isUnlocked ? (
                    <Button
                        onClick={() => onPlay(level.id)}
                        className={`w-full h-12 rounded-xl text-white font-bold bg-gradient-to-r ${level.color} hover:opacity-90 hover:scale-[1.02] transition-all`}
                    >
                        Enter Sanctum
                    </Button>
                ) : (
                    <Button
                        onClick={() => onUnlock(level.id)}
                        disabled={!canAfford}
                        className={`
                            w-full h-12 rounded-xl font-bold border-2 transition-all
                            ${canAfford
                                ? 'bg-transparent border-white/20 text-white hover:bg-white/5 hover:border-white/40'
                                : 'bg-neutral-900 border-neutral-800 text-neutral-600 cursor-not-allowed'
                            }
                        `}
                    >
                        <div className="flex items-center justify-between w-full px-4">
                            <span>Unlock</span>
                            <div className="flex items-center gap-1.5">
                                <Star className={`w-4 h-4 ${canAfford ? 'text-yellow-400' : 'text-neutral-600'}`} fill="currentColor" />
                                <span>{level.unlockPrice}</span>
                            </div>
                        </div>
                    </Button>
                )}
            </div>
        </motion.div>
    );
}
