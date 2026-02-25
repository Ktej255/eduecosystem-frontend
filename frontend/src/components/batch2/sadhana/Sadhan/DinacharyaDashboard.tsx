"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Clock, CheckCircle2, Circle, Sunrise, Sunset, BookOpen, AlertTriangle } from 'lucide-react';
import { useSadhanaProgress } from '../hooks/useSadhanaProgress';
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { TranceToggle } from "@/components/batch2/context/TranceToggle";
import { DinacharyaDashboardImmersive } from './DinacharyaDashboardImmersive';

const DAILY_STEPS = [
    { id: 1, name: 'Wake Up (Brahma Muhurta)', time: '3:30–5:30 AM', instruction: 'Arise before sunrise. Touch the ground with your right foot first. Offer mental salutations.', icon: Sunrise },
    { id: 2, name: 'Achamana', time: '2 min', instruction: 'Take 3 sips of purified water reciting the names of Vishnu.', icon: Circle },
    { id: 3, name: 'Bathing', time: '10 min', instruction: 'Purifying bath with clean water. Wear fresh clothes appropriate for your Sadhana.', icon: Circle },
    { id: 4, name: 'Pooja Griha', time: '5 min', instruction: 'Enter your sacred space. Light the lamp. Apply tilak. Sit on your asana.', icon: Circle },
    { id: 5, name: 'First Meal', time: '—', instruction: 'Sattvic food only. Say grace before eating. No garlic/onion during intensive practice.', icon: Circle },
    { id: 6, name: 'Living Through the Day', time: '—', instruction: 'Earn through 7 moral means. Maintain truthful conduct. Practice non-violence.', icon: Sun },
    { id: 7, name: 'Self-Study (Svadhyaya)', time: '20 min', instruction: 'Study scriptures AND study yourself. Contemplation + reading.', icon: BookOpen },
    { id: 8, name: 'Evening Chanting', time: '6-9 min', instruction: 'Minimum 1 round (108 times) with beads or finger counting.', icon: Sunset },
    { id: 9, name: 'Retiring to Bed', time: '—', instruction: 'Meditate briefly before sleep. Review the day. Express gratitude and seek forgiveness.', icon: Moon },
];

const DOS = [
    'Bathe every morning', 'Meditate daily', 'Say grace before eating', 'Chant minimum 1 round (108)',
    'Go offline 1 hour before bed', 'Consistent eating/sleeping times', 'Meditate before bed',
    'Be charitable', 'Express gratitude daily', 'Seek forgiveness nightly'
];

const DONTS = [
    'Parrot-chant without focus', 'Harm any being', 'Harbor negativity', 'Start the day with phone',
    'End the day with TV/screen', "Disclose your mantra to others", 'Abuse scripture, guru, or deity',
    'Compromise integrity for gain', 'Skip your daily routine', "Eat non-sattvic food during sadhana"
];

const THEMES: Record<string, { bg: string; card: string; text: string; accent: string; shadow: string }> = {
    'Brahma Muhurta': { bg: 'bg-[#1a0b33]', card: 'bg-[#2d1b4d]', text: 'text-violet-100', accent: 'text-violet-400', shadow: 'shadow-violet-900/50' },
    'Morning': { bg: 'bg-[#FDF8F0]', card: 'bg-white', text: 'text-amber-950', accent: 'text-amber-600', shadow: 'shadow-amber-200/50' },
    'Afternoon': { bg: 'bg-[#fffcf0]', card: 'bg-white', text: 'text-stone-900', accent: 'text-orange-600', shadow: 'shadow-orange-100' },
    'Evening': { bg: 'bg-[#1a1108]', card: 'bg-[#2d1d0f]', text: 'text-orange-50', accent: 'text-orange-400', shadow: 'shadow-orange-950' },
    'Night': { bg: 'bg-[#0a0a0c]', card: 'bg-[#141418]', text: 'text-indigo-200', accent: 'text-indigo-500', shadow: 'shadow-black' },
};

import { useBatch2Events } from '../../hooks/useBatch2Events';

