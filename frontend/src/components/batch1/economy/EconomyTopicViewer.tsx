"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Clock, Tag, ChevronRight, BrainCircuit, GraduationCap, CheckCircle } from "lucide-react";
import Link from 'next/link';
import { ContentItem, MCQSet, FlashcardSet } from "../types";
import ReactMarkdown from 'react-markdown';
import { Badge } from "@/components/ui/badge";
import { isChapterComplete, markChapterComplete } from "@/services/progressStorage";
import { toast } from "sonner"; // Assuming sonner is used, or a simple alert
import ConfidencePoll from "@/components/shared/ConfidencePoll";
import AIAvatarTeachingAssistant from '@/components/shared/AIAvatarTeachingAssistant';
import InteractiveFAQ from '@/components/shared/InteractiveFAQ';
import DOMPurify from "dompurify";

interface EconomyTopicViewerProps {
    content: ContentItem;
    mcqs?: MCQSet;
    flashcards?: FlashcardSet;
    visualization?: React.ReactNode;
}

export default function EconomyTopicViewer({ content, mcqs, flashcards, visualization }: EconomyTopicViewerProps) {
    const [activeSection, setActiveSection] = useState<string>(content.sections?.[0]?.heading || '');
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        setIsCompleted(isChapterComplete(content.id));
    }, [content.id]);

    const handleComplete = () => {
        markChapterComplete(content.id);
        setIsCompleted(true);
        // Optional: Trigger a confetti or toast
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black">
            {/* Header */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/student/batch1/economy">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                                    {content.title}
                                </h1>
                                {isCompleted && (
                                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 gap-1">
                                        <CheckCircle className="w-3 h-3" />
                                        Completed
                                    </Badge>
                                )}
                            </div>
                            <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {content.readTime || '15 mins'}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Tag className="w-3 h-3" />
                                    {content.tags.join(", ")}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
                {/* Visualization Section */}
                {visualization && (
                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-indigo-600 rounded-full"></span>
                            Interactive Concept
                        </h2>
                        {visualization}
                    </section>
                )}

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar TOC */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="sticky top-24 space-y-4">
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-xs uppercase tracking-wider text-slate-500 font-bold">In this Chapter</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-1 p-2">
                                    {content.sections?.map((sec, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                const element = document.getElementById(`section-${idx}`);
                                                element?.scrollIntoView({ behavior: 'smooth' });
                                                setActiveSection(sec.heading);
                                            }}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === sec.heading
                                                ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                                                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                                                }`}
                                        >
                                            {sec.heading}
                                        </button>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Action Cards */}
                            {flashcards && (
                                <Card className="bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-2 mb-2 text-amber-700 dark:text-amber-400 font-bold">
                                            <BrainCircuit className="w-4 h-4" />
                                            <span>Flashcards</span>
                                        </div>
                                        <p className="text-xs text-amber-600/80 mb-3">Review key terms to boost retention.</p>
                                        <Button size="sm" variant="outline" className="w-full border-amber-200 text-amber-700 hover:bg-amber-100 dark:hover:bg-amber-900/30">
                                            Start Review
                                        </Button>
                                    </CardContent>
                                </Card>
                            )}

                            {mcqs && (
                                <Card className="bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-2 mb-2 text-emerald-700 dark:text-emerald-400 font-bold">
                                            <GraduationCap className="w-4 h-4" />
                                            <span>Practice Quiz</span>
                                        </div>
                                        <p className="text-xs text-emerald-600/80 mb-3">Test your understanding with {mcqs.questions.length} questions.</p>
                                        <Button size="sm" variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/30">
                                            Start Quiz
                                        </Button>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-8">
                        {content.sections?.map((sec, idx) => (
                            <section
                                key={idx}
                                id={`section-${idx}`}
                                className="scroll-mt-24 animate-in fade-in slide-in-from-bottom-8 duration-700"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <Card className="overflow-hidden border-t-4 border-t-indigo-500 shadow-sm hover:shadow-md transition-shadow">
                                    <CardHeader className="bg-slate-50 dark:bg-slate-900/50 pb-3 border-b border-slate-100 dark:border-slate-800">
                                        <CardTitle className="flex items-center gap-2 text-lg text-slate-800 dark:text-slate-100">
                                            <BookOpen className="h-5 w-5 text-indigo-500" />
                                            {sec.heading}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6 prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(sec.content) }} />
                                    </CardContent>
                                </Card>
                            </section>
                        ))}

                        {/* Interactive FAQ Section */}
                        <InteractiveFAQ
                            lessonId={content.id}
                            context={content.sections?.map(s => s.content).join(' ') || ''}
                        />

                        {/* Summary & Completion Box */}
                        <div className="space-y-6">
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border border-indigo-100 dark:border-indigo-800">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-300 mb-2">Summary</h3>
                                <p className="text-indigo-800 dark:text-indigo-200 text-sm leading-relaxed">
                                    {content.summary}
                                </p>
                                <div className="mt-4 text-xs text-indigo-400">
                                    Source: {content.source}
                                </div>
                            </div>

                            <div className="flex justify-center pt-8 pb-16">
                                {!isCompleted ? (
                                    <Button size="lg" onClick={handleComplete} className="bg-emerald-600 hover:bg-emerald-700 gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        Mark as Complete
                                    </Button>
                                ) : (
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full font-medium">
                                            <CheckCircle className="w-5 h-5" />
                                            Chapter Completed!
                                        </div>
                                        <p className="text-slate-500 text-sm">Great job! Time to practice.</p>
                                        <ConfidencePoll chapterId={content.id} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Assistant */}
            <AIAvatarTeachingAssistant
                lessonTitle={content.title}
                summary={content.summary}
                keyTakeaways={content.sections.map(s => s.heading).slice(0, 3)}
            />
        </div>
    );
}
