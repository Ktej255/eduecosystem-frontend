"use client";

import React, { useState, useEffect } from 'react';
import { Coffee, Play, SkipForward } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BreakTimerProps {
    duration: number; // in seconds
    onComplete: () => void;
    onSkip: () => void;
    isLongBreak?: boolean; // 10-15 min break after Cycle 4
}

export default function BreakTimer({
    duration,
    onComplete,
    onSkip,
    isLongBreak = false
}: BreakTimerProps) {
    const [timeLeft, setTimeLeft] = useState(duration);
    const [isPaused, setIsPaused] = useState(false);

    const [endTime, setEndTime] = useState<number | null>(null);

    // Initial start or resume
    useEffect(() => {
        if (!isPaused && !endTime && timeLeft > 0) {
            setEndTime(Date.now() + timeLeft * 1000);
        } else if (isPaused) {
            setEndTime(null);
        }
    }, [isPaused, endTime, timeLeft]);

    useEffect(() => {
        if (isPaused || !endTime) return;

        const timer = setInterval(() => {
            const now = Date.now();
            const diff = endTime - now;

            if (diff <= 0) {
                setTimeLeft(0);
                onComplete();
                clearInterval(timer);
            } else {
                setTimeLeft(Math.ceil(diff / 1000));
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [isPaused, endTime, onComplete]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const progress = ((duration - timeLeft) / duration) * 100;

    const bgGradient = isLongBreak
        ? 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800'
        : 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800';

    const iconColor = isLongBreak ? 'text-blue-500' : 'text-green-500';
    const timerColor = isLongBreak ? 'text-blue-600' : 'text-green-600';
    const progressColor = isLongBreak
        ? 'from-blue-500 to-indigo-500'
        : 'from-green-500 to-emerald-500';

    return (
        <div className="animate-in fade-in duration-300">
            <Card className={`bg-gradient-to-br ${bgGradient}`}>
                <CardContent className="p-8 text-center">
                    {/* Icon */}
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${isLongBreak ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-green-100 dark:bg-green-900/30'} flex items-center justify-center`}>
                        <Coffee className={`h-10 w-10 ${iconColor}`} />
                    </div>

                    {/* Title */}
                    <h2 className={`text-2xl font-bold ${isLongBreak ? 'text-blue-700 dark:text-blue-300' : 'text-green-700 dark:text-green-300'} mb-2`}>
                        {isLongBreak ? '🌟 Long Break Time!' : 'Break Time! ☕'}
                    </h2>

                    {/* Timer */}
                    <div className={`text-6xl font-bold font-mono ${timerColor} my-8`}>
                        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                    </div>

                    {/* Progress Ring */}
                    <div className="relative w-32 h-2 mx-auto mb-6 bg-muted rounded-full overflow-hidden">
                        <div
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${progressColor} transition-all duration-1000`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Message */}
                    <p className={`${isLongBreak ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'} mb-6`}>
                        {isLongBreak
                            ? 'You completed 4 cycles! Take a proper break, stretch, and hydrate.'
                            : 'Rest your eyes, stretch a bit, or grab some water.'}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 justify-center">
                        <Button
                            variant="outline"
                            onClick={() => setIsPaused(!isPaused)}
                            className={`border-${isLongBreak ? 'blue' : 'green'}-300`}
                        >
                            {isPaused ? <Play className="h-4 w-4 mr-1" /> : '⏸'}
                            {isPaused ? 'Resume' : 'Pause'}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={onSkip}
                            className={`border-${isLongBreak ? 'blue' : 'green'}-300`}
                        >
                            <SkipForward className="h-4 w-4 mr-1" />
                            Skip Break
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
