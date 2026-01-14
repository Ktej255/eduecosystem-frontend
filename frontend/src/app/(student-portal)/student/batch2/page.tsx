"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Library, ArrowRight, LayoutDashboard, Star, Sparkles, BookOpen, GraduationCap, Target, Clock } from "lucide-react";
import { motion } from "framer-motion";
import UpanishadsLibraryView from "@/components/batch2/upanishads/UpanishadsLibraryView";
import CanonicalKnowledgeMap from "@/components/batch2/canonical-knowledge-map";
import { ALL_108_UPANISHADS } from "@/components/batch2/upanishads/upanishads-108-data";
import UpanishadProgressSequence from "@/components/batch2/UpanishadProgressSequence";
import SelfStudyMissions from "@/components/batch2/SelfStudyMissions";
import BatchSummary from "@/components/batch2/BatchSummary";

export default function Batch2Page() {
    const [activeTab, setActiveTab] = useState("map");

    const tabs = [
        { id: "map", label: "Knowledge Map", icon: Sparkles },
        { id: "progress", label: "Progress Path", icon: Star },
        { id: "mission", label: "Daily Missions", icon: Target },
        { id: "summary", label: "Journey Recap", icon: Clock },
    ];

    return (
        <div className="min-h-screen bg-[#FDF8F0] pb-20">
            {/* Top Navigation / Tabs */}
            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-amber-100 px-4 py-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                            <GraduationCap className="w-5 h-5 text-amber-600" />
                        </div>
                        <span className="font-bold text-amber-900 hidden md:block">Batch II</span>
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
                                            ? "bg-white text-amber-700 shadow-sm ring-1 ring-amber-200"
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
                                <div className="flex items-center justify-between bg-white/60 backdrop-blur-sm rounded-xl border border-amber-200 p-4 shadow-sm max-w-3xl mx-auto">
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

                            <div className="w-full bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden">
                                <CanonicalKnowledgeMap />
                            </div>
                        </>
                    )}

                    {activeTab === "progress" && (
                        <UpanishadProgressSequence />
                    )}

                    {activeTab === "mission" && (
                        <SelfStudyMissions />
                    )}

                    {activeTab === "summary" && (
                        <BatchSummary />
                    )}
                </motion.div>
            </div>
        </div>
    );
}
