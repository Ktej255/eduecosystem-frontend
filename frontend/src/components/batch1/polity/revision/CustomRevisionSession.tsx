"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import {
    ChevronLeft,
    ChevronRight,
    BookOpen,
    Layers,
    Target,
    CheckCircle2,
    Trophy,
    ArrowLeft,
    ArrowRight,
    RefreshCcw,
    Sparkles,
    XCircle
} from 'lucide-react';
import Link from 'next/link';
import { POLITY_REVISION_CHAPTERS } from '../data/RevisionRegistry';
import { updateFlashcardProgress, updateMcqProgress } from './progress-utils';
import { toast } from 'sonner';

interface Flashcard {
    question: string;
    answer: string;
    difficulty: 'easy' | 'medium' | 'hard';
    category: string;
}

interface MCQ {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export default function CustomRevisionSession() {
    const searchParams = useSearchParams();
    const chaptersParam = searchParams.get('chapters');

    const [mode, setMode] = useState<'flashcards' | 'mcqs'>('flashcards');
    const [currentIdx, setCurrentIdx] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [sessionComplete, setSessionComplete] = useState(false);
    const [score, setScore] = useState({ correct: 0, incorrect: 0 });

    // MCQ state
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [submitted, setSubmitted] = useState(false);
    const [mcqScore, setMcqScore] = useState(0);

    // Parse chapter IDs from URL
    const chapterIds = useMemo(() => {
        if (!chaptersParam) return [];
        return chaptersParam.split(',').map(id => parseInt(id)).filter(id => !isNaN(id));
    }, [chaptersParam]);

    // Get all flashcards from selected chapters
    const flashcards = useMemo(() => {
        const cards: (Flashcard & { chapterId: number; chapterTitle: string })[] = [];
        chapterIds.forEach(id => {
            const chapter = POLITY_REVISION_CHAPTERS.find(ch => ch.id === id);
            if (chapter?.flashcards) {
                chapter.flashcards.forEach(fc => {
                    cards.push({ ...fc, chapterId: id, chapterTitle: chapter.title });
                });
            }
        });
        // Shuffle
        return cards.sort(() => Math.random() - 0.5);
    }, [chapterIds]);

    // Get all MCQs from selected chapters
    const mcqs = useMemo(() => {
        const questions: (MCQ & { chapterId: number; chapterTitle: string })[] = [];
        chapterIds.forEach(id => {
            const chapter = POLITY_REVISION_CHAPTERS.find(ch => ch.id === id);
            if (chapter?.mcqs) {
                chapter.mcqs.forEach(mcq => {
                    questions.push({ ...mcq, chapterId: id, chapterTitle: chapter.title });
                });
            }
        });
        // Shuffle
        return questions.sort(() => Math.random() - 0.5);
    }, [chapterIds]);

    const selectedChapters = useMemo(() => {
        return chapterIds.map(id => POLITY_REVISION_CHAPTERS.find(ch => ch.id === id)).filter(Boolean);
    }, [chapterIds]);

    // Flashcard handlers
    const handleFlashcardResponse = (correct: boolean) => {
        if (correct) {
            setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
        } else {
            setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
        }

        // Update progress for this chapter
        const currentCard = flashcards[currentIdx];
        if (currentCard) {
            const chapterFlashcards = flashcards.filter(f => f.chapterId === currentCard.chapterId);
            const completedInChapter = flashcards.slice(0, currentIdx + 1).filter(f => f.chapterId === currentCard.chapterId).length;
            updateFlashcardProgress(currentCard.chapterId, completedInChapter - 1, chapterFlashcards.length);
        }

        if (currentIdx >= flashcards.length - 1) {
            setSessionComplete(true);
        } else {
            setCurrentIdx(prev => prev + 1);
            setShowAnswer(false);
        }
    };

    // MCQ handlers
    const handleOptionSelect = (optionIdx: number) => {
        if (submitted) return;
        setAnswers({ ...answers, [currentIdx]: optionIdx });
    };

