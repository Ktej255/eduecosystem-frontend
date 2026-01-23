import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, BookOpen, Sparkles, Timer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SubTopic } from '@/components/batch1/polity/data/polity-subtopics';
import { getFlashcardsForSubtopics } from '@/components/batch1/polity/data/polity-flashcards-data';
import { useFlashcardShortcuts } from '@/hooks/useKeyboardShortcuts';
import KeyboardShortcutsHelp from '@/components/common/KeyboardShortcutsHelp';
import VoiceRecallSession from '@/components/batch1-1/voice/VoiceRecallSession';
import { Mic, RotateCcw } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { initializeSRSCard, processReview } from '@/lib/srs/srs-engine';
import { getSRSData, saveSRSData } from '@/lib/srs/srs-storage';
import { UIRating } from '@/lib/srs/srs-types';

// Flexible Flashcard Interface to handle both data sources
export interface FlexibleFlashcard {
    id: string;
    subtopicId?: string;
    front?: string;
    back?: string;
    question?: string;
    answer?: string;
    category?: string;
    source?: string;
    [key: string]: any;
}

// Temporary flashcard generator (fallback if no real data)
function generateFlashcardsForSubtopics(subtopics: SubTopic[]): FlexibleFlashcard[] {
    const realCards = getFlashcardsForSubtopics(subtopics.map(s => s.id));
    if (realCards.length > 0) {
        // Randomize and take up to 10
        if (realCards.length > 10) {
            return realCards.sort(() => 0.5 - Math.random()).slice(0, 10);
        }
        return realCards;
    }

    // This generates placeholder flashcards
    const flashcards: FlexibleFlashcard[] = [];

    subtopics.forEach((subtopic, index) => {
        flashcards.push({
            id: `fc_${subtopic.id}_1`,
            subtopicId: subtopic.id,
            question: `What are the key points of "${subtopic.label}"?`,
            answer: `Key aspects of ${subtopic.label} include constitutional provisions, historical context, and practical applications.`
        });

        if (index < 5) {
            flashcards.push({
                id: `fc_${subtopic.id}_2`,
                subtopicId: subtopic.id,
                question: `Explain the significance of "${subtopic.label}" in Indian Polity.`,
                answer: `The significance of ${subtopic.label} lies in its constitutional importance and relevance to UPSC.`
            });
        }
    });

    return flashcards.slice(0, 10);
}

interface CycleFlashcardsProps {
    selectedSubtopics: SubTopic[];
    onComplete: (viewedCount: number) => void;
    cycleNumber: number;
    preloadedCards?: any[]; // Accept any format
    canSkip?: boolean;
    skipsRemaining?: number;
    onSkip?: () => void;
}

