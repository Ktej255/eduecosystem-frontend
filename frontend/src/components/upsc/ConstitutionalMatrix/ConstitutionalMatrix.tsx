"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Users, ShieldCheck, Clock, Trash2, Zap, Info, Search, ChevronRight, BookOpen, Fingerprint } from 'lucide-react';
import { CONSTITUTIONAL_BODIES, ConstitutionalBody } from './data/constitutional-data';

export default function ConstitutionalMatrix() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBody, setSelectedBody] = useState<ConstitutionalBody | null>(CONSTITUTIONAL_BODIES[0]);

    const filteredBodies = CONSTITUTIONAL_BODIES.filter(b => 
        b.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        b.article.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-8 h-full animate-in fade-in duration-700">
            {/* Search & Header Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                        <Scale className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-foreground font-serif">Constitutional Bodies Matrix</h3>
                        <p className="text-xs text-muted-foreground tracking-tight">Comparative Analysis for UPSC Polity (GS-II)</p>
                    </div>
                </div>

                <div className="relative w-full md:w-80">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                        type="text"
                        placeholder="Search Body or Article..."
                        className="w-full pl-12 pr-6 py-3 bg-card dark:bg-[#111] border border-border rounded-2xl text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 flex-1">
                {/* Comparison Grid Sidebar */}
                <div className="w-full lg:w-80 flex flex-col gap-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {filteredBodies.map((body, i) => (
                        <motion.button
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            key={body.id}
                            onClick={() => setSelectedBody(body)}
                            className={`flex flex-col p-4 rounded-2xl border transition-all text-left group
                                ${selectedBody?.id === body.id 
                                    ? 'bg-blue-600 border-blue-600 shadow-md text-white' 
                                    : 'bg-card dark:bg-[#111] border-border hover:border-blue-500/50'}`}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <span className={`text-[9px] font-black uppercase tracking-widest ${selectedBody?.id === body.id ? 'text-blue-100' : 'text-blue-600'}`}>
                                    {body.article}
                                </span>
                                <ChevronRight className={`w-3 h-3 transition-transform ${selectedBody?.id === body.id ? 'translate-x-1' : 'text-muted-foreground'}`} />
                            </div>
                            <span className="text-xs font-black uppercase tracking-tight leading-tight">{body.name}</span>
                        </motion.button>
                    ))}
                </div>

                {/* Detailed Analysis Panel */}
                <div className="flex-1">
                    <AnimatePresence mode="wait">
                        {selectedBody ? (
                            <motion.div
                                key={selectedBody.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="bg-card dark:bg-[#0c0c0c] border border-border rounded-3xl p-8 shadow-xl h-full flex flex-col"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-8">
                                        <section>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                                                    <Fingerprint className="w-4 h-4" />
                                                </div>
                                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Appointment & Tenure</h4>
                                            </div>
                                            <div className="space-y-4 pl-11">
                                                <div>
                                                    <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest block mb-1">Appointing Authority</span>
                                                    <p className="text-sm font-bold text-foreground">{selectedBody.appointment}</p>
                                                </div>
                                                <div>
                                                    <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest block mb-1">Term of Office</span>
                                                    <p className="text-sm font-bold text-foreground">{selectedBody.tenure}</p>
                                                </div>
                                            </div>
                                        </section>

                                        <section>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-600">
                                                    <Trash2 className="w-4 h-4" />
                                                </div>
                                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Removal Mechanism</h4>
                                            </div>
                                            <p className="text-xs text-foreground leading-relaxed pl-11 p-4 bg-red-50/50 dark:bg-red-500/5 rounded-2xl border border-red-100 dark:border-red-900/30">
                                                {selectedBody.removal}
                                            </p>
                                        </section>
                                    </div>

                                    <div className="space-y-8">
                                        <section>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600">
                                                    <ShieldCheck className="w-4 h-4" />
                                                </div>
                                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Independence Provisions</h4>
                                            </div>
                                            <ul className="space-y-3 pl-11">
                                                {selectedBody.independence.map((p, i) => (
                                                    <li key={i} className="text-xs text-muted-foreground flex gap-2">
                                                        <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                                        {p}
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>

                                        <section>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                                                    <Zap className="w-4 h-4" />
                                                </div>
                                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Core Powers</h4>
                                            </div>
                                            <ul className="space-y-3 pl-11">
                                                {selectedBody.powers.map((p, i) => (
                                                    <li key={i} className="text-xs text-muted-foreground flex gap-2">
                                                        <div className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                                                        {p}
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>
                                    </div>
                                </div>

                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-10 p-6 bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-3xl border border-white/10 relative overflow-hidden"
                                >
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-3">
                                            <BookOpen className="w-4 h-4 text-blue-400" />
                                            <h4 className="text-[10px] font-black uppercase text-blue-400 tracking-widest">UPSC PYQ Spotlight</h4>
                                        </div>
                                        <p className="text-xs text-gray-200 leading-loose italic">
                                            "{selectedBody.pyqSpotlight}"
                                        </p>
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
                                </motion.div>
                            </motion.div>
                        ) : (
                            <div className="h-full bg-muted/20 rounded-3xl border border-dashed border-border flex items-center justify-center text-center p-20">
                                <div>
                                    <div className="w-16 h-16 bg-card rounded-3xl shadow-sm mb-6 flex items-center justify-center mx-auto scale-110">
                                        <Scale className="w-8 h-8 text-muted-foreground" />
                                    </div>
                                    <h3 className="font-bold text-xl text-foreground">Select a Body</h3>
                                    <p className="text-sm text-muted-foreground max-w-[250px] mx-auto mt-2">
                                        Dive into the constitutional infrastructure and compare critical facets.
                                    </p>
                                </div>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
