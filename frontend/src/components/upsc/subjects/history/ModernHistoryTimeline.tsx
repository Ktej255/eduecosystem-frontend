"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Landmark, CheckCircle2, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { SPECTRUM_MODERN_HISTORY } from './data/spectrum-modern-history';
import { getSpectrumProgress, isSpectrumChapterMastered, isSpectrumChapterStarted, type ModernHistoryProgress } from '@/lib/modern-history-store';

export function ModernHistoryTimeline() {
    const [progressData, setProgressData] = useState<Record<number, ModernHistoryProgress>>({});
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Sync local storage on load
        setProgressData(getSpectrumProgress());
    }, []);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Landmark className="h-6 w-6 text-amber-600" />
                Modern Indian History Timeline (Spectrum)
            </h2>

            <ScrollArea className="h-[600px] pr-4">
                <div className="relative border-l-2 border-amber-200 dark:border-amber-800 ml-4 space-y-8 pb-10 mt-4">
                    {SPECTRUM_MODERN_HISTORY.map((chapter) => {
                        const isMastered = mounted ? isSpectrumChapterMastered(chapter.id) : false;
                        const isStarted = mounted ? isSpectrumChapterStarted(chapter.id) : false;

                        return (
                            <div key={chapter.id} className="relative pl-8">
                                {/* Timeline Dot */}
                                <div className={`absolute -left-[11px] top-4 w-5 h-5 rounded-full flex items-center justify-center border-4 border-white shadow-sm ${
                                    isMastered ? 'bg-emerald-500' : isStarted ? 'bg-amber-500' : 'bg-slate-300'
                                }`}>
                                    {isMastered && <CheckCircle2 className="h-3 w-3 text-white" />}
                                    {isStarted && !isMastered && <PlayCircle className="h-3 w-3 text-white" />}
                                </div>

                                <Link href={`/student/upsc/history/read/${chapter.id}`} className="block">
                                    <Card className={`hover:shadow-md transition-shadow cursor-pointer ${
                                        isMastered ? 'border-emerald-200 dark:border-emerald-800/50 hover:border-emerald-300' : 
                                        isStarted ? 'border-amber-200 dark:border-amber-800/50 hover:border-amber-300' : 
                                        'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                                    }`}>
                                        <CardHeader className={`py-3 px-4 border-b ${
                                            isMastered ? 'bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-50' :
                                            isStarted ? 'bg-amber-50/50 dark:bg-amber-900/10 border-amber-50' :
                                            'bg-slate-50/50 dark:bg-slate-900/10 border-slate-50'
                                        }`}>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <Badge variant="outline" className={`mb-2 font-bold ${
                                                        isMastered ? 'border-emerald-200 text-emerald-700 bg-emerald-50' :
                                                        isStarted ? 'border-amber-200 text-amber-700 bg-amber-50' :
                                                        'border-slate-200 text-slate-700 bg-slate-50'
                                                    }`}>
                                                        {chapter.unit}
                                                    </Badge>
                                                    <CardTitle className={`text-lg font-semibold ${isMastered ? 'text-emerald-900' : 'text-foreground'}`}>
                                                        {chapter.title}
                                                    </CardTitle>
                                                </div>
                                                <span className="text-xs font-mono font-bold text-muted-foreground bg-muted px-2 py-1 rounded">CH {chapter.id}</span>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="pt-4 pb-4 px-4">
                                            {chapter.subtopics && chapter.subtopics.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {chapter.subtopics.map((sub, i) => (
                                                        <span key={i} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                                                            {sub}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </ScrollArea>
        </div>
    );
}
