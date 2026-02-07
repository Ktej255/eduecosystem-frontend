"use client";

import React from "react";
import {
    Flag, Gift, Map, Star,
    Percent, CheckCircle2, TrendingUp,
    Stamp, Award, AlertCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PoliticalPartiesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0f9ff] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-blue-100">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-white/50 rounded-3xl p-6 shadow-inner border-2 border-slate-200">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, icon: Icon, color }: { title: string, icon: any, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`p-3 rounded-full ${color} text-white shadow-lg`}>
            <Icon size={24} />
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight text-slate-800`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

const PartyCard = ({ title, children, color = "bg-white" }: { title: string, children: React.ReactNode, color?: string }) => (
    <div className={`${color} p-6 rounded-2xl shadow-md border-2 border-slate-100 transform transition-transform hover:-translate-y-1`}>
        <h3 className="font-black text-lg mb-3 flex items-center gap-2">{title}</h3>
        {children}
    </div>
);

export default function PoliticalPartiesModule({ onComplete, isCompleted }: PoliticalPartiesModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO */}
            <div className="relative bg-gradient-to-r from-orange-500 via-white to-green-600 p-1 rounded-3xl shadow-2xl">
                <div className="bg-white rounded-[20px] p-8 md:p-12 overflow-hidden relative">
                    <div className="relative z-10 text-center">
                        <Badge className="bg-slate-900 text-white px-4 py-1 text-lg font-bold mb-4">Chapter 67</Badge>
                        <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight text-slate-900">
                            Political Parties <br />
                            <span className="text-blue-600">The 6% Solution</span>
                        </h1>
                        <p className="text-xl text-slate-500 italic">
                            "Registration, Recognition, and the Math of Symbols."
                        </p>
                    </div>
                    <div className="absolute top-4 left-4 opacity-10 text-orange-500"><Flag size={100} /></div>
                    <div className="absolute bottom-4 right-4 opacity-10 text-green-600"><Flag size={100} /></div>
                </div>
            </div>

            {/* PHASE 1: REGISTRATION */}
            <SectionHeader title="Phase 1: Registration Status" icon={Stamp} color="bg-slate-800" />

            <div className="grid md:grid-cols-2 gap-8">
                <PartyCard title="Legal Status (RPA, 1951)" color="bg-slate-50">
                    <p className="font-bold text-sm text-slate-700 leading-relaxed">
                        Registered with EC under <span className="text-blue-600">Section 29A</span>.
                    </p>
                    <div className="mt-4 flex gap-4">
                        <div className="bg-white p-3 rounded border text-center flex-1">
                            <span className="block text-2xl font-black text-green-600">Recognized</span>
                            <span className="text-xs">Reserved Symbol</span>
                        </div>
                        <div className="bg-white p-3 rounded border text-center flex-1 opacity-60">
                            <span className="block text-2xl font-black text-slate-600">Registered</span>
                            <span className="text-xs">Free Symbol</span>
                        </div>
                    </div>
                </PartyCard>

                <PartyCard title="The Benefits" color="bg-blue-50">
                    <div className="space-y-3 font-bold text-sm text-slate-700">
                        <div className="flex items-center gap-3">
                            <Gift size={18} className="text-blue-600" />
                            <span>Exclusive Reserved Symbol</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Star size={18} className="text-orange-500" />
                            <span>40 Star Campaigners (vs 20)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Map size={18} className="text-green-600" />
                            <span>Land for Office in Delhi</span>
                        </div>
                    </div>
                </PartyCard>
            </div>

            {/* PHASE 2: NATIONAL PARTY CRITERIA */}
            <SectionHeader title="Phase 2: National Party Math (The 3 Paths)" icon={Percent} color="bg-[#b91c1c]" />

            <div className="space-y-4">
                <div className="bg-white border-2 border-red-100 rounded-2xl p-6 shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold rounded-bl-xl">High Yield</div>

                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                            <h4 className="font-black text-red-900 mb-2">Path 1: Performance</h4>
                            <p className="text-sm font-bold text-red-800">
                                6% Votes in 4 States <br />
                                <span className="text-xs opacity-70">+</span> <br />
                                4 Lok Sabha Seats
                            </p>
                        </div>
                        <div className="p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                            <h4 className="font-black text-red-900 mb-2">Path 2: Seats</h4>
                            <p className="text-sm font-bold text-red-800">
                                2% of LS Seats (11) <br />
                                <span className="text-xs text-slate-500">from</span> <br />
                                3 Different States
                            </p>
                        </div>
                        <div className="p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                            <h4 className="font-black text-red-900 mb-2">Path 3: Status</h4>
                            <p className="text-sm font-bold text-red-800">
                                Recognized as State Party <br />
                                <span className="text-xs text-slate-500">in</span> <br />
                                4 States
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800 text-white rounded-2xl p-6 flex flex-wrap gap-4 items-center justify-center">
                    <h3 className="font-black uppercase mr-4">Hall of Fame (2024):</h3>
                    {['BJP', 'INC', 'BSP', 'CPI(M)', 'NPP', 'AAP'].map(p => (
                        <Badge key={p} className="bg-white text-slate-900 font-black text-md px-3 py-1">
                            {p}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* PHASE 3: STATE PARTY */}
            <SectionHeader title="Phase 3: State Party (Regional Math)" icon={Award} color="bg-green-600" />

            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-bold text-sm text-green-900 text-center">
                    <div className="bg-white p-3 rounded shadow-sm">6% Votes + 2 Assembly Seats</div>
                    <div className="bg-white p-3 rounded shadow-sm">6% Votes + 1 LS Seat</div>
                    <div className="bg-white p-3 rounded shadow-sm">3% of Assembly Seats</div>
                    <div className="bg-white p-3 rounded shadow-sm">1 LS Seat per 25</div>
                    <div className="bg-white p-3 rounded shadow-sm col-span-2 md:col-span-1 border-2 border-green-400">8% Total Votes (No Seats needed)</div>
                </div>
            </div>

            <div className="mt-16 text-center">
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`px-12 py-6 rounded-full text-xl font-black font-['Kalam'] transition-all transform hover:scale-105 ${isCompleted ? 'bg-slate-300 text-slate-500' : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                >
                    {isCompleted ? "Symbol Allotted" : "Register Party"}
                </Button>
            </div>
        </ScrapbookContainer>
    );
}
