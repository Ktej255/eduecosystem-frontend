"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Brain, Search, Lightbulb, ChevronRight, Hash, Clock, Percent, Zap, MousePointer2, Settings2, Sparkles, BookOpen } from 'lucide-react';
import { CSAT_FORMULAS_DATA, FormulaTopic } from './data/csat-data';
import CSATLogicGrid from './CSATLogicGrid';
import CSATReadingComp from './CSATReadingComp';

export default function CSATToolkit() {
    const [activeTab, setActiveTab] = useState<'formulas' | 'logic-grid' | 'reading-comp'>('formulas');
    const [activeCategory, setActiveCategory] = useState<'All' | 'Quant' | 'Reasoning'>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTopic, setSelectedTopic] = useState<FormulaTopic | null>(null);

    const filteredTopics = CSAT_FORMULAS_DATA.filter(topic => {
        const matchesCategory = activeCategory === 'All' || topic.category === activeCategory;
        const matchesSearch = topic.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             topic.formulas.some(f => f.title.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex flex-col gap-8 h-full min-h-[600px]">
            {/* Tab Selector */}
            <div className="flex items-center gap-1 bg-muted/50 p-1.5 rounded-2xl border border-border w-fit self-center md:self-start">
                {[
                    { id: 'formulas', icon: Calculator, label: 'Formula Bank' },
                    { id: 'logic-grid', icon: Settings2, label: 'Logic Grid' },
                    { id: 'reading-comp', icon: Sparkles, label: 'Reading Comp Analyzer' }
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all
                            ${activeTab === tab.id 
                                ? 'bg-blue-600 text-white shadow-lg' 
                                : 'text-muted-foreground hover:bg-card'}`}
                    >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                    </button>
                ))}
            </div>

            {activeTab === 'formulas' ? (
                <>
                    {/* Control Bar */}
            <div className="bg-card dark:bg-[#111] p-6 rounded-3xl border border-border flex flex-col md:flex-row gap-6 items-center shadow-sm">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                        type="text" 
                        placeholder="Search formulas or topics (e.g. Speed, Clocks)..." 
                        className="w-full pl-10 pr-4 py-3 bg-muted dark:bg-[#0c0c0c] border border-border rounded-2xl text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                
                <div className="flex bg-muted rounded-xl p-1 border border-border">
                    {['All', 'Quant', 'Reasoning'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat as any)}
                            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all
                                ${activeCategory === cat 
                                    ? 'bg-blue-600 text-white shadow-md' 
                                    : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 flex-1">
                {/* Topic List */}
                <div className="w-full lg:w-1/3 space-y-3 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
                    {filteredTopics.map((topic) => (
                        <div 
                            key={topic.id}
                            onClick={() => setSelectedTopic(topic)}
                            className={`p-5 rounded-2xl border transition-all cursor-pointer group flex items-center justify-between
                                ${selectedTopic?.id === topic.id 
                                    ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-500 shadow-md' 
                                    : 'bg-card dark:bg-[#111] border-border hover:border-blue-500/50'}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${topic.category === 'Quant' ? 'bg-orange-100 text-orange-600' : 'bg-purple-100 text-purple-600'}`}>
                                    {topic.category === 'Quant' ? <Calculator className="w-5 h-5" /> : <Brain className="w-5 h-5" />}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-foreground group-hover:text-blue-600 transition-colors">{topic.topic}</h4>
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{topic.formulas.length} Formulas</p>
                                </div>
                            </div>
                            <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${selectedTopic?.id === topic.id ? 'translate-x-1 text-blue-500' : 'group-hover:translate-x-1'}`} />
                        </div>
                    ))}
                </div>

                {/* Detail Area */}
                <div className="flex-1">
                    <AnimatePresence mode="wait">
                        {selectedTopic ? (
                            <motion.div
                                key={selectedTopic.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                className="bg-card dark:bg-[#0c0c0c] border border-border rounded-3xl p-8 shadow-xl h-full flex flex-col"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${selectedTopic.category === 'Quant' ? 'bg-orange-600 text-white' : 'bg-purple-600 text-white'}`}>
                                        {selectedTopic.category === 'Quant' ? <Calculator className="w-6 h-6" /> : <Brain className="w-6 h-6" />}
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">{selectedTopic.category === 'Quant' ? 'Quantitative Aptitude' : 'Logical Reasoning'}</span>
                                        <h2 className="text-3xl font-black text-foreground font-serif">{selectedTopic.topic}</h2>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                                    {selectedTopic.formulas.map((f, i) => (
                                        <div key={i} className="p-6 bg-muted/30 border border-border/50 rounded-2xl group hover:border-blue-500/30 transition-all flex flex-col justify-between">
                                            <div>
                                                <h4 className="text-xs font-black text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                                                    <Hash className="w-3 h-3" /> {f.title}
                                                </h4>
                                                <div className="bg-card rounded-xl p-4 border border-border font-mono text-lg font-bold text-blue-600 dark:text-blue-400 mb-4 flex justify-center text-center shadow-inner">
                                                    {f.expression}
                                                </div>
                                            </div>
                                            {f.note && (
                                                <div className="flex items-start gap-2 text-[11px] text-muted-foreground bg-blue-500/5 p-2 rounded-lg border border-blue-500/10">
                                                    <Lightbulb className="w-3 h-3 text-yellow-500 shrink-0" />
                                                    <span className="italic">{f.note}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
                                    <div className="bg-blue-600/10 p-4 rounded-2xl border border-blue-600/20 flex items-center gap-3">
                                        <Zap className="w-5 h-5 text-blue-600 fill-current" />
                                        <div>
                                            <p className="text-xs font-bold text-blue-700 dark:text-blue-300">UPSC Rapid Solve Tip</p>
                                            <p className="text-[10px] text-blue-600 dark:text-blue-400">Apply digital sum or approximation for large calculations in this topic.</p>
                                        </div>
                                    </div>
                                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg flex items-center gap-2">
                                        PRACTICE PYQS
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="bg-muted/30 rounded-3xl border border-dashed border-border p-20 flex flex-col items-center justify-center text-center h-full">
                                <div className="bg-card p-6 rounded-3xl shadow-sm mb-6 scale-110">
                                    <Calculator className="w-10 h-10 text-muted-foreground" />
                                </div>
                                <h3 className="font-bold text-2xl mb-2 text-foreground font-serif">Formula Library</h3>
                                <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                                    Unlock 50+ CSAT shortcuts. Select a topic to view its mathematical "Aura" and rapid-solve expressions.
                                </p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
                </>
            ) : activeTab === 'logic-grid' ? (
                <CSATLogicGrid />
            ) : (
                <CSATReadingComp />
            )}
        </div>
    );
}
