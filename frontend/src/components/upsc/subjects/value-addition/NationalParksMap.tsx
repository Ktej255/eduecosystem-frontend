"use client";

import React, { useState } from 'react';
import { NATIONAL_PARKS_DATA, NationalPark } from './data/national-parks-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Info, ArrowLeft, Trees, Mountain, X } from "lucide-react";
import Link from 'next/link';

// Simplified India Map SVG Path
// This is a rough approximation for visualization purposes.
// ViewBox 0 0 100 100 for easy percentage based plotting
const INDIA_MAP_PATH = "M 32.5 12.0 L 35.0 10.0 L 40.0 12.0 L 42.0 15.0 L 45.0 18.0 L 50.0 20.0 L 55.0 18.0 L 60.0 18.0 L 80.0 22.0 L 85.0 25.0 L 90.0 30.0 L 88.0 35.0 L 85.0 38.0 L 82.0 35.0 L 75.0 38.0 L 70.0 45.0 L 65.0 50.0 L 60.0 55.0 L 50.0 65.0 L 45.0 75.0 L 40.0 85.0 L 32.0 95.0 L 28.0 85.0 L 25.0 75.0 L 20.0 60.0 L 15.0 50.0 L 12.0 40.0 L 15.0 35.0 L 18.0 30.0 L 25.0 25.0 L 28.0 20.0 L 30.0 15.0 Z";

// More detailed path usually required, using a bounding box approach for now
// Or rendering a background image effectively if path is too complex to hand-code
// Using a placeholder graphic style for the map background if SVG path is tricky
// A better approach is to use a container with an India Map Image and overlay dots.

const INDIA_MAP_URL = "/assets/india-outline-map.png"; // Placeholder if we had one
// For now, we will use a CSS-shaped container or just plotting on a relative 100x100 grid 
// that mimics the aspect ratio, assuming the user can "visualize" it's India.
// To make it look good, we'll use a standard SVG path for India available publicly or approximation.

// Approximation of India's boundary for 100x120 Grid
const INDIA_SVG_PATH = "M31.6,11.2 c0,0,1.2-4.1,3.4-5.3 c2.2-1.2,5.1-0.2,5.1-0.2 s2.7,2.2,2.7,2.2 s2.9,0.7,2.9,0.7 s2.7,3.1,2.7,3.1 s3.9,1.7,3.9,1.7 s6.6,1,6.6,1 l6.1,1.9 l7.3,7 c0,0,3.7-0.7,3.7-0.7 s-1.5,4.9-1.5,4.9 s-2.2,3.4-2.2,3.4 s-4.4,2.9-4.4,2.9 l-4.6,7.5 l-0.7,5.6 l3.4,2.2 l3.9,5.8 l-2.9,3.4 l-5.1,1.2 l-1.5,2.7 l-0.7,4.6 l-6.6,10.9 l-6.3,10.2 l-3.9,7.3 L38.6,98.6 L34,92.5 L28.9,81.3 l-2.7-8.8 l-3.4-3.6 l-6.3-5.3 l-4.4-1.9 l-2.2-4.6 l-2.7-7.8 l1.7-8.3 l4.1-6.1 l4.1-4.4 l0.7-5.3 l-1.2-5.3 l4.4-6.6 L31.6,11.2 z";


