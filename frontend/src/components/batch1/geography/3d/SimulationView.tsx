"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SimulationType } from "../content/types";

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

const EarthLayersInteract = dynamic(
    () => import("./interactives/EarthLayersInteract"),
    { ssr: false }
);

interface SimulationViewProps {
    simulationType: SimulationType;
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
            case 'earth-layers-interactive':
                return <EarthLayersInteract onClose={onClose} />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full h-full relative">
            {/* Back Button */}
            <div className="absolute top-6 left-6 z-50">
                <Button
                    variant="ghost"
                    size="lg"
                    onClick={onClose}
                    className="bg-black/40 backdrop-blur-xl text-white border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-2xl px-6 h-14 group transition-all shadow-2xl"
                >
                    <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-black uppercase tracking-widest text-xs">Exit Lab & Return</span>
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
