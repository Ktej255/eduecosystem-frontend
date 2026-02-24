'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Pause, Play, Activity, CheckCircle2, RotateCcw } from 'lucide-react';
import { useSadhanaProgress } from '../hooks/useSadhanaProgress';

type MalaMode = 'vachika' | 'upanshu' | 'mansika' | 'ajapa';

const BEAD_COUNT = 108;

const MODE_CONFIG: Record<MalaMode, { label: string; desc: string; icon: React.FC<any> }> = {
    vachika: { label: 'Vachika', desc: 'Audio-guided — chant aloud', icon: Volume2 },
    upanshu: { label: 'Upanshu', desc: 'Whisper — lips move', icon: Activity },
    mansika: { label: 'Mansika', desc: 'Silent — mental chanting', icon: VolumeX },
    ajapa: { label: 'Ajapa', desc: 'Passive — auto flow', icon: Play }
};

export default function DigitalMala() {
    const { incrementCount } = useSadhanaProgress();

    const [mode, setMode] = useState<MalaMode>('vachika');
    const [count, setCount] = useState(0);
    const [round, setRound] = useState(1);
    const [isActive, setIsActive] = useState(false);
    const [rhythm, setRhythm] = useState<number>(0);
    const [lastTapTime, setLastTapTime] = useState<number>(0);
    const [sessionTime, setSessionTime] = useState(0); // in seconds
    const [isComplete, setIsComplete] = useState(false);

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
    }, [mode, lastTapTime, isComplete, incrementCount, triggerHaptic, playBeep]);

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

    const progressPercent = (count / BEAD_COUNT) * 100;
    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-between py-8">

            {/* Header / Mode Selector */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
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

                            <button
                                onClick={handleReset}
                                className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-amber-600/20 transition-all mx-auto"
                            >
                                <RotateCcw className="w-5 h-5" />
                                Begin Next Round
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            className="relative flex items-center justify-center cursor-pointer group"
                            onClick={() => mode === 'ajapa' ? setIsActive(!isActive) : handleTap()}
                            whileTap={mode !== 'ajapa' ? { scale: 0.95 } : {}}
                        >
                            {/* SVG Progress Ring */}
                            <svg className="w-72 h-72 md:w-96 md:h-96 -rotate-90 drop-shadow-xl" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="54" fill="none" className="stroke-amber-200" strokeWidth="2" />
                                <circle
                                    cx="60" cy="60" r="54"
                                    fill="transparent"
                                    stroke="url(#mala-gradient)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeDasharray={`${2 * Math.PI * 54}`}
                                    strokeDashoffset={`${2 * Math.PI * 54 * (1 - progressPercent / 100)}`}
                                    className="transition-all duration-300"
                                />
                                <defs>
                                    <linearGradient id="mala-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f59e0b" />
                                        <stop offset="100%" stopColor="#ea580c" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Center Counter */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-card to-amber-50/50 shadow-inner m-8 border border-amber-100/50 backdrop-blur-sm group-hover:border-amber-300 transition-colors">
                                <div ref={pulseRef} className="absolute inset-0 rounded-full border-2 border-amber-400 opacity-0 bg-amber-400/10" />

                                <span className="text-7xl font-serif font-bold text-amber-600 tracking-tighter drop-shadow-sm">
                                    {count}
                                </span>
                                <span className="text-amber-800/50 uppercase tracking-[0.2em] text-xs mt-2 font-bold">
                                    {mode === 'ajapa' ? (isActive ? 'Pause' : 'Start') : 'Tap or SpacebaR'}
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer Stats */}
            {!isComplete && (
                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto w-full mt-12 bg-card p-4 rounded-2xl border border-amber-200 shadow-sm">
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
