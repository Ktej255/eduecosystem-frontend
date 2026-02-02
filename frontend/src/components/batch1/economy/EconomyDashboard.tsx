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

export default function EconomyDashboard() {
    const [activeViz, setActiveViz] = useState<string>('budget');

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

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Controls */}
                <div className="lg:col-span-1 space-y-4">
                    <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
                        <CardHeader className="pb-3 px-4">
                            <CardTitle className="text-sm font-bold uppercase tracking-wider text-slate-500">Eco-Lab Hub</CardTitle>
                        </CardHeader>
                        <CardContent className="p-2 space-y-1">
                            {VIZ_LIST.map((viz) => (
                                <button
                                    key={viz.id}
                                    onClick={() => setActiveViz(viz.id)}
                                    className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all text-left ${activeViz === viz.id
                                        ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800'
                                        : 'hover:bg-slate-50 dark:hover:bg-slate-800 border-transparent'
                                        } border`}
                                >
                                    <div className={`p-2 rounded-lg ${activeViz === viz.id ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                                        {viz.icon}
                                    </div>
                                    <div>
                                        <h4 className={`text-sm font-bold ${activeViz === viz.id ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'}`}>
                                            {viz.label}
                                        </h4>
                                        <p className="text-[10px] text-slate-500 opacity-80 leading-tight mt-0.5">{viz.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="bg-emerald-600 text-white border-0 shadow-lg shadow-emerald-900/20 overflow-hidden relative">
                        <div className="absolute -right-4 -bottom-4 opacity-10">
                            <Briefcase className="w-32 h-32 rotate-12" />
                        </div>
                        <CardContent className="p-6 relative z-10">
                            <h3 className="font-bold mb-2">Economy Tip</h3>
                            <p className="text-xs text-emerald-100 leading-relaxed mb-4">
                                Indian Economy is 60% about "Understanding the Flow". Focus on the Circular Flow for GS3 basics.
                            </p>
                            <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">High Yeild Topics</Badge>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Visualization Display */}
                <div className="lg:col-span-3 min-h-[600px] flex flex-col">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeViz}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
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

function StatCard({ label, value, trend, icon }: { label: string, value: string, trend: string, icon: React.ReactNode }) {
    return (
        <Card className="hover:shadow-md transition-shadow border-slate-200 dark:border-slate-800">
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">
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
                    <p className="text-xs font-medium text-slate-500 dark:text-gray-400 tracking-wide uppercase">{label}</p>
                </div>
            </CardContent>
        </Card>
    );
}
