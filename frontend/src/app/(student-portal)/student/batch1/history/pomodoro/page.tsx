"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Play, Pause, RotateCcw, ChevronRight, BookOpen, CheckCircle2, Target, Flame, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import SubtopicSelector from '@/components/batch1-1/pomodoro/SubtopicSelector';
import CycleMCQs from '@/components/batch1-1/pomodoro/CycleMCQs';
import { HISTORY_SCHEDULE } from '@/components/batch1/history/data/history-schedule-data';
import { HISTORY_CHAPTER_SUBTOPICS, SubTopic } from '@/components/batch1/history/data/history-subtopics';

// Session state types
type SessionPhase = 'subtopic-selection' | 'timer' | 'mcq' | 'complete';

interface SessionData {
    sessionNumber: number;
    selectedSubtopics: SubTopic[];
    mcqResults: { correct: number; total: number };
    isComplete: boolean;
}

// Simple Timer component
function PomodoroTimer({
    onComplete,
    onSkip
}: {
    onComplete: () => void;
    onSkip: () => void;
}) {
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            onComplete();
        }
        return () => clearInterval(interval);
    }, [isRunning, timeLeft, onComplete]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-2xl">
            <CardContent className="p-8 text-center">
                <div className="text-7xl font-mono font-bold mb-6">
                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </div>
                <div className="flex justify-center gap-4">
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => setIsRunning(!isRunning)}
                        className="gap-2"
                    >
                        {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        {isRunning ? 'Pause' : 'Start'}
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => setTimeLeft(25 * 60)}
                        className="gap-2 text-white border-white/30 hover:bg-white/10"
                    >
                        <RotateCcw className="w-5 h-5" />
                        Reset
                    </Button>
                    <Button
                        variant="ghost"
                        size="lg"
                        onClick={onSkip}
                        className="gap-2 text-white/70 hover:text-white hover:bg-white/10"
                    >
                        Skip <ChevronRight className="w-5 h-5" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

