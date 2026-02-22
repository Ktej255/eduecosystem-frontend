"use client";

import React from "react";
import {
    Anchor, Users, PenTool, Globe, User,
    MessageSquare, AlertCircle, Briefcase,
    Network, ArrowRight, Star
} from "lucide-react";

interface PrimeMinisterModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

// --- Design System: The Keystone (Official Files) ---

const PMOContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#eef2ff] text-foreground">
        {/* Blue Ink Grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e40af_1px,transparent_1px),linear-gradient(to_bottom,#1e40af_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto space-y-12 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

// File Card Style
const FileCard = ({ children, title, color = "blue", className = "" }: { children: React.ReactNode, title: string, color?: "blue" | "slate", className?: string }) => {
    const styles = {
        blue: "border-blue-700 bg-card text-blue-900 shadow-[4px_4px_0px_#1e40af]",
        slate: "border-slate-600 bg-muted text-foreground shadow-[4px_4px_0px_#4b5563]",
    };

    return (
        <div className={`border-2 p-6 rounded-xl ${styles[color]} relative ${className}`}>
            {/* Paper Clip Visual */}
            <div className="absolute -top-3 right-6 w-4 h-8 border-2 border-slate-400 rounded-full bg-slate-200 z-10"></div>

            <h3 className="text-xl font-bold mb-4 font-serif border-b-2 border-dashed border-current pb-2">{title}</h3>
            {children}
        </div>
    );
}

const FlowArrow = () => (
    <div className="flex justify-center my-2 text-blue-300">
        <ArrowRight className="rotate-90 md:rotate-0" size={32} />
    </div>
);

