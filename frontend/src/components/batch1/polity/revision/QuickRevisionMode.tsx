"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Zap,
    RefreshCcw,
    CheckCircle2,
    XCircle,
    Sparkles,
    Trophy,
    Timer
} from 'lucide-react';
import Link from 'next/link';
import { POLITY_REVISION_CHAPTERS, RevisionFlashcard as Flashcard } from '../data/RevisionRegistry';

// Flatten all flashcards from all chapters
function getAllFlashcards(): (Flashcard & { chapterTitle: string })[] {
    const all: (Flashcard & { chapterTitle: string })[] = [];
    POLITY_REVISION_CHAPTERS.forEach(ch => {
        if (ch.flashcards && ch.flashcards.length > 0) {
            ch.flashcards.forEach(fc => {
                all.push({ ...fc, chapterTitle: ch.title });
            });
        }
    });
    return all;
}

// Shuffle array
function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export default function QuickRevisionMode() {
    const [flashcards, setFlashcards] = useState<(Flashcard & { chapterTitle: string })[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [score, setScore] = useState({ correct: 0, incorrect: 0 });
    const [sessionComplete, setSessionComplete] = useState(false);
    const [sessionSize, setSessionSize] = useState(20);
    const [timerEnabled, setTimerEnabled] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);
    const [isStarted, setIsStarted] = useState(false);

    // Initialize flashcards
    useEffect(() => {
        const all = getAllFlashcards();
        const shuffled = shuffleArray(all).slice(0, sessionSize);
        setFlashcards(shuffled);
    }, [sessionSize]);

    // Timer logic
    useEffect(() => {
        if (!timerEnabled || !isStarted || sessionComplete) return;

        if (timeLeft <= 0) {
            handleResponse(false);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timerEnabled, isStarted, timeLeft, sessionComplete]);

    // Reset timer when moving to next card
    useEffect(() => {
        if (timerEnabled) {
            setTimeLeft(30);
        }
    }, [currentIndex, timerEnabled]);

    const handleResponse = useCallback((correct: boolean) => {
        if (correct) {
            setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
        } else {
            setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
        }

        if (currentIndex >= flashcards.length - 1) {
            setSessionComplete(true);
        } else {
            setCurrentIndex(prev => prev + 1);
            setIsFlipped(false);
        }
    }, [currentIndex, flashcards.length]);

    const restartSession = () => {
        const all = getAllFlashcards();
        const shuffled = shuffleArray(all).slice(0, sessionSize);
        setFlashcards(shuffled);
        setCurrentIndex(0);
        setIsFlipped(false);
        setScore({ correct: 0, incorrect: 0 });
        setSessionComplete(false);
        setTimeLeft(30);
    };

    const currentCard = flashcards[currentIndex];
    const progress = flashcards.length > 0 ? ((currentIndex + 1) / flashcards.length) * 100 : 0;

    // Start screen
    if (!isStarted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-[#030303] dark:via-[#080808] dark:to-[#030303] flex items-center justify-center p-6">
                <div className="bg-card dark:bg-[#111] rounded-3xl border border-border p-8 max-w-md w-full shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
                            <Zap className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-2xl font-black text-foreground mb-2">Quick Revision</h1>
                        <p className="text-muted-foreground">Rapid-fire flashcard session</p>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground dark:text-muted-foreground mb-2">
                                Number of Cards
                            </label>
                            <select
                                value={sessionSize}
                                onChange={(e) => setSessionSize(Number(e.target.value))}
                                className="w-full bg-muted dark:bg-[#0a0a0a] border border-border rounded-xl px-4 py-3"
                            >
                                <option value={10}>10 cards (Quick)</option>
                                <option value={20}>20 cards (Standard)</option>
                                <option value={50}>50 cards (Extended)</option>
                                <option value={100}>100 cards (Marathon)</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-muted dark:bg-[#0a0a0a] rounded-xl">
                            <div className="flex items-center gap-3">
                                <Timer className="w-5 h-5 text-muted-foreground" />
                                <span className="font-medium">30s Timer per Card</span>
                            </div>
                            <button
                                onClick={() => setTimerEnabled(!timerEnabled)}
                                className={`w-12 h-6 rounded-full transition-colors ${timerEnabled ? 'bg-amber-500' : 'bg-gray-300'
                                    }`}
                            >
                                <div className={`w-5 h-5 rounded-full bg-card shadow transition-transform ${timerEnabled ? 'translate-x-6' : 'translate-x-0.5'
                                    }`} />
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsStarted(true)}
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                        <Sparkles className="w-5 h-5" />
                        Start Session
                    </button>

                    <Link
                        href="/student/batch1/polity/revision"
                        className="block text-center mt-4 text-muted-foreground hover:text-muted-foreground text-sm"
                    >
                        ← Back to Revision Hub
                    </Link>
                </div>
            </div>
        );
    }

    // Session complete screen
    if (sessionComplete) {
        const successRate = Math.round((score.correct / (score.correct + score.incorrect)) * 100);
        return (
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-[#030303] dark:via-[#080808] dark:to-[#030303] flex items-center justify-center p-6">
                <div className="bg-card dark:bg-[#111] rounded-3xl border border-border p-8 max-w-md w-full shadow-2xl text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                        <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-2xl font-black text-foreground mb-2">Session Complete!</h1>
                    <p className="text-muted-foreground mb-6">You've finished {flashcards.length} flashcards</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-4">
                            <div className="text-3xl font-black text-emerald-600">{score.correct}</div>
                            <div className="text-sm text-emerald-600">Correct</div>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-4">
                            <div className="text-3xl font-black text-red-600">{score.incorrect}</div>
                            <div className="text-sm text-red-600">Incorrect</div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="text-5xl font-black text-foreground mb-2">{successRate}%</div>
                        <div className="text-muted-foreground">Success Rate</div>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={restartSession}
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                            <RefreshCcw className="w-5 h-5" />
                            New Session
                        </button>
                        <Link
                            href="/student/batch1/polity/revision"
                            className="block w-full bg-muted dark:bg-[#0a0a0a] text-muted-foreground dark:text-muted-foreground py-4 rounded-2xl font-bold hover:bg-muted transition-all"
                        >
                            Back to Revision Hub
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Main flashcard view
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-[#030303] dark:via-[#080808] dark:to-[#030303] p-6">
            {/* Header */}
            <div className="max-w-2xl mx-auto mb-6">
                <div className="flex items-center justify-between mb-4">
                    <Link href="/student/batch1/polity/revision" className="text-muted-foreground hover:text-muted-foreground flex items-center gap-1">
                        <ChevronLeft className="w-4 h-4" />
                        Exit
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-emerald-600">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="font-bold">{score.correct}</span>
                        </div>
                        <div className="flex items-center gap-2 text-red-600">
                            <XCircle className="w-4 h-4" />
                            <span className="font-bold">{score.incorrect}</span>
                        </div>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="text-center text-sm text-muted-foreground mt-2">
                    {currentIndex + 1} of {flashcards.length}
                </div>
            </div>

            {/* Timer */}
            {timerEnabled && (
                <div className="max-w-2xl mx-auto mb-4">
                    <div className={`text-center text-2xl font-black ${timeLeft <= 10 ? 'text-red-600' : 'text-muted-foreground'}`}>
                        {timeLeft}s
                    </div>
                </div>
            )}

            {/* Flashcard */}
            {currentCard && (
                <div className="max-w-2xl mx-auto">
                    <div
                        onClick={() => setIsFlipped(!isFlipped)}
                        className="relative bg-card dark:bg-[#111] rounded-3xl border border-border p-8 min-h-[300px] cursor-pointer shadow-xl hover:shadow-2xl transition-all"
                    >
                        <div className="absolute top-4 left-4 text-xs font-bold text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
                            {currentCard.chapterTitle}
                        </div>

                        <div className="flex items-center justify-center h-full pt-8">
                            <div className="text-center">
                                {!isFlipped ? (
                                    <>
                                        <div className="text-sm text-muted-foreground mb-4">QUESTION</div>
                                        <div className="text-xl font-bold text-foreground">
                                            {currentCard.question}
                                        </div>
                                        <div className="mt-6 text-sm text-muted-foreground">Tap to reveal answer</div>
                                    </>
                                ) : (
                                    <>
                                        <div className="text-sm text-emerald-500 mb-4">ANSWER</div>
                                        <div className="text-lg text-muted-foreground dark:text-muted-foreground">
                                            {currentCard.answer}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Action buttons */}
                    {isFlipped && (
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <button
                                onClick={() => handleResponse(false)}
                                className="bg-red-100 dark:bg-red-900/20 text-red-600 py-4 rounded-2xl font-bold hover:bg-red-200 transition-all flex items-center justify-center gap-2"
                            >
                                <XCircle className="w-5 h-5" />
                                Didn't Know
                            </button>
                            <button
                                onClick={() => handleResponse(true)}
                                className="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 py-4 rounded-2xl font-bold hover:bg-emerald-200 transition-all flex items-center justify-center gap-2"
                            >
                                <CheckCircle2 className="w-5 h-5" />
                                Got It!
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
