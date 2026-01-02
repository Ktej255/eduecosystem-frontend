"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    RotateCcw,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    XCircle,
    Sparkles,
    BookOpen,
    Lightbulb,
    ArrowLeft,
    Mic,
    Loader2
} from "lucide-react";
import { Flashcard, generateFlashcardsFromTopic, getFlashcardsForDay, shuffleArray } from "./flashcard-utils";
import VoiceRecorder from "../../ui/VoiceRecorder";
import { toast } from "sonner";

import { POLITY_TOPICS } from "../polity/data/polity-registry";
import { getFlashcardDataForDay, hasFlashcardContent } from "../content-registry";

// Map topics by ID for easy lookup
const TOPIC_MAP: Record<number, any> = {};
POLITY_TOPICS.forEach(topic => {
    TOPIC_MAP[topic.id] = topic;
});

interface FlashcardSessionProps {
    cycleId: number;
    day: number;
    onClose: () => void;
}

export default function FlashcardSession({ cycleId, day, onClose }: FlashcardSessionProps) {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [knownCards, setKnownCards] = useState<Set<string>>(new Set());
    const [practiceCards, setPracticeCards] = useState<Set<string>>(new Set());
    const [sessionComplete, setSessionComplete] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isRecordingMode, setIsRecordingMode] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [aiResult, setAiResult] = useState<{
        transcription: string;
        is_correct: boolean;
        score: number;
        feedback: string;
        key_points_mentioned: string[];
        missing_points: string[];
    } | null>(null);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://a7z4kjysmp.us-east-1.awsapprunner.com/api/v1";

    useEffect(() => {
        loadFlashcards();
    }, [cycleId, day]);

    const loadFlashcards = () => {
        const d = typeof day === 'string' ? parseInt(day) : day;
        const c = typeof cycleId === 'string' ? parseInt(cycleId) : cycleId;

        console.log(`[FlashcardSession] Loading: cycleId=${c}, day=${d}`);
        setLoading(true);
        try {
            let cardsToSet: Flashcard[] = [];

            // Check content registry for pre-built flashcard sets
            if (hasFlashcardContent(d)) {
                console.log(`[FlashcardSession] Loading flashcards from registry for Day ${d}`);
                const registryCards = getFlashcardDataForDay(c, d);
                if (registryCards && registryCards.length > 0) {
                    cardsToSet = [...registryCards];
                } else {
                    console.warn(`[FlashcardSession] Registry returned empty for Day ${d}. Falling back to dynamic generation.`);
                }
            }

            // Fallback or default: Generate dynamically from topic data
            if (cardsToSet.length === 0) {
                console.log("[FlashcardSession] Generating flashcards from topic mapping");
                const { topicIds } = getFlashcardsForDay(c, d);

                topicIds.forEach(topicId => {
                    const topic = TOPIC_MAP[topicId];
                    if (topic) {
                        const cards = generateFlashcardsFromTopic(topic);
                        cardsToSet.push(...cards);
                    }
                });
            }

            if (cardsToSet.length > 0) {
                setFlashcards(shuffleArray(cardsToSet));
            } else {
                console.error("[FlashcardSession] No flashcards found for Day", d);
                setFlashcards([]);
            }
        } catch (error) {
            console.error("[FlashcardSession] Error loading flashcards:", error);
            setFlashcards([]);
        } finally {
            setLoading(false);
        }
    };


    const currentCard = flashcards[currentIndex];
    const progress = flashcards.length > 0
        ? ((knownCards.size + practiceCards.size) / flashcards.length) * 100
        : 0;

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleKnown = () => {
        if (currentCard) {
            setKnownCards(prev => new Set(prev).add(currentCard.id));
            goToNext();
        }
    };

    const handleNeedPractice = () => {
        if (currentCard) {
            setPracticeCards(prev => new Set(prev).add(currentCard.id));
            goToNext();
        }
    };

    const goToNext = () => {
        setIsFlipped(false);
        setIsRecordingMode(false);
        setAiResult(null);
        if (currentIndex < flashcards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setSessionComplete(true);
        }
    };

    const goToPrevious = () => {
        setIsFlipped(false);
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const restartSession = () => {
        setCurrentIndex(0);
        setIsFlipped(false);
        setKnownCards(new Set());
        setPracticeCards(new Set());
        setSessionComplete(false);
        setFlashcards(shuffleArray(flashcards));
    };

    const handleAudioRecording = async (base64Audio: string) => {
        setIsAnalyzing(true);
        try {
            const response = await fetch(`${API_URL}/api/v1/audio-analysis/analyze-flashcard`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    audio_base64: base64Audio,
                    card_front: currentCard.front,
                    card_back: currentCard.back,
                    topic: currentCard.source
                })
            });

            if (!response.ok) throw new Error("Analysis failed");

            const result = await response.json();
            setAiResult(result);
            if (result.score >= 70) {
                setKnownCards(prev => new Set(prev).add(currentCard.id));
            } else {
                setPracticeCards(prev => new Set(prev).add(currentCard.id));
            }
        } catch (error) {
            console.error("Audio analysis error:", error);
            toast.error("Failed to analyze audio. Please try again.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'concept': return <Lightbulb className="h-4 w-4" />;
            case 'fact': return <Sparkles className="h-4 w-4" />;
            case 'article': return <BookOpen className="h-4 w-4" />;
            default: return <BookOpen className="h-4 w-4" />;
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'concept': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
            case 'fact': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
            case 'article': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading flashcards...</p>
                </div>
            </div>
        );
    }

    if (flashcards.length === 0) {
        return (
            <div className="text-center py-12">
                <BookOpen className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    No Flashcards Available
                </h3>
                <p className="text-gray-500 mb-4">
                    Topic content for Day {day} is being prepared.
                </p>
                <Button variant="outline" onClick={onClose}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                </Button>
            </div>
        );
    }

    if (sessionComplete) {
        const accuracy = flashcards.length > 0
            ? Math.round((knownCards.size / flashcards.length) * 100)
            : 0;

        return (
            <div className="text-center py-8 space-y-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Session Complete! 🎉
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        You reviewed all {flashcards.length} flashcards
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <Card className="bg-green-50 dark:bg-green-900/20 border-green-200">
                        <CardContent className="p-4 text-center">
                            <div className="text-3xl font-bold text-green-600">{knownCards.size}</div>
                            <div className="text-sm text-green-700">I Know This</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200">
                        <CardContent className="p-4 text-center">
                            <div className="text-3xl font-bold text-amber-600">{practiceCards.size}</div>
                            <div className="text-sm text-amber-700">Need Practice</div>
                        </CardContent>
                    </Card>
                </div>

                <div className="text-4xl font-bold text-pink-600">
                    {accuracy}% Confidence
                </div>

                <div className="flex gap-4 justify-center pt-4">
                    <Button variant="outline" onClick={restartSession}>
                        <RotateCcw className="mr-2 h-4 w-4" /> Review Again
                    </Button>
                    <Button className="bg-pink-600 hover:bg-pink-700" onClick={onClose}>
                        Continue to Q&A
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header with Progress */}
            <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" onClick={onClose}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <div className="text-sm text-gray-500">
                    Card {currentIndex + 1} of {flashcards.length}
                </div>
            </div>

            <Progress value={progress} className="h-2" />

            <div className="flex justify-center gap-4 text-sm">
                <span className="flex items-center gap-1 text-green-600">
                    <CheckCircle2 className="h-4 w-4" /> {knownCards.size} Known
                </span>
                <span className="flex items-center gap-1 text-amber-600">
                    <XCircle className="h-4 w-4" /> {practiceCards.size} Practice
                </span>
            </div>

            {/* Flashcard */}
            <div
                className="perspective-1000 cursor-pointer mx-auto max-w-2xl"
                onClick={handleFlip}
            >
                <div
                    className={`relative transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''
                        }`}
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        transition: 'transform 0.5s'
                    }}
                >
                    {/* Front of Card */}
                    <Card
                        className={`min-h-[300px] ${isFlipped ? 'invisible' : 'visible'} ${currentCard?.highlight ? 'border-2 border-amber-400' : ''
                            }`}
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <CardContent className="p-8 flex flex-col items-center justify-center min-h-[300px]">
                            <div className={`px-3 py-1 rounded-full text-xs font-medium mb-6 flex items-center gap-1 ${getCategoryColor(currentCard?.category || '')}`}>
                                {getCategoryIcon(currentCard?.category || '')}
                                {currentCard?.category?.toUpperCase()}
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
                                {currentCard?.front}
                            </h2>

                            <p className="text-gray-400 mt-6 text-sm">
                                Tap to reveal answer
                            </p>


                            {/* Voice Recorder Overlay on Front */}
                            {isRecordingMode && !isFlipped && (
                                <div className="absolute inset-0 bg-white/95 dark:bg-black/95 rounded-xl z-20 flex flex-col items-center justify-center p-6 animate-in fade-in zoom-in duration-300">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                                        Explain this concept
                                    </h3>
                                    <div className="w-full max-w-sm bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
                                        <VoiceRecorder onRecordingComplete={async (audio) => {
                                            // Handle recording, THEN flip
                                            await handleAudioRecording(audio);
                                            setIsFlipped(true); // Flip to show answer + feedback
                                        }} />
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="mt-4 w-full text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsRecordingMode(false);
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                    <p className="mt-4 text-sm text-gray-500 text-center px-4">
                                        Record your explanation. AI will analyze your recall accuracy.
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Back of Card */}
                    <Card
                        className={`min-h-[300px] absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 ${isFlipped ? 'visible' : 'invisible'
                            }`}
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)'
                        }}
                    >
                        <CardContent className="p-8 flex flex-col items-center justify-center min-h-[300px]">
                            <div className="text-xs text-gray-500 mb-4 uppercase tracking-wider">
                                {currentCard?.source}
                            </div>

                            <p className="text-lg md:text-xl text-center text-gray-800 dark:text-gray-200 whitespace-pre-line">
                                {currentCard?.back}
                            </p>

                            {/* Removed Recorder from Back */}

                            {isAnalyzing && (
                                <div className="mt-6 flex flex-col items-center gap-2">
                                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                    <p className="text-sm text-gray-500 font-medium">AI Analyzing your recall...</p>
                                </div>
                            )}

                            {aiResult && (
                                <div className="mt-6 w-full space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className={`text-2xl font-bold ${aiResult.score >= 70 ? 'text-green-600' : 'text-amber-600'}`}>
                                                {aiResult.score}% Accuracy
                                            </div>
                                        </div>
                                        {aiResult.score >= 70 ? (
                                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-xs font-bold flex items-center gap-1">
                                                <CheckCircle2 className="h-3 w-3" /> MASTERED
                                            </span>
                                        ) : (
                                            <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-md text-xs font-bold flex items-center gap-1">
                                                <XCircle className="h-3 w-3" /> NEEDS PRACTICE
                                            </span>
                                        )}
                                    </div>

                                    <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                                        <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-2">"{aiResult.transcription}"</p>
                                        <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">{aiResult.feedback}</p>
                                    </div>

                                    {aiResult.missing_points.length > 0 && (
                                        <div className="text-xs">
                                            <span className="font-bold text-gray-500 uppercase tracking-wider">Missing Points:</span>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {aiResult.missing_points.map((p, i) => (
                                                    <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400">
                                                        {p}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
                <Button
                    variant="outline"
                    size="lg"
                    onClick={goToPrevious}
                    disabled={currentIndex === 0}
                >
                    <ChevronLeft className="h-5 w-5" />
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    className="border-amber-500 text-amber-600 hover:bg-amber-50"
                    onClick={handleNeedPractice}
                >
                    <XCircle className="mr-2 h-5 w-5" /> Need Practice
                </Button>

                <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 min-w-[160px]"
                    onClick={(e) => {
                        e.stopPropagation();
                        if (aiResult) {
                            goToNext();
                        } else {
                            setIsRecordingMode(true);
                            // Do not flip immediately. Wait for recording.
                        }
                    }}
                >
                    {aiResult ? (
                        <>Got it <ChevronRight className="ml-2 h-5 w-5" /></>
                    ) : (
                        <><Mic className="mr-2 h-5 w-5" /> Audio Explain</>
                    )}
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    onClick={() => { setIsFlipped(false); goToNext(); }}
                    disabled={currentIndex === flashcards.length - 1}
                >
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </div>

            {/* Tip */}
            <p className="text-center text-sm text-gray-500">
                💡 Tip: Try to recall the answer before flipping the card
            </p>
        </div >
    );
}
