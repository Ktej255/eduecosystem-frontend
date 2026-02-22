"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Wind, Sparkles, Play, Pause, Volume2, X, Music, Brain } from "lucide-react";
import ExperienceReport from "@/components/batch2/shared/ExperienceReport";

interface Step {
    title: string;
    prompt: string;
    duration: number; // in seconds
    action?: string;
    vibration?: string;
}

const STEPS: Step[] = [
    {
        title: "Centering",
        prompt: "Close your eyes. Bring your awareness to the point between your eyebrows. Let the external world fade.",
        duration: 20,
        action: "Focus on the brow center",
        vibration: "Deep Om Frequency"
    },
    {
        title: "The Inquiry (Kena)",
        prompt: "Contemplate: 'By whom directed does the mind light on its objects? By whom commanded does the first breath move?'",
        duration: 40,
        action: "Observe the spark of thought",
        vibration: "Tanpura Drone"
    },
    {
        title: "Beyond the Senses",
        prompt: "If the eye sees the world, who sees THROUGH the eye? If the ear hears the sound, who is the Hearer behind the ear?",
        duration: 60,
        action: "Look for the Seer",
        vibration: "Higher Consciousness Loop"
    },
    {
        title: "Resonance",
        prompt: "Let the vibration of 'Kena' (By Whom?) fill your inner space. Do not seek an answer, just feel the force behind the function.",
        duration: 30,
        action: "Vibrate with the question",
        vibration: "Deep Om Frequency"
    },
    {
        title: "Seal in Consciousness",
        prompt: "Slowly descend back into the body. Carry this silence into your next interaction. You are the Hearer of the ear.",
        duration: 30,
        action: "Integration",
        vibration: "Silence"
    },
];

export default function KenaMantra1({ onClose }: { onClose?: () => void }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(STEPS[0].duration);
    const [showReport, setShowReport] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Vedic Soundscapes
    const sounds: Record<string, string> = {
        "Deep Om Frequency": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Placeholder
        "Tanpura Drone": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Placeholder
        "Higher Consciousness Loop": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", // Placeholder
        "Silence": ""
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            if (currentStep < STEPS.length - 1) {
                handleNext();
            } else {
                setIsActive(false);
                setShowReport(true);
            }
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft, currentStep]);

    const handleNext = () => {
        if (currentStep < STEPS.length - 1) {
            const nextIdx = currentStep + 1;
            setCurrentStep(nextIdx);
            setTimeLeft(STEPS[nextIdx].duration);
            setIsActive(true);
        } else {
            setShowReport(true);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            const prevIdx = currentStep - 1;
            setCurrentStep(prevIdx);
            setTimeLeft(STEPS[prevIdx].duration);
            setIsActive(true);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: isActive ? [1, 1.2, 1] : 1,
                        opacity: isActive ? [0.1, 0.2, 0.1] : 0.05
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-amber-500/10 blur-[150px] rounded-full"
                />
            </div>

            <button onClick={onClose} className="absolute top-8 right-8 text-muted-foreground hover:text-white transition-colors z-[110]">
                <X className="w-8 h-8" />
            </button>

            <div className="relative z-10 w-full max-w-4xl text-center space-y-16">
                <div className="space-y-6">
                    <motion.div
                        key={currentStep + "phase"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] border border-amber-500/20">
                            <Brain className="w-3 h-3" /> Step {currentStep + 1} of {STEPS.length}
                        </div>
                        <h2 className="text-xl font-serif text-amber-200/60 uppercase tracking-widest">{STEPS[currentStep].title}</h2>
                    </motion.div>

                    <div className="h-1 w-64 bg-slate-900 mx-auto rounded-full overflow-hidden border border-white/5">
                        <motion.div
                            className="h-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                        />
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="space-y-12 min-h-[400px] flex flex-col justify-center px-4"
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight font-light transition-all">
                            {STEPS[currentStep].prompt}
                        </h2>

                        <div className="flex flex-col items-center gap-6">
                            <div className="flex items-center justify-center gap-3 text-amber-500/60 font-medium italic text-lg">
                                <Sparkles className="w-6 h-6 animate-pulse" />
                                <span>{STEPS[currentStep].action}</span>
                            </div>

                            {STEPS[currentStep].vibration && (
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-card/5 text-[10px] text-white/40 uppercase tracking-widest">
                                    <Music className="w-3 h-3" /> {STEPS[currentStep].vibration}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="flex flex-col items-center gap-10">
                    {/* Progress Circle & Play/Pause */}
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-foreground" />
                            <motion.circle
                                cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="4" fill="transparent"
                                className="text-amber-500"
                                strokeDasharray={2 * Math.PI * 60}
                                animate={{ strokeDashoffset: (2 * Math.PI * 60) * (1 - timeLeft / STEPS[currentStep].duration) }}
                                transition={{ duration: 1, ease: "linear" }}
                            />
                        </svg>

                        <button
                            onClick={() => setIsActive(!isActive)}
                            className="absolute w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 hover:scale-110 transition-transform shadow-2xl shadow-amber-500/20"
                        >
                            {isActive ? <Pause className="w-10 h-10" /> : <Play className="w-10 h-10 translate-x-1" />}
                        </button>
                    </div>

                    <div className="flex items-center gap-16">
                        <button
                            onClick={handlePrev}
                            disabled={currentStep === 0}
                            className="p-4 rounded-full border border-white/5 text-muted-foreground hover:text-white disabled:opacity-0 transition-all group"
                        >
                            <ChevronLeft className="w-10 h-10 group-hover:-translate-x-1 transition-transform" />
                        </button>

                        <div className="text-4xl font-serif text-white/40 tabular-nums">
                            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                        </div>

                        <button
                            onClick={handleNext}
                            className="p-4 rounded-full border border-white/5 text-muted-foreground hover:text-white transition-all group flex items-center gap-4"
                        >
                            <span className="font-bold text-sm uppercase tracking-[0.2em] hidden md:block">
                                {currentStep === STEPS.length - 1 ? "Complete" : "Skip Forward"}
                            </span>
                            <ChevronRight className="w-10 h-10 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Breath Sync */}
                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className="w-16 h-16 rounded-full border-2 border-amber-500/20 flex items-center justify-center"
                            >
                                <Wind className="w-8 h-8 text-amber-500/40" />
                            </motion.div>
                            <span className="text-[10px] uppercase font-black tracking-[0.5em] text-amber-500/40">Conscious Breath</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Experience Report Modal */}
            <ExperienceReport
                isOpen={showReport}
                onClose={() => {
                    setShowReport(false);
                    if (onClose) onClose();
                }}
                onSubmit={(data) => {
                    console.log("Guided Sadhana Complete", data);
                    setShowReport(false);
                    if (onClose) onClose();
                }}
                title="Kena Mantra 1: Self-Inquiry"
            />
        </div>
    );
}
