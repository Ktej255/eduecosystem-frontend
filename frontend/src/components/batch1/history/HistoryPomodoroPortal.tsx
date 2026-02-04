"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Timer,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    ArrowLeft,
    Flashlight,
    Trophy,
    Flame,
    Target,
    BarChart3,
    BookMarked,
    RefreshCw,
    X,
    Settings,
    History as HistoryIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { HISTORY_SCHEDULE, HistoryDaySchedule } from './data/history-schedule-data';
import { HISTORY_CHAPTER_SUBTOPICS } from './data/history-subtopics';
import HistoryMCQSession, { MCQResult } from './HistoryMCQSession';
import { awardXP } from '@/lib/gamification/xp-engine';
import { ActivityLogger } from '@/lib/analytics/ActivityLogger';
import { useRouter } from 'next/navigation';
import { getMCQsForHistoryChapters } from './data/history-mcqs-data';

interface HistoryPomodoroPortalProps {
    initialWeekId?: number;
    initialDayId?: number;
}

type PortalView = 'setup' | 'pomodoro' | 'mcq' | 'report';

export default function HistoryPomodoroPortal({ initialWeekId = 1, initialDayId = 1 }: HistoryPomodoroPortalProps) {
    const router = useRouter();
    const [view, setView] = useState<PortalView>('setup');
    const [selectedDay, setSelectedDay] = useState<number>(() => {
        // Calculate absolute day from week/day
        return (initialWeekId - 1) * 7 + initialDayId;
    });

    const dayData = useMemo(() => {
        return HISTORY_SCHEDULE.find(d => d.day === selectedDay) || HISTORY_SCHEDULE[0];
    }, [selectedDay]);

    // Pomodoro State
    const [sessionsCompleted, setSessionsCompleted] = useState(0);
    const [totalPagesRead, setTotalPagesRead] = useState(0);
    const [currentTime, setCurrentTime] = useState(25 * 60); // 25 mins
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [mcqResults, setMcqResults] = useState<MCQResult[] | null>(null);

    // MCQ State
    const [mcqsForSession, setMcqsForSession] = useState<any[]>([]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isActive && currentTime > 0) {
            interval = setInterval(() => {
                setCurrentTime(prev => prev - 1);
            }, 1000);
        } else if (currentTime === 0) {
            handleSessionEnd();
        }
        return () => clearInterval(interval);
    }, [isActive, currentTime]);

    const handleSessionEnd = () => {
        setIsActive(false);
        if (!isBreak) {
            // Study session finished
            const pages = prompt("How many pages did you cover in this session?", "6");
            const pagesInt = parseInt(pages || "0");
            setTotalPagesRead(prev => prev + pagesInt);
            setSessionsCompleted(prev => prev + 1);

            // Award XP
            awardXP('pomodoro_complete', undefined, `Completed History Pomodoro Session (Day ${selectedDay})`);

            if (sessionsCompleted + 1 >= 10) { // 5 hours @ 25 + 5 mins = 10 sessions
                setView('mcq');
                prepareMCQs();
            } else {
                setIsBreak(true);
                setCurrentTime(5 * 60); // 5 min break
            }
        } else {
            // Break finished
            setIsBreak(false);
            setCurrentTime(25 * 60);
        }
    };

    const prepareMCQs = async () => {
        // Collect MCQ chapters from the current day
        const chapters = dayData.chapters;

        try {
            const allDayMCQs = getMCQsForHistoryChapters(chapters);

            // Randomly select 60
            const shuffled = [...allDayMCQs].sort(() => 0.5 - Math.random());
            setMcqsForSession(shuffled.slice(0, 60));
        } catch (e) {
            console.error("Error loading MCQs", e);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const startPortal = () => {
        setView('pomodoro');
        setIsActive(true);
    };

    if (view === 'setup') {
        return (
            <div className="max-w-4xl mx-auto p-6 space-y-8 animate-in fade-in duration-500">
                <div className="flex items-center gap-4 mb-4">
                    <Button variant="ghost" onClick={() => router.back()}>
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>
                </div>

                <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-amber-100 rounded-2xl flex items-center justify-center">
                        <HistoryIcon className="w-8 h-8 text-amber-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">History Deep Focus Portal</h1>
                    <p className="text-gray-500 max-w-lg mx-auto">
                        5 Hours (10 Pomodoros) • 60 Pages Target • 60 Question MCQ Challenge
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <Card className="border-2 border-amber-200 bg-amber-50/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BookMarked className="w-5 h-5 text-amber-600" />
                                Today's Target: Day {selectedDay}
                            </CardTitle>
                            <CardDescription>{dayData.title}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <p className="text-xs font-bold uppercase text-amber-700">Scheduled Topics:</p>
                                <ul className="text-sm space-y-1">
                                    {dayData.topics.map((t, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-amber-500 mt-0.5" />
                                            <span>{t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-amber-200">
                                <p className="text-xs font-bold uppercase text-amber-700 mb-2">Workflow Strategy:</p>
                                <div className="text-sm bg-white p-3 rounded-lg border border-amber-100 text-amber-900">
                                    {dayData.strategy}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-900 text-white border-none shadow-2xl">
                        <CardHeader>
                            <CardTitle>Session Goals</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-orange-500/20 rounded-xl">
                                    <Timer className="w-6 h-6 text-orange-400" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold">300 Minutes</div>
                                    <div className="text-xs text-gray-400">Total Study Time</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-500/20 rounded-xl">
                                    <BookOpen className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold">60 Pages</div>
                                    <div className="text-xs text-gray-400">Active Reading Target</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-green-500/20 rounded-xl">
                                    <Target className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold">60 MCQs</div>
                                    <div className="text-xs text-gray-400">Daily Mastery Test</div>
                                </div>
                            </div>

                            <Button
                                className="w-full h-14 text-lg font-bold bg-amber-600 hover:bg-amber-500 mt-6"
                                onClick={startPortal}
                            >
                                Start Deep Focus
                                <Play className="w-5 h-5 ml-2 fill-current" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    if (view === 'pomodoro') {
        const progress = (sessionsCompleted / 10) * 100;
        return (
            <div className="max-w-4xl mx-auto p-6 space-y-8">
                <div className="flex justify-between items-center">
                    <Button variant="ghost" onClick={() => setView('setup')}>
                        <X className="w-4 h-4 mr-2" /> End Portal
                    </Button>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <div className="text-xs text-gray-500 uppercase font-bold">Progress</div>
                            <div className="text-sm font-bold">{sessionsCompleted}/10 Sessions</div>
                        </div>
                        <div className="w-32">
                            <Progress value={progress} className="h-2 bg-slate-200" />
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-12 shadow-2xl border-b-8 border-slate-200 dark:border-slate-800 text-center space-y-8">
                    <div className="flex justify-center gap-4">
                        <Badge variant={isBreak ? "default" : "outline"} className={isBreak ? "bg-green-500" : "border-orange-500 text-orange-500"}>
                            {isBreak ? "Break Time" : "Study Session"}
                        </Badge>
                    </div>

                    <div className="text-9xl font-black tabular-nums tracking-tighter text-slate-900 dark:text-white">
                        {formatTime(currentTime)}
                    </div>

                    <div className="flex justify-center gap-4 pt-8">
                        <Button
                            className="h-16 px-12 rounded-2xl bg-slate-900 dark:bg-white dark:text-slate-900 text-xl font-bold"
                            onClick={() => setIsActive(!isActive)}
                        >
                            {isActive ? "Pause" : "Resume"}
                        </Button>
                        <Button
                            variant="outline"
                            className="h-16 w-16 rounded-2xl"
                            onClick={() => {
                                if (confirm("Reset current session?")) setCurrentTime(isBreak ? 5 * 60 : 25 * 60);
                            }}
                        >
                            <RefreshCw className="w-6 h-6" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <Card className="bg-slate-50 dark:bg-slate-800/50">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <div className="text-xs text-slate-500 font-bold uppercase mb-1">Total Coverage</div>
                                <div className="text-2xl font-black">{totalPagesRead} Pages</div>
                            </div>
                            <BookOpen className="w-10 h-10 text-blue-500 opacity-20" />
                        </CardContent>
                    </Card>
                    <Card className="bg-slate-50 dark:bg-slate-800/50">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <div className="text-xs text-slate-500 font-bold uppercase mb-1">Current Task</div>
                                <div className="text-sm font-bold line-clamp-1">{dayData.title}</div>
                            </div>
                            <Target className="w-10 h-10 text-orange-500 opacity-20" />
                        </CardContent>
                    </Card>
                </div>

                <div className="text-center pt-8">
                    <Button variant="link" className="text-slate-400" onClick={() => setView('mcq')}>
                        Skip to MCQ Challenge (Admin/Finish)
                    </Button>
                </div>
            </div>
        );
    }

    if (view === 'mcq') {
        return (
            <div className="h-[750px] animate-in zoom-in-95 duration-500">
                <HistoryMCQSession
                    questions={mcqsForSession}
                    onComplete={(results) => {
                        setMcqResults(results);
                        setView('report');
                        // Award XP for completion
                        awardXP('mcq_session_complete', undefined, `Completed ${results.length} History MCQs (Day ${selectedDay})`);
                    }}
                    onCancel={() => setView('pomodoro')}
                    title={`Day ${selectedDay} Mastery Test`}
                />
            </div>
        );
    }

    if (view === 'report') {
        return (
            <div className="max-w-4xl mx-auto p-6 space-y-8 animate-in zoom-in-95 duration-500">
                <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white text-center space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Trophy className="w-48 h-48" />
                    </div>

                    <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h1 className="text-4xl font-black">History Mission Complete!</h1>
                    <p className="text-indigo-200">Session Summary for Day {selectedDay}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                        <div className="p-4 bg-white/10 rounded-2xl">
                            <div className="text-3xl font-black">{sessionsCompleted * 0.5}</div>
                            <div className="text-[10px] uppercase font-bold opacity-60">Hours Study</div>
                        </div>
                        <div className="p-4 bg-white/10 rounded-2xl">
                            <div className="text-3xl font-black">{totalPagesRead}</div>
                            <div className="text-[10px] uppercase font-bold opacity-60">Pages Read</div>
                        </div>
                        <div className="p-4 bg-white/10 rounded-2xl">
                            <div className="text-3xl font-black">
                                {mcqResults ? Math.round((mcqResults.filter(r => r.isCorrect).length / mcqResults.length) * 100) : '82'}%
                            </div>
                            <div className="text-[10px] uppercase font-bold opacity-60">MCQ Accuracy</div>
                        </div>
                        <div className="p-4 bg-white/10 rounded-2xl">
                            <div className="text-3xl font-black">+{200 + (sessionsCompleted * 25)}</div>
                            <div className="text-[10px] uppercase font-bold opacity-60">XP Earned</div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <Button className="bg-white text-slate-900 hover:bg-gray-100 rounded-xl px-12 h-12 font-bold" onClick={() => router.push('/student/batch1/history')}>
                            Back to History Hub
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm flex items-center gap-2">
                                <BarChart3 className="w-4 h-4 text-indigo-500" />
                                Section Analysis
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span>Conceptual Clarity</span>
                                        <span className="font-bold">High</span>
                                    </div>
                                    <Progress value={85} className="h-1 bg-slate-100" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span>Factual Retention</span>
                                        <span className="font-bold">Moderate</span>
                                    </div>
                                    <Progress value={60} className="h-1 bg-slate-100" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm flex items-center gap-2">
                                <Flame className="w-4 h-4 text-orange-500" />
                                Momentum
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center p-4">
                                <div className="text-3xl font-black text-orange-500">4 Day</div>
                                <div className="text-xs text-gray-500">Consecutive History Study</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    return null;
}

function Play(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
    )
}
