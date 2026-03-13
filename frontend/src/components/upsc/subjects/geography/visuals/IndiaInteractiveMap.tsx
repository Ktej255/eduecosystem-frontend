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

// Using a reliable absolute URL for India TopoJSON
const INDIA_TOPO_JSON = "https://raw.githubusercontent.com/datameet/maps/master/Country/india-composite.json";

const CATEGORY_COLORS: Record<FeatureType, string> = {
  'national-park': '#16a34a', // Green
  'river': '#2563eb', // Blue
  'dam': '#0284c7', // Sky
  'mineral': '#d97706', // Amber
  'pass': '#dc2626', // Red
  'climate-zone': '#9333ea',
  'plate': '#475569',
  'soil': '#a16207',
  'volcano': '#ef4444',
  'biosphere': '#059669'
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
      
      // Calculate distance line (just visual representation from clicked to correct)
      setShowAnswerLine({
        from: [location.coordinates.lng, location.coordinates.lat],
        to: [quizQuestion.coordinates.lng, quizQuestion.coordinates.lat],
        correct: isCorrect
      });

      setTimeout(() => {
        pickNextQuestion();
      }, 2000);
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
    <div className="w-full h-full min-h-[700px] bg-slate-950 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col font-sans relative">
      
      {/* Top Navigation & Filter Bar */}
      <div className="bg-slate-900 border-b border-white/10 p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-10 relative">
        <div className="flex flex-col">
          <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2">
            <Map className="w-6 h-6 text-emerald-400" />
            India Interactive Atlas
          </h2>
          <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">Master 500+ UPSC Locations</p>
        </div>

        <div className="flex-1 flex items-center gap-4 justify-end w-full md:w-auto">
          <div className="relative w-64 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Search Kaziranga, Narmada..." 
              className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 rounded-xl max-w-sm h-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={isQuizMode}
            />
          </div>

          {!isQuizMode ? (
            <Button 
              onClick={startQuiz}
              className="bg-amber-500 hover:bg-amber-600 text-black font-black uppercase tracking-widest text-xs h-10 px-6 rounded-xl shadow-lg shadow-amber-500/20 whitespace-nowrap"
            >
              <ShieldQuestion className="w-4 h-4 mr-2" /> Start Map Quiz
            </Button>
          ) : (
            <Button 
              onClick={endQuiz}
              variant="destructive"
              className="font-black uppercase tracking-widest text-xs h-10 px-6 rounded-xl shadow-lg whitespace-nowrap"
            >
              End Quiz
            </Button>
          )}
        </div>
      </div>

      {/* Category Toggles (Hidden in Quiz Mode) */}
      {!isQuizMode && (
        <div className="bg-slate-900/50 p-2 flex items-center gap-2 overflow-x-auto border-b border-white/5 no-scrollbar z-10 relative px-4">
          <FilterButton active={activeCategory === 'all'} onClick={() => setActiveCategory('all')} label="All Features" color="#cbd5e1" icon={<MapPin className="w-3 h-3" />} />
          <FilterButton active={activeCategory === 'national-park'} onClick={() => setActiveCategory('national-park')} label="National Parks" color={CATEGORY_COLORS['national-park']} icon={<MapPin className="w-3 h-3" />} />
          <FilterButton active={activeCategory === 'river'} onClick={() => setActiveCategory('river')} label="Rivers" color={CATEGORY_COLORS['river']} icon={<Waves className="w-3 h-3" />} />
          <FilterButton active={activeCategory === 'mineral'} onClick={() => setActiveCategory('mineral')} label="Minerals" color={CATEGORY_COLORS['mineral']} icon={<Mountain className="w-3 h-3" />} />
          <FilterButton active={activeCategory === 'pass'} onClick={() => setActiveCategory('pass')} label="Passes" color={CATEGORY_COLORS['pass']} icon={<Target className="w-3 h-3" />} />
          <FilterButton active={activeCategory === 'dam'} onClick={() => setActiveCategory('dam')} label="Dams" color={CATEGORY_COLORS['dam']} icon={<Droplets className="w-3 h-3" />} />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row relative">
        
        {/* SVG MAP ENGINE */}
        <div className="flex-1 bg-[#020617] relative overflow-hidden flex items-center justify-center cursor-crosshair">
          
          {/* Map Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 1000, center: [80, 22] }}
            className="w-full h-full max-h-[800px]"
          >
            <ZoomableGroup zoom={1} minZoom={1} maxZoom={8} translateExtent={[[0, 0], [800, 600]]}>
              
              {/* India Base Map */}
              {/* Note: In a real environment with the JSON file hosted, this Geographies block renders the states */}
              {/* Fallback rendering of an approximate bounding box for demonstration if JSON fails to load quickly */}
              <Geographies geography={INDIA_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#0f172a"
                      stroke="#334155"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: '#1e293b', outline: 'none' },
                        pressed: { fill: '#0f172a', outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* In case TopoJSON does not load locally due to CORS in testing, rendering a simplified outline */}
              <Geography 
                geography={{
                  type: "Feature",
                  geometry: {
                    type: "Polygon",
                    coordinates: [[[68, 7], [97, 7], [97, 37], [68, 37], [68, 7]]]
                  },
                  properties: {}
                }} 
                fill="transparent" 
                stroke="#334155" 
                strokeDasharray="4 4" 
                opacity={0.3} 
              />

              {/* Data Markers */}
              {filteredData.map((marker) => {
                const isSelected = selectedLocation?.id === marker.id;
                const isTarget = isQuizMode && quizQuestion?.id === marker.id && showAnswerLine;
                
                // Hide markers slightly in quiz mode until asked
                const opacity = isQuizMode ? (showAnswerLine ? 0.3 : 1) : (isSelected ? 1 : 0.8);
                const scale = isSelected ? 1.5 : 1;

                return (
                  <Marker 
                    key={marker.id} 
                    coordinates={[marker.coordinates.lng, marker.coordinates.lat]}
                    onClick={() => handleMarkerClick(marker)}
                    style={{
                      default: { outline: 'none', cursor: 'pointer' },
                      hover: { outline: 'none', cursor: 'pointer' },
                      pressed: { outline: 'none' },
                    }}
                  >
                    <motion.g animate={{ scale, opacity }} transition={{ duration: 0.2 }}>
                      {isQuizMode ? (
                        <circle r={4} fill="#64748b" stroke="#0f172a" strokeWidth={1} />
                      ) : (
                        <>
                          <circle r={6} fill={CATEGORY_COLORS[marker.type]} stroke="#020617" strokeWidth={1.5} />
                          {isSelected && (
                            <circle r={12} fill="none" stroke={CATEGORY_COLORS[marker.type]} strokeWidth={2} className="animate-ping" opacity={0.5} />
                          )}
                        </>
                      )}
                    </motion.g>
                    {!isQuizMode && (
                      <text
                        textAnchor="middle"
                        y={-10}
                        style={{ fontFamily: "system-ui", fontSize: "4px", fill: "#94a3b8", fontWeight: "bold", opacity: isSelected ? 1 : 0 }}
                      >
                        {marker.name}
                      </text>
                    )}
                  </Marker>
                );
              })}

              {/* Quiz Result Line (Draw line from guessed marker to actual marker) */}
              {isQuizMode && showAnswerLine && (
                <>
                  <Line
                    from={showAnswerLine.from}
                    to={showAnswerLine.to}
                    stroke={showAnswerLine.correct ? "#22c55e" : "#ef4444"}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                  />
                  {/* Highlight correct answer specifically */}
                  <Marker coordinates={showAnswerLine.to}>
                    <circle r={8} fill="#22c55e" className="animate-pulse" />
                  </Marker>
                </>
              )}
            </ZoomableGroup>
          </ComposableMap>

          {/* Quiz HUD Overlay */}
          <AnimatePresence>
            {isQuizMode && quizQuestion && (
              <motion.div 
                initial={{ y: 50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl flex flex-col items-center text-center max-w-lg w-full z-20"
              >
                <div className="flex items-center gap-4 w-full mb-4">
                  <div className="bg-amber-500/20 text-amber-400 p-2 rounded-xl">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Score: {quizScore.correct} / {quizScore.total}</p>
                    <div className="w-full bg-slate-800 h-2 rounded-full mt-1">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${quizScore.total === 0 ? 0 : (quizScore.correct/quizScore.total)*100}%` }} />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 p-4 border border-white/5 rounded-2xl w-full">
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Locate on Map:</p>
                  <h3 className="text-2xl font-black text-white">{quizQuestion.name}</h3>
                  <p className="text-sky-400 text-sm font-medium mt-1">{quizQuestion.region}</p>
                </div>

                {showAnswerLine && (
                  <div className={`mt-4 font-black uppercase tracking-widest text-lg ${showAnswerLine.correct ? 'text-emerald-400' : 'text-red-400'}`}>
                    {showAnswerLine.correct ? 'Target Acquired!' : 'Missed!'}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* DETAILS SIDE PANEL (35%) */}
        <AnimatePresence>
          {!isQuizMode && selectedLocation && (
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[400px] bg-slate-900 border-l border-white/10 shadow-2xl z-20 flex flex-col"
            >
              <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: `${CATEGORY_COLORS[selectedLocation.type]}20`, color: CATEGORY_COLORS[selectedLocation.type] }}>
                    {CATEGORY_ICONS[selectedLocation.type] || <MapPin className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white leading-tight">{selectedLocation.name}</h3>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">{selectedLocation.region}</p>
                  </div>
                </div>

                <div className="flex gap-2 mb-6">
                  <Badge className="bg-slate-800 hover:bg-slate-700 text-white border-0 font-bold px-3 py-1 uppercase tracking-widest text-[10px]">
                    {selectedLocation.type.replace('-', ' ')}
                  </Badge>
                  <Badge className={`border-0 font-bold px-3 py-1 uppercase tracking-widest text-[10px] ${
                    selectedLocation.difficulty === 'high-yield' ? 'bg-rose-500/20 text-rose-400' :
                    selectedLocation.difficulty === 'medium' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-slate-800 text-slate-400'
                  }`}>
                    {selectedLocation.difficulty}
                  </Badge>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Info className="w-3 h-3" /> Geographic Context
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{selectedLocation.description}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Crosshair className="w-3 h-3" /> Key Characteristics
                    </h4>
                    <ul className="space-y-2">
                      {selectedLocation.characteristics.map((char, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: CATEGORY_COLORS[selectedLocation.type] }} />
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-2xl p-4">
                    <h4 className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Target className="w-3 h-3" /> UPSC Objective
                    </h4>
                    <p className="text-indigo-200 text-sm leading-relaxed">{selectedLocation.upsc_relevance}</p>
                    
                    {selectedLocation.pyq_years.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-[10px] text-indigo-500 font-black uppercase tracking-widest flex items-center">PYQs:</span>
                        {selectedLocation.pyq_years.map(year => (
                          <span key={year} className="text-[10px] font-bold text-white bg-indigo-600 px-2 py-0.5 rounded-md">{year}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </div>
              
              <div className="p-4 bg-slate-950 border-t border-white/5">
                <Button className="w-full bg-white hover:bg-slate-200 text-black font-black uppercase tracking-widest text-xs h-12 rounded-xl">
                  Launch Related Modules <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Placeholder when nothing is selected */}
        {!isQuizMode && !selectedLocation && (
          <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-[400px] bg-slate-900/80 backdrop-blur-sm border-l border-white/5 z-10 flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full border border-dashed border-slate-600 flex items-center justify-center mb-6 text-slate-500">
              <Crosshair className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-wider mb-2">Select a Location</h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Click on any marker on the map to view deep geographic insights and UPSC prelims relevance.
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
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
        active 
          ? 'bg-slate-800 text-white shadow-lg' 
          : 'bg-transparent border-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-300'
      }`}
      style={{ borderColor: active ? color : 'transparent' }}
    >
      <div style={{ color }}>{icon}</div>
      {label}
    </button>
  );
}
