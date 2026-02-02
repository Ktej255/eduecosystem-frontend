"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, MapPin, Star, Info, ChevronRight, Play } from 'lucide-react';

const DANCE_FORMS = [
    {
        name: 'Bharatnatyam',
        origin: 'Tamil Nadu',
        features: 'Known for its grace, purity, and sculpturesque poses.',
        upscTip: 'Sangeet Natak Akademi considers it the oldest classical dance.'
    },
    {
        name: 'Kathak',
        origin: 'Uttar Pradesh',
        features: 'Footwork and spins. Derived from Katha (Storytelling).',
        upscTip: 'Development of Gharanas: Lucknow, Jaipur, Benaras.'
    },
    {
        name: 'Kathakali',
        origin: 'Kerala',
        features: 'Elaborate costumes, face masks, and gestures.',
        upscTip: 'Predominantly male-performed. Symbolism of colors in makeup.'
    },
    {
        name: 'Odissi',
        origin: 'Odisha',
        features: 'Tribhanga posture (three-bend). Fluid and lyrical.',
        upscTip: 'Supported by archaeological evidence in Udayagiri-Khandagiri.'
    },
    {
        name: 'Kuchipudi',
        origin: 'Andhra Pradesh',
        features: 'Combination of speech, mime and pure dance.',
        upscTip: 'Unique feature: Tarangam (dancing on the rim of a brass plate).'
    },
    {
        name: 'Sattriya',
        origin: 'Assam',
        features: 'Introduced by Mahapurusha Sankaradeva in 15th century.',
        upscTip: 'Associated with the Sattras (monasteries).'
    }
];

const GHARANAS = [
    {
        name: 'Gwalior Gharana',
        type: 'Khyal',
        origin: 'Gwalior',
        keyFeature: 'Oldest Gharana. Simple and grand style.'
    },
    {
        name: 'Kirana Gharana',
        type: 'Khyal',
        origin: 'Kirana (UP)',
        keyFeature: 'Intonation and note manipulation. Pt. Bhimsen Joshi.'
    },
    {
        name: 'Agra Gharana',
        type: 'Khyal/Dhrupad',
        origin: 'Agra',
        keyFeature: 'Emphasis on rhythm and deep vocal resonance.'
    }
];

export default function PerformingArtsMatrix() {
    const [activeTab, setActiveTab] = useState<'dance' | 'music'>('dance');
    const [selectedItem, setSelectedItem] = useState<any>(DANCE_FORMS[0]);

    return (
        <Card className="w-full bg-white dark:bg-[#111] border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden h-[600px] flex flex-col">
            <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-700 p-4 shrink-0">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-lg">
                            <Music className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <CardTitle className="text-white font-bold">Performing Arts Matrix</CardTitle>
                            <CardDescription className="text-white/70">Classical Dances & Music Gharanas</CardDescription>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <div className="flex border-b border-gray-100 dark:border-gray-800">
                <button
                    onClick={() => { setActiveTab('dance'); setSelectedItem(DANCE_FORMS[0]); }}
                    className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'dance' ? 'text-rose-600 border-b-2 border-rose-600 bg-rose-50/30' : 'text-gray-400'}`}
                >
                    Classical Dances
                </button>
                <button
                    onClick={() => { setActiveTab('music'); setSelectedItem(GHARANAS[0]); }}
                    className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'music' ? 'text-rose-600 border-b-2 border-rose-600 bg-rose-50/30' : 'text-gray-400'}`}
                >
                    Music Gharanas
                </button>
            </div>

            <CardContent className="p-0 flex flex-1 overflow-hidden">
                {/* List Pane */}
                <div className="w-1/3 border-r border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-black/20 overflow-y-auto">
                    {(activeTab === 'dance' ? DANCE_FORMS : GHARANAS).map((item, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedItem(item)}
                            className={`p-4 border-b border-gray-100 dark:border-gray-800 cursor-pointer transition-all flex items-center justify-between group ${selectedItem?.name === item.name ? 'bg-white dark:bg-[#1a1a1a] border-l-4 border-l-rose-500 shadow-sm' : 'hover:bg-slate-100/50 dark:hover:bg-gray-800/30'}`}
                        >
                            <div className="flex flex-col">
                                <span className={`text-sm font-bold ${selectedItem?.name === item.name ? 'text-rose-600' : 'text-gray-700 dark:text-gray-300'}`}>
                                    {item.name}
                                </span>
                                <span className="text-[10px] text-gray-500">{item.origin}</span>
                            </div>
                            <ChevronRight className={`w-4 h-4 transition-transform ${selectedItem?.name === item.name ? 'text-rose-500 translate-x-0' : 'text-gray-300 opacity-0 group-hover:opacity-100 -translate-x-2'}`} />
                        </div>
                    ))}
                </div>

                {/* Detail Pane */}
                <div className="flex-1 bg-white dark:bg-[#0a0a0a] p-8 overflow-y-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedItem?.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-6"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge variant="outline" className="text-rose-600 border-rose-200 bg-rose-50">
                                            {activeTab === 'dance' ? 'Classical Dance' : selectedItem.type}
                                        </Badge>
                                        <div className="flex items-center gap-1 text-gray-400">
                                            <MapPin className="w-3 h-3" />
                                            <span className="text-[10px] uppercase font-bold">{selectedItem.origin}</span>
                                        </div>
                                    </div>
                                    <h2 className="text-3xl font-black text-gray-900 dark:text-white">{selectedItem.name}</h2>
                                </div>
                                <div className="p-3 bg-slate-100 dark:bg-gray-800 rounded-2xl">
                                    <Star className="w-6 h-6 text-amber-500" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic border-l-4 border-gray-200 dark:border-gray-800 pl-4 py-1">
                                    "{selectedItem.features || selectedItem.keyFeature}"
                                </p>

                                {selectedItem.upscTip && (
                                    <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl p-4 border border-amber-100 dark:border-amber-900/50">
                                        <div className="flex items-center gap-2 mb-2 text-amber-700 dark:text-amber-400">
                                            <Info className="w-4 h-4" />
                                            <span className="text-xs font-bold uppercase tracking-widest">UPSC Perspective</span>
                                        </div>
                                        <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                                            {selectedItem.upscTip}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
                                <button className="flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors">
                                    <Play className="w-4 h-4 fill-rose-600" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Watch Performance Snippet</span>
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </CardContent>
        </Card>
    );
}
