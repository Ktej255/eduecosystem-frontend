"use client";

import React, { useState, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Line, Marker } from 'react-simple-maps';
import { MAJOR_PLATES, MINOR_PLATES, TECTONIC_BOUNDARIES, MAJOR_HAZARDS } from '../data/tectonics-data';
import { TectonicPlate, TectonicBoundary, GeoHazard } from '../data/tectonics-types';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Crosshair, Map, Info, Activity, Mountain, Volcano, Zap, Waves, Target, Layers, ChevronRight } from 'lucide-react';
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
      
      {/* HUD HEADER */}
      <div className="bg-gradient-to-r from-slate-900 to-red-950/40 border-b border-red-900/30 p-5 flex flex-col md:flex-row items-center justify-between gap-4 z-10 relative">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center border border-red-500/30">
            <Layers className="w-6 h-6 text-red-400" />
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
                ? 'bg-orange-600 hover:bg-orange-500 text-white shadow-[0_0_20px_rgba(234,88,12,0.6)] border border-orange-400' 
                : 'bg-slate-800 hover:bg-slate-700 text-orange-500 border border-orange-900/50'
            }`}
          >
            <Volcano className={`w-4 h-4 ${ringOfFireActive ? 'animate-bounce' : ''}`} />
            {ringOfFireActive ? 'Disable Pacific Ring' : 'Illuminate Ring of Fire'}
          </button>

          <div className="bg-slate-900 p-1 rounded-xl border border-slate-800 flex">
            {(['all', 'plates', 'boundaries', 'hazards'] as ViewMode[]).map(mode => (
              <button
                key={mode}
                onClick={() => { setViewMode(mode); handleClearSelection(); }}
                className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors ${
                  viewMode === mode 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
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
        
        {/* SVG MAP ENGINE */}
        <div className="flex-1 bg-[#09090b] relative overflow-hidden flex items-center justify-center">
          
          <ComposableMap
            projection="geoEquirectangular"
            projectionConfig={{ scale: 130, center: [0, 0] }}
            className="w-full h-full"
          >
            <ZoomableGroup zoom={1} minZoom={1} maxZoom={5} translateExtent={[[-400, -200], [400, 200]]}>
              
              <Geographies geography={WORLD_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#18181b"
                      stroke="#27272a"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: '#27272a', outline: 'none' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* TECTONIC BOUNDARIES (Lines) */}
              {(viewMode === 'all' || viewMode === 'boundaries') && TECTONIC_BOUNDARIES.map(boundary => {
                const isSelected = selectedBoundary?.id === boundary.id;
                const isHighlightedByRingOfFire = ringOfFireActive && boundary.is_ring_of_fire;
                
                let strokeWidth = isSelected ? 4 : 2;
                if (isHighlightedByRingOfFire) strokeWidth = 5;

                return (
                  <g key={boundary.id} onClick={() => { handleClearSelection(); setSelectedBoundary(boundary); }} className="cursor-pointer">
                    {boundary.path.map((point, i) => {
                      if (i === boundary.path.length - 1) return null;
                      return (
                        <Line
                          key={`${boundary.id}-${i}`}
                          from={point}
                          to={boundary.path[i + 1]}
                          stroke={BOUNDARY_COLORS[boundary.type]}
                          strokeWidth={strokeWidth}
                          strokeLinecap="round"
                          opacity={isHighlightedByRingOfFire || isSelected ? 1 : 0.6}
                          className={(isHighlightedByRingOfFire || isSelected) ? 'animate-pulse' : ''}
                        />
                      );
                    })}
                  </g>
                );
              })}

              {/* TECTONIC PLATES (Labels) */}
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
                        fill: isSelected ? "#ef4444" : "#71717a", 
                        fontWeight: "900",
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        transition: "all 0.2s"
                      }}
                      className={isSelected ? "font-black" : ""}
                    >
                      {plate.name}
                    </text>
                  </Marker>
                );
              })}

              {/* GEO-HAZARDS (Volcanoes / Earthquakes) */}
              {(viewMode === 'all' || viewMode === 'hazards') && MAJOR_HAZARDS.map(hazard => {
                const isSelected = selectedHazard?.id === hazard.id;
                
                let iconColor = '#ffffff';
                if (hazard.type === 'volcano') iconColor = '#ea580c'; // Orange
                if (hazard.type === 'earthquake') iconColor = '#eab308'; // Yellow
                if (hazard.type === 'trench') iconColor = '#0284c7'; // Deep Blue

                return (
                   <Marker 
                    key={hazard.id} 
                    coordinates={hazard.coord}
                    onClick={() => { handleClearSelection(); setSelectedHazard(hazard); }}
                    className="cursor-pointer"
                  >
                    <motion.g animate={{ scale: isSelected ? 1.5 : 1 }}>
                      <circle r={isSelected ? 4 : 2.5} fill={iconColor} stroke="#000" strokeWidth={0.5} />
                      {isSelected && hazard.type === 'earthquake' && (
                        <circle r={10} fill="none" stroke={iconColor} strokeWidth={1} className="animate-ping" opacity={0.6} />
                      )}
                      {isSelected && hazard.type === 'volcano' && (
                        <path d="M-3,-2 L0,-8 L3,-2 Z" fill="#ef4444" className="animate-pulse" />
                      )}
                    </motion.g>
                   </Marker>
                );
              })}

            </ZoomableGroup>
          </ComposableMap>

          {/* Map Legend Overlay */}
          <div className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 hidden lg:block">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Boundary Types</h4>
            <div className="flex flex-col gap-2">
              {Object.entries(BOUNDARY_COLORS).map(([type, color]) => (
                <div key={type} className="flex items-center gap-2">
                  <div className="w-4 h-1 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-[10px] text-slate-300 font-bold uppercase">{BOUNDARY_LABELS[type as keyof typeof BOUNDARY_LABELS]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DYNAMIC SIDE PANEL (40%) */}
        <AnimatePresence mode="wait">
          
          {/* BOUNDARY SELECTED */}
          {selectedBoundary && (
            <motion.div 
              key="panel-boundary"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[450px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
            >
              <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                
                <Badge className="mb-4 text-white border-0 font-black px-3 py-1 uppercase tracking-widest text-[10px]" style={{ backgroundColor: BOUNDARY_COLORS[selectedBoundary.type] }}>
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
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: BOUNDARY_COLORS[selectedBoundary.type] }} />
                          {lf}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-950/20 border-l-2 border-red-500 p-4 rounded-r-xl">
                    <h4 className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                      <ShieldAlert className="w-3 h-3" /> UPSC Relevance
                    </h4>
                    <p className="text-red-100/80 text-sm leading-relaxed font-medium">{selectedBoundary.upsc_relevance}</p>
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
               initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
               className="absolute right-0 top-0 bottom-0 w-full md:w-[400px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
            >
               <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                  <Badge className={`mb-4 border-0 font-black px-3 py-1 uppercase tracking-widest text-[10px] ${selectedPlate.size === 'major' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-700 text-slate-300'}`}>
                    {selectedPlate.size} Lithospheric Plate
                  </Badge>
                  <h3 className="text-3xl font-black text-white leading-none tracking-tighter mb-6">{selectedPlate.name}</h3>
                  <div className="bg-slate-950 p-5 rounded-2xl border border-white/5">
                    <h4 className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Layers className="w-3 h-3" /> Plate Characteristics
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{selectedPlate.description}</p>
                  </div>
               </div>
               <PanelFooter onClose={handleClearSelection} />
            </motion.div>
          )}

          {/* HAZARD SELECTED */}
          {selectedHazard && !selectedPlate && !selectedBoundary && (
             <motion.div 
                key="panel-hazard"
                initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute right-0 top-0 bottom-0 w-full md:w-[400px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
             >
                <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg shrink-0 mb-6 bg-orange-500/20 text-orange-400 border border-orange-500/30">
                      {selectedHazard.type === 'earthquake' ? <Activity className="w-8 h-8" /> : 
                       selectedHazard.type === 'volcano' ? <Volcano className="w-8 h-8" /> : 
                       <Waves className="w-8 h-8" />}
                    </div>
                    <Badge className="bg-orange-600 text-white mb-2 uppercase tracking-widest border-0 text-[9px] font-black">{selectedHazard.type}</Badge>
                    <h3 className="text-3xl font-black text-white leading-none tracking-tighter mb-4">{selectedHazard.name}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">{selectedHazard.description}</p>
                </div>
                <PanelFooter onClose={handleClearSelection} />
             </motion.div>
          )}

          {/* DEFAULT PLACEHOLDER */}
          {!selectedBoundary && !selectedPlate && !selectedHazard && (
             <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-[450px] bg-slate-900/40 backdrop-blur-md border-l border-white/5 z-10 flex-col items-center justify-center p-8 text-center pointer-events-none transition-opacity duration-300">
              <div className="w-24 h-24 rounded-full bg-red-950/50 border border-red-900/50 flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-red-500/50" />
              </div>
              <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest mb-3">Tectonics Matrix</h3>
              <p className="text-xs text-slate-500 font-bold tracking-wider leading-relaxed max-w-xs">
                Select any plate, fault line, or geological hazard on the map to visualize the active lithosphere dynamics.
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
