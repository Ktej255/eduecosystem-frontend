"use client";

import React, { useState, useCallback, useEffect } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { INDIA_TOPO_URL, INDIA_ATLAS_MAPPING as BASE_MAPPING } from "./data/india-atlas-data";
import AtlasTooltip from "./AtlasTooltip";
import { toast } from "sonner";
import {
    isTopicMastered,
    isTopicStarted,
    getMasteredTopicIds,
    getBranchStats,
    hydrateFromBackend,
} from "@/lib/geography-store";
import { GEOGRAPHY_REGISTRY } from "@/components/upsc/subjects/geography/data/geography-registry";
import { Globe2, Layers, Mountain, Wind, Map, Droplets, Leaf, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// ─── Layer Mode Types ─────────────────────────────────────────────────────────

type LayerMode = 'mastery' | 'physiography' | 'rainfall' | 'minerals';

const LAYER_META: Record<LayerMode, { label: string; icon: React.ReactNode; description: string }> = {
    mastery:      { label: "Mastery",      icon: <Globe2 className="w-3.5 h-3.5" />, description: "Your topic completion" },
    physiography: { label: "Physiography", icon: <Mountain className="w-3.5 h-3.5" />, description: "Physical divisions of India" },
    rainfall:     { label: "Rainfall",     icon: <Droplets className="w-3.5 h-3.5" />, description: "Annual precipitation zones" },
    minerals:     { label: "Minerals",     icon: <Layers className="w-3.5 h-3.5" />, description: "Mineral resource regions" },
};

// ─── Physiographic Region Colours ─────────────────────────────────────────────

const PHYSIO_COLOURS: Record<string, string> = {
    "Northern Mountains":    "#6366f1",  // indigo
    "Indo-Gangetic Plains":  "#0ea5e9",  // sky
    "Peninsular Plateau":    "#f59e0b",  // amber
    "Eastern Coastal Plains": "#10b981", // emerald
    "Western Coastal Plains": "#3b82f6", // blue
    "Desert & Aravalli":     "#f97316",  // orange
    "North-East Hills":      "#8b5cf6",  // violet
    "Islands":               "#06b6d4",  // cyan
};

// ─── Rainfall Zones ─────────────────────────────────────────────────────────

const RAINFALL_BY_STATE: Record<string, number> = {
    "IN-MZ": 4, "IN-ML": 4, "IN-AS": 4, "IN-MN": 4, "IN-TR": 3,
    "IN-KL": 4, "IN-KA": 3, "IN-MH": 3, "IN-GA": 4, "IN-WB": 3,
    "IN-OD": 3, "IN-BR": 3, "IN-UP": 2, "IN-MP": 2, "IN-CG": 2,
    "IN-TG": 2, "IN-AP": 2, "IN-TN": 2, "IN-GJ": 1, "IN-RJ": 1,
    "IN-HR": 1, "IN-PB": 2, "IN-JK": 2, "IN-HP": 2, "IN-UT": 3,
    "IN-JH": 3, "IN-AR": 4, "IN-NL": 4, "IN-SK": 3, "IN-DL": 1,
};
const RAINFALL_COLOURS = ["#e2e8f0", "#93c5fd", "#3b82f6", "#1d4ed8", "#1e3a8a"];

// ─── Mineral Zones ────────────────────────────────────────────────────────────

const MINERAL_BY_STATE: Record<string, number> = {
    "IN-JH": 4, "IN-CG": 4, "IN-OD": 4, "IN-MP": 3, "IN-RJ": 3,
    "IN-AP": 3, "IN-KA": 3, "IN-GJ": 3, "IN-MH": 2, "IN-TG": 2,
    "IN-TN": 2, "IN-HR": 1, "IN-WB": 2, "IN-BR": 2, "IN-UP": 1,
    "IN-KL": 1, "IN-AS": 2, "IN-PB": 1, "IN-HP": 1,
};
const MINERAL_COLOURS = ["#e2e8f0", "#fde68a", "#fbbf24", "#d97706", "#92400e"];

// ─── Helper: Get fill colour by layer ─────────────────────────────────────────

function getFillColor(isoCode: string, layer: LayerMode): string {
    const mapping = BASE_MAPPING[isoCode];

    if (layer === 'mastery') {
        if (!mapping) return "#e2e8f0";
        const topicId = mapping.topicId;
        const isBook3 = topicId >= 500;
        if (isBook3) return "#e2e8f0";
        if (isTopicMastered(topicId)) return "#10b981";   // emerald — mastered
        if (isTopicStarted(topicId))  return "#fbbf24";   // amber — in progress
        return "#cbd5e1";                                  // slate — untouched
    }

    if (layer === 'physiography') {
        const region = mapping?.physioRegion;
        return PHYSIO_COLOURS[region || ""] || "#e2e8f0";
    }

    if (layer === 'rainfall') {
        const level = RAINFALL_BY_STATE[isoCode] || 0;
        return RAINFALL_COLOURS[level] || "#e2e8f0";
    }

    if (layer === 'minerals') {
        const level = MINERAL_BY_STATE[isoCode] || 0;
        return MINERAL_COLOURS[level] || "#e2e8f0";
    }

    return "#e2e8f0";
}

// ─── Legend Items ──────────────────────────────────────────────────────────────

function MasteryLegend() {
    const mastered = getMasteredTopicIds().length;
    const total = GEOGRAPHY_REGISTRY.filter(t => t.branch === 'Indian Geography').length;
    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                <div className="w-3 h-3 rounded-full bg-emerald-500" /> Mastered
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                <div className="w-3 h-3 rounded-full bg-amber-400" /> In Progress
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                <div className="w-3 h-3 rounded-full bg-slate-300" /> Not Started
            </div>
            <div className="mt-3 pt-3 border-t border-border text-[10px] text-muted-foreground font-medium">
                Indian Geo mastery: <span className="font-bold text-foreground">{mastered}</span>
            </div>
        </div>
    );
}

