"use client";

import React, { useState } from 'react';
import { BIOSPHERE_RESERVES_DATA, BiosphereReserve } from './data/biosphere-reserves-data';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, ArrowLeft, X, Trees, Mountain } from "lucide-react";
import Link from 'next/link';

// Simplified India Map SVG Path
const INDIA_SVG_PATH = "M31.6,11.2 c0,0,1.2-4.1,3.4-5.3 c2.2-1.2,5.1-0.2,5.1-0.2 s2.7,2.2,2.7,2.2 s2.9,0.7,2.9,0.7 s2.7,3.1,2.7,3.1 s3.9,1.7,3.9,1.7 s6.6,1,6.6,1 l6.1,1.9 l7.3,7 c0,0,3.7-0.7,3.7-0.7 s-1.5,4.9-1.5,4.9 s-2.2,3.4-2.2,3.4 s-4.4,2.9-4.4,2.9 l-4.6,7.5 l-0.7,5.6 l3.4,2.2 l3.9,5.8 l-2.9,3.4 l-5.1,1.2 l-1.5,2.7 l-0.7,4.6 l-6.6,10.9 l-6.3,10.2 l-3.9,7.3 L38.6,98.6 L34,92.5 L28.9,81.3 l-2.7-8.8 l-3.4-3.6 l-6.3-5.3 l-4.4-1.9 l-2.2-4.6 l-2.7-7.8 l1.7-8.3 l4.1-6.1 l4.1-4.4 l0.7-5.3 l-1.2-5.3 l4.4-6.6 L31.6,11.2 z";

export default function BiosphereReservesMap() {
    const [selectedBR, setSelectedBR] = useState<BiosphereReserve | null>(null);

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] lg:flex-row overflow-hidden bg-teal-50">
            {/* Sidebar Details Panel */}
            <div className={`
                fixed inset-0 z-20 bg-card shadow-2xl transform transition-transform duration-300
                lg:relative lg:translate-x-0 lg:w-96 lg:border-r lg:shadow-none
                ${selectedBR ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="h-full flex flex-col p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <Link href="/student/batch1/value-addition">
                            <Button variant="ghost" size="icon" className="shrink-0">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <h1 className="text-xl font-bold text-foreground">Biosphere Reserves</h1>
                        {/* Mobile Close Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="ml-auto lg:hidden"
                            onClick={() => setSelectedBR(null)}
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* BR Details Content */}
                    {selectedBR ? (
                        <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                            <div className="relative h-40 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center overflow-hidden">
                                <Globe className="h-16 w-16 text-teal-600 dark:text-teal-400 opacity-20 absolute" />
                                <div className="z-10 text-center px-4">
                                    <h2 className="text-2xl font-bold text-teal-900 dark:text-teal-100 leading-tight">{selectedBR.name}</h2>
                                    <p className="text-teal-700 dark:text-teal-300 font-medium mt-1">{selectedBR.state}</p>
                                </div>
                            </div>

                            {/* UNESCO Status Badge */}
                            <div className={`p-3 rounded-lg border ${selectedBR.unescoStatus ? 'bg-indigo-50 border-indigo-100 text-indigo-700' : 'bg-muted border-border text-muted-foreground'}`}>
                                <div className="flex items-center gap-2">
                                    <Globe className="h-4 w-4" />
                                    <p className="text-sm font-bold">
                                        {selectedBR.unescoStatus ? "UNESCO MAB Recognition" : "Domestic BR Status"}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-card p-4 rounded-xl border shadow-sm">
                                <h3 className="text-sm font-bold text-muted-foreground uppercase mb-2">About</h3>
                                <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                                    {selectedBR.description}
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="bg-card p-4 rounded-xl border shadow-sm">
                                <h3 className="text-sm font-bold text-muted-foreground uppercase mb-2 flex items-center gap-2">
                                    <Trees className="h-4 w-4" />
                                    Key Fauna & Flora
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedBR.keyFeatures.map(feature => (
                                        <span key={feature} className="bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 px-2 py-1 rounded-md text-sm border border-teal-100 dark:border-teal-800">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-center text-muted-foreground p-4">
                            <Mountain className="h-12 w-12 mb-4 opacity-20" />
                            <p className="text-lg font-medium">Explore the 18 Reserves</p>
                            <p className="text-sm">Biosphere Reserves integrate biological and cultural diversity. Click to explore.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Map Area */}
            <div className="flex-1 relative bg-teal-50/50 p-4 overflow-hidden flex items-center justify-center">
                <div className="relative w-full max-w-2xl aspect-[3/4]">
                    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-xl filter">
                        {/* India Map Base */}
                        <path
                            d={INDIA_SVG_PATH}
                            className="fill-white dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700 stroke-[0.5]"
                        />

                        {/* BR Markers */}
                        {BIOSPHERE_RESERVES_DATA.map((br) => (
                            <g
                                key={br.id}
                                transform={`translate(${br.coordinates.x}, ${br.coordinates.y})`}
                                onClick={() => setSelectedBR(br)}
                                className="cursor-pointer group"
                            >
                                {/* Pulse Effect */}
                                <circle
                                    r="4"
                                    className={`
                                        opacity-0 group-hover:opacity-30 origin-center scale-0 group-hover:scale-125 transition-all duration-300
                                        ${selectedBR?.id === br.id ? 'opacity-40 scale-125 animate-ping' : ''}
                                        fill-teal-500
                                    `}
                                />

                                {/* Marker Dot - Larger for BRs */}
                                <circle
                                    r="2"
                                    className={`
                                        transition-all duration-300
                                        ${selectedBR?.id === br.id ? 'r-2.5 fill-teal-600 stroke-white stroke-[0.3]' : 'fill-teal-500 group-hover:fill-teal-600'}
                                        ${!br.unescoStatus ? 'opacity-70' : ''}
                                    `}
                                />

                                {/* UNESCO Ring */}
                                {br.unescoStatus && (
                                    <circle r="3" className="fill-none stroke-teal-500/30 stroke-[0.2]" />
                                )}

                                {/* Tooltip Label */}
                                <g className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <rect x="3" y="-2" width="24" height="4" rx="1" className="fill-slate-900/90" />
                                    <text x="4" y="0.5" className="text-[2px] fill-white font-medium">
                                        {br.name.split(' ')[0]}
                                    </text>
                                </g>
                            </g>
                        ))}
                    </svg>

                    <div className="absolute bottom-4 right-4 bg-card/80/80 backdrop-blur p-2 rounded-lg border text-xs text-muted-foreground">
                        * Locations are approximate
                    </div>
                </div>
            </div>
        </div>
    );
}
