"use client";

import React from 'react';
import { ArrowLeft, ZoomIn, ZoomOut, Maximize } from 'lucide-react';

interface MapViewerProps {
    mapId: string;
    title: string;
    description?: string;
    onClose: () => void;
}

export default function MapViewer({ mapId, title, description, onClose }: MapViewerProps) {
    return (
        <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col animate-in fade-in duration-300">
            {/* Header */}
            <div className="bg-slate-900 border-b border-white/10 p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                        <h2 className="text-white font-bold text-lg">{title}</h2>
                        {description && <p className="text-slate-400 text-xs">{description}</p>}
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg text-white" title="Zoom In">
                        <ZoomIn className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg text-white" title="Zoom Out">
                        <ZoomOut className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg text-white" title="Fullscreen">
                        <Maximize className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Map Area (Placeholder) */}
            <div className="flex-1 relative bg-slate-900 overflow-hidden flex items-center justify-center">
                <div className="text-center p-8 max-w-md">
                    <div className="w-24 h-24 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-indigo-500/30 animate-pulse">
                        <MapIcon className="w-10 h-10 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Interactive Map Loading...</h3>
                    <p className="text-slate-400">
                        High-resolution historical map for <span className="text-indigo-400">{mapId}</span> is being rendered.
                        (This is a placeholder for the actual interactive SVG/Leaflet map).
                    </p>
                </div>

                {/* Grid Overlay for effect */}
                <div className="absolute inset-0 pointer-events-none opacity-10"
                    style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />
            </div>
        </div>
    );
}

function MapIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
            <line x1="9" x2="9" y1="3" y2="18" />
            <line x1="15" x2="15" y1="6" y2="21" />
        </svg>
    );
}
