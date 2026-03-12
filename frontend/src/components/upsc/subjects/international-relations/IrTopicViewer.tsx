"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Clock, Tag, ChevronRight, Globe, TrendingUp, Shield, CheckCircle } from "lucide-react";
import Link from 'next/link';
import { ContentItem } from "../types";
import { Badge } from "@/components/ui/badge";
import { useRouter } from 'next/navigation';
import { isChapterComplete, markChapterComplete } from "@/services/progressStorage";
import { toast } from "sonner";
import ConfidencePoll from "@/components/shared/ConfidencePoll";
import DOMPurify from "dompurify";


interface IrTopicViewerProps {
    content: ContentItem;
    moduleId?: string;
}

export default function IrTopicViewer({ content, moduleId }: IrTopicViewerProps) {
    const router = useRouter();
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
        <div className="min-h-screen bg-muted">
            {/* Header - Global/Blue Theme */}
            <div className="bg-card border-b border-border sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => router.back()}
                            className="hover:bg-blue-50 text-blue-900 dark:text-blue-100 dark:hover:bg-blue-900/20"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-blue-600" />
                                    {content.title}
                                </h1>
                                {isCompleted && (
                                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 gap-1 border border-blue-200">
                                        <CheckCircle className="w-3 h-3" />
                                        Analyzed
                                    </Badge>
                                )}
                            </div>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {content.readTime || '25 mins'}
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
                            <Card className="border-border shadow-sm">
                                <CardHeader className="pb-2 bg-muted/50">
                                    <CardTitle className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Key Dimensions</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-1 p-2">
                                    {content.sections?.map((sec: any, idx: number) => (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                const element = document.getElementById(`section-${idx}`);
                                                element?.scrollIntoView({ behavior: 'smooth' });
                                                setActiveSection(sec.heading);
                                            }}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === sec.heading
                                                ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-l-2 border-blue-500'
                                                : 'text-muted-foreground hover:bg-muted dark:text-muted-foreground dark:hover:bg-slate-800 border-l-2 border-transparent'
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
                        {content.sections?.map((sec: any, idx: number) => (
                            <section
                                key={idx}
                                id={`section-${idx}`}
                                className="scroll-mt-24 animate-in fade-in slide-in-from-bottom-8 duration-700"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <Card className="overflow-hidden border-t-4 border-t-blue-500 shadow-sm hover:shadow-md transition-shadow">
                                    <CardHeader className="bg-muted/50 pb-3 border-b border-slate-100">
                                        <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                                            <Shield className="h-5 w-5 text-blue-500" />
                                            {sec.heading}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6 prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(sec.content) }} />
                                    </CardContent>
                                </Card>
                            </section>
                        ))}

                        {/* Analysis Box */}
                        <div className="space-y-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4" />
                                    Strategic Analysis
                                </h3>
                                <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                                    {content.summary}
                                </p>
                                <div className="mt-4 text-xs text-blue-500">
                                    Source: {content.source}
                                </div>
                            </div>

                            <div className="flex justify-center pt-8 pb-16">
                                {!isCompleted ? (
                                    <Button size="lg" onClick={handleComplete} className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        Mark as Analyzed
                                    </Button>
                                ) : (
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-100 text-blue-900 rounded-full font-bold border border-blue-200">
                                            <CheckCircle className="w-5 h-5" />
                                            Strategic Analysis Complete
                                        </div>
                                        <p className="text-muted-foreground text-sm">Strategic depth analysis recorded.</p>
                                        <ConfidencePoll chapterId={content.id} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
