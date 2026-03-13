"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Target, Building2, Info, Search, ChevronRight, BookOpen, GitMerge, LayoutGrid, List } from 'lucide-react';
import { CONVERGENCE_DATA, ConvergenceGoal } from './data/convergence-data';

export default function SchemesConvergence() {
    const [selectedGoal, setSelectedGoal] = useState<ConvergenceGoal | null>(CONVERGENCE_DATA[0]);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    return (
        <div className="flex flex-col gap-8 h-full animate-in fade-in duration-700">
            {/* Header section with Goal Selector */}
            <div className="bg-card dark:bg-[#111] p-8 rounded-3xl border border-border shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                            <GitMerge className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground font-serif text-amber-600 dark:text-amber-500">Scheme Convergence Map</h3>
                            <p className="text-xs text-muted-foreground tracking-tight uppercase font-black">Inter-Ministerial Goal Synergy</p>
                        </div>
                    </div>

                    <div className="flex bg-muted p-1 rounded-xl border border-border">
                        <button 
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-card shadow-sm text-blue-600' : 'text-muted-foreground'}`}
                        >
                            <LayoutGrid className="w-4 h-4" />
                        </button>
                        <button 
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white dark:bg-card shadow-sm text-blue-600' : 'text-muted-foreground'}`}
                        >
                            <List className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    {CONVERGENCE_DATA.map(goal => (
                        <button
                            key={goal.id}
                            onClick={() => setSelectedGoal(goal)}
                            className={`px-5 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border
                                ${selectedGoal?.id === goal.id 
                                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-105' 
                                    : 'bg-muted/50 border-border text-muted-foreground hover:bg-muted'}`}
                        >
                            {goal.goal}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 flex-1">
                {/* Visual Map Area */}
                <div className="flex-1 space-y-6">
                    <AnimatePresence mode="wait">
                        {selectedGoal && (
                            <motion.div
                                key={selectedGoal.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                className="bg-card dark:bg-[#0c0c0c] p-8 rounded-3xl border border-border shadow-xl h-full"
                            >
                                <div className="mb-10 text-center max-w-2xl mx-auto">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-600 rounded-full mb-4">
                                        <Target className="w-3.5 h-3.5" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Target Goal</span>
                                    </div>
                                    <h2 className="text-3xl font-black text-foreground font-serif mb-4">{selectedGoal.goal}</h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                                        "{selectedGoal.description}"
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                                    {/* Central Node Visualizer */}
                                    {selectedGoal.schemes.map((scheme, i) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            key={scheme.id}
                                            className="bg-muted/30 p-6 rounded-3xl border border-border hover:border-blue-500/50 transition-all group relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <Network className="w-20 h-20 -mr-10 -mt-10" />
                                            </div>
                                            <div className="relative z-10">
                                                <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest block mb-2">{scheme.ministry}</span>
                                                <h4 className="text-sm font-bold text-foreground mb-4 group-hover:text-blue-500 transition-colors">{scheme.name}</h4>
                                                <div className="h-[1px] w-full bg-border mb-4" />
                                                <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-3">
                                                    {scheme.objective}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-12 p-6 bg-blue-600/5 border border-blue-500/20 rounded-3xl flex items-center gap-6">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Info className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h5 className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-1">Convergence Logic</h5>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            For UPSC GS-II & GS-III, focus on how **{selectedGoal.goal}** results are achieved through the synergy of multiple ministries. This "Whole-of-Government" approach is a high-yield theme in Mains.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Sidebar - Quick Facts */}
                <div className="w-full lg:w-80 flex flex-col gap-6">
                    <div className="bg-card dark:bg-[#111] p-6 rounded-3xl border border-border shadow-sm">
                        <h4 className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-6 flex items-center gap-2">
                             <Building2 className="w-3.5 h-3.5" /> Involved Departments
                        </h4>
                        <div className="space-y-3">
                            {selectedGoal?.schemes.map((s, i) => (
                                <div key={i} className="flex flex-col p-3 bg-muted/50 rounded-xl border border-border/50">
                                    <span className="text-[9px] font-black text-blue-600 uppercase tracking-wider">{s.ministry}</span>
                                    <span className="text-[11px] font-bold text-foreground">{s.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-amber-600 p-8 rounded-3xl text-white shadow-xl shadow-amber-500/20 relative overflow-hidden group">
                        <div className="relative z-10">
                            <BookOpen className="w-8 h-8 opacity-40 mb-4" />
                            <h4 className="text-lg font-black leading-tight mb-4 font-serif">Mains Answer Booster</h4>
                            <p className="text-xs text-amber-50/80 leading-loose mb-6">
                                Discuss the convergence of **{selectedGoal?.goal}** in the context of cooperative federalism and administrative efficiency.
                            </p>
                            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest group-hover:gap-3 transition-all">
                                GET STRUCTURE <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="absolute top-0 right-0 p-8 transform translate-x-1/4 -translate-y-1/4 opacity-20">
                            <GitMerge className="w-32 h-32" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
