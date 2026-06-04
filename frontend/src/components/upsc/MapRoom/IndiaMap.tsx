"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mountain, Droplets, Zap, MapPin, Tent, Info, Layers, Maximize2, BookOpen, Map as MapIcon } from 'lucide-react';
import UPSCMapOverlay from '../UPSCMapOverlay';

export interface MapPoint {
    id: string;
    name: string;
    state: string;
    type: 'park' | 'ramsar' | 'mineral';
    coordinates: { x: number; y: number };
    description: string;
    tags: string[];
}
export const MAP_DATA: MapPoint[] = [];

export default function IndiaMap() {
    const [activeLayer, setActiveLayer] = useState<'all' | 'park' | 'ramsar' | 'mineral'>('all');
    const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);

    // Mock readiness score - in production this comes from useUser() or API
    const [readinessScore, setReadinessScore] = useState(65.4); // Threshold Student 

    const getStatus = (): 'locked' | 'peekable' | 'unlocked' => {
        if (readinessScore >= 70) return 'unlocked';
        if (readinessScore >= 60) return 'peekable';
        return 'locked';
    };

    const status = getStatus();

    const filteredPoints = MAP_DATA.filter(p => activeLayer === 'all' || p.type === activeLayer);

    const getIcon = (type: string) => {
        switch (type) {
            case 'park': return <Tent className="w-3.5 h-3.5" />;
            case 'ramsar': return <Droplets className="w-3.5 h-3.5" />;
            case 'mineral': return <Zap className="w-3.5 h-3.5" />;
            default: return <MapPin className="w-3.5 h-3.5" />;
        }
    };

    const getColor = (type: string) => {
        switch (type) {
            case 'park': return 'bg-emerald-500 shadow-emerald-500/50';
            case 'ramsar': return 'bg-blue-500 shadow-blue-500/50';
            case 'mineral': return 'bg-amber-500 shadow-amber-500/50';
            default: return 'bg-indigo-500 shadow-indigo-500/50';
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 h-full min-h-[600px]">
            {/* Map Canvas Area */}
            <div className="flex-1 bg-white dark:bg-[#050505] rounded-3xl border border-border overflow-hidden relative shadow-inner">
                {/* Adaptive Experience Overlay */}
                <UPSCMapOverlay 
                    readinessScore={readinessScore} 
                    status={status} 
                    onExplore={() => console.log('Exploring preview...')} 
                />

                {/* Layer Toggle Controls */}
                <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                    {[
                        { id: 'all', label: 'All Markers', icon: Layers },
                        { id: 'park', label: 'National Parks', icon: Tent },
                        { id: 'ramsar', label: 'Ramsar Sites', icon: Droplets },
                        { id: 'mineral', label: 'Minerals', icon: Zap }
                    ].map(layer => (
                        <button
                            key={layer.id}
                            onClick={() => setActiveLayer(layer.id as any)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all border 
                                ${activeLayer === layer.id 
                                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg' 
                                    : 'bg-card/80 dark:bg-[#111]/80 backdrop-blur-md border-border text-muted-foreground hover:border-blue-500/50'}`}
                        >
                            <layer.icon className="w-3.5 h-3.5" />
                            {layer.label}
                        </button>
                    ))}
                </div>

                {/* India Outline SVG */}
                <div className="absolute inset-0 flex items-center justify-center p-12 select-none">
                    <svg 
                        viewBox="0 0 100 100" 
                        className="w-full h-full max-w-[500px] opacity-20 dark:opacity-30 text-gray-400 dark:text-gray-800"
                        fill="currentColor"
                    >
                        {/* A more detailed simplified outline of India */}
                        <path d="M 32,5 L 35,6 L 38,8 L 42,9 L 45,8 L 48,12 L 50,15 L 55,18 L 60,22 L 65,22 L 70,24 L 75,25 L 78,28 L 82,30 L 85,32 L 88,32 L 92,35 L 90,38 L 85,42 L 82,45 L 80,48 L 78,52 L 75,55 L 72,55 L 68,58 L 65,62 L 62,65 L 60,70 L 58,75 L 55,80 L 52,85 L 50,90 L 48,95 L 45,98 L 42,95 L 40,90 L 38,85 L 35,80 L 33,75 L 31,70 L 29,65 L 26,60 L 24,56 L 20,52 L 15,50 L 12,48 L 10,44 L 8,40 L 10,35 L 14,32 L 18,30 L 22,28 L 26,22 L 28,15 L 30,10 Z" />
                    </svg>
                </div>

                {/* Interactive Points */}
                <div className="absolute inset-0 p-12">
                    <div className="relative w-full h-full">
                        {filteredPoints.map((point) => (
                            <motion.div
                                key={point.id}
                                className="absolute cursor-pointer z-10"
                                style={{ left: `${point.coordinates.x}%`, top: `${point.coordinates.y}%` }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.2, zIndex: 30 }}
                                onClick={() => setSelectedPoint(point)}
                            >
                                <div className={`relative flex items-center justify-center`}>
                                    <div className={`p-1.5 rounded-full text-white shadow-xl transition-all ${getColor(point.type)} ${selectedPoint?.id === point.id ? 'ring-4 ring-white dark:ring-blue-900/50 scale-125' : ''}`}>
                                        {getIcon(point.type)}
                                    </div>
                                    <div className="absolute -bottom-6 flex flex-col items-center pointer-events-none">
                                        <span className="text-[9px] font-black text-foreground bg-card/90 dark:bg-black/80 px-1.5 py-0.5 rounded border border-border whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                            {point.name}
                                        </span>
                                    </div>
                                    
                                    {/* Pulse Effect for Flagship or Active points */}
                                    {selectedPoint?.id === point.id && (
                                        <div className={`absolute inset-0 rounded-full animate-ping ${getColor(point.type)} opacity-40`} />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Map Legend */}
                <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-2 bg-card/50 dark:bg-[#111]/50 backdrop-blur-md p-3 rounded-xl border border-border">
                    <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1">Legend</span>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-[10px] font-bold">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" /> National Parks
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold">
                            <div className="w-2 h-2 rounded-full bg-blue-500" /> Ramsar Sites
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold">
                            <div className="w-2 h-2 rounded-full bg-amber-500" /> Minerals/Plateaus
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Details Area */}
            <div className="w-full lg:w-96 flex flex-col gap-6">
                <AnimatePresence mode="wait">
                    {selectedPoint ? (
                        <motion.div
                            key={selectedPoint.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-card dark:bg-[#111] rounded-3xl border border-border p-6 shadow-sm flex flex-col h-full"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${selectedPoint.type === 'park' ? 'bg-emerald-100 text-emerald-600' : selectedPoint.type === 'ramsar' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'}`}>
                                        {selectedPoint.type}
                                    </span>
                                    <h2 className="text-2xl font-bold mt-2 font-serif">{selectedPoint.name}</h2>
                                    <p className="text-sm text-blue-600 font-bold">{selectedPoint.state}</p>
                                </div>
                                <button onClick={() => setSelectedPoint(null)} className="text-muted-foreground hover:text-foreground">
                                    <Maximize2 className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex-1 space-y-6">
                                <section>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                                        <Info className="w-3 h-3" /> Description
                                    </h4>
                                    <p className="text-sm text-foreground leading-relaxed">
                                        {selectedPoint.description}
                                    </p>
                                </section>

                                <section>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">UPSC Tags</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedPoint.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-muted rounded-lg text-xs font-bold border border-border">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </section>

                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl border border-blue-100 dark:border-blue-800">
                                    <h4 className="text-xs font-black text-blue-700 dark:text-blue-300 mb-2">UPSC Relevance</h4>
                                    <p className="text-[11px] text-blue-600 dark:text-blue-400 italic">
                                        Associated with PYQs on "Tiger Conservation", "Indramati Basin", and "Ramsar Convention 2022 Updates".
                                    </p>
                                </div>
                            </div>

                            <button className="w-full py-4 mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                <BookOpen className="w-4 h-4" /> REVISE RELATED PYQS
                            </button>
                        </motion.div>
                    ) : (
                        <div className="bg-muted/30 rounded-3xl border border-dashed border-border p-12 flex flex-col items-center justify-center text-center h-full">
                            <div className="bg-card p-4 rounded-2xl shadow-sm mb-4">
                                <MapIcon className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-foreground">Select a Marker</h3>
                            <p className="text-xs text-muted-foreground max-w-[200px]">
                                Click on any point on the map to explore geographical facts and UPSC relevant data.
                            </p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
