"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from 'lucide-react';
import {
    getZodiacSign,
    getZodiacCompatibility,
    getRinniResult,
    getElement,
    getElementCompatibility,
    CompatibilityLevel
} from './MantraCompatibilityLogic';
import { CymaticResonanceSimulator } from './CymaticResonanceSimulator';

export function MantraCompatibilityImmersive() {
    const [name, setName] = useState('');
    const [mantra, setMantra] = useState('');
    const [isCalculating, setIsCalculating] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const results = useMemo(() => {
        if (!name || !mantra) return null;

        const nZod = getZodiacSign(name[0]);
        const mZod = getZodiacSign(mantra[0]);
        const zodCompat = getZodiacCompatibility(nZod?.index || 0, mZod?.index || 0);

        const nEl = getElement(name[0]);
        const mEl = getElement(mantra[0]);
        const elementCompat = getElementCompatibility(nEl.name, mEl.name);

        const rinniCompat = getRinniResult(name, mantra);

        return {
            zodiac: { nameSign: nZod?.sign, mantraSign: mZod?.sign, ...zodCompat },
            element: { nameEl: nEl, mantraEl: mEl, ...elementCompat }, // Fixed nameEl passing
            rinni: rinniCompat
        };
    }, [name, mantra]);

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !mantra) return;
        setIsCalculating(true);
        setShowResults(false);
        // The cinematic wait
        setTimeout(() => {
            setIsCalculating(false);
            setShowResults(true);
        }, 4000);
    };

    // Cymatic Particle Effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: { x: number, y: number, r: number, a: number, v: number, baseA: number, hue: number }[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const numParticles = window.innerWidth < 768 ? 150 : 350;
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: cx,
                    y: cy,
                    r: Math.random() * Math.min(cx, cy) * 0.8, // radius from center
                    a: Math.random() * Math.PI * 2, // angle
                    baseA: Math.random() * Math.PI * 2,
                    v: 0.001 + Math.random() * 0.003, // velocity
                    hue: Math.random() * 60 + 20, // amber range
                });
            }
        };

        const draw = (time: number) => {
            // Fade effect for trails
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            // Determine frequency/chaos based on state
            let frequency = 1;
            let amplitude = 10;
            let speedMulti = 1;

            if (isCalculating) {
                // Chaotic interference pattern
                frequency = 8;
                amplitude = 40;
                speedMulti = 15;
                ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Clear faster
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            } else if (showResults && results) {
                // Settle into a specific geometry based on element
                ctx.fillStyle = 'rgba(0, 0, 0, 0.02)'; // Longer trails
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                speedMulti = 0.5;

                if (results.element.level === 'Excellent') {
                    frequency = 6; // Hexagon/Snowflake
                    amplitude = 20;
                } else if (results.element.level === 'Avoid') {
                    frequency = 3; // Triangle / Sharp
                    amplitude = 30;
                    speedMulti = 2; // more erratic
                } else {
                    frequency = 4; // Square/Cross
                    amplitude = 15;
                }
            }

            particles.forEach((p, i) => {
                p.a += p.v * speedMulti;

                // Cymatic math: Radius is modified by sin(frequency * angle)
                const currentR = p.r + Math.sin(p.a * frequency + time * 0.001) * amplitude;

                // If calculating, add more noise
                const noisyR = isCalculating ? currentR + (Math.random() - 0.5) * 50 : currentR;

                const x = cx + Math.cos(p.a) * noisyR;
                const y = cy + Math.sin(p.a) * noisyR;

                ctx.beginPath();
                ctx.arc(x, y, isCalculating ? 2 : 1.5, 0, Math.PI * 2);

                if (isCalculating) {
                    ctx.fillStyle = `hsla(${p.hue + (time * 0.1) % 360}, 100%, 60%, 0.5)`;
                } else if (showResults && results) {
                    // Color based on level
                    if (results.element.level === 'Avoid') ctx.fillStyle = `hsla(0, 100%, 50%, 0.4)`;
                    else if (results.element.level === 'Excellent') ctx.fillStyle = `hsla(150, 100%, 50%, 0.4)`;
                    else ctx.fillStyle = `hsla(${p.hue}, 80%, 50%, 0.4)`;
                } else {
                    ctx.fillStyle = `hsla(${p.hue}, 50%, 50%, 0.2)`;
                }

                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        resize();
        draw(0);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isCalculating, showResults, results]);


    return (
        <div className="fixed inset-0 bg-black text-amber-50 font-serif overflow-hidden z-50 flex items-center justify-center select-none">
            {/* The Cymatic Visualizer */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen" />

            {/* Central UI */}
            <div className="relative z-10 w-full max-w-2xl px-8 flex flex-col items-center">

                <AnimatePresence mode="wait">
                    {!showResults ? (
                        <motion.div
                            key="input"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                            className="w-full text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-black tracking-[0.2em] uppercase text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Sonic Resonance</h1>
                            <p className="text-amber-500/70 uppercase tracking-[0.4em] text-xs font-sans mb-12">Cymatic Kula-Akula Simulation</p>

                            <form onSubmit={handleCalculate} className="space-y-8">
                                <div className="space-y-6">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            placeholder="SEEKER'S NAME"
                                            className="w-full bg-transparent border-b-2 border-white/20 text-center text-3xl py-4 focus:outline-none focus:border-amber-500 transition-colors placeholder:text-white/10 uppercase tracking-widest text-amber-100"
                                            disabled={isCalculating}
                                            required
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={mantra}
                                            onChange={e => setMantra(e.target.value)}
                                            placeholder="MANTRA (FIRST WORD)"
                                            className="w-full bg-transparent border-b-2 border-white/20 text-center text-3xl py-4 focus:outline-none focus:border-amber-500 transition-colors placeholder:text-white/10 uppercase tracking-widest text-amber-100"
                                            disabled={isCalculating}
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!name || !mantra || isCalculating}
                                    className="relative group mt-12 bg-transparent text-white border border-white/30 px-12 py-4 rounded-full uppercase tracking-[0.3em] text-xs font-bold transition-all hover:bg-white hover:text-black disabled:opacity-0 disabled:pointer-events-none"
                                >
                                    {isCalculating ? (
                                        <span className="flex items-center gap-3">
                                            Synthesizing Frequencies <Activity className="w-4 h-4 animate-pulse" />
                                        </span>
                                    ) : (
                                        "Initiate Resonance"
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="results"
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="w-full text-center"
                        >
                            <h2 className="text-6xl font-black uppercase tracking-[0.2em] mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                                {results?.element.level === 'Excellent' || results?.element.level === 'Good' ? 'Harmonic' : 'Dissonant'}
                            </h2>
                            <div className="flex items-center justify-center gap-4 text-xs tracking-[0.4em] font-sans text-amber-500/50 uppercase mb-16">
                                <span>{name}</span>
                                <span className="w-1 h-1 bg-white/50 rounded-full" />
                                <span>{mantra}</span>
                            </div>

                            <div className="grid md:grid-cols-12 gap-12 items-center">
                                {/* Left: The Simulator */}
                                <div className="md:col-span-7 h-[500px]">
                                    <CymaticResonanceSimulator
                                        level={results?.element.level || 'Neutral'}
                                        isActive={showResults}
                                        name={name}
                                        mantra={mantra}
                                    />
                                </div>

                                {/* Right: The Breakdown */}
                                <div className="md:col-span-5 space-y-8 font-sans">
                                    {/* Kula-Akula */}
                                    <div className="border-l-2 border-amber-500/20 pl-6 py-2">
                                        <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase mb-2">Elemental Resonance</p>
                                        <div className="flex items-end gap-3 mb-2">
                                            <span className="text-3xl font-serif text-white">{results?.element.nameEl.name}</span>
                                            <span className="text-white/30 text-sm mb-1 uppercase tracking-widest text-[10px]">vs</span>
                                            <span className="text-3xl font-serif text-white">{results?.element.mantraEl.name}</span>
                                        </div>
                                        <p className="text-sm text-amber-500 font-bold tracking-widest uppercase mb-1">{results?.element.level}</p>
                                        <p className="text-xs text-white/60 leading-relaxed font-serif italic">{results?.element.desc}</p>
                                    </div>

                                    {/* Zodiac */}
                                    <div className="border-l-2 border-amber-500/20 pl-6 py-2">
                                        <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase mb-2">Cosmic Alignment</p>
                                        <div className="flex items-end gap-3 mb-2">
                                            <span className="text-3xl font-serif text-white">{results?.zodiac.nameSign}</span>
                                            <span className="text-white/30 text-sm mb-1 uppercase tracking-widest text-[10px]">vs</span>
                                            <span className="text-3xl font-serif text-white">{results?.zodiac.mantraSign}</span>
                                        </div>
                                        <p className="text-sm text-amber-500 font-bold tracking-widest uppercase mb-1">{results?.zodiac.level}</p>
                                        <p className="text-xs text-white/60 leading-relaxed font-serif italic">{results?.zodiac.desc}</p>
                                    </div>

                                    {/* Rinni-Dhani */}
                                    <div className="border-l-2 border-amber-500/20 pl-6 py-2">
                                        <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase mb-2">Karmic Debt</p>
                                        <div className="flex items-end gap-3 mb-2">
                                            <span className="text-4xl font-serif text-white">{results?.rinni.nameScore}</span>
                                            <span className="text-white/30 text-sm mb-1 uppercase tracking-widest text-[10px]">vs</span>
                                            <span className="text-4xl font-serif text-white">{results?.rinni.mantraScore}</span>
                                        </div>
                                        <p className="text-sm text-amber-500 font-bold tracking-widest uppercase mb-1">{results?.rinni.type}</p>
                                        <p className="text-xs text-white/60 leading-relaxed font-serif italic">{results?.rinni.desc}</p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => { setShowResults(false); setName(''); setMantra(''); }}
                                className="mt-20 text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors"
                            >
                                Re-calibrate Sequence
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
