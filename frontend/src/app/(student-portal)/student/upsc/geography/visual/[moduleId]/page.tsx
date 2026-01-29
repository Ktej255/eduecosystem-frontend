"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";

// Only load the heavy 3D viz when requested
const PlateTectonicsViz = dynamic(
    () => import('@/components/batch1/geography/3d/simulations/PlateTectonicsViz'),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
                <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p>Loading Tectonics Simulation...</p>
            </div>
        )
    }
);

const MonsoonViz = dynamic(
    () => import('@/components/batch1/geography/3d/simulations/MonsoonViz'),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
                <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p>Loading Monsoon System...</p>
            </div>
        )
    }
);

const RiverSystemViz = dynamic(
    () => import('@/components/batch1/geography/3d/simulations/RiverSystemViz'),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
                <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p>Loading River System...</p>
            </div>
        )
    }
);

export default function VisualModulePage() {
    const params = useParams();
    const router = useRouter();
    const moduleId = params.moduleId;

    if (moduleId === 'plate-tectonics') {
        return (
            <div className="w-screen h-screen bg-slate-950 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-50">
                    <Button
                        variant="ghost"
                        className="text-white hover:bg-white/10"
                        onClick={() => router.back()}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Visual Hub
                    </Button>
                </div>
                <div className="w-full h-full">
                    <PlateTectonicsViz />
                </div>
            </div>
        );
    }

    if (moduleId === 'monsoon') {
        return (
            <div className="w-screen h-screen bg-slate-950 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-50">
                    <Button
                        variant="ghost"
                        className="text-white hover:bg-white/10"
                        onClick={() => router.back()}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Visual Hub
                    </Button>
                </div>
                <div className="w-full h-full">
                    <MonsoonViz />
                </div>
            </div>
        );
    }

    if (moduleId === 'ganga-river') {
        return (
            <div className="w-screen h-screen bg-slate-950 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-50">
                    <Button
                        variant="ghost"
                        className="text-white hover:bg-white/10"
                        onClick={() => router.back()}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Visual Hub
                    </Button>
                </div>
                <div className="w-full h-full">
                    <RiverSystemViz systemId="ganga" />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Module Not Found</h1>
                <Button onClick={() => router.back()}>Go Back</Button>
            </div>
        </div>
    );
}
