"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
    BookOpen, CheckCircle2, ChevronRight, Sword,
    Trophy, Sparkles, Clock, ArrowRight, Zap,
    FileText, Target, Timer, Newspaper
} from "lucide-react";
import {
    getEraChapters,
    getEraProgressStats,
    isEraChapterMastered,
    isEraChapterStarted,
    type HistoryChapterProgress,
} from "@/lib/history-era-store";

import { MEDIEVAL_CHAPTERS, type MedievalChapter } from "./data/medieval-chapters";

const PHASE_META: Record<number, { title: string; color: string; range: [number, number] }> = {
    1: { title: "Early Medieval & Regional Empires",  color: 'rose',   range: [1, 5]  },
    2: { title: "The Delhi Sultanate",                color: 'fuchsia', range: [6, 8]  },
    3: { title: "Vijayanagara & Transition",          color: 'pink',   range: [9, 11] },
    4: { title: "The Mughal Hegemony",                color: 'indigo', range: [12, 16] },
    5: { title: "Decline & Late Medieval Legacies",   color: 'amber',  range: [17, 20] },
};

const SECTION_KEYS: (keyof HistoryChapterProgress)[] = [
    'readSection', 'flashcards', 'drill', 'l1', 'l2', 'l3'
];
const SECTION_LABELS = ['R', 'F', 'D', '1', '2', '3'];

function SectionDots({ progress }: { progress?: HistoryChapterProgress }) {
    return (
        <div className="flex gap-1 items-center">
            {SECTION_KEYS.map((key, i) => {
                const status = (progress?.[key] as string) || 'not-started';
                return (
                    <span
                        key={key}
                        title={`${SECTION_LABELS[i]}: ${status}`}
                        className={`w-2 h-2 rounded-full ${
                            status === 'completed'  ? 'bg-emerald-500' :
                            status === 'in-progress' ? 'bg-amber-400' :
                            'bg-stone-300'
                        }`}
                    />
                );
            })}
        </div>
    );
}

