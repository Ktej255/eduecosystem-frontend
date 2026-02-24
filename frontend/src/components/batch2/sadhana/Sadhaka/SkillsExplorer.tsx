'use client';

import React, { useState } from 'react';
import { SKILLS_METADATA, SkillMetadata, SkillProgress } from '../data/sadhana-data';

interface SkillsExplorerProps {
    skillProgress: SkillProgress[];
}

const CATEGORY_COLORS = {
    'Evergreen': { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', badge: 'bg-amber-500' },
    'Mid-term': { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', badge: 'bg-blue-500' },
    'Immediate': { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', badge: 'bg-emerald-500' },
};

const MATURITY_ICONS = {
    'Sapling': '🌱',
    'Tree': '🌳',
    'Orchard': '🌺',
};

const SkillsExplorer: React.FC<SkillsExplorerProps> = ({ skillProgress }) => {
    const [filter, setFilter] = useState<'All' | 'Evergreen' | 'Mid-term' | 'Immediate'>('All');
    const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

    const filteredSkills = filter === 'All'
        ? SKILLS_METADATA
        : SKILLS_METADATA.filter(s => s.category === filter);

    const getProgress = (skillId: string): SkillProgress | undefined =>
        skillProgress.find(s => s.skillId === skillId);

    const counts = {
        Evergreen: SKILLS_METADATA.filter(s => s.category === 'Evergreen').length,
        'Mid-term': SKILLS_METADATA.filter(s => s.category === 'Mid-term').length,
        Immediate: SKILLS_METADATA.filter(s => s.category === 'Immediate').length,
    };

    return (
        <div className="space-y-4">
            {/* Filter Tabs */}
            <div className="flex gap-1.5">
                {(['All', 'Evergreen', 'Mid-term', 'Immediate'] as const).map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${filter === cat
                                ? cat === 'All'
                                    ? 'bg-slate-700 text-white'
                                    : `${CATEGORY_COLORS[cat as keyof typeof CATEGORY_COLORS].bg} ${CATEGORY_COLORS[cat as keyof typeof CATEGORY_COLORS].text}`
                                : 'bg-slate-900/50 text-slate-600 hover:text-slate-400'
                            }`}
                    >
                        {cat} {cat !== 'All' && <span className="opacity-60">({counts[cat as keyof typeof counts]})</span>}
                    </button>
                ))}
            </div>

            {/* Skills List */}
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
                {filteredSkills.map((skill, idx) => {
                    const progress = getProgress(skill.id);
                    const colors = CATEGORY_COLORS[skill.category];
                    const isExpanded = expandedSkill === skill.id;

                    return (
                        <div key={skill.id}>
                            <button
                                onClick={() => setExpandedSkill(isExpanded ? null : skill.id)}
                                className={`w-full text-left p-3 rounded-xl border transition-all ${isExpanded
                                        ? `${colors.bg} ${colors.border}`
                                        : 'bg-slate-900/30 border-slate-800/50 hover:border-slate-700'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg">
                                            {progress ? MATURITY_ICONS[progress.maturity] : '◯'}
                                        </span>
                                        <div>
                                            <div className="text-sm font-semibold text-slate-200">{skill.name}</div>
                                            <div className="text-[10px] text-slate-500">{skill.description}</div>
                                        </div>
                                    </div>
                                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${colors.badge} text-black`}>
                                        {skill.category === 'Mid-term' ? 'MID' : skill.category === 'Evergreen' ? 'CORE' : 'NOW'}
                                    </span>
                                </div>
                            </button>

                            {/* Expanded Detail */}
                            {isExpanded && (
                                <div className={`mt-1 p-4 rounded-xl ${colors.bg} border ${colors.border} space-y-3`}>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase">Maturity Progression</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm">🌱</span>
                                            <div className="flex-1">
                                                <div className="text-[10px] text-slate-500 font-bold uppercase">Sapling</div>
                                                <div className="text-xs text-slate-300">{skill.maturityLogic.sapling}</div>
                                            </div>
                                            {progress?.maturity === 'Sapling' && <span className="text-emerald-400 text-xs">✓ Active</span>}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm">🌳</span>
                                            <div className="flex-1">
                                                <div className="text-[10px] text-slate-500 font-bold uppercase">Tree</div>
                                                <div className="text-xs text-slate-300">{skill.maturityLogic.tree}</div>
                                            </div>
                                            {progress?.maturity === 'Tree' && <span className="text-blue-400 text-xs">✓ Active</span>}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm">🌺</span>
                                            <div className="flex-1">
                                                <div className="text-[10px] text-slate-500 font-bold uppercase">Orchard</div>
                                                <div className="text-xs text-slate-300">{skill.maturityLogic.orchard}</div>
                                            </div>
                                            {progress?.maturity === 'Orchard' && <span className="text-amber-400 text-xs">✓ Mastered</span>}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Summary Footer */}
            <div className="pt-3 border-t border-slate-800 flex justify-between text-[10px] text-slate-500">
                <span>{skillProgress.length} / 36 skills activated</span>
                <span>
                    {skillProgress.filter(s => s.maturity === 'Orchard').length} mastered
                </span>
            </div>
        </div>
    );
};

export default SkillsExplorer;
