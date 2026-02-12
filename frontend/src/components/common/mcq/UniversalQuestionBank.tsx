"use client";

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
    Search, BookOpen, Target, ChevronRight,
    Filter, LayoutGrid, List, FileText,
    History, Scale, Globe, Palette,
    Leaf, Atom
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { getGlobalMCQStats, getSubjectChapters, ChapterMeta } from '@/lib/mcq-registry';
import { getChapterReports } from '@/lib/report-persistence';

// Mock data integration for subjects
const SUBJECT_CONFIGS = [
    { id: 'history', title: 'History', icon: History, color: 'text-amber-600', bg: 'bg-amber-50', subjectKey: 'history' as const },
    { id: 'polity', title: 'Polity', icon: Scale, color: 'text-indigo-600', bg: 'bg-indigo-50', subjectKey: 'polity' as const },
    { id: 'geography', title: 'Geography', icon: Globe, color: 'text-blue-600', bg: 'bg-blue-50', subjectKey: 'geography' as const },
    { id: 'economy', title: 'Economy', icon: Palette, color: 'text-emerald-600', bg: 'bg-emerald-50', subjectKey: 'economy' as const },
    { id: 'environment', title: 'Environment', icon: Leaf, color: 'text-green-600', bg: 'bg-green-50', subjectKey: 'environment' as const },
    { id: 'scitech', title: 'Sci-Tech', icon: Atom, color: 'text-purple-600', bg: 'bg-purple-50', subjectKey: 'scitech' as const },
];

interface UniversalQuestionBankProps {
    initialSubject?: 'history' | 'polity' | 'geography' | 'economy' | 'environment' | 'scitech';
}

