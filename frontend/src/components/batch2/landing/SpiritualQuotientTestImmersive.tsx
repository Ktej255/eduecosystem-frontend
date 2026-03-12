"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Brain, ArrowRight, Eye, Activity } from "lucide-react";
import { useRouter } from "next/navigation";
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { TranceToggle } from "@/components/batch2/context/TranceToggle";
import { useSadhanaProgress } from "@/components/batch2/sadhana/hooks/useSadhanaProgress";
import { useBatch2Events } from "@/components/batch2/hooks/useBatch2Events";

interface ImmersiveScenario {
    id: number;
    prompt: string;
    action: string;
    options: {
        id: "sattva" | "rajas" | "tamas";
        text: string;
        color: string;
        position: { x: string; y: string };
    }[];
}

const SCENARIOS: ImmersiveScenario[] = [
    {
        id: 1,
        prompt: "A sudden chaos erupts in your environment.",
        action: "Drag the center light to your instinctive reaction.",
        options: [
            { id: "sattva", text: "Observe & Stillness", color: "from-blue-400 to-blue-600", position: { x: "50%", y: "15%" } },
            { id: "rajas", text: "Immediate Action", color: "from-red-400 to-orange-600", position: { x: "15%", y: "85%" } },
            { id: "tamas", text: "Overwhelm & Retreat", color: "from-stone-500 to-stone-800", position: { x: "85%", y: "85%" } },
        ]
    },
    {
        id: 2,
        prompt: "You have 3 hours of completely uninterrupted free time.",
        action: "Where does your mind drift?",
        options: [
            { id: "sattva", text: "Inner Inquiry", color: "from-white to-blue-200", position: { x: "80%", y: "20%" } },
            { id: "rajas", text: "Productivity", color: "from-orange-400 to-red-500", position: { x: "20%", y: "20%" } },
            { id: "tamas", text: "Sensory Comfort", color: "from-purple-900 to-black", position: { x: "50%", y: "85%" } },
        ]
    },
];

