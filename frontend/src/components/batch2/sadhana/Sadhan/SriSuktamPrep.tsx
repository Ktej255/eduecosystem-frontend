"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Star, Calendar, CheckCircle2, Trophy, Clock, Lock, Sparkles, Droplets, Shield, Info } from 'lucide-react';
import { useSadhanaProgress } from '../hooks/useSadhanaProgress';

const TOTAL_DAYS = 960;

export default function SriSuktamPrep() {
    const { progress, updateSriSuktamPrep } = useSadhanaProgress();
    const [isCheckingIn, setIsCheckingIn] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Calculate progress
    const streak = progress.sriSuktamPrepStreak || 0;
    const percent = Math.min((streak / TOTAL_DAYS) * 100, 100);
    const daysRemaining = TOTAL_DAYS - streak;

    // Check if already checked in today
    const lastActivity = progress.lastSriSuktamActivity;
    const isToday = lastActivity ? new Date(lastActivity).toDateString() === new Date().toDateString() : false;

    const handleCheckIn = async () => {
        if (isToday) return;
        setIsCheckingIn(true);

        // Artificial delay for cinematic feel
        await new Promise(r => setTimeout(r, 2000));

        updateSriSuktamPrep();
        setIsCheckingIn(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
    };

    return (
        <div className="min-h-screen bg-[#0A0500] text-amber-50 selection:bg-orange-500/30">
            {/* Cinematic Header */}
            <div className="relative h-[40vh] flex flex-col items-center justify-center overflow-hidden border-b border-orange-500/20">
                <div className="absolute inset-0 bg-[url('/bg-patterns/lotus-geometry.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#0A0500]" />

                {/* Glowing Sun Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 text-center px-6"
                >
                    <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-orange-500/30 backdrop-blur-md">
                        <Droplets className="w-8 h-8 text-orange-400" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-orange-300 to-amber-500 mb-4">
                        960-Day Discipline
                    </h1>
                    <p className="text-amber-200/60 font-sans uppercase tracking-[0.4em] text-xs font-black">
                        The Preparation of Sri Suktam
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-24">
                <div className="grid lg:grid-cols-12 gap-10">

                    {/* Left Column: Stats & Action */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Sparkles className="w-24 h-24 text-orange-400" />
                            </div>

                            <div className="mb-12">
                                <h2 className="text-sm font-sans font-bold uppercase tracking-[0.3em] text-orange-500/70 mb-2">Current Streak</h2>
                                <div className="flex items-baseline gap-4">
                                    <span className="text-7xl font-serif font-black text-white">{streak}</span>
                                    <span className="text-amber-200/40 font-serif text-xl">/ {TOTAL_DAYS} Days</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${percent}%` }}
                                        className="h-full bg-gradient-to-r from-orange-600 via-amber-400 to-orange-600 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                                    />
                                </div>
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-amber-200/40">
                                    <span>Initiated</span>
                                    <span>{percent.toFixed(1)}% Harmonized</span>
                                    <span>Portal Access</span>
                                </div>
                            </div>

                            {/* Check-In Button */}
                            <div className="mt-12">
                                <button
                                    disabled={isToday || isCheckingIn}
                                    onClick={handleCheckIn}
                                    className={`w-full relative group overflow-hidden py-8 rounded-3xl border-2 transition-all duration-500 transform active:scale-95 ${isToday
                                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 cursor-default'
                                        : 'bg-orange-600 border-orange-500 text-white shadow-[0_20px_40px_-15px_rgba(234,88,12,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(234,88,12,0.6)]'
                                        }`}
                                >
                                    <AnimatePresence mode="wait">
                                        {isCheckingIn ? (
                                            <motion.div
                                                key="checking"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="flex items-center justify-center gap-3"
                                            >
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                <span className="font-sans font-black uppercase tracking-[0.3em] text-sm">Aligning Energy...</span>
                                            </motion.div>
                                        ) : isToday ? (
                                            <motion.div
                                                key="done"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="flex items-center justify-center gap-3"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                                <span className="font-sans font-black uppercase tracking-[0.3em] text-sm text-emerald-400">Harmonized for Today</span>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="checkin"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="flex items-center justify-center gap-3"
                                            >
                                                <Flame className="w-5 h-5 group-hover:scale-125 transition-transform" />
                                                <span className="font-sans font-black uppercase tracking-[0.3em] text-sm">Perform Daily Check-in</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                                {!isToday && (
                                    <p className="mt-4 text-center text-xs text-amber-200/30 font-medium">Verify your daily discipline to advance the streak.</p>
                                )}
                            </div>
                        </div>

                        {/* Milestones Card */}
                        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 space-y-6">
                            <h3 className="text-xs font-sans font-black uppercase tracking-[0.4em] text-white/40 mb-6">Ascension Milestones</h3>
                            {[
                                { day: 40, title: 'Prarthana Siddhi', desc: 'Prayer alignment begins.', icon: Star },
                                { day: 108, title: 'Nadi Parishuddhi', desc: 'Purification of energy channels.', icon: Droplets },
                                { day: 360, title: 'Bhakti Rasa', desc: 'Emotional depth in recitation.', icon: Sparkles },
                                { day: 960, title: 'Sri Suktam Portal', desc: 'Eligibility for the 16-night ritual.', icon: Shield },
                            ].map((m, i) => {
                                const isReached = streak >= m.day;
                                const Icon = m.icon;
                                return (
                                    <div key={m.day} className={`flex items-start gap-4 transition-opacity ${isReached ? 'opacity-100' : 'opacity-30'}`}>
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${isReached ? 'bg-orange-500/20 border-orange-500/40 text-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.2)]' : 'bg-white/5 border-white/10 text-white/20'}`}>
                                            {isReached ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className="font-bold text-sm text-white">{m.title}</h4>
                                                <span className="text-[10px] font-black text-amber-500/80">Day {m.day}</span>
                                            </div>
                                            <p className="text-xs text-white/40 mt-0.5">{m.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Grid Map */}
                    <div className="lg:col-span-7">
                        <div className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-8 h-full">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="font-serif text-2xl font-bold text-white">Journey Map</h3>
                                    <p className="text-xs text-white/40 mt-1">Visualization of the 960-day convergence.</p>
                                </div>
                                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                                        <span className="text-white/40">Complete</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-white/5 border border-white/10 rounded-full" />
                                        <span className="text-white/40">Pending</span>
                                    </div>
                                </div>
                            </div>

                            {/* The Infinite Grid */}
                            <div
                                className="gap-1 overflow-hidden"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(30, minmax(0, 1fr))'
                                }}
                            >
                                {Array.from({ length: 960 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`aspect-square rounded-sm transition-all duration-300 ${i < streak
                                            ? 'bg-gradient-to-br from-orange-400 to-orange-600 shadow-[0_0_5px_rgba(251,146,60,0.3)]'
                                            : i === streak
                                                ? 'bg-white/10 border border-orange-500/50 animate-pulse'
                                                : 'bg-white/[0.03] border border-white/[0.03] hover:bg-white/10'
                                            }`}
                                        title={`Day ${i + 1}`}
                                    />
                                ))}
                            </div>


                            <div className="mt-12 bg-orange-500/5 border border-orange-500/10 p-6 rounded-3xl">
                                <div className="flex items-start gap-4">
                                    <Info className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                    <div className="text-xs text-amber-200/60 leading-relaxed font-medium">
                                        The 960-day preparation establishes the vessel required to contain the energy of <span className="text-orange-400 font-bold">1.25 million Sri Suktam recitations</span>. Every check-in is a brick in your spiritual foundation. If you miss a day, the fire cools, and the streak may reset depending on your current phase.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Success Overlay */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 px-8 py-4 bg-emerald-500 text-white rounded-full shadow-2xl flex items-center gap-3 font-black uppercase tracking-widest text-xs"
                    >
                        <Trophy className="w-5 h-5" />
                        Energy Harmonized for Day {streak}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
