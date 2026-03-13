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

const CATEGORY_COLORS: Record<ResourceCategory, string> = {
  metallic: '#f59e0b',    // Amber
  'non-metallic': '#8b5cf6', // Violet
  energy: '#ef4444',      // Red
  atomic: '#06b6d4'       // Cyan
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

const BELT_COLORS = ['#f59e0b33', '#06b6d433', '#8b5cf633', '#ef444433'];

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
    <div className="w-full h-full min-h-[750px] bg-slate-950 rounded-3xl border border-amber-900/30 shadow-2xl overflow-hidden flex flex-col font-sans relative">
      
      {/* HUD HEADER */}
      <div className="bg-gradient-to-r from-slate-900 to-amber-950/30 border-b border-amber-900/30 p-5 flex flex-col md:flex-row items-center justify-between gap-4 z-10 relative">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
            <Pickaxe className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white uppercase tracking-wider">Resource Atlas</h2>
            <p className="text-amber-300/60 text-[10px] font-bold tracking-widest uppercase">India's Mineral & Energy Geography</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowBelts(!showBelts)}
            className={`flex items-center gap-2 h-10 px-5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              showBelts
                ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.4)] border border-amber-400'
                : 'bg-slate-800 hover:bg-slate-700 text-amber-500 border border-amber-900/50'
            }`}
          >
            <Layers className="w-4 h-4" />
            {showBelts ? 'Belts Active' : 'Show Mineral Belts'}
          </button>

          <div className="bg-slate-900 p-1 rounded-xl border border-slate-800 flex flex-wrap">
            <FilterBtn active={filterMode === 'all'} onClick={() => { setFilterMode('all'); handleClear(); }} label="All" />
            <FilterBtn active={filterMode === 'metallic'} onClick={() => { setFilterMode('metallic'); handleClear(); }} label="Metallic" color={CATEGORY_COLORS.metallic} />
            <FilterBtn active={filterMode === 'non-metallic'} onClick={() => { setFilterMode('non-metallic'); handleClear(); }} label="Non-Metal" color={CATEGORY_COLORS['non-metallic']} />
            <FilterBtn active={filterMode === 'energy'} onClick={() => { setFilterMode('energy'); handleClear(); }} label="Energy" color={CATEGORY_COLORS.energy} />
            <FilterBtn active={filterMode === 'atomic'} onClick={() => { setFilterMode('atomic'); handleClear(); }} label="Atomic" color={CATEGORY_COLORS.atomic} />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row relative">
        
        {/* MAP */}
        <div className="flex-1 bg-[#09090b] relative overflow-hidden flex items-center justify-center">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 1000, center: [82, 22] }}
            className="w-full h-full"
          >
            <ZoomableGroup zoom={1} minZoom={1} maxZoom={6}>
              <Geographies geography={INDIA_TOPO_JSON}>
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
                        hover: { fill: '#1c1c20', outline: 'none' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Mineral Belts as polygon overlays */}
              {showBelts && MINERAL_BELTS.map((belt, bIdx) => {
                const isSelected = selectedBelt?.id === belt.id;
                return (
                  <g key={belt.id} onClick={() => { handleClear(); setSelectedBelt(belt); }} className="cursor-pointer">
                    {belt.path.length > 2 && (
                      <>
                        {belt.path.map((point, i) => {
                          if (i === belt.path.length - 1) {
                            return (
                              <Line
                                key={`${belt.id}-close-${i}`}
                                from={point}
                                to={belt.path[0]}
                                stroke={isSelected ? '#f59e0b' : '#f59e0b80'}
                                strokeWidth={isSelected ? 2 : 1}
                                strokeDasharray={isSelected ? "0" : "4 2"}
                              />
                            );
                          }
                          return (
                            <Line
                              key={`${belt.id}-${i}`}
                              from={point}
                              to={belt.path[i + 1]}
                              stroke={isSelected ? '#f59e0b' : '#f59e0b80'}
                              strokeWidth={isSelected ? 2 : 1}
                              strokeDasharray={isSelected ? "0" : "4 2"}
                            />
                          );
                        })}
                        <Marker coordinates={belt.path[0]}>
                          <text
                            textAnchor="start"
                            dy={-8}
                            style={{ fontSize: '5px', fill: isSelected ? '#fbbf24' : '#78716c', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}
                          >
                            {belt.name}
                          </text>
                        </Marker>
                      </>
                    )}
                  </g>
                );
              })}

              {/* Resource Deposit Markers */}
              {filteredDeposits.map(deposit => {
                const isSelected = selectedDeposit?.id === deposit.id;
                const color = CATEGORY_COLORS[deposit.category];
                return (
                  <Marker
                    key={deposit.id}
                    coordinates={deposit.coord}
                    onClick={() => { handleClear(); setSelectedDeposit(deposit); }}
                    className="cursor-pointer"
                  >
                    <motion.g animate={{ scale: isSelected ? 1.8 : 1 }} transition={{ type: 'spring', stiffness: 300 }}>
                      <circle r={isSelected ? 5 : 3} fill={color} stroke="#000" strokeWidth={0.5} opacity={isSelected ? 1 : 0.85} />
                      {isSelected && (
                        <circle r={10} fill="none" stroke={color} strokeWidth={1} className="animate-ping" opacity={0.5} />
                      )}
                    </motion.g>
                    {isSelected && (
                      <text textAnchor="middle" dy={-10} style={{ fontSize: '5px', fill: '#fff', fontWeight: 900 }}>
                        {deposit.name}
                      </text>
                    )}
                  </Marker>
                );
              })}
            </ZoomableGroup>
          </ComposableMap>

          {/* Map Legend */}
          <div className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 hidden lg:block">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Resource Types</h4>
            <div className="flex flex-col gap-2">
              {(Object.entries(CATEGORY_COLORS) as [ResourceCategory, string][]).map(([cat, color]) => (
                <div key={cat} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-[10px] text-slate-300 font-bold uppercase">{CATEGORY_LABELS[cat]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats HUD */}
          <div className="absolute top-4 left-4 bg-slate-900/70 backdrop-blur-md p-3 rounded-xl border border-white/5 hidden md:block">
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-black text-amber-400">{filteredDeposits.length}</div>
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Deposits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-amber-400">{MINERAL_BELTS.length}</div>
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Belts</div>
              </div>
            </div>
          </div>
        </div>

        {/* SIDE PANEL */}
        <AnimatePresence mode="wait">
          {selectedDeposit && (
            <motion.div
              key="deposit-panel"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[450px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
            >
              <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                       style={{ backgroundColor: `${CATEGORY_COLORS[selectedDeposit.category]}20`, border: `1px solid ${CATEGORY_COLORS[selectedDeposit.category]}40` }}>
                    <span style={{ color: CATEGORY_COLORS[selectedDeposit.category] }}>{CATEGORY_ICONS[selectedDeposit.category]}</span>
                  </div>
                  <div>
                    <Badge className="border-0 font-black px-2 py-0.5 uppercase tracking-widest text-[9px] text-white mb-1"
                           style={{ backgroundColor: CATEGORY_COLORS[selectedDeposit.category] }}>
                      {selectedDeposit.type}
                    </Badge>
                    <h3 className="text-2xl font-black text-white leading-tight tracking-tighter">{selectedDeposit.name}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <InfoCard label="State" value={selectedDeposit.state} />
                  <InfoCard label="Geological Period" value={selectedDeposit.geological_period} />
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">{selectedDeposit.description}</p>

                <div className="bg-amber-950/20 border-l-2 border-amber-500 p-4 rounded-r-xl">
                  <h4 className="text-[10px] text-amber-500 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Target className="w-3 h-3" /> UPSC Relevance
                  </h4>
                  <p className="text-amber-50/80 text-sm leading-relaxed font-medium">{selectedDeposit.upsc_relevance}</p>
                </div>
              </div>
              <PanelFooter onClose={handleClear} />
            </motion.div>
          )}

          {selectedBelt && !selectedDeposit && (
            <motion.div
              key="belt-panel"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[450px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
            >
              <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                <Badge className="bg-amber-500/20 text-amber-400 border-0 font-black px-3 py-1 uppercase tracking-widest text-[10px] mb-4">
                  Mineral Belt
                </Badge>
                <h3 className="text-3xl font-black text-white leading-none tracking-tighter mb-4">{selectedBelt.name}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{selectedBelt.description}</p>

                <div className="bg-slate-950 p-4 rounded-2xl border border-white/5 mb-6">
                  <h4 className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Factory className="w-3 h-3" /> Primary Resources
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedBelt.primary_resources.map(r => (
                      <span key={r} className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 text-xs font-bold border border-slate-700">{r}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-950/20 border-l-2 border-amber-500 p-4 rounded-r-xl">
                  <h4 className="text-[10px] text-amber-500 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Target className="w-3 h-3" /> UPSC Relevance
                  </h4>
                  <p className="text-amber-50/80 text-sm leading-relaxed font-medium">{selectedBelt.upsc_relevance}</p>
                </div>
              </div>
              <PanelFooter onClose={handleClear} />
            </motion.div>
          )}

          {!selectedDeposit && !selectedBelt && (
            <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-[450px] bg-slate-900/40 backdrop-blur-md border-l border-white/5 z-10 flex-col items-center justify-center p-8 text-center pointer-events-none">
              <div className="w-24 h-24 rounded-full bg-amber-950/30 border border-amber-900/40 flex items-center justify-center mb-6">
                <Pickaxe className="w-10 h-10 text-amber-500/40" />
              </div>
              <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest mb-3">Resource Matrix</h3>
              <p className="text-xs text-slate-500 font-bold tracking-wider leading-relaxed max-w-xs">
                Click any deposit marker or mineral belt on the map to explore India's geological wealth.
              </p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-950 p-3 rounded-xl border border-white/5">
      <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-black mb-1">{label}</span>
      <span className="text-sm font-bold text-white">{value}</span>
    </div>
  );
}

function FilterBtn({ active, onClick, label, color }: { active: boolean; onClick: () => void; label: string; color?: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
        active ? 'bg-slate-800 text-white shadow-lg' : 'bg-transparent text-slate-400 hover:bg-slate-800'
      }`}
      style={active && color ? { borderBottom: `2px solid ${color}` } : { borderBottom: '2px solid transparent' }}
    >
      {label}
    </button>
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
