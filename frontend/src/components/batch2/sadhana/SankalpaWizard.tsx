"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, ChevronRight, CheckCircle2, AlertTriangle, Shield, BookOpen } from 'lucide-react';
import { CORE_SADHANAS } from './data/sadhana-data';
import { useSadhanaProgress } from './hooks/useSadhanaProgress';

type WizardStep = 'choose' | 'configure' | 'vow' | 'sealed';

const VOWS = {
    ganesha: { en: "I commit to chanting the Ganesha mantra 1,25,000 times over {days} days. I will not break this vow. May Sri Ganapati remove all obstacles.", hi: "मैं {days} दिनों में गणेश मंत्र का 1,25,000 बार जप करने की प्रतिज्ञा करता/करती हूँ। मैं यह व्रत नहीं तोड़ूंगा/गी।" },
    guru: { en: "I commit to chanting the Guru mantra 1,25,000 times over {days} days. I dedicate this practice to the awakening of the inner guide.", hi: "मैं {days} दिनों में गुरु मंत्र का 1,25,000 बार जप करने की प्रतिज्ञा करता/करती हूँ।" },
    gayatri: { en: "I commit to the Gayatri Sadhana, chanting the supreme light mantra {count} times over {days} days.", hi: "मैं गायत्री साधना हेतु {days} दिनों में {count} बार गायत्री मंत्र का जप करने की प्रतिज्ञा करता/करती हूँ।" },
    'sri-suktam': { en: "I commit to the Sri Suktam Puruscharana of 16 nights. I have completed the 960-day preparation.", hi: "मैं 16 रात्रि की श्री सूक्तम पुरुश्चरण साधना हेतु प्रतिज्ञा करता/करती हूँ।" },
};

const PRAYASHCHITTA_METHODS = [
    { name: 'Fasting', desc: '24-hour water-only fast on the matching lunar date.', severity: 'Moderate' },
    { name: 'Double Japa', desc: 'Double your daily chanting count for 1, 3, or 7 days.', severity: 'Light' },
    { name: 'Extra Yajna', desc: 'Perform additional fire offerings to compensate.', severity: 'Moderate' },
    { name: 'Charity', desc: 'Donate to worthy recipients (needy or siddhas).', severity: 'Light' },
    { name: 'Repentance', desc: 'Sit in solitude. Make firm resolve never to repeat.', severity: 'Severe' },
    { name: 'Confession', desc: 'Confess to guru, victim, or before a lamp/idol.', severity: 'Moderate' },
];

