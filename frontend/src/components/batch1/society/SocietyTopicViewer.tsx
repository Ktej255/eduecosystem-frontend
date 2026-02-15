"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Tag, Heart, Users, Milestone, CheckCircle } from "lucide-react";
import Link from 'next/link';
import { ContentItem } from "../types";
import { Badge } from "@/components/ui/badge";
import { useRouter } from 'next/navigation';
import { isChapterComplete, markChapterComplete } from "@/services/progressStorage";
import { toast } from "sonner";
import ConfidencePoll from "@/components/shared/ConfidencePoll";

interface SocietyTopicViewerProps {
    content: ContentItem;
}

export default function SocietyTopicViewer({ content }: SocietyTopicViewerProps) {
    const router = useRouter();
    const [activeSection, setActiveSection] = useState<string>(content.sections[0]?.heading || '');
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        setIsCompleted(isChapterComplete(content.id));
    }, [content.id]);

    const handleComplete = () => {
        markChapterComplete(content.id);
        setIsCompleted(true);
    };

    return (
        <div className="min-h-screen bg-rose-50 dark:bg-rose-950/20">
            {/* Header - Rose/Human Theme */}
            <div className="bg-white dark:bg-stone-900 border-b border-rose-100 dark:border-rose-900 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/student/batch1/society">
                            <Button variant="ghost" size="icon" className="hover:bg-rose-50 text-rose-900 dark:text-rose-100 dark:hover:bg-rose-900/20">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-rose-600" />
                                    {content.title}
                                </h1>
                                {isCompleted && (
                                    <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-100 gap-1 border border-rose-200">
                                        <CheckCircle className="w-3 h-3" />
                                        Internalized
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
                            <Card className="border-rose-100 dark:border-rose-900 shadow-sm">
                                <CardHeader className="pb-2 bg-rose-50 dark:bg-rose-900/10">
                                    <CardTitle className="text-xs uppercase tracking-wider text-rose-800 dark:text-rose-300 font-bold">Flow of Thought</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-1 p-2">
                                    {content.sections.map((sec, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                const element = document.getElementById(`section-${idx}`);
                                                element?.scrollIntoView({ behavior: 'smooth' });
                                                setActiveSection(sec.heading);
                                            }}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === sec.heading
                                                ? 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200 border-l-2 border-rose-500'
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
                        {content.sections.map((sec, idx) => (
                            <section
                                key={idx}
                                id={`section-${idx}`}
                                className="scroll-mt-24 animate-in fade-in slide-in-from-bottom-8 duration-700"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <Card className="overflow-hidden border-t-4 border-t-rose-400 shadow-sm hover:shadow-md transition-shadow">
                                    <CardHeader className="bg-white dark:bg-stone-900 pb-3 border-b border-stone-100 dark:border-stone-800">
                                        <CardTitle className="flex items-center gap-2 text-xl font-serif text-stone-800 dark:text-stone-100">
                                            <Milestone className="h-5 w-5 text-rose-500" />
                                            {sec.heading}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-8 prose prose-rose dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                                        <div dangerouslySetInnerHTML={{ __html: sec.content }} />
                                    </CardContent>
                                </Card>
                            </section>
                        ))}

                        {/* Social Perspective Box */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-rose-50 to-white dark:from-rose-900/20 dark:to-stone-900 rounded-xl p-6 border border-rose-200 dark:border-rose-800 shadow-sm">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-rose-900 dark:text-rose-300 mb-3 flex items-center gap-2">
                                    <Heart className="w-4 h-4" />
                                    Sociological Perspective
                                </h3>
                                <p className="text-stone-800 dark:text-stone-200 text-base leading-relaxed italic">
                                    "{content.summary}"
                                </p>
                                <div className="mt-4 text-xs text-rose-500 font-semibold uppercase tracking-wide">
                                    Source: {content.source}
                                </div>
                            </div>

                            <div className="flex justify-center pt-8 pb-16">
                                {!isCompleted ? (
                                    <Button size="lg" onClick={handleComplete} className="bg-rose-600 hover:bg-rose-700 text-white gap-2 font-serif">
                                        <CheckCircle className="w-5 h-5" />
                                        Mark as Internalized
                                    </Button>
                                ) : (
                                    <div className="text-center">
                                            Social Concept Internalized
                                        </div>
                                        <p className="text-stone-500 text-sm mt-2">How clearly do you see this in society?</p>
                                        <ConfidencePoll chapterId={content.id} />
                                    </div>
                        </div>
                                )}
                    </div>
                </div>
            </div>
        </div>

        </div >
    );
}
