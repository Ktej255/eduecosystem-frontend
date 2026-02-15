"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Calendar, Flag, Landmark } from 'lucide-react';
import Link from 'next/link';
import { SPECTRUM_MODERN_HISTORY } from './data/spectrum-modern-history';

export function ModernHistoryTimeline() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Landmark className="h-6 w-6 text-amber-600" />
                Modern Indian History Timeline (Spectrum)
            </h2>

            <ScrollArea className="h-[600px] pr-4">
                <div className="relative border-l-2 border-amber-200 dark:border-amber-800 ml-4 space-y-8 pb-10">
                    {SPECTRUM_MODERN_HISTORY.map((chapter, index) => (
                        <div key={chapter.id} className="relative pl-8">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500 border-4 border-white dark:border-gray-900 shadow-sm" />

                            <Link href={`/student/batch1/history/read/${chapter.id}`} className="block">
                                <Card className="hover:shadow-md transition-shadow border-amber-100 dark:border-amber-900/30 cursor-pointer hover:border-amber-300 dark:hover:border-amber-700/50">
                                    <CardHeader className="py-3 px-4 bg-amber-50/50 dark:bg-amber-900/10 border-b border-amber-50 dark:border-amber-900/10">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <Badge variant="outline" className="mb-2 border-amber-200 text-amber-700 bg-amber-50">
                                                    {chapter.unit}
                                                </Badge>
                                                <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                    {chapter.title}
                                                </CardTitle>
                                            </div>
                                            <span className="text-xs font-mono text-gray-400">CH {chapter.id}</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-4 pb-4 px-4">
                                        {chapter.subtopics && chapter.subtopics.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {chapter.subtopics.map((sub, i) => (
                                                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400">
                                                        {sub}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
