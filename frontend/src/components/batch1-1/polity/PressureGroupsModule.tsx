"use client";

import React from "react";
import {
    Mic2, Users, Briefcase, Megaphone,
    AlertOctagon, Gavel, Globe,
    Activity, ArrowRightLeft
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PressureGroupsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f3f4f6] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-slate-200">
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

const ClassificationCard = ({ title, examples, icon: Icon, color }: { title: string, examples: string[], icon: any, color: string }) => (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center transform hover:scale-105 transition-transform">
        <div className={`p-2 rounded-full ${color} text-white mb-3`}>
            <Icon size={16} />
        </div>
        <h4 className="font-black text-slate-800 text-sm mb-2">{title}</h4>
        <div className="text-xs font-bold text-slate-500 space-y-1">
            {examples.map((e, i) => <p key={i}>{e}</p>)}
        </div>
    </div>
);

export default function PressureGroupsModule({ onComplete, isCompleted, chapterNumber = "71" }: PressureGroupsModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO */}
            <div className="relative bg-[#374151] border-4 border-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#171717] text-white px-4 py-1 text-lg font-bold">Chapter {chapterNumber}</Badge>
                        <span className="text-slate-300 font-bold uppercase tracking-widest text-sm">Political Dynamics</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                        Pressure Groups <br />
                        <span className="text-slate-400">The Lobbyist's Whisper</span>
                    </h1>
                    <p className="text-xl text-slate-300 italic max-w-2xl">
                        "Influence without Power. The Invisible Hand pushing the button."
                    </p>
                </div>
                <div className="absolute -right-8 -bottom-8 opacity-10">
                    <Megaphone size={200} />
                </div>
            </div>

            {/* PHASE 1: TYPES */}
            <SectionHeader title="Phase 1: The Players (Classification)" icon={Users} color="bg-[#4b5563]" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ClassificationCard
                    title="Business"
                    examples={["FICCI", "CII", "ASSOCHAM"]}
                    icon={Briefcase}
                    color="bg-blue-600"
                />
                <ClassificationCard
                    title="Trade Unions"
                    examples={["INTUC (INC)", "BMS (BJP)", "AITUC (CPI)"]}
                    icon={Users}
                    color="bg-red-600"
                />
                <ClassificationCard
                    title="Professional"
                    examples={["IMA (Doctors)", "Bar Council"]}
                    icon={Activity}
                    color="bg-green-600"
                />
                <ClassificationCard
                    title="Agrarian"
                    examples={["Bhartiya Kisan Union", "Kisan Sabha"]}
                    icon={Globe}
                    color="bg-yellow-600"
                />
            </div>

            {/* PHASE 2: METHODS */}
            <SectionHeader title="Phase 2: The Toolbox" icon={Mic2} color="bg-[#1e40af]" />

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                    <h3 className="font-black text-blue-900 mb-4">Techniques</h3>
                    <ul className="space-y-3">
                        <li className="flex gap-2 text-sm font-bold text-slate-700">
                            <span className="text-blue-600">►</span> Lobbying (Persuasion)
                        </li>
                        <li className="flex gap-2 text-sm font-bold text-slate-700">
                            <span className="text-blue-600">►</span> PIL (Litigation)
                        </li>
                        <li className="flex gap-2 text-sm font-bold text-slate-700">
                            <span className="text-blue-600">►</span> Direct Action (Strikes/Bandhs)
                        </li>
                    </ul>
                </div>

                <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-lg">
                    <h3 className="font-black text-slate-800 text-center mb-4">Pressure Group VS Political Party</h3>
                    <div className="grid grid-cols-2 gap-4 text-xs font-bold text-center">
                        <div className="space-y-2">
                            <div className="bg-slate-100 p-2 rounded">Influence Policy</div>
                            <div className="bg-slate-100 p-2 rounded">Indirect Method</div>
                            <div className="bg-slate-100 p-2 rounded">Narrow Interest</div>
                        </div>
                        <div className="border-l-2 border-slate-200 space-y-2">
                            <div className="bg-blue-100 text-blue-800 p-2 rounded">Capture Power</div>
                            <div className="bg-blue-100 text-blue-800 p-2 rounded">Direct Elections</div>
                            <div className="bg-blue-100 text-blue-800 p-2 rounded">National Ideology</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: CRITICISM */}
            <SectionHeader title="Phase 3: Issues & Limitations" icon={AlertOctagon} color="bg-[#b91c1c]" />

            <div className="bg-red-50 p-6 rounded-2xl border border-red-200 text-center">
                <div className="flex justify-center gap-8 text-sm font-bold text-red-800">
                    <div className="flex flex-col items-center gap-2">
                        <Users size={24} />
                        <span>Narrow Base</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <ArrowRightLeft size={24} />
                        <span>Political Affiliation</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <AlertOctagon size={24} />
                        <span>Violence (Bandhs)</span>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center">
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`px-12 py-6 rounded-full text-xl font-black font-['Kalam'] transition-all transform hover:scale-105 ${isCompleted ? 'bg-slate-800 text-white' : 'bg-[#4b5563] text-white hover:bg-slate-700'
                        }`}
                >
                    {isCompleted ? "Influence Exerted" : "Start Lobbying"}
                </Button>
            </div>
        </ScrapbookContainer>
    );
}
