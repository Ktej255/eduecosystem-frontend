"use client";

import React from "react";
import {
    Compass, Globe, ShieldCheck,
    Handshake, Zap, Target,
    Scroll, Flag, Map,
    Users, Send, Radio,
    Anchor, Crosshair, AlertTriangle,
    Eye, Sunrise, ArrowRight,
    Plane, Milestone, BookOpen
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ForeignPolicyModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#eff6ff] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-blue-100 selection:text-blue-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#1e40af] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 20 20 L 980 20 L 980 980 L 20 980 Z" fill="none" stroke="#1e40af" strokeWidth="2" strokeDasharray="15 15" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-[#1e40af] opacity-40"></div>
            {children}
        </div>
    </div>
);

const PolicyCard = ({ title, icon, color, children, className = "" }: { title: string, icon: React.ReactNode, color: string, children: React.ReactNode, className?: string }) => (
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

export default function ForeignPolicyModule({ onComplete, isCompleted }: ForeignPolicyModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#1e40af] border-4 border-[#172554] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(30,64,175,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#172554] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 89</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-blue-100 font-bold uppercase tracking-widest text-sm italic underline decoration-white">Global Footprint</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        The Strategic <br /> <span className="text-[#fcd34d] italic drop-shadow-md">Compass</span> <br />
                        <span className="text-blue-100 drop-shadow-md underline decoration-wavy decoration-[#fcd34d] italic text-3xl md:text-5xl">From Idealism to Realism</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl leading-relaxed italic opacity-90">
                        "Non-Alignment to Multi-Alignment. Navigating the stormy seas of geopolitics."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Compass size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: PRINCIPLES & DETERMINANTS */}
            <PhaseHeader
                number="1"
                title="Foundations (The North Star)"
                color="bg-[#4b5563]"
                subtitle="Constitutional Basis & NAM"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <PolicyCard
                    title="Article 51 (DPSP)"
                    icon={<Scroll size={120} className="text-slate-600" />}
                    color="border-slate-600"
                    className="bg-slate-50"
                >
                    <p className="text-sm italic mb-2">"The State shall endeavour to..."</p>
                    <ul className="list-disc pl-4 space-y-2 text-sm text-slate-700 font-bold">
                        <li>Promote international <span className="text-blue-600">Peace & Security</span>.</li>
                        <li>Maintain <span className="text-blue-600">Just & Honourable</span> relations.</li>
                        <li>Foster respect for <span className="text-blue-600">International Law</span>.</li>
                        <li>Encourage settlement by <span className="text-blue-600">Arbitration</span>. [PYQ]</li>
                    </ul>
                </PolicyCard>

                <PolicyCard
                    title="Panchsheel & NAM"
                    icon={<Handshake size={120} className="text-green-600" />}
                    color="border-green-600"
                    className="bg-green-50"
                >
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs font-black text-slate-500 uppercase">Panchsheel (1954)</p>
                            <p className="text-sm font-bold text-green-800">5 Principles of Peaceful Coexistence (Signed with China).</p>
                        </div>
                        <div className="pt-2 border-t border-green-200">
                            <p className="text-xs font-black text-slate-500 uppercase mb-1">Non-Aligned Movement (NAM)</p>
                            <p className="text-sm font-bold text-slate-700">Strategic Autonomy. Not joining US or USSR blocs during Cold War.</p>
                        </div>
                    </div>
                </PolicyCard>
            </div>

            {/* PHASE 2: EVOLUTION */}
            <PhaseHeader
                number="2"
                title="The Journey (Evolution)"
                color="bg-[#2563eb]"
                subtitle="Look East to Act East"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <PolicyCard
                    title="Look East & Act East"
                    icon={<Sunrise size={120} className="text-orange-500" />}
                    color="border-orange-500"
                    className="bg-orange-50"
                >
                    <div className="relative pl-6 border-l-2 border-orange-300 space-y-6">
                        <div className="relative">
                            <div className="absolute -left-[31px] top-1 w-4 h-4 bg-orange-200 rounded-full border-2 border-orange-500"></div>
                            <h4 className="font-black text-orange-800">Look East (1991)</h4>
                            <p className="text-xs text-slate-600">Focused on <span className="underline">Trade/Economy</span> with ASEAN. (PM Narasimha Rao).</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[31px] top-1 w-4 h-4 bg-orange-600 rounded-full border-2 border-orange-800"></div>
                            <h4 className="font-black text-orange-800">Act East (2014)</h4>
                            <p className="text-xs text-slate-600">Focus on <span className="underline">Strategic/Security</span> + Connectivity + Culture. (PM Modi). [PYQ]</p>
                        </div>
                    </div>
                </PolicyCard>

                <PolicyCard
                    title="Neighbourhood First"
                    icon={<Users size={120} className="text-blue-600" />}
                    color="border-blue-600"
                    className="bg-blue-50"
                >
                    <p className="text-sm font-bold text-slate-700 mb-4">
                        Prioritizing immediate neighbors (SAARC/BIMSTEC) for connectivity & development.
                    </p>
                    <div className="bg-white p-3 rounded-lg border border-blue-200">
                        <p className="font-black text-blue-700">Gujral Doctrine (1996)</p>
                        <p className="text-xs text-slate-600">Non-reciprocal generosity towards smaller neighbors.</p>
                    </div>
                </PolicyCard>
            </div>

            {/* PHASE 3: NUCLEAR DOCTRINE */}
            <PhaseHeader
                number="3"
                title="The Red Button (Nuclear)"
                color="bg-[#b91c1c]"
                subtitle="Responsible Power"
            />

            <div className="bg-red-50 border-4 border-dashed border-red-500 rounded-3xl p-8 relative overflow-hidden">
                <Zap size={200} className="absolute -right-10 top-10 text-red-200 opacity-50" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-black text-red-700 uppercase mb-4">Nuclear Doctrine (2003)</h3>
                        <ul className="space-y-3 text-sm font-bold text-red-900">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-600 rounded-full" /> <span className="underline">No First Use (NFU):</span> Weapons only for retaliation.</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-600 rounded-full" /> <span className="underline">Credible Minimum Deterrence:</span> Sufficient arsenal to survive a strike.</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-600 rounded-full" /> <span className="underline">Civilian Control:</span> Nuclear Command Authority (PM heads Political Council).</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-xl rotate-2 border-2 border-red-200 flex flex-col items-center">
                        <AlertTriangle size={48} className="text-yellow-500 mb-2" />
                        <h4 className="font-black text-slate-800 uppercase text-center">NCA Structure</h4>
                        <div className="mt-4 w-full space-y-2">
                            <div className="bg-red-100 p-2 text-center rounded text-xs font-bold text-red-800 border border-red-300">Political Council (PM)</div>
                            <div className="flex justify-center"><ArrowRight className="rotate-90 text-slate-400" size={16} /></div>
                            <div className="bg-slate-100 p-2 text-center rounded text-xs font-bold text-slate-800 border border-slate-300">Executive Council (NSA)</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER: CONNECT CENTRAL ASIA */}
            <div className="mt-8 p-8 bg-sky-100 border-4 border-sky-400 rounded-[2rem] relative overflow-hidden flex flex-col items-center text-center shadow-lg">
                <Plane className="text-sky-600 mb-4" size={48} />
                <h4 className="text-2xl font-black uppercase mb-2 text-sky-800">Connect Central Asia</h4>
                <p className="text-sm font-bold text-sky-700 max-w-xl mb-4">
                    Reviving ancient ties for Energy Security (Uranium, Oil) and Strategic Depth.
                    Key Projects: <span className="underline">TAPI Pipeline</span>, <span className="underline">INSTC Corridor</span>.
                </p>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#1e40af] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_30px_-5px_rgba(30,64,175,0.5)]"
                        : "bg-[#1e40af] hover:bg-blue-900 text-white shadow-[0_10px_40px_-10px_rgba(30,64,175,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <Anchor size={32} className="animate-bounce" />
                            DIPLOMAT CERTIFIED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Compass size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 89 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">NAM • NFU • Gujral Doctrine.</p>
            </div>
        </ScrapbookContainer>
    );
}
