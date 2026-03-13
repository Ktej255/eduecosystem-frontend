"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Highlighter, Type, Timer, ChevronRight, CheckCircle, Info, Target, MousePointer2 } from 'lucide-react';

export default function CSATReadingComp() {
    const [highlightMode, setHighlightMode] = useState<'none' | 'assumption' | 'inference' | 'conclusion'>('none');
    const [selectedText, setSelectedText] = useState('');
    const [highlights, setHighlights] = useState<{ text: string, type: 'assumption' | 'inference' | 'conclusion' }[]>([]);

    const SAMPLE_PASSAGE = `The rapid urbanization in India has led to a significant increase in municipal solid waste generation. While the waste-to-energy plants are being promoted as a solution, their economic viability remains a challenge due to the low calorific value of Indian waste. Furthermore, the lack of source segregation hampers the efficiency of these plants. To achieve sustainable waste management, the focus must shift towards decentralized composting and community-level participation rather than relying solely on centralized technological interventions.`;

    const handleSelection = () => {
        const selection = window.getSelection();
        const text = selection?.toString().trim();
        if (text && highlightMode !== 'none') {
            setHighlights([...highlights, { text, type: highlightMode }]);
            selection?.removeAllRanges();
        }
    };

    const clearHighlights = () => setHighlights([]);

    return (
        <div className="flex flex-col gap-6 h-full p-2">
            {/* Analyzer Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-muted/30 p-4 rounded-2xl border border-border">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <Highlighter className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-md font-bold text-foreground">Reading Comp Analyzer</h3>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">Interactive Passage Extraction Tool</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    {[
                        { id: 'assumption', color: 'bg-amber-100 text-amber-700 border-amber-300', label: 'Assumption' },
                        { id: 'inference', color: 'bg-blue-100 text-blue-700 border-blue-300', label: 'Inference' },
                        { id: 'conclusion', color: 'bg-emerald-100 text-emerald-700 border-emerald-300', label: 'Conclusion' }
                    ].map((tool) => (
                        <button
                            key={tool.id}
                            onClick={() => setHighlightMode(tool.id as any)}
                            className={`px-3 py-1.5 rounded-xl text-[10px] font-bold border transition-all
                                ${highlightMode === tool.id 
                                    ? `${tool.color} shadow-sm ring-2 ring-offset-2 ring-blue-500` 
                                    : 'bg-card text-muted-foreground border-border hover:border-blue-500/50'}`}
                        >
                            {tool.label}
                        </button>
                    ))}
                    <button 
                        onClick={clearHighlights}
                        className="px-3 py-1.5 bg-muted text-muted-foreground rounded-xl text-[10px] font-bold border border-border hover:bg-red-500/10 hover:text-red-500 transition-all"
                    >
                        RESET
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 flex-1">
                {/* Passage Area */}
                <div className="flex-1 bg-card dark:bg-[#0c0c0c] p-8 rounded-3xl border border-border shadow-inner relative group">
                    <div className="absolute top-4 right-4 flex items-center gap-2 text-[10px] font-black text-muted-foreground opacity-30 group-hover:opacity-100 transition-opacity">
                        <MousePointer2 className="w-3 h-3" /> SELECT TEXT TO ANALYZE
                    </div>
                    
                    <div 
                        onMouseUp={handleSelection}
                        className="text-lg leading-loose text-foreground font-serif selection:bg-blue-600/20 select-text"
                    >
                        {SAMPLE_PASSAGE}
                    </div>

                    <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Timer className="w-4 h-4" />
                            <span className="text-xs font-bold">Recommended: 2.5 min</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-600">
                            <Target className="w-4 h-4" />
                            <span className="text-xs font-black uppercase tracking-widest">Level 3 Passage</span>
                        </div>
                    </div>
                </div>

                {/* Analysis Sidebar */}
                <div className="w-full lg:w-80 flex flex-col gap-4">
                    <div className="bg-card dark:bg-[#111] p-6 rounded-3xl border border-border h-full flex flex-col">
                        <h4 className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-6">Extraction Registry</h4>
                        
                        <div className="flex-1 space-y-4 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                            {highlights.length === 0 && (
                                <div className="text-center py-12 flex flex-col items-center opacity-30">
                                    <Type className="w-8 h-8 mb-4" />
                                    <p className="text-[10px] font-bold leading-relaxed px-4 text-muted-foreground">
                                        Highlight fragments to categorize them as Assumptions or Inferences.
                                    </p>
                                </div>
                            )}
                            <AnimatePresence>
                                {highlights.map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={`p-3 rounded-xl border-l-4 ${
                                            h.type === 'assumption' ? 'bg-amber-500/5 border-amber-500' :
                                            h.type === 'inference' ? 'bg-blue-500/5 border-blue-500' :
                                            'bg-emerald-500/5 border-emerald-500'
                                        }`}
                                    >
                                        <div className="text-[9px] font-black uppercase tracking-widest mb-1 opacity-60">
                                            {h.type}
                                        </div>
                                        <p className="text-xs italic leading-relaxed text-foreground/80 lowercase first-letter:uppercase">"{h.text}"</p>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {highlights.length > 0 && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-6 w-full py-3 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg"
                            >
                                Compare with Model Answer
                            </motion.button>
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-emerald-600/5 border border-emerald-500/10 p-4 rounded-2xl flex items-start gap-3">
                <Info className="w-4 h-4 text-emerald-600 mt-0.5" />
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400 leading-relaxed italic">
                    <strong>UPSC Insight:</strong> In CSAT, an **Assumption** is the underlying premise on which the argument is based, whereas an **Inference** is something logical that can be derived *from* the passage.
                </p>
            </div>
        </div>
    );
}
