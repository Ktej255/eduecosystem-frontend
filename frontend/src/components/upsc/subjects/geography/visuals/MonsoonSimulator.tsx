"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudRain, Sun, Wind, Activity, ThermometerSun, Thermometer, AlertTriangle, CheckCircle, Info, Droplets } from 'lucide-react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const WORLD_TOPO_JSON = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface Toggles {
  itcz: boolean;
  elnino: boolean;
  lanina: boolean;
  posIod: boolean;
  negIod: boolean;
  mjo: boolean;
}

const TOGGLE_INFO = {
  itcz: { name: "ITCZ Active", icon: CloudRain, desc: "Inter Tropical Convergence Zone moves over Ganga plains. Acts as a magnet for monsoon winds, enhancing rainfall.", color: '#facc15' },
  elnino: { name: "El Niño", icon: ThermometerSun, desc: "Warming of central/eastern Pacific Ocean. Subsiding air over India suppresses cloud formation and monsoon rainfall.", color: '#ef4444' },
  lanina: { name: "La Niña", icon: Thermometer, desc: "Cooling of eastern Pacific. Enhances the Walker Circulation, pushing intense moisture and heavy rainfall toward India.", color: '#818cf8' },
  posIod: { name: "Positive IOD", icon: Activity, desc: "Western Indian Ocean becomes warmer than the eastern part. Pushes moisture toward India, often compensating for El Niño.", color: '#22c55e' },
  negIod: { name: "Negative IOD", icon: Activity, desc: "Eastern Indian Ocean becomes warmer. Pulls moisture away from India towards Indonesia, suppressing monsoon.", color: '#f97316' },
  mjo: { name: "MJO Active Phase", icon: Wind, desc: "Madden-Julian Oscillation brings a pulse of clouds and rainfall moving eastward. Activates the monsoon burst.", color: '#06b6d4' }
};

