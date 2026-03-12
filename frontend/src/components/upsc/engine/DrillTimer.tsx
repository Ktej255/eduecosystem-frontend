"use client";

import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface DrillTimerProps {
    durationSeconds: number;
    onComplete: () => void;
    isActive: boolean;
    label: string;
}

export const DrillTimer: React.FC<DrillTimerProps> = ({
    durationSeconds,
    onComplete,
    isActive,
    label,
}) => {
    const [timeLeft, setTimeLeft] = useState(durationSeconds);

    const [endTime, setEndTime] = useState<number | null>(null);

    // Reset loop if duration changes
    useEffect(() => {
        setEndTime(null);
        setTimeLeft(durationSeconds);
    }, [durationSeconds]);

    // Handle Active State Transitions
    useEffect(() => {
        if (isActive && !endTime && timeLeft > 0) {
            setEndTime(Date.now() + timeLeft * 1000);
        } else if (!isActive) {
            setEndTime(null);
        }
    }, [isActive, endTime, timeLeft]);

    useEffect(() => {
        if (!isActive || !endTime) return;

        const interval = setInterval(() => {
            const now = Date.now();
            const diff = endTime - now;

            if (diff <= 1000) {
                clearInterval(interval);
                setTimeLeft(0);
                onComplete();
            } else {
                setTimeLeft(Math.ceil(diff / 1000));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isActive, endTime, onComplete]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs
            .toString()
            .padStart(2, "0")}`;
    };

    const progress = ((durationSeconds - timeLeft) / durationSeconds) * 100;

    return (
        <Card className="p-4 flex flex-col items-center justify-center space-y-4 bg-slate-900 text-white border-slate-800">
            <div className="flex items-center space-x-2 text-muted-foreground uppercase tracking-wider text-sm font-semibold">
                <Clock className="w-4 h-4" />
                <span>{label}</span>
            </div>
            <div className="text-6xl font-mono font-bold tracking-widest text-blue-400">
                {formatTime(timeLeft)}
            </div>
            <Progress value={progress} className="h-2 w-full bg-slate-800" />
        </Card>
    );
};
