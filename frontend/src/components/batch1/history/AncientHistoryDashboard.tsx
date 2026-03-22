"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
    BookOpen, CheckCircle2, ChevronRight, Compass,
    Trophy, Sparkles, Map as MapIcon, Hourglass,
    ArrowRight, Zap
} from "lucide-react";

import {
    ANCIENT_PARTS,
    ANCIENT_TOPICS,
    AncientPart,
    ChapterProgress,
    SectionStatus
} from "@/components/batch1/history/data/ancient-types-27";
import { ANCIENT_TRENDS } from "@/components/batch1/history/data/mcqs/ancient/trends";

function YieldHeatmap() {
    return (
        <Card className="border-2 border-stone-200 bg-white overflow-hidden">
            <CardHeader className="bg-stone-50 border-b border-stone-100 pb-3">
                <CardTitle className="text-sm font-bold text-stone-800 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    UPSC High-Yield Visualizer (Heatmap)
                </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
                <div className="grid grid-cols-9 sm:grid-cols-14 md:grid-cols-14 lg:grid-cols-27 gap-1.5">
                    {Array.from({ length: 27 }, (_, i) => i + 1).map(num => {
                        const trend = ANCIENT_TRENDS[num];
                        const yieldColor = trend?.yield === 'High' ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.3)]' :
                            trend?.yield === 'Medium' ? 'bg-amber-400' : 'bg-stone-200';
                        return (
                            <div key={num} className="group relative">
                                <div className={`aspect-square rounded-sm ${yieldColor} transition-transform hover:scale-110 cursor-help`} />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 p-2 bg-stone-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                                    <div className="font-bold border-b border-white/10 pb-1 mb-1">Ch {num}: {trend?.yield} Yield</div>
                                    <div className="text-stone-400">Focus: {trend?.focus}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-4 flex flex-wrap gap-4 items-center justify-center text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-rose-500" /> High Yield</div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-amber-400" /> Medium</div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-stone-200" /> Low Yield</div>
                </div>
            </CardContent>
        </Card>
    );
}

const SECTION_KEYS: (keyof ChapterProgress)[] = ['readSection', 'flashcards', 'drill', 'l1', 'l2', 'l3'];
const SECTION_LABELS = ['R', 'F', 'D', '1', '2', '3'];

function SectionDots({ progress }: { progress?: ChapterProgress }) {
    return (
        <div className="flex gap-1 items-center">
            {SECTION_KEYS.map((key, i) => {
                const status = (progress?.[key] as SectionStatus) || 'not-started';
                return (
                    <span
                        key={key}
                        title={`${SECTION_LABELS[i]}: ${status}`}
                        className={`w-2 h-2 rounded-full ${status === 'completed' ? 'bg-emerald-500' :
                            status === 'in-progress' ? 'bg-amber-400' :
                                'bg-stone-300'
                            }`}
                    />
                );
            })}
        </div>
    );
}

export default function AncientHistoryDashboard() {
    const router = useRouter();
    const [progressData, setProgressData] = useState<Record<string | number, any>>({});
    const [stats, setStats] = useState({
        completed: 0,
        total: 27,
        percentage: 0
    });

    useEffect(() => {
        const saved = localStorage.getItem('ancient_27_progress');
        if (saved) {
            const parsed = JSON.parse(saved);
            setProgressData(parsed);

            // Count chapters where ALL 6 sections are completed
            const completed = Object.entries(parsed).filter(([, p]: [string, any]) => {
                if (!p) return false;
                return SECTION_KEYS.every(k => p[k] === 'completed');
            }).length;
            const started = Object.entries(parsed).filter(([, p]: [string, any]) => {
                if (!p) return false;
                return SECTION_KEYS.some(k => p[k] === 'in-progress' || p[k] === 'completed');
            }).length;
            setStats({
                completed,
                total: 27,
                percentage: Math.round((started / 27) * 100)
            });
        }
    }, []);

    const topicsByPart = useMemo(() => {
        const grouped: Record<string, typeof ANCIENT_TOPICS> = {};
        ANCIENT_PARTS.forEach(part => {
            grouped[part.id] = ANCIENT_TOPICS.filter(t => t.part === part.id);
        });
        return grouped;
    }, []);

    const getPartColors = (colorStr: string) => {
        switch (colorStr) {
            case 'stone':
                return {
                    border: 'border-stone-200',
                    bg: 'bg-stone-50',
                    header: 'bg-stone-100/50',
                    icon: 'text-stone-600 bg-stone-100',
                    badge: 'bg-stone-100 text-stone-700 hover:bg-stone-200',
                    progress: 'bg-stone-500'
                };
            case 'amber':
                return {
                    border: 'border-amber-200',
                    bg: 'bg-amber-50',
                    header: 'bg-amber-100/50',
                    icon: 'text-amber-600 bg-amber-100',
                    badge: 'bg-amber-100 text-amber-700 hover:bg-amber-200',
                    progress: 'bg-amber-500'
                };
            case 'emerald':
                return {
                    border: 'border-emerald-200',
                    bg: 'bg-emerald-50',
                    header: 'bg-emerald-100/50',
                    icon: 'text-emerald-600 bg-emerald-100',
                    badge: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
                    progress: 'bg-emerald-500'
                };
            case 'purple':
                return {
                    border: 'border-purple-200',
                    bg: 'bg-purple-50',
                    header: 'bg-purple-100/50',
                    icon: 'text-purple-600 bg-purple-100',
                    badge: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
                    progress: 'bg-purple-500'
                };
            default:
                return {
                    border: 'border-blue-200',
                    bg: 'bg-blue-50',
                    header: 'bg-blue-100/50',
                    icon: 'text-blue-600 bg-blue-100',
                    badge: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
                    progress: 'bg-blue-500'
                };
        }
    };

    const handleTopicClick = (id: string | number) => {
        router.push(`/student/batch1-1/ancient-history/${id}`);
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-8">
            {/* Header / Stats Banner */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <Card className="md:col-span-8 bg-gradient-to-r from-stone-800 to-stone-700 border-0 shadow-xl overflow-hidden relative">
                    <div className="absolute right-0 top-0 opacity-10 mix-blend-overlay w-64 h-64 pointer-events-none translate-x-8 -translate-y-8 hidden md:block">
                        <MapIcon className="w-full h-full text-stone-100" />
                    </div>
                    <CardContent className="p-8 relative z-10 flex flex-col justify-center h-full">
                        <Badge className="w-fit bg-amber-500/20 text-amber-100 mb-4 border border-amber-500/30">
                            RS Sharma Standard Edition
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Ancient India Revision
                        </h1>
                        <p className="text-stone-300 text-lg max-w-2xl mb-6">
                            Master the roots of Indian civilization through 27 rapid-revision chapters featuring chronological maps, handwritten annotations, and 3-tier UPSC standard MCQs.
                        </p>

                        <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl backdrop-blur-sm w-fit mt-auto border border-white/5">
                            <Trophy className="h-8 w-8 text-amber-400" />
                            <div>
                                <div className="text-white font-bold text-xl">{stats.completed} / {stats.total}</div>
                                <div className="text-stone-400 text-sm">Chapters Mastered</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-4 border-2 border-stone-200">
                    <CardHeader className="bg-stone-50 border-b border-stone-100 pb-4">
                        <CardTitle className="text-lg text-stone-800 flex items-center gap-2">
                            <Hourglass className="h-5 w-5 text-stone-500" />
                            My Progress Tracker
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-3xl font-black text-stone-800 tracking-tighter">
                                {stats.percentage}%
                            </span>
                            <span className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-1">
                                Complete
                            </span>
                        </div>
                        <Progress value={stats.percentage} className="h-3 bg-stone-100 mt-2 mb-6" />

                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm p-3 bg-stone-50 rounded-lg border border-stone-100">
                                <span className="font-medium text-stone-600">Pending Topics</span>
                                <span className="font-bold text-stone-800">{stats.total - stats.completed}</span>
                            </div>
                        </div>

                        <Button className="w-full mt-6 bg-stone-800 hover:bg-stone-700 text-white font-bold h-12 text-md shadow-lg shadow-stone-800/20">
                            Resume Session <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Impact & Insights Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-2">
                <div className="lg:col-span-8">
                    <YieldHeatmap />
                </div>
                <Card className="lg:col-span-4 border-2 border-stone-200 bg-stone-900 text-white overflow-hidden group">
                    <CardContent className="p-6 h-full flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-3">
                            <Zap className="h-4 w-4 text-amber-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Strategy Spotlight</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">Art, Culture & Ethics</h3>
                        <p className="text-xs text-stone-400 leading-relaxed italic">
                            "Chapters 14 (Ashoka), 20 (Gupta Art), and 8 (Buddhism) account for 60% of Ancient PYQs in the last decade. Prioritize these for 2025."
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Content Grid */}
            <div className="space-y-8 mt-10">
                <div className="flex items-center gap-3 border-b-2 border-stone-200 pb-4 mb-6">
                    <Compass className="h-6 w-6 text-stone-600" />
                    <h2 className="text-2xl font-bold text-stone-800">The 27-Chapter Roadmap</h2>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {ANCIENT_PARTS.map((part) => {
                        const style = getPartColors(part.color);
                        const partTopics = topicsByPart[part.id] || [];
                        const partCompleted = partTopics.filter(t => {
                            const p = progressData[t.id];
                            if (!p) return false;
                            return SECTION_KEYS.every(k => p[k] === 'completed');
                        }).length;
                        const partTotal = partTopics.length;
                        const partProgress = Math.round((partCompleted / Math.max(partTotal, 1)) * 100);

                        return (
                            <Card key={part.id} className={`border-2 ${style.border} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
                                <CardHeader className={`${style.header} pb-4`}>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <Badge variant="secondary" className={`${style.badge} mb-2 shadow-sm font-bold tracking-wide uppercase text-xs`}>
                                                Part {part.id} Phase
                                            </Badge>
                                            <CardTitle className="text-xl md:text-2xl text-stone-800 font-extrabold tracking-tight">
                                                {part.title}
                                            </CardTitle>
                                            <p className="text-sm font-medium text-stone-600 mt-1">
                                                {part.description} • Ch {part.range[0]}-{part.range[1]}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-bold text-stone-800">
                                                {partCompleted}/{partTotal}
                                            </div>
                                            <div className="text-xs font-semibold text-stone-500 uppercase tracking-widest mt-1">
                                                Done
                                            </div>
                                        </div>
                                    </div>
                                    <Progress value={partProgress} className={`h-1.5 mt-4 bg-white/50`} />
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="divide-y divide-stone-100">
                                        {partTopics.map((topic) => {
                                            const chapterProg = progressData[topic.id] as ChapterProgress | undefined;
                                            const isDone = chapterProg ? SECTION_KEYS.every(k => chapterProg[k] === 'completed') : false;
                                            const hasStarted = chapterProg ? SECTION_KEYS.some(k => chapterProg[k] === 'in-progress' || chapterProg[k] === 'completed') : false;

                                            return (
                                                <div
                                                    key={topic.id}
                                                    onClick={() => handleTopicClick(topic.id)}
                                                    className={`
                                                        p-4 flex items-center justify-between group cursor-pointer
                                                        hover:bg-stone-50 transition-colors
                                                        ${isDone ? 'bg-stone-50/50' : 'bg-white'}
                                                    `}
                                                >
                                                    <div className="flex items-center gap-4 flex-1 min-w-0 pr-4">
                                                        <div className={`
                                                            flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                                                            ${isDone
                                                                ? 'bg-green-100 text-green-700'
                                                                : style.icon
                                                            }
                                                        `}>
                                                            {isDone ? <CheckCircle2 className="h-5 w-5" /> : topic.id}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-2 flex-wrap">
                                                                <h4 className={`
                                                                    font-semibold truncate text-base
                                                                    ${isDone ? 'text-stone-500 line-through decoration-stone-300' : 'text-stone-800'}
                                                                `}>
                                                                    {topic.title}
                                                                </h4>
                                                                {/* Example of new module indicator */}
                                                                {topic.id === 1 && !isDone && (
                                                                    <Badge className="bg-amber-500 hover:bg-amber-600 text-white border-0 py-0 h-5 px-1.5 text-[10px]">
                                                                        NEW UI
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                            <div className="flex items-center gap-2 mt-1">
                                                                <SectionDots progress={chapterProg} />
                                                                <span className="text-[10px] text-stone-400 hidden sm:inline">
                                                                    {isDone ? 'All sections complete' : hasStarted ? 'In progress' : 'Not started'}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className={`
                                                            flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-full w-8 h-8 p-0
                                                            ${style.icon}
                                                        `}
                                                    >
                                                        <ChevronRight className="h-5 w-5" />
                                                    </Button>
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
