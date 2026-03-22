"use client";

import React, { useState, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker, Line } from 'react-simple-maps';
import { MINERAL_BELTS, RESOURCE_DEPOSITS } from '../data/resource-data';
import { ResourceDeposit, MineralBelt, ResourceCategory } from '../data/resource-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Gem, Crosshair, Target, Info, Layers, ChevronRight, Flame, Atom, CircleDot, Mountain, Pickaxe, Factory, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const INDIA_TOPO_JSON = "https://cdn.jsdelivr.net/npm/india-topojson@1.0.0/india.json";

// Enhanced vibrant color palette for resources
const CATEGORY_COLORS: Record<ResourceCategory, string> = {
  metallic: '#fbbf24',    // Bright Amber/Gold
  'non-metallic': '#a78bfa', // Bright Violet/Amethyst
  energy: '#ef4444',      // Bright Red/Fire
  atomic: '#22d3ee'       // Cyan/Uranium glow
};

const CATEGORY_ICONS: Record<ResourceCategory, React.ReactNode> = {
  metallic: <Gem className="w-4 h-4" />,
  'non-metallic': <Mountain className="w-4 h-4" />,
  energy: <Flame className="w-4 h-4" />,
  atomic: <Atom className="w-4 h-4" />
};

const CATEGORY_LABELS: Record<ResourceCategory, string> = {
  metallic: 'Metallic Minerals',
  'non-metallic': 'Non-Metallic Minerals',
  energy: 'Energy Resources',
  atomic: 'Atomic Minerals'
};

const BELT_GRADIENTS: Record<string, [string, string]> = {
  'chotanagpur': ['#b45309', '#f59e0b'],
  'dharwar': ['#4c1d95', '#8b5cf6'],
  'aravali': ['#065f46', '#34d399'],
  'himalayan': ['#0f766e', '#2dd4bf'],
  'default': ['#9a3412', '#ea580c']
};

type FilterMode = 'all' | ResourceCategory;

