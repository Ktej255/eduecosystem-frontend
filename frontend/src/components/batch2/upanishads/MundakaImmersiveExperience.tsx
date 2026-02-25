"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, ChevronRight, ChevronLeft, Volume2, Info, Target, Bird } from "lucide-react";
import { MUNDAKA_SHLOKAS, MundakaDataEntry } from "./data/mundaka-shlokas";
import { cn } from "@/lib/utils";

const MUNDAKA_THEMES = {
    1: {
        name: "Creation",
        title: "The Sparks of Brahman",
        colors: "from-emerald-950 via-teal-900 to-black",
        accent: "text-emerald-400",
        glow: "rgba(16,185,129,0.3)",
        particle: "bg-emerald-500/20",
        icon: Sparkles
    },
    2: {
        name: "Archery",
        title: "The Cosmic Target",
        colors: "from-amber-950 via-orange-900 to-black",
        accent: "text-amber-400",
        glow: "rgba(245,158,11,0.3)",
        particle: "bg-amber-500/20",
        icon: Target
    },
    3: {
        name: "Truth",
        title: "The Two Birds",
        colors: "from-blue-950 via-indigo-950 to-black",
        accent: "text-blue-400",
        glow: "rgba(59,130,246,0.3)",
        particle: "bg-blue-500/20",
        icon: Bird
    }
};

