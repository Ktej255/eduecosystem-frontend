"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
    Leaf, 
    Calendar, 
    LayoutGrid, 
    Layers, 
    ThermometerSun, 
    ChevronRight, 
    History, 
    BookOpenCheck 
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import FoodWebViz from './visualizations/FoodWebViz';
import CarbonCycleViz from './visualizations/CarbonCycleViz';
import ClimateAgreementsViz from './visualizations/ClimateAgreementsViz';
import EnvironmentStoryTimeline from './visualizations/EnvironmentStoryTimeline';
import ClimateTimeMachine from './visualizations/ClimateTimeMachine';
import EnvironmentSectionPlanner from './EnvironmentSectionPlanner';
import { ENVIRONMENT_SYLLABUS } from './data/environment-schedule-data';

export default function EnvironmentDashboard() {
    const [viewMode, setViewMode] = useState<'planner' | 'visual' | 'syllabus'>('planner');
    const [syllabusTab, setSyllabusTab] = useState<'Basics' | 'Chronology'>('Basics');
    const [chronologyView, setChronologyView] = useState<'cards' | 'timeline'>('cards');

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Visual Hub Banner */}
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                        <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-emerald-900 dark:text-emerald-100">Visual Environment Hub</h3>
                        <p className="text-sm text-emerald-700 dark:text-emerald-300">Explore interactive simulations: Food Webs, Carbon Cycle & Climate Agreements.</p>
                    </div>
                </div>
                {/* View Toggle */}
                <div className="flex bg-card/50 dark:bg-black/20 p-1 rounded-lg border border-emerald-100 dark:border-emerald-800 gap-1">
                    <button
                        onClick={() => setViewMode('planner')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-2 ${viewMode === 'planner' ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-700 hover:bg-emerald-100'}`}
                    >
                        <Calendar className="w-3 h-3" /> Planner
                    </button>
                    <button
                        onClick={() => setViewMode('visual')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-2 ${viewMode === 'visual' ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-700 hover:bg-emerald-100'}`}
                    >
                        <LayoutGrid className="w-3 h-3" /> Visual Hub
                    </button>
                    <button
                        onClick={() => setViewMode('syllabus')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-2 ${viewMode === 'syllabus' ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-700 hover:bg-emerald-100'}`}
                    >
                        <Layers className="w-3 h-3" /> Syllabus
                    </button>
                </div>
            </div>

            {/* Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    label="Biodiversity Index"
                    value="Critical"
                    color="text-red-500"
                    icon={<Leaf className="w-5 h-5 text-emerald-500" />}
                />
                <StatCard
                    label="CO2 Concentration"
                    value="421 ppm"
                    color="text-orange-500"
                    icon={<ThermometerSun className="w-5 h-5 text-orange-500" />}
                />
                <StatCard
                    label="Global Temp Rise"
                    value="+1.1°C"
                    color="text-red-600"
                    icon={<ThermometerSun className="w-5 h-5 text-red-500" />}
                />
            </div>

            {viewMode === 'planner' && (
                <div className="animate-in slide-in-from-bottom-4 duration-500">
                    <EnvironmentSectionPlanner onViewVisuals={() => setViewMode('visual')} />
                </div>
            )}

            {viewMode === 'visual' && (
                <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                    {/* Climate Time Machine */}
                    <ClimateTimeMachine />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left: Food Web */}
                        <div className="space-y-6">
                            <FoodWebViz />
                        </div>

                        {/* Right: Cycles */}
                        <div className="space-y-6">
                            <CarbonCycleViz />
                        </div>
                    </div>

                    {/* Climate Agreements - Full Width */}
                    <ClimateAgreementsViz />
                </div>
            )}

            {viewMode === 'syllabus' && (
                <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                    {/* Category Filter */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex bg-muted p-1 rounded-xl w-fit gap-1">
                            <button 
                                onClick={() => setSyllabusTab('Basics')}
                                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${syllabusTab === 'Basics' ? 'bg-white dark:bg-slate-700 shadow-md text-emerald-600' : 'text-muted-foreground hover:bg-white/50'}`}
                            >
                                Concept Foundation (Basics)
                            </button>
                            <button 
                                onClick={() => setSyllabusTab('Chronology')}
                                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${syllabusTab === 'Chronology' ? 'bg-white dark:bg-slate-700 shadow-md text-emerald-600' : 'text-muted-foreground hover:bg-white/50'}`}
                            >
                                The Grand Story (Chronology)
                            </button>
                        </div>

                        {syllabusTab === 'Chronology' && (
                            <div className="flex bg-stone-100 dark:bg-stone-900 duration-500 p-1 rounded-lg w-fit gap-1 animate-in fade-in zoom-in-95">
                                <button 
                                    onClick={() => setChronologyView('cards')}
                                    className={`px-4 py-1.5 rounded-md text-[10px] uppercase tracking-widest font-bold transition-all ${chronologyView === 'cards' ? 'bg-white dark:bg-stone-800 shadow-sm text-stone-600' : 'text-stone-400 hover:text-stone-500'}`}
                                >
                                    Card View
                                </button>
                                <button 
                                    onClick={() => setChronologyView('timeline')}
                                    className={`px-4 py-1.5 rounded-md text-[10px] uppercase tracking-widest font-bold transition-all ${chronologyView === 'timeline' ? 'bg-white dark:bg-stone-800 shadow-sm text-stone-600' : 'text-stone-400 hover:text-stone-500'}`}
                                >
                                    Interactive Timeline
                                </button>
                            </div>
                        )}
                    </div>

                    {syllabusTab === 'Chronology' && chronologyView === 'timeline' ? (
                        <div className="max-w-4xl mx-auto py-8">
                            <EnvironmentStoryTimeline />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {ENVIRONMENT_SYLLABUS.filter(t => t.category === syllabusTab).map((topic) => (
                                <Card key={topic.id} className="group hover:border-emerald-300 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                                    <CardHeader className="pb-3">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className={`p-2 rounded-lg ${topic.category === 'Chronology' ? 'bg-stone-100 text-stone-600' : 'bg-emerald-100 text-emerald-600'}`}>
                                                {topic.category === 'Chronology' ? <History className="w-4 h-4" /> : <BookOpenCheck className="w-4 h-4" />}
                                            </div>
                                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-muted rounded-full">
                                                {topic.id}
                                            </span>
                                        </div>
                                        <CardTitle className="text-xl text-foreground group-hover:text-emerald-600 transition-colors font-serif italic">
                                            {topic.title}
                                        </CardTitle>
                                        <CardDescription className="line-clamp-2 mt-2 leading-relaxed">
                                            {topic.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2 mb-6">
                                            {topic.subtopics.slice(0, 4).map((sub, i) => (
                                                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                                                    <span className="truncate">{sub}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Link href={`/student/upsc/environment/${topic.id}`}>
                                            <button className="w-full py-3 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white rounded-xl text-sm font-bold flex items-center justify-center gap-3 transition-all border border-emerald-100 dark:border-emerald-900 shadow-sm group-hover:shadow-emerald-200/50">
                                                Enter Module <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            )}
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
