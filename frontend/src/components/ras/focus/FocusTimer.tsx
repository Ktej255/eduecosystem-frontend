
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FocusTimerProps {
    durationMinutes: number;
    label: string;
    onComplete?: () => void;
    isActive?: boolean;
}

export default function FocusTimer({ durationMinutes, label, onComplete, isActive = false }: FocusTimerProps) {
    const [secondsLeft, setSecondsLeft] = useState(durationMinutes * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Reset when duration changes
    useEffect(() => {
        setSecondsLeft(durationMinutes * 60);
        setIsRunning(false);
        setIsCompleted(false);
    }, [durationMinutes]);

    useEffect(() => {
        if (isRunning && secondsLeft > 0) {
            intervalRef.current = setInterval(() => {
                setSecondsLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current!);
                        setIsRunning(false);
                        setIsCompleted(true);
                        if (onComplete) onComplete();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isRunning, secondsLeft, onComplete]);

    const toggleTimer = () => setIsRunning(!isRunning);
    const resetTimer = () => {
        setIsRunning(false);
        setSecondsLeft(durationMinutes * 60);
        setIsCompleted(false);
    };

    const formatTime = (totalSeconds: number) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const progress = ((durationMinutes * 60 - secondsLeft) / (durationMinutes * 60)) * 100;

    return (
        <div className={cn(
            "relative p-6 rounded-2xl border transition-all duration-300",
            isActive ? "bg-neutral-900 border-amber-500/50 shadow-2xl shadow-amber-900/20" : "bg-neutral-900/50 border-neutral-800 opacity-75 grayscale"
        )}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-amber-500 font-bold tracking-wider text-xs uppercase mb-1">Current Focus</h3>
                    <div className="text-white font-bold text-lg">{label}</div>
                </div>
                {isCompleted && <CheckCircle className="text-green-500 w-6 h-6 animate-pulse" />}
            </div>

            {/* Timer Display */}
            <div className="relative h-32 flex items-center justify-center mb-6">
                {/* Progress Ring Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-neutral-800"></div>
                </div>
                {/* Content */}
                <div className="text-5xl font-mono font-bold text-white tracking-widest relative z-10 tabular-nums">
                    {formatTime(secondsLeft)}
                </div>
            </div>

            {/* Controls */}
            <div className="flex gap-4">
                {isActive ? (
                    <>
                        <Button
                            onClick={toggleTimer}
                            className={cn(
                                "flex-1 font-bold",
                                isRunning ? "bg-amber-600 hover:bg-amber-700" : "bg-green-600 hover:bg-green-700"
                            )}
                        >
                            {isRunning ? <><Pause className="mr-2 w-4 h-4" /> Pause</> : <><Play className="mr-2 w-4 h-4" /> Start</>}
                        </Button>
                        <Button variant="outline" onClick={resetTimer} className="border-neutral-700 hover:bg-neutral-800">
                            <RotateCcw className="w-4 h-4" />
                        </Button>
                    </>
                ) : (
                    <Button disabled className="w-full bg-neutral-800 text-neutral-500 cursor-not-allowed">
                        Locked
                    </Button>
                )}
            </div>

            {/* Progress Bar Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800 rounded-b-2xl overflow-hidden">
                <div
                    className="h-full bg-amber-500 transition-all duration-1000 ease-linear"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}
