"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, X } from "lucide-react";
import { kathaData } from "@/components/batch2/upanishads/data/katha-shlokas";
import { getKathaShlokaImage } from "@/components/batch2/upanishads/data/katha-images";

// 100x UI for Katha Upanishad
export function KathaImmersiveExperience({ lang, onClose }: { lang: "en" | "hi", onClose?: () => void }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);

    // We filter for the core philosophical sections (Third Boon onward) for the immersive focus
    const shlokas = kathaData.filter(d =>
        d.section.includes("Third Boon") ||
        d.section === "The Chariot" ||
        d.section === "The Inner Ruler" ||
        d.section === "Final Teaching"
    );

    // Safety check if filter is too aggressive
    const displayShlokas = shlokas.length > 0 ? shlokas : kathaData.slice(0, 20);

    const shloka = displayShlokas[currentIndex] as any;
    const image = getKathaShlokaImage(shloka?.id);

    // Keyboard navigation
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
                    if (currentIndex < displayShlokas.length - 1) {
                        setCurrentIndex(prev => Math.min(prev + 1, kathaData.length - 1));
                        setIsRevealed(false);
                    }
                }
            }
            if (e.code === "ArrowRight") {
                if (isRevealed) {
                    setCurrentIndex(prev => Math.min(prev + 1, kathaData.length - 1));
                    setIsRevealed(false);
                }
            }
            if (e.code === "ArrowLeft") {
                setCurrentIndex(prev => Math.max(0, prev - 1));
                setIsRevealed(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isRevealed, displayShlokas.length, kathaData.length, onClose]);

    if (!shloka) return null;

    return (
        <div className="fixed inset-0 bg-black z-[100] font-sans select-none overflow-hidden">
            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/5 hover:bg-white/20 text-white/50 hover:text-white transition-all backdrop-blur-md border border-white/10"
                >
                    <X className="w-6 h-6" />
                </button>
            )}
            {/* Immersive Background - Katha focuses on Dark/Fire/Ember aesthetics */}
            <div className="absolute inset-0 z-0">
                {image ? (
                    <motion.img
                        key={`img-${shloka.id}`}
                        src={image}
                        initial={{ opacity: 0, scale: 1.1, filter: "brightness(0.3) saturate(1.5)" }}
                        animate={{ opacity: 0.25, scale: 1, filter: "brightness(0.6) saturate(1.2)" }}
                        transition={{ duration: 5, ease: "easeOut" }}
                        className="w-full h-full object-cover mix-blend-lighten"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-b from-red-950 via-neutral-950 to-black" />
                )}

                {/* Ember Particle Simulation (CSS fallback) */}
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(220,38,38,0.15)_0%,transparent_60%)] pointer-events-none"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 text-center max-w-5xl mx-auto w-full">

                {/* Progress Indicators */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-1 opacity-40">
                    {displayShlokas.map((_, i) => (
                        <div
                            key={i}
                            className={`h-0.5 rounded-full transition-all duration-1000 ${i === currentIndex ? 'w-10 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,1)]' : i < currentIndex ? 'w-2 bg-red-900' : 'w-2 bg-neutral-900'}`}
                        />
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={`content-${shloka.id}`}
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="space-y-16 w-full"
                    >
                        {/* Sanskrit Core */}
                        <div className="space-y-6">
                            <span className="text-red-500/50 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Katha • Valli {shloka.valli} • {shloka.section}</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl text-red-50 font-serif leading-tight text-center text-balance mx-auto drop-shadow-2xl" style={{ fontFamily: "'Noto Sans Devanagari', serif" }}>
                                {shloka.sanskrit}
                            </h2>
                            {shloka.transliteration && (
                                <p className="text-red-400/40 text-lg tracking-widest uppercase mt-8 font-light italic">
                                    {shloka.transliteration}
                                </p>
                            )}
                        </div>

                        {/* Hidden Translation (Reveals on command) */}
                        <div className="min-h-[250px] flex flex-col items-center justify-center">
                            <AnimatePresence mode="wait">
                                {!isRevealed ? (
                                    <motion.div
                                        key="prompt"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 flex flex-col items-center gap-4 cursor-pointer mt-10"
                                        onClick={() => setIsRevealed(true)}
                                    >
                                        <div className="w-16 h-16 rounded-full border border-red-950 flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.05)]">
                                            <Eye className="w-6 h-6 opacity-40 text-red-500" />
                                        </div>
                                        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-red-900/60">Seek the <kbd className="font-mono bg-neutral-900 px-2 py-1 rounded mx-1 text-red-500/50">SPACE</kbd> Fire</p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="meaning"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 1 }}
                                        className="space-y-8 mt-4"
                                    >
                                        <p className="text-2xl md:text-4xl text-neutral-200 font-light leading-relaxed max-w-4xl mx-auto drop-shadow-md">
                                            {lang === "en" ? shloka.english : shloka.hindi}
                                        </p>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1, duration: 1 }}
                                            className="bg-red-950/20 backdrop-blur-md p-6 rounded-2xl border border-red-900/30 max-w-2xl mx-auto shadow-[0_0_30px_rgba(220,38,38,0.05)]"
                                        >
                                            <div className="flex items-center justify-center gap-3 mb-2 opacity-70">
                                                <Sparkles className="w-4 h-4 text-red-500" />
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-400">Yama's Secret</span>
                                            </div>
                                            <p className="text-red-200/80 text-lg italic font-serif">
                                                {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                                            </p>
                                        </motion.div>

                                        {currentIndex < displayShlokas.length - 1 ? (
                                            <motion.button
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 2 }}
                                                onClick={() => {
                                                    setCurrentIndex(prev => Math.min(displayShlokas.length - 1, prev + 1));
                                                    setIsRevealed(false);
                                                }}
                                                className="mt-8 text-red-500 hover:text-red-400 text-[10px] font-black uppercase tracking-[0.4em] transition-colors"
                                            >
                                                Press <kbd className="font-mono bg-red-950 px-2 py-1 rounded mx-1 text-red-600">ARROW RIGHT</kbd> to Progress
                                            </motion.button>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 2 }}
                                                className="mt-8 text-red-900/50 text-[10px] font-black uppercase tracking-[0.4em]"
                                            >
                                                Immortality Attained.
                                            </motion.div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
