"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Clock, ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { getAllCards, getDueCards, SRSCard } from '@/lib/srs';

export default function QuickReviewWidget() {
    const [dueCards, setDueCards] = useState<SRSCard[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load cards and find due ones
        const allCards = getAllCards();
        const due = getDueCards(allCards);
        setDueCards(due);
        setLoading(false);
    }, []);

    if (loading) return null;

    const dueCount = dueCards.length;

    return (
        <Card className="overflow-hidden border-indigo-500/20 bg-gradient-to-br from-slate-900 to-black relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Brain className="w-24 h-24 text-indigo-500" />
            </div>

            <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-500/20 rounded-lg">
                        <Zap className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white">Quick Review</h3>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Spaced Repetition System</p>
                    </div>
                </div>

                {dueCount > 0 ? (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 text-amber-400" />
                                <span className="text-sm font-medium text-white/80">{dueCount} cards due for review</span>
                            </div>
                            <span className="text-xs font-bold text-indigo-400">Critical</span>
                        </div>

                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                            <div className="text-[10px] font-bold text-white/20 uppercase mb-2">Memory Retention</div>
                            <div className="flex items-end gap-2 mb-1">
                                <span className="text-2xl font-bold text-white">84%</span>
                                <span className="text-xs text-red-400 mb-1">-2% today</span>
                            </div>
                            <Progress value={84} className="h-1 bg-white/5" />
                        </div>

                        <Button
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-12 rounded-xl group"
                            onClick={() => window.location.href = '/student/revision/queue'}
                        >
                            Start Revision Session
                            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-4 text-center py-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <CheckCircle2 className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                            <p className="text-white font-medium">You're all caught up!</p>
                            <p className="text-xs text-white/40 mt-1">Knowledge is currently stable. Check back tomorrow.</p>
                        </div>
                        <Button
                            variant="outline"
                            className="w-full border-white/5 text-white/60 hover:text-white mt-2"
                            onClick={() => window.location.href = '/student/revision/queue'}
                        >
                            View All Flashcards
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
