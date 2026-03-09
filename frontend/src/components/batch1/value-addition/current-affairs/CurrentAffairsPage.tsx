"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Calendar, Book, Target, Play } from "lucide-react";
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QuestionBankService, QuestionBankItem } from "@/components/batch1/history/question-bank/QuestionBankService";
import { useRouter } from 'next/navigation';

export default function CurrentAffairsPage() {
    const router = useRouter();
    const [l3Questions, setL3Questions] = useState<QuestionBankItem[]>([]);

    useEffect(() => {
        // Fetch all L3 (Current Affairs / Tough) questions across subjects
        const q = QuestionBankService.getQuestionsByFilter({ level: '3' });
        // Shuffle and pick top 6 for the dashboard
        setL3Questions(q.sort(() => 0.5 - Math.random()).slice(0, 6));
    }, []);

    return (
        <div className="min-h-screen bg-muted dark:bg-black p-4 md:p-8 text-foreground">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/student/value-addition">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <FileText className="h-6 w-6 text-rose-600" />
                            Current Affairs & Updates
                        </h1>
                        <p className="text-sm text-muted-foreground">Official data summaries and Level 3 MCQs for Prelims 2026.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* India Year Book */}
                    <Card className="col-span-1 md:col-span-2 dark:bg-[#0a0a0a] border-border">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Book className="w-5 h-5 text-rose-600" /> India Year Book 2026 (Synopsis)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/20 cursor-pointer hover:shadow-md transition-all">
                                <div className="w-12 h-16 bg-rose-200 rounded flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-rose-800 dark:text-rose-200">Chapter 1: Land & People</h3>
                                    <p className="text-xs text-rose-600 dark:text-rose-300 mt-1 line-clamp-2">
                                        Demographic profile, Physical features, and National Symbols updates.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted border border-slate-100 cursor-pointer hover:shadow-md transition-all">
                                <div className="w-12 h-16 bg-slate-200 rounded flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Chapter 3: Polity</h3>
                                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                        Cabinet Secretariat, Ministries, and recent constitutional amendments.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent PIB Updates */}
                    <Card className="col-span-1 dark:bg-[#0a0a0a] border-border">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-blue-600" /> PIB Year-End Review
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {['Min of Power', 'Min of Defence', 'Min of Earth Sciences'].map((min, i) => (
                                <div key={i} className="flex items-center justify-between p-2 rounded hover:bg-muted dark:hover:bg-slate-900 cursor-pointer">
                                    <span className="text-sm font-medium">{min}</span>
                                    <Badge variant="outline" className="text-xs">Jan 2026</Badge>
                                </div>
                            ))}
                            <div className="pt-4 text-center">
                                <Button variant="link" className="text-blue-600">View Archive</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Level 3 Current Affairs MCQs */}
                <div className="mt-12 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <Target className="h-6 w-6 text-red-500" />
                            Level 3: Current Affairs & Applied MCQs
                        </h2>
                        <Button
                            variant="outline"
                            className="border-red-500/20 text-red-500 hover:bg-red-500/10"
                            onClick={() => router.push('/student/history/question-bank?level=3')}
                        >
                            View All in Question Bank
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {l3Questions.map((q, idx) => (
                            <Card key={idx} className="group hover:border-red-500/50 transition-all cursor-pointer bg-card hover:shadow-md dark:bg-zinc-900/50">
                                <CardHeader className="pb-3">
                                    <div className="flex justify-between items-start gap-2">
                                        <Badge className="bg-red-500/10 text-red-500 border-red-500/20">
                                            L3 Applied Update
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-sm font-medium leading-relaxed mt-3 line-clamp-3">
                                        {q.question}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
                                        <div className="flex items-center gap-1">
                                            <Book className="w-3 h-3" />
                                            <span className="capitalize">{q.section} History</span>
                                        </div>
                                    </div>
                                    <Button
                                        className="w-full mt-4 bg-muted hover:bg-red-500/10 text-muted-foreground hover:text-red-500 border border-border hover:border-red-500/30"
                                        variant="outline"
                                        onClick={() => router.push(`/student/batch1/history/mcq?chapter=${q.chapterId}&section=${q.section}`)}
                                    >
                                        <Play className="w-3 h-3 mr-2" />
                                        Practice Detail
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                        {l3Questions.length === 0 && (
                            <div className="col-span-full text-center py-12 text-muted-foreground bg-muted/50 rounded-xl">
                                No Current Affairs MCQs available at this time.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
