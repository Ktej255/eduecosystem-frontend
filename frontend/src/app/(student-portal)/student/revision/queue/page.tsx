"use client";

import React, { useMemo, useState, useEffect } from 'react';
import { getLearningProgress, getTopicRetention, LearningProgress } from '@/services/progressStorage';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Clock, ChevronRight, AlertCircle, CheckCircle2, Zap } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuickReviewQueue() {
    const [progress, setProgress] = useState<LearningProgress | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const p = getLearningProgress();
        setProgress(p);
        setLoading(false);
    }, []);

    const reviewTopics = useMemo(() => {
        if (!progress) return [];

        return progress.completedChapters
            .map(chapterId => {
                const retention = getTopicRetention(chapterId);
                return { chapterId, ...retention };
            })
            .filter(t => t.retrievability < 0.6) // Only topics below 60% retention
            .sort((a, b) => a.retrievability - b.retrievability); // Most forgotten first
    }, [progress]);

    if (loading) return null;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black p-4 md:p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-black italic tracking-tighter text-slate-900 dark:text-white flex items-center gap-3">
                        <Zap className="w-8 h-8 text-amber-500 fill-amber-500" />
                        QUICK REVIEW QUEUE
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        AI-Scheduled sessions based on your unique Ebbinghaus Forgetting Curve.
                    </p>
                </div>

                {/* Status Banner */}
                {reviewTopics.length === 0 ? (
                    <Card className="bg-emerald-500/10 border-emerald-500/20">
                        <CardContent className="p-8 text-center space-y-4">
                            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-emerald-500 italic">Clear Skies!</h3>
                                <p className="text-sm text-slate-400">All topics are currently above 60% retrievability. Come back tomorrow!</p>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        <AnimatePresence>
                            {reviewTopics.map((topic, index) => (
                                <motion.div
                                    key={topic.chapterId}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Card className="group hover:border-amber-500/40 transition-all border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02]">
                                        <CardContent className="p-6 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                                    <Brain className="w-6 h-6 text-amber-500" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-900 dark:text-white capitalize tracking-tight">
                                                        {topic.chapterId.replace(/-/g, ' ')}
                                                    </h3>
                                                    <div className="flex items-center gap-3 mt-1">
                                                        <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-red-500">
                                                            <AlertCircle className="w-3 h-3" />
                                                            {Math.round(topic.retrievability * 100)}% Retention
                                                        </div>
                                                        <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-slate-400">
                                                            <Clock className="w-3 h-3" />
                                                            Last studied {Math.round(topic.daysSince)} days ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <Link href={`/student/${topic.chapterId.split('-')[0]}/${topic.chapterId}`}>
                                                <Button className="bg-slate-900 dark:bg-white dark:text-black font-black italic rounded-full h-12 px-6 group-hover:scale-105 transition-transform">
                                                    RE-MASTER NOW
                                                </Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {/* Summary Box */}
                <div className="p-6 bg-blue-600/5 rounded-2xl border border-blue-500/10 flex items-start gap-4">
                    <Zap className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                        <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">AI Recommendation</p>
                        <p className="text-sm text-slate-400 leading-relaxed italic">
                            "Revising these {reviewTopics.length} topics now will increase your overall exam stability by 24%. Focus on the topics with less than 40% retention first."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
