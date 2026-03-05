'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, CheckCircle2, Circle, ArrowRight, ArrowLeft, Wind, Droplets, Sparkles, BookOpen } from 'lucide-react';
import { useBatch2UI } from '@/components/batch2/context/Batch2UIContext';
import { TranceToggle } from '@/components/batch2/context/TranceToggle';
import { YajnaImmersiveExperience } from '@/components/batch2/sadhana/Sadhan/YajnaImmersiveExperience';

import { NyasaImmersive } from './NyasaImmersive';

const SANSKRIT_CHARS = ['ॐ', 'ह्रीं', 'श्रीं', 'क्लीं', 'ऐं', 'गं', 'सौः', 'फट्'];

const FloatingSanskritParticles = () => {
    // We only render this on client to avoid hydration mismatch
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const particles = Array.from({ length: 15 });
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-amber-500/30 font-serif text-3xl md:text-5xl lg:text-7xl font-bold"
                    initial={{
                        opacity: 0,
                        y: "110vh",
                        x: `${Math.random() * 100}vw`,
                        rotate: Math.random() * 90 - 45,
                        scale: Math.random() * 0.5 + 0.5
                    }}
                    animate={{
                        opacity: [0, 0.4, 0.4, 0],
                        y: "-10vh",
                        rotate: Math.random() * 180 - 90,
                        x: `${Math.random() * 100}vw`
                    }}
                    transition={{
                        duration: 15 + Math.random() * 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 15
                    }}
                >
                    {SANSKRIT_CHARS[i % SANSKRIT_CHARS.length]}
                </motion.div>
            ))}
        </div>
    );
};

interface YajnaStep {
    id: number;
    phase: 'Purification' | 'Invocation' | 'Core Practice' | 'Closing';
    name: string;
    instruction: string;
    mantra?: string;
    duration?: string;
}