    const handleMcqSubmit = () => {
        let finalScore = 0;
        mcqs.forEach((mcq, idx) => {
            if (answers[idx] === mcq.correctAnswer) finalScore++;
        });
        setMcqScore(finalScore);
        setSubmitted(true);

        // Update progress for each chapter
        chapterIds.forEach(chId => {
            const chapterMcqs = mcqs.filter(m => m.chapterId === chId);
            if (chapterMcqs.length > 0) {
                const chapterScore = chapterMcqs.reduce((sum, mcq, idx) => {
                    const mcqIdx = mcqs.findIndex(m => m === mcq);
                    return sum + (answers[mcqIdx] === mcq.correctAnswer ? 1 : 0);
                }, 0);
                updateMcqProgress(chId, chapterScore, chapterMcqs.length);
            }
        });

        toast.success(`Test Completed! Score: ${finalScore}/${mcqs.length}`);
    };

    const restartSession = () => {
        setCurrentIdx(0);
        setShowAnswer(false);
        setSessionComplete(false);
        setScore({ correct: 0, incorrect: 0 });
        setAnswers({});
        setSubmitted(false);
        setMcqScore(0);
    };

    // No chapters selected
    if (chapterIds.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-[#030303] dark:via-[#050510] dark:to-[#030303] flex items-center justify-center p-6">
                <div className="bg-white dark:bg-[#111] rounded-3xl border border-gray-200 dark:border-gray-800 p-8 max-w-md w-full text-center shadow-xl">
                    <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-4">
                        <XCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <h1 className="text-xl font-black text-gray-900 dark:text-white mb-2">No Chapters Selected</h1>
                    <p className="text-gray-500 mb-6">Please select chapters from the Revision Hub to start a custom session.</p>
                    <Link
                        href="/student/batch1/polity/revision"
                        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
                    >
                        Go to Revision Hub
                    </Link>
                </div>
            </div>
        );
    }

