"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft, BookOpen, CheckCircle2, ChevronRight, ChevronLeft,
    FileText, Brain, Target, Compass
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ANCIENT_TOPICS, getAncientPartById, AncientTopic27 } from "@/components/batch1/history/data/ancient-types-27";
import AncientHistoryModule1 from "@/components/batch1/history/AncientHistoryModule1";

// Helper color mapper
const getPartColors = (colorStr: string) => {
    switch (colorStr) {
        case 'stone':
            return { gradient: 'from-stone-600 to-stone-500', bg: 'bg-stone-50', text: 'text-stone-700' };
        case 'amber':
            return { gradient: 'from-amber-600 to-amber-500', bg: 'bg-amber-50', text: 'text-amber-700' };
        case 'emerald':
            return { gradient: 'from-emerald-600 to-emerald-500', bg: 'bg-emerald-50', text: 'text-emerald-700' };
        case 'purple':
            return { gradient: 'from-purple-600 to-purple-500', bg: 'bg-purple-50', text: 'text-purple-700' };
        default:
            return { gradient: 'from-blue-600 to-blue-500', bg: 'bg-blue-50', text: 'text-blue-700' };
    }
}

export default function AncientHistoryChapterPage() {
    const params = useParams();
    const router = useRouter();
    const chapterId = parseInt(params.chapterId as string);

    const [isCompleted, setIsCompleted] = useState(false);
    const [topicData, setTopicData] = useState<AncientTopic27 | null>(null);

    const topic = ANCIENT_TOPICS.find(t => t.id === chapterId);
    const part = topic ? getAncientPartById(topic.part) : null;
    const colors = part ? getPartColors(part.color) : getPartColors('stone');

    useEffect(() => {
        const saved = localStorage.getItem('ancient_27_progress');
        if (saved) {
            const progress = JSON.parse(saved);
            setIsCompleted(progress[chapterId]?.completed || false);
        }

        // In the future: import actual module data from @/components/batch1/history/data/ancient/...
    }, [chapterId]);

    const markComplete = () => {
        const saved = localStorage.getItem('ancient_27_progress');
        const progress = saved ? JSON.parse(saved) : {};
        progress[chapterId] = {
            ...progress[chapterId],
            completed: true,
            lastViewed: new Date().toISOString()
        };
        localStorage.setItem('ancient_27_progress', JSON.stringify(progress));
        setIsCompleted(true);
    };

    const goToTopic = (id: number) => {
        if (id >= 1 && id <= 27) {
            router.push(`/student/batch1-1/ancient-history/${id}`);
        }
    };

    if (!topic || !part) {
        return (
            <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-red-600">Chapter not found</h2>
                <Button onClick={() => router.push('/student/batch1-1/ancient-history')} className="mt-4">
                    Back to Selection
                </Button>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-6 space-y-6">
            {/* Header / Nav */}
            <div className="flex items-center justify-between">
                <Button
                    variant="ghost"
                    onClick={() => router.push('/student/batch1-1/ancient-history')}
                    className="flex items-center gap-2"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </Button>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => goToTopic(chapterId - 1)}
                        disabled={chapterId <= 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Prev
                    </Button>
                    <span className="text-sm font-medium text-gray-500">{chapterId} / 27</span>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => goToTopic(chapterId + 1)}
                        disabled={chapterId >= 27}
                    >
                        Next
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Banner Card */}
            <Card className={`bg-gradient-to-r ${colors.gradient} text-white border-0 shadow-xl overflow-hidden relative`}>
                <div className="absolute right-0 top-0 opacity-10 mix-blend-overlay w-64 h-64 pointer-events-none">
                    <Compass className="w-full h-full text-white" />
                </div>

                <CardContent className="p-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary" className="bg-white/20 text-white font-semibold border-0 hover:bg-white/30 transition-colors">
                                    Part {part.id}: {part.title}
                                </Badge>
                                <Badge variant="secondary" className="bg-white/90 text-stone-800 font-bold border-0 shadow-sm">
                                    Chapter {chapterId}
                                </Badge>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                                {topic.title}
                            </h1>
                            <p className="text-white/80 font-medium max-w-xl">
                                RS Sharma (Ancient India) • 3-Minute Rapid Revision Module
                            </p>
                        </div>

                        <div className="mt-4 md:mt-0 flex-shrink-0 self-start md:self-end">
                            {isCompleted ? (
                                <div className="flex items-center gap-2 bg-green-500/20 text-green-100 px-6 py-3 rounded-xl border border-green-400/30 backdrop-blur-sm">
                                    <CheckCircle2 className="h-6 w-6" />
                                    <span className="font-bold tracking-wide">COMPLETED</span>
                                </div>
                            ) : (
                                <Button
                                    onClick={markComplete}
                                    variant="secondary"
                                    className="bg-white text-stone-900 hover:bg-stone-50 font-bold px-8 py-6 rounded-xl shadow-lg transition-transform active:scale-95"
                                >
                                    <CheckCircle2 className="h-5 w-5 mr-3" />
                                    Mark as Digested
                                </Button>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Read & MCQ Tabs */}
            <Tabs defaultValue="read" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
                    <TabsTrigger value="read" className="text-base py-3">
                        <FileText className="h-4 w-4 mr-2" />
                        Read & Retain
                    </TabsTrigger>
                    <TabsTrigger value="mcq" className="text-base py-3">
                        <Target className="h-4 w-4 mr-2" />
                        UPSC Drill
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="read" className="mt-8 space-y-6">
                    {chapterId === 1 ? (
                        <AncientHistoryModule1
                            chapterNumber="1"
                            isCompleted={isCompleted}
                            onComplete={markComplete}
                        />
                    ) : (
                        <Card className="border-2 border-stone-100 shadow-sm">
                            <CardHeader className="bg-stone-50/50 border-b border-stone-100 pb-4">
                                <CardTitle className="text-xl text-stone-800 flex items-center gap-2">
                                    <Brain className="h-5 w-5 text-amber-500" />
                                    Core Narrative
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-8">
                                <div className="text-center py-16 space-y-4">
                                    <div className="inline-flex items-center justify-center p-4 bg-amber-50 rounded-full mb-4">
                                        <FileText className="h-10 w-10 text-amber-500" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-stone-800">Content Assembly in Progress</h3>
                                    <p className="text-stone-500 max-w-md mx-auto">
                                        The 3-minute rapid revision data for <strong>{topic.title}</strong> is currently being compiled from RS Sharma.
                                        Visual timelines and maps will appear here shortly.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </TabsContent>

                <TabsContent value="mcq" className="mt-8">
                    <Card className="border-2 border-stone-100 shadow-sm">
                        <CardHeader className="bg-stone-50/50 border-b border-stone-100 pb-4">
                            <CardTitle className="text-xl text-stone-800 flex items-center gap-2">
                                <Target className="h-5 w-5 text-emerald-500" />
                                3-Tier Drill Arena
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="text-center py-16 space-y-4">
                                <div className="inline-flex items-center justify-center p-4 bg-emerald-50 rounded-full mb-4">
                                    <BookOpen className="h-10 w-10 text-emerald-500" />
                                </div>
                                <h3 className="text-2xl font-semibold text-stone-800">MCQ Pipeline Initializing</h3>
                                <p className="text-stone-500 max-w-md mx-auto mb-6">
                                    Level 1, Level 2, and Level 3 (Current Affairs) questions are being forged for this chapter.
                                </p>
                                <Button size="lg" disabled className="font-semibold px-8">
                                    Arena Locked
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
