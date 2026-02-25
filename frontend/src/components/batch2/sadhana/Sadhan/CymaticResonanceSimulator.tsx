"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Activity, Zap } from "lucide-react";
import { CompatibilityLevel } from "./MantraCompatibilityLogic";

interface CymaticProps {
    level: CompatibilityLevel;
    isActive: boolean;
    name: string;
    mantra: string;
}

export function CymaticResonanceSimulator({ level, isActive, name, mantra }: CymaticProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isAudioEnabled, setIsAudioEnabled] = useState(false);
    const audioContextRef = useRef<AudioContext | null>(null);
    const oscillatorRef = useRef<OscillatorNode | null>(null);
    const gainNodeRef = useRef<GainNode | null>(null);

    // Modes for Chladni patterns
    const modes = {
        Excellent: { n: 6, m: 6, a: 1, b: 1, freq: 528 }, // DNA Repair / Solfeggio
        Good: { n: 4, m: 2, a: 1, b: -1, freq: 432 },    // Pythagorean
        Neutral: { n: 5, m: 3, a: 1, b: 0, freq: 440 }, // Standard
        Avoid: { n: 3.7, m: 7.2, a: 1.5, b: 0.5, freq: 417 } // Undoing Situations
    };

    const currentMode = modes[level] || modes.Neutral;

    // Simulation logic
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        const resize = () => {
            canvas.width = canvas.parentElement?.clientWidth || 600;
            canvas.height = canvas.parentElement?.clientHeight || 600;
        };

        const draw = () => {
            if (!isActive) return;

            ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Trails
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const w = canvas.width;
            const h = canvas.height;
            const size = Math.min(w, h) * 0.8;
            const offsetX = (w - size) / 2;
            const offsetY = (h - size) / 2;

            const { n, m, a, b } = currentMode;

            // Draw particles (sand on the plate)
            const numParticles = 4000;
            ctx.fillStyle = level === 'Avoid' ? "rgba(255, 100, 100, 0.6)" : level === 'Excellent' ? "rgba(100, 255, 200, 0.6)" : "rgba(255, 191, 0, 0.4)";

            for (let i = 0; i < numParticles; i++) {
                // Random position across the square plate
                const px = Math.random();
                const py = Math.random();

                // Chladni Formula: z = a * sin(n*pi*x) * sin(m*pi*y) + b * sin(m*pi*x) * sin(n*pi*y)
                const z = a * Math.sin(n * Math.PI * px) * Math.sin(m * Math.PI * py) +
                    b * Math.sin(m * Math.PI * px) * Math.sin(n * Math.PI * py);

                // Particles accumulate where vibration is minimal (nodal lines)
                // We add some temporal oscillation to make it feel alive
                const threshold = 0.05 + Math.sin(time * 0.05) * 0.02;

                if (Math.abs(z) < threshold) {
                    const drawX = offsetX + px * size + (Math.random() - 0.5) * 2;
                    const drawY = offsetY + py * size + (Math.random() - 0.5) * 2;

                    ctx.beginPath();
                    ctx.arc(drawX, drawY, 1, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            time++;
            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [level, isActive, currentMode]);

    // Audio logic
    const toggleAudio = () => {
        if (!isAudioEnabled) {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            const audioCtx = new AudioContextClass();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(currentMode.freq, audioCtx.currentTime);

            gain.gain.setValueAtTime(0, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.5);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start();

            audioContextRef.current = audioCtx;
            oscillatorRef.current = osc;
            gainNodeRef.current = gain;
            setIsAudioEnabled(true);
        } else {
            if (gainNodeRef.current && audioContextRef.current) {
                gainNodeRef.current.gain.linearRampToValueAtTime(0, audioContextRef.current.currentTime + 0.5);
                setTimeout(() => {
                    oscillatorRef.current?.stop();
                    audioContextRef.current?.close();
                }, 600);
            }
            setIsAudioEnabled(false);
        }
    };

    useEffect(() => {
        return () => {
            audioContextRef.current?.close();
        };
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-transparent">
            {/* Simulation Canvas */}
            <div className="relative w-full aspect-square max-w-[500px]">
                <canvas ref={canvasRef} className="w-full h-full rounded-2xl border border-white/5 bg-black/20 backdrop-blur-sm" />

                {/* Decorative Frame */}
                <div className="absolute inset-0 border-4 border-amber-500/10 pointer-events-none rounded-2xl" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-black border border-amber-500/20 rounded-full text-[8px] font-black uppercase tracking-[0.3em] text-amber-500">
                    Nodal Geometry: {level}
                </div>
            </div>

            {/* Controls Overlay */}
            <div className="mt-8 flex items-center gap-6">
                <button
                    onClick={toggleAudio}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all ${isAudioEnabled
                            ? "bg-amber-500 border-amber-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                            : "bg-white/5 border-white/10 text-white/40 hover:text-white"
                        }`}
                >
                    {isAudioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    <span className="text-[10px] font-black uppercase tracking-widest">
                        {isAudioEnabled ? `Attuning: ${currentMode.freq}Hz` : "Activate Tuning Frequency"}
                    </span>
                </button>

                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <Zap className="w-3 h-3 text-amber-500" />
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Resonance: {Math.floor(Math.random() * 20) + 80}%</span>
                </div>
            </div>

            <AnimatePresence>
                {isAudioEnabled && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-4 text-center max-w-sm"
                    >
                        <p className="text-[10px] text-amber-500/60 leading-relaxed italic">
                            Listening to this frequency while contemplating the {mantra} mantra bridges the {level} gap between your energetic signature and the sound.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
