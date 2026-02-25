"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Volume2, Info, Moon, Sparkles, Wind, Expand, X } from "lucide-react";
import { BRIHADARANYAKA_SHLOKAS } from "./data/brihadaranyaka-shlokas";
import { cn } from "@/lib/utils";

// Using a monochromatic scale to represent "Neti Neti" - stripping away colors
const BRIHADARANYAKA_THEMES = {
    1: {
        name: "Madhu Kanda",
        colors: "from-zinc-950 via-neutral-900 to-black",
        accent: "text-zinc-300",
        glow: "rgba(212,212,216,0.1)",
        particle: "bg-zinc-500/10",
        icon: Expand
    },
    2: {
        name: "Muni Kanda",
        colors: "from-slate-950 via-gray-900 to-black",
        accent: "text-slate-300",
        glow: "rgba(203,213,225,0.1)",
        particle: "bg-slate-500/10",
        icon: Wind
    },
    3: {
        name: "Muni Kanda",
        colors: "from-gray-950 via-zinc-900 to-black",
        accent: "text-gray-300",
        glow: "rgba(156,163,175,0.1)",
        particle: "bg-gray-500/10",
        icon: Wind
    },
    4: {
        name: "Muni Kanda",
        colors: "from-stone-950 via-neutral-900 to-black",
        accent: "text-stone-300",
        glow: "rgba(214,211,209,0.1)",
        particle: "bg-stone-500/10",
        icon: Moon
    },
    5: {
        name: "Khila Kanda",
        colors: "from-neutral-950 via-zinc-950 to-black",
        accent: "text-neutral-300",
        glow: "rgba(163,163,163,0.1)",
        particle: "bg-neutral-500/10",
        icon: Sparkles
    }
};

