"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS_METADATA, SkillProgress } from "@/components/batch2/sadhana/data/sadhana-data";
import { Target, Compass, Flame, Sparkles, Plus, ArrowLeft } from "lucide-react";
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { SkillDetailDrawer } from "./SkillDetailDrawer";

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
    const { setMode } = useBatch2UI(); // Added useBatch2UI hook

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
                        <Icon className={`w-5 h-5 ${hasPoints ? theme.text : 'text-neutral-500'}`} />
                    </motion.div>

                    {/* Label */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max text-center pointer-events-none">
                        <span className={`text-[10px] md:text-xs font-black uppercase tracking-widest ${hasPoints ? 'text-white' : 'text-neutral-500'}`}>
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
            <div className="absolute top-8 left-8">
                <h1 className="text-2xl font-serif text-white/50 italic pointer-events-none drop-shadow-lg tracking-wider">The Living Mandala</h1>
                <p className="text-[10px] text-amber-500/50 uppercase tracking-[0.3em] font-black mt-2">Sadhana Skill Evolution</p>
            </div>

            {/* Back Button */}
            <button
                onClick={() => setMode('classic')}
                className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-black/40 hover:bg-black/60 border border-white/10 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-md z-[120]"
            >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-widest">Back to Hub</span>
            </button>

            {/* Slide-in Detail Drawer */}
            <SkillDetailDrawer
                skillId={selectedSkill}
                onClose={() => setSelectedSkill(null)}
            />
        </div>
    );
}
