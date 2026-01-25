"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, BrainCircuit, PlayCircle, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import SecurePDFViewer from '@/components/upsc/SecurePDFViewer';
import LockedVideoPlayer from '@/components/upsc/LockedVideoPlayer';
import AdvancedMCQTest from '@/components/upsc/AdvancedMCQTest'; // New Component
import { getChapter } from '@/data/upsc-chapter-registry';
import { POLITY_REVISION_CHAPTERS, ChapterRevisionData } from '@/components/batch1/polity/data/RevisionRegistry';

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
                                h3&gt;{sub.title}&lt;/h3
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
                                <BrainCircuit className="w-4 h-4" /> Test
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
                        <TabsTrigger value="mcq">Test</TabsTrigger>
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
                        {/* New Advanced MCQ Component */}
                        {chapterData?.mcqs && chapterData.mcqs.length > 0 ? (
                            <AdvancedMCQTest
                                questions={chapterData.mcqs}
                                chapterId={chapterId}
                                bookId={bookId}
                                chapterTitle={title}
                            />
                        ) : (
                            <div className="text-center py-12 text-gray-500">
                                <BrainCircuit className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                <p>No MCQs available for this chapter yet.</p>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}
