"use client";

import React, { useState, useEffect } from 'react';
import NeuroCanvas from './NeuroCanvas';
import { Activity, Zap, Wind, CheckCircle2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface DigitalStrokeAnalyzerProps {
    onComplete: () => void;
}

export default function DigitalStrokeAnalyzer({ onComplete }: DigitalStrokeAnalyzerProps) {
    const [metrics, setMetrics] = useState({ speed: 0, pressure: 0.5, jitter: 0, flowState: 'Stable' });
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30); // 30s warm-up
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (timeLeft > 0 && !isComplete) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            setIsComplete(true);
        }
    }, [timeLeft, isComplete]);

    const handleAnalysis = (newMetrics: { speed: number; pressure: number; jitter: number; flowState: string }) => {
        if (isComplete) return;
        setMetrics(newMetrics);

        // Gamify: Award points for "Flowing" state
        if (newMetrics.flowState === 'Flowing') {
            setScore(prev => prev + 1);
        }
    };

    return (
        <div className="bg-neutral-900 rounded-3xl border border-neutral-800 overflow-hidden relative min-h-[500px] flex flex-col">
            {/* Header / HUD */}
            <div className="absolute top-0 left-0 w-full z-20 p-6 flex justify-between items-start pointer-events-none">
                <div className="bg-neutral-900/80 backdrop-blur rounded-2xl p-4 border border-white/10 shadow-xl">
                    <h3 className="text-white font-bold mb-1 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-green-400" />
                        Neuro-Warmup
                    </h3>
                    <p className="text-neutral-400 text-xs mb-3">Sync your hand and mind before writing.</p>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between gap-4">
                            <span className="text-neutral-500">Flow State</span>
                            <span className={`font-mono font-bold ${metrics.flowState === 'Flowing' ? 'text-green-400' :
                                    metrics.flowState === 'Jittery' ? 'text-red-400' : 'text-yellow-400'
                                }`}>
                                {metrics.flowState}
                            </span>
                        </div>
                        <div className="flex justify-between gap-4">
                            <span className="text-neutral-500">Pressure</span>
                            <div className="w-20 h-2 bg-neutral-800 rounded-full overflow-hidden mt-1">
                                <motion.div
                                    className="h-full bg-blue-500"
                                    animate={{ width: `${metrics.pressure * 100}%` }}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between gap-4">
                            <span className="text-neutral-500">Speed</span>
                            <div className="w-20 h-2 bg-neutral-800 rounded-full overflow-hidden mt-1">
                                <motion.div
                                    className="h-full bg-purple-500"
                                    animate={{ width: `${Math.min(100, metrics.speed * 5)}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-900/80 backdrop-blur rounded-2xl p-4 border border-white/10 text-center">
                    <div className="text-2xl font-black text-white mb-1">{timeLeft}s</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-widest">Time Left</div>
                </div>
            </div>

            {/* Canvas Area */}
            <div className="flex-1 relative cursor-crosshair">
                <NeuroCanvas
                    interactive={!isComplete}
                    onStrokeAnalyze={handleAnalysis}
                />

                {/* Guide Text */}
                {!isComplete && score < 10 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                        <div className="text-6xl font-black text-white border-4 border-white rounded-full w-64 h-32 flex items-center justify-center rotate-[-15deg]">
                            ∞
                        </div>
                    </div>
                )}

                {!isComplete && (
                    <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none sticky-text-anim">
                        <p className="text-neutral-400 text-sm bg-neutral-900/50 inline-block px-4 py-2 rounded-full backdrop-blur">
                            Draw continuous <span className="text-white font-bold">Infinity Loops (∞)</span> to calibrate flow.
                        </p>
                    </div>
                )}
            </div>

            {/* Completion Overlay */}
            {isComplete && (
                <div className="absolute inset-0 z-30 bg-neutral-900/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">Calibration Complete</h2>
                    <p className="text-neutral-400 mb-8 max-w-sm">
                        Your neuro-motor pathways are primed. You generated <span className="text-green-400 font-bold">{score} flow points</span>.
                    </p>
                    <div className="flex gap-4">
                        <Button
                            variant="outline"
                            onClick={() => {
                                setTimeLeft(30);
                                setIsComplete(false);
                                setScore(0);
                            }}
                            className="border-neutral-700 text-neutral-300 hover:bg-neutral-800"
                        >
                            <RefreshCw className="w-4 h-4 mr-2" /> Recalibrate
                        </Button>
                        <Button
                            onClick={onComplete}
                            size="lg"
                            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8"
                        >
                            Start Daily Drill <Zap className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
