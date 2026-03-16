"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { SAVINDER_SINGH_CHAPTERS } from '@/components/upsc/subjects/geography/data/savinder-singh-data';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowRight, ShieldCheck } from "lucide-react";

export default function SavinderSinghIndexPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
                    <div>
                        <Button variant="ghost" className="mb-4 text-slate-500 rounded-xl" onClick={() => router.push('/student/upsc/geography')}>
                            &larr; Back to Geography Hub
                        </Button>
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-rose-600 rounded-2xl text-white shadow-lg shadow-rose-600/20">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase">
                                    Physical Geography
                                </h1>
                                <div className="flex items-center gap-2 mt-1">
                                    <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200 font-bold px-2 py-0 text-[10px] uppercase">
                                        Savinder Singh Edition
                                    </Badge>
                                    <span className="text-xs text-muted-foreground font-medium">• 45 Chapters Complete Mastery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {SAVINDER_SINGH_CHAPTERS.map(chapter => (
                        <Card 
                            key={chapter.id} 
                            className="group cursor-pointer hover:shadow-xl hover:border-rose-300 transition-all rounded-2xl border-slate-200"
                            onClick={() => router.push(`/student/upsc/geography/savinder-singh/${chapter.id}`)}
                        >
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 font-black text-sm flex items-center justify-center group-hover:bg-rose-100 group-hover:text-rose-700 transition-colors">
                                        {String(chapter.chapterNumber).padStart(2, '0')}
                                    </div>
                                    <ShieldCheck className="w-5 h-5 text-slate-300 group-hover:text-rose-400" />
                                </div>
                                <h3 className="font-bold text-slate-800 text-lg leading-tight mb-2 group-hover:text-rose-700 transition-colors">
                                    {chapter.title}
                                </h3>
                                <p className="text-xs text-slate-500 font-medium">
                                    {(chapter.level1McqCount || 0) + (chapter.level2McqCount || 0) + (chapter.level3McqCount || 0)} Total Questions
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
