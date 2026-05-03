"use client";

import React, { useState, useMemo } from 'react';
import { 
    Layout, 
    BarChart3, 
    BookOpen, 
    Zap, 
    History as HistoryIcon,
    ArrowRight,
    Sparkles,
    Target
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

// Framework Components
import SubjectPlanner, { SubjectConfig } from '../common/framework/SubjectPlanner';
import SubjectDrillWidget from '../SubjectDrillWidget';
import GenericFlashcardSession from '../common/framework/GenericFlashcardSession';

export interface DashboardStat {
    label: string;
    value: string;
    trend?: string;
    icon: React.ReactNode;
}

export interface Visualization {
    id: string;
    label: string;
    icon: React.ReactNode;
    description: string;
    component: React.ReactNode;
}

export interface SubjectDashboardProps {
    subjectId: string;
    title: string;
    subtitle: string;
    accentColor: string; // Tailwind color like 'emerald', 'blue', 'rose'
    stats: DashboardStat[];
    visualizations: Visualization[];
    plannerConfig: SubjectConfig;
    flashcards: any[];
    timelineComponent?: React.ReactNode;
}

export default function SubjectDashboardTemplate({
    subjectId,
    title,
    subtitle,
    accentColor,
    stats,
    visualizations,
    plannerConfig,
    flashcards,
    timelineComponent
}: SubjectDashboardProps) {
    const [activeViz, setActiveViz] = useState<string>(visualizations[0]?.id || '');

    const accentClasses: Record<string, string> = {
        emerald: 'text-emerald-600 border-emerald-600 bg-emerald-50 dark:bg-emerald-900/20',
        blue: 'text-blue-600 border-blue-600 bg-blue-50 dark:bg-blue-900/20',
        rose: 'text-rose-600 border-rose-600 bg-rose-50 dark:bg-rose-900/20',
        amber: 'text-amber-600 border-amber-600 bg-amber-50 dark:bg-amber-900/20',
        purple: 'text-purple-600 border-purple-600 bg-purple-50 dark:bg-purple-900/20',
        indigo: 'text-indigo-600 border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20',
    };

    const accentActive = accentClasses[accentColor] || accentClasses.blue;

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a] pb-20">
            {/* Subject Hero Header */}
            <div className={`bg-card dark:bg-black border-b border-border sticky top-0 z-50`}>
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-${accentColor}-600 flex items-center justify-center text-white shadow-lg shadow-${accentColor}-500/20`}>
                            <BarChart3 className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="font-black text-xl tracking-tight uppercase">
                                {title}<span className="text-muted-foreground font-light ml-1">HUB</span>
                            </h1>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-rose-500" />
                            <span>Target: Prelims 2026</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat, i) => (
                        <Card key={i} className="border-border hover:shadow-md transition-shadow">
                            <CardContent className="p-6 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                                    <h3 className="text-2xl font-black">{stat.value}</h3>
                                    {stat.trend && (
                                        <Badge variant="secondary" className="mt-2 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 border-emerald-100">
                                            {stat.trend}
                                        </Badge>
                                    )}
                                </div>
                                <div className="p-3 bg-muted rounded-2xl">
                                    {stat.icon}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Tabs defaultValue="visuals" className="space-y-8">
                    <div className="flex items-center justify-between border-b border-border pb-1">
                        <TabsList className="bg-transparent gap-8 h-auto p-0 justify-start">
                            <TabsTrigger value="visuals" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 font-bold text-sm">
                                Visuals & Labs
                            </TabsTrigger>
                            <TabsTrigger value="syllabus" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 font-bold text-sm">
                                Syllabus & Planner
                            </TabsTrigger>
                            <TabsTrigger value="practice" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 font-bold text-sm">
                                Practice Drills
                            </TabsTrigger>
                            {timelineComponent && (
                                <TabsTrigger value="timeline" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 font-bold text-sm">
                                    Timeline
                                </TabsTrigger>
                            )}
                        </TabsList>

                        <div className="hidden sm:block">
                            <Badge variant="outline" className="text-[10px] font-mono">Ver. 2.0.4-Unified</Badge>
                        </div>
                    </div>

                    <TabsContent value="visuals" className="mt-0">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {/* Sidebar Controls */}
                            <div className="lg:col-span-1 space-y-4">
                                <Card className="border-border">
                                    <div className="p-4 border-b border-border">
                                        <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Laboratory Modules</h3>
                                    </div>
                                    <CardContent className="p-2 space-y-1">
                                        {visualizations.map((viz) => (
                                            <button
                                                key={viz.id}
                                                onClick={() => setActiveViz(viz.id)}
                                                className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all text-left ${activeViz === viz.id
                                                    ? accentActive
                                                    : 'hover:bg-muted dark:hover:bg-slate-800 border-transparent'
                                                    } border`}
                                            >
                                                <div className={`p-2 rounded-lg ${activeViz === viz.id ? `bg-${accentColor}-600 text-white` : 'bg-muted text-muted-foreground'}`}>
                                                    {viz.icon}
                                                </div>
                                                <div>
                                                    <h4 className={`text-sm font-bold ${activeViz === viz.id ? `text-${accentColor}-600` : ''}`}>
                                                        {viz.label}
                                                    </h4>
                                                    <p className="text-[10px] text-muted-foreground opacity-80 mt-0.5">{viz.description}</p>
                                                </div>
                                            </button>
                                        ))}
                                    </CardContent>
                                </Card>

                                <Card className={`bg-gradient-to-br from-${accentColor}-600 to-${accentColor}-800 text-white border-0 overflow-hidden relative`}>
                                    <div className="absolute -right-4 -bottom-4 opacity-10">
                                        <Sparkles className="w-32 h-32" />
                                    </div>
                                    <CardContent className="p-6 relative z-10">
                                        <h3 className="font-bold mb-2">Subject Mastery</h3>
                                        <div className="text-3xl font-black">0%</div>
                                        <div className="text-[10px] uppercase tracking-wider opacity-70">Concept Completion</div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Visualization Display */}
                            <div className="lg:col-span-3">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeViz}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl min-h-[500px]"
                                    >
                                        {visualizations.find(v => v.id === activeViz)?.component}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="syllabus" className="mt-0">
                        <SubjectPlanner config={plannerConfig} embedded={true} />
                    </TabsContent>

                    <TabsContent value="practice" className="mt-0">
                        <div className="max-w-2xl mx-auto py-8">
                            <div className="mb-8 text-center">
                                <h2 className="text-3xl font-black mb-2">Adaptive Drill</h2>
                                <p className="text-muted-foreground text-sm">Live adaptive questions from the {title} question bank.</p>
                            </div>
                            <SubjectDrillWidget subject={title} color={accentColor} />
                        </div>
                    </TabsContent>

                    {timelineComponent && (
                        <TabsContent value="timeline" className="mt-0">
                            {timelineComponent}
                        </TabsContent>
                    )}
                </Tabs>
            </div>
        </div>
    );
}
