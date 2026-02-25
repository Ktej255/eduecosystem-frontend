"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Sunrise, Sunset, BookOpen, Clock, Activity, Anchor, Eye } from 'lucide-react';

const DAILY_STEPS = [
    { id: 1, name: 'Brahma Muhurta (Ascent)', time: '3:30–5:30 AM', instruction: 'Awaken. Earth contact. Mental salutations.', icon: Sunrise },
    { id: 2, name: 'Achamana (Water Purification)', time: '2 min', instruction: 'Three sips. Triple mantra recitation.', icon: Droplets },
    { id: 3, name: 'Snana (Body Purification)', time: '10 min', instruction: 'Cold/Tepid water. Donning of sadhana vestments.', icon: Activity },
    { id: 4, name: 'Pooja Griha (The Chamber)', time: '5 min', instruction: 'Ignite the lamp. Asana establishment. Tilak.', icon: Flame },
    { id: 5, name: 'Prathama Ahara (First Intake)', time: 'Morn', instruction: 'Sattvic composition. Grace/Offering prior to intake.', icon: Anchor },
    { id: 6, name: 'Dharma (World Interaction)', time: 'Day', instruction: 'Right livelihood. Truth adherence. Ahimsa strictly.', icon: Sun },
    { id: 7, name: 'Svadhyaya (Self/Scripture Info)', time: '20 min', instruction: 'Analytical contemplation. Active reading.', icon: BookOpen },
    { id: 8, name: 'Sandhya Japa (Evening Sync)', time: 'Eve', instruction: '108 iterative loop. Audio/Mental execution.', icon: Sunset },
    { id: 9, name: 'Nidra (Descent to Sleep)', time: 'Night', instruction: 'Review block. Gratitude discharge. Pre-sleep meditation.', icon: Moon },
];

