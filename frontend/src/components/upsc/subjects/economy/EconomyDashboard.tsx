import React, { useState } from 'react';
import CircularFlowViz from './visualizations/CircularFlowViz';
import DemandSupplyViz from './visualizations/DemandSupplyViz';
import BudgetExplorerViz from './visualizations/BudgetExplorerViz';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, Users, Wallet, Briefcase, BarChart3, Coins, PieChart as PieChartIcon, ArrowRightLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const VIZ_COMPONENTS: Record<string, () => React.ReactNode> = {
    'budget': () => <BudgetExplorerViz />,
    'flow': () => <CircularFlowViz />,
    'supply': () => <DemandSupplyViz />,
};

const VIZ_LIST = [
    { id: 'budget', label: 'Budget Explorer', icon: <PieChartIcon className="w-4 h-4" />, desc: 'Union Budget Anatomy' },
    { id: 'flow', label: 'Circular Flow', icon: <ArrowRightLeft className="w-4 h-4" />, desc: 'Money & Resource Flow' },
    { id: 'supply', label: 'Demand & Supply', icon: <TrendingUp className="w-4 h-4" />, desc: 'Market Equilibrium' },
];

import { ECONOMY_SYLLABUS } from './data/economy-schedule-data';
import { BookOpenCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ScrollArea } from "@/components/ui/scroll-area";

// ... (Keep existing VIZ_COMPONENTS and VIZ_LIST)

export default function EconomyDashboard() {
    const [activeViz, setActiveViz] = useState<string>('budget');
    const [viewMode, setViewMode] = useState<'sim' | 'syllabus'>('sim');

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard
                    label="GDP Growth"
                    value="7.2%"
                    trend="+0.3%"
                    icon={<TrendingUp className="w-5 h-5 text-emerald-500" />}
                />
                <StatCard
                    label="CPI Inflation"
                    value="4.8%"
                    trend="-0.2%"
                    icon={<Wallet className="w-5 h-5 text-amber-500" />}
                />
                <StatCard
                    label="Forex"
                    value="$645B"
                    trend="Stable"
                    icon={<Coins className="w-5 h-5 text-indigo-500" />}
                />
                <StatCard
                    label="GVA Growth"
                    value="6.9%"
                    trend="+0.1%"
                    icon={<BarChart3 className="w-5 h-5 text-purple-500" />}
                />
            </div>

            {/* View Toggle */}
            <div className="flex gap-4 border-b border-border pb-1">
                <button
                    onClick={() => setViewMode('sim')}
                    className={`px-4 py-2 text-sm font-bold border-b-2 transition-colors ${viewMode === 'sim' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-muted-foreground hover:text-muted-foreground'}`}
                >
                    Eco-Lab Hub
                </button>
                <button
                    onClick={() => setViewMode('syllabus')}
                    className={`px-4 py-2 text-sm font-bold border-b-2 transition-colors ${viewMode === 'syllabus' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-muted-foreground hover:text-muted-foreground'}`}
                >
                    Syllabus & Modules
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Controls (Conditional based on viewMode) */}
                <div className="lg:col-span-1 space-y-4">
                    {viewMode === 'sim' ? (
                        <Card className="border-border shadow-sm">
                            <CardHeader className="pb-3 px-4">
                                <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Eco-Lab Hub</CardTitle>
                            </CardHeader>
                            <CardContent className="p-2 space-y-1">
                                {VIZ_LIST.map((viz) => (
                                    <button
                                        key={viz.id}
                                        onClick={() => setActiveViz(viz.id)}
                                        className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all text-left ${activeViz === viz.id
                                            ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800'
                                            : 'hover:bg-muted dark:hover:bg-slate-800 border-transparent'
                                            } border`}
                                    >
                                        <div className={`p-2 rounded-lg ${activeViz === viz.id ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200' : 'bg-muted text-muted-foreground'}`}>
                                            {viz.icon}
                                        </div>
                                        <div>
                                            <h4 className={`text-sm font-bold ${activeViz === viz.id ? 'text-emerald-600 dark:text-emerald-400' : 'text-muted-foreground'}`}>
                                                {viz.label}
                                            </h4>
                                            <p className="text-[10px] text-muted-foreground opacity-80 leading-tight mt-0.5">{viz.desc}</p>
                                        </div>
                                    </button>
                                ))}
                            </CardContent>
                        </Card>
                    ) : (
                        <Card className="bg-emerald-600 text-white border-0 shadow-lg shadow-emerald-900/20 overflow-hidden relative">
                            <div className="absolute -right-4 -bottom-4 opacity-10">
                                <Briefcase className="w-32 h-32 rotate-12" />
                            </div>
                            <CardContent className="p-6 relative z-10">
                                <h3 className="font-bold mb-2">Module Tracker</h3>
                                <p className="text-xs text-emerald-100 leading-relaxed mb-4">
                                    Track progress across Macro, Banking, Fiscal, and Sectors.
                                </p>
                                <div className="text-3xl font-black">0%</div>
                                <div className="text-[10px] uppercase tracking-wider opacity-70">Overall Completion</div>
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Main Content Display */}
                <div className="lg:col-span-3 min-h-[600px] flex flex-col">
                    {viewMode === 'sim' ? (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeViz}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex-1 bg-card border border-border rounded-2xl overflow-hidden shadow-xl"
                            >
                                {VIZ_COMPONENTS[activeViz]?.()}
                            </motion.div>
                        </AnimatePresence>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {ECONOMY_SYLLABUS.map((topic) => (
                                <Card key={topic.id} className="group hover:border-emerald-300 transition-all hover:shadow-md">
                                    <CardHeader className="pb-3">
                                        <div className="flex justify-between items-start">
                                            <Badge variant="secondary" className="mb-2 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800">{topic.category}</Badge>
                                            <span className="text-xs font-mono text-muted-foreground">{topic.days} Days</span>
                                        </div>
                                        <CardTitle className="text-lg text-foreground group-hover:text-emerald-600 transition-colors">
                                            {topic.title}
                                        </CardTitle>
                                        <CardDescription className="line-clamp-2">
                                            {topic.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2 mb-4">
                                            {topic.subtopics.slice(0, 3).map((sub, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                                                    <BookOpenCheck className="w-3 h-3 text-emerald-400" />
                                                    <span className="truncate">{sub}</span>
                                                </div>
                                            ))}
                                            {topic.subtopics.length > 3 && (
                                                <div className="text-xs text-muted-foreground pl-5">+{topic.subtopics.length - 3} more</div>
                                            )}
                                        </div>
                                        <Link href={`/student/upsc/economy/${topic.id}`}>
                                            <button className="w-full py-2 bg-muted hover:bg-muted dark:hover:bg-slate-700 text-muted-foreground rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors">
                                                Start Module <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function StatCard({ label, value, trend, icon }: { label: string, value: string, trend: string, icon: React.ReactNode }) {
    return (
        <Card className="hover:shadow-md transition-shadow border-border">
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-muted rounded-xl">
                        {icon}
                    </div>
                    {trend && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                            {trend}
                        </span>
                    )}
                </div>
                <div>
                    <h3 className="text-2xl font-black tracking-tight mb-1">{value}</h3>
                    <p className="text-xs font-medium text-muted-foreground dark:text-muted-foreground tracking-wide uppercase">{label}</p>
                </div>
            </CardContent>
        </Card>
    );
}
