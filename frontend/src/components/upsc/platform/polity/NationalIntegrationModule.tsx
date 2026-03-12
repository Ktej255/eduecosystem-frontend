"use client";

import React from "react";
import {
    Puzzle, Shield, Map, AlertTriangle,
    Users, HeartHandshake, Globe
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NationalIntegrationModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fff7ed] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-orange-100">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-card/50 rounded-3xl p-6 shadow-inner border-2 border-border">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, icon: Icon, color }: { title: string, icon: any, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`p-3 rounded-full ${color} text-white shadow-lg`}>
            <Icon size={24} />
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight text-foreground`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function NationalIntegrationModule({ onComplete, isCompleted, chapterNumber = "72" }: NationalIntegrationModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO */}
            <div className="relative bg-gradient-to-r from-orange-500 via-white to-green-600 p-1 rounded-3xl shadow-2xl">
                <div className="bg-card rounded-[20px] p-8 md:p-12 overflow-hidden relative">
                    <div className="relative z-10 text-center">
                        <Badge className="bg-slate-900 text-white px-4 py-1 text-lg font-bold mb-4">Chapter {chapterNumber}</Badge>
                        <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight text-foreground">
                            National Integration <br />
                            <span className="text-orange-600">The Jigsaw Puzzle</span>
                        </h1>
                        <p className="text-xl text-muted-foreground italic">
                            "The 4 Horsemen vs The Council. Holding the Map together."
                        </p>
                    </div>
                    <div className="absolute top-4 left-4 opacity-10 text-orange-500"><Map size={100} /></div>
                </div>
            </div>

            {/* PHASE 1: OBSTACLES */}
            <SectionHeader title="Phase 1: The 4 Threats" icon={AlertTriangle} color="bg-[#ea580c]" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { t: "Communalism", d: "Religious Allegiance > Nation" },
                    { t: "Regionalism", d: "Region > Nation (Secession)" },
                    { t: "Linguism", d: "Language > Nation" },
                    { t: "Casteism", d: "Fragmentation of Society" }
                ].map((defs, i) => (
                    <div key={i} className="bg-red-50 p-4 rounded-xl border border-red-100 text-center hover:bg-red-100 transition-colors">
                        <h4 className="font-black text-red-800 mb-1">{defs.t}</h4>
                        <p className="text-xs font-bold text-red-600">{defs.d}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6 bg-card border-2 border-border p-4 rounded-xl flex items-center justify-between">
                <span className="font-black text-muted-foreground flex items-center gap-2"><Shield size={18} /> Constitutional Safeguards:</span>
                <div className="flex gap-2">
                    <Badge variant="outline">Preamble</Badge>
                    <Badge variant="outline">Art 51A (Duties)</Badge>
                    <Badge variant="outline">Art 1 (Union)</Badge>
                </div>
            </div>

            {/* PHASE 2: NIC */}
            <SectionHeader title="Phase 2: National Integration Council (NIC)" icon={Users} color="bg-[#1e40af]" />

            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 relative">
                <div className="absolute -top-3 left-4 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded shadow">Extra-Constitutional Body</div>

                <div className="text-center mb-8">
                    <div className="inline-block p-4 bg-card rounded-full shadow-md mb-2">
                        <Users size={40} className="text-blue-600" />
                    </div>
                    <h3 className="font-black text-xl text-blue-900">Chairman: The Prime Minister</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-center text-xs font-bold text-blue-800">
                    <div className="bg-card p-3 rounded shadow-sm">Home Minister</div>
                    <div className="bg-card p-3 rounded shadow-sm">Chief Ministers</div>
                    <div className="bg-card p-3 rounded shadow-sm">Leaders of Opposition</div>
                </div>
            </div>

            {/* PHASE 3: NFCH */}
            <SectionHeader title="Phase 3: NFCH (1992)" icon={HeartHandshake} color="bg-[#16a34a]" />

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#f0fdf4] border-2 border-green-200 rounded-2xl p-6 text-center">
                    <h3 className="font-black text-green-800 mb-2">Autonomous Body</h3>
                    <p className="text-sm font-bold text-green-700">Under Ministry of Home Affairs.</p>
                    <p className="text-xs text-green-600 mt-2 italic">Promotes Communal Harmony.</p>
                </div>
                <div className="bg-card border-2 border-border rounded-2xl p-6 text-center relative">
                    <div className="absolute top-2 right-2 opacity-20"><Globe size={24} /></div>
                    <h3 className="font-black text-foreground mb-1">Son of the Soil</h3>
                    <div className="text-xs font-bold text-red-600 bg-red-50 p-2 rounded mt-2">
                        Violates Article 16
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1">(Except Parliment Laws under Art 16(3))</p>
                </div>
            </div>

            <div className="mt-16 text-center">
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`px-12 py-6 rounded-full text-xl font-black font-['Kalam'] transition-all transform hover:scale-105 ${isCompleted ? 'bg-slate-300 text-muted-foreground' : 'bg-orange-600 text-white hover:bg-orange-700'
                        }`}
                >
                    {isCompleted ? "India United!" : "Clamp the Map"}
                </Button>
            </div>
        </ScrapbookContainer>
    );
}
