"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
    Clock, Play, Pause, SkipForward, BookOpen,
    Brain, CheckCircle, Plus, ChevronRight, ArrowLeft
} from 'lucide-react';

type SessionMode = 'study' | 'flashcard' | 'mcq';

interface HistoryPomodoroProps {
    initialWeekId?: number;
    initialDayId?: number;
}

export default function HistoryPomodoroPortal({ initialWeekId, initialDayId }: HistoryPomodoroProps = {}) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const subject = searchParams.get('subject') || 'General';
    const initialMode = (searchParams.get('mode') as SessionMode) || 'study'; // day param is also available


    const [mode, setMode] = useState<SessionMode>(initialMode);
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
    const [isRunning, setIsRunning] = useState(false);
    const [sessionComplete, setSessionComplete] = useState(false);

    // Timer Logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
            setSessionComplete(true);
            // Optional: Play sound
        }
        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const addTime = (minutes: number) => {
        setTimeLeft(prev => prev + minutes * 60);
    };

    const handleNextStage = () => {
        if (mode === 'study') setMode('flashcard');
        else if (mode === 'flashcard') setMode('mcq');
        else router.push('/student/batch1/history');

        // Reset valid state for next stage
        setSessionComplete(false);
        setIsRunning(false);
    };

    return (
        <div className="min-h-screen bg-neutral-900 text-white flex flex-col">
            {/* Header */}
            <div className="h-16 border-b border-neutral-800 flex items-center justify-between px-6 bg-black/50 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="p-2 hover:bg-neutral-800 rounded-full transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                        <h1 className="text-lg font-bold flex items-center gap-2">
                            <Clock className="w-5 h-5 text-amber-500" />
                            History Focus: {subject}
                        </h1>
                        <div className="flex items-center gap-2 text-xs text-neutral-400">
                            <span className={mode === 'study' ? 'text-amber-400 font-bold' : ''}>Study</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className={mode === 'flashcard' ? 'text-amber-400 font-bold' : ''}>Flashcards</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className={mode === 'mcq' ? 'text-amber-400 font-bold' : ''}>MCQs</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden">
                {/* PDF/Content Viewer (Placeholder for Infographic) */}
                <div className="flex-1 border-r border-neutral-800 bg-neutral-900 overflow-y-auto p-8 flex items-center justify-center">
                    <div className="text-center space-y-4 max-w-md">
                        <BookOpen className="w-16 h-16 text-neutral-700 mx-auto" />
                        <h2 className="text-2xl font-bold text-neutral-500">Infographic Layer</h2>
                        <p className="text-neutral-600">
                            Subject: {subject}<br />
                            Chapter specific infographics will appear here during the session.
                        </p>
                    </div>
                </div>

                {/* Sidebar / Controls */}
                <div className="w-96 bg-black border-l border-neutral-800 flex flex-col">

                    {/* Timer Section (Only visible in Study Mode) */}
                    {mode === 'study' && (
                        <div className="p-8 flex-1 flex flex-col items-center justify-center space-y-8">
                            <div className="relative">
                                {/* Timer Circle Decoration */}
                                <div className="absolute inset-0 rounded-full border-4 border-amber-900/30 animate-pulse"></div>
                                <div className="text-7xl font-mono font-black tracking-tighter text-amber-500 tabular-nums">
                                    {formatTime(timeLeft)}
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setIsRunning(!isRunning)}
                                    className={`p-4 rounded-full transition-all ${isRunning
                                        ? 'bg-amber-900/50 text-amber-500 hover:bg-amber-900'
                                        : 'bg-amber-600 text-white hover:bg-amber-500 shadow-lg shadow-amber-900/50'
                                        }`}
                                >
                                    {isRunning ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                                </button>
                            </div>

                            {/* Add Time */}
                            <div className="grid grid-cols-3 gap-3 w-full">
                                {[5, 10, 15].map(min => (
                                    <button
                                        key={min}
                                        onClick={() => addTime(min)}
                                        className="py-3 px-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 hover:bg-neutral-800 text-xs font-bold transition-all flex flex-col items-center gap-1 group"
                                    >
                                        <Plus className="w-3 h-3 text-neutral-500 group-hover:text-amber-500" />
                                        <span>{min} min</span>
                                    </button>
                                ))}
                            </div>

                            {sessionComplete && (
                                <div className="w-full bg-green-900/20 border border-green-800 p-4 rounded-xl text-center animate-in fade-in slide-in-from-bottom-2">
                                    <h3 className="text-green-400 font-bold mb-2">Session Complete!</h3>
                                    <button
                                        onClick={handleNextStage}
                                        className="w-full py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-500"
                                    >
                                        Proceed to Flashcards
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Placeholder Logic for Flashcards/MCQs */}
                    {mode !== 'study' && (
                        <div className="p-8 flex-1 flex flex-col items-center justify-center space-y-6 text-center">
                            {mode === 'flashcard' ? (
                                <>
                                    <Brain className="w-12 h-12 text-purple-500 mb-4" />
                                    <h2 className="text-xl font-bold">Active Recall</h2>
                                    <p className="text-sm text-neutral-400">Review key concepts for {subject}.</p>
                                    <button
                                        onClick={handleNextStage}
                                        className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold"
                                    >
                                        Start MCQs
                                    </button>
                                </>
                            ) : (
                                <>
                                    <CheckCircle className="w-12 h-12 text-emerald-500 mb-4" />
                                    <h2 className="text-xl font-bold">Test Knowledge</h2>
                                    <p className="text-sm text-neutral-400">Solve MCQs for {subject}.</p>
                                    <button
                                        onClick={handleNextStage}
                                        className="mt-8 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold"
                                    >
                                        Complete Session
                                    </button>
                                </>
                            )}
                        </div>
                    )}

                    {/* Manual Override to Next Stage */}
                    {!sessionComplete && (
                        <div className="p-4 border-t border-neutral-800 text-center">
                            <button
                                onClick={handleNextStage}
                                className="text-xs text-neutral-500 hover:text-white flex items-center justify-center gap-2 w-full"
                            >
                                Skip to next <SkipForward className="w-3 h-3" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
