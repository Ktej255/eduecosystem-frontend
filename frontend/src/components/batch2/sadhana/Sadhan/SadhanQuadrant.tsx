'use client';

import React, { useState } from 'react';
import DigitalMala from './DigitalMala';
import MantraCompatibility from './MantraCompatibility';
import YajnaRitualEngine from './YajnaRitualEngine';

type ToolView = 'grid' | 'mala' | 'compatibility' | 'yajna' | 'setup';

const SadhanQuadrant: React.FC = () => {
    const [activeView, setActiveView] = useState<ToolView>('grid');

    if (activeView === 'mala') {
        return (
            <div>
                <button onClick={() => setActiveView('grid')} className="text-xs text-slate-500 hover:text-slate-300 mb-4 flex items-center gap-1 transition-colors">
                    ← Back to Tools
                </button>
                <DigitalMala />
            </div>
        );
    }

    if (activeView === 'compatibility') {
        return (
            <div>
                <button onClick={() => setActiveView('grid')} className="text-xs text-slate-500 hover:text-slate-300 mb-4 flex items-center gap-1 transition-colors">
                    ← Back to Tools
                </button>
                <MantraCompatibility />
            </div>
        );
    }

    if (activeView === 'yajna') {
        return (
            <div>
                <button onClick={() => setActiveView('grid')} className="text-xs text-slate-500 hover:text-slate-300 mb-4 flex items-center gap-1 transition-colors">
                    ← Back to Tools
                </button>
                <YajnaRitualEngine />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            <button
                onClick={() => setActiveView('mala')}
                className="flex flex-col items-center justify-center p-6 bg-slate-800/10 rounded-2xl border border-slate-800 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all text-center group"
            >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">📿</span>
                <span className="text-sm font-semibold text-emerald-100">Digital Mala</span>
                <span className="text-[10px] text-slate-500 mt-1 uppercase">4 Modes</span>
            </button>

            <button
                onClick={() => setActiveView('compatibility')}
                className="flex flex-col items-center justify-center p-6 bg-slate-800/10 rounded-2xl border border-slate-800 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all text-center group"
            >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">⚖️</span>
                <span className="text-sm font-semibold text-emerald-100">Compatibility</span>
                <span className="text-[10px] text-slate-500 mt-1 uppercase">Zodiac / Rinni</span>
            </button>

            <button
                onClick={() => setActiveView('yajna')}
                className="flex flex-col items-center justify-center p-6 bg-slate-800/10 rounded-2xl border border-slate-800 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all text-center group"
            >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">🔥</span>
                <span className="text-sm font-semibold text-emerald-100">Yajna Engine</span>
                <span className="text-[10px] text-slate-500 mt-1 uppercase">36 Steps</span>
            </button>

            <button
                onClick={() => setActiveView('setup')}
                className="flex flex-col items-center justify-center p-6 bg-slate-800/10 rounded-2xl border border-slate-800 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all text-center group"
            >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">🛠️</span>
                <span className="text-sm font-semibold text-emerald-100">Setup Wizard</span>
                <span className="text-[10px] text-slate-500 mt-1 uppercase">Coming Soon</span>
            </button>
        </div>
    );
};

export default SadhanQuadrant;
