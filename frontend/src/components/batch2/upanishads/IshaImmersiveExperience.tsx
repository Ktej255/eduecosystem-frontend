"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye } from "lucide-react";
import { ISHA_UPANISHAD } from "@/components/batch2/upanishads/data/isha-shlokas";
import { getShlokaImage } from "@/components/batch2/upanishads/data/isha-images";

// 100x UI for Isha Upanishad
export function IshaImmersiveExperience({ lang }: { lang: "en" | "hi" }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);

    // We use all shlokas for Isha as it's a short 18-verse text
    const shlokas = ISHA_UPANISHAD;
    const shloka = shlokas[currentIndex] as any;
    const image = getShlokaImage(shloka?.number);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "Space") {
                e.preventDefault();
                setIsRevealed(true);
            }
            if (e.code === "ArrowRight" || e.key === "Enter") {
                if (isRevealed) {
                    setCurrentIndex(prev => Math.min(shlokas.length - 1, prev + 1));
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
    }, [isRevealed, shlokas.length]);

    if (!shloka) return null;

    return (
        <div className="fixed inset-0 bg-black z-[100] overflow-hidden flex flex-col font-sans select-none">
            {/* Immersive Background - Isha focuses on High Contrast Gold/Black */}
            <div className="absolute inset-0 z-0">
                {image ? (
                    <motion.img
                        key={`img-${shloka.number}`}
                        src={image}
                        initial={{ opacity: 0, scale: 1.1, filter: "brightness(0.5) contrast(1.2)" }}
                        animate={{ opacity: 0.25, scale: 1, filter: "brightness(0.8) contrast(1.1)" }}
                        transition={{ duration: 4, ease: "easeOut" }}
                        className="w-full h-full object-cover mix-blend-screen"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-b from-amber-950 to-black" />
                )}

                {/* Blinding Light Pulse to simulate Divine Pervasion */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.2)_0%,transparent_70%)] pointer-events-none"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 text-center max-w-5xl mx-auto w-full">

                {/* Progress Indicators */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-50">
                    {shlokas.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 rounded-full transition-all duration-1000 ${i === currentIndex ? 'w-12 bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,1)]' : i < currentIndex ? 'w-2 bg-amber-900' : 'w-2 bg-stone-900'}`}
                        />
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={`content-${shloka.number}`}
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="space-y-16 w-full"
                    >
                        {/* Sanskrit Core */}
                        <div className="space-y-6">
                            <span className="text-amber-500/50 text-xs font-black uppercase tracking-[0.5em] mb-4 block">Isha Mantra {shloka.number}</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl text-amber-50 font-serif leading-tight text-center text-balance mx-auto drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]" style={{ fontFamily: "'Noto Sans Devanagari', serif" }}>
                                {shloka.devanagari}
                            </h2>
                            <p className="text-amber-400/50 text-lg tracking-widest uppercase mt-8 font-light italic">
                                {shloka.transliteration}
                            </p>
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
                                        className="text-stone-600 flex flex-col items-center gap-4 cursor-pointer mt-10"
                                        onClick={() => setIsRevealed(true)}
                                    >
                                        <div className="w-16 h-16 rounded-full border border-stone-800 flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(245,158,11,0.05)]">
                                            <Eye className="w-6 h-6 opacity-50" />
                                        </div>
                                        <p className="text-[10px] uppercase tracking-[0.4em] font-bold">Press <kbd className="font-mono bg-stone-900 px-2 py-1 rounded mx-1">SPACE</kbd> for Illumination</p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="meaning"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 1 }}
                                        className="space-y-8 mt-4"
                                    >
                                        <p className="text-2xl md:text-4xl text-amber-100 font-light leading-relaxed max-w-4xl mx-auto drop-shadow-md">
                                            {lang === "en" ? shloka.meaningEnglish : shloka.meaningHindi}
                                        </p>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1, duration: 1 }}
                                            className="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-amber-500/20 max-w-2xl mx-auto shadow-[0_0_30px_rgba(245,158,11,0.05)]"
                                        >
                                            <div className="flex items-center justify-center gap-3 mb-2 opacity-70">
                                                <Sparkles className="w-4 h-4 text-amber-400" />
                                                <span className="text-xs font-black uppercase tracking-widest text-amber-500">The Golden Disc Removed</span>
                                            </div>
                                            <p className="text-amber-200/90 text-lg italic font-serif">
                                                {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                                            </p>
                                        </motion.div>

                                        {currentIndex < shlokas.length - 1 ? (
                                            <motion.button
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 2 }}
                                                onClick={() => {
                                                    setCurrentIndex(prev => Math.min(shlokas.length - 1, prev + 1));
                                                    setIsRevealed(false);
                                                }}
                                                className="mt-8 text-amber-600 hover:text-amber-400 text-[10px] font-black uppercase tracking-[0.4em] transition-colors"
                                            >
                                                Press <kbd className="font-mono bg-amber-950/50 px-2 py-1 rounded mx-1 text-amber-500/80">ENTER</kbd> to Continue the Journey
                                            </motion.button>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 2 }}
                                                className="mt-8 text-amber-500/50 text-[10px] font-black uppercase tracking-[0.4em]"
                                            >
                                                The Journey is Complete. Om Shanti.
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
