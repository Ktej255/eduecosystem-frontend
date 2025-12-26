"use client";

import React, { useState, useCallback } from "react";
import { List, Layers, BookOpen, ChevronLeft, ChevronRight, Volume2 } from "lucide-react";
import { UpanishadDataEntry, UpanishadMetadata } from "./upanishad-registry";

interface UniversalUpanishadViewerProps {
    data: UpanishadDataEntry[];
    metadata: UpanishadMetadata;
}

export default function UniversalUpanishadViewer({ data, metadata }: UniversalUpanishadViewerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [viewMode, setViewMode] = useState<"single" | "stream">("single");
    const [showWordMeanings, setShowWordMeanings] = useState(false);

    const handleNext = useCallback(() => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    }, [currentIndex, data.length]);

    const handlePrev = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }, [currentIndex]);

    const currentShloka = data[currentIndex];

    // Get shloka number from various possible fields
    const getShlokaNumber = (entry: UpanishadDataEntry): string => {
        if (entry.number) return `${entry.number}`;
        if (entry.mantra) return `${entry.mantra}`;
        if (entry.verse) return `${entry.verse}`;
        if (entry.sutra) return `Sutra ${entry.sutra}`;
        return `${entry.id}`;
    };

    // Get section info (khanda, adhyaya, etc.)
    const getSectionInfo = (entry: UpanishadDataEntry): string | null => {
        if (entry.adhyaya) return `Adhyaya ${entry.adhyaya}`;
        if (entry.khanda) return `Khanda ${entry.khanda}`;
        return null;
    };

    return (
        <div className="pb-24">
            {/* View Mode Toggle */}
            <div className="flex justify-center gap-2 mb-6">
                <button
                    onClick={() => setViewMode("single")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${viewMode === "single"
                            ? "bg-amber-600/50 text-white"
                            : "bg-amber-900/20 text-amber-400 hover:bg-amber-900/40"
                        }`}
                >
                    <Layers className="w-4 h-4" /> Single View
                </button>
                <button
                    onClick={() => setViewMode("stream")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${viewMode === "stream"
                            ? "bg-amber-600/50 text-white"
                            : "bg-amber-900/20 text-amber-400 hover:bg-amber-900/40"
                        }`}
                >
                    <List className="w-4 h-4" /> All View
                </button>
            </div>

            {/* Content */}
            {viewMode === "single" ? (
                /* Single Shloka View */
                <div className="max-w-4xl mx-auto">
                    <ShlokaDisplay
                        shloka={currentShloka}
                        number={getShlokaNumber(currentShloka)}
                        section={getSectionInfo(currentShloka)}
                        total={data.length}
                        showWordMeanings={showWordMeanings}
                        onToggleWordMeanings={() => setShowWordMeanings(!showWordMeanings)}
                    />
                </div>
            ) : (
                /* Stream View */
                <div className="max-w-4xl mx-auto space-y-12">
                    {data.map((shloka, idx) => (
                        <div key={shloka.id} className="border-b border-amber-900/30 pb-12">
                            <ShlokaDisplay
                                shloka={shloka}
                                number={getShlokaNumber(shloka)}
                                section={getSectionInfo(shloka)}
                                total={data.length}
                                showWordMeanings={true}
                                onToggleWordMeanings={() => { }}
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Bottom Navigation (Single View Only) */}
            {viewMode === "single" && data.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#333] py-4">
                    <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className="flex items-center gap-2 px-4 py-2 bg-amber-900/30 rounded-full disabled:opacity-30 hover:bg-amber-900/50 transition-all"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            <span className="hidden sm:inline">Previous</span>
                        </button>

                        {/* Progress Dots */}
                        <div className="flex gap-1 overflow-x-auto max-w-[200px] sm:max-w-none">
                            {data.length <= 30 ? (
                                data.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`w-2 h-2 rounded-full transition-all ${i === currentIndex
                                                ? "bg-amber-400 w-6"
                                                : "bg-amber-900/50 hover:bg-amber-700/50"
                                            }`}
                                    />
                                ))
                            ) : (
                                <span className="text-amber-400 text-sm">
                                    {currentIndex + 1} / {data.length}
                                </span>
                            )}
                        </div>

                        <button
                            onClick={handleNext}
                            disabled={currentIndex === data.length - 1}
                            className="flex items-center gap-2 px-4 py-2 bg-amber-900/30 rounded-full disabled:opacity-30 hover:bg-amber-900/50 transition-all"
                        >
                            <span className="hidden sm:inline">Next</span>
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

// Individual Shloka Display Component
interface ShlokaDisplayProps {
    shloka: UpanishadDataEntry;
    number: string;
    section: string | null;
    total: number;
    showWordMeanings: boolean;
    onToggleWordMeanings: () => void;
}

function ShlokaDisplay({ shloka, number, section, total, showWordMeanings, onToggleWordMeanings }: ShlokaDisplayProps) {
    return (
        <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1a140a] rounded-2xl border border-amber-900/30 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-900/30 to-transparent px-6 py-4 border-b border-amber-900/20">
                <div className="flex items-center justify-between">
                    <div>
                        {section && (
                            <span className="text-amber-600/70 text-xs uppercase tracking-wider">
                                {section} •
                            </span>
                        )}
                        <span className="text-amber-400 text-xs uppercase tracking-wider ml-1">
                            Mantra {number}
                        </span>
                    </div>
                    <span className="px-3 py-1 bg-amber-900/30 rounded-full text-amber-300 text-xs">
                        {shloka.theme}
                    </span>
                </div>
            </div>

            {/* Sanskrit */}
            <div className="px-6 py-6 border-b border-amber-900/20">
                <p className="text-2xl sm:text-3xl text-center text-amber-100 leading-relaxed font-serif">
                    {shloka.sanskrit}
                </p>
            </div>

            {/* Hindi */}
            <div className="px-6 py-4 bg-amber-900/10 border-b border-amber-900/20">
                <p className="text-lg text-center text-amber-200/90 leading-relaxed">
                    {shloka.hindi}
                </p>
            </div>

            {/* English */}
            <div className="px-6 py-4 border-b border-amber-900/20">
                <p className="text-base text-center text-[#ccc] leading-relaxed italic">
                    "{shloka.english}"
                </p>
            </div>

            {/* Simple Explanation */}
            <div className="px-6 py-5 bg-gradient-to-r from-amber-900/20 to-transparent">
                <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                        <p className="text-amber-100 font-medium mb-2">
                            {shloka.simpleExplanation}
                        </p>
                        <p className="text-amber-200/70 text-sm">
                            {shloka.simpleExplanationHindi}
                        </p>
                    </div>
                </div>
            </div>

            {/* Word Meanings */}
            {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                <div className="px-6 py-4 border-t border-amber-900/20">
                    <button
                        onClick={onToggleWordMeanings}
                        className="flex items-center gap-2 text-amber-400 text-sm mb-3 hover:text-amber-300"
                    >
                        <Volume2 className="w-4 h-4" />
                        Word-by-Word Meanings ({shloka.wordMeanings.length})
                    </button>

                    {showWordMeanings && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                            {shloka.wordMeanings.map((word, idx) => (
                                <div key={idx} className="bg-[#0a0a0a] rounded-lg px-3 py-2">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-amber-400 font-semibold">{word.devanagari}</span>
                                        <span className="text-amber-600 text-xs">({word.sanskrit})</span>
                                    </div>
                                    <div className="text-[#888] text-sm mt-1">
                                        <span className="text-amber-200/70">{word.hindi}</span>
                                        <span className="mx-1">•</span>
                                        <span>{word.english}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
