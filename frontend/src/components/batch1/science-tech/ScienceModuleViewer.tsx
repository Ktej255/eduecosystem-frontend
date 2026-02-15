"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Brain, PlayCircle, Sparkles, Target, Zap } from "lucide-react";
import { useRouter } from 'next/navigation';
import { SCIENCE_TECH_CONFIG } from './data/science-tech-config';
import { SCI_TECH_SYLLABUS } from './data/scitech-schedule-data';

interface ScienceModuleViewerProps {
    moduleId: string; // e.g., 'space-tech', 'biotech'
}

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import ConfidencePoll from "@/components/shared/ConfidencePoll";
import { isChapterComplete, markChapterComplete } from "@/services/progressStorage";
import { toast } from "sonner";
import { CheckCircle } from 'lucide-react';


export default function ScienceModuleViewer({ moduleId }: ScienceModuleViewerProps) {
    const router = useRouter();
    const [filter, setFilter] = useState<'all' | 'high'>('all');

    const getDetailedTopics = () => {
        const config = SCIENCE_TECH_CONFIG[moduleId as keyof typeof SCIENCE_TECH_CONFIG] as any;
        if (!config || !config.topics) return [];
        return config.topics;
    };

    const topics = getDetailedTopics();
    const filteredTopics = filter === 'all' ? topics : topics.filter((t: any) => t.priority === 'High');

    const [activeTopic, setActiveTopic] = useState<any>(null);
    const [isTopicCompleted, setIsTopicCompleted] = useState(false);

    const handleOpenTopic = (topic: any) => {
        setActiveTopic(topic);
        setIsTopicCompleted(isChapterComplete(topic.id));
    };

    const handleMarkComplete = () => {
        if (activeTopic) {
            markChapterComplete(activeTopic.id);
            setIsTopicCompleted(true);
            toast.success("Topic marked as complete!");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black p-4 md:p-8">
            {/* ... Header code ... */}

            {/* Topics Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-4">
                {filteredTopics.map((topic: any) => (
                    <Card key={topic.id} className="group hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:shadow-md border-slate-200 dark:border-slate-800">
                        <CardContent className="p-0 flex flex-col md:flex-row">
                            {/* ... Status Strip ... */}
                            <div className={`w-full md:w-2 h-2 md:h-auto ${topic.priority === 'High' ? 'bg-rose-500' : 'bg-indigo-500'}`}></div>

                            <div className="p-6 flex-1">
                                {/* ... Card Header ... */}
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {topic.title}
                                        </h3>
                                        {topic.priority === 'High' && (
                                            <Badge variant="secondary" className="text-[10px] bg-rose-50 text-rose-600 border-rose-100 h-5">HIGH YIELD</Badge>
                                        )}
                                    </div>
                                    <div className="text-xs text-slate-400 font-mono">ID: {topic.id}</div>
                                </div>

                                {/* ... Card Body ... */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Static Focus</span>
                                        <p className="text-sm text-slate-600 dark:text-slate-300">{topic.staticFocus}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Key Concepts</span>
                                        <div className="flex flex-wrap gap-1">
                                            {topic.keyConcepts.map((k: string, i: number) => (
                                                <span key={i} className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400">
                                                    {k}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/50">
                                    <Button size="sm" variant="outline" className="gap-2 h-8" onClick={() => handleOpenTopic(topic)}>
                                        <BookOpen className="w-3 h-3" /> Read Notes
                                    </Button>
                                    <Button size="sm" variant="outline" className="gap-2 h-8" onClick={() => toast.info("Coming soon")}>
                                        <Zap className="w-3 h-3 text-amber-500" /> Flashcards
                                    </Button>
                                    <Button size="sm" className="gap-2 h-8 bg-indigo-600 hover:bg-indigo-700 text-white ml-auto" onClick={() => toast.info("Coming soon")}>
                                        <PlayCircle className="w-3 h-3" /> Practice MCQs
                                    </Button>
                                    {topic.currentAffairsCount > 0 && (
                                        <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 ml-2">
                                            <Sparkles className="w-3 h-3" />
                                            {topic.currentAffairsCount} Updates
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {filteredTopics.length === 0 && (
                    <div className="text-center py-12 text-slate-500">
                        No topics found matching your filter.
                    </div>
                )}
            </div>

            {/* Quick Note Viewer Sheet */}
            <Sheet open={!!activeTopic} onOpenChange={(open) => !open && setActiveTopic(null)}>
                <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
                    {activeTopic && (
                        <>
                            <SheetHeader className="mb-6">
                                <Badge className="w-fit mb-2 bg-indigo-100 text-indigo-700 border-indigo-200">
                                    {activeTopic.priority} Priority
                                </Badge>
                                <SheetTitle className="text-2xl font-bold">{activeTopic.title}</SheetTitle>
                                <SheetDescription>
                                    {activeTopic.staticFocus}
                                </SheetDescription>
                            </SheetHeader>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold uppercase text-slate-500 mb-3">Key Concepts</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeTopic.keyConcepts.map((k: string, i: number) => (
                                            <Badge key={i} variant="outline" className="px-3 py-1">
                                                {k}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                                    <h4 className="text-sm font-bold flex items-center gap-2 mb-2">
                                        <Brain className="w-4 h-4 text-purple-500" />
                                        Quick Notes
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        {/* Placeholder for actual content */}
                                        Detailed notes for <strong>{activeTopic.title}</strong> are being prepared.
                                        Focus on the concepts listed above. Use the flashcards (coming soon) for rapid revision.
                                    </p>
                                </div>

                                {isTopicCompleted ? (
                                    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-4">

                                        <div className="flex flex-col items-center gap-4 text-center">
                                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 rounded-full font-bold text-sm">
                                                <CheckCircle className="w-4 h-4" />
                                                Topic Completed
                                            </div>
                                            <p className="text-sm text-slate-500">
                                                How confident are you with {activeTopic.title}?
                                            </p>
                                            <div className="w-full">
                                                <ConfidencePoll chapterId={activeTopic.id} />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                                        <Button
                                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-12 text-lg font-bold"
                                            onClick={handleMarkComplete}
                                        >
                                            Mark as Complete
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </SheetContent>
            </Sheet>
        </div>
    );
}
