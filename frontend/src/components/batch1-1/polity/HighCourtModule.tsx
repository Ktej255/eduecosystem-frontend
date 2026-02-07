"use client";

import React, { useState } from "react";
import {
    Scale, Shield, Map, Gavel,
    Scroll, BookOpen, Landmark,
    ArrowUpRight, AlertCircle,
    DollarSign, Briefcase
} from "lucide-react";

interface HighCourtModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

// --- Design System: The Regional Guardian (State Pillar) ---

const GuardianContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#f0fdfa] text-slate-900">
        {/* Map Texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')]"></div>

        <div className="max-w-5xl mx-auto space-y-16 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const GuardianCard = ({ children, title, icon: Icon, color = "teal", className = "" }: { children: React.ReactNode, title: string, icon?: any, color?: "teal" | "gold" | "black", className?: string }) => {
    const styles = {
        teal: "bg-teal-50 border-teal-200 text-teal-900 shadow-teal-900/10",
        gold: "bg-yellow-50 border-yellow-200 text-yellow-900 shadow-yellow-900/10",
        black: "bg-slate-50 border-slate-200 text-slate-900 shadow-slate-900/10"
    };

    return (
        <div className={`p-6 border-2 rounded-xl shadow-lg relative ${styles[color]} ${className}`}>
            <div className="flex items-center gap-3 mb-4 pb-2 border-b border-current opacity-60">
                {Icon && <Icon size={24} />}
                <h3 className="text-xl font-bold font-serif uppercase tracking-wider">{title}</h3>
            </div>
            {children}
        </div>
    );
};

export default function HighCourtModule({ onComplete, isCompleted }: HighCourtModuleProps) {
    return (
        <GuardianContainer>
            {/* HERO */}
            <div className="text-center py-12 relative">
                <div className="inline-block relative">
                    <div className="flex justify-center mb-4">
                        <Landmark size={100} className="text-teal-800" />
                    </div>
                    <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-teal-200 rounded-full blur-3xl opacity-30"></div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-800 font-serif mb-2">
                        HIGH COURT
                    </h1>
                    <p className="text-xl font-bold uppercase tracking-widest text-teal-700">
                        "The Regional Guardian"
                    </p>
                </div>
            </div>

            {/* PHASE 1: ORIGINS & ORGANIZATION */}
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-teal-500 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-teal-800">Phase 1: Roots & Reach</h2>
                    <div className="h-px bg-teal-500 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* TIMELINE SCROLL */}
                    <GuardianCard title="Origins (1862)" icon={Scroll} color="black">
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex gap-4 items-center">
                                <div className="font-bold text-slate-500 w-16 text-right">1862</div>
                                <div className="flex-1 bg-white p-2 rounded border border-slate-200">
                                    Calcutta, Bombay, Madras (Oldest).
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="font-bold text-teal-600 w-16 text-right">1866</div>
                                <div className="flex-1 bg-white p-2 rounded border border-slate-200">
                                    Allahabad (4th).
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="font-bold text-teal-600 w-16 text-right">Now</div>
                                <div className="flex-1 bg-white p-2 rounded border border-slate-200">
                                    <span className="font-bold text-xl text-teal-700">25</span> High Courts.
                                </div>
                            </div>
                        </div>
                    </GuardianCard>

                    {/* COMMON COURTS MAP */}
                    <GuardianCard title="Jurisdiction (7th AA, 1956)" icon={Map} color="teal">
                        <div className="space-y-4 text-sm">
                            <p className="font-bold text-slate-700">
                                Parliament can establish a <span className="underline decoration-wavy decoration-teal-500">Common High Court</span> for 2 or more states.
                            </p>
                            <div className="bg-white/60 p-3 rounded space-y-2 border border-teal-100">
                                <div className="flex justify-between">
                                    <span>Punjab & Haryana HC</span>
                                    <span className="font-bold text-teal-800">Has Chandigarh</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Bombay HC</span>
                                    <span className="font-bold text-teal-800">Has Goa + D&NH</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Guwahati HC</span>
                                    <span className="font-bold text-teal-800">4 NE States</span>
                                </div>
                            </div>
                        </div>
                    </GuardianCard>
                </div>
            </div>

            {/* PHASE 2: INDEPENDENCE & THE PENSION TWIST */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-yellow-500 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-yellow-800">Phase 2: The Shield</h2>
                    <div className="h-px bg-yellow-500 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* APPOINTMENT CARD */}
                    <GuardianCard title="Appointment Logic" icon={UserPlus as any} color="black">
                        <div className="text-center space-y-2">
                            <Briefcase size={32} className="mx-auto text-slate-700" />
                            <p className="font-bold text-lg">President Appoints</p>
                            <div className="text-xs text-slate-500 bg-slate-100 p-2 rounded inline-block">
                                Consultation with CJI + Governor + CJ of HC
                            </div>
                            <p className="mt-2 text-sm italic">
                                "Transfer is also by President (on CJI advice)."
                            </p>
                        </div>
                    </GuardianCard>

                    {/* THE PENSION TWIST ALERT */}
                    <div className="bg-yellow-50 p-6 rounded-xl border-dashed border-2 border-yellow-400 relative overflow-hidden">
                        <div className="absolute -right-6 -top-6 text-yellow-200 opacity-50">
                            <DollarSign size={120} />
                        </div>
                        <h3 className="font-bold text-yellow-900 text-lg mb-4 flex items-center gap-2">
                            <AlertCircle className="text-yellow-600" /> The Financial Twist
                        </h3>

                        <div className="grid grid-cols-2 gap-4 text-center text-sm font-sans relative z-10">
                            <div className="bg-white p-3 rounded shadow-sm border border-yellow-200">
                                <strong className="block text-slate-500 uppercase text-xs mb-1">Salaries</strong>
                                <span className="font-bold text-teal-700">State</span>
                                <div className="text-[10px] text-slate-400">Consolidated Fund</div>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm border-2 border-red-200 relative">
                                <div className="absolute -top-2 -right-2 bg-red-500 text-white px-1 rounded text-[10px] font-bold">PYQ Alert</div>
                                <strong className="block text-slate-500 uppercase text-xs mb-1">Pensions</strong>
                                <span className="font-bold text-red-700">Centre (India)</span>
                                <div className="text-[10px] text-slate-400">Consolidated Fund</div>
                            </div>
                        </div>
                        <p className="mt-4 text-xs text-center italic text-yellow-800">
                            "Served the State, but Pension comes from the Centre."
                        </p>
                    </div>
                </div>
            </div>

            {/* PHASE 3: WRIT JURISDICTION (WIDER!) */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-teal-600 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-teal-800">Phase 3: The Writ Sword</h2>
                    <div className="h-px bg-teal-600 flex-1"></div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-xl border border-teal-100 flex flex-col items-center">
                    <div className="flex items-end gap-8 mb-6">
                        {/* SC SHIELD */}
                        <div className="text-center opacity-60">
                            <Shield size={64} className="mx-auto text-slate-400 mb-2" />
                            <strong className="block text-slate-600">Supreme Court</strong>
                            <span className="text-xs font-mono bg-slate-100 px-1 rounded">Art 32</span>
                            <div className="mt-2 text-[10px] max-w-[100px] leading-tight text-slate-500">
                                Only Fundamental Rights
                            </div>
                        </div>

                        {/* HC SHIELD (BIGGER) */}
                        <div className="text-center relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider whitespace-nowrap">
                                Wider Scope
                            </div>
                            <Shield size={96} className="mx-auto text-teal-600 mb-2 drop-shadow-lg" />
                            <strong className="block text-teal-900 text-lg">High Court</strong>
                            <span className="text-sm font-mono bg-teal-100 px-2 rounded font-bold text-teal-800">Art 226</span>
                            <div className="mt-2 text-xs max-w-[140px] leading-tight font-bold text-teal-700 bg-teal-50 p-1 rounded">
                                Fundamental Rights + <span className="underline decoration-wavy decoration-teal-400">Any Other Purpose</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="mt-16 text-center">
                <button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`
                        px-12 py-4 rounded font-bold uppercase tracking-widest transition-all clip-path-polygon
                        ${isCompleted
                            ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                            : 'bg-teal-800 text-white hover:bg-teal-700 shadow-[4px_4px_0px_#0f766e] active:shadow-none active:translate-x-1 active:translate-y-1'
                        }
                    `}
                    style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                >
                    {isCompleted ? "Justice Delivered" : "Issue Writ (Art 226)"}
                </button>
            </div>
        </GuardianContainer>
    );
}
