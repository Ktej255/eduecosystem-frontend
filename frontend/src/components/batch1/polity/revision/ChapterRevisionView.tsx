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
    Flame,
    Newspaper,
    FileText
} from 'lucide-react';
import StandardMCQInterface from '@/components/common/mcq/StandardMCQInterface';
import StandardTestReport from '@/components/common/reports/StandardTestReport';
import { Badge } from '@/components/ui/badge';
import { getRevisionDataById } from '../data/RevisionRegistry';
import Link from 'next/link';
import { saveChapterReport } from '@/lib/report-persistence';
import { updateFlashcardProgress, updateMcqProgress } from './progress-utils';
import { toast } from 'sonner';

interface Props {
    chapterId: number;
    subjectId?: string;
    backLink?: string;
    backLabel?: string;
    initialTab?: 'content' | 'flashcards' | 'mcqs' | 'current_affairs';
}

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
    explanation?: string;
}

interface ContentSection {
    title: string;
    content?: string;
    subsections?: {
        title: string;
        content: string;
        features: string[];
    }[];
    features?: string[];
}

interface RevisionData {
    title: string;
    content: {
        title: string;
        introduction: string;
        sections: ContentSection[];
    };
    flashcards: Flashcard[];
    mcqs: MCQ[];
}

interface TestResultData {
    testTitle: string;
    totalTimeTaken: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    questions: any[]; // Kept as any for flexibility with StandardMCQInterface output
}

