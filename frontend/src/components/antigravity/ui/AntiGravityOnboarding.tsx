"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, ShieldCheck, Zap, ChevronRight, X } from 'lucide-react';
import { cn } from "@/lib/utils";

interface Props {
    onComplete: () => void;
}

export default function AntiGravityOnboarding({ onComplete }: Props) {
    const [step, setStep] = useState(0);

    const steps = [
        {
            icon: Rocket,
            title: "Welcome, Time Traveler",
            description: "You have entered the Anti-Gravity Zone. Here, we defy the laws of procrastination.",
            color: "text-purple-400"
        },
        {
            icon: Zap,
            title: "The 3 Phases",
            description: "Your journey is divided into 3 critical phases: Gravity Defier, Orbit, and Escape Velocity. Stick to the timeline.",
            color: "text-blue-400"
        },
        {
            icon: ShieldCheck,
            title: "Do or Die",
            description: "Missing 2 consecutive days causes Orbital Decay. Complete your Daily Missions (Slot A, B, C) to survive.",
            color: "text-emerald-400"
        }
    ];

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(prev => prev + 1);
        } else {
            onComplete();
        }
    };

    return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <div className="w-full max-w-md bg-[#0B0B15] border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl shadow-purple-900/20">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                    />
                </div>

                <div className="p-8 pt-12 text-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center"
                        >
                            <div className={cn("p-6 rounded-full bg-white/5 border border-white/10 mb-6", steps[step].color)}>
                                {React.createElement(steps[step].icon, { className: "w-12 h-12" })}
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-4">{steps[step].title}</h2>
                            <p className="text-gray-400 leading-relaxed min-h-[80px]">
                                {steps[step].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="p-6 bg-[#111] border-t border-white/5 flex items-center justify-between">
                    <button
                        onClick={onComplete}
                        className="text-gray-500 text-sm hover:text-white transition-colors"
                    >
                        Skip
                    </button>

                    <div className="flex gap-2">
                        {steps.map((_, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-colors",
                                    i === step ? "bg-white" : "bg-gray-700"
                                )}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
                    >
                        {step === steps.length - 1 ? "Launch" : "Next"} <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
