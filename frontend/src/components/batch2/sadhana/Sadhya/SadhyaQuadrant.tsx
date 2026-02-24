import React from 'react';
import { CORE_SADHANAS } from '../data/sadhana-data';
import { useSadhanaProgress } from '../hooks/useSadhanaProgress';

const SadhyaQuadrant: React.FC = () => {
    const { progress } = useSadhanaProgress();

    return (
        <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase">Practice Pathways</h3>

            <div className="space-y-3">
                {CORE_SADHANAS.map(sadhana => (
                    <div
                        key={sadhana.id}
                        className={`p-4 rounded-xl border transition-all ${progress.activeSadhanaId === sadhana.id
                                ? 'bg-purple-500/10 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                                : 'bg-slate-800/30 border-slate-800 opacity-60'
                            }`}
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-semibold text-purple-100">{sadhana.name}</h4>
                                <p className="text-[11px] text-slate-400 mt-1">{sadhana.goal}</p>
                            </div>
                            {progress.activeSadhanaId === sadhana.id && (
                                <span className="bg-purple-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">Active</span>
                            )}
                        </div>

                        {progress.activeSadhanaId === sadhana.id && (
                            <div className="mt-4">
                                <div className="flex justify-between text-[10px] text-slate-500 mb-1 font-mono">
                                    <span>Progress</span>
                                    <span>{progress.currentCounts[sadhana.id] || 0} / 125,000</span>
                                </div>
                                <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-purple-500 transition-all duration-1000"
                                        style={{ width: `${Math.min(100, ((progress.currentCounts[sadhana.id] || 0) / 125000) * 100)}%` }}
                                    ></div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-6 p-4 bg-purple-900/10 border border-purple-500/20 rounded-2xl flex items-center gap-3">
                <span className="text-2xl">🕉️</span>
                <div>
                    <h4 className="text-sm font-semibold text-purple-200">Sankalpa Locker</h4>
                    <p className="text-[10px] text-slate-400">Once signed, missing a day resets your soul's counter to zero.</p>
                </div>
            </div>
        </div>
    );
};

export default SadhyaQuadrant;
