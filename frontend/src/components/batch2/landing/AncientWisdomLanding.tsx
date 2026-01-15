"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import WisdomCard from "./WisdomCard";
import TransformationRoadmap from "./TransformationRoadmap";
import VedicKnowledgeGraph from "../VedicKnowledgeGraph";
import { Scroll, Sparkles, BookOpen, Activity } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";

import InternalShiftTracker from "./InternalShiftTracker";

import SpiritualQuotientTest from "./SpiritualQuotientTest";

export default function AncientWisdomLanding() {
    const { user } = useAuth();
    const router = useRouter();
    const [suggestedPhaseId, setSuggestedPhaseId] = useState<number | undefined>();

    // Default to false (locked) if user is not loaded or unauthorized
    const isPremium = user?.is_batch2_authorized || false;

    const handleCardClick = (path: string, requiresPremium: boolean) => {
        if (requiresPremium && !isPremium) {
            // Trigger upgrade flow or show modal
            alert("This module requires Batch II access. Join the waitlist or upgrade your plan!");
            return;
        }
        router.push(path);
    };

    const handleSQComplete = (phaseId: number) => {
        setSuggestedPhaseId(phaseId);
        // Smooth scroll to roadmap after a short delay
        setTimeout(() => {
            const roadmapElem = document.getElementById("roadmap");
            if (roadmapElem) {
                roadmapElem.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }, 800);
    };

    return (
        <div className="min-h-screen bg-[#0a0512] text-slate-200 overflow-x-hidden">
            {/* 
        HERO SECTION 
      */}
            <section className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-900/10 text-amber-300 mb-4"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium tracking-widest uppercase">Batch 2: The Inner Engineering</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 drop-shadow-sm"
                    >
                        Unlock the <br /> Ancient Code
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        A scientifically sequenced journey from <span className="text-amber-400">confusion to clarity</span> using the timeless wisdom of the Upanishads & Gita.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="pt-4"
                    >
                        <SpiritualQuotientTest onComplete={handleSQComplete} />
                    </motion.div>
                </div>
            </section>

            {/* 
        LIBRARY SECTION (Course Grid)
      */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white font-serif">The Cosmic Library</h2>
                        <p className="text-slate-400 mt-2">Select a text to begin your study.</p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
                        <span>View Full Curriculum</span>
                        <BookOpen className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <WisdomCard
                        title="Kena Upanishad"
                        subtitle="The Nature of Perception"
                        level="Foundation"
                        description="Who is the 'Knower' behind the eyes? An inquiry into the source of consciousness."
                        icon={<Scroll className="w-6 h-6" />}
                        onClick={() => handleCardClick("/ancient-wisdom/kena", false)}
                        locked={false}
                    />
                    <WisdomCard
                        title="Isha Upanishad"
                        subtitle="The Action in Inaction"
                        level="Level 1"
                        description="How to live in the world without being consumed by it. The secret of Karma Yoga."
                        icon={<Activity className="w-6 h-6" />}
                        colorTheme="emerald"
                        locked={!isPremium}
                        onClick={() => handleCardClick("/ancient-wisdom/isha", true)}
                    />
                    <WisdomCard
                        title="Bhagavad Gita (Ch 6)"
                        subtitle="The Science of Meditation"
                        level="Advanced"
                        description="Mastering the mind through Dhyana Yoga. A practical manual for mental stability."
                        icon={<Sparkles className="w-6 h-6" />}
                        colorTheme="rose"
                        locked={!isPremium}
                        onClick={() => handleCardClick("/ancient-wisdom/gita", true)}
                    />
                    {/* Add more cards as needed */}
                </div>
            </section>

            {/* 
        ROADMAP SECTION 
      */}
            <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
                <TransformationRoadmap suggestedPhaseId={suggestedPhaseId} />
            </section>

            {/* 
        YOUR EVOLUTION SECTION 
      */}
            <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2 space-y-8">
                    <h2 className="text-3xl font-bold text-white font-serif">Your Evolution</h2>
                    <p className="text-slate-400 max-w-2xl leading-relaxed">
                        As you journey through the Upanishads, you will notice shifts in your perception, energy, and mental clarity. Use the tracker to monitor your alignment with the higher teachings.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Reusing existing Wisdom Cards or other stats could go here */}
                        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                            <h4 className="text-amber-400 font-bold mb-2">Current Focus</h4>
                            <p className="text-white text-lg">Foundation: The Vitality Phase</p>
                            <p className="text-sm text-slate-500 mt-1">Focusing on physical discipline and breath awareness.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20">
                            <h4 className="text-indigo-400 font-bold mb-2">Next Milestone</h4>
                            <p className="text-white text-lg">Level 1: The Clarity Phase</p>
                            <p className="text-sm text-slate-500 mt-1">Unwavering focus and emotional equilibrium.</p>
                        </div>
                    </div>
                </div>

                <div className="lg:sticky lg:top-24">
                    <InternalShiftTracker />
                </div>
            </section>

            {/* 
        KNOWLEDGE GRAPH SECTION 
      */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white font-serif mb-4">Explore the Connections</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        See how concepts link together. From Karma to Bio-Memory, explore the vast interconnected web of Vedic psychology.
                    </p>
                </div>

                <div className="h-[700px] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 bg-slate-950/80 z-0" />
                    <div className="relative z-10 w-full h-full opacity-90 hover:opacity-100 transition-opacity">
                        <VedicKnowledgeGraph theme="dark" />
                    </div>
                </div>
            </section>
        </div>
    );
}
