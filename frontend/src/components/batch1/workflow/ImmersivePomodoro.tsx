"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    Maximize, Minimize, PauseCircle, PlayCircle,
    StopCircle, Layout, ArrowLeft, Coffee, Brain, ListTodo
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// 6 Hours in seconds
const TOTAL_SESSION_TIME = 6 * 60 * 60;

export default function ImmersivePomodoro({ onComplete, onBack }: { onComplete: () => void, onBack: () => void }) {
    const [status, setStatus] = useState<'planning' | 'running' | 'paused'>('planning');
    const [timeLeft, setTimeLeft] = useState(TOTAL_SESSION_TIME);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Resilience: Start Time Tracking
    useEffect(() => {
        // Load state from local storage on mount
        const savedStatus = localStorage.getItem('pomodoro_status');
        const savedStartTime = localStorage.getItem('pomodoro_start_time');

        if (savedStatus === 'running' && savedStartTime) {
            const start = parseInt(savedStartTime, 10);
            const now = Date.now();
            const elapsed = Math.floor((now - start) / 1000);
            const remaining = TOTAL_SESSION_TIME - elapsed;

            if (remaining > 0) {
                setStatus('running');
                setTimeLeft(remaining);
            } else {
                setStatus('paused'); // Or finished
                setTimeLeft(0);
                localStorage.removeItem('pomodoro_status');
                localStorage.removeItem('pomodoro_start_time');
            }
        }
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (status === 'running') {
            // Save start time if not already saved
            if (!localStorage.getItem('pomodoro_start_time')) {
                localStorage.setItem('pomodoro_start_time', Date.now().toString());
            }
            localStorage.setItem('pomodoro_status', 'running');

            interval = setInterval(() => {
                const startTime = parseInt(localStorage.getItem('pomodoro_start_time') || Date.now().toString(), 10);
                const now = Date.now();
                const elapsedSeconds = Math.floor((now - startTime) / 1000);
                const remaining = TOTAL_SESSION_TIME - elapsedSeconds;

                if (remaining <= 0) {
                    setTimeLeft(0);
                    setStatus('paused');
                    localStorage.removeItem('pomodoro_status');
                    localStorage.removeItem('pomodoro_start_time');
                    clearInterval(interval);
                } else {
                    setTimeLeft(remaining);
                }
            }, 1000);
        } else if (status === 'paused') {
            // If manually paused, we might want to clear the persistence or handle "pause" differently.
        }

        return () => clearInterval(interval);
    }, [status]);

    const handleCompleteOrStop = () => {
        localStorage.removeItem('pomodoro_status');
        localStorage.removeItem('pomodoro_start_time');
        setStatus('planning');
        setTimeLeft(TOTAL_SESSION_TIME);
        onComplete();
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const renderPlanningView = () => (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in">
            <Button variant="ghost" onClick={onBack} className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>

            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">6-Hour Immersive Session</h1>
                <p className="text-xl text-gray-600">Prepare for deep work. Eliminate distractions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((hour) => (
                    <Card key={hour} className="border-l-4 border-l-blue-500">
                        <CardContent className="p-4">
                            <h3 className="font-bold text-lg mb-2">Hour {hour}</h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full" /> 50m Deep Work</li>
                                <li className="flex items-center gap-2 text-green-600"><div className="w-1.5 h-1.5 bg-green-400 rounded-full" /> 10m Break</li>
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center pt-8">
                <Button size="lg" className="w-full max-w-sm text-lg py-8 rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-xl" onClick={() => {
                    setStatus('running');
                    toggleFullscreen();
                }}>
                    Start Session
                </Button>
            </div>
        </div>
    );

    const renderActiveSession = () => (
        <div className={cn(
            "flex flex-col items-center justify-center min-h-[80vh] transition-colors duration-500",
            status === 'paused' ? "bg-gray-100 dark:bg-gray-900" : "bg-black text-white"
        )}>
            <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="ghost" className="text-white hover:bg-white/10" onClick={toggleFullscreen}>
                    {isFullscreen ? <Minimize className="w-6 h-6" /> : <Maximize className="w-6 h-6" />}
                </Button>
            </div>

            <div className="text-center space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-light opacity-80">Remaining Time</h2>
                    <div className="text-[120px] font-mono leading-none font-bold tracking-tighter tabular-nums">
                        {formatTime(timeLeft)}
                    </div>
                </div>

                <div className="flex items-center justify-center gap-6">
                    {status === 'running' ? (
                        <Button variant="outline" size="lg" className="rounded-full h-16 w-16 border-2" onClick={() => setStatus('paused')}>
                            <PauseCircle className="w-8 h-8" />
                        </Button>
                    ) : (
                        <Button variant="outline" size="lg" className="rounded-full h-16 w-16 border-2" onClick={() => setStatus('running')}>
                            <PlayCircle className="w-8 h-8" />
                        </Button>
                    )}

                    <Button variant="destructive" size="lg" onClick={handleCompleteOrStop}>
                        <StopCircle className="w-6 h-6 mr-2" /> End Session
                    </Button>
                </div>

                <div className="grid grid-cols-3 gap-8 text-center opacity-60 mt-12">
                    <div>
                        <Brain className="w-8 h-8 mx-auto mb-2" />
                        <p>Deep Focus</p>
                    </div>
                    <div>
                        <Coffee className="w-8 h-8 mx-auto mb-2" />
                        <p>Next Break in 25m</p>
                    </div>
                    <div>
                        <ListTodo className="w-8 h-8 mx-auto mb-2" />
                        <p>Task List</p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full h-full">
            {status === 'planning' ? renderPlanningView() : renderActiveSession()}
        </div>
    );
}