export default function PrimeMinisterModule({ onComplete, isCompleted }: PrimeMinisterModuleProps) {
    return (
        <PMOContainer>
            {/* HERO */}
            <div className="text-center py-10">
                <div className="inline-block relative">
                    <div className="absolute -inset-2 bg-blue-200 opacity-50 blur-lg rounded-full"></div>
                    <div className="relative border-4 border-blue-900 p-8 bg-card rounded-lg shadow-2xl -rotate-1">
                        <div className="flex justify-center text-blue-600 mb-2">
                            <Anchor size={48} />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-blue-950 font-serif mb-2">
                            The Prime Minister
                        </h1>
                        <p className="text-blue-800 font-handwriting text-xl">
                            "The Keystone of the Cabinet Arch"
                        </p>
                    </div>
                </div>
            </div>

            {/* PHASE 1: APPOINTMENT FLOWCHART */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="h-0.5 flex-1 bg-blue-300"></div>
                    <h2 className="text-3xl font-bold text-blue-900 font-handwriting">Phase 1: Appointment (Art 75)</h2>
                    <div className="h-0.5 flex-1 bg-blue-300"></div>
                </div>

                <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 text-center">
                    <div className="bg-card border-2 border-slate-400 p-4 rounded-lg shadow-md flex-1 max-w-sm mx-auto flex flex-col justify-center">
                        <strong className="block text-lg">General Rule</strong>
                        <span className="text-muted-foreground">President appoints leader of Majority Party in Lok Sabha.</span>
                    </div>

                    <FlowArrow />

                    <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded-lg shadow-md flex-1 max-w-sm mx-auto relative">
                        <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 rounded-full p-1 border-2 border-white shadow-sm">
                            <AlertCircle size={20} />
                        </div>
                        <strong className="block text-lg text-yellow-900">Hung Parliament?</strong>
                        <span className="text-muted-foreground text-sm">President's Discretion: Appoint leader of largest party/coalition.</span>
                        <div className="mt-2 bg-card/50 p-1 border border-yellow-300 rounded text-xs font-bold text-red-600">
                            Must prove confidence in 1 Month.
                        </div>
                    </div>

                    <FlowArrow />

                    <div className="bg-blue-50 border-2 border-blue-400 p-4 rounded-lg shadow-md flex-1 max-w-sm mx-auto">
                        <strong className="block text-lg text-blue-900">Delhi HC (1980)</strong>
                        <span className="text-muted-foreground text-sm">Can be appointed PM *before* becoming MP.</span>
                        <div className="mt-2 bg-card/50 p-1 border border-blue-300 rounded text-xs font-bold text-blue-600">
                            Must become MP (LS or RS) within 6 Months.
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 2: POWERS (THE HUB) */}
            <div className="space-y-6 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-0.5 flex-1 bg-blue-300"></div>
                    <h2 className="text-3xl font-bold text-blue-900 font-handwriting">Phase 2: The Power Hub</h2>
                    <div className="h-0.5 flex-1 bg-blue-300"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* CABINET HUB */}
                    <FileCard title="Captain of the Ship" color="blue">
                        <div className="flex justify-center mb-4 text-blue-400 opacity-50">
                            <Anchor size={40} />
                        </div>
                        <ul className="space-y-3 font-handwriting text-sm">
                            <li className="flex gap-2">
                                <span className="font-bold text-blue-600">1.</span>
                                Recommends ministers for appointment.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold text-blue-600">2.</span>
                                Allocates & Reshuffles portfolios.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold text-blue-600">3.</span>
                                Presides over Cabinet meetings.
                            </li>
                            <li className="bg-blue-100 p-2 rounded border border-blue-300 text-blue-900 font-bold text-center mt-2">
                                If PM dies/resigns &rarr; Council Dissolves. (Keystone).
                            </li>
                        </ul>
                    </FileCard>

                    {/* PRESIDENT BRIDGE */}
                    <FileCard title="The Bridge (Art 78)" color="slate">
                        <div className="flex justify-center mb-4 text-muted-foreground opacity-50">
                            <Network size={40} />
                        </div>
                        <p className="mb-2 text-sm text-center italic">Principal channel of communication between President & Council.</p>
                        <div className="space-y-3 font-handwriting text-sm">
                            <div className="p-2 border border-border rounded bg-card">
                                <strong>Communicate:</strong> All decisions of Council.
                            </div>
                            <div className="p-2 border border-border rounded bg-card">
                                <strong>Furnish:</strong> Info called for by President.
                            </div>
                        </div>
                    </FileCard>

                    {/* PARLIAMENT LEADER */}
                    <FileCard title="Leader of House" color="blue">
                        <div className="flex justify-center mb-4 text-blue-400 opacity-50">
                            <Users size={40} />
                        </div>
                        <ul className="space-y-3 font-handwriting text-sm">
                            <li className="flex gap-2">
                                <span className="font-bold text-blue-600">&bull;</span>
                                Advises Prez on summoning sessions.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold text-blue-600">&bull;</span>
                                Can recommend <strong>Dissolution of Lok Sabha</strong> at any time.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold text-blue-600">&bull;</span>
                                Announces Govt policies on floor.
                            </li>
                        </ul>
                    </FileCard>
                </div>
            </div>

            {/* PHASE 3: ROLES & QUOTES */}
            <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">
                {/* CHAIRMAN CARDS */}
                <div className="bg-card border-2 border-slate-800 p-6 rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,0.1)] rotate-1">
                    <h3 className="font-bold font-serif text-xl border-b-2 border-slate-800 pb-2 mb-4">Chairman of Bodies [High Yield]</h3>
                    <div className="space-y-2 font-handwriting">
                        {["NITI Aayog", "National Development Council (NDC)", "National Integration Council", "Inter-State Council (Art 263)", "National Water Resources Council"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* QUOTES STICKY NOTES */}
                <div className="relative h-64">
                    <div className="absolute top-0 left-0 bg-yellow-200 p-4 w-64 shadow-md rotate-[-2deg] font-handwriting border border-yellow-300">
                        <span className="block font-bold text-yellow-900 mb-1">Lord Morley</span>
                        "Primus Inter Pares" (First among equals).
                    </div>
                    <div className="absolute top-20 right-0 bg-green-200 p-4 w-64 shadow-md rotate-[3deg] font-handwriting border border-green-300">
                        <span className="block font-bold text-green-900 mb-1">Ivor Jennings</span>
                        "Sun around which planets revolve."
                    </div>
                    <div className="absolute bottom-0 left-10 bg-pink-200 p-4 w-64 shadow-md rotate-[-1deg] font-handwriting border border-pink-300">
                        <span className="block font-bold text-pink-900 mb-1">H.R.G. Greaves</span>
                        "Master of the Government."
                    </div>
                </div>
            </div>

            {/* FOOTER: SHADOW CABINET */}
            <div className="mt-16 bg-slate-900 text-white p-8 rounded-xl shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10">
                    <User size={200} />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold font-serif text-slate-200 mb-2">The Shadow Cabinet</h3>
                        <p className="text-muted-foreground font-handwriting italic text-lg mb-4">"A government in waiting."</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="p-3 bg-card/10 rounded border border-white/20">
                                <strong className="block text-blue-300">UK (Britain)</strong>
                                Unique Institution. Opposition forms parallel cabinet.
                            </div>
                            <div className="p-3 bg-card/10 rounded border border-white/20">
                                <strong className="block text-orange-300">India</strong>
                                No such institution.
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={onComplete}
                            disabled={isCompleted}
                            className={`
                                px-8 py-4 text-lg font-bold font-serif rounded shadow-lg transition-all
                                ${isCompleted
                                    ? 'bg-blue-600 text-white ring-2 ring-blue-300'
                                    : 'bg-card text-blue-900 hover:bg-blue-50'
                                }
                            `}
                        >
                            {isCompleted ? "Cabinet Established" : "Form the Government"}
                        </button>
                    </div>
                </div>
            </div>
        </PMOContainer>
    );
}
