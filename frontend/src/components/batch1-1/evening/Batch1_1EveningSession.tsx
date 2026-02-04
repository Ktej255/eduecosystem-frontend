"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Brain,
    BookOpen,
    Calculator,
    ChevronRight,
    CheckCircle2,
    Moon,
    Flame,
    ArrowLeft,
    Target,
    Calendar,
    Lock
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { CHAPTER_SUBTOPICS, SubTopic } from '@/components/batch1/polity/data/polity-subtopics';
import { generateWeeklySchedule } from '@/components/batch1/polity/data/polity-schedule-data';
import CycleFlashcards from '../pomodoro/CycleFlashcards';
import CycleMCQs from '../pomodoro/CycleMCQs';
import { getFlashcardsForSubtopics } from '@/components/batch1/polity/data/polity-flashcards-data';
import { getMCQsForSubtopics } from '@/components/batch1/polity/data/polity-mcqs-data';
import { markStepComplete } from '@/lib/journey/completion-tracker';
import { FLASHCARD_CONTENT_REGISTRY, MCQ_CONTENT_REGISTRY } from '@/components/batch1/content-registry';
import AIChatWidget from '@/components/chat/AIChatWidget';
import MCQPerformanceReport from './MCQPerformanceReport';
import { ConfidenceLevel } from '../pomodoro/CycleMCQs';
import { getSRSData, saveSRSData } from '@/lib/srs/srs-storage';
import { SRSCard } from '@/lib/srs/srs-types';
import { processReview } from '@/lib/srs/srs-engine';
import { recordBatchMCQResults } from '@/lib/analytics/WeakTopicAnalyzer';
import { awardXP } from '@/lib/gamification/xp-engine';
import CSATPracticeView from './CSATPracticeView';


interface MCQResult {
    questionId: string;
    subtopicId?: string;
    selectedAnswer: number | null;
    correctAnswer: number;
    isCorrect: boolean;
    confidence: ConfidenceLevel | null;
    timeSpent: number;
}

interface CycleData {
    cycleNumber: number;
    selectedSubtopics: SubTopic[];
    flashcardsViewed: number;
    mcqResults: MCQResult[];
}

interface MorningProgress {
    currentCycle: number;
    cycleHistory: CycleData[];
    lastUpdated: string;
}

interface EveningSessionViewProps {
    weekId: number;
    dayId: number;
    onDayChange?: (dayId: number) => void;
}

// ... (existing code)

