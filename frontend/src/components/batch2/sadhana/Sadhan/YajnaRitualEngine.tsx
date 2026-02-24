'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, CheckCircle2, Circle, ArrowRight, ArrowLeft, Wind, Droplets, Sparkles, BookOpen } from 'lucide-react';

interface YajnaStep {
    id: number;
    phase: 'Purification' | 'Invocation' | 'Core Practice' | 'Closing';
    name: string;
    instruction: string;
    mantra?: string;
    duration?: string;
}

const YAJNA_STEPS: YajnaStep[] = [
    // Purification (1-6)
    { id: 1, phase: 'Purification', name: 'Bathe & Prepare', instruction: 'Take a purifying bath. Wear clean clothes appropriate for your Sadhana.', duration: '5 min' },
    { id: 2, phase: 'Purification', name: 'Enter Sacred Space', instruction: 'Face your designated direction. Lay your seat (Asana) and arrange the 5 ritual pots (Patrasadana).', duration: '2 min' },
    { id: 3, phase: 'Purification', name: 'Achamana', instruction: 'Take 3 sips of purified water from the Achamana pot. Recite the names of Vishnu.', mantra: 'ॐ केशवाय नमः, ॐ नारायणाय नमः, ॐ माधवाय नमः', duration: '1 min' },
    { id: 4, phase: 'Purification', name: 'Sankalpa', instruction: 'State your vow aloud. Be specific: deity, mantra count, duration, and purpose.', duration: '2 min' },
    { id: 5, phase: 'Purification', name: 'Pranayama', instruction: 'Perform 3 rounds of Nadi Shodhana (alternate nostril breathing) to calm the mind.', duration: '3 min' },
    { id: 6, phase: 'Purification', name: 'Light the Lamp', instruction: 'Light the brass/earthen lamp with ghee. Place it to your left side.', duration: '1 min' },

    // Invocation (7-22)
    { id: 7, phase: 'Invocation', name: 'Invoke Ganesha', instruction: 'Chant the Ganapati mantra to remove obstacles from the practice.', mantra: 'ॐ गणानां त्वा गणपतिं...', duration: '1 min' },
    { id: 8, phase: 'Invocation', name: 'Guru Vandana', instruction: 'Bow to the lineage of gurus. Visualize your guru\'s face and seek blessings.', duration: '1 min' },
    { id: 9, phase: 'Invocation', name: 'Avahana (Invite)', instruction: 'Invoke presence of the deity using the Avahana mudra. Visualize them arriving.', duration: '1 min' },
    { id: 10, phase: 'Invocation', name: 'Sthapana (Establish)', instruction: 'Establish the deity\'s presence in your space using the Sthapana mudra.', duration: '30 sec' },
    { id: 11, phase: 'Invocation', name: 'Sannidhana (Nearness)', instruction: 'Feel the deity come closer. Use the Sannidhana mudra.', duration: '30 sec' },
    { id: 12, phase: 'Invocation', name: 'Sambodhana (Awareness)', instruction: 'Awaken the deity\'s awareness towards you. Sambodhana mudra.', duration: '30 sec' },
    { id: 13, phase: 'Invocation', name: 'Sammukhikaran (Face)', instruction: 'Turn the deity to face you directly. Sammukhikaran mudra.', duration: '30 sec' },
    { id: 14, phase: 'Invocation', name: 'Sakalikaran (Whole)', instruction: 'Make the deity\'s presence complete and whole. Sakalikaran mudra.', duration: '30 sec' },
    { id: 15, phase: 'Invocation', name: 'Avagunthana (Protect)', instruction: 'Create a protective shell around the sacred space. Avagunthana mudra.', duration: '30 sec' },
    { id: 16, phase: 'Invocation', name: 'Amartikaran (Immortalize)', instruction: 'Fix the deity\'s presence permanently for the session. Amartikaran mudra.', duration: '30 sec' },
    { id: 17, phase: 'Invocation', name: 'Paramikaran (Supreme)', instruction: 'Elevate the deity\'s presence to its supreme form. Paramikaran mudra.', duration: '30 sec' },
    { id: 18, phase: 'Invocation', name: 'Nyasa (Body Map)', instruction: 'Touch each body part while placing the Matrika letters, consecrating the body.', duration: '3 min' },
    { id: 19, phase: 'Invocation', name: 'Dhyana (Meditate)', instruction: 'Meditate on the deity\'s form as described in the Dhyana Shloka.', duration: '3 min' },
    { id: 20, phase: 'Invocation', name: 'Offer Arghya', instruction: 'Offer fragrant water from the Arghya pot.', duration: '30 sec' },
    { id: 21, phase: 'Invocation', name: 'Offer Padyam', instruction: 'Offer washing water from the Padyam pot.', duration: '30 sec' },
    { id: 22, phase: 'Invocation', name: 'Offer Tarpana', instruction: 'Pour libations from the Tarpana pot.', duration: '30 sec' },

    // Core Practice (23-27)
    { id: 23, phase: 'Core Practice', name: '🔥 Main Japa', instruction: 'BEGIN YOUR MANTRA CHANTING. Focus singularly on the deity and the sound vibration.', duration: '20-40 min' },
    { id: 24, phase: 'Core Practice', name: 'Post-Japa Mudras', instruction: 'Perform the 8 post-japa mudras to seal the energy generated.', duration: '2 min' },
    { id: 25, phase: 'Core Practice', name: 'Ajapa Japa', instruction: 'Sit in silence. Let the mantra chant itself internally.', duration: '3-5 min' },
    { id: 26, phase: 'Core Practice', name: 'Offerings (Upchara)', instruction: 'Present flowers, incense, and light to the deity.', duration: '2 min' },
    { id: 27, phase: 'Core Practice', name: 'Aarti', instruction: 'Perform the lamp circular offering.', duration: '2 min' },

    // Closing (28-36)
    { id: 28, phase: 'Closing', name: 'Samarpana (Offer)', instruction: 'Mentally surrender all fruits of the practice to the Divine. "I claim nothing."', duration: '1 min' },
    { id: 29, phase: 'Closing', name: 'Kshama Prarthana', instruction: 'Ask forgiveness for any errors committed during the practice.', mantra: 'मन्त्रहीनं क्रियाहीनं...', duration: '1 min' },
    { id: 30, phase: 'Closing', name: 'Fire Offering (Ahuti)', instruction: 'If performing Yajna: light the Kunda fire. Offer ghee with each "Svaha".', mantra: 'स्वाहा', duration: '10-15 min' },
    { id: 31, phase: 'Closing', name: 'Tarpana (10%)', instruction: 'Offer water libations equal to 10% of your Japa count.', duration: '5 min' },
    { id: 32, phase: 'Closing', name: 'Marjana (1%)', instruction: 'Sprinkle sanctified water for purification — 1% of Japa count.', duration: '2 min' },
    { id: 33, phase: 'Closing', name: 'Brahmana Bhojana', instruction: 'Feed or donate to worthy recipients. Acts of charity after practice.', duration: 'Variable' },
    { id: 34, phase: 'Closing', name: 'Surya Arghya', instruction: 'Offer water to the Sun if performing morning practice.', duration: '1 min' },
    { id: 35, phase: 'Closing', name: 'Visarjana', instruction: 'Release the deity presence with gratitude. "Please return to your abode."', duration: '1 min' },
    { id: 36, phase: 'Closing', name: 'Prasad', instruction: 'Consume consecrated food. Share with family.', duration: '5 min' },
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

export default function YajnaRitualEngine() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

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

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="text-center mb-10">
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
                                        <p className="text-lg text-stone-700 leading-relaxed font-medium">
                                            {step.instruction}
                                        </p>
                                    </div>

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
