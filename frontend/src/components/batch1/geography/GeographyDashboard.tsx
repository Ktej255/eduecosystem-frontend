"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Globe2, Mountain, Waves, Wind, CloudRain, Map, Flame, Info, ChevronRight, BookOpenCheck, Layers, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { GEOGRAPHY_SYLLABUS, Module } from './data/geography-syllabus-data';

// Simulations
import ClimateClassificationViz from './3d/simulations/ClimateClassificationViz';
import PlateTectonicsViz from './3d/simulations/PlateTectonicsViz';
import MonsoonViz from './3d/simulations/MonsoonViz';
import RiverSystemViz from './3d/simulations/RiverSystemViz';
import GlacialViz from './3d/simulations/GlacialViz';
import VolcanoViz from './3d/simulations/VolcanoViz';
import AtmosphericViz from './3d/simulations/AtmosphericViz';

const VIZ_COMPONENTS: Record<string, React.ReactNode> = {
    'climate': <ClimateClassificationViz />,
    'tectonics': <PlateTectonicsViz />,
    'monsoon': <MonsoonViz />,
    'rivers': <RiverSystemViz />,
    'glaciers': <GlacialViz />,
    'volcanoes': <VolcanoViz />,
    'atmosphere': <AtmosphericViz />
};

const VIZ_LIST = [
    { id: 'climate', label: 'Climate Zones', icon: <Wind className="w-4 h-4" />, desc: 'Koppen-Geiger Classification' },
    { id: 'tectonics', label: 'Plate Tectonics', icon: <Mountain className="w-4 h-4" />, desc: 'Boundaries & Movements' },
    { id: 'monsoon', label: 'Monsoon System', icon: <CloudRain className="w-4 h-4" />, desc: 'Southwest & Northeast flows' },
    { id: 'rivers', label: 'River Systems', icon: <Waves className="w-4 h-4" />, desc: 'Drainage Patterns & Erosion' },
    { id: 'glaciers', label: 'Glaciology', icon: <Map className="w-4 h-4" />, desc: 'Erosional & Depositional forms' },
    { id: 'volcanoes', label: 'Volcanism', icon: <Flame className="w-4 h-4" />, desc: 'Types & Distribution' },
    { id: 'atmosphere', label: 'Atmosphere', icon: <Globe2 className="w-4 h-4" />, desc: 'Pressure Belts & Winds' },
];

