"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Timer, Brain, CheckCircle2, Coffee, Flame, Trophy } from "lucide-react";
import Link from "next/link";
import PomodoroTimer from "./PomodoroTimer";
import TopicQueue, { Topic } from "./TopicQueue";
import RecallSession, { RecallResult } from "./RecallSession";
import { getModuleForWeek, getChaptersForWeek, ChapterPair } from "../data/polity-modules";
import { TOPIC_TITLES } from "../polity/data/polity-types-95";

// Session states
type SessionState = 'ready' | 'pomodoro' | 'break' | 'recall' | 'complete';

interface PomodoroSessionViewProps {
    weekId: number;
    dayId: number;
}

// Generate topics from module chapters based on week
function generateTopicsFromModule(weekId: number, dayId: number): Topic[] {
    const moduleChapters = getChaptersForWeek(weekId);

    if (moduleChapters.length === 0) {
        // Fallback for weeks without modules - use linear topic sequence
        const startTopic = ((weekId - 1) * 20) + ((dayId - 1) * 4) + 1;
        const topicsForDay = TOPIC_TITLES.slice(startTopic - 1, startTopic + 9);
        return topicsForDay.map(t => ({
            id: `topic_${t.id}`,
            name: t.title,
            chapter: `Part ${t.part}`,
            estimatedMinutes: 15,
            isCompleted: false,
            polityTopicId: t.id  // Link to polity homepage
        }));
    }

    // Distribute module chapters across the 5 weekdays
    const topics: Topic[] = [];
    const chaptersPerDay = Math.ceil(moduleChapters.length / 5);
    const startIdx = (dayId - 1) * chaptersPerDay;
    const endIdx = Math.min(startIdx + chaptersPerDay, moduleChapters.length);

    const dayChapters = moduleChapters.slice(startIdx, endIdx);

    dayChapters.forEach((chapter, idx) => {
        // Add primary chapter topic
        topics.push({
            id: `topic_${chapter.primaryId}`,
            name: chapter.primaryTitle,
            chapter: chapter.mirrorTitle ? `Mirror: ${chapter.mirrorTitle}` : "Polity",
            estimatedMinutes: Math.round(chapter.readingMinutes / 2),
            isCompleted: false,
            polityTopicId: chapter.primaryId
        });

        // If has mirror chapter, add it too
        if (chapter.mirrorId && chapter.mirrorTitle) {
            topics.push({
                id: `topic_${chapter.mirrorId}`,
                name: chapter.mirrorTitle,
                chapter: `Mirror of: ${chapter.primaryTitle}`,
                estimatedMinutes: Math.round(chapter.readingMinutes / 4), // Faster due to mirror studying
                isCompleted: false,
                polityTopicId: chapter.mirrorId
            });
        }
    });

    return topics.slice(0, 10); // Max 10 topics per day
}

// Sync completed topic with Polity homepage progress
function syncTopicToPolityProgress(polityTopicId: number) {
    const saved = localStorage.getItem('polity_95_progress');
    const progress = saved ? JSON.parse(saved) : {};

    if (!progress[polityTopicId]?.completed) {
        progress[polityTopicId] = {
            ...progress[polityTopicId],
            completed: true,
            lastViewed: new Date().toISOString()
        };
        localStorage.setItem('polity_95_progress', JSON.stringify(progress));
    }
}

