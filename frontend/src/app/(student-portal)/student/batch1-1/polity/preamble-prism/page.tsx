
"use client";

import React from 'react';
import PrismScene from '@/components/batch1-1/polity/preamble-prism/3d/PrismScene';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PreamblePrismPage() {
    const router = useRouter();

    return (
        <div className="w-full h-screen relative bg-black overflow-hidden">
            {/* 3D Scene */}
            <div className="absolute inset-0 z-0">
                <PrismScene />
            </div>

            {/* UI Layer */}
            <div className="absolute top-0 left-0 right-0 z-10 p-6 flex justify-between items-start pointer-events-none">
                <div className="pointer-events-auto">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-card/10 mb-4"
                        onClick={() => router.back()}
                    >
                        <ChevronLeft className="w-4 h-4 mr-1" /> Back to Dashboard
                    </Button>

                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-purple-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                        The Preamble Prism
                    </h1>
                    <p className="text-muted-foreground text-sm mt-1 max-w-md drop-shadow-md">
                        "We The People" refracts into the spectral ideals of the Indian State.
                    </p>
                </div>

                <div className="pointer-events-auto">
                    <Button variant="outline" size="icon" className="rounded-full bg-slate-900/50 border-slate-700 text-slate-300">
                        <Info className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Instruction Hint */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground text-xs animate-pulse pointer-events-none">
                Hover over the Beam Keywords to unlock their meaning
            </div>
        </div>
    );
}
