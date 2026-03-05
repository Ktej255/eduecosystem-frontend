"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, ChevronRight, CheckCircle2, AlertTriangle, Shield, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { CORE_SADHANAS, PRAYASHCHITTA_METHODS } from './data/sadhana-data';
import { useSadhanaProgress } from './hooks/useSadhanaProgress';
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { TranceToggle } from "@/components/batch2/context/TranceToggle";
import { SankalpaWizardImmersive } from './SankalpaWizardImmersive';

type WizardStep = 'choose' | 'configure' | 'vow' | 'sealed';

const VOWS = {
    ganesha: { en: "I commit to chanting the Ganesha mantra 1,25,000 times over {days} days. I will not break this vow. May Sri Ganapati remove all obstacles.", hi: "मैं {days} दिनों में गणेश मंत्र का 1,25,000 बार जप करने की प्रतिज्ञा करता/करती हूँ। मैं यह व्रत नहीं तोड़ूंगा/गी।" },
    guru: { en: "I commit to chanting the Guru mantra 1,25,000 times over {days} days. I dedicate this practice to the awakening of the inner guide.", hi: "मैं {days} दिनों में गुरु मंत्र का 1,25,000 बार जप करने की प्रतिज्ञा करता/करती हूँ।" },
    gayatri: { en: "I commit to the Gayatri Sadhana, chanting the supreme light mantra {count} times over {days} days.", hi: "मैं गायत्री साधना हेतु {days} दिनों में {count} बार गायत्री मंत्र का जप करने की प्रतिज्ञा करता/करती हूँ।" },
    'sri-suktam': { en: "I commit to the Sri Suktam Puruscharana of 16 nights. I have completed the 960-day preparation.", hi: "मैं 16 रात्रि की श्री सूक्तम पुरुश्चरण साधना हेतु प्रतिज्ञा करता/करती हूँ।" },
};

const PRAY_ICONS: Record<string, any> = {
    BookOpen: BookOpen,
    Flame: Flame,
    Shield: Shield,
    CheckCircle2: CheckCircle2,
    AlertTriangle: AlertTriangle
};

