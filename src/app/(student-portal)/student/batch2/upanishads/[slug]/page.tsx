"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { BookOpen } from "lucide-react";

// Import registry and components
import { getUpanishadData, hasUpanishadData } from "@/components/batch2/upanishads/upanishad-registry";
import { ALL_108_UPANISHADS } from "@/components/batch2/upanishads/upanishads-108-data";
import UpanishadNavBar from "@/components/batch2/upanishads/UpanishadNavBar";
import UniversalUpanishadViewer from "@/components/batch2/upanishads/UniversalUpanishadViewer";

// Import custom layouts for specific Upanishads
import KenaLayout from "@/components/batch2/upanishads/KenaLayout";
import IshaLayout from "@/components/batch2/upanishads/IshaLayout";
import KathaLayout from "@/components/batch2/upanishads/KathaLayout";
import PrashnaLayout from "@/components/batch2/upanishads/PrashnaLayout";

export default function UpanishadDetailPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.slug as string;

    // Route to dedicated custom layouts for specific Upanishads
    if (id === "kena") return <KenaLayout />;
    if (id === "isa") return <IshaLayout />;
    if (id === "katha") return <KathaLayout />;
    if (id === "prasna") return <PrashnaLayout />;

    // Get Upanishad info from 108 list
    const upanishadInfo = ALL_108_UPANISHADS.find((u) => u.id === id);

    // Get data from registry
    const registryEntry = getUpanishadData(id);

    // If Upanishad not found in 108 list
    if (!upanishadInfo) {
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center text-[#E0C097]">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Upanishad Not Found</h1>
                    <p className="text-[#888] mb-6">The requested Upanishad "{id}" does not exist in the Muktika Canon.</p>
                    <button
                        onClick={() => router.push("/student/batch2/upanishads")}
                        className="text-[#C4A35A] hover:underline"
                    >
                        ← Return to 108 Upanishads
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050505] text-[#E0C097] font-sans selection:bg-[#E0C097] selection:text-black">
            {/* Navigation Bar */}
            <UpanishadNavBar
                currentId={id}
                currentName={upanishadInfo.name}
                currentNameSanskrit={upanishadInfo.nameSanskrit}
                veda={upanishadInfo.veda}
            />

            {/* Content Area */}
            <div className="max-w-6xl mx-auto px-6 py-8">
                {registryEntry && registryEntry.data.length > 0 ? (
                    /* Has data - show Universal Viewer */
                    <UniversalUpanishadViewer
                        data={registryEntry.data}
                        metadata={registryEntry.metadata}
                    />
                ) : (
                    /* No data yet - Coming Soon */
                    <div className="flex flex-col items-center justify-center py-20 bg-[#0D0D0D] rounded-xl border border-[#222]">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-900/30 to-amber-800/10 flex items-center justify-center mb-6">
                            <BookOpen className="w-10 h-10 text-[#C4A35A]" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                            {upanishadInfo.name} Upanishad
                        </h2>
                        <p className="text-[#C4A35A] text-lg mb-4">
                            {upanishadInfo.nameSanskrit}
                        </p>
                        <p className="text-[#888] max-w-md text-center mb-6">
                            {upanishadInfo.description}
                        </p>

                        <div className="bg-amber-900/20 rounded-lg px-6 py-4 max-w-sm text-center">
                            <p className="text-amber-200/70 text-sm mb-2">
                                📚 Content is being digitized
                            </p>
                            <p className="text-[#666] text-xs">
                                The verses for this Upanishad are currently being prepared with Sanskrit, Hindi, English translations and word-by-word meanings.
                            </p>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <button
                                onClick={() => router.push("/student/batch2/upanishads")}
                                className="px-4 py-2 bg-amber-900/30 hover:bg-amber-900/50 rounded-full text-amber-200 text-sm transition-all"
                            >
                                ← Browse Other Upanishads
                            </button>
                        </div>

                        {/* Category & Veda Info */}
                        <div className="mt-8 flex gap-4 text-xs text-[#666]">
                            <span className="px-3 py-1 bg-[#1a1a1a] rounded-full">
                                {upanishadInfo.veda}
                            </span>
                            <span className="px-3 py-1 bg-[#1a1a1a] rounded-full">
                                {upanishadInfo.category}
                            </span>
                            <span className="px-3 py-1 bg-[#1a1a1a] rounded-full">
                                Study Order: #{upanishadInfo.studyOrder}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
