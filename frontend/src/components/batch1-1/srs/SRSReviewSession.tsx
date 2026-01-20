"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
    Brain,
    RotateCcw,
    ChevronRight,
    Clock,
    CheckCircle2,
    XCircle,
    Zap,
    Trophy,
    BarChart3
} from 'lucide-react';
import {
    SRSCard,
    UIRating,
    getDueCards,
    processReview,
    getNextReviewText,
    getAllCards,
    saveCard,
    saveReview,
    getReviewStats,
    importFlashcards
} from '@/lib/srs';

interface SRSReviewSessionProps {
    onComplete?: () => void;
    onBack?: () => void;
    preloadCards?: Array<{ id: string; front?: string; back?: string; question?: string; answer?: string; subtopicId?: string }>;
}

export default function SRSReviewSession({ onComplete, onBack, preloadCards }: SRSReviewSessionProps) {
    const [dueCards, setDueCards] = useState<SRSCard[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [sessionStats, setSessionStats] = useState({
        reviewed: 0,
        correct: 0,
        incorrect: 0,
        startTime: Date.now()
    });
    const [isComplete, setIsComplete] = useState(false);
    const cardStartTime = useRef<number>(Date.now());

    // Load due cards
    useEffect(() => {
        // Import preloaded cards if provided
        if (preloadCards && preloadCards.length > 0) {
            importFlashcards(preloadCards);
        }

        // Get all due cards
        const allCards = getAllCards();
        const due = getDueCards(allCards);
        setDueCards(due);
    }, [preloadCards]);

    const currentCard = dueCards[currentIndex];
    const stats = useMemo(() => getReviewStats(), [sessionStats.reviewed]);

    // Reset timer when card changes
    useEffect(() => {
        cardStartTime.current = Date.now();
        setIsFlipped(false);
    }, [currentIndex]);

    const handleRating = (rating: UIRating) => {
        if (!currentCard) return;

        const responseTime = Date.now() - cardStartTime.current;
        const { updatedCard, review } = processReview(currentCard, rating, responseTime);

        // Save to storage
        saveCard(updatedCard);
        saveReview(review);

        // Update session stats
        const isCorrect = rating !== 'again';
        setSessionStats(prev => ({
            ...prev,
            reviewed: prev.reviewed + 1,
            correct: prev.correct + (isCorrect ? 1 : 0),
            incorrect: prev.incorrect + (isCorrect ? 0 : 1)
        }));

        // Move to next card or complete
        if (currentIndex + 1 < dueCards.length) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setIsComplete(true);
        }
    };

    const handleFlip = () => {
        setIsFlipped(true);
    };

    // Calculate session accuracy
    const accuracy = sessionStats.reviewed > 0
        ? Math.round((sessionStats.correct / sessionStats.reviewed) * 100)
        : 0;

    const sessionDuration = Math.floor((Date.now() - sessionStats.startTime) / 1000 / 60);

    // Empty state
    if (dueCards.length === 0 && !isComplete) {
        return (
            <div className="max-w-2xl mx-auto p-6">
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200">
                    <CardContent className="p-8 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center">
                            <Trophy className="h-10 w-10 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
                            All Caught Up!
                        </h2>
                        <p className="text-green-600 dark:text-green-400 mb-6">
                            No cards due for review right now. Come back later!
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4">
                                <div className="text-2xl font-bold text-green-700">{stats.masteredCards}</div>
                                <div className="text-sm text-green-600">Mastered</div>
                            </div>
                            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4">
                                <div className="text-2xl font-bold text-blue-700">{stats.retentionRate}%</div>
                                <div className="text-sm text-blue-600">Retention</div>
                            </div>
                        </div>
                        {onBack && (
                            <Button onClick={onBack} variant="outline">
                                Back to Dashboard
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Session complete
    if (isComplete) {
        return (
            <div className="max-w-2xl mx-auto p-6">
                <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-indigo-200">
                    <CardContent className="p-8 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-800/50 flex items-center justify-center">
                            <CheckCircle2 className="h-10 w-10 text-indigo-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-2">
                            Session Complete!
                        </h2>
                        <p className="text-indigo-600 dark:text-indigo-400 mb-6">
                            Great job reviewing your flashcards!
                        </p>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4">
                                <div className="text-2xl font-bold text-indigo-700">{sessionStats.reviewed}</div>
                                <div className="text-sm text-indigo-600">Reviewed</div>
                            </div>
                            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4">
                                <div className="text-2xl font-bold text-green-700">{accuracy}%</div>
                                <div className="text-sm text-green-600">Accuracy</div>
                            </div>
                            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4">
                                <div className="text-2xl font-bold text-blue-700">{sessionDuration}m</div>
                                <div className="text-sm text-blue-600">Duration</div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4">
                            {onBack && (
                                <Button onClick={onBack} variant="outline">
                                    Back to Dashboard
                                </Button>
                            )}
                            {onComplete && (
                                <Button onClick={onComplete} className="bg-indigo-600 hover:bg-indigo-700">
                                    Continue <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Main review UI
    return (
        <div className="max-w-2xl mx-auto p-6 space-y-4">
            {/* Progress Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-indigo-600" />
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                        SRS Review
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <Badge variant="outline" className="gap-1">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        {sessionStats.correct}
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                        <XCircle className="h-3 w-3 text-red-500" />
                        {sessionStats.incorrect}
                    </Badge>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1">
                <div className="flex justify-between text-sm text-gray-500">
                    <span>Card {currentIndex + 1} of {dueCards.length}</span>
                    <span>{Math.round(((currentIndex + 1) / dueCards.length) * 100)}%</span>
                </div>
                <Progress value={((currentIndex + 1) / dueCards.length) * 100} className="h-2" />
            </div>

            {/* Flashcard */}
            <Card
                className={`min-h-[300px] cursor-pointer transition-all duration-300 ${isFlipped
                    ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
                    : 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20'
                    }`}
                onClick={!isFlipped ? handleFlip : undefined}
            >
                <CardContent className="p-8 flex flex-col items-center justify-center min-h-[300px]">
                    {!isFlipped ? (
                        <>
                            <Badge className="mb-4 bg-blue-600 text-white shadow-sm dark:bg-blue-100 dark:text-blue-700">Question</Badge>
                            <div className="text-xl text-center font-bold text-slate-900 dark:text-gray-100 leading-relaxed space-y-2">
                                {currentCard?.front?.split(/(\d+\.\s|(?:\(?[ivx]+\)?)\.\s)/g).map((part, i, arr) => {
                                    if (!part) return null;
                                    if (/^(\d+\.\s|(?:\(?[ivx]+\)?)\.\s)$/.test(part)) {
                                        return <div key={i} className="flex gap-2 justify-center">
                                            <span className="font-bold text-blue-600 dark:text-blue-400 shrink-0">{part}</span>
                                            <span>{arr[i + 1]}</span>
                                        </div>;
                                    }
                                    if (i > 0 && /^(\d+\.\s|(?:\(?[ivx]+\)?)\.\s)$/.test(arr[i - 1])) return null;
                                    return <p key={i}>{part}</p>;
                                })}
                            </div>
                            <p className="mt-6 text-sm text-slate-500 dark:text-gray-400 font-medium flex items-center gap-1">
                                <RotateCcw className="h-4 w-4" /> Tap to reveal answer
                            </p>
                        </>
                    ) : (
                        <>
                            <Badge className="mb-4 bg-green-600 text-white shadow-sm dark:bg-green-100 dark:text-green-700">Answer</Badge>
                            <div className="text-xl text-center font-bold text-slate-900 dark:text-gray-100 leading-relaxed space-y-2">
                                {currentCard?.back?.split(/(\d+\.\s|(?:\(?[ivx]+\)?)\.\s)/g).map((part, i, arr) => {
                                    if (!part) return null;
                                    if (/^(\d+\.\s|(?:\(?[ivx]+\)?)\.\s)$/.test(part)) {
                                        return <div key={i} className="flex gap-2 justify-center">
                                            <span className="font-bold text-emerald-600 dark:text-emerald-400 shrink-0">{part}</span>
                                            <span>{arr[i + 1]}</span>
                                        </div>;
                                    }
                                    if (i > 0 && /^(\d+\.\s|(?:\(?[ivx]+\)?)\.\s)$/.test(arr[i - 1])) return null;
                                    return <p key={i}>{part}</p>;
                                })}
                            </div>
                            <div className="mt-4 text-xs text-gray-400">
                                Next review: {getNextReviewText(currentCard)}
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>

            {/* Rating Buttons (only show when flipped) */}
            {isFlipped && (
                <div className="grid grid-cols-4 gap-2">
                    <Button
                        onClick={() => handleRating('again')}
                        className="bg-red-500 hover:bg-red-600 text-white flex flex-col py-4 h-auto"
                    >
                        <span className="font-bold">Again</span>
                        <span className="text-xs opacity-80">&lt;1min</span>
                    </Button>
                    <Button
                        onClick={() => handleRating('hard')}
                        className="bg-orange-500 hover:bg-orange-600 text-white flex flex-col py-4 h-auto"
                    >
                        <span className="font-bold">Hard</span>
                        <span className="text-xs opacity-80">1 day</span>
                    </Button>
                    <Button
                        onClick={() => handleRating('good')}
                        className="bg-green-500 hover:bg-green-600 text-white flex flex-col py-4 h-auto"
                    >
                        <span className="font-bold">Good</span>
                        <span className="text-xs opacity-80">{currentCard?.interval || 1} days</span>
                    </Button>
                    <Button
                        onClick={() => handleRating('easy')}
                        className="bg-blue-500 hover:bg-blue-600 text-white flex flex-col py-4 h-auto"
                    >
                        <span className="font-bold">Easy</span>
                        <span className="text-xs opacity-80">{Math.round((currentCard?.interval || 1) * 1.3)} days</span>
                    </Button>
                </div>
            )}

            {/* Stats Footer */}
            <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                        <BarChart3 className="h-4 w-4" />
                        Retention: {stats.retentionRate}%
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {sessionDuration}m
                    </span>
                </div>
                {onBack && (
                    <Button variant="ghost" size="sm" onClick={onBack}>
                        Exit Session
                    </Button>
                )}
            </div>
        </div>
    );
}
