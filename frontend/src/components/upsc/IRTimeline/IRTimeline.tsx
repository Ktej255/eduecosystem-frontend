"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Calendar, Pin, Info, Flag, Award, Search, Filter, ArrowRight, BookOpen, Shield, Zap } from 'lucide-react';
import { IR_EVENTS, DIPLOMATIC_PILLARS, IREvent } from './data/ir-data';

export default function IRTimeline() {
    const [selectedEvent, setSelectedEvent] = useState<IREvent | null>(null);
    const [filter, setFilter] = useState<'All' | 'Bilateral' | 'Multilateral' | 'Security'>('All');

    const filteredEvents = IR_EVENTS.filter(e => filter === 'All' || e.category === filter);

    return (
        <div className="flex flex-col gap-8 h-full min-h-[600px] animate-in fade-in duration-700">
            {/* Diplomatic Pillars Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {DIPLOMATIC_PILLARS.map((pillar, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={pillar.title}
                        className="bg-card dark:bg-[#111] p-5 rounded-3xl border border-border shadow-sm group hover:border-blue-500/50 transition-all"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                                <Shield className="w-4 h-4" />
                            </div>
                            <h4 className="text-xs font-black uppercase text-foreground tracking-widest">{pillar.title}</h4>
                        </div>
                        <p className="text-[10px] text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                            {pillar.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-8 flex-1">
                {/* Timeline Column */}
                <div className="flex-1 bg-card dark:bg-[#0c0c0c] p-8 rounded-3xl border border-border shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground font-serif">Diplomatic Timeline</h3>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">2023-24 Global Major Milestones</p>
                            </div>
                        </div>

                        <div className="flex bg-muted p-1 rounded-xl border border-border">
                            {['All', 'Bilateral', 'Multilateral', 'Security'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat as any)}
                                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all
                                        ${filter === cat 
                                            ? 'bg-blue-600 text-white shadow-md' 
                                            : 'text-muted-foreground hover:text-foreground'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative flex-1 overflow-y-auto max-h-[500px] pr-4 custom-scrollbar">
                        {/* Vertical Line */}
                        <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-border/50" />

                        <div className="space-y-8 pl-12 relative">
                            {filteredEvents.map((event, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    key={event.id}
                                    onClick={() => setSelectedEvent(event)}
                                    className={`group relative p-5 rounded-2xl border cursor-pointer transition-all
                                        ${selectedEvent?.id === event.id 
                                            ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-500 shadow-md translate-x-1' 
                                            : 'bg-muted/20 border-border hover:border-blue-500/30'}`}
                                >
                                    {/* Circle Dot */}
                                    <div className={`absolute -left-[45px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-card z-10 
                                        ${selectedEvent?.id === event.id ? 'bg-blue-600 ring-4 ring-blue-500/20' : 'bg-muted-foreground opacity-50'}`} />
                                    
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3 h-3 text-muted-foreground" />
                                            <span className="text-[10px] font-bold text-muted-foreground">{event.date}</span>
                                        </div>
                                        <span className={`text-[8px] font-black px-1.5 py-0.5 rounded uppercase ${event.importance === 'High' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                                            {event.importance} Priority
                                        </span>
                                    </div>
                                    <h4 className="text-sm font-bold text-foreground group-hover:text-blue-600 transition-colors uppercase tracking-tight">{event.title}</h4>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {event.tags.map(tag => (
                                            <span key={tag} className="text-[9px] bg-card px-2 py-0.5 rounded-full border border-border text-muted-foreground font-medium">#{tag}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stance Detail Area */}
                <div className="w-full lg:w-96 flex flex-col gap-6">
                    <AnimatePresence mode="wait">
                        {selectedEvent ? (
                            <motion.div
                                key={selectedEvent.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="bg-card dark:bg-[#111] p-8 rounded-3xl border border-border shadow-sm flex-1 flex flex-col"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                            <Flag className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">UPSC Intelligence</h4>
                                            <h3 className="text-xl font-bold font-serif leading-tight">{selectedEvent.title}</h3>
                                        </div>
                                    </div>

                                    <section>
                                        <h5 className="text-[10px] font-black text-muted-foreground mb-2 flex items-center gap-2">
                                            <Info className="w-3.5 h-3.5" /> THE EVENT
                                        </h5>
                                        <p className="text-xs text-foreground leading-relaxed p-4 bg-muted/30 rounded-2xl border border-border/50">
                                            {selectedEvent.description}
                                        </p>
                                    </section>

                                    <section>
                                        <h5 className="text-[10px] font-black text-blue-600 mb-2 flex items-center gap-2 uppercase">
                                            <Award className="w-3.5 h-3.5" /> India's Diplomatic Stance
                                        </h5>
                                        <div className="bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 p-4 rounded-2xl">
                                            <p className="text-xs text-blue-800 dark:text-blue-300 font-medium leading-relaxed italic">
                                                {selectedEvent.indiasStance}
                                            </p>
                                        </div>
                                    </section>

                                    <section>
                                        <h5 className="text-[10px] font-black text-muted-foreground mb-3 uppercase tracking-widest">Key Nations Involved</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedEvent.relatedNations.map(n => (
                                                <div key={n} className="px-3 py-1 bg-muted rounded-full text-[10px] font-bold text-foreground">
                                                    {n}
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>

                                <div className="mt-10 pt-10 border-t border-border mt-auto">
                                    <button className="w-full relative group overflow-hidden bg-gradient-to-r from-gray-900 to-black p-4 rounded-2xl text-white">
                                        <div className="relative z-10 flex items-center justify-between">
                                            <span className="text-[10px] font-black uppercase tracking-widest">Chapter Connectivity</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                        <div className="absolute top-0 left-0 w-full h-full bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="bg-muted/30 rounded-3xl border border-dashed border-border p-12 flex flex-col items-center justify-center text-center h-full">
                                <div className="bg-card p-6 rounded-3xl shadow-sm mb-6 flex items-center justify-center">
                                    <Zap className="w-10 h-10 text-muted-foreground" />
                                </div>
                                <h3 className="font-bold text-xl mb-2 text-foreground font-serif">Event Intelligence</h3>
                                <p className="text-[11px] text-muted-foreground max-w-[200px] leading-relaxed">
                                    Select an event from the timeline to see India's strategic stance and UPSC-specific relevance.
                                </p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
