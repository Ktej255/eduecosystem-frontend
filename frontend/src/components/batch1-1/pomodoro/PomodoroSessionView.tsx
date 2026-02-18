"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Timer, CheckCircle2, Flame, Trophy, Repeat, BookOpen, ArrowRight, Target, Flashlight } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import PomodoroTimer from "./PomodoroTimer";
import SubtopicSelector from "./SubtopicSelector";
import CycleFlashcards from "./CycleFlashcards";
import CycleMCQs from "./CycleMCQs";
import { ConfidenceLevel } from "@/lib/gamification/gamification-types";
import ReadingMaterial from "./ReadingMaterial";
import BreakTimer from "./BreakTimer";
// Removed old module import to enforce strict schedule sync
import { CHAPTER_SUBTOPICS, SubTopic } from "@/components/batch1/polity/data/polity-subtopics";
import { LAXMIKANTH_CHAPTERS, generateWeeklySchedule } from "@/components/batch1/polity/data/polity-schedule-data";
import { getFabDayContent, FAB_MONTH_START } from "./FabScheduleData";
import { HISTORY_PLAN_CONFIGS, HistorySection } from "@/components/batch1/history/data/history-schedule-registry";
import { markChapterComplete, markSubtopicsComplete, updateDayProgress, recordMCQScore } from "@/lib/polity-progress-store";
import { markHistoryChapterComplete, markHistorySubtopicsComplete, updateHistoryDayProgress, recordHistoryMCQScore } from "@/lib/history-progress-store";
import { loadCompiledMCQs as loadHistoryMCQs } from "@/components/batch1/history/data/spectrum-mcq-loader";
import { loadCompiledFlashcards as loadHistoryFlashcards } from "@/components/batch1/history/data/history-flashcard-loader";
import { ambientSoundManager, NoiseType } from "@/lib/ambient-sound-manager";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Volume2, Volume1, VolumeX, Headphones } from "lucide-react";
import { awardXP, checkAchievements, updateStreak } from "@/lib/gamification";
import { upscSynapseService, CognitiveProfile } from "@/lib/upsc-synapse-service";
import { ActivityLogger } from "@/lib/analytics/ActivityLogger";

// Session states for the enhanced cycle
type SessionState =
    | 'ready'
    | 'pomodoro'
    | 'timer_options'
    | 'subtopic_select'
    | 'flashcards'
    | 'mcqs'
    | 'session_report'
    | 'reading'
    | 'break'
    | 'long_break'
    | 'loading_content'
    | 'complete';

interface PomodoroSessionViewProps {
    weekId: number;
    dayId: number;
    showBackButton?: boolean;
    subjectOverride?: 'history' | 'polity';
    historySection?: string; // 'modern' | 'medieval' | 'ancient' | 'art_culture'
    subject?: 'polity' | 'history'; // For standalone Subject Pomodoro mode
    independentChapters?: number[]; // Chapter IDs for independent/standalone mode
}

interface MCQResult {
    questionId: string;
    selectedAnswer: number | null;
    correctAnswer: number;
    isCorrect: boolean;
    confidence: ConfidenceLevel | null;
    timeSpent: number;
    subtopicId?: string; // Important for weak topic analysis
}

interface CycleData {
    cycleNumber: number;
    selectedSubtopics: SubTopic[];
    flashcardsViewed: number;
    mcqResults: { correct: number; total: number };
    mcqDetails?: MCQResult[]; // Store detailed results for analytics
}