export default function DinacharyaDashboard() {
    const { logEvent } = useBatch2Events();
    const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
    const [checkedDos, setCheckedDos] = useState<Set<number>>(new Set());
    const [checkedDonts, setCheckedDonts] = useState<Set<number>>(new Set());
    const [currentTime, setCurrentTime] = useState(new Date());
    const { mode } = useBatch2UI();

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const hour = currentTime.getHours();
    let timeKey = 'Morning';
    let timeWindow = 'Daylight Routine';

    if (hour >= 3 && hour < 6) { timeKey = 'Brahma Muhurta'; timeWindow = 'Brahma Muhurta ✨'; }
    else if (hour >= 6 && hour < 11) { timeKey = 'Morning'; timeWindow = 'Pratah Kaal (Morning)'; }
    else if (hour >= 11 && hour < 17) { timeKey = 'Afternoon'; timeWindow = 'Madhyanha (Day)'; }
    else if (hour >= 17 && hour < 21) { timeKey = 'Evening'; timeWindow = 'Sandhya (Evening)'; }
    else { timeKey = 'Night'; timeWindow = 'Ratri (Rest Mode)'; }

    const theme = THEMES[timeKey] || THEMES.Morning;
    const isRestMode = timeKey === 'Night';

    const toggleStep = (id: number) => {
        setCompletedSteps(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
                logEvent("dinacharya_step_done", {
                    module: "Dinacharya",
                    data: { stepId: id }
                });
            }
            return next;
        });
    };

    const toggleDo = (idx: number) => {
        setCheckedDos(prev => {
            const next = new Set(prev);
            next.has(idx) ? next.delete(idx) : next.add(idx);
            return next;
        });
    };

    const toggleDont = (idx: number) => {
        setCheckedDonts(prev => {
            const next = new Set(prev);
            next.has(idx) ? next.delete(idx) : next.add(idx);
            return next;
        });
    };

    const progressPercent = Math.round((completedSteps.size / DAILY_STEPS.length) * 100);

    if (mode === 'immersive') {
        return (
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-black shadow-2xl">
                <DinacharyaDashboardImmersive />
                <div className="absolute top-6 right-6 z-50">
                    <TranceToggle />
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen transition-colors duration-[3000ms] ${theme.bg}`}>
            <div className="max-w-5xl mx-auto py-8 px-4 relative">
                {/* Rest Mode Enforcement Overlay */}
                <AnimatePresence>
                    {isRestMode && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center"
                        >
                            <Moon className="w-16 h-16 text-indigo-500 mb-6 animate-pulse" />
                            <h2 className="text-4xl font-serif text-white mb-4">The Matrix is Sleeping</h2>
                            <p className="text-white/40 max-w-sm mb-12 uppercase tracking-widest text-[10px]">
                                It is Ratri Kaal. Your biological system requires rest to facilitate the neuro-synaptic integration of your Sadhana.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-cyan-200 shadow-sm">
                        <Clock className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h1 className={`text-4xl font-serif font-bold mb-3 ${theme.text}`}>Dinacharya</h1>
                    <p className={`max-w-xl mx-auto text-lg leading-relaxed mb-4 opacity-80 ${theme.text}`}>
                        Daily duties of an adept — 9 steps, 10 Dos, 10 Don&apos;ts.
                    </p>

                    {/* Time Window Indicator */}
                    <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border shadow-sm transition-all duration-1000 ${theme.card} ${theme.text} ${theme.shadow}`}>
                        <Clock className="w-4 h-4 opacity-50" />
                        <span className="font-bold text-sm tracking-widest uppercase">{timeWindow}</span>
                        <span className="text-xs opacity-40 ml-2">{currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="max-w-xl mx-auto mb-10">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-amber-800/60 mb-2">
                        <span>Today&apos;s Progress</span>
                        <span>{progressPercent}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-amber-100 rounded-full overflow-hidden border border-amber-200/50">
                        <motion.div
                            className="h-full bg-gradient-to-r from-cyan-400 to-amber-500"
                            animate={{ width: `${progressPercent}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>

                {/* 9 Daily Steps */}
                <div className="bg-card rounded-3xl p-6 md:p-8 shadow-sm border border-amber-100 mb-8">
                    <h2 className="text-xl font-serif font-bold text-amber-950 mb-6 flex items-center gap-2">
                        <Sun className="w-5 h-5 text-amber-500" /> 9 Daily Steps
                    </h2>
                    <div className="space-y-3">
                        {DAILY_STEPS.map(step => {
                            const isDone = completedSteps.has(step.id);
                            const StepIcon = step.icon;
                            return (
                                <button
                                    key={step.id}
                                    onClick={() => toggleStep(step.id)}
                                    className={`w-full text-left flex items-start gap-4 p-4 rounded-2xl border-2 transition-all ${isDone ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-amber-100 hover:border-amber-300'
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${isDone ? 'bg-emerald-500 text-white' : 'bg-stone-100 text-stone-400'}`}>
                                        {isDone ? <CheckCircle2 className="w-5 h-5" /> : <span className="font-bold text-sm">{step.id}</span>}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className={`font-bold ${isDone ? 'text-emerald-800' : 'text-amber-950'}`}>{step.name}</h3>
                                            {step.time !== '—' && (
                                                <span className="text-[10px] font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded">{step.time}</span>
                                            )}
                                        </div>
                                        <p className="text-sm text-stone-600">{step.instruction}</p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 10 Dos and 10 Don'ts */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* 10 Dos */}
                    <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-200 shadow-sm">
                        <h3 className="text-lg font-serif font-bold text-emerald-900 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" /> 10 Dos
                        </h3>
                        <div className="space-y-2">
                            {DOS.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => toggleDo(idx)}
                                    className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${checkedDos.has(idx) ? 'bg-emerald-100 border border-emerald-300' : 'bg-white border border-emerald-100 hover:bg-emerald-100/50'
                                        }`}
                                >
                                    <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${checkedDos.has(idx) ? 'bg-emerald-500 text-white' : 'border-2 border-stone-300'}`}>
                                        {checkedDos.has(idx) && <CheckCircle2 className="w-3.5 h-3.5" />}
                                    </div>
                                    <span className={`text-sm font-medium ${checkedDos.has(idx) ? 'text-emerald-800 line-through' : 'text-stone-700'}`}>{item}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 10 Don'ts */}
                    <div className="bg-red-50 rounded-3xl p-6 border border-red-200 shadow-sm">
                        <h3 className="text-lg font-serif font-bold text-red-900 mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-red-500" /> 10 Don&apos;ts
                        </h3>
                        <div className="space-y-2">
                            {DONTS.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => toggleDont(idx)}
                                    className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${checkedDonts.has(idx) ? 'bg-red-100 border border-red-300' : 'bg-white border border-red-100 hover:bg-red-100/50'
                                        }`}
                                >
                                    <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${checkedDonts.has(idx) ? 'bg-red-500 text-white' : 'border-2 border-stone-300'}`}>
                                        {checkedDonts.has(idx) && <CheckCircle2 className="w-3.5 h-3.5" />}
                                    </div>
                                    <span className={`text-sm font-medium ${checkedDonts.has(idx) ? 'text-red-800 line-through' : 'text-stone-700'}`}>{item}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trance Toggle */}
                <div className="fixed bottom-6 right-6 z-50">
                    <TranceToggle />
                </div>
            </div>
        </div>
    );
}
