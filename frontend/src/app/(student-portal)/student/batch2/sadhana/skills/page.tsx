"use client";

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useSadhanaProgress } from '@/components/batch2/sadhana/hooks/useSadhanaProgress';

const LotusVisualizer = dynamic(
    () => import('@/components/batch2/sadhana/Sadhaka/LotusVisualizer'),
    { ssr: false }
);

const SkillsExplorer = dynamic(
    () => import('@/components/batch2/sadhana/Sadhaka/SkillsExplorer'),
    { ssr: false }
);

export default function SkillsPage() {
    const { progress } = useSadhanaProgress();
    const [view, setView] = useState<"map" | "list">("map");

    return (
        <div className="min-h-screen bg-[#FDF8F0] p-4 md:p-8">
            <div className="max-w-7xl mx-auto mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-amber-950">36 Skills Ascendant</h1>
                    <p className="text-amber-800/80">The complete competency matrix for the modern disciple.</p>
                </div>
                <div className="bg-amber-100 p-1 rounded-xl flex gap-1 border border-amber-200 shadow-sm w-max">
                    <button
                        onClick={() => setView("map")}
                        className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${view === "map" ? "bg-white text-amber-900 shadow-sm" : "text-amber-700/60 hover:text-amber-800"}`}
                    >
                        Map View
                    </button>
                    <button
                        onClick={() => setView("list")}
                        className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${view === "list" ? "bg-white text-amber-900 shadow-sm" : "text-amber-700/60 hover:text-amber-800"}`}
                    >
                        Explorer
                    </button>
                </div>
            </div>

            <div className="bg-card rounded-3xl p-6 md:p-10 shadow-sm border border-amber-200 min-h-[70vh] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-50 via-transparent to-transparent opacity-50" />

                <div className="relative z-10 w-full h-full flex items-center justify-center">
                    {view === "map" ? <LotusVisualizer skills={progress.skills} /> : <SkillsExplorer skillProgress={progress.skills} />}
                </div>
            </div>
        </div>
    );
}