const YAJNA_STEPS: YajnaStep[] = [
    // Phase 1 — Purification (Steps 1-6)
    { id: 1, phase: 'Purification', name: 'Snana (Bathe)', instruction: 'Take a purifying bath. Chant your main mantra while bathing to consecrate the body.', duration: '5 min' },
    { id: 2, phase: 'Purification', name: 'Vastra (Fresh Clothes)', instruction: 'Wear clean clothes appropriate for your Sadhana. Red (Devi), White/Yellow (Devata), White (neutral).', duration: '1 min' },
    { id: 3, phase: 'Purification', name: 'Enter Sanctum (Astra)', instruction: 'Enter your sacred space. Chant the Astra mantra for protection. Lay your seat (Asana).', mantra: 'ॐ अस्त्राय फट्', duration: '1 min' },
    { id: 4, phase: 'Purification', name: 'Prokshana (Sprinkle)', instruction: 'Sprinkle purified water around the space to consecrate the ground.', duration: '30 sec' },
    { id: 5, phase: 'Purification', name: 'Achamana', instruction: 'Take 3 sips of purified water from the Achamana pot. Wash hands (Prakshalana).', mantra: 'ॐ केशवाय स्वाहा, ॐ नारायणाय स्वाहा, ॐ माधवाय स्वाहा', duration: '1 min' },
    { id: 6, phase: 'Purification', name: 'Deepa Prajvalana (Light Lamp)', instruction: 'Light the brass/earthen lamp with ghee or sesame oil. Cotton wick. Place to your left.', duration: '1 min' },

    // Phase 2 — Invocation (Steps 7-22)
    { id: 7, phase: 'Invocation', name: 'Ganesha Dhyana', instruction: 'Meditate on Lord Ganesha. Visualize his form to remove all obstacles from practice.', mantra: 'ॐ गणानां त्वा गणपतिं हवामहे...', duration: '1 min' },
    { id: 8, phase: 'Invocation', name: '3 Ganesha Mudras', instruction: 'Perform the three hand-gestures dedicated to Ganapati to invoke his blessings.', duration: '30 sec' },
    { id: 9, phase: 'Invocation', name: 'Svastivachana', instruction: 'Recite auspicious benediction. Seek blessings for an obstacle-free practice.', mantra: 'ॐ स्वस्ति न इन्द्रो वृद्धश्रवाः...', duration: '1 min' },
    { id: 10, phase: 'Invocation', name: 'Guru Dhyana', instruction: 'Bow to the lineage of gurus. Visualize your guru\'s face at the crown chakra.', mantra: 'गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः', duration: '1 min' },
    { id: 11, phase: 'Invocation', name: 'Guru Mantra Japa', instruction: 'Chant the Guru mantra 11, 21, or 108 times as per your capacity.', duration: '3-5 min' },
    { id: 12, phase: 'Invocation', name: 'Siddha Pranam', instruction: 'Pay obeisance to the Siddha saints of the tradition. Mental prostration.', duration: '30 sec' },
    { id: 13, phase: 'Invocation', name: 'Ishta Dhyana', instruction: 'Meditate on your chosen deity (Ishta Devata). Visualize their form vividly.', duration: '2 min' },
    { id: 14, phase: 'Invocation', name: 'Ishta Mantra Japa', instruction: 'Chant your Ishta mantra 11, 21, or 31 times as a preliminary offering.', duration: '2 min' },
    { id: 15, phase: 'Invocation', name: 'Prithvi Pooja', instruction: 'Draw a triangle on the ground with sandalwood paste. Place a flower in the center.', duration: '1 min' },
    { id: 16, phase: 'Invocation', name: 'Sankalpa (Day 1 Only)', instruction: 'State your vow aloud: deity name, mantra, total count, duration, and goal. Made only on Day 1; breaking it means restart.', duration: '2 min' },
    { id: 17, phase: 'Invocation', name: 'Mantra Pranayama', instruction: 'Perform 3 rounds of breathing with mantra: Inhale (Puraka) → Hold (Kumbhaka) → Exhale (Rechaka).', duration: '2 min' },
    { id: 18, phase: 'Invocation', name: 'Viniyoga (Application)', instruction: 'State the application: "This mantra\'s Rishi is ___, Chanda is ___, Devata is ___, Bija is ___, Shakti is ___, Kilaka is ___."', duration: '1 min' },
    { id: 19, phase: 'Invocation', name: 'Kara Shuddhi (Hand Purification)', instruction: 'Purify the hands by touching each finger while chanting the Bija syllables.', duration: '1 min' },
    { id: 20, phase: 'Invocation', name: 'Nyasa (Body Consecration)', instruction: 'Touch each body part while placing the 50 Matrika letters. Sequence: Rishi Nyasa → Kara Nyasa → Anga Nyasa.', duration: '3 min' },
    { id: 21, phase: 'Invocation', name: 'Preliminary Japa (16×)', instruction: 'Chant your main mantra 16 times as a warm-up to attune the mind.', duration: '1 min' },
    { id: 22, phase: 'Invocation', name: 'Preliminary Mudras', instruction: 'Perform the set of preliminary mudras specific to your Sadhana (e.g. 24 Gayatri mudras).', duration: '2 min' },

    // Phase 3 — Core Practice (Steps 23-27)
    { id: 23, phase: 'Core Practice', name: 'Shodashopchara (Offerings)', instruction: 'Present the 16 (or 10 or 5) formal offerings to the deity: seat, arghya, padya, achamana, bath, clothes, ornaments, perfume, flowers, incense, lamp, food, betel, eulogy, namaskara, circumambulation.', duration: '5 min' },
    { id: 24, phase: 'Core Practice', name: 'Mantra Samskara', instruction: 'If first day: perform the 10 Samskaras to infuse life in the mantra (Janana through Apyayana).', duration: '5 min' },
    { id: 25, phase: 'Core Practice', name: 'Mantra Dhyana', instruction: 'Visualize the mantra\'s form. See each syllable as a living, luminous energy.', duration: '2 min' },
    { id: 26, phase: 'Core Practice', name: '🔥 Moola Mantra Japa', instruction: 'BEGIN YOUR MAIN CHANTING. Focus singularly on the deity and the sound vibration. This is the heart of the practice.', duration: '20-60 min' },
    { id: 27, phase: 'Core Practice', name: 'Post-Japa Mudras', instruction: 'Perform Anjali mudra + Nirvana mudra to seal the energy generated during japa.', duration: '2 min' },

    // Phase 4 — Closing (Steps 28-36)
    { id: 28, phase: 'Closing', name: 'Japa Samarpana', instruction: 'Offer the fruits of japa to the deity. Left hand = feminine deity, right = masculine. Place beads at deity\'s feet.', duration: '1 min' },
    { id: 29, phase: 'Closing', name: 'Visarjana (Release)', instruction: 'Release the deity\'s invoked presence with gratitude. "Please return to your abode."', duration: '1 min' },
    { id: 30, phase: 'Closing', name: 'Kshama Prarthana (Forgiveness)', instruction: 'Ask forgiveness for any errors — in mantra, gesture, thought, or omission.', mantra: 'मन्त्रहीनं क्रियाहीनं भक्तिहीनं सुरेश्वर।\nयत्पूजितं मया देव परिपूर्णं तदस्तु मे॥', duration: '1 min' },
    { id: 31, phase: 'Closing', name: '🔥 Yajna (Fire Offering)', instruction: 'Light the Havan Kunda. Offer ghee-soaked samagri with each "Svaha". Count = 10% of Japa.', mantra: 'स्वाहा', duration: '10-15 min' },
    { id: 32, phase: 'Closing', name: 'Tarpana (Libations)', instruction: 'Pour water libations. Count = 10% of Yajna (= 1% of Japa). Satisfy devas, rishis, and pitrs.', duration: '5 min' },
    { id: 33, phase: 'Closing', name: 'Marjana (Coronation)', instruction: 'Sprinkle sanctified water for abhishekam. Count = 10% of Tarpana (= 0.1% of Japa).', duration: '2 min' },
    { id: 34, phase: 'Closing', name: 'Brahmana Bhojana (Charity)', instruction: 'Feed or donate to worthy recipients. Count = 10% of Marjana. Acts of selfless giving.', duration: 'Variable' },
    { id: 35, phase: 'Closing', name: 'Kshama Prarthana II', instruction: 'A second round of asking forgiveness. Bow in humility. Express gratitude.', duration: '1 min' },
    { id: 36, phase: 'Closing', name: 'Surya Arghya', instruction: 'Offer water to the Sun if performing morning practice. Face East, pour water through fingers.', duration: '1 min' },
];

