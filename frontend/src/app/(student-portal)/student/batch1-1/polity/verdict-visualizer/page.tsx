
"use client";

import React, { useState } from 'react';
import CourtroomScene from '@/components/batch1-1/polity/verdict-visualizer/3d/CourtroomScene';
import VerdictOverlay from '@/components/batch1-1/polity/verdict-visualizer/ui/VerdictOverlay';
import { LandmarkCase } from '@/components/batch1-1/polity/verdict-visualizer/data/landmark-cases';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function VerdictVisualizerPage() {
    const router = useRouter();
    const [selectedCase, setSelectedCase] = useState<LandmarkCase | null>(null);

    const handleSelectCase = (data: LandmarkCase) => {
        setSelectedCase(data);
    };

    return (
        <div className="w-full h-screen relative bg-slate-950 overflow-hidden">
            {/* 3D Scene Layer */}
            <div className="absolute inset-0 z-0">
                <CourtroomScene
                    onSelectCase={handleSelectCase}
                    selectedCaseId={selectedCase?.id || null}
                />
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

                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500 drop-shadow-lg">
                        The Verdict Visualizer
                    </h1>
                    <p className="text-muted-foreground text-sm mt-1 max-w-md drop-shadow-md">
                        Explore the timeline of landmark Supreme Court judgments that shaped the Basic Structure of the Constitution.
                    </p>
                </div>

                <div className="pointer-events-auto">
                    <Button variant="outline" size="icon" className="rounded-full bg-slate-900/50 border-slate-700 text-slate-300">
                        <Info className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Overlay Layer */}
            <div className="pointer-events-auto">
                <VerdictOverlay
                    data={selectedCase}
                    onClose={() => setSelectedCase(null)}
                />
            </div>

            {/* Instructions Hint */}
            {!selectedCase && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground text-xs animate-pulse pointer-events-none">
                    Click on a Monolith to view the Verdict
                </div>
            )}
        </div>
    );
}
