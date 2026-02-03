"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { MEDITATION_THEME } from '../theme/MeditationTheme';
import AmbientBackground from '../theme/AmbientBackground';
import PreSessionExperienceForm from '../PreSessionExperienceForm';
import PostSessionExperienceForm from '../PostSessionExperienceForm';
import SessionSummary from '../features/SessionSummary';
import { Play, Pause, RotateCw, Settings2, Waves, Volume2 } from 'lucide-react';

interface Level3Props {
    onExit: () => void;
    onComplete: (minutes: number) => void;
    level?: number;
    dayNumber?: number;
}

export default function Level3_Resonance({ onExit, onComplete, level = 3, dayNumber = 1 }: Level3Props) {
    // Experience recording state
    const [showPreExperience, setShowPreExperience] = useState(true);
    const [showPostExperience, setShowPostExperience] = useState(false);
    const [experienceId, setExperienceId] = useState<number | null>(null);
    const [preSessionData, setPreSessionData] = useState<any>(null);
    const [sessionComplete, setSessionComplete] = useState(false);

    // Session state
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(600); // 10 Minutes
    const [pulsePhase, setPulsePhase] = useState(0); // For rhythmic animation

    // Timer Logic
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isPlaying && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        setIsPlaying(false);
                        setSessionComplete(true);
                        if (experienceId) setShowPostExperience(true);
                        onComplete(10);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isPlaying, timeLeft, onComplete, experienceId]);

    // Resonance Rhythm (6 seconds cycle - typical resonance breathing)
    useEffect(() => {
        if (!isPlaying) return;
        const rhythm = setInterval(() => {
            setPulsePhase(prev => (prev + 1) % 2); // Toggle expansion/contraction
        }, 3000); // 3s In, 3s Out
        return () => clearInterval(rhythm);
    }, [isPlaying]);

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center overflow-hidden text-white font-sans">
            {/* Background with darker resonance theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950">
                <AmbientBackground />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-lg px-6 flex flex-col items-center">

                {/* Pre/Post Forms */}
                {showPreExperience && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                        <PreSessionExperienceForm
                            level={level}
                            dayNumber={dayNumber}
                            onComplete={async (expId, data) => {
                                setExperienceId(expId);
                                setPreSessionData(data);
                                setShowPreExperience(false);
                            }}
                            onSkip={() => setShowPreExperience(false)}
                        />
                    </div>
                )}
                {showPostExperience && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                        <PostSessionExperienceForm
                            experienceId={experienceId || 0}
                            preSessionData={preSessionData || { stress: 5, anxiety: 5, focus: 5, emotionalState: "Neutral" }}
                            onComplete={() => {
                                setShowPostExperience(false);
                                onExit();
                            }}
                        />
                    </div>
                )}

                {/* Main UI */}
                {!showPreExperience && !showPostExperience && !sessionComplete && (
                    <>
                        {/* Header */}
                        <div className="absolute top-8 left-0 w-full flex justify-between px-8">
                            <Button variant="ghost" className="text-white/60 hover:text-white" onClick={onExit}>
                                <X className="w-6 h-6" />
                            </Button>
                            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full backdrop-blur-md border border-white/10">
                                <Waves className="w-4 h-4 text-indigo-400" />
                                <span className="text-xs font-medium tracking-wide opacity-80">LEVEL 3 • RESONANCE</span>
                            </div>
                            <Button variant="ghost" className="text-white/60 hover:text-white">
                                <Volume2 className="w-6 h-6" /> {/* Audio Controls Placeholder */}
                            </Button>
                        </div>

                        {/* Visualization: Resonance Rings */}
                        <div className="relative mb-16 mt-24 w-80 h-80 flex items-center justify-center">
                            {/* Expanding Rings */}
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        scale: pulsePhase === 0 ? [1, 1.5] : [1.5, 1], // Inhale: Expand, Exhale: Contract
                                        opacity: pulsePhase === 0 ? [0.1, 0.4] : [0.4, 0.1],
                                    }}
                                    transition={{ duration: 3, ease: "easeInOut" }}
                                    className="absolute inset-0 rounded-full border border-indigo-500/20"
                                    style={{ width: `${i * 33}%`, height: `${i * 33}%`, margin: 'auto' }}
                                />
                            ))}

                            {/* Core Orb */}
                            <motion.div
                                animate={{
                                    scale: pulsePhase === 0 ? 1.2 : 0.8,
                                    backgroundColor: pulsePhase === 0 ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.1)',
                                }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                                className="w-32 h-32 rounded-full bg-indigo-500/20 backdrop-blur-xl border border-indigo-400/30 flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.3)]"
                            >
                                <span className="text-4xl font-light text-indigo-100 opacity-80">OM</span>
                            </motion.div>
                        </div>

                        {/* Controls */}
                        <div className="flex flex-col items-center gap-8 w-full">
                            <div className="text-6xl font-thin tracking-tighter tabular-nums opacity-90">
                                {formatTime(timeLeft)}
                            </div>

                            <Button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${isPlaying
                                    ? 'bg-neutral-800 text-white border border-neutral-700 hover:bg-neutral-700'
                                    : 'bg-indigo-500 text-white hover:bg-indigo-400 hover:scale-105 shadow-[0_0_30px_rgba(99,102,241,0.4)]'
                                    }`}
                            >
                                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 ml-1 fill-current" />}
                            </Button>

                            <p className="text-white/40 text-sm tracking-widest uppercase">
                                {pulsePhase === 0 ? 'Resonate Out' : 'Resonate In'}
                            </p>
                        </div>
                    </>
                )}

                {/* Celebration */}
                {!showPostExperience && sessionComplete && (
                    <SessionSummary
                        durationMinutes={10}
                        karmaEarned={100}
                        onExit={onExit}
                        levelName="Level 3 • Resonance"
                    />
                )}

            </div>
        </div>
    );
}
// Helper for X icon since I didn't import it in the initial snippet but used it
function X(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}