export default function NationalParksMap() {
    const [selectedPark, setSelectedPark] = useState<NationalPark | null>(null);

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] lg:flex-row overflow-hidden bg-muted">
            {/* Sidebar Details Panel */}
            <div className={`
                fixed inset-0 z-20 bg-card shadow-2xl transform transition-transform duration-300
                lg:relative lg:translate-x-0 lg:w-96 lg:border-r lg:shadow-none
                ${selectedPark ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="h-full flex flex-col p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <Link href="/student/upsc/value-addition">
                            <Button variant="ghost" size="icon" className="shrink-0">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <h1 className="text-xl font-bold text-foreground">National Parks</h1>
                        {/* Mobile Close Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="ml-auto lg:hidden"
                            onClick={() => setSelectedPark(null)}
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Park Details Content */}
                    {selectedPark ? (
                        <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                            <div className="relative h-40 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center overflow-hidden">
                                <Trees className="h-16 w-16 text-green-600 dark:text-green-400 opacity-20 absolute" />
                                <div className="z-10 text-center px-4">
                                    <h2 className="text-2xl font-bold text-green-900 dark:text-green-100">{selectedPark.name}</h2>
                                    <p className="text-green-700 dark:text-green-300 font-medium">{selectedPark.state}</p>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                <Badge variant={selectedPark.probability === 'High' ? 'destructive' : 'secondary'}>
                                    {selectedPark.probability} Probability
                                </Badge>
                                {selectedPark.river && (
                                    <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                                        River: {selectedPark.river}
                                    </Badge>
                                )}
                                {selectedPark.hills && (
                                    <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
                                        {selectedPark.hills}
                                    </Badge>
                                )}
                            </div>

                            {/* Description */}
                            <div className="bg-card p-4 rounded-xl border shadow-sm">
                                <h3 className="text-sm font-bold text-muted-foreground uppercase mb-2">Significance</h3>
                                <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                                    {selectedPark.description}
                                </p>
                            </div>

                            {/* Species */}
                            <div className="bg-card p-4 rounded-xl border shadow-sm">
                                <h3 className="text-sm font-bold text-muted-foreground uppercase mb-2">Key Species</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedPark.keySpecies.map(species => (
                                        <span key={species} className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1 rounded-md text-sm border border-green-100 dark:border-green-800">
                                            {species}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-center text-muted-foreground p-4">
                            <MapPin className="h-12 w-12 mb-4 opacity-20" />
                            <p className="text-lg font-medium">Select a location on the map</p>
                            <p className="text-sm">Click on any marker to view detailed information about the National Park.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Map Area */}
            <div className="flex-1 relative bg-muted p-4 overflow-hidden flex items-center justify-center">
                <div className="relative w-full max-w-2xl aspect-[3/4]">
                    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-xl filter">
                        {/* India Map Base */}
                        <path
                            d={INDIA_SVG_PATH}
                            className="fill-white dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700 stroke-[0.5]"
                        />

                        {/* Park Markers */}
                        {NATIONAL_PARKS_DATA.map((park) => (
                            <g
                                key={park.id}
                                transform={`translate(${park.coordinates.x}, ${park.coordinates.y})`}
                                onClick={() => setSelectedPark(park)}
                                className="cursor-pointer group"
                            >
                                {/* Pulse Effect for Selected/High Prob */}
                                <circle
                                    r="3"
                                    className={`
                                        opacity-0 group-hover:opacity-30 origin-center scale-0 group-hover:scale-150 transition-all duration-300
                                        ${selectedPark?.id === park.id ? 'opacity-40 scale-150 animate-ping' : ''}
                                        fill-current ${park.probability === 'High' ? 'text-red-500' : 'text-green-500'}
                                    `}
                                />

                                {/* Marker Dot */}
                                <circle
                                    r="1.2"
                                    className={`
                                        transition-all duration-300
                                        ${selectedPark?.id === park.id ? 'r-1.5 fill-red-600 stroke-white stroke-[0.2]' : 'fill-green-600 group-hover:fill-green-500'}
                                    `}
                                />

                                {/* Tooltip Label (Visible on Hover) */}
                                <g className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none data-[selected=true]:opacity-100" data-selected={selectedPark?.id === park.id}>
                                    <rect x="2.5" y="-2" width="20" height="4" rx="1" className="fill-slate-900/90" />
                                    <text x="3.5" y="0.5" className="text-[2px] fill-white font-medium">
                                        {park.name.split(' ')[0]}
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
