'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS_METADATA, SkillProgress } from '../data/sadhana-data';
import { Compass, Flame, Target, ChevronDown, ChevronUp, Brain, Sprout } from 'lucide-react';
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { TranceToggle } from "@/components/batch2/context/TranceToggle";
import { SkillsExplorerImmersive } from './SkillsExplorerImmersive';
import { SkillDetailDrawer } from './SkillDetailDrawer';

import { useSadhanaSkillTracker } from "../../hooks/useSadhanaSkillTracker";

interface SkillsExplorerProps {
    // Deprecated static prop
}

const CATEGORY_STYLES = {
    'Evergreen': { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-900', badge: 'bg-amber-100 text-amber-700', icon: Flame },
    'Mid-term': { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-900', badge: 'bg-blue-100 text-blue-700', icon: Compass },
    'Immediate': { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-900', badge: 'bg-emerald-100 text-emerald-700', icon: Target },
};

const MATURITY_ICONS = {
    'Sapling': '🌱',
    'Tree': '🌳',
    'Orchard': '🌺',
};

export default function SkillsExplorer({ }: SkillsExplorerProps) {
    const { skillProgress } = useSadhanaSkillTracker();
    const [filter, setFilter] = useState<'All' | 'Evergreen' | 'Mid-term' | 'Immediate'>('All');
    const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
    const { mode } = useBatch2UI();

    const filteredSkills = filter === 'All'
        ? SKILLS_METADATA
        : SKILLS_METADATA.filter(s => s.category === filter);

    const getProgress = (skillId: string) => skillProgress.find(s => s.skillId === skillId);

    if (mode === 'immersive') {
        return (
            <div className="relative w-full h-full min-h-[600px] flex rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl">
                <SkillsExplorerImmersive />
                <div className="absolute bottom-6 right-6 z-50">
                    <TranceToggle />
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col h-full max-h-[700px]">

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6 bg-amber-50/50 p-2 rounded-2xl border border-amber-200 shrink-0">
                {(['All', 'Evergreen', 'Mid-term', 'Immediate'] as const).map(cat => {
                    const count = cat === 'All' ? SKILLS_METADATA.length : SKILLS_METADATA.filter(s => s.category === cat).length;
                    const isSelected = filter === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${isSelected
                                ? 'bg-white text-amber-900 shadow-sm border border-amber-200'
                                : 'text-amber-700/60 hover:text-amber-900 hover:bg-amber-100/50'
                                }`}
                        >
                            {cat} <span className={`px-2 py-0.5 rounded-full text-[10px] ${isSelected ? 'bg-amber-100 text-amber-800' : 'bg-black/5'}`}>{count}</span>
                        </button>
                    );
                })}
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                {filteredSkills.map(skill => {
                    const progress = getProgress(skill.id);
                    const styles = CATEGORY_STYLES[skill.category];
                    const Icon = styles.icon;
                    const isExpanded = expandedSkill === skill.id;

                    return (
                        <div key={skill.id} className={`rounded-2xl transition-all border-2 ${isExpanded ? `${styles.bg} ${styles.border} shadow-sm` : 'bg-white border-transparent hover:border-amber-200'}`}>
                            <button
                                onClick={() => setExpandedSkill(isExpanded ? null : skill.id)}
                                className="w-full text-left p-5 flex items-start gap-4"
                            >
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-xl shadow-inner border border-black/5 ${progress ? 'bg-white' : 'bg-stone-50'}`}>
                                    {progress ? MATURITY_ICONS[progress.maturity] : <span className="text-stone-300">○</span>}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className={`font-bold text-lg ${isExpanded ? styles.text : 'text-amber-950'}`}>{skill.name}</h3>
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 ${styles.badge}`}>
                                            <Icon className="w-3 h-3" /> {skill.category}
                                        </span>
                                    </div>
                                    <p className={`text-sm ${isExpanded ? 'text-stone-700' : 'text-stone-500'} line-clamp-2`}>
                                        {skill.description}
                                    </p>
                                </div>
                                <div className="shrink-0 text-[var(--sp-text-lo)] mt-2">
                                    <ChevronDown className="w-5 h-5 -rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Custom scrollbar for list */}
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(251, 191, 36, 0.4);
                    border-radius: 20px;
                }
            `}</style>

            {/* Trance Toggle Note: placed here for the standard UI, optionally styled differently */}
            <div className="absolute bottom-6 right-6 z-50">
                <TranceToggle />
            </div>

            {/* Slide-in Detail Drawer */}
            <SkillDetailDrawer
                skillId={expandedSkill}
                onClose={() => setExpandedSkill(null)}
            />
        </div>
    );
}
