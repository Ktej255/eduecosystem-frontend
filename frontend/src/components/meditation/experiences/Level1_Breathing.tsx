"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { MEDITATION_THEME } from '../theme/MeditationTheme';
import AmbientBackground from '../theme/AmbientBackground';
import PreSessionExperienceForm from '../PreSessionExperienceForm';
import PostSessionExperienceForm from '../PostSessionExperienceForm';
import SessionSummary from '../features/SessionSummary';
import { Play, Pause, RotateCw, Settings2, Wind } from 'lucide-react';

interface Level1Props {
    onExit: () => void;
    onComplete: (minutes: number) => void;
    level?: number;
    dayNumber?: number;
}

export default function Level1_Breathing({ onExit, onComplete, level = 1, dayNumber = 1 }: Level1Props) {
    // State
    const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'hold2'>('inhale');
    const [timeLeft, setTimeLeft] = useState(300); // 5 Minutes default
    const [isActive, setIsActive] = useState(false);
    const [showPreExperience, setShowPreExperience] = useState(true);
    const [showPostExperience, setShowPostExperience] = useState(false);
    const [experienceId, setExperienceId] = useState<number | null>(null);
    const [preSessionData, setPreSessionData] = useState<any>(null);
    const [isComplete, setIsComplete] = useState(false);

    // Breathing Animation Variants
    const circleVariants: any = {
        inhale: { scale: 1.5, opacity: 1, transition: { duration: 4, ease: "easeInOut" } },
        hold: { scale: 1.5, opacity: 0.8, transition: { duration: 4, ease: "linear" } },
        exhale: { scale: 1, opacity: 0.6, transition: { duration: 4, ease: "easeInOut" } },
        hold2: { scale: 1, opacity: 0.6, transition: { duration: 4, ease: "linear" } }
    };

    const textVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.5 } }
    };

    // Timer & Phase Logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        setIsActive(false);
                        setIsComplete(true);
                        if (experienceId) setShowPostExperience(true);
                        onComplete(5); // 5 mins completed
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft, experienceId, onComplete]);

    // Breathing Cycle Logic (Box Breathing 4-4-4-4)
    useEffect(() => {
        if (!isActive) return;
        const cycle = setInterval(() => {
            setPhase((prev) => {
                if (prev === 'inhale') return 'hold';
                if (prev === 'hold') return 'exhale';
                if (prev === 'exhale') return 'hold2';
                return 'inhale';
            });
        }, 4000);
        return () => clearInterval(cycle);
    }, [isActive]);

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const getInstruction = () => {
        switch (phase) {
            case 'inhale': return "Breathe In...";
            case 'hold': return "Hold...";
            case 'exhale': return "Breathe Out...";
            case 'hold2': return "Hold...";
        }
    };

    return (
        <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center text-white ${MEDITATION_THEME.gradients.deepSpace}`}>
            <AmbientBackground />

            {/* Header */}
            <div className="absolute top-8 left-0 w-full flex justify-between px-8 z-20">
                <Button variant="ghost" className="text-white/60 hover:text-white" onClick={onExit}>
                    <Settings2 className="w-6 h-6" /> {/* Placeholder for 'Back' or 'Close' if needed */}
                </Button>
                <div className="flex items-center gap-2 px-3 py-1 bg-card/5 rounded-full backdrop-blur-md border border-white/10">
                    <Wind className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-medium tracking-wide opacity-80">LEVEL 1 • BREATHING</span>
                </div>
                <Button variant="ghost" className="text-white/60 hover:text-white" onClick={onExit}>
                    Close
                </Button>
            </div>

            {/* Central Breathing Element */}
            <div className="relative z-10 flex flex-col items-center">
                <motion.div
                    variants={circleVariants}
                    animate={isActive ? phase : "exhale"}
                    className="w-64 h-64 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-3xl border border-white/10 flex items-center justify-center relative shadow-[0_0_100px_rgba(16,185,129,0.2)]"
                >
                    <motion.div
                        className="absolute inset-0 rounded-full border border-emerald-400/30"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={phase}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="text-2xl font-light tracking-widest text-emerald-100"
                        >
                            {isActive ? getInstruction() : "Ready?"}
                        </motion.p>
                    </AnimatePresence>
                </motion.div>

                {/* Controls */}
                <div className="mt-16 flex flex-col items-center gap-6">
                    <div className="text-4xl font-thin tabular-nums opacity-80">
                        {formatTime(timeLeft)}
                    </div>

                    <div className="flex gap-4">
                        <Button
                            size="lg"
                            className="rounded-full w-16 h-16 bg-card text-black hover:bg-emerald-50 hover:text-emerald-900 transition-all shadow-lg hover:shadow-emerald-500/20 hover:scale-105"
                            onClick={() => setIsActive(!isActive)}
                        >
                            {isActive ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                        </Button>
                        <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-full w-12 h-12 text-white/40 hover:text-white hover:bg-card/10"
                            onClick={() => {
                                setIsActive(false);
                                setTimeLeft(300);
                                setPhase('inhale');
                            }}
                        >
                            <RotateCw className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {showPreExperience && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                    <PreSessionExperienceForm
                        level={level}
                        dayNumber={dayNumber}
                        onComplete={async (expId, data) => {
                            setExperienceId(expId);
                            setPreSessionData(data);
                            setShowPreExperience(false);
                            // Auto-start breathing?
                        }}
                        onSkip={() => {
                            setShowPreExperience(false);
                        }}
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
                            onExit(); // Exit after form
                        }}
                    />
                </div>
            )}

            {/* Session Complete Screen (Shared Component) */}
            {!showPostExperience && isComplete && (
                <SessionSummary
                    durationMinutes={5}
                    karmaEarned={50}
                    onExit={onExit}
                    levelName="Level 1 • Focusing"
                />
            )}
        </div>
    );
}