// ChapterReportHistory - Displays past test reports for a chapter
function ChapterReportHistory({ chapterId, subject }: { chapterId: number; subject: 'polity' | 'history' }) {
    const [reports, setReports] = useState<{ score: number; totalQuestions: number; accuracy: number; timestamp: string; level: number }[]>([]);

    useEffect(() => {
        const loadReports = async () => {
            if (typeof window !== 'undefined') {
                try {
                    const mod = await import('@/lib/report-persistence');
                    const chapterReports = mod.getChapterReports(subject)
                        .filter(r => r.chapterId === chapterId)
                        .slice(0, 5); // Show last 5 reports
                    setReports(chapterReports);
                } catch (e) {
                    console.error('Error loading chapter reports:', e);
                }
            }
        };
        loadReports();
    }, [chapterId, subject]);

    if (reports.length === 0) {
        return (
            <p className="text-sm text-slate-500 text-center py-4">
                No test reports yet. Complete a Level 1 test to see your results here.
            </p>
        );
    }

    return (
        <div className="space-y-2">
            {reports.map((r, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-slate-100 dark:border-gray-700">
                    <div>
                        <span className="text-sm font-medium text-slate-700 dark:text-white">Level {r.level}</span>
                        <span className="text-xs text-slate-400 ml-2">{new Date(r.timestamp).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-600 dark:text-slate-300">{r.score}/{r.totalQuestions}</span>
                        <span className={`text-sm font-bold px-2 py-1 rounded ${r.accuracy >= 70 ? 'bg-green-100 text-green-700' : r.accuracy >= 50 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                            {r.accuracy}%
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function ChapterRevisionView({ chapterId, subjectId = 'polity', backLink, backLabel, initialTab = 'content' }: Props) {
    const [activeTab, setActiveTab] = useState<'content' | 'flashcards' | 'mcqs' | 'current_affairs'>(initialTab);
    const [revisionData, setRevisionData] = useState<RevisionData | null>(null);
    const [loading, setLoading] = useState(true);

    // Flashcards State
    const [currentFlashIdx, setCurrentFlashIdx] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    // MCQs State
    const [mcqLevel, setMcqLevel] = useState<1 | 2 | 3 | null>(null);
    const [currentMcqIdx, setCurrentMcqIdx] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [testResults, setTestResults] = useState<TestResultData | null>(null);
    const [showReport, setShowReport] = useState(false);

    useEffect(() => {
        const data = getRevisionDataById(chapterId);
        if (data) {
            setRevisionData(data as RevisionData);
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
        mcqs.forEach((mcq: MCQ, idx: number) => {
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
        setMcqLevel(null); // Go back to level selection
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#030303]">
            {/* Header */}
            <div className="bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href={backLink || (subjectId === 'polity' ? '/student/batch1/polity' : `/student/revision/${subjectId}`)} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <ChevronLeft className="w-5 h-4" />
                        <span className="text-sm font-medium">{backLabel || "Back to Revision Hub"}</span>
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
                            { id: 'current_affairs', label: 'Current Affairs', icon: Newspaper },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as 'content' | 'flashcards' | 'mcqs' | 'current_affairs')}
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
                                {content.sections.map((section: ContentSection, idx: number) => (
                                    <div key={idx} className="border-l-4 border-blue-500 pl-6 py-2">
                                        <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                                        {section.content && <p className="mb-4 text-gray-700 dark:text-gray-300">{section.content}</p>}

                                        {section.subsections && (
                                            <div className="space-y-6 mt-4">
                                                {section.subsections?.map((sub: { title: string; content: string; features: string[] }, sIdx: number) => (
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
                        {!mcqLevel ? (
                            // Level Selection Screen
                            <>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {/* Level 1 */}
                                    <div
                                        onClick={() => setMcqLevel(1)}
                                        className="bg-white dark:bg-[#0a0a0a] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 hover:shadow-lg cursor-pointer transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Level 1: Foundation</h3>
                                        <p className="text-sm text-gray-500 mb-4">Master the facts. Direct questions to build your base.</p>
                                        <Badge variant="secondary" className="bg-blue-50 text-blue-700">Recommended Start</Badge>
                                    </div>

                                    {/* Level 2 */}
                                    <div
                                        onClick={() => setMcqLevel(2)}
                                        className="bg-white dark:bg-[#0a0a0a] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-500 hover:shadow-lg cursor-pointer transition-all group opacity-75 hover:opacity-100"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <Layers className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Level 2: Conceptual</h3>
                                        <p className="text-sm text-gray-500 mb-4">Statement-based questions testing deep understanding.</p>
                                        <Badge variant="secondary" className="bg-purple-50 text-purple-700">Coming Soon</Badge>
                                    </div>

                                    {/* Level 3 */}
                                    <div
                                        onClick={() => setMcqLevel(3)}
                                        className="bg-white dark:bg-[#0a0a0a] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-red-500 hover:shadow-lg cursor-pointer transition-all group opacity-75 hover:opacity-100"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <Flame className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Level 3: Applied</h3>
                                        <p className="text-sm text-gray-500 mb-4">Complex scenarios and PYQ-style analysis.</p>
                                        <Badge variant="secondary" className="bg-red-50 text-red-700">Coming Soon</Badge>
                                    </div>
                                </div>

                                {/* View Past Reports Section */}
                                <div className="mt-8 p-4 bg-slate-50 dark:bg-gray-900 rounded-xl border border-slate-200 dark:border-gray-800">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-bold text-slate-700 dark:text-white flex items-center gap-2">
                                            <FileText className="w-5 h-5 text-blue-600" />
                                            Past Test Reports
                                        </h4>
                                        <Link href="/student/batch1-1/deep-report" className="text-sm text-blue-600 hover:underline">
                                            View All in Deep Report →
                                        </Link>
                                    </div>
                                    <ChapterReportHistory chapterId={chapterId} subject="polity" />
                                </div>
                            </>
                        ) : showReport && testResults ? (
                            <StandardTestReport
                                results={testResults}
                                onBack={() => {
                                    setShowReport(false);
                                    setMcqLevel(null);
                                }}
                                onRetake={() => {
                                    setShowReport(false);
                                    setTestResults(null);
                                }}
                            />
                        ) : mcqLevel === 1 ? (
                            // Standardized MCQ Interface
                            <StandardMCQInterface
                                questions={mcqs.map((q: MCQ, i: number) => ({
                                    id: i,
                                    question: q.question,
                                    options: q.options,
                                    correctAnswer: q.correctAnswer,
                                    explanation: q.explanation || "No explanation provided.",
                                    subtopic: "General",
                                    chapter: title
                                }))}
                                onComplete={(results, time) => {
                                    setTestResults({
                                        testTitle: `${title} - Level 1`,
                                        totalTimeTaken: time,
                                        questions: results
                                    });
                                    setShowReport(true);
                                    // Save Progress
                                    const score = results.filter(r => r.isCorrect).length;
                                    updateMcqProgress(chapterId, score, results.length, subjectId);

                                    // Save to Universal Report Persistence
                                    saveChapterReport('polity', chapterId, {
                                        testTitle: `${title} - Level 1`,
                                        totalTimeTaken: time,
                                        score,
                                        totalQuestions: results.length,
                                        accuracy: Math.round((score / results.length) * 100),
                                        timeTaken: time,
                                        questions: results
                                    }, 1);

                                    toast.success(
                                        `✅ Test Submitted! Score: ${score}/${results.length} (${Math.round((score / results.length) * 100)}%) - Report saved to Deep Report Center → Chapters tab`,
                                        { duration: 5000 }
                                    );
                                }}
                                title={`${title} - Level 1`}
                                subtitle="Topic Revision Test"
                                onExit={() => setMcqLevel(null)}
                            />
                        ) : (
                            // Placeholder for Level 2 & 3
                            <div className="text-center py-24 bg-white dark:bg-[#0a0a0a] rounded-3xl border border-gray-200 dark:border-gray-800">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Sparkles className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                                <p className="text-gray-500 mb-6">This level is under development.</p>
                                <button
                                    onClick={() => setMcqLevel(null)}
                                    className="px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-bold"
                                >
                                    Select Another Level
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Tab 4: Current Affairs */}
                {activeTab === 'current_affairs' && (
                    <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                        <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Flame className="w-8 h-8 text-rose-600" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Current Affairs Integrations</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                            Connect static theory with dynamic current events. We have curated specific news items relevant to {title}.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href={`/student/batch1/current-affairs?subject=Polity&source=polity_chapter_${chapterId}`}
                                className="bg-rose-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-rose-700 transition-colors flex items-center gap-2"
                            >
                                <Flame className="w-5 h-5" /> View Related Current Affairs
                            </Link>
                        </div>
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
