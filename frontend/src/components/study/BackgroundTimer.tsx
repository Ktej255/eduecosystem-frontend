"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    Play,
    Pause,
    Square,
    Volume2,
    Clock,
    BookOpen,
    Mic,
    Coffee
} from "lucide-react";
import {
    getPomodoroTimerService,
    SessionType,
    TimerState,
    SESSION_DURATIONS
} from "@/services/PomodoroTimerService";
import { cn } from "@/lib/utils";

interface BackgroundTimerProps {
    onComplete?: (sessionType: SessionType) => void;
    onStateChange?: (state: TimerState) => void;
    className?: string;
    compact?: boolean;
}

const SESSION_CONFIG: Record<SessionType, {
    label: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
}> = {
    study_25: {
        label: "Focus Time (25 min)",
        icon: <BookOpen className="w-5 h-5" />,
        color: "text-blue-500",
        bgColor: "bg-gradient-to-br from-blue-500/20 to-indigo-600/20"
    },
    explanation_5: {
        label: "Explain What You Learned (5 min)",
        icon: <Mic className="w-5 h-5" />,
        color: "text-green-500",
        bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-600/20"
    },
    break_15: {
        label: "Break Time (15 min)",
        icon: <Coffee className="w-5 h-5" />,
        color: "text-amber-500",
        bgColor: "bg-gradient-to-br from-amber-500/20 to-orange-600/20"
    },
    study_45: {
        label: "Deep Focus (45 min)",
        icon: <BookOpen className="w-5 h-5" />,
        color: "text-purple-500",
        bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-600/20"
    },
    explanation_10: {
        label: "Extended Explanation (10 min)",
        icon: <Mic className="w-5 h-5" />,
        color: "text-teal-500",
        bgColor: "bg-gradient-to-br from-teal-500/20 to-cyan-600/20"
    },
    revision_25: {
        label: "Revision Session (25 min)",
        icon: <Clock className="w-5 h-5" />,
        color: "text-rose-500",
        bgColor: "bg-gradient-to-br from-rose-500/20 to-red-600/20"
    },
    ras_revision: {
        label: "RAS Revision",
        icon: <BookOpen className="w-5 h-5" />,
        color: "text-indigo-500",
        bgColor: "bg-gradient-to-br from-indigo-500/20 to-violet-600/20"
    },
};

export default function BackgroundTimer({
    onComplete,
    onStateChange,
    className,
    compact = false
}: BackgroundTimerProps) {
    const [state, setState] = useState<TimerState | null>(null);
    const [remaining, setRemaining] = useState<number>(0);
    const [elapsed, setElapsed] = useState<number>(0);

    // Initialize service and callbacks
    useEffect(() => {
        const service = getPomodoroTimerService();

        // Set initial state
        setState(service.getState());
        setRemaining(service.getTimeRemaining());

        // Set up callbacks
        service.setCallbacks({
            onTick: (rem, elp) => {
                setRemaining(rem);
                setElapsed(elp);
            },
            onComplete: (sessionType) => {
                onComplete?.(sessionType);
            },
            onStateChange: (newState) => {
                setState(newState);
                onStateChange?.(newState);
            },
        });

        return () => {
            // Don't destroy - keep timer running
        };
    }, [onComplete, onStateChange]);

    const formatTime = useCallback((ms: number): string => {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        }
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }, []);

    const handlePauseResume = () => {
        const service = getPomodoroTimerService();
        if (state?.isPaused) {
            service.resumeTimer();
        } else {
            service.pauseTimer();
        }
    };

    const handleStop = () => {
        const service = getPomodoroTimerService();
        service.stopTimer();
    };

    const handlePreviewSound = () => {
        const service = getPomodoroTimerService();
        service.previewSound();
    };

    // Calculate progress percentage
    const progress = state?.duration
        ? ((state.duration - remaining) / state.duration) * 100
        : 0;

    const sessionConfig = state?.sessionType
        ? SESSION_CONFIG[state.sessionType]
        : null;

    // Not running state
    if (!state?.isRunning) {
        return (
            <Card className={cn(
                "border-dashed border-2 border-gray-300 dark:border-gray-700",
                className
            )}>
                <CardContent className="p-6 text-center">
                    <Clock className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-500 dark:text-gray-400">
                        No timer running
                    </p>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="mt-4"
                        onClick={handlePreviewSound}
                    >
                        <Volume2 className="w-4 h-4 mr-2" />
                        Preview Sound
                    </Button>
                </CardContent>
            </Card>
        );
    }

    // Compact view for sidebar/header
    if (compact) {
        return (
            <div className={cn(
                "flex items-center gap-3 p-3 rounded-lg",
                sessionConfig?.bgColor,
                className
            )}>
                <div className={cn("flex-shrink-0", sessionConfig?.color)}>
                    {sessionConfig?.icon}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                        {sessionConfig?.label}
                    </p>
                    <p className={cn(
                        "text-2xl font-mono font-bold",
                        state.isPaused && "animate-pulse text-yellow-500"
                    )}>
                        {formatTime(remaining)}
                    </p>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handlePauseResume}
                    className="flex-shrink-0"
                >
                    {state.isPaused ? (
                        <Play className="w-5 h-5 text-green-500" />
                    ) : (
                        <Pause className="w-5 h-5 text-amber-500" />
                    )}
                </Button>
            </div>
        );
    }

    // Full timer view
    return (
        <Card className={cn(
            "overflow-hidden border-0 shadow-xl",
            sessionConfig?.bgColor,
            className
        )}>
            <CardContent className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className={cn("p-2 rounded-full bg-white/10", sessionConfig?.color)}>
                            {sessionConfig?.icon}
                        </div>
                        <div>
                            <p className="font-semibold text-lg">
                                {sessionConfig?.label}
                            </p>
                            {state.topicName && (
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Topic: {state.topicName}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                        <p>Phase {state.phaseNumber}</p>
                        <p>Cycle {state.cycleNumber}</p>
                    </div>
                </div>

                {/* Main Timer Display */}
                <div className="text-center py-8">
                    <div className={cn(
                        "text-7xl font-mono font-bold tracking-tighter",
                        state.isPaused && "animate-pulse text-yellow-500"
                    )}>
                        {formatTime(remaining)}
                    </div>
                    {state.isPaused && (
                        <p className="text-yellow-500 font-medium mt-2 animate-pulse">
                            PAUSED
                        </p>
                    )}
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                    <Progress
                        value={progress}
                        className="h-3 bg-white/20"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Elapsed: {formatTime(elapsed)}</span>
                        <span>Total: {formatTime(state.duration)}</span>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-4">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={handlePauseResume}
                        className="w-32 gap-2"
                    >
                        {state.isPaused ? (
                            <>
                                <Play className="w-5 h-5" />
                                Resume
                            </>
                        ) : (
                            <>
                                <Pause className="w-5 h-5" />
                                Pause
                            </>
                        )}
                    </Button>
                    <Button
                        variant="destructive"
                        size="lg"
                        onClick={handleStop}
                        className="w-32 gap-2"
                    >
                        <Square className="w-5 h-5" />
                        Stop
                    </Button>
                </div>

                {/* Sound preview */}
                <div className="flex justify-center">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handlePreviewSound}
                        className="text-gray-500"
                    >
                        <Volume2 className="w-4 h-4 mr-2" />
                        Preview Alert Sound
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

// Export hook for easy access
export function usePomodoroTimer() {
    return getPomodoroTimerService();
}
