"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudRain, Sun, Wind, Activity, ThermometerSun, Thermometer, AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface Toggles {
  itcz: boolean;
  elnino: boolean;
  lanina: boolean;
  posIod: boolean;
  negIod: boolean;
  mjo: boolean;
}

const TOGGLE_INFO = {
  itcz: { name: "ITCZ Active", icon: CloudRain, desc: "Inter Tropical Convergence Zone moves over Ganga plains. Acts as a magnet for monsoon winds, enhancing rainfall." },
  elnino: { name: "El Niño", icon: ThermometerSun, desc: "Warming of central/eastern Pacific Ocean. Subsiding air over India suppresses cloud formation and monsoon rainfall." },
  lanina: { name: "La Niña", icon: Thermometer, desc: "Cooling of eastern Pacific. Enhances the Walker Circulation, pushing intense moisture and heavy rainfall toward India." },
  posIod: { name: "Positive IOD", icon: Activity, desc: "Western Indian Ocean becomes warmer than the eastern part. Pushes moisture toward India, often compensating for El Niño." },
  negIod: { name: "Negative IOD", icon: Activity, desc: "Eastern Indian Ocean becomes warmer. Pulls moisture away from India towards Indonesia, suppressing monsoon." },
  mjo: { name: "MJO Active Phase", icon: Wind, desc: "Madden-Julian Oscillation brings a pulse of clouds and rainfall moving eastward. Activates the monsoon burst." }
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

  return (
    <div className="w-full max-w-7xl mx-auto bg-card dark:bg-[#0a0a0a] rounded-2xl border border-border shadow-2xl overflow-hidden flex flex-col font-sans">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6 flex items-center justify-between border-b border-border text-white">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <CloudRain className="w-8 h-8 text-blue-300" />
            Monsoon Vector Simulator
          </h2>
          <p className="text-blue-100 text-sm mt-1">Interactive visualization of El Niño, IOD, and Indian Monsoon coupling.</p>
        </div>
        <div className="flex items-center gap-4 bg-black/30 px-4 py-2 rounded-xl backdrop-blur-md">
           <div className="text-right">
             <div className="text-[10px] text-blue-200 uppercase tracking-wider font-bold">Monsoon Index</div>
             <div className={`text-2xl font-black ${stats.value >= 100 ? 'text-green-400' : 'text-orange-400'}`}>
               {stats.value}
             </div>
           </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-auto lg:h-[600px]">
        {/* SECTION 1: MAP PANEL (60%) */}
        <div className="w-full lg:w-[60%] bg-[#0f172a] relative overflow-hidden border-r border-border p-4">
          
          <svg viewBox="0 0 800 600" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="somaliGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="walkerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f87171" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f87171" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Ocean Background */}
            <motion.rect 
              x="0" y="0" width="800" height="600" 
              fill={mapColors.ocean} opacity="0.15"
              animate={{ fill: mapColors.ocean }}
              transition={{ duration: 1 }}
            />
            
            <text x="50" y="300" className="text-2xl fill-white/20 font-bold uppercase tracking-widest">Arabian Sea</text>
            <text x="600" y="300" className="text-2xl fill-white/20 font-bold uppercase tracking-widest">Bay of Bengal</text>
            <text x="350" y="550" className="text-2xl fill-white/20 font-bold uppercase tracking-widest">Indian Ocean</text>

            {/* India Outline & Zones (Simplified Polygons for visualization) */}
            <g transform="translate(150, 50) scale(1.1)">
              {/* Central India */}
              <motion.path
                d="M 200 150 L 350 200 L 300 350 L 150 400 L 100 250 Z"
                animate={{ fill: mapColors.central }}
                transition={{ duration: 0.8 }}
                opacity="0.6"
              />
              {/* North West India */}
              <motion.path
                d="M 100 80 L 200 150 L 100 250 L 20 180 Z"
                animate={{ fill: mapColors.nw }}
                transition={{ duration: 0.8 }}
                opacity="0.7"
              />
              {/* North East India */}
              <motion.path
                d="M 350 200 L 450 180 L 480 250 L 380 300 Z"
                animate={{ fill: mapColors.ne }}
                transition={{ duration: 0.8 }}
                opacity="0.8"
              />
              {/* Peninsula */}
              <motion.path
                d="M 100 250 L 150 400 L 180 500 L 250 450 L 300 350 Z"
                animate={{ fill: mapColors.central }}
                transition={{ duration: 0.8 }}
                opacity="0.5"
              />

              {/* Mountains representation */}
              <path d="M 80 80 Q 200 40 400 120" fill="none" stroke="#475569" strokeWidth="12" strokeLinecap="round" opacity="0.8" />
              <text x="250" y="70" className="fill-slate-400 text-xs font-bold">HIMALAYAS</text>

              <path d="M 100 250 Q 120 350 170 480" fill="none" stroke="#475569" strokeWidth="8" strokeLinecap="round" opacity="0.8" />
              <text x="60" y="380" className="fill-slate-400 text-xs font-bold" transform="rotate(-65 60 380)">WESTERN GHATS</text>

              {/* The ITCZ Trough Line Indicator */}
              <AnimatePresence>
                {toggles.itcz && (
                  <motion.g
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <path d="M 50 180 Q 250 220 450 190" fill="none" stroke="#facc15" strokeWidth="4" strokeDasharray="10 5" className="animate-pulse" />
                    <text x="220" y="170" className="fill-yellow-400 text-[10px] font-bold">Monsoon Trough (ITCZ)</text>
                  </motion.g>
                )}
              </AnimatePresence>
            </g>

            {/* Visual Effects & Arrows */}
            
            {/* 1. Somali Jet (Always active, intensity varies) */}
            <motion.path
              d="M 50 500 Q 150 350 250 350 Q 300 350 320 300"
              fill="none"
              stroke="url(#somaliGrad)"
              strokeWidth={stats.value < 80 ? 4 : (stats.value > 115 ? 12 : 8)}
              strokeDasharray="20 10"
              animate={{ strokeDashoffset: [0, -100] }}
              transition={{ repeat: Infinity, duration: vectorSpeed, ease: "linear" }}
            />
            <text x="130" y="420" className="fill-sky-400 text-xs font-bold shadow-black drop-shadow-md">Somali Jet</text>

            {/* 2. Bay of Bengal Branch */}
            <motion.path
              d="M 600 450 Q 550 300 450 250"
              fill="none"
              stroke="#60a5fa"
              strokeWidth={stats.value < 80 ? 4 : (stats.value > 115 ? 12 : 8)}
              strokeDasharray="15 10"
              animate={{ strokeDashoffset: [0, -100] }}
              transition={{ repeat: Infinity, duration: vectorSpeed + 0.5, ease: "linear" }}
            />

            {/* 3. Walker Circulation (El Nino / La Nina) */}
            <AnimatePresence>
              {(toggles.elnino || toggles.lanina) && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.path
                    d="M 750 350 L 500 350"
                    fill="none"
                    stroke={toggles.elnino ? "#f87171" : "#818cf8"}
                    strokeWidth="10"
                    strokeDasharray="20 15"
                    animate={{ strokeDashoffset: toggles.elnino ? [0, 100] : [0, -100] }} // Reverses direction
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  />
                  <text x="550" y="335" className={`${toggles.elnino ? 'fill-red-400' : 'fill-indigo-400'} text-[10px] font-bold`}>
                    Walker Circulation ({toggles.elnino ? 'Reversed/Weak' : 'Intensified'})
                  </text>
                </motion.g>
              )}
            </AnimatePresence>

            {/* 4. IOD representation */}
            <AnimatePresence>
              {(toggles.posIod || toggles.negIod) && (
                <motion.circle
                  cx="250" cy="450" r="60"
                  fill={toggles.posIod ? "#ef4444" : "#3b82f6"} // Red warming for Pos IOD, Blue cooling for Neg
                  opacity="0.3"
                  className="animate-pulse"
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {(toggles.posIod || toggles.negIod) && (
                <motion.circle
                  cx="650" cy="500" r="50"
                  fill={toggles.posIod ? "#3b82f6" : "#ef4444"} // Opposite for eastern pole
                  opacity="0.3"
                  className="animate-pulse"
                />
              )}
            </AnimatePresence>
            
          </svg>
          
          {/* Status Overlay Badge on Map */}
          {stats.value < 75 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 bg-red-900/80 border border-red-500 text-red-100 px-4 py-2 rounded-lg flex items-center gap-2 backdrop-blur-md"
            >
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <div className="font-bold text-sm">Severe Drought Risk</div>
            </motion.div>
          )}
        </div>

        {/* SECTION 2: CONTROL PANEL (40%) */}
        <div className="w-full lg:w-[40%] bg-card p-6 border-l border-border flex flex-col">
          <h3 className="text-lg font-bold mb-4 text-foreground flex items-center gap-2">
            Climate Drivers
            <Info className="w-4 h-4 text-muted-foreground cursor-help" />
          </h3>
          
          <div className="flex-1 overflow-y-auto pr-2 space-y-3">
            {(Object.keys(TOGGLE_INFO) as Array<keyof Toggles>).map((key) => {
              const info = TOGGLE_INFO[key];
              const isActive = toggles[key];
              const Icon = info.icon;
              
              return (
                <div 
                  key={key}
                  className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${isActive ? 'bg-indigo-50 border-indigo-500 dark:bg-indigo-900/20 dark:border-indigo-500 shadow-md' : 'bg-transparent border-border hover:border-indigo-300'}`}
                  onClick={() => handleToggle(key)}
                  onMouseEnter={() => setHoveredToggle(key)}
                  onMouseLeave={() => setHoveredToggle(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-indigo-500 text-white' : 'bg-muted text-muted-foreground'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`font-bold ${isActive ? 'text-indigo-700 dark:text-indigo-300' : 'text-foreground'}`}>
                        {info.name}
                      </span>
                    </div>
                    
                    {/* Switch visually */}
                    <div className={`w-10 h-6 rounded-full transition-colors flex items-center p-1 ${isActive ? 'bg-indigo-500' : 'bg-slate-300 dark:bg-slate-700'}`}>
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
                        className="mt-3 text-xs text-muted-foreground dark:text-slate-400 overflow-hidden"
                      >
                        {info.desc}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900 rounded-xl text-xs text-amber-800 dark:text-amber-500 flex gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <p><strong>Note:</strong> El Niño and La Niña cannot occur simultaneously. Similarly for Positive and Negative IOD. The system handles partial IOD compensation automatically.</p>
          </div>
        </div>
      </div>

      {/* SECTION 3: IMPACT PANEL (BOTTOM) */}
      <div className="bg-slate-100 dark:bg-[#111] p-6 border-t border-border grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-card p-4 rounded-xl border border-border shadow-sm flex flex-col items-center justify-center text-center">
          <div className="text-xs font-bold uppercase text-muted-foreground mb-1">Monsoon Strength</div>
          <div className={`text-xl font-black ${stats.strengthColor}`}>{stats.strength}</div>
        </div>

        <div className="bg-card p-4 rounded-xl border border-border shadow-sm flex flex-col items-center justify-center text-center">
          <div className="text-xs font-bold uppercase text-muted-foreground mb-1">Rainfall Deviation</div>
          <div className={`text-xl font-black ${stats.devColor}`}>{stats.deviation}</div>
        </div>

        <div className="bg-card p-4 rounded-xl border border-border shadow-sm flex flex-col items-center justify-center text-center">
          <div className="text-xs font-bold uppercase text-muted-foreground mb-1">Onset Timing</div>
          <div className={`text-xl font-black ${stats.value > 115 ? 'text-green-500' : (stats.value < 90 ? 'text-red-500' : 'text-foreground')}`}>{stats.onset}</div>
        </div>

        <div className="bg-card p-4 rounded-xl border border-border shadow-sm flex flex-col items-center justify-center text-center">
          <div className="text-xs font-bold uppercase text-muted-foreground mb-1">Disaster Risk Level</div>
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