function HistoryPomodoroContent() {
    const searchParams = useSearchParams();
    const { toast } = useToast();

    // Get day from URL (linear day number 1-30)
    const dayParam = searchParams.get('day');
    const dayNumber = dayParam ? parseInt(dayParam) : 1;
    const safeDay = isNaN(dayNumber) || dayNumber < 1 ? 1 : dayNumber;

    // Get today's schedule
    const todaySchedule = useMemo(() => {
        if (!HISTORY_SCHEDULE || !Array.isArray(HISTORY_SCHEDULE)) {
            return null;
        }
        return HISTORY_SCHEDULE.find(d => d.day === safeDay) || HISTORY_SCHEDULE[0];
    }, [safeDay]);

    // Get chapters for today
    const todayChapters = useMemo(() => {
        return todaySchedule?.chapters || [];
    }, [todaySchedule]);

    // State
    const [currentSession, setCurrentSession] = useState(1);
    const [sessionPhase, setSessionPhase] = useState<SessionPhase>('subtopic-selection');
    const [sessionHistory, setSessionHistory] = useState<SessionData[]>([]);
    const [currentSubtopics, setCurrentSubtopics] = useState<SubTopic[]>([]);

    // Handlers
    const handleSubtopicSubmit = useCallback((subtopics: SubTopic[]) => {
        setCurrentSubtopics(subtopics);
        setSessionPhase('timer');
        toast({
            title: "Session Started",
            description: `Studying ${subtopics.length} topics. Timer started!`
        });
    }, [toast]);

    const handleTimerComplete = useCallback(() => {
        setSessionPhase('mcq');
        toast({
            title: "Time's Up!",
            description: "Now test your understanding with MCQs."
        });
    }, [toast]);

    const handleMCQComplete = useCallback((results: { correct: number; total: number }) => {
        const newSession: SessionData = {
            sessionNumber: currentSession,
            selectedSubtopics: currentSubtopics,
            mcqResults: results,
            isComplete: true
        };
        setSessionHistory(prev => [...prev, newSession]);
        setCurrentSession(prev => prev + 1);
        setSessionPhase('complete');
        toast({
            title: "Session Complete!",
            description: `Score: ${results.correct}/${results.total}`
        });
    }, [currentSession, currentSubtopics, toast]);

    const startNextSession = useCallback(() => {
        setCurrentSubtopics([]);
        setSessionPhase('subtopic-selection');
    }, []);

    // Calculate progress
    const totalSubtopicsCompleted = useMemo(() => {
        return sessionHistory.reduce((acc, s) => acc + (s.selectedSubtopics?.length || 0), 0);
    }, [sessionHistory]);

    if (!todaySchedule) {
        return (
            <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">No Schedule Found</h1>
                    <p className="text-gray-400 mb-6">Could not find schedule for Day {safeDay}</p>
                    <Link href="/student/batch1/history">
                        <Button>Back to History</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900">
            {/* Header */}
            <div className="bg-black/50 border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/student/batch1/history" className="flex items-center gap-2 text-white/70 hover:text-white">
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back</span>
                    </Link>
                    <div className="text-center">
                        <div className="text-xs text-indigo-400 font-bold uppercase tracking-wider">Day {safeDay}</div>
                        <div className="text-white font-bold">{todaySchedule.title}</div>
                    </div>
                    <div className="flex items-center gap-2 text-orange-400">
                        <Flame className="w-5 h-5" />
                        <span className="font-bold">{totalSubtopicsCompleted} done</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Today's Topics Card */}
                <Card className="bg-white/5 border-white/10 mb-6">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-2 text-indigo-400 mb-2">
                            <BookOpen className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">Today's Topics</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {todaySchedule.topics.map((topic, idx) => (
                                <span key={idx} className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Session Progress */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    {[1, 2, 3, 4].map((num) => {
                        const isComplete = sessionHistory.some(s => s.sessionNumber === num);
                        const isCurrent = currentSession === num;
                        return (
                            <div
                                key={num}
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all
                                    ${isComplete ? 'bg-green-500 text-white' : isCurrent ? 'bg-indigo-500 text-white ring-4 ring-indigo-500/30' : 'bg-white/10 text-white/50'}`}
                            >
                                {isComplete ? <CheckCircle2 className="w-6 h-6" /> : num}
                            </div>
                        );
                    })}
                </div>

                {/* Phase Content */}
                {sessionPhase === 'subtopic-selection' && (
                    <SubtopicSelector
                        chapterIds={todayChapters}
                        onSubmit={handleSubtopicSubmit}
                        cycleNumber={currentSession}
                        subject="history"
                    />
                )}

                {sessionPhase === 'timer' && (
                    <div className="space-y-6">
                        <div className="text-center text-white mb-4">
                            <h2 className="text-xl font-bold">Session {currentSession}: Focus Time</h2>
                            <p className="text-white/60">Studying {currentSubtopics.length} topics</p>
                        </div>
                        <PomodoroTimer
                            onComplete={handleTimerComplete}
                            onSkip={handleTimerComplete}
                        />
                    </div>
                )}

                {sessionPhase === 'mcq' && (
                    <CycleMCQs
                        selectedSubtopics={currentSubtopics}
                        onComplete={handleMCQComplete}
                        cycleNumber={currentSession}
                        chapterIds={todayChapters}
                        subject="history"
                    />
                )}

                {sessionPhase === 'complete' && (
                    <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white">
                        <CardContent className="p-8 text-center">
                            <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold mb-2">Session {currentSession - 1} Complete!</h2>
                            <p className="text-white/80 mb-6">
                                Great work! You covered {currentSubtopics.length} topics.
                            </p>
                            {currentSession <= 4 ? (
                                <Button
                                    size="lg"
                                    onClick={startNextSession}
                                    className="bg-white text-green-700 hover:bg-white/90"
                                >
                                    Start Session {currentSession}
                                    <ChevronRight className="w-5 h-5 ml-2" />
                                </Button>
                            ) : (
                                <div>
                                    <p className="text-lg font-bold mb-4">All Sessions Complete! 🎉</p>
                                    <Link href="/student/batch1/history">
                                        <Button size="lg" className="bg-white text-green-700 hover:bg-white/90">
                                            Back to History Hub
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}

export default function HistoryPomodoroPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading History Pomodoro...</div>
            </div>
        }>
            <HistoryPomodoroContent />
        </Suspense>
    );
}
