"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Timer, CheckCircle2, Flame, Trophy, Repeat, BookOpen, ArrowRight, Target } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import PomodoroTimer from "./PomodoroTimer";
import SubtopicSelector from "./SubtopicSelector";
import CycleFlashcards from "./CycleFlashcards";
import CycleMCQs from "./CycleMCQs";
import ReadingMaterial from "./ReadingMaterial";
import BreakTimer from "./BreakTimer";
import { getChaptersForWeek } from "../data/polity-modules";
import { CHAPTER_SUBTOPICS, SubTopic } from "@/components/batch1/polity/data/polity-subtopics";
import { LAXMIKANTH_CHAPTERS } from "@/components/batch1/polity/data/polity-schedule-data";
import { markChapterComplete, markSubtopicsComplete, updateDayProgress, recordMCQScore } from "@/lib/polity-progress-store";
import { ambientSoundManager, NoiseType } from "@/lib/ambient-sound-manager";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Volume2, Volume1, VolumeX, Headphones } from "lucide-react";
import { awardXP, checkAchievements, updateStreak } from "@/lib/gamification";

// Session states for the enhanced cycle
type SessionState =
    | 'ready'
    | 'pomodoro'
    | 'timer_options'
    | 'subtopic_select'
    | 'flashcards'
    | 'mcqs'
    | 'reading'
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


    // --- Constants for 6-Hour Schedule ---
    const TOTAL_BLOCKS = 3;         // 3 Blocks of 2 hours each
    const SESSIONS_PER_BLOCK = 4;   // 4 Sessions per block (25m each)
    const TOTAL_SESSIONS = TOTAL_BLOCKS * SESSIONS_PER_BLOCK; // 12 Sessions total
    const POMODORO_DURATION = 1500; // 25 minutes
    const SHORT_BREAK = 300;        // 5 minutes
    const LONG_BREAK = 900;         // 15 minutes (End of Block)

    // --- State ---
    const [currentSessionGlobal, setCurrentSessionGlobal] = useState(1); // 1 to 12
    const [sessionState, setSessionState] = useState<SessionState>('ready');
    const [timeLeft, setTimeLeft] = useState(POMODORO_DURATION);
    const [subtopics, setSubtopics] = useState<SubTopic[]>([]);
    const [currentSubtopics, setCurrentSubtopics] = useState<SubTopic[]>([]);

    // Session Goal
    const [sessionGoal, setSessionGoal] = useState("");

    // Detailed history: Store data for each of the 12 sessions
    const [sessionHistory, setSessionHistory] = useState<CycleData[]>([]);

    // Ambient Sound State
    const [ambientEnabled, setAmbientEnabled] = useState(false);
    const [ambientType, setAmbientType] = useState<NoiseType>('pink'); // Pink noise is best for focus
    const [ambientVolume, setAmbientVolume] = useState(0.3);

    // Initial Ambient Setup
    useEffect(() => {
        // Stop any playing sounds on unmount
        return () => ambientSoundManager.stopAll();
    }, []);

    // Toggle Ambient
    const toggleAmbient = (enabled: boolean) => {
        setAmbientEnabled(enabled);
        if (enabled) {
            ambientSoundManager.toggle(ambientType, true, ambientVolume);
        } else {
            ambientSoundManager.stopAll();
        }
    };

    // Change Volume
    const handleVolumeChange = (vals: number[]) => {
        const val = vals[0];
        setAmbientVolume(val);
        if (ambientEnabled) {
            ambientSoundManager.setVolume(ambientType, val);
        }
    };

    // Change Type
    const handleTypeChange = (type: NoiseType) => {
        setAmbientType(type);
        if (ambientEnabled) {
            // Restart with new type
            ambientSoundManager.stopAll();
            ambientSoundManager.toggle(type, true, ambientVolume);
        }
    };

    // Derived State
    const currentBlock = Math.ceil(currentSessionGlobal / SESSIONS_PER_BLOCK);
    const currentSessionInBlock = ((currentSessionGlobal - 1) % SESSIONS_PER_BLOCK) + 1;

    // Get today's chapters
    const todayChapters = useMemo(() => getChaptersForDay(weekId, dayId), [weekId, dayId]);

    // Get chapter names for display
    const chapterNames = useMemo(() => {
        return todayChapters.map(id => {
            const chapter = LAXMIKANTH_CHAPTERS.find(ch => ch.chapter === id);
            return chapter ? `CH ${id}: ${chapter.topic}` : `Chapter ${id}`;
        });
    }, [todayChapters]);

    // --- Persistence ---
    useEffect(() => {
        const savedNew = localStorage.getItem(`batch11_pomodoro_${weekId}_${dayId}`);

        if (savedNew) {
            // Priority: Load new structure
            const data = JSON.parse(savedNew);
            const history = data.sessionHistory || [];
            setSessionHistory(history);

            // Auto-correct current session based on history length to prevent "stuck in previous session" loop
            // If history has 1 item (Session 1 done), next should be 2.
            const derivedSession = history.length + 1;
            // Use stored current if it's ahead (e.g. during a break), but never behind history
            const storedCurrent = data.currentSessionGlobal || 1;
            setCurrentSessionGlobal(Math.max(derivedSession, storedCurrent));

            // Restore goal
            if (data.sessionGoal) setSessionGoal(data.sessionGoal);
        } else {
            // Fallback: Check for legacy data (Migration)
            const savedOld = localStorage.getItem(`batch11_cycle_${weekId}_${dayId}`);
            if (savedOld) {
                try {
                    const oldData = JSON.parse(savedOld);
                    console.log("Migrating legacy Pomodoro data:", oldData);

                    // Map legacy cycles to new sessions
                    // Legacy: 4 Cycles. New: 12 Sessions.
                    // If user was on Cycle 2 (completed Cycle 1), they should be on Session 2 (completed Session 1).
                    // We assume 1-to-1 mapping for completed cycles to sessions for continuity,
                    // or we could map 1 cycle -> 3 sessions (if we wanted to preserve time, but 1-to-1 is safer for logic).
                    // User request: "cycle 1 is already done... start from directly from cycle 2"

                    const migratedHistory: CycleData[] = (oldData.cycleHistory || []).map((c: any) => ({
                        cycleNumber: c.cycleNumber, // Keep 1 as 1
                        selectedSubtopics: c.selectedSubtopics || [],
                        flashcardsViewed: c.flashcardsViewed || 0,
                        mcqResults: c.mcqResults || { correct: 0, total: 0 }
                    }));

                    setSessionHistory(migratedHistory);

                    // Set current session. If old was 2, new is 2.
                    // Ensure we don't exceed limits or go backwards.
                    const nextSession = oldData.currentCycle || 1;
                    setCurrentSessionGlobal(nextSession);

                } catch (e) {
                    console.error("Failed to migrate legacy data", e);
                }
            }
        }
    }, [weekId, dayId]);

    // Save on updates
    useEffect(() => {
        localStorage.setItem(`batch11_pomodoro_${weekId}_${dayId}`, JSON.stringify({
            currentSessionGlobal,
            sessionHistory,
            sessionGoal,
            lastUpdated: new Date().toISOString()
        }));
    }, [currentSessionGlobal, sessionHistory, sessionGoal, weekId, dayId]);


    // Calculate total progress
    const totalSubtopicsCompleted = sessionHistory.reduce((sum, c) => sum + c.selectedSubtopics.length, 0);
    const totalCorrectMCQs = sessionHistory.reduce((sum, c) => sum + c.mcqResults.correct, 0);
    const totalMCQs = sessionHistory.reduce((sum, c) => sum + c.mcqResults.total, 0);

    // All previously completed subtopics (for filtering if needed)
    const allCompletedSubtopics = useMemo(() => {
        return sessionHistory.flatMap(c => c.selectedSubtopics);
    }, [sessionHistory]);

    // Handlers
    // Handlers
    const startSession = () => {
        setSessionState('pomodoro');
        setTimeLeft(POMODORO_DURATION);
    };

    const handleTimerComplete = () => {
        // playNotificationSound(); 

        // Show options instead of auto-proceeding
        if (sessionState === 'pomodoro') {
            // Award XP for completing Pomodoro
            awardXP('pomodoro_complete');
            updateStreak();
            checkAchievements();
            window.dispatchEvent(new Event('xp-updated'));

            setSessionState('timer_options');
        } else if (sessionState === 'break' || sessionState === 'long_break') {
            setSessionState('ready');
            setTimeLeft(POMODORO_DURATION);
        }
    };

    const handlePostTimerAction = (action: 'extend_5' | 'extend_10' | 'extend_15' | 'proceed' | 'skip_review') => {
        switch (action) {
            case 'extend_5':
                setTimeLeft(5 * 60);
                setSessionState('pomodoro');
                break;
            case 'extend_10':
                setTimeLeft(10 * 60);
                setSessionState('pomodoro');
                break;
            case 'extend_15':
                setTimeLeft(15 * 60);
                setSessionState('pomodoro');
                break;
            case 'proceed':
                setSessionState('subtopic_select');
                break;
            case 'skip_review':
                // Skip FC/MCQ/Reading -> Go to Break
                handleReadingComplete(); // Reuse completion logic
                break;
        }
    };

    const handleSubtopicSubmit = (selected: SubTopic[]) => {
        setCurrentSubtopics(selected);
        setSessionState('flashcards');
    };

    const handleFlashcardsComplete = (viewedCount: number) => {
        // Award XP for flashcard reviews
        for (let i = 0; i < viewedCount; i++) {
            awardXP('flashcard_review');
        }
        window.dispatchEvent(new Event('xp-updated'));

        setSessionState('mcqs');
    };

    const handleMCQsComplete = (results: { correct: number; total: number }) => {
        // Award XP for MCQ attempts and correct answers
        for (let i = 0; i < results.total; i++) {
            awardXP('mcq_attempt');
        }
        for (let i = 0; i < results.correct; i++) {
            awardXP('mcq_correct');
        }
        checkAchievements();
        window.dispatchEvent(new Event('xp-updated'));

        // 1. Record Data for this Session
        const newSessionData: CycleData = {
            cycleNumber: currentSessionGlobal,
            selectedSubtopics: currentSubtopics,
            flashcardsViewed: currentSubtopics.length * 2, // Approx
            mcqResults: results,
            // timestamp: new Date().toISOString() // Optional if CycleData supports it
        };

        const updated = [...sessionHistory, newSessionData];
        setSessionHistory(updated);

        // Sync to unified progress store
        syncProgressToStore(weekId, dayId, currentSubtopics, results, currentSessionGlobal);

        // 2. Determine Next Step -> Reading Phase
        setSessionState('reading');
    };

    const handleReadingComplete = () => {
        if (currentSessionGlobal >= TOTAL_SESSIONS) {
            setSessionState('complete');
        } else {
            // Check if end of block
            const isBlockEnd = currentSessionGlobal % SESSIONS_PER_BLOCK === 0;

            if (isBlockEnd) {
                setSessionState('long_break');
                setTimeLeft(LONG_BREAK);
            } else {
                setSessionState('break');
                setTimeLeft(SHORT_BREAK);
            }

            // Output log for debug
            console.log(`Completed Session ${currentSessionGlobal}. Next limit: ${TOTAL_SESSIONS}`);
        }
    };

    const handleBreakComplete = () => {
        // Break timer finished or skipped
        startNextSession();
    };

    const handleLongBreakComplete = () => {
        // Long break finished or skipped
        startNextSession();
    };

    const startNextSession = () => {
        if (currentSessionGlobal >= TOTAL_SESSIONS && sessionHistory.length >= TOTAL_SESSIONS) {
            setSessionState('complete');
        } else {
            // Advance session if not already done in handleMCQs (we advance AFTER break usually? 
            // Logic: MCQs done -> Break Start. Counter + 1. 
            // Break Done -> Ready state for NEW counter. 

            // In handleMCQsComplete we actually need to increment counter? 
            // If we increment there, then 'ready' screen needs to show NEW counter.
            // Yes.

            setCurrentSessionGlobal(prev => prev + 1);
            setCurrentSubtopics([]);
            setSessionState('ready');
            setTimeLeft(POMODORO_DURATION);
        }
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
        const avgMCQScore = sessionHistory.length > 0
            ? Math.round((totalCorrectMCQs / totalMCQs) * 100)
            : 0;

        return (
            <div className="max-w-4xl mx-auto p-6 animate-in fade-in">
                <div className="text-center py-12">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Trophy className="h-12 w-12 text-green-500" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        6-Hour Session Complete! 🎉
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                        You have mastered {totalSubtopicsCompleted} subtopics across 3 intensity blocks.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
                        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                            <CardContent className="p-6 text-center">
                                <div className="text-4xl font-bold text-blue-700 mb-1">{efficiencyScore}%</div>
                                <div className="text-sm font-bold text-blue-600 uppercase tracking-wider">Overall Efficiency</div>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                            <CardContent className="p-6 text-center">
                                <div className="text-4xl font-bold text-purple-700 mb-1">{totalSubtopicsCompleted}</div>
                                <div className="text-sm font-bold text-purple-600 uppercase tracking-wider">Topics Mastered</div>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                            <CardContent className="p-6 text-center">
                                <div className="text-4xl font-bold text-green-700 mb-1">{avgMCQScore}%</div>
                                <div className="text-sm font-bold text-green-600 uppercase tracking-wider">Accuracy</div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Block-wise Breakdown */}
                    <div className="max-w-3xl mx-auto space-y-6 text-left mb-12">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 px-2">Session Breakdown</h3>
                        {[1, 2, 3].map(blockId => {
                            // Filter sessions for this block
                            // blockId 1: sessions 1-4, blockId 2: 5-8, blockId 3: 9-12
                            const start = (blockId - 1) * 4 + 1;
                            const end = blockId * 4;
                            const blockSessions = sessionHistory.filter(s => s.cycleNumber >= start && s.cycleNumber <= end);

                            if (blockSessions.length === 0) return null;

                            const blockCorrect = blockSessions.reduce((sum, s) => sum + s.mcqResults.correct, 0);
                            const blockTotal = blockSessions.reduce((sum, s) => sum + s.mcqResults.total, 0);
                            const blockScore = blockTotal > 0 ? Math.round((blockCorrect / blockTotal) * 100) : 0;

                            return (
                                <Card key={blockId} className="overflow-hidden">
                                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 border-b flex justify-between items-center">
                                        <span className="font-bold text-lg">Block {blockId} (Sessions {start}-{end})</span>
                                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${blockScore >= 80 ? 'bg-green-100 text-green-700' :
                                            blockScore >= 60 ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-red-100 text-red-700'
                                            }`}>
                                            {blockScore}% Accuracy
                                        </span>
                                    </div>
                                    <CardContent className="p-4 space-y-2">
                                        {blockSessions.map((session) => (
                                            <div key={session.cycleNumber} className="flex justify-between items-center text-sm border-b last:border-0 pb-2 last:pb-0">
                                                <div className="flex-1">
                                                    <span className="font-medium text-gray-700 mr-2">Session {(session.cycleNumber - 1) % 4 + 1}:</span>
                                                    <span className="text-gray-500">{session.selectedSubtopics.map(s => s.label).join(", ").slice(0, 60)}...</span>
                                                </div>
                                                <div className="font-mono text-gray-600">
                                                    {session.mcqResults.correct}/{session.mcqResults.total}
                                                </div>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    <div className="flex gap-4 justify-center">
                        <Link href={`/student/batch1-1/${weekId}/${dayId}/evening`}>
                            <Button className="bg-indigo-600 hover:bg-indigo-700 h-12 px-8 text-lg shadow-lg shadow-indigo-200">
                                Proceed to Evening Session <ArrowRight className="ml-2 w-5 h-5" />
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
                        Session {currentSessionGlobal} of {TOTAL_SESSIONS} (Block {currentBlock})
                    </p>
                </div>
                <div className="flex items-center gap-2 text-orange-600">
                    <Flame className="h-5 w-5" />
                    <span className="font-semibold">{totalSubtopicsCompleted} subtopics</span>
                </div>
            </div>

            {/* Session Progress Bar (12 segments divided into 3 blocks) */}
            <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Block 1</span>
                    <span>Block 2</span>
                    <span>Block 3</span>
                </div>
                <div className="flex gap-1.5">
                    {Array.from({ length: TOTAL_SESSIONS }).map((_, i) => {
                        const sessionNum = i + 1;
                        const isBlockStart = (i % 4) === 0 && i !== 0;

                        return (
                            <div key={sessionNum} className={`flex-1 flex gap-1 ${isBlockStart ? 'ml-2' : ''}`}>
                                <div
                                    className={`w-full h-2 rounded-full ${sessionNum < currentSessionGlobal
                                        ? 'bg-green-500'
                                        : sessionNum === currentSessionGlobal
                                            ? 'bg-orange-500 animate-pulse'
                                            : 'bg-gray-200 dark:bg-gray-700'
                                        }`}
                                />
                            </div>
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
                                    Ready for Session {currentSessionGlobal}?
                                </h2>
                                <p className="text-orange-600 dark:text-orange-400 mb-6">
                                    Block {currentBlock}, Session {currentSessionInBlock}/4.
                                    <br />
                                    25 minutes of focused study. Timer starts now.

                                </p>

                                <div className="max-w-md mx-auto mb-6">
                                    <div className="relative">
                                        <Target className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <Input
                                            placeholder="What is your main goal for this session?"
                                            className="pl-10 h-12 text-lg bg-white/80 border-orange-200 focus:border-orange-500"
                                            value={sessionGoal}
                                            onChange={(e) => setSessionGoal(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <Button
                                    size="lg"
                                    onClick={startSession}
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                                >
                                    Start Session {currentSessionGlobal}
                                </Button>
                            </CardContent>
                        </Card>
                    )}

                    {/* Ambient Focus Controls (Visible in all active states) */}
                    {(sessionState === 'pomodoro' || sessionState === 'ready') && (
                        <Card className="mb-6 border-blue-100 bg-blue-50/50 dark:bg-blue-900/10">
                            <CardContent className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-full ${ambientEnabled ? 'bg-blue-500 text-white animate-pulse' : 'bg-gray-200 text-gray-500'}`}>
                                        <Headphones className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm text-gray-700 dark:text-gray-300">Deep Focus Noise</h3>
                                        <p className="text-xs text-gray-500">Block out distractions</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    {ambientEnabled && (
                                        <div className="hidden md:flex items-center gap-2 w-32">
                                            <Volume1 className="h-4 w-4 text-gray-400" />
                                            <Slider
                                                value={[ambientVolume]}
                                                min={0}
                                                max={1}
                                                step={0.01}
                                                onValueChange={handleVolumeChange}
                                                className="cursor-pointer"
                                            />
                                            <Volume2 className="h-4 w-4 text-gray-400" />
                                        </div>
                                    )}

                                    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg border p-1">
                                        {(['white', 'pink', 'brown'] as NoiseType[]).map(type => (
                                            <button
                                                key={type}
                                                onClick={() => handleTypeChange(type)}
                                                className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase transition-all ${ambientType === type
                                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                                                    : 'text-gray-400 hover:text-gray-600'}`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>

                                    <Switch
                                        checked={ambientEnabled}
                                        onCheckedChange={toggleAmbient}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {sessionState === 'pomodoro' && (
                        <PomodoroTimer
                            duration={POMODORO_DURATION}
                            onComplete={handleTimerComplete}
                            sessionNumber={currentSessionGlobal}
                            totalSessions={TOTAL_SESSIONS}
                            isStrict={true}
                            focusTask={sessionGoal}
                        />
                    )}

                    {sessionState === 'timer_options' && (
                        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 text-center border-indigo-200">
                            <CardContent className="space-y-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Pomodoro Complete!</h2>
                                <p className="text-gray-600">Great focus session. What would you like to do next?</p>

                                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                                    <Button onClick={() => handlePostTimerAction('extend_5')} variant="outline" className="border-indigo-300 hover:bg-indigo-50">
                                        +5 Min Focus
                                    </Button>
                                    <Button onClick={() => handlePostTimerAction('extend_10')} variant="outline" className="border-indigo-300 hover:bg-indigo-50">
                                        +10 Min Focus
                                    </Button>
                                    <Button onClick={() => handlePostTimerAction('proceed')} className="bg-green-600 hover:bg-green-700 text-white col-span-2">
                                        Start Review (FC & MCQ)
                                    </Button>
                                    <Button onClick={() => handlePostTimerAction('skip_review')} variant="ghost" className="text-red-500 hover:bg-red-50 col-span-2">
                                        Skip Review & Take Break
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {sessionState === 'subtopic_select' && (
                        <SubtopicSelector
                            chapterIds={todayChapters}
                            onSubmit={handleSubtopicSubmit}
                            cycleNumber={currentSessionGlobal}
                            isConsolidation={false} // No specific consolidation needed as interaction is every session
                            previouslyCompleted={allCompletedSubtopics}
                        />
                    )}

                    {sessionState === 'flashcards' && (
                        <CycleFlashcards
                            selectedSubtopics={currentSubtopics}
                            onComplete={handleFlashcardsComplete}
                            cycleNumber={currentSessionGlobal}
                        />
                    )}
                    {sessionState === 'mcqs' && (
                        <CycleMCQs
                            selectedSubtopics={currentSubtopics}
                            onComplete={handleMCQsComplete}
                            cycleNumber={currentSessionGlobal}
                        />
                    )}

                    {sessionState === 'reading' && (
                        <ReadingMaterial
                            subtopicIds={currentSubtopics.map(s => s.id)}
                            onComplete={handleReadingComplete}
                            dayId={dayId}
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
                    <Card className="bg-gray-50 dark:bg-gray-800 h-full max-h-[600px] overflow-y-auto">
                        <CardContent className="p-4">
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center justify-between">
                                <span className="flex items-center gap-2"><Repeat className="h-4 w-4" /> Session History</span>
                                <span className="text-xs text-muted-foreground">{currentSessionGlobal}/{TOTAL_SESSIONS}</span>
                            </h4>
                            <div className="space-y-3">
                                {Array.from({ length: TOTAL_SESSIONS }).map((_, i) => {
                                    const sessionNum = i + 1;
                                    const sessionData = sessionHistory.find(c => c.cycleNumber === sessionNum);
                                    const isActive = sessionNum === currentSessionGlobal;
                                    const isComplete = sessionData !== undefined;
                                    const isFuture = !isActive && !isComplete;
                                    const blockNum = Math.ceil(sessionNum / 4);

                                    // Add block header if start of block
                                    if ((i % 4) === 0) {
                                        // Only if we want headers in list. Maybe simple list is cleaner.
                                        // Let's keep simple list but use colors or breaks.
                                    }

                                    return (
                                        <div
                                            key={sessionNum}
                                            className={`p-3 rounded-lg border text-xs transition-all ${isComplete
                                                ? 'bg-green-50 dark:bg-green-900/10 border-green-200'
                                                : isActive
                                                    ? 'bg-orange-50 dark:bg-orange-900/10 border-orange-200 shadow-sm transform scale-102'
                                                    : 'bg-white dark:bg-gray-900 border-gray-100 opacity-60'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between mb-1">
                                                <span className={`font-bold ${isComplete ? 'text-green-700' : isActive ? 'text-orange-700' : 'text-gray-400'}`}>
                                                    S{sessionNum} (Block {blockNum})
                                                </span>
                                                {isComplete && <CheckCircle2 className="h-3 w-3 text-green-500" />}
                                            </div>
                                            {isComplete && sessionData && (
                                                <div className="text-gray-500 space-y-0.5">
                                                    <div>{sessionData.selectedSubtopics.length} topics</div>
                                                    <div>{Math.round((sessionData.mcqResults.correct / sessionData.mcqResults.total) * 100)}% Acc</div>
                                                </div>
                                            )}
                                            {isActive && !isComplete && (
                                                <div className="text-orange-500 font-medium">In Progress</div>
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

