"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TreeDeciduous, TrendingUp, TrendingDown, Minus, Info, Search, Map as MapIcon, BarChart3, Waves, Zap, ChevronRight, Calculator } from 'lucide-react';
import { ISFR_2026_DATA, ForestCover, MangroveCover } from './data/isfr-data';

export default function ISFRAnalysis() {
    const [view, setView] = useState<'area' | 'percentage' | 'mangroves' | 'carbon'>('area');
    const [searchTerm, setSearchTerm] = useState('');

    const renderTable = () => {
        let data: (ForestCover | MangroveCover)[] = [];
        if (view === 'area') data = ISFR_2026_DATA.topStatesByArea;
        else if (view === 'percentage') data = ISFR_2026_DATA.topStatesByPercentage;
        else if (view === 'mangroves') data = ISFR_2026_DATA.mangroveStats;

        const filteredData = data.filter(item => 
            item.state.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <div className="overflow-hidden bg-card dark:bg-[#111] rounded-3xl border border-border shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-muted/50 border-b border-border">
                            <th className="p-5 text-[10px] font-black uppercase text-muted-foreground tracking-widest">State/UT</th>
                            <th className="p-5 text-[10px] font-black uppercase text-muted-foreground tracking-widest text-right">
                                {view === 'mangroves' ? 'Area (sq km)' : 'Forest Cover (sq km)'}
                            </th>
                            <th className="p-5 text-[10px] font-black uppercase text-muted-foreground tracking-widest text-right">
                                {view === 'percentage' ? '% of Area' : 'Change'}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, i) => (
                            <motion.tr 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                key={item.state} 
                                className="border-b border-border/50 hover:bg-muted/20 transition-colors group"
                            >
                                <td className="p-5 text-sm font-bold text-foreground flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${view === 'mangroves' ? 'bg-blue-500' : 'bg-emerald-500'}`} />
                                    {item.state}
                                </td>
                                <td className="p-5 text-sm font-mono text-right text-muted-foreground group-hover:text-foreground transition-colors">
                                    {('forestCover' in item ? item.forestCover : item.area2026).toLocaleString()}
                                </td>
                                <td className="p-5 text-sm font-bold text-right">
                                    {view === 'percentage' ? (
                                        <span className="text-blue-600 dark:text-blue-400">{(item as ForestCover).percentage}%</span>
                                    ) : (
                                        <div className={`flex items-center justify-end gap-1 ${item.change > 0 ? 'text-emerald-500' : item.change < 0 ? 'text-red-500' : 'text-muted-foreground'}`}>
                                            {item.change > 0 ? '+' : ''}{item.change}
                                            {item.change > 0 ? <TrendingUp className="w-3 h-3" /> : item.change < 0 ? <TrendingDown className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
                                        </div>
                                    )}
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-8 h-full animate-in fade-in duration-700">
            {/* National Highlights Bar */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ISFR_2026_DATA.nationalHighlights.map((hl, i) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={hl.label}
                        className="bg-card dark:bg-[#111] p-6 rounded-3xl border border-border relative overflow-hidden group shadow-sm"
                    >
                        <div className="relative z-10">
                            <span className="text-[10px] font-black uppercase text-blue-600 dark:text-blue-400 tracking-widest">{hl.label}</span>
                            <h3 className="text-2xl font-black text-foreground mt-1 font-serif">{hl.value}</h3>
                            <p className="text-[11px] text-muted-foreground mt-3 leading-relaxed">
                                {hl.description}
                            </p>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-500 opacity-[0.03] blur-2xl rounded-full group-hover:scale-110 transition-transform"></div>
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-8 flex-1">
                {/* Main Content Area */}
                <div className="flex-1 space-y-6">
                    <div className="bg-card dark:bg-[#111] p-8 rounded-3xl border border-border shadow-sm">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                                    <TreeDeciduous className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">Forest & Vegetation Data</h3>
                                    <p className="text-xs text-muted-foreground tracking-tight">Interactive Drill-down into ISFR 2026 Metrics</p>
                                </div>
                            </div>

                            <div className="flex bg-muted/50 p-1.5 rounded-2xl border border-border">
                                {[
                                    { id: 'area', icon: MapIcon, label: 'By Area' },
                                    { id: 'percentage', icon: BarChart3, label: 'By %' },
                                    { id: 'mangroves', icon: Waves, label: 'Mangroves' }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setView(tab.id as any)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all
                                            ${view === tab.id 
                                                ? 'bg-blue-600 text-white shadow-lg' 
                                                : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        <tab.icon className="w-4 h-4" />
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="relative mb-6">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input 
                                type="text"
                                placeholder="Search state-wise forest data..."
                                className="w-full pl-12 pr-6 py-3 bg-muted dark:bg-[#0c0c0c] border border-border rounded-2xl text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {renderTable()}
                    </div>

                    {/* Quick Insight Card */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="bg-gradient-to-br from-emerald-900 to-black p-8 rounded-3xl border border-white/10 text-white relative overflow-hidden"
                    >
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                                <Zap className="w-8 h-8 text-yellow-500 fill-current" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-black uppercase tracking-widest text-blue-400 mb-2">UPSC Exam Alert</h4>
                                <p className="text-sm text-gray-300 font-medium leading-loose">
                                    The ISFR 2026 shows a worrying decline in natural forest cover in the **North-Eastern states (Mizoram, Manipur, Nagaland)**. Focus on this for Environmental Governance questions in Mains.
                                </p>
                            </div>
                            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-2xl text-xs font-bold transition-all whitespace-nowrap">
                                VIEW DETAILED REPORT
                            </button>
                        </div>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
                    </motion.div>
                </div>

                {/* Sidebar - Definitions & Analytics */}
                <div className="w-full lg:w-96 flex flex-col gap-6">
                    <div className="bg-card dark:bg-[#111] p-8 rounded-3xl border border-border shadow-sm">
                        <h4 className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-6">ISFR Terminology</h4>
                        <div className="space-y-6">
                            {[
                                { title: "Very Dense Forest", desc: "All lands with tree canopy density of 70% and above.", color: "bg-emerald-700" },
                                { title: "Moderately Dense Forest", desc: "Tree canopy density between 40% and 70%.", color: "bg-emerald-500" },
                                { title: "Open Forest", desc: "Tree canopy density between 10% and 40%.", color: "bg-emerald-300" },
                                { title: "Scrub", desc: "Tree canopy density less than 10%.", color: "bg-gray-400" }
                            ].map((term) => (
                                <div key={term.title} className="flex gap-4 group">
                                    <div className={`w-3 h-3 rounded-full ${term.color} mt-1.5 shrink-0 group-hover:scale-125 transition-transform`} />
                                    <div>
                                        <h5 className="text-xs font-black text-foreground uppercase tracking-widest mb-1">{term.title}</h5>
                                        <p className="text-[11px] text-muted-foreground leading-relaxed">{term.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-500/20 relative overflow-hidden group">
                        <div className="relative z-10">
                            <Calculator className="w-10 h-10 opacity-30 mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <h4 className="text-xl font-black leading-tight mb-4 font-serif text-white">Carbon Stock <br/>Comparison 2024 vs 2026</h4>
                            <p className="text-xs text-blue-100/80 mb-8 leading-relaxed">
                                India is on track to achieve its NDC commitment of creating an additional carbon sink of 2.5 to 3 billion tonnes of CO2 equivalent by 2030.
                            </p>
                            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-3 transition-all">
                                ANALYZE DATA <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="absolute top-0 right-0 p-8 transform translate-x-1/2 -translate-y-1/2 opacity-20">
                            <div className="w-40 h-40 border-8 border-white/20 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
