"use client";

import React, { useState, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Line, Marker } from 'react-simple-maps';
import { MAJOR_PLATES, MINOR_PLATES, TECTONIC_BOUNDARIES, MAJOR_HAZARDS } from '../data/tectonics-data';
import { TectonicPlate, TectonicBoundary, GeoHazard } from '../data/tectonics-types';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Crosshair, Map, Info, Activity, Mountain, Flame, Zap, Waves, Target, Layers, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const WORLD_TOPO_JSON = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Visual Mapping Constants
const BOUNDARY_COLORS = {
  'divergent': '#22c55e',      // Green (Creates new crust)
  'convergent-oc': '#ef4444',  // Red (Destructive subduction)
  'convergent-cc': '#eab308',  // Yellow (Continental collision / folds)
  'convergent-oo': '#f97316',  // Orange (Island arcs / trenches)
  'transform': '#3b82f6'       // Blue (Conservative sliding)
};

const BOUNDARY_LABELS = {
  'divergent': 'Divergent (Constructive)',
  'convergent-oc': 'Convergent (Oceanic-Continental)',
  'convergent-cc': 'Convergent (Continent-Continent)',
  'convergent-oo': 'Convergent (Oceanic-Oceanic)',
  'transform': 'Transform (Conservative)'
};

// Gradient pairs for each boundary type (light → deep)
const BOUNDARY_GRADIENT_COLORS: Record<string, [string, string, string]> = {
  'divergent': ['#86efac', '#22c55e', '#15803d'],
  'convergent-oc': ['#fca5a5', '#ef4444', '#b91c1c'],
  'convergent-cc': ['#fde047', '#eab308', '#a16207'],
  'convergent-oo': ['#fdba74', '#f97316', '#c2410c'],
  'transform': ['#93c5fd', '#3b82f6', '#1d4ed8']
};

type ViewMode = 'all' | 'plates' | 'boundaries' | 'hazards';

