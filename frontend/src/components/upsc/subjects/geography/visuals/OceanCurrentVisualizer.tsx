"use client";

import React, { useState, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, Line, Marker, ZoomableGroup } from 'react-simple-maps';
import { OCEAN_CURRENTS } from '../data/ocean-current-data';
import { OceanCurrent } from '../data/ocean-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Info, Crosshair, Thermometer, Wind, Eye, Waves, Navigation, Target, ChevronRight, Compass, Anchor } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Using a reliable TopoJSON for World Countries (low res for speed)
const WORLD_TOPO_JSON = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type ViewMode = 'all' | 'warm' | 'cold' | 'gyres';

export default function OceanCurrentVisualizer() {
  const [viewMode, setViewMode] = useState<ViewMode>('all');
  const [activeGyre, setActiveGyre] = useState<OceanCurrent['gyre'] | 'All'>('All');
  const [enosActive, setEnosActive] = useState(false); // El Niño Southern Oscillation
  const [selectedCurrent, setSelectedCurrent] = useState<OceanCurrent | null>(null);

  const filteredCurrents = useMemo(() => {
    return OCEAN_CURRENTS.filter(current => {
      // Gyre filter override
      if (activeGyre !== 'All') return current.gyre === activeGyre;

      // Base View Mode Filter
      if (viewMode === 'warm') return current.type === 'warm';
      if (viewMode === 'cold') return current.type === 'cold';
      if (viewMode === 'gyres') return current.gyre !== 'None';
      return true;
    });
  }, [viewMode, activeGyre]);

  // A helper component to render animated SVG lines for ocean currents
  const AnimatedFlowLine = ({ current }: { current: OceanCurrent }) => {
    const isSelected = selectedCurrent?.id === current.id;
    
    // Determine visual properties based on type and state
    let gradientId = current.type === 'warm' ? 'url(#warmGrad)' : 'url(#coldGrad)';
    let glowFilter = current.type === 'warm' ? 'url(#glowWarm)' : 'url(#glowCold)';
    let rawColor = current.type === 'warm' ? '#fb923c' : '#38bdf8';
    let strokeWidth = isSelected ? 3.5 : 2;
    let particleColor = current.type === 'warm' ? 'rgba(251,191,36,0.6)' : 'rgba(125,211,252,0.6)';
    
    if (isSelected) {
      gradientId = 'url(#selectedCurrentGrad)';
      glowFilter = 'url(#glowSelected)';
      rawColor = '#e879f9';
      particleColor = 'rgba(232,121,249,0.7)';
    }

    // ENSO Logic
    if (enosActive && current.id === 'peru-humboldt') {
      gradientId = 'url(#elNinoGrad)';
      glowFilter = 'url(#glowElNino)';
      rawColor = '#ef4444';
      strokeWidth = isSelected ? 5 : 4;
      particleColor = 'rgba(239,68,68,0.7)';
    }

    if (enosActive && current.id === 'south-equatorial-pacific') {
      gradientId = 'url(#weakenedGrad)';
      rawColor = '#818cf8';
      particleColor = 'rgba(129,140,248,0.5)';
    }

    return (
      <g 
        key={current.id}
        onMouseEnter={() => setSelectedCurrent(current)}
        onMouseLeave={() => setSelectedCurrent(null)}
        className="cursor-pointer"
        style={{ opacity: isSelected ? 1 : 0.75 }}
      >
        {current.path.map((point, i) => {
          if (i === current.path.length - 1) return null;
          
          let from = point;
          let to = current.path[i + 1];
          
          // Reverse direction visually during El Nino for Peru current
          if (enosActive && current.id === 'peru-humboldt') {
            from = current.path[i + 1];
            to = point;
          }

          return (
            <g key={`${current.id}-seg-${i}`}>
              {/* Invisible hit area for easier interaction */}
              <Line
                from={from}
                to={to}
                stroke="transparent"
                strokeWidth={12}
              />
              {/* Outer glow halo */}
              <Line
                from={from}
                to={to}
                stroke={rawColor}
                strokeWidth={isSelected ? 10 : 6}
                strokeLinecap="round"
                style={{ opacity: isSelected ? 0.15 : 0.08 }}
                filter={glowFilter}
              />
              {/* Main gradient current line */}
              <Line
                from={from}
                to={to}
                stroke={gradientId}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                filter={glowFilter}
              />
              {/* Animated flow particles */}
              <Line
                from={from}
                to={to}
                stroke={particleColor}
                strokeWidth={isSelected ? 1.5 : 0.8}
                strokeLinecap="round"
                strokeDasharray="2 14"
                className="current-flow-particles"
                style={{ pointerEvents: 'none' }}
              />
              {/* Secondary shimmer overlay */}
              <Line
                from={from}
                to={to}
                stroke="rgba(255,255,255,0.25)"
                strokeWidth={isSelected ? 1 : 0.5}
                strokeLinecap="round"
                strokeDasharray="1 20"
                className="current-flow-shimmer"
                style={{ pointerEvents: 'none' }}
              />
            </g>
          );
        })}
        
        {/* Current name label at midpoint when selected */}
        {isSelected && current.path.length > 1 && (
          <Marker coordinates={current.path[Math.floor(current.path.length / 2)]}>
            <text 
              textAnchor="middle" 
              y={-8} 
              style={{ 
                fontSize: '6px', 
                fontWeight: 900, 
                fill: isSelected ? '#f0abfc' : rawColor, 
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                filter: `drop-shadow(0 0 4px ${rawColor})`
              }}
            >
              {current.name}
            </text>
          </Marker>
        )}

        {/* Directional arrow marker at the end of the current */}
        {current.path.length > 1 && (
          <Marker coordinates={current.path[current.path.length - 1]}>
            <circle 
              r={isSelected ? 3.5 : 2} 
              fill={rawColor} 
              opacity={isSelected ? 0.9 : 0.6}
              filter={glowFilter}
            />
            <circle r={isSelected ? 1.2 : 0.7} fill="#fff" opacity={0.8} />
          </Marker>
        )}
      </g>
    );
  };

  return (
    <div className="w-full h-full min-h-[700px] bg-slate-950 rounded-3xl border border-blue-900/40 shadow-2xl overflow-hidden flex flex-col font-sans relative">
      
      {/* HUD HEADER — Enhanced with subtle glow accents */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950/60 to-cyan-950/30 border-b border-blue-500/20 p-5 flex flex-col md:flex-row items-center justify-between gap-4 z-10 relative">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 relative">
            <Waves className="w-6 h-6 text-blue-400 relative z-10" />
            <div className="absolute inset-0 rounded-2xl blur-lg bg-blue-500/20" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white uppercase tracking-wider">Ocean Current Visualizer</h2>
            <p className="text-blue-200/60 text-[10px] font-bold tracking-widest uppercase">Global Circulation & Climate Drivers</p>
          </div>
        </div>

        {/* Global Action Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          
          <button
            onClick={() => setEnosActive(!enosActive)}
            className={`flex items-center gap-2 h-10 px-6 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
              enosActive 
                ? 'bg-red-500 hover:bg-red-600 text-white shadow-[0_0_25px_rgba(239,68,68,0.5)] border border-red-400 animate-pulse' 
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            <Thermometer className={`w-4 h-4 ${enosActive ? 'animate-bounce' : ''}`} />
            {enosActive ? 'El Niño Active' : 'Trigger El Niño'}
          </button>

          <div className="bg-slate-900/80 p-1 rounded-xl border border-white/10 flex">
            {(['all', 'warm', 'cold', 'gyres'] as ViewMode[]).map(mode => (
              <button
                key={mode}
                onClick={() => { setViewMode(mode); setActiveGyre('All'); }}
                className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                  viewMode === mode 
                    ? mode === 'warm' ? 'bg-orange-500/20 text-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.2)]' 
                      : mode === 'cold' ? 'bg-sky-500/20 text-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                      : 'bg-indigo-500/30 text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.2)]'
                    : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                }`}
              >
                {mode === 'warm' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-400 mr-1.5 shadow-[0_0_4px_rgba(251,146,60,0.8)]" />}
                {mode === 'cold' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400 mr-1.5 shadow-[0_0_4px_rgba(56,189,248,0.8)]" />}
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row relative">
        
        {/* SVG MAP ENGINE — Enhanced with ocean depth gradient */}
        <div className="flex-1 relative overflow-hidden"
             style={{ background: 'radial-gradient(ellipse at 50% 40%, #091428 0%, #050e1a 40%, #020509 100%)' }}>
          
          {/* Deep ocean atmospheric overlays */}
          <div className="absolute inset-0 pointer-events-none"
               style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(6,182,212,0.04) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(59,130,246,0.03) 0%, transparent 40%)' }} />
          
          {/* Subtle ocean grid texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(56,189,248,0.4) 0.5px, transparent 0)', backgroundSize: '28px 28px' }} />

          {/* Warm zone ambient glow (equatorial) */}
          <div className="absolute top-[40%] left-[20%] right-[20%] h-16 bg-orange-500/[0.02] blur-3xl pointer-events-none" />
          
          {/* El Niño warm anomaly glow (Pacific) */}
          {enosActive && (
            <div className="absolute top-[35%] left-[10%] w-[30%] h-[20%] bg-red-500/[0.06] rounded-full blur-3xl pointer-events-none animate-pulse" />
          )}

          {/* If Gyre Mode, show the Gyre selectors */}
          <AnimatePresence>
            {viewMode === 'gyres' && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="absolute top-6 left-6 z-10 bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-indigo-500/30 flex flex-col gap-2 shadow-2xl shadow-indigo-900/20"
              >
                <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest px-2 mb-1 flex items-center gap-2">
                  <Compass className="w-3 h-3" /> Focus Gyre
                </div>
                {['North Atlantic', 'South Atlantic', 'North Pacific', 'South Pacific', 'Indian Ocean'].map(g => (
                  <button
                    key={g}
                    onClick={() => setActiveGyre(g as OceanCurrent['gyre'])}
                    className={`text-left px-4 py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${
                      activeGyre === g ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <ComposableMap
            projection="geoEquirectangular" // Better for showing entire world oceans flatly
            projectionConfig={{ scale: 120, center: [0, 0] }}
            className="w-full h-full"
          >
            {/* SVG Defs — Premium Glow Filters & Gradients */}
            <defs>
              {/* Warm current gradient (orange→gold) */}
              <linearGradient id="warmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
              {/* Cold current gradient (light-to-deep blue) */}
              <linearGradient id="coldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              {/* Selected current gradient (purple→pink) */}
              <linearGradient id="selectedCurrentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="50%" stopColor="#e879f9" />
                <stop offset="100%" stopColor="#f0abfc" />
              </linearGradient>
              {/* El Niño gradient (deep red→bright red) */}
              <linearGradient id="elNinoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fca5a5" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              {/* Weakened current gradient (indigo) */}
              <linearGradient id="weakenedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a5b4fc" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>

              {/* Glow Filter - Warm (orange) */}
              <filter id="glowWarm" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                <feFlood floodColor="#fb923c" floodOpacity="0.5" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Glow Filter - Cold (cyan/blue) */}
              <filter id="glowCold" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                <feFlood floodColor="#38bdf8" floodOpacity="0.5" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Glow Filter - Selected (purple) */}
              <filter id="glowSelected" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
                <feFlood floodColor="#e879f9" floodOpacity="0.7" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Glow Filter - El Niño (red) */}
              <filter id="glowElNino" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feFlood floodColor="#ef4444" floodOpacity="0.8" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <ZoomableGroup zoom={1} minZoom={1} maxZoom={4} translateExtent={[[-400, -200], [400, 200]]}>
              
              {/* Base world geography — enhanced terrain */}
              <Geographies geography={WORLD_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#0c1525"
                      stroke="#1a3050"
                      strokeWidth={0.6}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: '#111d32', outline: 'none', stroke: '#1e4070', strokeWidth: 0.8 },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Draw All Currents — Premium rendering */}
              {filteredCurrents.map(current => (
                <AnimatedFlowLine key={`current-${current.id}`} current={current} />
              ))}

              {/* Premium Animation Styles */}
              <style>
                {`
                @keyframes current-particle-flow {
                  from { stroke-dashoffset: 32; }
                  to { stroke-dashoffset: 0; }
                }
                @keyframes current-shimmer-flow {
                  from { stroke-dashoffset: 42; }
                  to { stroke-dashoffset: 0; }
                }
                @keyframes thermal-pulse {
                  0%, 100% { opacity: 0.03; }
                  50% { opacity: 0.06; }
                }
                .current-flow-particles {
                  animation: current-particle-flow 1.5s linear infinite;
                }
                .current-flow-shimmer {
                  animation: current-shimmer-flow 1s linear infinite;
                }
                `}
              </style>

            </ZoomableGroup>
          </ComposableMap>

          {/* ENSO HUD Overlay — Enhanced with dramatic glow */}
          <AnimatePresence>
            {enosActive && (
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl border border-red-500/40 p-6 rounded-3xl shadow-[0_0_60px_rgba(239,68,68,0.25),0_0_120px_rgba(239,68,68,0.1)] text-center max-w-xl flex items-center gap-6"
              >
                <div className="w-16 h-16 bg-red-950 rounded-full flex items-center justify-center shrink-0 border border-red-500/50 relative">
                   <Thermometer className="w-8 h-8 text-red-500 animate-pulse relative z-10" />
                   <div className="absolute inset-0 rounded-full bg-red-500/20 blur-md animate-ping" />
                </div>
                <div className="text-left">
                  <h3 className="text-red-400 font-black uppercase text-lg tracking-tight">El Niño Event Active</h3>
                  <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                    The Peru (Humboldt) Current has <span className="text-red-400 font-bold">reversed direction</span> and warmed. The Walker circulation has shifted eastward, pooling warm water against the South American coast.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* HUD Legend Overlay — New addition */}
          <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col gap-3.5 z-10 shadow-2xl shadow-black/40">
            <h4 className="text-[9px] font-black uppercase text-blue-400/80 tracking-[0.2em] whitespace-nowrap flex items-center gap-2">
              <div className="w-1.5 h-4 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              Current Legend
            </h4>
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-amber-300 to-orange-500 shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
              <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Warm Current</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-sky-300 to-blue-500 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
              <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Cold Current</span>
            </div>
            {enosActive && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-red-300 to-red-600 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse" />
                <span className="text-[10px] uppercase font-bold text-red-300 tracking-wider">El Niño Affected</span>
              </div>
            )}
            <div className="flex items-center gap-3 pt-1 border-t border-white/5 mt-1">
              <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.5)]" />
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Flow Direction</span>
            </div>
          </div>

          {/* Ambient floating particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${2 + (i % 3)}px`,
                  height: `${2 + (i % 3)}px`,
                  background: i % 2 === 0 ? 'rgba(56,189,248,0.15)' : 'rgba(251,146,60,0.12)',
                  left: `${8 + i * 11}%`,
                  top: `${15 + (i % 4) * 20}%`,
                  animation: `ocean-float-particle ${5 + i * 0.6}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
            <style>{`
              @keyframes ocean-float-particle {
                0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.15; }
                25% { transform: translateY(-8px) translateX(4px) scale(1.3); opacity: 0.3; }
                50% { transform: translateY(-15px) translateX(-2px) scale(1.5); opacity: 0.4; }
                75% { transform: translateY(-6px) translateX(-5px) scale(1.2); opacity: 0.25; }
              }
            `}</style>
          </div>

        </div>

        {/* DETAILS SIDE PANEL (35%) — Enhanced with glow accents */}
        <AnimatePresence>
          {selectedCurrent ? (
            <motion.div 
              initial={{ x: "100%", opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              exit={{ x: "100%", opacity: 0 }} 
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[400px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
            >
              <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                
                <Badge className={`mb-6 border-0 font-black px-3 py-1 uppercase tracking-widest text-[10px] ${
                  selectedCurrent.type === 'warm' 
                    ? 'bg-orange-500/20 text-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.15)]' 
                    : 'bg-sky-500/20 text-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.15)]'
                }`}>
                  {selectedCurrent.type === 'warm' ? '🔴' : '🔵'} {selectedCurrent.type} Current
                </Badge>

                <h3 className="text-3xl font-black text-white leading-none tracking-tighter mb-4">{selectedCurrent.name}</h3>
                
                <div className="flex items-center gap-2 mb-8">
                  <Wind className="w-4 h-4 text-slate-500" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {selectedCurrent.gyre !== 'None' ? `${selectedCurrent.gyre} Gyre System` : 'Independent Flow'}
                  </span>
                </div>

                <div className="space-y-8">
                  <div className="bg-slate-950 p-5 rounded-2xl border border-white/5 relative overflow-hidden group">
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-all ${
                      selectedCurrent.type === 'warm' 
                        ? 'bg-orange-500/10 group-hover:bg-orange-500/20' 
                        : 'bg-blue-500/10 group-hover:bg-blue-500/20'
                    }`} />
                    <h4 className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Climatological Impact
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed relative z-10">{selectedCurrent.climate_effect}</p>
                  </div>

                  <div className="bg-slate-950 p-5 rounded-2xl border border-amber-500/20 relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-amber-600 shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
                    <h4 className="text-[10px] text-amber-500 font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Target className="w-3 h-3" /> UPSC Objective Note
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">{selectedCurrent.upsc_relevance}</p>
                  </div>
                </div>

              </div>
              
              <div className="p-6 bg-slate-950 border-t border-white/5 flex gap-3">
                <Button className="flex-1 bg-white hover:bg-slate-200 text-black font-black uppercase tracking-widest text-xs h-12 rounded-xl">
                  Take Practice MCQ <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="w-12 h-12 rounded-xl flex items-center justify-center p-0 border-white/10 hover:bg-white/5" onClick={() => setSelectedCurrent(null)}>
                  <Crosshair className="w-4 h-4 text-slate-400" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-[400px] bg-slate-900/40 backdrop-blur-md border-l border-white/5 z-10 flex-col items-center justify-center p-8 text-center pointer-events-none">
              <div className="w-24 h-24 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 relative">
                <Waves className="w-10 h-10 text-blue-500/50 relative z-10" />
                <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-md animate-pulse" />
              </div>
              <h3 className="text-xl font-black text-white/50 uppercase tracking-widest mb-3">Explore Currents</h3>
              <p className="text-xs text-slate-500 font-bold tracking-wider leading-relaxed max-w-xs">
                Hover over any <span className="text-orange-400">warm</span> or <span className="text-sky-400">cold</span> glowing current line to reveal its climatological impacts and UPSC relevance.
              </p>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