export default function PomodoroSessionView({ weekId, dayId }: PomodoroSessionViewProps) {
    const router = useRouter();
    const [sessionState, setSessionState] = useState<SessionState>('ready');
    const [currentPomodoro, setCurrentPomodoro] = useState(1);
    const [topics, setTopics] = useState<Topic[]>([]);
    const [completedTopics, setCompletedTopics] = useState<string[]>([]);
    const [recallResults, setRecallResults] = useState<RecallResult[]>([]);
    const [breakTimeLeft, setBreakTimeLeft] = useState(300); // 5 min break

    const TOTAL_POMODOROS = 12; // 3 mega-sessions × 4 Pomodoros
    const POMODORO_DURATION = 1500; // 25 minutes
    const BREAK_DURATION = 300; // 5 minutes

    // Initialize topics from module
    useEffect(() => {
        const moduleTopics = generateTopicsFromModule(weekId, dayId);
        setTopics(moduleTopics);
    }, [weekId, dayId]);

    // Load saved progress
    useEffect(() => {
        const savedKey = `batch11_day_${weekId}_${dayId}`;
        const saved = localStorage.getItem(savedKey);
        if (saved) {
            const data = JSON.parse(saved);
            setCurrentPomodoro(data.currentPomodoro || 1);
            setCompletedTopics(data.completedTopics || []);
            setRecallResults(data.recallResults || []);
        }
    }, [weekId, dayId]);

    // Save progress
    useEffect(() => {
        const savedKey = `batch11_day_${weekId}_${dayId}`;
        localStorage.setItem(savedKey, JSON.stringify({
            currentPomodoro,
            completedTopics,
            recallResults,
            lastUpdated: new Date().toISOString()
        }));
    }, [currentPomodoro, completedTopics, recallResults, weekId, dayId]);

    // Break timer
    useEffect(() => {
        if (sessionState === 'break' && breakTimeLeft > 0) {
            const timer = setInterval(() => {
                setBreakTimeLeft(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (sessionState === 'break' && breakTimeLeft === 0) {
            // Check if we need recall session (after every 2 Pomodoros)
            if (currentPomodoro % 2 === 0) {
                setSessionState('recall');
            } else {
                setSessionState('ready');
            }
        }
    }, [sessionState, breakTimeLeft, currentPomodoro]);

    const handlePomodoroComplete = () => {
        // Move to break
        setBreakTimeLeft(BREAK_DURATION);
        setSessionState('break');
    };

    const handleTopicComplete = (topicId: string) => {
        setCompletedTopics(prev => [...prev, topicId]);

        // Sync to polity homepage progress (auto-tick checkboxes)
        const topic = topics.find(t => t.id === topicId);
        if (topic?.polityTopicId) {
            syncTopicToPolityProgress(topic.polityTopicId);
        }
    };

    const handleRecallComplete = (result: RecallResult) => {
        setRecallResults(prev => [...prev, result]);
        setCurrentPomodoro(prev => prev + 1);

        if (currentPomodoro >= TOTAL_POMODOROS) {
            setSessionState('complete');
        } else {
            setSessionState('ready');
        }
    };

    const handleStartPomodoro = () => {
        setSessionState('pomodoro');
    };

    const skipBreak = () => {
        if (currentPomodoro % 2 === 0) {
            setSessionState('recall');
        } else {
            setSessionState('ready');
        }
    };

    // Get topics for recall (last completed topics)
    const getRecallTopics = () => {
        const lastCompleted = completedTopics.slice(-4);
        return topics
            .filter(t => lastCompleted.includes(t.id))
            .map(t => t.name);
    };

    // Session complete view
    if (sessionState === 'complete') {
        const avgRecall = recallResults.length > 0
            ? Math.round(recallResults.reduce((sum, r) => sum + r.recallPercentage, 0) / recallResults.length)
            : 0;

        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="text-center py-12">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Trophy className="h-12 w-12 text-green-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Day Complete! 🎉
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        You completed all {TOTAL_POMODOROS} Pomodoro sessions for today.
                    </p>

                    <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
                        <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200">
                            <CardContent className="p-4 text-center">
                                <div className="text-3xl font-bold text-orange-600">{TOTAL_POMODOROS}</div>
                                <div className="text-sm text-orange-700">Pomodoros</div>
                            </CardContent>
                        </Card>
                        <Card className="bg-green-50 dark:bg-green-900/20 border-green-200">
                            <CardContent className="p-4 text-center">
                                <div className="text-3xl font-bold text-green-600">{completedTopics.length}</div>
                                <div className="text-sm text-green-700">Topics</div>
                            </CardContent>
                        </Card>
                        <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200">
                            <CardContent className="p-4 text-center">
                                <div className="text-3xl font-bold text-purple-600">{avgRecall}%</div>
                                <div className="text-sm text-purple-700">Avg Recall</div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex gap-4 justify-center">
                        <Link href={`/student/batch1-1/${weekId}/${dayId}/evening`}>
                            <Button className="bg-indigo-600 hover:bg-indigo-700">
                                Go to Evening Session
                            </Button>
                        </Link>
                        <Link href="/student/batch1-1">
                            <Button variant="outline">
                                Back to Batch 1.1
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
                        Pomodoro {currentPomodoro} of {TOTAL_POMODOROS}
                    </p>
                </div>
                <div className="flex items-center gap-2 text-orange-600">
                    <Flame className="h-5 w-5" />
                    <span className="font-semibold">{completedTopics.length} topics done</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Overall Progress</span>
                    <span>{Math.round((currentPomodoro / TOTAL_POMODOROS) * 100)}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500"
                        style={{ width: `${(currentPomodoro / TOTAL_POMODOROS) * 100}%` }}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left: Timer / Break / Recall */}
                <div>
                    {sessionState === 'ready' && (
                        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border-orange-200">
                            <CardContent className="p-8 text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                                    <Timer className="h-10 w-10 text-orange-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-2">
                                    Ready for Pomodoro {currentPomodoro}?
                                </h2>
                                <p className="text-orange-600 dark:text-orange-400 mb-6">
                                    25 minutes of focused study. Check off topics as you complete them.
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
                            sessionNumber={currentPomodoro}
                            totalSessions={TOTAL_POMODOROS}
                            isStrict={true}
                        />
                    )}

                    {sessionState === 'break' && (
                        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200">
                            <CardContent className="p-8 text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                    <Coffee className="h-10 w-10 text-green-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">
                                    Break Time! ☕
                                </h2>
                                <div className="text-5xl font-bold font-mono text-green-600 my-6">
                                    {Math.floor(breakTimeLeft / 60)}:{String(breakTimeLeft % 60).padStart(2, '0')}
                                </div>
                                <p className="text-green-600 dark:text-green-400 mb-4">
                                    Rest your eyes, stretch, hydrate.
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={skipBreak}
                                    className="border-green-300 text-green-700"
                                >
                                    Skip Break
                                </Button>
                            </CardContent>
                        </Card>
                    )}

                    {sessionState === 'recall' && (
                        <RecallSession
                            topics={getRecallTopics()}
                            onComplete={handleRecallComplete}
                            sessionNumber={Math.floor(currentPomodoro / 2)}
                        />
                    )}
                </div>

                {/* Right: Topic Queue */}
                <div>
                    <TopicQueue
                        topics={topics.map(t => ({
                            ...t,
                            isCompleted: completedTopics.includes(t.id)
                        }))}
                        onTopicComplete={handleTopicComplete}
                        visibleCount={3}
                    />

                    {/* Session Info */}
                    <Card className="mt-4 bg-gray-50 dark:bg-gray-800">
                        <CardContent className="p-4">
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                Session Schedule
                            </h4>
                            <div className="space-y-2 text-sm">
                                {[1, 2, 3].map(megaSession => (
                                    <div key={megaSession} className="flex items-center gap-2">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${currentPomodoro > megaSession * 4
                                            ? 'bg-green-100 text-green-600'
                                            : currentPomodoro > (megaSession - 1) * 4
                                                ? 'bg-orange-100 text-orange-600'
                                                : 'bg-gray-100 text-gray-400'
                                            }`}>
                                            {currentPomodoro > megaSession * 4 ? (
                                                <CheckCircle2 className="h-4 w-4" />
                                            ) : megaSession}
                                        </div>
                                        <span className={currentPomodoro > megaSession * 4 ? 'text-green-600' : 'text-gray-600'}>
                                            Session {megaSession}: Pomodoros {(megaSession - 1) * 4 + 1}-{megaSession * 4} + Recall
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
