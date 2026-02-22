"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Wind, Sparkles, Play, Volume2, X } from "lucide-react";

interface Step {
    title: string;
    prompt: string;
    duration: number; // in seconds
    action?: string;
}

const STEPS: Step[] = [
    {
        title: "Centering",
        prompt: "Close your eyes. Bring your awareness to the point between your eyebrows. Breathe naturally.",
        duration: 15,
        action: "Focus on the brow center",
    },
    {
        title: "The Inquiry (Kena)",
        prompt: "Contemplate: 'By whom directed does the mind light on its objects?'",
        duration: 30,
        action: "Observe the spark of thought",
    },
    {
        title: "Beyond the Senses",
        prompt: "If the eye sees the world, who sees THROUGH the eye?",
        duration: 45,
        action: "Look for the Seer",
    },
    {
        title: "Resonance",
        prompt: "Let the vibration of 'Kena' fill your inner space. Do not seek an answer, just feel the question.",
        duration: 30,
        action: "Vibrate with the question",
    },
    {
        title: "Integration",
        prompt: "Slowly open your eyes. Carry this silence into your next action.",
        duration: 20,
        action: "Gentle transition",
    },
];

export default function GuidedMantra({ onClose }: { onClose?: () => void }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(STEPS[0].duration);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && currentStep < STEPS.length - 1) {
            // Auto-advance? Maybe not, keep it manual for contemplation
            setIsActive(false);
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft, currentStep]);

    const handleNext = () => {
        if (currentStep < STEPS.length - 1) {
            const nextIdx = currentStep + 1;
            setCurrentStep(nextIdx);
            setTimeLeft(STEPS[nextIdx].duration);
            setIsActive(false);
        } else {
            if (onClose) onClose();
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            const prevIdx = currentStep - 1;
            setCurrentStep(prevIdx);
            setTimeLeft(STEPS[prevIdx].duration);
            setIsActive(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-indigo-500/10 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-transparent to-transparent" />
            </div>

            <button onClick={onClose} className="absolute top-8 right-8 text-muted-foreground hover:text-white transition-colors z-[110]">
                <X className="w-8 h-8" />
            </button>

            <div className="relative z-10 w-full max-w-3xl text-center space-y-12">
                <div className="space-y-4">
                    <motion.div
                        key={currentStep + "phase"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-indigo-400 font-black uppercase tracking-[0.4em] text-xs"
                    >
                        Phase {currentStep + 1} of {STEPS.length} • {STEPS[currentStep].title}
                    </motion.div>
                    <div className="h-1 w-32 bg-indigo-900 mx-auto rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-indigo-400"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                        />
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8 min-h-[300px] flex flex-col justify-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                            {STEPS[currentStep].prompt}
                        </h2>

                        {STEPS[currentStep].action && (
                            <div className="flex items-center justify-center gap-2 text-indigo-300/60 font-medium italic">
                                <Sparkles className="w-5 h-5" />
                                <span>{STEPS[currentStep].action}</span>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                <div className="flex flex-col items-center gap-8">
                    {/* Countdown / Progress */}
                    <div className="relative w-20 h-20 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-foreground" />
                            <motion.circle
                                cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="4" fill="transparent"
                                className="text-indigo-500"
                                strokeDasharray={2 * Math.PI * 38}
                                animate={{ strokeDashoffset: (2 * Math.PI * 38) * (1 - timeLeft / STEPS[currentStep].duration) }}
                            />
                        </svg>
                        <span className="absolute text-xl font-bold text-white tabular-nums">{timeLeft}</span>
                    </div>

                    <div className="flex items-center gap-12">
                        <button
                            onClick={handlePrev}
                            disabled={currentStep === 0}
                            className="p-4 rounded-full border border-white/10 text-muted-foreground hover:text-white disabled:opacity-0 transition-all"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsActive(!isActive)}
                            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-indigo-900 text-indigo-400 border border-indigo-400' : 'bg-indigo-500 text-slate-950 shadow-xl shadow-indigo-500/20'}`}
                        >
                            {isActive ? <Volume2 className="w-10 h-10" /> : <Play className="w-10 h-10 translate-x-1 fill-current" />}
                        </motion.button>

                        <button
                            onClick={handleNext}
                            className="p-4 rounded-full border border-white/10 text-muted-foreground hover:text-white transition-all flex items-center gap-2"
                        >
                            <span className="font-black text-xs uppercase tracking-widest pl-2">Next</span>
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>

                {/* Breath Indicator */}
                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                            className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                        >
                            <Wind className="w-12 h-12 text-indigo-500/20" />
                            <span className="text-[10px] uppercase font-black tracking-[0.5em] text-indigo-500/40">Exhale</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
