"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Library, ArrowRight, LayoutDashboard, Star, Sparkles, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import UpanishadsLibraryView from "@/components/batch2/upanishads/UpanishadsLibraryView";
import CanonicalKnowledgeMap from "@/components/batch2/canonical-knowledge-map";
import { ALL_108_UPANISHADS } from "@/components/batch2/upanishads/upanishads-108-data";

export default function Batch2Page() {
    const [showLibrary, setShowLibrary] = useState(false);

    // Progress Logic (Mocked for now or simplistic)
    const currentUpanishadId = "isa"; // Default
    const currentIndex = ALL_108_UPANISHADS.findIndex(u => u.id === currentUpanishadId);

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-950">
            {/* Header with Library Button */}
            <div className="sticky top-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-amber-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-serif font-bold text-amber-900 dark:text-amber-100">
                            Batch 2: Ancient Wisdom
                        </h1>
                        <p className="text-sm text-amber-700 dark:text-amber-300">
                            108 Upanishads • Journey of Enlightenment
                        </p>
                    </div>
                    <div>
                        {showLibrary ? (
                            <Button
                                variant="outline"
                                onClick={() => setShowLibrary(false)}
                                className="gap-2 border-amber-300 text-amber-800 hover:bg-amber-100"
                            >
                                <LayoutDashboard className="h-4 w-4" />
                                View Knowledge Map
                            </Button>
                        ) : (
                            <Button
                                variant="outline"
                                onClick={() => setShowLibrary(true)}
                                className="gap-2 border-amber-300 text-amber-800 hover:bg-amber-100"
                            >
                                <Library className="h-4 w-4" />
                                View Library
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            {showLibrary ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <UpanishadsLibraryView onClose={() => setShowLibrary(false)} />
                </div>
            ) : (
                <>
                    {/* Canonical Knowledge Map Section */}
                    <div className="max-w-7xl mx-auto px-4 mt-6 mb-8">
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <Sparkles className="w-4 h-4 text-amber-500" />
                                <span className="text-amber-700 font-medium">Vedic Knowledge Tree</span>
                            </div>
                            <h1 className="text-3xl font-bold text-amber-950 mb-4 font-serif">
                                Brahmavidyā Roadmap
                            </h1>
                            <p className="text-amber-800/80 leading-relaxed max-w-2xl mx-auto">
                                Explore the structured lineage of Vedic wisdom, from the eternal Brahman to the meticulous Vedāṅgas.
                                Select any node to begin your study.
                            </p>
                        </div>

                        {/* Main Interactive Map */}
                        <div className="w-full bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden">
                            <CanonicalKnowledgeMap />
                        </div>
                    </div>

                    {/* Progress Banner (Restored Missing Option) - Moved and adapted */}
                    <div className="max-w-7xl mx-auto px-4 mt-6 mb-2">
                        <div className="flex items-center justify-between bg-white/60 backdrop-blur-sm rounded-xl border border-amber-200 p-4 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-amber-100 rounded-full">
                                    <Sparkles className="h-5 w-5 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-amber-900">Your Journey Progress</h3>
                                    <p className="text-xs text-amber-700">Level {currentIndex + 1}: Isha Upanishad</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="hidden md:flex flex-col items-end mr-2">
                                    <span className="text-xs font-medium text-amber-800">Overall Mastery</span>
                                    <div className="w-32 h-2 bg-amber-100 rounded-full mt-1">
                                        <div
                                            className="h-full bg-amber-500 rounded-full"
                                            style={{ width: `${Math.round(((currentIndex) / 108) * 100)}%` }}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200">
                                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                    <span className="text-amber-900 font-bold text-sm">{currentIndex} / 108</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Knowledge Map View (Tree Layout - Coherent) */}
                    <div className="p-4 md:p-8">
                        <KnowledgeTree />
                    </div>

                    {/* Info Section */}
                    <div className="max-w-4xl mx-auto px-4 pb-12">
                        <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-amber-200 dark:border-gray-800 p-6 text-center">
                            <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">
                                The Vedic Knowledge Tree
                            </h3>
                            <p className="text-amber-700 dark:text-amber-300 text-sm max-w-2xl mx-auto">
                                Explore the interconnected wisdom of the Vedas in a structured hierarchy.
                                Click on any node to deepen your study.
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
