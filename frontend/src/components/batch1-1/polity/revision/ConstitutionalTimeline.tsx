"use client";

import React, { useState, useRef } from 'react';
import { TIMELINE_DATA, TimelineEvent } from '../data/timeline-data';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Maximize2, Scale, Gavel, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ConstitutionalTimeline() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const getRelatedEvents = (id: string) => {
        const event = TIMELINE_DATA.find(e => e.id === id);
        if (!event) return [];
        return event.relatedIds;
    };

    const activeRelations = hoveredId ? getRelatedEvents(hoveredId) : [];

    return (
        <Card className="w-full bg-slate-50 border-4 border-stone-300 shadow-xl overflow-hidden font-['Kalam']">
            <div className="bg-stone-900 text-white p-6 border-b-4 border-stone-600">
                <h2 className="text-2xl font-black flex items-center gap-3">
                    <Scale className="text-amber-400" />
                    The Constitutional Timeline
                </h2>
                <p className="text-slate-400 text-sm font-bold">The War between Parliament & Judiciary</p>
            </div>

            <CardContent className="p-0 relative h-[600px] overflow-hidden">
                {/* Connection Lines Layer (Conceptual - simplified for React) */}
                {/* We use class-based highlights instead of SVG drawing for performance/simplicity in this iteration */}

                <ScrollArea className="h-full w-full">
                    <div className="min-w-[1400px] h-[600px] relative p-10 flex flex-col justify-center select-none">

                        {/* TOP LANE: AMENDMENTS (PARLIAMENT) */}
                        <div className="flex relative h-48 items-end mb-4 group/lane">
                            <div className="absolute left-0 bottom-0 w-full border-b-4 border-stone-300 border-dashed"></div>
                            <div className="absolute left-2 bottom-2 bg-stone-200 px-2 rounded text-xs font-black text-stone-500">PARLIAMENT (AMENDMENTS)</div>

                            {TIMELINE_DATA.filter(e => e.lane === 'TOP').map(event => (
                                <TimelineNode
                                    key={event.id}
                                    event={event}
                                    isHovered={hoveredId === event.id}
                                    isRelated={activeRelations.includes(event.id) || (hoveredId && TIMELINE_DATA.find(e => e.id === hoveredId)?.relatedIds.includes(event.id))}
                                    onHover={setHoveredId}
                                />
                            ))}
                        </div>

                        {/* MIDDLE LANE: TIME AXIS */}
                        <div className="h-12 flex items-center relative my-2">
                            <div className="w-full h-2 bg-stone-800 rounded-full shadow-inner"></div>
                            {/* Year Markers could be programmatic, here simplified */}
                        </div>

                        {/* BOTTOM LANE: JUDGEMENTS (JUDICIARY) */}
                        <div className="flex relative h-48 items-start mt-4 group/lane">
                            <div className="absolute left-0 top-0 w-full border-t-4 border-stone-300 border-dashed"></div>
                            <div className="absolute left-2 top-2 bg-stone-200 px-2 rounded text-xs font-black text-stone-500">JUDICIARY (JUDGEMENTS)</div>

                            {TIMELINE_DATA.filter(e => e.lane === 'BOTTOM').map(event => (
                                <TimelineNode
                                    key={event.id}
                                    event={event}
                                    isHovered={hoveredId === event.id}
                                    isRelated={activeRelations.includes(event.id) || (hoveredId && TIMELINE_DATA.find(e => e.id === hoveredId)?.relatedIds.includes(event.id))}
                                    onHover={setHoveredId}
                                />
                            ))}
                        </div>

                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>

                {/* Legend */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur border border-stone-200 p-2 rounded-lg text-xs font-bold shadow-lg flex gap-3">
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-100 border border-red-500 rounded"></div> Parliament</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-stone-100 border border-stone-800 rounded"></div> Judiciary</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-amber-400"></div> Connection</div>
                </div>

            </CardContent>
        </Card>
    );
}

const TimelineNode = ({ event, isHovered, isRelated, onHover }: any) => {
    // Approximate positioning: 1950 is 0%, 2024 is 100%. 
    // Let's say range is 1950 to 2025 = 75 years. 
    const percentage = ((event.year - 1950) / 75) * 100;
    // Adjustment to prevent overlap at start/end
    const leftPos = Math.max(2, Math.min(95, percentage));

    return (
        <div
            className={`absolute transition-all duration-300 cursor-pointer z-10
        ${event.lane === 'TOP' ? 'bottom-0 mb-6' : 'top-0 mt-6'}
      `}
            style={{ left: `${leftPos}%` }}
            onMouseEnter={() => onHover(event.id)}
            onMouseLeave={() => onHover(null)}
        >
            {/* The Connector Line to Axis */}
            <div className={`absolute left-1/2 -translate-x-1/2 w-1 h-6 bg-stone-300
        ${event.lane === 'TOP' ? '-bottom-6 origin-top' : '-top-6 origin-bottom'}
        transition-all duration-300
        ${isHovered || isRelated ? 'bg-amber-500 scale-y-110' : ''}
      `}></div>

            {/* The Node Card */}
            <motion.div
                layoutId={event.id}
                className={`
        relative w-56 p-4 rounded-xl border-2 shadow-sm bg-white
        transition-all duration-300 transform origin-center
        ${event.lane === 'TOP' ? 'rounded-b-none border-b-0' : 'rounded-t-none border-t-0'}
        ${isHovered ? 'scale-110 shadow-2xl border-amber-500 z-50 bg-amber-50' : 'hover:scale-105 active:scale-95'}
        ${isRelated ? 'border-amber-400 bg-amber-50/50 scale-105 shadow-lg z-40' : 'border-stone-200'}
        ${event.status === 'OVERRULED' && !isHovered ? 'opacity-60 grayscale' : ''}
      `}>
                {/* Badge: Year */}
                <span className={`
          text-[10px] font-black px-2 py-0.5 rounded-full text-white absolute -left-2
          ${event.lane === 'TOP' ? '-top-3' : '-bottom-3'}
          ${event.type === 'AMENDMENT' ? 'bg-red-600' : 'bg-stone-800'}
        `}>
                    {event.year}
                </span>

                {/* Status indicator */}
                {event.status === 'OVERRULED' && (
                    <span className="absolute right-2 top-2 text-[10px] uppercase font-black text-red-500 border border-red-200 px-1 rounded bg-red-50">Struck Down</span>
                )}

                {/* Icon */}
                <div className="mb-2 text-stone-400">
                    {event.type === 'AMENDMENT' ? <FileText size={16} /> : <Gavel size={16} />}
                </div>

                <h4 className="font-bold text-sm text-stone-800 leading-tight mb-1">
                    {event.title}
                </h4>

                {/* Description - always visible but muted, bold on hover */}
                <p className={`text-xs leading-snug transition-colors duration-200
          ${isHovered || isRelated ? 'text-stone-700 font-semibold' : 'text-stone-400 font-medium'}
        `}>
                    {event.description}
                </p>

            </motion.div>
        </div>
    );
};