// Get schedule items for the day (Chapters and/or Tasks)
function getDayContent(weekId: number, dayId: number, subjectOverride?: 'history' | 'polity', historySection: string = 'modern'): {
    chapters: number[];
    tasks: string[];
    chapterNames: string[];
    subject: 'polity' | 'history';
    isFabSchedule?: boolean;
    morningTopic?: string;
    eveningTopic?: string;
    liveClassLink?: string;
} {
    const dayMapping = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;

    // Validate dayId (1-7)
    if (dayId < 1 || dayId > 7) return { chapters: [], tasks: [], chapterNames: [], subject: 'polity' };

    // Calculate linear day (1-15 for history sections, 1-42+ for polity)
    const linearDay = (weekId - 1) * 7 + dayId;

    // --- HISTORY SECTION LOGIC ---
    if (subjectOverride === 'history') {
        const sectionKey = (historySection || 'modern') as HistorySection;
        const config = HISTORY_PLAN_CONFIGS[sectionKey];

        if (config && config.schedule) {
            // Find the schedule for this linear day (1-15)
            const daySchedule = config.schedule.find((d: any) => d.day === linearDay);

            if (daySchedule) {
                return {
                    chapters: daySchedule.chapters || [],
                    tasks: daySchedule.topics || [],
                    chapterNames: daySchedule.chapterNames || [],
                    isFabSchedule: true,
                    morningTopic: daySchedule.title || `${config.title} - Day ${linearDay}`,
                    eveningTopic: "Recall Drill",
                    subject: 'history' as const
                };
            }
        }

        // Fallback for history when schedule not found
        return {
            chapters: [],
            tasks: [],
            chapterNames: [],
            morningTopic: `${config?.title || 'History'} - Day ${linearDay}`,
            subject: 'history' as const
        };
    }

    // --- FAB MONTH LOGIC (Feb 9+) for legacy ---
    const fabDate = new Date(FAB_MONTH_START);
    fabDate.setDate(fabDate.getDate() + (linearDay - 1));

    const fabContent = getFabDayContent(fabDate);

    if (fabContent && fabContent.morning.schedule) {
        return {
            chapters: fabContent.morning.schedule.chapters,
            tasks: fabContent.morning.schedule.topics,
            chapterNames: [],
            isFabSchedule: true,
            morningTopic: fabContent.morning.schedule.title,
            eveningTopic: fabContent.evening.topic,
            liveClassLink: fabContent.liveClassLink,
            subject: 'history' as const
        };
    }

    // --- FALLBACK TO POLITY SCHEDULE ---
    const dayKey = dayMapping[dayId - 1];

    const allWeeks = generateWeeklySchedule();
    const weekSchedule = allWeeks.find(w => w.week === weekId);

    if (!weekSchedule) {
        console.warn(`No schedule found for Week ${weekId}`);
        return { chapters: [], tasks: [], chapterNames: [], subject: 'polity' };
    }

    const dayContent = weekSchedule.days[dayKey];

    const chapters: number[] = [];
    const tasks: string[] = [];
    const chapterNames: string[] = [];

    if (Array.isArray(dayContent)) {
        dayContent.forEach(item => {
            if (typeof item === 'string') {
                tasks.push(item);
            } else if (item && 'chapter' in item) {
                chapters.push(item.chapter);
                const ch = LAXMIKANTH_CHAPTERS.find(c => c.chapter === item.chapter);
                if (ch) chapterNames.push(ch.topic);
            }
        });
    }

    return { chapters, tasks, chapterNames, subject: 'polity' as const };
}

