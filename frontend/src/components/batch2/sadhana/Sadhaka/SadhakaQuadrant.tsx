import React, { useState } from 'react';
import { useSadhanaProgress } from '../hooks/useSadhanaProgress';
import LotusVisualizer from './LotusVisualizer';
import SkillsExplorer from './SkillsExplorer';

type SadhakaTab = 'overview' | 'skills';

const SadhakaQuadrant: React.FC = () => {
    const { progress } = useSadhanaProgress();
    const [tab, setTab] = useState<SadhakaTab>('overview');

    return (
        <div className="space-y-4">
            {/* Profile Header */}
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xl shadow-lg shadow-blue-500/20">
                    👤
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-blue-100">Student Profile</h3>
                    <p className="text-xs text-slate-400">
                        <span className="text-blue-400 font-semibold">{progress.archetype}</span>
                        {' • '}
                        <span className="text-purple-400">{progress.bhaktiTier} Bhakti</span>
                    </p>
                </div>
                <div className="text-right">
                    <div className="text-lg font-mono font-bold text-amber-400">{progress.consistencyScore}%</div>
                    <div className="text-[9px] text-slate-500 uppercase">Consistency</div>
                </div>
            </div>

            {/* Tab Switcher */}
            <div className="flex gap-2">
                <button
                    onClick={() => setTab('overview')}
                    className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${tab === 'overview' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-slate-900/50 text-slate-500'
                        }`}
                >
                    🪷 Lotus View
                </button>
                <button
                    onClick={() => setTab('skills')}
                    className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${tab === 'skills' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-900/50 text-slate-500'
                        }`}
                >
                    📋 36 Skills
                </button>
            </div>

            {/* Tab Content */}
            {tab === 'overview' ? (
                <div className="space-y-4">
                    {/* Lotus */}
                    <div className="bg-slate-800/30 p-6 rounded-3xl border border-slate-800 shadow-xl">
                        <LotusVisualizer skills={progress.skills} />
                    </div>

                    {/* Today's Discipline */}
                    <div className="bg-slate-800/30 p-4 rounded-2xl border border-slate-800">
                        <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">Today&apos;s Discipline</h4>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg">
                                <span className="text-sm">40-min Dedicated Slot</span>
                                <input type="checkbox" className="w-4 h-4 rounded border-slate-700 bg-slate-900 accent-blue-500" />
                            </div>
                            <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg">
                                <span className="text-sm">Experience Journal</span>
                                <input type="checkbox" className="w-4 h-4 rounded border-slate-700 bg-slate-900 accent-blue-500" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <SkillsExplorer skillProgress={progress.skills} />
            )}
        </div>
    );
};

export default SadhakaQuadrant;
