"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Home, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { getAdjacentUpanishads, hasUpanishadData } from "./upanishad-registry";
import { ALL_108_UPANISHADS } from "./upanishads-108-data";

interface UpanishadNavBarProps {
    currentId: string;
    currentName: string;
    currentNameSanskrit?: string;
    veda?: string;
}

export default function UpanishadNavBar({ currentId, currentName, currentNameSanskrit, veda }: UpanishadNavBarProps) {
    const router = useRouter();
    const { prev, next } = getAdjacentUpanishads(currentId);

    // Get study order number
    const currentUpanishad = ALL_108_UPANISHADS.find(u => u.id === currentId);
    const studyOrder = currentUpanishad?.studyOrder || 0;

    return (
        <div className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-[#333]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
                <div className="flex items-center justify-between gap-2">
                    {/* Left: Home + Prev */}
                    <div className="flex items-center gap-2">
                        {/* Home Button */}
                        <button
                            onClick={() => router.push("/student/batch2/upanishads")}
                            className="p-2 rounded-full bg-amber-900/30 hover:bg-amber-900/50 transition-all"
                            title="Back to 108 Upanishads"
                        >
                            <Home className="w-4 h-4 text-amber-200" />
                        </button>

                        {/* Previous Upanishad */}
                        <button
                            onClick={() => prev && router.push(`/student/batch2/upanishads/${prev.id}`)}
                            disabled={!prev}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-all ${prev
                                    ? "bg-amber-900/30 hover:bg-amber-900/50 text-amber-200"
                                    : "bg-[#1a1a1a] text-[#444] cursor-not-allowed"
                                }`}
                            title={prev ? `Previous: ${prev.name}` : "This is the first Upanishad"}
                        >
                            <ChevronLeft className="w-4 h-4" />
                            <span className="hidden sm:inline">
                                {prev ? prev.name : "First"}
                            </span>
                        </button>
                    </div>

                    {/* Center: Current Upanishad */}
                    <div className="flex flex-col items-center min-w-0 flex-1">
                        <span className="text-[#C4A35A] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                            #{studyOrder} • {veda || "Vedas"}
                        </span>
                        <h1 className="text-sm sm:text-lg font-bold text-white truncate max-w-[150px] sm:max-w-none">
                            {currentNameSanskrit || currentName} Upaniṣad
                        </h1>
                    </div>

                    {/* Right: Next */}
                    <div className="flex items-center gap-2">
                        {/* Next Upanishad */}
                        <button
                            onClick={() => next && router.push(`/student/batch2/upanishads/${next.id}`)}
                            disabled={!next}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-all ${next
                                    ? "bg-amber-900/30 hover:bg-amber-900/50 text-amber-200"
                                    : "bg-[#1a1a1a] text-[#444] cursor-not-allowed"
                                }`}
                            title={next ? `Next: ${next.name}` : "This is the last Upanishad"}
                        >
                            <span className="hidden sm:inline">
                                {next ? next.name : "Last"}
                            </span>
                            <ChevronRight className="w-4 h-4" />
                        </button>

                        {/* Data availability indicator */}
                        {next && !hasUpanishadData(next.id) && (
                            <span className="hidden md:inline text-[10px] text-[#666] bg-[#1a1a1a] px-2 py-0.5 rounded-full">
                                Coming Soon
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