// Sync to unified progress store (replaces old syncToStudyPlanner)
function syncProgressToStore(
    weekId: number,
    dayId: number,
    subtopics: SubTopic[],
    mcqResults?: { correct: number; total: number },
    currentSessionGlobal?: number,
    subject: 'polity' | 'history' = 'polity',
    profileId?: string
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

    if (subject === 'history') {
        // Mark subtopics complete for each chapter
        Object.entries(chapterSubtopics).forEach(([chapterId, subtopicIds]) => {
            markHistorySubtopicsComplete(parseInt(chapterId), subtopicIds);

            // Sync to backend if profile exists
            if (profileId) {
                const accuracy = mcqResults && mcqResults.total > 0
                    ? Math.round((mcqResults.correct / mcqResults.total) * 100)
                    : 100;

                upscSynapseService.logGapAnalysis({
                    profile_id: profileId,
                    chapter_id: parseInt(chapterId),
                    subject: "History",
                    status: "mastered", // History is currently pass-fail in Pomodoro
                    recall_accuracy: accuracy
                }).catch(err => console.error("History Backend Sync Failed:", err));
            }
        });

        // Update day progress
        updateHistoryDayProgress(weekId, dayId, {
            cyclesCompleted: currentSessionGlobal || 0,
            totalSubtopics: subtopics.length,
            morningComplete: currentSessionGlobal === 4
        });

        // Record MCQ scores if available
        if (mcqResults) {
            Object.keys(chapterSubtopics).forEach(chapterId => {
                recordHistoryMCQScore(parseInt(chapterId), Math.round((mcqResults.correct / mcqResults.total) * 100));
            });
        }
    } else {
        // Mark subtopics complete for each chapter
        Object.entries(chapterSubtopics).forEach(([chapterId, subtopicIds]) => {
            markSubtopicsComplete(parseInt(chapterId), subtopicIds);

            // Sync to backend if profile exists
            if (profileId) {
                const accuracy = mcqResults && mcqResults.total > 0
                    ? Math.round((mcqResults.correct / mcqResults.total) * 100)
                    : 100;

                const status = mcqResults && mcqResults.total > 0 && (mcqResults.correct / mcqResults.total < 0.8)
                    ? "knowledge_gap"
                    : "mastered";

                upscSynapseService.logGapAnalysis({
                    profile_id: profileId,
                    chapter_id: parseInt(chapterId),
                    subject: "Polity",
                    status: status,
                    recall_accuracy: accuracy
                }).catch(err => console.error("Polity Backend Sync Failed:", err));
            }
        });

        // Update day progress
        updateDayProgress(weekId, dayId, {
            cyclesCompleted: currentSessionGlobal || 0,
            totalSubtopics: subtopics.length,
            morningComplete: currentSessionGlobal === 4
        });

        // Record MCQ scores if available
        if (mcqResults) {
            Object.keys(chapterSubtopics).forEach(chapterId => {
                recordMCQScore(parseInt(chapterId), Math.round((mcqResults.correct / mcqResults.total) * 100));
            });
        }
    }
}

