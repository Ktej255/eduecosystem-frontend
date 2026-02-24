"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Clock, CheckCircle2, Circle, Sunrise, Sunset, BookOpen, AlertTriangle } from 'lucide-react';
import { useSadhanaProgress } from '../hooks/useSadhanaProgress';

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

export default function DinacharyaDashboard() {
    const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
    const [checkedDos, setCheckedDos] = useState<Set<number>>(new Set());
    const [checkedDonts, setCheckedDonts] = useState<Set<number>>(new Set());
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const hour = currentTime.getHours();
    let timeWindow = 'Regular Hours';
    let timeColor = 'text-stone-600';
    if (hour >= 3 && hour < 6) { timeWindow = 'Brahma Muhurta ✨'; timeColor = 'text-violet-600'; }
    else if (hour >= 5 && hour < 7) { timeWindow = 'Sandhya Kaal (Sunrise)'; timeColor = 'text-amber-600'; }
    else if (hour >= 17 && hour < 19) { timeWindow = 'Sandhya Kaal (Sunset)'; timeColor = 'text-orange-600'; }
    else if (hour >= 21 || hour < 3) { timeWindow = 'Rest Period'; timeColor = 'text-indigo-600'; }

    const toggleStep = (id: number) => {
        setCompletedSteps(prev => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
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

    return (
        <div className="max-w-5xl mx-auto py-8 px-4">
            {/* Header */}
            <div className="text-center mb-10">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-cyan-200 shadow-sm">
                    <Clock className="w-8 h-8 text-cyan-600" />
                </div>
                <h1 className="text-4xl font-serif font-bold text-amber-950 mb-3">Dinacharya</h1>
                <p className="text-amber-800/80 max-w-xl mx-auto text-lg leading-relaxed mb-4">
                    Daily duties of an adept — 9 steps, 10 Dos, 10 Don&apos;ts. Total time: ~40 minutes.
                </p>

                {/* Time Window Indicator */}
                <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border shadow-sm bg-white ${timeColor}`}>
                    <Clock className="w-4 h-4" />
                    <span className="font-bold text-sm">{timeWindow}</span>
                    <span className="text-xs text-stone-400 ml-2">{currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
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
        </div>
    );
}
