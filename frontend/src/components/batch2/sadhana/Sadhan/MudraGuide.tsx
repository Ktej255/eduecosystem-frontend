"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hand, Info, ChevronRight } from 'lucide-react';
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { TranceToggle } from "@/components/batch2/context/TranceToggle";
import { MudraGuideImmersive } from './MudraGuideImmersive';

interface Mudra {
    id: string;
    name: string;
    sanskrit: string;
    fingers: string;
    element: string;
    benefit: string;
    duration: string;
    instruction: string;
}

const CORE_MUDRAS: Mudra[] = [
    { id: 'shunya', name: 'Shunya Mudra', sanskrit: 'शून्य मुद्रा', fingers: 'Middle finger folded to thumb base', element: 'Space (Akash)', benefit: 'Reduces ear problems, tinnitus. Creates inner void for meditation.', duration: '10-15 sec', instruction: 'Fold the middle finger to touch the base of the thumb. Press thumb gently over it. Keep other fingers straight.' },
    { id: 'prana', name: 'Prana Mudra', sanskrit: 'प्राण मुद्रा', fingers: 'Ring + Little finger tips touch thumb tip', element: 'Earth + Water → Life Force', benefit: 'Activates pranic energy, reduces fatigue, improves immunity.', duration: '10 sec', instruction: 'Touch the tips of ring and little fingers to the tip of the thumb. Keep index and middle fingers extended.' },
    { id: 'apana', name: 'Apana Mudra', sanskrit: 'अपान मुद्रा', fingers: 'Middle + Ring finger tips touch thumb tip', element: 'Space + Earth → Descending', benefit: 'Aids digestion and detoxification. Grounding and purifying.', duration: '10 sec', instruction: 'Touch the tips of middle and ring fingers to the tip of the thumb. Keep index and little fingers extended.' },
    { id: 'samana', name: 'Samana Mudra', sanskrit: 'समान मुद्रा', fingers: 'All fingertips touch together', element: 'All 5 → Thermal balance', benefit: 'Balances digestive fire. Harmonizes all five elements.', duration: '10 sec', instruction: 'Bring all five fingertips together to form a point. Hold gently without pressing.' },
    { id: 'udana', name: 'Udana Mudra', sanskrit: 'उदान मुद्रा', fingers: 'Index + Middle + Ring touch thumb tip', element: 'Air + Space + Earth → Ascending', benefit: 'Enhances speech, expression, and upward-moving energy.', duration: '10 sec', instruction: 'Touch the tips of index, middle, and ring fingers to the tip of the thumb. Keep little finger extended.' },
    { id: 'vyana', name: 'Vyana Mudra', sanskrit: 'व्यान मुद्रा', fingers: 'Index + Middle finger tips touch thumb tip', element: 'Air + Space → Diffusive', benefit: 'Improves circulation and distribution of energy throughout body.', duration: '10 sec', instruction: 'Touch the tips of index and middle fingers to the tip of the thumb. Keep ring and little fingers extended.' },
    { id: 'dhyana', name: 'Dhyana Mudra', sanskrit: 'ध्यान मुद्रा', fingers: 'Both hands in lap, right on left, thumb tips touching', element: 'Unity → Meditation', benefit: 'The supreme meditation seal. Calms the mind completely.', duration: '1 min+', instruction: 'Place right hand on left in your lap, palms up. Touch thumb tips together forming a triangle. Sit with spine erect.' },
];

const FINGER_ELEMENTS = [
    { finger: 'Thumb', element: 'Fire (Agni)', color: 'text-red-500', emoji: '🔥' },
    { finger: 'Index', element: 'Air (Vayu)', color: 'text-sky-500', emoji: '💨' },
    { finger: 'Middle', element: 'Space (Akash)', color: 'text-violet-500', emoji: '✨' },
    { finger: 'Ring', element: 'Earth (Prithvi)', color: 'text-amber-600', emoji: '🌍' },
    { finger: 'Little', element: 'Water (Jala)', color: 'text-blue-500', emoji: '💧' },
];

export default function MudraGuide() {
    const [selectedMudra, setSelectedMudra] = useState<Mudra | null>(null);
    const { mode } = useBatch2UI();

    if (mode === 'immersive') {
        return (
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-black">
                <MudraGuideImmersive />
                <div className="absolute top-6 right-6 z-50">
                    <TranceToggle />
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto py-8 px-4 relative">
            {/* Header */}
            <div className="text-center mb-10">
                <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-violet-200 shadow-sm">
                    <Hand className="w-8 h-8 text-violet-600" />
                </div>
                <h1 className="text-4xl font-serif font-bold text-amber-950 mb-3">Hasta Mudra Guide</h1>
                <p className="text-amber-800/80 max-w-xl mx-auto text-lg leading-relaxed">
                    The 7 core daily mudras for energy balancing. Each finger represents an element.
                </p>
            </div>

            {/* Finger-Element Map */}
            <div className="bg-gradient-to-r from-amber-50 to-violet-50 rounded-3xl p-6 border border-amber-200 shadow-sm mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-amber-800/60 mb-4 text-center">Finger → Element Map</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {FINGER_ELEMENTS.map(fe => (
                        <div key={fe.finger} className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-amber-100 shadow-sm">
                            <span className="text-lg">{fe.emoji}</span>
                            <div>
                                <div className="text-sm font-bold text-amber-950">{fe.finger}</div>
                                <div className={`text-xs font-medium ${fe.color}`}>{fe.element}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-stone-500 mt-4 text-center">
                    Tip-to-tip = Balance • Tip-to-base-of-thumb = Pacify • Thumb-to-base = Boost
                </p>
            </div>

            {/* Mudra Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {CORE_MUDRAS.map(mudra => (
                    <motion.button
                        key={mudra.id}
                        onClick={() => setSelectedMudra(selectedMudra?.id === mudra.id ? null : mudra)}
                        className={`text-left p-5 rounded-2xl border-2 transition-all hover:shadow-md ${selectedMudra?.id === mudra.id
                            ? 'bg-violet-50 border-violet-300 shadow-sm'
                            : 'bg-white border-amber-100 hover:border-amber-300'
                            }`}
                        whileHover={{ y: -2 }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 font-serif font-bold text-lg">
                                {mudra.sanskrit.charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-bold text-amber-950">{mudra.name}</h3>
                                <p className="text-xs text-violet-600 font-medium">{mudra.sanskrit}</p>
                            </div>
                        </div>
                        <p className="text-sm text-stone-600 mb-2">{mudra.fingers}</p>
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">{mudra.element}</span>
                            <span className="text-xs text-stone-400">⏱ {mudra.duration}</span>
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* Selected Mudra Detail */}
            <AnimatePresence>
                {selectedMudra && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="bg-gradient-to-br from-violet-50 to-amber-50 rounded-3xl p-8 border-2 border-violet-200 shadow-lg"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 bg-violet-200 rounded-2xl flex items-center justify-center text-violet-800 font-serif font-bold text-2xl shadow-inner">
                                {selectedMudra.sanskrit.charAt(0)}
                            </div>
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-amber-950">{selectedMudra.name}</h2>
                                <p className="text-violet-700 font-medium">{selectedMudra.sanskrit}</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">How to Perform</h4>
                                    <p className="text-stone-700 leading-relaxed">{selectedMudra.instruction}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Duration</h4>
                                    <p className="text-stone-700">{selectedMudra.duration}</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Benefits</h4>
                                    <p className="text-stone-700 leading-relaxed">{selectedMudra.benefit}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Element Mapping</h4>
                                    <p className="text-stone-700">{selectedMudra.element}</p>
                                </div>
                            </div>
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
