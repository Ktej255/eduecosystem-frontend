"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, X } from "lucide-react";
import { kenaData } from "@/components/batch2/upanishads/data/kena-shlokas";
import { getKenaShlokaImage } from "@/components/batch2/upanishads/data/kena-images";

// 100x UI for Kena Upanishad
export function KenaImmersiveExperience({ lang, onClose }: { lang: "en" | "hi", onClose?: () => void }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);

    // We only use the philosophy shlokas for this deep dive focus mode
    const shlokas = kenaData.filter(d => d.section === "Philosophy");
    const shloka = shlokas[currentIndex] as any;
    const image = getKenaShlokaImage(shloka?.id);

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
                    if (currentIndex < shlokas.length - 1) {
                        setCurrentIndex(prev => Math.min(prev + 1, shlokas.length - 1));
                        setIsRevealed(false);
                    }
                }
            }
            if (e.code === "ArrowRight") {
                setCurrentIndex((prev) => Math.min(prev + 1, shlokas.length - 1)); // Changed to shlokas.length - 1 to match original logic
                setIsRevealed(false);
            }
            if (e.code === "ArrowLeft") {
                setCurrentIndex(prev => Math.max(0, prev - 1));
                setIsRevealed(false);
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.code === "Space") {
                // Keep revealed or hide? Let's keep it revealed to read.
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [isRevealed, shlokas.length, onClose]); // Added onClose to dependency array

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

            {/* Immersive Background */}
            <div className="absolute inset-0 z-0">
                {image ? (
                    <motion.img
                        key={`img-${shloka.id}`}
                        src={image}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.15, scale: 1 }}
                        transition={{ duration: 4, ease: "easeOut" }}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-b from-teal-950 to-black" />
                )}

                {/* Slow moving pulse to simulate breathing */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.15)_0%,transparent_60%)] pointer-events-none"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 text-center max-w-5xl mx-auto w-full">

                {/* Progress Indicators */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {shlokas.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 rounded-full transition-all duration-1000 ${i === currentIndex ? 'w-8 bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]' : i < currentIndex ? 'w-2 bg-teal-900' : 'w-2 bg-slate-900'}`}
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
                            <span className="text-teal-500/50 text-xs font-black uppercase tracking-[0.5em] mb-4 block">Kena M. {shloka.id}</span>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl text-teal-50 font-serif leading-tight text-center text-balance mx-auto drop-shadow-2xl" style={{ fontFamily: "'Noto Sans Devanagari', serif" }}>
                                {shloka.sanskrit}
                            </h2>
                            <p className="text-teal-400/50 text-xl tracking-widest uppercase mt-8 font-light italic">
                                {shloka.transliteration}
                            </p>
                        </div>

                        {/* Hidden Translation (Reveals on command) */}
                        <div className="min-h-[200px] flex flex-col items-center justify-center">
                            <AnimatePresence mode="wait">
                                {!isRevealed ? (
                                    <motion.div
                                        key="prompt"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-slate-600 flex flex-col items-center gap-4 cursor-pointer"
                                        onClick={() => setIsRevealed(true)}
                                    >
                                        <div className="w-16 h-16 rounded-full border border-slate-800 flex items-center justify-center animate-pulse">
                                            <Eye className="w-6 h-6 opacity-50" />
                                        </div>
                                        <p className="text-xs uppercase tracking-[0.3em] font-bold">Press <kbd className="font-mono bg-slate-900 px-2 py-1 rounded mx-1">SPACE</kbd> or Tap to Focus</p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="meaning"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 1 }}
                                        className="space-y-8"
                                    >
                                        <p className="text-2xl md:text-4xl text-teal-100 font-light leading-relaxed max-w-4xl mx-auto">
                                            {lang === "en" ? shloka.english : shloka.hindi}
                                        </p>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1, duration: 1 }}
                                            className="bg-gradient-to-r from-transparent via-teal-900/30 to-transparent p-6 rounded-2xl border-y border-teal-500/20 max-w-2xl mx-auto"
                                        >
                                            <div className="flex items-center justify-center gap-3 mb-2 opacity-50">
                                                <Sparkles className="w-4 h-4 text-teal-400" />
                                                <span className="text-xs font-black uppercase tracking-widest text-teal-400">Insight</span>
                                            </div>
                                            <p className="text-teal-200 text-lg italic">
                                                {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                                            </p>
                                        </motion.div>

                                        <motion.button
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 2 }}
                                            onClick={() => {
                                                setCurrentIndex(prev => Math.min(shlokas.length - 1, prev + 1));
                                                setIsRevealed(false);
                                            }}
                                            className="mt-8 text-teal-500 hover:text-teal-300 text-xs font-black uppercase tracking-[0.3em] transition-colors"
                                        >
                                            Press <kbd className="font-mono bg-slate-900 px-2 py-1 rounded mx-1 text-teal-600">SPACE</kbd> to Seek the Source
                                        </motion.button>
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

