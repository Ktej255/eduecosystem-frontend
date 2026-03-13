"use client";

import React, { useState, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, Line, ZoomableGroup } from 'react-simple-maps';
import { OCEAN_CURRENTS } from '../data/ocean-current-data';
import { OceanCurrent } from '../data/ocean-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Info, Crosshair, Thermometer, Wind, Eye, Waves, Navigation, Target, ChevronRight } from 'lucide-react';
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
    
    // ENSO Logic: Reverses Peru Current, warms it up. 
    // In a real system, path points would reverse, but simple-maps Line doesn't support strokeDashoffset natively.
    // We will render it using SVG standard path logic via framer-motion inside the map layer to enable flow.
    let strokeColor = current.type === 'warm' ? '#fb923c' : '#38bdf8'; // Warm: Orange, Cold: Sky Blue
    let strokeWidth = isSelected ? 3 : 1.5;
    
    if (enosActive && current.id === 'peru-humboldt') {
      strokeColor = '#ef4444'; // Turns red during El Niño
      strokeWidth = 4;
    }

    if (enosActive && current.id === 'south-equatorial-pacific') {
      strokeColor = '#818cf8'; // Weakens during El Niño
    }

    // Since react-simple-maps 'Line' draws great circles between two points, 
    // we iterate over the waypoints and draw segments.
    return (
      <g 
        key={current.id}
        onMouseEnter={() => setSelectedCurrent(current)}
        onMouseLeave={() => setSelectedCurrent(null)}
        className="cursor-pointer"
        style={{ opacity: isSelected ? 1 : 0.6 }}
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
             <Line
              key={`${current.id}-${i}`}
              from={from}
              to={to}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              className={isSelected ? "animate-pulse" : ""}
            />
          );
        })}
      </g>
    );
  };

  return (
    <div className="w-full h-full min-h-[700px] bg-slate-950 rounded-3xl border border-blue-900/40 shadow-2xl overflow-hidden flex flex-col font-sans relative">
      
      {/* HUD HEADER */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-950 border-b border-blue-900/40 p-5 flex flex-col md:flex-row items-center justify-between gap-4 z-10 relative">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
            <Waves className="w-6 h-6 text-blue-400" />
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
                ? 'bg-red-500 hover:bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] border border-red-400' 
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            <Thermometer className={`w-4 h-4 ${enosActive ? 'animate-pulse' : ''}`} />
            {enosActive ? 'El Niño Active' : 'Trigger El Niño'}
          </button>

          <div className="bg-slate-900 p-1 rounded-xl border border-slate-800 flex">
            {(['all', 'warm', 'cold', 'gyres'] as ViewMode[]).map(mode => (
              <button
                key={mode}
                onClick={() => { setViewMode(mode); setActiveGyre('All'); }}
                className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors ${
                  viewMode === mode 
                    ? mode === 'warm' ? 'bg-orange-500/20 text-orange-400' 
                      : mode === 'cold' ? 'bg-sky-500/20 text-sky-400'
                      : 'bg-indigo-500/30 text-indigo-300'
                    : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
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
        <div className="flex-1 bg-[#020617] relative overflow-hidden">
          
          {/* Topographically styled ocean background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617] opacity-60" />

          {/* If Gyre Mode, show the Gyre selectors bounding boxes at top left overlay */}
          <AnimatePresence>
            {viewMode === 'gyres' && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="absolute top-6 left-6 z-10 bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-indigo-500/30 flex flex-col gap-2"
              >
                <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest px-2 mb-1">Focus Gyre</div>
                {['North Atlantic', 'South Atlantic', 'North Pacific', 'South Pacific', 'Indian Ocean'].map(g => (
                  <button
                    key={g}
                    onClick={() => setActiveGyre(g as OceanCurrent['gyre'])}
                    className={`text-left px-4 py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${
                      activeGyre === g ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800'
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
            <ZoomableGroup zoom={1} minZoom={1} maxZoom={4} translateExtent={[[-400, -200], [400, 200]]}>
              
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

              {/* Draw All Currents */}
              {filteredCurrents.map(current => (
                <AnimatedFlowLine key={`current-${current.id}`} current={current} />
              ))}

            </ZoomableGroup>
          </ComposableMap>

          {/* ENSO HUD Overlay - Only shows when El Nino is active */}
          <AnimatePresence>
            {enosActive && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-xl border border-red-500/40 p-6 rounded-3xl shadow-[0_0_50px_rgba(239,68,68,0.2)] text-center max-w-xl flex items-center gap-6"
              >
                <div className="w-16 h-16 bg-red-950 rounded-full flex items-center justify-center shrink-0 border border-red-500/50">
                   <Thermometer className="w-8 h-8 text-red-500 animate-pulse" />
                </div>
                <div className="text-left">
                  <h3 className="text-red-400 font-black uppercase text-lg tracking-tight">El Niño Event Active</h3>
                  <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                    The Peru (Humboldt) Current has reversed direction and warmed. The Walker circulation has shifted eastward, pooling warm water against the South American coast.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* DETAILS SIDE PANEL (35%) */}
        <AnimatePresence>
          {selectedCurrent ? (
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[400px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
            >
              <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                
                <Badge className={`mb-6 border-0 font-black px-3 py-1 uppercase tracking-widest text-[10px] ${
                  selectedCurrent.type === 'warm' ? 'bg-orange-500/20 text-orange-400' : 'bg-sky-500/20 text-sky-400'
                }`}>
                  {selectedCurrent.type} Current
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
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/20 transition-all" />
                    <h4 className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Climatological Impact
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed relative z-10">{selectedCurrent.climate_effect}</p>
                  </div>

                  <div className="bg-slate-950 p-5 rounded-2xl border border-amber-500/20 relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1 h-full bg-amber-500" />
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
              <div className="w-24 h-24 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <Waves className="w-10 h-10 text-blue-500/50" />
              </div>
              <h3 className="text-xl font-black text-white/50 uppercase tracking-widest mb-3">Explore Currents</h3>
              <p className="text-xs text-slate-500 font-bold tracking-wider leading-relaxed max-w-xs">
                Hover over or click any animated current line on the global map to reveal its specific climatological impacts.
              </p>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
