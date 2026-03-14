"use client";

import React, { useState, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup, Line } from 'react-simple-maps';
import { Search, MapPin, Info, Crosshair, Map, Mountain, Waves, Droplets, Target, ShieldQuestion, Trophy, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

// Using a reliable absolute URL for India TopoJSON
const INDIA_TOPO_JSON = "https://raw.githubusercontent.com/datameet/maps/master/Country/india-composite.json";

// --- Types ---
type RiverType = 'himalayan' | 'peninsular';
type ItemType = 'river' | 'dam' | 'flood-zone';

interface RiverData {
    id: string;
    name: string;
    type: RiverType;
    origin: string;
    length: string;
    tributaries: string[];
    states: string[];
    drainage_pattern: string;
    seasonal_nature: string;
    major_dams: string[];
    upsc_fact: string;
    coordinates: [number, number][]; // [longitude, latitude] array for the polyline
}

interface DamData {
    id: string;
    name: string;
    river: string;
    state: string;
    year: string;
    purpose: string;
    capacity: string;
    coordinates: [number, number];
}

// --- Data Definitions ---
const RIVERS: RiverData[] = [
    {
        id: 'ganga',
        name: 'Ganga',
        type: 'himalayan',
        origin: 'Gangotri Glacier (Gomukh), Uttarakhand',
        length: '2,525 km',
        tributaries: ['Yamuna', 'Son', 'Ghaghara', 'Gandak', 'Kosi', 'Ramganga'],
        states: ['Uttarakhand', 'Uttar Pradesh', 'Bihar', 'West Bengal'],
        drainage_pattern: 'Dendritic pattern',
        seasonal_nature: 'Perennial (Glacier-fed & Rain-fed)',
        major_dams: ['Farakka Barrage', 'Tehri Dam (on Bhagirathi)'],
        upsc_fact: 'The Ganga basin covers about 8.6 lakh sq. km in India alone, making it the largest river basin in the country.',
        coordinates: [
            [79.0, 31.0], [78.2, 30.1], [78.1, 29.9], [78.0, 29.0], [79.5, 27.5], [80.3, 26.5], [81.8, 25.4], [83.0, 25.6], [85.1, 25.6], [87.9, 24.8], [88.1, 23.9], [88.3, 22.5]
        ]
    },
    {
        id: 'indus',
        name: 'Indus (Sindhu)',
        type: 'himalayan',
        origin: 'Bokhar Chu (near Mansarovar Lake), Tibet',
        length: '3,180 km (1,114 km in India)',
        tributaries: ['Jhelum', 'Chenab', 'Ravi', 'Beas', 'Sutlej', 'Zaskar', 'Shyok'],
        states: ['Ladakh', 'Jammu & Kashmir'],
        drainage_pattern: 'Antecedent drainage',
        seasonal_nature: 'Perennial',
        major_dams: ['Tarbela Dam (Pak)', 'Mangla Dam (Pak)', 'Bhakra Nangal (on Sutlej)'],
        upsc_fact: 'Under the Indus Water Treaty (1960), India has exclusive rights over the waters of three eastern rivers (Ravi, Beas, Sutlej).',
        coordinates: [
            [81.2, 31.2], [79.0, 32.5], [77.6, 34.1], [76.8, 34.6], [75.8, 35.3], [74.5, 35.6], [73.5, 34.8], [72.0, 33.5]
        ]
    },
    {
        id: 'brahmaputra',
        name: 'Brahmaputra',
        type: 'himalayan',
        origin: 'Chemayungdung Glacier, Tibet',
        length: '2,900 km (916 km in India)',
        tributaries: ['Subansiri', 'Kameng', 'Dhansiri', 'Lohit', 'Teesta', 'Manas'],
        states: ['Arunachal Pradesh', 'Assam'],
        drainage_pattern: 'Braided channel in Assam plain',
        seasonal_nature: 'Perennial (prone to devastating annual floods)',
        major_dams: ['Pagladiya Dam (proposed)'],
        upsc_fact: 'Known as Tsangpo in Tibet and Dihang in Arunachal Pradesh. It carries the largest volume of water among Indian rivers.',
        coordinates: [
            [82.0, 30.5], [85.0, 29.5], [88.0, 29.2], [91.0, 29.3], [94.0, 29.5], [95.5, 29.2], [95.2, 28.0], [93.5, 26.7], [91.5, 26.1], [89.8, 25.8]
        ]
    },
    {
        id: 'narmada',
        name: 'Narmada',
        type: 'peninsular',
        origin: 'Amarkantak Plateau, Madhya Pradesh',
        length: '1,312 km',
        tributaries: ['Barna', 'Tawa', 'Hiran', 'Orsang', 'Kolar'],
        states: ['Madhya Pradesh', 'Maharashtra', 'Gujarat'],
        drainage_pattern: 'Trellis / Rift Valley drainage',
        seasonal_nature: 'Seasonal (Rain-fed)',
        major_dams: ['Sardar Sarovar', 'Indira Sagar', 'Omkareshwar'],
        upsc_fact: 'It is the longest west-flowing river in India and flows through a rift valley between the Vindhya and Satpura ranges.',
        coordinates: [
            [81.7, 22.7], [79.9, 23.1], [78.5, 22.8], [76.5, 22.5], [74.5, 22.0], [73.0, 21.7]
        ]
    },
    {
        id: 'godavari',
        name: 'Godavari',
        type: 'peninsular',
        origin: 'Trimbakeshwar (Nashik), Maharashtra',
        length: '1,465 km',
        tributaries: ['Purna', 'Wardha', 'Pranhita', 'Manjira', 'Indravati', 'Sabari'],
        states: ['Maharashtra', 'Telangana', 'Andhra Pradesh', 'Chhattisgarh', 'Odisha'],
        drainage_pattern: 'Dendritic pattern',
        seasonal_nature: 'Seasonal',
        major_dams: ['Polavaram Project', 'Jayakwadi Dam', 'Sriram Sagar'],
        upsc_fact: 'Often referred to as the "Dakshin Ganga" (Ganges of the South), it is the largest river system of Peninsular India.',
        coordinates: [
            [73.5, 19.9], [75.0, 19.5], [77.5, 18.8], [79.5, 18.5], [81.0, 17.5], [82.2, 16.5]
        ]
    },
    {
        id: 'krishna',
        name: 'Krishna',
        type: 'peninsular',
        origin: 'Mahabaleshwar, Maharashtra',
        length: '1,400 km',
        tributaries: ['Tungabhadra', 'Koyna', 'Bhima', 'Ghataprabha', 'Malaprabha', 'Musi'],
        states: ['Maharashtra', 'Karnataka', 'Telangana', 'Andhra Pradesh'],
        drainage_pattern: 'Dendritic',
        seasonal_nature: 'Seasonal',
        major_dams: ['Nagarjuna Sagar', 'Srisailam', 'Almatti Dam'],
        upsc_fact: 'The Tungabhadra river, its largest tributary, was the lifeline of the historical Vijayanagara Empire.',
        coordinates: [
            [73.6, 17.9], [75.5, 16.5], [77.0, 16.2], [79.0, 16.5], [80.5, 16.2], [81.0, 15.8]
        ]
    },
    {
        id: 'kaveri',
        name: 'Kaveri (Cauvery)',
        type: 'peninsular',
        origin: 'Talakaveri (Brahmagiri Hills), Karnataka',
        length: '800 km',
        tributaries: ['Harangi', 'Hemavati', 'Kabini', 'Bhavani', 'Arkavathi', 'Amaravati'],
        states: ['Karnataka', 'Tamil Nadu', 'Kerala (tributaries)', 'Puducherry'],
        drainage_pattern: 'Dendritic',
        seasonal_nature: 'Relatively perennial (receives rainfall from both SW and NE monsoons)',
        major_dams: ['Krishna Raja Sagara (KRS)', 'Mettur Dam', 'Grand Anicut (Kallanai)'],
        upsc_fact: 'Unlike other peninsular rivers, the Kaveri brings water all year round because its upper catchment receives rainfall from SW monsoon and lower catchment from NE monsoon.',
        coordinates: [
            [75.6, 12.3], [76.5, 12.4], [77.5, 11.4], [78.5, 11.0], [79.5, 10.8], [79.8, 11.1]
        ]
    },
    {
        id: 'mahanadi',
        name: 'Mahanadi',
        type: 'peninsular',
        origin: 'Sihawa (Raipur district), Chhattisgarh',
        length: '851 km',
        tributaries: ['Seonath', 'Hasdeo', 'Mand', 'Ib', 'Jonk', 'Tel'],
        states: ['Chhattisgarh', 'Odisha'],
        drainage_pattern: 'Radial (in upper reaches) / Dendritic',
        seasonal_nature: 'Seasonal (high flood fluctuations)',
        major_dams: ['Hirakud Dam', 'Ravishankar Sagar'],
        upsc_fact: 'The Hirakud Dam on the Mahanadi represents the longest earthen dam in the world.',
        coordinates: [
            [81.9, 20.3], [82.5, 20.7], [83.5, 21.5], [84.0, 21.0], [85.5, 20.5], [86.7, 20.2]
        ]
    }
];

const DAMS: DamData[] = [
    {
        id: 'bhakra', name: 'Bhakra-Nangal', river: 'Sutlej', state: 'Himachal Pradesh / Punjab', year: '1963', purpose: 'Power & Irrigation', capacity: '9.34 billion c.m.', coordinates: [76.4, 31.4]
    },
    {
        id: 'tehri', name: 'Tehri Dam', river: 'Bhagirathi (Ganga)', state: 'Uttarakhand', year: '2006', purpose: 'Power & Water Supply', capacity: '3.54 billion c.m.', coordinates: [78.4, 30.3]
    },
    {
        id: 'sardar', name: 'Sardar Sarovar', river: 'Narmada', state: 'Gujarat', year: '2017', purpose: 'Power & Irrigation', capacity: '9.50 billion c.m.', coordinates: [73.7, 21.8]
    },
    {
        id: 'hirakud', name: 'Hirakud Dam', river: 'Mahanadi', state: 'Odisha', year: '1957', purpose: 'Flood Control & Power', capacity: '5.89 billion c.m.', coordinates: [83.8, 21.5]
    },
    {
        id: 'nagarjuna', name: 'Nagarjuna Sagar', river: 'Krishna', state: 'Telangana / Andhra Pradesh', year: '1967', purpose: 'Power & Irrigation', capacity: '11.4 billion c.m.', coordinates: [79.3, 16.5]
    },
    {
        id: 'mettur', name: 'Mettur Dam', river: 'Kaveri', state: 'Tamil Nadu', year: '1934', purpose: 'Irrigation & Power', capacity: '2.64 billion c.m.', coordinates: [77.8, 11.8]
    }
];

// Flood zones represented as rough bounding box centers and radii for visualization
const FLOOD_ZONES = [
    { id: 'brahmaputra_flood', name: 'Brahmaputra Valley', coordinates: [93.0, 26.5], radius: 15 },
    { id: 'bihar_flood', name: 'Bihar Plains (Kosi)', coordinates: [86.0, 26.0], radius: 10 },
];


export default function RiverSystemExplorer() {
    const [filter, setFilter] = useState<'all' | 'himalayan' | 'peninsular'>('all');
    const [showDams, setShowDams] = useState(true);
    const [showFloodZones, setShowFloodZones] = useState(false);
    
    const [selectedItem, setSelectedItem] = useState<{type: ItemType, data: any} | null>(null);

    const handleSelectRiver = (river: RiverData) => {
        setSelectedItem({ type: 'river', data: river });
    };

    const handleSelectDam = (dam: DamData) => {
        setSelectedItem({ type: 'dam', data: dam });
    };

    const filteredRivers = useMemo(() => {
        if (filter === 'all') return RIVERS;
        return RIVERS.filter(r => r.type === filter);
    }, [filter]);

    return (
        <div className="w-full h-full min-h-[700px] bg-slate-950 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col font-sans relative">
            
            {/* Top Header & Toggles */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border-b border-white/10 p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-10 relative">
                <div className="flex flex-col">
                    <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <div className="relative">
                            <Waves className="w-6 h-6 text-blue-400" />
                            <div className="absolute inset-0 blur-md bg-blue-400/30 rounded-full" />
                        </div>
                        River System Explorer
                    </h2>
                    <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">Drainage Patterns & Projects</p>
                </div>

                <div className="flex-1 flex flex-wrap items-center gap-3 justify-end">
                    <div className="bg-slate-900/50 p-1 rounded-xl flex items-center gap-1 border border-white/10">
                        <button 
                            className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${filter === 'all' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:text-white'}`}
                            onClick={() => setFilter('all')}
                        >
                            All Rivers
                        </button>
                        <button 
                            className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all gap-2 flex items-center ${filter === 'himalayan' ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30' : 'text-slate-400 hover:text-white'}`}
                            onClick={() => setFilter('himalayan')}
                        >
                            <div className="w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_6px_rgba(125,211,252,0.8)]" /> Himalayan
                        </button>
                        <button 
                            className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all gap-2 flex items-center ${filter === 'peninsular' ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30' : 'text-slate-400 hover:text-white'}`}
                            onClick={() => setFilter('peninsular')}
                        >
                            <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]" /> Peninsular
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            className={`h-10 rounded-xl px-4 text-xs font-black uppercase tracking-widest border-white/10 transition-all ${showDams ? 'bg-cyan-900/40 text-cyan-300 border-cyan-500/30 shadow-[0_0_12px_rgba(34,211,238,0.15)]' : 'text-slate-500 bg-transparent'}`}
                            onClick={() => setShowDams(!showDams)}
                        >
                            <Droplets className="w-4 h-4 mr-2 text-cyan-400" /> Major Dams
                        </Button>
                        <Button
                            variant="outline"
                            className={`h-10 rounded-xl px-4 text-xs font-black uppercase tracking-widest border-white/10 transition-all ${showFloodZones ? 'bg-rose-900/40 text-rose-300 border-rose-500/30 shadow-[0_0_12px_rgba(251,113,133,0.15)]' : 'text-slate-500 bg-transparent'}`}
                            onClick={() => setShowFloodZones(!showFloodZones)}
                        >
                            Flood Zones
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Visuals & Side Panel */}
            <div className="flex-1 flex flex-col md:flex-row relative">
                
                {/* SVG MAP ENGINE (65%) */}
                <div className="flex-1 relative overflow-hidden flex items-center justify-center"
                     style={{ background: 'radial-gradient(ellipse at 55% 35%, #0c1929 0%, #060d17 50%, #020409 100%)' }}>
                    
                    {/* Atmospheric terrain gradient overlay */}
                    <div className="absolute inset-0 pointer-events-none"
                         style={{ background: 'radial-gradient(ellipse at 78% 25%, rgba(56,189,248,0.04) 0%, transparent 50%), radial-gradient(ellipse at 30% 65%, rgba(251,146,60,0.03) 0%, transparent 40%)' }} />
                    
                    {/* Subtle topographic grid */}
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
                         style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.6) 0.5px, transparent 0)', backgroundSize: '32px 32px' }} />

                    {/* Ambient glow spots for depth */}
                    <div className="absolute top-[15%] right-[25%] w-64 h-64 bg-sky-500/[0.03] rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-[30%] left-[15%] w-48 h-48 bg-amber-500/[0.02] rounded-full blur-3xl pointer-events-none" />

                    <ComposableMap
                        projection="geoMercator"
                        projectionConfig={{ scale: 1100, center: [80, 22] }}
                        className="w-full h-full max-h-[800px]"
                    >
                        {/* SVG Defs for Premium Effects */}
                        <defs>
                            {/* Himalayan River Gradient */}
                            <linearGradient id="himalayanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#7dd3fc" />
                                <stop offset="40%" stopColor="#38bdf8" />
                                <stop offset="100%" stopColor="#0ea5e9" />
                            </linearGradient>
                            {/* Peninsular River Gradient */}
                            <linearGradient id="peninsularGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#fcd34d" />
                                <stop offset="40%" stopColor="#fb923c" />
                                <stop offset="100%" stopColor="#f97316" />
                            </linearGradient>
                            {/* Selected River Gradient */}
                            <linearGradient id="selectedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#c084fc" />
                                <stop offset="50%" stopColor="#e879f9" />
                                <stop offset="100%" stopColor="#f0abfc" />
                            </linearGradient>

                            {/* Glow Filter - Himalayan (cyan) */}
                            <filter id="glowHimalayan" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                                <feFlood floodColor="#38bdf8" floodOpacity="0.6" result="color" />
                                <feComposite in="color" in2="blur" operator="in" result="glow" />
                                <feMerge>
                                    <feMergeNode in="glow" />
                                    <feMergeNode in="glow" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            {/* Glow Filter - Peninsular (amber) */}
                            <filter id="glowPeninsular" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                                <feFlood floodColor="#fb923c" floodOpacity="0.6" result="color" />
                                <feComposite in="color" in2="blur" operator="in" result="glow" />
                                <feMerge>
                                    <feMergeNode in="glow" />
                                    <feMergeNode in="glow" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            {/* Glow Filter - Selected (purple/white) */}
                            <filter id="glowSelected" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                                <feFlood floodColor="#e879f9" floodOpacity="0.8" result="color" />
                                <feComposite in="color" in2="blur" operator="in" result="glow" />
                                <feMerge>
                                    <feMergeNode in="glow" />
                                    <feMergeNode in="glow" />
                                    <feMergeNode in="glow" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            {/* Glow Filter - Dam (cyan) */}
                            <filter id="glowDam" x="-100%" y="-100%" width="300%" height="300%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                                <feFlood floodColor="#22d3ee" floodOpacity="0.7" result="color" />
                                <feComposite in="color" in2="blur" operator="in" result="glow" />
                                <feMerge>
                                    <feMergeNode in="glow" />
                                    <feMergeNode in="glow" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            {/* Glow Filter - Flood Zone (red) */}
                            <filter id="glowFlood" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                                <feFlood floodColor="#ef4444" floodOpacity="0.4" result="color" />
                                <feComposite in="color" in2="blur" operator="in" result="glow" />
                                <feMerge>
                                    <feMergeNode in="glow" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            
                            {/* Radial gradient for dam markers */}
                            <radialGradient id="damGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
                                <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.4" />
                            </radialGradient>
                            
                            {/* Radial gradient for flood zones */}
                            <radialGradient id="floodGradient" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.35" />
                                <stop offset="50%" stopColor="#ef4444" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                            </radialGradient>
                            
                            {/* Water shimmer for origin points */}
                            <radialGradient id="originGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                                <stop offset="40%" stopColor="#7dd3fc" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                            </radialGradient>
                        </defs>

                        <ZoomableGroup zoom={1} minZoom={1} maxZoom={8} translateExtent={[[0, 0], [800, 600]]}>
                            
                            {/* Base India Topo JSON — Enhanced with subtle terrain glow */}
                            <Geographies geography={INDIA_TOPO_JSON}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill="#0c1525"
                                            stroke="#1e3a5f"
                                            strokeWidth={0.6}
                                            style={{
                                                default: { outline: 'none' },
                                                hover: { fill: '#111d32', outline: 'none', stroke: '#2563eb', strokeWidth: 0.8 },
                                                pressed: { outline: 'none' },
                                            }}
                                        />
                                    ))
                                }
                            </Geographies>

                            {/* Flood Zones Overlay — Enhanced with concentric glowing rings */}
                            {showFloodZones && FLOOD_ZONES.map((zone) => (
                                <Marker key={zone.id} coordinates={zone.coordinates as [number, number]}>
                                    {/* Outer diffuse glow */}
                                    <circle 
                                        r={zone.radius * 1.8} 
                                        fill="url(#floodGradient)" 
                                        filter="url(#glowFlood)"
                                    />
                                    {/* Animated pulse ring 1 */}
                                    <circle 
                                        r={zone.radius} 
                                        fill="none" 
                                        stroke="#ef4444" 
                                        strokeWidth={0.8} 
                                        opacity={0.6}
                                        className="flood-pulse-ring-1"
                                    />
                                    {/* Animated pulse ring 2 (delayed) */}
                                    <circle 
                                        r={zone.radius * 0.7} 
                                        fill="none" 
                                        stroke="#fca5a5" 
                                        strokeWidth={0.4} 
                                        opacity={0.4}
                                        className="flood-pulse-ring-2"
                                    />
                                    {/* Core hot zone */}
                                    <circle 
                                        r={zone.radius * 0.3} 
                                        fill="#ef4444" 
                                        opacity={0.25}
                                        className="animate-pulse"
                                    />
                                    {/* Crosshair marker */}
                                    <line x1={-zone.radius * 0.15} y1={0} x2={zone.radius * 0.15} y2={0} stroke="#fca5a5" strokeWidth={0.3} opacity={0.5} />
                                    <line x1={0} y1={-zone.radius * 0.15} x2={0} y2={zone.radius * 0.15} stroke="#fca5a5" strokeWidth={0.3} opacity={0.5} />
                                </Marker>
                            ))}

                            {/* Rivers Layer — Premium Glowing Gradient Lines */}
                            {filteredRivers.map((river) => {
                                const isSelected = selectedItem?.type === 'river' && selectedItem.data.id === river.id;
                                const gradientId = isSelected ? 'url(#selectedGrad)' : (river.type === 'himalayan' ? 'url(#himalayanGrad)' : 'url(#peninsularGrad)');
                                const glowFilter = isSelected ? 'url(#glowSelected)' : (river.type === 'himalayan' ? 'url(#glowHimalayan)' : 'url(#glowPeninsular)');
                                
                                return (
                                    <g key={river.id} onClick={() => handleSelectRiver(river)} style={{ cursor: 'pointer' }}>
                                        {/* Hit area for easier clicking */}
                                        <Line
                                            coordinates={river.coordinates}
                                            stroke="transparent"
                                            strokeWidth={15}
                                            style={{ outline: "none" }}
                                        />
                                        {/* Outer glow halo (wide, soft) */}
                                        <Line
                                            coordinates={river.coordinates}
                                            stroke={isSelected ? '#e879f9' : (river.type === 'himalayan' ? '#38bdf8' : '#fb923c')}
                                            strokeWidth={isSelected ? 8 : 5}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{ outline: "none", opacity: isSelected ? 0.15 : 0.1 }}
                                            filter={glowFilter}
                                        />
                                        {/* Main gradient river line */}
                                        <Line
                                            coordinates={river.coordinates}
                                            stroke={gradientId}
                                            strokeWidth={isSelected ? 3.5 : 2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{ outline: "none" }}
                                            filter={glowFilter}
                                        />
                                        {/* Animated flow particles (white dash overlay) */}
                                        <Line
                                            coordinates={river.coordinates}
                                            stroke="rgba(255,255,255,0.5)"
                                            strokeWidth={isSelected ? 1.5 : 0.8}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeDasharray="2 12"
                                            className="river-flow-particles"
                                            style={{ pointerEvents: 'none' }}
                                        />
                                        {/* Secondary animated shimmer (faster, offset) */}
                                        <Line
                                            coordinates={river.coordinates}
                                            stroke="rgba(255,255,255,0.3)"
                                            strokeWidth={isSelected ? 1 : 0.5}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeDasharray="1 18"
                                            className="river-flow-shimmer"
                                            style={{ pointerEvents: 'none' }}
                                        />
                                        {/* Origin point glow marker */}
                                        <Marker coordinates={river.coordinates[0]}>
                                            <circle r={isSelected ? 4 : 2.5} fill="url(#originGlow)" className="origin-pulse" />
                                            <circle r={isSelected ? 1.5 : 1} fill="#ffffff" opacity={0.9} />
                                        </Marker>
                                        {/* River name label at midpoint */}
                                        {isSelected && (
                                            <Marker coordinates={river.coordinates[Math.floor(river.coordinates.length / 2)]}>
                                                <text 
                                                    textAnchor="middle" 
                                                    y={-8} 
                                                    style={{ 
                                                        fontSize: '7px', 
                                                        fontWeight: 900, 
                                                        fill: '#f0abfc', 
                                                        letterSpacing: '0.15em',
                                                        textTransform: 'uppercase',
                                                        filter: 'drop-shadow(0 0 4px rgba(232,121,249,0.6))'
                                                    }}
                                                >
                                                    {river.name}
                                                </text>
                                            </Marker>
                                        )}
                                    </g>
                                );
                            })}

                            {/* Premium Animation Styles */}
                            <style>
                                {`
                                @keyframes particle-flow {
                                    from { stroke-dashoffset: 28; }
                                    to { stroke-dashoffset: 0; }
                                }
                                @keyframes shimmer-flow {
                                    from { stroke-dashoffset: 38; }
                                    to { stroke-dashoffset: 0; }
                                }
                                @keyframes origin-glow {
                                    0%, 100% { opacity: 0.7; transform: scale(1); }
                                    50% { opacity: 1; transform: scale(1.3); }
                                }
                                @keyframes flood-ring-expand {
                                    0% { opacity: 0.6; transform: scale(1); }
                                    100% { opacity: 0; transform: scale(1.5); }
                                }
                                @keyframes flood-ring-expand-2 {
                                    0% { opacity: 0.4; transform: scale(1); }
                                    100% { opacity: 0; transform: scale(1.8); }
                                }
                                @keyframes dam-beacon {
                                    0%, 100% { opacity: 0.8; r: 5; }
                                    50% { opacity: 0.3; r: 10; }
                                }
                                .river-flow-particles {
                                    animation: particle-flow 1.2s linear infinite;
                                }
                                .river-flow-shimmer {
                                    animation: shimmer-flow 0.8s linear infinite;
                                }
                                .origin-pulse {
                                    animation: origin-glow 2.5s ease-in-out infinite;
                                }
                                .flood-pulse-ring-1 {
                                    animation: flood-ring-expand 2s ease-out infinite;
                                    transform-origin: center;
                                }
                                .flood-pulse-ring-2 {
                                    animation: flood-ring-expand-2 2s ease-out infinite;
                                    animation-delay: 0.8s;
                                    transform-origin: center;
                                }
                                .dam-beacon-ring {
                                    animation: dam-beacon 2s ease-in-out infinite;
                                }
                                `}
                            </style>

                            {/* Dams Layer — Enhanced with Glowing Beacons */}
                            {showDams && DAMS.map((dam) => {
                                const isSelected = selectedItem?.type === 'dam' && selectedItem.data.id === dam.id;
                                return (
                                    <Marker 
                                        key={dam.id} 
                                        coordinates={dam.coordinates}
                                        onClick={() => handleSelectDam(dam)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <g transform={`scale(${isSelected ? 1.5 : 1})`} className="transition-transform duration-200">
                                            {/* Outer beacon ring (always visible) */}
                                            <circle r={isSelected ? 10 : 6} fill="none" stroke="#22d3ee" strokeWidth={0.3} opacity={0.4} className="dam-beacon-ring" />
                                            {/* Glow halo */}
                                            <circle r={4} fill="url(#damGlow)" filter="url(#glowDam)" opacity={isSelected ? 0.9 : 0.6} />
                                            {/* Core diamond shape */}
                                            <polygon 
                                                points="0,-4 4,0 0,4 -4,0" 
                                                fill={isSelected ? "#ffffff" : "#22d3ee"} 
                                                stroke={isSelected ? "#e879f9" : "#06b6d4"} 
                                                strokeWidth={0.6}
                                            />
                                            {/* Inner diamond */}
                                            <polygon 
                                                points="0,-2 2,0 0,2 -2,0" 
                                                fill="#0c1929" 
                                            />
                                            {/* Center dot */}
                                            <circle r={0.8} fill="#22d3ee" />
                                            {isSelected && (
                                                <>
                                                    {/* Ping ring on selection */}
                                                    <circle r={8} fill="none" stroke="#e879f9" strokeWidth={0.5} className="animate-ping" opacity={0.6} />
                                                    {/* Label */}
                                                    <text y={-10} textAnchor="middle" 
                                                        style={{ fontSize: '5px', fontWeight: 900, fill: '#22d3ee', letterSpacing: '0.1em', textTransform: 'uppercase', filter: 'drop-shadow(0 0 3px rgba(34,211,238,0.5))' }}>
                                                        {dam.name}
                                                    </text>
                                                </>
                                            )}
                                        </g>
                                    </Marker>
                                );
                            })}

                        </ZoomableGroup>
                    </ComposableMap>

                    {/* HUD Legend Overlay — Enhanced with glow accents */}
                    <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col gap-3.5 z-10 shadow-2xl shadow-black/40">
                        <h4 className="text-[9px] font-black uppercase text-blue-400/80 tracking-[0.2em] whitespace-nowrap flex items-center gap-2">
                            <div className="w-1.5 h-4 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                            Map Legend
                        </h4>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-1 rounded-full bg-gradient-to-r from-sky-300 to-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                            <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Himalayan River</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-1 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
                            <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Peninsular River</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-3 h-3 bg-cyan-400 rotate-45 rounded-[1px] shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                                <div className="absolute inset-0 w-3 h-3 bg-cyan-400/30 rotate-45 rounded-[1px] blur-sm" />
                            </div>
                            <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Major Project / Dam</span>
                        </div>
                        {showFloodZones && (
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-3 h-3 bg-rose-500/30 rounded-full border border-rose-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]" />
                                    <div className="absolute inset-0 w-3 h-3 bg-rose-500/10 rounded-full blur-sm animate-ping" />
                                </div>
                                <span className="text-[10px] uppercase font-bold text-rose-300 tracking-wider">Flood Prone Region</span>
                            </div>
                        )}
                        <div className="flex items-center gap-3 pt-1 border-t border-white/5 mt-1">
                            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.5)]" />
                            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">River Origin Point</span>
                        </div>
                    </div>

                    {/* Ambient floating particles overlay */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(6)].map((_, i) => (
                            <div 
                                key={i}
                                className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
                                style={{
                                    left: `${15 + i * 14}%`,
                                    top: `${20 + (i % 3) * 25}%`,
                                    animation: `float-particle ${4 + i * 0.5}s ease-in-out infinite`,
                                    animationDelay: `${i * 0.7}s`
                                }}
                            />
                        ))}
                        <style>{`
                            @keyframes float-particle {
                                0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
                                50% { transform: translateY(-15px) scale(1.5); opacity: 0.4; }
                            }
                        `}</style>
                    </div>
                </div>

                {/* DETAILS SIDE PANEL (35%) */}
                <AnimatePresence mode="wait">
                    {selectedItem ? (
                        <motion.div 
                            key={selectedItem.data.id}
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute right-0 top-0 bottom-0 w-full md:w-[400px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
                        >
                            <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
                                
                                {selectedItem.type === 'river' && (
                                    <>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg relative ${selectedItem.data.type === 'himalayan' ? 'bg-sky-500/20 text-sky-400' : 'bg-amber-500/20 text-amber-500'}`}>
                                                <Waves className="w-6 h-6 relative z-10" />
                                                <div className={`absolute inset-0 rounded-2xl blur-md ${selectedItem.data.type === 'himalayan' ? 'bg-sky-500/20' : 'bg-amber-500/20'}`} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-black text-white leading-tight">{selectedItem.data.name}</h3>
                                                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">{selectedItem.data.type} System</p>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <FactCard title="Origin" value={selectedItem.data.origin} />
                                            
                                            <div className="grid grid-cols-2 gap-4">
                                                <FactCard title="Total Length" value={selectedItem.data.length} />
                                                <FactCard title="Drainage Pattern" value={selectedItem.data.drainage_pattern} />
                                            </div>

                                            <div>
                                                <h4 className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Major Tributaries</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedItem.data.tributaries.map((trib: string) => (
                                                        <Badge key={trib} className="bg-slate-800 text-slate-300 hover:bg-slate-700 font-medium px-3 border-0 rounded-md py-1">
                                                            {trib}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Flows Through</h4>
                                                <p className="text-sm text-slate-300 font-medium leading-relaxed">{selectedItem.data.states.join(' • ')}</p>
                                            </div>

                                            <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-2xl p-5 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                                <h4 className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-3 flex items-center gap-2 relative z-10">
                                                    <Target className="w-4 h-4" /> UPSC Objective Note
                                                </h4>
                                                <p className="text-indigo-100 text-sm leading-relaxed relative z-10">{selectedItem.data.upsc_fact}</p>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {selectedItem.type === 'dam' && (
                                    <>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg bg-cyan-500/20 text-cyan-400 relative">
                                                <Droplets className="w-6 h-6 relative z-10" />
                                                <div className="absolute inset-0 rounded-2xl blur-md bg-cyan-500/20" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-black text-white leading-tight">{selectedItem.data.name}</h3>
                                                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">{selectedItem.data.state}</p>
                                            </div>
                                        </div>

                                        <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-6 space-y-5">
                                            <FactRow label="River" value={selectedItem.data.river} highlight={true} />
                                            <FactRow label="Commissioned" value={selectedItem.data.year} />
                                            <FactRow label="Primary Purpose" value={selectedItem.data.purpose} />
                                            <FactRow label="Reservoir Capacity" value={selectedItem.data.capacity} />
                                        </div>
                                    </>
                                )}

                            </div>
                            
                            <div className="p-4 bg-slate-950 border-t border-white/5">
                                <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-black uppercase tracking-widest text-xs h-12 rounded-xl" onClick={() => setSelectedItem(null)}>
                                    Dismiss Panel
                                </Button>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-[400px] bg-slate-900/80 backdrop-blur-sm border-l border-white/5 z-10 flex-col items-center justify-center p-8 text-center">
                            <div className="w-20 h-20 rounded-full border border-dashed border-slate-600 flex items-center justify-center mb-6 text-slate-500 relative">
                                <Waves className="w-8 h-8 relative z-10" />
                                <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-md animate-pulse" />
                            </div>
                            <h3 className="text-xl font-black text-white uppercase tracking-wider mb-2">Explore River Systems</h3>
                            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                                Click on any <span className="text-sky-400 font-bold">glowing river line</span> or <span className="text-cyan-400 font-bold">diamond marker</span> to view detailed geomorphological data and syllabus relevance.
                            </p>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
}

// UI Helpers
function FactCard({ title, value }: { title: string, value: string }) {
    return (
        <div className="border border-white/5 bg-slate-800/30 p-4 rounded-2xl">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">{title}</p>
            <p className="text-sm font-medium text-slate-200">{value}</p>
        </div>
    );
}

function FactRow({ label, value, highlight = false }: { label: string, value: string, highlight?: boolean }) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">{label}</span>
            <span className={`text-base font-medium ${highlight ? 'text-cyan-400' : 'text-slate-200'}`}>{value}</span>
        </div>
    );
}
