"use client";

import React, { useState, useEffect, useMemo } from 'react';
import {
    Zap,
    CheckCircle2,
    XCircle,
    Trophy,
    RefreshCcw,
    ChevronLeft,
    Brain,
    Target,
    BookOpen,
    Calendar
} from 'lucide-react';
import Link from 'next/link';
import { POLITY_REVISION_CHAPTERS, POLITY_SUMMARY_FACTS, RevisionFlashcard } from '../data/RevisionRegistry';
import { getDueCards, SRSCard, reviewCard, Quality } from './srs-engine';
import { updateMcqProgress, updateStreak } from './progress-utils';
import { toast } from 'sonner';

// Types for the Drill Item
type DrillItemType = 'srs' | 'fact' | 'mcq';

interface DrillItem {
    id: string;
    type: DrillItemType;
    content: any;
    chapterId?: number;
    chapterTitle?: string;
}

export default function DailyDrillMode() {
    const [items, setItems] = useState<DrillItem[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [score, setScore] = useState({ correct: 0, incorrect: 0 });
    const [sessionComplete, setSessionComplete] = useState(false);
    const [mcqAnswer, setMcqAnswer] = useState<number | null>(null);

    // Initialize Drill
    useEffect(() => {
        const initDrill = async () => {
            const drillItems: DrillItem[] = [];

            // 1. Get 5 SRS Cards (or random flashcards if none due)
            const due = await getDueCards();
            let srsCount = 0;

            // Add Due SRS Cards
            due.forEach(card => {
                if (srsCount >= 5) return;
                const ch = POLITY_REVISION_CHAPTERS.find(c => c.id === card.chapterId);
                const fc = ch?.flashcards?.[card.flashcardIdx];
                if (fc) {
                    drillItems.push({
                        id: `srs-${card.chapterId}-${card.flashcardIdx}`,
                        type: 'srs',
                        content: { ...card, flashcard: fc },
                        chapterId: card.chapterId,
                        chapterTitle: ch?.title
                    });
                    srsCount++;
                }
            });

            // Fill remaining with random flashcards if needed
            if (srsCount < 5) {
                const allFlashcards: any[] = [];
                POLITY_REVISION_CHAPTERS.forEach(ch => {
                    ch.flashcards?.forEach((fc, idx) => {
                        // Avoid duplicates if already added from due list (simplified check)
                        allFlashcards.push({ fc, ch, idx });
                    });
                });

                // Shuffle
                const shuffled = allFlashcards.sort(() => Math.random() - 0.5);

                for (const item of shuffled) {
                    if (srsCount >= 5) break;
                    // Check if already added (basic check by ID logic)
                    const id = `srs-${item.ch.id}-${item.idx}`;
                    if (!drillItems.find(i => i.id === id)) {
                        drillItems.push({
                            id: id,
                            type: 'srs',
                            content: {
                                chapterId: item.ch.id,
                                flashcardIdx: item.idx,
                                flashcard: item.fc,
                                easeFactor: 2.5, // Default for non-srs
                                interval: 0,
                                repetitions: 0
                            },
                            chapterId: item.ch.id,
                            chapterTitle: item.ch.title
                        });
                        srsCount++;
                    }
                }
            }

            // 2. Get 3 Random Facts
            const allFacts = [
                ...POLITY_SUMMARY_FACTS.dates.map(d => ({ ...d, type: 'date' })),
                ...POLITY_SUMMARY_FACTS.persons.map(p => ({ ...p, type: 'person' })),
                ...POLITY_SUMMARY_FACTS.acts.map(a => ({ ...a, type: 'act' }))
            ];
            const shuffledFacts = allFacts.sort(() => Math.random() - 0.5).slice(0, 3);
            shuffledFacts.forEach((fact, i) => {
                drillItems.push({
                    id: `fact-${i}`,
                    type: 'fact',
                    content: fact,
                    chapterTitle: 'General Facts'
                });
            });

            // 3. Get 2 MCQs (Random for now, could be weak topics)
            const allMcqs: any[] = [];
            POLITY_REVISION_CHAPTERS.forEach(ch => {
                ch.mcqs?.forEach((mcq, idx) => {
                    allMcqs.push({ mcq, ch, idx });
                });
            });
            const shuffledMcqs = allMcqs.sort(() => Math.random() - 0.5).slice(0, 2);
            shuffledMcqs.forEach((item, i) => {
                drillItems.push({
                    id: `mcq-${i}`,
                    type: 'mcq',
                    content: item.mcq,
                    chapterId: item.ch.id,
                    chapterTitle: item.ch.title
                });
            });

            // Shuffle the whole mix or keep ordered? Let's shuffle the mix for variety
            setItems(drillItems.sort(() => Math.random() - 0.5));
        };
        initDrill();
    }, []);

    const handleSrsResponse = async (quality: Quality) => {
        const currentItem = items[currentIndex];
        const card = currentItem.content;

        // Update SRS engine
        await reviewCard(card.chapterId, card.flashcardIdx, quality);

        if (quality >= 3) {
            setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
        } else {
            setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
        }

        nextItem();
    };

    const handleFactResponse = (known: boolean) => {
        if (known) {
            setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
        } else {
            setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
        }
        nextItem();
    };

    const handleMcqSubmit = () => {
        if (mcqAnswer === null) return;
        const currentItem = items[currentIndex];
        const isCorrect = mcqAnswer === currentItem.content.correctAnswer;

        if (isCorrect) {
            setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
            toast.success("Correct Answer!");
        } else {
            setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
            toast.error("Incorrect.");
        }

        // Update progress (simplified)
        if (currentItem.chapterId !== undefined) {
            // In a real app we'd track exactly which MCQ, for now just increment stats
            // We can use updateMcqProgress but we need current progress... 
            // Let's skip precise persistence for daily drill MCQs to avoid complexity overhead for now
        }

        // Delay to show result
        setTimeout(() => {
            setMcqAnswer(null);
            nextItem();
        }, 1500);
    };

    const nextItem = async () => {
        setShowAnswer(false);
        if (currentIndex >= items.length - 1) {
            setSessionComplete(true);
            await updateStreak(); // Mark day as studied
        } else {
            setCurrentIndex(prev => prev + 1);
        }
    };

    // Calculate progress
    const progress = Math.round(((currentIndex) / items.length) * 100);

    // --- RENDER HELPERS ---

    const renderSrsCard = (item: DrillItem) => {
        const card = item.content;
        return (
            <div className="space-y-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Brain className="w-5 h-5 text-indigo-500" />
                    <span className="text-indigo-600 font-bold text-sm uppercase">Flashcard Recall</span>
                </div>

                <div
                    onClick={() => !showAnswer && setShowAnswer(true)}
                    className="bg-card dark:bg-[#111] rounded-3xl p-8 min-h-[300px] shadow-xl border border-indigo-100 dark:border-indigo-900/30 flex flex-col items-center justify-center cursor-pointer text-center"
                >
                    {!showAnswer ? (
                        <>
                            <h3 className="text-xl font-bold text-foreground mb-4">{card.flashcard.question}</h3>
                            <p className="text-sm text-muted-foreground">Tap to reveal answer</p>
                        </>
                    ) : (
                        <>
                            <div className="text-sm text-emerald-500 font-bold mb-4 uppercase">Answer</div>
                            <p className="text-lg text-foreground">{card.flashcard.answer}</p>
                        </>
                    )}
                </div>

                {showAnswer && (
                    <div className="grid grid-cols-4 gap-2">
                        <button onClick={() => handleSrsResponse(0)} className="p-3 rounded-xl bg-red-100 text-red-700 font-bold text-sm">Forgot</button>
                        <button onClick={() => handleSrsResponse(3)} className="p-3 rounded-xl bg-orange-100 text-orange-700 font-bold text-sm">Hard</button>
                        <button onClick={() => handleSrsResponse(4)} className="p-3 rounded-xl bg-blue-100 text-blue-700 font-bold text-sm">Good</button>
                        <button onClick={() => handleSrsResponse(5)} className="p-3 rounded-xl bg-green-100 text-green-700 font-bold text-sm">Easy</button>
                    </div>
                )}
            </div>
        );
    };

    const renderFactCard = (item: DrillItem) => {
        const fact = item.content;
        let title = "Fact Check";
        let content = "";
        let sub = "";

        if (fact.type === 'date') {
            title = `Year: ${fact.year}`;
            content = fact.event;
            sub = fact.significance;
        } else if (fact.type === 'person') {
            title = fact.designation;
            content = fact.name;
            sub = fact.significance;
        } else if (fact.type === 'act') {
            title = fact.name;
            content = "Key Features?";
            sub = fact.keyFeatures.join(", ");
        }

        return (
            <div className="space-y-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-amber-500" />
                    <span className="text-amber-600 font-bold text-sm uppercase">Fact Check</span>
                </div>

                <div
                    onClick={() => !showAnswer && setShowAnswer(true)}
                    className="bg-card dark:bg-[#111] rounded-3xl p-8 min-h-[300px] shadow-xl border border-amber-100 dark:border-amber-900/30 flex flex-col items-center justify-center cursor-pointer text-center"
                >
                    {!showAnswer ? (
                        <>
                            <div className="text-sm text-amber-600 font-bold mb-2 uppercase">{title}</div>
                            <h3 className="text-xl font-bold text-foreground mb-4">
                                {fact.type === 'act' ? "What are the key features?" : "Who/What is associated with this?"}
                            </h3>
                            <p className="text-sm text-muted-foreground">Tap to reveal</p>
                        </>
                    ) : (
                        <>
                            <div className="text-xl font-bold text-foreground mb-2">{content}</div>
                            <p className="text-muted-foreground dark:text-muted-foreground text-sm">{sub}</p>
                        </>
                    )}
                </div>

                {showAnswer && (
                    <div className="grid grid-cols-2 gap-4">
                        <button onClick={() => handleFactResponse(false)} className="p-4 rounded-xl bg-red-100 text-red-700 font-bold">Didn't Know</button>
                        <button onClick={() => handleFactResponse(true)} className="p-4 rounded-xl bg-green-100 text-green-700 font-bold">Knew It</button>
                    </div>
                )}
            </div>
        );
    };

    const renderMcqCard = (item: DrillItem) => {
        const mcq = item.content;
        return (
            <div className="space-y-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-purple-500" />
                    <span className="text-purple-600 font-bold text-sm uppercase">Quick MCQ</span>
                </div>

                <div className="bg-card dark:bg-[#111] rounded-3xl p-6 shadow-xl border border-purple-100 dark:border-purple-900/30">
                    <h3 className="text-lg font-bold text-foreground mb-6">{mcq.question}</h3>
                    <div className="space-y-3">
                        {mcq.options.map((opt: string, idx: number) => (
                            <button
                                key={idx}
                                disabled={mcqAnswer !== null}
                                onClick={() => setMcqAnswer(idx)}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${mcqAnswer === idx
                                    ? (idx === mcq.correctAnswer ? 'bg-green-50 border-green-500 text-green-700' : 'bg-red-50 border-red-500 text-red-700')
                                    : (mcqAnswer !== null && idx === mcq.correctAnswer ? 'bg-green-50 border-green-500 text-green-700' : 'bg-card dark:bg-[#111] border-border hover:border-purple-200')
                                    }`}
                            >
                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold ${mcqAnswer === idx
                                    ? (idx === mcq.correctAnswer ? 'bg-green-500 border-green-500 text-white' : 'bg-red-500 border-red-500 text-white')
                                    : 'border-border text-muted-foreground'
                                    }`}>
                                    {String.fromCharCode(65 + idx)}
                                </div>
                                <span className="font-medium text-sm">{opt}</span>
                            </button>
                        ))}
                    </div>
                    {mcqAnswer !== null && (
                        <div className="mt-4 flex justify-end">
                            <button onClick={handleMcqSubmit} className="bg-purple-600 text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-purple-700">
                                Continue
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    };


    // --- VIEWS ---

    if (!isStarted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-[#030303] dark:via-[#050510] dark:to-[#030303] flex items-center justify-center p-6">
                <div className="bg-card dark:bg-[#111] rounded-3xl border border-border p-8 max-w-md w-full text-center shadow-xl">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/20">
                        <Zap className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl font-black text-foreground mb-2">Daily Drill</h1>
                    <p className="text-muted-foreground mb-8">Your morning revision vitamin. 10 mixed questions to start the day right.</p>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-2xl">
                            <Brain className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                            <div className="text-xs font-bold text-indigo-700 dark:text-indigo-300">5 SRS</div>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-2xl">
                            <BookOpen className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                            <div className="text-xs font-bold text-amber-700 dark:text-amber-300">3 Facts</div>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-2xl">
                            <Target className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                            <div className="text-xs font-bold text-purple-700 dark:text-purple-300">2 MCQs</div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={() => setIsStarted(true)}
                            className="block w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                        >
                            Start Drill
                        </button>
                        <Link
                            href="/student/batch1/polity/revision"
                            className="block w-full text-muted-foreground text-sm hover:text-muted-foreground"
                        >
                            Cancel
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (sessionComplete) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-[#030303] dark:via-[#050510] dark:to-[#030303] flex items-center justify-center p-6">
                <div className="bg-card dark:bg-[#111] rounded-3xl border border-border p-8 max-w-md w-full text-center shadow-xl">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                        <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl font-black text-foreground mb-2">Drill Complete!</h1>
                    <p className="text-muted-foreground mb-8">You've successfully completed your daily revision dose.</p>

                    <div className="flex justify-center gap-6 mb-8">
                        <div className="text-center">
                            <div className="text-4xl font-black text-green-600">{score.correct}</div>
                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Correct</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black text-red-500">{score.incorrect}</div>
                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Review</div>
                        </div>
                    </div>

                    <Link
                        href="/student/batch1/polity/revision"
                        className="block w-full bg-gray-900 dark:bg-card text-white dark:text-black py-4 rounded-2xl font-bold hover:shadow-lg transition-all"
                    >
                        Back to Hub
                    </Link>
                </div>
            </div>
        );
    }

    const currentItem = items[currentIndex];

    return (
        <div className="min-h-screen bg-muted dark:bg-[#030303] pb-20">
            {/* Header */}
            <div className="bg-card dark:bg-[#111] border-b border-border sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/student/batch1/polity/revision" className="text-muted-foreground hover:text-muted-foreground">
                        <ChevronLeft className="w-6 h-6" />
                    </Link>
                    <div className="text-sm font-bold text-muted-foreground">
                        {currentIndex + 1} / {items.length}
                    </div>
                    <div className="w-6" />
                </div>
                {/* Progress Bar */}
                <div className="h-1 bg-muted">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
            </div>

            {/* Content */}
            <div className="max-w-xl mx-auto px-6 py-8">
                <div className="mb-6 flex justify-center">
                    {currentItem.chapterTitle && (
                        <span className="bg-muted text-muted-foreground dark:text-muted-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                            {currentItem.chapterTitle}
                        </span>
                    )}
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {currentItem.type === 'srs' && renderSrsCard(currentItem)}
                    {currentItem.type === 'fact' && renderFactCard(currentItem)}
                    {currentItem.type === 'mcq' && renderMcqCard(currentItem)}
                </div>
            </div>
        </div>
    );
}