    // Session complete
    if (sessionComplete || submitted) {
        const successRate = mode === 'flashcards'
            ? Math.round((score.correct / (score.correct + score.incorrect)) * 100)
            : Math.round((mcqScore / mcqs.length) * 100);

        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-[#030303] dark:via-[#050510] dark:to-[#030303] flex items-center justify-center p-6">
                <div className="bg-white dark:bg-[#111] rounded-3xl border border-gray-200 dark:border-gray-800 p-8 max-w-md w-full text-center shadow-xl">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                        <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Session Complete!</h1>
                    <p className="text-gray-500 mb-2">{selectedChapters.length} chapters reviewed</p>
                    <p className="text-sm text-gray-400 mb-6">
                        {mode === 'flashcards' ? flashcards.length : mcqs.length} {mode === 'flashcards' ? 'flashcards' : 'MCQs'}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-4">
                            <div className="text-3xl font-black text-emerald-600">
                                {mode === 'flashcards' ? score.correct : mcqScore}
                            </div>
                            <div className="text-sm text-emerald-600">Correct</div>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-4">
                            <div className="text-3xl font-black text-red-600">
                                {mode === 'flashcards' ? score.incorrect : mcqs.length - mcqScore}
                            </div>
                            <div className="text-sm text-red-600">Incorrect</div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="text-5xl font-black text-gray-900 dark:text-white mb-2">{successRate}%</div>
                        <div className="text-gray-500">Success Rate</div>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={restartSession}
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                            <RefreshCcw className="w-5 h-5" />
                            Try Again
                        </button>
                        <Link
                            href="/student/batch1/polity/revision"
                            className="block w-full bg-gray-100 dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all"
                        >
                            Back to Revision Hub
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-[#030303] dark:via-[#050510] dark:to-[#030303] pb-20">
            {/* Header */}
            <div className="bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/student/batch1/polity/revision" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <ChevronLeft className="w-5 h-4" />
                        <span className="text-sm font-medium">Exit Session</span>
                    </Link>
                    <div className="text-center">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">Custom Session</span>
                        <h1 className="text-sm font-bold text-gray-900 dark:text-white">{selectedChapters.length} Chapters</h1>
                    </div>
                    <div className="w-20" />
                </div>

                {/* Mode Toggle */}
                <div className="max-w-4xl mx-auto px-4 pb-4">
                    <div className="flex gap-2 p-1 bg-gray-100 dark:bg-[#0a0a0a] rounded-xl">
                        <button
                            onClick={() => { setMode('flashcards'); restartSession(); }}
                            className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors ${mode === 'flashcards' ? 'bg-white dark:bg-[#111] shadow text-indigo-600' : 'text-gray-500'
                                }`}
                        >
                            <Layers className="w-4 h-4" />
                            Flashcards ({flashcards.length})
                        </button>
                        <button
                            onClick={() => { setMode('mcqs'); restartSession(); }}
                            className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors ${mode === 'mcqs' ? 'bg-white dark:bg-[#111] shadow text-indigo-600' : 'text-gray-500'
                                }`}
                        >
                            <Target className="w-4 h-4" />
                            MCQs ({mcqs.length})
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Progress */}
                <div className="mb-6">
                    <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-500">
                            {currentIdx + 1} of {mode === 'flashcards' ? flashcards.length : mcqs.length}
                        </span>
                        {mode === 'flashcards' && (
                            <div className="flex items-center gap-4">
                                <span className="text-emerald-600 font-medium">{score.correct} ✓</span>
                                <span className="text-red-600 font-medium">{score.incorrect} ✗</span>
                            </div>
                        )}
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all"
                            style={{ width: `${((currentIdx + 1) / (mode === 'flashcards' ? flashcards.length : mcqs.length)) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Flashcard Mode */}
                {mode === 'flashcards' && flashcards[currentIdx] && (
                    <div className="space-y-6">
                        <div className="text-center text-sm text-indigo-600 font-medium mb-4">
                            {flashcards[currentIdx].chapterTitle}
                        </div>

                        <div
                            onClick={() => setShowAnswer(!showAnswer)}
                            className="bg-white dark:bg-[#111] rounded-3xl border border-gray-200 dark:border-gray-800 p-8 min-h-[300px] cursor-pointer shadow-xl flex flex-col items-center justify-center"
                        >
                            {!showAnswer ? (
                                <>
                                    <div className="text-sm text-gray-500 mb-4">QUESTION</div>
                                    <div className="text-xl font-bold text-center text-gray-900 dark:text-white">
                                        {flashcards[currentIdx].question}
                                    </div>
                                    <div className="mt-6 text-sm text-gray-400">Tap to reveal answer</div>
                                </>
                            ) : (
                                <>
                                    <div className="text-sm text-emerald-500 mb-4">ANSWER</div>
                                    <div className="text-lg text-gray-700 dark:text-gray-300 text-center">
                                        {flashcards[currentIdx].answer}
                                    </div>
                                </>
                            )}
                        </div>

                        {showAnswer && (
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => handleFlashcardResponse(false)}
                                    className="bg-red-100 dark:bg-red-900/20 text-red-600 py-4 rounded-2xl font-bold hover:bg-red-200 transition-all flex items-center justify-center gap-2"
                                >
                                    <XCircle className="w-5 h-5" />
                                    Didn't Know
                                </button>
                                <button
                                    onClick={() => handleFlashcardResponse(true)}
                                    className="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 py-4 rounded-2xl font-bold hover:bg-emerald-200 transition-all flex items-center justify-center gap-2"
                                >
                                    <CheckCircle2 className="w-5 h-5" />
                                    Got It!
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* MCQ Mode */}
                {mode === 'mcqs' && mcqs[currentIdx] && (
                    <div className="space-y-6">
                        <div className="text-center text-sm text-indigo-600 font-medium mb-4">
                            {mcqs[currentIdx].chapterTitle}
                        </div>

                        <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-lg">
                            <h3 className="text-xl font-bold mb-8 text-gray-900 dark:text-white">
                                {mcqs[currentIdx].question}
                            </h3>

                            <div className="space-y-3">
                                {mcqs[currentIdx].options.map((option, oIdx) => (
                                    <button
                                        key={oIdx}
                                        onClick={() => handleOptionSelect(oIdx)}
                                        className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${answers[currentIdx] === oIdx
                                            ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300'
                                            : 'border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700'
                                            }`}
                                    >
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${answers[currentIdx] === oIdx ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-gray-300 text-gray-400'
                                            }`}>
                                            {String.fromCharCode(65 + oIdx)}
                                        </div>
                                        <span className="font-medium">{option}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                                disabled={currentIdx === 0}
                                className="text-sm font-medium text-gray-500 hover:text-gray-900 disabled:opacity-0"
                            >
                                ← Previous
                            </button>
                            {currentIdx === mcqs.length - 1 ? (
                                <button
                                    onClick={handleMcqSubmit}
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-green-600/20 disabled:opacity-50 transition-all"
                                >
                                    Finish Test
                                </button>
                            ) : (
                                <button
                                    onClick={() => setCurrentIdx(prev => Math.min(mcqs.length - 1, prev + 1))}
                                    disabled={answers[currentIdx] === undefined}
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-indigo-600/20 disabled:opacity-50 transition-all"
                                >
                                    Next Question →
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