export default function UniversalQuestionBank({ initialSubject = 'history' }: UniversalQuestionBankProps) {
    const router = useRouter();
    const stats = getGlobalMCQStats();
    const [selectedSubject, setSelectedSubject] = useState<'history' | 'polity' | 'geography' | 'economy' | 'environment' | 'scitech'>(initialSubject);
    const [searchQuery, setSearchQuery] = useState('');

    const currentStats = useMemo(() =>
        stats.find(s => s.subject.toLowerCase().replace(' & ', '').replace(' ', '') === selectedSubject.toLowerCase()) || stats[0],
        [selectedSubject, stats]);

    const activeChapters = useMemo(() => {
        const chapters = getSubjectChapters(selectedSubject);
        return chapters.filter(ch =>
            ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ch.id.toString().includes(searchQuery)
        );
    }, [selectedSubject, searchQuery]);

    const getReportBadge = (chapterId: number | string) => {
        const reports = getChapterReports(selectedSubject);
        const chapterReports = reports.filter(r => r.chapterId === chapterId);
        if (chapterReports.length === 0) return null;

        const bestAcc = Math.max(...chapterReports.map(r => r.accuracy));
        return (
            <Badge className={`${bestAcc >= 80 ? 'bg-emerald-500' : bestAcc >= 50 ? 'bg-amber-500' : 'bg-red-500'} text-white border-none`}>
                Best: {bestAcc}%
            </Badge>
        );
    };

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Centralized Question Bank</h1>
                    <p className="text-neutral-500">Standardized MCQ Archives across all subjects</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <Input
                            placeholder="Search chapters..."
                            className="pl-10 rounded-xl w-full md:w-64 bg-white dark:bg-neutral-900"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 bg-white dark:bg-neutral-900 p-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                        {SUBJECT_CONFIGS.map(sub => {
                            const Icon = sub.icon;
                            const isActive = selectedSubject === sub.id;
                            return (
                                <button
                                    key={sub.id}
                                    onClick={() => setSelectedSubject(sub.id as any)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${isActive
                                        ? `${sub.bg} ${sub.color} shadow-sm`
                                        : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {sub.title}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-none shadow-lg overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <BookOpen className="w-24 h-24" />
                    </div>
                    <CardContent className="p-6 relative">
                        <p className="text-indigo-100 text-sm font-bold uppercase tracking-wider mb-1">Total Questions</p>
                        <h2 className="text-4xl font-black">{currentStats.totalQuestions}</h2>
                        <div className="mt-4 flex items-center gap-2 text-xs text-indigo-100">
                            <Badge className="bg-white/20 text-white border-none">Active</Badge>
                            <span>Across {currentStats.activeChapters} Digitized Chapters</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <CardContent className="p-6">
                        <p className="text-neutral-400 text-sm font-bold uppercase tracking-wider mb-1">Subject Coverage</p>
                        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
                            {currentStats.totalChapters > 0 ? Math.round((currentStats.activeChapters / currentStats.totalChapters) * 100) : 0}%
                        </h2>
                        <div className="mt-4 w-full h-2 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                                style={{ width: `${currentStats.totalChapters > 0 ? (currentStats.activeChapters / currentStats.totalChapters) * 100 : 0}%` }}
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <CardContent className="p-6">
                        <p className="text-neutral-400 text-sm font-bold uppercase tracking-wider mb-1">Standard Levels</p>
                        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Tiered Access</h2>
                        <p className="text-xs text-neutral-500 mt-2">Level 1 (Core), Level 2 (Advanced), Level 3 (Exam Mode)</p>
                    </CardContent>
                </Card>
            </div>

            {/* Chapters Grid */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Digitized Chapters ({activeChapters.length})</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeChapters.map((chapter) => (
                        <Card key={`${selectedSubject}-${chapter.id}`} className="group hover:border-indigo-500 transition-all border-neutral-200 dark:border-neutral-800 shadow-none">
                            <CardContent className="p-5 space-y-4">
                                <div className="flex justify-between items-start">
                                    <Badge variant="outline" className="rounded-lg text-[10px] font-bold uppercase">
                                        Ch {chapter.id}
                                    </Badge>
                                    {getReportBadge(chapter.id)}
                                </div>

                                <div>
                                    <h3 className="font-bold text-neutral-900 dark:text-white line-clamp-1">{chapter.title}</h3>
                                    <p className="text-xs text-neutral-500 flex items-center gap-1 mt-1">
                                        <FileText className="w-3 h-3" />
                                        {chapter.mcqCount} Questions Archived
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="text-[10px] font-bold h-8 rounded-lg border-green-200 text-green-700 bg-green-50/50 hover:bg-green-100"
                                        onClick={() => {
                                            const path = selectedSubject === 'polity'
                                                ? `/student/batch1-1/polity/${chapter.id}/mcq`
                                                : `/student/batch1/${selectedSubject}/mcq?chapter=${chapter.id}&level=1`;
                                            router.push(path);
                                        }}
                                    >
                                        Lvl 1
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="text-[10px] font-bold h-8 rounded-lg border-amber-200 text-amber-700 bg-amber-50/50 hover:bg-amber-100"
                                        onClick={() => {
                                            const path = selectedSubject === 'polity'
                                                ? `/student/batch1-1/polity/${chapter.id}/mcq`
                                                : `/student/batch1/${selectedSubject}/mcq?chapter=${chapter.id}&level=2`;
                                            router.push(path);
                                        }}
                                    >
                                        Lvl 2
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="text-[10px] font-bold h-8 rounded-lg border-red-200 text-red-700 bg-red-50/50 hover:bg-red-100"
                                        onClick={() => {
                                            const path = selectedSubject === 'polity'
                                                ? `/student/batch1-1/polity/${chapter.id}/mcq`
                                                : `/student/batch1/${selectedSubject}/mcq?chapter=${chapter.id}&level=3`;
                                            router.push(path);
                                        }}
                                    >
                                        Lvl 3
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {activeChapters.length === 0 && (
                    <div className="py-20 text-center bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800">
                        <Target className="w-12 h-12 text-neutral-200 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white">No chapters found</h3>
                        <p className="text-neutral-500">Try adjusting your search or subject filter.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
