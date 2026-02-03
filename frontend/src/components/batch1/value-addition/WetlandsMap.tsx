"use client";

import React, { useState } from 'react';
import { WETLANDS_DATA, Wetland } from './data/wetlands-data';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Waves, ArrowLeft, X, Bird, Droplets } from "lucide-react";
import Link from 'next/link';

// Simplified India Map SVG Path
const INDIA_SVG_PATH = "M31.6,11.2 c0,0,1.2-4.1,3.4-5.3 c2.2-1.2,5.1-0.2,5.1-0.2 s2.7,2.2,2.7,2.2 s2.9,0.7,2.9,0.7 s2.7,3.1,2.7,3.1 s3.9,1.7,3.9,1.7 s6.6,1,6.6,1 l6.1,1.9 l7.3,7 c0,0,3.7-0.7,3.7-0.7 s-1.5,4.9-1.5,4.9 s-2.2,3.4-2.2,3.4 s-4.4,2.9-4.4,2.9 l-4.6,7.5 l-0.7,5.6 l3.4,2.2 l3.9,5.8 l-2.9,3.4 l-5.1,1.2 l-1.5,2.7 l-0.7,4.6 l-6.6,10.9 l-6.3,10.2 l-3.9,7.3 L38.6,98.6 L34,92.5 L28.9,81.3 l-2.7-8.8 l-3.4-3.6 l-6.3-5.3 l-4.4-1.9 l-2.2-4.6 l-2.7-7.8 l1.7-8.3 l4.1-6.1 l4.1-4.4 l0.7-5.3 l-1.2-5.3 l4.4-6.6 L31.6,11.2 z";

export default function WetlandsMap() {
    const [selectedWetland, setSelectedWetland] = useState<Wetland | null>(null);

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] lg:flex-row overflow-hidden bg-blue-50 dark:bg-slate-950">
            {/* Sidebar Details Panel */}
            <div className={`
                fixed inset-0 z-20 bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300
                lg:relative lg:translate-x-0 lg:w-96 lg:border-r lg:shadow-none
                ${selectedWetland ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="h-full flex flex-col p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <Link href="/student/batch1/value-addition">
                            <Button variant="ghost" size="icon" className="shrink-0">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">Ramsar Wetlands</h1>
                        {/* Mobile Close Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="ml-auto lg:hidden"
                            onClick={() => setSelectedWetland(null)}
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Wetland Details Content */}
                    {selectedWetland ? (
                        <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                            <div className="relative h-40 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center overflow-hidden">
                                <Waves className="h-16 w-16 text-blue-600 dark:text-blue-400 opacity-20 absolute" />
                                <div className="z-10 text-center px-4">
                                    <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 leading-tight">{selectedWetland.name}</h2>
                                    <p className="text-blue-700 dark:text-blue-300 font-medium mt-1">{selectedWetland.state}</p>
                                </div>
                            </div>

                            {/* Montreux Record Badge */}
                            {selectedWetland.montreuxRecord && (
                                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-100 dark:border-red-800">
                                    <p className="text-xs font-bold text-red-600 uppercase mb-1">Montreux Record</p>
                                    <p className="text-sm font-medium text-red-800 dark:text-red-300">
                                        Currently listed due to ecological changes. Needs urgent conservation.
                                    </p>
                                </div>
                            )}

                            {/* Description */}
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border shadow-sm">
                                <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">About</h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {selectedWetland.description}
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border shadow-sm">
                                <h3 className="text-sm font-bold text-gray-500 uppercase mb-2 flex items-center gap-2">
                                    <Bird className="h-4 w-4" />
                                    Key Biodiversity
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedWetland.keyFeatures.map(feature => (
                                        <span key={feature} className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md text-sm border border-blue-100 dark:border-blue-800">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-400 p-4">
                            <Droplets className="h-12 w-12 mb-4 opacity-20" />
                            <p className="text-lg font-medium">Explore Ramsar Sites</p>
                            <p className="text-sm">Click map markers to explore key Indian wetlands.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Map Area */}
            <div className="flex-1 relative bg-blue-50/50 dark:bg-slate-950 p-4 overflow-hidden flex items-center justify-center">
                <div className="relative w-full max-w-2xl aspect-[3/4]">
                    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-xl filter">
                        {/* India Map Base */}
                        <path
                            d={INDIA_SVG_PATH}
                            className="fill-white dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700 stroke-[0.5]"
                        />

                        {/* Wetland Markers */}
                        {WETLANDS_DATA.map((site) => (
                            <g
                                key={site.id}
                                transform={`translate(${site.coordinates.x}, ${site.coordinates.y})`}
                                onClick={() => setSelectedWetland(site)}
                                className="cursor-pointer group"
                            >
                                {/* Effect */}
                                <circle
                                    r="3"
                                    className={`
                                        opacity-0 group-hover:opacity-30 origin-center scale-0 group-hover:scale-150 transition-all duration-300
                                        ${selectedWetland?.id === site.id ? 'opacity-40 scale-150 animate-ping' : ''}
                                        fill-blue-500
                                    `}
                                />

                                {/* Marker Dot - Diamond shape for water? keeping circle for simplicity but styled blue */}
                                <circle
                                    r="1.5"
                                    className={`
                                        transition-all duration-300
                                        ${selectedWetland?.id === site.id ? 'r-2.0 fill-blue-600 stroke-white stroke-[0.2]' : 'fill-cyan-500 group-hover:fill-blue-500'}
                                    `}
                                />

                                {/* Montreux Indicator Ring */}
                                {site.montreuxRecord && (
                                    <circle r="2.5" className="fill-none stroke-red-500/50 stroke-[0.3]" />
                                )}

                                {/* Tooltip Label */}
                                <g className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <rect x="2.5" y="-2" width="20" height="4" rx="1" className="fill-slate-900/90" />
                                    <text x="3.5" y="0.5" className="text-[2px] fill-white font-medium">
                                        {site.name.split(' ')[0]}
                                    </text>
                                </g>
                            </g>
                        ))}
                    </svg>

                    <div className="absolute bottom-4 right-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur p-2 rounded-lg border text-xs text-gray-500">
                        * Locations are approximate
                    </div>
                </div>
            </div>
        </div>
    );
}
