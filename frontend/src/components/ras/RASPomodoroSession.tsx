
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RefreshCw, CheckCircle, Disc, BrainCircuit, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { getPomodoroTimerService } from "@/services/PomodoroTimerService";

interface RASPomodoroProps {
    topic: string;
    initialDurationMinutes?: number;
    onComplete?: (duration: number) => void;
    onExit: () => void;
}

export default function RASPomodoroSession({
    topic,
    initialDurationMinutes = 25,
    onComplete,
    onExit
}: RASPomodoroProps) {
    const timerService = getPomodoroTimerService();
    // Initial state from service if it exists, otherwise use props
    const [duration, setDuration] = useState(() => {
        const state = timerService.getState();
        return (state.sessionType === 'ras_revision' && state.isRunning)
            ? state.duration / 1000
            : initialDurationMinutes * 60;
    });
    const [timeLeft, setTimeLeft] = useState(() => {
        const state = timerService.getState();
        if (state.sessionType === 'ras_revision' && state.isRunning) {
            return timerService.getTimeRemaining() / 1000;
        }
        return initialDurationMinutes * 60;
    });
    const [isActive, setIsActive] = useState(() => {
        const state = timerService.getState();
        return state.sessionType === 'ras_revision' && state.isRunning && !state.isPaused;
    });
    const [sessionState, setSessionState] = useState<"ready" | "running" | "paused" | "completed" | "recall">(() => {
        const state = timerService.getState();
        if (state.sessionType === 'ras_revision' && state.isRunning) {
            return state.isPaused ? "paused" : "running";
        }
        return "ready";
    });
    const [recallText, setRecallText] = useState("");

    useEffect(() => {
        timerService.setCallbacks({
            onTick: (remaining) => {
                setTimeLeft(remaining / 1000);
            },
            onComplete: () => {
                handleComplete();
            },
            onStateChange: (state) => {
                if (state.sessionType === 'ras_revision') {
                    setSessionState(state.isPaused ? "paused" : (state.isRunning ? "running" : sessionState));
                    setIsActive(state.isRunning && !state.isPaused);
                }
            }
        });

        // If we are resuming a running timer
        const state = timerService.getState();
        if (state.sessionType === 'ras_revision' && state.isRunning) {
            setTimeLeft(timerService.getTimeRemaining() / 1000);
        }

        return () => {
            // Only clear callbacks if they were ours
            // timerService.setCallbacks({}); 
        };
    }, []);

    const handleStart = () => {
        timerService.startTimer('ras_revision', {
            topicName: topic,
            customDuration: duration * 1000
        });
        setSessionState("running");
        setIsActive(true);
    };

    const handlePause = () => {
        timerService.pauseTimer();
        setSessionState("paused");
        setIsActive(false);
    };

    const handleReset = () => {
        timerService.stopTimer();
        setSessionState("ready");
        setTimeLeft(duration);
        setIsActive(false);
    };

    const handleComplete = () => {
        setIsActive(false);
        setSessionState("recall");
    };

    const submitRecall = () => {
        timerService.stopTimer(); // Ensure service is clean
        setSessionState("completed");
        if (onComplete) {
            onComplete(duration); // Record the completed duration
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    // Calculate progress for the ring
    const radius = 120;
    const circumference = 2 * Math.PI * radius;
    const progress = 1 - (timeLeft / duration);
    const strokeDashoffset = circumference * (1 - progress); // Inverted for countdown effect

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-lg bg-neutral-900 border border-amber-500/30 rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
                {/* Background Decor - Royal Rajasthan */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-600 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-700 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
                </div>

                <button
                    onClick={onExit}
                    className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                    <div className="space-y-2">
                        <motion.h3
                            className="text-amber-500 font-medium tracking-widest uppercase text-sm"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            RAS Focus Mode
                        </motion.h3>
                        <h2 className="text-2xl md:text-3xl font-bold text-white max-w-md leading-tight">
                            {topic}
                        </h2>
                    </div>

                    {/* Timer Circle */}
                    <div className="relative w-64 h-64 flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                            {/* Track */}
                            <circle
                                cx="128"
                                cy="128"
                                r={radius}
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                className="text-neutral-800"
                            />
                            {/* Progress */}
                            <motion.circle
                                cx="128"
                                cy="128"
                                r={radius}
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                strokeLinecap="round"
                                className="text-amber-500"
                                style={{ strokeDasharray: circumference, strokeDashoffset }}
                                animate={{ strokeDashoffset: circumference * (timeLeft / duration) }}
                                transition={{ duration: 1, ease: "linear" }}
                            />
                        </svg>

                        <div className="absolute flex flex-col items-center justify-center">
                            <div className="text-6xl font-mono font-bold text-white tracking-tighter">
                                {formatTime(timeLeft)}
                            </div>
                            <div className="text-neutral-500 text-sm mt-2 font-medium">MINUTES REMAINING</div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-6">
                        {sessionState === "ready" && (
                            <Button
                                size="lg"
                                className="h-16 px-8 rounded-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
                                onClick={handleStart}
                            >
                                <Play className="w-6 h-6 mr-2 fill-current" />
                                Start Focus
                            </Button>
                        )}

                        {sessionState === "running" && (
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-16 px-8 rounded-full border-2 border-neutral-700 text-white hover:bg-neutral-800 font-bold text-lg"
                                onClick={handlePause}
                            >
                                <Pause className="w-6 h-6 mr-2 fill-current" />
                                Pause
                            </Button>
                        )}

                        {sessionState === "paused" && (
                            <>
                                <Button
                                    size="lg"
                                    className="h-16 px-8 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg"
                                    onClick={() => {
                                        timerService.resumeTimer();
                                        setSessionState("running");
                                        setIsActive(true);
                                    }}
                                >
                                    <Play className="w-6 h-6 mr-2 fill-current" />
                                    Resume
                                </Button>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-16 w-16 rounded-full text-neutral-400 hover:text-white"
                                    onClick={handleReset}
                                >
                                    <RefreshCw className="w-6 h-6" />
                                </Button>
                            </>
                        )}

                        {sessionState === "recall" && (
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="w-full space-y-4"
                            >
                                <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-left">
                                    <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider mb-2">
                                        <BrainCircuit className="w-4 h-4" /> Quick Recall Prompt
                                    </div>
                                    <p className="text-sm text-neutral-300 mb-4">What are the 3 key concepts you just studied? Visualization is key.</p>
                                    <textarea
                                        value={recallText}
                                        onChange={(e) => setRecallText(e.target.value)}
                                        placeholder="Type a few keywords here..."
                                        className="w-full h-24 bg-black/40 border border-neutral-800 rounded-xl p-3 text-sm text-white focus:border-amber-500 outline-none transition-all"
                                    />
                                </div>
                                <Button
                                    className="w-full h-14 rounded-xl bg-amber-500 text-black font-bold hover:bg-amber-400"
                                    onClick={submitRecall}
                                >
                                    Seal in Mind
                                </Button>
                            </motion.div>
                        )}

                        {sessionState === "completed" && (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="flex flex-col items-center text-green-400"
                            >
                                <CheckCircle className="w-12 h-12 mb-2" />
                                <span className="font-bold text-xl">Power session complete!</span>
                                <Button
                                    variant="link"
                                    className="mt-4 text-neutral-400 hover:text-white"
                                    onClick={onExit}
                                >
                                    Back to Journey Map
                                </Button>
                            </motion.div>
                        )}
                    </div>

                    {/* Quick Adjust */}
                    {sessionState === "ready" && (
                        <div className="w-full max-w-xs space-y-2">
                            <div className="flex justify-between text-xs text-neutral-500 uppercase tracking-widest font-bold">
                                <span>Duration</span>
                                <span>{duration / 60} min</span>
                            </div>
                            <Slider
                                defaultValue={[initialDurationMinutes]}
                                max={120}
                                step={5}
                                onValueChange={(val) => {
                                    setDuration(val[0] * 60);
                                    setTimeLeft(val[0] * 60);
                                }}
                                className="cursor-pointer"
                            />
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
