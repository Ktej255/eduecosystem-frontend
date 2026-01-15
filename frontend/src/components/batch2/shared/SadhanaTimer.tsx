"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, Wind } from "lucide-react";

interface SadhanaTimerProps {
    duration?: number; // in seconds
    title?: string;
    onComplete?: (reportData: any) => void;
}

const SOUNDSCAPES = [
    { id: "none", name: "Silence", url: "" },
    { id: "tanpura", name: "Tanpura (Bhimpalasi)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" }, // Placeholder
    { id: "om", name: "Deep OM", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }, // Placeholder
];

const PHASES = [
    { name: "Preparation (Sthira)", color: "text-emerald-400", duration: 0.15 },
    { name: "Contemplation (Vichara)", color: "text-amber-400", duration: 0.70 },
    { name: "Integration (Ananda)", color: "text-indigo-400", duration: 0.15 },
];

export default function SadhanaTimer({ duration = 300, title = "Upanishadic Contemplation", onComplete }: SadhanaTimerProps) {
    const [timeLeft, setTimeLeft] = useState(duration);
    const [isActive, setIsActive] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [selectedSound, setSelectedSound] = useState(SOUNDSCAPES[1]); // Default to Tanpura
    const [phaseIndex, setPhaseIndex] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const progress = ((duration - timeLeft) / duration) * 100;
    const radius = 120;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    useEffect(() => {
        if (isActive && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);

            // Audio Logic
            if (audioRef.current && !isMuted) {
                audioRef.current.play().catch(e => console.log("Audio play blocked", e));
            }
        } else {
            if (timerRef.current) clearInterval(timerRef.current);
            if (audioRef.current) audioRef.current.pause();

            if (timeLeft === 0 && isActive) {
                setIsActive(false);
                if (onComplete) onComplete({ timeSpent: duration, soundUsed: selectedSound.name });
            }
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isActive, timeLeft, onComplete, isMuted, duration, selectedSound.name]);

    // Handle Mute/Audio Change
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.muted = isMuted;
        }
    }, [isMuted]);

    useEffect(() => {
        if (selectedSound.url) {
            const audio = new Audio(selectedSound.url);
            audio.loop = true;
            audioRef.current = audio;
        } else {
            audioRef.current = null;
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [selectedSound]);

    useEffect(() => {
        const elapsedRatio = (duration - timeLeft) / duration;
        let accumulated = 0;
        for (let i = 0; i < PHASES.length; i++) {
            accumulated += PHASES[i].duration;
            if (elapsedRatio <= accumulated) {
                setPhaseIndex(i);
                break;
            }
        }
    }, [timeLeft, duration]);

    const toggleTimer = () => setIsActive(!isActive);
    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(duration);
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    return (
        <div className="bg-slate-950/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_100px_rgba(245,158,11,0.05)] text-center relative overflow-hidden max-w-lg mx-auto">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                <div className="mb-8">
                    <h2 className="text-2xl font-serif text-white mb-2">{title}</h2>
                    <div className={`text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${PHASES[phaseIndex].color}`}>
                        {PHASES[phaseIndex].name}
                    </div>
                </div>

                {/* Circular Progress Container */}
                <div className="relative inline-block mb-12">
                    <svg className="transform -rotate-90 w-72 h-72">
                        {/* Background Ring */}
                        <circle
                            cx="144"
                            cy="144"
                            r={radius}
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="transparent"
                            className="text-slate-800"
                        />
                        {/* Progress Ring */}
                        <motion.circle
                            cx="144"
                            cy="144"
                            r={radius}
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray={circumference}
                            animate={{ strokeDashoffset: offset }}
                            transition={{ duration: 1, ease: "linear" }}
                            className={`transition-colors duration-1000 ${PHASES[phaseIndex].color.replace('text-', 'stroke-')}`}
                        />
                    </svg>

                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-6xl font-black text-white tracking-tighter tabular-nums mb-1">
                            {formatTime(timeLeft)}
                        </span>
                        <AnimatePresence mode="wait">
                            {isActive && (
                                <motion.div
                                    key="breathing"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1.2 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                    className="flex items-center gap-1 text-amber-500/40"
                                >
                                    <Wind className="w-4 h-4" />
                                    <span className="text-[10px] uppercase font-black tracking-widest">Breath</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Soundscape Selector */}
                <div className="flex justify-center gap-2 mb-8">
                    {SOUNDSCAPES.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => setSelectedSound(s)}
                            className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${selectedSound.id === s.id
                                ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                                : "bg-white/5 text-slate-500 hover:text-slate-300 border border-white/5"
                                }`}
                        >
                            {s.name}
                        </button>
                    ))}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-8">
                    <button
                        onClick={() => setIsMuted(!isMuted)}
                        className={`p-4 rounded-full bg-slate-900 border border-white/5 transition-all ${isMuted ? "text-red-500" : "text-slate-500 hover:text-white"
                            }`}
                    >
                        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                    </button>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTimer}
                        className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 shadow-xl shadow-amber-500/20"
                    >
                        {isActive ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current translate-x-1" />}
                    </motion.button>

                    <button
                        onClick={resetTimer}
                        className="p-4 rounded-full bg-slate-900 border border-white/5 text-slate-500 hover:text-white transition-all"
                    >
                        <RotateCcw className="w-6 h-6" />
                    </button>
                </div>

                {/* Footer Insight */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3 text-left"
                >
                    <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                    <div>
                        <p className="text-xs text-slate-400 leading-relaxed italic">
                            "When the mind is still, the Atman reveals itself. Focus on the vibration of the mantra and let thoughts pass like ripples on a lake."
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