export default function Batch1_1EveningSession({ weekId, dayId, onDayChange }: EveningSessionViewProps) {
    const router = useRouter();
    // ... (existing code)

    // Handle Day Navigation
    const handleDayChange = (newDayId: number) => {
        if (onDayChange) {
            onDayChange(newDayId);
        } else {
            router.push(`/student/batch1-1/${weekId}/${newDayId}/evening`);
        }
    };


    if (activeSection === 'flashcards' && sessionContent) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <Button variant="ghost" onClick={() => setActiveSection('menu')} className="mb-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>

                {/* Day 3 Guidance Dialog */}
                <Dialog open={!!showDay3Guidance} onOpenChange={(open) => !open && setShowDay3Guidance(null)}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                {showDay3Guidance?.type === 'to-mcq' && "Flashcards Completed!"}
                                {showDay3Guidance?.type === 'to-next-chapter' && "Chapter Completed!"}
                                {showDay3Guidance?.type === 'finish' && "Day 3 Session Completed!"}
                            </DialogTitle>
                            <DialogDescription>
                                {showDay3Guidance?.type === 'to-mcq' && "Great job reviewing the concepts. Let's test your knowledge with some MCQs."}
                                {showDay3Guidance?.type === 'to-next-chapter' && `You have completed ${activeChapter === '16' ? 'Inter-State Relations' : 'Emergency Provisions'}. Ready to move on to ${activeChapter === '16' ? 'Emergency Provisions' : 'Inter-State Relations'}?`}
                                {showDay3Guidance?.type === 'finish' && "You have completed both chapters for today! Great work."}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end gap-3 mt-4">
                            <Button variant="outline" onClick={() => {
                                setShowDay3Guidance(null);
                                setActiveSection('menu');
                            }}>
                                Return to Menu
                            </Button>
                            <Button onClick={() => {
                                setShowDay3Guidance(null);
                                if (showDay3Guidance?.type === 'to-mcq') {
                                    setActiveSection('mcqs');
                                } else if (showDay3Guidance?.type === 'to-next-chapter' && showDay3Guidance.nextChapter) {
                                    setActiveChapter(showDay3Guidance.nextChapter);
                                    setActiveSection('flashcards');
                                } else {
                                    setActiveSection('menu');
                                }
                            }}>
                                {showDay3Guidance?.type === 'to-mcq' ? "Start MCQs" :
                                    showDay3Guidance?.type === 'to-next-chapter' ? "Start Next Chapter" : "Finish"}
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>

                <CycleFlashcards
                    selectedSubtopics={sessionContent.subtopics}
                    cycleNumber={5}
                    onComplete={isDay3 ? handleDay3FlashcardComplete : () => setActiveSection('menu')}
                    preloadedCards={isDay3 ? activeDay3Flashcards : sessionContent.flashcards}
                />
            </div>
        );
    }

    if (activeSection === 'mcqs' && sessionContent) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <Button variant="ghost" onClick={() => setActiveSection('menu')} className="mb-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>

                {/* Day 3 Guidance Dialog (Reused for MCQs -> Next flow) */}
                <Dialog open={!!showDay3Guidance} onOpenChange={(open) => !open && setShowDay3Guidance(null)}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                {showDay3Guidance?.type === 'to-next-chapter' && "Chapter Completed!"}
                                {showDay3Guidance?.type === 'finish' && "Day 3 Session Completed!"}
                            </DialogTitle>
                            <DialogDescription>
                                {showDay3Guidance?.type === 'to-next-chapter' && `You have completed ${activeChapter === '16' ? 'Inter-State Relations' : 'Emergency Provisions'}. Ready to move on to ${activeChapter === '16' ? 'Emergency Provisions' : 'Inter-State Relations'}?`}
                                {showDay3Guidance?.type === 'finish' && "You have completed both chapters for today! Great work."}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end gap-3 mt-4">
                            <Button variant="outline" onClick={() => {
                                setShowDay3Guidance(null);
                                setActiveSection('menu');
                            }}>
                                Return to Menu
                            </Button>
                            <Button onClick={() => {
                                setShowDay3Guidance(null);
                                if (showDay3Guidance?.type === 'to-next-chapter' && showDay3Guidance.nextChapter) {
                                    setActiveChapter(showDay3Guidance.nextChapter);
                                    setActiveSection('flashcards');
                                } else {
                                    setActiveSection('menu');
                                }
                            }}>
                                {showDay3Guidance?.type === 'to-next-chapter' ? "Start Next Chapter" : "Finish"}
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>

                {!showResultsReport && (
                    <CycleMCQs
                        selectedSubtopics={sessionContent.subtopics}
                        cycleNumber={5}
                        onComplete={isDay3 ? handleDay3MCQComplete : handleSessionComplete}
                        preloadedMCQs={isDay3 ? activeDay3MCQs : sessionContent.mcqs}
                    />
                )}

                {showResultsReport && sessionResults && (
                    <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <MCQPerformanceReport
                            results={sessionResults}
                            onClose={() => {
                                setShowResultsReport(false);
                                if (isDay3 && pendingGuidance) {
                                    setShowDay3Guidance(pendingGuidance);
                                    setPendingGuidance(null);
                                } else if (!isDay3) {
                                    setActiveSection('menu');
                                }
                            }}
                        />
                    </div>
                )}
            </div>
        );
    }

    // === NEW CSAT SECTION ===
    if (activeSection === 'csat') {
        return (
            <div className="max-w-5xl mx-auto p-6">
                <Button variant="ghost" onClick={() => setActiveSection('menu')} className="mb-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Menu
                </Button>

                <CSATPracticeView
                    dayNumber={absoluteDayNumber}
                    onComplete={(score, total) => {
                        console.log(`CSAT Day ${dayId} Complete: ${score}/${total}`);
                        awardXP('csat_complete', undefined, `Completed CSAT Practice Day ${dayId}`);
                        markStepComplete(absoluteDayNumber, `csat-${absoluteDayNumber}`);
                    }}
                />
            </div>
        );
    }


    if (activeSection !== 'menu') {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <p>Loading session content...</p>
                <Button variant="ghost" onClick={() => setActiveSection('menu')}>Back</Button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            {/* Morning Report is now available in Deep Report Center only */}

            {/* === DAY NAVIGATION BAR === */}
            <div className="bg-white dark:bg-gray-900 p-2 rounded-xl border shadow-sm items-center justify-between overflow-x-auto flex gap-2">
                {DAYS.map((day) => {
                    const isActive = Number(dayId) === day.id;
                    const absoluteDay = (Number(weekId) - 1) * 7 + day.id;
                    return (
                        <Button
                            key={day.id}
                            variant={isActive ? "default" : "ghost"}
                            onClick={() => handleDayChange(day.id)}
                            className={`flex-1 min-w-[60px] ${isActive ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'text-gray-500'}`}
                        >
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-semibold">{day.label}</span>
                                <span className="text-[10px] opacity-70">Day {absoluteDay}</span>
                            </div>
                        </Button>
                    );
                })}
            </div>

            {/* Header */}
            <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <Moon className="h-8 w-8 text-indigo-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Evening Revision Session
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Week {weekId}, Day {dayId} • Consolidate today&apos;s learning • <span className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">v2.2 Synced</span>
                </p>
            </div>

            {/* Morning Progress Summary */}
            {hasMorningProgress ? (
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                                <span className="font-bold text-green-700 dark:text-green-300">
                                    {morningProgress ? "Morning Session Complete" : "Ready for Revision"}
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">
                                    {morningProgress?.cycleHistory?.length || 0}
                                </div>
                                <div className="text-xs text-green-700">Sessions</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">
                                    {morningStats?.totalSubtopics || 0}
                                </div>
                                <div className="text-xs text-green-700">Subtopics</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">
                                    {morningStats?.accuracy || 0}%
                                </div>
                                <div className="text-xs text-green-700">Accuracy</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ) : (
                <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200">
                    <CardContent className="p-4 flex items-center gap-3">
                        <Flame className="h-5 w-5 text-amber-600" />
                        <div>
                            <p className="font-medium text-amber-700 dark:text-amber-300">
                                Complete your morning session first
                            </p>
                            <p className="text-sm text-amber-600">
                                Evening content is customized based on morning progress
                            </p>
                        </div>
                        <Link href={`/student/batch1-1/${weekId}/${dayId}/pomodoro`} className="ml-auto">
                            <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                                Start Morning
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            )}

            {/* Session Cards */}
            {isDay3 ? (
                // DAY 3 SPECIFIC CARDS
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Chapter 16: Inter-State Relations */}
                    <Card
                        className={`hover:shadow-lg transition-all cursor-pointer border-blue-200 ${hasMorningProgress && !completedChapters.has('16')
                            ? 'bg-blue-50 dark:bg-blue-900/20'
                            : completedChapters.has('16') ? 'bg-green-50 border-green-200 opacity-80' : 'bg-gray-50 dark:bg-gray-800 opacity-60'
                            }`}
                        onClick={() => hasMorningProgress && handleDay3CardClick('16')}
                    >
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <Brain className="w-10 h-10 text-blue-600 mb-2" />
                                {completedChapters.has('16') && <CheckCircle2 className="w-6 h-6 text-green-600" />}
                            </div>
                            <CardTitle className="text-lg">Inter-State Relations</CardTitle>
                            <CardDescription>
                                Chapter 16 • Flashcards & MCQs
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between text-sm text-blue-600">
                                <span>Complete Module</span>
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Chapter 17: Emergency Provisions */}
                    <Card
                        className={`hover:shadow-lg transition-all cursor-pointer border-rose-200 ${hasMorningProgress && !completedChapters.has('17')
                            ? 'bg-rose-50 dark:bg-rose-900/20'
                            : completedChapters.has('17') ? 'bg-green-50 border-green-200 opacity-80' : 'bg-gray-50 dark:bg-gray-800 opacity-60'
                            }`}
                        onClick={() => hasMorningProgress && handleDay3CardClick('17')}
                    >
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <Target className="w-10 h-10 text-rose-600 mb-2" />
                                {completedChapters.has('17') && <CheckCircle2 className="w-6 h-6 text-green-600" />}
                            </div>
                            <CardTitle className="text-lg">Emergency Provisions</CardTitle>
                            <CardDescription>
                                Chapter 17 • Flashcards & MCQs
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between text-sm text-rose-600">
                                <span>Complete Module</span>
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* CSAT Card (Full Width) */}
                    <Card
                        className="hover:shadow-lg transition-all cursor-pointer border-purple-200 bg-purple-50 dark:bg-purple-900/20 md:col-span-2"
                        onClick={() => setActiveSection('csat')}
                    >
                        <CardHeader className="pb-2">
                            <Calculator className="w-10 h-10 text-purple-600 mb-2" />
                            <CardTitle className="text-lg">CSAT Practice</CardTitle>
                            <CardDescription>
                                Logical reasoning & quantitative aptitude
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between text-sm text-purple-600">
                                <span>Daily practice</span>
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ) : (
                // STANDARD CARDS (Days 1, 2, 4, 5...)
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Flashcards */}
                    <Card
                        className={`hover:shadow-lg transition-all cursor-pointer border-blue-200 ${hasMorningProgress
                            ? 'bg-blue-50 dark:bg-blue-900/20'
                            : 'bg-gray-50 dark:bg-gray-800 opacity-60'
                            }`}
                        onClick={() => hasMorningProgress && setActiveSection('flashcards')}
                    >
                        <CardHeader className="pb-2">
                            <Brain className="w-10 h-10 text-blue-600 mb-2" />
                            <CardTitle className="text-lg">Flashcards</CardTitle>
                            <CardDescription>
                                {hasMorningProgress
                                    ? `${eveningContent.newFlashcards} new + ${eveningContent.repeatFlashcards} repeat`
                                    : 'Based on morning progress'}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between text-sm text-blue-600">
                                <span>80% new • 20% repeat</span>
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* MCQs */}
                    <Card
                        className={`hover:shadow-lg transition-all cursor-pointer border-green-200 ${hasMorningProgress
                            ? 'bg-green-50 dark:bg-green-900/20'
                            : 'bg-gray-50 dark:bg-gray-800 opacity-60'
                            }`}
                        onClick={() => hasMorningProgress && setActiveSection('mcqs')}
                    >
                        <CardHeader className="pb-2">
                            <Target className="w-10 h-10 text-green-600 mb-2" />
                            <CardTitle className="text-lg">MCQ Test</CardTitle>
                            <CardDescription>
                                {hasMorningProgress
                                    ? `${eveningContent.totalMCQs} questions`
                                    : '60 questions planned'}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between text-sm text-green-600">
                                <span>Moderate to Tough</span>
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* CSAT */}
                    <Card
                        className="hover:shadow-lg transition-all cursor-pointer border-purple-200 bg-purple-50 dark:bg-purple-900/20"
                        onClick={() => setActiveSection('csat')}
                    >
                        <CardHeader className="pb-2">
                            <Calculator className="w-10 h-10 text-purple-600 mb-2" />
                            <CardTitle className="text-lg">CSAT Practice</CardTitle>
                            <CardDescription>
                                Logical reasoning & quantitative aptitude
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between text-sm text-purple-600">
                                <span>Daily practice</span>
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Bottom Links */}
            <div className="flex justify-center gap-4 pt-4">
                <Link href={`/student/batch1-1`}>
                    <Button variant="outline">
                        Back to Batch 1.1
                    </Button>
                </Link>
                <Link href="/student/dashboard">
                    <Button variant="ghost">
                        Dashboard
                    </Button>
                </Link>
            </div>
            <AIChatWidget />
        </div >
    );
}

