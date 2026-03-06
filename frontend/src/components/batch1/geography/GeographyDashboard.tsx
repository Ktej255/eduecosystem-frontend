"use client";

import React, { useState, useEffect, useMemo } from 'react';
import {
    ChevronLeft, Settings, Info, Search,
    Filter, LayoutGrid, ListTodo, Map,
    Globe2, Mountain, Waves, BookOpen,
    GraduationCap, Play, CheckCircle2, Circle,
    Target, ArrowRight, BarChart3, Clock,
    BadgeCheck, Trophy, Target as TargetIcon,
    Wind, ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { GEOGRAPHY_REGISTRY } from './data/geography-registry';
import { GeographyTopic, GeographyBranch } from './data/geography-types';
import { toast } from 'sonner';

export default function GeographyDashboard() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [completedTopics, setCompletedTopics] = useState<number[]>([]);
    const [activeBranch, setActiveBranch] = useState<GeographyBranch | 'All'>('All');
    const [viewMode, setViewMode] = useState<'sheet' | 'planner' | 'visual'>('sheet');

    // Load progress from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('geography-progress');
        if (saved) {
            try {
                setCompletedTopics(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load geography progress", e);
            }
        }
    }, []);

    // Save progress to localStorage
    const toggleTopic = (id: number) => {
        setCompletedTopics(prev => {
            const next = prev.includes(id)
                ? prev.filter(t => t !== id)
                : [...prev, id];
            localStorage.setItem('geography-progress', JSON.stringify(next));
            return next;
        });
    };

    // Calculations
    const branches: GeographyBranch[] = [
        'Geomorphology', 'Climatology', 'Oceanography',
        'Resource Geography', 'Indian Geography', 'Miscellaneous'
    ];

    const stats = useMemo(() => {
        const total = GEOGRAPHY_REGISTRY.length;
        const totalCompleted = completedTopics.length;
        const overallProgress = total > 0 ? (totalCompleted / total) * 100 : 0;

        const branchStats = branches.map(branch => {
            const branchTopics = GEOGRAPHY_REGISTRY.filter(t => t.branch === branch);
            const branchCompleted = branchTopics.filter(t => completedTopics.includes(t.id)).length;
            return {
                name: branch,
                total: branchTopics.length,
                completed: branchCompleted,
                progress: branchTopics.length > 0 ? (branchCompleted / branchTopics.length) * 100 : 0
            };
        }).filter(b => b.total > 0);

        return { total, totalCompleted, overallProgress, branchStats };
    }, [completedTopics]);

    // Filtering
    const filteredTopics = useMemo(() => {
        return GEOGRAPHY_REGISTRY.filter(topic => {
            const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesBranch = activeBranch === 'All' || topic.branch === activeBranch;
            return matchesSearch && matchesBranch;
        });
    }, [searchQuery, activeBranch]);

    const handleStartSession = (topic: GeographyTopic) => {
        // Find the block this topic belongs to
        const blockTopics = GEOGRAPHY_REGISTRY.filter(t => t.branch === topic.branch && t.blockId === topic.blockId);
        // Navigate to the session timer with these topics
        localStorage.setItem('current-geo-block', JSON.stringify(blockTopics));
        router.push(`/student/batch1/geography/session?block=${topic.blockId}&branch=${topic.branch}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 min-h-screen">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-600/20">
                            <Globe2 className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                                Geography <span className="text-indigo-600">Module</span>
                            </h1>
                            <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="bg-indigo-50 border-indigo-200 text-indigo-700 font-bold px-2 py-0 text-[10px] uppercase">
                                    Master Syllabus 2026
                                </Badge>
                                <span className="text-xs text-muted-foreground font-medium">• 16 Topics Daily Target</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-2xl w-fit">
                    <Button
                        variant={viewMode === 'sheet' ? 'default' : 'ghost'}
                        size="sm"
                        className={`h-10 rounded-xl px-6 text-xs font-black uppercase tracking-widest ${viewMode === 'sheet' ? 'bg-indigo-600 shadow-lg shadow-indigo-600/20' : ''}`}
                        onClick={() => setViewMode('sheet')}
                    >
                        <ListTodo className="w-4 h-4 mr-2" /> Tracking Sheet
                    </Button>
                    <Button
                        variant={viewMode === 'planner' ? 'default' : 'ghost'}
                        size="sm"
                        className={`h-10 rounded-xl px-6 text-xs font-black uppercase tracking-widest ${viewMode === 'planner' ? 'bg-indigo-600 shadow-lg shadow-indigo-600/20' : ''}`}
                        onClick={() => setViewMode('planner')}
                    >
                        <LayoutGrid className="w-4 h-4 mr-2" /> Dashboard
                    </Button>
                </div>
            </div>

            {viewMode === 'sheet' ? (
                <div className="space-y-6">
                    {/* Stats HUD */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <StatHUDCard title="Overall Progress" value={`${Math.round(stats.overallProgress)}%`} subtext={`${stats.totalCompleted}/${stats.total} Topics`} icon={<TargetIcon className="text-indigo-600" />} />
                        <StatHUDCard title="Geomorphism" value={`${Math.round(stats.branchStats.find(b => b.name === 'Geomorphology')?.progress || 0)}%`} subtext="Branch Progress" icon={<Mountain className="text-amber-600" />} />
                        <StatHUDCard title="Oceanography" value={`${Math.round(stats.branchStats.find(b => b.name === 'Oceanography')?.progress || 0)}%`} subtext="Branch Progress" icon={<Waves className="text-blue-600" />} />
                        <StatHUDCard title="Indian Geo" value={`${Math.round(stats.branchStats.find(b => b.name === 'Indian Geography')?.progress || 0)}%`} subtext="Branch Progress" icon={<Map className="text-emerald-600" />} />
                    </div>

                    {/* Main Content: Tracking Sheet */}
                    <Card className="border-border shadow-2xl bg-card overflow-hidden rounded-[2rem]">
                        <CardHeader className="bg-slate-50 dark:bg-slate-900 border-b border-border py-6 px-8">
                            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                                <div className="space-y-1">
                                    <h3 className="text-xl font-black uppercase tracking-tight">Syllabus Coverage</h3>
                                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Select topics to launch 25-min teaching sessions</p>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 items-center flex-1 max-w-2xl">
                                    <div className="relative flex-1 w-full">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                            placeholder="Find any topic (e.g. Continental Drift)..."
                                            className="pl-10 h-12 bg-card border-slate-200 focus:ring-indigo-500 rounded-xl"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>
                                    <Tabs value={activeBranch} onValueChange={(val) => setActiveBranch(val as any)} className="w-auto">
                                        <TabsList className="bg-slate-200/50 p-1 rounded-xl h-12">
                                            <TabsTrigger value="All" className="text-[10px] font-black uppercase tracking-widest px-6 h-9 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">All</TabsTrigger>
                                            {stats.branchStats.map(b => (
                                                <TabsTrigger key={b.name} value={b.name} className="hidden xl:inline-flex text-[10px] font-black uppercase tracking-widest px-6 h-9 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                                    {b.name.split(' ')[0]}
                                                </TabsTrigger>
                                            ))}
                                        </TabsList>
                                    </Tabs>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <ScrollArea className="h-[550px]">
                                <div className="divide-y divide-border">
                                    {filteredTopics.length > 0 ? (
                                        filteredTopics.map((topic, idx) => {
                                            const isCompleted = completedTopics.includes(topic.id);
                                            return (
                                                <div
                                                    key={topic.id}
                                                    className={`flex items-center gap-6 p-4 hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-all group ${isCompleted ? 'bg-indigo-50/20' : ''}`}
                                                >
                                                    <div className="flex-shrink-0">
                                                        <button
                                                            onClick={() => toggleTopic(topic.id)}
                                                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all border-2 ${isCompleted ? 'bg-indigo-600 border-indigo-600 text-white scale-110 shadow-lg shadow-indigo-600/30' : 'bg-transparent border-slate-200 text-slate-100 hover:border-indigo-400 group-hover:text-slate-300'}`}
                                                        >
                                                            {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <div className="w-4 h-4 rounded-full bg-slate-50 dark:bg-slate-800" />}
                                                        </button>
                                                    </div>

                                                    <div className="flex-shrink-0 w-12 text-[11px] font-black text-slate-400 font-mono">
                                                        {String(topic.id).padStart(3, '0')}
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-3">
                                                            <h4 className={`text-base font-bold truncate ${isCompleted ? 'text-slate-400 line-through' : 'text-slate-800 dark:text-slate-100'}`}>
                                                                {topic.title}
                                                            </h4>
                                                            <Badge className={`text-[9px] font-black uppercase py-0.5 px-2 rounded-md ${isCompleted ? 'bg-slate-100 text-slate-400' : 'bg-slate-100 text-slate-600'} border-0`}>
                                                                {topic.branch}
                                                            </Badge>
                                                        </div>
                                                        <div className="flex items-center gap-4 mt-1.5">
                                                            <span className="text-[10px] text-muted-foreground font-black uppercase tracking-wider flex items-center gap-1.5">
                                                                <Clock className="w-3.5 h-3.5 text-indigo-400" /> Teaching Block {topic.blockId}
                                                            </span>
                                                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                            <span className={`text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 ${isCompleted ? 'text-emerald-600' : 'text-amber-500'}`}>
                                                                <GraduationCap className="w-3.5 h-3.5" /> {isCompleted ? 'Mastered' : 'Ready to Learn'}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">
                                                        <Button
                                                            className="h-11 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-black text-[11px] uppercase tracking-widest px-6"
                                                            onClick={() => handleStartSession(topic)}
                                                        >
                                                            Launch Block <ArrowRight className="w-4 h-4 ml-2" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div className="p-24 text-center space-y-4">
                                            <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto text-slate-300">
                                                <Search className="w-10 h-10" />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-xl font-black uppercase text-slate-800 dark:text-white">Empty Set</h3>
                                                <p className="text-sm text-muted-foreground font-medium">Try adjusting your filters to find more topics.</p>
                                            </div>
                                            <Button variant="outline" className="h-11 rounded-xl font-black uppercase tracking-widest px-8" onClick={() => { setSearchQuery(""); setActiveBranch('All'); }}>
                                                Reset Filters
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </ScrollArea>
                            <div className="bg-slate-50 dark:bg-slate-900 border-t border-border p-6 flex justify-between items-center rounded-b-[2rem]">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-indigo-600 shadow-sm" />
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Mastered ({stats.totalCompleted})</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full border-2 border-slate-300 bg-transparent" />
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Remaining ({stats.total - stats.totalCompleted})</span>
                                    </div>
                                </div>
                                <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200">
                                    {filteredTopics.length} Results Loaded
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureCard
                            title="Interactive Maps"
                            desc="Explore geographic terrain in 3D."
                            icon={<Globe2 className="w-6 h-6" />}
                            color="bg-indigo-600"
                        />
                        <FeatureCard
                            title="Climatology Sim"
                            desc="Real-time Koppen classifications."
                            icon={<Wind className="w-6 h-6" />}
                            color="bg-emerald-600"
                        />
                        <FeatureCard
                            title="Ocean Lab"
                            desc="Track complex current patterns."
                            icon={<Waves className="w-6 h-6" />}
                            color="bg-blue-600"
                        />
                        <FeatureCard
                            title="Resource Atlas"
                            desc="Mineral deposits across India."
                            icon={<Mountain className="w-6 h-6" />}
                            color="bg-amber-600"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

function StatHUDCard({ title, value, subtext, icon }: { title: string, value: string, subtext: string, icon: React.ReactNode }) {
    return (
        <Card className="border-none shadow-md overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                {icon}
            </div>
            <CardContent className="p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{title}</p>
                <h3 className="text-3xl font-black mb-1">{value}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{subtext}</p>
            </CardContent>
        </Card>
    );
}

function FeatureCard({ title, desc, icon, color }: { title: string, desc: string, icon: React.ReactNode, color: string }) {
    return (
        <Card className="group hover:shadow-xl transition-all cursor-pointer border-border overflow-hidden rounded-[1.5rem]">
            <CardContent className="p-6 space-y-4">
                <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {icon}
                </div>
                <div>
                    <h3 className="text-lg font-black uppercase tracking-tight">{title}</h3>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">{desc}</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                    Enter Module <ChevronRight className="w-3 h-3" />
                </div>
            </CardContent>
        </Card>
    );
}
