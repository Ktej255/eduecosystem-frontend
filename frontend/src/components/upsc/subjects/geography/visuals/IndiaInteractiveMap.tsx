"use client";

import React, { useState, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup, Line } from 'react-simple-maps';
import { INDIA_GEO_DATA } from '../data/india-geography-data';
import { GeoFeature, FeatureType } from '../data/geo-types';
import { Search, MapPin, Info, Crosshair, Map, Mountain, Waves, Droplets, Target, ShieldQuestion, Trophy, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

// Using local official India TopoJSON with PIB-compliant boundaries
const INDIA_TOPO_JSON = "/maps/india-official.json";

// Enhanced vibrant color palette for features
const CATEGORY_COLORS: Record<FeatureType, string> = {
  'national-park': '#22c55e', // Bright Green
  'river': '#3b82f6', // Bright Blue
  'dam': '#38bdf8', // Light Sky
  'mineral': '#f59e0b', // Amber/Gold
  'pass': '#ef4444', // Red
  'climate-zone': '#a855f7', // Purple
  'plate': '#94a3b8', // Slate
  'soil': '#d97706', // Brown/Dark Amber
  'volcano': '#f97316', // Orange
  'biosphere': '#10b981' // Emerald
};

const CATEGORY_ICONS: Partial<Record<FeatureType, React.ReactNode>> = {
  'national-park': <MapPin className="w-4 h-4" />,
  'river': <Waves className="w-4 h-4" />,
  'mineral': <Mountain className="w-4 h-4" />,
  'pass': <Target className="w-4 h-4" />,
  'dam': <Droplets className="w-4 h-4" />
};

export default function IndiaInteractiveMap() {
  const [activeCategory, setActiveCategory] = useState<FeatureType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<GeoFeature | null>(null);
  
  // Quiz Mode State
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizQuestion, setQuizQuestion] = useState<GeoFeature | null>(null);
  const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });
  const [showAnswerLine, setShowAnswerLine] = useState<{from: [number, number], to: [number, number], correct: boolean} | null>(null);

  const startQuiz = () => {
    setIsQuizMode(true);
    setSelectedLocation(null);
    setShowAnswerLine(null);
    pickNextQuestion();
  };

  const pickNextQuestion = () => {
    const random = INDIA_GEO_DATA[Math.floor(Math.random() * INDIA_GEO_DATA.length)];
    setQuizQuestion(random);
    setShowAnswerLine(null);
  };

  const endQuiz = () => {
    setIsQuizMode(false);
    setQuizQuestion(null);
    setShowAnswerLine(null);
    setQuizScore({ correct: 0, total: 0 });
  };

  const handleMarkerClick = (location: GeoFeature) => {
    if (isQuizMode && quizQuestion) {
      const isCorrect = location.id === quizQuestion.id;
      setQuizScore(prev => ({ correct: prev.correct + (isCorrect ? 1 : 0), total: prev.total + 1 }));
      
      // Calculate distance line (visual representation from clicked to correct)
      setShowAnswerLine({
        from: [location.coordinates.lng, location.coordinates.lat],
        to: [quizQuestion.coordinates.lng, quizQuestion.coordinates.lat],
        correct: isCorrect
      });

      setTimeout(() => {
        pickNextQuestion();
      }, 2500);
      return;
    }

    setSelectedLocation(location);
  };

  const filteredData = useMemo(() => {
    return INDIA_GEO_DATA.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.type === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.region.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full h-full min-h-[750px] bg-slate-950 rounded-3xl border border-emerald-900/30 shadow-2xl overflow-hidden flex flex-col font-sans relative">
      
      {/* HUD HEADER — Enhanced with deep emerald gradient */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950/40 to-teal-950/20 border-b border-emerald-500/20 p-5 flex flex-col md:flex-row items-center justify-between gap-4 z-10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/[0.03] to-transparent pointer-events-none" />
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40 relative">
            <Map className="w-6 h-6 text-emerald-400 relative z-10" />
            <div className="absolute inset-0 rounded-2xl blur-lg bg-emerald-500/20" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white uppercase tracking-wider">India Interactive Atlas</h2>
            <p className="text-emerald-200/60 text-[10px] font-bold tracking-widest uppercase">Master 500+ UPSC Locations</p>
          </div>
        </div>

        <div className="flex-1 flex items-center gap-4 justify-end w-full md:w-auto relative z-10">
          <div className="relative w-64 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500/50" />
            <Input 
              placeholder="Search Kaziranga, Narmada..." 
              className="pl-10 bg-slate-900/80 border-white/10 text-white placeholder:text-slate-500 rounded-xl max-w-sm h-10 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={isQuizMode}
            />
          </div>

          {!isQuizMode ? (
            <Button 
              onClick={startQuiz}
              className="bg-amber-500 hover:bg-amber-400 text-black font-black uppercase tracking-widest text-xs h-10 px-6 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] whitespace-nowrap transition-all border border-amber-400"
            >
              <ShieldQuestion className="w-4 h-4 mr-2" /> Start Map Quiz
            </Button>
          ) : (
            <Button 
              onClick={endQuiz}
              variant="destructive"
              className="font-black uppercase tracking-widest text-xs h-10 px-6 rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.3)] whitespace-nowrap bg-red-600 hover:bg-red-500 border border-red-500"
            >
              End Quiz Phase
            </Button>
          )}
        </div>
      </div>

      {/* Category Toggles (Hidden in Quiz Mode) — Enhanced with glowing active states */}
      {!isQuizMode && (
        <div className="bg-slate-900/80 p-2.5 flex items-center gap-2 overflow-x-auto border-b border-white/5 no-scrollbar z-10 relative px-5 shadow-lg backdrop-blur-md">
          <FilterButton active={activeCategory === 'all'} onClick={() => setActiveCategory('all')} label="All Features" color="#f8fafc" icon={<MapPin className="w-3.5 h-3.5" />} />
          <div className="w-px h-6 bg-white/10 mx-1 shrink-0" />
          <FilterButton active={activeCategory === 'national-park'} onClick={() => setActiveCategory('national-park')} label="National Parks" color={CATEGORY_COLORS['national-park']} icon={<MapPin className="w-3.5 h-3.5" />} />
          <FilterButton active={activeCategory === 'river'} onClick={() => setActiveCategory('river')} label="Rivers" color={CATEGORY_COLORS['river']} icon={<Waves className="w-3.5 h-3.5" />} />
          <FilterButton active={activeCategory === 'mineral'} onClick={() => setActiveCategory('mineral')} label="Minerals" color={CATEGORY_COLORS['mineral']} icon={<Mountain className="w-3.5 h-3.5" />} />
          <FilterButton active={activeCategory === 'pass'} onClick={() => setActiveCategory('pass')} label="Passes" color={CATEGORY_COLORS['pass']} icon={<Target className="w-3.5 h-3.5" />} />
          <FilterButton active={activeCategory === 'dam'} onClick={() => setActiveCategory('dam')} label="Dams" color={CATEGORY_COLORS['dam']} icon={<Droplets className="w-3.5 h-3.5" />} />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row relative">
        
        {/* SVG MAP ENGINE — Enhanced with deep atmospheric background */}
        <div className="flex-1 relative overflow-hidden flex items-center justify-center cursor-crosshair"
             style={{ background: 'radial-gradient(circle at 50% 50%, #080f1a 0%, #03060a 100%)' }}>
          
          {/* Map Grid & Fog Backgrounds */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)', backgroundSize: '48px 48px' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(16,185,129,0.03) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(59,130,246,0.03) 0%, transparent 50%)' }} />

          {/* SVG Definitions for Glows and Effects */}
          <svg className="absolute w-0 h-0">
            <defs>
              {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
                <radialGradient key={`glow-${cat}`} id={`radialGlow-${cat}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={color} stopOpacity="0.8" />
                  <stop offset="50%" stopColor={color} stopOpacity="0.2" />
                  <stop offset="100%" stopColor={color} stopOpacity="0" />
                </radialGradient>
              ))}
              <filter id="laserLineGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          <style>{`
            @keyframes marker-pulse {
              0%, 100% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.3); opacity: 0.3; }
            }
            @keyframes quiz-target-ping {
              0% { r: 6; opacity: 1; stroke-width: 2; }
              100% { r: 25; opacity: 0; stroke-width: 0; }
            }
            @keyframes laser-dash {
              to { stroke-dashoffset: -20; }
            }
            .quiz-ping-anim {
              animation: quiz-target-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
            }
            .laser-line-anim {
              animation: laser-dash 1s linear infinite;
            }
          `}</style>

          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 1000, center: [80, 22] }}
            className="w-full h-full max-h-[800px]"
          >
            <ZoomableGroup zoom={1} minZoom={1} maxZoom={8} translateExtent={[[0, 0], [800, 600]]}>
              
              {/* India Base Map — Metallic styling */}
              <Geographies geography={INDIA_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#0b1120"
                      stroke="#1e293b"
                      strokeWidth={0.6}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: '#162032', outline: 'none', stroke: '#334155' },
                        pressed: { fill: '#0f172a', outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Data Markers — Upgraded with glowing nested groups */}
              {filteredData.map((marker) => {
                const isSelected = selectedLocation?.id === marker.id;
                const isActualTarget = isQuizMode && quizQuestion?.id === marker.id;
                const color = CATEGORY_COLORS[marker.type];
                
                // Dim non-selected markers slightly in exploration mode.
                // In quiz mode, hide markers strongly unless it's the target being revealed.
                let opacity = isSelected ? 1 : 0.6;
                if (isQuizMode) opacity = (showAnswerLine && isActualTarget) ? 1 : 0.2;
                
                const scale = isSelected || (showAnswerLine && isActualTarget) ? 1.6 : 1;

                return (
                  <Marker 
                    key={marker.id} 
                    coordinates={[marker.coordinates.lng, marker.coordinates.lat]}
                    onClick={() => handleMarkerClick(marker)}
                    style={{
                      default: { outline: 'none', cursor: isQuizMode ? 'crosshair' : 'pointer' },
                      hover: { outline: 'none', cursor: isQuizMode ? 'crosshair' : 'pointer' },
                      pressed: { outline: 'none' },
                    }}
                    className="group"
                  >
                    <motion.g animate={{ scale, opacity }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                      
                      {/* Base Map Dot (Exploration Mode) */}
                      {!isQuizMode && (
                        <>
                          <circle r={8} fill={`url(#radialGlow-${marker.type})`} opacity={isSelected ? 1 : 0} />
                          <circle r={3} fill={color} stroke="#000" strokeWidth={0.5} />
                          {isSelected && (
                            <circle r={6} fill="none" stroke={color} strokeWidth={1} style={{ animation: 'marker-pulse 2s infinite' }} />
                          )}
                        </>
                      )}

                      {/* Quiz Mode Dots */}
                      {isQuizMode && (
                        <>
                          <circle r={3.5} fill={showAnswerLine && isActualTarget ? "#22c55e" : "#475569"} stroke="#0f172a" strokeWidth={1} />
                        </>
                      )}
                    </motion.g>

                    {/* Hover labels (Disabled in quiz mode) */}
                    {!isQuizMode && (
                      <text
                        textAnchor="middle"
                        y={-10}
                        style={{ 
                          fontFamily: "system-ui", 
                          fontSize: isSelected ? "5px" : "4px", 
                          fill: isSelected ? "#ffffff" : "#cbd5e1", 
                          fontWeight: isSelected ? 900 : 700, 
                          opacity: isSelected ? 1 : 0,
                          filter: isSelected ? `drop-shadow(0 0 4px ${color})` : 'none',
                          transition: 'all 0.2s',
                          pointerEvents: 'none'
                        }}
                        className="group-hover:opacity-100"
                      >
                        {marker.name}
                      </text>
                    )}
                  </Marker>
                );
              })}

              {/* Quiz Result Line & Target Ping — Enhanced Laser Effect */}
              {isQuizMode && showAnswerLine && (
                <>
                  <Line
                    from={showAnswerLine.from}
                    to={showAnswerLine.to}
                    stroke={showAnswerLine.correct ? "#22c55e" : "#ef4444"}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeDasharray="4 6"
                    className="laser-line-anim"
                    filter="url(#laserLineGlow)"
                  />
                  {/* Outer glowing halo on the target */}
                  <Marker coordinates={showAnswerLine.to}>
                    <circle r={6} fill="none" stroke={showAnswerLine.correct ? "#22c55e" : "#f59e0b"} className="quiz-ping-anim" />
                    <circle r={6} fill="none" stroke={showAnswerLine.correct ? "#22c55e" : "#f59e0b"} className="quiz-ping-anim" style={{ animationDelay: '0.4s' }} />
                  </Marker>
                </>
              )}
            </ZoomableGroup>
          </ComposableMap>

          {/* Quiz HUD Overlay — Enhanced with dramatic glassmorphism */}
          <AnimatePresence>
            {isQuizMode && quizQuestion && (
              <motion.div 
                initial={{ y: 50, opacity: 0, scale: 0.95 }} 
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.95 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center max-w-lg w-[calc(100%-40px)] z-20"
              >
                <div className="flex items-center gap-4 w-full mb-5">
                  <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 p-3 rounded-2xl shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1.5">Mission Control Status</p>
                    <div className="flex items-end gap-2 mb-1.5">
                      <span className="text-2xl font-black text-white leading-none">{quizScore.correct}</span>
                      <span className="text-sm font-bold text-slate-500 leading-none pb-0.5">/ {quizScore.total}</span>
                    </div>
                    <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        className="bg-amber-500 h-full rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]" 
                        initial={{ width: 0 }}
                        animate={{ width: `${quizScore.total === 0 ? 0 : (quizScore.correct/quizScore.total)*100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-5 border border-white/5 rounded-2xl w-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <p className="text-sky-500/80 text-[10px] font-black uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-2 relative z-10">
                    <Target className="w-3 h-3" /> Target Acquisition Coordinate
                  </p>
                  <h3 className="text-3xl font-black text-white tracking-tight relative z-10">{quizQuestion.name}</h3>
                  <p className="text-slate-400 text-sm font-bold mt-1.5 uppercase tracking-widest relative z-10">{quizQuestion.region}</p>
                </div>

                {showAnswerLine && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className={`mt-5 font-black uppercase tracking-[0.2em] text-sm py-2 px-6 rounded-xl border ${
                      showAnswerLine.correct 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]' 
                        : 'bg-red-500/10 text-red-400 border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                    }`}
                  >
                    {showAnswerLine.correct ? 'Target Verified' : 'Missed Coordinate'}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* DETAILS SIDE PANEL (35%) — Enhanced with glow styling */}
        <AnimatePresence>
          {!isQuizMode && selectedLocation && (
            <motion.div 
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[420px] bg-slate-900/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl z-20 flex flex-col"
            >
              <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                
                {/* Header Profile */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 relative" 
                       style={{ backgroundColor: `${CATEGORY_COLORS[selectedLocation.type]}15`, border: `1px solid ${CATEGORY_COLORS[selectedLocation.type]}40` }}>
                    <span style={{ color: CATEGORY_COLORS[selectedLocation.type] }} className="relative z-10">
                      {React.cloneElement((CATEGORY_ICONS[selectedLocation.type] || <MapPin />) as React.ReactElement<any>, { className: "w-8 h-8" })}
                    </span>
                    <div className="absolute inset-0 blur-lg rounded-2xl" style={{ backgroundColor: `${CATEGORY_COLORS[selectedLocation.type]}20` }} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white leading-tight tracking-tighter mb-1">{selectedLocation.name}</h3>
                    <p className="text-slate-400 text-xs font-black uppercase tracking-widest">{selectedLocation.region}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge className="border-0 font-black px-3 py-1.5 uppercase tracking-widest text-[9px] text-white shadow-lg"
                         style={{ backgroundColor: CATEGORY_COLORS[selectedLocation.type], boxShadow: `0 0 12px ${CATEGORY_COLORS[selectedLocation.type]}40` }}>
                    {selectedLocation.type.replace('-', ' ')}
                  </Badge>
                  <Badge className={`border border-white/10 font-black px-3 py-1.5 uppercase tracking-widest text-[9px] ${
                    selectedLocation.difficulty === 'high-yield' ? 'bg-rose-500/10 text-rose-400 border-rose-500/30' :
                    selectedLocation.difficulty === 'medium' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' :
                    'bg-slate-800 text-slate-400'
                  }`}>
                    {selectedLocation.difficulty}
                  </Badge>
                </div>

                <div className="space-y-6">
                  {/* Context Block */}
                  <div className="bg-slate-950/80 p-5 rounded-2xl border border-white/5">
                    <h4 className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Info className="w-3 h-3" /> Geographic Context
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{selectedLocation.description}</p>
                  </div>

                  {/* Characteristics block */}
                  <div className="bg-slate-950/80 p-5 rounded-2xl border border-white/5">
                    <h4 className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Crosshair className="w-3 h-3" /> Key Characteristics
                    </h4>
                    <ul className="space-y-3">
                      {selectedLocation.characteristics.map((char, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_5px_currentColor]" style={{ backgroundColor: CATEGORY_COLORS[selectedLocation.type] }} />
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* UPSC Relevance block */}
                  <div className="bg-indigo-950/30 border-l-[3px] border-indigo-500 rounded-r-2xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <h4 className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-3 flex items-center gap-2 relative z-10">
                      <Target className="w-3 h-3" /> UPSC Objective Note
                    </h4>
                    <p className="text-indigo-100 text-sm leading-relaxed font-medium relative z-10">{selectedLocation.upsc_relevance}</p>
                    
                    {selectedLocation.pyq_years.length > 0 && (
                      <div className="mt-5 flex flex-wrap items-center gap-2 relative z-10 pt-4 border-t border-indigo-500/20">
                        <span className="text-[9px] text-indigo-400/80 font-black uppercase tracking-widest flex items-center">PYQ Mentions:</span>
                        {selectedLocation.pyq_years.map(year => (
                          <span key={year} className="text-[10px] font-bold text-white bg-indigo-500/20 border border-indigo-500/30 px-2.5 py-1 rounded-lg">
                            {year}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </div>
              
              <div className="p-5 bg-slate-950/90 border-t border-white/5 flex gap-3 backdrop-blur-xl">
                <Button className="flex-1 bg-white hover:bg-slate-200 text-black font-black uppercase tracking-widest text-xs h-12 rounded-xl shadow-lg">
                  Launch Related Modules <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="w-12 h-12 rounded-xl border-slate-700 text-slate-400 hover:text-white" onClick={() => setSelectedLocation(null)}>
                  <Crosshair className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Placeholder when nothing is selected */}
        {!isQuizMode && !selectedLocation && (
          <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-[420px] bg-slate-900/60 backdrop-blur-xl border-l border-white/5 z-10 flex-col items-center justify-center p-10 text-center transition-all">
            <div className="w-24 h-24 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center mb-8 text-slate-500 relative">
              <Crosshair className="w-10 h-10 relative z-10" />
              <div className="absolute inset-0 rounded-full bg-slate-700/20 blur-xl animate-pulse" />
            </div>
            <h3 className="text-2xl font-black text-white/50 uppercase tracking-widest mb-4">Location Matrix</h3>
            <p className="text-sm text-slate-500 font-bold leading-relaxed max-w-xs tracking-wider">
              Select any marker on the map to view deep geographic insights, characteristics, and historical <span className="text-indigo-400">UPSC Prelims</span> relevance.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

function FilterButton({ active, onClick, label, color, icon }: { active: boolean, onClick: () => void, label: string, color: string, icon: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
        active 
          ? 'bg-slate-800 text-white shadow-[0_4px_15px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-800 hover:text-slate-300'
      }`}
      style={{ 
        borderColor: active ? color : 'transparent',
        boxShadow: active ? `0 4px 15px ${color}15` : 'none',
        color: active ? color : undefined
      }}
    >
      <div style={{ color }}>{icon}</div>
      <span className={active ? "text-white" : ""}>{label}</span>
      {active && <div className="w-1.5 h-1.5 rounded-full ml-1" style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }} />}
    </button>
  );
}
