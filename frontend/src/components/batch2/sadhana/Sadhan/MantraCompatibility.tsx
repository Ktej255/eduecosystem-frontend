'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Droplets, Wind, Mountain, Sparkles, Scale, ArrowRight, Activity, Moon } from 'lucide-react';
import { getZodiacSign, getZodiacCompatibility, getRinniResult, getElement, getElementCompatibility, CompatibilityLevel } from './MantraCompatibilityLogic';

const LEVEL_COLORS: Record<CompatibilityLevel, string> = {
    'Excellent': 'text-emerald-500 bg-emerald-50 border-emerald-200',
    'Good': 'text-blue-500 bg-blue-50 border-blue-200',
    'Neutral': 'text-amber-500 bg-amber-50 border-amber-200',
    'Avoid': 'text-rose-500 bg-rose-50 border-rose-200'
};

const ELEMENT_ICONS: Record<string, React.FC<any>> = {
    'FIRE': Flame,
    'WATER': Droplets,
    'AIR': Wind,
    'EARTH': Mountain,
    'SPACE': Sparkles,
};

export default function MantraCompatibility() {
    const [name, setName] = useState('');
    const [mantra, setMantra] = useState('');
    const [isCalculating, setIsCalculating] = useState(false);

    const results = useMemo(() => {
        if (!name || !mantra || isCalculating) return null;

        // Zodiac
        const nZod = getZodiacSign(name[0]);
        const mZod = getZodiacSign(mantra[0]);
        const zodCompat = getZodiacCompatibility(nZod?.index || 0, mZod?.index || 0);

        // Kula-Akula
        const nEl = getElement(name[0]);
        const mEl = getElement(mantra[0]);
        const elementCompat = getElementCompatibility(nEl.name, mEl.name);

        // Rinni-Dhani
        const rinniCompat = getRinniResult(name, mantra);

        return {
            zodiac: { nameSign: nZod?.sign, mantraSign: mZod?.sign, ...zodCompat },
            element: { nameEl, mantraEl: mEl, ...elementCompat },
            rinni: rinniCompat
        };
    }, [name, mantra, isCalculating]);

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !mantra) return;
        setIsCalculating(true);
        setTimeout(() => setIsCalculating(false), 800); // Fake delay for calculation feel
    };

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="text-center mb-10">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-200 shadow-sm">
                    <Scale className="w-8 h-8 text-amber-600" />
                </div>
                <h1 className="text-4xl font-serif font-bold text-amber-950 mb-3">Mantra Compatibility</h1>
                <p className="text-amber-800/80 max-w-xl mx-auto text-lg leading-relaxed">
                    Analyze the vibrational alignment between your name and your chosen mantra across three deep Vedic dimensions.
                </p>
            </div>

            <form onSubmit={handleCalculate} className="bg-card p-6 md:p-8 rounded-3xl shadow-sm border border-amber-200 mb-8 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">Student Name (English)</label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="e.g. Arjuna"
                            className="w-full px-4 py-3 bg-amber-50/50 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all font-medium text-amber-950 placeholder:text-amber-900/30"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">Mantra First Word</label>
                        <input
                            type="text"
                            value={mantra}
                            onChange={e => setMantra(e.target.value)}
                            placeholder="e.g. Om"
                            className="w-full px-4 py-3 bg-amber-50/50 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all font-medium text-amber-950 placeholder:text-amber-900/30"
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={!name || !mantra || isCalculating}
                    className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-amber-600/20 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                    {isCalculating ? (
                        <span className="flex items-center gap-2">Calculating Resonance <Activity className="w-5 h-5 animate-pulse" /></span>
                    ) : (
                        <span className="flex items-center gap-2">Analyze Alignment <ArrowRight className="w-5 h-5" /></span>
                    )}
                </button>
            </form>

            <AnimatePresence mode="wait">
                {results && !isCalculating && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {/* 1. Kula-Akula (Elements) */}
                        <div className={`p-6 rounded-2xl border ${LEVEL_COLORS[results.element.level]}`}>
                            <div className="flex items-center gap-2 mb-4">
                                <Flame className="w-5 h-5 opacity-70" />
                                <h3 className="font-bold uppercase tracking-wider text-xs opacity-80">Kula-Akula (Elements)</h3>
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-center">
                                    <span className="text-2xl font-bold">{results.element.nameEl.name}</span>
                                </div>
                                <div className="opacity-50 text-lg mx-2">vs</div>
                                <div className="text-center">
                                    <span className="text-2xl font-bold">{results.element.mantraEl.name}</span>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-current/10">
                                <p className="font-bold text-lg mb-1">{results.element.level}</p>
                                <p className="text-sm opacity-80 leading-snug">{results.element.desc}</p>
                            </div>
                        </div>

                        {/* 2. Zodiac */}
                        <div className={`p-6 rounded-2xl border ${LEVEL_COLORS[results.zodiac.level]}`}>
                            <div className="flex items-center gap-2 mb-4">
                                <Moon className="w-5 h-5 opacity-70" />
                                <h3 className="font-bold uppercase tracking-wider text-xs opacity-80">Zodiac Alignment</h3>
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-center">
                                    <span className="text-2xl font-bold">{results.zodiac.nameSign}</span>
                                </div>
                                <div className="opacity-50 text-lg mx-2">vs</div>
                                <div className="text-center">
                                    <span className="text-2xl font-bold">{results.zodiac.mantraSign}</span>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-current/10">
                                <p className="font-bold text-lg mb-1">{results.zodiac.level}</p>
                                <p className="text-sm opacity-80 leading-snug">{results.zodiac.desc}</p>
                            </div>
                        </div>

                        {/* 3. Rinni-Dhani */}
                        <div className={`p-6 rounded-2xl border ${LEVEL_COLORS[results.rinni.level]}`}>
                            <div className="flex items-center gap-2 mb-4">
                                <Scale className="w-5 h-5 opacity-70" />
                                <h3 className="font-bold uppercase tracking-wider text-xs opacity-80">Creditor-Debtor</h3>
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-center">
                                    <span className="text-xs uppercase opacity-70 block mb-1">Name</span>
                                    <span className="text-3xl font-bold">{results.rinni.nameScore}</span>
                                </div>
                                <div className="opacity-50 text-lg mx-2">vs</div>
                                <div className="text-center">
                                    <span className="text-xs uppercase opacity-70 block mb-1">Mantra</span>
                                    <span className="text-3xl font-bold">{results.rinni.mantraScore}</span>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-current/10">
                                <p className="font-bold text-lg mb-1">{results.rinni.type}</p>
                                <p className="text-sm opacity-80 leading-snug">{results.rinni.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
