"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, BookOpen, ExternalLink, ShieldCheck, PieChart, Activity, Info, ChevronRight, FileText } from 'lucide-react';
import { MINISTRIES_DATA, Ministry } from './data/ministry-data';
import { SCHEMES_DATA } from '../subjects/value-addition/data/schemes-data';

const SECTORS = ['All', 'Social', 'Economic', 'Infrastructure', 'Strategic', 'Governance'];

export default function MinistryDatabase() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeSector, setActiveSector] = useState('All');
    const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);

    const filteredMinistries = MINISTRIES_DATA.filter(m => {
        const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             m.shortName.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSector = activeSector === 'All' || m.sector === activeSector;
        return matchesSearch && matchesSector;
    });

    const getSchemesForMinistry = (ministryId: string) => {
        return SCHEMES_DATA.filter(s => s.ministryId === ministryId);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 h-full min-h-[600px]">
            {/* List Sidebar */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
                <div className="space-y-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input 
                            type="text" 
                            placeholder="Search Ministry or Acronym..." 
                            className="w-full pl-10 pr-4 py-3 bg-card dark:bg-[#111] border border-border rounded-2xl text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {SECTORS.map(sector => (
                            <button
                                key={sector}
                                onClick={() => setActiveSector(sector)}
                                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border
                                    ${activeSector === sector 
                                        ? 'bg-blue-600 border-blue-600 text-white' 
                                        : 'bg-muted border-border text-muted-foreground hover:border-blue-500/50'}`}
                            >
                                {sector}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto max-h-[500px] pr-2 space-y-3 custom-scrollbar">
                    {filteredMinistries.map((ministry) => (
                        <div 
                            key={ministry.id}
                            onClick={() => setSelectedMinistry(ministry)}
                            className={`p-4 rounded-2xl border transition-all cursor-pointer group
                                ${selectedMinistry?.id === ministry.id 
                                    ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-500 shadow-md' 
                                    : 'bg-card dark:bg-[#111] border-border hover:border-blue-500/50 hover:shadow-sm'}`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded uppercase ${ministry.sector === 'Social' ? 'bg-pink-100 text-pink-600' : ministry.sector === 'Economic' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>
                                    {ministry.sector}
                                </span>
                                <ChevronRight className={`w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform ${selectedMinistry?.id === ministry.id ? 'translate-x-1 text-blue-500' : ''}`} />
                            </div>
                            <h4 className="text-sm font-bold text-foreground leading-tight group-hover:text-blue-500 transition-colors">
                                {ministry.name}
                            </h4>
                            <p className="text-[10px] text-muted-foreground mt-1 font-mono uppercase tracking-widest">{ministry.shortName}</p>
                        </div>
                    ))}
                    {filteredMinistries.length === 0 && (
                        <div className="text-center py-10 text-muted-foreground italic text-xs">
                            No ministries found matching your search.
                        </div>
                    )}
                </div>
            </div>

            {/* Detail Panel */}
            <div className="flex-1">
                <AnimatePresence mode="wait">
                    {selectedMinistry ? (
                        <motion.div
                            key={selectedMinistry.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="bg-card dark:bg-[#0c0c0c] border border-border rounded-3xl p-8 shadow-xl h-full flex flex-col"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 border-b border-border pb-8">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center">
                                            <ShieldCheck className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-black text-foreground font-serif leading-tight">
                                                {selectedMinistry.name}
                                            </h2>
                                            <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em]">{selectedMinistry.shortName}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl text-xs font-bold transition-all border border-border">
                                        <ExternalLink className="w-3.5 h-3.5" /> OFFICIAL SITE
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-8">
                                    <section>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                                            <Info className="w-3.5 h-3.5" /> CORE FOCUS & OBJECTIVE
                                        </h4>
                                        <p className="text-sm text-foreground leading-relaxed p-4 bg-muted/30 rounded-2xl border border-border/50">
                                            {selectedMinistry.focus}
                                        </p>
                                    </section>

                                    <section>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                                            <BookOpen className="w-3.5 h-3.5" /> UPSC ANCHOR (GS RELEVANCE)
                                        </h4>
                                        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/50 p-4 rounded-2xl">
                                            <p className="text-sm text-amber-800 dark:text-amber-400 font-medium">
                                                {selectedMinistry.upscAnchor}
                                            </p>
                                        </div>
                                    </section>
                                </div>

                                <div className="space-y-8">
                                    <section>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                                            <Activity className="w-3.5 h-3.5" /> NODAL SCHEMES
                                        </h4>
                                        <div className="grid grid-cols-1 gap-3">
                                            {getSchemesForMinistry(selectedMinistry.id).map(scheme => (
                                                <div key={scheme.id} className="p-3 bg-card border border-border rounded-xl hover:border-blue-500/50 transition-all">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-xs font-bold text-foreground">{scheme.name}</span>
                                                        <span className="text-[9px] bg-muted px-1.5 py-0.5 rounded font-mono">{scheme.launchYear}</span>
                                                    </div>
                                                    <p className="text-[10px] text-muted-foreground line-clamp-1">{scheme.objective}</p>
                                                </div>
                                            ))}
                                            {getSchemesForMinistry(selectedMinistry.id).length === 0 && (
                                                <div className="text-xs text-muted-foreground italic">Add schemes manually or via CA portal.</div>
                                            )}
                                        </div>
                                    </section>

                                    <section>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                                            <FileText className="w-3.5 h-3.5" /> KEY REPORTS & INDICES
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedMinistry.reports.map(report => (
                                                <div key={report} className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/5 rounded-lg border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold">
                                                    <PieChart className="w-3 h-3" /> {report}
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            </div>

                            <button className="w-full py-4 mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
                                <BookOpen className="w-4 h-4" /> REVISE CHAPTER-WISE PYQs
                            </button>
                        </motion.div>
                    ) : (
                        <div className="bg-muted/30 rounded-3xl border border-dashed border-border p-20 flex flex-col items-center justify-center text-center h-full">
                            <div className="bg-card p-6 rounded-3xl shadow-sm mb-6 scale-110">
                                <ShieldCheck className="w-10 h-10 text-muted-foreground" />
                            </div>
                            <h3 className="font-bold text-2xl mb-2 text-foreground font-serif">Select a Ministry</h3>
                            <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                                Explore the organizational soul of the Indian Government. Study core policies, schemes, and reports mapped to the UPSC syllabus.
                            </p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