export default function PomodoroSessionView({ weekId, dayId, showBackButton = true, subjectOverride, historySection = 'modern', subject: subjectProp, independentChapters }: PomodoroSessionViewProps) {
    const router = useRouter();
    const { user } = useAuth();
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
    const [preloadedFlashcards, setPreloadedFlashcards] = useState<any[]>([]);
    const [preloadedMCQs, setPreloadedMCQs] = useState<any[]>([]);
    const [cognitiveProfile, setCognitiveProfile] = useState<CognitiveProfile | null>(null);

    // Session Goal
    const [sessionGoal, setSessionGoal] = useState("");

    // Last MCQ results for immediate session report
    const [lastMCQResults, setLastMCQResults] = useState<MCQResult[]>([]);

    // Detailed history: Store data for each of the 12 sessions
    const [sessionHistory, setSessionHistory] = useState<CycleData[]>([]);

    // --- Skip Logic & Accumulation ---
    // Quota: 4 Skips per "Cycle" (Block of 4 sessions). 
    // Reset quota when a new Block starts? 
    // User said: "in a 1 cycle they will get only 4 skip option... 4 pomodoro as a one cycle"
    // So reset at session 1, 5, 9.
    const [skipQuota, setSkipQuota] = useState(4);
    const [pendingSubtopics, setPendingSubtopics] = useState<SubTopic[]>([]);

    // Calculate/Reset Quota on Block Change
    useEffect(() => {
        //If we are at the start of a new block (1, 5, 9) and no history for it, reset quota
        const activeBlock = Math.ceil(currentSessionGlobal / 4);
        const startOfBlock = (activeBlock - 1) * 4 + 1;

        // Use local storage to persist quota if strict, but for now reset on block entry
        if (currentSessionGlobal === startOfBlock && !sessionHistory.find(s => s.cycleNumber === currentSessionGlobal)) {
            setSkipQuota(4);
            console.log("New Cycle Start: Quota Reset to 4");
        }
    }, [currentSessionGlobal, sessionHistory]);

    // Fetch cognitive profile on mount for sync
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profile = await upscSynapseService.getProfile();
                setCognitiveProfile(profile);
            } catch (err) {
                console.error("Failed to load synapse profile in pomodoro:", err);
            }
        };
        fetchProfile();
    }, []);

    // Save Pending Queue
    // ... persistence handled in main useEffect via JSON.stringify state ...

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

    // Get today's content (chapters & tasks)
    const { chapters: todayChapters, tasks: todayTasks, isFabSchedule, morningTopic, eveningTopic, liveClassLink, subject } = useMemo(() => {
        // Independent/Standalone mode: use provided chapters directly
        if (independentChapters && independentChapters.length > 0) {
            const chapterNames = independentChapters.map(id => {
                const ch = LAXMIKANTH_CHAPTERS.find(c => c.chapter === id);
                return ch ? ch.topic : `Chapter ${id}`;
            });
            return {
                chapters: independentChapters,
                tasks: [] as string[],
                chapterNames,
                subject: (subjectProp || 'polity') as 'polity' | 'history',
                isFabSchedule: false,
                morningTopic: 'Independent Study',
                eveningTopic: undefined,
                liveClassLink: undefined,
            };
        }
        return getDayContent(weekId, dayId, subjectOverride, historySection);
    }, [weekId, dayId, independentChapters, subjectProp, subjectOverride, historySection]);

    // Get chapter names / task names for display
    const scheduleItems = useMemo(() => {
        if (isFabSchedule) {
            // For Fab Schedule, 'tasks' contains the Topics (Unit X...), chapters are Spectrum IDs
            // We can map chapters to Labels if needed, or just show tasks.
            // The History Schedule has 'topics' array which are descriptive.
            return todayTasks.map((t, idx) => ({
                id: `task-${idx}`,
                label: t,
                isChapter: false
            }));
        }

        const items = todayChapters.map(id => {
            const chapter = LAXMIKANTH_CHAPTERS.find(ch => ch.chapter === id);
            return {
                id: `ch-${id}`,
                label: chapter ? `CH ${id}: ${chapter.topic}` : `Chapter ${id}`,
                isChapter: true
            };
        });

        todayTasks.forEach((task, idx) => {
            items.push({
                id: `task-${idx}`,
                label: task,
                isChapter: false
            });
        });

        return items;
    }, [todayChapters, todayTasks, isFabSchedule]);

    // --- Persistence ---
    useEffect(() => {
        const primaryKey = `batch11_pomodoro_${subject}_${weekId}_${dayId}`;
        const fallbackKey = `batch11_pomodoro_${weekId}_${dayId}`;
        const savedNew = localStorage.getItem(primaryKey) || localStorage.getItem(fallbackKey);

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
        const key = `batch11_pomodoro_${subject}_${weekId}_${dayId}`;
        localStorage.setItem(key, JSON.stringify({
            currentSessionGlobal,
            sessionHistory,
            sessionGoal,
            subject, // Include subject in data for clarity
            lastUpdated: new Date().toISOString()
        }));
    }, [currentSessionGlobal, sessionHistory, sessionGoal, weekId, dayId, subject]);


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

    const handleSubtopicSubmit = async (selected: SubTopic[]) => {
        // Merge with pending (Accumulation Logic)
        const merged = [...pendingSubtopics, ...selected];
        // Remove duplicates just in case
        const unique = Array.from(new Set(merged.map(s => s.id)))
            .map(id => merged.find(s => s.id === id)!);

        if (pendingSubtopics.length > 0) {
            console.log(`Accumulated ${pendingSubtopics.length} pending items.`);
            // Clear pending as they are now active
            setPendingSubtopics([]);
        }

        setCurrentSubtopics(unique);

        if (subject === 'history') {
            setSessionState('loading_content');
            try {
                // Get chapter IDs from subtopic IDs (structured as "X.Y")
                const chapterIds = Array.from(new Set(unique.map(s => parseInt(s.id.split('.')[0]))));

                // Load History specific content
                const [fcs, mcqs] = await Promise.all([
                    loadHistoryFlashcards(chapterIds),
                    loadHistoryMCQs(chapterIds, 10) // Small set for Pomodoro
                ]);

                setPreloadedFlashcards(fcs);
                setPreloadedMCQs(mcqs);
                setSessionState('flashcards');
            } catch (error) {
                console.error("Failed to load history content:", error);
                setSessionState('flashcards'); // Fallback to auto-gen
            }
        } else {
            setSessionState('flashcards');
        }
    };

    const handleFlashcardsComplete = (viewedCount: number) => {
        // Award XP for flashcard reviews
        for (let i = 0; i < viewedCount; i++) {
            awardXP('flashcard_review');
        }
        window.dispatchEvent(new Event('xp-updated'));

        setSessionState('mcqs');
    };

    const handleMCQsComplete = (resultsArray: MCQResult[]) => {
        // Calculate totals from array
        const total = resultsArray.length;
        const correct = resultsArray.filter(r => r.isCorrect).length;
        const results = { correct, total };

        // Award XP for MCQ attempts and correct answers
        for (let i = 0; i < results.total; i++) {
            awardXP('mcq_attempt');
        }
        for (let i = 0; i < results.correct; i++) {
            awardXP('mcq_correct');
        }
        checkAchievements();
        window.dispatchEvent(new Event('xp-updated'));

        // Log EACH MCQ to ActivityLogger for Deep Report visibility
        resultsArray.forEach(result => {
            ActivityLogger.logActivity({
                type: 'MCQ_POMODORO',
                details: {
                    questionId: result.questionId,
                    topic: subject === 'polity' ? 'Polity' : 'History',
                    subtopic: result.subtopicId || '',
                    isCorrect: result.isCorrect,
                    confidence: result.confidence,
                    timeSpent: result.timeSpent,
                }
            });
        });

        // 1. Record Data for this Session
        const newSessionData: CycleData = {
            cycleNumber: currentSessionGlobal,
            selectedSubtopics: currentSubtopics,
            flashcardsViewed: currentSubtopics.length * 2, // Approx
            mcqResults: results,
            mcqDetails: resultsArray, // Save detailed breakdown
        };

        const updated = [...sessionHistory, newSessionData];
        setSessionHistory(updated);

        // Sync to unified progress store
        syncProgressToStore(weekId, dayId, currentSubtopics, results, currentSessionGlobal, subject, cognitiveProfile?.id);

        // 2. Determine Next Step -> Session Report (shows immediate MCQ results)
        setLastMCQResults(resultsArray);
        setSessionState('session_report');
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
                        {subjectOverride === 'history' && (
                            <Button
                                onClick={() => {
                                    const currentLinearDay = (weekId - 1) * 7 + dayId;
                                    router.push(`/student/batch1/history/pomodoro?mode=study&subject=${historySection}&day=${currentLinearDay + 1}`);
                                }}
                                variant="outline"
                                className="h-12 px-8 text-lg border-2 border-indigo-100 hover:bg-indigo-50 text-indigo-700"
                            >
                                Next Chapter <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                {showBackButton && (
                    <Link href={subjectOverride === 'history' ? "/student/batch1/history" : "/student/batch1"}>
                        <Button variant="ghost" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to {subjectOverride === 'history' ? 'Dashboard' : 'Batch 1'}
                        </Button>
                    </Link>
                )}
                <div className="text-center">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        {subjectOverride === 'history' ? (HISTORY_PLAN_CONFIGS[historySection as HistorySection]?.title || 'History') : 'Polity'} • Day {((weekId - 1) * 7) + dayId}
                    </h1>
                    <p className="text-sm text-gray-500">
                        Session {currentSessionGlobal} of {TOTAL_SESSIONS} (Block {currentBlock}) • <span className="text-[10px] font-mono bg-green-50 text-green-700 border border-green-200 px-1.5 py-0.5 rounded">v2.4 Live</span>
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link href={`/student/batch1-1/${weekId}/${dayId}/evening`}>
                        <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                            <Flashlight className="h-4 w-4" />
                            Evening Session
                        </Button>
                    </Link>
                    <div className="flex items-center gap-2 text-orange-600">
                        <Flame className="h-5 w-5" />
                        <span className="font-semibold">{totalSubtopicsCompleted} subtopics</span>
                    </div>
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

            {/* Daily Goal Progress Bar */}
            <div className="mb-6 bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                    <div>
                        <h3 className="font-bold text-gray-800 dark:text-gray-200">Today's Schedule</h3>
                        <p className="text-xs text-gray-500">
                            {(() => {
                                if (isFabSchedule) {
                                    return (
                                        <div className="flex flex-col gap-1">
                                            <span className="font-semibold text-indigo-600 dark:text-indigo-400">{morningTopic}</span>
                                            {eveningTopic && (
                                                <div className="flex items-center gap-2">
                                                    <span className="text-orange-600 py-0.5 px-1.5 bg-orange-50 dark:bg-orange-900/20 rounded-md w-fit text-[10px] font-bold uppercase">
                                                        Evening: {eveningTopic}
                                                    </span>
                                                    {liveClassLink && (
                                                        <Link href={liveClassLink} target="_blank">
                                                            <Button size="sm" variant="destructive" className="h-6 text-[10px] animate-pulse px-2">
                                                                🔴 CLASS IS LIVE
                                                            </Button>
                                                        </Link>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                                const uniqueCompletedChapters = new Set(
                                    sessionHistory.flatMap(s => s.selectedSubtopics).map(s => s.id.split('.')[0])
                                ).size;
                                // If tasks only, show Tasks count. If chapters, show Chapters.
                                const totalItems = Math.max(1, todayChapters.length + todayTasks.length);
                                const completedCount = uniqueCompletedChapters; // Tasks logic TBD, focus on chapters for completion %

                                if (todayTasks.length > 0 && todayChapters.length === 0) {
                                    return `${todayTasks.length} Tasks Scheduled`;
                                }

                                return `${completedCount} of ${todayChapters.length} Chapters Covered`;
                            })()}
                        </p>
                    </div>
                </div>
                {todayChapters.length > 0 && (
                    <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
                            style={{ width: `${Math.min(100, (new Set(sessionHistory.flatMap(s => s.selectedSubtopics).map(s => s.id.split('.')[0])).size / Math.max(1, todayChapters.length)) * 100)}%` }}
                        />
                    </div>
                )}
            </div>

            {/* Today's Chapters/Tasks Info */}
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-bold text-blue-700 dark:text-blue-300">Today's Plan ({scheduleItems.length})</span>
                </div>
                <div className="flex flex-wrap gap-2 max-h-[150px] overflow-y-auto custom-scrollbar">
                    {scheduleItems.length > 0 ? scheduleItems.map((item, idx) => {
                        // Check completion only for chapters currently
                        const isCompleted = item.isChapter && new Set(sessionHistory.flatMap(s => s.selectedSubtopics).map(s => s.id.split('.')[0])).has(String(item.id.replace('ch-', '')));
                        return (
                            <span key={item.id} className={`text-xs px-2 py-1 rounded-full border ${isCompleted ? 'bg-green-100 text-green-700 border-green-200' : 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 border-blue-100'}`}>
                                {item.label} {isCompleted && '✓'}
                            </span>
                        );
                    }) : (
                        <span className="text-xs text-gray-400 italic">No scheduled items for this day.</span>
                    )}
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
                                        <h3 className="font-bold text-sm text-gray-700 dark:text-gray-300">Peaceful Soundscapes</h3>
                                        <p className="text-xs text-gray-500">Piano & Nature Sounds</p>
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
                                        {[
                                            { id: 'white', label: 'Forest' },
                                            { id: 'pink', label: 'Rain' },
                                            { id: 'brown', label: 'Night' }
                                        ].map(opt => (
                                            <button
                                                key={opt.id}
                                                onClick={() => handleTypeChange(opt.id as NoiseType)}
                                                className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase transition-all ${ambientType === opt.id
                                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                                                    : 'text-gray-400 hover:text-gray-600'}`}
                                            >
                                                {opt.label}
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
                        <>
                            <PomodoroTimer
                                duration={POMODORO_DURATION}
                                onComplete={handleTimerComplete}
                                sessionNumber={currentSessionGlobal}
                                totalSessions={TOTAL_SESSIONS}
                                isStrict={true}
                                focusTask={sessionGoal}
                            />
                            {/* Admin Testing Skip Button */}
                            {user?.email === 'ktej255@gmail.com' && (
                                <div className="mt-4 flex justify-center">
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={handleTimerComplete}
                                        className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-200 border shadow-none"
                                    >
                                        [TESTING] Skip Timer
                                    </Button>
                                </div>
                            )}
                        </>
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
                            subject={subject}
                        />
                    )}

                    {sessionState === 'loading_content' && (
                        <Card className="p-12 text-center bg-white">
                            <div className="flex flex-col items-center justify-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
                                <p className="text-gray-600 font-medium">Curating your customized history session...</p>
                                <p className="text-xs text-gray-400 mt-2">Loading flashcards and MCQs for selected chapters</p>
                            </div>
                        </Card>
                    )}

                    {sessionState === 'flashcards' && (
                        <CycleFlashcards
                            selectedSubtopics={currentSubtopics}
                            onComplete={handleFlashcardsComplete}
                            cycleNumber={currentSessionGlobal}
                            preloadedCards={preloadedFlashcards}
                            subject={subject}
                            // Skip Props
                            canSkip={skipQuota > 0}
                            skipsRemaining={skipQuota}
                            onSkip={() => {
                                setSkipQuota(prev => Math.max(0, prev - 1));
                                // Add to pending
                                setPendingSubtopics(prev => [...prev, ...currentSubtopics]); // Re-queue current
                                setSessionState('mcqs'); // Skip to next stage? Or skip to break? 
                                // User: "skip button for the flash card... continue with their next pomodoro cycle"
                                // User: "one skip... for flash card... 2nd skip... for MCQ"
                                // Logic: Skip FC -> Go to MCQ. Skip MCQ -> Go to Break/Reading.
                            }}
                        />
                    )}
                    {sessionState === 'mcqs' && (
                        <CycleMCQs
                            selectedSubtopics={currentSubtopics}
                            onComplete={handleMCQsComplete}
                            cycleNumber={currentSessionGlobal}
                            preloadedMCQs={preloadedMCQs}
                            subject={subject}
                            // Skip Props
                            canSkip={skipQuota > 0}
                            skipsRemaining={skipQuota}
                            activityType="MCQ_POMODORO"
                            onSkip={() => {
                                setSkipQuota(prev => Math.max(0, prev - 1));
                                // Add to pending (if not already added by FC skip? If FC done, then pending is empty. So add now)
                                // We need to check if we just skipped FC. If so, they are already in pending?
                                // Actually, handleSubtopicSubmit CLEARS pending. 
                                // So if we skip FC, we re-add to pending.
                                // If we complete FC, we DON'T add to pending.
                                // If we skip MCQ, we check if they are already in pending? 
                                // Safer to just add unique IDs to pending.
                                setPendingSubtopics(prev => {
                                    const combined = [...prev, ...currentSubtopics];
                                    return Array.from(new Set(combined.map(s => s.id))).map(id => combined.find(s => s.id === id)!);
                                });

                                handleReadingComplete(); // Skip to Next/Break
                            }}
                        />
                    )}

                    {sessionState === 'session_report' && lastMCQResults.length > 0 && (() => {
                        const correct = lastMCQResults.filter(r => r.isCorrect).length;
                        const total = lastMCQResults.length;
                        const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
                        const avgTime = total > 0 ? Math.round(lastMCQResults.reduce((sum, r) => sum + r.timeSpent, 0) / total) : 0;

                        // Confidence breakdown
                        const confidenceGroups: Record<string, { correct: number; total: number }> = {};
                        lastMCQResults.forEach(r => {
                            const conf = r.confidence || 'unknown';
                            if (!confidenceGroups[conf]) confidenceGroups[conf] = { correct: 0, total: 0 };
                            confidenceGroups[conf].total++;
                            if (r.isCorrect) confidenceGroups[conf].correct++;
                        });

                        const confidenceLabels: Record<string, { label: string; color: string; bg: string }> = {
                            'sure': { label: '💪 Sure', color: 'text-green-700', bg: 'bg-green-50 border-green-200' },
                            '50-50': { label: '🤔 50-50', color: 'text-yellow-700', bg: 'bg-yellow-50 border-yellow-200' },
                            'one-option': { label: '🎯 One Known', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200' },
                            'blind': { label: '🎲 Blind', color: 'text-red-700', bg: 'bg-red-50 border-red-200' },
                            'unknown': { label: '❓ Unset', color: 'text-gray-700', bg: 'bg-gray-50 border-gray-200' },
                        };

                        return (
                            <Card className="bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-900/20 border-indigo-200">
                                <CardContent className="p-6 space-y-6">
                                    {/* Header */}
                                    <div className="text-center">
                                        <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${accuracy >= 70 ? 'bg-green-100' : accuracy >= 40 ? 'bg-yellow-100' : 'bg-red-100'}`}>
                                            <Trophy className={`h-8 w-8 ${accuracy >= 70 ? 'text-green-600' : accuracy >= 40 ? 'text-yellow-600' : 'text-red-600'}`} />
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">Session {currentSessionGlobal} Report</h2>
                                        <p className="text-sm text-gray-500">{correct}/{total} correct • {avgTime}s avg per question</p>
                                    </div>

                                    {/* Score Cards */}
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="text-center p-3 bg-white dark:bg-gray-900 rounded-xl border shadow-sm">
                                            <div className={`text-3xl font-black ${accuracy >= 70 ? 'text-green-600' : accuracy >= 40 ? 'text-yellow-600' : 'text-red-600'}`}>{accuracy}%</div>
                                            <div className="text-[10px] font-bold text-gray-500 uppercase mt-1">Accuracy</div>
                                        </div>
                                        <div className="text-center p-3 bg-white dark:bg-gray-900 rounded-xl border shadow-sm">
                                            <div className="text-3xl font-black text-indigo-600">{correct}</div>
                                            <div className="text-[10px] font-bold text-gray-500 uppercase mt-1">Correct</div>
                                        </div>
                                        <div className="text-center p-3 bg-white dark:bg-gray-900 rounded-xl border shadow-sm">
                                            <div className="text-3xl font-black text-gray-700 dark:text-gray-300">{avgTime}s</div>
                                            <div className="text-[10px] font-bold text-gray-500 uppercase mt-1">Avg Time</div>
                                        </div>
                                    </div>

                                    {/* Confidence Breakdown */}
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Confidence vs. Correctness</h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            {Object.entries(confidenceGroups).map(([conf, data]) => {
                                                const info = confidenceLabels[conf] || confidenceLabels['unknown'];
                                                const confAcc = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                                                return (
                                                    <div key={conf} className={`p-2.5 rounded-lg border ${info.bg}`}>
                                                        <div className="flex justify-between items-center">
                                                            <span className={`text-xs font-bold ${info.color}`}>{info.label}</span>
                                                            <span className="text-xs font-mono text-gray-600">{data.correct}/{data.total}</span>
                                                        </div>
                                                        <div className="h-1.5 bg-gray-200 rounded-full mt-1.5 overflow-hidden">
                                                            <div className={`h-full rounded-full ${confAcc >= 70 ? 'bg-green-500' : confAcc >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                                                style={{ width: `${confAcc}%` }} />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Individual Questions */}
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Question Results</h3>
                                        <div className="flex flex-wrap gap-1.5">
                                            {lastMCQResults.map((r, idx) => (
                                                <div key={idx} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border ${r.isCorrect
                                                    ? 'bg-green-100 text-green-700 border-green-300'
                                                    : 'bg-red-100 text-red-700 border-red-300'
                                                    }`}>
                                                    {idx + 1}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Continue Button */}
                                    <Button
                                        onClick={() => setSessionState('reading')}
                                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-12 text-base font-bold"
                                    >
                                        Continue to Reading <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </CardContent>
                            </Card>
                        );
                    })()}

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

