'use client';

import React, { useState } from 'react';

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

const PHASE_COLORS: Record<string, string> = {
    'Purification': 'border-sky-500/50 bg-sky-500/5',
    'Invocation': 'border-amber-500/50 bg-amber-500/5',
    'Core Practice': 'border-red-500/50 bg-red-500/5',
    'Closing': 'border-emerald-500/50 bg-emerald-500/5',
};

const PHASE_TEXT_COLORS: Record<string, string> = {
    'Purification': 'text-sky-400',
    'Invocation': 'text-amber-400',
    'Core Practice': 'text-red-400',
    'Closing': 'text-emerald-400',
};

const YajnaRitualEngine: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

    const step = YAJNA_STEPS[currentStep];
    const phaseSteps = YAJNA_STEPS.filter(s => s.phase === step.phase);
    const progressPercent = ((currentStep + 1) / YAJNA_STEPS.length) * 100;

    const markComplete = () => {
        setCompletedSteps(prev => new Set([...prev, currentStep]));
        if (currentStep < YAJNA_STEPS.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const goToStep = (idx: number) => setCurrentStep(idx);

    return (
        <div className="bg-slate-950 text-white p-6 rounded-3xl border border-slate-800 max-w-lg mx-auto">
            {/* Header */}
            <div className="text-center mb-4">
                <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-amber-500">
                    Yajna Ritual Engine
                </h2>
                <p className="text-[11px] text-slate-500 mt-1">36-Step Purushcharana Procedure</p>
            </div>

            {/* Global Progress Bar */}
            <div className="mb-6">
                <div className="flex justify-between text-[10px] text-slate-500 mb-1 font-mono">
                    <span>Step {currentStep + 1} of {YAJNA_STEPS.length}</span>
                    <span>{Math.round(progressPercent)}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-amber-500 to-red-500 transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

            {/* Phase Indicator */}
            <div className="flex gap-1 mb-6">
                {['Purification', 'Invocation', 'Core Practice', 'Closing'].map(phase => (
                    <div
                        key={phase}
                        className={`flex-1 py-1.5 text-[9px] font-bold uppercase text-center rounded-lg transition-all ${step.phase === phase
                                ? `${PHASE_COLORS[phase]} border ${PHASE_TEXT_COLORS[phase]}`
                                : 'bg-slate-900/50 text-slate-700'
                            }`}
                    >
                        {phase}
                    </div>
                ))}
            </div>

            {/* Current Step Card */}
            <div className={`p-6 rounded-2xl border ${PHASE_COLORS[step.phase]} mb-4`}>
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <span className={`text-[10px] font-bold uppercase ${PHASE_TEXT_COLORS[step.phase]}`}>
                            Step {step.id}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-1">{step.name}</h3>
                    </div>
                    {step.duration && (
                        <span className="text-[10px] bg-slate-800 px-2 py-1 rounded-lg text-slate-400 font-mono">
                            ⏱ {step.duration}
                        </span>
                    )}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">{step.instruction}</p>

                {step.mantra && (
                    <div className="mt-4 p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                        <div className="text-[10px] text-slate-500 uppercase mb-1">Mantra</div>
                        <p className="text-amber-200 font-serif text-lg">{step.mantra}</p>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
                <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="flex-1 py-3 rounded-xl bg-slate-900 text-slate-400 text-sm font-semibold disabled:opacity-30 hover:bg-slate-800 transition-colors"
                >
                    ← Previous
                </button>
                <button
                    onClick={markComplete}
                    className={`flex-2 py-3 px-8 rounded-xl text-sm font-bold transition-all ${completedSteps.has(currentStep)
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-gradient-to-r from-amber-500 to-red-500 text-white hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                        }`}
                >
                    {completedSteps.has(currentStep) ? '✓ Done' : currentStep === YAJNA_STEPS.length - 1 ? 'Complete 🙏' : 'Next Step →'}
                </button>
            </div>

            {/* Step Overview (mini-map) */}
            <div className="mt-6 flex flex-wrap gap-1 justify-center">
                {YAJNA_STEPS.map((s, i) => (
                    <button
                        key={i}
                        onClick={() => goToStep(i)}
                        title={s.name}
                        className={`w-4 h-4 rounded-sm text-[7px] font-mono flex items-center justify-center transition-all ${i === currentStep
                                ? 'bg-amber-500 text-black font-bold scale-125'
                                : completedSteps.has(i)
                                    ? 'bg-emerald-500/30 text-emerald-400'
                                    : 'bg-slate-900 text-slate-600 hover:bg-slate-800'
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default YajnaRitualEngine;
