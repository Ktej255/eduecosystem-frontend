"use client";

import React from "react";
import {
    Umbrella, CloudRain, Sun,
    Heart, ShieldCheck, Stethoscope,
    Briefcase, TreePine, Wifi,
    Moon, Truck, BookOpen,
    Gavel, Scale, Hand,
    Lock, Unlock, Eye,
    Zap, AlertTriangle, UserCheck,
    Globe, PhoneOff, Music, Activity
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ScopeOfArticle21ModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0fdf4] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-green-100 selection:text-green-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#15803d] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 20 20 L 980 20 L 980 980 L 20 980 Z" fill="none" stroke="#15803d" strokeWidth="2" strokeDasharray="15 15" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#15803d] to-[#1e40af] opacity-60"></div>
            {children}
        </div>
    </div>
);

const RightCard = ({ title, icon, color, children, className = "" }: { title: string, icon: React.ReactNode, color: string, children: React.ReactNode, className?: string }) => (
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

export default function ScopeOfArticle21Module({ onComplete, isCompleted }: ScopeOfArticle21ModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-gradient-to-br from-[#15803d] to-[#166534] border-4 border-[#14532d] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(21,128,61,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#14532d] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 92</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-green-100 font-bold uppercase tracking-widest text-sm italic underline decoration-white">Life & Liberty</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        The Expanding <br /> <span className="text-[#fcd34d] italic drop-shadow-md">Umbrella</span> <br />
                        <span className="text-green-100 drop-shadow-md underline decoration-wavy decoration-[#fcd34d] italic text-3xl md:text-5xl">Scope of Article 21</span>
                    </h1>
                    <p className="text-xl text-green-100 max-w-2xl leading-relaxed italic opacity-90">
                        "It started as 'Animal Existence' (Gopalan) and became 'Human Dignity' (Maneka)."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Umbrella size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: THE SHIFT */}
            <PhaseHeader
                number="1"
                title="The Opening (1950 vs 1978)"
                color="bg-[#4b5563]"
                subtitle="From Locked Box to Open Sky"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <RightCard
                    title="Before Maneka (1950-78)"
                    icon={<Lock size={120} className="text-slate-500" />}
                    color="border-slate-500"
                    className="bg-slate-50"
                >
                    <p className="text-sm font-bold text-slate-600 mb-2">AK Gopalan Era:</p>
                    <ul className="list-disc pl-4 space-y-2 text-sm text-slate-800">
                        <li>Article 21 protects ONLY against <span className="underline">Executive Action</span>.</li>
                        <li>Legislature can take away life/liberty by passing ANY law.</li>
                        <li>"Procedure Established by Law" = Just technical compliance.</li>
                    </ul>
                </RightCard>

                <RightCard
                    title="After Maneka (1978+)"
                    icon={<Sun size={120} className="text-orange-500" />}
                    color="border-orange-500"
                    className="bg-orange-50"
                >
                    <p className="text-sm font-bold text-slate-600 mb-2">Maneka Gandhi Era:</p>
                    <ul className="list-disc pl-4 space-y-2 text-sm text-slate-800">
                        <li>Article 21 protects against Executive AND <span className="underline font-black text-orange-700">Legislative Action</span>.</li>
                        <li>Law must be "Just, Fair & Reasonable" (Due Process).</li>
                        <li>Life ≠ Mere Animal Existence.</li>
                    </ul>
                </RightCard>
            </div>

            {/* PHASE 2: THE RAINDROPS (IMPLIED RIGHTS) */}
            <PhaseHeader
                number="2"
                title="The Raindrops (Implied Rights)"
                color="bg-[#1e40af]"
                subtitle="Rights declared by SC under Art 21"
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl hover:scale-105 transition-transform">
                    <div className="flex justify-center mb-2"><Wifi className="text-blue-600" /></div>
                    <p className="text-center text-xs font-black text-blue-900">Right to Internet</p>
                    <p className="text-center text-[10px] text-slate-500">Anuradha Bhasin Case</p>
                </div>
                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl hover:scale-105 transition-transform">
                    <div className="flex justify-center mb-2"><TreePine className="text-green-600" /></div>
                    <p className="text-center text-xs font-black text-green-900">Clean Environment</p>
                    <p className="text-center text-[10px] text-slate-500">MC Mehta Cases</p>
                </div>
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl hover:scale-105 transition-transform">
                    <div className="flex justify-center mb-2"><Heart className="text-red-600" /></div>
                    <p className="text-center text-xs font-black text-red-900">Right to Health</p>
                    <p className="text-center text-[10px] text-slate-500">Parmanand Katara Case</p>
                </div>
                <div className="p-4 bg-purple-50 border-2 border-purple-200 rounded-xl hover:scale-105 transition-transform">
                    <div className="flex justify-center mb-2"><Briefcase className="text-purple-600" /></div>
                    <p className="text-center text-xs font-black text-purple-900">Livelihood</p>
                    <p className="text-center text-[10px] text-slate-500">Olga Tellis Case</p>
                </div>
                <div className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-xl hover:scale-105 transition-transform">
                    <div className="flex justify-center mb-2"><Moon className="text-yellow-600" /></div>
                    <p className="text-center text-xs font-black text-yellow-900">Right to Sleep</p>
                    <p className="text-center text-[10px] text-slate-500">Ramlila Maidan Case</p>
                </div>
                <div className="p-4 bg-indigo-50 border-2 border-indigo-200 rounded-xl hover:scale-105 transition-transform">
                    <div className="flex justify-center mb-2"><Eye className="text-indigo-600" /></div>
                    <p className="text-center text-xs font-black text-indigo-900">Right to Privacy</p>
                    <p className="text-center text-[10px] text-slate-500">Puttaswamy Case</p>
                </div>
            </div>

            {/* PHASE 3: THE LIMITS */}
            <PhaseHeader
                number="3"
                title="The Boundary (Limits)"
                color="bg-[#b91c1c]"
                subtitle="Where the Umbrella ends"
            />

            <div className="bg-red-50 border-4 border-dashed border-red-500 rounded-3xl p-8 relative overflow-hidden">
                <AlertTriangle size={200} className="absolute -right-10 top-10 text-red-200 opacity-50" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-black text-red-700 uppercase mb-4">No Right to Die</h3>
                        <p className="font-bold text-slate-700 mb-4">
                            Right to Life does <span className="underline decoration-red-500">NOT</span> include Right to Die (Suicide).
                        </p>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-red-200">
                            <div className="flex items-center gap-2 mb-2">
                                <Activity className="text-red-500" />
                                <span className="font-black text-slate-800">Euthanasia (Passive)</span>
                            </div>
                            <p className="text-xs text-slate-600 font-bold">Allowed under strict guidelines (Common Cause Case, 2018). Living Will is legal.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-xl border border-slate-300">
                            <h5 className="font-black text-slate-800">Right to Marriage?</h5>
                            <p className="text-xs font-bold text-slate-600">Fundamental Right under Art 21 (Hadiya Case). But Same-Sex Marriage is <span className="text-red-600">not yet</span> a statutory right.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#15803d] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#15803d] hover:bg-green-900 text-white shadow-[0_10px_40px_-10px_rgba(21,128,61,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <ShieldCheck size={32} className="animate-bounce" />
                            LIBERTY GUARDIAN
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Umbrella size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 92 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">Due Process • Passive Euthanasia • Privacy.</p>
            </div>
        </ScrapbookContainer>
    );
}
