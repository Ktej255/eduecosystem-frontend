"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hand, Sparkles, Droplets, Wind, Mountain, Flame, Activity, Camera, ChevronLeft } from 'lucide-react';
import { HandposeMudraValidator } from './HandposeMudraValidator';
import { useBatch2Events } from '../../hooks/useBatch2Events';

interface Mudra {
    id: string;
    name: string;
    sanskrit: string;
    fingers: string;
    element: string;
    benefit: string;
    duration: string;
    instruction: string;
    themeColor: string;
    glowColor: string;
}

const CORE_MUDRAS: Mudra[] = [
    { id: 'shunya', name: 'Shunya Mudra', sanskrit: 'शून्य मुद्रा', fingers: 'Middle finger folded to thumb base', element: 'Space (Akash)', benefit: 'Reduces ear problems, tinnitus. Creates inner void for meditation.', duration: '10-15 sec', instruction: 'Fold the middle finger to touch the base of the thumb. Press thumb gently over it. Keep other fingers straight.', themeColor: 'text-violet-400', glowColor: 'rgba(139, 92, 246, 0.4)' },
    { id: 'prana', name: 'Prana Mudra', sanskrit: 'प्राण मुद्रा', fingers: 'Ring + Little finger tips touch thumb tip', element: 'Earth + Water → Life Force', benefit: 'Activates pranic energy, reduces fatigue, improves immunity.', duration: '10 sec', instruction: 'Touch the tips of ring and little fingers to the tip of the thumb. Keep index and middle fingers extended.', themeColor: 'text-emerald-400', glowColor: 'rgba(16, 185, 129, 0.4)' },
    { id: 'apana', name: 'Apana Mudra', sanskrit: 'अपान मुद्रा', fingers: 'Middle + Ring finger tips touch thumb tip', element: 'Space + Earth → Descending', benefit: 'Aids digestion and detoxification. Grounding and purifying.', duration: '10 sec', instruction: 'Touch the tips of middle and ring fingers to the tip of the thumb. Keep index and little fingers extended.', themeColor: 'text-amber-600', glowColor: 'rgba(217, 119, 6, 0.4)' },
    { id: 'samana', name: 'Samana Mudra', sanskrit: 'समान मुद्रा', fingers: 'All fingertips touch together', element: 'All 5 → Thermal balance', benefit: 'Balances digestive fire. Harmonizes all five elements.', duration: '10 sec', instruction: 'Bring all five fingertips together to form a point. Hold gently without pressing.', themeColor: 'text-red-500', glowColor: 'rgba(239, 68, 68, 0.4)' },
    { id: 'udana', name: 'Udana Mudra', sanskrit: 'उदान मुद्रा', fingers: 'Index + Middle + Ring touch thumb tip', element: 'Air + Space + Earth → Ascending', benefit: 'Enhances speech, expression, and upward-moving energy.', duration: '10 sec', instruction: 'Touch the tips of index, middle, and ring fingers to the tip of the thumb. Keep little finger extended.', themeColor: 'text-sky-400', glowColor: 'rgba(56, 189, 248, 0.4)' },
    { id: 'vyana', name: 'Vyana Mudra', sanskrit: 'व्यान मुद्रा', fingers: 'Index + Middle finger tips touch thumb tip', element: 'Air + Space → Diffusive', benefit: 'Improves circulation and distribution of energy throughout body.', duration: '10 sec', instruction: 'Touch the tips of index and middle fingers to the tip of the thumb. Keep ring and little fingers extended.', themeColor: 'text-rose-400', glowColor: 'rgba(251, 113, 133, 0.4)' },
    { id: 'dhyana', name: 'Dhyana Mudra', sanskrit: 'ध्यान मुद्रा', fingers: 'Both hands in lap, right on left, thumb tips touching', element: 'Unity → Meditation', benefit: 'The supreme meditation seal. Calms the mind completely.', duration: '1 min+', instruction: 'Place right hand on left in your lap, palms up. Touch thumb tips together forming a triangle. Sit with spine erect.', themeColor: 'text-white', glowColor: 'rgba(255, 255, 255, 0.3)' },
];

