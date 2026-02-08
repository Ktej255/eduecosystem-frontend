"use client";

import { use, Suspense } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Target, Sparkles, Lock, Layers, Flame, Trophy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TOPIC_TITLES } from "@/components/batch1-1/polity/data/polity-types-95";
import ChapterRevisionView from "@/components/batch1/polity/revision/ChapterRevisionView";

interface MCQPageProps {
    params: Promise<{ topicId: string }>;
}

function MCQContent({ topicId }: { topicId: number }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const level = searchParams.get('level') || '1';
    const topic = TOPIC_TITLES.find(t => t.id === topicId);

    // Level 1 - Use existing ChapterRevisionView with MCQ tab
    if (level === '1') {
        return (
            <ChapterRevisionView
                chapterId={topicId}
                subjectId="polity"
                backLink="/student/batch1-1/polity"
                backLabel="Back to Polity Home"
                initialTab="mcqs"
            />
        );
    }

    // Level 2 & 3 - Premium placeholder cards
    const levelConfig = {
        '2': {
            title: 'Level 2: Conceptual MCQs',
            subtitle: 'Deep Understanding & Application',
            description: 'Questions that test your conceptual clarity and ability to connect multiple topics. These MCQs require understanding the "Why" behind the facts.',
            color: 'from-purple-600 to-indigo-600',
            features: [
                'Statement-based questions',
                'Multi-concept integration',
                'Conceptual traps awareness',
                'UPSC Prelims style depth'
            ],
            icon: Layers
        },
        '3': {
            title: 'Level 3: Applied MCQs',
            subtitle: 'Current Affairs + Constitutional Debate',
            description: 'The most challenging tier. Questions that combine constitutional provisions with recent judgments, amendments, and current affairs scenarios.',
            color: 'from-red-600 to-orange-500',
            features: [
                'Case study based questions',
                'Supreme Court judgment integration',
                'Current affairs application',
                'Constitutional debate scenarios'
            ],
            icon: Flame
        }
    };

    const config = levelConfig[level as '2' | '3'] || levelConfig['2'];
    const LevelIcon = config.icon;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
            <div className="max-w-4xl mx-auto p-4 md:p-8">
                {/* Back Button */}
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="mb-6 text-slate-600 hover:text-slate-900"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Chapter
                </Button>

                {/* Header */}
                <div className="mb-8">
                    <Badge className="mb-3 bg-slate-200 text-slate-700 font-mono">
                        Chapter {topicId}
                    </Badge>
                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2">
                        {topic?.title || `Topic ${topicId}`}
                    </h1>
                </div>

                {/* Level Card */}
                <Card className={`bg-gradient-to-r ${config.color} text-white border-0 shadow-2xl overflow-hidden relative`}>
                    <div className="absolute top-0 right-0 opacity-10">
                        <LevelIcon size={200} />
                    </div>
                    <CardHeader className="relative z-10 pb-2">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-3 bg-white/20 rounded-xl">
                                <LevelIcon className="w-8 h-8" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl font-black">{config.title}</CardTitle>
                                <CardDescription className="text-white/80 font-medium">
                                    {config.subtitle}
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="relative z-10 pt-0">
                        <p className="text-white/90 mb-6 leading-relaxed">
                            {config.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {config.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                                    <CheckCircle2 className="w-4 h-4 text-white/70" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Coming Soon Badge */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-white/20 px-4 py-3 rounded-xl">
                                <Lock className="w-5 h-5" />
                                <span className="font-bold">Coming Soon</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/70">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-sm">Premium content in development</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Level Selector */}
                <div className="mt-8">
                    <h3 className="text-sm font-bold text-slate-500 uppercase mb-4">Switch Level</h3>
                    <div className="flex gap-3">
                        {['1', '2', '3'].map((lvl) => (
                            <Button
                                key={lvl}
                                variant={lvl === level ? "default" : "outline"}
                                onClick={() => router.push(`/student/batch1-1/polity/${topicId}/mcq?level=${lvl}`)}
                                className={`flex-1 ${lvl === level ? 'bg-slate-900 text-white' : ''}`}
                            >
                                <Target className="w-4 h-4 mr-2" />
                                Level {lvl}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Progress Teaser */}
                <Card className="mt-8 bg-slate-900 text-white border-0">
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="p-3 bg-amber-500/20 rounded-xl">
                            <Trophy className="w-8 h-8 text-amber-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Master Level 1 First</h4>
                            <p className="text-slate-400 text-sm">
                                Complete all Level 1 MCQs for this chapter to unlock higher levels.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default function MCQPage({ params }: MCQPageProps) {
    const { topicId } = use(params);
    const id = parseInt(topicId, 10);

    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <MCQContent topicId={id} />
        </Suspense>
    );
}
