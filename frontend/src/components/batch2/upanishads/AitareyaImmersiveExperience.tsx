"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ChevronRight, ChevronLeft, Volume2, Info, Globe, Baby, Brain, Sparkles } from "lucide-react";
import { AITAREYA_SHLOKAS } from "./data/aitareya-shlokas";
import { cn } from "@/lib/utils";

const AITAREYA_THEMES = {
    1: {
        name: "Creation",
        title: "The Divine Map",
        colors: "from-blue-950 via-sky-950 to-black",
        accent: "text-sky-400",
        glow: "rgba(56,189,248,0.3)",
        particle: "bg-sky-500/20",
        icon: Globe
    },
    2: {
        name: "Births",
        title: "The Cycle",
        colors: "from-indigo-950 via-blue-900 to-black",
        accent: "text-indigo-400",
        glow: "rgba(129,140,248,0.3)",
        particle: "bg-indigo-500/20",
        icon: Baby
    },
    3: {
        name: "Awakening",
        title: "Consciousness",
        colors: "from-violet-950 via-purple-900 to-black",
        accent: "text-purple-400",
        glow: "rgba(168,85,247,0.3)",
        particle: "bg-purple-500/20",
        icon: Brain
    }
};

export function AitareyaImmersiveExperience({ lang = "en" }: { lang?: "en" | "hi" }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    const [showWordMeanings, setShowWordMeanings] = useState(false);

    const shloka = AITAREYA_SHLOKAS[currentIndex];
    const theme = AITAREYA_THEMES[shloka.chapter as keyof typeof AITAREYA_THEMES] || AITAREYA_THEMES[1];
    const ThemeIcon = theme.icon;

    const handleNext = () => {
        if (currentIndex < AITAREYA_SHLOKAS.length - 1) {
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
            {/* Background Layer with Stellar/Cosmic Visuals */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <motion.div
                    key={`bg-${shloka.chapter}-${shloka.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className={cn("absolute inset-0 bg-gradient-to-b transition-colors duration-2000", theme.colors)}
                />

                {/* Ambient Stars / Particles */}
                {[...Array(50)].map((_, i) => {
                    const size = Math.random() * 3 + 1;
                    return (
                        <motion.div
                            key={i}
                            className={cn("absolute rounded-full", theme.particle)}
                            style={{ width: size, height: size }}
                            initial={{
                                x: Math.random() * 100 + "vw",
                                y: Math.random() * 100 + "vh",
                                opacity: Math.random() * 0.5 + 0.1
                            }}
                            animate={{
                                opacity: [0.1, 0.8, 0.1],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 5,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                        />
                    );
                })}

                {/* Central Consciousness Pulse (especially active in Chapter 3) */}
                {shloka.chapter === 3 && (
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2],
                            rotate: [0, 90, 0]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className={cn("absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[80px]", theme.particle)}
                    />
                )}
            </div>

            {/* Header / Navigation */}
            <div className="relative z-20 p-6 flex items-center justify-between text-white/40 uppercase tracking-[0.3em] text-[10px] font-black">
                <div className="flex items-center gap-4">
                    <span className={cn("transition-colors duration-500 flex items-center gap-2", theme.accent)}>
                        <ThemeIcon className="w-3 h-3" />
                        Chapter {shloka.chapter}
                    </span>
                    <span className="opacity-20">|</span>
                    <span>Section {shloka.section}</span>
                    <span className="opacity-20">|</span>
                    <span>Verse {shloka.verse}</span>
                </div>
                <div className="flex items-center gap-6">
                    <button onClick={handlePrev} disabled={currentIndex === 0} className="hover:text-white transition-colors disabled:opacity-0">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="font-mono">{currentIndex + 1} / {AITAREYA_SHLOKAS.length}</span>
                    <button onClick={handleNext} disabled={currentIndex === AITAREYA_SHLOKAS.length - 1} className="hover:text-white transition-colors disabled:opacity-0">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 max-w-6xl mx-auto w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={shloka.id}
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full flex flex-col items-center gap-12"
                    >
                        {/* Theme Heading */}
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
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
                                className="text-3xl md:text-5xl lg:text-6xl text-white font-serif leading-[1.6] text-center text-balance max-w-5xl drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
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
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl max-w-4xl flex flex-wrap justify-center gap-4"
                                >
                                    {shloka.wordMeanings.map((wm, i) => (
                                        <div key={i} className="text-center p-4 rounded-xl bg-black/40 border border-white/5 flex-1 min-w-[200px]">
                                            <p className={cn("text-lg mb-2 font-serif", theme.accent)}>{wm.devanagari}</p>
                                            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-2">{wm.sanskrit}</p>
                                            <p className="text-white/70 text-sm font-light italic">{lang === "hi" ? wm.hindi : wm.english}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Revelation Controller */}
                        <div className="min-h-[220px] w-full flex flex-col items-center justify-center">
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
                                        <div className="flex flex-col items-center gap-6">
                                            <div className={cn("w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-700 relative overflow-hidden",
                                                "border-white/10 group-hover:border-white/30 group-hover:scale-110",
                                                shloka.chapter === 3 && "border-purple-500/30 group-hover:border-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                                            )}>
                                                {shloka.chapter === 3 ? (
                                                    <Sparkles className="w-6 h-6 text-purple-300 animate-pulse" />
                                                ) : (
                                                    <Eye className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                                                )}
                                            </div>
                                            <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] group-hover:text-white/60 transition-colors text-center leading-relaxed">
                                                Space to Awaken<br />Reveal the Meaning
                                            </p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="meaning"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-12 w-full max-w-4xl mx-auto"
                                    >
                                        <p className="text-xl md:text-3xl text-white/90 font-light leading-relaxed text-center text-balance">
                                            {lang === "hi" ? shloka.hindi : shloka.english}
                                        </p>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="bg-black/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 text-center relative overflow-hidden"
                                        >
                                            <div className={cn("absolute inset-0 opacity-10", theme.particle)} />
                                            <div className="relative z-10">
                                                <div className="flex items-center justify-center gap-3 mb-6 opacity-60">
                                                    <ThemeIcon className={cn("w-5 h-5", theme.accent)} />
                                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Essence</span>
                                                </div>
                                                <p className="text-white/80 font-serif italic text-xl md:text-2xl leading-relaxed">
                                                    {lang === "hi" ? shloka.simpleExplanationHindi : shloka.simpleExplanation}
                                                </p>
                                            </div>
                                        </motion.div>

                                        {/* Continue Hint (Desktop Only) */}
                                        <div className="hidden md:block opacity-30 text-[9px] uppercase tracking-[0.5em] font-black text-center mt-8">
                                            Press Enter to Proceed
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Bottom Progress Bar */}
            <div className="relative z-20 h-1.5 bg-white/5 flex">
                <motion.div
                    className={cn("h-full transition-colors duration-1000", theme.colors.split(' ')[1]?.replace('via-', 'bg-') || 'bg-sky-500')}
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / AITAREYA_SHLOKAS.length) * 100}%` }}
                    style={{ backgroundColor: theme.glow.replace('0.3', '0.8'), boxShadow: `0 0 10px ${theme.glow}` }}
                />
            </div>
        </div>
    );
}