export default function SankalpaWizard() {
    const { progress, signSankalpa, resetSankalpa } = useSadhanaProgress();
    const [step, setStep] = useState<WizardStep>(progress.activeSadhanaId ? 'sealed' : 'choose');
    const [selectedSadhanaId, setSelectedSadhanaId] = useState<string | null>(progress.activeSadhanaId);
    const [confirmText, setConfirmText] = useState('');
    const [showPrayashchitta, setShowPrayashchitta] = useState(false);
    const [selectedAtonement, setSelectedAtonement] = useState<string | null>(null);
    const [atonementConfirmed, setAtonementConfirmed] = useState(false);
    const { mode } = useBatch2UI();

    const selectedSadhana = CORE_SADHANAS.find(s => s.id === selectedSadhanaId);

    const isValidCommitment = confirmText.trim().toLowerCase() === 'i commit' || confirmText.trim().length >= 8;

    const handleSeal = () => {
        if (isValidCommitment && selectedSadhanaId) {
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
        setSelectedAtonement(null);
        setAtonementConfirmed(false);
        setStep('choose');
        setSelectedSadhanaId(null);
        setConfirmText('');
    };

    if (mode === 'immersive') {
        return (
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-black shadow-2xl">
                <SankalpaWizardImmersive />
                <div className="absolute top-6 right-6 z-50">
                    <TranceToggle />
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-8 px-4 relative">
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
                                    Type &quot;I commit&quot; or type your own vow to seal it
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
                            disabled={!isValidCommitment}
                            className={`w-full py-4 font-bold text-lg rounded-2xl transition-all shadow-lg ${isValidCommitment
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
                        <div className="text-center bg-gradient-to-br from-emerald-50 to-amber-50 rounded-3xl p-10 border-2 border-emerald-200 shadow-lg relative overflow-hidden">
                            {!showPrayashchitta && (
                                <>
                                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                                    <h2 className="text-3xl font-serif font-bold text-amber-950 mb-3">Sankalpa Sealed</h2>
                                    <p className="text-stone-600 mb-6 text-lg">
                                        Your vow for <strong>{CORE_SADHANAS.find(s => s.id === progress.activeSadhanaId)?.name || 'Sadhana'}</strong> is active.
                                    </p>
                                    <p className="text-sm text-stone-500 mb-8">
                                        Sankalpa ID: <code className="bg-white px-2 py-1 rounded text-amber-700 border border-amber-200">{progress.activeSadhanaId}-{Date.now().toString(36)}</code>
                                    </p>

                                    <div className="flex flex-col items-center gap-4 mb-4 mt-6">
                                        <Link
                                            href="/student/batch2/sadhana"
                                            className="px-10 py-4 bg-emerald-600 text-white font-bold rounded-xl text-lg hover:bg-emerald-700 hover:shadow-xl transition-all shadow-md w-full"
                                        >
                                            Proceed to Journey
                                        </Link>
                                        <button
                                            onClick={handleBreakVow}
                                            className="text-sm text-red-600 hover:text-red-800 font-medium underline"
                                        >
                                            I need to break this vow...
                                        </button>
                                    </div>
                                </>
                            )}

                            {showPrayashchitta && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-left"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-2">
                                            <AlertTriangle className="w-6 h-6 text-red-500" />
                                            <h3 className="font-bold text-red-950 text-xl font-serif">Prayashchitta (Atonement)</h3>
                                        </div>
                                        {!atonementConfirmed && (
                                            <button onClick={() => setShowPrayashchitta(false)} className="text-sm text-stone-400 font-bold">Cancel</button>
                                        )}
                                    </div>

                                    {!selectedAtonement ? (
                                        <>
                                            <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                                                Breaking a Sankalpa is a serious energetic rift. You must select one of the 11 authentic methods of restoration to balance the karmic debt.
                                            </p>
                                            <div className="grid sm:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                                {PRAYASHCHITTA_METHODS.map(method => (
                                                    <button
                                                        key={method.id}
                                                        onClick={() => setSelectedAtonement(method.id)}
                                                        className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-red-100 hover:border-red-400 hover:shadow-md transition-all text-left group"
                                                    >
                                                        <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                                            {React.createElement(PRAY_ICONS[method.icon] || Shield, { className: "w-5 h-5" })}
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <span className="font-bold text-red-900 text-sm">{method.name}</span>
                                                                <span className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase tracking-tighter ${method.severity === 'Extreme' ? 'bg-red-900 text-white' : method.severity === 'Severe' ? 'bg-red-600 text-white' : 'bg-orange-100 text-orange-700'
                                                                    }`}>{method.severity}</span>
                                                            </div>
                                                            <p className="text-[11px] text-stone-500 mt-1 leading-tight">{method.desc}</p>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <div className="space-y-6">
                                            <div className="bg-red-50 p-6 rounded-3xl border-2 border-red-200">
                                                <h4 className="font-black text-red-950 uppercase tracking-[0.2em] text-xs mb-4">Method of Restoration</h4>
                                                <p className="text-2xl font-serif font-bold text-red-900 mb-2">
                                                    {PRAYASHCHITTA_METHODS.find(m => m.id === selectedAtonement)?.name}
                                                </p>
                                                <p className="text-red-800/70 leading-relaxed italic">
                                                    &ldquo;{PRAYASHCHITTA_METHODS.find(m => m.id === selectedAtonement)?.desc}&rdquo;
                                                </p>
                                            </div>

                                            {!atonementConfirmed ? (
                                                <div className="space-y-4">
                                                    <p className="text-xs text-stone-500 font-medium">
                                                        By clicking confirm, you solemnly swear to the Divine and the Lineage that you will complete this atonement before attempting another Sankalpa.
                                                    </p>
                                                    <div className="flex gap-4">
                                                        <button
                                                            onClick={() => setSelectedAtonement(null)}
                                                            className="flex-1 py-4 bg-stone-100 text-stone-600 font-bold rounded-2xl hover:bg-stone-200 transition-colors"
                                                        >
                                                            Back
                                                        </button>
                                                        <button
                                                            onClick={() => setAtonementConfirmed(true)}
                                                            className="flex-[2] py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
                                                        >
                                                            Confirm Completion
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="space-y-6"
                                                >
                                                    <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                                                        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                                                        <p className="text-emerald-900 font-bold text-sm">Atonement Registered. The rift is sealed.</p>
                                                    </div>
                                                    <button
                                                        onClick={handleCompletePrayashchitta}
                                                        className="w-full py-4 bg-amber-950 text-amber-50 font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-black transition-colors shadow-xl"
                                                    >
                                                        Reset my path
                                                    </button>
                                                </motion.div>
                                            )}
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trance Toggle */}
            <div className="fixed bottom-6 right-6 z-50">
                <TranceToggle />
            </div>
        </div>
    );
}
