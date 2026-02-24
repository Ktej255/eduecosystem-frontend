import React, { useState } from 'react';
import { useSadhanaProgress } from './hooks/useSadhanaProgress';

import SiddhaQuadrant from './Siddha/SiddhaQuadrant';
import SadhakaQuadrant from './Sadhaka/SadhakaQuadrant';
import SadhanQuadrant from './Sadhan/SadhanQuadrant';
import SadhyaQuadrant from './Sadhya/SadhyaQuadrant';

const SadhanaDashboard: React.FC = () => {
    const { progress } = useSadhanaProgress();
    const [activeTab, setActiveTab] = useState<'grid' | 'siddha' | 'sadhaka' | 'sadhan' | 'sadhya'>('grid');

    return (
        <div className="p-6 bg-slate-950 min-h-screen text-slate-100">
            <header className="mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                        Sadhana Portal
                    </h1>
                    <p className="text-slate-400">Path of the Adept — {progress.archetype} Archetype</p>
                </div>
                <div className="flex gap-4">
                    <div className="text-right">
                        <div className="text-sm text-slate-500 uppercase tracking-wider">Consistency</div>
                        <div className="text-xl font-mono text-amber-500">{progress.consistencyScore}%</div>
                    </div>
                </div>
            </header>

            {/* Desktop Quadrant View */}
            <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-6 h-[calc(100vh-200px)]">
                <section className="border border-slate-800 rounded-3xl overflow-hidden bg-slate-900/50 backdrop-blur-sm group hover:border-amber-500/50 transition-all">
                    <div className="p-4 border-b border-slate-800 bg-slate-800/20 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-amber-400">Siddha (The Guru)</h2>
                        <span className="text-xs text-slate-500 italic">Wisdom & Lineage</span>
                    </div>
                    <div className="p-6 overflow-y-auto h-full">
                        <SiddhaQuadrant />
                    </div>
                </section>

                <section className="border border-slate-800 rounded-3xl overflow-hidden bg-slate-900/50 backdrop-blur-sm group hover:border-blue-500/50 transition-all">
                    <div className="p-4 border-b border-slate-800 bg-slate-800/20 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-blue-400">Sadhaka (You)</h2>
                        <span className="text-xs text-slate-500 italic">Self & Progress</span>
                    </div>
                    <div className="p-6 overflow-y-auto h-full">
                        <SadhakaQuadrant />
                    </div>
                </section>

                <section className="border border-slate-800 rounded-3xl overflow-hidden bg-slate-900/50 backdrop-blur-sm group hover:border-emerald-500/50 transition-all">
                    <div className="p-4 border-b border-slate-800 bg-slate-800/20 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-emerald-400">Sadhan (Tools)</h2>
                        <span className="text-xs text-slate-500 italic">Technology & Rituals</span>
                    </div>
                    <div className="p-6 overflow-y-auto h-full">
                        <SadhanQuadrant />
                    </div>
                </section>

                <section className="border border-slate-800 rounded-3xl overflow-hidden bg-slate-900/50 backdrop-blur-sm group hover:border-purple-500/50 transition-all">
                    <div className="p-4 border-b border-slate-800 bg-slate-800/20 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-purple-400">Sadhya (The Goal)</h2>
                        <span className="text-xs text-slate-500 italic">Pathway & Deity</span>
                    </div>
                    <div className="p-6 overflow-y-auto h-full">
                        <SadhyaQuadrant />
                    </div>
                </section>
            </div>

            {/* Mobile Tabbed View */}
            <div className="lg:hidden">
                {/* Tab Bar */}
                <div className="flex gap-1 mb-4 bg-slate-900/80 p-1 rounded-2xl">
                    {([
                        { key: 'siddha' as const, label: 'Guru', icon: '🕉️', color: 'from-amber-500 to-orange-600' },
                        { key: 'sadhaka' as const, label: 'You', icon: '👤', color: 'from-blue-500 to-indigo-600' },
                        { key: 'sadhan' as const, label: 'Tools', icon: '🛠️', color: 'from-emerald-500 to-teal-600' },
                        { key: 'sadhya' as const, label: 'Path', icon: '🎯', color: 'from-purple-500 to-violet-600' },
                    ]).map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex-1 py-3 rounded-xl text-center transition-all ${activeTab === tab.key
                                    ? `bg-gradient-to-b ${tab.color} text-white shadow-lg`
                                    : 'text-slate-500 hover:text-slate-300'
                                }`}
                        >
                            <div className="text-lg">{tab.icon}</div>
                            <div className="text-[10px] font-bold uppercase mt-0.5">{tab.label}</div>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-slate-900/50 rounded-3xl border border-slate-800 p-5 min-h-[60vh]">
                    {activeTab === 'siddha' && <SiddhaQuadrant />}
                    {activeTab === 'sadhaka' && <SadhakaQuadrant />}
                    {activeTab === 'sadhan' && <SadhanQuadrant />}
                    {activeTab === 'sadhya' && <SadhyaQuadrant />}
                    {activeTab === 'grid' && (
                        <div className="text-center py-8">
                            <p className="text-slate-400 text-sm">Tap a tab above to explore</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SadhanaDashboard;