function PhysioLegend() {
    return (
        <div className="space-y-1.5">
            {Object.entries(PHYSIO_COLOURS).map(([region, colour]) => (
                <div key={region} className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: colour }} />
                    <span>{region}</span>
                </div>
            ))}
        </div>
    );
}

function RainfallLegend() {
    const labels = ["< 250mm", "250-750mm", "750-1250mm", "1250-2000mm", "> 2000mm"];
    return (
        <div className="space-y-1.5">
            {RAINFALL_COLOURS.map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: c }} />
                    <span>{labels[i]}</span>
                </div>
            ))}
        </div>
    );
}

function MineralLegend() {
    const labels = ["No Data", "Low Density", "Moderate", "High Density", "Major Belt"];
    return (
        <div className="space-y-1.5">
            {MINERAL_COLOURS.map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: c }} />
                    <span>{labels[i]}</span>
                </div>
            ))}
        </div>
    );
}

// ─── Main Atlas Component ─────────────────────────────────────────────────────

const GeographyAtlasComponent: React.FC = () => {
    const router = useRouter();
    const [layer, setLayer] = useState<LayerMode>('mastery');
    const [storeTick, setStoreTick] = useState(0);

    useEffect(() => {
        hydrateFromBackend()
            .then(() => setStoreTick(t => t + 1))
            .catch(() => null);
    }, []);

    const [tooltipState, setTooltipState] = useState<{
        isVisible: boolean;
        x: number;
        y: number;
        regionName: string;
        topicName: string;
        topicId: number;
        description: string;
        mastery: number;
        isLocked: boolean;
    }>({
        isVisible: false, x: 0, y: 0,
        regionName: "", topicName: "", topicId: 0, description: "",
        mastery: 0, isLocked: false,
    });

    const isBook3 = useCallback((topicId: number) => topicId >= 500, []);

    const handleMouseEnter = useCallback((geo: any, e: React.MouseEvent) => {
        const isoCode = geo.properties.ST_NM_ISO || geo.properties.id || geo.id;
        const mapping = BASE_MAPPING[isoCode];
        if (!mapping) return;

        const mastery = isTopicMastered(mapping.topicId) ? 2 : isTopicStarted(mapping.topicId) ? 1 : 0;

        setTooltipState({
            isVisible: true,
            x: e.clientX,
            y: e.clientY,
            regionName: mapping.name,
            topicName: mapping.description,
            topicId: mapping.topicId,
            description: mapping.physioRegion,
            mastery,
            isLocked: isBook3(mapping.topicId),
        });
    }, [isBook3]);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        setTooltipState(prev => prev.isVisible ? { ...prev, x: e.clientX, y: e.clientY } : prev);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setTooltipState(prev => ({ ...prev, isVisible: false }));
    }, []);

    const handleClick = useCallback((geo: any) => {
        const isoCode = geo.properties.ST_NM_ISO || geo.properties.id || geo.id;
        const mapping = BASE_MAPPING[isoCode];

        if (!mapping) return;

        if (isBook3(mapping.topicId)) {
            toast.info("Human & Economic Geography", {
                description: `${mapping.name} content is mapped to Book 3 (coming soon).`,
            });
            return;
        }

        // Navigate to the chapter deep-reader
        router.push(`/student/upsc/geography/topic/${mapping.topicId}`);
    }, [router, isBook3]);

    return (
        <div className="w-full space-y-4">
            {/* ── Layer Switcher ── */}
            <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mr-1">Layer:</span>
                {(Object.entries(LAYER_META) as [LayerMode, typeof LAYER_META[LayerMode]][]).map(([mode, meta]) => (
                    <button
                        key={mode}
                        onClick={() => setLayer(mode)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-widest transition-all border ${layer === mode
                            ? "bg-foreground text-background border-transparent"
                            : "bg-card border-border text-muted-foreground hover:border-foreground/30"
                        }`}
                    >
                        {meta.icon}
                        {meta.label}
                    </button>
                ))}
            </div>

            {/* ── Map Container ── */}
            <div
                className="relative w-full h-[550px] bg-gradient-to-b from-sky-50 to-blue-100 dark:from-slate-900 dark:to-slate-950 rounded-2xl border border-border overflow-hidden shadow-inner"
                onMouseMove={handleMouseMove}
            >
                {/* Title overlay */}
                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                    <h2 className="text-lg font-black text-foreground tracking-tight">
                        India {LAYER_META[layer].label} Atlas
                    </h2>
                    <p className="text-[10px] text-muted-foreground font-medium mt-0.5">
                        {LAYER_META[layer].description} • Click any state to study
                    </p>
                </div>

                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{ scale: 1050, center: [82, 22] }}
                    className="w-full h-full cursor-grab active:cursor-grabbing"
                >
                    <ZoomableGroup zoom={1} minZoom={1} maxZoom={6}>
                        <Geographies geography={INDIA_TOPO_URL}>
                            {({ geographies }) =>
                                geographies.map((geo) => {
                                    const isoCode = geo.properties.ST_NM_ISO || geo.properties.id || geo.id;
                                    const fillColor = getFillColor(isoCode, layer);
                                    const mapping = BASE_MAPPING[isoCode];
                                    const locked = mapping && isBook3(mapping.topicId);

                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            onMouseEnter={(e) => handleMouseEnter(geo, e)}
                                            onMouseLeave={handleMouseLeave}
                                            onClick={() => handleClick(geo)}
                                            style={{
                                                default: {
                                                    fill: fillColor,
                                                    stroke: "#FFFFFF",
                                                    strokeWidth: 0.6,
                                                    outline: "none",
                                                    transition: "fill 300ms ease",
                                                },
                                                hover: {
                                                    fill: locked ? fillColor : layer === 'mastery' ? "#34d399" : fillColor,
                                                    stroke: "#FFFFFF",
                                                    strokeWidth: 1.4,
                                                    outline: "none",
                                                    cursor: locked ? "not-allowed" : "pointer",
                                                    filter: locked ? "none" : "brightness(1.15)",
                                                },
                                                pressed: {
                                                    fill: "#059669",
                                                    outline: "none",
                                                },
                                            }}
                                        />
                                    );
                                })
                            }
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>

                {/* Legend Panel */}
                <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-md rounded-xl border border-border p-3 shadow-sm min-w-[160px]">
                    <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-2">{LAYER_META[layer].label}</p>
                    {layer === 'mastery'      && <MasteryLegend />}
                    {layer === 'physiography' && <PhysioLegend />}
                    {layer === 'rainfall'     && <RainfallLegend />}
                    {layer === 'minerals'     && <MineralLegend />}
                </div>

                {/* Tooltip */}
                <AtlasTooltip {...tooltipState} />
            </div>

            {/* ── UPSC Tip Bar ── */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                <Map className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-emerald-800 dark:text-emerald-200 font-medium leading-relaxed">
                    <span className="font-black">UPSC Tip:</span> Switch to Physiography layer to understand question patterns. 
                    Switch to Rainfall layer before attempting monsoon-related PYQs. Click any state to open the topic deep-reader.
                </p>
            </div>
        </div>
    );
};

export default GeographyAtlasComponent;
