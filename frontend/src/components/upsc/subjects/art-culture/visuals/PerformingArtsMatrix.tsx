"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, MapPin, Star, Info, ChevronRight, Play, BookOpen, Sparkles, Palette, Brain } from 'lucide-react';

const DANCE_FORMS = [
    {
        name: 'Bharatnatyam',
        origin: 'Tamil Nadu',
        features: 'Known for its grace, purity, and sculpturesque poses. It is performed to Carnatic music.',
        upscTip: 'Sangeet Natak Akademi considers it the oldest classical dance. Mentioned in Natya Shastra.'
    },
    {
        name: 'Kathak',
        origin: 'Uttar Pradesh',
        features: 'Focuses on intricate footwork and fast spins. Derived from the word "Katha" (Storytelling).',
        upscTip: 'Development of three distinct Gharanas: Lucknow (expression), Jaipur (footwork), and Benaras.'
    },
    {
        name: 'Kathakali',
        origin: 'Kerala',
        features: 'Famous for its elaborate costumes, painted face masks, and dramatic storytelling gestures.',
        upscTip: 'Historically male-dominated. Colors signify character: Green (Nobility), Red (Evil), Black (Vices).'
    },
    {
        name: 'Odissi',
        origin: 'Odisha',
        features: 'The "Tribhanga" posture (three-bend) is its signature. Highly fluid and sculptural.',
        upscTip: 'Deeply rooted in the Mahari tradition and Brahmeswara temple inscriptions.'
    },
    {
        name: 'Kuchipudi',
        origin: 'Andhra Pradesh',
        features: 'Characterized by fast-paced movements and a unique blend of dance and drama (Vachika Abhinaya).',
        upscTip: 'Unique feature: Tarangam (balancing on a brass plate with a water pot on the head).'
    },
    {
        name: 'Sattriya',
        origin: 'Assam',
        features: 'Introduced by Sankaradeva in the 15th century as a means of spreading Vaishnavism.',
        upscTip: 'Associated with the Sattras (monasteries). Recognized as classical by SNA in 2000.'
    }
];

const GHARANAS = [
    {
        name: 'Gwalior Gharana',
        type: 'Khyal',
        origin: 'Madhya Pradesh',
        keyFeature: 'The oldest of the Khyal Gharanas. Known for its simplicity, grand style, and open-throated singing.'
    },
    {
        name: 'Kirana Gharana',
        type: 'Khyal',
        origin: 'Uttar Pradesh',
        keyFeature: 'Focuses on perfect intonation (Swara) and emotional rendering. Pt. Bhimsen Joshi is a legendary exponent.'
    },
    {
        name: 'Agra Gharana',
        type: 'Dhrupad/Khyal',
        origin: 'Uttar Pradesh',
        keyFeature: 'A robust and rhythmic style. Emphasizes "Nom-Tom" Alap and deep resonance.'
    }
];