const PHASE_COLORS: Record<string, { bg: string, text: string, border: string, iconColor: string }> = {
    'Purification': { bg: 'bg-sky-50', text: 'text-sky-900', border: 'border-sky-200', iconColor: 'text-sky-500' },
    'Invocation': { bg: 'bg-amber-50', text: 'text-amber-900', border: 'border-amber-200', iconColor: 'text-amber-500' },
    'Core Practice': { bg: 'bg-rose-50', text: 'text-rose-900', border: 'border-rose-200', iconColor: 'text-rose-500' },
    'Closing': { bg: 'bg-emerald-50', text: 'text-emerald-900', border: 'border-emerald-200', iconColor: 'text-emerald-500' },
};

const PHASE_ICONS: Record<string, React.FC<any>> = {
    'Purification': Droplets,
    'Invocation': Wind,
    'Core Practice': Flame,
    'Closing': Sparkles,
};

const InteractiveHavanKund = () => {
    const [flare, setFlare] = useState(false);
    const [ahutis, setAhutis] = useState(0);

    const handleOffer = () => {
        setFlare(true);
        setAhutis(a => a + 1);
        if (typeof navigator !== 'undefined' && 'vibrate' in navigator) navigator.vibrate(20);
        setTimeout(() => setFlare(false), 500);
    };

    return (
        <div className="relative w-full h-80 flex flex-col items-center justify-center my-8 bg-amber-950/5 rounded-3xl border border-amber-900/10 shadow-inner">
            {/* The Fire Pit SVG */}
            <div className="relative w-56 h-56 cursor-pointer group" onClick={handleOffer}>
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                    {/* Outer bricks - Isometric */}
                    <polygon points="10,50 50,30 90,50 50,70" fill="#a44810" stroke="#71320b" strokeWidth="1" />
                    <polygon points="10,50 50,70 50,90 10,70" fill="#71320b" stroke="#522408" strokeWidth="1" />
                    <polygon points="90,50 50,70 50,90 90,70" fill="#8c3d0d" stroke="#522408" strokeWidth="1" />

                    {/* Inner pit */}
                    <polygon points="20,50 50,35 80,50 50,65" fill="#2d1000" />
                </svg>

                {/* Fire Animation */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center mt-[-3rem] pointer-events-none"
                    animate={flare ? { scale: 1.5, y: -15 } : { scale: [1, 1.05, 1], y: [0, -3, 0] }}
                    transition={flare ? { duration: 0.4 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Flame className="w-32 h-32 text-orange-500 fill-orange-500 opacity-90 drop-shadow-[0_0_25px_rgba(245,158,11,0.8)]" />
                    <Flame className="w-20 h-20 text-amber-300 fill-amber-300 absolute mt-6 blur-md opacity-80" />
                    <Flame className="w-12 h-12 text-white fill-white absolute mt-12 blur-sm opacity-60" />
                </motion.div>

                {/* Offering Drop Animation */}
                <AnimatePresence>
                    {flare && (
                        <motion.div
                            initial={{ opacity: 1, y: -60, scale: 1 }}
                            animate={{ opacity: 0, y: 10, scale: 0.5 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center mt-[-4rem] pointer-events-none"
                        >
                            <Droplets className="w-8 h-8 text-amber-200 fill-amber-300 drop-shadow-md" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <button
                onClick={handleOffer}
                className="mt-6 px-8 py-4 bg-gradient-to-b from-orange-400 to-orange-600 text-white rounded-2xl font-bold font-serif text-lg tracking-wide shadow-[0_10px_20px_rgba(234,88,12,0.3)] hover:shadow-[0_15px_25px_rgba(234,88,12,0.4)] hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-3 border border-orange-300"
            >
                Offer Ahuti (स्वाहा)
                <span className="bg-orange-800/40 px-3 py-1 rounded-lg text-amber-100 text-sm">{ahutis}</span>
            </button>
        </div>
    );
};

export default function YajnaRitualEngine() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
    const [japaCount, setJapaCount] = useState<number>(0);

    const { mode } = useBatch2UI();

    const step = YAJNA_STEPS[currentStepIndex];
    const progressPercent = ((completedSteps.size) / YAJNA_STEPS.length) * 100;
    const isCompleted = completedSteps.has(step.id);
    const PhaseIcon = PHASE_ICONS[step.phase];
    const colors = PHASE_COLORS[step.phase];

    const markComplete = () => {
        setCompletedSteps(prev => new Set([...prev, step.id]));
        if (currentStepIndex < YAJNA_STEPS.length - 1) {
            setTimeout(() => setCurrentStepIndex(currentStepIndex + 1), 300);
        }
    };

    const goToPrev = () => setCurrentStepIndex(Math.max(0, currentStepIndex - 1));

    if (mode === 'immersive') {
        return <YajnaImmersiveExperience />;
    }

    return (
        <div className="max-w-4xl mx-auto py-8 relative">
            <FloatingSanskritParticles />
            {/* Global Toggle for Ritual Engine */}
            <div className="absolute top-0 right-0 z-50">
                <TranceToggle />
            </div>

            <div className="text-center mb-10 mt-8 md:mt-0">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-200 shadow-sm">
                    <Flame className="w-8 h-8 text-amber-600" />
                </div>
                <h1 className="text-4xl font-serif font-bold text-amber-950 mb-3">Yajna Wizard</h1>
                <p className="text-amber-800/80 max-w-xl mx-auto text-lg leading-relaxed mb-6">
                    The 36-Step Purushcharana Engine. Follow this interactive guide to perfectly execute a formal invocation.
                </p>

                {/* Progress Bar */}
                <div className="max-w-xl mx-auto">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-amber-800/60 mb-2">
                        <span>Purity & Focus</span>
                        <span>{Math.round(progressPercent)}%</span>
                    </div>
                    <div className="w-full h-2 bg-amber-100 rounded-full overflow-hidden border border-amber-200/50">
                        <div
                            className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-700 ease-out"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>

                    {/* Purushcharana Math Input */}
                    <div className="mt-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl border border-amber-200 shadow-inner flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-left">
                            <span className="font-bold text-amber-900 border-b-2 border-amber-300 pb-1 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-amber-500" />
                                Purushcharana Mathematics
                            </span>
                            <p className="text-sm text-amber-700 mt-2">Enter your total Moola Mantra Sankalpa count to automatically calculate exact offerings.</p>
                        </div>
                        <div className="relative">
                            <input
                                type="number"
                                className="w-40 px-4 py-3 rounded-xl border-2 border-amber-300 bg-white text-xl font-black text-amber-900 shadow-sm focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-400/20 transition-all text-center"
                                placeholder="125000"
                                value={japaCount || ''}
                                onChange={(e) => setJapaCount(parseInt(e.target.value) || 0)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start relative max-w-5xl mx-auto">

                {/* Left Sidebar: Phases Map */}
                <div className="hidden lg:block lg:col-span-4 sticky top-8">
                    <div className="bg-card rounded-3xl p-6 border border-amber-200 shadow-sm">
                        <h3 className="font-serif font-bold text-amber-950 text-xl mb-6">Ritual Phases</h3>
                        <div className="space-y-4">
                            {['Purification', 'Invocation', 'Core Practice', 'Closing'].map((phaseName, idx) => {
                                const Icon = PHASE_ICONS[phaseName];
                                const isActive = step.phase === phaseName;
                                const phaseSteps = YAJNA_STEPS.filter(s => s.phase === phaseName);
                                const phaseCompletedSteps = phaseSteps.filter(s => completedSteps.has(s.id)).length;
                                const isPhaseComplete = phaseCompletedSteps === phaseSteps.length;

                                return (
                                    <div key={phaseName} className={`flex items-start gap-4 p-3 rounded-2xl transition-all ${isActive ? 'bg-amber-50 border border-amber-200 shadow-sm' : 'opacity-60'}`}>
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isActive ? 'bg-amber-200' : 'bg-stone-100'}`}>
                                            <Icon className={`w-5 h-5 ${isActive ? 'text-amber-700' : 'text-stone-400'}`} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <h4 className={`font-bold ${isActive ? 'text-amber-950' : 'text-stone-700'}`}>{phaseName}</h4>
                                                {isPhaseComplete && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                                            </div>
                                            <div className="w-full bg-stone-200 h-1.5 rounded-full mt-2 overflow-hidden">
                                                <div
                                                    className={`h-full ${isPhaseComplete ? 'bg-emerald-400' : 'bg-amber-400'}`}
                                                    style={{ width: `${(phaseCompletedSteps / phaseSteps.length) * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Area: Interactive Step Card */}
                <div className="lg:col-span-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className={`rounded-[2rem] p-8 md:p-12 border-2 shadow-sm relative overflow-hidden ${colors.bg} ${colors.border}`}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${colors.text} bg-white/50 backdrop-blur-sm border ${colors.border}`}>
                                        Step {step.id} of 36
                                    </div>
                                    {step.duration && (
                                        <div className="flex items-center gap-1.5 text-xs font-bold text-stone-500 bg-white/50 px-3 py-1.5 rounded-full border border-white/60">
                                            ⏱ {step.duration}
                                        </div>
                                    )}
                                </div>

                                <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-6 ${colors.text}`}>
                                    {step.name}
                                </h2>

                                <div className="space-y-6 mb-10">
                                    <div className="flex gap-4 items-start">
                                        <div className={`mt-1 bg-white p-2 rounded-xl shadow-sm border ${colors.border}`}>
                                            <BookOpen className={`w-5 h-5 ${colors.iconColor}`} />
                                        </div>
                                        <div>
                                            <p className="text-lg text-stone-700 leading-relaxed font-medium">
                                                {step.instruction}
                                            </p>

                                            {/* Math Injection Block */}
                                            {japaCount > 0 && [31, 32, 33, 34].includes(step.id) && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className={`mt-4 p-5 bg-white rounded-2xl border-2 ${colors.border} shadow-sm inline-block`}
                                                >
                                                    <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${colors.text} opacity-70 flex items-center gap-2`}>
                                                        <Sparkles className="w-3 h-3" /> Exact Requirement
                                                    </div>
                                                    <div className={`text-3xl font-black font-serif ${colors.text}`}>
                                                        {step.id === 31 && `${Math.ceil(japaCount * 0.1).toLocaleString()} Ahutis`}
                                                        {step.id === 32 && `${Math.ceil(japaCount * 0.01).toLocaleString()} Libations`}
                                                        {step.id === 33 && `${Math.ceil(japaCount * 0.001).toLocaleString()} Sprinkles`}
                                                        {step.id === 34 && `${Math.ceil(japaCount * 0.0001).toLocaleString()} Persons`}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>

                                    {step.id === 20 && <div className="mt-8 scale-90 -mx-8"><NyasaImmersive /></div>}
                                    {step.id === 31 && <InteractiveHavanKund />}

                                    {step.mantra && (
                                        <div className="bg-white/60 backdrop-blur border border-white p-6 rounded-2xl shadow-sm">
                                            <div className="text-[10px] uppercase tracking-widest font-bold text-amber-800/50 mb-2">Mantra</div>
                                            <p className="text-2xl font-serif text-amber-900 leading-relaxed">{step.mantra}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Controls */}
                                <div className="flex items-center gap-4 pt-8 border-t border-black/5">
                                    <button
                                        onClick={goToPrev}
                                        disabled={currentStepIndex === 0}
                                        className="p-4 rounded-2xl bg-white border border-black/5 text-stone-500 disabled:opacity-30 hover:bg-stone-50 transition-colors shadow-sm"
                                    >
                                        <ArrowLeft className="w-5 h-5" />
                                    </button>

                                    <button
                                        onClick={markComplete}
                                        className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-2xl font-bold transition-all shadow-sm ${isCompleted
                                            ? 'bg-white border-2 border-emerald-400 text-emerald-600'
                                            : `bg-white border-2 border-transparent text-stone-800 hover:border-${colors.border.split('-')[1]}-300 hover:shadow-md`
                                            }`}
                                    >
                                        {isCompleted ? (
                                            <>
                                                <CheckCircle2 className="w-5 h-5" />
                                                <span>Completed. Continue.</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </>
                                        ) : (
                                            <>
                                                <Circle className="w-5 h-5" />
                                                <span>Mark as Performed</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Desktop Step Map Map */}
                    <div className="mt-8 bg-card border border-amber-200 rounded-3xl p-6 overflow-x-auto shadow-sm hide-scrollbar">
                        <div className="flex gap-2 w-max mx-auto px-4">
                            {YAJNA_STEPS.map((s, idx) => (
                                <button
                                    key={s.id}
                                    onClick={() => setCurrentStepIndex(idx)}
                                    title={s.name}
                                    className={`w-8 h-8 rounded-xl text-xs font-bold font-mono transition-all flex items-center justify-center shrink-0 ${idx === currentStepIndex
                                        ? 'bg-amber-600 text-white shadow-md scale-110'
                                        : completedSteps.has(s.id)
                                            ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                            : 'bg-stone-100 text-stone-400 hover:bg-stone-200'
                                        }`}
                                >
                                    {s.id}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
