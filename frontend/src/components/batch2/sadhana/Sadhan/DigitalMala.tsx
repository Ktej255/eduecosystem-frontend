'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Pause, Play, Activity, CheckCircle2, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { useSadhanaProgress } from '../hooks/useSadhanaProgress';
import { useBatch2UI } from '@/components/batch2/context/Batch2UIContext';
import { TranceToggle } from '@/components/batch2/context/TranceToggle';
import { DigitalMalaImmersive } from '@/components/batch2/sadhana/Sadhan/DigitalMalaImmersive';
import { useBatch2Events } from '../../hooks/useBatch2Events';
import { DHYANA_DATA } from '../data/dhyana-data';
import PreJapaDhyana from './PreJapaDhyana';

type MalaMode = 'vachika' | 'upanshu' | 'mansika' | 'ajapa';

const BEAD_COUNT = 108;

const MODE_CONFIG: Record<MalaMode, { label: string; desc: string; icon: React.FC<any> }> = {
    vachika: { label: 'Vachika', desc: 'Audio-guided — chant aloud', icon: Volume2 },
    upanshu: { label: 'Upanshu', desc: 'Whisper — lips move', icon: Activity },
    mansika: { label: 'Mansika', desc: 'Silent — mental chanting', icon: VolumeX },
    ajapa: { label: 'Ajapa', desc: 'Passive — auto flow', icon: Play }
};

