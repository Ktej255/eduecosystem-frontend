"use client";

import React, { useState, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { CLIMATE_ZONES } from '../data/climate-zone-data';
import { ClimateZone, MajorClimateGroup } from '../data/climate-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Thermometer, Droplets, Leaf, Bird, Target, Info, Crosshair, CloudRain, Sun, ChevronRight, BarChart3, Globe2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// World TopoJSON for base mapping
const WORLD_TOPO_JSON = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Standardized colors roughly based on the Köppen-Geiger color scheme
const KOPPEN_COLORS: Record<string, string> = {
  'Af': '#0000FF',     // Deep Blue
  'Aw': '#46A9FA',     // Light Blue
  'BWh/BWk': '#FF0000', // Red
  'Cs': '#FFFF00',     // Yellow
  'Cfb': '#00FF00',    // Green
  'Cwa/Cfa': '#C8FF00', // Yellow-Green
  'Df/Dw': '#00FFFF',   // Cyan
  'ET': '#B2B2B2'      // Grey
};

const GROUP_NAMES: Record<MajorClimateGroup, string> = {
  'A': 'Tropical (Megatherms)',
  'B': 'Dry (Xerophytes)',
  'C': 'Temperate (Mesotherms)',
  'D': 'Continental (Microtherms)',
  'E': 'Polar (Hekistotherms)'
};

// Group accent colors for glow effects
const GROUP_COLORS: Record<string, string> = {
  'ALL': '#818cf8',
  'A': '#3b82f6',
  'B': '#ef4444',
  'C': '#22c55e',
  'D': '#06b6d4',
  'E': '#94a3b8'
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function ClimateZoneExplorer() {
  const [activeGroup, setActiveGroup] = useState<MajorClimateGroup | 'ALL'>('ALL');
  const [selectedZone, setSelectedZone] = useState<ClimateZone | null>(null);

  const filteredZones = useMemo(() => {
    return CLIMATE_ZONES.filter(zone => activeGroup === 'ALL' || zone.group === activeGroup);
  }, [activeGroup]);

  // Format data for Recharts Climograph
  const chartData = useMemo(() => {
    if (!selectedZone) return [];
    return selectedZone.monthly_data.map((data, index) => ({
      name: MONTHS[index],
      Temperature: data.temp,
      Precipitation: data.precip
    }));
  }, [selectedZone]);

  return (
    <div className="w-full h-full min-h-[750px] bg-slate-950 rounded-3xl border border-indigo-900/40 shadow-2xl overflow-hidden flex flex-col font-sans relative">
      
      {/* HUD HEADER — Enhanced with atmospheric gradient & glow accents */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/50 to-violet-950/30 border-b border-indigo-500/20 p-5 flex flex-col md:flex-row items-center justify-between gap-4 z-10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/[0.02] to-transparent pointer-events-none" />
        <div className="flex flex-col md:flex-row items-center gap-4 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 relative">
            <Globe2 className="w-6 h-6 text-indigo-400 relative z-10" />
            <div className="absolute inset-0 rounded-2xl blur-lg bg-indigo-500/15" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-black text-white uppercase tracking-wider">Köppen Climate Explorer</h2>
            <p className="text-indigo-200/50 text-[10px] font-bold tracking-widest uppercase">Global Classification & Botany System</p>
          </div>
        </div>

        {/* Global Action Toggles — Enhanced with glow active states */}
        <div className="bg-slate-900/80 p-1.5 rounded-2xl border border-white/10 flex flex-wrap justify-center gap-1 relative z-10">
          <FilterBtn active={activeGroup === 'ALL'} onClick={() => setActiveGroup('ALL')} label="Global View" color="#818cf8" />
          <FilterBtn active={activeGroup === 'A'} onClick={() => setActiveGroup('A')} label="A: Tropical" color="#3b82f6" />
          <FilterBtn active={activeGroup === 'B'} onClick={() => setActiveGroup('B')} label="B: Dry" color="#ef4444" />
          <FilterBtn active={activeGroup === 'C'} onClick={() => setActiveGroup('C')} label="C: Temperate" color="#22c55e" />
          <FilterBtn active={activeGroup === 'D'} onClick={() => setActiveGroup('D')} label="D: Continental" color="#06b6d4" />
          <FilterBtn active={activeGroup === 'E'} onClick={() => setActiveGroup('E')} label="E: Polar" color="#94a3b8" />
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row relative">
        
        {/* SVG MAP ENGINE (60%) — Enhanced with atmospheric depth gradient */}
        <div className="flex-1 relative overflow-hidden flex items-center justify-center"
             style={{ background: 'radial-gradient(ellipse at 50% 40%, #0c0c24 0%, #06061a 50%, #030310 100%)' }}>
          
          {/* Atmospheric overlays */}
          <div className="absolute inset-0 pointer-events-none"
               style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(99,102,241,0.03) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(59,130,246,0.02) 0%, transparent 40%)' }} />
          
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.3) 0.5px, transparent 0)', backgroundSize: '32px 32px' }} />

          <ComposableMap
            projection="geoEquirectangular"
            projectionConfig={{ scale: 130, center: [0, 0] }}
            className="w-full h-full max-h-[800px]"
          >
            <ZoomableGroup zoom={1} minZoom={1} maxZoom={4} translateExtent={[[-400, -200], [400, 200]]}>
              
              {/* World Map Base — enhanced terrain */}
              <Geographies geography={WORLD_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#0c1020"
                      stroke="#1a2540"
                      strokeWidth={0.6}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: '#141830', outline: 'none' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Köppen Overlay Zones as Polygons — Enhanced with glow on selection */}
              {filteredZones.map(zone => {
                const isSelected = selectedZone?.id === zone.id;
                const baseColor = KOPPEN_COLORS[zone.code] || '#fff';
                
                return zone.visual_paths.map((polygonCoords, i) => (
                  <Geography 
                    key={`${zone.id}-${i}`}
                    geography={{
                      type: "Feature",
                      geometry: { type: "Polygon", coordinates: [polygonCoords] },
                      properties: {}
                    }}
                    fill={baseColor}
                    fillOpacity={isSelected ? 0.65 : 0.3}
                    stroke={isSelected ? '#ffffff' : baseColor}
                    strokeWidth={isSelected ? 2 : 0.5}
                    onClick={() => setSelectedZone(zone)}
                    onMouseEnter={() => !selectedZone && setSelectedZone(zone)} // Quick peek if nothing hard-selected
                    style={{
                      default: { outline: 'none', cursor: 'pointer', transition: 'all 300ms', filter: isSelected ? `drop-shadow(0 0 8px ${baseColor})` : 'none' },
                      hover: { outline: 'none', cursor: 'pointer', fillOpacity: 0.75, filter: `drop-shadow(0 0 6px ${baseColor})` },
                      pressed: { outline: 'none' },
                    }}
                  />
                ));
              })}

            </ZoomableGroup>
          </ComposableMap>

          {/* Map Legend Overlay — Enhanced with glow color swatches */}
          <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 hidden lg:block shadow-2xl shadow-black/40">
            <h4 className="text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2 mb-3"
                style={{ color: GROUP_COLORS[activeGroup] || '#818cf8' }}>
              <div className="w-1.5 h-4 rounded-full shadow-[0_0_8px_var(--accent-glow)]" 
                   style={{ backgroundColor: GROUP_COLORS[activeGroup] || '#818cf8', '--accent-glow': `${GROUP_COLORS[activeGroup] || '#818cf8'}80` } as React.CSSProperties} />
              Köppen Color Key
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {filteredZones.map(z => (
                <div key={z.code} className="flex items-center gap-2.5 cursor-pointer group" onClick={() => setSelectedZone(z)}>
                  <div className="w-4 h-3 rounded-sm group-hover:scale-125 transition-all shadow-[0_0_6px_var(--zone-color)]" 
                       style={{ backgroundColor: KOPPEN_COLORS[z.code], '--zone-color': `${KOPPEN_COLORS[z.code]}60` } as React.CSSProperties} />
                  <span className="text-[10px] text-slate-300 font-bold group-hover:text-white transition-colors uppercase tracking-wider">{z.code}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ambient floating particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${2 + (i % 2)}px`,
                  height: `${2 + (i % 2)}px`,
                  background: i % 3 === 0 ? 'rgba(99,102,241,0.15)' : i % 3 === 1 ? 'rgba(59,130,246,0.12)' : 'rgba(34,197,94,0.1)',
                  left: `${8 + i * 15}%`,
                  top: `${20 + (i % 3) * 22}%`,
                  animation: `climate-float ${5 + i * 0.8}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
            <style>{`
              @keyframes climate-float {
                0%, 100% { transform: translateY(0px) scale(1); opacity: 0.12; }
                50% { transform: translateY(-10px) scale(1.3); opacity: 0.3; }
              }
            `}</style>
          </div>
        </div>

        {/* DETAILS & CLIMOGRAPH SIDE PANEL (40%) — Enhanced */}
        <AnimatePresence>
          {selectedZone ? (
            <motion.div 
              key="details-panel"
              initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "100%", opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[450px] lg:w-[500px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
            >
              <div className="p-6 md:p-8 overflow-y-auto flex-1 custom-scrollbar">
                
                {/* Header Block — Enhanced with glow */}
                <div className="flex gap-3 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg shrink-0 relative" 
                       style={{ 
                         backgroundColor: `${KOPPEN_COLORS[selectedZone.code]}15`, 
                         color: KOPPEN_COLORS[selectedZone.code], 
                         border: `1px solid ${KOPPEN_COLORS[selectedZone.code]}40`,
                         boxShadow: `0 0 20px ${KOPPEN_COLORS[selectedZone.code]}15`
                       }}>
                    {selectedZone.code}
                  </div>
                  <div>
                    <Badge className="bg-slate-800 hover:bg-slate-700 text-white border-0 font-bold px-2 py-0.5 uppercase tracking-widest text-[9px] mb-1">
                      Group {selectedZone.group} - {GROUP_NAMES[selectedZone.group]}
                    </Badge>
                    <h3 className="text-2xl font-black text-white leading-tight tracking-tighter">{selectedZone.name}</h3>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {selectedZone.description}
                </p>

                {/* Climograph Component — Enhanced with subtle glow */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-white/5 mb-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <h4 className="text-[10px] text-sky-400 font-black uppercase tracking-widest flex items-center gap-2">
                      <BarChart3 className="w-3 h-3" /> Representative Climograph
                    </h4>
                    <span className="text-xs font-bold text-slate-400">{selectedZone.climograph_city}</span>
                  </div>
                  
                  <div className="h-[200px] w-full relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={chartData} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                        <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                        <YAxis yAxisId="left" tick={{ fontSize: 10, fill: '#3b82f6' }} axisLine={false} tickLine={false} />
                        <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10, fill: '#ef4444' }} axisLine={false} tickLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Bar yAxisId="left" dataKey="Precipitation" fill="#3b82f6" radius={[3, 3, 0, 0]} barSize={12} />
                        <Line yAxisId="right" type="monotone" dataKey="Temperature" stroke="#ef4444" strokeWidth={2} dot={{ r: 2, fill: '#ef4444' }} />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                  
                  {/* Climate Quick Stats — Enhanced with glow accents */}
                  <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-800 relative z-10">
                    <div>
                      <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-black mb-1">Annual Range</span>
                      <span className="flex items-center gap-1 text-sm font-bold text-red-400"><Thermometer className="w-3 h-3"/> {selectedZone.temp_range_annual}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-black mb-1">Annual Rainfall</span>
                      <span className="flex items-center gap-1 text-sm font-bold text-blue-400"><Droplets className="w-3 h-3"/> {selectedZone.rainfall_annual}</span>
                    </div>
                  </div>
                </div>

                {/* Biome Data — Enhanced with glow accents */}
                <div className="space-y-4">
                  <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <h4 className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2 relative z-10">
                      <Leaf className="w-3 h-3" /> Natural Vegetation (Flora)
                    </h4>
                    <p className="text-emerald-50/80 text-sm leading-relaxed relative z-10">{selectedZone.natural_vegetation}</p>
                  </div>

                  <div className="bg-amber-950/20 border border-amber-500/20 rounded-2xl p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <h4 className="text-[10px] text-amber-500 font-black uppercase tracking-widest mb-2 flex items-center gap-2 relative z-10">
                      <Bird className="w-3 h-3" /> Key Wildlife (Fauna)
                    </h4>
                    <p className="text-amber-50/80 text-sm leading-relaxed relative z-10">{selectedZone.key_wildlife}</p>
                  </div>

                  <div className="bg-indigo-950/40 p-4 rounded-xl relative overflow-hidden" style={{ borderLeft: `2px solid ${KOPPEN_COLORS[selectedZone.code] || '#818cf8'}` }}>
                    <div className="absolute left-0 top-0 w-1 h-full" style={{ backgroundColor: KOPPEN_COLORS[selectedZone.code], boxShadow: `0 0 10px ${KOPPEN_COLORS[selectedZone.code]}50` }} />
                    <h4 className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-1 flex items-center gap-2 relative z-10">
                      <Target className="w-3 h-3" /> UPSC Objective Note
                    </h4>
                    <p className="text-indigo-100 text-sm leading-relaxed font-medium relative z-10">{selectedZone.upsc_relevance}</p>
                  </div>
                </div>

              </div>
              
              <div className="p-4 bg-slate-950 border-t border-white/5 flex gap-2">
                <Button className="flex-1 bg-white hover:bg-slate-200 text-black font-black uppercase tracking-widest text-xs h-12 rounded-xl">
                  Test Climatology PYQs <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="w-12 h-12 rounded-xl border-slate-700 text-slate-400 hover:text-white" onClick={() => setSelectedZone(null)}>
                  <Crosshair className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ) : (
             <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-[450px] lg:w-[500px] bg-slate-900/40 backdrop-blur-md border-l border-white/5 z-10 flex-col items-center justify-center p-8 text-center pointer-events-none transition-opacity duration-300">
              <div className="w-24 h-24 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 relative">
                <Globe2 className="w-10 h-10 text-indigo-500/50 relative z-10" />
                <div className="absolute inset-0 rounded-full bg-indigo-500/5 blur-md animate-pulse" />
              </div>
              <h3 className="text-xl font-black text-white/50 uppercase tracking-widest mb-3">Select a Climate</h3>
              <p className="text-xs text-slate-500 font-bold tracking-wider leading-relaxed max-w-xs">
                Click any highlighted <span className="text-indigo-400">Köppen zone</span> on the map to reveal its biological biome, UPSC relevance, and 12-month <span className="text-sky-400">Climograph</span> chart.
              </p>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

// Helper filter button subcomponent — Enhanced with glow accent
function FilterBtn({ active, onClick, label, color }: { active: boolean, onClick: () => void, label: string, color?: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
        active 
          ? 'bg-slate-800 text-white' 
          : 'bg-transparent text-slate-500 hover:bg-slate-800 hover:text-slate-300'
      }`}
      style={active && color ? { 
        borderBottom: `2px solid ${color}`,
        boxShadow: `0 4px 12px ${color}20`,
        color: color
      } : { borderBottom: '2px solid transparent' }}
    >
      {active && color && <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5" style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }} />}
      {label}
    </button>
  );
}
