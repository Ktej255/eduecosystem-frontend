"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Play, Pause, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Level1Props {
    onExit: () => void;
    onComplete: (minutes: number) => void;
}

export default function Level1_Breathing({ onExit, onComplete }: Level1Props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');
    const [timeLeft, setTimeLeft] = useState(300); // 5 Minutes default
    const [sessionComplete, setSessionComplete] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isPlaying && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        setIsPlaying(false);
                        setSessionComplete(true);
                        onComplete(5); // Log 5 mins
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isPlaying, timeLeft, onComplete]);

    // Breath Cycle Logic (4-4-4 Box Breathing Mock)
    useEffect(() => {
        if (!isPlaying) return;
        const cycle = setInterval(() => {
            setPhase(p => p === 'Inhale' ? 'Hold' : p === 'Hold' ? 'Exhale' : 'Inhale');
        }, 4000); // Change every 4 seconds
        return () => clearInterval(cycle);
    }, [isPlaying]);

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    if (sessionComplete) {
        return (
            <div className="h-full w-full flex flex-col items-center justify-center bg-teal-950 text-white">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center space-y-6"
                >
                    <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto ring-4 ring-emerald-500/50">
                        <CheckCircle className="w-12 h-12 text-emerald-400" />
                    </div>
                    <h2 className="text-4xl font-bold">Session Complete</h2>
                    <p className="text-emerald-200 text-xl">+50 Karma Coins Earned</p>
                    <Button onClick={onExit} size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 rounded-full">
                        Return to Sanctum
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="h-full w-full relative flex flex-col items-center justify-center bg-gradient-to-b from-teal-900 to-slate-900 text-white overflow-hidden">
            {/* Ambient Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    animate={{
                        scale: isPlaying ? [1, 1.5, 1] : 1,
                        opacity: isPlaying ? [0.3, 0.1, 0.3] : 0.1
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[800px] h-[800px] border border-teal-500/20 rounded-full"
                />
                <motion.div
                    animate={{
                        scale: isPlaying ? [1, 1.2, 1] : 1,
                        opacity: isPlaying ? [0.4, 0.2, 0.4] : 0.2
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute w-[600px] h-[600px] border border-teal-500/30 rounded-full"
                />
            </div>

            {/* Controls */}
            <button onClick={onExit} className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-white/10 rounded-full transition z-50">
                <X className="w-6 h-6 text-white" />
            </button>

            {/* Central Breather */}
            <div className="relative z-10 flex flex-col items-center space-y-12">
                <div className="text-xl font-medium tracking-[0.2em] text-teal-200 uppercase opacity-80">
                    {isPlaying ? phase : "Ready"}
                </div>

                <motion.div
                    animate={{
                        scale: isPlaying ? (phase === 'Inhale' ? 1.5 : phase === 'Exhale' ? 1 : 1.5) : 1,
                        rotate: isPlaying ? 360 : 0
                    }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut"
                    }}
                    className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 shadow-[0_0_80px_rgba(45,212,191,0.4)] flex items-center justify-center backdrop-blur-md"
                >
                    <div className="text-4xl font-bold font-mono tracking-wider">
                        {formatTime(timeLeft)}
                    </div>
                </motion.div>

                <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 rounded-full bg-white text-teal-900 hover:scale-105 transition-transform flex items-center justify-center shadow-lg"
                >
                    {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                </Button>
            </div>
        </div>
    );
}
