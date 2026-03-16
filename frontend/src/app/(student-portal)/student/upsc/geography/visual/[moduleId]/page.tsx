"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";

// Only load the heavy 3D viz when requested
const OceanCurrentsViz = dynamic(
    () => import('@/components/upsc/subjects/geography/3d/simulations/OceanCurrentsViz'),
    { ssr: false, loading: () => <div className="text-white bg-slate-950 h-full flex items-center justify-center"><Loader2 className="animate-spin mr-2" /> Loading Ocean Lab...</div> }
);

const ClimateClassificationViz = dynamic(
    () => import('@/components/upsc/subjects/geography/3d/simulations/ClimateClassificationViz'),
    { ssr: false, loading: () => <div className="text-white bg-slate-950 h-full flex items-center justify-center"><Loader2 className="animate-spin mr-2" /> Loading Climate Explorer...</div> }
);

const IndiaInteractiveMap = dynamic(
    () => import('@/components/upsc/subjects/geography/visuals/IndiaInteractiveMap'),
    { ssr: false, loading: () => <div className="text-white bg-slate-950 h-full flex items-center justify-center"><Loader2 className="animate-spin mr-2" /> Loading Atlas...</div> }
);

const ResourceAtlasSimulator = dynamic(
    () => import('@/components/upsc/subjects/geography/visuals/ResourceAtlasSimulator'),
    { ssr: false, loading: () => <div className="text-white bg-slate-950 h-full flex items-center justify-center"><Loader2 className="animate-spin mr-2" /> Loading Resource Atlas...</div> }
);

const PlateTectonicsViz = dynamic(
    () => import('@/components/upsc/subjects/geography/3d/simulations/PlateTectonicsViz'),
    { ssr: false, loading: () => <div className="text-white bg-slate-950 h-full flex items-center justify-center"><Loader2 className="animate-spin mr-2" /> Loading Plate Tectonics...</div> }
);

const MonsoonViz = dynamic(
    () => import('@/components/upsc/subjects/geography/3d/simulations/MonsoonViz'),
    { ssr: false, loading: () => <div className="text-white bg-slate-950 h-full flex items-center justify-center"><Loader2 className="animate-spin mr-2" /> Loading Monsoon simulation...</div> }
);

const RiverSystemViz = dynamic(
    () => import('@/components/upsc/subjects/geography/3d/simulations/RiverSystemViz'),
    { ssr: false, loading: () => <div className="text-white bg-slate-950 h-full flex items-center justify-center"><Loader2 className="animate-spin mr-2" /> Loading River System...</div> }
);

export default function VisualModulePage() {
    const params = useParams();
    const router = useRouter();
    const moduleId = params.moduleId;

    // Helper for back navigation
    const BackButton = () => (
        <div className="absolute top-4 left-4 z-50">
            <Button
                variant="ghost"
                className="text-white bg-slate-900/40 hover:bg-white/10 backdrop-blur-md border border-white/5"
                onClick={() => router.push('/student/upsc/geography')}
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to geography
            </Button>
        </div>
    );

    const ModuleWrapper = ({ children }: { children: React.ReactNode }) => (
        <div className="w-screen h-screen bg-slate-950 relative overflow-hidden">
            <BackButton />
            <div className="w-full h-full">
                {children}
            </div>
        </div>
    );

    if (moduleId === 'plate-tectonics' || moduleId === 'tectonics') {
        return <ModuleWrapper><PlateTectonicsViz /></ModuleWrapper>;
    }

    if (moduleId === 'monsoon') {
        return <ModuleWrapper><MonsoonViz /></ModuleWrapper>;
    }

    if (moduleId === 'ganga-river') {
        return <ModuleWrapper><RiverSystemViz systemId="ganga" /></ModuleWrapper>;
    }

    if (moduleId === 'river-systems') {
        return (
            <div className="w-screen h-screen bg-slate-950 relative overflow-hidden flex flex-col">
                <div className="p-4 border-b border-white/10 flex items-center justify-between">
                    <Button
                        variant="ghost"
                        className="text-white"
                        onClick={() => router.push('/student/upsc/geography')}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>
                    <h1 className="text-xl font-bold text-white uppercase tracking-tighter">River Systems Explorer</h1>
                    <div className="w-20" /> {/* Spacer */}
                </div>
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                    <RiverSystemViz systemId="ganga" />
                    <RiverSystemViz systemId="brahmaputra" />
                </div>
            </div>
        );
    }

    if (moduleId === 'ocean-currents') {
        return <ModuleWrapper><OceanCurrentsViz /></ModuleWrapper>;
    }

    if (moduleId === 'climate-zones') {
        return <ModuleWrapper><ClimateClassificationViz /></ModuleWrapper>;
    }

    if (moduleId === 'india-map') {
        return <ModuleWrapper><IndiaInteractiveMap /></ModuleWrapper>;
    }

    if (moduleId === 'resource-atlas') {
        return <ModuleWrapper><ResourceAtlasSimulator /></ModuleWrapper>;
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Module Not Found ({moduleId})</h1>
                <Button onClick={() => router.push('/student/upsc/geography')}>Go Back</Button>
            </div>
        </div>
    );
}