export default function PlateTectonicsSimulator() {
  const [viewMode, setViewMode] = useState<ViewMode>('all');
  const [ringOfFireActive, setRingOfFireActive] = useState(false);
  
  const [selectedBoundary, setSelectedBoundary] = useState<TectonicBoundary | null>(null);
  const [selectedPlate, setSelectedPlate] = useState<TectonicPlate | null>(null);
  const [selectedHazard, setSelectedHazard] = useState<GeoHazard | null>(null);

  const handleClearSelection = () => {
    setSelectedBoundary(null);
    setSelectedPlate(null);
    setSelectedHazard(null);
  };

  return (
    <div className="w-full h-full min-h-[750px] bg-slate-950 rounded-3xl border border-red-900/30 shadow-2xl overflow-hidden flex flex-col font-sans relative">
      
      {/* HUD HEADER — Enhanced with subtle glow accents */}
      <div className="bg-gradient-to-r from-slate-900 via-red-950/30 to-orange-950/20 border-b border-red-500/20 p-5 flex flex-col md:flex-row items-center justify-between gap-4 z-10 relative">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center border border-red-500/30 relative">
            <Layers className="w-6 h-6 text-red-400 relative z-10" />
            <div className="absolute inset-0 rounded-2xl blur-lg bg-red-500/15" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white uppercase tracking-wider">Plate Tectonics Simulator</h2>
            <p className="text-red-300/70 text-[10px] font-bold tracking-widest uppercase">Lithospheric Boundaries & Geo-Hazards</p>
          </div>
        </div>

        {/* Global Action Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          
          <button
            onClick={() => setRingOfFireActive(!ringOfFireActive)}
            className={`flex items-center gap-2 h-10 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              ringOfFireActive 
                ? 'bg-orange-600 hover:bg-orange-500 text-white shadow-[0_0_25px_rgba(234,88,12,0.6)] border border-orange-400 animate-pulse' 
                : 'bg-slate-800 hover:bg-slate-700 text-orange-500 border border-orange-900/50'
            }`}
          >
            <Flame className={`w-4 h-4 ${ringOfFireActive ? 'animate-bounce' : ''}`} />
            {ringOfFireActive ? 'Disable Pacific Ring' : 'Illuminate Ring of Fire'}
          </button>

          <div className="bg-slate-900/80 p-1 rounded-xl border border-white/10 flex">
            {(['all', 'plates', 'boundaries', 'hazards'] as ViewMode[]).map(mode => (
              <button
                key={mode}
                onClick={() => { setViewMode(mode); handleClearSelection(); }}
                className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                  viewMode === mode 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.15)]'
                    : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800 border border-transparent'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row relative">
        
        {/* SVG MAP ENGINE — Enhanced with mantle-inspired background */}
        <div className="flex-1 relative overflow-hidden flex items-center justify-center"
             style={{ background: 'radial-gradient(ellipse at 50% 40%, #150a0a 0%, #0a0a0f 40%, #050507 100%)' }}>
          
          {/* Mantle heat glow overlays */}
          <div className="absolute inset-0 pointer-events-none"
               style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(239,68,68,0.03) 0%, transparent 50%), radial-gradient(ellipse at 25% 35%, rgba(234,88,12,0.02) 0%, transparent 40%)' }} />
          
          {/* Subtle tectonic grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(239,68,68,0.3) 0.5px, transparent 0)', backgroundSize: '30px 30px' }} />

          {/* Ring of Fire ambient glow (Pacific rim) */}
          {ringOfFireActive && (
            <div className="absolute inset-0 pointer-events-none"
                 style={{ background: 'radial-gradient(ellipse at 75% 45%, rgba(234,88,12,0.06) 0%, transparent 40%), radial-gradient(ellipse at 15% 40%, rgba(234,88,12,0.04) 0%, transparent 35%)' }} />
          )}

          <ComposableMap
            projection="geoEquirectangular"
            projectionConfig={{ scale: 130, center: [0, 0] }}
            className="w-full h-full"
          >
            {/* SVG Defs — Premium Glow Filters & Gradients */}
            <defs>
              {/* Boundary type gradients */}
              {Object.entries(BOUNDARY_GRADIENT_COLORS).map(([type, [light, mid, deep]]) => (
                <linearGradient key={`grad-${type}`} id={`boundaryGrad-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={light} />
                  <stop offset="50%" stopColor={mid} />
                  <stop offset="100%" stopColor={deep} />
                </linearGradient>
              ))}

              {/* Ring of Fire gradient */}
              <linearGradient id="ringOfFireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="30%" stopColor="#f97316" />
                <stop offset="60%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>

              {/* Glow filters for each boundary type */}
              {Object.entries(BOUNDARY_COLORS).map(([type, color]) => (
                <filter key={`filter-${type}`} id={`glow-${type}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                  <feFlood floodColor={color} floodOpacity="0.5" result="color" />
                  <feComposite in="color" in2="blur" operator="in" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              ))}

              {/* Ring of Fire intense glow */}
              <filter id="glowRingOfFire" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feFlood floodColor="#f97316" floodOpacity="0.8" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Hazard glow filters */}
              <filter id="glowVolcano" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                <feFlood floodColor="#ea580c" floodOpacity="0.7" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glowEarthquake" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                <feFlood floodColor="#eab308" floodOpacity="0.7" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glowTrench" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                <feFlood floodColor="#0284c7" floodOpacity="0.7" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Plate label text glow */}
              <filter id="glowPlateLabel" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Radial glow for hazard markers */}
              <radialGradient id="volcanoGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ea580c" stopOpacity="1" />
                <stop offset="60%" stopColor="#ea580c" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="earthquakeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#eab308" stopOpacity="1" />
                <stop offset="60%" stopColor="#eab308" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="trenchGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="1" />
                <stop offset="60%" stopColor="#0284c7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
              </radialGradient>
            </defs>

            <ZoomableGroup zoom={1} minZoom={1} maxZoom={5} translateExtent={[[-400, -200], [400, 200]]}>
              
              {/* Base geography — enhanced with deeper tones */}
              <Geographies geography={WORLD_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#12121a"
                      stroke="#252535"
                      strokeWidth={0.6}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: '#1a1a28', outline: 'none', stroke: '#353550', strokeWidth: 0.8 },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* TECTONIC BOUNDARIES — Premium Glowing Gradient Lines */}
              {(viewMode === 'all' || viewMode === 'boundaries') && TECTONIC_BOUNDARIES.map(boundary => {
                const isSelected = selectedBoundary?.id === boundary.id;
                const isHighlightedByRingOfFire = ringOfFireActive && boundary.is_ring_of_fire;
                
                let strokeWidth = isSelected ? 4 : 2;
                if (isHighlightedByRingOfFire) strokeWidth = 5;

                const gradientId = isHighlightedByRingOfFire 
                  ? 'url(#ringOfFireGrad)' 
                  : `url(#boundaryGrad-${boundary.type})`;
                const glowFilter = isHighlightedByRingOfFire 
                  ? 'url(#glowRingOfFire)' 
                  : `url(#glow-${boundary.type})`;
                const rawColor = BOUNDARY_COLORS[boundary.type];

                return (
                  <g key={boundary.id} onClick={() => { handleClearSelection(); setSelectedBoundary(boundary); }} className="cursor-pointer">
                    {boundary.path.map((point, i) => {
                      if (i === boundary.path.length - 1) return null;
                      return (
                        <g key={`${boundary.id}-${i}`}>
                          {/* Invisible hit area */}
                          <Line
                            from={point}
                            to={boundary.path[i + 1]}
                            stroke="transparent"
                            strokeWidth={14}
                          />
                          {/* Outer glow halo */}
                          <Line
                            from={point}
                            to={boundary.path[i + 1]}
                            stroke={rawColor}
                            strokeWidth={isHighlightedByRingOfFire ? 12 : (isSelected ? 10 : 6)}
                            strokeLinecap="round"
                            style={{ opacity: isHighlightedByRingOfFire ? 0.12 : (isSelected ? 0.1 : 0.06) }}
                            filter={glowFilter}
                          />
                          {/* Main gradient boundary line */}
                          <Line
                            from={point}
                            to={boundary.path[i + 1]}
                            stroke={gradientId}
                            strokeWidth={strokeWidth}
                            strokeLinecap="round"
                            opacity={isHighlightedByRingOfFire || isSelected ? 1 : 0.7}
                            filter={glowFilter}
                          />
                          {/* Tectonic stress particles */}
                          <Line
                            from={point}
                            to={boundary.path[i + 1]}
                            stroke={`${rawColor}80`}
                            strokeWidth={isSelected ? 1.2 : 0.6}
                            strokeLinecap="round"
                            strokeDasharray="2 16"
                            className="tectonic-stress-particles"
                            style={{ pointerEvents: 'none' }}
                          />
                        </g>
                      );
                    })}
                  </g>
                );
              })}

              {/* Tectonic animation styles */}
              <style>
                {`
                @keyframes tectonic-stress-flow {
                  from { stroke-dashoffset: 36; }
                  to { stroke-dashoffset: 0; }
                }
                @keyframes seismic-ripple {
                  0% { r: 3; opacity: 0.8; }
                  100% { r: 12; opacity: 0; }
                }
                @keyframes volcanic-glow {
                  0%, 100% { opacity: 0.5; transform: scale(1); }
                  50% { opacity: 1; transform: scale(1.2); }
                }
                @keyframes plate-label-pulse {
                  0%, 100% { opacity: 0.4; }
                  50% { opacity: 0.7; }
                }
                .tectonic-stress-particles {
                  animation: tectonic-stress-flow 2s linear infinite;
                }
                .seismic-ripple-ring {
                  animation: seismic-ripple 1.5s ease-out infinite;
                }
                .volcanic-marker {
                  animation: volcanic-glow 2s ease-in-out infinite;
                }
                .plate-label-glow {
                  animation: plate-label-pulse 3s ease-in-out infinite;
                }
                `}
              </style>

              {/* TECTONIC PLATES (Labels) — Enhanced with glow */}
              {(viewMode === 'all' || viewMode === 'plates') && [...MAJOR_PLATES, ...MINOR_PLATES].map(plate => {
                const isSelected = selectedPlate?.id === plate.id;
                return (
                  <Marker 
                    key={plate.id} 
                    coordinates={plate.label_coord}
                    onClick={() => { handleClearSelection(); setSelectedPlate(plate); }}
                    className="cursor-pointer"
                  >
                    <text
                      textAnchor="middle"
                      style={{ 
                        fontFamily: "system-ui", 
                        fontSize: plate.size === 'major' ? "10px" : "6px", 
                        fill: isSelected ? "#ef4444" : (plate.size === 'major' ? "#52525b" : "#3f3f46"), 
                        fontWeight: "900",
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        transition: "all 0.2s",
                        filter: isSelected ? 'drop-shadow(0 0 6px rgba(239,68,68,0.6))' : (plate.size === 'major' ? 'drop-shadow(0 0 2px rgba(82,82,91,0.3))' : 'none')
                      }}
                      className={isSelected ? "" : "plate-label-glow"}
                    >
                      {plate.name}
                    </text>
                  </Marker>
                );
              })}

              {/* GEO-HAZARDS — Enhanced with Glowing Markers */}
              {(viewMode === 'all' || viewMode === 'hazards') && MAJOR_HAZARDS.map(hazard => {
                const isSelected = selectedHazard?.id === hazard.id;
                
                let iconColor = '#ffffff';
                let glowId = 'url(#glowVolcano)';
                let gradientId = 'url(#volcanoGlow)';
                if (hazard.type === 'volcano') { iconColor = '#ea580c'; glowId = 'url(#glowVolcano)'; gradientId = 'url(#volcanoGlow)'; }
                if (hazard.type === 'earthquake') { iconColor = '#eab308'; glowId = 'url(#glowEarthquake)'; gradientId = 'url(#earthquakeGlow)'; }
                if (hazard.type === 'trench') { iconColor = '#0284c7'; glowId = 'url(#glowTrench)'; gradientId = 'url(#trenchGlow)'; }
                if (hazard.type === 'ridge') { iconColor = '#22c55e'; glowId = 'url(#glow-divergent)'; gradientId = 'url(#volcanoGlow)'; }

                return (
                   <Marker 
                    key={hazard.id} 
                    coordinates={hazard.coord}
                    onClick={() => { handleClearSelection(); setSelectedHazard(hazard); }}
                    className="cursor-pointer"
                  >
                    <motion.g animate={{ scale: isSelected ? 1.5 : 1 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                      {/* Outer glow halo (always visible) */}
                      <circle r={isSelected ? 8 : 5} fill={gradientId} filter={glowId} opacity={isSelected ? 0.6 : 0.3} />
                      {/* Core marker */}
                      <circle r={isSelected ? 4 : 2.5} fill={iconColor} stroke="#000" strokeWidth={0.3} filter={glowId} />
                      {/* Center bright dot */}
                      <circle r={isSelected ? 1.5 : 0.8} fill="#fff" opacity={0.9} />
                      
                      {/* Earthquake-specific: seismic ripple rings */}
                      {isSelected && hazard.type === 'earthquake' && (
                        <>
                          <circle r={5} fill="none" stroke={iconColor} strokeWidth={0.8} className="seismic-ripple-ring" opacity={0.6} />
                          <circle r={5} fill="none" stroke={iconColor} strokeWidth={0.5} className="seismic-ripple-ring" opacity={0.4} style={{ animationDelay: '0.5s' }} />
                        </>
                      )}
                      {/* Volcano-specific: eruption triangle */}
                      {isSelected && hazard.type === 'volcano' && (
                        <g className="volcanic-marker">
                          <path d="M-3,-3 L0,-10 L3,-3 Z" fill="#ef4444" opacity={0.8} />
                          <path d="M-1.5,-4 L0,-8 L1.5,-4 Z" fill="#fbbf24" opacity={0.6} />
                        </g>
                      )}
                      {/* Trench-specific: depth indicator */}
                      {isSelected && hazard.type === 'trench' && (
                        <g>
                          <line x1={0} y1={3} x2={0} y2={10} stroke="#0284c7" strokeWidth={0.6} opacity={0.5} strokeDasharray="1 2" />
                          <circle r={1} cy={10} fill="#0284c7" opacity={0.4} />
                        </g>
                      )}
                    </motion.g>
                   </Marker>
                );
              })}

            </ZoomableGroup>
          </ComposableMap>

          {/* Map Legend Overlay — Enhanced with glow accents */}
          <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 hidden lg:block shadow-2xl shadow-black/40">
            <h4 className="text-[9px] font-black uppercase text-red-400/80 tracking-[0.2em] whitespace-nowrap flex items-center gap-2 mb-3">
              <div className="w-1.5 h-4 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              Boundary Types
            </h4>
            <div className="flex flex-col gap-2.5">
              {Object.entries(BOUNDARY_COLORS).map(([type, color]) => (
                <div key={type} className="flex items-center gap-3">
                  <div className="w-8 h-1 rounded-full shadow-[0_0_8px_var(--glow-color)]" 
                       style={{ background: `linear-gradient(to right, ${BOUNDARY_GRADIENT_COLORS[type][0]}, ${BOUNDARY_GRADIENT_COLORS[type][2]})`, '--glow-color': `${color}80` } as React.CSSProperties} />
                  <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">{BOUNDARY_LABELS[type as keyof typeof BOUNDARY_LABELS]}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/5 mt-3 pt-3 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(234,88,12,0.5)]" />
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Volcano</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Earthquake Zone</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-sky-600 shadow-[0_0_8px_rgba(2,132,199,0.5)]" />
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Trench</span>
              </div>
            </div>
          </div>

          {/* Ambient tectonic particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${2 + (i % 2)}px`,
                  height: `${2 + (i % 2)}px`,
                  background: i % 3 === 0 ? 'rgba(239,68,68,0.15)' : i % 3 === 1 ? 'rgba(234,88,12,0.12)' : 'rgba(234,179,8,0.1)',
                  left: `${10 + i * 14}%`,
                  top: `${20 + (i % 3) * 25}%`,
                  animation: `tectonic-float ${6 + i * 0.7}s ease-in-out infinite`,
                  animationDelay: `${i * 0.6}s`
                }}
              />
            ))}
            <style>{`
              @keyframes tectonic-float {
                0%, 100% { transform: translateY(0px) scale(1); opacity: 0.1; }
                50% { transform: translateY(-12px) scale(1.4); opacity: 0.3; }
              }
            `}</style>
          </div>
        </div>

        {/* DYNAMIC SIDE PANEL (40%) */}
        <AnimatePresence mode="wait">
          
          {/* BOUNDARY SELECTED */}
          {selectedBoundary && (
            <motion.div 
              key="panel-boundary"
              initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "100%", opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[450px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
            >
              <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                
                <Badge 
                  className="mb-4 text-white border-0 font-black px-3 py-1 uppercase tracking-widest text-[10px]" 
                  style={{ backgroundColor: BOUNDARY_COLORS[selectedBoundary.type], boxShadow: `0 0 15px ${BOUNDARY_COLORS[selectedBoundary.type]}40` }}
                >
                  {BOUNDARY_LABELS[selectedBoundary.type]}
                </Badge>

                <h3 className="text-3xl font-black text-white leading-none tracking-tighter mb-2">{selectedBoundary.name}</h3>
                
                <div className="flex items-center gap-2 mb-8 text-slate-400 uppercase tracking-widest text-[10px] font-bold">
                  <span>Plates Involved: <span className="text-white">{selectedBoundary.plates_involved.join(' × ').toUpperCase()}</span></span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Target className="w-3 h-3" /> Geomorphological Process
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{selectedBoundary.description}</p>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                    <h4 className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Mountain className="w-3 h-3" /> Landforms Created
                    </h4>
                    <ul className="space-y-2">
                      {selectedBoundary.landforms.map((lf, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_4px_var(--dot-color)]" style={{ backgroundColor: BOUNDARY_COLORS[selectedBoundary.type], '--dot-color': `${BOUNDARY_COLORS[selectedBoundary.type]}80` } as React.CSSProperties} />
                          {lf}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-950/20 border-l-2 p-4 rounded-r-xl relative overflow-hidden" style={{ borderLeftColor: BOUNDARY_COLORS[selectedBoundary.type] }}>
                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: `${BOUNDARY_COLORS[selectedBoundary.type]}10` }} />
                    <h4 className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-2 flex items-center gap-2 relative z-10">
                      <ShieldAlert className="w-3 h-3" /> UPSC Relevance
                    </h4>
                    <p className="text-red-100/80 text-sm leading-relaxed font-medium relative z-10">{selectedBoundary.upsc_relevance}</p>
                  </div>
                </div>

              </div>
              <PanelFooter onClose={handleClearSelection} />
            </motion.div>
          )}

          {/* PLATE SELECTED */}
          {selectedPlate && !selectedBoundary && (
            <motion.div 
               key="panel-plate"
               initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "100%", opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
               className="absolute right-0 top-0 bottom-0 w-full md:w-[400px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
            >
               <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                  <Badge className={`mb-4 border-0 font-black px-3 py-1 uppercase tracking-widest text-[10px] ${selectedPlate.size === 'major' ? 'bg-indigo-500/20 text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.15)]' : 'bg-slate-700 text-slate-300'}`}>
                    {selectedPlate.size} Lithospheric Plate
                  </Badge>
                  <h3 className="text-3xl font-black text-white leading-none tracking-tighter mb-6">{selectedPlate.name}</h3>
                  <div className="bg-slate-950 p-5 rounded-2xl border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <h4 className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-3 flex items-center gap-2 relative z-10">
                      <Layers className="w-3 h-3" /> Plate Characteristics
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed relative z-10">{selectedPlate.description}</p>
                  </div>
               </div>
               <PanelFooter onClose={handleClearSelection} />
            </motion.div>
          )}

          {/* HAZARD SELECTED */}
          {selectedHazard && !selectedPlate && !selectedBoundary && (
             <motion.div 
                key="panel-hazard"
                initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "100%", opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute right-0 top-0 bottom-0 w-full md:w-[400px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
             >
                <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg shrink-0 mb-6 bg-orange-500/20 text-orange-400 border border-orange-500/30 relative">
                      <div className="relative z-10">
                        {selectedHazard.type === 'earthquake' ? <Activity className="w-8 h-8" /> : 
                         selectedHazard.type === 'volcano' ? <Flame className="w-8 h-8" /> : 
                         <Waves className="w-8 h-8" />}
                      </div>
                      <div className="absolute inset-0 rounded-2xl blur-md bg-orange-500/15" />
                    </div>
                    <Badge className="bg-orange-600 text-white mb-2 uppercase tracking-widest border-0 text-[9px] font-black shadow-[0_0_10px_rgba(234,88,12,0.2)]">{selectedHazard.type}</Badge>
                    <h3 className="text-3xl font-black text-white leading-none tracking-tighter mb-4">{selectedHazard.name}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">{selectedHazard.description}</p>
                </div>
                <PanelFooter onClose={handleClearSelection} />
             </motion.div>
          )}

          {/* DEFAULT PLACEHOLDER */}
          {!selectedBoundary && !selectedPlate && !selectedHazard && (
             <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-[450px] bg-slate-900/40 backdrop-blur-md border-l border-white/5 z-10 flex-col items-center justify-center p-8 text-center pointer-events-none transition-opacity duration-300">
              <div className="w-24 h-24 rounded-full bg-red-950/50 border border-red-900/50 flex items-center justify-center mb-6 relative">
                <Target className="w-10 h-10 text-red-500/50 relative z-10" />
                <div className="absolute inset-0 rounded-full bg-red-500/5 blur-md animate-pulse" />
              </div>
              <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest mb-3">Tectonics Matrix</h3>
              <p className="text-xs text-slate-500 font-bold tracking-wider leading-relaxed max-w-xs">
                Select any <span className="text-green-400">glowing fault line</span>, <span className="text-slate-300">plate label</span>, or <span className="text-orange-400">hazard marker</span> to visualize the active lithosphere dynamics.
              </p>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

function PanelFooter({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-4 bg-slate-950 border-t border-white/5 flex gap-2">
      <Button className="flex-1 bg-white hover:bg-slate-200 text-black font-black uppercase tracking-widest text-xs h-12 rounded-xl">
        Review Notes <ChevronRight className="w-4 h-4 ml-2" />
      </Button>
      <Button variant="outline" className="w-12 h-12 rounded-xl border-slate-700 text-slate-400 hover:text-white" onClick={onClose}>
        <Crosshair className="w-4 h-4" />
      </Button>
    </div>
  );
}