export function MundakaImmersiveExperience({ lang = "en" }: { lang?: "en" | "hi" }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    const [showWordMeanings, setShowWordMeanings] = useState(false);

    const shloka = MUNDAKA_SHLOKAS[currentIndex];
    const theme = MUNDAKA_THEMES[shloka.mundaka as keyof typeof MUNDAKA_THEMES] || MUNDAKA_THEMES[1];
    const ThemeIcon = theme.icon;

    const handleNext = () => {
        if (currentIndex < MUNDAKA_SHLOKAS.length - 1) {
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
            if (e.code === "Space") {
                e.preventDefault();
                setIsRevealed(true);
            }
            if (e.code === "ArrowRight" || e.code === "Enter") {
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
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    key={`bg-${shloka.mundaka}-${shloka.khanda}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className={cn("absolute inset-0 bg-gradient-to-b transition-colors duration-2000", theme.colors)}
                />

                {/* Ambient Particles representing sparks of Brahman */}
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={cn("absolute w-1 h-1 rounded-full", theme.particle)}
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: 0
                        }}
                        animate={{
                            y: [null, `${Math.random() * 100}%`],
                            x: [null, `${Math.random() * 100}%`],
                            opacity: [0, 0.5, 0],
                            scale: [0, 2, 0]
                        }}
                        transition={{
                            duration: 8 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    />
                ))}

                {/* Central Pulses - The Target/Brahman */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at center, ${theme.glow} 0%, transparent 60%)`
                    }}
                />
            </div>

            {/* Header / Navigation */}
            <div className="relative z-20 p-6 flex items-center justify-between text-white/40 uppercase tracking-[0.3em] text-[10px] font-black">
                <div className="flex items-center gap-4">
                    <span className={cn("transition-colors duration-500 flex items-center gap-2", theme.accent)}>
                        <ThemeIcon className="w-3 h-3" />
                        Mundaka {shloka.mundaka}
                    </span>
                    <span className="opacity-20">|</span>
                    <span>Khanda {shloka.khanda}</span>
                    <span className="opacity-20">|</span>
                    <span>Verse {shloka.verse}</span>
                </div>
                <div className="flex items-center gap-6">
                    <button onClick={handlePrev} disabled={currentIndex === 0} className="hover:text-white transition-colors disabled:opacity-0">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="font-mono">{currentIndex + 1} / {MUNDAKA_SHLOKAS.length}</span>
                    <button onClick={handleNext} disabled={currentIndex === MUNDAKA_SHLOKAS.length - 1} className="hover:text-white transition-colors disabled:opacity-0">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 max-w-6xl mx-auto w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={shloka.id}
                        initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full flex flex-col items-center gap-12"
                    >
                        {/* Theme Heading */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-center"
                        >
                            <h3 className={cn("text-xs font-black mb-2 tracking-[0.2em] uppercase", theme.accent)}>
                                {theme.title}
                            </h3>
                            <h4 className="text-white/60 text-lg font-light tracking-widest italic">
                                {shloka.theme}
                            </h4>
                        </motion.div>

                        {/* Sanskrit Core */}
                        <div className="relative group flex flex-col items-center">
                            <h2
                                className="text-3xl md:text-5xl lg:text-6xl text-white font-serif leading-[1.6] text-center text-balance max-w-5xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                style={{ fontFamily: "var(--font-devanagari)" }}
                            >
                                {shloka.sanskrit}
                            </h2>

                            {/* Audio/Word Meaning Toggle */}
                            <div className="mt-8 flex gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <button
                                    onClick={() => setShowWordMeanings(!showWordMeanings)}
                                    className={cn(
                                        "p-2 rounded-full border border-white/10 hover:bg-white/10 transition-all",
                                        showWordMeanings && "bg-white/20 border-white/30"
                                    )}
                                >
                                    <Info className="w-4 h-4 text-white/50" />
                                </button>
                                <button className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-all">
                                    <Volume2 className="w-4 h-4 text-white/50" />
                                </button>
                            </div>
                        </div>

                        {/* Word Meanings Overlay */}
                        <AnimatePresence>
                            {showWordMeanings && shloka.wordMeanings && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl max-w-3xl flex flex-wrap justify-center gap-4"
                                >
                                    {shloka.wordMeanings.map((wm, i) => (
                                        <div key={i} className="text-center p-3 rounded-xl bg-white/5 border border-white/5 min-w-[120px]">
                                            <p className={cn("text-base mb-1", theme.accent)}>{wm.devanagari}</p>
                                            <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest mb-1">{wm.sanskrit}</p>
                                            <p className="text-white/60 text-xs italic">{lang === "hi" ? wm.hindi : wm.english}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Revelation Controller */}
                        <div className="min-h-[180px] w-full flex flex-col items-center justify-center">
                            <AnimatePresence mode="wait">
                                {!isRevealed ? (
                                    <motion.div
                                        key="prompt"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="cursor-pointer group"
                                        onClick={() => setIsRevealed(true)}
                                    >
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                                                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity", theme.particle)} />
                                                <Eye className="w-5 h-5 text-white/30 group-hover:text-white group-hover:animate-pulse relative z-10" />
                                            </div>
                                            <p className="text-[9px] text-white/20 uppercase tracking-[0.5em] group-hover:text-white/40 transition-colors text-center">
                                                Space to Draw the Bow<br />Release to Reveal
                                            </p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="meaning"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-10 w-full"
                                    >
                                        <p className="text-xl md:text-3xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto text-center">
                                            {lang === "hi" ? shloka.hindi : shloka.english}
                                        </p>

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 max-w-3xl mx-auto text-center"
                                        >
                                            <div className="flex items-center justify-center gap-3 mb-4 opacity-70">
                                                <ThemeIcon className={cn("w-4 h-4", theme.accent)} />
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">The Arrow Hits</span>
                                            </div>
                                            <p className="text-white/80 font-serif italic text-xl leading-relaxed">
                                                {lang === "hi" ? shloka.simpleExplanationHindi : shloka.simpleExplanation}
                                            </p>
                                        </motion.div>

                                        {/* Continue Hint (Desktop Only) */}
                                        <div className="hidden md:block opacity-20 text-[8px] uppercase tracking-[0.4em] font-black text-center">
                                            Press Enter to Forge Ahead
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Bottom Progress Bar */}
            <div className="relative z-20 h-1 bg-white/5 flex">
                <motion.div
                    className={cn("h-full transition-colors duration-1000", theme.colors.split(' ')[1] ? theme.colors.split(' ')[1].replace('via-', 'bg-') : 'bg-emerald-900')}
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / MUNDAKA_SHLOKAS.length) * 100}%` }}
                    style={{ backgroundColor: theme.glow.replace('0.3', '0.6') }}
                />
            </div>
        </div>
    );
}
