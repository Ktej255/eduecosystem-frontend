"use client";

import React, { useState, useEffect } from 'react';
import {
    ChevronLeft,
    BookOpen,
    Layers,
    CheckCircle2,
    Trophy,
    ArrowLeft,
    ArrowRight,
    RefreshCcw,
    Sparkles,
    Target,
    Flame
} from 'lucide-react';
import Link from 'next/link';
import { getRevisionDataById } from '../data/RevisionRegistry';
import { updateFlashcardProgress, updateMcqProgress, getChapterProgress, getStreak, getAllProgress } from './progress-utils';
import { toast } from 'sonner';

interface Props {
    chapterId: number;
    subjectId?: string;
}

export default function ChapterRevisionView({ chapterId, subjectId = 'polity' }: Props) {
    const [activeTab, setActiveTab] = useState<'content' | 'flashcards' | 'mcqs'>('content');
    const [revisionData, setRevisionData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // Flashcards State
    const [currentFlashIdx, setCurrentFlashIdx] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    // MCQs State
    const [currentMcqIdx, setCurrentMcqIdx] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const data = getRevisionDataById(chapterId);
        if (data) {
            setRevisionData(data);
        }
        setLoading(false);
    }, [chapterId]);

    if (loading) return <div className="p-12 text-center">Loading Chapter...</div>;
    if (!revisionData) return <div className="p-12 text-center">Chapter not found!</div>;

    const { title, content, flashcards, mcqs } = revisionData;

    // Flashcard Helpers
    const nextFlashcard = () => {
        if (currentFlashIdx < flashcards.length - 1) {
            const newIdx = currentFlashIdx + 1;
            setCurrentFlashIdx(newIdx);
            setShowAnswer(false);
            // Save progress
            updateFlashcardProgress(chapterId, newIdx, flashcards.length, subjectId);
        }
    };

    const prevFlashcard = () => {
        if (currentFlashIdx > 0) {
            setCurrentFlashIdx(curr => curr - 1);
            setShowAnswer(false);
        }
    };

    // MCQ Helpers
    const handleOptionSelect = (optionIdx: number) => {
        if (submitted) return;
        setAnswers({ ...answers, [currentMcqIdx]: optionIdx });
    };

    const handleMcqSubmit = () => {
        let finalScore = 0;
        mcqs.forEach((mcq: any, idx: number) => {
            if (answers[idx] === mcq.correctAnswer) finalScore++;
        });
        setScore(finalScore);
        setSubmitted(true);
        // Save MCQ progress
        updateMcqProgress(chapterId, finalScore, mcqs.length, subjectId);
        toast.success(`Test Completed! Score: ${finalScore}/${mcqs.length}`);
    };

    const resetMcq = () => {
        setAnswers({});
        setSubmitted(false);
        setCurrentMcqIdx(0);
        setScore(0);
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#030303]">
            {/* Header */}
            <div className="bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href={`/student/revision/${subjectId}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <ChevronLeft className="w-5 h-4" />
                        <span className="text-sm font-medium">Back to Revision Hub</span>
                    </Link>
                    <div className="text-center">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Chapter {chapterId} Revision</span>
                        <h1 className="text-sm font-bold text-gray-900 dark:text-white truncate max-w-[200px] md:max-w-none">{title}</h1>
                    </div>
                    <div className="w-20" /> {/* Spacer */}
                </div>

                {/* Tab Navigation */}
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex gap-8">
                        {[
                            { id: 'content', label: 'Detailed Text', icon: BookOpen },
                            { id: 'flashcards', label: 'Flashcards', icon: Layers },
                            { id: 'mcqs', label: 'Practice MCQs', icon: Target },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`py-4 px-1 border-b-2 transition-all flex items-center gap-2 text-sm font-medium ${activeTab === tab.id
                                    ? 'border-blue-600 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Tab 1: Detailed Text */}
                {activeTab === 'content' && (
                    <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="prose prose-blue dark:prose-invert max-w-none">
                            <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                                {content.introduction}
                            </p>

                            <div className="space-y-12">
                                {content.sections.map((section: any, idx: number) => (
                                    <div key={idx} className="border-l-4 border-blue-500 pl-6 py-2">
                                        <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                                        {section.content && <p className="mb-4 text-gray-700 dark:text-gray-300">{section.content}</p>}

                                        {section.subsections && (
                                            <div className="space-y-6 mt-4">
                                                {section.subsections.map((sub: any, sIdx: number) => (
                                                    <div key={sIdx} className="bg-gray-50 dark:bg-[#111] p-5 rounded-xl">
                                                        <h4 className="text-xl font-bold mb-3 text-blue-700 dark:text-blue-400">{sub.title}</h4>
                                                        <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">{sub.content}</p>
                                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                            {sub.features.map((feat: string, fIdx: number) => (
                                                                <li key={fIdx} className="flex gap-2 text-sm">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                                                    <span className="text-gray-700 dark:text-gray-300">{feat}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.features && (
                                            <ul className="space-y-3 mt-4">
                                                {section.features.map((feat: string, fIdx: number) => (
                                                    <li key={fIdx} className="flex gap-3 bg-gray-50 dark:bg-[#111] p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                                                        <Sparkles className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                                        <span className="text-sm text-gray-700 dark:text-gray-300">{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab 2: Flashcards */}
                {activeTab === 'flashcards' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-gray-500">
                                Card {currentFlashIdx + 1} of {flashcards.length}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${flashcards[currentFlashIdx].difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                                    flashcards[currentFlashIdx].difficulty === 'medium' ? 'bg-amber-100 text-amber-700' :
                                        'bg-red-100 text-red-700'
                                    }`}>
                                    {flashcards[currentFlashIdx].difficulty}
                                </span>
                                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px] uppercase font-bold">
                                    {flashcards[currentFlashIdx].category}
                                </span>
                            </div>
                        </div>

                        {/* Flashcard Component */}
                        <div
                            onClick={() => setShowAnswer(!showAnswer)}
                            className="relative h-96 cursor-pointer perspective-1000 group"
                        >
                            <div className={`relative w-full h-full transition-all duration-500 preserve-3d ${showAnswer ? 'rotate-y-180' : ''}`}>
                                {/* Front */}
                                <div className="absolute inset-0 bg-white dark:bg-[#0a0a0a] rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center p-12 backface-hidden shadow-sm">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                                        <BookOpen className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white leading-snug">
                                        {flashcards[currentFlashIdx].question}
                                    </h3>
                                    <p className="mt-8 text-sm text-blue-600 font-medium opacity-50">Click to reveal answer</p>
                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 bg-blue-600 rounded-3xl flex flex-col items-center justify-center p-12 rotate-y-180 backface-hidden shadow-xl overflow-y-auto">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-white text-xl font-medium text-center leading-relaxed whitespace-pre-line">
                                        {flashcards[currentFlashIdx].answer}
                                    </div>
                                    <p className="mt-8 text-xs text-blue-200 font-medium">Click to flip back</p>
                                </div>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-center gap-6">
                            <button
                                onClick={(e) => { e.stopPropagation(); prevFlashcard(); }}
                                disabled={currentFlashIdx === 0}
                                className="w-12 h-12 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50 transition-colors shadow-sm"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); setShowAnswer(!showAnswer); }}
                                className="px-8 py-3 rounded-full bg-gray-900 dark:bg-white dark:text-black text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform"
                            >
                                {showAnswer ? "View Question" : "Show Answer"}
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextFlashcard(); }}
                                disabled={currentFlashIdx === flashcards.length - 1}
                                className="w-12 h-12 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50 transition-colors shadow-sm"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Tab 3: MCQs */}
                {activeTab === 'mcqs' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {!submitted ? (
                            <>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium text-gray-500 leading-none">
                                        Question {currentMcqIdx + 1} of {mcqs.length}
                                    </div>
                                    <div className="h-2 w-48 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-blue-600 transition-all duration-300"
                                            style={{ width: `${((currentMcqIdx + 1) / mcqs.length) * 100}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm">
                                    <h3 className="text-xl font-bold mb-8 text-gray-900 dark:text-white leading-snug">
                                        {mcqs[currentMcqIdx].question}
                                    </h3>

                                    <div className="space-y-3">
                                        {mcqs[currentMcqIdx].options.map((option: string, oIdx: number) => (
                                            <button
                                                key={oIdx}
                                                onClick={() => handleOptionSelect(oIdx)}
                                                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${answers[currentMcqIdx] === oIdx
                                                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                                                    : 'border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700'
                                                    }`}
                                            >
                                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${answers[currentMcqIdx] === oIdx ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 text-gray-400'
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
                                        onClick={() => setCurrentMcqIdx(prev => Math.max(0, prev - 1))}
                                        disabled={currentMcqIdx === 0}
                                        className="text-sm font-medium text-gray-500 hover:text-gray-900 disabled:opacity-0"
                                    >
                                        ← Previous
                                    </button>
                                    {currentMcqIdx === mcqs.length - 1 ? (
                                        <button
                                            onClick={handleMcqSubmit}
                                            disabled={Object.keys(answers).length < mcqs.length}
                                            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-green-600/20 disabled:opacity-50 transition-all"
                                        >
                                            Finish Test
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => setCurrentMcqIdx(prev => Math.min(mcqs.length - 1, prev + 1))}
                                            disabled={answers[currentMcqIdx] === undefined}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-600/20 disabled:opacity-50 transition-all"
                                        >
                                            Next Question →
                                        </button>
                                    )}
                                </div>
                            </>
                        ) : (
                            // Results Screen
                            <div className="text-center bg-white dark:bg-[#0a0a0a] rounded-3xl border border-gray-200 dark:border-gray-800 p-12 shadow-xl animate-in zoom-in-95 duration-500">
                                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Trophy className="w-10 h-10 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold mb-2">Test Completed!</h2>
                                <div className="text-5xl font-black text-blue-600 my-8">
                                    {score} <span className="text-2xl text-gray-400 font-normal">/ {mcqs.length}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm mx-auto">
                                    {score === mcqs.length
                                        ? "Perfect score! You have a solid grasp of this chapter's key facts."
                                        : score > mcqs.length / 2
                                            ? "Great job! Review the questions you got wrong for perfection."
                                            : "Good effort. Let's study the detailed text once more and try again."}
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <button
                                        onClick={resetMcq}
                                        className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-8 py-3 rounded-xl font-bold transition-all"
                                    >
                                        <RefreshCcw className="w-4 h-4" />
                                        Retry Test
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('content')}
                                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all"
                                    >
                                        <BookOpen className="w-4 h-4" />
                                        Review Chapter
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
        </div>
    );
}
