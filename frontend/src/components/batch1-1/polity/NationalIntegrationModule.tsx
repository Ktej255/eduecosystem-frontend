"use client";

import React from "react";
import {
    Shield, Swords, Heart,
    Users, Map, Languages,
    AlertTriangle, Divide, CheckCircle2,
    Building2, Scale, Gavel,
    Flag, Globe, Hammer,
    Target, Flame, XCircle,
    Handshake, Layers, Lock,
    Unlock, BookOpen, UserCheck,
    Mic2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NationalIntegrationModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fff7ed] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-orange-100 selection:text-orange-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#ea580c] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 20 20 L 980 20 L 980 980 L 20 980 Z" fill="none" stroke="#ea580c" strokeWidth="2" strokeDasharray="20 10" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ea580c] via-white to-[#16a34a] opacity-60"></div>
            {children}
        </div>
    </div>
);

const IntegrationCard = ({ title, icon, color, children, className = "" }: { title: string, icon: React.ReactNode, color: string, children: React.ReactNode, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            {icon}
        </div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-800 relative z-10 font-bold leading-relaxed">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color, subtitle }: { number: string, title: string, color: string, subtitle?: string }) => (
    <div className="flex flex-col gap-2 my-8">
        <div className="flex items-center gap-4">
            <div className={`w-12 h-12 ${color} text-white rounded-lg shadow-xl flex items-center justify-center font-black text-xl rotate-[-2deg] border-2 border-white`}>
                {number}
            </div>
            <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
                {title}
            </h2>
            <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
        </div>
        {subtitle && <p className="text-slate-500 font-bold italic ml-16">{subtitle}</p>}
    </div>
);

export default function NationalIntegrationModule({ onComplete, isCompleted }: NationalIntegrationModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-gradient-to-br from-[#ea580c] to-[#c2410c] border-4 border-[#9a3412] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(234,88,12,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#9a3412] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 88</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-orange-100 font-bold uppercase tracking-widest text-sm italic underline decoration-white">Unity in Diversity</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        The Cracked <br /> <span className="text-[#fcd34d] italic drop-shadow-md">Mirror</span> <br />
                        <span className="text-orange-100 drop-shadow-md underline decoration-wavy decoration-[#fcd34d] italic text-3xl md:text-5xl">vs The Golden Glue</span>
                    </h1>
                    <p className="text-xl text-orange-100 max-w-2xl leading-relaxed italic opacity-90">
                        "Communalism, Regionalism, Linguism... The Arrows attacking the Shield of Unity."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Shield size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: THE OBSTACLES (ARROWS) */}
            <PhaseHeader
                number="1"
                title="The Arrows (Obstacles)"
                color="bg-[#b91c1c]"
                subtitle="The Enemies of Unity"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <IntegrationCard
                    title="Communalism (The Poison)"
                    icon={<Flame size={120} className="text-red-600" />}
                    color="border-red-600"
                    className="bg-red-50"
                >
                    <p className="text-sm">Allegiance to one's own group <span className="underline font-black text-red-700">over</span> the nation.</p>
                    <div className="bg-white p-4 rounded-xl border-l-4 border-red-600 shadow-sm mt-4">
                        <h5 className="font-black text-red-700 uppercase mb-2">Stages</h5>
                        <ul className="list-disc pl-4 space-y-1 text-xs font-bold text-slate-700">
                            <li><span className="text-blue-600">Mild:</span> Interests differ.</li>
                            <li><span className="text-orange-600">Moderate:</span> Interests diverge.</li>
                            <li><span className="text-red-600">Extreme:</span> Interests are hostile (Riots).</li>
                        </ul>
                    </div>
                </IntegrationCard>

                <IntegrationCard
                    title="Regionalism & Linguism"
                    icon={<Map size={120} className="text-orange-600" />}
                    color="border-orange-600"
                    className="bg-orange-50"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Map className="text-orange-600 shrink-0" />
                            <p className="text-sm font-bold text-slate-700">Sons of the Soil theory (Employment for locals).</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Languages className="text-blue-600 shrink-0" />
                            <p className="text-sm font-bold text-slate-700">Language Riots (Anti-Hindi, Anti-English agitations).</p>
                        </div>
                    </div>
                </IntegrationCard>
            </div>

            {/* PHASE 2: THE SHIELD (NIC) */}
            <PhaseHeader
                number="2"
                title="The Shield (Institutions)"
                color="bg-[#16a34a]"
                subtitle="National Integration Council"
            />

            <div className="bg-green-50 border-4 border-dashed border-green-600 rounded-3xl p-8 relative overflow-hidden">
                <Handshake size={200} className="absolute -right-10 top-10 text-green-200 opacity-50" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-black text-green-700 uppercase mb-4">National Integration Council (NIC)</h3>
                        <ul className="space-y-3 text-sm font-bold">
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600" /> <span className="text-slate-800">Established:</span> 1961 (By Nehru).</li>
                            <li className="flex items-center gap-2"><UserCheck className="text-green-600" /> <span className="text-slate-800">Chairman:</span> Prime Minister. [PYQ]</li>
                            <li className="flex items-center gap-2"><Users className="text-green-600" /> <span className="text-slate-800">Members:</span> CMs, Union Ministers, Leaders of Opposition.</li>
                            <li className="flex items-center gap-2"><Globe className="text-green-600" /> <span className="text-slate-800">Note:</span> It is <span className="text-red-500 underline">Effectively Defunct</span> (Last met in 2013).</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-xl rotate-2 border-2 border-green-200">
                        <h4 className="font-black text-green-800 uppercase mb-2 text-center">National Foundation for Communal Harmony</h4>
                        <p className="text-xs text-center text-slate-600 font-bold">Under Ministry of Home Affairs (MHA). Provides assistance to children of riot victims.</p>
                        <div className="flex justify-center mt-4">
                            <Heart className="text-red-500 fill-red-500 animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER: EMOTIONAL INTEGRATION */}
            <div className="mt-8 p-8 bg-gradient-to-r from-orange-500 via-white to-green-500 p-[4px] rounded-[2rem] shadow-lg">
                <div className="bg-white rounded-[1.8rem] p-8 flex flex-col items-center text-center h-full">
                    <Globe className="text-blue-600 mb-4 animate-spin-slow" size={48} />
                    <h4 className="text-2xl font-black uppercase mb-2 text-slate-700">Dr. Radhakrishnan's Vision</h4>
                    <p className="text-sm font-bold text-slate-600 max-w-xl mb-4 italic">
                        "National Integration cannot be built by brick and mortar; it cannot be built by chisel and hammer. It has to grow silently in the minds and hearts of men."
                    </p>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#ea580c] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#ea580c] hover:bg-orange-800 text-white shadow-[0_10px_40px_-10px_rgba(234,88,12,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <CheckCircle2 size={32} className="animate-bounce" />
                            UNITY KEEPER
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Shield size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 88 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">NIC • Sons of Soil • Harmony.</p>
            </div>
        </ScrapbookContainer>
    );
}
