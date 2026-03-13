"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Filter, BookOpen, ExternalLink, Newspaper, Zap, ArrowRight, Bookmark, Search, Target } from 'lucide-react';
import { CURRENT_AFFAIRS_DATA, CurrentAffairItem } from '../../batch1/current-affairs/current-affairs-data';

const SUBJECTS = ['All', 'Polity', 'Economy', 'History', 'Geography', 'Environment', 'Science', 'IR'];
const MONTHS = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function PremiumCAPortal() {
    const [activeSubject, setActiveSubject] = useState('All');
    const [activeMonth, setActiveMonth] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState<CurrentAffairItem | null>(null);

    const filteredCA = CURRENT_AFFAIRS_DATA.filter(item => {
        const matchesSubject = activeSubject === 'All' || item.subject.includes(activeSubject);
        const matchesMonth = activeMonth === 'All' || item.month === activeMonth;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSubject && matchesMonth && matchesSearch;
    });

    return (
        <div className="flex flex-col gap-8 h-full min-h-[600px]">
            {/* Header Controls */}
            <div className="bg-card dark:bg-[#111] p-6 rounded-3xl border border-border flex flex-col md:flex-row gap-6 items-center shadow-sm">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                        type="text" 
                        placeholder="Search CA archives (last 24 months)..." 
                        className="w-full pl-10 pr-4 py-3 bg-muted dark:bg-[#0c0c0c] border border-border rounded-2xl text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                    <div className="flex bg-muted rounded-xl p-1 border border-border">
                        <select 
                            className="bg-transparent text-xs font-bold px-3 py-1.5 outline-none cursor-pointer"
                            value={activeMonth}
                            onChange={(e) => setActiveMonth(e.target.value)}
                        >
                            {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                    </div>
                    <div className="h-6 w-[1px] bg-border hidden md:block" />
                    <div className="flex gap-2 items-center overflow-x-auto pb-1 max-w-[400px]">
                        {SUBJECTS.map(s => (
                            <button
                                key={s}
                                onClick={() => setActiveSubject(s)}
                                className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border
                                    ${activeSubject === s 
                                        ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20' 
                                        : 'bg-card border-border text-muted-foreground hover:border-blue-500/50'}`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 flex-1">
                {/* CA Feed */}
                <div className="flex-1 space-y-4 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
                    {filteredCA.map((item) => (
                        <motion.div
                            layout
                            key={item.id}
                            onClick={() => setSelectedItem(item)}
                            className={`p-5 rounded-3xl border border-border transition-all cursor-pointer group relative overflow-hidden
                                ${selectedItem?.id === item.id 
                                    ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-500 shadow-xl' 
                                    : 'bg-card dark:bg-[#111] hover:border-blue-500/50 shadow-sm'}`}
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                                        {item.subject}
                                    </span>
                                    <span className="text-[10px] text-muted-foreground font-mono">{item.date}</span>
                                </div>
                                <Bookmark className="w-4 h-4 text-muted-foreground hover:text-blue-500 transition-colors" />
                            </div>
                            
                            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                {item.description}
                            </p>

                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest bg-muted px-1.5 py-0.5 rounded">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                {item.chapter && (
                                    <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-600 bg-emerald-100 dark:bg-emerald-900/20 px-2 py-1 rounded-lg">
                                        <Target className="w-3 h-3" /> CHAPTER {item.chapter} LINKED
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                    {filteredCA.length === 0 && (
                        <div className="bg-card dark:bg-[#111] p-12 rounded-3xl border border-dashed border-border text-center flex flex-col items-center">
                            <Newspaper className="w-12 h-12 text-muted-foreground mb-4 opacity-20" />
                            <h3 className="font-bold text-foreground">No updates found</h3>
                            <p className="text-xs text-muted-foreground">Adjust your filters or try a different subject.</p>
                        </div>
                    )}
                </div>

                {/* Vertical Separator */}
                <div className="hidden lg:block w-[1px] bg-border h-full" />

                {/* Detail Analysis Panel */}
                <div className="w-full lg:w-96 flex flex-col gap-6">
                    <AnimatePresence mode="wait">
                        {selectedItem ? (
                            <motion.div
                                key={selectedItem.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-card dark:bg-[#0c0c0c] rounded-3xl border border-border p-8 shadow-2xl h-full flex flex-col sticky top-8"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center">
                                        <Target className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Premium Insight</h4>
                                        <p className="text-[10px] font-bold text-blue-600">Sequenced by PYQ Relevance</p>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-8">
                                    <div>
                                        <h2 className="text-2xl font-black text-foreground font-serif leading-tight mb-4">
                                            {selectedItem.title}
                                        </h2>
                                        <div className="flex gap-2 mb-6">
                                            <span className="px-2 py-1 bg-muted rounded-lg text-[10px] font-bold uppercase tracking-widest text-muted-foreground border border-border">
                                                {selectedItem.month} Archive
                                            </span>
                                            <span className="px-2 py-1 bg-blue-500/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-blue-600 border border-blue-500/20">
                                                Active Issue
                                            </span>
                                        </div>
                                    </div>

                                    <section>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Context & Analysis</h4>
                                        <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                                            {selectedItem.description}
                                        </p>
                                    </section>

                                    {selectedItem.chapter && (
                                        <div className="bg-gradient-to-br from-gray-900 to-black p-5 rounded-2xl border border-white/10 text-white shadow-lg">
                                            <div className="flex items-center gap-2 text-yellow-500 mb-3">
                                                <Zap className="w-4 h-4 fill-current" />
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Static Connector</span>
                                            </div>
                                            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                                                This event directly connects to **Chapter {selectedItem.chapter}** of your static subject course. Questions on this theme have appeared 3 times in the last 5 years.
                                            </p>
                                            <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[10px] font-black transition-all shadow-lg flex items-center justify-center gap-2">
                                                PRACTICE LINKED MCQS <ArrowRight className="w-3 h-3" />
                                            </button>
                                        </div>
                                    )}

                                    <section>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Associated Tags</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedItem.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-card border border-border rounded-full text-[10px] font-bold text-muted-foreground hover:border-blue-500/50 transition-all cursor-default">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </section>
                                </div>

                                <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[10px] font-bold overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover opacity-80" />
                                            </div>
                                        ))}
                                        <div className="w-8 h-8 rounded-full border-2 border-card bg-blue-600 flex items-center justify-center text-[10px] font-black text-white">
                                            +42
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold text-muted-foreground">Discussing now</span>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="bg-muted/30 rounded-3xl border border-dashed border-border p-12 flex flex-col items-center justify-center text-center h-full">
                                <div className="bg-card w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    <Zap className="text-muted-foreground w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-foreground">Deep Insights</h3>
                                <p className="text-xs text-muted-foreground max-w-[220px]">
                                    Select a 24-month update from the feed to see static connectivity and PYQ analysis.
                                </p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
