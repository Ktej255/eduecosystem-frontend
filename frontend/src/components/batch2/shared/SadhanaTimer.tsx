"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, Wind, Settings2 } from "lucide-react";
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { TranceToggle } from "@/components/batch2/context/TranceToggle";
import { SadhanaTimerImmersive } from "./SadhanaTimerImmersive";

interface SadhanaTimerProps {
    duration?: number; // in seconds
    title?: string;
    onComplete?: (reportData: any) => void;
}

const SOUNDSCAPES = [
    { id: "none", name: "Silence", url: "" },
    { id: "tanpura", name: "Tanpura", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" }, // Placeholder
    { id: "om", name: "Deep OM", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }, // Placeholder
];

const PHASES = [
    { name: "Preparation (Sthira)", color: "text-emerald-400", duration: 0.15 },
    { name: "Contemplation (Vichara)", color: "text-amber-400", duration: 0.70 },
    { name: "Integration (Ananda)", color: "text-indigo-400", duration: 0.15 },
];

const BREATH_MODES = [
    // Resonance: 5.5s In, 5.5s Out (Coherent Breathing)
    { id: "resonance", name: "Resonance", pattern: [5.5, 0, 5.5, 0], description: "Balance & HRV" },
    // Relax: 4-7-8 (Calms Nervous System)
    { id: "relax", name: "Relax (4-7-8)", pattern: [4, 7, 8, 0], description: "Deep Calm" },
    // Focus: Box Breathing (4-4-4-4)
    { id: "focus", name: "Focus (Box)", pattern: [4, 4, 4, 4], description: "Clarity" },
];

export default function SadhanaTimer({ duration = 300, title = "Upanishadic Contemplation", onComplete }: SadhanaTimerProps) {
    const [timeLeft, setTimeLeft] = useState(duration);
    const [isActive, setIsActive] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [selectedSound, setSelectedSound] = useState(SOUNDSCAPES[1]);
    const [selectedBreath, setSelectedBreath] = useState(BREATH_MODES[0]);
    const [phaseIndex, setPhaseIndex] = useState(0);
    const [breathPhase, setBreathPhase] = useState<"inhale" | "hold" | "exhale" | "hold_empty">("inhale");
    const { mode } = useBatch2UI();

    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [endTime, setEndTime] = useState<number | null>(null);

    const progress = ((duration - timeLeft) / duration) * 100;
    const radius = 120;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    // Breath Logic
    useEffect(() => {
        if (!isActive) return;

        let breathTimer: NodeJS.Timeout;
        let currentStep = 0; // 0=In, 1=Hold, 2=Out, 3=HoldEmpty

        const runBreathCycle = () => {
            const [inTime, holdTime, outTime, holdEmptyTime] = selectedBreath.pattern;

            // Define cycle steps
            const steps = [
                { phase: "inhale", time: inTime },
                { phase: "hold", time: holdTime },
                { phase: "exhale", time: outTime },
                { phase: "hold_empty", time: holdEmptyTime }
            ].filter(s => s.time > 0); // Remove 0-duration phases

            const nextPhase = () => {
                currentStep = (currentStep + 1) % steps.length;
                setBreathPhase(steps[currentStep].phase as any);
                breathTimer = setTimeout(nextPhase, steps[currentStep].time * 1000);
            };

            // Start first phase
            setBreathPhase(steps[0].phase as any);
            breathTimer = setTimeout(nextPhase, steps[0].time * 1000);
        };

        runBreathCycle();

        return () => clearTimeout(breathTimer);
    }, [isActive, selectedBreath]);


    // Calculate End Time on Start
    useEffect(() => {
        if (isActive && !endTime && timeLeft > 0) {
            setEndTime(Date.now() + timeLeft * 1000);
        } else if (!isActive) {
            setEndTime(null);
        }
    }, [isActive, endTime, timeLeft]);


    useEffect(() => {
        if (isActive && endTime) {
            timerRef.current = setInterval(() => {
                const now = Date.now();
                const diff = endTime - now;

                if (diff <= 100) {
                    if (timerRef.current) clearInterval(timerRef.current);
                    if (audioRef.current) audioRef.current.pause();

                    setTimeLeft(0);
                    setIsActive(false);
                    setEndTime(null);

                    if (onComplete) onComplete({ timeSpent: duration, soundUsed: selectedSound.name });
                } else {
                    setTimeLeft(Math.ceil(diff / 1000));
                }

                // Audio Logic check (ensure playing)
                if (audioRef.current && !isMuted && audioRef.current.paused) {
                    audioRef.current.play().catch(e => console.log("Audio play blocked", e));
                }
            }, 1000) as unknown as NodeJS.Timeout;
        } else {
            if (timerRef.current) clearInterval(timerRef.current);
            if (audioRef.current) audioRef.current.pause();
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isActive, endTime, onComplete, isMuted, duration, selectedSound.name]);

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

    // Animation Config for Breath
    const getBreathAnimation = () => {
        const [inTime, holdTime, outTime, holdEmptyTime] = selectedBreath.pattern;

        switch (breathPhase) {
            case "inhale": return { scale: 1.3, opacity: 1, transition: { duration: inTime, ease: "easeInOut" as const } };
            case "hold": return { scale: 1.3, opacity: 0.8, transition: { duration: holdTime, ease: "linear" as const } };
            case "exhale": return { scale: 0.7, opacity: 0.5, transition: { duration: outTime, ease: "easeInOut" as const } };
            case "hold_empty": return { scale: 0.7, opacity: 0.3, transition: { duration: holdEmptyTime, ease: "linear" as const } };
        }
    };

    const getBreathText = () => {
        switch (breathPhase) {
            case "inhale": return "Inhale";
            case "hold": return "Hold";
            case "exhale": return "Exhale";
            case "hold_empty": return "Hold";
        }
    };

    if (mode === 'immersive') {
        return (
            <div className="relative w-full max-w-lg mx-auto h-[600px] rounded-[2.5rem] overflow-hidden bg-black shadow-2xl">
                <SadhanaTimerImmersive duration={duration} title={title} onComplete={onComplete} />
                <div className="absolute top-6 right-6 z-50">
                    <TranceToggle />
                </div>
            </div>
        );
    }

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
                <div className="relative inline-block mb-10">
                    <svg className="transform -rotate-90 w-72 h-72">
                        {/* Background Ring */}
                        <circle
                            cx="144"
                            cy="144"
                            r={radius}
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="transparent"
                            className="text-foreground"
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

                        {/* Breath Visualizer */}
                        <div className="h-8 flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                {isActive ? (
                                    <motion.div
                                        key="breathing-active"
                                        animate={getBreathAnimation()}
                                        className="flex items-center gap-1 text-amber-500"
                                    >
                                        <Wind className="w-4 h-4" />
                                        <span className="text-[10px] uppercase font-black tracking-widest">{getBreathText()}</span>
                                    </motion.div>
                                ) : (
                                    <span className="text-xs text-muted-foreground uppercase tracking-widest">Ready</span>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Controls Area */}
                <div className="space-y-6">

                    {/* Breath Selector */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {BREATH_MODES.map((b) => (
                            <button
                                key={b.id}
                                onClick={() => setSelectedBreath(b)}
                                className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${selectedBreath.id === b.id
                                    ? "bg-amber-500/20 text-amber-400 border-amber-500/50"
                                    : "bg-transparent text-muted-foreground border-transparent hover:border-slate-700"
                                    }`}
                            >
                                {b.name}
                            </button>
                        ))}
                    </div>

                    {/* Soundscape Selector */}
                    <div className="flex justify-center gap-2">
                        {SOUNDSCAPES.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => setSelectedSound(s)}
                                className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${selectedSound.id === s.id
                                    ? "bg-slate-800 text-white shadow-lg border border-white/10"
                                    : "bg-transparent text-muted-foreground hover:text-muted-foreground border border-transparent"
                                    }`}
                            >
                                {s.name}
                            </button>
                        ))}
                    </div>

                    {/* Main Actions */}
                    <div className="flex items-center justify-center gap-8">
                        <button
                            onClick={() => setIsMuted(!isMuted)}
                            className={`p-4 rounded-full bg-slate-900 border border-white/10 transition-all ${isMuted ? "text-red-500" : "text-muted-foreground hover:text-white"
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
                            className="p-4 rounded-full bg-slate-900 border border-white/10 text-muted-foreground hover:text-white transition-all"
                        >
                            <RotateCcw className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Footer Insight */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-10 p-4 rounded-2xl bg-card/5 border border-white/5 flex items-start gap-3 text-left"
                >
                    <Sparkles className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1">
                            {selectedBreath.name}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed italic">
                            {selectedBreath.description} pattern engaged. Follow the visual cue to synchronize your breath and quiet the mind.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Trance Toggle */}
            <div className="absolute bottom-6 right-6 z-50">
                <TranceToggle />
            </div>
        </div>
    );
}
