"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    Map as MapIcon, Compass, Search, Sword, Target, Castle, Flag,
    BrainCircuit, Sparkles, BookOpen, Clock, Activity, ArrowRight,
    MapPin, GitPullRequest, Flame, Calendar
} from "lucide-react";
import { getEraProgressStats } from "@/lib/history-era-store";
import HistoryStudentBrainSearch from "./HistoryStudentBrainSearch";

interface EraStats {
    ancient: { mastered: number, total: number, percentage: number };
    medieval: { mastered: number, total: number, percentage: number };
    modern: { mastered: number, total: number, percentage: number };
}

export default function UnifiedHistoryDashboard() {
    const router = useRouter();
    const [stats, setStats] = useState<EraStats | null>(null);

    // Overlay states
    const [showSearch, setShowSearch] = useState(false);
    const [showPlanner, setShowPlanner] = useState(false);

    useEffect(() => {
        setStats({
            ancient: getEraProgressStats('ancient', 27),
            medieval: getEraProgressStats('medieval', 20),
            modern: getEraProgressStats('modern', 39),
        });

        // Cmd+K to open search overlay
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setShowSearch(true);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    const totalMastered = stats ? stats.ancient.mastered + stats.medieval.mastered + stats.modern.mastered : 0;
    const totalChapters = 27 + 20 + 39; // 86
    const totalPercentage = Math.round((totalMastered / totalChapters) * 100) || 0;

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-8 bg-stone-50 min-h-screen">

            {/* Top Toolbar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-xl border-2 border-stone-200 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-stone-100 rounded-lg">
                        <Compass className="h-6 w-6 text-stone-700" />
                    </div>
                    <div>
                        <h1 className="text-xl font-black text-stone-900 tracking-tight">History HQ</h1>
                        <p className="text-xs font-semibold text-stone-500 uppercase tracking-widest">Master 86 Chapters • UPSC Ready</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    <Button
                        variant="outline"
                        onClick={() => setShowSearch(true)}
                        className="bg-white border-2 border-stone-200 hover:border-violet-400 hover:bg-violet-50 text-stone-600 gap-2 font-bold shadow-sm flex-shrink-0"
                    >
                        <Search className="h-4 w-4 text-violet-500" />
                        Brain Search
                        <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-stone-200 bg-stone-100 px-1.5 font-mono text-[10px] font-medium text-stone-500 ml-2">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </Button>
                    
                    <Button
                        variant="outline"
                        onClick={() => router.push('/student/batch1-1/history/dynasty-atlas')}
                        className="bg-white border-2 border-stone-200 hover:border-amber-400 hover:bg-amber-50 text-stone-600 gap-2 font-bold shadow-sm flex-shrink-0"
                    >
                        <MapIcon className="h-4 w-4 text-amber-500" />
                        Dynasty Atlas
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => router.push('/student/batch1-1/history/learning-path')}
                        className="bg-white border-2 border-stone-200 hover:border-emerald-400 hover:bg-emerald-50 text-stone-600 gap-2 font-bold shadow-sm flex-shrink-0"
                    >
                        <Calendar className="h-4 w-4 text-emerald-500" />
                        Learning Path
                    </Button>
                    
                    <Button
                        variant="outline"
                        onClick={() => {/* router.push to History PYQ Heatmap */}}
                        className="bg-white border-2 border-stone-200 hover:border-rose-400 hover:bg-rose-50 text-stone-600 gap-2 font-bold shadow-sm flex-shrink-0"
                    >
                        <Flame className="h-4 w-4 text-rose-500" />
                        PYQ Heatmap
                    </Button>
                </div>
            </div>

            {/* Master Stats Readout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <Card className="lg:col-span-3 border-2 border-stone-200 bg-gradient-to-br from-stone-900 to-stone-800 text-white overflow-hidden relative shadow-lg">
                    <div className="absolute top-0 right-0 opacity-10 mix-blend-overlay w-64 h-64 pointer-events-none translate-x-8 -translate-y-8 hidden sm:block">
                        <Target className="w-full h-full text-stone-100" />
                    </div>
                    <CardContent className="p-8 relative z-10 flex flex-col md:flex-row items-center gap-8 h-full">
                        <div className="relative w-32 h-32 flex-shrink-0 rounded-full border-8 border-stone-700 flex items-center justify-center bg-stone-800 shadow-inner">
                            <svg className="w-full h-full absolute top-0 left-0 -rotate-90" viewBox="0 0 36 36">
                                <path
                                    className="text-stone-700 stroke-current"
                                    strokeWidth="3.8"
                                    fill="none"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                    className="text-emerald-400 stroke-current"
                                    strokeDasharray={`${totalPercentage}, 100`}
                                    strokeWidth="3.8"
                                    strokeLinecap="round"
                                    fill="none"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                            <div className="text-center absolute">
                                <span className="text-3xl font-black tabular-nums">{totalPercentage}</span>
                                <span className="text-lg font-bold text-stone-400">%</span>
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <Badge className="bg-emerald-500/20 text-emerald-300 border-0 mb-3 uppercase tracking-widest font-bold">
                                Global Mastery
                            </Badge>
                            <h2 className="text-3xl font-extrabold mb-2 tracking-tight text-white">
                                {totalMastered} / {totalChapters} Chapters
                            </h2>
                            <p className="text-stone-400 text-sm max-w-lg leading-relaxed">
                                You are systematically conquering the UPSC History syllabus. Your mastery spans across Ancient, Medieval, and Modern eras seamlessly linked in memory.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="lg:col-span-1 border-2 border-stone-200 bg-white">
                    <CardHeader className="bg-stone-50 border-b border-stone-100 p-4">
                        <CardTitle className="text-sm font-bold text-stone-800 flex items-center gap-2 uppercase tracking-wide">
                            <Activity className="h-4 w-4 text-rose-500" />
                            Next in Queue
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 flex flex-col justify-center gap-3">
                        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                            <div className="text-[10px] uppercase font-black tracking-widest text-amber-600 mb-1">Due For Review</div>
                            <div className="font-bold text-stone-800 text-sm">Ch 13: Age of Akbar</div>
                            <div className="text-xs text-stone-500">Medieval India • 4 Days ago</div>
                        </div>
                        <Button className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold h-10 shadow-sm">
                            <GitPullRequest className="h-4 w-4 mr-2" /> Start Review
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* 3 Era Selection Hub */}
            <h2 className="text-2xl font-black text-stone-800 border-b-2 border-stone-200 pb-3 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-indigo-500" />
                Era Navigation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Ancient Card */}
                <Card className="border-2 border-stone-200 bg-white hover:border-amber-400 transition-colors group cursor-pointer shadow-sm hover:shadow-md" onClick={() => router.push('/student/batch1-1/ancient-history')}>
                    <CardContent className="p-6">
                        <div className="w-12 h-12 bg-amber-100 text-amber-600 flex items-center justify-center rounded-xl mb-4 group-hover:scale-110 transition-transform">
                            <Compass className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-extrabold text-stone-900 mb-1">Ancient India</h3>
                        <p className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-6">RS Sharma • 27 Chapters</p>
                        
                        <div className="flex justify-between items-end mb-2">
                            <span className="font-black text-2xl text-stone-800">{stats?.ancient.percentage}%</span>
                            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">{stats?.ancient.mastered}/27 Mastered</span>
                        </div>
                        <Progress value={stats?.ancient.percentage} className="h-2 bg-stone-100" />
                        
                        <div className="mt-6 flex items-center text-amber-600 font-bold text-sm">
                            Enter Dashboard <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </CardContent>
                </Card>

                {/* Medieval Card */}
                <Card className="border-2 border-stone-200 bg-white hover:border-fuchsia-400 transition-colors group cursor-pointer shadow-sm hover:shadow-md" onClick={() => router.push('/student/batch1-1/medieval-history')}>
                    <CardContent className="p-6">
                        <div className="w-12 h-12 bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center rounded-xl mb-4 group-hover:scale-110 transition-transform">
                            <Sword className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-extrabold text-stone-900 mb-1">Medieval India</h3>
                        <p className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-6">Satish Chandra • 20 Chapters</p>
                        
                        <div className="flex justify-between items-end mb-2">
                            <span className="font-black text-2xl text-stone-800">{stats?.medieval.percentage}%</span>
                            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">{stats?.medieval.mastered}/20 Mastered</span>
                        </div>
                        <Progress value={stats?.medieval.percentage} className="h-2 bg-stone-100" />
                        
                        <div className="mt-6 flex items-center text-fuchsia-600 font-bold text-sm">
                            Enter Dashboard <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </CardContent>
                </Card>

                {/* Modern Card */}
                <Card className="border-2 border-stone-200 bg-white hover:border-rose-400 transition-colors group cursor-pointer shadow-sm hover:shadow-md" onClick={() => router.push('/student/batch1-1/modern-history')}>
                    <CardContent className="p-6">
                        <div className="w-12 h-12 bg-rose-100 text-rose-600 flex items-center justify-center rounded-xl mb-4 group-hover:scale-110 transition-transform">
                            <Flag className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-extrabold text-stone-900 mb-1">Modern India</h3>
                        <p className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-6">Spectrum • 39 Chapters</p>
                        
                        <div className="flex justify-between items-end mb-2">
                            <span className="font-black text-2xl text-stone-800">{stats?.modern.percentage}%</span>
                            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">{stats?.modern.mastered}/39 Mastered</span>
                        </div>
                        <Progress value={stats?.modern.percentage} className="h-2 bg-stone-100" />
                        
                        <div className="mt-6 flex items-center text-rose-600 font-bold text-sm">
                            Enter Dashboard <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* History AI Brain Search Overlay */}
            <HistoryStudentBrainSearch
                isOpen={showSearch}
                onClose={() => setShowSearch(false)}
            />

        </div>
    );
}
