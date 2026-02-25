'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Flame, Droplets, Utensils, Coins, Target } from 'lucide-react';

const PURUSHCHARANA_GOAL = 1250000; // 12.5 Lakh

export function YajnaObligationTracker() {
    const [japaCount, setJapaCount] = useState<number>(0);

    const obligations = useMemo(() => {
        const homa = Math.ceil(japaCount / 10);
        const tarpana = Math.ceil(homa / 10);
        const marjana = Math.ceil(tarpana / 10);
        const dana = Math.ceil(marjana / 10);

        return [
            { id: 'japa', name: 'Japa', count: japaCount, icon: Target, color: 'text-amber-500', bg: 'bg-amber-500/10' },
            { id: 'homa', name: 'Homa', count: homa, icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10' },
            { id: 'tarpana', name: 'Tarpaṇa', count: tarpana, icon: Droplets, color: 'text-blue-500', bg: 'bg-blue-500/10' },
            { id: 'marjana', name: 'Mārjana', count: marjana, icon: Utensils, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
            { id: 'dana', name: 'Dāna/Bhojana', count: dana, icon: Coins, color: 'text-rose-500', bg: 'bg-rose-500/10' },
        ];
    }, [japaCount]);

    const totalProgress = (japaCount / PURUSHCHARANA_GOAL) * 100;

    return (
        <div className="bg-white rounded-[2.5rem] p-8 border-2 border-stone-100 shadow-xl max-w-4xl mx-auto overflow-hidden relative">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-orange-100 rounded-2xl">
                        <Calculator className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-stone-900 font-serif">10:1 Ratio Calculator</h2>
                        <p className="text-sm text-stone-500 font-medium">Automatic Puruścaraṇa Obligation Tracking</p>
                    </div>
                </div>

                <div className="bg-stone-50 px-6 py-3 rounded-2xl border border-stone-200">
                    <span className="text-[10px] uppercase font-bold text-stone-400 tracking-widest block mb-1">Mega Goal</span>
                    <span className="text-lg font-bold text-stone-800">1.25 Million (12.5 Lakh)</span>
                </div>
            </div>

            {/* Input Zone */}
            <div className="mb-12">
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Total Japa Chanted</label>
                <div className="relative">
                    <input
                        type="number"
                        value={japaCount || ''}
                        onChange={(e) => setJapaCount(Number(e.target.value))}
                        placeholder="Enter your current japa count..."
                        className="w-full bg-stone-50 border-2 border-stone-100 rounded-2xl px-8 py-6 text-3xl font-bold text-orange-600 placeholder:text-stone-200 focus:outline-none focus:border-orange-200 transition-all text-center"
                    />
                    <div className="absolute inset-y-0 right-8 flex items-center pointer-events-none">
                        <span className="text-stone-300 font-bold uppercase tracking-widest text-xs">Beads</span>
                    </div>
                </div>
            </div>

            {/* Progression Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                {obligations.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-6 rounded-3xl border ${item.bg} border-transparent flex flex-col items-center text-center`}
                        >
                            <div className={`p-3 rounded-xl mb-4 ${item.color} ${item.bg} ring-1 ring-inset ring-current/20`}>
                                <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">{item.name}</span>
                            <span className={`text-xl font-bold ${item.color}`}>{item.count.toLocaleString()}</span>
                            {idx > 0 && (
                                <span className="text-[8px] text-stone-400 mt-1">1/10th of {obligations[idx - 1].name}</span>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Total Goal Progress */}
            <div className="bg-stone-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Purushcharana Progress</span>
                            <h3 className="text-2xl font-bold">{totalProgress.toFixed(2)}%</h3>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Remaining</span>
                            <h3 className="text-xl font-bold text-orange-400">{(PURUSHCHARANA_GOAL - japaCount).toLocaleString()}</h3>
                        </div>
                    </div>
                    <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden mb-2">
                        <motion.div
                            className="h-full bg-gradient-to-r from-orange-500 to-amber-300 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(100, totalProgress)}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </div>
                    <p className="text-[10px] text-white/40 italic">Calculated based on the Shāstraic guidelines for mantra siddhi.</p>
                </div>

                {/* Background decorative element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-600/20 rounded-full blur-3xl" />
            </div>
        </div>
    );
}
