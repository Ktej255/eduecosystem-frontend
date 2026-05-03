"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Rocket,
    Orbit,
    Sparkles,
    Lock,
    CheckCircle2,
    Play,
    BookOpen,
    BrainCircuit,
    ChevronRight,
    Flame,
    Calendar
} from 'lucide-react';
import CosmicCard from './ui/CosmicCard';
import { DashboardState, SlotTask } from './types';
import FocusTimerOverlay from './ui/FocusTimerOverlay';
import SundayTestModal from './ui/SundayTestModal';
import AntiGravityOnboarding from './ui/AntiGravityOnboarding';
import { toast } from 'sonner';

export default function AntiGravityDashboard() {
    const [data, setData] = useState<DashboardState | null>(null);
    const [loading, setLoading] = useState(true);
    const [engaging, setEngaging] = useState(false); // For "Engage Thrusters" animation
    const [activeSlot, setActiveSlot] = useState<SlotTask | null>(null);
    const [testModalData, setTestModalData] = useState<{ id: string, questions: any[] } | null>(null);
    const [showOnboarding, setShowOnboarding] = useState(false);

    useEffect(() => {
        fetchDashboard();
        // Check onboarding status
        const hasOnboarded = localStorage.getItem('antigravity_onboarding_complete');
        if (!hasOnboarded) {
            setShowOnboarding(true);
        }
    }, []);

    const handleOnboardingComplete = () => {
        localStorage.setItem('antigravity_onboarding_complete', 'true');
        setShowOnboarding(false);
    };

    const fetchDashboard = async () => {
        try {
            const res = await fetch(`${(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000').replace(/\/$/, '')}/api/v1/antigravity/dashboard`);
            if (!res.ok) throw new Error('Failed to fetch gravity data');
            const jsonData = await res.json();
            setData(jsonData);
        } catch (error) {
            console.error(error);
            toast.error("Failed to establish comms with Anti-Gravity Server");
        } finally {
            setLoading(false);
        }
    };

    const toggleSlot = async (slot: SlotTask) => {
        if (slot.is_locked) {
            toast.error("This module is locked! Complete previous modules first.");
            return;
        }

        // Optimistic Update
        const newData = JSON.parse(JSON.stringify(data));
        const targetSlot = newData.slots.find((s: SlotTask) => s.slot_id === slot.slot_id);
        if (targetSlot) {
            targetSlot.is_completed = !targetSlot.is_completed;
            setData(newData);
        }

        try {
            const res = await fetch(`${(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000').replace(/\/$/, '')}/api/v1/antigravity/progress/toggle`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    slot_id: slot.slot_id,
                    db_topic_id: slot.db_topic_id,
                    completed: !slot.is_completed
                })
            });
            if (!res.ok) throw new Error('Sync failed');
            toast.success(slot.is_completed ? "Progress Reverted" : "Module Complete! +50 XP");
        } catch (error) {
            toast.error("Failed to sync progress. Reverting...");
            fetchDashboard(); // Revert
        }
    };

    const handleTimerComplete = () => {
        if (activeSlot) {
            toggleSlot(activeSlot); // Mark as complete
            setActiveSlot(null);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0B0B15] flex flex-col items-center justify-center text-white">
                <Orbit className="w-12 h-12 animate-spin text-purple-500 mb-4" />
                <p className="text-purple-200 animate-pulse font-mono tracking-widest">INITIALIZING ANTI-GRAVITY PROTOCOLS...</p>
            </div>
        );
    }

    if (!data) return null;

    const { current_phase, today_date, day_number_in_phase, slots, daily_progress } = data;

    return (
        <div className="min-h-screen bg-[#0B0B15] text-white selection:bg-purple-500/30 pb-20 overflow-x-hidden">

            <AnimatePresence>
                {showOnboarding && <AntiGravityOnboarding onComplete={handleOnboardingComplete} />}
            </AnimatePresence>

            {activeSlot && (
                <FocusTimerOverlay
                    slot={activeSlot}
                    onClose={() => setActiveSlot(null)}
                    onComplete={handleTimerComplete}
                />
            )}

            {testModalData && (
                <SundayTestModal
                    testId={testModalData.id}
                    questions={testModalData.questions}
                    onClose={() => setTestModalData(null)}
                />
            )}

            {/* Background Stars (Simple CSS implementation) */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-card rounded-full opacity-50 animate-pulse" />
                <div className="absolute top-[30%] left-[80%] w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-ping" />
                <div className="absolute top-[60%] left-[10%] w-1.5 h-1.5 bg-blue-400 rounded-full opacity-40" />
            </div>

            {/* Header */}
            <header className="relative z-10 pt-12 pb-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30 backdrop-blur-md">
                            <Rocket className="w-6 h-6 text-purple-400" />
                        </div>
                        <span className="text-purple-300 font-mono text-sm tracking-widest uppercase">Mission Control</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200">
                        {current_phase.name}
                    </h1>
                    <p className="text-muted-foreground mt-2 max-w-xl">
                        {current_phase.description} • <span className="text-purple-400 font-bold">Day {day_number_in_phase}</span>
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <CosmicCard className="px-6 py-4 flex flex-col items-center min-w-[120px]" glowColor="blue">
                        <span className="text-xs text-blue-300 font-bold uppercase tracking-wider">Date</span>
                        <span className="text-xl font-black">{new Date(today_date).getDate()} <span className="text-sm">Jan</span></span>
                    </CosmicCard>

                    <CosmicCard className="px-6 py-4 flex flex-col items-center min-w-[120px]" glowColor="emerald">
                        <span className="text-xs text-emerald-300 font-bold uppercase tracking-wider">Orbit</span>
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-black">{Math.round(daily_progress)}%</span>
                            <Orbit className={`w-4 h-4 ${daily_progress >= 100 ? 'text-emerald-400 animate-spin' : 'text-muted-foreground'}`} />
                        </div>
                    </CosmicCard>
                </div>
            </header>

            {/* Phase Timeline */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
                {/* ... existing timeline ... */}
            </div>

            {/* Exam Filter (Concept) */}
            <div className="max-w-7xl mx-auto px-6 mb-6 flex justify-end">
                <div className="bg-card/5 border border-white/10 p-1 rounded-xl inline-flex gap-1">
                    <button className="px-4 py-1.5 text-xs font-bold rounded-lg bg-purple-500 text-white shadow-lg shadow-purple-900/40 transition-all">
                        RAS Prelims
                    </button>
                    <button className="px-4 py-1.5 text-xs font-bold rounded-lg text-muted-foreground hover:text-white hover:bg-card/10 transition-all">
                        Mains Only
                    </button>
                </div>
            </div>

            {/* Daily Mission Grid */}
            <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Col: The Plan */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-yellow-400" />
                        <h2 className="text-xl font-bold">Todays Trajectory</h2>
                    </div>

                    {slots.map((slot, idx) => (
                        <CosmicCard
                            key={slot.slot_id}
                            glowColor={slot.is_completed ? 'emerald' : slot.is_locked ? 'pink' : 'blue'}
                            className={`p-6 transition-all ${slot.is_completed ? 'opacity-80' : 'opacity-100'} ${slot.is_locked ? 'grayscale opacity-50' : ''}`}
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon Box */}
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border 
                                    ${slot.is_completed
                                        ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                                        : slot.is_locked
                                            ? 'bg-gray-800/50 border-gray-700 text-muted-foreground'
                                            : 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                                    }`}>
                                    {slot.is_locked ? <Lock className="w-5 h-5" /> :
                                        slot.is_completed ? <CheckCircle2 className="w-6 h-6" /> :
                                            slot.action_type === 'revision' ? <BrainCircuit className="w-6 h-6" /> :
                                                <BookOpen className="w-6 h-6" />
                                    }
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="flex items-center gap-2">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider
                                                ${slot.slot_id === 'A' ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' :
                                                    slot.slot_id === 'B' ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' :
                                                        'bg-pink-500/10 border-pink-500/30 text-pink-400'}
                                            `}>
                                                Slot {slot.slot_id}
                                            </span>
                                            <span className="text-xs text-muted-foreground font-mono">{slot.time_label}</span>
                                        </div>
                                        {slot.is_locked && <span className="text-xs text-red-400 flex items-center gap-1"><Lock className="w-3 h-3" /> Locked</span>}
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                                        {slot.subject}: <span className="font-normal text-muted-foreground">{slot.topic}</span>
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                        {slot.description}
                                    </p>

                                    {!slot.is_completed && !slot.is_locked && (
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => toggleSlot(slot)}
                                                className="px-4 py-2 bg-card/10 hover:bg-card/20 border border-white/20 rounded-lg text-sm font-bold transition-all flex items-center gap-2"
                                            >
                                                Mark Complete
                                            </button>
                                            <button
                                                onClick={() => setActiveSlot(slot)}
                                                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all flex items-center gap-2"
                                            >
                                                <Play className="w-3 h-3 fill-current" /> Start Focus
                                            </button>
                                        </div>
                                    )}
                                    {slot.is_completed && (
                                        <div className="text-sm text-emerald-400 font-bold flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" /> Mission Accomplished
                                            <button onClick={() => toggleSlot(slot)} className="text-xs text-muted-foreground hover:text-muted-foreground underline ml-2">Undo</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CosmicCard>
                    ))}
                </div>

                {/* Right Col: Stats & Tools */}
                <div className="space-y-6">
                    <CosmicCard className="p-6 bg-gradient-to-b from-purple-900/20 to-blue-900/10" glowColor="purple">
                        <div className="flex items-center gap-3 mb-4">
                            <Flame className="w-6 h-6 text-orange-500" />
                            <h3 className="text-lg font-bold">Anti-Gravity State</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6">
                            Maintain escape velocity. Missing 2 days in a row leads to orbital decay (Study Re-plan).
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 rounded-xl bg-black/20 border border-white/5 text-center">
                                <div className="text-2xl font-black text-white">12 <span className="text-xs font-normal text-muted-foreground">hrs</span></div>
                                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Time Logged</div>
                            </div>
                            <div className="p-3 rounded-xl bg-black/20 border border-white/5 text-center">
                                <div className="text-2xl font-black text-amber-500">5 <span className="text-xs font-normal text-muted-foreground">days</span></div>
                                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Streak</div>
                            </div>
                        </div>
                    </CosmicCard>

                    <CosmicCard className="p-6" glowColor="pink">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold">Sunday Test</h3>
                            <span className="text-xs font-bold bg-pink-500/20 text-pink-300 px-2 py-1 rounded">UPCOMING</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            Phase 1 Mock Test covering Physics & Reasoning logic.
                        </p>
                        <button
                            onClick={async () => {
                                try {
                                    const toastId = toast.loading("Decrypting Test Papers...");
                                    const res = await fetch(`${(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000').replace(/\/$/, '')}/api/v1/antigravity/test/sunday`);
                                    const data = await res.json();

                                    setTestModalData({
                                        id: data.test_id,
                                        questions: data.questions
                                    });
                                    toast.dismiss(toastId);

                                } catch (e) {
                                    toast.error("Failed to generate test.");
                                }
                            }}
                            className="w-full py-3 bg-pink-600/20 hover:bg-pink-600/30 border border-pink-500/50 text-pink-300 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group"
                        >
                            <BrainCircuit className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            Start Mock Test
                        </button>
                    </CosmicCard>

                    {/* Meditation Widget */}
                    <CosmicCard className="p-6 relative overflow-hidden group" glowColor="emerald">
                        <div className="absolute inset-0 bg-[url('/meditation-bg.jpg')] opacity-10 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold">Inner Sanctum</h3>
                                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            </div>
                            <p className="text-sm text-muted-foreground mb-6">
                                Realign your focus. Access the void to recharge your mental cognitive load.
                            </p>

                            <a
                                href="/student/meditation"
                                className="w-full py-3 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                            >
                                <span className="text-lg">🧘‍♂️</span> Enter Sanctum
                            </a>
                        </div>
                    </CosmicCard>
                </div>
            </main>
        </div>
    );
}
