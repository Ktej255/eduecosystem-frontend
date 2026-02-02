import React, { useState } from 'react';
import TechTreeViz from './visualizations/TechTreeViz';
import SpaceOrbitViz from './visualizations/OrbitSimulation';
import DefenseTechViz from './visualizations/DefenseTechViz';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Atom, Microscope, Rocket, Network, Shield, Globe2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const VIZ_COMPONENTS: Record<string, () => React.ReactNode> = {
    'tech-tree': () => <TechTreeViz />,
    'orbits': () => <SpaceOrbitViz />,
    'defense': () => <DefenseTechViz />
};

const VIZ_LIST = [
    { id: 'tech-tree', label: 'Tech Tree', icon: <Network className="w-4 h-4" />, desc: 'Emerging Technologies Map' },
    { id: 'orbits', label: 'Space Orbits', icon: <Globe2 className="w-4 h-4" />, desc: 'Satellite Mechanics' },
    { id: 'defense', label: 'Defense Sys', icon: <Shield className="w-4 h-4" />, desc: 'Missile Trajectories' },
];

export default function SciTechDashboard() {
    const [activeViz, setActiveViz] = useState<string>('tech-tree');

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    label="Active Missions"
                    value="Gaganyaan-1"
                    status="Operational"
                    color="text-indigo-600"
                    icon={<Rocket className="w-5 h-5" />}
                />
                <StatCard
                    label="Focus Area"
                    value="Generative AI"
                    status="Strategic"
                    color="text-purple-600"
                    icon={<Sparkles className="w-5 h-5" />}
                />
                <StatCard
                    label="Bio-Discovery"
                    value="CRISPR-V3"
                    status="Testing"
                    color="text-rose-600"
                    icon={<Microscope className="w-5 h-5" />}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Controls */}
                <div className="lg:col-span-1 space-y-4">
                    <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
                        <CardHeader className="pb-3 px-4">
                            <CardTitle className="text-sm font-bold uppercase tracking-wider text-slate-500">Simulation Hub</CardTitle>
                        </CardHeader>
                        <CardContent className="p-2 space-y-1">
                            {VIZ_LIST.map((viz) => (
                                <button
                                    key={viz.id}
                                    onClick={() => setActiveViz(viz.id)}
                                    className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all text-left ${activeViz === viz.id
                                        ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800'
                                        : 'hover:bg-slate-50 dark:hover:bg-slate-800 border-transparent'
                                        } border`}
                                >
                                    <div className={`p-2 rounded-lg ${activeViz === viz.id ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                                        {viz.icon}
                                    </div>
                                    <div>
                                        <h4 className={`text-sm font-bold ${activeViz === viz.id ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300'}`}>
                                            {viz.label}
                                        </h4>
                                        <p className="text-[10px] text-slate-500 opacity-80 leading-tight mt-0.5">{viz.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="bg-indigo-600 text-white border-0 shadow-lg shadow-indigo-900/20 overflow-hidden relative">
                        <div className="absolute -right-4 -bottom-4 opacity-10">
                            <Atom className="w-32 h-32 rotate-12" />
                        </div>
                        <CardContent className="p-6 relative z-10">
                            <h3 className="font-bold mb-2">SciTech Insight</h3>
                            <p className="text-xs text-indigo-100 leading-relaxed mb-4">
                                UPSC often asks about the "S&T Application" in governance. Use these sims to understand core mechanics.
                            </p>
                            <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">High Focus Area</Badge>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Visualization Display */}
                <div className="lg:col-span-3 min-h-[600px] flex flex-col">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeViz}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xl"
                        >
                            {VIZ_COMPONENTS[activeViz]?.()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

function StatCard({ label, value, status, color, icon }: { label: string, value: string, status: string, color: string, icon: React.ReactNode }) {
    return (
        <Card className="border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-md transition-shadow">
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-600 group-hover:scale-110 transition-transform">
                        {icon}
                    </div>
                    <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-tighter opacity-70">
                        {status}
                    </Badge>
                </div>
                <div>
                    <h3 className={`text-2xl font-black tracking-tight mb-1 ${color}`}>{value}</h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-gray-400 uppercase tracking-wide">{label}</p>
                </div>
            </CardContent>
        </Card>
    );
}
