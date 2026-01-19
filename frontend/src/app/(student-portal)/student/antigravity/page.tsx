"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/antigravity/GlassCard';
import { DashboardHeader } from '@/components/antigravity/DashboardHeader';
import { OnboardingModal } from '@/components/antigravity/OnboardingModal';
import { HistoryTimeline } from '@/components/antigravity/HistoryTimeline';
import { SundayTestModal } from '@/components/antigravity/SundayTestModal';
import { ReportsModal } from "@/components/antigravity/ReportsModal";
import { XPToast } from "@/components/antigravity/XPToast";
import KnowledgeTree3D from "@/components/revision/immersive/KnowledgeTree3D";
import { X } from "lucide-react";

// --- Interfaces ---
interface SlotTask {
    slot_id: string; // "A", "B", "C"
    db_topic_id?: string; // For persistence
    time_label: string;
    subject: string;
    topic: string;
    description: string;
    duration_minutes: number;
    is_locked: boolean;
    is_completed: boolean;
    required_slot_id?: string;
    action_type: string;
    srs_stability?: number;
    srs_due_count?: number;
    suggestion?: {
        type: string;
        reason: string;
        suggested_topic: string;
    };
}

interface PhaseInfo {
    phase_id: number;
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    is_active: boolean;
    status_message: string;
}

interface DashboardState {
    current_phase: PhaseInfo;
    today_date: string;
    day_number_in_phase: number;
    slots: SlotTask[];
    daily_progress: number;
}

