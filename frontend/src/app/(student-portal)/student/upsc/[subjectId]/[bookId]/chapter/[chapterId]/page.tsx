"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, BrainCircuit, PlayCircle, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import SecurePDFViewer from '@/components/upsc/SecurePDFViewer';
import LockedVideoPlayer from '@/components/upsc/LockedVideoPlayer';
import { getChapter } from '@/data/upsc-chapter-registry';
import { POLITY_REVISION_CHAPTERS, ChapterRevisionData } from '@/components/batch1/polity/data/RevisionRegistry';

// Simple MCQ Component for UPSC Store
function ChapterMCQs({ mcqs }: { mcqs: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);

    if (!mcqs || mcqs.length === 0) {
        return (
            <div className="text-center py-12 text-gray-500">
                <BrainCircuit className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No MCQs available for this chapter yet.</p>
            </div>
        );
    }

    const currentMCQ = mcqs[currentIndex];

    const handleAnswer = (index: number) => {
        setSelectedAnswer(index);
        setShowExplanation(true);
    };

    const nextQuestion = () => {
        if (currentIndex < mcqs.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        }
    };

    const prevQuestion = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        }
    };

    return (
        <div className="bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-gray-500">Question {currentIndex + 1} of {mcqs.length}</span>
                <span className={`px-2 py-1 rounded text-xs font-bold ${currentMCQ.difficulty === 'easy' ? 'bg-green-100 text-green-600' :
                        currentMCQ.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-red-100 text-red-600'
                    }`}>
                    {currentMCQ.difficulty?.toUpperCase() || 'MEDIUM'}
                </span>
            </div>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                {currentMCQ.question}
            </h3>

            <div className="space-y-3">
                {currentMCQ.options.map((option: string, index: number) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={showExplanation}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${showExplanation
                                ? index === currentMCQ.correctAnswer
                                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                                    : selectedAnswer === index
                                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                                        : 'border-gray-200 dark:border-gray-700'
                                : 'border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold">
                                {String.fromCharCode(65 + index)}
                            </span>
                            <span>{option}</span>
                        </div>
                    </button>
                ))}
            </div>

            {showExplanation && (
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-900 dark:text-blue-100">
                        <strong>Explanation:</strong> {currentMCQ.explanation}
                    </p>
                </div>
            )}

            <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prevQuestion} disabled={currentIndex === 0}>
                    <ChevronLeft className="w-4 h-4 mr-1" /> Previous
                </Button>
                <Button onClick={nextQuestion} disabled={currentIndex === mcqs.length - 1}>
                    Next <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
            </div>
        </div>
    );
}

// Simple Content Viewer for text-based chapter content
function ChapterContent({ content }: { content: any }) {
    if (!content) {
        return (
            <div className="text-center py-12 text-gray-500">
                <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Content is being prepared for this chapter.</p>
                <p className="text-sm mt-2">Check back soon for updated notes!</p>
            </div>
        );
    }

    // If content has sections (typical structure)
    if (content.sections) {
        return (
            <div className="prose dark:prose-invert max-w-none p-6">
                <h1>{content.title}</h1>
                {content.sections.map((section: any, idx: number) => (
                    <div key={idx} className="mb-8">
                        <h2>{section.title}</h2>
                        {section.content && <p>{section.content}</p>}
                        {section.points && (
                            <ul>
                                {section.points.map((point: string, pIdx: number) => (
                                    <li key={pIdx}>{point}</li>
                                ))}
                            </ul>
                        )}
                        {section.subSections && section.subSections.map((sub: any, sIdx: number) => (
                            <div key={sIdx} className="ml-4">
                                <h3>{sub.title}</h3>
                                <p>{sub.content}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    // Fallback: just stringify or show summary
    return (
        <div className="p-6">
            <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {JSON.stringify(content, null, 2)}
            </pre>
        </div>
    );
}

export default function ChapterViewPage() {
    const params = useParams();
    const router = useRouter();
    const subjectId = params.subjectId as string;
    const bookId = params.bookId as string;
    const chapterId = parseInt(params.chapterId as string);

    const [activeTab, setActiveTab] = useState("read");
    const [chapterData, setChapterData] = useState<ChapterRevisionData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load chapter data from registry
        if (bookId === 'laxmikanth') {
            const chapter = POLITY_REVISION_CHAPTERS.find(ch => ch.id === chapterId);
            setChapterData(chapter || null);
        }
        setLoading(false);
    }, [bookId, chapterId]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
        );
    }

    const chapterInfo = getChapter(bookId, chapterId);
    const title = chapterData?.title || chapterInfo?.title || `Chapter ${chapterId}`;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] flex flex-col">
            {/* Header */}
            <header className="bg-white dark:bg-[#111] border-b border-gray-200 dark:border-gray-800 p-4 sticky top-0 z-20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => router.back()}>
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <div>
                        <h1 className="font-bold text-gray-900 dark:text-white leading-tight">
                            {title}
                        </h1>
                        <p className="text-xs text-gray-500">Chapter {chapterId} • {bookId === 'laxmikanth' ? 'M. Laxmikanth' : 'UPSC Store'}</p>
                    </div>
                </div>

                <div className="hidden md:block">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px]">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="read" className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" /> Notes
                            </TabsTrigger>
                            <TabsTrigger value="video" className="flex items-center gap-2">
                                <PlayCircle className="w-4 h-4" /> Video
                            </TabsTrigger>
                            <TabsTrigger value="mcq" className="flex items-center gap-2">
                                <BrainCircuit className="w-4 h-4" /> MCQs
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </header>

            {/* Mobile Tabs */}
            <div className="md:hidden p-4 pb-0">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="read">Read</TabsTrigger>
                        <TabsTrigger value="video">Video</TabsTrigger>
                        <TabsTrigger value="mcq">Practice</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            {/* Content Area */}
            <main className="flex-1 p-4 md:p-6 overflow-auto">
                {activeTab === 'read' ? (
                    <div className="max-w-4xl mx-auto bg-white dark:bg-[#111] rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                        {chapterInfo?.pdfUrl ? (
                            <SecurePDFViewer pdfUrl={chapterInfo.pdfUrl} title={title} />
                        ) : (
                            <ChapterContent content={chapterData?.content} />
                        )}
                    </div>
                ) : activeTab === 'video' ? (
                    <div className="max-w-4xl mx-auto w-full pt-4">
                        <LockedVideoPlayer
                            videoUrl="/assets/sample-lecture.mp4"
                            isUnlocked={false}
                            title={title}
                            onUnlockRequest={() => alert("Keep studying consistently to unlock video lectures!")}
                        />
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto w-full">
                        <ChapterMCQs mcqs={chapterData?.mcqs || []} />
                    </div>
                )}
            </main>
        </div>
    );
}
