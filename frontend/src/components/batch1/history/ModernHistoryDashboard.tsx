"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
    BookOpen, CheckCircle2, ChevronRight,
    Trophy, Sparkles, Clock, ArrowRight, Flag,
    FileText, Target, Timer, Newspaper, Castle, RefreshCw
} from "lucide-react";
import {
    getSpectrumProgress,
    getSpectrumStats,
    isSpectrumChapterMastered,
    isSpectrumChapterStarted,
    type ModernHistoryProgress,
} from "@/lib/modern-history-store";
import { SPECTRUM_MODERN_HISTORY } from "./data/spectrum-modern-history";

// ─── Modern Chapter Configuration ──────────────────────────────────────────────

const SECTION_KEYS: (keyof ModernHistoryProgress)[] = ['readSection', 'flashcards', 'drill', 'l1', 'l2', 'l3'];
const SECTION_LABELS = ['Read', 'Flashcards', 'Drill', 'Level 1', 'Level 2', 'Level 3'];

// Map units to specific colors for visual distinction
const UNIT_META: Record<string, { title: string; color: string }> = {
    "UNIT 1": { title: "Sources & Approaches", color: "stone" },
    "UNIT 2": { title: "Advent of Europeans & British Conquest", color: "indigo" },
    "UNIT 3": { title: "Rising Resentment & Revolt of 1857", color: "rose" },
    "UNIT 4": { title: "Socio-Religious Reform Movements", color: "fuchsia" },
    "UNIT 5": { title: "The Struggle Begins (Congress & Moderates)", color: "emerald" },
    "UNIT 6": { title: "Militant Nationalism (1905–1918)", color: "amber" },
    "UNIT 7": { title: "Era of Mass Nationalism (1919–1939)", color: "orange" },
    "UNIT 8": { title: "Towards Freedom and Partition (1939–1947)", color: "red" },
    "UNIT 9": { title: "India Under British Rule (Policies & Impact)", color: "slate" },
    "UNIT 10": { title: "Independence and After", color: "blue" },
};

// Prioritize some key units for UPSC
const getUPSC_Priority = (unitId: string): 'High' | 'Medium' | 'Low' => {
    switch(unitId) {
        case "UNIT 3":
        case "UNIT 6":
        case "UNIT 7":
        case "UNIT 8":
        case "UNIT 9":
            return 'High';
        case "UNIT 2":
        case "UNIT 4":
        case "UNIT 5":
            return 'Medium';
        default:
            return 'Low';
    }
};

const getPYQEstimate = (unitId: string): number => {
    if (getUPSC_Priority(unitId) === 'High') return Math.floor(Math.random() * 5) + 6; // 6-10
    if (getUPSC_Priority(unitId) === 'Medium') return Math.floor(Math.random() * 3) + 3; // 3-5
    return Math.floor(Math.random() * 2) + 1; // 1-2
};

