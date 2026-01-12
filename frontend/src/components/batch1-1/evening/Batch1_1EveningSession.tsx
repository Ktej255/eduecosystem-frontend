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
    Target
} from 'lucide-react';
import Link from 'next/link';
import { CHAPTER_SUBTOPICS, SubTopic } from '@/components/batch1/polity/data/polity-subtopics';
import { generateWeeklySchedule } from '@/components/batch1/polity/data/polity-schedule-data';
import CycleFlashcards from '../pomodoro/CycleFlashcards';
import CycleMCQs from '../pomodoro/CycleMCQs';
import { getFlashcardsForSubtopics } from '@/components/batch1/polity/data/polity-flashcards-data';
import { getMCQsForSubtopics } from '@/components/batch1/polity/data/polity-mcqs-data';

interface CycleData {
    cycleNumber: number;
    selectedSubtopics: SubTopic[];
    flashcardsViewed: number;
    mcqResults: { correct: number; total: number };
}

interface MorningProgress {
    currentCycle: number;
    cycleHistory: CycleData[];
    lastUpdated: string;
}

interface EveningSessionViewProps {
    weekId: number;
    dayId: number;
}

// Get morning progress from localStorage
function getMorningProgress(weekId: number, dayId: number): MorningProgress | null {
    if (typeof window === 'undefined') return null;

    const savedKey = `batch11_cycle_${weekId}_${dayId}`;
    const saved = localStorage.getItem(savedKey);

    if (saved) {
        return JSON.parse(saved);
    }
    return null;
}

// Calculate evening session data based on morning progress
function generateEveningContent(morningProgress: MorningProgress | null) {
    const completedSubtopics: SubTopic[] = [];

    if (morningProgress?.cycleHistory) {
        morningProgress.cycleHistory.forEach(cycle => {
            completedSubtopics.push(...cycle.selectedSubtopics);
        });
    }

    // Remove duplicates
    const uniqueSubtopics = completedSubtopics.filter((subtopic, index, self) =>
        index === self.findIndex(s => s.id === subtopic.id)
    );

    // Calculate flashcard split: 80% new, 20% repeat
    const repeatCount = Math.ceil(uniqueSubtopics.length * 0.2);
    const newCount = Math.ceil(uniqueSubtopics.length * 0.8);

    // For MCQs: aim for 60 total, moderate to tough
    const mcqCount = 60;

    return {
        totalSubtopics: uniqueSubtopics.length,
        repeatFlashcards: repeatCount,
        newFlashcards: newCount,
        totalMCQs: mcqCount,
        cyclesCompleted: morningProgress?.cycleHistory?.length || 0
    };
}

export default function Batch1_1EveningSession({ weekId, dayId }: EveningSessionViewProps) {
    const [morningProgress, setMorningProgress] = useState<MorningProgress | null>(null);
    const [activeSection, setActiveSection] = useState<'menu' | 'flashcards' | 'mcqs' | 'csat'>('menu');

    useEffect(() => {
        const progress = getMorningProgress(weekId, dayId);
        setMorningProgress(progress);
    }, [weekId, dayId]);

    const eveningContent = useMemo(() => generateEveningContent(morningProgress), [morningProgress]);

    // UNBLOCK: Always allow evening session
    const hasMorningProgress = true; // Was: isDay1Bypass || (morningProgress && morningProgress.cycleHistory.length > 0);

    // Content Generation Logic - Use content-registry for complete day content
    const sessionContent = useMemo(() => {
        let morningSubtopics: SubTopic[] = [];

        if (morningProgress?.cycleHistory && morningProgress.cycleHistory.length > 0) {
            morningSubtopics = morningProgress.cycleHistory.flatMap(c => c.selectedSubtopics);
        } else {
            // FALLBACK: If morning session skipped, use scheduled chapters for this day
            const schedule = generateWeeklySchedule();
            const weekSchedule = schedule.find(w => w.week === weekId);

            if (weekSchedule) {
                const dayKeyMap: Record<number, keyof typeof weekSchedule.days> = {
                    1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday', 7: 'sunday'
                };

                const dayKey = dayKeyMap[dayId] || 'monday';
                const chapters = weekSchedule.days[dayKey];

                if (Array.isArray(chapters)) {
                    chapters.forEach(ch => {
                        if (typeof ch !== 'string') {
                            const subtopics = CHAPTER_SUBTOPICS[ch.chapter];
                            if (subtopics) {
                                morningSubtopics.push(...subtopics);
                            }
                        }
                    });
                }
            }
        }

        // ===== USE CONTENT REGISTRY FOR FULL DAY 1 CONTENT =====
        // Import flashcards and MCQs from the dedicated Day files via registry
        // This ensures ALL content from week1-flashcards.ts and week1-mcqs.ts is used

        // Dynamically import to get full registry data
        const { FLASHCARD_CONTENT_REGISTRY, MCQ_CONTENT_REGISTRY } = require('@/components/batch1/content-registry');

        // Get all flashcards for this day from the registry
        const dayFlashcards = FLASHCARD_CONTENT_REGISTRY[dayId] || [];

        // Get all MCQs for this day from the registry
        const dayMCQs = MCQ_CONTENT_REGISTRY[dayId] || [];

        return {
            flashcards: dayFlashcards, // ALL flashcards from WEEK1_FLASHCARDS (20 cards)
            mcqs: dayMCQs, // ALL MCQs from WEEK1_MCQS (60 questions)
            subtopics: morningSubtopics // Context for header
        };
    }, [morningProgress, weekId, dayId]);

    if (activeSection === 'flashcards' && sessionContent) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <Button variant="ghost" onClick={() => setActiveSection('menu')} className="mb-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <CycleFlashcards
                    selectedSubtopics={sessionContent.subtopics} // Context only
                    cycleNumber={5} // Evening
                    onComplete={() => setActiveSection('menu')}
                    preloadedCards={sessionContent.flashcards}
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
                <CycleMCQs
                    selectedSubtopics={sessionContent.subtopics}
                    cycleNumber={5}
                    onComplete={() => setActiveSection('menu')}
                    preloadedMCQs={sessionContent.mcqs}
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
            {/* Header */}
            <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <Moon className="h-8 w-8 text-indigo-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Evening Revision Session
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Week {weekId}, Day {dayId} • Consolidate today&apos;s learning
                </p>
            </div>

            {/* Morning Progress Summary */}
            {hasMorningProgress ? (
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <span className="font-bold text-green-700 dark:text-green-300">
                                {morningProgress ? "Morning Session Complete" : "Ready for Revision"}
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">
                                    {morningProgress?.cycleHistory?.length || 0}
                                </div>
                                <div className="text-xs text-green-700">Cycles Done</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">
                                    {sessionContent?.subtopics.length || 0}
                                </div>
                                <div className="text-xs text-green-700">Subtopics</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">
                                    {sessionContent?.flashcards.length || 0}
                                </div>
                                <div className="text-xs text-green-700">Flashcards Ready</div>
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
        </div>
    );
}
