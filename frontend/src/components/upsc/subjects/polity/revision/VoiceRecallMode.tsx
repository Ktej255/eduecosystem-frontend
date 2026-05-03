"use client";

import React, { useState, useEffect } from 'react';
import {
    Mic,
    ChevronLeft,
    ChevronRight,
    RotateCcw,
    CheckCircle2,
    XCircle,
    Play,
    Loader2,
    Sparkles,
    BookOpen,
    Lightbulb,
    BarChart3,
    AlertTriangle,
    Target
} from 'lucide-react';
import Link from 'next/link';
import { POLITY_REVISION_CHAPTERS } from '../data/RevisionRegistry';
import {
    Flashcard,
    generateFlashcardsFromTopic,
    shuffleArray
} from '@/components/upsc/infrastructure/flashcard/flashcard-utils';
import {
    getChapterProgress,
    updateFlashcardProgress,
    updateStreak
} from './progress-utils';
import VoiceRecorder from '@/components/ui/VoiceRecorder';
import { toast } from 'sonner';
import { API_BASE } from '@/lib/api';

// Reusing types from RevisionRegistry since we need access to raw topic data
// But for now we might need to fetch topic data differently if passing ids
// Actually POLITY_REVISION_CHAPTERS has simple data. We need deep data to generate flashcards.
// RevisionRegistry exports getRevisionDataById which returns the chapter data including flashcards usually.
// Let's check RevisionRegistry imports again.

import { getRevisionDataById } from '../data/RevisionRegistry';

interface VoiceRecallModeProps {
    initialChapterIds?: (number | string)[];
}

// Helper to serialize deep chapter content into a string for AI context
function serializeChapterContent(content: any): string {
    if (!content) return "";
    let text = `Title: ${content.title}\n\n`;
    if (content.introduction) text += `Introduction: ${content.introduction}\n\n`;

    if (content.sections) {
        content.sections.forEach((section: any) => {
            text += `Section: ${section.title}\n${section.content || ''}\n`;

            if (section.features) {
                text += "Key Features:\n" + section.features.map((f: string) => `- ${f}`).join('\n') + "\n";
            }

            if (section.subsections) {
                section.subsections.forEach((sub: any) => {
                    text += `\nSubsection: ${sub.title}\n${sub.content || ''}\n`;
                    if (sub.features) {
                        text += "Points:\n" + sub.features.map((f: string) => `- ${f}`).join('\n') + "\n";
                    }
                });
            }
            text += "\n";
        });
    }
    return text;
}

