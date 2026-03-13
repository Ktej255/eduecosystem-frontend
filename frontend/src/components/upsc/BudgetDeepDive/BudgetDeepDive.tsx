"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, PieChart, Landmark, BookOpen, AlertCircle, Info, ArrowUpRight, Search, Zap, Calculator } from 'lucide-react';
import { BUDGET_STATS, SECTOR_ALLOCATIONS, BUDGET_GLOSSARY, SectorAllocation } from './data/budget-data';

export default function BudgetDeepDive() {
    const [selectedSector, setSelectedSector] = useState<SectorAllocation | null>(null);
    const [glossarySearch, setGlossarySearch] = useState('');

    const filteredGlossary = BUDGET_GLOSSARY.filter(item => 
        item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
        item.definition.toLowerCase().includes(glossarySearch.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-8 h-full min-h-[600px] animate-in fade-in duration-700">
            {/* Top Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {BUDGET_STATS.map((stat, i) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={stat.label}
                        className="bg-card dark:bg-[#111] p-6 rounded-3xl border border-border flex flex-col justify-between shadow-sm relative overflow-hidden"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">{stat.label}</span>
                            {stat.trend === 'up' ? <TrendingUp className="w-4 h-4 text-emerald-500" /> : 
                             stat.trend === 'down' ? <TrendingDown className="w-4 h-4 text-red-500" /> : 
                             <Minus className="w-4 h-4 text-muted-foreground" />}
                        </div>
                        <div className="flex items-baseline gap-2 mb-2">
                            <h3 className="text-3xl font-black text-foreground font-serif">{stat.value}</h3>
                            <span className={`text-[10px] font-bold ${stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            {stat.description}
                        </p>
                        <div className={`absolute -bottom-6 -right-6 w-20 h-20 ${stat.trend === 'up' ? 'bg-emerald-500' : 'bg-red-500'} opacity-[0.03] blur-2xl rounded-full`}></div>
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-8 flex-1">
                {/* Sectoral Breakdown */}
                <div className="flex-1 space-y-6">
                    <div className="bg-card dark:bg-[#111] p-8 rounded-3xl border border-border shadow-sm">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <PieChart className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">Sectoral Allocation</h3>
                                <p className="text-xs text-muted-foreground">Interactive fund distribution analysis (Union Budget 2026)</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {SECTOR_ALLOCATIONS.map((sector) => (
                                <div 
                                    key={sector.sector}
                                    onClick={() => setSelectedSector(sector)}
                                    className={`p-4 rounded-2xl border transition-all cursor-pointer group
                                        ${selectedSector?.sector === sector.sector 
                                            ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-500 shadow-md' 
                                            : 'bg-muted/30 border-border hover:border-blue-500/30'}`}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${sector.color}`} />
                                            {sector.sector}
                                        </h4>
                                        <span className="text-xs font-black text-muted-foreground">{sector.percentageOfTotal}% of Budget</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(sector.percentageOfTotal / 15) * 100}%` }}
                                            className={`h-full ${sector.color}`}
                                        />
                                    </div>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="text-[10px] font-black uppercase text-blue-600 tracking-wider">₹{sector.amount} Cr</span>
                                        <ChevronRight className={`w-3 h-3 text-muted-foreground transition-transform ${selectedSector?.sector === sector.sector ? 'translate-x-1 text-blue-500' : 'group-hover:translate-x-1'}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sector Insights (Conditional) */}
                    <AnimatePresence mode="wait">
                        {selectedSector && (
                            <motion.div
                                key={selectedSector.sector}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-white/10 text-white relative overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 text-blue-400 mb-4">
                                        <Zap className="w-4 h-4 fill-current" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Aura Sector Insight</span>
                                    </div>
                                    <h4 className="text-2xl font-black mb-6 font-serif">{selectedSector.sector} Highlights</h4>
                                    <ul className="space-y-4">
                                        {selectedSector.highlights.map((h, i) => (
                                            <li key={i} className="flex gap-3 items-start">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                                <p className="text-sm text-gray-300 font-medium leading-relaxed">{h}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[80px]"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right Side - Glossary & Context */}
                <div className="w-full lg:w-96 flex flex-col gap-6">
                    <div className="bg-card dark:bg-[#111] p-8 rounded-3xl border border-border shadow-sm flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                                <h3 className="text-md font-bold text-foreground">Budget Glossary</h3>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">GS-III Economy Focus</p>
                            </div>
                        </div>

                        <div className="relative mb-6">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground" />
                            <input 
                                type="text"
                                placeholder="Search budget terminology..."
                                className="w-full pl-8 pr-4 py-2 bg-muted/50 border border-border rounded-xl text-xs outline-none focus:ring-1 focus:ring-blue-600 transition-all font-medium"
                                value={glossarySearch}
                                onChange={(e) => setGlossarySearch(e.target.value)}
                            />
                        </div>

                        <div className="space-y-4 flex-1 overflow-y-auto max-h-[450px] pr-2 custom-scrollbar">
                            {filteredGlossary.map((item) => (
                                <div key={item.term} className="group cursor-default">
                                    <h4 className="text-xs font-black text-foreground mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-wider">{item.term}</h4>
                                    <p className="text-[11px] text-muted-foreground leading-relaxed mb-3">{item.definition}</p>
                                    <div className="p-2.5 bg-blue-500/5 rounded-lg border border-blue-500/10">
                                        <p className="text-[10px] text-blue-600 dark:text-blue-400 leading-relaxed italic">
                                            <strong>UPSC:</strong> {item.upscContext}
                                        </p>
                                    </div>
                                    <div className="h-[1px] w-full bg-border mt-4 group-last:hidden" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Calculator Card */}
                    <div className="bg-blue-600 p-6 rounded-3xl text-white shadow-xl shadow-blue-500/20 relative overflow-hidden group cursor-pointer">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <Calculator className="w-8 h-8 opacity-20 mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="text-lg font-black leading-tight mb-2">Fiscal Calculator Tool</h4>
                                <p className="text-xs text-blue-100 opacity-80 mb-6">Calculate primary vs revenue deficits instantly.</p>
                            </div>
                            <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest w-fit hover:gap-3 transition-all">
                                Launch Wizard <ArrowUpRight className="w-3 h-3" />
                            </button>
                        </div>
                        <div className="absolute top-0 right-0 p-8 transform translate-x-1/2 -translate-y-1/2">
                            <div className="w-32 h-32 border border-white/10 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ChevronRight(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}