export default function PerformingArtsMatrix() {
    const [activeTab, setActiveTab] = useState<'dance' | 'music'>('dance');
    const [selectedItem, setSelectedItem] = useState<any>(DANCE_FORMS[0]);

    return (
        <div className="w-full h-full min-h-[600px] flex flex-col lg:flex-row gap-8 animate-in fade-in duration-700">
            {/* Navigation & List Area */}
            <div className="w-full lg:w-96 flex flex-col gap-4">
                <div className="bg-card dark:bg-[#111] p-6 rounded-[2rem] border border-border shadow-md">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-rose-600/10 rounded-xl flex items-center justify-center text-rose-600">
                            <Palette className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-foreground font-serif">Art & Culture</h3>
                            <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest leading-none">Performing Arts Matrix</p>
                        </div>
                    </div>

                    <div className="flex bg-muted/50 p-1 rounded-xl mb-6">
                        <button 
                            onClick={() => { setActiveTab('dance'); setSelectedItem(DANCE_FORMS[0]); }}
                            className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${activeTab === 'dance' ? 'bg-rose-600 text-white shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            Classical
                        </button>
                        <button 
                            onClick={() => { setActiveTab('music'); setSelectedItem(GHARANAS[0]); }}
                            className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${activeTab === 'music' ? 'bg-rose-600 text-white shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            Gharanas
                        </button>
                    </div>

                    <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {(activeTab === 'dance' ? DANCE_FORMS : GHARANAS).map((item) => (
                            <button
                                key={item.name}
                                onClick={() => setSelectedItem(item)}
                                className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left group
                                    ${selectedItem.name === item.name 
                                        ? 'bg-rose-600/5 border-rose-600/20 text-rose-600' 
                                        : 'bg-card dark:bg-black/20 border-border hover:border-rose-500/30'}`}
                            >
                                <div>
                                    <span className="text-xs font-bold block">{item.name}</span>
                                    <span className="text-[10px] text-muted-foreground opacity-70 uppercase tracking-widest">{item.origin}</span>
                                </div>
                                <ChevronRight className={`w-3 h-3 transition-transform ${selectedItem.name === item.name ? 'translate-x-1 opacity-100' : 'opacity-0 group-hover:opacity-40'}`} />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-rose-900 to-pink-900 p-6 rounded-[2rem] text-white shadow-xl">
                    <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-rose-400" />
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-rose-400">Culture High-Yield</h4>
                    </div>
                    <p className="text-[11px] text-zinc-300 leading-relaxed italic">
                        "Focus on the GI tags and the Specific Mudras of Classical Dances—common in recent Prelims pairing questions."
                    </p>
                </div>
            </div>

            {/* Content Display Area */}
            <div className="flex-1 bg-white dark:bg-[#050505] rounded-[2.5rem] border border-border relative shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/5 to-pink-600/5 pointer-events-none" />
                
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={selectedItem.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="h-full flex flex-col p-12 relative z-10"
                    >
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                                        {activeTab === 'dance' ? 'Classical Dance' : selectedItem.type}
                                    </span>
                                    <div className="flex items-center gap-1 text-muted-foreground text-[10px] font-bold">
                                        <MapPin className="w-3 h-3" /> {selectedItem.origin}
                                    </div>
                                </div>
                                <h2 className="text-5xl font-black text-foreground font-serif tracking-tight">{selectedItem.name}</h2>
                            </div>
                            <Star className="w-8 h-8 text-amber-500 animate-pulse" />
                        </div>

                        <div className="flex-1 space-y-12">
                            <section>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                                    <Info className="w-3.5 h-3.5" /> Essential Features
                                </h4>
                                <p className="text-xl text-foreground/90 font-medium leading-relaxed italic border-l-4 border-rose-500 pl-8">
                                    "{selectedItem.features || selectedItem.keyFeature}"
                                </p>
                            </section>

                            {selectedItem.upscTip && (
                                <section className="bg-amber-50/50 dark:bg-amber-950/10 p-8 rounded-3xl border border-amber-100/50 dark:border-amber-900/30 shadow-inner">
                                    <div className="flex items-center gap-3 mb-4 text-amber-700 dark:text-amber-400">
                                        <Brain className="w-5 h-5" />
                                        <h4 className="text-xs font-black uppercase tracking-widest">UPSC Perspective</h4>
                                    </div>
                                    <p className="text-sm text-foreground/80 leading-relaxed font-serif">
                                        {selectedItem.upscTip}
                                    </p>
                                </section>
                            )}
                        </div>

                        <div className="mt-12 pt-8 border-t border-border flex gap-4">
                            <button className="flex-1 py-5 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 group">
                                <Play className="w-4 h-4 fill-white" /> WATCH SESSION <Sparkles className="w-4 h-4 text-white/50 group-hover:scale-125 transition-transform" />
                            </button>
                            <button className="px-8 py-5 border-2 border-border hover:border-rose-500/50 text-foreground rounded-2xl font-black uppercase tracking-widest transition-all text-[10px]">
                                <BookOpen className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
