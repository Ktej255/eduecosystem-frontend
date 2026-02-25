"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, ChevronRight, ChevronLeft, Volume2, Info, X } from "lucide-react";
import { MANDUKYA_SHLOKAS, MandukyaDataEntry } from "./data/mandukya-shlokas";
import { cn } from "@/lib/utils";

const MANDUKYA_THEMES = {
    "intro": {
        name: "AUM",
        colors: "from-amber-950 via-slate-900 to-black",
        accent: "text-amber-400",
        glow: "rgba(245,158,11,0.2)",
    },
    "waking": {
        name: "Waking (A)",
        colors: "from-orange-950 via-amber-900 to-black",
        accent: "text-orange-400",
        glow: "rgba(251,146,60,0.3)",
    },
    "dreaming": {
        name: "Dreaming (U)",
        colors: "from-indigo-950 via-purple-900 to-black",
        accent: "text-purple-400",
        glow: "rgba(168,85,247,0.3)",
    },
    "deepSleep": {
        name: "Deep Sleep (M)",
        colors: "from-blue-950 via-slate-900 to-black",
        accent: "text-blue-400",
        glow: "rgba(59,130,246,0.2)",
    },
    "turiya": {
        name: "Turiya (Silence)",
        colors: "from-slate-900 via-zinc-900 to-black",
        accent: "text-white",
        glow: "rgba(255,255,255,0.15)",
    }
};

const getThemeKey = (verse: number) => {
    if (verse <= 2) return "intro";
    if (verse === 3 || verse === 9) return "waking";
    if (verse === 4 || verse === 10) return "dreaming";
    if (verse === 5 || verse === 6 || verse === 11) return "deepSleep";
    if (verse === 7 || verse === 12) return "turiya";
    return "intro";
};