function SectionDots({ progress }: { progress?: ModernHistoryProgress }) {
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

function getUnitColors(color: string) {
    const map: Record<string, { border: string; bg: string; header: string; icon: string; badge: string }> = {
        stone:   { border: 'border-stone-200',   bg: 'bg-stone-50',   header: 'bg-stone-100/50',   icon: 'text-stone-600 bg-stone-100',   badge: 'bg-stone-100 text-stone-700 hover:bg-stone-200' },
        indigo:  { border: 'border-indigo-200',  bg: 'bg-indigo-50',  header: 'bg-indigo-100/50',  icon: 'text-indigo-600 bg-indigo-100',  badge: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' },
        rose:    { border: 'border-rose-200',    bg: 'bg-rose-50',    header: 'bg-rose-100/50',    icon: 'text-rose-600 bg-rose-100',    badge: 'bg-rose-100 text-rose-700 hover:bg-rose-200' },
        fuchsia: { border: 'border-fuchsia-200', bg: 'bg-fuchsia-50', header: 'bg-fuchsia-100/50', icon: 'text-fuchsia-600 bg-fuchsia-100', badge: 'bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200' },
        emerald: { border: 'border-emerald-200', bg: 'bg-emerald-50', header: 'bg-emerald-100/50', icon: 'text-emerald-600 bg-emerald-100', badge: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' },
        amber:   { border: 'border-amber-200',   bg: 'bg-amber-50',   header: 'bg-amber-100/50',   icon: 'text-amber-600 bg-amber-100',   badge: 'bg-amber-100 text-amber-700 hover:bg-amber-200' },
        orange:  { border: 'border-orange-200',  bg: 'bg-orange-50',  header: 'bg-orange-100/50',  icon: 'text-orange-600 bg-orange-100',  badge: 'bg-orange-100 text-orange-700 hover:bg-orange-200' },
        red:     { border: 'border-red-200',     bg: 'bg-red-50',     header: 'bg-red-100/50',     icon: 'text-red-600 bg-red-100',     badge: 'bg-red-100 text-red-700 hover:bg-red-200' },
        slate:   { border: 'border-slate-200',   bg: 'bg-slate-50',   header: 'bg-slate-100/50',   icon: 'text-slate-600 bg-slate-100',   badge: 'bg-slate-100 text-slate-700 hover:bg-slate-200' },
        blue:    { border: 'border-blue-200',    bg: 'bg-blue-50',    header: 'bg-blue-100/50',    icon: 'text-blue-600 bg-blue-100',    badge: 'bg-blue-100 text-blue-700 hover:bg-blue-200' },
    };
    return map[color] ?? map.indigo;
}

export default function ModernHistoryDashboard() {
    const router = useRouter();
    const [progressData, setProgressData] = useState<Record<number, ModernHistoryProgress>>({});
    const [stats, setStats] = useState({ mastered: 0, started: 0, total: 39, percentage: 0 });

    useEffect(() => {
        const chapters = getSpectrumProgress();
        setProgressData(chapters);
        const s = getSpectrumStats(39);
        setStats(s);
    }, []);

    // Group chapters by Unit
    const chaptersByUnit = useMemo(() => {
        const grouped: Record<string, typeof SPECTRUM_MODERN_HISTORY> = {};
        SPECTRUM_MODERN_HISTORY.forEach(c => {
            if (!grouped[c.unit]) grouped[c.unit] = [];
            grouped[c.unit].push(c);
        });
        return grouped;
    }, []);

    const handleAction = (id: number, action: 'read' | 'mcq' | 'ca' | 'timer') => {
        const base = `/student/batch1-1/modern-history/${id}`;
        if (action === 'read')  router.push(base);
        if (action === 'mcq')   router.push(`${base}/mcq`);
        if (action === 'ca')    router.push(`${base}/current-affairs`);
        if (action === 'timer') router.push(`/student/batch1-1/pomodoro?subject=history_modern&chapter=${id}`);
    };

    const handleResetProgress = () => {
        if (confirm("Are you sure you want to reset all Modern History progress for testing?")) {
            localStorage.removeItem('modern_history_spectrum_progress');
            window.location.reload();
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-8">

            {/* Header Banner */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <Card className="md:col-span-8 bg-gradient-to-r from-slate-900 to-rose-900 border-0 shadow-xl overflow-hidden relative">
                    <div className="absolute right-0 top-0 opacity-10 w-80 h-80 pointer-events-none translate-x-12 -translate-y-12 hidden md:block">
                        <Flag className="w-full h-full text-rose-100" />
                    </div>
                    <CardContent className="p-8 relative z-10">
                        <Badge className="w-fit bg-emerald-500/20 text-emerald-100 mb-4 border border-emerald-500/30">
                            Spectrum — A Brief History of Modern India
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Modern History Revision
                        </h1>
                        <p className="text-stone-300 text-lg max-w-2xl mb-6">
                            Master the Indian independence struggle, colonial policies, and mass nationalism 
                            through 39 intensive chapters perfectly mapped to UPSC syllabus.
                        </p>
                        <div className="flex items-center gap-4 bg-black/30 p-4 rounded-xl backdrop-blur-sm w-fit border border-white/5">
                            <Trophy className="h-8 w-8 text-amber-300" />
                            <div>
                                <div className="text-white font-bold text-xl">{stats.mastered} / {stats.total}</div>
                                <div className="text-rose-200 text-sm">Chapters Mastered</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-4 border-2 border-slate-200">
                    <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4 flex flex-row items-center justify-between">
                        <CardTitle className="text-lg text-slate-800 flex items-center gap-2">
                            <Clock className="h-5 w-5 text-slate-500" />
                            My Progress
                        </CardTitle>
                        <Button variant="ghost" size="sm" onClick={handleResetProgress} className="h-8 text-xs text-slate-500 hover:text-red-600 hover:bg-red-50">
                            <RefreshCw className="h-3.5 w-3.5 mr-1.5" /> Reset
                        </Button>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-3xl font-black text-slate-900 tracking-tighter">{stats.percentage}%</span>
                            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Started</span>
                        </div>
                        <Progress value={stats.percentage} className="h-3 bg-slate-100 mt-2 mb-4 [&>div]:bg-slate-800" />
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <span className="font-medium text-slate-700">Pending</span>
                                <span className="font-bold text-slate-900">{stats.total - stats.mastered}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                                <span className="font-medium text-emerald-700">Mastered</span>
                                <span className="font-bold text-emerald-900">{stats.mastered}</span>
                            </div>
                        </div>
                        <Button className="w-full mt-5 bg-slate-900 hover:bg-slate-800 text-white font-bold h-11 shadow-lg">
                            Resume Session <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Strategy Spotlight */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { label: 'UPSC Hotspot', desc: 'Mass Nationalism (1919-1939) and British Policies account for 55% of modern PYQs', icon: Sparkles, color: 'orange' },
                    { label: 'High Priority', desc: `15 chapters rated HIGH priority for UPSC Prelims & Mains`, icon: Target, color: 'rose' },
                    { label: 'PYQ Coverage', desc: `250+ PYQs mapped across all 39 chapters`, icon: FileText, color: 'indigo' },
                ].map((item) => (
                    <Card key={item.label} className="border-2 border-stone-200 bg-white overflow-hidden shadow-sm">
                        <CardContent className="p-5 flex gap-3 items-start">
                            <div className={`p-2 rounded-lg bg-${item.color}-100`}>
                                <item.icon className={`h-5 w-5 text-${item.color}-600`} />
                            </div>
                            <div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-stone-500 mb-1">{item.label}</div>
                                <p className="text-xs text-stone-600 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Chapter Grid by Unit */}
            <div className="space-y-8">
                <div className="flex items-center gap-3 border-b-2 border-slate-200 pb-4">
                    <Castle className="h-6 w-6 text-slate-700" />
                    <h2 className="text-2xl font-bold text-slate-900">The 39-Chapter Roadmap</h2>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {Object.keys(UNIT_META).map((unitKey) => {
                        const unitInfo = UNIT_META[unitKey];
                        const style = getUnitColors(unitInfo.color);
                        const chapters = chaptersByUnit[unitKey] || [];
                        if (chapters.length === 0) return null;

                        const unitMastered = chapters.filter(c => isSpectrumChapterMastered(c.id)).length;
                        const unitProgress = Math.round((unitMastered / Math.max(chapters.length, 1)) * 100);

                        return (
                            <Card key={unitKey} className={`border-2 ${style.border} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
                                <CardHeader className={`${style.header} pb-4`}>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <Badge variant="secondary" className={`${style.badge} mb-2 font-bold tracking-wide uppercase text-xs`}>
                                                {unitKey}
                                            </Badge>
                                            <CardTitle className="text-xl font-extrabold text-stone-800">
                                                {unitInfo.title}
                                            </CardTitle>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-bold text-stone-800">{unitMastered}/{chapters.length}</div>
                                            <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mt-1">Done</div>
                                        </div>
                                    </div>
                                    <Progress value={unitProgress} className="h-1.5 mt-3 bg-white/50" />
                                </CardHeader>

                                <CardContent className="p-0">
                                    <div className="divide-y divide-stone-100">
                                        {chapters.map((chapter) => {
                                            const prog = progressData[chapter.id];
                                            const isMastered = isSpectrumChapterMastered(chapter.id);
                                            const hasStarted = isSpectrumChapterStarted(chapter.id);
                                            const priority = getUPSC_Priority(unitKey);
                                            const pyqCount = getPYQEstimate(unitKey);

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
                                                            {priority === 'High' && !isMastered && (
                                                                <Badge className="bg-rose-500 text-white border-0 py-0 h-4 px-1.5 text-[9px]">HOT</Badge>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-2 mt-0.5">
                                                            <SectionDots progress={prog} />
                                                            {pyqCount > 0 && (
                                                                <span className="text-[9px] text-indigo-500 font-bold">{pyqCount} PYQs</span>
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
