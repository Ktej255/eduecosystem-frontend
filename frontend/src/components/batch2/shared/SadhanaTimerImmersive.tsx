"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Wind, Droplets, ArrowLeft } from "lucide-react";

interface SadhanaTimerImmersiveProps {
    duration?: number;
    title?: string;
    onComplete?: (reportData: any) => void;
}

const SOUNDSCAPES = [
    { id: "none", name: "Silence", url: "" },
    { id: "tanpura", name: "Deep Tanpura", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" }, // Placeholder
    { id: "om", name: "OM Resonance", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }, // Placeholder
];

const BREATH_MODES = [
    { id: "resonance", name: "Resonance (5.5 / 5.5)", pattern: [5.5, 0, 5.5, 0], desc: "Coherence & Heart Rate Variability" },
    { id: "relax", name: "Relax (4-7-8)", pattern: [4, 7, 8, 0], desc: "Parasympathetic Activation" },
    { id: "focus", name: "Box (4-4-4-4)", pattern: [4, 4, 4, 4], desc: "Mental Clarity & Edge" },
];

export function SadhanaTimerImmersive({ duration = 300, title = "Upanishadic Contemplation", onComplete }: SadhanaTimerImmersiveProps) {
    const [timeLeft, setTimeLeft] = useState(duration);
    const [isActive, setIsActive] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    // Config
    const [selectedSound, setSelectedSound] = useState(SOUNDSCAPES[1]);
    const [selectedBreath, setSelectedBreath] = useState(BREATH_MODES[0]);

    // State
    const [breathPhase, setBreathPhase] = useState<"inhale" | "hold" | "exhale" | "hold_empty">("inhale");
    const [configOpen, setConfigOpen] = useState(true);

    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [endTime, setEndTime] = useState<number | null>(null);

    // Particle system (abstracted for a simple visualizer)
    const [particles, setParticles] = useState<any[]>([]);

    // --- Audio Setup ---
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
        if (audioRef.current) {
            audioRef.current.muted = isMuted;
        }
    }, [isMuted]);

    // --- Timer Logic ---
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

    // --- Breath Logic ---
    useEffect(() => {
        if (!isActive) return;

        let breathTimer: NodeJS.Timeout;
        let currentStep = 0;

        const runBreathCycle = () => {
            const [inTime, holdTime, outTime, holdEmptyTime] = selectedBreath.pattern;

            const steps = [
                { phase: "inhale", time: inTime },
                { phase: "hold", time: holdTime },
                { phase: "exhale", time: outTime },
                { phase: "hold_empty", time: holdEmptyTime }
            ].filter(s => s.time > 0);

            const nextPhase = () => {
                currentStep = (currentStep + 1) % steps.length;
                setBreathPhase(steps[currentStep].phase as any);
                breathTimer = setTimeout(nextPhase, steps[currentStep].time * 1000);
            };

            setBreathPhase(steps[0].phase as any);
            breathTimer = setTimeout(nextPhase, steps[0].time * 1000);
        };

        runBreathCycle();

        return () => clearTimeout(breathTimer);
    }, [isActive, selectedBreath]);

    // --- Generative Orb Physics ---
    const getOrbPhysics = () => {
        const [inTime, holdTime, outTime, holdEmptyTime] = selectedBreath.pattern;

        // Return scale, blur, and opacity
        switch (breathPhase) {
            case "inhale": return {
                scale: 1,
                filter: "blur(20px)",
                opacity: 0.8,
                transition: { duration: inTime, ease: "circOut" as const }
            };
            case "hold": return {
                scale: 1.05,
                filter: "blur(5px)",
                opacity: 0.9,
                transition: { duration: holdTime, ease: "linear" as const }
            };
            case "exhale": return {
                scale: 0.3,
                filter: "blur(40px)",
                opacity: 0.4,
                transition: { duration: outTime, ease: "circInOut" as const }
            };
            case "hold_empty": return {
                scale: 0.25,
                filter: "blur(50px)",
                opacity: 0.2,
                transition: { duration: holdEmptyTime, ease: "linear" as const }
            };
        }
    };

    const getBreathLabel = () => {
        switch (breathPhase) {
            case "inhale": return "Inhale";
            case "hold": return "Hold";
            case "exhale": return "Exhale";
            case "hold_empty": return "Hold Empty";
        }
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    const handleStart = () => {
        setConfigOpen(false);
        setIsActive(true);
    };

    const toggleTimer = () => setIsActive(!isActive);

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(duration);
        setConfigOpen(true);
    };

    // Calculate progression percentage (0 to 1)
    const progress = (duration - timeLeft) / duration;

    return (
        <div className="fixed inset-0 bg-black text-amber-50 font-serif overflow-hidden z-[100] flex flex-col items-center justify-center select-none">

            {/* Dark Metaphorical Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 via-black to-black transition-all duration-[30s]"
                style={{ opacity: isActive ? 1 : 0.4 }}
            />

            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

            {/* Generative Bio-Feedback Orb */}
            <div className="absolute inset-0 flex items-center justify-center mix-blend-screen pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isActive ? getOrbPhysics() : { scale: 0.4, filter: "blur(30px)", opacity: 0.2 }}
                    className="relative w-[60vmin] h-[60vmin] rounded-full bg-gradient-to-br from-orange-500 via-amber-400 to-transparent"
                />
                {/* Internal Core Glow */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isActive ? { scale: breathPhase === 'hold' ? 1.2 : 0.8, opacity: breathPhase === 'hold' ? 0.6 : 0.1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute w-[30vmin] h-[30vmin] rounded-full bg-white blur-[50px] mix-blend-add"
                />
            </div>

            {/* UI Overlay */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-12">

                {/* Header Sequence */}
                <div className="flex justify-between items-start w-full opacity-50 hover:opacity-100 transition-opacity">
                    <div>
                        <h2 className="text-[10px] font-sans font-black tracking-[0.4em] uppercase text-orange-500 mb-2">Guided Contemplation</h2>
                        <h1 className="text-2xl font-black uppercase tracking-[0.2em] text-white">{title}</h1>
                    </div>
                </div>

                {/* Configuration Panel (Pre-Session) */}
                <AnimatePresence>
                    {configOpen && !isActive && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-md"
                        >
                            <div className="w-full max-w-xl p-12 border border-white/10 bg-black/80">
                                <h3 className="text-xl font-serif text-white mb-8 text-center border-b border-white/10 pb-4">Architect Your State</h3>

                                {/* Rhythm Selection */}
                                <div className="mb-8">
                                    <label className="text-[10px] font-sans uppercase tracking-[0.3em] text-white/40 block mb-4">Breathing Rhythm</label>
                                    <div className="grid gap-3">
                                        {BREATH_MODES.map(b => (
                                            <button
                                                key={b.id}
                                                onClick={() => setSelectedBreath(b)}
                                                className={`text-left p-4 border transition-all ${selectedBreath.id === b.id ? 'border-orange-500 bg-orange-500/10' : 'border-white/10 hover:border-white/30'}`}
                                            >
                                                <div className="font-bold text-white tracking-widest text-sm uppercase mb-1">{b.name}</div>
                                                <div className="text-xs text-white/50">{b.desc}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Sonic Environment */}
                                <div className="mb-12">
                                    <label className="text-[10px] font-sans uppercase tracking-[0.3em] text-white/40 block mb-4">Sonic Environment</label>
                                    <div className="flex gap-3">
                                        {SOUNDSCAPES.map(s => (
                                            <button
                                                key={s.id}
                                                onClick={() => setSelectedSound(s)}
                                                className={`flex-1 py-3 border text-xs uppercase tracking-widest font-bold transition-all ${selectedSound.id === s.id ? 'border-orange-500 bg-orange-500/10 text-orange-400' : 'border-white/10 hover:border-white/30 text-white/60'}`}
                                            >
                                                {s.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={handleStart}
                                    className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white text-xs font-black uppercase tracking-[0.4em] transition-colors"
                                >
                                    Initiate Sequence
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Central Status (During Session) */}
                <div className="flex-1 flex flex-col items-center justify-center pointer-events-none">
                    <AnimatePresence>
                        {isActive && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="text-center"
                            >
                                <span className="text-[8rem] leading-none font-black text-white tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                    {formatTime(timeLeft)}
                                </span>

                                <motion.div
                                    key={breathPhase}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="mt-8 text-2xl font-serif text-orange-400 tracking-[0.5em] uppercase"
                                >
                                    {getBreathLabel()}
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Bottom Controls */}
                <div className="w-full flex justify-between items-end">

                    {/* Progress Indication */}
                    <div className="flex-1 max-w-sm">
                        <div className="flex justify-between text-[10px] font-sans uppercase tracking-[0.3em] text-white/40 mb-2">
                            <span>Integration</span>
                            <span>{Math.round(progress * 100)}%</span>
                        </div>
                        <div className="h-0.5 w-full bg-white/10 overflow-hidden">
                            <motion.div
                                animate={{ width: `${progress * 100}%` }}
                                transition={{ duration: 1, ease: "linear" }}
                                className="h-full bg-orange-500"
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsMuted(!isMuted)}
                            className={`p-4 rounded-full border border-white/10 transition-all ${isMuted ? "text-red-500 bg-red-500/10" : "text-white/40 hover:text-white"}`}
                        >
                            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </button>

                        <button
                            onClick={toggleTimer}
                            disabled={configOpen}
                            className={`p-6 rounded-full border transition-all ${isActive ? "border-orange-500 bg-orange-500/20 text-orange-400" : "border-white/20 bg-white/5 text-white/50 hover:bg-white/10"} ${configOpen ? 'opacity-0' : 'opacity-100'}`}
                        >
                            {isActive ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current translate-x-1" />}
                        </button>

                        <button
                            onClick={resetTimer}
                            disabled={configOpen}
                            className={`p-4 rounded-full border border-white/10 text-white/40 hover:text-white transition-all ${configOpen ? 'opacity-0' : 'opacity-100'}`}
                        >
                            <RotateCcw className="w-5 h-5" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
