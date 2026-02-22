"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Play, Star, Sparkles, Check, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MeditationLevel } from '../store/MeditationProgressionStore';

interface MeditationLevelCardProps {
    level: MeditationLevel;
    isUnlocked: boolean;
    onUnlock: (id: number) => void;
    onPlay: (id: number) => void;
}

export default function MeditationLevelCard({
    level,
    isUnlocked,
    onUnlock,
    onPlay
}: MeditationLevelCardProps) {
    // Pricing configuration based on Phase 2 decisions
    const getPrice = (id: number) => {
        switch (id) {
            case 1: return 999;
            case 2: return 1499;
            case 3: return 1999;
            case 4: return 2499;
            default: return 999;
        }
    };

    const price = getPrice(level.id);

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
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-card/5 border border-white/10 text-white/70`}>
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
                        className={`
                            w-full h-12 rounded-xl font-bold border-2 transition-all
                            bg-neutral-900 border-neutral-800 text-white hover:bg-neutral-800 hover:border-neutral-600
                        `}
                    >
                        <div className="flex items-center justify-between w-full px-4">
                            <span>Unlock Access</span>
                            <div className="flex items-center gap-1.5">
                                <span className="text-yellow-400 font-bold">₹{price}</span>
                            </div>
                        </div>
                    </Button>
                )}
            </div>
        </motion.div>
    );
}