export default function GeographyDashboard() {
    const [activeViz, setActiveViz] = useState<string>('climate');
    const [viewMode, setViewMode] = useState<'visual' | 'syllabus'>('visual');

    const getModuleLink = (moduleId: string, topicId?: string) => {
        if (topicId === 'universe-solar-system') return '/student/batch1/geography/universe';
        if (moduleId === 'geomorphology' || topicId === 'interior-earth') return '/student/batch1/geography/geomorphology';
        if (moduleId === 'evolution-earth') return '/student/batch1/geography/earth-evolution';
        return `/student/batch1/geography/${moduleId}`;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard
                    icon={<Globe2 />}
                    label="Active Simulations"
                    value="7"
                    color="text-indigo-500"
                />
                <StatCard
                    icon={<Mountain />}
                    label="Landforms"
                    value="50+"
                    color="text-amber-500"
                />
                <StatCard
                    icon={<Waves />}
                    label="Ocean Currents"
                    value="Dynamic"
                    color="text-blue-500"
                />
                <StatCard
                    icon={<Wind />}
                    label="Climate Zones"
                    value="12 (Koppen)"
                    color="text-emerald-500"
                />
            </div>

            {/* View Toggle */}
            <div className="flex justify-end border-b border-slate-200 dark:border-slate-800 pb-1">
                <div className="flex gap-4">
                    <button
                        onClick={() => setViewMode('visual')}
                        className={`px-4 py-2 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${viewMode === 'visual' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                    >
                        <LayoutGrid className="w-4 h-4" /> Visual Hub
                    </button>
                    <button
                        onClick={() => setViewMode('syllabus')}
                        className={`px-4 py-2 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${viewMode === 'syllabus' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                    >
                        <Layers className="w-4 h-4" /> Syllabus Modules
                    </button>
                </div>
            </div>

            {viewMode === 'visual' ? (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 animate-in slide-in-from-bottom-4 duration-500">
                    {/* Simulation Controls - Left Sidebar */}
                    <div className="lg:col-span-1 space-y-4">
                        <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                            <CardHeader className="bg-slate-50 dark:bg-slate-900/50 py-4">
                                <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-500">TerraLab Hub</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                {VIZ_LIST.map((viz) => (
                                    <button
                                        key={viz.id}
                                        onClick={() => setActiveViz(viz.id)}
                                        className={`w-full flex items-center gap-4 p-4 border-b border-slate-100 dark:border-slate-800 transition-all text-left group ${activeViz === viz.id ? 'bg-indigo-50 dark:bg-indigo-950/20 border-l-4 border-l-indigo-600' : 'hover:bg-slate-50 dark:hover:bg-slate-900/30'}`}
                                    >
                                        <div className={`p-2 rounded-lg ${activeViz === viz.id ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:text-indigo-500'}`}>
                                            {viz.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className={`text-sm font-bold ${activeViz === viz.id ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300'}`}>
                                                {viz.label}
                                            </h4>
                                            <p className="text-[10px] text-slate-400 font-medium">{viz.desc}</p>
                                        </div>
                                        <ChevronRight className={`w-4 h-4 transition-transform ${activeViz === viz.id ? 'text-indigo-500 translate-x-1' : 'text-slate-300 opacity-0 group-hover:opacity-100'}`} />
                                    </button>
                                ))}
                            </CardContent>
                        </Card>

                        <Card className="bg-indigo-600 text-white border-none overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                            <CardContent className="p-6">
                                <h3 className="text-lg font-bold mb-2">3D Fullscreen</h3>
                                <p className="text-indigo-100 text-[11px] mb-4">
                                    Experience physical geography in an immersive 3D environment.
                                </p>
                                <Link href="/student/upsc/geography/3d">
                                    <button className="w-full py-2 bg-white text-indigo-600 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-indigo-50 transition-colors shadow-lg">
                                        Launch Module
                                    </button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Visualization Display */}
                    <div className="lg:col-span-3 space-y-6 min-h-[600px] flex flex-col">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeViz}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xl"
                            >
                                {VIZ_COMPONENTS[activeViz]}
                            </motion.div>
                        </AnimatePresence>

                        {/* Quick Facts Strip */}
                        <Card className="bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800">
                            <CardContent className="p-4 flex items-center justify-between">
                                <div className="flex gap-8">
                                    <FactItem text="India: 7516.6 km coastline" />
                                    <FactItem text="Deccan Trap: Cretaceous" />
                                    <FactItem text="Highest Peak: K2" />
                                </div>
                                <Badge variant="outline" className="border-indigo-500/30 text-indigo-600 bg-indigo-50 text-[10px] uppercase font-bold">
                                    TerraLab v2.4
                                </Badge>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-500">
                    {GEOGRAPHY_SYLLABUS.map((module) => (
                        <Card key={module.id} className="group hover:border-indigo-300 transition-all hover:shadow-md dark:bg-slate-900 dark:border-slate-800">
                            <CardHeader className="pb-3" style={{ borderTop: `4px solid ${module.color}` }}>
                                <CardTitle className="text-lg text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 transition-colors">
                                    {module.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-2">
                                    {module.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 mb-4 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                                    {module.topics.map((topic, i) => (
                                        <Link key={topic.id} href={getModuleLink(module.id, topic.id)} className="block group/item">
                                            <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                                <BookOpenCheck className="w-3.5 h-3.5 text-indigo-400 mt-0.5 group-hover/item:text-indigo-600" />
                                                <span className="truncate flex-1 font-medium">{topic.title}</span>
                                                <ChevronRight className="w-3 h-3 text-slate-300 opacity-0 group-hover/item:opacity-100 transition-all" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <Link href={getModuleLink(module.id)}>
                                    <button className="w-full py-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors">
                                        Explore Module <ChevronRight className="w-4 h-4" />
                                    </button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: string, color: string }) {
    return (
        <Card>
            <CardContent className="p-5 flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-opacity-10 ${color.replace('text-', 'bg-')} flex items-center justify-center`}>
                    <div className={color}>
                        {icon}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-0.5">{label}</p>
                </div>
            </CardContent>
        </Card>
    );
}

function FactItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tight">{text}</p>
        </div>
    );
}
