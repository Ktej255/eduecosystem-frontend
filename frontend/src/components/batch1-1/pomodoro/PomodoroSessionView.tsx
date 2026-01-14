"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Timer, CheckCircle2, Flame, Trophy, Repeat, BookOpen } from "lucide-react";
import Link from "next/link";
import PomodoroTimer from "./PomodoroTimer";
import SubtopicSelector from "./SubtopicSelector";
import CycleFlashcards from "./CycleFlashcards";
import CycleMCQs from "./CycleMCQs";
import BreakTimer from "./BreakTimer";
import { getChaptersForWeek } from "../data/polity-modules";
import { CHAPTER_SUBTOPICS, SubTopic } from "@/components/batch1/polity/data/polity-subtopics";
import { LAXMIKANTH_CHAPTERS } from "@/components/batch1/polity/data/polity-schedule-data";
import { markChapterComplete, markSubtopicsComplete, updateDayProgress, recordMCQScore } from "@/lib/polity-progress-store";

// Session states for the enhanced cycle
type SessionState =
    | 'ready'
    | 'pomodoro'
    | 'subtopic_select'
    | 'flashcards'
    | 'mcqs'
    | 'break'
    | 'long_break'
    | 'complete';

interface PomodoroSessionViewProps {
    weekId: number;
    dayId: number;
}

interface CycleData {
    cycleNumber: number;
    selectedSubtopics: SubTopic[];
    flashcardsViewed: number;
    mcqResults: { correct: number; total: number };
}

// Get chapters for the day based on week and day from schedule
function getChaptersForDay(weekId: number, dayId: number): number[] {
    // Map day to schedule: Mon=1, Tue=2, etc.
    const dayMapping = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    const dayKey = dayMapping[dayId - 1];

    // For Week 1, use the scheduled chapters from polity-schedule-data
    if (weekId === 1) {
        // Week 1 schedule: Mon=CH11-14, Tue=CH15, Wed=CH16-17, Thu=CH18,31, Fri=CH20,32
        const week1Schedule: Record<string, number[]> = {
            monday: [11, 12, 13, 14],
            tuesday: [15],
            wednesday: [16, 17],
            thursday: [18, 31],
            friday: [20, 32, 21, 33]
        };
        return week1Schedule[dayKey] || [11, 12, 13, 14];
    }

    // For other weeks, use module-based mapping
    const moduleChapters = getChaptersForWeek(weekId);
    if (moduleChapters.length === 0) {
        return [11, 12]; // Fallback
    }

    const chaptersPerDay = Math.ceil(moduleChapters.length / 5);
    const startIdx = (dayId - 1) * chaptersPerDay;
    const dayChapters = moduleChapters.slice(startIdx, startIdx + chaptersPerDay);

    return dayChapters.map(ch => ch.primaryId);
}

// Sync to unified progress store (replaces old syncToStudyPlanner)
function syncProgressToStore(
    weekId: number,
    dayId: number,
    subtopics: SubTopic[],
    mcqResults?: { correct: number; total: number },
    cyclesCompleted?: number
) {
    // Group subtopics by chapter
    const chapterSubtopics: Record<number, string[]> = {};
    subtopics.forEach(s => {
        const chapterId = parseInt(s.id.split('.')[0]);
        if (!chapterSubtopics[chapterId]) {
            chapterSubtopics[chapterId] = [];
        }
        chapterSubtopics[chapterId].push(s.id);
    });

    // Mark subtopics complete for each chapter
    Object.entries(chapterSubtopics).forEach(([chapterId, subtopicIds]) => {
        markSubtopicsComplete(parseInt(chapterId), subtopicIds);
    });

    // Update day progress
    updateDayProgress(weekId, dayId, {
        cyclesCompleted: cyclesCompleted || 0,
        totalSubtopics: subtopics.length,
        morningComplete: cyclesCompleted === 4
    });

    // Record MCQ scores if available
    if (mcqResults) {
        Object.keys(chapterSubtopics).forEach(chapterId => {
            recordMCQScore(parseInt(chapterId), Math.round((mcqResults.correct / mcqResults.total) * 100));
        });
    }
}

