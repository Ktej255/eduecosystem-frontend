"use client";

import React, { useState } from 'react';
import { WILDLIFE_SANCTUARIES_DATA, WildlifeSanctuary } from './data/wildlife-sanctuaries-data';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowLeft, X, Bird, PawPrint } from "lucide-react";
import Link from 'next/link';

// Simplified India Map SVG Path (Reused for consistency)
const INDIA_SVG_PATH = "M31.6,11.2 c0,0,1.2-4.1,3.4-5.3 c2.2-1.2,5.1-0.2,5.1-0.2 s2.7,2.2,2.7,2.2 s2.9,0.7,2.9,0.7 s2.7,3.1,2.7,3.1 s3.9,1.7,3.9,1.7 s6.6,1,6.6,1 l6.1,1.9 l7.3,7 c0,0,3.7-0.7,3.7-0.7 s-1.5,4.9-1.5,4.9 s-2.2,3.4-2.2,3.4 s-4.4,2.9-4.4,2.9 l-4.6,7.5 l-0.7,5.6 l3.4,2.2 l3.9,5.8 l-2.9,3.4 l-5.1,1.2 l-1.5,2.7 l-0.7,4.6 l-6.6,10.9 l-6.3,10.2 l-3.9,7.3 L38.6,98.6 L34,92.5 L28.9,81.3 l-2.7-8.8 l-3.4-3.6 l-6.3-5.3 l-4.4-1.9 l-2.2-4.6 l-2.7-7.8 l1.7-8.3 l4.1-6.1 l4.1-4.4 l0.7-5.3 l-1.2-5.3 l4.4-6.6 L31.6,11.2 z";

export default function WildlifeSanctuariesMap() {
    const [selectedWLS, setSelectedWLS] = useState<WildlifeSanctuary | null>(null);

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] lg:flex-row overflow-hidden bg-amber-50">
            {/* Sidebar Details Panel */}
            <div className={`
                fixed inset-0 z-20 bg-card shadow-2xl transform transition-transform duration-300
                lg:relative lg:translate-x-0 lg:w-96 lg:border-r lg:shadow-none
                ${selectedWLS ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="h-full flex flex-col p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <Link href="/student/upsc/value-addition">
                            <Button variant="ghost" size="icon" className="shrink-0">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <h1 className="text-xl font-bold text-foreground">Wildlife Sanctuaries</h1>
                        {/* Mobile Close Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="ml-auto lg:hidden"
                            onClick={() => setSelectedWLS(null)}
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* WLS Details Content */}
                    {selectedWLS ? (
                        <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                            <div className="relative h-40 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center overflow-hidden">
                                <PawPrint className="h-16 w-16 text-amber-600 dark:text-amber-400 opacity-20 absolute" />
                                <div className="z-10 text-center px-4">
                                    <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 leading-tight">{selectedWLS.name}</h2>
                                    <p className="text-amber-700 dark:text-amber-300 font-medium mt-1">{selectedWLS.state}</p>
                                </div>
                            </div>

                            {/* Significance Badge */}
                            <div className="bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-100 dark:border-amber-800">
                                <p className="text-xs font-bold text-amber-600 uppercase mb-1">Key Significance</p>
                                <p className="text-sm font-medium text-muted-foreground dark:text-muted-foreground">
                                    {selectedWLS.significance}
                                </p>
                            </div>

                            {/* Description */}
                            <div className="bg-card p-4 rounded-xl border shadow-sm">
                                <h3 className="text-sm font-bold text-muted-foreground uppercase mb-2">About</h3>
                                <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                                    {selectedWLS.description}
                                </p>
                            </div>

                            {/* Species */}
                            <div className="bg-card p-4 rounded-xl border shadow-sm">
                                <h3 className="text-sm font-bold text-muted-foreground uppercase mb-2 flex items-center gap-2">
                                    <Bird className="h-4 w-4" />
                                    Flora & Fauna
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedWLS.keySpecies.map(species => (
                                        <span key={species} className="bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-md text-sm border border-orange-100 dark:border-orange-800">
                                            {species}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-center text-muted-foreground p-4">
                            <MapPin className="h-12 w-12 mb-4 opacity-20" />
                            <p className="text-lg font-medium">Explore India's Sanctuaries</p>
                            <p className="text-sm">Click on any marker to learn about unique habitats and endangered species.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Map Area */}
            <div className="flex-1 relative bg-amber-50/50 p-4 overflow-hidden flex items-center justify-center">
                <div className="relative w-full max-w-2xl aspect-[3/4]">
                    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-xl filter">
                        {/* India Map Base */}
                        <path
                            d={INDIA_SVG_PATH}
                            className="fill-white dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700 stroke-[0.5]"
                        />

                        {/* WLS Markers */}
                        {WILDLIFE_SANCTUARIES_DATA.map((wls) => (
                            <g
                                key={wls.id}
                                transform={`translate(${wls.coordinates.x}, ${wls.coordinates.y})`}
                                onClick={() => setSelectedWLS(wls)}
                                className="cursor-pointer group"
                            >
                                {/* Effect */}
                                <circle
                                    r="3"
                                    className={`
                                        opacity-0 group-hover:opacity-30 origin-center scale-0 group-hover:scale-150 transition-all duration-300
                                        ${selectedWLS?.id === wls.id ? 'opacity-40 scale-150 animate-ping' : ''}
                                        fill-amber-500
                                    `}
                                />

                                {/* Marker Dot (Different shape/color than NPs?) Used Circle for consistency but Amber color */}
                                <circle
                                    r="1.4"
                                    className={`
                                        transition-all duration-300
                                        ${selectedWLS?.id === wls.id ? 'r-1.8 fill-amber-600 stroke-white stroke-[0.2]' : 'fill-orange-500 group-hover:fill-amber-500'}
                                    `}
                                />

                                {/* Tooltip Label */}
                                <g className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <rect x="2.5" y="-2" width="24" height="4" rx="1" className="fill-slate-900/90" />
                                    <text x="3.5" y="0.5" className="text-[2px] fill-white font-medium">
                                        {wls.name.split(' ')[0]}
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
