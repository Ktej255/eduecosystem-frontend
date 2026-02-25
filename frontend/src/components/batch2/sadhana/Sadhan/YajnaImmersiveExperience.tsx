"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Droplets, Mic, HeartPulse } from 'lucide-react';
import { TranceToggle } from '@/components/batch2/context/TranceToggle';
import { useBatch2UI } from '@/components/batch2/context/Batch2UIContext';

// 100x Immersive Havan Kund
export function YajnaImmersiveExperience() {
    const { mode, toggleMode } = useBatch2UI();
    const [isListening, setIsListening] = useState(false);
    const [audioLevel, setAudioLevel] = useState(0);
    const [ahutis, setAhutis] = useState(0);
    const [fireScale, setFireScale] = useState(1);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);

    // Audio tracking for Swaha
    useEffect(() => {
        if (!isListening) {
            if (audioContextRef.current?.state === 'running') {
                audioContextRef.current.suspend();
            }
            return;
        }

        let animationFrameId: number;

        const startListening = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
                const analyser = audioCtx.createAnalyser();
                const source = audioCtx.createMediaStreamSource(stream);

                analyser.fftSize = 256;
                source.connect(analyser);

                audioContextRef.current = audioCtx;
                analyserRef.current = analyser;
                microphoneRef.current = source;

                const dataArray = new Uint8Array(analyser.frequencyBinCount);

                const updateLevel = () => {
                    analyser.getByteFrequencyData(dataArray);
                    // Calculate RMS
                    let sum = 0;
                    for (let i = 0; i < dataArray.length; i++) {
                        sum += dataArray[i] * dataArray[i];
                    }
                    const rms = Math.sqrt(sum / dataArray.length);
                    // Normalize (0-1) roughly
                    const level = Math.min(rms / 128, 1);
                    setAudioLevel(level);

                    // Dynamic Fire
                    setFireScale(1 + level * 0.8);

                    // Detect Swaha spike (e.g., > 0.8)
                    if (level > 0.85) {
                        triggerAhuti();
                    }

                    animationFrameId = requestAnimationFrame(updateLevel);
                };

                updateLevel();

            } catch (err) {
                console.error("Microphone access denied or error:", err);
                setIsListening(false);
            }
        };

        startListening();

        return () => {
            cancelAnimationFrame(animationFrameId);
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, [isListening]);


    const triggerAhuti = () => {
        // Prevent rapid firing
        if (Math.random() < 0.1) return; // Simple debounce
        setAhutis(a => a + 1);
        if (typeof navigator !== 'undefined' && 'vibrate' in navigator) navigator.vibrate([30, 50, 30]);
    };

    if (mode !== 'immersive') return null;

    return (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center font-sans overflow-hidden">
            <div className="absolute top-6 right-6 z-50">
                <TranceToggle />
            </div>

            {/* Immersive Audio/Visual Environment */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(234,88,12,0.15)_0%,_black_70%)] opacity-80" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Minimalist Counters */}
                <div className="absolute -top-32 flex gap-12 text-center opacity-50">
                    <div>
                        <div className="text-[10px] tracking-[0.3em] text-orange-400 font-bold uppercase mb-2">Ahutis Offered</div>
                        <div className="text-5xl font-serif text-amber-500">{ahutis}</div>
                    </div>
                    {isListening && (
                        <div>
                            <div className="text-[10px] tracking-[0.3em] text-red-400 font-bold uppercase mb-2">Resonance</div>
                            <div className="text-5xl font-serif text-red-500">{Math.round(audioLevel * 100)}%</div>
                        </div>
                    )}
                </div>

                {/* The 3D-ish Fire Pit */}
                <motion.div
                    className="relative w-96 h-96 mt-20"
                    animate={{ scale: fireScale }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {/* SVG Base */}
                    <svg viewBox="0 0 100 100" className="absolute bottom-0 w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] opacity-50 block rotate-45 scale-y-50">
                        <polygon points="50,10 90,50 50,90 10,50" fill="#2d1000" stroke="#71320b" strokeWidth="2" />
                    </svg>

                    {/* The Flames */}
                    <div className="absolute inset-0 flex items-center justify-center -translate-y-12">
                        <motion.div animate={{ scale: [1, 1.05, 1], rotate: [-2, 2, -2] }} transition={{ repeat: Infinity, duration: 3 }}>
                            <Flame className="w-64 h-64 text-orange-600 fill-orange-600 opacity-80 blur-[2px] drop-shadow-[0_0_80px_rgba(234,88,12,0.5)] absolute -translate-x-1/2 -translate-y-1/2" />
                        </motion.div>
                        <motion.div animate={{ scale: [1, 1.1, 1], rotate: [2, -2, 2] }} transition={{ repeat: Infinity, duration: 2.1 }}>
                            <Flame className="w-48 h-48 text-amber-500 fill-amber-500 opacity-90 blur-[1px] absolute -translate-x-1/2 -translate-y-1/2 mt-8" />
                        </motion.div>
                        <motion.div animate={{ scale: [1, 1.2, 1], y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                            <Flame className="w-24 h-24 text-yellow-200 fill-yellow-200 absolute -translate-x-1/2 -translate-y-1/2 mt-20" />
                        </motion.div>
                    </div>

                    {/* Interactive Drop / Audio Trigger overlay */}
                    <div className="absolute inset-0 z-20 cursor-pointer" onClick={triggerAhuti} />
                </motion.div>

                {/* Controls Area */}
                <div className="mt-24 flex flex-col items-center gap-6">
                    <button
                        onClick={() => setIsListening(!isListening)}
                        className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-all border ${isListening
                                ? 'bg-red-500/20 text-red-400 border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.2)]'
                                : 'bg-white/5 text-stone-400 border-white/10 hover:bg-white/10'
                            }`}
                    >
                        <Mic className={`w-4 h-4 ${isListening ? 'animate-pulse' : ''}`} />
                        {isListening ? 'Audio Reactive Active' : 'Enable Microphone Tracking'}
                    </button>

                    {!isListening && (
                        <p className="text-stone-600 text-xs tracking-widest uppercase font-mono mt-4">
                            Or Tap the Fire to Offer Ahuti
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
