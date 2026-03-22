"use client";

import React, { useState, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup, Line, useMapContext } from 'react-simple-maps';
import { INDIA_GEO_DATA } from '../data/india-geography-data';
import { GeoFeature, FeatureType, Tour, TourStep } from '../data/geo-types';
import { GEOGRAPHY_TOURS } from '../data/tours-data';
import { Search, MapPin, Info, Crosshair, Map, Mountain, Waves, Droplets, Target, ShieldQuestion, Trophy, ChevronRight, ChevronLeft, AlertTriangle, CloudRain, Landmark, Triangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  'biosphere': '#10b981', // Emerald
  'ramsar-site': '#14b8a6', // Teal
  'mountain-range': '#71717a', // Zinc
  'peak': '#f43f5e', // Rose
  'unesco-site': '#eab308', // Yellow
  'tiger-reserve': '#f97316', // Orange
  'wetland': '#06b6d4' // Cyan
};

const CATEGORY_ICONS: Partial<Record<FeatureType, React.ReactNode>> = {
  'national-park': <MapPin className="w-4 h-4" />,
  'river': <Waves className="w-4 h-4" />,
  'mineral': <Mountain className="w-4 h-4" />,
  'pass': <Target className="w-4 h-4" />,
  'dam': <Droplets className="w-4 h-4" />,
  'ramsar-site': <CloudRain className="w-4 h-4" />,
  'mountain-range': <Mountain className="w-4 h-4" />,
  'peak': <Triangle className="w-4 h-4" />,
  'unesco-site': <Landmark className="w-4 h-4" />,
  'tiger-reserve': <Target className="w-4 h-4" />,
  'biosphere': <ShieldQuestion className="w-4 h-4" />,
  'wetland': <CloudRain className="w-4 h-4" />
};

const BASIN_COLORS: Record<string, { dark: string, light: string }> = {
  'Ganga': { dark: '#3b82f6', light: '#2563eb' }, // Blue
  'Brahmaputra': { dark: '#a855f7', light: '#9333ea' }, // Purple
  'Indus': { dark: '#10b981', light: '#059669' }, // Emerald
  'Peninsular-East': { dark: '#f59e0b', light: '#d97706' }, // Amber
  'Peninsular-West': { dark: '#f43f5e', light: '#e11d48' }, // Rose
  'Inland': { dark: '#94a3b8', light: '#64748b' }, // Slate
  'default': { dark: '#0ea5e9', light: '#0284c7' } // Cyan fallback
};

const AVAILABLE_LAYERS = [
  { id: 'national-park', label: 'National Parks', icon: <MapPin className="w-3 h-3" /> },
  { id: 'tiger-reserve', label: 'Tiger Reserves', icon: <Target className="w-3 h-3" /> },
  { id: 'biosphere', label: 'Biosphere', icon: <ShieldQuestion className="w-3 h-3" /> },
  { id: 'river', label: 'Rivers', icon: <Waves className="w-3 h-3" /> },
  { id: 'ramsar-site', label: 'Ramsar Sites', icon: <CloudRain className="w-3 h-3" /> },
  { id: 'mountain-range', label: 'Mountains', icon: <Mountain className="w-3 h-3" /> },
  { id: 'mineral', label: 'Minerals', icon: <Mountain className="w-3 h-3" /> },
  { id: 'pass', label: 'Passes', icon: <Target className="w-3 h-3" /> },
  { id: 'dam', label: 'Dams', icon: <Droplets className="w-3 h-3" /> },
  { id: 'unesco-site', label: 'UNESCO Sites', icon: <Landmark className="w-3 h-3" /> }
];

