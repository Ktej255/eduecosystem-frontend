"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Map, Layers, Mountain, Droplets, Zap, Tent } from "lucide-react";
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import IndiaMapViz from './IndiaMapViz';
import { ATLAS_DATA } from './data/atlas-data';

export default function InteractiveAtlasPage() {
    const [activeLayer, setActiveLayer] = useState<'parks' | 'ramsar' | 'mineral' | 'river'>('parks');

    // Filter sidebar list
    const sidebarItems = ATLAS_DATA.filter(p => p.type === activeLayer);

    return (
        <div className="min-h-screen bg-muted dark:bg-black p-4 md:p-8 text-foreground">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/student/value-addition">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold flex items-center gap-2">
                                <Map className="h-6 w-6 text-emerald-600" />
                                Interactive Atlas
                            </h1>
                            <p className="text-sm text-muted-foreground">Visual mastery of high-yield geographic locations.</p>
                        </div>
                    </div>

                    <div className="flex gap-2 bg-card p-1 rounded-lg border border-border overflow-x-auto">
                        <Button
                            variant={activeLayer === 'parks' ? 'secondary' : 'ghost'}
                            size="sm"
                            onClick={() => setActiveLayer('parks')}
                            className="gap-2 whitespace-nowrap"
                        >
                            <Tent className="w-4 h-4" /> National Parks
                        </Button>
                        <Button
                            variant={activeLayer === 'ramsar' ? 'secondary' : 'ghost'}
                            size="sm"
                            onClick={() => setActiveLayer('ramsar')}
                            className="gap-2 whitespace-nowrap"
                        >
                            <Droplets className="w-4 h-4" /> Ramsar Sites
                        </Button>
                        <Button
                            variant={activeLayer === 'mineral' ? 'secondary' : 'ghost'}
                            size="sm"
                            onClick={() => setActiveLayer('mineral')}
                            className="gap-2 whitespace-nowrap"
                        >
                            <Zap className="w-4 h-4" /> Minerals
                        </Button>
                    </div>
                </div>

                {/* Main Viewport */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[70vh]">
                    {/* Map Area */}
                    <Card className="md:col-span-3 bg-muted border-border p-1 relative overflow-hidden group">
                        <IndiaMapViz activeLayer={activeLayer} />
                    </Card>

                    {/* Sidebar Details */}
                    <Card className="md:col-span-1 bg-card dark:bg-[#0a0a0a] border-border flex flex-col overflow-hidden">
                        <div className="p-4 border-b border-slate-100 font-bold flex items-center gap-2 bg-muted/50">
                            <Layers className="w-4 h-4 text-emerald-500" /> {activeLayer.toUpperCase()} Registry
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto space-y-3 custom-scrollbar">
                            {sidebarItems.map((item) => (
                                <LocationItem
                                    key={item.id}
                                    name={item.name}
                                    state={item.state}
                                    tag={item.tags[0]}
                                />
                            ))}
                            {sidebarItems.length === 0 && (
                                <p className="text-center text-xs text-muted-foreground mt-4">No data available for this layer.</p>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function LocationItem({ name, state, tag }: { name: string, state: string, tag: string }) {
    return (
        <div className="p-3 rounded-lg border border-slate-100 hover:bg-muted dark:hover:bg-slate-900/50 cursor-pointer transition-colors group">
            <div className="flex justify-between items-start">
                <h4 className="font-bold text-sm group-hover:text-emerald-600 transition-colors">{name}</h4>
                {tag && <span className="text-[10px] bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded">{tag}</span>}
            </div>
            <p className="text-xs text-muted-foreground mt-1">{state}</p>
        </div>
    );
}
