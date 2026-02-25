'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, Lock, Unlock, Flame } from 'lucide-react';

const SAGES = [
    { id: 'brahma', name: 'Brahma', title: 'The Creator', color: 'from-amber-400 to-orange-500' },
    { id: 'vasishtha', name: 'Vasishtha', title: 'The Sage of Light', color: 'from-blue-400 to-indigo-500' },
    { id: 'vishwamitra', name: 'Vishwamitra', title: 'The Seeker of Power', color: 'from-red-400 to-rose-600' },
    { id: 'shringi', name: 'Shringi', title: 'The Pious One', color: 'from-emerald-400 to-teal-500' },
    { id: 'agastya', name: 'Agastya', title: 'The Ocean Drinker', color: 'from-cyan-400 to-blue-600' },
    { id: 'narada', name: 'Narada', title: 'The Divine Singer', color: 'from-purple-400 to-violet-600' },
    { id: 'atri', name: 'Atri', title: 'The Steady One', color: 'from-stone-400 to-stone-600' },
];

interface GayatriShaapVimochanaProps {
    onComplete: () => void;
}

export function GayatriShaapVimochana({ onComplete }: GayatriShaapVimochanaProps) {
    const [tappedSages, setTappedSages] = useState<string[]>([]);
    const [lastTap, setLastTap] = useState<string | null>(null);

    const handleTap = (sageId: string) => {
        if (tappedSages.includes(sageId)) return;

        // Visual/Audio feedback
        if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
            navigator.vibrate(20);
        }

        setLastTap(sageId);
        const newTapped = [...tappedSages, sageId];
        setTappedSages(newTapped);

        if (newTapped.length === SAGES.length) {
            setTimeout(() => {
                onComplete();
            }, 1000);
        }
    };

    return (
        <div className="bg-slate-950 min-h-[400px] rounded-[2.5rem] p-8 border-2 border-amber-900/30 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,60,0,0.1)_0%,_transparent_70%)]" />

            <div className="relative z-10 text-center mb-12">
                <div className="w-16 h-16 bg-amber-950/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
                    <Shield className="w-8 h-8 text-amber-500" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-amber-50 mb-2">Gāyatrī Śāpa Vimocana</h2>
                <p className="text-amber-500/60 text-sm uppercase tracking-[0.2em] font-bold">Release the Curse of the Seven Sages</p>
                <p className="mt-4 text-slate-400 text-sm max-w-md mx-auto italic">
                    "Tap each Sage in sequence to consecrate your consciousness for the supreme wisdom."
                </p>
            </div>

            {/* Sages Grid */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 w-full max-w-5xl">
                {SAGES.map((sage, idx) => {
                    const isTapped = tappedSages.includes(sage.id);
                    const isLatest = lastTap === sage.id;

                    return (
                        <motion.button
                            key={sage.id}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleTap(sage.id)}
                            className={`flex flex-col items-center group transition-all duration-700 ${isTapped ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                        >
                            <div className="relative w-16 h-16 mb-4">
                                {/* Sage Aura */}
                                <AnimatePresence>
                                    {isTapped && (
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1.5, opacity: 0.2 }}
                                            className={`absolute inset-0 bg-gradient-to-br ${sage.color} rounded-full blur-xl`}
                                        />
                                    )}
                                </AnimatePresence>

                                {/* Sage Icon/Circle */}
                                <div className={`w-full h-full rounded-full border-2 flex items-center justify-center transition-all duration-500 ${isTapped ? `bg-gradient-to-br ${sage.color} border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]` : 'bg-slate-900 border-amber-900/50'}`}>
                                    {isTapped ? (
                                        <Unlock className="w-6 h-6 text-white" />
                                    ) : (
                                        <Lock className="w-6 h-6 text-amber-900/50 group-hover:text-amber-500" />
                                    )}
                                </div>

                                {isLatest && (
                                    <motion.div
                                        layoutId="ripple"
                                        className="absolute inset-0 rounded-full border-2 border-white"
                                        initial={{ scale: 1, opacity: 1 }}
                                        animate={{ scale: 2, opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                    />
                                )}
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-widest text-center ${isTapped ? 'text-white' : 'text-slate-500'}`}>
                                {sage.name}
                            </span>
                            <span className="text-[8px] text-slate-600 mt-1">{sage.title}</span>
                        </motion.button>
                    );
                })}
            </div>

            {/* Completion Indicator */}
            <div className="mt-16 w-full max-w-md bg-slate-900/50 h-1.5 rounded-full overflow-hidden border border-white/5 relative z-10">
                <motion.div
                    className="h-full bg-gradient-to-r from-amber-600 to-orange-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${(tappedSages.length / SAGES.length) * 100}%` }}
                />
            </div>
            <p className="mt-4 text-xs font-mono text-slate-500 uppercase tracking-widest relative z-10">
                {tappedSages.length} of 7 Seals Lifted
            </p>

            {/* Final Unlock Reveal */}
            <AnimatePresence>
                {tappedSages.length === SAGES.length && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 relative z-10 flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 px-6 py-3 rounded-full"
                    >
                        <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                        <span className="text-emerald-400 font-bold text-sm tracking-widest uppercase">Gāyatrī is Now Accessible</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