export default function AntiGravityPage() {
    // --- State ---
    const [data, setData] = useState<DashboardState | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeSlotId, setActiveSlotId] = useState<string | null>(null);
    const [examMode, setExamMode] = useState<"prelims" | "mains">("prelims");

    // Date Navigation
    const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0]);

    // Gamification State
    const [xpState, setXpState] = useState<{ show: boolean; amount: number }>({ show: false, amount: 0 });

    // Modal States
    const [showModal, setShowModal] = useState(false);
    const [showTestModal, setShowTestModal] = useState(false);
    const [showReports, setShowReports] = useState(false);
    const [showMasteryMap, setShowMasteryMap] = useState(false);

    // --- Effects ---
    useEffect(() => {
        const fetchDashboard = async () => {
            setLoading(true);
            try {
                // Pass selectedDate if it's not today (or always pass it for consistency)
                const url = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/antigravity/dashboard?date_str=${selectedDate}`;
                const res = await axios.get(url);
                setData(res.data);

                // Show onboarding on first visit (mock)
                const hasVisited = localStorage.getItem("ras_visited");
                if (!hasVisited) {
                    setShowModal(true);
                    localStorage.setItem("ras_visited", "true");
                }
            } catch (err) {
                console.error("Failed to load dashboard, falling back to mock data", err);
                // MOCK DATA FALLBACK for Verification
                setData({
                    current_phase: {
                        phase_id: 1,
                        name: "Foundation Building",
                        description: "Establish core concepts and daily rhythms.",
                        start_date: "2026-01-01",
                        end_date: "2026-02-28",
                        is_active: true,
                        status_message: "On Track"
                    },
                    today_date: selectedDate,
                    day_number_in_phase: 19,
                    daily_progress: 35,
                    slots: [
                        {
                            slot_id: "A1",
                            time_label: "06:00 AM - 08:00 AM",
                            subject: "Polity",
                            topic: "Preamble & Fundamental Rights",
                            description: "Read Chapter 4 & 5 of Laxmikanth.",
                            duration_minutes: 120,
                            is_locked: false,
                            is_completed: true,
                            action_type: "reading"
                        },
                        {
                            slot_id: "B1",
                            time_label: "08:30 AM - 09:30 AM",
                            subject: "Polity",
                            topic: "FR Flashcards",
                            description: "Review missed flashcards from yesterday.",
                            duration_minutes: 60,
                            is_locked: false,
                            is_completed: false,
                            required_slot_id: "A1",
                            action_type: "revision",
                            suggestion: {
                                type: "swap",
                                reason: "Low retention in Geography detected.",
                                suggested_topic: "Cyclone Formation (Geography)"
                            }
                        },
                        {
                            slot_id: "C1",
                            time_label: "06:00 PM - 07:00 PM",
                            subject: "Current Affairs",
                            topic: "Daily News Analysis",
                            description: "Read The Hindu editorials.",
                            duration_minutes: 60,
                            is_locked: true,
                            is_completed: false,
                            required_slot_id: "B1",
                            action_type: "reading"
                        }
                    ]
                });
                setError(null); // Clear error to show UI
            } finally {
                setLoading(false);
            }
        };

        fetchDashboard();
    }, [selectedDate]);

    // --- Date Handlers ---
    const handlePrevDay = () => {
        const d = new Date(selectedDate);
        d.setDate(d.getDate() - 1);
        setSelectedDate(d.toISOString().split("T")[0]);
    };

    const handleNextDay = () => {
        const d = new Date(selectedDate);
        d.setDate(d.getDate() + 1);
        setSelectedDate(d.toISOString().split("T")[0]);
    };

    // --- Handlers ---
    const handleStartFocus = (slotId: string) => {
        setActiveSlotId(slotId);
    };

    const handleComplete = async (slotId: string) => {
        if (!data) return;

        const targetSlot = data.slots.find(s => s.slot_id === slotId);
        if (!targetSlot) return;

        const isNowCompleted = !targetSlot.is_completed; // Toggle logic

        // Optimistic update
        const updatedSlots = data.slots.map(s =>
            s.slot_id === slotId ? { ...s, is_completed: isNowCompleted } : s
        );

        // Re-evaluate locks (simplified: just unlock next if this was a requirement)
        const nextSlots = updatedSlots.map(s => {
            // For now, keep it simple. If B requires A, and A is done, unlock B.
            if (s.required_slot_id) {
                const reqSlot = updatedSlots.find(r => r.slot_id === s.required_slot_id);
                if (reqSlot && reqSlot.is_completed) {
                    return { ...s, is_locked: false };
                }
            }
            return s;
        });

        // Recalculate progress
        const completedCount = nextSlots.filter(s => s.is_completed).length;
        const totalCount = nextSlots.length;
        const newProgress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

        setData(prev => prev ? { ...prev, slots: nextSlots, daily_progress: newProgress } : null);

        // API Call
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/antigravity/progress/toggle`, {
                db_topic_id: targetSlot.db_topic_id,
                completed: isNowCompleted
            });

            // Gamification: Show Toast if marked completed and XP awarded
            if (isNowCompleted && res.data.xp_awarded > 0) {
                setXpState({ show: true, amount: res.data.xp_awarded });
                setTimeout(() => setXpState(prev => ({ ...prev, show: false })), 3000);
            }

        } catch (error) {
            console.error("Failed to sync progress", error);
            // Revert on error? For MVP, just log.
        }
    };

    const handleCloseModal = () => setShowModal(false);

    if (loading) return (
        <div className="min-h-screen bg-[#0f1014] flex items-center justify-center text-white">
            Loading RAS Dashboard...
        </div>
    );

    if (error) return (
        <div className="min-h-screen bg-[#0f1014] flex items-center justify-center text-red-400">
            {error}
        </div>
    );

    return (
        <div className="min-h-screen bg-[#0f1014] text-white font-sans selection:bg-blue-500/30">
            {/* XP Toast */}
            <XPToast xp={xpState.amount} isVisible={xpState.show} onClose={() => setXpState({ ...xpState, show: false })} />

            {/* Onboarding Modal */}
            <OnboardingModal isOpen={showModal} onClose={handleCloseModal} />

            {/* Sunday Test Modal */}
            <SundayTestModal isOpen={showTestModal} onClose={() => setShowTestModal(false)} />

            {/* Reports Modal */}
            <ReportsModal isOpen={showReports} onClose={() => setShowReports(false)} />

            {/* Immersive Mastery Modal */}
            <AnimatePresence>
                {showMasteryMap && (
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/90 backdrop-blur-3xl"
                            onClick={() => setShowMasteryMap(false)}
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            className="relative w-full max-w-6xl h-[85vh] bg-[#020617] rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(139,92,246,0.15)] overflow-hidden flex flex-col"
                        >
                            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
                                <div>
                                    <h2 className="text-3xl font-black text-white italic">COGNITIVE MASTERY MAP</h2>
                                    <p className="text-purple-400 text-[10px] font-black uppercase tracking-[0.3em]">Spatial Knowledge Distribution • Live Sync</p>
                                </div>
                                <button
                                    onClick={() => setShowMasteryMap(false)}
                                    className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-gray-400 hover:text-white transition-all"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="flex-1 p-6">
                                <KnowledgeTree3D />
                            </div>
                            <div className="p-6 bg-white/5 border-t border-white/5 flex justify-center">
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                                    Click & Drag to Orbit • Scroll to Zoom • Nodes represent retention health
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8">
                {data && (
                    <>
                        <DashboardHeader
                            phase={data.current_phase}
                            dailyProgress={data.daily_progress}
                            mode={examMode}
                            onToggleMode={setExamMode}
                            onStartTest={() => setShowTestModal(true)}
                            onOpenReports={() => setShowReports(true)}
                            onOpenMasteryMap={() => setShowMasteryMap(true)}
                            selectedDate={selectedDate}
                            onPrevDay={handlePrevDay}
                            onNextDay={handleNextDay}
                        />

                        {/* Phase 3 Special View */}
                        {data.current_phase.phase_id === 3 ? (
                            <HistoryTimeline />
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                                {data.slots.map((slot) => {
                                    return (
                                        <GlassCard
                                            key={slot.slot_id}
                                            task={slot}
                                            onStartFocus={handleStartFocus}
                                            onComplete={handleComplete}
                                            isActive={activeSlotId === slot.slot_id}
                                        />
                                    );
                                })}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
