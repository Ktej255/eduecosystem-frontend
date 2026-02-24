'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkillProgress, SKILLS_METADATA, SkillMetadata } from '../data/sadhana-data';
import { X, Info, Target, Compass, Flame } from 'lucide-react';

interface LotusVisualizerProps {
    skills: SkillProgress[];
}

const CATEGORY_STYLES = {
    'Immediate': { color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-200', glow: 'emerald' },
    'Mid-term': { color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-200', glow: 'blue' },
    'Evergreen': { color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-200', glow: 'amber' },
};

const LotusVisualizer: React.FC<LotusVisualizerProps> = ({ skills }) => {
    const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);

    const selectedSkillMeta = selectedSkillId ? SKILLS_METADATA.find(s => s.id === selectedSkillId) : null;
    const selectedSkillProgress = selectedSkillId ? skills.find(s => s.skillId === selectedSkillId) : null;

    // Helper to generate petal path
    const getPetalPath = (cx: number, cy: number, r: number, angle: number, size: number) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = cx + r * Math.cos(rad);
        const y1 = cy + r * Math.sin(rad);

        const width = size * 0.55;
        const length = size;

        const cp1x = cx + (r + length * 0.5) * Math.cos(rad - width * 0.015);
        const cp1y = cy + (r + length * 0.5) * Math.sin(rad - width * 0.015);

        const tipx = cx + (r + length) * Math.cos(rad);
        const tipy = cy + (r + length) * Math.sin(rad);

        const cp2x = cx + (r + length * 0.5) * Math.cos(rad + width * 0.015);
        const cp2y = cy + (r + length * 0.5) * Math.sin(rad + width * 0.015);

        return `M ${x1} ${y1} Q ${cp1x} ${cp1y} ${tipx} ${tipy} Q ${cp2x} ${cp2y} ${x1} ${y1} Z`;
    };

    const rings = [
        { name: 'Immediate', radius: 60, size: 45, classObj: CATEGORY_STYLES['Immediate'] },
        { name: 'Mid-term', radius: 35, size: 35, classObj: CATEGORY_STYLES['Mid-term'] },
        { name: 'Evergreen', radius: 15, size: 25, classObj: CATEGORY_STYLES['Evergreen'] }
    ];

    return (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 relative">

            {/* SVG Canvas - Extensively sized to feel massive and premium */}
            <div className="relative w-full max-w-[500px] xl:max-w-[650px] aspect-square flex items-center justify-center shrink-0">
                <svg viewBox="0 0 250 250" className="w-full h-full drop-shadow-2xl">
                    <defs>
                        <filter id="glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <filter id="glow-amber" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Aura behind Lotus */}
                    <circle cx="125" cy="125" r="100" fill="url(#core-gradient)" opacity="0.1" />
                    <defs>
                        <radialGradient id="core-gradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
                            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    <circle cx="125" cy="125" r="12" className="fill-amber-950 stroke-amber-700" strokeWidth="1" />

                    {rings.map((ring, ringIdx) => (
                        <g key={ring.name}>
                            {[...Array(12)].map((_, petalIdx) => {
                                const angle = petalIdx * 30 + (ringIdx * 15);
                                const skillId = `${ring.name.toLowerCase()}-${petalIdx}`;
                                const skillProgress = skills.find(s => s.skillId === skillId);
                                const isSelected = selectedSkillId === skillId;

                                let opacity = "0.15";
                                let strokeWidth = "1";
                                let filter = "";
                                let strokeColor = "currentColor";

                                if (skillProgress?.maturity === 'Sapling') opacity = "0.4";
                                if (skillProgress?.maturity === 'Tree') opacity = "0.7";
                                if (skillProgress?.maturity === 'Orchard') {
                                    opacity = "1";
                                    filter = `url(#glow-${ring.classObj.glow})`;
                                    strokeWidth = "1.5";
                                }

                                if (isSelected) {
                                    strokeWidth = "2.5";
                                    filter = `url(#glow-${ring.classObj.glow})`;
                                    strokeColor = "#ffffff";
                                    opacity = "1";
                                }

                                return (
                                    <path
                                        key={petalIdx}
                                        d={getPetalPath(125, 125, ring.radius, angle, ring.size)}
                                        className={`${ring.classObj.color} transition-all duration-300 cursor-pointer hover:opacity-100 origin-center`}
                                        style={{ stroke: strokeColor }}
                                        fill="currentColor"
                                        fillOpacity={opacity}
                                        strokeWidth={strokeWidth}
                                        filter={filter}
                                        onClick={() => setSelectedSkillId(isSelected ? null : skillId)}
                                    />
                                );
                            })}
                        </g>
                    ))}
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-200 text-[10px] sm:text-xs font-bold font-serif uppercase tracking-widest pointer-events-none mt-px">
                    OM
                </div>
            </div>

            {/* Side Panel (Interactive Data View) */}
            <div className="w-full lg:w-[400px] shrink-0 h-full flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    {selectedSkillMeta ? (
                        <motion.div
                            key="skill-panel"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className={`w-full p-6 sm:p-8 rounded-[2rem] border-2 shadow-xl bg-white ${CATEGORY_STYLES[selectedSkillMeta.category].border} relative overflow-hidden`}
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-30 ${CATEGORY_STYLES[selectedSkillMeta.category].bg.replace('bg-', 'bg-')}`} />

                            <button
                                onClick={() => setSelectedSkillId(null)}
                                className="absolute top-4 right-4 p-2 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors z-10"
                            >
                                <X className="w-4 h-4 text-stone-600" />
                            </button>

                            <div className="mb-6 relative z-10">
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 ${CATEGORY_STYLES[selectedSkillMeta.category].bg} ${CATEGORY_STYLES[selectedSkillMeta.category].color}`}>
                                    {selectedSkillMeta.category === 'Immediate' && <Target className="w-3 h-3" />}
                                    {selectedSkillMeta.category === 'Mid-term' && <Compass className="w-3 h-3" />}
                                    {selectedSkillMeta.category === 'Evergreen' && <Flame className="w-3 h-3" />}
                                    {selectedSkillMeta.category} Petal
                                </span>
                                <h2 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
                                    {selectedSkillMeta.name}
                                </h2>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                    {selectedSkillMeta.description}
                                </p>
                            </div>

                            <div className="space-y-4 relative z-10 border-t border-slate-100 pt-6">
                                <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Maturity Trajectory</h3>

                                <div className={`p-4 rounded-xl border transition-all ${selectedSkillProgress?.maturity === 'Sapling' ? 'border-emerald-400 bg-emerald-50' : 'border-slate-100 bg-slate-50'}`}>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-bold text-slate-800 flex items-center gap-2">🌱 Sapling</span>
                                        {selectedSkillProgress?.maturity === 'Sapling' && <span className="text-[10px] font-bold text-emerald-600 uppercase">Active</span>}
                                    </div>
                                    <p className="text-xs text-slate-600">{selectedSkillMeta.maturityLogic.sapling}</p>
                                </div>

                                <div className={`p-4 rounded-xl border transition-all ${selectedSkillProgress?.maturity === 'Tree' ? 'border-blue-400 bg-blue-50' : 'border-slate-100 bg-slate-50'}`}>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-bold text-slate-800 flex items-center gap-2">🌳 Tree</span>
                                        {selectedSkillProgress?.maturity === 'Tree' && <span className="text-[10px] font-bold text-blue-600 uppercase">Active</span>}
                                    </div>
                                    <p className="text-xs text-slate-600">{selectedSkillMeta.maturityLogic.tree}</p>
                                </div>

                                <div className={`p-4 rounded-xl border transition-all ${selectedSkillProgress?.maturity === 'Orchard' ? 'border-amber-400 bg-amber-50' : 'border-slate-100 bg-slate-50'}`}>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-bold text-slate-800 flex items-center gap-2">🌺 Orchard</span>
                                        {selectedSkillProgress?.maturity === 'Orchard' && <span className="text-[10px] font-bold text-amber-600 uppercase">Mastered</span>}
                                    </div>
                                    <p className="text-xs text-slate-600">{selectedSkillMeta.maturityLogic.orchard}</p>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty-state"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full p-8 rounded-[2rem] border-2 border-dashed border-amber-200/50 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                        >
                            <Info className="w-12 h-12 text-amber-200 mb-4" />
                            <h3 className="text-xl font-bold text-amber-900 mb-2 font-serif">Select a Petal</h3>
                            <p className="text-sm text-amber-800/60 max-w-[250px]">
                                Click on any petal in the Lotus diagram to view the skill's purpose and mastery trajectory.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default LotusVisualizer;
