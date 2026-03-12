"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudRain, Sun, Leaf, Thermometer, Wind, Mountain, MapPin, ChevronRight, Info } from 'lucide-react';

interface ClimateZone {
    id: string;
    code: string;
    name: string;
    description: string;
    characteristics: string[];
    regions: string[];
    vegetation: string;
    upscTip: string;
    color: string;
    icon: any;
}

const CLIMATE_ZONES: ClimateZone[] = [
    {
        id: 'tropical-rainforest',
        code: 'Af',
        name: 'Tropical Rainforest',
        description: 'Hot and humid throughout the year. No dry season.',
        characteristics: [
            'Temp > 18°C always',
            'Rainfall > 200cm',
            'Sultry weather'
        ],
        regions: ['Amazon', 'Congo Basin', 'Western Ghats (India)', 'Indonesia'],
        vegetation: 'Evergreen, Multilayered canopy, Epiphytes',
        upscTip: 'Af = f for feucht (moist). High biodiversity but poor lateritic soil.',
        color: 'bg-emerald-600',
        icon: Leaf
    },
    {
        id: 'monsoon',
        code: 'Am',
        name: 'Tropical Monsoon',
        description: 'Seasonal reversal of winds. Distinct dry season.',
        characteristics: [
            'Short dry season',
            'High summer rainfall',
            'Temp peaks before rain'
        ],
        regions: ['Indian Subcontinent', 'Myanmar', 'Thailand', 'Philippines'],
        vegetation: 'Deciduous forests (Teak, Sal)',
        upscTip: 'Most of India is NOT Am (only West Coast). Rest is Aw/Cw/Bsh.',
        color: 'bg-teal-600',
        icon: CloudRain
    },
    {
        id: 'savanna',
        code: 'Aw',
        name: 'Tropical Savanna',
        description: 'Wet summer, dry winter. Transition zone.',
        characteristics: [
            'Tall grass, scattered trees',
            'Distinct wet/dry seasons',
            'High diurnal range'
        ],
        regions: ['Sudan', 'Deccan Plateau (India)', 'Brazil (Campos)'],
        vegetation: 'Grasslands, Park-land landscape, Xerophytes',
        upscTip: 'Called "Big Game Country". Fire resistant trees (Baobab).',
        color: 'bg-yellow-600',
        icon: Sun
    },
    {
        id: 'desert',
        code: 'BWh',
        name: 'Hot Desert',
        description: 'Arid climate dominated by subtropical high pressure.',
        characteristics: [
            'Evaporation > Precipitation',
            'Rainfall < 25cm',
            'Extreme diurnal range'
        ],
        regions: ['Sahara', 'Thar (India)', 'Atacama', 'Kalahari'],
        vegetation: 'Xerophytic (Cactus, Acacia), Ephemeral herds',
        upscTip: 'West coast deserts due to cold currents (e.g., Atacama - Peru Current).',
        color: 'bg-orange-600',
        icon: Thermometer
    },
    {
        id: 'mediterranean',
        code: 'Cs',
        name: 'Mediterranean',
        description: 'Winter rain, summer drought. Unique western margin climate.',
        characteristics: [
            'Shifting wind belts',
            'Dry warm westerlies in summer',
            'Wet westerlies in winter'
        ],
        regions: ['Central Chile', 'California', 'Capetown', 'SW Australia'],
        vegetation: 'Sclerophyll (thick skinned), Olive, Citrus fruits',
        upscTip: 'Orchard farming and Viticulture (Wine). Only climate with dry summer.',
        color: 'bg-purple-600',
        icon: Wind
    },
    {
        id: 'china-type',
        code: 'Cwa',
        name: 'Humid Subtropical',
        description: 'Eastern margin climate. Warm wet summer.',
        characteristics: [
            'Influenced by trade winds',
            'Typhoons common',
            'Temp moderation by sea'
        ],
        regions: ['South China', 'Gangetic Plains (India)', 'SE USA'],
        vegetation: 'Broadleaf evergreen, mixed forests',
        upscTip: 'North Indian Plains are Cwa (Monsoon with dry winter).',
        color: 'bg-green-600',
        icon: Mountain
    }
];

export default function ClimateClassificationViz() {
    const [selectedCode, setSelectedCode] = useState('Am');
    const selected = CLIMATE_ZONES.find(z => z.code === selectedCode) || CLIMATE_ZONES[1];
    const Icon = selected.icon;

    return (
        <div className="bg-card dark:bg-[#111] rounded-2xl border border-border overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-card/20 rounded-lg">
                        <CloudRain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white">Koppen's Classification</h3>
                        <p className="text-xs text-white/70">World Climates & India's Zones</p>
                    </div>
                </div>
            </div>

            {/* Climate Codes Strip */}
            <div className="px-4 py-3 bg-muted dark:bg-[#0a0a0a] border-b border-border overflow-x-auto">
                <div className="flex items-center gap-2 min-w-max">
                    {CLIMATE_ZONES.map((z) => (
                        <button
                            key={z.code}
                            onClick={() => setSelectedCode(z.code)}
                            className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-bold transition-all ${z.code === selectedCode
                                    ? `${z.color} text-white shadow-lg scale-105`
                                    : 'bg-card text-muted-foreground dark:text-muted-foreground border border-border hover:border-border'
                                }`}
                        >
                            {z.code}
                        </button>
                    ))}
                </div>
            </div>

            {/* Selected Zone Details */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selected.code}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-5"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 ${selected.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                                <span className="font-black text-xl">{selected.code}</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-foreground">{selected.name}</h4>
                                <p className="text-sm text-muted-foreground">{selected.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-3">
                            <div>
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Characteristics</span>
                                <ul className="mt-1 space-y-1">
                                    {selected.characteristics.map(c => (
                                        <li key={c} className="text-sm text-muted-foreground dark:text-muted-foreground flex items-center gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${selected.color}`} />
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Vegetation</span>
                                <p className="mt-1 text-sm font-medium text-foreground flex items-center gap-2">
                                    <Leaf className="w-3 h-3 text-green-500" />
                                    {selected.vegetation}
                                </p>
                            </div>
                        </div>

                        <div className="bg-muted dark:bg-[#0a0a0a] rounded-xl p-3">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1 mb-2">
                                <MapPin className="w-3 h-3" /> Key Regions
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {selected.regions.map(r => (
                                    <span key={r} className="px-2 py-1 bg-card border border-border rounded text-xs font-medium text-muted-foreground dark:text-muted-foreground">
                                        {r}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* UPSC Tip */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 flex items-start gap-2 border border-blue-100 dark:border-blue-900/30">
                        <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="text-xs font-bold text-blue-700 dark:text-blue-400 block mb-1">UPSC PRELIMS FACT</span>
                            <p className="text-xs text-blue-800 dark:text-blue-300">{selected.upscTip}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