function getPhaseColors(color: string) {
    const map: Record<string, { border: string; bg: string; header: string; icon: string; badge: string }> = {
        rose:    { border: 'border-rose-200',    bg: 'bg-rose-50',    header: 'bg-rose-100/50',    icon: 'text-rose-600 bg-rose-100',    badge: 'bg-rose-100 text-rose-700 hover:bg-rose-200' },
        fuchsia: { border: 'border-fuchsia-200', bg: 'bg-fuchsia-50', header: 'bg-fuchsia-100/50', icon: 'text-fuchsia-600 bg-fuchsia-100', badge: 'bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200' },
        pink:    { border: 'border-pink-200',    bg: 'bg-pink-50',    header: 'bg-pink-100/50',    icon: 'text-pink-600 bg-pink-100',    badge: 'bg-pink-100 text-pink-700 hover:bg-pink-200' },
        indigo:  { border: 'border-indigo-200',  bg: 'bg-indigo-50',  header: 'bg-indigo-100/50',  icon: 'text-indigo-600 bg-indigo-100',  badge: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' },
        amber:   { border: 'border-amber-200',   bg: 'bg-amber-50',   header: 'bg-amber-100/50',   icon: 'text-amber-600 bg-amber-100',   badge: 'bg-amber-100 text-amber-700 hover:bg-amber-200' },
    };
    return map[color] ?? map.indigo;
}

export default function MedievalHistoryDashboard() {
    const router = useRouter();
    const [progressData, setProgressData] = useState<Record<number, HistoryChapterProgress>>({});
    const [stats, setStats] = useState({ mastered: 0, started: 0, total: 20, percentage: 0 });

    useEffect(() => {
        const chapters = getEraChapters('medieval');
        setProgressData(chapters);
        const s = getEraProgressStats('medieval', 20);
        setStats(s);
    }, []);

    const chaptersByPhase = useMemo(() => {
        const grouped: Record<number, MedievalChapter[]> = {};
        for (let i = 1; i <= 5; i++) grouped[i] = MEDIEVAL_CHAPTERS.filter(c => c.phase === i);
        return grouped;
    }, []);

    const handleAction = (id: number, action: 'read' | 'mcq' | 'ca' | 'timer') => {
        const base = `/student/batch1-1/medieval-history/${id}`;
        if (action === 'read')  router.push(base);
        if (action === 'mcq')   router.push(`${base}/mcq`);
        if (action === 'ca')    router.push(`${base}/current-affairs`);
        if (action === 'timer') router.push(`/student/batch1-1/pomodoro?subject=history_medieval&chapter=${id}`);
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-8">

            {/* Header Banner */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <Card className="md:col-span-8 bg-gradient-to-r from-indigo-900 to-fuchsia-900 border-0 shadow-xl overflow-hidden relative">
                    <div className="absolute right-0 top-0 opacity-10 w-64 h-64 pointer-events-none translate-x-8 -translate-y-8 hidden md:block">
                        <Sword className="w-full h-full text-indigo-100" />
                    </div>
                    <CardContent className="p-8 relative z-10">
                        <Badge className="w-fit bg-fuchsia-500/20 text-fuchsia-100 mb-4 border border-fuchsia-500/30">
                            Satish Chandra — Medieval India
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Medieval India Revision
                        </h1>
                        <p className="text-indigo-200 text-lg max-w-2xl mb-6">
                            Master 800 years of Indian medieval history — from the Three Empires to Mughal decline —
                            through 20 focused chapters covering dynasties, culture, and administration.
                        </p>
                        <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl backdrop-blur-sm w-fit border border-white/5">
                            <Trophy className="h-8 w-8 text-fuchsia-300" />
                            <div>
                                <div className="text-white font-bold text-xl">{stats.mastered} / {stats.total}</div>
                                <div className="text-indigo-400 text-sm">Chapters Mastered</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-4 border-2 border-indigo-200">
                    <CardHeader className="bg-indigo-50 border-b border-indigo-100 pb-4">
                        <CardTitle className="text-lg text-indigo-800 flex items-center gap-2">
                            <Clock className="h-5 w-5 text-indigo-500" />
                            My Progress
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-3xl font-black text-indigo-900 tracking-tighter">{stats.percentage}%</span>
                            <span className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-1">Started</span>
                        </div>
                        <Progress value={stats.percentage} className="h-3 bg-indigo-100 mt-2 mb-4" />
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                                <span className="font-medium text-indigo-700">Pending</span>
                                <span className="font-bold text-indigo-900">{stats.total - stats.mastered}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                                <span className="font-medium text-emerald-700">Mastered</span>
                                <span className="font-bold text-emerald-900">{stats.mastered}</span>
                            </div>
                        </div>
                        <Button className="w-full mt-5 bg-indigo-800 hover:bg-indigo-700 text-white font-bold h-11 shadow-lg">
                            Resume Session <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Strategy Spotlight */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { label: 'UPSC Hotspot', desc: 'Cholas, Vijayanagara & Akbar account for 40% of medieval PYQs', icon: Sparkles, color: 'amber' },
                    { label: 'High Priority', desc: `${MEDIEVAL_CHAPTERS.filter(c => c.priority === 'High').length} chapters rated HIGH priority for UPSC Prelims`, icon: Target, color: 'rose' },
                    { label: 'PYQ Coverage', desc: `${MEDIEVAL_CHAPTERS.reduce((s, c) => s + c.pyqCount, 0)}+ PYQs mapped across all 20 chapters`, icon: FileText, color: 'indigo' },
                ].map((item) => (
                    <Card key={item.label} className="border-2 border-stone-200 bg-stone-900 text-white overflow-hidden">
                        <CardContent className="p-5 flex gap-3 items-start">
                            <item.icon className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">{item.label}</div>
                                <p className="text-xs text-stone-300 leading-relaxed">{item.desc}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Chapter Grid by Phase */}
            <div className="space-y-8">
                <div className="flex items-center gap-3 border-b-2 border-indigo-100 pb-4">
                    <Sword className="h-6 w-6 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-stone-800">The 20-Chapter Roadmap</h2>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {[1, 2, 3, 4, 5].map((phaseId) => {
                        const phase = PHASE_META[phaseId];
                        const style = getPhaseColors(phase.color);
                        const chapters = chaptersByPhase[phaseId] ?? [];
                        const phaseMastered = chapters.filter(c => isEraChapterMastered('medieval', c.id)).length;
                        const phaseProgress = Math.round((phaseMastered / Math.max(chapters.length, 1)) * 100);

                        return (
                            <Card key={phaseId} className={`border-2 ${style.border} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
                                <CardHeader className={`${style.header} pb-4`}>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <Badge variant="secondary" className={`${style.badge} mb-2 font-bold tracking-wide uppercase text-xs`}>
                                                Phase {phaseId}
                                            </Badge>
                                            <CardTitle className="text-xl font-extrabold text-stone-800">
                                                {phase.title}
                                            </CardTitle>
                                            <p className="text-sm text-stone-500 mt-1">
                                                Ch {phase.range[0]}–{phase.range[1]}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-bold text-stone-800">{phaseMastered}/{chapters.length}</div>
                                            <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mt-1">Done</div>
                                        </div>
                                    </div>
                                    <Progress value={phaseProgress} className="h-1.5 mt-3 bg-white/50" />
                                </CardHeader>

                                <CardContent className="p-0">
                                    <div className="divide-y divide-stone-100">
                                        {chapters.map((chapter) => {
                                            const prog = progressData[chapter.id];
                                            const isMastered = isEraChapterMastered('medieval', chapter.id);
                                            const hasStarted = isEraChapterStarted('medieval', chapter.id);

                                            return (
                                                <div
                                                    key={chapter.id}
                                                    className={`p-3 flex items-center gap-3 group hover:bg-stone-50 transition-colors ${isMastered ? 'bg-stone-50/50' : 'bg-white'}`}
                                                >
                                                    {/* Chapter Number */}
                                                    <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${
                                                        isMastered ? 'bg-emerald-100 text-emerald-700' : `${style.icon}`
                                                    }`}>
                                                        {isMastered ? <CheckCircle2 className="h-4 w-4" /> : chapter.id}
                                                    </div>

                                                    {/* Title + Dots */}
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-1.5 flex-wrap">
                                                            <h4 className={`font-semibold text-sm truncate ${isMastered ? 'text-stone-400 line-through decoration-stone-300' : 'text-stone-800'}`}>
                                                                {chapter.title}
                                                            </h4>
                                                            {chapter.priority === 'High' && !isMastered && (
                                                                <Badge className="bg-rose-500 text-white border-0 py-0 h-4 px-1.5 text-[9px]">HOT</Badge>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-2 mt-0.5">
                                                            <SectionDots progress={prog} />
                                                            {chapter.pyqCount > 0 && (
                                                                <span className="text-[9px] text-indigo-500 font-bold">{chapter.pyqCount} PYQs</span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* 4-Button Action Row */}
                                                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                                                        <button
                                                            onClick={() => handleAction(chapter.id, 'read')}
                                                            title="Read Chapter"
                                                            className="p-1.5 rounded-lg hover:bg-indigo-100 text-indigo-600 transition-colors"
                                                        >
                                                            <BookOpen className="h-3.5 w-3.5" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleAction(chapter.id, 'mcq')}
                                                            title="MCQ Practice (L1/L2/L3)"
                                                            className="p-1.5 rounded-lg hover:bg-emerald-100 text-emerald-600 transition-colors"
                                                        >
                                                            <Target className="h-3.5 w-3.5" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleAction(chapter.id, 'ca')}
                                                            title="Current Affairs"
                                                            className="p-1.5 rounded-lg hover:bg-amber-100 text-amber-600 transition-colors"
                                                        >
                                                            <Newspaper className="h-3.5 w-3.5" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleAction(chapter.id, 'timer')}
                                                            title="Study with Pomodoro"
                                                            className="p-1.5 rounded-lg hover:bg-rose-100 text-rose-600 transition-colors"
                                                        >
                                                            <Timer className="h-3.5 w-3.5" />
                                                        </button>
                                                    </div>

                                                    {/* Status Indicator */}
                                                    <div className={`w-1.5 h-8 rounded-full flex-shrink-0 ${
                                                        isMastered ? 'bg-emerald-400' :
                                                        hasStarted ? 'bg-amber-400' : 'bg-stone-200'
                                                    }`} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
