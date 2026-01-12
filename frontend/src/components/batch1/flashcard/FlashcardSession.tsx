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
    Clock, // Added Clock Import
    Lightbulb,
    ArrowLeft,
    Mic,
    Loader2,
    AlertTriangle,
    TrendingUp,
    Target,
    BarChart3,
    Download,
    Shield,
    ScrollText
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

// Result for each card
interface CardResult {
    cardId: string;
    question: string;
    expectedAnswer: string;
    studentTranscript: string;
    score: number;
    feedback: string;
    keyPointsMentioned: string[];
    missingPoints: string[];
    source: string; // Topic name for grouping
    isCorrect: boolean;
    recordingDuration: number; // NEW: Duration in seconds
}

interface FlashcardSessionProps {
    cycleId: number;
    day: number;
    onClose: () => void;
}

export default function FlashcardSession({ cycleId, day, onClose }: FlashcardSessionProps) {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [selectedSubTopic, setSelectedSubTopic] = useState<string | null>(null); // NEW: Sub-topic selection for Day 9
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [knownCards, setKnownCards] = useState<Set<string>>(new Set());
    const [practiceCards, setPracticeCards] = useState<Set<string>>(new Set());
    const [sessionComplete, setSessionComplete] = useState(false);
    const [loading, setLoading] = useState(true);

    // Recording states
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

    // Timer states
    const [timeLeft, setTimeLeft] = useState(15);
    const [isTimerActive, setIsTimerActive] = useState(true);

    // Session tracking - store all results for comprehensive report
    const [cardResults, setCardResults] = useState<CardResult[]>([]);
    const [showDetailedReport, setShowDetailedReport] = useState(false);
    const [currentRecordingDuration, setCurrentRecordingDuration] = useState(0); // NEW: Track current recording duration

    // TIMER STATE

    // TIMER CONSTANTS
    const TOTAL_TIME = 15;

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://a7z4kjysmp.us-east-1.awsapprunner.com/api/v1";

    useEffect(() => {
        loadFlashcards();
    }, [cycleId, day, selectedSubTopic]);

    // TIMER LOGIC
    useEffect(() => {
        // Reset timer when card changes or flipped state changes
        if (!sessionComplete) {
            if (!isFlipped) {
                // Front: 15s Countdown
                setTimeLeft(TOTAL_TIME);
                setIsTimerActive(true);
            } else {
                // Back: User takes their time or we could auto-advance. 
                // User said "flash card is going to move in...". 
                // But usually we need time to read the answer. 
                // Let's pause timer on flip.
                setIsTimerActive(false);
            }
        }
    }, [currentIndex, isFlipped, sessionComplete]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isTimerActive && timeLeft > 0 && !isRecordingMode && !isAnalyzing && !sessionComplete && !isFlipped) {
            interval = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        handleTimerExpired();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isTimerActive, timeLeft, isRecordingMode, isAnalyzing, sessionComplete, isFlipped]);

    const handleTimerExpired = () => {
        if (currentCard) {
            // Auto-Flip and Mark as Practice
            setPracticeCards(prev => new Set(prev).add(currentCard.id));
            setIsFlipped(true);
            // Optional: Auto-advance after viewing back? 
            // The prompt says "flash card is going to move in". 
            // Let's add a small delay then auto-advance if they don't click anything.
            // Actually, let's leave it Flipped so they can read, but maybe show a "Time's Up!" toast?
            // "next flash card is going to be there" implies auto-move.
            // I'll set a timeout to Next.
            setTimeout(() => {
                // Check if still on same card (user might have clicked manual next)
                // This is tricky with closures. 
                // Simplest strict flow:
                // Time Up -> Flip -> Wait 4s -> Next.
                // But I need access to current state in timeout. Use ref? 
                // For now, simpler: Just Flip. Let user click Continue.
                // User requirement: "flash card is going to move in". I MUST Auto-Advance.
                // But I can't easily do it inside this closure without ref. 
                // I will add an Auto-Advance effect on FLIPPED state if it was triggered by timeout.
            }, 0);
        }
    };

    // Auto-advance effect after timeout flip
    useEffect(() => {
        if (isFlipped && timeLeft === 0 && !sessionComplete) {
            const timer = setTimeout(() => {
                goToNext();
            }, 5000); // 5 seconds to read answer then move
            return () => clearTimeout(timer);
        }
    }, [isFlipped, timeLeft, sessionComplete]);

    const loadFlashcards = () => {
        const d = typeof day === 'string' ? parseInt(day) : day;
        const c = typeof cycleId === 'string' ? parseInt(cycleId) : cycleId;

        // Day 9 Special Handling: Requies sub-topic selection
        if (d === 9 && !selectedSubTopic) {
            setLoading(false);
            return;
        }

        console.log(`[FlashcardSession] Loading: cycleId=${c}, day=${d}, subTopic=${selectedSubTopic}`);
        setLoading(true);
        try {
            let cardsToSet: Flashcard[] = [];

            // Check content registry for pre-built flashcard sets
            if (hasFlashcardContent(d)) {
                console.log(`[FlashcardSession] Loading flashcards from registry for Day ${d}`);
                const registryCards = getFlashcardDataForDay(c, d, selectedSubTopic || undefined);
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
        if (!isRecordingMode && !isAnalyzing) {
            setIsFlipped(!isFlipped);
        }
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
        setCardResults([]);
        setShowDetailedReport(false);
        setFlashcards(shuffleArray(flashcards));
    };

    const handleAudioRecording = async (base64Audio: string) => {
        setIsAnalyzing(true);
        const recordedDuration = currentRecordingDuration; // Capture duration before reset
        try {
            const response = await fetch(`${API_URL}/audio-analysis/analyze-flashcard`, {
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

            // Store result for session report
            const isCorrect = result.score >= 70;
            const cardResult: CardResult = {
                cardId: currentCard.id,
                question: currentCard.front,
                expectedAnswer: currentCard.back,
                studentTranscript: result.transcription || "",
                score: result.score,
                feedback: result.feedback || "",
                keyPointsMentioned: result.key_points_mentioned || [],
                missingPoints: result.missing_points || [],
                source: currentCard.source,
                isCorrect,
                recordingDuration: recordedDuration // NEW: Include duration
            };
            setCardResults(prev => [...prev, cardResult]);

            // Update known/practice cards
            if (isCorrect) {
                setKnownCards(prev => new Set(prev).add(currentCard.id));
            } else {
                setPracticeCards(prev => new Set(prev).add(currentCard.id));
            }

            // NOW flip to show answer
            setIsFlipped(true);
            setIsRecordingMode(false);
            setCurrentRecordingDuration(0); // Reset for next recording
        } catch (error) {
            console.error("Audio analysis error:", error);
            toast.error("Failed to analyze audio. Please try again.");
            setIsRecordingMode(false);
        } finally {
            setIsAnalyzing(false);
        }
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'concept': return <Lightbulb className="h-4 w-4" />;
            case 'fact': return <Sparkles className="h-4 w-4" />;
            case 'article': return <BookOpen className="h-4 w-4" />;
            case 'comparison': return <TrendingUp className="h-4 w-4" />;
            default: return <BookOpen className="h-4 w-4" />;
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'concept': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
            case 'fact': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
            case 'article': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
            case 'comparison': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    // Calculate topic-wise statistics for report
    const getTopicStats = () => {
        const topicMap: Record<string, { correct: number; total: number; avgScore: number; scores: number[] }> = {};

        cardResults.forEach(result => {
            if (!topicMap[result.source]) {
                topicMap[result.source] = { correct: 0, total: 0, avgScore: 0, scores: [] };
            }
            topicMap[result.source].total++;
            topicMap[result.source].scores.push(result.score);
            if (result.isCorrect) {
                topicMap[result.source].correct++;
            }
        });

        // Calculate averages
        Object.keys(topicMap).forEach(topic => {
            const scores = topicMap[topic].scores;
            topicMap[topic].avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        });

        return topicMap;
    };

    // Get weak topics (below 70% average)
    const getWeakTopics = () => {
        const stats = getTopicStats();
        return Object.entries(stats)
            .filter(([_, data]) => data.avgScore < 70)
            .sort((a, b) => a[1].avgScore - b[1].avgScore);
    };



    // DAY 9 SELECTION SCREEN
    if (day === 9 && !selectedSubTopic) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[600px] p-6 animate-in fade-in duration-500">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Day 9: Directive Principles & Fundamental Duties
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Please select a topic to begin your flashcard session.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                    {/* DPSP CARD */}
                    <Card
                        className="group relative overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-500"
                        onClick={() => setSelectedSubTopic('dpsp')}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CardContent className="p-8 flex flex-col items-center text-center h-full">
                            <div className="w-20 h-20 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <ScrollText className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                Directive Principles
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">
                                Part IV (Articles 36-51). Socialistic, Gandhian, and Liberal-Intellectual principles guiding the State.
                            </p>
                            <Button className="mt-auto w-full bg-purple-600 hover:bg-purple-700">
                                Start DPSP Session
                            </Button>
                        </CardContent>
                    </Card>

                    {/* FUNDAMENTAL DUTIES CARD */}
                    <Card
                        className="group relative overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-pink-500"
                        onClick={() => setSelectedSubTopic('fundamental-duties')}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CardContent className="p-8 flex flex-col items-center text-center h-full">
                            <div className="w-20 h-20 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Shield className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                Fundamental Duties
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">
                                Part IV-A (Article 51A). The moral obligations of all citizens to help promote a spirit of patriotism and to uphold the unity of India.
                            </p>
                            <Button className="mt-auto w-full bg-pink-600 hover:bg-pink-700">
                                Start Fundamental Duties Session
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <Button variant="ghost" className="mt-12 text-gray-500" onClick={onClose}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                </Button>
            </div>
        );
    }

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

    // SESSION COMPLETE VIEW with comprehensive report
    if (sessionComplete) {
        const totalAnswered = cardResults.length;
        const correctCount = cardResults.filter(r => r.isCorrect).length;
        const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
        const topicStats = getTopicStats();
        const weakTopics = getWeakTopics();
        const avgScore = totalAnswered > 0
            ? Math.round(cardResults.reduce((sum, r) => sum + r.score, 0) / totalAnswered)
            : 0;

        if (showDetailedReport) {
            // Detailed Report View
            return (
                <div className="space-y-6 max-h-[80vh] overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <Button variant="ghost" onClick={() => setShowDetailedReport(false)}>
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Summary
                        </Button>
                        <h2 className="text-xl font-bold">Detailed Performance Report</h2>
                    </div>

                    {/* Topic-wise Breakdown */}
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <BarChart3 className="h-5 w-5 text-primary" />
                                Topic-wise Performance
                            </h3>
                            <div className="space-y-4">
                                {Object.entries(topicStats).map(([topic, data]) => (
                                    <div key={topic} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium text-gray-700 dark:text-gray-300">{topic}</span>
                                            <span className={`text-sm font-bold ${data.avgScore >= 70 ? 'text-green-600' : 'text-amber-600'}`}>
                                                {data.avgScore}% ({data.correct}/{data.total})
                                            </span>
                                        </div>
                                        <Progress value={data.avgScore} className="h-2" />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Weak Areas */}
                    {weakTopics.length > 0 && (
                        <Card className="border-amber-200 bg-amber-50/50 dark:bg-amber-900/10">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-amber-700">
                                    <AlertTriangle className="h-5 w-5" />
                                    Areas Needing Improvement
                                </h3>
                                <div className="space-y-3">
                                    {weakTopics.map(([topic, data]) => (
                                        <div key={topic} className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                                            <div className="font-medium">{topic}</div>
                                            <div className="text-sm text-gray-500">
                                                Average Score: {data.avgScore}% • {data.correct}/{data.total} correct
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Individual Card Results */}
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Target className="h-5 w-5 text-primary" />
                                Individual Card Results
                            </h3>
                            <div className="space-y-4">
                                {cardResults.map((result, idx) => (
                                    <div key={result.cardId} className={`p-4 rounded-lg border ${result.isCorrect ? 'border-green-200 bg-green-50/50 dark:bg-green-900/10' : 'border-amber-200 bg-amber-50/50 dark:bg-amber-900/10'}`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs text-gray-500 uppercase">{result.source}</span>
                                            <span className={`text-sm font-bold ${result.isCorrect ? 'text-green-600' : 'text-amber-600'}`}>
                                                {result.score}%
                                            </span>
                                        </div>
                                        <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">{result.question}</p>
                                        {result.studentTranscript && (
                                            <p className="text-sm text-gray-600 italic mb-2">
                                                Your answer: &quot;{result.studentTranscript}&quot;
                                            </p>
                                        )}
                                        {result.missingPoints.length > 0 && (
                                            <div className="text-xs">
                                                <span className="text-amber-600 font-medium">Missing: </span>
                                                {result.missingPoints.join(", ")}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex gap-4 justify-center">
                        <Button variant="outline" onClick={restartSession}>
                            <RotateCcw className="mr-2 h-4 w-4" /> Practice Again
                        </Button>
                        <Button className="bg-pink-600 hover:bg-pink-700" onClick={onClose}>
                            Finish Session
                        </Button>
                    </div>
                </div>
            );
        }

        // Summary View
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
                        You reviewed {flashcards.length} flashcards
                        {totalAnswered > 0 && ` and answered ${totalAnswered} with voice`}
                    </p>
                </div>

                {/* Main Stats */}
                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                    <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200">
                        <CardContent className="p-4 text-center">
                            <div className="text-3xl font-bold text-blue-600">{flashcards.length}</div>
                            <div className="text-sm text-blue-700">Total Cards</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-green-50 dark:bg-green-900/20 border-green-200">
                        <CardContent className="p-4 text-center">
                            <div className="text-3xl font-bold text-green-600">{knownCards.size}</div>
                            <div className="text-sm text-green-700">Mastered</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200">
                        <CardContent className="p-4 text-center">
                            <div className="text-3xl font-bold text-amber-600">{practiceCards.size}</div>
                            <div className="text-sm text-amber-700">Need Practice</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Voice Answer Stats (if any) */}
                {totalAnswered > 0 && (
                    <div className="space-y-4 max-w-lg mx-auto">
                        {/* NEW: Audio Recording Stats */}
                        <div className="grid grid-cols-2 gap-3">
                            <Card className="bg-pink-50 dark:bg-pink-900/20 border-pink-200">
                                <CardContent className="p-3 text-center">
                                    <div className="flex items-center justify-center gap-1 text-pink-600">
                                        <Mic className="h-4 w-4" />
                                        <span className="text-2xl font-bold">{totalAnswered}</span>
                                    </div>
                                    <div className="text-xs text-pink-700">Audio Recordings</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200">
                                <CardContent className="p-3 text-center">
                                    <div className="text-2xl font-bold text-purple-600">
                                        {Math.floor(cardResults.reduce((sum, r) => sum + r.recordingDuration, 0) / 60)}:{String(cardResults.reduce((sum, r) => sum + r.recordingDuration, 0) % 60).padStart(2, '0')}
                                    </div>
                                    <div className="text-xs text-purple-700">Total Time</div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="text-4xl font-bold text-pink-600">
                            {accuracy}% Voice Accuracy
                        </div>
                        <div className="text-sm text-gray-500">
                            Average Score: {avgScore}% • {correctCount}/{totalAnswered} correct answers
                        </div>

                        {/* NEW: Concepts Coverage */}
                        {cardResults.some(r => r.keyPointsMentioned.length > 0) && (
                            <Card className="border-green-200 bg-green-50/50 text-left">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-2 text-green-700 mb-2">
                                        <CheckCircle2 className="h-4 w-4" />
                                        <span className="font-semibold text-sm">Concepts You Covered</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {Array.from(new Set(cardResults.flatMap(r => r.keyPointsMentioned))).slice(0, 8).map((point, i) => (
                                            <span key={i} className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                                                {point}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Weak Topics Alert */}
                        {weakTopics.length > 0 && (
                            <Card className="border-amber-300 bg-amber-50 text-left">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-2 text-amber-700 mb-2">
                                        <AlertTriangle className="h-5 w-5" />
                                        <span className="font-semibold">Topics to Review</span>
                                    </div>
                                    <div className="text-sm text-amber-800">
                                        {weakTopics.map(([topic]) => topic).join(", ")}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                )}

                <div className="flex gap-4 justify-center pt-4">
                    <Button variant="outline" onClick={restartSession}>
                        <RotateCcw className="mr-2 h-4 w-4" /> Review Again
                    </Button>
                    {totalAnswered > 0 && (
                        <Button variant="outline" onClick={() => setShowDetailedReport(true)}>
                            <BarChart3 className="mr-2 h-4 w-4" /> View Detailed Report
                        </Button>
                    )}
                    <Button className="bg-pink-600 hover:bg-pink-700" onClick={onClose}>
                        Continue
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

                {/* TIMER INDICATOR */}
                <div className="flex flex-col items-center flex-1 px-4">
                    <div className="text-xs font-bold text-gray-500 mb-1">
                        {!isFlipped ? `⏱️ ${timeLeft}s` : 'Reviewing...'}
                    </div>
                    <Progress
                        value={(!isFlipped ? (timeLeft / TOTAL_TIME) * 100 : 0)}
                        className="h-2 w-full max-w-xs transition-all duration-1000"
                    // Note: Shadcn Progress doesn't support color props natively usually, controlled via class
                    />
                </div>

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


            {/* INLINE RECORDING - Recording mode now shows on card front below */}

            {/* Flashcard */}
            <div
                className="perspective-1000 cursor-pointer mx-auto max-w-2xl"
                onClick={handleFlip}
            >
                <div
                    className={`relative transition-transform duration-500 transform-style-preserve-3d`}
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        transition: 'transform 0.5s'
                    }}
                >
                    {/* Front of Card */}
                    <Card
                        className={`min-h-[300px] ${isFlipped ? 'invisible' : 'visible'} ${currentCard?.highlight ? 'border-2 border-amber-400' : ''}`}
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

                            {/* INLINE RECORDING UI */}
                            {isRecordingMode ? (
                                <div className="mt-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                                    {isAnalyzing ? (
                                        <div className="text-center space-y-3 py-4">
                                            <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto" />
                                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                                🤖 AI analyzing your answer...
                                            </p>
                                        </div>
                                    ) : (
                                        <VoiceRecorder
                                            autoSubmit={false}
                                            onRecordingComplete={handleAudioRecording}
                                            onRecordingStart={() => setCurrentRecordingDuration(0)}
                                            onRecordingStop={() => { }}
                                        />
                                    )}
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="mt-2 text-gray-500 w-full"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsRecordingMode(false);
                                        }}
                                    >
                                        Cancel Recording
                                    </Button>
                                </div>
                            ) : (
                                <p className="text-gray-400 mt-6 text-sm">
                                    Tap to reveal answer
                                </p>
                            )}
                        </CardContent>
                    </Card>

                    {/* Back of Card */}
                    <Card
                        className={`min-h-[300px] absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 ${isFlipped ? 'visible' : 'invisible'}`}
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

                            {/* AI Result Display */}
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
                                        <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-2">&quot;{aiResult.transcription}&quot;</p>
                                        <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">{aiResult.feedback}</p>
                                    </div>

                                    {aiResult.missing_points && aiResult.missing_points.length > 0 && (
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
                        }
                    }}
                >
                    {aiResult ? (
                        <>Next <ChevronRight className="ml-2 h-5 w-5" /></>
                    ) : (
                        <><Mic className="mr-2 h-5 w-5" /> Audio Explain</>
                    )}
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    className="border-green-500 text-green-600 hover:bg-green-50"
                    onClick={handleKnown}
                >
                    <CheckCircle2 className="mr-2 h-5 w-5" /> I Know This
                </Button>
            </div>

            {/* Tip */}
            <p className="text-center text-sm text-gray-500">
                💡 Tip: Use &quot;Audio Explain&quot; to test your recall with AI feedback
            </p>
        </div >
    );
}
