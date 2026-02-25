"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS_METADATA, SkillProgress } from "@/components/batch2/sadhana/data/sadhana-data";
import { Target, Compass, Flame, Sparkles, Plus } from "lucide-react";

import { useSadhanaSkillTracker } from "../../hooks/useSadhanaSkillTracker";

interface SkillsExplorerImmersiveProps {
    // Deprecated static prop
}

const CATEGORY_THEMES = {
    'Evergreen': { glow: 'rgba(239, 68, 68, 0.4)', icon: Flame, text: 'text-red-400' },
    'Mid-term': { glow: 'rgba(59, 130, 246, 0.4)', icon: Compass, text: 'text-blue-400' },
    'Immediate': { glow: 'rgba(16, 185, 129, 0.4)', icon: Target, text: 'text-emerald-400' },
};

const MATURITY_SCALES = {
    'Sapling': 1,
    'Tree': 1.3,
    'Orchard': 1.6,
};

export function SkillsExplorerImmersive({ }: SkillsExplorerImmersiveProps) {
    const { skillProgress } = useSadhanaSkillTracker();
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

    // Group skills by category for orbital layout
    const evergreenSkills = SKILLS_METADATA.filter(s => s.category === 'Evergreen');
    const midtermSkills = SKILLS_METADATA.filter(s => s.category === 'Mid-term');
    const immediateSkills = SKILLS_METADATA.filter(s => s.category === 'Immediate');

    const getProgress = (skillId: string) => skillProgress.find(s => s.skillId === skillId);

    // Particle effect for Mastery/Orchard
    const renderParticles = () => (
        <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1 h-1 bg-amber-300 rounded-full"
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                        x: (Math.random() - 0.5) * 100,
                        y: (Math.random() - 0.5) * 100,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.5 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );

    const renderNode = (skill: any, index: number, total: number, radius: number) => {
        const progress = getProgress(skill.id);
        const maturity = progress?.maturity || 'Sapling';
        const hasPoints = progress && progress.points > 0;
        const isMastered = maturity === 'Orchard';
        const scale = progress ? MATURITY_SCALES[maturity] : 0.8;
        const theme = CATEGORY_THEMES[skill.category as keyof typeof CATEGORY_THEMES];
        const Icon = theme.icon;

        // Calculate orbital position
        const angle = (index / total) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
            <motion.div
                key={skill.id}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ x, y, opacity: 1 }}
                transition={{ duration: 1.5, delay: index * 0.1, type: "spring", bounce: 0.2 }}
                className="absolute top-1/2 left-1/2 -ml-6 -mt-6 cursor-pointer group z-10"
                onClick={() => setSelectedSkill(skill.id)}
            >
                <div className="relative">
                    {/* Breathing Glow */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full blur-xl pointer-events-none"
                        style={{ backgroundColor: progress ? theme.glow : 'transparent' }}
                    />

                    {/* Mastered Particles */}
                    {isMastered && renderParticles()}

                    {/* Node Body */}
                    <motion.div
                        whileHover={{ scale: scale * 1.1 }}
                        className={`relative w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border ${hasPoints ? 'border-white/30 bg-black/40' : 'border-neutral-800 bg-black/20 text-neutral-600'} transition-colors`}
                        style={{ transform: `scale(${scale})` }}
                    >
                        {hasPoints ? <Icon className={`w-5 h-5 ${theme.text}`} /> : <Plus className="w-4 h-4" />}
                    </motion.div>

                    {/* Label */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <span className={`text-xs font-black uppercase tracking-widest ${hasPoints ? 'text-white' : 'text-neutral-500'}`}>
                            {skill.name}
                        </span>
                    </div>
                </div>
            </motion.div>
        );
    };

    const activeSkillData = SKILLS_METADATA.find(s => s.id === selectedSkill);
    const activeProgress = selectedSkill ? getProgress(selectedSkill) : null;

    return (
        <div className="fixed inset-0 bg-black z-[100] overflow-hidden flex items-center justify-center font-sans select-none">
            {/* Deep Space Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0f172a_0%,_#000000_100%)]" />

            {/* Slow rotating starfield / dust */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
                className="absolute w-[200vw] h-[200vw] -left-[50vw] -top-[50vw] bg-[url('/noise.png')] opacity-5 pointer-events-none mix-blend-screen"
            />

            {/* Central Mandala Core */}
            <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-32 h-32 rounded-full bg-amber-500/20 blur-3xl pointer-events-none"
            />

            {/* The Orbits */}
            <div className="relative w-full h-[600px] max-w-[600px] flex items-center justify-center">

                {/* Orbit Rings */}
                {[120, 200, 280].map((radius, i) => (
                    <motion.div
                        key={`ring-${i}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, delay: i * 0.2 }}
                        className="absolute rounded-full border border-white/5 pointer-events-none"
                        style={{ width: radius * 2, height: radius * 2 }}
                    />
                ))}

                {/* Nodes on Orbits */}
                {immediateSkills.map((s, i) => renderNode(s, i, immediateSkills.length, 120))}
                {midtermSkills.map((s, i) => renderNode(s, i, midtermSkills.length, 200))}
                {evergreenSkills.map((s, i) => renderNode(s, i, evergreenSkills.length, 280))}

            </div>

            {/* Skill Details Overlay (Side Panel) */}
            <AnimatePresence>
                {selectedSkill && activeSkillData && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="absolute right-0 top-0 bottom-0 w-96 bg-black/60 backdrop-blur-2xl border-l border-white/10 p-8 flex flex-col z-50"
                    >
                        <button
                            onClick={() => setSelectedSkill(null)}
                            className="absolute top-6 right-6 text-neutral-500 hover:text-white"
                        >
                            <Plus className="w-6 h-6 rotate-45" />
                        </button>

                        <div className="mt-12 flex-1 overflow-y-auto no-scrollbar pr-4">
                            <h2 className="text-3xl font-serif text-white mb-2">{activeSkillData.name}</h2>
                            <div className="flex items-center gap-2 mb-8">
                                <span className={`px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest ${CATEGORY_THEMES[activeSkillData.category as keyof typeof CATEGORY_THEMES].text}`}>
                                    {activeSkillData.category}
                                </span>
                                {activeProgress && (
                                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                                        <Sparkles className="w-3 h-3" /> {activeProgress.maturity}
                                    </span>
                                )}
                            </div>

                            <p className="text-neutral-300 leading-relaxed mb-12">
                                {activeSkillData.description}
                            </p>

                            <div className="space-y-8">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 border-b border-white/10 pb-2">Evolution Path</h3>

                                {/* Progression Logic Timeline */}
                                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black/50 text-neutral-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                                            🌱
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:group-even:text-right md:group-even:pr-4 md:group-odd:pl-4">
                                            <div className="mb-1 text-sm font-bold text-white">Sapling</div>
                                            <div className="text-xs text-neutral-400 leading-relaxed">{activeSkillData.maturityLogic.sapling}</div>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border ${activeProgress && (activeProgress.maturity === 'Tree' || activeProgress.maturity === 'Orchard') ? 'border-amber-500/50 bg-amber-500/10 text-amber-500' : 'border-white/10 bg-black/50 text-neutral-600'} shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors`}>
                                            🌳
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:group-even:text-right md:group-even:pr-4 md:group-odd:pl-4">
                                            <div className={`mb-1 text-sm font-bold ${activeProgress && (activeProgress.maturity === 'Tree' || activeProgress.maturity === 'Orchard') ? 'text-amber-400' : 'text-neutral-500'}`}>Tree</div>
                                            <div className="text-xs text-neutral-500 leading-relaxed">{activeSkillData.maturityLogic.tree}</div>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border ${activeProgress?.maturity === 'Orchard' ? 'border-amber-500 bg-amber-500/20 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'border-white/10 bg-black/50 text-neutral-600'} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors`}>
                                            🌺
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:group-even:text-right md:group-even:pr-4 md:group-odd:pl-4">
                                            <div className={`mb-1 text-sm font-bold ${activeProgress?.maturity === 'Orchard' ? 'text-amber-400' : 'text-neutral-500'}`}>Orchard</div>
                                            <div className="text-xs text-neutral-500 leading-relaxed">{activeSkillData.maturityLogic.orchard}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {!activeProgress && (
                            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest text-white transition-all">
                                    Plant Seed (Begin Practice)
                                </button>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="absolute top-8 left-8">
                <h1 className="text-2xl font-serif text-white/50 italic pointer-events-none drop-shadow-lg tracking-wider">The Living Mandala</h1>
                <p className="text-[10px] text-amber-500/50 uppercase tracking-[0.3em] font-black mt-2">Sadhana Skill Evolution</p>
            </div>
        </div>
    );
}
