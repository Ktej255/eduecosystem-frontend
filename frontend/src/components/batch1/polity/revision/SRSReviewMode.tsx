"use client";

import React, { useState, useEffect, useMemo } from 'react';
import {
    ChevronLeft,
    Brain,
    Zap,
    CheckCircle2,
    XCircle,
    Clock,
    Trophy,
    RefreshCcw,
    Sparkles,
    AlertTriangle
} from 'lucide-react';
import Link from 'next/link';
import { POLITY_REVISION_CHAPTERS } from '../data/RevisionRegistry';
import {
    getDueCards,
    getSRSStats,
    reviewCard,
    initializeChapterForSRS,
    QUALITY_LABELS,
    SRSCard,
    Quality
} from './srs-engine';

interface Flashcard {
    question: string;
    answer: string;
    difficulty: 'easy' | 'medium' | 'hard';
    category: string;
}

export default function SRSReviewMode() {
    const [dueCards, setDueCards] = useState<(SRSCard & { flashcard: Flashcard; chapterTitle: string })[]>([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [sessionComplete, setSessionComplete] = useState(false);
    const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 });
    const [isInitializing, setIsInitializing] = useState(true);

    const [stats, setStats] = useState({ due: 0, new: 0, learning: 0, review: 0 });

    // Initialize SRS data for all chapters and get due cards
    useEffect(() => {
        const loadSRSSession = async () => {
            setIsInitializing(true);

            // Initialize all chapters into SRS system
            for (const ch of POLITY_REVISION_CHAPTERS) {
                if (ch.flashcards && ch.flashcards.length > 0) {
                    await initializeChapterForSRS(ch.id, ch.flashcards.length);
                }
            }

            // Get due cards with flashcard content
            const due = await getDueCards();
            const cardsWithContent = due.map(card => {
                const chapter = POLITY_REVISION_CHAPTERS.find(ch => ch.id === card.chapterId);
                const flashcard = chapter?.flashcards?.[card.flashcardIdx];
                return {
                    ...card,
                    flashcard: flashcard as Flashcard,
                    chapterTitle: chapter?.title || 'Unknown Chapter'
                };
            }).filter(c => c.flashcard);

            setDueCards(cardsWithContent);

            const sessionStats = await getSRSStats();
            setStats(sessionStats);

            setIsInitializing(false);
        };

        loadSRSSession();
    }, []);

    const handleQualityRating = async (quality: Quality) => {
        const currentCard = dueCards[currentIdx];

        // Update SRS data
        await reviewCard(currentCard.chapterId, currentCard.flashcardIdx, quality);

        // Update session stats
        if (quality >= 3) {
            setSessionStats(prev => ({ ...prev, correct: prev.correct + 1 }));
        } else {
            setSessionStats(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
        }

        // Move to next card or complete
        if (currentIdx >= dueCards.length - 1) {
            setSessionComplete(true);
        } else {
            setCurrentIdx(prev => prev + 1);
            setShowAnswer(false);
        }
    };

    const restartSession = async () => {
        setIsInitializing(true);
        // Refresh due cards
        const due = await getDueCards();
        const cardsWithContent = due.map(card => {
            const chapter = POLITY_REVISION_CHAPTERS.find(ch => ch.id === card.chapterId);
            const flashcard = chapter?.flashcards?.[card.flashcardIdx];
            return {
                ...card,
                flashcard: flashcard as Flashcard,
                chapterTitle: chapter?.title || 'Unknown Chapter'
            };
        }).filter(c => c.flashcard);

        setDueCards(cardsWithContent);
        setCurrentIdx(0);
        setShowAnswer(false);
        setSessionComplete(false);
        setSessionStats({ correct: 0, incorrect: 0 });

        const sessionStats = await getSRSStats();
        setStats(sessionStats);

        setIsInitializing(false);
    };

    // Loading state
    if (isInitializing) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-[#030303] dark:via-[#050510] dark:to-[#030303] flex items-center justify-center">
                <div className="text-center">
                    <Brain className="w-12 h-12 text-indigo-600 mx-auto mb-4 animate-pulse" />
                    <p className="text-muted-foreground">Preparing your smart review session...</p>
                </div>
            </div>
        );
    }

    // No cards due
    if (dueCards.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-[#030303] dark:via-[#050510] dark:to-[#030303] flex items-center justify-center p-6">
                <div className="bg-card dark:bg-[#111] rounded-3xl border border-border p-8 max-w-md w-full text-center shadow-xl">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                        <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-2xl font-black text-foreground mb-2">All Caught Up!</h1>
                    <p className="text-muted-foreground mb-6">No flashcards are due for review right now. Come back later or start a regular session.</p>
                    <div className="space-y-3">
                        <Link
                            href="/student/batch1/polity/revision/quick"
                            className="block w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all"
                        >
                            Try Quick Revision
                        </Link>
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

    // Session complete
    if (sessionComplete) {
        const successRate = Math.round((sessionStats.correct / (sessionStats.correct + sessionStats.incorrect)) * 100);
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-[#030303] dark:via-[#050510] dark:to-[#030303] flex items-center justify-center p-6">
                <div className="bg-card dark:bg-[#111] rounded-3xl border border-border p-8 max-w-md w-full text-center shadow-xl">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                        <Brain className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-2xl font-black text-foreground mb-2">SRS Session Complete!</h1>
                    <p className="text-muted-foreground mb-6">{dueCards.length} cards reviewed</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-4">
                            <div className="text-3xl font-black text-emerald-600">{sessionStats.correct}</div>
                            <div className="text-sm text-emerald-600">Recalled</div>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-4">
                            <div className="text-3xl font-black text-red-600">{sessionStats.incorrect}</div>
                            <div className="text-sm text-red-600">Forgot</div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="text-5xl font-black text-foreground mb-2">{successRate}%</div>
                        <div className="text-muted-foreground">Retention Rate</div>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={restartSession}
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                            <RefreshCcw className="w-5 h-5" />
                            Review Again
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

    const currentCard = dueCards[currentIdx];
    const progress = ((currentIdx + 1) / dueCards.length) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-[#030303] dark:via-[#050510] dark:to-[#030303] pb-20">
            {/* Header */}
            <div className="bg-card dark:bg-[#0a0a0a] border-b border-border sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/student/batch1/polity/revision" className="text-muted-foreground hover:text-muted-foreground flex items-center gap-1">
                        <ChevronLeft className="w-4 h-4" />
                        Exit
                    </Link>
                    <div className="text-center">
                        <div className="flex items-center gap-2 text-indigo-600">
                            <Brain className="w-4 h-4" />
                            <span className="text-sm font-bold">Smart Review (SRS)</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-emerald-600 text-sm">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="font-bold">{sessionStats.correct}</span>
                        </div>
                        <div className="flex items-center gap-1 text-red-600 text-sm">
                            <XCircle className="w-4 h-4" />
                            <span className="font-bold">{sessionStats.incorrect}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Progress */}
                <div className="mb-6">
                    <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-muted-foreground">{currentIdx + 1} of {dueCards.length}</span>
                        <span className="text-indigo-600 font-medium">
                            Next review: {currentCard.interval === 0 ? 'New' : `${currentCard.interval}d`}
                        </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* SRS Info */}
                <div className="text-center text-sm text-indigo-600 font-medium mb-2">
                    {currentCard.chapterTitle}
                </div>
                <div className="flex items-center justify-center gap-3 mb-6 text-xs text-muted-foreground">
                    <span>Ease: {currentCard.easeFactor.toFixed(2)}</span>
                    <span>•</span>
                    <span>Reps: {currentCard.repetitions}</span>
                    <span>•</span>
                    <span>Interval: {currentCard.interval}d</span>
                </div>

                {/* Flashcard */}
                <div
                    onClick={() => !showAnswer && setShowAnswer(true)}
                    className={`bg-card dark:bg-[#111] rounded-3xl border border-border p-8 min-h-[300px] shadow-xl flex flex-col items-center justify-center ${!showAnswer ? 'cursor-pointer' : ''}`}
                >
                    {!showAnswer ? (
                        <>
                            <div className="text-sm text-muted-foreground mb-4">QUESTION</div>
                            <div className="text-xl font-bold text-center text-foreground">
                                {currentCard.flashcard.question}
                            </div>
                            <div className="mt-6 text-sm text-muted-foreground">Tap to reveal answer</div>
                        </>
                    ) : (
                        <>
                            <div className="text-sm text-emerald-500 mb-4">ANSWER</div>
                            <div className="text-lg text-muted-foreground dark:text-muted-foreground text-center">
                                {currentCard.flashcard.answer}
                            </div>
                        </>
                    )}
                </div>

                {/* Quality Rating Buttons */}
                {showAnswer && (
                    <div className="mt-6 space-y-3">
                        <div className="text-center text-sm text-muted-foreground mb-4">How well did you remember?</div>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => handleQualityRating(0)}
                                className="p-4 rounded-xl bg-red-100 dark:bg-red-900/20 text-red-600 font-bold hover:bg-red-200 transition-all text-sm"
                            >
                                ❌ Blackout
                            </button>
                            <button
                                onClick={() => handleQualityRating(2)}
                                className="p-4 rounded-xl bg-orange-100 dark:bg-orange-900/20 text-orange-600 font-bold hover:bg-orange-200 transition-all text-sm"
                            >
                                🤔 Hard
                            </button>
                            <button
                                onClick={() => handleQualityRating(4)}
                                className="p-4 rounded-xl bg-lime-100 dark:bg-lime-900/20 text-lime-600 font-bold hover:bg-lime-200 transition-all text-sm"
                            >
                                👍 Good
                            </button>
                            <button
                                onClick={() => handleQualityRating(5)}
                                className="p-4 rounded-xl bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 font-bold hover:bg-emerald-200 transition-all text-sm"
                            >
                                🎯 Perfect
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