// Utility to generate a smoothed SVG path from an array of [x,y] points using Quadratic Bezier curves
const getSmoothPath = (points: [number, number][]) => {
  if (!points || points.length === 0) return '';
  if (points.length === 1) return `M ${points[0][0]},${points[0][1]}`;
  
  let d = `M ${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length - 1; i++) {
    // Calculate midpoints to use as curve anchors
    const xc = (points[i][0] + points[i + 1][0]) / 2;
    const yc = (points[i][1] + points[i + 1][1]) / 2;
    d += ` Q ${points[i][0]},${points[i][1]} ${xc},${yc}`;
  }
  // Connect to the final point
  d += ` L ${points[points.length - 1][0]},${points[points.length - 1][1]}`;
  return d;
};

export default function IndiaInteractiveMap() {
  const { theme } = useTheme();
  const isDark = theme === 'dark' || theme === 'system'; // Fallback logic if needed
  const [activeLayers, setActiveLayers] = useState<Set<string>>(new Set(['river', 'ramsar-site', 'national-park']));
  const [selectedLocation, setSelectedLocation] = useState<GeoFeature | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [masteredLocations, setMasteredLocations] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Map Camera State for Tours/Zooming
  const [mapCenter, setMapCenter] = useState<[number, number]>([78.9629, 22.5937]);
  const [mapZoom, setMapZoom] = useState(1.2);
  const [currentTour, setCurrentTour] = useState<Tour | null>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const router = useRouter();

  // Fetch mastered locations on mount
  React.useEffect(() => {
    const fetchProgress = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const res = await fetch('/api/user-progress', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          if (data.masteredIds) {
            setMasteredLocations(new Set(data.masteredIds));
          }
        }
      } catch (err) {
        console.error("Failed to fetch geography progress:", err);
      }
    };
    fetchProgress();
  }, []);

  const toggleMasteredStatus = async (locationId: string) => {
    const isCurrentlyMastered = masteredLocations.has(locationId);
    const newStatus = !isCurrentlyMastered;

    // 1. Optimistic UI Update
    setMasteredLocations(prev => {
      const next = new Set(prev);
      if (newStatus) next.add(locationId);
      else next.delete(locationId);
      return next;
    });

    // 2. Persistent Backend Sync
    try {
      const token = localStorage.getItem('token');
      await fetch('/api/user-progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ locationId, isMastered: newStatus })
      });
    } catch (err) {
      console.error("Failed to sync progress:", err);
      // Rollback on error
      setMasteredLocations(prev => {
        const next = new Set(prev);
        if (isCurrentlyMastered) next.add(locationId);
        else next.delete(locationId);
        return next;
      });
    }
  };

  
  const mapFill = isDark ? "#0b1120" : "#f8fafc";
  const mapStroke = isDark ? "#1e293b" : "#cbd5e1";
  const toggleLayer = (layer: string) => {
    setActiveLayers(prev => {
      const next = new Set(prev);
      if (layer === 'all') {
        if (next.size === AVAILABLE_LAYERS.length) {
          next.clear();
        } else {
          AVAILABLE_LAYERS.forEach(l => next.add(l.id));
        }
      } else {
        if (next.has(layer)) {
          next.delete(layer);
        } else {
          next.add(layer);
        }
      }
      return next;
    });
  };

  const toggleAllLayers = () => {
    if (activeLayers.size === AVAILABLE_LAYERS.length) {
      setActiveLayers(new Set());
    } else {
      setActiveLayers(new Set(AVAILABLE_LAYERS.map(l => l.id)));
    }
  };

  // Quiz Mode State
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizType, setQuizType] = useState<'pin' | 'sequence'>('pin');
  const [quizQuestion, setQuizQuestion] = useState<GeoFeature | null>(null);
  const [sequenceTargets, setSequenceTargets] = useState<GeoFeature[]>([]);
  const [userSequence, setUserSequence] = useState<GeoFeature[]>([]);
  const [sequenceCriteria, setSequenceCriteria] = useState<'N-S' | 'E-W'>('N-S');
  const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });
  const [showAnswerLine, setShowAnswerLine] = useState<{from: [number, number], to: [number, number], correct: boolean} | null>(null);

  const startQuiz = (type: 'pin' | 'sequence' = 'pin') => {
    setIsQuizMode(true);
    setQuizType(type);
    setSelectedLocation(null);
    setShowAnswerLine(null);
    setUserSequence([]);
    if (type === 'pin') {
      pickNextQuestion();
    } else {
      pickNextSequence();
    }
  };

  const pickNextQuestion = () => {
    const random = INDIA_GEO_DATA[Math.floor(Math.random() * INDIA_GEO_DATA.length)];
    setQuizQuestion(random);
    setShowAnswerLine(null);
  };

  const pickNextSequence = () => {
    // Pick 4 random features
    const shuffled = [...INDIA_GEO_DATA].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);
    const criteria = Math.random() > 0.5 ? 'N-S' : 'E-W';
    
    setSequenceTargets(selected);
    setSequenceCriteria(criteria);
    setUserSequence([]);
    setShowAnswerLine(null);
  };

  const endQuiz = () => {
    setIsQuizMode(false);
    setQuizQuestion(null);
    setShowAnswerLine(null);
    setQuizScore({ correct: 0, total: 0 });
  };

  const handleMarkerClick = (location: GeoFeature) => {
    if (isQuizMode) {
      if (quizType === 'pin' && quizQuestion) {
        const isCorrect = location.id === quizQuestion.id;
        setQuizScore(prev => ({ correct: prev.correct + (isCorrect ? 1 : 0), total: prev.total + 1 }));
        
        setShowAnswerLine({
          from: [location.coordinates.lng, location.coordinates.lat],
          to: [quizQuestion.coordinates.lng, quizQuestion.coordinates.lat],
          correct: isCorrect
        });

        setTimeout(() => {
          pickNextQuestion();
        }, 2500);
      } else if (quizType === 'sequence') {
        if (userSequence.find(item => item.id === location.id)) return;
        
        const nextSeq = [...userSequence, location];
        setUserSequence(nextSeq);
        
        if (nextSeq.length === 4) {
          // Verify
          const sorted = [...nextSeq].sort((a, b) => {
            if (sequenceCriteria === 'N-S') return b.coordinates.lat - a.coordinates.lat;
            return a.coordinates.lng - b.coordinates.lng;
          });
          
          const isCorrect = nextSeq.every((val, index) => val.id === sorted[index].id);
          setQuizScore(prev => ({ correct: prev.correct + (isCorrect ? 1 : 0), total: prev.total + 1 }));
          
          setTimeout(() => {
            pickNextSequence();
          }, 3000);
        }
      }
      return;
    }

    setSelectedLocation(location);
    setCurrentImageIndex(0);
    // Auto-center on click if not in quiz mode
    if (!isQuizMode) {
      setMapCenter([location.coordinates.lng, location.coordinates.lat]);
      setMapZoom(3);
    }
  };

  const filteredData = useMemo(() => {
    return INDIA_GEO_DATA.filter((item) => {
      const matchesCategory = activeLayers.has(item.type);
      const matchesRegion = selectedRegion === 'all' || item.region === selectedRegion;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.region.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesRegion && matchesSearch;
    });
  }, [activeLayers, selectedRegion, searchQuery]);

  const lineFeatures = useMemo(() => filteredData.filter(item => item.path), [filteredData]);
  const pointFeatures = useMemo(() => filteredData.filter(item => !item.path), [filteredData]);


  const uniqueRegions = useMemo(() => {
    const regions = new Set(INDIA_GEO_DATA.map(item => item.region));
    return Array.from(regions).sort();
  }, []);

  // TOUR LOGIC
  const startTour = (tour: Tour) => {
    setCurrentTour(tour);
    setActiveStepIndex(0);
    setIsQuizMode(false);
    setSelectedLocation(null);
    executeTourStep(tour.steps[0]);
  };

  const executeTourStep = (step: TourStep) => {
    const feature = INDIA_GEO_DATA.find(f => f.id === step.featureId);
    if (feature) {
      setMapCenter([feature.coordinates.lng, feature.coordinates.lat]);
      setMapZoom(step.zoom);
      setSelectedLocation(feature);
    }
  };

  const nextTourStep = () => {
    if (!currentTour) return;
    const nextIdx = (activeStepIndex + 1) % currentTour.steps.length;
    setActiveStepIndex(nextIdx);
    executeTourStep(currentTour.steps[nextIdx]);
  };

  const prevTourStep = () => {
    if (!currentTour) return;
    const prevIdx = (activeStepIndex - 1 + currentTour.steps.length) % currentTour.steps.length;
    setActiveStepIndex(prevIdx);
    executeTourStep(currentTour.steps[prevIdx]);
  };

  const exitTour = () => {
    setCurrentTour(null);
    setActiveStepIndex(0);
    setMapZoom(1.2);
    setMapCenter([78.9629, 22.5937]);
    setSelectedLocation(null);
  };

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

          <div className="hidden lg:block">
            <Select value={selectedRegion} onValueChange={setSelectedRegion} disabled={isQuizMode}>
              <SelectTrigger className="w-[180px] bg-slate-900/80 border-white/10 text-white rounded-xl h-10 focus:ring-emerald-500/50 transition-all">
                <SelectValue placeholder="All Regions" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10 text-white">
                <SelectItem value="all">All Regions</SelectItem>
                {uniqueRegions.map(region => (
                  <SelectItem key={region} value={region}>{region}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {!isQuizMode ? (
            <div className="flex items-center gap-2">
              <Button 
                onClick={() => startQuiz('pin')}
                className="bg-amber-500 hover:bg-amber-400 text-black font-black uppercase tracking-widest text-[9px] h-9 px-4 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.2)] whitespace-nowrap transition-all border border-amber-400"
              >
                <ShieldQuestion className="w-3.5 h-3.5 mr-2" /> Pin Point
              </Button>
              <Button 
                onClick={() => startQuiz('sequence')}
                className="bg-indigo-500 hover:bg-indigo-400 text-white font-black uppercase tracking-widest text-[9px] h-9 px-4 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.2)] whitespace-nowrap transition-all border border-indigo-400"
              >
                <Trophy className="w-3.5 h-3.5 mr-2" /> sequence
              </Button>
            </div>
          ) : (
            <Button 
              onClick={endQuiz}
              variant="destructive"
              className="font-black uppercase tracking-widest text-[9px] h-9 px-4 rounded-xl shadow-[0_0_15px_rgba(239,68,68,0.2)] whitespace-nowrap bg-red-600 hover:bg-red-500 border border-red-500"
            >
              Exit Mission
            </Button>
          )}
        </div>
      </div>

      {/* Multi-Select Layer Toggle UI — Floating Pill Design */}
      {!isQuizMode && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30 flex flex-wrap justify-center gap-2 bg-slate-900/90 backdrop-blur-xl p-2 rounded-full border border-emerald-500/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] max-w-[95%] md:max-w-none">
          <Button
            size="sm"
            variant="ghost"
            onClick={toggleAllLayers}
            className={`h-9 px-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
              activeLayers.size === AVAILABLE_LAYERS.length
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {activeLayers.size === AVAILABLE_LAYERS.length ? 'Clear All' : 'Show All'}
          </Button>

          <Button
            size="sm"
            variant="ghost"
            onClick={() => setActiveLayers(new Set(['river', 'ramsar-site', 'national-park']))}
            className="h-9 px-4 rounded-full text-[10px] font-black uppercase tracking-widest text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 transition-all border border-transparent hover:border-amber-500/30"
          >
            UPSC Mode
          </Button>

          <div className="w-px h-6 bg-white/10 self-center mx-1" />

          {AVAILABLE_LAYERS.map((layer) => {
            const isActive = activeLayers.has(layer.id);
            const color = CATEGORY_COLORS[layer.id as keyof typeof CATEGORY_COLORS];
            return (
              <button
                key={layer.id}
                onClick={() => toggleLayer(layer.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.1em] transition-all border ${
                  isActive
                    ? 'bg-slate-800 text-white border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]'
                    : 'bg-transparent text-slate-500 border-transparent hover:text-slate-300'
                }`}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isActive ? color : '#334155' }} />
                {layer.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex relative overflow-hidden">
        
        {/* SVG MAP ENGINE — Using flex-1 to expand when sidebar closes */}
        <div className="flex-1 relative overflow-hidden flex items-center justify-center cursor-crosshair transition-all duration-300"
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
              <radialGradient id="masteredGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#10b981" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </radialGradient>
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
            @keyframes flow-animation {
              from { stroke-dashoffset: 24; }
              to { stroke-dashoffset: 0; }
            }
            .quiz-ping-anim {
              animation: quiz-target-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
            }
            .laser-line-anim {
              animation: flow-animation 1s linear infinite;
            }
            .river-flow {
              animation: flow-animation 1.5s linear infinite;
            }
            .water-release-anim {
              animation: flow-animation 0.8s linear infinite;
            }
          `}</style>

          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 1000, center: [80, 22] }}
            className="w-full h-full max-h-[800px]"
          >
            <ZoomableGroup 
              center={mapCenter} 
              zoom={mapZoom} 
              onMoveEnd={({ coordinates, zoom }) => {
                setMapCenter(coordinates as [number, number]);
                setMapZoom(zoom);
              }}
              minZoom={1} 
              maxZoom={8} 
              translateExtent={[[0, 0], [800, 600]]}
            >
              
              {/* 1. ALWAYS RENDER BASE MAP FIRST */}
              <Geographies geography={INDIA_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={mapFill}
                      stroke={mapStroke}
                      strokeWidth={0.6}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: isDark ? '#162032' : '#e2e8f0', outline: 'none', stroke: isDark ? '#334155' : '#94a3b8' },
                        pressed: { fill: isDark ? '#0f172a' : '#cbd5e1', outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* 2. RENDER LINE FEATURES (Rivers, Mountain Ranges) */}
              {lineFeatures.map((feature) => (
                <FeaturePath 
                  key={feature.id} 
                  feature={feature} 
                  isSelected={selectedLocation?.id === feature.id}
                  isMastered={masteredLocations.has(feature.id)}
                  isDark={isDark}
                  onClick={(nodeType) => handleMarkerClick(nodeType ? { ...feature, nodeType: (nodeType === 'origin' ? 'Origin' : nodeType === 'mouth' ? 'Mouth' : 'Confluence') as 'Origin' | 'Mouth' | 'Confluence' } : feature)}
                />
              ))}

              {/* 3. RENDER POINT FEATURES (Markers) */}
              {pointFeatures.map((marker) => {
                const isSelected = selectedLocation?.id === marker.id;
                const isActualTarget = isQuizMode && quizQuestion?.id === marker.id;
                const color = CATEGORY_COLORS[marker.type];
                
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
                      
                      <circle r={20} fill="transparent" style={{ cursor: isQuizMode ? 'crosshair' : 'pointer' }} />

                      {/* Mastered Glow Layer */}
                      {masteredLocations.has(marker.id) && !isQuizMode && (
                        <circle r={12} fill="url(#masteredGlow)" className="animate-pulse" style={{ animationDuration: '4s' }} />
                      )}

                      {marker.type === 'dam' && !isQuizMode && (
                        <g transform="translate(-12, -12)">
                          {/* Architectural Dam Vector */}
                          <path d="M4,20 L20,20 L16,6 L8,6 Z" fill={isDark ? "#334155" : "#64748b"} stroke={isDark ? "#cbd5e1" : "#334155"} strokeWidth="1.5" />
                          {/* Water Release Vector */}
                          <path d="M12,14 L12,22 M9,16 L9,22 M15,16 L15,22" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" className="water-release-anim" />
                        </g>
                      )}

                      {!isQuizMode && marker.type !== 'dam' && marker.type !== 'biosphere' && (
                        <>
                          <circle r={8} fill={`url(#radialGlow-${marker.type})`} opacity={isSelected ? 1 : 0} />
                          <circle r={3.5} fill={color} stroke={isDark ? "#000" : "#fff"} strokeWidth={0.5} />
                          {isSelected && (
                            <circle r={6} fill="none" stroke={color} strokeWidth={1} style={{ animation: 'marker-pulse 2s infinite' }} />
                          )}
                        </>
                      )}

                      {marker.type === 'biosphere' && !isQuizMode && (
                        <g style={{ cursor: 'pointer' }}>
                          {/* Transition Zone (Outer Pulse) */}
                          <circle r={14} fill="rgba(16, 185, 129, 0.15)" className="animate-ping" style={{ animationDuration: '3s' }} />
                          {/* Buffer Zone (Middle) */}
                          <circle r={9} fill="rgba(16, 185, 129, 0.4)" stroke="#10b981" strokeWidth={1} />
                          {/* Core Zone (Center Solid) */}
                          <circle r={4} fill="#059669" stroke="#ffffff" strokeWidth={1.5} />
                        </g>
                      )}

                      {marker.type === 'wetland' && !isQuizMode && (
                        <g style={{ cursor: 'pointer' }}>
                          {/* Outer Water Ripple (Animated) */}
                          <circle r={12} fill="rgba(6, 182, 212, 0.2)" className="animate-ping" style={{ animationDuration: '2.5s' }} />
                          {/* Inner Wetland Base */}
                          <circle r={6} fill="#0891b2" stroke="#cffafe" strokeWidth={1.5} />
                          {/* Stylized wave/water line inside the dot */}
                          <path d="M -3 1 Q 0 -2 3 1" fill="none" stroke="#ffffff" strokeWidth={1} />
                          <path d="M -3 -1 Q 0 2 3 -1" fill="none" stroke="#ffffff" strokeWidth={1} />
                        </g>
                      )}

                      {isQuizMode && (
                        <>
                          <circle r={3.5} fill={showAnswerLine && isActualTarget ? "#22c55e" : "#475569"} stroke={isDark ? "#0f172a" : "#fff"} strokeWidth={1} />
                        </>
                      )}
                    </motion.g>

                    {!isQuizMode && (
                      <text
                        textAnchor="middle"
                        y={-10}
                        style={{ 
                          fontFamily: "system-ui", 
                          fontSize: isSelected ? "5.5px" : "4.5px", 
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

          {/* TOUR OVERLAY INTERFACE */}
          <AnimatePresence>
            {currentTour && (
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="absolute top-6 right-6 w-80 bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl z-30 overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      Story Tour Active
                    </span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400" onClick={exitTour}>
                      <ChevronRight className="w-4 h-4 rotate-45" /> 
                    </Button>
                  </div>
                  
                  <h4 className="text-xl font-black text-white leading-tight mb-2">{currentTour.steps[activeStepIndex].title}</h4>
                  <p className="text-slate-400 text-sm italic mb-6 leading-relaxed">
                    {currentTour.steps[activeStepIndex].description}
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon" className="h-10 w-10 border-white/10 rounded-xl" onClick={prevTourStep}>
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <div className="flex-1 bg-slate-950/80 h-10 rounded-xl border border-white/5 flex items-center justify-center gap-1.5 px-3">
                      {currentTour.steps.map((_, idx) => (
                        <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === activeStepIndex ? 'bg-emerald-500 flex-1' : 'bg-slate-800 w-2'}`} />
                      ))}
                    </div>
                    <Button variant="outline" size="icon" className="h-10 w-10 border-white/10 rounded-xl" onClick={nextTourStep}>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="bg-emerald-500/5 px-5 py-3 border-t border-white/5 flex items-center justify-between">
                   <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{currentTour.name}</p>
                   <p className="text-[9px] font-black text-emerald-400">STEP {activeStepIndex + 1}/{currentTour.steps.length}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TOUR START BUTTON (Visible when no tour is active) */}
          {!currentTour && !isQuizMode && (
            <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
              {GEOGRAPHY_TOURS.map(tour => (
                <Button 
                  key={tour.id}
                  onClick={() => startTour(tour)}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-black text-[10px] uppercase tracking-widest h-10 px-5 rounded-xl shadow-xl border border-indigo-400/30 group"
                >
                  <Map className="w-3.5 h-3.5 mr-2 group-hover:rotate-12 transition-transform" /> Start {tour.name}
                </Button>
              ))}
            </div>
          )}

          {/* Quiz HUD Overlay — Enhanced with dramatic glassmorphism */}
          <AnimatePresence>
            {isQuizMode && (
              <motion.div 
                initial={{ y: 50, opacity: 0, scale: 0.95 }} 
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.95 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur-2xl border border-white/10 p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center max-w-lg w-[calc(100%-40px)] z-20"
              >
                <div className="flex items-center gap-4 w-full mb-4">
                  <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 p-2.5 rounded-xl">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Mission Progress</p>
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-xl font-black text-white leading-none">{quizScore.correct}</span>
                      <span className="text-xs font-bold text-slate-500 leading-none pb-0.5">/ {quizScore.total}</span>
                    </div>
                    <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        className="bg-amber-500 h-full rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: `${quizScore.total === 0 ? 0 : (quizScore.correct/quizScore.total)*100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {quizType === 'pin' && quizQuestion && (
                  <div className="bg-slate-950/80 p-4 border border-white/5 rounded-2xl w-full relative overflow-hidden">
                    <p className="text-sky-500/80 text-[9px] font-black uppercase tracking-[0.2em] mb-1.5 flex items-center justify-center gap-2 relative z-10">
                      <Target className="w-3 h-3" /> Acquisition Target
                    </p>
                    <h3 className="text-2xl font-black text-white tracking-tight relative z-10">{quizQuestion.name}</h3>
                    <p className="text-slate-400 text-xs font-bold mt-1 uppercase tracking-widest relative z-10">{quizQuestion.region}</p>
                  </div>
                )}

                {quizType === 'sequence' && (
                  <div className="w-full space-y-3">
                    <div className="bg-indigo-500/10 p-3 border border-indigo-500/20 rounded-2xl">
                      <p className="text-indigo-400 text-[9px] font-black uppercase tracking-[0.2em] mb-1">Objective</p>
                      <h4 className="text-white font-black text-lg">Order from {sequenceCriteria === 'N-S' ? 'North to South' : 'West to East'}</h4>
                      <div className="mt-2 flex gap-1.5 justify-center">
                        {[0, 1, 2, 3].map(i => (
                          <div key={i} className={`w-3.5 h-3.5 rounded-full border ${userSequence[i] ? 'bg-indigo-500 border-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]' : 'bg-slate-800 border-white/5'}`} />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {sequenceTargets.map(target => (
                        <div key={target.id} className={`px-3 py-1.5 rounded-lg border text-[10px] font-bold transition-all ${
                          userSequence.find(u => u.id === target.id) 
                            ? 'bg-slate-800 text-slate-500 border-white/5' 
                            : 'bg-slate-950 text-white border-white/10'
                        }`}>
                          {target.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {showAnswerLine && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className={`mt-4 font-black uppercase tracking-[0.2em] text-[10px] py-1.5 px-4 rounded-xl border ${
                      showAnswerLine.correct 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]' 
                        : 'bg-red-500/10 text-red-400 border-red-500/30'
                    }`}
                  >
                    {showAnswerLine.correct ? 'Target Verified' : 'Missed Coordinate'}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* DETAILS SIDE PANEL — Using motion.div with dynamic width for flex expansion */}
        <AnimatePresence>
          {!isQuizMode && selectedLocation && (
            <motion.div 
              initial={{ width: 0, opacity: 0, x: "100%" }}
              animate={{ width: "420px", opacity: 1, x: 0 }}
              exit={{ width: 0, opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="h-full bg-slate-900/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl z-20 flex flex-col shrink-0 overflow-hidden"
            >
              <div className="p-8 overflow-y-auto flex-1 custom-scrollbar min-w-[420px]">
                
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

                {/* ENTHUSIAST IMAGE CAROUSEL */}
                {selectedLocation.images && selectedLocation.images.length > 0 && (
                  <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 bg-slate-950 aspect-video relative group">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={selectedLocation.images[currentImageIndex]}
                        src={selectedLocation.images[currentImageIndex]} 
                        alt={selectedLocation.name}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                    
                    {/* Navigation Overlays */}
                    {selectedLocation.images.length > 1 && (
                      <>
                        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="bg-black/50 hover:bg-black/80 text-white rounded-full w-8 h-8"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(prev => (prev === 0 ? selectedLocation.images!.length - 1 : prev - 1));
                            }}
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="bg-black/50 hover:bg-black/80 text-white rounded-full w-8 h-8"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(prev => (prev === selectedLocation.images!.length - 1 ? 0 : prev + 1));
                            }}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        {/* Dot Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full">
                          {selectedLocation.images.map((_, idx) => (
                            <div 
                              key={idx} 
                              className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-3' : 'bg-white/30'}`} 
                            />
                          ))}
                        </div>
                      </>
                    )}
                    
                    <div className="absolute top-4 left-4">
                      <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        <p className="text-[9px] font-black text-white uppercase tracking-[0.2em]">Visual Layer {currentImageIndex + 1}/{selectedLocation.images.length}</p>
                      </div>
                    </div>
                  </div>
                )}

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
                  {selectedLocation.type === 'unesco-site' && (
                    <Badge className="bg-amber-500/20 text-amber-500 border border-amber-500/30 font-black px-3 py-1.5 uppercase tracking-widest text-[9px]">
                      World Heritage
                    </Badge>
                  )}
                  {selectedLocation.type === 'tiger-reserve' && (
                    <Badge className="bg-orange-500/20 text-orange-500 border border-orange-500/30 font-black px-3 py-1.5 uppercase tracking-widest text-[9px]">
                      Project Tiger
                    </Badge>
                  )}
                  {selectedLocation.type === 'biosphere' && (
                    <Badge className="bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 font-black px-3 py-1.5 uppercase tracking-widest text-[9px]">
                      MAB (UNESCO)
                    </Badge>
                  )}
                </div>

                {/* CURRENT AFFAIRS ALERT */}
                {selectedLocation.in_news_24m && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-8"
                  >
                    <Alert className="bg-rose-950/40 border-rose-500/50 text-rose-200">
                      <AlertTriangle className="h-4 w-4 text-rose-400" />
                      <AlertTitle className="text-rose-400 font-black uppercase tracking-widest text-[10px] mb-2 leading-none">🚨 Current Affairs Alert</AlertTitle>
                      <AlertDescription className="text-sm font-medium leading-relaxed italic">
                        {selectedLocation.news_context}
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}

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
                    
                    {selectedLocation.pyq_details && (
                      <div className="mt-4 p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 relative z-10">
                         <p className="text-indigo-300 text-[11px] leading-relaxed italic">{selectedLocation.pyq_details}</p>
                      </div>
                    )}

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
              
              <div className="p-5 bg-slate-950/90 border-t border-white/5 flex gap-3 backdrop-blur-xl min-w-[420px]">
                <Button 
                  className={`flex-1 font-black uppercase tracking-widest text-xs h-12 rounded-xl shadow-lg transition-all ${
                    masteredLocations.has(selectedLocation.id)
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                      : 'bg-white hover:bg-slate-200 text-black'
                  }`}
                  onClick={() => toggleMasteredStatus(selectedLocation.id)}
                >
                  {masteredLocations.has(selectedLocation.id) ? (
                    <>Mastered <Trophy className="w-4 h-4 ml-2 fill-current" /></>
                  ) : (
                    <>Mark as Mastered <Target className="w-4 h-4 ml-2" /></>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-white/10 text-slate-400 hover:text-white font-black uppercase tracking-widest text-[9px] h-12 rounded-xl"
                  onClick={() => router.push(`/student/upsc/geography/session?block=${selectedLocation.type}`)}
                >
                  Related Modules <ChevronRight className="w-3.5 h-3.5 ml-2" />
                </Button>
                <Button variant="outline" className="w-12 h-12 rounded-xl border-slate-700 text-slate-400 hover:text-white" onClick={() => setSelectedLocation(null)}>
                  <Crosshair className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        

      </div>
    </div>
  );
}

function FeaturePath({ feature, isSelected, isDark, onClick, isMastered }: { feature: GeoFeature, isSelected: boolean, isDark: boolean, onClick: (nodeType?: 'origin' | 'mouth') => void, isMastered: boolean }) {
  const { projection } = useMapContext();
  if (!feature.path || feature.path.length < 2) return null;

  const projectedPoints = feature.path
    .map(coord => projection ? projection(coord as [number, number]) : null)
    .filter(Boolean) as [number, number][];

  const pathString = getSmoothPath(projectedPoints);
  if (!pathString) return null;

  const isMountain = feature.type === 'mountain-range';
  const isRiver = feature.type === 'river';
  
  // Get color based on basin or category
  let color = CATEGORY_COLORS[feature.type];
  if (isRiver && feature.basin && BASIN_COLORS[feature.basin]) {
    color = isDark ? BASIN_COLORS[feature.basin].dark : BASIN_COLORS[feature.basin].light;
  } else if (isRiver && BASIN_COLORS['default']) {
    color = isDark ? BASIN_COLORS['default'].dark : BASIN_COLORS['default'].light;
  }

  // River Hierarchy logic
  const isMain = feature.river_hierarchy === 'main';
  const isDistributary = feature.river_hierarchy === 'distributary';
  const strokeWidth = isMountain 
    ? (isSelected ? 6 : 4) 
    : isRiver 
      ? (isMain ? (isSelected ? 5 : 3) : (isSelected ? 3 : 1.5))
      : (isSelected ? 3.5 : 2);

  return (
    <motion.g 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      style={{ cursor: 'pointer' }}
    >
      {/* Interaction Buffer */}
      <path d={pathString} fill="none" stroke="transparent" strokeWidth={20} onClick={() => onClick()} />
      
      <path 
        d={pathString} 
        fill="none" 
        stroke={isSelected ? (isDark ? "#ffffff" : "#000000") : color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeDasharray={isDistributary ? "4 4" : "none"}
        style={{ 
          filter: `drop-shadow(0 0 ${isMountain ? 8 : (isSelected ? 6 : (isMastered ? 4 : 2))}px ${isMastered ? '#fbbf24' : color})`,
          opacity: isMountain ? 0.4 : 1,
          transition: 'all 0.3s ease'
        }}
        onClick={() => onClick()}
      />
      
      {isRiver && (
        <>
          <path 
            d={pathString} 
            fill="none" 
            stroke={isDark ? "#cffafe" : "#0ea5e9"} 
            strokeWidth={isSelected ? 1.5 : 0.75} 
            strokeDasharray="4 8" 
            strokeLinecap="round"
            className="river-flow"
            style={{ opacity: isSelected ? 1 : 0.4 }}
            pointerEvents="none"
          />

          {/* Hierarchical Nodes: Origin (Source) and Mouth (Delta/Confluence) */}
          <Marker coordinates={feature.path[0] as [number, number]} onClick={() => onClick('origin')}>
             {isMastered && <circle r={8} fill="url(#masteredGlow)" className="animate-pulse" style={{ animationDuration: '4s' }} />}
             <circle r={isSelected ? 3 : 2} fill={isDark ? "#fff" : "#000"} stroke={color} strokeWidth={1} />
             {isSelected && <text y={-8} textAnchor="middle" className="text-[4px] font-bold fill-white">SOURCE</text>}
          </Marker>
          
          <Marker coordinates={feature.path[feature.path.length - 1] as [number, number]} onClick={() => onClick('mouth')}>
             {isMastered && <circle r={10} fill="url(#masteredGlow)" className="animate-pulse" style={{ animationDuration: '4s' }} />}
             <circle r={isSelected ? 4 : 2.5} fill="none" stroke={color} strokeWidth={isSelected ? 1.5 : 1} />
             <circle r={isSelected ? 1.5 : 1} fill={color} />
             {isSelected && <text y={8} textAnchor="middle" className="text-[4px] font-bold fill-white">MOUTH</text>}
          </Marker>
        </>
      )}

      {/* Label */}
      <Marker coordinates={[feature.coordinates.lng, feature.coordinates.lat]} pointerEvents="none">
        <text
          textAnchor="middle"
          y={-10}
          style={{ 
            fontFamily: "system-ui", 
            fontSize: isSelected ? "5.5px" : "3.8px", 
            fill: isSelected ? (isDark ? "#ffffff" : "#000000") : color, 
            fontWeight: isSelected ? 900 : 700, 
            opacity: isSelected ? 1 : (isMountain ? 0 : 0.5),
            filter: isSelected ? `drop-shadow(0 0 4px ${color})` : 'none',
            transition: 'all 0.2s',
            pointerEvents: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.12em'
          }}
        >
          {feature.name}
        </text>
      </Marker>
    </motion.g>
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
