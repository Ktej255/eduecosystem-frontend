"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Clock, Tag, ChevronRight, Palette, Landmark, CheckCircle, Sparkles } from "lucide-react";
import Link from 'next/link';
import { ContentItem } from "../types";
import { Badge } from "@/components/ui/badge";
import { isChapterComplete, markChapterComplete } from "@/services/progressStorage";
import { toast } from "sonner";
import ConfidencePoll from "@/components/shared/ConfidencePoll";
import { motion } from "framer-motion";
import DOMPurify from "dompurify";

interface ArtCultureTopicViewerProps {
    content: ContentItem;
}

export default function ArtCultureTopicViewer({ content }: ArtCultureTopicViewerProps) {
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        setIsCompleted(isChapterComplete(content.id));
    }, [content.id]);

    const handleComplete = () => {
        markChapterComplete(content.id);
        setIsCompleted(true);
        toast.success("Golden Knowledge Unlocked!");
    };

    return (
        <div className="min-h-screen bg-rose-50/30 dark:bg-neutral-950 font-sans">
            {/* Header - Rose/Gold Theme */}
            <div className="bg-card/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-rose-100 dark:border-rose-900/30 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/student/upsc/art-culture">
                            <Button variant="ghost" size="icon" className="hover:bg-rose-100 text-rose-900 dark:text-rose-100 dark:hover:bg-rose-900/20">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                                    {content.title}
                                </h1>
                                {isCompleted && (
                                    <Badge variant="secondary" className="bg-rose-100 text-rose-800 hover:bg-rose-100 gap-1 border border-rose-200">
                                        <CheckCircle className="w-3 h-3" />
                                        Inherited Master
                                    </Badge>
                                )}
                            </div>
                            <div className="flex items-center gap-3 text-xs text-neutral-500 mt-1 uppercase tracking-wider font-semibold">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {content.readTime || '15 mins'}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Tag className="w-3 h-3 text-rose-500" />
                                    Art & Culture
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 rounded-3xl bg-gradient-to-br from-rose-600 via-pink-700 to-amber-600 text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <Badge className="bg-card/20 hover:bg-card/30 text-white border-0 mb-4 px-3 py-1">
                            Heritage Module
                        </Badge>
                        <h2 className="text-3xl font-bold mb-4">{content.description}</h2>
                        <div className="flex items-center gap-4 text-rose-100 text-sm">
                            <div className="flex items-center gap-1.5 bg-black/10 px-3 py-1 rounded-full">
                                <Landmark className="w-4 h-4" />
                                Static Pillar
                            </div>
                            <div className="flex items-center gap-1.5 bg-black/10 px-3 py-1 rounded-full">
                                <Palette className="w-4 h-4" />
                                Visual Focus
                            </div>
                        </div>
                    </div>
                    {/* Abstract background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-card/10 rounded-full blur-3xl -mr-20 -mt-20" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-400/20 rounded-full blur-3xl -ml-20 -mb-20" />
                </motion.div>

                {/* Main Content */}
                <Card className="border-rose-100 dark:border-rose-900/30 overflow-hidden shadow-xl">
                    <CardContent className="p-8 md:p-12 prose prose-rose dark:prose-invert max-w-none prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-neutral-700 dark:prose-p:text-neutral-300 leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.content || "") }} />
                    </CardContent>
                </Card>

                {/* Completion Loop */}
                <div className="space-y-6 pb-20">
                    <div className="bg-rose-50/50 dark:bg-rose-950/20 rounded-2xl p-8 border border-rose-100 dark:border-rose-900/30 text-center shadow-inner">
                        <Sparkles className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-rose-900 dark:text-rose-100 mb-2">
                            Knowledge Checkpoint
                        </h3>
                        <p className="text-rose-700/70 dark:text-rose-300/60 mb-8 max-w-md mx-auto">
                            Transform this temporary memory into a permanent one by marking it complete and rating your confidence.
                        </p>

                        {!isCompleted ? (
                            <Button size="lg" onClick={handleComplete} className="bg-rose-600 hover:bg-rose-700 text-white gap-2 px-8 py-6 rounded-xl text-lg shadow-lg shadow-rose-500/20 transition-all hover:scale-105">
                                <CheckCircle className="w-5 h-5" />
                                Mark as Heritage Mastered
                            </Button>
                        ) : (
                            <div className="space-y-6 animate-in fade-in zoom-in duration-500">
                                <Badge className="bg-green-500 text-white px-4 py-1 animate-pulse">
                                    Topic Mastered!
                                </Badge>
                                <ConfidencePoll chapterId={content.id} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