export default function SankalpaWizard() {
    const { progress, signSankalpa, resetSankalpa } = useSadhanaProgress();
    const [step, setStep] = useState<WizardStep>(progress.activeSadhanaId ? 'sealed' : 'choose');
    const [selectedSadhanaId, setSelectedSadhanaId] = useState<string | null>(progress.activeSadhanaId);
    const [confirmText, setConfirmText] = useState('');
    const [showPrayashchitta, setShowPrayashchitta] = useState(false);

    const selectedSadhana = CORE_SADHANAS.find(s => s.id === selectedSadhanaId);

    const handleSeal = () => {
        if (confirmText.toLowerCase() === 'i commit' && selectedSadhanaId) {
            signSankalpa(selectedSadhanaId);
            setStep('sealed');
        }
    };

    const handleBreakVow = () => {
        setShowPrayashchitta(true);
    };

    const handleCompletePrayashchitta = () => {
        resetSankalpa();
        setShowPrayashchitta(false);
        setStep('choose');
        setSelectedSadhanaId(null);
        setConfirmText('');
    };

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <div className="text-center mb-10">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-orange-200 shadow-sm">
                    <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h1 className="text-4xl font-serif font-bold text-amber-950 mb-3">Sankalpa</h1>
                <p className="text-amber-800/80 max-w-md mx-auto text-lg leading-relaxed">
                    The Sacred Vow — made once on Day 1. Breaking it means starting from scratch.
                </p>
            </div>

            <AnimatePresence mode="wait">
                {/* STEP 1: Choose Sadhana */}
                {step === 'choose' && (
                    <motion.div key="choose" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}>
                        <h2 className="text-lg font-bold text-amber-950 mb-4">Step 1: Choose Your Sadhana</h2>
                        <div className="grid gap-4">
                            {CORE_SADHANAS.map(sadhana => (
                                <button
                                    key={sadhana.id}
                                    onClick={() => { setSelectedSadhanaId(sadhana.id); setStep('configure'); }}
                                    className={`text-left p-5 rounded-2xl border-2 transition-all hover:shadow-md ${selectedSadhanaId === sadhana.id ? 'bg-amber-50 border-amber-400' : 'bg-white border-amber-100 hover:border-amber-300'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-amber-950 text-lg">{sadhana.name}</h3>
                                            <p className="text-sm text-stone-600 mt-1">{sadhana.description}</p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-amber-400 shrink-0" />
                                    </div>
                                    <div className="flex gap-3 mt-3">
                                        <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">{sadhana.goal}</span>
                                        <span className="text-xs font-bold bg-stone-100 text-stone-600 px-2 py-0.5 rounded">{sadhana.durationDays} days</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* STEP 2: Configure Parameters */}
                {step === 'configure' && selectedSadhana && (
                    <motion.div key="configure" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}>
                        <button onClick={() => setStep('choose')} className="text-sm text-amber-600 font-bold mb-4 hover:underline">← Back</button>
                        <h2 className="text-lg font-bold text-amber-950 mb-4">Step 2: Your Setup for {selectedSadhana.name}</h2>
                        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 space-y-4 mb-6">
                            {[
                                { label: 'Duration', value: `${selectedSadhana.durationDays} days` },
                                { label: 'Clothing', value: selectedSadhana.clothing },
                                { label: 'Direction', value: selectedSadhana.direction.join(' / ') },
                                { label: 'Beads', value: selectedSadhana.beads },
                                { label: 'Setup', value: selectedSadhana.setup.join(', ') },
                            ].map(item => (
                                <div key={item.label} className="flex items-center justify-between py-2 border-b border-amber-100 last:border-0">
                                    <span className="text-sm font-bold text-amber-800 uppercase tracking-wider">{item.label}</span>
                                    <span className="text-sm text-amber-950 font-medium">{item.value}</span>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => setStep('vow')}
                            className="w-full py-4 bg-amber-600 text-white font-bold text-lg rounded-2xl hover:bg-amber-700 transition-colors shadow-lg"
                        >
                            Proceed to The Vow <ChevronRight className="w-5 h-5 inline ml-2" />
                        </button>
                    </motion.div>
                )}

                {/* STEP 3: The Vow */}
                {step === 'vow' && selectedSadhana && (
                    <motion.div key="vow" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}>
                        <button onClick={() => setStep('configure')} className="text-sm text-amber-600 font-bold mb-4 hover:underline">← Back</button>
                        <h2 className="text-lg font-bold text-amber-950 mb-4">Step 3: The Sacred Vow</h2>

                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-300 shadow-lg mb-6">
                            <div className="text-center mb-6">
                                <Flame className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                                <p className="text-amber-950 font-serif text-lg leading-relaxed italic">
                                    &ldquo;{VOWS[selectedSadhana.id as keyof typeof VOWS]?.en.replace('{days}', String(selectedSadhana.durationDays)).replace('{count}', String(selectedSadhana.rituals[0]?.mantraCount || ''))}&rdquo;
                                </p>
                                <p className="text-amber-700/80 font-serif text-sm mt-4 leading-relaxed">
                                    {VOWS[selectedSadhana.id as keyof typeof VOWS]?.hi.replace('{days}', String(selectedSadhana.durationDays)).replace('{count}', String(selectedSadhana.rituals[0]?.mantraCount || ''))}
                                </p>
                            </div>

                            <div className="bg-white/60 rounded-2xl p-4 border border-amber-200">
                                <label className="text-xs font-bold uppercase tracking-widest text-amber-800/60 block mb-2">
                                    Type &quot;I commit&quot; to seal your vow
                                </label>
                                <input
                                    type="text"
                                    value={confirmText}
                                    onChange={(e) => setConfirmText(e.target.value)}
                                    placeholder="I commit"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-amber-200 focus:border-amber-500 focus:ring-0 text-lg font-serif text-amber-950 bg-white"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleSeal}
                            disabled={confirmText.toLowerCase() !== 'i commit'}
                            className={`w-full py-4 font-bold text-lg rounded-2xl transition-all shadow-lg ${confirmText.toLowerCase() === 'i commit'
                                    ? 'bg-orange-600 text-white hover:bg-orange-700'
                                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                                }`}
                        >
                            🔥 Seal the Sankalpa
                        </button>
                    </motion.div>
                )}

                {/* STEP 4: Sealed */}
                {step === 'sealed' && (
                    <motion.div key="sealed" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                        <div className="text-center bg-gradient-to-br from-emerald-50 to-amber-50 rounded-3xl p-10 border-2 border-emerald-200 shadow-lg">
                            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                            <h2 className="text-3xl font-serif font-bold text-amber-950 mb-3">Sankalpa Sealed</h2>
                            <p className="text-stone-600 mb-6 text-lg">
                                Your vow for <strong>{CORE_SADHANAS.find(s => s.id === progress.activeSadhanaId)?.name || 'Sadhana'}</strong> is active.
                            </p>
                            <p className="text-sm text-stone-500 mb-8">
                                Sankalpa ID: <code className="bg-white px-2 py-1 rounded text-amber-700 border border-amber-200">{progress.activeSadhanaId}-{Date.now().toString(36)}</code>
                            </p>

                            {!showPrayashchitta ? (
                                <button
                                    onClick={handleBreakVow}
                                    className="text-sm text-red-600 hover:text-red-800 font-medium underline"
                                >
                                    I need to break this vow...
                                </button>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-50 rounded-2xl p-6 border border-red-200 text-left mt-6"
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <AlertTriangle className="w-5 h-5 text-red-500" />
                                        <h3 className="font-bold text-red-900">Prayashchitta (Atonement) Required</h3>
                                    </div>
                                    <p className="text-sm text-red-800/80 mb-4">
                                        Breaking a Sankalpa is serious. Choose at least one method of atonement before restarting:
                                    </p>
                                    <div className="space-y-2 mb-6">
                                        {PRAYASHCHITTA_METHODS.map(method => (
                                            <div key={method.name} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-red-100">
                                                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600 shrink-0 text-sm font-bold">
                                                    {method.severity === 'Light' ? '◦' : method.severity === 'Moderate' ? '•' : '●'}
                                                </div>
                                                <div>
                                                    <span className="font-bold text-red-900 text-sm">{method.name}</span>
                                                    <p className="text-xs text-red-700/80 mt-0.5">{method.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        onClick={handleCompletePrayashchitta}
                                        className="w-full py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
                                    >
                                        I have atoned. Reset my Sankalpa.
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
