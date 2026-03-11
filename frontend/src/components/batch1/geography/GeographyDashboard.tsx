"use client";

import React, { useState, useEffect, useMemo } from 'react';
import {
    ChevronLeft, Settings, Info, Search,
    Filter, LayoutGrid, ListTodo, Map,
    Globe2, Mountain, Waves, BookOpen,
    GraduationCap, Play, CheckCircle2, Circle,
    Target, ArrowRight, BarChart3, Clock,
    BadgeCheck, Trophy, Target as TargetIcon,
    Wind, ChevronRight, Activity, Thermometer, Layers, Droplets
} from 'lucide-react';
import { SimulationType } from './content/types';
import dynamic from 'next/dynamic';
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Dynamic import for SimulationView
const SimulationView = dynamic(
    () => import("./3d/SimulationView"),
    { ssr: false }
);

export default function GeographyDashboard() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [completedTopics, setCompletedTopics] = useState<number[]>([]);
    const [activeBranch, setActiveBranch] = useState<GeographyBranch | 'All'>('All');
    const [comingSoonFeature, setComingSoonFeature] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<'sheet' | 'planner' | 'visual'>('sheet');
    const [confidenceRatings, setConfidenceRatings] = useState<Record<number, string>>({});
    
    // NCERT Modal State
    const [ncertModalOpen, setNcertModalOpen] = useState(false);
    const [selectedNcertBook, setSelectedNcertBook] = useState<string | null>(null);

    // TerraLab/3D State
    const [terraLabOpen, setTerraLabOpen] = useState(false);
    const [activeSimulation, setActiveSimulation] = useState<SimulationType | null>(null);

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
        const savedConf = localStorage.getItem('geography-confidence');
        if (savedConf) {
            try {
                setConfidenceRatings(JSON.parse(savedConf));
            } catch (e) {
                console.error("Failed to load geography confidence", e);
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
        const safeCompleted = Array.isArray(completedTopics) ? completedTopics : [];
        const total = GEOGRAPHY_REGISTRY.length;
        const totalCompleted = safeCompleted.length;
        const overallProgress = total > 0 ? (totalCompleted / total) * 100 : 0;

        const branchStats = branches.map(branch => {
            const branchTopics = GEOGRAPHY_REGISTRY.filter(t => t.branch === branch);
            const branchCompleted = branchTopics.filter(t => safeCompleted.includes(t.id)).length;
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

    // Sync progress with backend (Placeholder for March 20 implementation)
    useEffect(() => {
        const syncProgress = async () => {
            if (completedTopics.length > 0) {
                console.log("Syncing Geography Progress to Backend...", completedTopics);
                // Proposed API: await fetch('/api/v1/student/progress/geography', { 
                //    method: 'POST', body: JSON.stringify({ completed: completedTopics }) 
                // });
            }
        };
        syncProgress();
    }, [completedTopics]);

    const handleStartSession = (topic: GeographyTopic) => {
        // Find the block this topic belongs to
        const blockTopics = GEOGRAPHY_REGISTRY.filter(t => t.branch === topic.branch && t.blockId === topic.blockId);
        // Navigate to the session timer with these topics
        localStorage.setItem('current-geo-block', JSON.stringify(blockTopics));
        router.push(`/student/batch1/geography/session?block=${topic.blockId}&branch=${topic.branch}`);
    };

    if (activeSimulation) {
        return (
            <div className="fixed inset-0 z-[200] bg-black">
                <SimulationView 
                    simulationType={activeSimulation} 
                    onClose={() => setActiveSimulation(null)} 
                />
            </div>
        );
    }

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
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-10 rounded-xl px-6 text-xs font-black uppercase tracking-widest text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50"
                        onClick={() => setTerraLabOpen(true)}
                    >
                        <Play className="w-4 h-4 mr-2" /> TerraLab 3D
                    </Button>
                </div>
            </div>

            {viewMode === 'sheet' ? (
                <div className="space-y-6">
                    {/* Stats HUD — All 5 Branches */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <StatHUDCard title="Overall" value={`${Math.round(stats.overallProgress)}%`} subtext={`${stats.totalCompleted}/${stats.total} Topics`} icon={<TargetIcon className="text-indigo-600" />} />
                        <StatHUDCard title="Geomorphology" value={`${Math.round(stats.branchStats.find(b => b.name === 'Geomorphology')?.progress || 0)}%`} subtext={`${stats.branchStats.find(b => b.name === 'Geomorphology')?.completed || 0} done`} icon={<Mountain className="text-amber-600" />} />
                        <StatHUDCard title="Climatology" value={`${Math.round(stats.branchStats.find(b => b.name === 'Climatology')?.progress || 0)}%`} subtext={`${stats.branchStats.find(b => b.name === 'Climatology')?.completed || 0} done`} icon={<Wind className="text-sky-600" />} />
                        <StatHUDCard title="Oceanography" value={`${Math.round(stats.branchStats.find(b => b.name === 'Oceanography')?.progress || 0)}%`} subtext={`${stats.branchStats.find(b => b.name === 'Oceanography')?.completed || 0} done`} icon={<Waves className="text-blue-600" />} />
                        <StatHUDCard title="Resource Geo" value={`${Math.round(stats.branchStats.find(b => b.name === 'Resource Geography')?.progress || 0)}%`} subtext={`${stats.branchStats.find(b => b.name === 'Resource Geography')?.completed || 0} done`} icon={<GraduationCap className="text-rose-600" />} />
                        <StatHUDCard title="Indian Geo" value={`${Math.round(stats.branchStats.find(b => b.name === 'Indian Geography')?.progress || 0)}%`} subtext={`${stats.branchStats.find(b => b.name === 'Indian Geography')?.completed || 0} done`} icon={<Map className="text-emerald-600" />} />
                    </div>

                    {/* Saturday Target Test Special Card */}
                    <Card className="border-none shadow-lg bg-gradient-to-r from-indigo-900 to-slate-900 overflow-hidden relative cursor-pointer group" onClick={() => router.push('/student/batch1/geography/saturday-test')}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
                        <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between relative z-10 gap-6">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white backdrop-blur-sm shadow-xl border border-white/20">
                                    <Target className="w-8 h-8" />
                                </div>
                                <div>
                                    <Badge className="bg-rose-500 text-white hover:bg-rose-600 px-2 py-0.5 text-[10px] tracking-widest uppercase font-black mb-2 border-0">Mandatory</Badge>
                                    <h3 className="text-2xl font-black uppercase tracking-tight text-white m-0">Saturday Mega Test</h3>
                                    <p className="text-sm font-medium text-slate-300 mt-1">100 Questions • 120 Minutes • Level 1, 2, 3</p>
                                </div>
                            </div>
                            <Button className="bg-white text-indigo-900 hover:bg-indigo-50 font-black tracking-widest uppercase text-xs h-12 px-6 rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform shadow-lg shadow-black/20">
                                Start Examination <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </CardContent>
                    </Card>

                    {/* NCERT Level 1 Practice Tabs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                        <Card className="border-none shadow-md overflow-hidden relative cursor-pointer hover:shadow-lg transition-shadow group" onClick={() => { setSelectedNcertBook('Fundamentals of Physical Geo (Class 11)'); setNcertModalOpen(true); }}>
                            <CardContent className="p-6">
                                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 text-emerald-600 group-hover:scale-110 transition-transform">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-tight text-slate-800 dark:text-slate-100 mb-1 relative z-10">
                                    Fundamentals of Physical Geo
                                </h3>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest relative z-10">Class 11 • Level 1</p>
                                <ArrowRight className="absolute right-6 bottom-6 w-5 h-5 text-emerald-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-md overflow-hidden relative cursor-pointer hover:shadow-lg transition-shadow group" onClick={() => { setSelectedNcertBook('Indian Physical Environment (Class 11)'); setNcertModalOpen(true); }}>
                            <CardContent className="p-6">
                                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 text-emerald-600 group-hover:scale-110 transition-transform">
                                    <Map className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-tight text-slate-800 dark:text-slate-100 mb-1 relative z-10">
                                    Indian Physical Environment
                                </h3>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest relative z-10">Class 11 • Level 1</p>
                                <ArrowRight className="absolute right-6 bottom-6 w-5 h-5 text-emerald-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-md overflow-hidden relative cursor-pointer hover:shadow-lg transition-shadow group" onClick={() => { setSelectedNcertBook('Fundamentals of Human Geo (Class 12)'); setNcertModalOpen(true); }}>
                            <CardContent className="p-6">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                                    <Globe2 className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-tight text-slate-800 dark:text-slate-100 mb-1 relative z-10">
                                    Fundamentals of Human Geo
                                </h3>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest relative z-10">Class 12 • Level 1</p>
                                <ArrowRight className="absolute right-6 bottom-6 w-5 h-5 text-blue-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-md overflow-hidden relative cursor-pointer hover:shadow-lg transition-shadow group" onClick={() => { setSelectedNcertBook('India: People and Economy (Class 12)'); setNcertModalOpen(true); }}>
                            <CardContent className="p-6">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                                    <TargetIcon className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-tight text-slate-800 dark:text-slate-100 mb-1 relative z-10">
                                    India: People and Economy
                                </h3>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest relative z-10">Class 12 • Level 1</p>
                                <ArrowRight className="absolute right-6 bottom-6 w-5 h-5 text-blue-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </CardContent>
                        </Card>
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
                                        Array.isArray(filteredTopics) && Array.isArray(completedTopics) &&
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
                                                        <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <h4 className={`text-base font-bold truncate ${isCompleted ? 'text-slate-400 line-through' : 'text-slate-800 dark:text-slate-100'}`}>
                                                                    {topic.title}
                                                                </h4>
                                                                <Badge className={`text-[9px] font-black uppercase py-0.5 px-2 rounded-md ${isCompleted ? 'bg-slate-100 text-slate-400' : 'bg-slate-100 text-slate-600'} border-0`}>
                                                                    {topic.branch}
                                                                </Badge>
                                                                {topic.referenceChapter && (
                                                                    <Badge variant="outline" className={`text-[9px] font-black uppercase py-0.5 px-2 rounded-md border-indigo-200 text-indigo-700 bg-indigo-50 flex items-center gap-1`}>
                                                                        <BookOpen className="w-2.5 h-2.5" /> Base: {topic.referenceChapter}
                                                                    </Badge>
                                                                )}
                                                                {isCompleted && confidenceRatings[topic.id] && (
                                                                    <div
                                                                        className={`w-2.5 h-2.5 rounded-full ${confidenceRatings[topic.id] === 'high' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' :
                                                                                confidenceRatings[topic.id] === 'medium' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]' :
                                                                                    'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]'
                                                                            }`}
                                                                        title={`Confidence: ${confidenceRatings[topic.id]}`}
                                                                    />
                                                                )}
                                                            </div>
                                                            <div className="flex items-center gap-4 mt-1.5 md:mt-0">
                                                                <span className="text-[10px] text-muted-foreground font-black uppercase tracking-wider flex items-center gap-1.5">
                                                                    <Clock className="w-3.5 h-3.5 text-indigo-400" /> Teaching Block {topic.blockId}
                                                                </span>
                                                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                                <span className={`text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 ${isCompleted ? 'text-emerald-600' : 'text-amber-500'}`}>
                                                                    <GraduationCap className="w-3.5 h-3.5" /> {isCompleted ? 'Mastered' : 'Ready to Learn'}
                                                                </span>
                                                            </div>
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
                        <FeatureCard title="Interactive Maps" desc="Explore geographic terrain in 3D." icon={<Globe2 className="w-6 h-6" />} color="bg-indigo-600" onClick={() => setComingSoonFeature('Interactive Maps')} />
                        <FeatureCard title="Climatology Sim" desc="Real-time Koppen classifications." icon={<Wind className="w-6 h-6" />} color="bg-emerald-600" onClick={() => setComingSoonFeature('Climatology Simulator')} />
                        <FeatureCard title="Ocean Lab" desc="Track complex current patterns." icon={<Waves className="w-6 h-6" />} color="bg-blue-600" onClick={() => setComingSoonFeature('Ocean Lab')} />
                        <FeatureCard title="Resource Atlas" desc="Mineral deposits across India." icon={<Mountain className="w-6 h-6" />} color="bg-amber-600" onClick={() => setComingSoonFeature('Resource Atlas')} />
                    </div>
                </div>
            )}

            {/* Coming Soon Modal */}
            <Dialog open={!!comingSoonFeature} onOpenChange={() => setComingSoonFeature(null)}>
                <DialogContent className="sm:max-w-md rounded-3xl">
                    <DialogHeader>
                        <div className="text-center space-y-4 py-4">
                            <div className="text-5xl">🚀</div>
                            <DialogTitle className="text-2xl font-black uppercase tracking-tight">
                                {comingSoonFeature} — Coming Soon
                            </DialogTitle>
                            <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                                You have early <span className="font-bold text-indigo-600">Founding Member Access</span>. We are building {comingSoonFeature} specifically for deep UPSC geography practice. You'll be notified the moment it goes live.
                            </DialogDescription>
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-xl p-4 text-sm text-indigo-700 dark:text-indigo-300 font-medium">
                                Estimated launch: <span className="font-black">March 20, 2026</span>
                            </div>
                            <button
                                onClick={() => setComingSoonFeature(null)}
                                className="w-full py-3 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-black text-sm uppercase tracking-widest transition-all"
                            >
                                Got It — I'll Check Back Soon
                            </button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            {/* TerraLab 3D Simulator Modal */}
            <Dialog open={terraLabOpen} onOpenChange={setTerraLabOpen}>
                <DialogContent className="sm:max-w-4xl overflow-hidden rounded-[2.5rem] p-0 border-0 bg-transparent shadow-2xl">
                    <div className="bg-gradient-to-br from-cyan-900 to-slate-900 border-b border-white/10 p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 translate-x-1/3 -translate-y-1/3 animate-pulse" />
                        <div className="flex items-center gap-6 relative z-10">
                            <div className="w-20 h-20 bg-cyan-500/20 backdrop-blur-xl rounded-3xl flex items-center justify-center flex-shrink-0 border border-white/20 shadow-2xl">
                                <Globe2 className="w-10 h-10 text-cyan-400" />
                            </div>
                            <div className="min-w-0">
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Terra<span className="text-cyan-400">Lab</span> 3D</h2>
                                <p className="text-cyan-200/60 text-sm font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
                                    <Activity className="w-4 h-4" /> Next-Gen Physical Geography Simulator
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-950 p-8 pt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { id: 'monsoon' as SimulationType, title: 'Monsoon Dynamics', icon: <Wind className="w-6 h-6 text-orange-400" />, desc: '3D pressure belts & seasonal wind reversal over India.' },
                                { id: 'plate-tectonics' as SimulationType, title: 'Plate Tectonics', icon: <Layers className="w-6 h-6 text-red-500" />, desc: 'Divergent & convergent boundaries with subduction zones.' },
                                { id: 'volcano' as SimulationType, title: 'Volcanic Systems', icon: <Thermometer className="w-6 h-6 text-orange-600" />, desc: 'Internal magma chambers & different eruptive styles.' },
                                { id: 'ganga-river' as SimulationType, title: 'Ganga River Basin', icon: <Droplets className="w-6 h-6 text-cyan-400" />, desc: 'Topographical flow from Uttarakhand to West Bengal.' },
                                { id: 'glacial-landforms' as SimulationType, title: 'Glacial Erosion', icon: <Mountain className="w-6 h-6 text-sky-200" />, desc: 'U-shaped valleys, cirques, and moraine deposition.' },
                                { id: 'earth-layers-interactive' as SimulationType, title: 'Internal Interior', icon: <Layers className="w-6 h-6 text-amber-500" />, desc: 'Cross-section of Crust, Mantle, and Core layers.' }
                            ].map((sim) => (
                                <button
                                    key={sim.id}
                                    onClick={() => {
                                        setActiveSimulation(sim.id);
                                        setTerraLabOpen(false);
                                    }}
                                    className="flex flex-col text-left p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all group relative overflow-hidden"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                                        {sim.icon}
                                    </div>
                                    <h4 className="text-white font-black uppercase tracking-tight mb-2 text-sm">{sim.title}</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed font-medium">{sim.desc}</p>
                                    <div className="absolute bottom-4 right-4 text-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Play className="w-4 h-4" />
                                    </div>
                                </button>
                            ))}
                        </div>
                        <div className="mt-10 pt-8 border-t border-white/5 flex justify-center">
                            <Button variant="ghost" className="text-slate-500 hover:text-white font-black uppercase tracking-widest text-[10px]" onClick={() => setTerraLabOpen(false)}>
                                Close Simulations
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* NCERT Level 1 Practice Modal */}
            <Dialog open={ncertModalOpen} onOpenChange={setNcertModalOpen}>
                <DialogContent className="sm:max-w-3xl overflow-hidden rounded-[2rem] p-0 border-0 bg-transparent shadow-2xl">
                    <div className="bg-slate-900 border-b border-white/10 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-14 h-14 bg-indigo-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                                <BookOpen className="w-7 h-7 text-indigo-400" />
                            </div>
                            <div className="min-w-0">
                                <h2 className="text-3xl font-black text-white uppercase tracking-tight truncate">{selectedNcertBook}</h2>
                                <p className="text-indigo-200/80 text-sm font-medium uppercase tracking-widest mt-1 hidden sm:block">Level 1 NCERT Practice Assessment</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-card p-6 pb-8">
                        <p className="text-[11px] font-black uppercase tracking-widest text-muted-foreground mb-6 pl-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-indigo-500" /> Select a chapter to launch its practice test (40 MCQs each)
                        </p>
                        <ScrollArea className="h-[400px] pr-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {Array.from({length: 14}).map((_, i) => (
                                    <Button 
                                        key={i} 
                                        variant="outline" 
                                        className="justify-between h-16 font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-indigo-700 hover:border-indigo-300 transition-all text-left px-6 rounded-xl border-slate-200 group relative overflow-hidden shadow-sm"
                                        onClick={() => {
                                            router.push(`/student/batch1/geography/ncert-test/${i + 1}`);
                                            setNcertModalOpen(false);
                                        }}
                                    >
                                        <div className="flex items-center gap-4 relative z-10">
                                            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-black text-xs group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                                {String(i + 1).padStart(2, '0')}
                                            </div>
                                            <span className="text-sm truncate">Chapter {i + 1}</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-indigo-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all relative z-10" />
                                    </Button>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                </DialogContent>
            </Dialog>
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

function FeatureCard({ title, desc, icon, color, onClick }: { title: string, desc: string, icon: React.ReactNode, color: string, onClick: () => void }) {
    return (
        <Card className="group hover:shadow-xl transition-all cursor-pointer border-border overflow-hidden rounded-[1.5rem]" onClick={onClick}>
            <CardContent className="p-6 space-y-4">
                <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {icon}
                </div>
                <div>
                    <h3 className="text-lg font-black uppercase tracking-tight">{title}</h3>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">{desc}</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-amber-600 uppercase tracking-widest">
                    🚀 Coming March 20 <ChevronRight className="w-3 h-3" />
                </div>
            </CardContent>
        </Card>
    );
}