export default function CycleFlashcards({
    selectedSubtopics,
    onComplete,
    cycleNumber,
    preloadedCards,
    canSkip = false,
    skipsRemaining = 0,
    onSkip
}: CycleFlashcardsProps) {
    const flashcards = useMemo(() => {
        if (preloadedCards && preloadedCards.length > 0) return preloadedCards;
        return generateFlashcardsForSubtopics(selectedSubtopics);
    }, [selectedSubtopics, preloadedCards]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [viewedCards, setViewedCards] = useState<Set<string>>(new Set());
    const [timeLeft, setTimeLeft] = useState(15);
    const [isVoiceMode, setIsVoiceMode] = useState(false);
    const [isSRSMode, setIsSRSMode] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const currentCard = flashcards[currentIndex];
    const progress = ((currentIndex + 1) / flashcards.length) * 100;

    // Get display text regardless of format
    const getFront = (card: any) => card.front || card.question || "Question Missing";
    const getBack = (card: any) => card.back || card.answer || "Answer Missing";

    // Timer logic
    useEffect(() => {
        // Disable timer in voice mode
        if (isVoiceMode) {
            setTimeLeft(0); // Show 0 or invalid
            if (timerRef.current) clearInterval(timerRef.current);
            return;
        }

        setTimeLeft(15);
        if (timerRef.current) clearInterval(timerRef.current);

        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    if (timerRef.current) clearInterval(timerRef.current);
                    handleAutoNext();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [currentIndex, isVoiceMode]);

    const handleAutoNext = () => {
        // Option specific logic could go here
    };

    // Watch for timer hitting 0
    useEffect(() => {
        if (timeLeft === 0) {
            handleFlipAndNext();
        }
    }, [timeLeft]);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
        if (!viewedCards.has(currentCard.id)) {
            setViewedCards(prev => new Set([...prev, currentCard.id]));
        }
    };

    const handleFlipAndNext = () => {
        // If not flipped, flip first, then wait briefly? 
        // For auto-advance, we just move to next. User can navigate back.
        handleNext();
    };

    const handleNext = () => {
        if (currentIndex < flashcards.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setIsFlipped(false);
        } else {
            onComplete(viewedCards.size);
        }
    };

    const handleRate = (rating: UIRating) => {
        // SRS Logic
        const cardId = currentCard.id.toString();
        const srsData = getSRSData();
        let srsCard = srsData.cards[cardId];

        if (!srsCard) {
            srsCard = initializeSRSCard(cardId, getFront(currentCard) || '', getBack(currentCard) || '', currentCard.subtopicId);
        }

        // Just use a default response time for now (e.g. 5000ms or try to track actual time)
        const { updatedCard } = processReview(srsCard, rating, 5000);

        srsData.cards[cardId] = updatedCard;
        saveSRSData(srsData);

        // Move to next
        handleNext();
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setIsFlipped(false);
        }
    };

    // Keyboard shortcuts
    useFlashcardShortcuts(
        () => setIsFlipped(prev => !prev),
        handleNext,
        handlePrev,
        undefined,
        true
    );

    if (!flashcards || flashcards.length === 0) {
        return (
            <Card className="p-8 text-center text-gray-500">
                <p>No flashcards available for selected subtopics.</p>
                <Button onClick={() => onComplete(0)} className="mt-4">Continue</Button>
            </Card>
        );
    }

    return (
        <div className="animate-in fade-in duration-300">
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
                <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-amber-500" />
                            <span className="font-bold text-amber-700 dark:text-amber-300">
                                Cycle {cycleNumber} Flashcards
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Label htmlFor="voice-mode" className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                    Voice Mode
                                </Label>
                                <Switch
                                    id="voice-mode"
                                    checked={isVoiceMode}
                                    onCheckedChange={setIsVoiceMode}
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <Label htmlFor="srs-mode" className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                    SRS
                                </Label>
                                <Switch
                                    id="srs-mode"
                                    checked={isSRSMode}
                                    onCheckedChange={setIsSRSMode}
                                />
                            </div>
                            <div className="flex items-center gap-1.5 text-orange-600 dark:text-orange-400 font-mono font-bold bg-orange-100 dark:bg-orange-900/40 px-3 py-1 rounded-full">
                                <Timer className="h-4 w-4" />
                                <span>{timeLeft}s</span>
                            </div>
                            <span className="text-sm text-amber-600 dark:text-amber-400">
                                {currentIndex + 1} / {flashcards.length}
                            </span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-6 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {isVoiceMode ? (
                        <VoiceRecallSession
                            card={currentCard}
                            onNext={handleNext}
                            onComplete={(score) => {
                                // Logic to record score/XP could go here
                            }}
                        />
                    ) : (
                        <>
                            {/* Flashcard */}
                            <div
                                onClick={handleFlip}
                                className="cursor-pointer perspective-1000 h-[400px]"
                            >
                                <div className={`relative w-full h-full transition-transform duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                                    {/* Front (Question) */}
                                    <div className={`absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl border-2 border-amber-200 dark:border-amber-800 p-6 shadow-lg backface-hidden flex flex-col ${isFlipped ? 'invisible' : ''}`}>
                                        <span className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
                                            Question
                                        </span>
                                        <div className="flex-1 flex items-center justify-center text-center">
                                            <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                                {getFront(currentCard)}
                                            </p>
                                        </div>
                                        <p className="text-xs text-amber-500 text-center mt-4">
                                            Tap to reveal answer
                                        </p>
                                    </div>

                                    {/* Back (Answer) */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl border-2 border-amber-300 dark:border-amber-700 p-6 shadow-lg backface-hidden rotate-y-180 flex flex-col ${!isFlipped ? 'invisible' : ''}`}>
                                        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
                                            Answer
                                        </span>
                                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                                            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                                                {getBack(currentCard)}
                                            </p>
                                        </div>
                                        <p className="text-xs text-amber-500 text-center mt-4">
                                            Tap to see question
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* SRS Buttons */}
                            {isFlipped && isSRSMode && !isVoiceMode && (
                                <div className="grid grid-cols-4 gap-2 mt-4 mb-4 animate-in fade-in slide-in-from-bottom-2">
                                    <Button
                                        variant="outline"
                                        className="bg-white border-red-200 hover:bg-red-50 text-red-700 dark:bg-gray-800 dark:border-red-800 dark:hover:bg-red-900/20"
                                        onClick={(e) => { e.stopPropagation(); handleRate('again'); }}
                                    >
                                        Again
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="bg-white border-amber-200 hover:bg-amber-50 text-amber-700 dark:bg-gray-800 dark:border-amber-800 dark:hover:bg-amber-900/20"
                                        onClick={(e) => { e.stopPropagation(); handleRate('hard'); }}
                                    >
                                        Hard
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="bg-white border-blue-200 hover:bg-blue-50 text-blue-700 dark:bg-gray-800 dark:border-blue-800 dark:hover:bg-blue-900/20"
                                        onClick={(e) => { e.stopPropagation(); handleRate('good'); }}
                                    >
                                        Good
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="bg-white border-green-200 hover:bg-green-50 text-green-700 dark:bg-gray-800 dark:border-green-800 dark:hover:bg-green-900/20"
                                        onClick={(e) => { e.stopPropagation(); handleRate('easy'); }}
                                    >
                                        Easy
                                    </Button>
                                </div>
                            )}

                            {/* Navigation */}
                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-amber-100 dark:border-amber-800">
                                <Button
                                    variant="outline"
                                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                                    disabled={currentIndex === 0}
                                    className="border-amber-300"
                                >
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Previous
                                </Button>

                                {onSkip && (
                                    <Button
                                        variant="ghost"
                                        onClick={(e) => { e.stopPropagation(); onSkip(); handleNext(); }}
                                        disabled={!canSkip}
                                        className="text-amber-600 hover:text-amber-800 hover:bg-amber-100 dark:text-amber-400 dark:hover:text-amber-200 dark:hover:bg-amber-900/30"
                                        title={canSkip ? "Skip this card" : "No skips remaining"}
                                    >
                                        Skip ({skipsRemaining})
                                    </Button>
                                )}

                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        {viewedCards.size} reviewed
                                    </span>
                                </div>

                                <Button
                                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                                    className="bg-amber-600 hover:bg-amber-700 text-white"
                                >
                                    {currentIndex === flashcards.length - 1 ? 'Complete' : 'Next'}
                                    {currentIndex < flashcards.length - 1 && <ChevronRight className="h-4 w-4 ml-1" />}
                                </Button>
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>
            <div className="mt-4 flex justify-center">
                <KeyboardShortcutsHelp context="flashcard" compact={true} />
            </div>
        </div>
    );
}
