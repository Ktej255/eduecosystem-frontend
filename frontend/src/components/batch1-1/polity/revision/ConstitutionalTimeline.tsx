"use client";

import React, { useState, useMemo } from 'react';
import { TIMELINE_DATA, TimelineEvent } from '../data/timeline-data';
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Scale, Gavel, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

// Layout Constants
const START_YEAR = 1950;
const PIXELS_PER_YEAR = 50; // Increased for better spacing
const NODE_WIDTH = 240; // Approx card width + margin
const TOP_LANE_OFFSET = 20;
const BOTTOM_LANE_OFFSET = 20;

export default function ConstitutionalTimeline() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    // 1. Process Data for Layout (Levels to avoid overlap)
    const layoutData = useMemo(() => {
        const sorted = [...TIMELINE_DATA].sort((a, b) => a.year - b.year);

        // Track visual reach of each level in each lane
        // laneEnds[lane][level] = pixel value where the last card ended
        const laneEnds: Record<string, number[]> = {
            'TOP': [0, 0, 0, 0], // Support up to 4 levels
            'BOTTOM': [0, 0, 0, 0]
        };

        return sorted.map(event => {
            const x = (event.year - START_YEAR) * PIXELS_PER_YEAR;
            const lane = event.lane;

            // Find the first level where this card fits without overlapping
            let level = 0;
            while (laneEnds[lane][level] > x) {
                level++;
            }

            // Update the end position for this level
            // x + NODE_WIDTH is the right edge of this card
            laneEnds[lane][level] = x + NODE_WIDTH;

            return { ...event, x, level };
        });
    }, []);

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

            <CardContent className="p-0 relative h-[700px] overflow-hidden">
                <ScrollArea className="h-full w-full">
                    {/* Container Width based on years */}
                    <div className="relative p-10 flex flex-col justify-center select-none"
                        style={{ width: `${(2025 - 1950) * PIXELS_PER_YEAR + 500}px`, height: '700px' }}>

                        {/* CENTRAL AXIS */}
                        <div className="absolute top-1/2 left-0 w-full h-2 bg-stone-800 rounded-full shadow-inner z-0"></div>

                        {/* Iterate and Render Nodes */}
                        {layoutData.map(node => {
                            const isHovered = hoveredId === node.id;
                            const isRelated = activeRelations.includes(node.id) || (hoveredId && TIMELINE_DATA.find(e => e.id === hoveredId)?.relatedIds.includes(node.id));

                            // Dynamic Styles based on Lane & Level
                            const isTop = node.lane === 'TOP';
                            const verticalBase = isTop ? 'bottom-1/2' : 'top-1/2';
                            const levelOffset = (node.level * 160) + 40; // 160px per level + 40px base margin

                            return (
                                <div
                                    key={node.id}
                                    className={`absolute z-10 ${verticalBase}`}
                                    style={{
                                        left: `${node.x}px`,
                                        [isTop ? 'marginBottom' : 'marginTop']: `${levelOffset}px`
                                    }}
                                    onMouseEnter={() => setHoveredId(node.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    {/* Connector Line to Axis */}
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 w-1 bg-stone-300 transition-all duration-300
                                            ${isTop ? 'top-full' : 'bottom-full'}
                                            ${isHovered || isRelated ? 'bg-amber-500 w-1.5' : ''}
                                        `}
                                        style={{ height: `${levelOffset}px` }}
                                    >
                                        {/* Dot on Axis */}
                                        <div className={`absolute w-3 h-3 rounded-full bg-stone-800 border-2 border-white
                                            ${isTop ? 'bottom-0 translate-y-1/2' : 'top-0 -translate-y-1/2'} left-1/2 -translate-x-1/2`}
                                        ></div>
                                    </div>

                                    {/* The Node Card */}
                                    <motion.div
                                        layoutId={node.id}
                                        className={`
                                            relative w-56 p-4 rounded-xl border-2 shadow-sm bg-white cursor-pointer
                                            transition-all duration-300 transform origin-center
                                            ${isTop ? 'rounded-b-none border-b-0' : 'rounded-t-none border-t-0'}
                                            ${isHovered ? 'scale-110 shadow-2xl border-amber-500 z-50 bg-amber-50' : 'hover:scale-105'}
                                            ${isRelated ? 'border-amber-400 bg-amber-50/50 scale-105 shadow-lg z-40' : 'border-stone-200'}
                                            ${node.status === 'OVERRULED' && !isHovered ? 'opacity-60 grayscale' : ''}
                                        `}
                                    >
                                        {/* Badge: Year */}
                                        <span className={`
                                            text-[10px] font-black px-2 py-0.5 rounded-full text-white absolute -left-2
                                            ${isTop ? '-top-3' : '-bottom-3'}
                                            ${node.type === 'AMENDMENT' ? 'bg-red-600' : 'bg-stone-800'}
                                        `}>
                                            {node.year}
                                        </span>

                                        {/* Status indicator */}
                                        {node.status === 'OVERRULED' && (
                                            <span className="absolute right-2 top-2 text-[10px] uppercase font-black text-red-500 border border-red-200 px-1 rounded bg-red-50">Struck Down</span>
                                        )}

                                        {/* Icon */}
                                        <div className="mb-2 text-stone-400">
                                            {node.type === 'AMENDMENT' ? <FileText size={16} /> : <Gavel size={16} />}
                                        </div>

                                        <h4 className="font-bold text-sm text-stone-800 leading-tight mb-1">
                                            {node.title}
                                        </h4>

                                        <p className={`text-xs leading-snug transition-colors duration-200
                                            ${isHovered || isRelated ? 'text-stone-700 font-semibold' : 'text-stone-400 font-medium'}
                                        `}>
                                            {node.description}
                                        </p>
                                    </motion.div>
                                </div>
                            );
                        })}

                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>

                {/* Fixed Legend */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur border border-stone-200 p-2 rounded-lg text-xs font-bold shadow-lg flex gap-3 z-50">
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-100 border border-red-500 rounded"></div> Parliament</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-stone-100 border border-stone-800 rounded"></div> Judiciary</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-amber-400"></div> Connection</div>
                </div>

            </CardContent>
        </Card>
    );
}
