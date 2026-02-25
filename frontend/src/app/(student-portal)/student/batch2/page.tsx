"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Library, ArrowRight, LayoutDashboard, Star, Sparkles, BookOpen, GraduationCap, Target, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import UpanishadsLibraryView from "@/components/batch2/upanishads/UpanishadsLibraryView";
import CanonicalKnowledgeMap from "@/components/batch2/canonical-knowledge-map";
import { ALL_108_UPANISHADS } from "@/components/batch2/upanishads/upanishads-108-data";
import UpanishadProgressSequence from "@/components/batch2/UpanishadProgressSequence";
import SelfStudyMissions from "@/components/batch2/SelfStudyMissions";
import BatchSummary from "@/components/batch2/BatchSummary";
import { useSadhanaProgress } from "@/components/batch2/sadhana/hooks/useSadhanaProgress";
import { ShieldAlert, Trophy, Compass } from "lucide-react";

export default function Batch2Page() {
    const { progress } = useSadhanaProgress();
    const { archetype, sankalpaResets } = progress;
    const [activeTab, setActiveTab] = useState("progress");

    const tabs = [
        { id: "progress", label: "Progress Path", icon: Star },
        { id: "map", label: "Knowledge Map", icon: Sparkles },
        { id: "mission", label: "Daily Missions", icon: Target },
        { id: "summary", label: "Journey Recap", icon: Clock },
    ];

    return (
        <div className="min-h-screen bg-[#FDF8F0] pb-20">
            {/* Top Navigation / Tabs */}
            <div className="sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-amber-100 px-4 py-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                            <GraduationCap className="w-5 h-5 text-amber-600" />
                        </div>
                        <span className="font-bold text-amber-900 hidden md:block">Ancient Wisdom Portal</span>
                    </div>

                    <div className="flex items-center bg-amber-50 p-1 rounded-full border border-amber-200 overflow-x-auto max-w-[calc(100vw-100px)] scrollbar-hide">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap
                                        ${isActive
                                            ? "bg-card text-amber-700 shadow-sm ring-1 ring-amber-200"
                                            : "text-amber-600/70 hover:text-amber-800 hover:bg-amber-100/50"}
                                    `}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="w-8" /> {/* Spacer */}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-6">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeTab === "map" && (
                        <>
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-amber-950 mb-2 font-serif">
                                    Brahmavidyā Roadmap
                                </h1>
                                <p className="text-amber-800/80 leading-relaxed max-w-2xl mx-auto">
                                    Explore the structured lineage of Vedic wisdom.
                                </p>
                            </div>

                            {/* Progress Banner (Map View Only) */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between bg-card/60 backdrop-blur-sm rounded-xl border border-amber-200 p-4 shadow-sm max-w-3xl mx-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-amber-100 rounded-full">
                                            <BookOpen className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-amber-900 text-sm">Current Focus: Īśā Upaniṣad</p>
                                            <p className="text-xs text-amber-700/70">Verses 1-4 • The Nature of Self</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200">
                                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                        <span className="text-amber-900 font-bold text-sm">Level 1 / 108</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full bg-card rounded-xl shadow-sm border border-amber-100 overflow-hidden">
                                <CanonicalKnowledgeMap />
                            </div>
                        </>
                    )}

                    {activeTab === "progress" && (
                        <>
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-amber-950 mb-2 font-serif">
                                    Guided Ascent
                                </h1>
                                <p className="text-amber-800/80 leading-relaxed max-w-2xl mx-auto">
                                    Your personalized sequence of internal transformation.
                                </p>
                            </div>

                            {/* Progress Banner (Progress View) */}
                            <div className="mb-8">
                                <div className="flex flex-col md:flex-row items-center justify-between bg-card/80 backdrop-blur-md rounded-2xl border-2 border-amber-200 p-6 shadow-xl max-w-4xl mx-auto relative overflow-hidden group gap-6">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Sparkles className="w-20 h-20 text-amber-600" />
                                    </div>

                                    {/* Archetype Recommendation Overlay */}
                                    <div className="flex items-center gap-5 relative z-10 w-full md:w-auto">
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg ${archetype === 'Discoverer' ? 'bg-gradient-to-br from-emerald-400 to-teal-500 shadow-emerald-500/20' :
                                            archetype === 'Hopper' ? 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-orange-500/20' :
                                                'bg-gradient-to-br from-blue-400 to-indigo-500 shadow-indigo-500/20'
                                            }`}>
                                            {archetype === 'Discoverer' && <Trophy className="w-8 h-8" />}
                                            {archetype === 'Hopper' && <ShieldAlert className="w-8 h-8" />}
                                            {archetype === 'Prisoner' && <Compass className="w-8 h-8" />}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`px-2 py-0.5 text-[10px] font-black uppercase tracking-widest rounded-md border ${archetype === 'Discoverer' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
                                                    archetype === 'Hopper' ? 'bg-amber-100 text-amber-700 border-amber-200' :
                                                        'bg-blue-100 text-blue-700 border-blue-200'
                                                    }`}>
                                                    {archetype} Path
                                                </span>
                                                {archetype === 'Hopper' && sankalpaResets > 0 && (
                                                    <span className="text-rose-600 font-bold text-xs flex items-center gap-1">
                                                        <ShieldAlert className="w-3 h-3" /> {sankalpaResets} Resets
                                                    </span>
                                                )}
                                            </div>
                                            <h2 className="text-xl font-bold text-amber-950 font-serif">
                                                {archetype === 'Discoverer' ? "The Advanced Frontier" :
                                                    archetype === 'Hopper' ? "The Path of Commitment" :
                                                        "Foundation of Wisdom"}
                                            </h2>
                                            <p className="text-amber-700 text-sm font-medium">
                                                {archetype === 'Discoverer' ? "You are ready for deep non-dual inquiry." :
                                                    archetype === 'Hopper' ? "Focus on completing one full 40-day cycle." :
                                                        "Build stability with daily preliminary chants."}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center md:items-end gap-3 relative z-10 w-full md:w-auto">
                                        <div className="flex items-center gap-3 w-full md:w-auto">
                                            <Link href={archetype === 'Discoverer' ? "/student/batch2/upanishads/mandukya" : "/student/batch2/upanishads/isha"} className="flex-1 md:flex-none">
                                                <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-xl px-6 shadow-lg shadow-amber-600/20 font-bold">
                                                    {archetype === 'Discoverer' ? "Enter Deep Study" : "Resume Journey"}
                                                </Button>
                                            </Link>
                                            <Link href="/student/batch2/sadhana" className="flex-1 md:flex-none">
                                                <Button size="lg" variant="outline" className="w-full border-amber-400 text-amber-800 hover:bg-amber-50 rounded-xl px-6 font-bold shadow-sm">
                                                    Portal
                                                </Button>
                                            </Link>
                                        </div>
                                        <div className="text-[10px] font-bold text-amber-800/60 uppercase tracking-widest">
                                            {archetype === 'Hopper' && sankalpaResets >= 3 ? "Recommendation: Avoid new Sankalpas for 7 days" :
                                                archetype === 'Discoverer' ? "Next: Brahma Sutras Introduction" :
                                                    "Next: Kena Upanishad Section 1"}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <UpanishadProgressSequence />
                        </>
                    )}

                    {activeTab === "mission" && (
                        <SelfStudyMissions />
                    )}

                    {activeTab === "summary" && (
                        <BatchSummary />
                    )}
                </motion.div>
            </div>
        </div >
    );
}