export default function MonsoonSimulator() {
  const [toggles, setToggles] = useState<Toggles>({
    itcz: false,
    elnino: false,
    lanina: false,
    posIod: false,
    negIod: false,
    mjo: false,
  });

  const [hoveredToggle, setHoveredToggle] = useState<string | null>(null);

  const handleToggle = (key: keyof Toggles) => {
    setToggles(prev => {
      const next = { ...prev, [key]: !prev[key] };
      if (key === 'elnino' && next.elnino) next.lanina = false;
      if (key === 'lanina' && next.lanina) next.elnino = false;
      if (key === 'posIod' && next.posIod) next.negIod = false;
      if (key === 'negIod' && next.negIod) next.posIod = false;
      return next;
    });
  };

  const stats = useMemo(() => {
    let monsoonValue = 100; // Base normal value

    // Complex interaction logic
    if (toggles.elnino && toggles.posIod) {
      monsoonValue -= 5; // IOD partially compensates for El Nino (subtract 5 instead of 25)
    } else if (toggles.elnino && toggles.negIod) {
      monsoonValue -= 40; // Compounding suppression
    } else {
      if (toggles.elnino) monsoonValue -= 25;
      if (toggles.lanina) monsoonValue += 20;
      if (toggles.posIod) monsoonValue += 15;
      if (toggles.negIod) monsoonValue -= 15;
    }

    if (toggles.itcz) monsoonValue += 10;
    if (toggles.mjo) monsoonValue += 10;

    let strength = "Normal";
    let strengthColor = "text-green-500";
    if (monsoonValue < 70) { strength = "Very Weak"; strengthColor = "text-red-500"; }
    else if (monsoonValue < 90) { strength = "Weak"; strengthColor = "text-orange-500"; }
    else if (monsoonValue > 130) { strength = "Very Strong"; strengthColor = "text-blue-600"; }
    else if (monsoonValue > 110) { strength = "Strong"; strengthColor = "text-blue-500"; }

    let deviation = monsoonValue - 100;
    let devStr = deviation > 0 ? `+${deviation}%` : `${deviation}%`;
    let devColor = deviation >= 0 ? "text-blue-500" : "text-red-500";

    let onset = "Normal";
    if (monsoonValue < 75) onset = "Very Late";
    else if (monsoonValue < 90) onset = "Late";
    else if (monsoonValue > 115) onset = "Early";

    let risk = "Normal";
    let riskColor = "text-green-500";
    if (monsoonValue < 75) { risk = "Drought Risk"; riskColor = "text-red-500"; }
    else if (monsoonValue > 125) { risk = "Flood Risk"; riskColor = "text-blue-600"; }

    return { value: monsoonValue, strength, strengthColor, deviation: devStr, devColor, onset, risk, riskColor };
  }, [toggles]);

  const mapColors = useMemo(() => {
    const val = stats.value;
    if (val < 70) return { nw: '#ea580c', central: '#fed7aa', ne: '#22c55e', ocean: '#0ea5e9' }; // Drought: orange-red NW, pale central
    if (val > 120) return { nw: '#7dd3fc', central: '#3b82f6', ne: '#1e3a8a', ocean: '#0284c7' }; // Flood: light blue NW, deep blue NE
    return { nw: '#bbf7d0', central: '#4ade80', ne: '#15803d', ocean: '#38bdf8' }; // Normal: green gradient
  }, [stats.value]);

  // Animation values for vectors based on monsoon strength
  const vectorSpeed = useMemo(() => {
    if (stats.value < 70) return 4;
    if (stats.value > 120) return 1;
    return 2;
  }, [stats.value]);

  // Glow intensity based on monsoon value
  const glowIntensity = useMemo(() => {
    if (stats.value < 75) return 'drought';
    if (stats.value > 120) return 'flood';
    return 'normal';
  }, [stats.value]);

  return (
    <div className="w-full max-w-7xl mx-auto bg-slate-950 rounded-3xl border border-blue-900/30 shadow-2xl overflow-hidden flex flex-col font-sans">
      
      {/* Header — Enhanced with atmospheric gradient & glow */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950/60 to-indigo-950/40 p-6 flex items-center justify-between border-b border-blue-500/20 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/[0.03] to-transparent pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-2xl font-black flex items-center gap-3 uppercase tracking-wider">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 relative">
              <CloudRain className="w-5 h-5 text-blue-400 relative z-10" />
              <div className="absolute inset-0 rounded-xl blur-lg bg-blue-500/15" />
            </div>
            Monsoon Vector Simulator
          </h2>
          <p className="text-blue-200/50 text-[10px] mt-1 font-bold tracking-widest uppercase">Interactive El Niño, IOD & Indian Monsoon Coupling</p>
        </div>
        <div className="flex items-center gap-4 bg-black/40 px-5 py-3 rounded-2xl backdrop-blur-xl border border-white/10 relative z-10">
           <div className="text-right">
             <div className="text-[9px] text-blue-200/60 uppercase tracking-[0.2em] font-black">Monsoon Index</div>
             <div className={`text-3xl font-black ${stats.value >= 100 ? 'text-green-400' : 'text-orange-400'}`}
                  style={{ textShadow: stats.value >= 100 ? '0 0 20px rgba(74,222,128,0.3)' : '0 0 20px rgba(251,146,60,0.3)' }}>
               {stats.value}
             </div>
           </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-[700px] lg:h-[600px]">
        {/* SECTION 1: MAP PANEL (60%) — Enhanced with atmospheric ocean depth */}
        <div className="w-full lg:w-[60%] relative overflow-hidden border-r border-white/5 p-0"
             style={{ background: 'radial-gradient(ellipse at 50% 40%, #091a2e 0%, #05101e 50%, #030810 100%)' }}>
          
          {/* Deep ocean atmospheric overlay */}
          <div className="absolute inset-0 pointer-events-none"
               style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(56,189,248,0.04) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(59,130,246,0.03) 0%, transparent 40%)' }} />

          {/* TopoJSON Base Map */}
          <div className="absolute inset-0 z-0">
            {/* Background Ocean base color */}
            <motion.div 
              className="absolute inset-0"
              animate={{ backgroundColor: mapColors.ocean }}
              transition={{ duration: 1 }}
              style={{ opacity: 0.1 }}
            />
            {/* The actual Map projecting Indian Ocean region */}
            <ComposableMap projection="geoMercator" projectionConfig={{ scale: 420, center: [80, 12] }} className="w-full h-full" width={800} height={600}>
              <Geographies geography={WORLD_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isIndia = geo.properties.name === "India";
                    // Color India according to the calculated monsoon strength mapColors
                    const fillColor = isIndia ? mapColors.central : "#111827";
                    
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={fillColor}
                        stroke="#1e3a5f"
                        strokeWidth={0.6}
                        style={{
                          default: { outline: "none", transition: "all 0.5s" },
                          hover: { outline: "none", fill: isIndia ? mapColors.central : "#1e293b" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>
          
          {/* Interactive Vectors Overlay Layer — Premium SVG Effects */}
          <svg viewBox="0 0 800 600" className="w-full h-full relative z-10 pointer-events-none">
            <defs>
              {/* Somali Jet gradient — enhanced */}
              <linearGradient id="somaliGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#7dd3fc" stopOpacity="1" />
              </linearGradient>
              {/* Bay of Bengal gradient */}
              <linearGradient id="bayGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
                <stop offset="40%" stopColor="#60a5fa" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="1" />
              </linearGradient>
              {/* Walker Circulation gradients */}
              <linearGradient id="walkerElNinoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fca5a5" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#ef4444" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="walkerLaNinaGrad" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#818cf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
              </linearGradient>
              {/* ITCZ glow gradient */}
              <linearGradient id="itczGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fde047" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#facc15" stopOpacity="1" />
                <stop offset="100%" stopColor="#eab308" stopOpacity="0.5" />
              </linearGradient>

              {/* IOD radial glows */}
              <radialGradient id="iodWarmGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
                <stop offset="40%" stopColor="#ef4444" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="iodCoolGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>

              {/* MJO pulse gradient */}
              <radialGradient id="mjoGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </radialGradient>

              {/* Glow filter for wind vectors */}
              <filter id="glowWind" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                <feFlood floodColor="#38bdf8" floodOpacity="0.5" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Glow filter for ITCZ */}
              <filter id="glowItcz" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feFlood floodColor="#facc15" floodOpacity="0.6" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Walker glow filter */}
              <filter id="glowWalker" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                <feFlood floodColor="#ef4444" floodOpacity="0.6" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* IOD glow filter */}
              <filter id="glowIod" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* CSS animations for wind vectors */}
            <style>
              {`
              @keyframes wind-particle-flow {
                from { stroke-dashoffset: 30; }
                to { stroke-dashoffset: 0; }
              }
              @keyframes wind-shimmer {
                from { stroke-dashoffset: 40; }
                to { stroke-dashoffset: 0; }
              }
              @keyframes iod-pulse {
                0%, 100% { r: 55; opacity: 0.25; }
                50% { r: 65; opacity: 0.4; }
              }
              @keyframes mjo-wave {
                0% { cx: 100; opacity: 0; }
                30% { opacity: 0.6; }
                70% { opacity: 0.6; }
                100% { cx: 700; opacity: 0; }
              }
              .wind-particles {
                animation: wind-particle-flow 1.2s linear infinite;
              }
              .wind-shimmer-line {
                animation: wind-shimmer 0.8s linear infinite;
              }
              `}
            </style>

            {/* Ocean region labels — enhanced with glow */}
            <text x="50" y="300" style={{ fontSize: '18px', fill: 'rgba(255,255,255,0.08)', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase' as const }}>Arabian Sea</text>
            <text x="600" y="300" style={{ fontSize: '18px', fill: 'rgba(255,255,255,0.08)', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase' as const }}>Bay of Bengal</text>
            <text x="350" y="550" style={{ fontSize: '18px', fill: 'rgba(255,255,255,0.08)', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase' as const }}>Indian Ocean</text>

            <g>
              {/* Regional labels for context */}
              <text x="380" y="240" style={{ fontSize: '10px', fill: 'rgba(148,163,184,0.7)', fontWeight: 900, letterSpacing: '3px' }}>INDIA</text>
              <text x="580" y="470" style={{ fontSize: '10px', fill: 'rgba(100,116,139,0.5)', fontWeight: 700, letterSpacing: '2px' }}>INDONESIA</text>
              <text x="20" y="280" style={{ fontSize: '10px', fill: 'rgba(100,116,139,0.5)', fontWeight: 700, letterSpacing: '2px' }}>SOMALIA</text>
              <text x="640" y="580" style={{ fontSize: '10px', fill: 'rgba(100,116,139,0.5)', fontWeight: 700, letterSpacing: '2px' }}>AUSTRALIA</text>

              {/* The ITCZ Trough Line Indicator — Enhanced with glow */}
              <AnimatePresence>
                {toggles.itcz && (
                  <motion.g
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    {/* Outer glow halo */}
                    <path d="M 50 180 Q 250 220 550 190" fill="none" stroke="#facc15" strokeWidth="12" opacity="0.08" filter="url(#glowItcz)" />
                    {/* Main ITCZ line */}
                    <path d="M 50 180 Q 250 220 550 190" fill="none" stroke="url(#itczGrad)" strokeWidth="4" strokeDasharray="10 5" filter="url(#glowItcz)" />
                    {/* Flow particles along ITCZ */}
                    <path d="M 50 180 Q 250 220 550 190" fill="none" stroke="rgba(250,204,21,0.4)" strokeWidth="1.5" strokeDasharray="2 14" className="wind-particles" />
                    <text x="250" y="170" style={{ fontSize: '10px', fill: '#facc15', fontWeight: 900, filter: 'drop-shadow(0 0 6px rgba(250,204,21,0.5))' }}>Monsoon Trough (ITCZ)</text>
                  </motion.g>
                )}
              </AnimatePresence>
            </g>

            {/* Visual Effects & Arrows — Premium Glowing Vectors */}
            
            {/* 1. Somali Jet (Always active, intensity varies) — Enhanced */}
            <g>
              {/* Outer glow halo */}
              <motion.path
                d="M 50 500 Q 150 350 250 350 Q 300 350 320 300"
                fill="none"
                stroke="#38bdf8"
                strokeWidth={stats.value < 80 ? 10 : (stats.value > 115 ? 24 : 16)}
                opacity={0.06}
                filter="url(#glowWind)"
              />
              {/* Main gradient wind vector */}
              <motion.path
                d="M 50 500 Q 150 350 250 350 Q 300 350 320 300"
                fill="none"
                stroke="url(#somaliGrad)"
                strokeWidth={stats.value < 80 ? 4 : (stats.value > 115 ? 12 : 8)}
                strokeDasharray="20 10"
                filter="url(#glowWind)"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{ repeat: Infinity, duration: vectorSpeed, ease: "linear" }}
              />
              {/* Wind flow particles */}
              <path
                d="M 50 500 Q 150 350 250 350 Q 300 350 320 300"
                fill="none"
                stroke="rgba(125,211,252,0.35)"
                strokeWidth="1"
                strokeDasharray="2 18"
                className="wind-particles"
              />
              <text x="130" y="420" style={{ fontSize: '11px', fill: '#38bdf8', fontWeight: 900, filter: 'drop-shadow(0 0 8px rgba(56,189,248,0.4))', letterSpacing: '1px' }}>Somali Jet</text>
            </g>

            {/* 2. Bay of Bengal Branch — Enhanced */}
            <g>
              {/* Outer glow */}
              <motion.path
                d="M 600 450 Q 550 300 450 250"
                fill="none"
                stroke="#60a5fa"
                strokeWidth={stats.value < 80 ? 10 : (stats.value > 115 ? 24 : 16)}
                opacity={0.06}
                filter="url(#glowWind)"
              />
              {/* Main gradient vector */}
              <motion.path
                d="M 600 450 Q 550 300 450 250"
                fill="none"
                stroke="url(#bayGrad)"
                strokeWidth={stats.value < 80 ? 4 : (stats.value > 115 ? 12 : 8)}
                strokeDasharray="15 10"
                filter="url(#glowWind)"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{ repeat: Infinity, duration: vectorSpeed + 0.5, ease: "linear" }}
              />
              {/* Flow particles */}
              <path
                d="M 600 450 Q 550 300 450 250"
                fill="none"
                stroke="rgba(147,197,253,0.3)"
                strokeWidth="1"
                strokeDasharray="2 16"
                className="wind-particles"
              />
              <text x="530" y="380" style={{ fontSize: '10px', fill: '#60a5fa', fontWeight: 900, filter: 'drop-shadow(0 0 6px rgba(96,165,250,0.4))', letterSpacing: '1px' }}>Bay Branch</text>
            </g>

            {/* 3. Walker Circulation (El Nino / La Nina) — Enhanced with glow */}
            <AnimatePresence>
              {(toggles.elnino || toggles.lanina) && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Walker glow halo */}
                  <motion.path
                    d="M 750 350 L 500 350"
                    fill="none"
                    stroke={toggles.elnino ? "#ef4444" : "#818cf8"}
                    strokeWidth="20"
                    opacity={0.08}
                    filter="url(#glowWalker)"
                  />
                  {/* Main walker vector */}
                  <motion.path
                    d="M 750 350 L 500 350"
                    fill="none"
                    stroke={toggles.elnino ? "url(#walkerElNinoGrad)" : "url(#walkerLaNinaGrad)"}
                    strokeWidth="10"
                    strokeDasharray="20 15"
                    filter="url(#glowWalker)"
                    animate={{ strokeDashoffset: toggles.elnino ? [0, 100] : [0, -100] }} // Reverses direction
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  />
                  {/* Walker flow particles */}
                  <path
                    d="M 750 350 L 500 350"
                    fill="none"
                    stroke={toggles.elnino ? "rgba(252,165,165,0.3)" : "rgba(165,180,252,0.3)"}
                    strokeWidth="1"
                    strokeDasharray="2 20"
                    className="wind-shimmer-line"
                  />
                  <text x="550" y="335" style={{ fontSize: '10px', fill: toggles.elnino ? '#fca5a5' : '#a5b4fc', fontWeight: 900, filter: `drop-shadow(0 0 6px ${toggles.elnino ? 'rgba(239,68,68,0.4)' : 'rgba(129,140,248,0.4)'})`, letterSpacing: '1px' }}>
                    Walker Circulation ({toggles.elnino ? 'Reversed/Weak' : 'Intensified'})
                  </text>
                </motion.g>
              )}
            </AnimatePresence>

            {/* 4. IOD representation — Enhanced with radial glow gradients */}
            <AnimatePresence>
              {(toggles.posIod || toggles.negIod) && (
                <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                  {/* Western Indian Ocean IOD pole */}
                  <circle cx="250" cy="450" r="70" fill={toggles.posIod ? "url(#iodWarmGlow)" : "url(#iodCoolGlow)"} filter="url(#glowIod)" />
                  <circle cx="250" cy="450" r="40" fill={toggles.posIod ? "#ef4444" : "#3b82f6"} opacity="0.15" className="animate-ping" />
                  <circle cx="250" cy="450" r="4" fill={toggles.posIod ? "#ef4444" : "#3b82f6"} opacity="0.8" />
                  <text x="220" y="520" style={{ fontSize: '8px', fill: toggles.posIod ? '#fca5a5' : '#93c5fd', fontWeight: 900, letterSpacing: '1px', textTransform: 'uppercase' as const }}>
                    {toggles.posIod ? 'Warm' : 'Cool'} Pole
                  </text>
                  
                  {/* Eastern Indian Ocean IOD pole */}
                  <circle cx="650" cy="500" r="60" fill={toggles.posIod ? "url(#iodCoolGlow)" : "url(#iodWarmGlow)"} filter="url(#glowIod)" />
                  <circle cx="650" cy="500" r="35" fill={toggles.posIod ? "#3b82f6" : "#ef4444"} opacity="0.15" className="animate-ping" />
                  <circle cx="650" cy="500" r="4" fill={toggles.posIod ? "#3b82f6" : "#ef4444"} opacity="0.8" />
                  <text x="620" y="565" style={{ fontSize: '8px', fill: toggles.posIod ? '#93c5fd' : '#fca5a5', fontWeight: 900, letterSpacing: '1px', textTransform: 'uppercase' as const }}>
                    {toggles.posIod ? 'Cool' : 'Warm'} Pole
                  </text>
                </motion.g>
              )}
            </AnimatePresence>

            {/* 5. MJO Active Phase — New eastward-moving pulse wave */}
            <AnimatePresence>
              {toggles.mjo && (
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <circle r="80" cy="350" fill="url(#mjoGlow)" className="animate-pulse" style={{ animation: 'mjo-wave 4s linear infinite' }} />
                  <circle r="80" cy="350" fill="url(#mjoGlow)" className="animate-pulse" style={{ animation: 'mjo-wave 4s linear infinite', animationDelay: '2s' }} />
                  <text x="200" y="380" style={{ fontSize: '9px', fill: '#06b6d4', fontWeight: 900, letterSpacing: '1px', filter: 'drop-shadow(0 0 4px rgba(6,182,212,0.4))' }}>
                    MJO Pulse →
                  </text>
                </motion.g>
              )}
            </AnimatePresence>
            
          </svg>
          
          {/* Status Overlay Badge on Map — Enhanced with dramatic glow */}
          <AnimatePresence>
            {stats.value < 75 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: -10 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-6 right-6 bg-red-950/90 border border-red-500/50 text-red-100 px-5 py-3 rounded-2xl flex items-center gap-3 backdrop-blur-xl shadow-[0_0_30px_rgba(239,68,68,0.2)] z-20"
              >
                <div className="relative">
                  <AlertTriangle className="w-5 h-5 text-red-400 relative z-10" />
                  <div className="absolute inset-0 blur-md bg-red-500/30 animate-ping" />
                </div>
                <div className="font-black text-sm uppercase tracking-wider">Severe Drought Risk</div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {stats.value > 125 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: -10 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-6 right-6 bg-blue-950/90 border border-blue-500/50 text-blue-100 px-5 py-3 rounded-2xl flex items-center gap-3 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.2)] z-20"
              >
                <div className="relative">
                  <Droplets className="w-5 h-5 text-blue-400 relative z-10" />
                  <div className="absolute inset-0 blur-md bg-blue-500/30 animate-ping" />
                </div>
                <div className="font-black text-sm uppercase tracking-wider">Flood Risk Alert</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Wind vector legend */}
          <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-xl p-3 flex flex-col gap-2 z-10">
            <div className="text-[8px] font-black text-blue-400/80 uppercase tracking-[0.2em]">Wind Vectors</div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-gradient-to-r from-transparent to-sky-400 rounded-full shadow-[0_0_6px_rgba(56,189,248,0.5)]" />
              <span className="text-[9px] text-slate-400 font-bold">Somali Jet</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-gradient-to-r from-transparent to-blue-400 rounded-full shadow-[0_0_6px_rgba(96,165,250,0.5)]" />
              <span className="text-[9px] text-slate-400 font-bold">Bay Branch</span>
            </div>
          </div>
        </div>

        {/* SECTION 2: CONTROL PANEL (40%) — Enhanced with premium styling */}
        <div className="w-full lg:w-[40%] bg-slate-900/80 p-6 border-l border-white/5 flex flex-col">
          <h3 className="text-base font-black mb-4 text-white uppercase tracking-widest flex items-center gap-2">
            <div className="w-1.5 h-5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
            Climate Drivers
          </h3>
          
          <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
            {(Object.keys(TOGGLE_INFO) as Array<keyof Toggles>).map((key) => {
              const info = TOGGLE_INFO[key];
              const isActive = toggles[key];
              const Icon = info.icon;
              
              return (
                <div 
                  key={key}
                  className={`relative p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'bg-slate-800/80 border-white/20 shadow-lg' 
                      : 'bg-slate-900/40 border-white/5 hover:border-white/15 hover:bg-slate-800/40'
                  }`}
                  style={isActive ? { boxShadow: `0 0 20px ${info.color}15, 0 0 40px ${info.color}08` } : {}}
                  onClick={() => handleToggle(key)}
                  onMouseEnter={() => setHoveredToggle(key)}
                  onMouseLeave={() => setHoveredToggle(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className={`p-2 rounded-xl transition-all ${isActive ? 'text-white' : 'text-slate-500 bg-slate-800'}`}
                        style={isActive ? { backgroundColor: `${info.color}25`, boxShadow: `0 0 12px ${info.color}30` } : {}}
                      >
                        <Icon className="w-5 h-5" style={isActive ? { color: info.color } : {}} />
                      </div>
                      <span className={`font-black text-sm uppercase tracking-wider ${isActive ? 'text-white' : 'text-slate-400'}`}>
                        {info.name}
                      </span>
                    </div>
                    
                    {/* Switch visually — Enhanced */}
                    <div className={`w-10 h-6 rounded-full transition-all flex items-center p-1 ${
                      isActive ? 'shadow-[0_0_8px_var(--switch-glow)]' : 'bg-slate-700'
                    }`}
                    style={isActive ? { backgroundColor: info.color, '--switch-glow': `${info.color}50` } as React.CSSProperties : {}}>
                      <motion.div 
                        className="w-4 h-4 bg-white rounded-full shadow-sm"
                        animate={{ x: isActive ? 16 : 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    </div>
                  </div>

                  {/* Info Tooltip Expansion */}
                  <AnimatePresence>
                    {hoveredToggle === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 text-xs text-slate-400 overflow-hidden leading-relaxed"
                      >
                        {info.desc}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-4 p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl text-xs text-amber-400/80 flex gap-3">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <p><strong className="text-amber-400">Note:</strong> El Niño and La Niña cannot occur simultaneously. Similarly for Positive and Negative IOD. The system handles partial IOD compensation automatically.</p>
          </div>
        </div>
      </div>

      {/* SECTION 3: IMPACT PANEL (BOTTOM) — Enhanced with glow-accented cards */}
      <div className="bg-slate-950 p-6 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className={`bg-slate-900/80 p-5 rounded-2xl border shadow-lg flex flex-col items-center justify-center text-center transition-all ${
          glowIntensity === 'drought' ? 'border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.1)]' :
          glowIntensity === 'flood' ? 'border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]' :
          'border-white/5'
        }`}>
          <div className="text-[9px] font-black uppercase text-slate-500 mb-2 tracking-[0.2em]">Monsoon Strength</div>
          <div className={`text-xl font-black ${stats.strengthColor}`}>{stats.strength}</div>
        </div>

        <div className={`bg-slate-900/80 p-5 rounded-2xl border shadow-lg flex flex-col items-center justify-center text-center transition-all ${
          stats.value < 90 ? 'border-red-500/20' : stats.value > 110 ? 'border-blue-500/20' : 'border-white/5'
        }`}>
          <div className="text-[9px] font-black uppercase text-slate-500 mb-2 tracking-[0.2em]">Rainfall Deviation</div>
          <div className={`text-xl font-black ${stats.devColor}`}>{stats.deviation}</div>
        </div>

        <div className={`bg-slate-900/80 p-5 rounded-2xl border border-white/5 shadow-lg flex flex-col items-center justify-center text-center`}>
          <div className="text-[9px] font-black uppercase text-slate-500 mb-2 tracking-[0.2em]">Onset Timing</div>
          <div className={`text-xl font-black ${stats.value > 115 ? 'text-green-500' : (stats.value < 90 ? 'text-red-500' : 'text-slate-300')}`}>{stats.onset}</div>
        </div>

        <div className={`bg-slate-900/80 p-5 rounded-2xl border shadow-lg flex flex-col items-center justify-center text-center transition-all ${
          stats.risk === 'Drought Risk' ? 'border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.1)]' :
          stats.risk === 'Flood Risk' ? 'border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]' :
          'border-white/5'
        }`}>
          <div className="text-[9px] font-black uppercase text-slate-500 mb-2 tracking-[0.2em]">Disaster Risk Level</div>
          <div className={`text-xl font-black flex items-center justify-center gap-2 ${stats.riskColor}`}>
            {stats.risk !== "Normal" && <AlertTriangle className="w-5 h-5" />}
            {stats.risk === "Normal" && <CheckCircle className="w-5 h-5" />}
            {stats.risk}
          </div>
        </div>

      </div>

    </div>
  );
}
