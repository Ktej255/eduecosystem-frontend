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
}

// Get morning progress from localStorage
function getMorningProgress(weekId: number, dayId: number): MorningProgress | null {
    if (typeof window === 'undefined') return null;

    // UPDATED KEY: match PomodoroSessionView
    const savedKey = `batch11_pomodoro_${weekId}_${dayId}`;
    const saved = localStorage.getItem(savedKey);

    if (saved) {
        const parsed = JSON.parse(saved);
        // Map sessionHistory to cycleHistory for compatibility definition
        // PomodoroSessionView saves: { currentSessionGlobal, sessionHistory, lastUpdated }
        return {
            currentCycle: parsed.currentSessionGlobal || 0,
            cycleHistory: parsed.sessionHistory || [],
            lastUpdated: parsed.lastUpdated
        };
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

const DAYS = [
    { id: 1, label: 'Mon', full: 'Monday' },
    { id: 2, label: 'Tue', full: 'Tuesday' },
    { id: 3, label: 'Wed', full: 'Wednesday' },
    { id: 4, label: 'Thu', full: 'Thursday' },
    { id: 5, label: 'Fri', full: 'Friday' },
    { id: 6, label: 'Sat', full: 'Saturday' },
    { id: 7, label: 'Sun', full: 'Sunday' },
];

export default function Batch1_1EveningSession({ weekId, dayId }: EveningSessionViewProps) {
    const router = useRouter();
    const [morningProgress, setMorningProgress] = useState<MorningProgress | null>(null);
    const [activeSection, setActiveSection] = useState<'menu' | 'flashcards' | 'mcqs' | 'csat'>('menu');
    const [showMorningReport, setShowMorningReport] = useState(false);

    useEffect(() => {
        const progress = getMorningProgress(weekId, dayId);
        setMorningProgress(progress);

        // Show report if there is any progress
        if (progress && progress.cycleHistory.length > 0) {
            setShowMorningReport(true);
        }
    }, [weekId, dayId]);

    const eveningContent = useMemo(() => generateEveningContent(morningProgress), [morningProgress]);

    // UNBLOCK: Always allow evening session
    const hasMorningProgress = true; // Was: isDay1Bypass || (morningProgress && morningProgress.cycleHistory.length > 0);

    // Calculate Morning Stats
    const morningStats = useMemo(() => {
        if (!morningProgress || !morningProgress.cycleHistory.length) return null;

        const totalSessions = morningProgress.cycleHistory.length;
        const totalSubtopics = morningProgress.cycleHistory.reduce((sum: number, c: CycleData) => sum + c.selectedSubtopics.length, 0);

        let totalCorrect = 0;
        let totalQuestions = 0;

        morningProgress.cycleHistory.forEach(c => {
            if (Array.isArray(c.mcqResults)) {
                totalCorrect += c.mcqResults.filter(r => r.isCorrect).length;
                totalQuestions += c.mcqResults.length;
            } else {
                // Legacy support
                const legacy = c.mcqResults as any;
                totalCorrect += legacy.correct || 0;
                totalQuestions += legacy.total || 0;
            }
        });

        const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

        // Efficiency metric
        const efficiency = accuracy; // Simplified for now

        return { totalSessions, totalSubtopics, accuracy, efficiency };
    }, [morningProgress]);

    // Content Generation Logic - Use content-registry for complete day content
    const sessionContent = useMemo(() => {
        let morningSubtopics: SubTopic[] = [];

        if (morningProgress?.cycleHistory && morningProgress.cycleHistory.length > 0) {
            morningSubtopics = morningProgress.cycleHistory.flatMap(c => c.selectedSubtopics);
        } else {
            // FALLBACK: If morning session skipped, use scheduled chapters for this day
            const schedule = generateWeeklySchedule();
            const weekSchedule = schedule.find(w => w.week === Number(weekId));

            if (weekSchedule) {
                const dayKeyMap: Record<number, keyof typeof weekSchedule.days> = {
                    1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday', 7: 'sunday'
                };

                const dayKey = dayKeyMap[Number(dayId)] || 'monday';
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

        // ===== USE CONTENT REGISTRY FOR FULL DAY CONTENT =====
        // Import flashcards and MCQs from the dedicated Day files via registry
        // This ensures ALL content from week1-flashcards.ts and week1-mcqs.ts is used

        // Get all flashcards for this day from the registry
        const dayFlashcards = FLASHCARD_CONTENT_REGISTRY[Number(dayId)] || [];

        // Get all MCQs for this day from the registry
        const dayMCQs = MCQ_CONTENT_REGISTRY[Number(dayId)] || [];

        console.log(`Day ${dayId} Content Loaded: ${dayFlashcards.length} Flashcards, ${dayMCQs.length} MCQs`);

        return {
            flashcards: dayFlashcards, // ALL flashcards from WEEK1_FLASHCARDS (20 cards)
            mcqs: dayMCQs, // ALL MCQs from WEEK1_MCQS (60 questions)
            subtopics: morningSubtopics // Context for header
        };
    }, [morningProgress, weekId, dayId]);

    // DAY 3 SPECIFIC LOGIC
    const isDay3 = Number(weekId) === 1 && Number(dayId) === 3;

    // Calculate Absolute Day Number for Dashboard Tracking
    // Week 1 starts at Day 1. Week 1 Day 1 = 1. Week 2 Day 1 = 8.
    const absoluteDayNumber = (Number(weekId) - 1) * 7 + Number(dayId);

    const [sessionResults, setSessionResults] = useState<MCQResult[] | null>(null);
    const [showResultsReport, setShowResultsReport] = useState(false);
    const [pendingGuidance, setPendingGuidance] = useState<{ type: 'to-next-chapter' | 'finish', nextChapter?: '16' | '17' } | null>(null);

    // Update SRS/Retention cards based on MCQ results
    const syncWithRetention = (results: MCQResult[]) => {
        const srsData = getSRSData();

        results.forEach(res => {
            if (!res.subtopicId) return;

            // Map MCQ performance to SRS quality (0-5)
            // 5: Perfect response (Sure + Correct)
            // 4: Correct after hesitation (50-50 + Correct)
            // 3: Correct but guessed (Blind + Correct)
            // 2: Incorrect but almost right (50-50 + Incorrect) OR (Blind + Incorrect)
            // 1: Incorrect with high confidence (Sure + Incorrect) - Misconception!
            // 0: Complete blackout

            let quality = 3;
            if (res.isCorrect) {
                if (res.confidence === 'sure') quality = 5;
                else if (res.confidence === '50-50') quality = 4;
                else quality = 3;
            } else {
                if (res.confidence === 'sure') quality = 1; // Major penalty for confident wrong answer
                else if (res.confidence === '50-50') quality = 2;
                else quality = 2;
            }

            // Find or create card for this subtopic
            // Note: SRS usually works on card level, but we can aggregate by subtopicId
            // for the knowledge tree observer.
            const cardId = `mcq_sync_${res.subtopicId}`;
            const existingCard = srsData.cards[cardId] || {
                id: cardId,
                subtopicId: res.subtopicId,
                question: `Mastery of Subtopic ${res.subtopicId}`,
                answer: '',
                reps: 0,
                interval: 0,
                easeFactor: 2.5,
                dueDate: new Date().toISOString().split('T')[0],
                tags: ['mcq-sync', 'auto-generated']
            } as any;

            const updatedCard = processReview(existingCard, 5, 0); // Default quality 5 for sync, 0ms response
            srsData.cards[cardId] = updatedCard.updatedCard;
        });

        saveSRSData(srsData);

        // Sync with WeakTopicAnalyzer for general tracking
        const analyzerResults = results.map(res => {
            const subtopic = CHAPTER_SUBTOPICS[res.subtopicId?.split('.')[0] || '']?.find(s => s.id === res.subtopicId);
            return {
                topicId: res.subtopicId || 'unknown',
                topicName: subtopic?.label || 'Unknown Topic',
                isCorrect: res.isCorrect
            };
        });
        recordBatchMCQResults(analyzerResults);

        // Award XP for each question
        results.forEach(res => {
            if (res.isCorrect) {
                awardXP('mcq_correct', undefined, `Correct answer in Evening Session (${res.confidence || 'unknown'} confidence)`);
            } else {
                awardXP('mcq_attempt', undefined, `Attempted in Evening Session`);
            }
        });

        console.log("Retention, Weak Topic analytics, and XP updated.");
    };

    const handleSessionComplete = (results: MCQResult[]) => {
        setSessionResults(results);
        setShowResultsReport(true);
        syncWithRetention(results);

        // Mark the dashboard step as complete
        markStepComplete(absoluteDayNumber, `evening-${absoluteDayNumber}`);
    };

    const [activeChapter, setActiveChapter] = useState<'16' | '17' | null>(null);
    const [completedChapters, setCompletedChapters] = useState<Set<string>>(new Set());
    const [showDay3Guidance, setShowDay3Guidance] = useState<{ type: 'to-mcq' | 'to-next-chapter' | 'finish', nextChapter?: '16' | '17' } | null>(null);

    // Persistence for Day 3 Progress
    useEffect(() => {
        if (isDay3) {
            const storageKey = `batch1_1_evening_progress_${weekId}_${dayId}`;
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    setCompletedChapters(new Set(parsed));
                } catch (e) {
                    console.error("Failed to load evening progress", e);
                }
            }
        }
    }, [isDay3, weekId, dayId]);

    const saveProgress = (chapters: Set<string>) => {
        const storageKey = `batch1_1_evening_progress_${weekId}_${dayId}`;
        localStorage.setItem(storageKey, JSON.stringify(Array.from(chapters)));
    };

    const handleDay3CardClick = (chapterId: '16' | '17') => {
        setActiveChapter(chapterId);
        setActiveSection('flashcards'); // Start with Flashcards
    };

    const handleDay3FlashcardComplete = () => {
        // Prompt to go to MCQs
        setShowDay3Guidance({ type: 'to-mcq' });
    };

    const handleDay3MCQComplete = (results: MCQResult[]) => {
        setSessionResults(results);
        setShowResultsReport(true);
        syncWithRetention(results);

        // Calculate progress but don't show dialog yet
        if (activeChapter) {
            const newCompleted = new Set(completedChapters);
            newCompleted.add(activeChapter);
            setCompletedChapters(newCompleted);
            saveProgress(newCompleted);

            const otherChapter = activeChapter === '16' ? '17' : '16';
            if (!newCompleted.has(otherChapter)) {
                setPendingGuidance({ type: 'to-next-chapter', nextChapter: otherChapter });
            } else {
                setPendingGuidance({ type: 'finish' });
                markStepComplete(absoluteDayNumber, `evening-${absoluteDayNumber}`);
            }
        }
    };

    // Filter content based on active chapter
    const activeDay3Flashcards = useMemo(() => {
        if (!isDay3 || !activeChapter || !sessionContent) return [];
        return sessionContent.flashcards.filter((fc: { subtopicId?: string }) => fc.subtopicId && fc.subtopicId.startsWith(`${activeChapter}.`));
    }, [isDay3, activeChapter, sessionContent]);

    const activeDay3MCQs = useMemo(() => {
        if (!isDay3 || !activeChapter || !sessionContent) return [];
        return sessionContent.mcqs.filter((mcq: { subtopicId?: string }) => mcq.subtopicId && mcq.subtopicId.startsWith(`${activeChapter}.`));
    }, [isDay3, activeChapter, sessionContent]);

    // Handle Day Navigation
    const handleDayChange = (newDayId: number) => {
        router.push(`/student/batch1-1/${weekId}/${newDayId}/evening`);
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
            <div className="max-w-4xl mx-auto p-6">
                <Button variant="ghost" onClick={() => setActiveSection('menu')} className="mb-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Menu
                </Button>

                <Card className="min-h-[500px]">
                    <CardHeader>
                        <CardTitle>CSAT Practice - Day {dayId}</CardTitle>
                        <CardDescription>Logical Reasoning & Quantitative Aptitude</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col items-center justify-center p-12 text-center text-gray-500">
                            <Calculator className="h-16 w-16 mb-4 text-purple-200" />
                            <p className="text-lg">CSAT Module for Day {dayId} is ready.</p>
                            <p className="text-sm mt-2">Practice set content will appear here.</p>
                            {/* In a real implementation we would render <CSATPracticeView /> here if available */}
                            {/* For now this confirms the page is REACHABLE and not indefinitely loading */}
                        </div>
                    </CardContent>
                </Card>
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
            {/* Morning Report Dialog */}
            <Dialog open={showMorningReport} onOpenChange={setShowMorningReport}>
                <DialogContent className="max-w-lg">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-xl">
                            <Brain className="h-6 w-6 text-indigo-600" />
                            Morning Performance Report
                        </DialogTitle>
                        <DialogDescription>
                            Here is a summary of your study session from this morning.
                        </DialogDescription>
                    </DialogHeader>

                    {morningStats && (
                        <div className="space-y-6 py-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">{morningStats.efficiency}%</div>
                                    <div className="text-xs uppercase font-semibold text-indigo-600 dark:text-indigo-400 mt-1">Efficiency</div>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-green-700 dark:text-green-300">{morningStats.accuracy}%</div>
                                    <div className="text-xs uppercase font-semibold text-green-600 dark:text-green-400 mt-1">Accuracy</div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Topics Mastered</span>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">{morningStats.totalSubtopics} Subtopics</span>
                                </div>
                                <Progress value={(morningStats.totalSubtopics / 20) * 100} className="h-2" />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Sessions Completed</span>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">{morningStats.totalSessions}/12 Sessions</span>
                                </div>
                                <Progress value={(morningStats.totalSessions / 12) * 100} className="h-2" />
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-sm text-gray-600 dark:text-gray-300">
                                <p>
                                    Your evening content has been customized based on your morning performance.
                                    Recommended focus: <strong>Recall & Elaboration</strong>.
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-end">
                        <Button onClick={() => setShowMorningReport(false)} className="w-full sm:w-auto">
                            Let&apos;s Begin Evening Session
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* === DAY NAVIGATION BAR === */}
            <div className="bg-white dark:bg-gray-900 p-2 rounded-xl border shadow-sm items-center justify-between overflow-x-auto flex gap-2">
                {DAYS.map((day) => {
                    const isActive = Number(dayId) === day.id;
                    return (
                        <Button
                            key={day.id}
                            variant={isActive ? "default" : "ghost"}
                            onClick={() => handleDayChange(day.id)}
                            className={`flex-1 min-w-[60px] ${isActive ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'text-gray-500'}`}
                        >
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-semibold">{day.label}</span>
                                <span className="text-[10px] opacity-70">Day {day.id}</span>
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
                    Week {weekId}, Day {dayId} • Consolidate today&apos;s learning
                </p>
            </div>

            {/* Morning Progress Summary */}
            {hasMorningProgress ? (
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200" onClick={() => setShowMorningReport(true)}>
                    <CardContent className="p-4 cursor-pointer hover:bg-green-100/50 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                                <span className="font-bold text-green-700 dark:text-green-300">
                                    {morningProgress ? "Morning Session Complete" : "Ready for Revision"}
                                </span>
                            </div>
                            <Button variant="ghost" size="sm" className="text-green-700 hover:text-green-800 hover:bg-green-100 p-0 h-auto font-normal">
                                View Report
                            </Button>
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

