"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Crown, Building2, Scroll, Sword, ArrowRight, BookOpen, Globe, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { ModernHistoryTimeline } from './ModernHistoryTimeline';
import EmpireMapViz from './visuals/EmpireMapViz';
import HistoryTunnelViz from './visuals/HistoryTunnelViz';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuestionBankDashboard from './question-bank/QuestionBankDashboard';
import { useLanguageStore } from '@/lib/language-store';
import SubjectDrillWidget from '@/components/upsc/SubjectDrillWidget';

const HISTORY_ERAS = [
    {
        id: 'ancient',
        title: 'Ancient India',
        period: '2500 BCE - 700 CE',
        color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200',
        icon: Building2,
        events: [
            { year: '2500 BCE', title: 'Indus Valley Civilization' },
            { year: '1500 BCE', title: 'Vedic Period' },
            { year: '600 BCE', title: 'Mahajanapadas' },
            { year: '321 BCE', title: 'Mauryan Empire' },
            { year: '320 CE', title: 'Gupta Empire (Golden Age)' },
        ]
    },
    {
        id: 'medieval',
        title: 'Medieval India',
        period: '700 CE - 1700 CE',
        color: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-200',
        icon: Crown,
        events: [
            { year: '750 CE', title: 'Tripartite Struggle' },
            { year: '1206 CE', title: 'Delhi Sultanate' },
            { year: '1336 CE', title: 'Vijayanagara Empire' },
            { year: '1526 CE', title: 'Mughal Empire' },
            { year: '1674 CE', title: 'Maratha Empire' },
        ]
    },
    {
        id: 'world',
        title: 'World History',
        period: '18th - 20th Century',
        color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200',
        icon: Globe,
        events: [
            { year: '1760', title: 'Industrial Revolution' },
            { year: '1789', title: 'French Revolution' },
            { year: '1914', title: 'World War I' },
            { year: '1939', title: 'World War II' },
            { year: '1991', title: 'End of Cold War' },
        ]
    }
];

import HistoryGapHeatmap from './analytics/HistoryGapHeatmap';
import HistoryTimeline from './HistoryTimeline';
import SubjectPlanner from '../../common/framework/SubjectPlanner';
import { HISTORY_CONFIG } from './data/history-config';

// ... (existing imports)

export default function HistoryDashboard() {
    const { language, setLanguage } = useLanguageStore();
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Header / Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                        <Scroll className="h-8 w-8 text-amber-600" />
                        History Overview Hub
                    </h1>
                    <p className="text-muted-foreground dark:text-muted-foreground">Master Reference: Syllabus, Timeline, Maps & PYQ Analytics.</p>
                </div>
                <div className="flex gap-3">
                    <div className="flex items-center bg-muted rounded-lg p-1 border border-border">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${language === 'en' ? 'bg-card shadow-sm text-blue-600 dark:text-blue-400' : 'text-muted-foreground hover:text-foreground dark:hover:text-slate-300'}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage('hi')}
                            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${language === 'hi' ? 'bg-card shadow-sm text-orange-600 dark:text-orange-400' : 'text-muted-foreground hover:text-foreground dark:hover:text-slate-300'}`}
                        >
                            हिंदी
                        </button>
                    </div>
                    <Link href="/student/pyq?subject=History">
                        <Button variant="outline" className="border-amber-500 text-amber-700 hover:bg-amber-50 dark:text-amber-300 dark:hover:bg-amber-900/20">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Access PYQ Portal
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Cognitive Heatmap Section */}
            <HistoryGapHeatmap />

            <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="bg-muted p-1 rounded-xl">
                    <TabsTrigger value="overview" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">Visual Hub</TabsTrigger>
                    <TabsTrigger value="syllabus" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">Syllabus Map</TabsTrigger>
                    <TabsTrigger value="timeline" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">Detailed Timeline</TabsTrigger>
                    <TabsTrigger value="drill" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">⚡ Quick Drill</TabsTrigger>
                    <TabsTrigger value="bank" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">Question Bank</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <EmpireMapViz />
                            <HistoryTunnelViz />
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-foreground">Historical Eras</h3>
                            {HISTORY_ERAS.map((era) => (
                                <Card key={era.id} className="hover:shadow-md transition-all">
                                    <div className={`p-4 border-b-2 ${era.color} bg-opacity-10 border-opacity-20`}>
                                        <div className="flex items-center gap-3">
                                            <era.icon className="w-6 h-6" />
                                            <div>
                                                <h3 className="font-bold text-lg">{era.title}</h3>
                                                <span className="text-xs font-mono opacity-80">{era.period}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-4 bg-muted/20">
                                        <div className="space-y-4 relative pl-4 border-l-2 border-dashed border-border">
                                            {era.events.map((event, idx) => (
                                                <div key={idx} className="relative">
                                                    <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-card border-2 border-border" />
                                                    <div>
                                                        <div className="font-bold text-xs text-indigo-600 dark:text-indigo-400">{event.year}</div>
                                                        <div className="text-sm text-muted-foreground dark:text-muted-foreground">{event.title}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="syllabus">
                    <Card className="border-none shadow-none bg-transparent">
                        <SubjectPlanner config={HISTORY_CONFIG} />
                    </Card>
                </TabsContent>

                <TabsContent value="timeline">
                    <Card className="p-6">
                        <HistoryTimeline config={HISTORY_CONFIG} onSelectTopic={() => { }} />
                    </Card>
                </TabsContent>

                <TabsContent value="drill">
                    <div className="max-w-2xl mx-auto py-4">
                        <SubjectDrillWidget subject="History" color="amber" />
                    </div>
                </TabsContent>

                <TabsContent value="bank">
                    <QuestionBankDashboard />
                </TabsContent>
            </Tabs>
        </div>
    );
}

function StatCard({ label, value, color, icon }: { label: string, value: string, color: string, icon: React.ReactNode }) {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-muted rounded-lg">
                        {icon}
                    </div>
                </div>
                <div>
                    <h3 className={`text-2xl font-bold mb-1 ${color}`}>{value}</h3>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">{label}</p>
                </div>
            </CardContent>
        </Card>
    );
}