export function MandukyaImmersiveExperience({ lang = "en", onClose }: { lang?: "en" | "hi", onClose?: () => void }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    const [showWordMeanings, setShowWordMeanings] = useState(false);

    const shloka = MANDUKYA_SHLOKAS[currentIndex];
    const themeKey = getThemeKey(shloka.verse);
    const theme = MANDUKYA_THEMES[themeKey as keyof typeof MANDUKYA_THEMES];

    const handleNext = () => {
        if (currentIndex < MANDUKYA_SHLOKAS.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setIsRevealed(false);
            setShowWordMeanings(false);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setIsRevealed(false);
            setShowWordMeanings(false);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "Escape" && onClose) {
                onClose();
            }
            if (e.code === "Space") {
                e.preventDefault();
                if (!isRevealed) {
                    setIsRevealed(true);
                } else {
                    handleNext();
                }
            }
            if (e.code === "ArrowRight") {
                handleNext();
            }
            if (e.code === "ArrowLeft") {
                handlePrev();
            }
            if (e.code === "KeyM") {
                setShowWordMeanings(prev => !prev);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex]);

    if (!shloka) return null;

    return (
        <div className="fixed inset-0 bg-black z-[100] overflow-hidden flex flex-col font-sans select-none">
            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/5 hover:bg-white/20 text-white/50 hover:text-white transition-all backdrop-blur-md border border-white/10"
                >
                    <X className="w-6 h-6" />
                </button>
            )}
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    key={`bg-${themeKey}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className={cn("absolute inset-0 bg-gradient-to-b transition-colors duration-2000", theme.colors)}
                />

                {/* Central Glow Pulse */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at center, ${theme.glow} 0%, transparent 70%)`
                    }}
                />

                {/* Atmospheric Particles - Shifting based on state */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={cn(
                                "absolute w-[1px] h-[30px] bg-white/10",
                                themeKey === "turiya" ? "bg-white/40" : "bg-white/5"
                            )}
                            initial={{
                                x: Math.random() * 100 + "%",
                                y: Math.random() * 100 + "%",
                                opacity: 0
                            }}
                            animate={{
                                y: [null, "-20%"],
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: 10 + Math.random() * 20,
                                repeat: Infinity,
                                delay: Math.random() * 10
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Header / Navigation */}
            <div className="relative z-20 p-6 flex items-center justify-between text-white/40 uppercase tracking-[0.3em] text-[10px] font-black">
                <div className="flex items-center gap-4">
                    <span className={cn("transition-colors duration-500", theme.accent)}>Mandukya</span>
                    <span className="opacity-20">|</span>
                    <span>Verse {shloka.verse}</span>
                    <span className="opacity-20">|</span>
                    <span className="text-white/20 font-light italic tracking-normal">{theme.name}</span>
                </div>
                <div className="flex items-center gap-6">
                    <button onClick={handlePrev} disabled={currentIndex === 0} className="hover:text-white transition-colors disabled:opacity-0">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="font-mono text-white/20">{currentIndex + 1} / {MANDUKYA_SHLOKAS.length}</span>
                    <button onClick={handleNext} disabled={currentIndex === MANDUKYA_SHLOKAS.length - 1} className="hover:text-white transition-colors disabled:opacity-0">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 max-w-6xl mx-auto w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={shloka.id}
                        initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-full flex flex-col items-center gap-12"
                    >
                        {/* Shloka Index & Theme */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-center space-y-2"
                        >
                            <h4 className="text-white/40 text-sm font-light tracking-widest uppercase">
                                {shloka.theme}
                            </h4>
                        </motion.div>

                        {/* Sanskrit Core */}
                        <div className="relative group flex flex-col items-center">
                            <h2
                                className="text-3xl md:text-5xl lg:text-7xl text-white font-serif leading-tight text-center text-balance max-w-5xl drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                                style={{ fontFamily: "var(--font-devanagari)" }}
                            >
                                {shloka.sanskrit}
                            </h2>

                            {/* Utility Toggle */}
                            <div className="mt-12 flex gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <button
                                    onClick={() => setShowWordMeanings(!showWordMeanings)}
                                    className={cn(
                                        "p-3 rounded-full border border-white/5 hover:bg-white/10 transition-all",
                                        showWordMeanings && "bg-white/10 border-white/20"
                                    )}
                                >
                                    <Info className="w-4 h-4 text-white/30" />
                                </button>
                                <button className="p-3 rounded-full border border-white/5 hover:bg-white/10 transition-all">
                                    <Volume2 className="w-4 h-4 text-white/30" />
                                </button>
                            </div>
                        </div>

                        {/* Word Meanings Overlay */}
                        <AnimatePresence>
                            {showWordMeanings && shloka.wordMeanings && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] max-w-4xl flex flex-wrap justify-center gap-4 shadow-2xl"
                                >
                                    {shloka.wordMeanings.map((wm, i) => (
                                        <div key={i} className="text-center p-3 px-5 rounded-2xl bg-white/5 border border-white/5 min-w-[120px]">
                                            <p className="text-amber-200/80 text-lg mb-1">{wm.devanagari}</p>
                                            <p className="text-white/30 text-[9px] uppercase font-black tracking-widest">{lang === "hi" ? wm.hindi : wm.english}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Meaning Revelation */}
                        <div className="min-h-[220px] w-full flex flex-col items-center justify-center">
                            <AnimatePresence mode="wait">
                                {!isRevealed ? (
                                    <motion.div
                                        key="prompt"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="cursor-pointer group flex flex-col items-center gap-6"
                                        onClick={() => setIsRevealed(true)}
                                    >
                                        <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center group-hover:border-white/20 transition-all duration-1000 group-hover:bg-white/[0.02]">
                                            <Eye className="w-5 h-5 text-white/20 group-hover:text-white/60 group-hover:scale-110 transition-all" />
                                        </div>
                                        <p className="text-[10px] text-white/10 uppercase tracking-[0.6em] group-hover:text-white/30 transition-colors">
                                            Vanish into Meaning
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="meaning"
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-12 w-full text-center"
                                    >
                                        <p className="text-2xl md:text-4xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto italic">
                                            {lang === "hi" ? shloka.hindi : shloka.english}
                                        </p>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 }}
                                            className="bg-white/[0.03] backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 max-w-3xl mx-auto shadow-2xl"
                                        >
                                            <div className="flex items-center justify-center gap-3 mb-4 opacity-30">
                                                <Sparkles className={cn("w-4 h-4", theme.accent)} />
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Transcendental Transmission</span>
                                            </div>
                                            <p className="text-white/70 font-serif italic text-xl leading-relaxed max-w-2xl mx-auto">
                                                {lang === "hi" ? shloka.simpleExplanationHindi : shloka.simpleExplanation}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Footer Progress & Quick Info */}
            <div className="relative z-20 flex flex-col">
                <div className="px-8 py-4 flex justify-between items-center text-[9px] uppercase tracking-[0.3em] text-white/10 font-black">
                    <span>Shakti Transmission In Progress...</span>
                    <span className="text-white/20">{MANDUKYA_SHLOKAS.length - currentIndex - 1} Steps to Silence</span>
                </div>
                <div className="h-1 bg-white/5">
                    <motion.div
                        className={cn("h-full transition-all duration-1000", theme.accent.replace('text-', 'bg-'))}
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentIndex + 1) / MANDUKYA_SHLOKAS.length) * 100}%` }}
                        style={{ boxShadow: `0 0 10px ${theme.glow}` }}
                    />
                </div>
            </div>
        </div>
    );
}
