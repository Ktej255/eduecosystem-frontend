"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Volume2, Info, Ear, Waves, Droplets, Leaf } from "lucide-react";
import { CHANDOGYA_SHLOKAS } from "./data/chandogya-shlokas";
import { cn } from "@/lib/utils";

const CHANDOGYA_THEMES = {
    6: {
        name: "Sadvidya",
        title: "The Ultimate Instruction",
        colors: "from-amber-950 via-yellow-900 to-black",
        accent: "text-amber-400",
        glow: "rgba(251,191,36,0.3)",
        particle: "bg-amber-500/20",
        icon: Waves
    }
};

export function ChandogyaImmersiveExperience({ lang = "en" }: { lang?: "en" | "hi" }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    const [showWordMeanings, setShowWordMeanings] = useState(false);

    const shloka = CHANDOGYA_SHLOKAS[currentIndex];
    const theme = CHANDOGYA_THEMES[shloka.chapter as keyof typeof CHANDOGYA_THEMES] || CHANDOGYA_THEMES[6];
    const ThemeIcon = theme.icon;

    const handleNext = () => {
        if (currentIndex < CHANDOGYA_SHLOKAS.length - 1) {
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
            {/* Sonic Wave Background Layer */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <motion.div
                    key={`bg-${shloka.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className={cn("absolute inset-0 bg-gradient-to-b transition-colors duration-2000", theme.colors)}
                />

                {/* Pulsating Sonic Rings (Udgitha representation) */}
                <AnimatePresence>
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 pointer-events-none">
                        {[40, 60, 80, 100].map((size, i) => (
                            <motion.div
                                key={`wave-${i}`}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{
                                    scale: [1, 1.2, 1.5, 2],
                                    opacity: [0.8, 0.4, 0.1, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                    delay: i * 1
                                }}
                                className="absolute border border-amber-500/30 rounded-[40%]"
                                style={{
                                    width: `${size}vw`,
                                    height: `${size}vw`,
                                }}
                            />
                        ))}
                    </div>
                </AnimatePresence>

                {/* Core Illumination matching "Tat Tvam Asi" */}
                {shloka.id === 6 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.1, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-[80vw] h-[80vw] rounded-full blur-[100px] bg-amber-500/10 pointer-events-none"
                    />
                )}
            </div>

            {/* Header / Navigation */}
            <div className="relative z-20 p-6 flex items-center justify-between text-white/40 uppercase tracking-[0.3em] text-[10px] font-black">
                <div className="flex items-center gap-4">
                    <span className={cn("transition-colors duration-500 flex items-center gap-2", theme.accent)}>
                        <ThemeIcon className="w-3 h-3" />
                        Ch {shloka.chapter}
                    </span>
                    <span className="opacity-20">|</span>
                    <span>Sec {shloka.section}</span>
                    <span className="opacity-20">|</span>
                    <span>Vs {shloka.verse}</span>
                </div>
                <div className="flex items-center gap-6">
                    <button onClick={handlePrev} disabled={currentIndex === 0} className="hover:text-white transition-colors disabled:opacity-0">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="font-mono">{currentIndex + 1} / {CHANDOGYA_SHLOKAS.length}</span>
                    <button onClick={handleNext} disabled={currentIndex === CHANDOGYA_SHLOKAS.length - 1} className="hover:text-white transition-colors disabled:opacity-0">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 max-w-6xl mx-auto w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={shloka.id}
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full flex flex-col items-center gap-12"
                    >
                        {/* Theme Heading */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-center"
                        >
                            <h3 className={cn("text-xs font-black mb-2 tracking-[0.3em] uppercase", theme.accent)}>
                                {theme.title}
                            </h3>
                            <h4 className="text-white/70 text-lg font-light tracking-widest italic">
                                {shloka.theme}
                            </h4>
                        </motion.div>

                        {/* Sanskrit Core */}
                        <div className="relative group flex flex-col items-center">
                            <h2
                                className="text-3xl md:text-5xl lg:text-7xl text-white font-serif leading-[1.5] text-center text-balance max-w-6xl drop-shadow-[0_0_25px_rgba(251,191,36,0.15)]"
                                style={{ fontFamily: "var(--font-devanagari)" }}
                            >
                                {shloka.sanskrit}
                            </h2>

                            {/* Audio/Word Meaning Toggle */}
                            <div className="mt-10 flex gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <button
                                    onClick={() => setShowWordMeanings(!showWordMeanings)}
                                    className={cn(
                                        "p-3 rounded-full border border-white/10 hover:bg-white/10 transition-all",
                                        showWordMeanings && "bg-white/20 border-white/30"
                                    )}
                                >
                                    <Info className="w-5 h-5 text-white/50" />
                                </button>
                                <button className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-all">
                                    <Volume2 className="w-5 h-5 text-white/50" />
                                </button>
                            </div>
                        </div>

                        {/* Word Meanings Overlay */}
                        <AnimatePresence>
                            {showWordMeanings && shloka.wordMeanings && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className="bg-black/50 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] max-w-4xl flex flex-wrap justify-center gap-4"
                                >
                                    {shloka.wordMeanings.map((wm, i) => (
                                        <div key={i} className="text-center p-4 rounded-xl bg-white/5 border border-white/10 flex-1 min-w-[180px]">
                                            <p className={cn("text-xl mb-2 font-serif", theme.accent)}>{wm.devanagari}</p>
                                            <p className="text-white/40 text-[10px] uppercase font-black tracking-widest mb-2">{wm.sanskrit}</p>
                                            <p className="text-white/70 text-sm italic">{lang === "hi" ? wm.hindi : wm.english}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Revelation Controller */}
                        <div className="min-h-[200px] w-full flex flex-col items-center justify-center">
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
                                            <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-500/40 transition-all duration-700 relative overflow-hidden backdrop-blur-sm">
                                                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity", theme.particle)} />
                                                <Ear className="w-8 h-8 text-white/40 group-hover:text-amber-300 transition-colors relative z-10" />
                                            </div>
                                            <p className="text-[10px] text-white/20 uppercase tracking-[0.5em] group-hover:text-amber-200/50 transition-colors text-center leading-relaxed">
                                                Space to Listen<br />Receive the Teaching
                                            </p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="meaning"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-10 w-full max-w-4xl mx-auto"
                                    >
                                        <p className="text-2xl md:text-4xl text-white/90 font-light leading-relaxed text-center">
                                            {lang === "hi" ? shloka.hindi : shloka.english}
                                        </p>

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="bg-amber-900/10 backdrop-blur-xl p-10 rounded-[2.5rem] border border-amber-500/20 text-center relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                                <ThemeIcon className="w-32 h-32" />
                                            </div>
                                            <div className="relative z-10">
                                                <div className="flex items-center justify-center gap-4 mb-6 opacity-70">
                                                    <Info className={cn("w-5 h-5", theme.accent)} />
                                                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white">The Teaching</span>
                                                </div>
                                                <p className="text-white/80 font-serif italic text-2xl leading-relaxed">
                                                    {lang === "hi" ? shloka.simpleExplanationHindi : shloka.simpleExplanation}
                                                </p>
                                            </div>
                                        </motion.div>

                                        {/* Continue Hint (Desktop Only) */}
                                        <div className="hidden md:block opacity-20 text-[9px] uppercase tracking-[0.6em] font-black text-center mt-6">
                                            Press Enter to Continue the Instruction
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
                    className={cn("h-full transition-colors duration-1000", theme.colors.split(' ')[1]?.replace('via-', 'bg-') || 'bg-amber-600')}
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / CHANDOGYA_SHLOKAS.length) * 100}%` }}
                    style={{ backgroundColor: theme.glow.replace('0.3', '0.7') }}
                />
            </div>
        </div>
    );
}