export default function DigitalMala() {
    const { progress, incrementCount } = useSadhanaProgress();
    const { mode: uiMode } = useBatch2UI(); // Rename to avoid conflict with mala mode
    const { logEvent } = useBatch2Events();

    const [mode, setMode] = useState<MalaMode>('vachika');
    const [count, setCount] = useState(0);
    const [round, setRound] = useState(1);
    const [isActive, setIsActive] = useState(false);
    const [rhythm, setRhythm] = useState<number>(0);
    const [lastTapTime, setLastTapTime] = useState<number>(0);
    const [sessionTime, setSessionTime] = useState(0); // in seconds
    const [isComplete, setIsComplete] = useState(false);
    const [showDhyana, setShowDhyana] = useState(true);

    const pulseRef = useRef<HTMLDivElement>(null);

    // Session Timer
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (count > 0 && !isComplete) {
            interval = setInterval(() => setSessionTime(s => s + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [count, isComplete]);

    const triggerHaptic = useCallback(() => {
        if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
            navigator.vibrate(15);
        }
    }, []);

    const playBeep = useCallback(() => {
        try {
            const ctx = new window.AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.value = 432; // Healing frequency
            gain.gain.value = 0.05;
            osc.start();
            osc.stop(ctx.currentTime + 0.08);
        } catch { /* ignore audio errors */ }
    }, []);

    const handleTap = useCallback(() => {
        if (isComplete) return;

        const now = Date.now();
        if (lastTapTime > 0) setRhythm(now - lastTapTime);
        setLastTapTime(now);

        setCount(prev => {
            const newCount = prev + 1;

            // Persist to tracking
            incrementCount('daily_japa', 1);

            if (newCount >= BEAD_COUNT) {
                triggerHaptic();
                if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
                    navigator.vibrate([100, 50, 100]); // Completion pattern
                }
                setIsComplete(true);
                logEvent("mala_round_done", { module: "Digital Mala", data: { mode, duration: Math.ceil(sessionTime / 60) } });
                return BEAD_COUNT;
            }

            return newCount;
        });

        // Feedback
        if (mode === 'vachika') playBeep();
        else if (mode === 'upanshu') triggerHaptic();

        // Animation triggers
        if (pulseRef.current) {
            pulseRef.current.classList.remove('animate-ping-once');
            void pulseRef.current.offsetWidth;
            pulseRef.current.classList.add('animate-ping-once');
        }
    }, [mode, lastTapTime, isComplete, incrementCount, triggerHaptic, playBeep, logEvent, sessionTime]);

    // Ajapa Auto-chant
    useEffect(() => {
        if (mode !== 'ajapa' || !isActive || isComplete) return;
        const interval = setInterval(() => handleTap(), 2500);
        return () => clearInterval(interval);
    }, [mode, isActive, isComplete, handleTap]);

    // Keyboard support (Spacebar)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                handleTap();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleTap]);

    const handleReset = () => {
        setCount(0);
        setRound(r => r + 1);
        setIsComplete(false);
        setIsActive(false);
        setSessionTime(0);
    };


    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    if (showDhyana) {
        return <PreJapaDhyana
            deityId={progress.activeSadhanaId || "ganesha"}
            onComplete={() => setShowDhyana(false)}
        />;
    }

    if (uiMode === 'immersive') {
        return <DigitalMalaImmersive />;
    }

    return (
        <div className="max-w-4xl mx-auto h-[calc(100vh-120px)] flex flex-col justify-between py-4 md:py-8 relative overflow-hidden">

            {/* Global Toggle for Digital Mala */}
            <div className="absolute top-0 right-0 z-50">
                <TranceToggle />
            </div>

            {/* Header / Mode Selector */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 mt-8 md:mt-0 flex-shrink-0">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-amber-950">Digital Mala</h1>
                    <p className="text-amber-800/70 text-sm mt-1">
                        Round {round} • {formatTime(sessionTime)}
                    </p>
                </div>

                <div className="flex bg-card p-1.5 rounded-2xl border border-amber-200 shadow-sm">
                    {(Object.entries(MODE_CONFIG) as [MalaMode, typeof MODE_CONFIG[MalaMode]][]).map(([m, config]) => {
                        const Icon = config.icon;
                        const isSelected = mode === m;
                        return (
                            <button
                                key={m}
                                onClick={() => { setMode(m); setIsActive(false); }}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${isSelected
                                    ? 'bg-amber-600 text-white shadow-md'
                                    : 'text-amber-800/60 hover:text-amber-900 hover:bg-amber-50'
                                    }`}
                                title={config.desc}
                            >
                                <Icon className="w-4 h-4" />
                                <span className="hidden sm:inline">{config.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Central Interaction Zone */}
            <div className="flex-1 flex flex-col items-center justify-center relative">

                <AnimatePresence mode="wait">
                    {isComplete ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center z-10"
                        >
                            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-emerald-200">
                                <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                            </div>
                            <h2 className="text-4xl font-serif font-bold text-amber-950 mb-2">Round Complete</h2>
                            <p className="text-amber-800/70 mb-8">You have completed 108 chants in {formatTime(sessionTime)}.</p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto mt-6">
                                <Link
                                    href="/student/batch2/sadhana"
                                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-emerald-600/20 transition-all font-sans w-full sm:w-auto text-center justify-center"
                                >
                                    Conclude Practice
                                </Link>
                                <button
                                    onClick={handleReset}
                                    className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-amber-600/20 transition-all w-full sm:w-auto justify-center"
                                >
                                    <RotateCcw className="w-5 h-5" />
                                    Begin Next Round
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            className="relative flex items-center justify-center cursor-pointer group"
                            onClick={() => mode === 'ajapa' ? setIsActive(!isActive) : handleTap()}
                            whileTap={mode !== 'ajapa' ? { scale: 0.95 } : {}}
                        >
                            {/* SVG Process Ring with 108 Beads */}
                            <svg className="w-72 h-72 md:w-96 md:h-96 drop-shadow-xl z-20" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="54" fill="none" className="stroke-amber-100" strokeWidth="0.5" />

                                {/* 108 Beads + 1 Meru (Guru Bead) */}
                                {Array.from({ length: 108 }).map((_, i) => {
                                    // Start at top (-PI/2) and go clockwise
                                    const angle = (i * 2 * Math.PI) / 108 - Math.PI / 2;
                                    const cx = 60 + 54 * Math.cos(angle);
                                    const cy = 60 + 54 * Math.sin(angle);
                                    const isPassed = i < count;
                                    const isCurrent = i === count;

                                    // Add glow to current bead
                                    return (
                                        <g key={i}>
                                            {isCurrent && (
                                                <circle cx={cx} cy={cy} r="4.5" fill="rgba(245, 158, 11, 0.4)" className="animate-pulse" />
                                            )}
                                            <circle
                                                cx={cx}
                                                cy={cy}
                                                r={isCurrent ? 2.5 : 2}
                                                fill={isPassed ? '#ea580c' : isCurrent ? '#f59e0b' : '#fef3c7'}
                                                stroke={isPassed ? '#9a3412' : '#f5bc51'}
                                                strokeWidth="0.5"
                                                className="transition-all duration-300"
                                            />
                                        </g>
                                    );
                                })}

                                {/* The Meru (Guru Bead) at the top, slightly protruding */}
                                <path d="M 60 4 L 63 0 L 57 0 Z" fill="#9a3412" stroke="#ea580c" strokeWidth="0.5" />
                                <circle cx="60" cy="5" r="3" fill="#ea580c" stroke="#9a3412" strokeWidth="0.5" />
                            </svg>

                            {/* Center Counter & Immersive Effects */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-card to-amber-50/50 shadow-inner m-8 border border-amber-200 backdrop-blur-md group-hover:border-amber-400 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all z-10 overflow-hidden">

                                <div ref={pulseRef} className="absolute inset-0 rounded-full border-2 border-amber-400 opacity-0 bg-amber-400/20" />

                                {/* Floating "Om" effect for visual immersion - triggered by ping-once class via ref resetting */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-active:opacity-100 group-active:scale-150 group-active:-translate-y-4 transition-all duration-500 pointer-events-none text-amber-200/40 text-8xl font-serif">
                                    ॐ
                                </div>

                                <span className="text-7xl font-serif font-bold text-amber-700 tracking-tighter drop-shadow-sm relative z-20">
                                    {count}
                                </span>
                                <div className="max-w-[200px] text-center px-4 mt-2 mb-1 relative z-20">
                                    <p className="text-[10px] font-serif font-bold text-amber-900/60 leading-tight">
                                        {DHYANA_DATA[(progress.activeSadhanaId || "ganesha") as keyof typeof DHYANA_DATA]?.mantra || "Om"}
                                    </p>
                                </div>
                                <span className="text-amber-800/60 uppercase tracking-[0.2em] text-[10px] font-black relative z-20">
                                    {mode === 'ajapa' ? (isActive ? 'Pause' : 'Start') : 'Tap Area'}
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer Stats */}
            {!isComplete && (
                <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto w-full mt-6 bg-card p-3 sm:p-4 rounded-2xl border border-amber-200 shadow-sm flex-shrink-0">
                    <div className="text-center border-r border-amber-100">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800/50 mb-1">Rhythm</div>
                        <div className="font-mono text-lg text-amber-950">{rhythm > 0 ? `${(rhythm / 1000).toFixed(1)}s` : '—'}</div>
                    </div>
                    <div className="text-center border-r border-amber-100">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800/50 mb-1">Remaining</div>
                        <div className="font-mono text-lg text-amber-950">{BEAD_COUNT - count}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800/50 mb-1">Efficiency</div>
                        <div className="font-mono text-lg text-amber-950">{count > 0 ? Math.round((count / (sessionTime || 1)) * 60) : 0} cpm</div>
                    </div>
                </div>
            )}

            {/* Tailwing custom animation for pulse */}
            <style jsx global>{`
                @keyframes ping-once {
                    0% { transform: scale(1); opacity: 0.8; }
                    100% { transform: scale(1.1); opacity: 0; }
                }
                .animate-ping-once {
                    animation: ping-once 0.4s cubic-bezier(0, 0, 0.2, 1) forwards;
                }
            `}</style>
        </div>
    );
}
