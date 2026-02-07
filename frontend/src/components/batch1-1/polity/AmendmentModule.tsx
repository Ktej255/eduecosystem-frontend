"use client";

import React, { useState } from "react";
import {
    Wrench, Hammer, Settings, Lock, FileCog,
    ArrowRight, CheckCircle2, AlertTriangle, ShieldAlert,
    Gavle, Construction, Globe, Shield
} from "lucide-react"; // Note: Gavle might be a typo for Gavel, checking imports.
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AmendmentModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

// --- Design System: The Constitutional Toolkit ---

const WorkshopContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#e2e8f0] min-h-screen p-4 md:p-8 font-sans selection:bg-slate-300 selection:text-slate-900 relative">
        {/* Workshop Table Texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:20px_20px] bg-[position:0_0,10px_10px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, icon: Icon }: { title: string, icon: any }) => (
    <div className="flex items-center gap-4 my-8">
        <div className="h-1 flex-1 bg-slate-300 rounded-full"></div>
        <div className="flex items-center gap-2 bg-slate-800 text-white px-6 py-2 rounded-lg shadow-lg rotate-[-1deg]">
            <Icon size={18} className="text-orange-400" />
            <span className="font-bold uppercase tracking-wider text-sm">{title}</span>
        </div>
        <div className="h-1 flex-1 bg-slate-300 rounded-full"></div>
    </div>
);

const ToolCard = ({ title, children, icon: Icon, color = "slate", type = "Manual" }: { title: string, children: React.ReactNode, icon?: any, color?: "green" | "orange" | "red" | "slate", type?: string }) => {
    const colorStyles = {
        green: "border-green-500 bg-green-50/50",
        orange: "border-orange-500 bg-orange-50/50",
        red: "border-red-500 bg-red-50/50",
        slate: "border-slate-400 bg-white"
    };

    const headerColors = {
        green: "bg-green-600",
        orange: "bg-orange-600",
        red: "bg-red-600",
        slate: "bg-slate-700"
    };

    return (
        <div className={`relative border-2 ${colorStyles[color]} rounded-xl shadow-md group hover:shadow-xl transition-all duration-300`}>
            <div className={`absolute -top-3 left-4 ${headerColors[color]} text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm uppercase tracking-widest`}>
                {type}
            </div>
            <div className="p-6 pt-8">
                <div className="flex items-start justify-between mb-4 border-b border-black/5 pb-2">
                    <h3 className="font-bold text-xl text-slate-800 leading-tight">{title}</h3>
                    {Icon && (
                        <div className={`p-2 rounded-lg bg-white shadow-sm border ${color === 'slate' ? 'border-slate-200' : `border-${color}-200`}`}>
                            <Icon size={24} className={`text-${color}-600`} />
                        </div>
                    )}
                </div>
                <div className="text-sm space-y-3 font-handwriting text-slate-700 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default function AmendmentModule({ onComplete, isCompleted }: AmendmentModuleProps) {
    return (
        <WorkshopContainer>
            {/* HERO */}
            <div className="bg-[#1e293b] text-white p-8 md:p-12 rounded-xl shadow-2xl relative overflow-hidden border-b-8 border-slate-600">
                {/* Gear Animation */}
                <div className="absolute right-[-20px] top-[-20px] opacity-10 animate-[spin_10s_linear_infinite]">
                    <Settings size={200} />
                </div>
                <div className="absolute right-[140px] bottom-[-20px] opacity-10 animate-[spin_15s_linear_infinite_reverse]">
                    <Settings size={120} />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 text-orange-400 font-bold uppercase tracking-widest text-xs mb-2">
                        <Wrench size={14} /> Part XX (Article 368)
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black mb-4 font-serif">The Constitutional Toolkit</h1>
                    <p className="text-slate-300 max-w-2xl text-lg leading-relaxed font-handwriting">
                        "The Mechanic's Manual" — Procedures and tools to repair, update, and modify the Constitution.
                    </p>
                </div>
            </div>

            {/* PHASE 1: THE PROCEDURE */}
            <SectionHeader title="Phase 1: The Procedure (Art 368)" icon={FileCog} />
            <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Initiation */}
                <div className="bg-white p-6 rounded-xl border-2 border-slate-300 shadow-sm relative">
                    <div className="absolute -left-3 top-6 bg-slate-800 text-white p-2 rounded-r shadow-md">
                        <ArrowRight size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-6 pl-6 flex items-center gap-2">
                        Starting the Engine
                    </h3>
                    <div className="space-y-4 text-sm font-handwriting pl-6">
                        <div className="grid grid-cols-[100px_1fr] gap-2 items-center border-b border-slate-100 pb-2">
                            <span className="font-bold text-slate-900">Introduction:</span>
                            <span>EITHER House (LS or RS). <span className="text-red-500 font-bold text-xs ml-1 block md:inline">[State Leg: NO ❌]</span></span>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] gap-2 items-center border-b border-slate-100 pb-2">
                            <span className="font-bold text-slate-900">Mover:</span>
                            <span>Minister OR Private Member.</span>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
                            <span className="font-bold text-slate-900">Permission:</span>
                            <span><strong>NO</strong> prior permission of President needed. <Badge variant="outline" className="border-red-200 text-red-600 text-[10px]">PYQ</Badge></span>
                        </div>
                    </div>
                </div>

                {/* Right: Passage */}
                <div className="bg-slate-50 p-6 rounded-xl border-2 border-dashed border-slate-400 relative">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <CheckCircle2 className="text-green-600" /> The Passage
                    </h3>
                    <div className="space-y-4 text-sm font-handwriting">
                        <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
                            <strong>Majority:</strong> Must be passed in <u>EACH House separately</u> by Special Majority.
                        </div>
                        <div className="bg-red-50 p-3 rounded border border-red-200 text-red-800">
                            <strong>Deadlock:</strong> No Joint Sitting provision. If one House disagrees, bill dies. <Badge variant="outline" className="bg-white border-red-200 text-red-600 text-[10px] ml-1">PYQ</Badge>
                        </div>
                        <div className="bg-blue-50 p-3 rounded border border-blue-200 text-blue-900">
                            <strong>President's Role:</strong> MUST give assent. Cannot withhold/return. <br />
                            <span className="text-xs opacity-70">(Added by 24th AA, 1971)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 2: THE 3 TYPES OF AMENDMENTS */}
            <SectionHeader title="Phase 2: The 3 Tools" icon={Wrench} />

            <div className="space-y-8">
                {/* TYPE 1: SIMPLE (GREEN) */}
                <ToolCard title="Type 1: Simple Majority" color="green" type='The "Green" Tool' icon={Construction}>
                    <p className="text-xs uppercase font-bold text-green-700 mb-2 tracking-wider">Outside Art 368</p>
                    <p className="mb-4"><strong>Requirement:</strong> &gt;50% of members present and voting. (Like ordinary law).</p>

                    <div className="bg-white/50 p-3 rounded border border-green-200">
                        <div className="font-bold text-green-900 mb-2 text-xs uppercase">Scope (Examples)</div>
                        <ul className="list-disc pl-4 space-y-1 text-xs">
                            <li>New States (Art 2, 3)</li>
                            <li>Legislative Councils (Art 169)</li>
                            <li>Second Schedule (Emoluments)</li>
                            <li>Official Language</li>
                            <li><strong>Citizenship</strong> (Acquisition/Termination) <span className="text-red-500 font-bold">[PYQ]</span></li>
                        </ul>
                    </div>
                </ToolCard>

                {/* TYPE 2: SPECIAL (ORANGE) */}
                <ToolCard title="Type 2: Special Majority" color="orange" type='The "Orange" Tool' icon={Settings}>
                    <p className="text-xs uppercase font-bold text-orange-700 mb-2 tracking-wider">Under Art 368</p>
                    <div className="mb-4 bg-orange-100 p-2 rounded text-orange-900 text-xs font-bold border border-orange-200 inline-block">
                        50% of Total + 2/3rds of Present & Voting
                    </div>

                    <div className="bg-white/50 p-3 rounded border border-orange-200">
                        <div className="font-bold text-orange-900 mb-2 text-xs uppercase">Scope</div>
                        <ul className="list-disc pl-4 space-y-1 text-xs">
                            <li>Fundamental Rights (Part III)</li>
                            <li>Directive Principles (Part IV)</li>
                            <li>All provisions not in Type 1 or Type 3.</li>
                        </ul>
                    </div>
                </ToolCard>

                {/* TYPE 3: RATIFICATION (RED) */}
                <ToolCard title="Type 3: Special + Ratification" color="red" type='The "Red" Tool (Hardest)' icon={Lock}>
                    <p className="text-xs uppercase font-bold text-red-700 mb-2 tracking-wider">Federal Structure</p>
                    <div className="mb-4 bg-red-100 p-2 rounded text-red-900 text-xs font-bold border border-red-200">
                        Special Majority (Parl) + Ratification by 50% States (Simple)
                    </div>

                    <div className="bg-white/50 p-3 rounded border border-red-200">
                        <div className="font-bold text-red-900 mb-2 text-xs uppercase">Scope (Federal Provisions)</div>
                        <ul className="list-disc pl-4 space-y-1 text-xs">
                            <li>Election of President</li>
                            <li>Supreme Court & High Courts</li>
                            <li>Distribution of Powers (7th Schedule) <span className="text-red-600 font-bold">[PYQ]</span></li>
                            <li>Representation of States in Parliament</li>
                            <li><strong>Article 368 itself</strong></li>
                        </ul>
                    </div>
                </ToolCard>
            </div>


            {/* PHASE 3: CRITICISM & BASIC STRUCTURE */}
            <SectionHeader title="Phase 3: Criticism & Basic Structure" icon={ShieldAlert} />
            <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Criticism */}
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-slate-500">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <AlertTriangle size={18} className="text-yellow-500" /> Flaws in Procedure
                    </h3>
                    <ul className="space-y-3 text-sm font-handwriting">
                        <li className="flex gap-2">
                            <span className="text-red-500 font-bold">•</span>
                            <span><strong>No Time Limit:</strong> Constitution handles silence of States. <span className="text-red-500 font-bold text-[10px]">[PYQ]</span></span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-red-500 font-bold">•</span>
                            <span><strong>No Initiative:</strong> States cannot initiate amendments (except Council).</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-red-500 font-bold">•</span>
                            <span><strong>Unitary Bias:</strong> Major part amended by Parliament alone.</span>
                        </li>
                    </ul>
                </div>

                {/* Right: Basic Structure */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 rounded-lg shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Shield size={100} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-orange-400">Kesavananda Bharati (1973)</h3>
                    <p className="text-sm opacity-90 mb-4 font-serif">
                        "Parliament can amend any part (including FRs) BUT cannot alter the <strong>Basic Structure</strong>."
                    </p>
                    <div className="bg-white/10 p-3 rounded text-xs border border-white/20">
                        <strong>Note:</strong> 'Basic Structure' is NOT defined in the Constitution.
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="mt-12 bg-white rounded-xl p-8 border-4 border-double border-slate-300 shadow-xl text-center">
                <div className="flex justify-center mb-4">
                    <div className="bg-slate-100 p-3 rounded-full text-slate-700">
                        <Hammer size={32} />
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-2">"Balance between Flexibility and Rigidity"</h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto mb-8 font-serif italic">
                    "If you make any Constitution rigid and permanent, you stop a nation's growth." <br /> - J.L. Nehru
                </p>

                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`
            relative px-8 py-6 text-lg font-bold rounded-full shadow-xl transition-all
            ${isCompleted ? 'bg-green-700 hover:bg-green-800 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'}
          `}
                >
                    {isCompleted ?
                        <span className="flex items-center gap-2"><CheckCircle2 /> Toolkit Mastered</span> :
                        <span className="flex items-center gap-2"><Wrench /> Close Repair Manual</span>
                    }
                </Button>
            </div>
        </WorkshopContainer>
    );
}