export default function ResourceAtlasSimulator() {
  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [showBelts, setShowBelts] = useState(true);
  const [selectedDeposit, setSelectedDeposit] = useState<ResourceDeposit | null>(null);
  const [selectedBelt, setSelectedBelt] = useState<MineralBelt | null>(null);

  const filteredDeposits = useMemo(() => {
    if (filterMode === 'all') return RESOURCE_DEPOSITS;
    return RESOURCE_DEPOSITS.filter(d => d.category === filterMode);
  }, [filterMode]);

  const handleClear = () => {
    setSelectedDeposit(null);
    setSelectedBelt(null);
  };

  return (
    <div className="w-full h-full min-h-[750px] bg-slate-950 rounded-3xl border border-amber-900/40 shadow-2xl overflow-hidden flex flex-col font-sans relative">
      
      {/* HUD HEADER — Enhanced with rich metallic gradient */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/40 to-yellow-950/20 border-b border-amber-500/20 p-5 flex flex-col md:flex-row items-center justify-between gap-4 z-10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/[0.03] to-transparent pointer-events-none" />
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center border border-amber-500/40 relative">
            <Pickaxe className="w-6 h-6 text-amber-400 relative z-10" />
            <div className="absolute inset-0 rounded-2xl blur-lg bg-amber-500/20" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white uppercase tracking-wider">Resource Atlas</h2>
            <p className="text-amber-200/60 text-[10px] font-bold tracking-widest uppercase">India's Mineral & Energy Geography</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 relative z-10">
          <button
            onClick={() => setShowBelts(!showBelts)}
            className={`flex items-center gap-2 h-10 px-5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              showBelts
                ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.5)] border border-amber-400 animate-pulse'
                : 'bg-slate-800 hover:bg-slate-700 text-amber-500 border border-amber-900/50'
            }`}
          >
            <Layers className="w-4 h-4" />
            {showBelts ? 'Belts Active' : 'Show Mineral Belts'}
          </button>

          <div className="bg-slate-900/80 p-1 rounded-2xl border border-white/10 flex flex-wrap">
            <FilterBtn active={filterMode === 'all'} onClick={() => { setFilterMode('all'); handleClear(); }} label="All" />
            <FilterBtn active={filterMode === 'metallic'} onClick={() => { setFilterMode('metallic'); handleClear(); }} label="Metallic" color={CATEGORY_COLORS.metallic} />
            <FilterBtn active={filterMode === 'non-metallic'} onClick={() => { setFilterMode('non-metallic'); handleClear(); }} label="Non-Metal" color={CATEGORY_COLORS['non-metallic']} />
            <FilterBtn active={filterMode === 'energy'} onClick={() => { setFilterMode('energy'); handleClear(); }} label="Energy" color={CATEGORY_COLORS.energy} />
            <FilterBtn active={filterMode === 'atomic'} onClick={() => { setFilterMode('atomic'); handleClear(); }} label="Atomic" color={CATEGORY_COLORS.atomic} />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row relative">
        
        {/* MAP — Enhanced with geologic depth background */}
        <div className="flex-1 relative overflow-hidden flex items-center justify-center"
             style={{ background: 'radial-gradient(ellipse at 50% 50%, #151000 0%, #0a0805 50%, #050402 100%)' }}>
          
          {/* Atmospheric geologic fog */}
          <div className="absolute inset-0 pointer-events-none"
               style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(245,158,11,0.03) 0%, transparent 60%), radial-gradient(ellipse at 20% 70%, rgba(139,92,246,0.02) 0%, transparent 50%)' }} />

          {/* Geological grid overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(245,158,11,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 1000, center: [82, 22] }}
            className="w-full h-full"
          >
            {/* SVG Defs for Premium Glows and Gradients */}
            <defs>
              {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
                <radialGradient key={`glow-${cat}`} id={`radialGlow-${cat}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={color} stopOpacity="0.8" />
                  <stop offset="40%" stopColor={color} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={color} stopOpacity="0" />
                </radialGradient>
              ))}

              {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
                <filter key={`filter-${cat}`} id={`glowFilter-${cat}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                  <feFlood floodColor={color} floodOpacity="0.6" result="glowColor" />
                  <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              ))}

              <filter id="beltGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feFlood floodColor="#f59e0b" floodOpacity="0.4" result="glowColor" />
                <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="beltSelectedGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feFlood floodColor="#fbbf24" floodOpacity="0.8" result="glowColor" />
                <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* CSS Animations */}
            <style>
              {`
              @keyframes deposit-pulse {
                0%, 100% { r: 8; opacity: 0.4; }
                50% { r: 12; opacity: 0.1; }
              }
              @keyframes belt-flow {
                from { stroke-dashoffset: 24; }
                to { stroke-dashoffset: 0; }
              }
              .belt-flow-anim {
                animation: belt-flow 1.5s linear infinite;
              }
              .deposit-ring-anim {
                animation: deposit-pulse 2s ease-in-out infinite;
              }
              `}
            </style>

            <ZoomableGroup zoom={1} minZoom={1} maxZoom={6}>
              {/* Base Map — Dark metallic slate base */}
              <Geographies geography={INDIA_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#121218"
                      stroke="#22222d"
                      strokeWidth={0.6}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: '#181822', outline: 'none', stroke: '#333342' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Mineral Belts as advanced polygon outlines */}
              {showBelts && MINERAL_BELTS.map((belt, bIdx) => {
                const isSelected = selectedBelt?.id === belt.id;
                const glowFilter = isSelected ? 'url(#beltSelectedGlow)' : 'url(#beltGlow)';
                
                return (
                  <g key={belt.id} onClick={() => { handleClear(); setSelectedBelt(belt); }} className="cursor-pointer">
                    {belt.path.length > 2 && (
                      <>
                        {/* Outer Glow Area Component */}
                        <path 
                          d={`M ${belt.path.map(p => p.join(',')).join(' L ')} Z`}
                          fill={isSelected ? '#f59e0b' : '#f59e0b'}
                          fillOpacity={isSelected ? 0.08 : 0.02}
                          stroke="transparent"
                          filter={glowFilter}
                        />

                        {/* Animated Border Component */}
                        {belt.path.map((point, i) => {
                          const toPoint = i === belt.path.length - 1 ? belt.path[0] : belt.path[i + 1];
                          return (
                            <g key={`${belt.id}-${i}`}>
                              {/* Invisible hit area */}
                              <Line from={point} to={toPoint} stroke="transparent" strokeWidth={14} />
                              {/* Outer glow stroke */}
                              <Line
                                from={point}
                                to={toPoint}
                                stroke="#f59e0b"
                                strokeWidth={isSelected ? 6 : 3}
                                opacity={isSelected ? 0.2 : 0.1}
                                strokeLinecap="round"
                              />
                              {/* Central dashed stroke */}
                              <Line
                                from={point}
                                to={toPoint}
                                stroke={isSelected ? '#fbbf24' : '#d97706'}
                                strokeWidth={isSelected ? 2 : 1}
                                strokeDasharray="4 8"
                                strokeLinecap="round"
                                className={isSelected ? 'belt-flow-anim' : ''}
                                filter={isSelected ? glowFilter : 'none'}
                              />
                            </g>
                          );
                        })}
                        
                        {/* Display Label at Path start point */}
                        <Marker coordinates={belt.path[0]}>
                          <text
                            textAnchor="start"
                            dy={-10}
                            style={{ 
                              fontSize: isSelected ? '7px' : '5px', 
                              fill: isSelected ? '#fbbf24' : '#a8a29e', 
                              fontWeight: 900, 
                              textTransform: 'uppercase', 
                              letterSpacing: '2px',
                              filter: isSelected ? 'drop-shadow(0px 0px 4px rgba(251,191,36,0.8))' : 'none',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            {belt.name}
                          </text>
                        </Marker>
                      </>
                    )}
                  </g>
                );
              })}

              {/* Resource Deposit Markers — Enhanced with radial gradients and specific category glows */}
              {filteredDeposits.map(deposit => {
                const isSelected = selectedDeposit?.id === deposit.id;
                const color = CATEGORY_COLORS[deposit.category];
                const radialGlow = `url(#radialGlow-${deposit.category})`;
                const glowFilter = `url(#glowFilter-${deposit.category})`;
                
                return (
                  <Marker
                    key={deposit.id}
                    coordinates={deposit.coord}
                    onClick={() => { handleClear(); setSelectedDeposit(deposit); }}
                    className="cursor-pointer"
                  >
                    <motion.g animate={{ scale: isSelected ? 1.6 : 1 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                      
                      {/* Ambient background glow radius */}
                      <circle r={isSelected ? 14 : 7} fill={radialGlow} opacity={isSelected ? 0.8 : 0.4} />
                      
                      {/* Pulsing selection ring */}
                      {isSelected && (
                        <>
                          <circle r={8} fill="none" stroke={color} strokeWidth={0.8} className="deposit-ring-anim" />
                          <circle r={10} fill="none" stroke={color} strokeWidth={0.4} className="deposit-ring-anim" style={{ animationDelay: '0.4s' }} />
                        </>
                      )}
                      
                      {/* Core Solid Marker */}
                      <circle r={isSelected ? 3.5 : 2.5} fill={color} stroke="#000" strokeWidth={0.5} filter={glowFilter} />
                      {/* Inner bright core */}
                      <circle r={isSelected ? 1 : 0.5} fill="#fff" opacity={0.9} />

                    </motion.g>
                    
                    {/* Hover/Selection Text */}
                    {(isSelected || !selectedDeposit) && (
                      <text 
                        textAnchor="middle" 
                        dy={isSelected ? -14 : -8} 
                        style={{ 
                          fontSize: isSelected ? '6px' : '4px', 
                          fill: isSelected ? '#ffffff' : '#e7e5e4', 
                          fontWeight: isSelected ? 900 : 700,
                          opacity: isSelected ? 1 : 0, 
                          filter: isSelected ? `drop-shadow(0 0 4px ${color})` : 'none',
                          transition: 'opacity 0.2s',
                          pointerEvents: 'none'
                        }}
                        className="deposit-label"
                      >
                        {deposit.name}
                      </text>
                    )}
                  </Marker>
                );
              })}
            </ZoomableGroup>
          </ComposableMap>
          
          <style>{`
            .cursor-pointer:hover .deposit-label { opacity: 1 !important; }
          `}</style>

          {/* Map Legend Overlay — Enhanced with rich glows */}
          <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 hidden lg:block shadow-2xl shadow-black/50">
            <h4 className="text-[9px] font-black text-amber-500/80 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <div className="w-1.5 h-4 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
              Resource Classes
            </h4>
            <div className="flex flex-col gap-3">
              {(Object.entries(CATEGORY_COLORS) as [ResourceCategory, string][]).map(([cat, color]) => (
                <div key={cat} className="flex items-center gap-3 cursor-pointer group" onClick={() => setFilterMode(filterMode === cat ? 'all' : cat)}>
                  <div className="w-3.5 h-3.5 rounded-full shadow-[0_0_8px_var(--cat-glow)] group-hover:scale-125 transition-transform border border-black/50" 
                       style={{ backgroundColor: color, '--cat-glow': `${color}80` } as React.CSSProperties} />
                  <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${filterMode === cat ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {CATEGORY_LABELS[cat]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats HUD — Enhanced with metallic polish */}
          <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 hidden md:flex shadow-2xl gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                <Target className="w-5 h-5 text-amber-500" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>{filteredDeposits.length}</div>
                <div className="text-[8px] text-amber-500/80 font-black uppercase tracking-[0.2em]">Deposits Focus</div>
              </div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                <Layers className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>{MINERAL_BELTS.length}</div>
                <div className="text-[8px] text-indigo-400/80 font-black uppercase tracking-[0.2em]">Active Belts</div>
              </div>
            </div>
          </div>
          
          {/* Ambient Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${2 + (i % 2)}px`,
                  height: `${2 + (i % 2)}px`,
                  background: i % 2 === 0 ? 'rgba(245,158,11,0.2)' : 'rgba(139,92,246,0.15)',
                  left: `${15 + i * 16}%`,
                  top: `${25 + (i % 3) * 20}%`,
                  animation: `resource-float ${6 + i * 0.9}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`
                }}
              />
            ))}
            <style>{`
              @keyframes resource-float {
                0%, 100% { transform: translateY(0px) scale(1); opacity: 0.1; }
                50% { transform: translateY(-15px) scale(1.5); opacity: 0.4; }
              }
            `}</style>
          </div>
        </div>

        {/* SIDE PANEL — Enhanced */}
        <AnimatePresence mode="wait">
          {selectedDeposit && (
            <motion.div
              key="deposit-panel"
              initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "100%", opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[450px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
            >
              <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                
                {/* Header Block — Enhanced with Glow */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 relative"
                       style={{ backgroundColor: `${CATEGORY_COLORS[selectedDeposit.category]}15`, border: `1px solid ${CATEGORY_COLORS[selectedDeposit.category]}40`, boxShadow: `0 0 20px ${CATEGORY_COLORS[selectedDeposit.category]}20` }}>
                    <span style={{ color: CATEGORY_COLORS[selectedDeposit.category] }}>
                      {React.cloneElement(CATEGORY_ICONS[selectedDeposit.category] as React.ReactElement<any>, { className: "w-8 h-8 relative z-10" })}
                    </span>
                    <div className="absolute inset-0 blur-lg rounded-2xl" style={{ backgroundColor: `${CATEGORY_COLORS[selectedDeposit.category]}20` }} />
                  </div>
                  <div>
                    <Badge className="border-0 font-black px-2 py-1 uppercase tracking-widest text-[9px] text-white mb-2 shadow-lg"
                           style={{ backgroundColor: CATEGORY_COLORS[selectedDeposit.category], boxShadow: `0 0 10px ${CATEGORY_COLORS[selectedDeposit.category]}60` }}>
                      {selectedDeposit.type}
                    </Badge>
                    <h3 className="text-3xl font-black text-white leading-tight tracking-tighter">{selectedDeposit.name}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <InfoCard label="State Origin" value={selectedDeposit.state} color={CATEGORY_COLORS[selectedDeposit.category]} />
                  <InfoCard label="Geological Period" value={selectedDeposit.geological_period} color={CATEGORY_COLORS[selectedDeposit.category]} />
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-white/5 mb-8">
                  <h4 className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Info className="w-3 h-3" /> Deposit Characteristics
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{selectedDeposit.description}</p>
                </div>

                <div className="bg-amber-950/20 border-l-[3px] p-5 rounded-r-xl relative overflow-hidden" style={{ borderLeftColor: CATEGORY_COLORS[selectedDeposit.category] }}>
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: `${CATEGORY_COLORS[selectedDeposit.category]}15` }} />
                  <h4 className="text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2 relative z-10" style={{ color: CATEGORY_COLORS[selectedDeposit.category] }}>
                    <Target className="w-3 h-3" /> UPSC Objective Note
                  </h4>
                  <p className="text-white/90 text-sm leading-relaxed font-medium relative z-10">{selectedDeposit.upsc_relevance}</p>
                </div>
              </div>
              <PanelFooter onClose={handleClear} />
            </motion.div>
          )}

          {selectedBelt && !selectedDeposit && (
            <motion.div
              key="belt-panel"
              initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "100%", opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[450px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
            >
              <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                <Badge className="bg-amber-500/20 text-amber-400 border-0 font-black px-3 py-1.5 uppercase tracking-widest text-[10px] mb-6 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  Major Mineral Belt
                </Badge>
                <h3 className="text-4xl font-black text-white leading-none tracking-tighter mb-6">{selectedBelt.name}</h3>
                
                <div className="bg-slate-950 p-5 rounded-2xl border border-white/5 mb-8">
                  <p className="text-slate-300 text-sm leading-relaxed">{selectedBelt.description}</p>
                </div>

                <div className="bg-slate-900/60 p-5 rounded-2xl border border-emerald-500/20 mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <h4 className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mb-4 flex items-center gap-2 relative z-10">
                    <Factory className="w-3 h-3" /> Primary Resources
                  </h4>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {selectedBelt.primary_resources.map((r, i) => (
                      <span key={r} className="px-3 py-1.5 rounded-lg bg-emerald-950/40 text-emerald-200 text-xs font-bold border border-emerald-500/30 shadow-[0_0_8px_rgba(16,185,129,0.1)]">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-950/30 border-l-[3px] border-amber-500 p-5 rounded-r-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <h4 className="text-[10px] text-amber-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2 relative z-10">
                    <Target className="w-3 h-3" /> UPSC Relevance
                  </h4>
                  <p className="text-amber-50 text-sm leading-relaxed font-medium relative z-10">{selectedBelt.upsc_relevance}</p>
                </div>
              </div>
              <PanelFooter onClose={handleClear} />
            </motion.div>
          )}

          {!selectedDeposit && !selectedBelt && (
            <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-[450px] bg-slate-900/40 backdrop-blur-md border-l border-white/5 z-10 flex-col items-center justify-center p-8 text-center pointer-events-none transition-opacity duration-300">
              <div className="w-24 h-24 rounded-full bg-amber-950/40 border border-amber-500/30 flex items-center justify-center mb-8 relative">
                <Pickaxe className="w-10 h-10 text-amber-400 relative z-10" />
                <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-xl animate-pulse" />
              </div>
              <h3 className="text-2xl font-black text-slate-300 uppercase tracking-widest mb-4">Resource Matrix</h3>
              <p className="text-sm text-slate-500 font-bold tracking-wider leading-relaxed max-w-sm">
                Select any <span className="text-amber-400">deposit marker</span> or <span className="text-indigo-400">mineral belt</span> region on the map to explore India's geological wealth and economic geography.
              </p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function InfoCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-slate-950/80 p-4 rounded-2xl border transition-all" style={{ borderColor: `${color}20` }}>
      <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-black mb-1.5">{label}</span>
      <span className="text-sm font-bold text-white relative z-10">{value}</span>
    </div>
  );
}

function FilterBtn({ active, onClick, label, color }: { active: boolean; onClick: () => void; label: string; color?: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all m-0.5 ${
        active 
          ? 'bg-slate-800 text-white shadow-lg' 
          : 'bg-transparent text-slate-500 hover:bg-slate-800 hover:text-slate-300'
      }`}
      style={active && color ? { 
        borderBottom: `2px solid ${color}`,
        boxShadow: `0 4px 15px ${color}25`,
        color: color
      } : { borderBottom: '2px solid transparent' }}
    >
      {active && color && <span className="inline-block w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }} />}
      {label}
    </button>
  );
}

function PanelFooter({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-5 bg-slate-950/90 border-t border-white/5 flex gap-3 backdrop-blur-xl">
      <Button className="flex-1 bg-white hover:bg-slate-200 text-black font-black uppercase tracking-widest text-xs h-12 rounded-xl shadow-lg">
        Review Notes <ChevronRight className="w-4 h-4 ml-2" />
      </Button>
      <Button variant="outline" className="w-12 h-12 rounded-xl border-slate-700 text-slate-400 hover:text-white" onClick={onClose}>
        <Crosshair className="w-4 h-4" />
      </Button>
    </div>
  );
}
