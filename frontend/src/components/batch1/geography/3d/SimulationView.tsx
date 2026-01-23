"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dynamic import to avoid SSR issues with Three.js
const RiverSystemViz = dynamic(
    () => import("./simulations/RiverSystemViz"),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-full flex items-center justify-center bg-slate-950">
                <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
            </div>
        )
    }
);

const MonsoonViz = dynamic(
    () => import("./simulations/MonsoonViz"),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-full flex items-center justify-center bg-slate-950">
                <Loader2 className="w-8 h-8 text-orange-400 animate-spin" />
            </div>
        )
    }
);

const PlateTectonicsViz = dynamic(
    () => import("./simulations/PlateTectonicsViz"),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-full flex items-center justify-center bg-slate-950">
                <Loader2 className="w-8 h-8 text-red-400 animate-spin" />
            </div>
        )
    }
);

const VolcanoViz = dynamic(
    () => import("./simulations/VolcanoViz"),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-full flex items-center justify-center bg-slate-950">
                <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
            </div>
        )
    }
);

const GlacialViz = dynamic(
    () => import("./simulations/GlacialViz"),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-full flex items-center justify-center bg-slate-950">
                <Loader2 className="w-8 h-8 text-cyan-200 animate-spin" />
            </div>
        )
    }
);

interface SimulationViewProps {
    simulationType: 'ganga-river' | 'brahmaputra-river' | 'monsoon' | 'plate-tectonics' | 'volcano' | 'glacial-landforms';
    onClose: () => void;
}

export default function SimulationView({ simulationType, onClose }: SimulationViewProps) {
    const renderSimulation = () => {
        switch (simulationType) {
            case 'ganga-river':
                return <RiverSystemViz systemId="ganga" />;
            case 'brahmaputra-river':
                return <RiverSystemViz systemId="brahmaputra" />;
            case 'monsoon':
                return <MonsoonViz />;
            case 'plate-tectonics':
                return <PlateTectonicsViz />;
            case 'volcano':
                return <VolcanoViz />;
            case 'glacial-landforms':
                return <GlacialViz />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full h-full relative">
            {/* Back Button */}
            <div className="absolute top-4 left-4 z-20">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="bg-slate-900/80 backdrop-blur-sm text-white hover:bg-slate-800"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Lesson
                </Button>
            </div>

            {/* Simulation Content */}
            <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center bg-slate-950">
                    <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
                </div>
            }>
                {renderSimulation()}
            </Suspense>
        </div>
    );
}
