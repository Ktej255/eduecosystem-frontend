"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ATLAS_DATA, AtlasLocation } from './data/atlas-data';
import { Mountain, Droplets, Zap, MapPin, Tent } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface IndiaMapVizProps {
    activeLayer: 'parks' | 'ramsar' | 'mineral' | 'river';
}

export default function IndiaMapViz({ activeLayer }: IndiaMapVizProps) {
    const [selectedLoc, setSelectedLoc] = useState<AtlasLocation | null>(null);

    // Filter points based on active layer
    const points = ATLAS_DATA.filter(p => {
        if (activeLayer === 'parks') return p.type === 'park';
        if (activeLayer === 'ramsar') return p.type === 'ramsar';
        if (activeLayer === 'mineral') return p.type === 'mineral';
        if (activeLayer === 'river') return p.type === 'river';
        return false;
    });

    const getIcon = (type: string) => {
        switch (type) {
            case 'park': return <Tent className="w-4 h-4" />;
            case 'ramsar': return <Droplets className="w-4 h-4" />;
            case 'mineral': return <Zap className="w-4 h-4" />;
            case 'river': return <Droplets className="w-4 h-4" />;
            case 'peak': return <Mountain className="w-4 h-4" />;
            default: return <MapPin className="w-4 h-4" />;
        }
    };

    const getColor = (type: string) => {
        switch (type) {
            case 'park': return 'bg-emerald-500 text-white';
            case 'ramsar': return 'bg-blue-500 text-white';
            case 'mineral': return 'bg-amber-500 text-white';
            case 'peak': return 'bg-slate-600 text-white';
            default: return 'bg-indigo-500 text-white';
        }
    };

    return (
        <div className="relative w-full h-full bg-[#eef2f6] dark:bg-[#0f172a] rounded-xl overflow-hidden shadow-inner border border-border">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #64748b 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            />

            {/* India Approx Shape (Rough Polygon for Context) */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 32,5 L 45,8 L 60,25 L 75,25 L 90,28 L 95,40 L 80,45 L 75,55 L 60,60 L 50,85 L 35,95 L 30,80 L 25,60 L 15,50 L 10,40 L 20,35 L 25,25 Z"
                    fill="currentColor" className="text-muted-foreground" />
            </svg>

            {/* Points Layer */}
            {points.map((loc) => (
                <motion.div
                    key={loc.id}
                    className={`absolute flex flex-col items-center cursor-pointer group z-10`}
                    style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.2, zIndex: 50 }}
                    onClick={() => setSelectedLoc(loc)}
                >
                    <div className={`p-1.5 rounded-full shadow-lg transition-all ${getColor(loc.type)} ${selectedLoc?.id === loc.id ? 'ring-4 ring-offset-2 ring-indigo-500 scale-125' : ''}`}>
                        {getIcon(loc.type)}
                    </div>
                    {/* Tooltip Label */}
                    <span className="mt-1 text-[10px] font-bold bg-card/90 dark:bg-black/80 px-1.5 py-0.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-foreground">
                        {loc.name}
                    </span>
                </motion.div>
            ))}

            {/* Info Panel Overlay */}
            <AnimatePresence>
                {selectedLoc && (
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 300, opacity: 0 }}
                        className="absolute top-4 right-4 w-64 z-50"
                    >
                        <Card className="p-4 shadow-2xl bg-card/95/95 backdrop-blur-sm border-border">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg leading-tight">{selectedLoc.name}</h3>
                                <button onClick={() => setSelectedLoc(null)} className="text-muted-foreground hover:text-red-500">×</button>
                            </div>
                            <div className="flex gap-2 mb-3">
                                <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${getColor(selectedLoc.type)} bg-opacity-10 text-opacity-100`}>
                                    {selectedLoc.type}
                                </span>
                                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                                    {selectedLoc.state}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                {selectedLoc.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                                {selectedLoc.tags.map(tag => (
                                    <span key={tag} className="text-[10px] border border-border px-1.5 py-0.5 rounded text-muted-foreground">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