// Helper icons
function Droplets(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" /></svg>; }
function Flame(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>; }

type Atmosphere = 'dawn' | 'day' | 'dusk' | 'night';

export function DinacharyaDashboardImmersive() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [atmosphere, setAtmosphere] = useState<Atmosphere>('day');
    const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now);
            const hour = now.getHours();

            if (hour >= 3 && hour < 6) setAtmosphere('dawn');
            else if (hour >= 6 && hour < 17) setAtmosphere('day');
            else if (hour >= 17 && hour < 20) setAtmosphere('dusk');
            else setAtmosphere('night');
        };

        updateTime();
        const timer = setInterval(updateTime, 60000);
        return () => clearInterval(timer);
    }, []);

    const toggleStep = (id: number) => {
        setCompletedSteps(prev => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };

    const progressPercent = Math.round((completedSteps.size / DAILY_STEPS.length) * 100);

    // Visual theme configurations based on Atmosphere
    const themes = {
        dawn: {
            bg: 'bg-indigo-950',
            gradient: 'from-violet-900/50 via-indigo-900/40 to-black',
            accent: 'text-violet-300',
            border: 'border-violet-500/30',
            glow: 'rgba(139, 92, 246, 0.15)',
            label: 'Brahma Muhurta',
            subLabel: 'The Ascending Cycle'
        },
        day: {
            bg: 'bg-amber-950/40',
            gradient: 'from-amber-900/30 via-orange-900/20 to-black',
            accent: 'text-amber-400',
            border: 'border-amber-500/30',
            glow: 'rgba(245, 158, 11, 0.1)',
            label: 'Dharma Cycle',
            subLabel: 'Active World Integration'
        },
        dusk: {
            bg: 'bg-orange-950',
            gradient: 'from-red-900/40 via-orange-900/30 to-black',
            accent: 'text-orange-400',
            border: 'border-orange-500/30',
            glow: 'rgba(234, 88, 12, 0.15)',
            label: 'Sandhya Kaal',
            subLabel: 'The Twilight Boundary'
        },
        night: {
            bg: 'bg-black',
            gradient: 'from-neutral-900 via-black to-black',
            accent: 'text-neutral-400',
            border: 'border-neutral-800',
            glow: 'rgba(255, 255, 255, 0.05)',
            label: 'Nidra Phase',
            subLabel: 'Descent & Integration'
        }
    };

    const theme = themes[atmosphere];

    return (
        <div className={`fixed inset-0 ${theme.bg} text-white font-sans overflow-hidden z-50 flex flex-col transition-colors duration-2000 select-none`}>

            {/* Cinematic Background Gradients */}
            <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} transition-all duration-2000`} />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            {/* Top Atmospheric Hud */}
            <div className="relative z-10 w-full px-12 py-8 flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-serif uppercase tracking-[0.2em] mb-2 text-white">Dinacharya Protocol</h1>
                    <div className="flex items-center gap-4">
                        <span className={`text-[10px] uppercase tracking-widest font-black ${theme.accent}`}>
                            {theme.label}
                        </span>
                        <span className="w-1 h-1 bg-white/20 rounded-full" />
                        <span className="text-[10px] uppercase tracking-widest text-white/40">
                            {theme.subLabel}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col items-end">
                    <motion.div
                        key={currentTime.getMinutes()}
                        initial={{ opacity: 0.5, y: -5 }} animate={{ opacity: 1, y: 0 }}
                        className={`text-6xl font-serif font-black tracking-widest drop-shadow-[0_0_20px_${theme.glow}]`}
                    >
                        {currentTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
                    </motion.div>
                    <span className={`text-xs uppercase tracking-[0.4em] font-bold mt-2 ${theme.accent}`}>
                        Local Sync
                    </span>
                </div>
            </div>

            {/* Central Bio-Sphere UI */}
            <div className="relative z-10 flex-1 flex items-center justify-center">

                {/* The Orbital Sequence */}
                <div className="w-full max-w-5xl px-8">

                    {/* Progress Track */}
                    <div className="flex items-center justify-between mb-8 px-4">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">Protocol Execution</span>
                        <span className={`text-lg font-serif italic ${theme.accent}`}>{progressPercent}% Sync</span>
                    </div>

                    {/* Step Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {DAILY_STEPS.map((step) => {
                            const isDone = completedSteps.has(step.id);
                            const Icon = step.icon;

                            return (
                                <motion.button
                                    key={step.id}
                                    onClick={() => toggleStep(step.id)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`relative p-6 rounded-2xl border text-left flex flex-col justify-between h-48 transition-all duration-500 overflow-hidden group ${isDone
                                            ? 'bg-white/10 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                                            : `bg-black/40 backdrop-blur-md ${theme.border} hover:border-white/20`
                                        }`}
                                >
                                    {/* Hover gradient for incomplete */}
                                    {!isDone && (
                                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    )}

                                    <div className="relative z-10 flex justify-between items-start mb-4">
                                        <div className={`p-3 rounded-xl border ${isDone ? 'bg-white text-black border-white' : `bg-black/50 ${theme.border} ${theme.accent}`}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className={`text-[10px] font-sans uppercase tracking-widest px-2 py-1 rounded border ${isDone ? 'border-white/30 text-white/70' : `${theme.border} ${theme.accent} opacity-50`}`}>
                                            {step.time}
                                        </span>
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className={`font-serif text-lg leading-tight mb-2 ${isDone ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`}>
                                            {step.name}
                                        </h3>
                                        <p className={`text-xs tracking-wide font-light line-clamp-2 ${isDone ? 'text-white/60' : 'text-neutral-500'}`}>
                                            {step.instruction}
                                        </p>
                                    </div>

                                    {/* Status Indicator Bar */}
                                    <div className={`absolute bottom-0 left-0 h-1 transition-all duration-1000 ${isDone ? 'w-full bg-white opacity-40' : 'w-0'}`} />
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom Cautionary Section */}
            <div className="relative z-10 w-full px-12 py-8 flex justify-center border-t border-white/5 bg-black/50 backdrop-blur-xl">
                <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
                    <Eye className="w-4 h-4" />
                    System strictly enforces alignment to circadian sequence during <span className="font-bold text-white/80">Intensive Vrat</span>.
                </p>
            </div>

        </div>
    );
}