export function SpiritualQuotientTestImmersive({ onComplete }: { onComplete?: (phaseId: number) => void }) {
    const { mode } = useBatch2UI();
    const router = useRouter();
    const { updateSadhanaProgress } = useSadhanaProgress();
    const { logEvent } = useBatch2Events();

    const [isOpen, setIsOpen] = useState(false);
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [startTime, setStartTime] = useState<number>(0);

    // Biometric Tracking
    const [results, setResults] = useState<{ guna: string, hesitationMs: number }[]>([]);

    // UI State
    const [isHoveringCenter, setIsHoveringCenter] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [analyzing, setAnalyzing] = useState(false);

    const handleStart = () => {
        setIsOpen(true);
        setScenarioIndex(0);
        setResults([]);
        setAnalyzing(false);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    // Begin a scenario
    useEffect(() => {
        if (isOpen && !analyzing) {
            setShowOptions(false);
            // Force user to focus center before revealing
            const timer = setTimeout(() => {
                setShowOptions(true);
                setStartTime(Date.now());
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [scenarioIndex, isOpen, analyzing]);


    const handleChoice = (guna: string) => {
        const reactionTime = Date.now() - startTime;

        // Advanced calculation: 
        // If they chose Sattva but took 10 seconds (hesitation), it might actually be tamasic/rajasic doubt.
        // For this demo, we just record the raw ms.
        const newResults = [...results, { guna, hesitationMs: reactionTime }];
        setResults(newResults);

        if (scenarioIndex < SCENARIOS.length - 1) {
            setScenarioIndex(s => s + 1);
        } else {
            setAnalyzing(true);
            setTimeout(() => {
                finishAnalysis(newResults);
            }, 4000); // 4 seconds of fake "biometric crunching"
        }
    };

    const finishAnalysis = (finalResults: { guna: string, hesitationMs: number }[]) => {
        // Evaluate
        let sattvaScore = 0;
        let rajasScore = 0;
        let tamasScore = 0;

        finalResults.forEach(r => {
            let weight = 1;
            // Hesitation penalty: Quick choices are more authentic
            if (r.hesitationMs > 5000) {
                // High hesitation on a Sattvic choice implies it was cerebral, not natural
                if (r.guna === 'sattva') tamasScore += 0.5;
            }

            if (r.guna === 'sattva') sattvaScore += weight;
            if (r.guna === 'rajas') rajasScore += weight;
            if (r.guna === 'tamas') tamasScore += weight;
        });

        let dominant = 'tamas';
        let suggestedPhase = 1;
        let archetype: 'Prisoner' | 'Hopper' | 'Discoverer' = 'Prisoner';

        if (sattvaScore > rajasScore && sattvaScore > tamasScore) { dominant = 'sattva'; suggestedPhase = 4; archetype = 'Discoverer'; }
        else if (rajasScore > sattvaScore && rajasScore > tamasScore) { dominant = 'rajas'; suggestedPhase = 3; archetype = 'Hopper'; }

        updateSadhanaProgress({ archetype });
        logEvent('sq_test_completed', {
            module: 'SQ Test',
            data: { dominantGuna: dominant, archetype, mode: 'immersive' }
        });

        if (onComplete) onComplete(suggestedPhase);
    };

    if (mode !== 'immersive') return null; // We'll patch this into the main file as a conditional return

    if (!isOpen) {
        return (
            <div className="text-center py-10 relative">
                <div className="absolute top-0 right-0 z-50">
                    <TranceToggle />
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleStart}
                    className="group relative w-32 h-32 rounded-full font-bold text-white shadow-[0_0_50px_rgba(255,255,255,0.1)] overflow-hidden border border-white/20 flex flex-col items-center justify-center gap-2 hover:border-white/50 transition-colors"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-black pointer-events-none" />
                    <Eye className="w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[10px] tracking-[0.3em] uppercase opacity-70">Enter</span>
                </motion.button>
                <p className="mt-8 text-stone-500 text-xs tracking-[0.2em] uppercase font-mono">The Experiential Mirror</p>
            </div>
        );
    }

    const currentScenario = SCENARIOS[scenarioIndex];

    return (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center font-sans overflow-hidden select-none touch-none">

            <div className="absolute top-6 right-6 z-50">
                <button onClick={handleClose} className="text-white/30 hover:text-white text-xs uppercase tracking-[0.2em] p-4">Abort</button>
            </div>

            {/* Immersive Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,20,30,1)_0%,_black_100%)] opacity-80" />

            <AnimatePresence mode="wait">
                {analyzing ? (
                    <motion.div
                        key="analyzing"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative z-10 flex flex-col items-center text-center"
                    >
                        <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center mb-8 relative">
                            <motion.div
                                className="absolute inset-0 rounded-full border-t-2 border-indigo-500"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            />
                            <Brain className="w-12 h-12 text-indigo-400 opacity-80" />
                        </div>
                        <h2 className="text-3xl font-serif text-white mb-2 tracking-wide">Synthesizing Biometrics</h2>
                        <p className="text-indigo-400/50 text-sm tracking-[0.3em] uppercase font-mono">Analyzing hesitation and choice resonance...</p>
                    </motion.div>
                ) : (
                    <motion.div
                        key={`scenario-${scenarioIndex}`}
                        initial={{ opacity: 0, filter: "blur(20px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 1.5 }}
                        className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center"
                    >

                        {/* Prompt Text */}
                        <div className="absolute top-32 left-1/2 -translate-x-1/2 text-center w-full px-8">
                            <h2 className="text-3xl md:text-5xl font-serif text-white/90 drop-shadow-2xl text-balance leading-tight">
                                {currentScenario.prompt}
                            </h2>
                            <p className="mt-6 text-indigo-300/50 text-sm tracking-[0.4em] uppercase font-bold">
                                {currentScenario.action}
                            </p>
                        </div>

                        {/* Central Anchor Node */}
                        <motion.div
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            dragElastic={0.1}
                            onHoverStart={() => setIsHoveringCenter(true)}
                            onHoverEnd={() => setIsHoveringCenter(false)}
                            className={`absolute w-16 h-16 rounded-full flex items-center justify-center cursor-pointer z-50 transition-all duration-700 ${showOptions ? 'bg-white shadow-[0_0_50px_rgba(255,255,255,0.8)]' : 'bg-white/10 border border-white/30'}`}
                            style={{ left: '50%', top: '50%', x: '-50%', y: '-50%' }}
                            animate={{ scale: isHoveringCenter ? 1.2 : 1 }}
                        >
                            {!showOptions && <div className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                        </motion.div>

                        {/* Options Nodes (Hidden initially to force centering) */}
                        <AnimatePresence>
                            {showOptions && currentScenario.options.map((opt, i) => (
                                <motion.div
                                    key={opt.id}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.2, type: "spring" }}
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 group cursor-pointer z-40"
                                    style={{ left: opt.position.x, top: opt.position.y }}
                                    onClick={() => handleChoice(opt.id)}
                                >
                                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${opt.color} opacity-20 group-hover:opacity-60 transition-opacity blur-xl absolute`} />
                                    <div className={`w-16 h-16 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform relative z-10`}>
                                        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${opt.color}`} />
                                    </div>
                                    <span className="text-xs uppercase tracking-widest text-white/50 group-hover:text-white font-bold transition-colors">
                                        {opt.text}
                                    </span>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
