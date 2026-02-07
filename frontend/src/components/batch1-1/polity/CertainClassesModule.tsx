"use client";

import React from "react";
import {
    Users, Briefcase, Clock,
    Scale, PieChart, FileText,
    UserCheck, TrendingUp
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CertainClassesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0fdf4] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-green-100">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-white/50 rounded-3xl p-6 shadow-inner border-2 border-slate-200">
            {children}
        </div>
    </div>
);

const LadderRung = ({ label, color }: { label: string, color: string }) => (
    <div className={`w-full p-4 rounded-xl ${color} text-white font-black text-center shadow-md mb-2 transform hover:scale-[1.02] transition-transform`}>
        {label}
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

export default function CertainClassesModule({ onComplete, isCompleted }: CertainClassesModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO */}
            <div className="relative bg-[#1d4ed8] border-4 border-blue-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-white text-blue-800 px-4 py-1 text-lg font-bold">Chapter 66</Badge>
                        <span className="text-blue-100 font-bold uppercase tracking-widest text-sm">Part XVI</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                        Special Provisions <br />
                        <span className="text-[#15803d]">The Ladder of Equity</span>
                    </h1>
                    <p className="text-xl text-blue-100 italic max-w-2xl">
                        "Affirmative Action for SCs, STs, OBCs, and Anglo-Indians."
                    </p>
                </div>
                <div className="absolute right-12 top-8 md:w-64 md:h-64 opacity-20">
                    <div className="w-full h-4 bg-white mb-8 rounded"></div>
                    <div className="w-full h-4 bg-white mb-8 rounded opacity-80"></div>
                    <div className="w-full h-4 bg-white mb-8 rounded opacity-60"></div>
                    <div className="w-full h-4 bg-white mb-8 rounded opacity-40"></div>
                </div>
            </div>

            {/* PHASE 1: LEGISLATURE */}
            <SectionHeader title="Phase 1: Seats in Legislature" icon={Users} color="bg-[#1d4ed8]" />

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-md">
                    <h3 className="font-black text-xl mb-4 text-blue-800">Lok Sabha & Assemblies</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between bg-slate-50 p-3 rounded">
                            <span className="font-bold text-slate-700">SCs & STs</span>
                            <span className="font-bold text-blue-600">Reserved (Prop. to Population)</span>
                        </div>

                        <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                            <h4 className="font-black text-red-800 text-sm mb-1">Anglo-Indian Change</h4>
                            <p className="text-xs font-bold text-red-700">
                                104th Amendment (2019): Discontinued nomination of 2 Anglo-Indians to LS.
                            </p>
                            <Badge className="bg-red-600 text-white mt-2">Zero Seats Now</Badge>
                        </div>
                    </div>
                </div>

                <div className="bg-white border-2 border-[#15803d] rounded-2xl p-6 shadow-md relative">
                    <div className="absolute top-2 right-2 opacity-10">
                        <Clock size={48} />
                    </div>
                    <h3 className="font-black text-xl mb-4 text-[#15803d]">Duration (Art 334)</h3>
                    <div className="space-y-2 text-sm font-bold text-slate-600">
                        <p>Original: 10 Years</p>
                        <p>Extended: Every 10 years</p>
                        <div className="bg-[#15803d] text-white p-3 rounded-xl mt-4 text-center">
                            <div className="text-2xl font-black">2030</div>
                            <div className="text-xs opacity-80">Current Deadline (104th AA)</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 2: SERVICES */}
            <SectionHeader title="Phase 2: Claims in Services" icon={Briefcase} color="bg-[#15803d]" />

            <div className="bg-[#ecfdf5] border-2 border-[#15803d] rounded-2xl p-8 relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center">
                        <Scale size={64} className="mx-auto text-[#15803d] mb-4" />
                        <h3 className="font-black text-xl text-[#15803d]">Article 335</h3>
                        <p className="font-bold text-slate-700 mt-2">
                            Efficiency vs Equity
                        </p>
                        <p className="text-xs font-bold text-slate-500 italic mt-1">
                            Claims considered consistent with "Maintenance of efficiency".
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-dashed border-orange-300 shadow-sm">
                        <h4 className="font-black text-orange-600 mb-2 flex items-center gap-2">
                            <PieChart size={18} /> OBC Reservation
                        </h4>
                        <ul className="space-y-2 text-xs font-bold text-slate-700">
                            <li>• Mandal Commission (1979)</li>
                            <li>• 27% in Central Services (1990)</li>
                            <li className="text-red-600">• Creamy Layer Excluded (Ram Nandan Comm)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* PHASE 3: DEFINITIONS */}
            <SectionHeader title="Phase 3: Who is Who?" icon={FileText} color="bg-[#ea580c]" />

            <div className="space-y-4">
                <LadderRung label="SC / ST (Art 341-342): President Notifies → Parliament Modifies" color="bg-blue-600" />
                <LadderRung label="OBC (Art 342-A): Central List & State List (105th AA)" color="bg-orange-600" />
                <div className="w-full p-4 rounded-xl bg-slate-600 text-white font-bold text-center shadow-md text-sm">
                    <strong>Anglo-Indian (Art 366(2)):</strong> Father/Male Progenitor European descent.
                </div>
            </div>

            <div className="mt-16 text-center">
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`px-12 py-6 rounded-full text-xl font-black font-['Kalam'] transition-all transform hover:scale-105 ${isCompleted ? 'bg-slate-800 text-white' : 'bg-[#15803d] text-white hover:bg-green-800'
                        }`}
                >
                    {isCompleted ? "Access Granted" : "Climb the Ladder"}
                </Button>
            </div>
        </ScrapbookContainer>
    );
}
