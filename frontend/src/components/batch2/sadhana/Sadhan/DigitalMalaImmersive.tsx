"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { TranceToggle } from '@/components/batch2/context/TranceToggle';
import { useBatch2UI } from '@/components/batch2/context/Batch2UIContext';
import { useSadhanaProgress } from '../hooks/useSadhanaProgress';
import { useBatch2Events } from '../../hooks/useBatch2Events';

const BEAD_COUNT = 108;

// 100x Immersive Spatial Mala
export function DigitalMalaImmersive() {
    const { mode } = useBatch2UI();
    const { incrementCount } = useSadhanaProgress();
    const { logEvent } = useBatch2Events();
    const [count, setCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    // Physics simulation values
    const dragY = useMotionValue(0);
    const beadControls = useAnimation();

    // Audio Context for binaural clicks
    const playSpatialClick = useCallback((count: number) => {
        try {
            const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
            const osc = ctx.createOscillator();
            const panner = ctx.createStereoPanner();
            const gain = ctx.createGain();

            // Pan left/right based on count to create an orbiting effect
            const panValue = Math.sin((count / BEAD_COUNT) * Math.PI * 2);
            panner.pan.value = panValue;

            osc.frequency.value = 800 + (Math.random() * 50); // slight wood variation
            osc.type = 'triangle';
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

            osc.connect(panner);
            panner.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 0.1);
        } catch { /* Ignore */ }
    }, []);

    const handleDragEnd = async (event: any, info: any) => {
        // If swiped down sufficiently
        if (info.offset.y > 50 && !isComplete) {
            setCount(prev => {
                const next = prev + 1;
                playSpatialClick(next);
                incrementCount('daily_japa', 1);

                if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
                    navigator.vibrate(10);
                }

                if (next >= BEAD_COUNT) {
                    setIsComplete(true);
                    logEvent("mala_round_done", { module: "Digital Mala", data: { mode: "immersive" } });
                    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) navigator.vibrate([100, 50, 100]);
                    return BEAD_COUNT;
                }
                return next;
            });

            // Snap next bead into place
            await beadControls.start({ y: 0, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 400, damping: 25 } });
            dragY.set(0);
        } else {
            // Snap back if didn't pull enough
            beadControls.start({ y: 0, transition: { type: "spring", stiffness: 500, damping: 30 } });
        }
    };

    // Keyboard fallback
    useEffect(() => {
        if (mode !== 'immersive') return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space' || e.code === 'ArrowDown') {
                e.preventDefault();
                handleDragEnd(null, { offset: { y: 100 } }); // mock drag end
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [mode, handleDragEnd]);

    if (mode !== 'immersive') return null;

    return (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center font-sans overflow-hidden select-none touch-none">
            <div className="absolute top-6 right-6 z-50">
                <TranceToggle />
            </div>

            {/* Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-900 to-black opacity-80" />

            {/* The "Thread" */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-amber-900/30 -translate-x-1/2 z-0" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">

                <h2 className="absolute top-32 text-[20vw] font-serif font-black text-white/5 tracking-tighter mix-blend-overlay pointer-events-none">
                    {count}
                </h2>

                <AnimatePresence mode="wait">
                    {!isComplete ? (
                        <div className="relative flex flex-col items-center h-96 w-full mt-20">

                            {/* Previous Bead fading out */}
                            <motion.div
                                className="absolute w-12 h-12 rounded-full bg-amber-950 border border-amber-900/50 shadow-lg top-1/2 -translate-y-1/2 opacity-20 scale-75"
                                style={{ y: useTransform(dragY, [0, 200], [0, 200]) }}
                            />

                            {/* Active Draggable Bead */}
                            <motion.div
                                drag="y"
                                dragConstraints={{ top: 0, bottom: 0 }}
                                dragElastic={0.8}
                                onDragEnd={handleDragEnd}
                                style={{ y: dragY }}
                                animate={beadControls}
                                className="absolute w-24 h-24 rounded-full bg-gradient-to-b from-amber-200 to-orange-500 shadow-[0_20px_50px_rgba(245,158,11,0.5),inset_0_-10px_20px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing border-b-4 border-orange-700 flex items-center justify-center top-1/2 -translate-y-1/2 z-20"
                            >
                                {/* Texture dot */}
                                <div className="w-1 h-1 bg-orange-900/30 rounded-full absolute top-4" />
                            </motion.div>

                            {/* Next Bead coming into view */}
                            <motion.div
                                className="absolute w-16 h-16 rounded-full bg-amber-800 border-2 border-amber-600 shadow-xl top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 z-10"
                                style={{
                                    y: useTransform(dragY, [0, 150], [-100, 0]),
                                    scale: useTransform(dragY, [0, 150], [0.5, 1]),
                                    opacity: useTransform(dragY, [0, 150], [0.3, 1])
                                }}
                            />

                            <p className="absolute bottom-0 text-stone-500 text-xs tracking-[0.3em] uppercase font-bold text-center">
                                Pull Down or Press Space
                            </p>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center"
                        >
                            <div className="text-amber-500 text-9xl font-serif mb-8 drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]">ॐ</div>
                            <h3 className="text-white text-2xl tracking-[0.5em] uppercase font-light">Samapti</h3>
                            <div className="mt-12 flex flex-col items-center gap-4">
                                <Link
                                    href="/student/batch2/sadhana"
                                    className="text-white tracking-widest uppercase text-xs border border-white px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    Return to Hub
                                </Link>
                                <button
                                    onClick={() => { setCount(0); setIsComplete(false); }}
                                    className="text-stone-500 hover:text-white transition-colors tracking-widest uppercase text-[10px] border border-stone-800 px-6 py-3 rounded-full"
                                >
                                    Begin New Round
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