export default function PomodoroSessionView({ weekId, dayId }: PomodoroSessionViewProps) {
    const router = useRouter();
    const [sessionState, setSessionState] = useState<SessionState>('ready');
    const [currentCycle, setCurrentCycle] = useState(1);
    const [cycleHistory, setCycleHistory] = useState<CycleData[]>([]);
    const [currentSubtopics, setCurrentSubtopics] = useState<SubTopic[]>([]);

    const TOTAL_CYCLES = 3; // 3 cycles per session (6 hours total)
    const POMODORO_DURATION = 1500; // 25 minutes
    const SHORT_BREAK = 300; // 5 minutes
    const LONG_BREAK = 900; // 15 minutes (after Cycle 3)

    // Get today's chapters
    const todayChapters = useMemo(() => getChaptersForDay(weekId, dayId), [weekId, dayId]);

    // Get chapter names for display
    const chapterNames = useMemo(() => {
        return todayChapters.map(id => {
            const chapter = LAXMIKANTH_CHAPTERS.find(ch => ch.chapter === id);
            return chapter ? `CH ${id}: ${chapter.topic}` : `Chapter ${id}`;
        });
    }, [todayChapters]);

    // Load saved progress
    useEffect(() => {
        const savedKey = `batch11_cycle_${weekId}_${dayId}`;
        const saved = localStorage.getItem(savedKey);
        if (saved) {
            const data = JSON.parse(saved);
            setCurrentCycle(data.currentCycle || 1);
            setCycleHistory(data.cycleHistory || []);
        }
    }, [weekId, dayId]);

    // Save progress
    useEffect(() => {
        const savedKey = `batch11_cycle_${weekId}_${dayId}`;
        localStorage.setItem(savedKey, JSON.stringify({
            currentCycle,
            cycleHistory,
            lastUpdated: new Date().toISOString()
        }));
    }, [currentCycle, cycleHistory, weekId, dayId]);

    // Calculate total progress
    const totalSubtopicsCompleted = cycleHistory.reduce((sum, c) => sum + c.selectedSubtopics.length, 0);
    const totalCorrectMCQs = cycleHistory.reduce((sum, c) => sum + c.mcqResults.correct, 0);
    const totalMCQs = cycleHistory.reduce((sum, c) => sum + c.mcqResults.total, 0);
    const isConsolidationCycle = currentCycle === TOTAL_CYCLES;

    // All previously completed subtopics for consolidation
    const allCompletedSubtopics = useMemo(() => {
        return cycleHistory.flatMap(c => c.selectedSubtopics);
    }, [cycleHistory]);

    // Handlers
    const handleStartPomodoro = () => {
        setSessionState('pomodoro');
    };

    const handlePomodoroComplete = () => {
        setSessionState('subtopic_select');
    };

    const handleSubtopicSubmit = (selected: SubTopic[]) => {
        setCurrentSubtopics(selected);
        setSessionState('flashcards');
    };

    const handleFlashcardsComplete = (viewedCount: number) => {
        // Store flashcard count for cycle data
        setSessionState('mcqs');
    };

    const handleMCQsComplete = (results: { correct: number; total: number }) => {
        // Complete this cycle
        const newCycleData: CycleData = {
            cycleNumber: currentCycle,
            selectedSubtopics: currentSubtopics,
            flashcardsViewed: currentSubtopics.length * 2, // Approximate
            mcqResults: results
        };

        setCycleHistory(prev => [...prev, newCycleData]);

        // Sync to unified progress store
        syncProgressToStore(weekId, dayId, currentSubtopics, results, currentCycle);

        // Determine next state
        if (currentCycle >= TOTAL_CYCLES) {
            setSessionState('long_break'); // Or directly complete? User said "after completion of all the three cycles"
        } else {
            setSessionState('break');
        }
    };

    const handleBreakComplete = () => {
        if (currentCycle >= TOTAL_CYCLES) {
            setSessionState('complete');
        } else {
            setCurrentCycle(prev => prev + 1);
            setCurrentSubtopics([]);
            setSessionState('ready');
        }
    };

    const handleLongBreakComplete = () => {
        setSessionState('complete');
    };

    // Calculate detailed stats for the report
    const calculateOverallEfficiency = () => {
        if (totalMCQs === 0) return 0;
        const mcqAccuracy = (totalCorrectMCQs / totalMCQs) * 100;
        // Efficiency could be a mix of coverage and accuracy
        return Math.round(mcqAccuracy);
    };

    const efficiencyScore = calculateOverallEfficiency();

    // Session complete view
    if (sessionState === 'complete') {
        const avgMCQScore = cycleHistory.length > 0
            ? Math.round((totalCorrectMCQs / totalMCQs) * 100)
            : 0;

        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="text-center py-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Trophy className="h-10 w-10 text-green-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        6-Hour Session Complete! 🎉
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
                        Excellent work! You've completed all {TOTAL_CYCLES} cycles. Here is your daily performance report clearly showing your efficiency and improvement.
                    </p>

                    {/* Overall Score Card */}
                    <Card className="mb-8 overflow-hidden border-indigo-200 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-800">
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row items-center justify-around gap-6">
                                <div className="text-center">
                                    <div className="text-sm font-medium text-indigo-800 dark:text-indigo-300 mb-1 uppercase tracking-wide">Overall Efficiency</div>
                                    <div className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">{efficiencyScore}%</div>
                                </div>
                                <div className="h-16 w-px bg-indigo-200 dark:bg-indigo-800 hidden md:block"></div>
                                <div className="text-center">
                                    <div className="text-sm font-medium text-indigo-800 dark:text-indigo-300 mb-1 uppercase tracking-wide">Subtopics Cleaned</div>
                                    <div className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">{totalSubtopicsCompleted}</div>
                                </div>
                                <div className="h-16 w-px bg-indigo-200 dark:bg-indigo-800 hidden md:block"></div>
                                <div className="text-center">
                                    <div className="text-sm font-medium text-indigo-800 dark:text-indigo-300 mb-1 uppercase tracking-wide">MCQ Accuracy</div>
                                    <div className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">{avgMCQScore}%</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Cycle Breakdown */}
                    <div className="text-left mb-8">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                            <Repeat className="h-5 w-5" /> Cycle Performance
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {cycleHistory.map((cycle, idx) => (
                                <Card key={idx} className="bg-white dark:bg-gray-800 border-gray-200">
                                    <CardContent className="p-4 flex items-center justify-between">
                                        <div>
                                            <div className="font-bold text-gray-700 dark:text-gray-300">Cycle {cycle.cycleNumber}</div>
                                            <div className="text-sm text-gray-500">{cycle.selectedSubtopics.length} subtopics covered</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-gray-800 dark:text-gray-200">
                                                {Math.round((cycle.mcqResults.correct / cycle.mcqResults.total) * 100)}%
                                            </div>
                                            <div className="text-xs text-gray-500">Accuracy</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center">
                        <Link href={`/student/batch1-1/${weekId}/${dayId}/evening`}>
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                                Go to Evening Session
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <Link href="/student/batch1-1">
                    <Button variant="ghost">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                    </Button>
                </Link>
                <div className="text-center">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        Week {weekId}, Day {dayId}
                    </h1>
                    <p className="text-sm text-gray-500">
                        Cycle {currentCycle} of {TOTAL_CYCLES}
                    </p>
                </div>
                <div className="flex items-center gap-2 text-orange-600">
                    <Flame className="h-5 w-5" />
                    <span className="font-semibold">{totalSubtopicsCompleted} subtopics</span>
                </div>
            </div>

            {/* Cycle Progress */}
            <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Cycle Progress</span>
                    <span>{currentCycle}/{TOTAL_CYCLES} cycles</span>
                </div>
                <div className="flex gap-2">
                    {Array.from({ length: TOTAL_CYCLES }).map((_, i) => {
                        const cycle = i + 1;
                        return (
                            <div
                                key={cycle}
                                className={`flex-1 h-2 rounded-full ${cycle < currentCycle
                                    ? 'bg-green-500'
                                    : cycle === currentCycle
                                        ? 'bg-orange-500 animate-pulse'
                                        : 'bg-gray-200 dark:bg-gray-700'
                                    }`}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Today's Chapters Info */}
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-bold text-blue-700 dark:text-blue-300">Today&apos;s Chapters</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {chapterNames.map((name, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 rounded-full">
                            {name}
                        </span>
                    ))}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Main Session Content */}
                <div className="lg:col-span-2">
                    {sessionState === 'ready' && (
                        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border-orange-200">
                            <CardContent className="p-8 text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                                    <Timer className="h-10 w-10 text-orange-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-2">
                                    {isConsolidationCycle ? '🎯 Consolidation Cycle' : `Ready for Cycle ${currentCycle}?`}
                                </h2>
                                <p className="text-orange-600 dark:text-orange-400 mb-6">
                                    {isConsolidationCycle
                                        ? 'Final cycle! Review all the subtopics you covered today.'
                                        : '25 minutes of focused study. Then select your completed subtopics.'}
                                </p>
                                <Button
                                    size="lg"
                                    onClick={handleStartPomodoro}
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                                >
                                    Start Pomodoro
                                </Button>
                            </CardContent>
                        </Card>
                    )}

                    {sessionState === 'pomodoro' && (
                        <PomodoroTimer
                            duration={POMODORO_DURATION}
                            onComplete={handlePomodoroComplete}
                            sessionNumber={currentCycle}
                            totalSessions={TOTAL_CYCLES}
                            isStrict={true}
                        />
                    )}

                    {sessionState === 'subtopic_select' && (
                        <SubtopicSelector
                            chapterIds={todayChapters}
                            onSubmit={handleSubtopicSubmit}
                            cycleNumber={currentCycle}
                            isConsolidation={isConsolidationCycle}
                            previouslyCompleted={allCompletedSubtopics}
                        />
                    )}

                    {sessionState === 'flashcards' && (
                        <CycleFlashcards
                            selectedSubtopics={currentSubtopics}
                            onComplete={handleFlashcardsComplete}
                            cycleNumber={currentCycle}
                        />
                    )}

                    {sessionState === 'mcqs' && (
                        <CycleMCQs
                            selectedSubtopics={currentSubtopics}
                            onComplete={handleMCQsComplete}
                            cycleNumber={currentCycle}
                        />
                    )}

                    {sessionState === 'break' && (
                        <BreakTimer
                            duration={SHORT_BREAK}
                            onComplete={handleBreakComplete}
                            onSkip={handleBreakComplete}
                        />
                    )}

                    {sessionState === 'long_break' && (
                        <BreakTimer
                            duration={LONG_BREAK}
                            onComplete={handleLongBreakComplete}
                            onSkip={handleLongBreakComplete}
                            isLongBreak={true}
                        />
                    )}
                </div>

                {/* Right: Cycle History */}
                <div>
                    <Card className="bg-gray-50 dark:bg-gray-800">
                        <CardContent className="p-4">
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                                <Repeat className="h-4 w-4" />
                                Cycle History
                            </h4>
                            <div className="space-y-3">
                                {Array.from({ length: TOTAL_CYCLES }).map((_, i) => {
                                    const cycle = i + 1;
                                    const cycleData = cycleHistory.find(c => c.cycleNumber === cycle);
                                    const isActive = cycle === currentCycle;
                                    const isComplete = cycleData !== undefined;

                                    return (
                                        <div
                                            key={cycle}
                                            className={`p-3 rounded-lg border ${isComplete
                                                ? 'bg-green-50 dark:bg-green-900/20 border-green-200'
                                                : isActive
                                                    ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 animate-pulse'
                                                    : 'bg-white dark:bg-gray-900 border-gray-200'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between mb-1">
                                                <span className={`font-bold text-sm ${isComplete ? 'text-green-600' : isActive ? 'text-orange-600' : 'text-gray-400'}`}>
                                                    {cycle === 3 ? '🎯 Consolidation' : `Cycle ${cycle}`}
                                                </span>
                                                {isComplete && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                                            </div>
                                            {isComplete && cycleData && (
                                                <div className="text-xs text-gray-500 space-y-0.5">
                                                    <div>{cycleData.selectedSubtopics.length} subtopics</div>
                                                    <div>{cycleData.mcqResults.correct}/{cycleData.mcqResults.total} MCQs correct</div>
                                                </div>
                                            )}
                                            {!isComplete && !isActive && (
                                                <div className="text-xs text-gray-400">Not started</div>
                                            )}
                                            {isActive && !isComplete && (
                                                <div className="text-xs text-orange-500">In progress...</div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

