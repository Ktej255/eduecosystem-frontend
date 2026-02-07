"use client";

import React, { useState } from "react";
import {
    Users, AlertTriangle, ShieldAlert,
    Orbit, Layers, MessageSquare,
    Gavel, Scale, Lock, Key
} from "lucide-react";

interface StateCouncilModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

// --- Design System: The Smaller Orbits (State Solar System) ---

const OrbitContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#f1f5f9] text-slate-900">
        {/* Orbital Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-300 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[size:40px_40px] bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)]"></div>

        <div className="max-w-5xl mx-auto space-y-16 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const OrbitCard = ({ children, title, icon: Icon, color = "green", className = "" }: { children: React.ReactNode, title: string, icon?: any, color?: "green" | "red" | "grey", className?: string }) => {
    const styles = {
        green: "bg-emerald-50 border-emerald-200 text-emerald-900 shadow-emerald-900/10",
        red: "bg-red-50 border-red-200 text-red-900 shadow-red-900/10",
        grey: "bg-slate-50 border-slate-200 text-slate-900 shadow-slate-900/10"
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

export default function StateCouncilModule({ onComplete, isCompleted }: StateCouncilModuleProps) {
    const [showCabinet, setShowCabinet] = useState(false);

    return (
        <OrbitContainer>
            {/* HERO */}
            <div className="text-center py-12 relative">
                <div className="inline-block relative">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-slate-300">
                        <Orbit size={180} className="animate-spin-slow" />
                    </div>
                    <div className="relative z-10 flex flex-col items-center">
                        <Users size={64} className="text-emerald-700 mb-4" />
                        <h1 className="text-4xl md:text-6xl font-black text-slate-800 font-serif mb-2">
                            STATE COUNCIL OF MINISTERS
                        </h1>
                        <p className="text-xl font-bold uppercase tracking-widest text-slate-600">
                            "The Smaller Orbits"
                        </p>
                    </div>
                </div>
            </div>

            {/* PHASE 1: THE DISCRETION TRAP (ART 163) */}
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-red-400 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-red-700">Phase 1: The Discretion Trap</h2>
                    <div className="h-px bg-red-400 flex-1"></div>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-dashed border-2 border-red-300 relative">
                    {/* Caution Tape */}
                    <div className="absolute -top-3 left-0 w-full h-6 bg-yellow-400 flex items-center justify-center overflow-hidden border-y-2 border-black rotate-1 shadow-md">
                        <div className="flex gap-4 animate-marquee text-xs font-black uppercase tracking-widest text-black">
                            <span>Caution: Art 163 vs Art 74</span>   <span>Caution: Art 163 vs Art 74</span>   <span>Caution: Art 163 vs Art 74</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg text-red-900 flex items-center gap-2">
                                <Scale size={20} /> The Difference
                            </h3>
                            <div className="p-4 bg-white rounded shadow-sm border border-red-100">
                                <strong className="block text-slate-500 text-xs mb-1">CENTRE (Art 74)</strong>
                                <p className="text-sm font-serif">"President <span className="underline decoration-wavy decoration-red-500">shall</span> act in accordance with advice."</p>
                                <div className="mt-2 text-xs text-slate-400">(Binding, No Discretion mentioned)</div>
                            </div>
                            <div className="p-4 bg-white rounded shadow-sm border border-red-100">
                                <strong className="block text-slate-500 text-xs mb-1">STATE (Art 163)</strong>
                                <p className="text-sm font-serif">"Exercise functions... <span className="bg-red-100 px-1 rounded font-bold text-red-700">except in so far as he is required to exercise his discretion</span>."</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="text-center space-y-2">
                                <ShieldAlert size={48} className="mx-auto text-red-600" />
                                <p className="font-bold text-red-800">Judicial Review?</p>
                                <p className="text-sm text-slate-600 bg-white p-2 rounded shadow-sm">
                                    Advice tendered by Ministers CANNOT be inquired into in any court.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 2: COMPOSITION & 91ST AMENDMENT */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-emerald-600 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-emerald-800">Phase 2: Size & Responsibility</h2>
                    <div className="h-px bg-emerald-600 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* 91ST AMENDMENT RULER */}
                    <OrbitCard title="Size Limit (91st AA, 2003)" icon={Layers} color="green">
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-full bg-slate-200 h-4 rounded-full overflow-hidden relative">
                                    <div className="w-[15%] h-full bg-emerald-500"></div>
                                </div>
                                <span className="font-bold text-emerald-700">15%</span>
                            </div>
                            <p className="text-slate-600">
                                Total Ministers (incl. CM) shall not exceed 15% of total strength of Legislative Assembly.
                            </p>
                            <div className="bg-emerald-100 p-2 rounded text-emerald-800 border-l-4 border-emerald-500">
                                <strong>Minimum Strength:</strong> 12 Ministers.
                                <span className="block text-xs mt-1 opacity-70">(Unlike Centre where no minimum is fixed explicitly in Constitution)</span>
                            </div>
                        </div>
                    </OrbitCard>

                    {/* RESPONSIBILITY CARDS */}
                    <OrbitCard title="Responsibility" icon={MessageSquare} color="grey">
                        <div className="space-y-4">
                            <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
                                <strong className="block text-slate-800 border-b pb-1 mb-1">Collective (Art 164)</strong>
                                <p className="text-sm text-slate-600">To the Legislative <span className="font-bold text-emerald-700">Assembly</span> (Not Council!).</p>
                                <p className="text-xs italic mt-1 text-slate-400">"Swim together, sink together."</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
                                <strong className="block text-slate-800 border-b pb-1 mb-1">Individual (Art 164)</strong>
                                <p className="text-sm text-slate-600">To the <span className="font-bold text-orange-700">Governor</span> (Pleasure Principle).</p>
                            </div>
                        </div>
                    </OrbitCard>
                </div>
            </div>

            {/* PHASE 3: THE KITCHEN CABINET */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-blue-600 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-blue-800">Phase 3: Inner Circles</h2>
                    <div className="h-px bg-blue-600 flex-1"></div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200 flex flex-col items-center">
                    <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-slate-700">
                        <Lock size={20} /> The Hierarchy of Power
                    </h3>

                    {/* Concentric Circles Visualization */}
                    <div className="relative w-72 h-72 flex items-center justify-center">
                        {/* Outer: Council */}
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-300 flex items-start justify-center pt-2">
                            <span className="bg-white px-2 text-xs font-bold text-slate-400">Council of Ministers</span>
                        </div>

                        {/* Middle: Cabinet */}
                        <div className={`absolute w-48 h-48 rounded-full border-2 border-emerald-500 bg-emerald-50 flex items-start justify-center pt-2 transition-all duration-500 ${showCabinet ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}`}>
                            <span className="bg-emerald-100 px-2 text-xs font-bold text-emerald-700">Cabinet</span>
                        </div>

                        {/* Inner: Kitchen Cabinet */}
                        <div className="absolute w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform"
                            onClick={() => setShowCabinet(!showCabinet)}
                        >
                            <div className="text-center">
                                <Key size={20} className="mx-auto mb-1" />
                                <span className="text-xs font-bold block leading-tight">Kitchen<br />Cabinet</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center max-w-lg space-y-2">
                        <p className="font-mono text-sm text-slate-600">
                            <strong>Kitchen Cabinet:</strong> Informal body. Consists of CM + 2-4 influential colleagues (may include friends/family).
                        </p>
                        <p className="text-xs text-slate-400 italic">
                            *Real power center, though not mentioned in Constitution.
                        </p>
                    </div>
                </div>
            </div>

            {/* FOOTER: OATH */}
            <div className="mt-16 text-center">
                <div className="inline-block bg-white p-6 rounded-lg shadow-md border-t-4 border-emerald-500">
                    <Gavel size={32} className="mx-auto mb-4 text-emerald-600" />
                    <p className="font-serif text-lg italic text-slate-700 mb-4">
                        "I will do right to all manner of people... without fear or favour, affection or ill-will."
                    </p>

                    <button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
                            px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all
                            ${isCompleted
                                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg'
                            }
                        `}
                    >
                        {isCompleted ? "Oath Taken" : "Administer Oath"}
                    </button>
                </div>
            </div>
        </OrbitContainer>
    );
}