export default function VoiceRecallMode({ initialChapterIds = [] }: VoiceRecallModeProps) {
    // Selection State
    const [selectedChapters, setSelectedChapters] = useState<(number | string)[]>(initialChapterIds);
    const [isSelectionMode, setIsSelectionMode] = useState(initialChapterIds.length === 0);

    // Session State
    const [sessionCards, setSessionCards] = useState<(Flashcard & { fullContext?: string })[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sessionComplete, setSessionComplete] = useState(false);
    const [loading, setLoading] = useState(false);

    // Card State
    const [isRecording, setIsRecording] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [aiResult, setAiResult] = useState<any>(null);
    const [results, setResults] = useState<any[]>([]);



    const toggleChapter = (id: number | string) => {
        if (selectedChapters.includes(id)) {
            setSelectedChapters(selectedChapters.filter(cId => cId !== id));
        } else {
            setSelectedChapters([...selectedChapters, id]);
        }
    };

    const startSession = () => {
        if (selectedChapters.length === 0) {
            toast.error("Please select at least one chapter");
            return;
        }

        setLoading(true);
        const allCards: (Flashcard & { fullContext?: string })[] = [];

        try {
            selectedChapters.forEach(chapterId => {
                const chapterData = getRevisionDataById(Number(chapterId));
                const fullContentStr = chapterData?.content ? serializeChapterContent(chapterData.content) : "";

                // We need to convert revision data into Flashcards if possible
                // OR we can use the flashcards directly if they exist in chapterData
                if (chapterData && chapterData.flashcards) {
                    allCards.push(...chapterData.flashcards.map(fc => ({
                        id: String(fc.id), // Ensure ID is string to match interface
                        front: fc.question,
                        back: fc.answer,
                        category: (fc.category?.toLowerCase() as any) || 'concept',
                        source: chapterData.title,
                        highlight: false,
                        fullContext: fullContentStr // Attach full chapter context to each card
                    })));
                }
            });

            if (allCards.length === 0) {
                toast.error("No flashcards found for selected chapters");
                setLoading(false);
                return;
            }

            setSessionCards(shuffleArray(allCards));
            setIsSelectionMode(false);
            setCurrentIndex(0);
            setResults([]);
            setSessionComplete(false);
        } catch (error) {
            console.error("Error starting session:", error);
            toast.error("Failed to start session");
        } finally {
            setLoading(false);
        }
    };

    const handleAudioRecording = async (base64Audio: string) => {
        setIsAnalyzing(true);
        const currentCard = sessionCards[currentIndex];

        try {
            const response = await fetch(`${API_BASE}/audio-analysis/analyze-flashcard`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    audio_base64: base64Audio,
                    card_front: currentCard.front,
                    card_back: currentCard.back,
                    topic: currentCard.source,
                    chapter_content: currentCard.fullContext // Send full context for enhanced validation
                })
            });

            if (!response.ok) throw new Error("Analysis failed");

            const result = await response.json();
            setAiResult(result);
            setShowAnswer(true); // Reveal answer

            // Save result
            setResults(prev => [...prev, {
                cardId: currentCard.id,
                score: result.score,
                isCorrect: result.score >= 70,
                transcript: result.transcription,
                feedback: result.feedback
            }]);

        } catch (error) {
            console.error("Audio analysis error:", error);
            toast.error("Failed to analyze audio. Please try again.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    const nextCard = () => {
        setShowAnswer(false);
        setAiResult(null);
        if (currentIndex < sessionCards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setSessionComplete(true);
        }
    };

    const currentCard = sessionCards[currentIndex];

    // SELECTION SCREEN
    if (isSelectionMode) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-[#030303] dark:via-[#050505] dark:to-[#030303] pb-20">
                <div className="bg-card/80 dark:bg-black/50 backdrop-blur-xl border-b border-pink-100 dark:border-pink-900/30 sticky top-0 z-10">
                    <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Link href="/student/upsc/polity/revision" className="p-2 hover:bg-black/5 rounded-full transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                            </Link>
                            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                                Voice Recall Session
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6 py-8">
                    <div className="bg-card dark:bg-[#111] rounded-3xl p-8 shadow-xl border border-pink-100 dark:border-pink-900/30 text-center mb-8">
                        <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Mic className="w-8 h-8 text-pink-600" />
                        </div>
                        <h2 className="text-2xl font-black text-foreground mb-2">Select Chapters to Recite</h2>
                        <p className="text-muted-foreground max-w-lg mx-auto">
                            Choose chapters you want to practice verbally. You'll be asked questions and must answer by speaking. AI will grade your recall.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
                        {POLITY_REVISION_CHAPTERS.map(chapter => (
                            <button
                                key={chapter.id}
                                onClick={() => toggleChapter(chapter.id)}
                                className={`p-4 rounded-xl text-left transition-all border-2 ${selectedChapters.includes(chapter.id)
                                    ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20'
                                    : 'border-transparent bg-card dark:bg-[#111] hover:border-border dark:hover:border-gray-800'
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <span className="text-xs font-bold text-muted-foreground">Chapter {chapter.id}</span>
                                    {selectedChapters.includes(chapter.id) && (
                                        <CheckCircle2 className="w-5 h-5 text-pink-500" />
                                    )}
                                </div>
                                <div className="font-bold text-foreground line-clamp-2">{chapter.title}</div>
                            </button>
                        ))}
                    </div>

                    <div className="fixed bottom-0 left-0 right-0 p-4 bg-card/80 dark:bg-black/80 backdrop-blur-xl border-t border-border flex justify-center">
                        <button
                            onClick={startSession}
                            disabled={selectedChapters.length === 0}
                            className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100"
                        >
                            Start Voice Session ({selectedChapters.length})
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // SUMMARY SCREEN
    if (sessionComplete) {
        const avgScore = Math.round(results.reduce((a, b) => a + b.score, 0) / results.length || 0);
        const correctCount = results.filter(r => r.isCorrect).length;

        // Save progress on mount of summary screen
        useEffect(() => {
            // Group results by chapter
            const chapterUpdates = new Map<number, number>(); // chapterId -> correct count

            results.forEach(r => {
                // Parse chapter ID from card ID (format: "7-concept-0")
                const parts = String(r.cardId).split('-');
                if (parts.length > 0) {
                    const chId = parseInt(parts[0]);
                    if (!isNaN(chId)) {
                        const current = chapterUpdates.get(chId) || 0;
                        if (r.isCorrect) {
                            chapterUpdates.set(chId, current + 1);
                        } else {
                            // Ensure chapter is at least in the map for timestamp update even if 0 correct
                            if (!chapterUpdates.has(chId)) chapterUpdates.set(chId, 0);
                        }
                    }
                }
            });

            // Update progress for each chapter
            chapterUpdates.forEach((count, chId) => {
                const chapterData = getRevisionDataById(chId);
                if (chapterData) {
                    // Import these dynamically or assume they are available in scope?
                    // We need to import 'getChapterProgress' and 'updateFlashcardProgress' at the top.
                    // But for this snippet we'll assume they are imported.
                    const existing = getChapterProgress(chId);
                    const currentCompleted = existing?.flashcardsCompleted || 0;
                    // Add correct answers to current progress, capped at total
                    const totalCards = chapterData.flashcards?.length || 20; // fallback
                    const newTotal = Math.min(totalCards, currentCompleted + count);

                    updateFlashcardProgress(chId, newTotal - 1, totalCards);
                }
            });

            // Update Study Streak
            updateStreak();

        }, []); // Run once on mount

        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-[#030303] dark:via-[#050505] dark:to-[#030303] flex items-center justify-center p-6">
                <div className="bg-card dark:bg-[#111] rounded-3xl p-8 max-w-2xl w-full text-center shadow-xl border border-pink-100 dark:border-pink-900/30">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Trophy className="w-10 h-10 text-green-600" />
                    </div>

                    <h2 className="text-3xl font-black text-foreground mb-2">Session Complete!</h2>
                    <p className="text-muted-foreground mb-8">You've practiced specific recall for {results.length} concepts.</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-pink-50 dark:bg-pink-900/10 p-6 rounded-2xl">
                            <div className="text-4xl font-black text-pink-600 mb-1">{avgScore}%</div>
                            <div className="text-sm text-pink-700/60 font-medium">Average Accuracy</div>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-2xl">
                            <div className="text-4xl font-black text-purple-600 mb-1">{correctCount}/{results.length}</div>
                            <div className="text-sm text-purple-700/60 font-medium">Concepts Mastered</div>
                        </div>
                    </div>

                    <div className="flex gap-3 justify-center">
                        <Link href="/student/upsc/polity/revision" className="px-6 py-3 rounded-xl font-bold bg-muted text-muted-foreground dark:text-muted-foreground hover:bg-muted transition-colors">
                            Return to Hub
                        </Link>
                        <button
                            onClick={() => {
                                setSessionComplete(false);
                                setCurrentIndex(0);
                                setResults([]);
                                setSessionCards(shuffleArray(sessionCards));
                            }}
                            className="px-6 py-3 rounded-xl font-bold bg-pink-600 text-white hover:bg-pink-700 transition-colors flex items-center gap-2"
                        >
                            <RotateCcw className="w-4 h-4" /> Practice Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // LISTENING/FLASHCARD SCREEN
    return (
        <div className="min-h-screen bg-muted dark:bg-[#050505] flex flex-col">
            {/* Header */}
            <div className="bg-card dark:bg-[#111] border-b border-border p-4 sticky top-0 z-10">
                <div className="max-w-3xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button onClick={() => setIsSelectionMode(true)} className="p-2 hover:bg-muted dark:hover:bg-gray-800 rounded-lg text-muted-foreground">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div>
                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Voice Session</div>
                            <div className="font-bold text-foreground">Card {currentIndex + 1} / {sessionCards.length}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                                className="h-full bg-pink-500 transition-all duration-300"
                                style={{ width: `${((currentIndex) / sessionCards.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Card Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 flex items-center justify-center">
                <div className="max-w-2xl w-full">
                    {/* Source Tag */}
                    <div className="flex justify-center mb-6">
                        <span className="bg-muted text-muted-foreground dark:text-muted-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {currentCard.source}
                        </span>
                    </div>

                    {/* Question Card */}
                    <div className="bg-card dark:bg-[#111] rounded-3xl p-8 shadow-xl border border-border text-center mb-6 relative overflow-hidden">
                        <div className="w-16 h-16 bg-pink-50 dark:bg-pink-900/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Lightbulb className="w-8 h-8 text-pink-500" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">
                            {currentCard.front}
                        </h2>

                        {/* Recording Interface */}
                        {!showAnswer ? (
                            <div className="max-w-md mx-auto relative z-10">
                                {isAnalyzing ? (
                                    <div className="py-8 text-center animate-pulse">
                                        <Loader2 className="w-12 h-12 text-pink-500 animate-spin mx-auto mb-4" />
                                        <p className="text-muted-foreground font-medium">AI Analyzing your answer...</p>
                                    </div>
                                ) : (
                                    <div className="bg-muted rounded-2xl p-6 border border-border">
                                        <p className="text-sm font-medium text-muted-foreground mb-4">Tap mic to speak your answer</p>
                                        <VoiceRecorder
                                            onRecordingComplete={handleAudioRecording}
                                            autoSubmit={false}
                                        />
                                    </div>
                                )}
                            </div>
                        ) : (
                            // Answer & Result Display
                            <div className="text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="border-t border-border my-6"></div>

                                {/* Score Banner */}
                                <div className={`flex items-center gap-4 p-4 rounded-xl mb-6 ${aiResult.score >= 70
                                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                                    : 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300'
                                    }`}>
                                    <div className="text-3xl font-black">{aiResult.score}%</div>
                                    <div className="flex-1">
                                        <div className="font-bold">{aiResult.score >= 70 ? 'Excellent Recall!' : 'Needs Improvement'}</div>
                                        <div className="text-xs opacity-80">{aiResult.score >= 70 ? 'You covered mainly all key points.' : 'You missed some important details.'}</div>
                                    </div>
                                    {aiResult.score >= 70 ? <CheckCircle2 className="w-8 h-8" /> : <AlertTriangle className="w-8 h-8" />}
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Model Answer</div>
                                        <div className="text-foreground text-lg leading-relaxed">{currentCard.back}</div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Your Answer</div>
                                        <div className="bg-muted p-4 rounded-xl text-muted-foreground dark:text-muted-foreground italic">
                                            "{aiResult.transcription}"
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">AI Feedback</div>
                                        <p className="text-muted-foreground dark:text-muted-foreground">{aiResult.feedback}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={nextCard}
                                    className="w-full mt-8 bg-gray-900 dark:bg-card text-white dark:text-black py-4 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                                >
                                    Next Card <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        )}

                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Trophy(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
    )
}