export function BrihadaranyakaImmersiveExperience({ lang = "en", onClose }: { lang?: "en" | "hi", onClose?: () => void }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    const [showWordMeanings, setShowWordMeanings] = useState(false);

    const shloka = BRIHADARANYAKA_SHLOKAS[currentIndex];
    const theme = BRIHADARANYAKA_THEMES[shloka.chapter as keyof typeof BRIHADARANYAKA_THEMES] || BRIHADARANYAKA_THEMES[1];
    const ThemeIcon = theme.icon;

    const handleNext = () => {
        if (currentIndex < BRIHADARANYAKA_SHLOKAS.length - 1) {
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
    }, [currentIndex, onClose]);

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

            {/* The Great Void Background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <motion.div
                    key={`bg-${shloka.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                    className={cn("absolute inset-0 bg-gradient-to-b transition-colors duration-[3000ms]", theme.colors)}
                />

                {/* Subdued 'Neti Neti' void pulse */}
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-[90vw] h-[90vw] rounded-full blur-[120px] bg-white pointer-events-none mix-blend-overlay"
                />

                {/* Dust/Void Particles */}
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={`dust-${i}`}
                        className={cn("absolute rounded-full", theme.particle)}
                        style={{ width: Math.random() * 2 + 1, height: Math.random() * 2 + 1 }}
                        initial={{
                            x: Math.random() * 100 + "vw",
                            y: Math.random() * 100 + "vh",
                            opacity: 0
                        }}
                        animate={{
                            y: [null, Math.random() * -100 - 50],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Header / Navigation Minimalist */}
            <div className="relative z-20 p-8 flex items-center justify-between text-zinc-500 uppercase tracking-[0.4em] text-[9px] font-black">
                <div className="flex items-center gap-6">
                    <span className={cn("transition-colors duration-1000 flex items-center gap-3", theme.accent)}>
                        <ThemeIcon className="w-3 h-3" />
                        Brihadaranyaka
                    </span>
                    <span className="opacity-20">|</span>
                    <span>Ch {shloka.chapter} . {shloka.section} . {shloka.verse}</span>
                </div>
                <div className="flex items-center gap-8">
                    <button onClick={handlePrev} disabled={currentIndex === 0} className="hover:text-zinc-200 transition-colors disabled:opacity-0">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="font-mono tracking-widest">{currentIndex + 1} / {BRIHADARANYAKA_SHLOKAS.length}</span>
                    <button onClick={handleNext} disabled={currentIndex === BRIHADARANYAKA_SHLOKAS.length - 1} className="hover:text-zinc-200 transition-colors disabled:opacity-0">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 max-w-5xl mx-auto w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={shloka.id}
                        initial={{ opacity: 0, scale: 1.02, filter: "blur(20px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.98, filter: "blur(20px)" }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="w-full flex flex-col items-center gap-16"
                    >
                        {/* Theme Heading */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-center"
                        >
                            <h4 className="text-zinc-400/50 text-[10px] font-black tracking-[0.4em] uppercase mb-4">
                                {shloka.theme}
                            </h4>
                        </motion.div>

                        {/* Sanskrit Core - Monolithic & Stark */}
                        <div className="relative group flex flex-col items-center">
                            <h2
                                className="text-3xl md:text-5xl lg:text-6xl text-zinc-100 font-serif leading-[1.7] text-center text-balance font-light"
                                style={{ fontFamily: "var(--font-devanagari)" }}
                            >
                                {shloka.sanskrit}
                            </h2>

                            {/* Minimal Audio/Word Meaning Toggle */}
                            <div className="mt-12 flex gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <button
                                    onClick={() => setShowWordMeanings(!showWordMeanings)}
                                    className={cn(
                                        "p-3 rounded-full border border-zinc-800 hover:border-zinc-500 transition-all",
                                        showWordMeanings && "border-zinc-400 bg-zinc-900"
                                    )}
                                >
                                    <Info className="w-4 h-4 text-zinc-400" />
                                </button>
                                <button className="p-3 rounded-full border border-zinc-800 hover:border-zinc-500 transition-all">
                                    <Volume2 className="w-4 h-4 text-zinc-400" />
                                </button>
                            </div>
                        </div>

                        {/* Word Meanings Overlay - Stark boxes */}
                        <AnimatePresence>
                            {showWordMeanings && shloka.wordMeanings && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="border border-zinc-800/50 bg-black/80 backdrop-blur-3xl p-8 rounded-2xl max-w-4xl flex flex-wrap justify-center gap-2"
                                >
                                    {shloka.wordMeanings.map((wm, i) => (
                                        <div key={i} className="text-center p-6 border border-zinc-800/50 flex-1 min-w-[200px]">
                                            <p className="text-xl mb-3 font-serif text-zinc-200">{wm.devanagari}</p>
                                            <p className="text-zinc-500 text-[9px] uppercase font-black tracking-widest mb-3">{wm.sanskrit}</p>
                                            <p className="text-zinc-400 text-sm font-light italic">{lang === "hi" ? wm.hindi : wm.english}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Neti Neti Revelation Controller */}
                        <div className="min-h-[200px] w-full flex flex-col items-center justify-center">
                            <AnimatePresence mode="wait">
                                {!isRevealed ? (
                                    <motion.div
                                        key="prompt"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="cursor-pointer group flex flex-col items-center"
                                        onClick={() => setIsRevealed(true)}
                                    >
                                        <div className="w-px h-16 bg-gradient-to-b from-transparent via-zinc-500 to-transparent group-hover:h-24 transition-all duration-1000 mb-6 opacity-30 group-hover:opacity-100" />
                                        <p className="text-[9px] text-zinc-500 uppercase tracking-[0.6em] group-hover:text-zinc-300 transition-colors text-center font-black">
                                            Press Space to Strip Away the Veil
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="meaning"
                                        initial={{ opacity: 0, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, filter: "blur(0px)" }}
                                        transition={{ duration: 1.5 }}
                                        className="space-y-12 w-full max-w-3xl mx-auto flex flex-col items-center"
                                    >
                                        <div className="w-12 h-px bg-zinc-800 mb-4" />
                                        <p className="text-2xl md:text-3xl text-zinc-300 font-light leading-relaxed text-center italic text-balance">
                                            "{lang === "hi" ? shloka.hindi : shloka.english}"
                                        </p>
                                        <div className="w-12 h-px bg-zinc-800 mt-4" />

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }}
                                            className="text-center pt-8"
                                        >
                                            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-4 block">Press Arrow Right for the Next Negation</span>
                                            <p className="text-zinc-400 font-serif text-xl md:text-2xl leading-relaxed text-balance">
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

            {/* Bottom Minimalist Progress Bar */}
            <div className="relative z-20 h-[2px] bg-zinc-900 flex">
                <motion.div
                    className="h-full bg-zinc-500 transition-all duration-[1500ms] ease-in-out"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / BRIHADARANYAKA_SHLOKAS.length) * 100}%` }}
                />
            </div>
        </div>
    );
}
