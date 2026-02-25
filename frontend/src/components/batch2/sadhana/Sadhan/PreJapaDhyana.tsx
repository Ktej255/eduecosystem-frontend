"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Play, Wind, Volume2 } from "lucide-react";

import { DHYANA_DATA } from "../data/dhyana-data";
import { cn } from "@/lib/utils";

interface PreJapaDhyanaProps {
    onComplete: () => void;
    deityId?: string;
}

export default function PreJapaDhyana({ onComplete, deityId = "guru" }: PreJapaDhyanaProps) {
    const [step, setStep] = useState(0);

    const dhyanaData = DHYANA_DATA[deityId as keyof typeof DHYANA_DATA] || DHYANA_DATA.guru;
    const dhyanaShloka = dhyanaData.shloka;
    const themeColor = dhyanaData.themeColor;

    useEffect(() => {
        const timer = setTimeout(() => {
            if (step < 2) setStep(s => s + 1);
        }, 3000);
        return () => clearTimeout(timer);
    }, [step]);

    return (
        <div className={cn("fixed inset-0 z-[110] flex flex-col items-center justify-center p-6 overflow-hidden", themeColor.bg)}>
            {/* Ambient Background Particles */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full blur-[120px]", themeColor.accent)}
                />
            </div>

            <div className="relative z-10 max-w-4xl w-full text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="space-y-4"
                >
                    <span className={cn("inline-block px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.6em] border", themeColor.accent.replace('bg-', 'text-').replace('/10', ''), "bg-white/5 border-white/10")}>
                        Preparation • Japa Dhyāna
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tighter">
                        Establish Connection with {deityId.charAt(0).toUpperCase() + deityId.slice(1)}
                    </h2>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 2 }}
                        className="space-y-10 py-12"
                    >
                        <div className="relative py-8">
                            <motion.p
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 8, repeat: Infinity }}
                                className="text-3xl md:text-5xl text-white leading-[1.8] font-serif italic drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                            >
                                {dhyanaShloka.sanskrit}
                            </motion.p>
                        </div>

                        <div className="max-w-2xl mx-auto space-y-4">
                            <p className="text-xl md:text-2xl text-white/80 font-medium italic leading-relaxed">
                                "{dhyanaShloka.hindi}"
                            </p>
                            <p className="text-lg text-white/40 font-light italic leading-relaxed">
                                {dhyanaShloka.english}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: step >= 0 ? 1 : 0 }}
                    transition={{ delay: 2 }}
                    className="pt-12"
                >
                    <button
                        onClick={onComplete}
                        className={cn("group relative px-12 py-5 rounded-full text-white font-black text-lg overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95", themeColor.button)}
                    >
                        <span className="relative flex items-center gap-3">
                            <Wind className="w-6 h-6" />
                            BEGIN SACRED JAPA
                        </span>
                    </button>
                    <p className="mt-6 text-white/30 text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">
                        Stillness is the portal
                    </p>
                </motion.div>
            </div>

            {/* Progress Bar (Subtle) */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 15, ease: "linear" }}
                    className={cn("h-full opacity-50", themeColor.button)}
                />
            </div>
        </div>
    );
}
