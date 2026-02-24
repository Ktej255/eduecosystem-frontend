'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';

type MalaMode = 'vachika' | 'upanshu' | 'mansika' | 'ajapa';

interface DigitalMalaProps {
    mantraText?: string;
    targetCount?: number;
    onCountUpdate?: (count: number) => void;
}

const MODE_CONFIG: Record<MalaMode, { label: string; description: string; icon: string; color: string }> = {
    vachika: {
        label: 'Vachika',
        description: 'Audio-guided — chant aloud with rhythm',
        icon: '🔊',
        color: 'from-emerald-500 to-teal-600'
    },
    upanshu: {
        label: 'Upanshu',
        description: 'Whisper — lips move, no sound',
        icon: '🤫',
        color: 'from-blue-500 to-indigo-600'
    },
    mansika: {
        label: 'Mansika',
        description: 'Silent — mental chanting only',
        icon: '🧘',
        color: 'from-purple-500 to-violet-600'
    },
    ajapa: {
        label: 'Ajapa',
        description: 'Passive — the mantra chants itself',
        icon: '✨',
        color: 'from-amber-500 to-orange-600'
    }
};

const BEAD_COUNT = 108;

const DigitalMala: React.FC<DigitalMalaProps> = ({
    mantraText = 'ॐ नमः शिवाय',
    targetCount = 108,
    onCountUpdate
}) => {
    const [mode, setMode] = useState<MalaMode>('vachika');
    const [count, setCount] = useState(0);
    const [round, setRound] = useState(1);
    const [isActive, setIsActive] = useState(false);
    const [lastTapTime, setLastTapTime] = useState<number>(0);
    const [rhythm, setRhythm] = useState<number>(0); // ms between taps
    const pulseRef = useRef<HTMLDivElement>(null);

    // Haptic feedback (if available)
    const triggerHaptic = useCallback(() => {
        if ('vibrate' in navigator) {
            navigator.vibrate(15);
        }
    }, []);

    // Main tap handler
    const handleTap = useCallback(() => {
        const now = Date.now();
        if (lastTapTime > 0) {
            setRhythm(now - lastTapTime);
        }
        setLastTapTime(now);

        setCount(prev => {
            const newCount = prev + 1;

            // Round complete
            if (newCount >= BEAD_COUNT) {
                setRound(r => r + 1);
                onCountUpdate?.(newCount);
                return 0;
            }

            onCountUpdate?.(newCount);
            return newCount;
        });

        // Mode-specific feedback
        if (mode === 'vachika') {
            // Audio beep (simple oscillator)
            try {
                const ctx = new AudioContext();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.frequency.value = 528; // Solfeggio frequency
                gain.gain.value = 0.05;
                osc.start();
                osc.stop(ctx.currentTime + 0.08);
            } catch {
                // Audio not available
            }
        } else if (mode === 'upanshu') {
            triggerHaptic();
        }

        // Pulse animation
        if (pulseRef.current) {
            pulseRef.current.classList.remove('animate-ping');
            void pulseRef.current.offsetWidth; // reflow
            pulseRef.current.classList.add('animate-ping');
        }
    }, [mode, lastTapTime, triggerHaptic, onCountUpdate]);

    // Ajapa mode: auto-count with timer
    useEffect(() => {
        if (mode !== 'ajapa' || !isActive) return;
        const interval = setInterval(() => {
            handleTap();
        }, 3000); // 1 chant every 3 seconds
        return () => clearInterval(interval);
    }, [mode, isActive, handleTap]);

    const progressPercent = (count / BEAD_COUNT) * 100;
    const currentConfig = MODE_CONFIG[mode];

    return (
        <div className="bg-slate-950 text-white p-6 rounded-3xl border border-slate-800 max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
                <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                    Digital Mala
                </h2>
                <p className="text-slate-500 text-xs mt-1">Round {round} • {currentConfig.label} Mode</p>
            </div>

            {/* Mode Selector */}
            <div className="flex gap-2 mb-6">
                {(Object.keys(MODE_CONFIG) as MalaMode[]).map(m => (
                    <button
                        key={m}
                        onClick={() => { setMode(m); setIsActive(false); }}
                        className={`flex-1 py-2 px-1 rounded-xl text-center transition-all text-xs font-semibold ${mode === m
                                ? `bg-gradient-to-b ${MODE_CONFIG[m].color} text-white shadow-lg`
                                : 'bg-slate-900 text-slate-500 hover:bg-slate-800'
                            }`}
                    >
                        <div className="text-lg">{MODE_CONFIG[m].icon}</div>
                        <div className="mt-0.5">{MODE_CONFIG[m].label}</div>
                    </button>
                ))}
            </div>

            {/* Mode Description */}
            <p className="text-center text-slate-500 text-[11px] mb-6 italic">{currentConfig.description}</p>

            {/* Circular Progress + Tap Zone */}
            <div className="relative mx-auto w-52 h-52 mb-6">
                {/* Background circle */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="rgb(30 41 59)" strokeWidth="4" />
                    <circle
                        cx="60" cy="60" r="54"
                        fill="none"
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

                {/* Tap Button (Center) */}
                <button
                    onClick={() => {
                        if (mode === 'ajapa') {
                            setIsActive(!isActive);
                        } else {
                            handleTap();
                        }
                    }}
                    className={`absolute inset-4 rounded-full flex flex-col items-center justify-center transition-all active:scale-95 ${mode === 'ajapa' && isActive
                            ? 'bg-gradient-to-br from-amber-900/50 to-orange-900/50 border-2 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.3)]'
                            : 'bg-slate-900 border border-slate-800 hover:border-slate-700'
                        }`}
                >
                    {/* Pulse ring */}
                    <div ref={pulseRef} className="absolute inset-0 rounded-full border border-amber-500/30 opacity-0" />

                    <div className="text-3xl font-mono font-bold text-amber-400">{count}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                        {mode === 'ajapa' ? (isActive ? 'Flowing...' : 'Start') : 'Tap'}
                    </div>
                </button>
            </div>

            {/* Mantra Display */}
            <div className="text-center mb-4 p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-xl font-serif text-amber-200 tracking-wide">{mantraText}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-slate-900/50 p-2 rounded-lg">
                    <div className="text-xs text-slate-500">Count</div>
                    <div className="font-mono font-bold text-sm text-slate-200">{count}/{BEAD_COUNT}</div>
                </div>
                <div className="bg-slate-900/50 p-2 rounded-lg">
                    <div className="text-xs text-slate-500">Rounds</div>
                    <div className="font-mono font-bold text-sm text-slate-200">{round}</div>
                </div>
                <div className="bg-slate-900/50 p-2 rounded-lg">
                    <div className="text-xs text-slate-500">Rhythm</div>
                    <div className="font-mono font-bold text-sm text-slate-200">
                        {rhythm > 0 ? `${(rhythm / 1000).toFixed(1)}s` : '—'}
                    </div>
                </div>
            </div>

            {/* Reset */}
            <button
                onClick={() => { setCount(0); setRound(1); setIsActive(false); }}
                className="mt-4 w-full py-2 text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
                Reset Session
            </button>
        </div>
    );
};

export default DigitalMala;
