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
      
      {/* HUD HEADER */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 border-b border-indigo-900/40 p-5 flex flex-col md:flex-row items-center justify-between gap-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
            <Globe2 className="w-6 h-6 text-indigo-400" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-black text-white uppercase tracking-wider">Köppen Climate Explorer</h2>
            <p className="text-indigo-200/60 text-[10px] font-bold tracking-widest uppercase">Global Classification & Botany System</p>
          </div>
        </div>

        {/* Global Action Toggles */}
        <div className="bg-slate-900 p-1.5 rounded-2xl border border-slate-800 flex flex-wrap justify-center gap-1">
          <FilterBtn active={activeGroup === 'ALL'} onClick={() => setActiveGroup('ALL')} label="Global View" />
          <FilterBtn active={activeGroup === 'A'} onClick={() => setActiveGroup('A')} label="A: Tropical" color="#3b82f6" />
          <FilterBtn active={activeGroup === 'B'} onClick={() => setActiveGroup('B')} label="B: Dry" color="#ef4444" />
          <FilterBtn active={activeGroup === 'C'} onClick={() => setActiveGroup('C')} label="C: Temperate" color="#22c55e" />
          <FilterBtn active={activeGroup === 'D'} onClick={() => setActiveGroup('D')} label="D: Continental" color="#06b6d4" />
          <FilterBtn active={activeGroup === 'E'} onClick={() => setActiveGroup('E')} label="E: Polar" color="#94a3b8" />
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row relative">
        
        {/* SVG MAP ENGINE (60%) */}
        <div className="flex-1 bg-[#020617] relative overflow-hidden flex items-center justify-center">
          
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

          <ComposableMap
            projection="geoEquirectangular"
            projectionConfig={{ scale: 130, center: [0, 0] }}
            className="w-full h-full max-h-[800px]"
          >
            <ZoomableGroup zoom={1} minZoom={1} maxZoom={4} translateExtent={[[-400, -200], [400, 200]]}>
              
              {/* World Map Base */}
              <Geographies geography={WORLD_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#0f172a"
                      stroke="#1e293b"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: '#1e293b', outline: 'none' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Köppen Overlay Zones as Polygons */}
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
                    fillOpacity={isSelected ? 0.6 : 0.3}
                    stroke={isSelected ? '#ffffff' : baseColor}
                    strokeWidth={isSelected ? 1.5 : 0.5}
                    onClick={() => setSelectedZone(zone)}
                    onMouseEnter={() => !selectedZone && setSelectedZone(zone)} // Quick peek if nothing hard-selected
                    style={{
                      default: { outline: 'none', cursor: 'pointer', transition: 'all 250ms' },
                      hover: { outline: 'none', cursor: 'pointer', fillOpacity: 0.8 },
                      pressed: { outline: 'none' },
                    }}
                  />
                ));
              })}

            </ZoomableGroup>
          </ComposableMap>

          {/* Map Legend Overlay */}
          <div className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 hidden lg:block">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Köppen Color Key</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {filteredZones.map(z => (
                <div key={z.code} className="flex items-center gap-2 cursor-pointer group" onClick={() => setSelectedZone(z)}>
                  <div className="w-3 h-3 rounded-sm group-hover:scale-125 transition-transform" style={{ backgroundColor: KOPPEN_COLORS[z.code] }} />
                  <span className="text-xs text-slate-300 font-bold group-hover:text-white transition-colors">{z.code}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DETAILS & CLIMOGRAPH SIDE PANEL (40%) */}
        <AnimatePresence>
          {selectedZone ? (
            <motion.div 
              key="details-panel"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[450px] lg:w-[500px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
            >
              <div className="p-6 md:p-8 overflow-y-auto flex-1 custom-scrollbar">
                
                {/* Header Block */}
                <div className="flex gap-3 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg shrink-0" 
                       style={{ backgroundColor: `${KOPPEN_COLORS[selectedZone.code]}20`, color: KOPPEN_COLORS[selectedZone.code], border: `1px solid ${KOPPEN_COLORS[selectedZone.code]}40` }}>
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

                {/* Climograph Component */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-white/5 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[10px] text-sky-400 font-black uppercase tracking-widest flex items-center gap-2">
                      <BarChart3 className="w-3 h-3" /> Representative Climograph
                    </h4>
                    <span className="text-xs font-bold text-slate-400">{selectedZone.climograph_city}</span>
                  </div>
                  
                  <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={chartData} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                        <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                        <YAxis yAxisId="left" tick={{ fontSize: 10, fill: '#3b82f6' }} axisLine={false} tickLine={false} />
                        <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10, fill: '#ef4444' }} axisLine={false} tickLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Bar yAxisId="left" dataKey="Precipitation" fill="#3b82f6" radius={[2, 2, 0, 0]} barSize={12} />
                        <Line yAxisId="right" type="monotone" dataKey="Temperature" stroke="#ef4444" strokeWidth={2} dot={{ r: 2, fill: '#ef4444' }} />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                  
                  {/* Climate Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-800">
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

                {/* Biome Data */}
                <div className="space-y-4">
                  <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-2xl p-4">
                    <h4 className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Leaf className="w-3 h-3" /> Natural Vegetation (Flora)
                    </h4>
                    <p className="text-emerald-50/80 text-sm leading-relaxed">{selectedZone.natural_vegetation}</p>
                  </div>

                  <div className="bg-amber-900/10 border border-amber-500/20 rounded-2xl p-4">
                    <h4 className="text-[10px] text-amber-500 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Bird className="w-3 h-3" /> Key Wildlife (Fauna)
                    </h4>
                    <p className="text-amber-50/80 text-sm leading-relaxed">{selectedZone.key_wildlife}</p>
                  </div>

                  <div className="bg-indigo-950 p-4 rounded-xl border-l-2 border-indigo-500">
                    <h4 className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                      <Target className="w-3 h-3" /> UPSC Objective Note
                    </h4>
                    <p className="text-indigo-100 text-sm leading-relaxed font-medium">{selectedZone.upsc_relevance}</p>
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
              <div className="w-24 h-24 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center mb-6">
                <Globe2 className="w-10 h-10 text-slate-500" />
              </div>
              <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest mb-3">Select a Climate</h3>
              <p className="text-xs text-slate-500 font-bold tracking-wider leading-relaxed max-w-xs">
                Click any highlighted Köppen zone on the map to reveal its biological biome, UPSC relevance, and 12-month Climograph chart.
              </p>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

// Helper filter button subcomponent
function FilterBtn({ active, onClick, label, color }: { active: boolean, onClick: () => void, label: string, color?: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
        active 
          ? 'bg-slate-800 text-white shadow-lg' 
          : 'bg-transparent text-slate-400 hover:bg-slate-800'
      }`}
      style={active && color ? { borderBottom: `2px solid ${color}` } : { borderBottom: '2px solid transparent' }}
    >
      {label}
    </button>
  );
}