export function MudraGuideImmersive() {
    const { logEvent } = useBatch2Events();
    const [selectedMudra, setSelectedMudra] = useState<Mudra>(CORE_MUDRAS[0]);
    const [isVerifyMode, setIsVerifyMode] = useState(false);
    const [verificationSuccess, setVerificationSuccess] = useState(false);

    const handleVerify = () => {
        setVerificationSuccess(true);
        logEvent('mudra_practiced', {
            module: selectedMudra.name,
            data: { id: selectedMudra.id, sanskrit: selectedMudra.sanskrit }
        });
        setTimeout(() => {
            setVerificationSuccess(false);
            setIsVerifyMode(false);
        }, 3000);
    };

    return (
        <div className="fixed inset-0 bg-black text-amber-50 font-sans overflow-hidden z-50 flex select-none">

            {/* Ambient Background reacting to selected Mudra */}
            <motion.div
                className="absolute inset-0 pointer-events-none transition-colors duration-1000"
                animate={{
                    background: `radial-gradient(circle at center, ${selectedMudra.glowColor} 0%, transparent 60%)`
                }}
            />

            {/* Grid Grain Overlay */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none mix-blend-screen" />

            {/* Left Panel: The Mudra List */}
            <div className="w-1/3 h-full border-r border-white/10 bg-black/40 backdrop-blur-xl flex flex-col z-10 p-8">
                <div className="mb-12">
                    <h1 className="text-3xl font-serif text-white uppercase tracking-[0.2em] mb-2">Prana Matrix</h1>
                    <p className="text-[10px] text-amber-500/50 uppercase tracking-[0.3em] font-black">Hasta Mudra Interfaces</p>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar space-y-4">
                    {CORE_MUDRAS.map(mudra => (
                        <button
                            key={mudra.id}
                            onClick={() => setSelectedMudra(mudra)}
                            className={`w-full text-left p-6 rounded-2xl transition-all duration-500 group relative overflow-hidden border ${selectedMudra.id === mudra.id
                                ? 'bg-white/5 border-white/20'
                                : 'bg-transparent border-transparent hover:border-white/10'
                                }`}
                        >
                            {/* Hover/Active Glow */}
                            <div
                                className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${selectedMudra.id === mudra.id ? 'opacity-20' : 'group-hover:opacity-10'}`}
                                style={{ background: `linear-gradient(90deg, ${mudra.glowColor}, transparent)` }}
                            />

                            <div className="relative z-10">
                                <h3 className={`font-serif text-xl tracking-wider uppercase mb-1 ${selectedMudra.id === mudra.id ? 'text-white' : 'text-neutral-400 group-hover:text-white transition-colors'}`}>
                                    {mudra.name}
                                </h3>
                                <div className="flex items-center gap-3">
                                    <p className={`text-[10px] uppercase tracking-widest ${selectedMudra.id === mudra.id ? mudra.themeColor : 'text-neutral-600'}`}>
                                        {mudra.sanskrit}
                                    </p>
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                    <p className="text-[10px] uppercase tracking-widest text-neutral-500">{mudra.duration}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Panel: The Visual Inspection */}
            <div className="flex-1 relative flex items-center justify-center p-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedMudra.id}
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full max-w-2xl"
                    >
                        {/* The Large Center Icon/Display */}
                        <div className="relative w-64 h-64 mx-auto mb-16 flex items-center justify-center">
                            {/* Outer rotating ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border border-white/10 rounded-full border-dashed"
                            />
                            {/* Inner breathing ring */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-4 border border-white/20 rounded-full"
                                style={{ boxShadow: `0 0 40px ${selectedMudra.glowColor}` }}
                            />

                            <Hand className={`w-24 h-24 ${selectedMudra.themeColor} drop-shadow-[0_0_15px_currentColor]`} />
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-x-16 gap-y-12">
                            <div>
                                <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-4">
                                    <Activity className="w-4 h-4" /> Energy Circuit
                                </h4>
                                <p className={`text-lg font-serif italic ${selectedMudra.themeColor} leading-relaxed drop-shadow-[0_0_10px_currentColor]`}>
                                    {selectedMudra.element}
                                </p>
                            </div>

                            <div>
                                <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-4">
                                    <Sparkles className="w-4 h-4" /> Somatic Effect
                                </h4>
                                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                                    {selectedMudra.benefit}
                                </p>
                            </div>

                            <div className="col-span-2 border-t border-white/10 pt-12">
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">
                                        Physical Configuration
                                    </h4>

                                    {!isVerifyMode && (
                                        <button
                                            onClick={() => setIsVerifyMode(true)}
                                            className="flex items-center gap-2 px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
                                        >
                                            <Camera className="w-3 h-3" /> Verify with AI
                                        </button>
                                    )}
                                </div>

                                <div className="relative min-h-[200px]">
                                    <AnimatePresence mode="wait">
                                        {!isVerifyMode ? (
                                            <motion.div
                                                key="instruction"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
                                            >
                                                <p className="text-center text-lg md:text-xl font-serif text-white/90 leading-relaxed">
                                                    {selectedMudra.instruction}
                                                </p>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="validator"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 1.05 }}
                                                className="h-[300px] relative"
                                            >
                                                <button
                                                    onClick={() => setIsVerifyMode(false)}
                                                    className="absolute top-4 left-4 z-20 flex items-center gap-2 text-[10px] font-bold text-white/40 hover:text-white uppercase tracking-widest"
                                                >
                                                    <ChevronLeft className="w-3 h-3" /> Back
                                                </button>

                                                <HandposeMudraValidator
                                                    targetMudraId={selectedMudra.id}
                                                    onVerify={handleVerify}
                                                />

                                                {verificationSuccess && (
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        className="absolute inset-0 z-30 bg-emerald-500/90 flex flex-col items-center justify-center text-white p-8 rounded-3xl"
                                                    >
                                                        <Sparkles className="w-16 h-16 mb-4" />
                                                        <h3 className="text-2xl font-serif font-black uppercase tracking-widest text-center">Circuits Aligned</h3>
                                                        <p className="text-xs uppercase tracking-[0.4em] opacity-70 mt-2">Energetic flow established</p>
                                                    </motion.div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
