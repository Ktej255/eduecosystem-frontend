"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    Play, Pause, RotateCcw, Volume2, VolumeX, CheckCircle2,
    Timer, Flame, ChevronRight, Mic, ArrowLeft
} from "lucide-react";

interface PomodoroTimerProps {
    duration?: number; // Duration in seconds (default 25 min = 1500)
    onComplete: () => void;
    onStart?: () => void;
    isStrict?: boolean; // If true, cannot pause or skip
    sessionNumber: number;
    totalSessions: number;
    focusTask?: string;
}

export default function PomodoroTimer({
    duration = 1500, // 25 minutes
    onComplete,
    onStart,
    isStrict = true,
    sessionNumber,
    totalSessions,
    focusTask
}: PomodoroTimerProps) {
    // Generate unique storage key for this pomodoro session
    const storageKey = `pomodoro_timer_${sessionNumber}_${totalSessions}`;

    // Initialize state from localStorage if available
    const [timeLeft, setTimeLeft] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                try {
                    const state = JSON.parse(saved);
                    // Check if state is recent (within 30 min)
                    if (Date.now() - state.savedAt < 30 * 60 * 1000) {
                        return state.timeLeft;
                    }
                } catch (e) {
                    console.error('Failed to parse saved timer state:', e);
                }
            }
        }
        return duration;
    });

    const [isRunning, setIsRunning] = useState(false);

    const [hasStarted, setHasStarted] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                try {
                    const state = JSON.parse(saved);
                    if (Date.now() - state.savedAt < 30 * 60 * 1000) {
                        return state.hasStarted;
                    }
                } catch (e) { /* ignore */ }
            }
        }
        return false;
    });

    const [soundEnabled, setSoundEnabled] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Save timer state to localStorage on every change
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const timerState = {
                timeLeft,
                hasStarted,
                savedAt: Date.now()
            };
            localStorage.setItem(storageKey, JSON.stringify(timerState));
        }
    }, [timeLeft, hasStarted, storageKey]);

    // Clear saved state when timer completes
    const clearSavedState = useCallback(() => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(storageKey);
        }
    }, [storageKey]);

    const [endTime, setEndTime] = useState<number | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);

    // Initialize AudioContext on user interaction (Start) to unlock it
    const initAudio = () => {
        if (!audioContextRef.current && typeof window !== 'undefined') {
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioContext) {
                audioContextRef.current = new AudioContext();
            }
        }
        // Resume if suspended (common browser policy)
        if (audioContextRef.current?.state === 'suspended') {
            audioContextRef.current.resume();
        }
    };

    const playBell = () => {
        if (!soundEnabled || !audioContextRef.current) return;

        try {
            const ctx = audioContextRef.current;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.connect(gain);
            gain.connect(ctx.destination);

            // Bell-like envelope
            const now = ctx.currentTime;
            osc.frequency.setValueAtTime(880, now); // High pitch start
            osc.frequency.exponentialRampToValueAtTime(110, now + 1.5); // Decay pitch

            gain.gain.setValueAtTime(0.5, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 1.5); // Decay volume

            osc.start(now);
            osc.stop(now + 1.5);
        } catch (e) {
            console.error("Failed to play bell:", e);
        }
    };

    // Document Title Update
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.title = isRunning ? `(${formatTime(timeLeft)}) Pomodoro` : 'Eduecosystem';
        }
    }, [timeLeft, isRunning]);

    // Visibility Change Handler to re-sync immediately
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible' && isRunning && endTime) {
                const now = Date.now();
                const diff = endTime - now;
                const newTimeLeft = Math.max(0, Math.ceil(diff / 1000));
                setTimeLeft(newTimeLeft);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, [isRunning, endTime]);

    // Timer logic with Delta Time pattern
    useEffect(() => {
        if (isRunning && endTime) {
            intervalRef.current = setInterval(() => {
                const now = Date.now();
                const diff = endTime - now;

                if (diff <= 1000) { // Less than 1 second remaining
                    clearInterval(intervalRef.current!);
                    setIsRunning(false);
                    setTimeLeft(0);
                    setEndTime(null);

                    // Clear saved state on completion
                    clearSavedState();

                    // Play completion sound
                    playBell();

                    // Trigger completion callback
                    setTimeout(onComplete, 500);
                } else {
                    const newTimeLeft = Math.ceil(diff / 1000);
                    setTimeLeft(newTimeLeft);
                }
            }, 1000) as unknown as NodeJS.Timeout;
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isRunning, endTime, onComplete, soundEnabled, clearSavedState]);

    const handleStart = useCallback(() => {
        initAudio(); // Initialize audio context
        if (!hasStarted) {
            setHasStarted(true);
            onStart?.();
        }

        // Calculate expected end time based on CURRENT timeLeft
        // This works for both fresh start and resume
        const targetTime = Date.now() + (timeLeft * 1000);
        setEndTime(targetTime);
        setIsRunning(true);
    }, [hasStarted, onStart, timeLeft]);

    const handlePause = useCallback(() => {
        if (!isStrict) {
            setIsRunning(false);
            setEndTime(null); // Clear end time so we don't keep counting in background while paused
            // timeLeft is already updated by the interval state, so it holds the correct "remaining" value
        }
    }, [isStrict]);

    const handleReset = useCallback(() => {
        if (!isStrict || !hasStarted) {
            setIsRunning(false);
            setEndTime(null);
            setTimeLeft(duration);
            setHasStarted(false);
        }
    }, [isStrict, hasStarted, duration]);

    // Format time
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Progress percentage
    const progress = ((duration - timeLeft) / duration) * 100;

    // Color based on time remaining
    const getTimerColor = () => {
        if (timeLeft <= 60) return 'text-red-500'; // Last minute
        if (timeLeft <= 300) return 'text-amber-500'; // Last 5 minutes
        return 'text-orange-600';
    };

    return (
        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border-orange-200 dark:border-orange-800 shadow-xl">
            <CardContent className="p-8">
                {/* Session Indicator */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 text-orange-600">
                        <Flame className="h-5 w-5" />
                        <span className="font-semibold">Pomodoro {sessionNumber} of {totalSessions}</span>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSoundEnabled(!soundEnabled)}
                        className="text-gray-500"
                    >
                        {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                    </Button>
                </div>

                {/* Timer Circle */}
                <div className="relative w-64 h-64 mx-auto mb-8">
                    {/* Background Circle */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="8"
                            className="text-orange-100 dark:text-orange-900/30"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={`${progress * 2.83} 283`}
                            className="text-orange-500 transition-all duration-1000"
                        />
                    </svg>

                    {/* Time Display */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className={`text-5xl font-bold font-mono ${getTimerColor()}`}>
                            {formatTime(timeLeft)}
                        </span>
                        <span className="text-sm text-gray-500 mt-2 max-w-[180px] text-center truncate px-2">
                            {isRunning ? (focusTask || 'Deep Focus Mode') : hasStarted ? 'Paused' : 'Ready'}
                        </span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6 relative">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2 bg-orange-100" />

                    {/* Extension Popup */}
                    {isRunning && timeLeft < 180 && (
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-in slide-in-from-bottom-2 fade-in">
                            <Button
                                size="sm"
                                variant="secondary"
                                onClick={() => {
                                    setTimeLeft(prev => prev + 300); // Add 5 mins
                                    setEndTime(prev => (prev || Date.now()) + 300000);
                                }}
                                className="shadow-lg border-orange-200 bg-white/90 hover:bg-white text-orange-600 text-xs px-3 h-7"
                            >
                                +5m (Running late?)
                            </Button>
                        </div>
                    )}
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-4">
                    {!isRunning ? (
                        <Button
                            size="lg"
                            onClick={handleStart}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                        >
                            <Play className="mr-2 h-5 w-5" />
                            {hasStarted ? 'Resume' : 'Start Focus'}
                        </Button>
                    ) : (
                        <Button
                            size="lg"
                            onClick={handlePause}
                            disabled={isStrict}
                            className={`px-8 ${isStrict ? 'bg-gray-300 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-600'}`}
                        >
                            <Pause className="mr-2 h-5 w-5" />
                            {isStrict ? 'Strict Mode' : 'Pause'}
                        </Button>
                    )}

                    {!isStrict && (
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={handleReset}
                            disabled={isStrict && hasStarted}
                        >
                            <RotateCcw className="mr-2 h-4 w-4" />
                            Reset
                        </Button>
                    )}
                </div>

                {/* Strict Mode Notice */}
                {isStrict && hasStarted && isRunning && (
                    <div className="mt-4 text-center text-sm text-amber-600 dark:text-amber-400 animate-pulse">
                        🔒 Strict Mode: Timer cannot be paused. Stay focused!
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
