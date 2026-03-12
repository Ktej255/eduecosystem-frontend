"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Clock, Tag, ChevronRight, Scale, Users, CheckCircle } from "lucide-react";
import Link from 'next/link';
import { ContentItem } from "../types";
import { Badge } from "@/components/ui/badge";
import { isChapterComplete, markChapterComplete } from "@/services/progressStorage";
import { toast } from "sonner";
import ConfidencePoll from "@/components/shared/ConfidencePoll";
import DOMPurify from "dompurify";

interface EthicsTopicViewerProps {
    content: ContentItem;
    // Future: Add props for case studies or specific visualizations
}

export default function EthicsTopicViewer({ content }: EthicsTopicViewerProps) {
    const [activeSection, setActiveSection] = useState<string>(content.sections?.[0]?.heading || '');
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        setIsCompleted(isChapterComplete(content.id));
    }, [content.id]);

    const handleComplete = () => {
        markChapterComplete(content.id);
        setIsCompleted(true);
    };

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
            {/* Header - Amber/Official Theme */}
            <div className="bg-card dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/student/upsc/ethics">
                            <Button variant="ghost" size="icon" className="hover:bg-amber-50 text-amber-900 dark:text-amber-100 dark:hover:bg-amber-900/20">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
                                    {content.title}
                                </h1>
                                {isCompleted && (
                                    <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-100 gap-1 border border-amber-200">
                                        <CheckCircle className="w-3 h-3" />
                                        Mastered
                                    </Badge>
                                )}
                            </div>
                            <div className="flex items-center gap-3 text-xs text-stone-500 mt-1">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {content.readTime || '20 mins'}
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

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar TOC */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="sticky top-24 space-y-4">
                            <Card className="border-stone-200 dark:border-stone-800 shadow-sm">
                                <CardHeader className="pb-2 bg-stone-50 dark:bg-stone-900/50">
                                    <CardTitle className="text-xs uppercase tracking-wider text-stone-500 font-bold">Concept Structure</CardTitle>
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
                                                ? 'bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-l-2 border-amber-500'
                                                : 'text-stone-600 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-800 border-l-2 border-transparent'
                                                }`}
                                        >
                                            {sec.heading}
                                        </button>
                                    ))}
                                </CardContent>
                            </Card>
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
                                <Card className="overflow-hidden border-t-4 border-t-amber-600 shadow-md hover:shadow-lg transition-shadow">
                                    <CardHeader className="bg-stone-50 dark:bg-stone-900/50 pb-3 border-b border-stone-100 dark:border-stone-800">
                                        <CardTitle className="flex items-center gap-2 text-xl font-serif text-stone-800 dark:text-stone-100">
                                            <Scale className="h-5 w-5 text-amber-600" />
                                            {sec.heading}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-8 prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(sec.content) }} />
                                    </CardContent>
                                </Card>
                            </section>
                        ))}

                        {/* Ethical Summary Box */}
                        <div className="space-y-6">
                            <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-6 border border-amber-200 dark:border-amber-800 shadow-inner">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 mb-3 flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    Essence of the Topic
                                </h3>
                                <p className="text-amber-950 dark:text-amber-100 text-base leading-relaxed font-medium italic">
                                    "{content.summary}"
                                </p>
                                <div className="mt-4 text-xs text-amber-500 font-semibold uppercase tracking-wide">
                                    Ref: {content.source}
                                </div>
                            </div>

                            <div className="flex justify-center pt-8 pb-16">
                                {!isCompleted ? (
                                    <Button size="lg" onClick={handleComplete} className="bg-amber-700 hover:bg-amber-800 text-white gap-2 font-serif">
                                        <CheckCircle className="w-5 h-5" />
                                        Mark as Mastered
                                    </Button>
                                ) : (
                                    <div className="text-center">
                                        <div className="font-bold text-amber-900 dark:text-amber-100">
                                            Ethical Competence Achieved
                                        </div>
                                        <p className="text-stone-500 text-sm mt-2">Reflect on this concept.</p>
                                        <ConfidencePoll chapterId={content.id} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    );
}
