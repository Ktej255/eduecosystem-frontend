"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, BrainCircuit, PlayCircle } from 'lucide-react';
import SecurePDFViewer from '@/components/upsc/SecurePDFViewer';
import CycleMCQs from '@/components/batch1-1/pomodoro/CycleMCQs';
import LockedVideoPlayer from '@/components/upsc/LockedVideoPlayer';

export default function ChapterViewPage() {
    const params = useParams();
    const router = useRouter();
    const subjectId = params.subjectId as string;
    const bookId = params.bookId as string;
    const chapterId = params.chapterId as string;

    const [activeTab, setActiveTab] = useState("read");

    // Mock Data (In real app, fetch based on IDs)
    const chapterData = {
        title: "Historical Background",
        pdfUrl: "/assets/sample-chapter.pdf", // Ensure this exists or use a dummy
    };

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
                            {chapterData.title}
                        </h1>
                        <p className="text-xs text-gray-500">Chapter {chapterId}</p>
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
            <main className="flex-1 p-4 md:p-6 overflow-hidden flex flex-col">
                {activeTab === 'read' ? (
                    <div className="flex-1 bg-white dark:bg-[#111] rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                        <SecurePDFViewer
                            pdfUrl={chapterData.pdfUrl}
                            title={chapterData.title}
                        />
                    </div>
                ) : activeTab === 'video' ? (
                    <div className="max-w-4xl mx-auto w-full pt-4">
                        <LockedVideoPlayer
                            videoUrl="/assets/sample-lecture.mp4"
                            isUnlocked={false} // Default locked for Level 2 demo
                            title={chapterData.title}
                            onUnlockRequest={() => alert("Consistency Check: Keep studying to unlock!")}
                        />
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto w-full">
                        <CycleMCQs
                            selectedSubtopics={[]} // Dynamic in real app
                            cycleNumber={1}
                            onComplete={(results) => {
                                console.log("MCQ Results", results);
                                alert("Session Completed! Check console for results.");
                            }}
                        // Reuse logic from CycleMCQs
                        />
                    </div>
                )}
            </main>
        </div>
    );
}
