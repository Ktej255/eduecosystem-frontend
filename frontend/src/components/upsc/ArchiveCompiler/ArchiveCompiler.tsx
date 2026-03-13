"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, BookOpen, Download, Newspaper, Bookmark, Archive, Zap, Info, ChevronRight, LayoutGrid, List } from 'lucide-react';
import { ARCHIVE_DATA, ArchiveItem } from './data/archive-data';

const TYPES = ['All', 'PIB', 'Yojana', 'Kurukshetra', 'IYB'];

export default function ArchiveCompiler() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeType, setActiveType] = useState('All');
    const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const filteredArchives = ARCHIVE_DATA.filter(item => {
        const matchesType = activeType === 'All' || item.type === activeType;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             item.theme.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesType && matchesSearch;
    });

    return (
        <div className="flex flex-col gap-8 h-full min-h-[600px]">
            {/* Context Header */}
            <div className="bg-card dark:bg-[#111] p-6 rounded-3xl border border-border flex flex-col md:flex-row gap-6 items-center shadow-sm">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                        type="text" 
                        placeholder="Search Archive themes (PIB, Yojana, Kurukshetra, IYB)..." 
                        className="w-full pl-10 pr-4 py-3 bg-muted dark:bg-[#0c0c0c] border border-border rounded-2xl text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                
                <div className="flex bg-muted rounded-xl p-1 border border-border overflow-x-auto">
                    {TYPES.map((type) => (
                        <button
                            key={type}
                            onClick={() => setActiveType(type)}
                            className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap
                                ${activeType === type 
                                    ? 'bg-blue-600 text-white shadow-md' 
                                    : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                <div className="h-8 w-[1px] bg-border hidden md:block" />

                <div className="flex bg-muted rounded-xl p-1 border border-border">
                    <button 
                        onClick={() => setViewMode('grid')}
                        className={`p-1.5 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-card shadow-sm text-blue-600' : 'text-muted-foreground'}`}
                    >
                        <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button 
                        onClick={() => setViewMode('list')}
                        className={`p-1.5 rounded-lg transition-all ${viewMode === 'list' ? 'bg-card shadow-sm text-blue-600' : 'text-muted-foreground'}`}
                    >
                        <List className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 flex-1">
                {/* Archive Feed */}
                <div className="flex-1">
                    <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                        <AnimatePresence>
                            {filteredArchives.map((item) => (
                                <motion.div
                                    layout
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    onClick={() => setSelectedItem(item)}
                                    className={`p-5 rounded-3xl border border-border transition-all cursor-pointer group relative overflow-hidden flex flex-col justify-between
                                        ${selectedItem?.id === item.id 
                                            ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-500 shadow-xl scale-[1.02]' 
                                            : 'bg-card dark:bg-[#111] hover:border-blue-500/50 shadow-sm'}`}
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex items-center gap-2">
                                                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full 
                                                    ${item.type === 'PIB' ? 'bg-pink-100 text-pink-600' : 
                                                      item.type === 'Yojana' ? 'bg-emerald-100 text-emerald-600' : 
                                                      item.type === 'IYB' ? 'bg-amber-100 text-amber-600' : 
                                                      'bg-indigo-100 text-indigo-600'}`}>
                                                    {item.type}
                                                </span>
                                                <span className="text-[9px] text-muted-foreground font-mono">{item.date}</span>
                                            </div>
                                            {item.priority === 'High' && (
                                                <div className="flex items-center gap-1 text-[9px] font-black text-red-500 animate-pulse">
                                                    <Zap className="w-3 h-3 fill-current" /> HIGH PRIORITY
                                                </div>
                                            )}
                                        </div>
                                        
                                        <h3 className="text-md font-bold text-foreground mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider mb-4">
                                            {item.theme}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                        <div className="text-[10px] text-muted-foreground font-bold">
                                            {item.keyTakeaways.length} Key Insights
                                        </div>
                                        <div className="flex items-center gap-1 text-[10px] font-black text-blue-600 group-hover:translate-x-1 transition-transform">
                                            SUMMARY <ChevronRight className="w-3 h-3" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredArchives.length === 0 && (
                        <div className="bg-card dark:bg-[#111] p-20 rounded-3xl border border-dashed border-border text-center flex flex-col items-center">
                            <Archive className="w-16 h-16 text-muted-foreground mb-4 opacity-10" />
                            <h3 className="font-bold text-foreground text-xl">No archives found</h3>
                            <p className="text-sm text-muted-foreground max-w-xs mt-2">Adjust your filters or try a different publication type.</p>
                        </div>
                    )}
                </div>

                {/* Detail View Panel */}
                <div className="w-full lg:w-96">
                    <AnimatePresence mode="wait">
                        {selectedItem ? (
                            <motion.div
                                key={selectedItem.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-card dark:bg-[#0c0c0c] rounded-3xl border border-border p-8 shadow-2xl h-full flex flex-col sticky top-8"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center 
                                        ${selectedItem.type === 'PIB' ? 'bg-pink-600' : 
                                          selectedItem.type === 'Yojana' ? 'bg-emerald-600' : 
                                          selectedItem.type === 'IYB' ? 'bg-amber-600' : 'bg-indigo-600'} text-white shadow-lg`}>
                                        <Newspaper className="w-7 h-7" />
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest block mb-1">Date Published</span>
                                        <p className="text-sm font-black text-foreground">{selectedItem.date}</p>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-8">
                                    <div>
                                        <h2 className="text-2xl font-black text-foreground font-serif leading-tight mb-2">
                                            {selectedItem.title}
                                        </h2>
                                        <div className="p-3 bg-muted rounded-xl border border-border">
                                            <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1">Publication Theme</p>
                                            <p className="text-xs font-bold text-foreground truncate">{selectedItem.theme}</p>
                                        </div>
                                    </div>

                                    <section>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                                            <Archive className="w-4 h-4" /> CORE INSIGHTS (UPSC FOCUS)
                                        </h4>
                                        <ul className="space-y-4">
                                            {selectedItem.keyTakeaways.map((insight, i) => (
                                                <li key={i} className="flex gap-3 items-start">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                                                    <p className="text-sm text-foreground leading-relaxed">{insight}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    <div className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-4">
                                        <div className="bg-emerald-600 text-white p-2 rounded-lg">
                                            <Download className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-emerald-800 dark:text-emerald-400">PDF Summary Ready</p>
                                            <p className="text-[10px] text-emerald-600 dark:text-emerald-500">Curated by Aura AI for Mains notes.</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full py-4 mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 border-b-4 border-blue-900 active:border-b-0 active:translate-y-1">
                                    <BookOpen className="w-4 h-4" /> READ FULL ANALYSIS
                                </button>
                            </motion.div>
                        ) : (
                            <div className="bg-muted/30 rounded-3xl border border-dashed border-border p-12 flex flex-col items-center justify-center text-center h-full">
                                <div className="bg-card w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-sm rotate-3">
                                    <Newspaper className="text-muted-foreground w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-xl mb-2 text-foreground font-serif">Select Publication</h3>
                                <p className="text-xs text-muted-foreground max-w-[240px] leading-relaxed mx-auto">
                                    Consolidated summaries from the most critical government archives and yearbook data for UPSC.
                                </p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
