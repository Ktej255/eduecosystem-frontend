"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    PenTool, Calendar, BookOpen, CheckCircle2,
    Users, Gavel, Scale, Globe, Crown, Star,
    Map, Clock, Building, BadgeCheck, FileText,
    AlertCircle, Anchor, Stamp as StampIcon, Music
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface MakingConstitutionV2Props {
    onComplete?: () => void;
    isCompleted?: boolean;
}

// --- Design System: The Architect's Table ---

const BlueprintGrid = () => (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
            backgroundImage: `
          linear-gradient(to right, #1e3a8a 1px, transparent 1px),
          linear-gradient(to bottom, #1e3a8a 1px, transparent 1px)
        `,
            backgroundSize: '20px 20px'
        }}
    ></div>
);

const HandHeading = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <h3 className={`font-bold text-xl md:text-2xl text-indigo-900 mb-2 ${className}`} style={{ fontFamily: 'var(--font-kalam)' }}>
        {children}
    </h3>
);

const HandText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`text-slate-700 leading-tight ${className}`} style={{ fontFamily: 'var(--font-kalam)' }}>
        {children}
    </div>
);

const ArchitectCard = ({ children, className = "", color = "bg-[#fdfbf7]" }: { children: React.ReactNode, className?: string, color?: string }) => (
    <div className={`${color} border-2 border-slate-200 rounded-xl p-5 shadow-md relative overflow-hidden ${className}`}>
        {/* Paper Texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] pointer-events-none"></div>
        <div className="relative z-10">
            {children}
        </div>
    </div>
);

const Stamp = ({ label, type = "approved" }: { label: string, type?: "approved" | "rejected" | "idea" }) => {
    const colors = {
        approved: "border-green-600 text-green-700 rotate-[-12deg]",
        rejected: "border-red-600 text-red-700 rotate-[12deg]",
        idea: "border-indigo-600 text-indigo-700 rotate-[-5deg]"
    };
    return (
        <div className={`
      absolute -top-2 -right-2 md:top-2 md:right-2 
      border-2 md:border-4 rounded-lg px-2 py-1 
      font-black uppercase tracking-widest text-xs md:text-sm
      opacity-80 mix-blend-multiply pointer-events-none
      ${colors[type]}
    `}>
            {label}
        </div>
    )
}

// --- Icons & Visuals ---
const SectionDivider = ({ title }: { title: string }) => (
    <div className="relative flex items-center justify-center my-8 md:my-10">
        <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-indigo-100"></div>
        </div>
        <div className="relative bg-[#f0f4f8] px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-white px-3 py-1 rounded-full border border-indigo-100 shadow-sm">
                {title}
            </span>
        </div>
    </div>
);

export default function MakingConstitutionModuleV2({ onComplete, isCompleted }: MakingConstitutionV2Props) {

    return (
        <div className="max-w-4xl mx-auto pb-20 font-[family-name:var(--font-kalam)] bg-[#f3f4f6] min-h-screen">
            {/* HER0: THE BLUEPRINT */}
            <div className="bg-[#1e293b] text-blue-50 p-8 pt-12 rounded-b-[3rem] shadow-2xl relative overflow-hidden mb-12">
                <BlueprintGrid />
                <div className="relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-900/50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-700/50 mb-4 text-blue-200">
                        <Scale size={14} /> Chapter 2: Construction Phase
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-none text-white drop-shadow-lg">
                        Making of the <br /><span className="text-amber-400">Constitution</span>
                    </h1>
                    <p className="text-lg opacity-80 font-light italic max-w-xl mx-auto">
                        "Drafting the soul of a nation: From Blueprint to Reality."
                    </p>
                </div>
            </div>

            <div className="px-4 space-y-4">

                {/* --- ROW 1: THE GENESIS (1934-1946) --- */}
                <SectionDivider title="Phase 1: Demand & Formation" />

                <div className="grid md:grid-cols-5 gap-4">
                    {/* Left: The Demand (3/5) */}
                    <ArchitectCard className="md:col-span-3 transform rotate-[-1deg]">
                        <HandHeading>The Demand (1934-38)</HandHeading>
                        <Stamp label="The Idea" type="idea" />
                        <ul className="space-y-4 mt-4">
                            <li className="flex gap-3 items-start">
                                <div className="mt-1 bg-indigo-100 p-1 rounded text-indigo-700 font-bold text-xs min-w-[50px] text-center">1934</div>
                                <div>
                                    <span className="font-bold text-slate-800">M.N. Roy</span>
                                    <p className="text-sm opacity-80 leading-tight">Pioneer of Communist Movement. First to propose the idea.</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="mt-1 bg-indigo-100 p-1 rounded text-indigo-700 font-bold text-xs min-w-[50px] text-center">1935</div>
                                <div>
                                    <span className="font-bold text-slate-800">INC Official Demand</span>
                                    <p className="text-sm opacity-80 leading-tight">First official demand for a Constituent Assembly.</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="mt-1 bg-indigo-100 p-1 rounded text-indigo-700 font-bold text-xs min-w-[50px] text-center">1938</div>
                                <div>
                                    <span className="font-bold text-slate-800">Nehru's Declaration</span>
                                    <p className="text-sm opacity-80 leading-tight">"Framed ... without outside interference by an Assembly elected on adult franchise."</p>
                                </div>
                            </li>
                        </ul>
                    </ArchitectCard>

                    {/* Right: British Acceptance (2/5) */}
                    <ArchitectCard className="md:col-span-2 bg-amber-50 border-amber-200 transform rotate-[1deg]" color="bg-amber-50">
                        <HandHeading className="text-amber-900 border-b border-amber-200 pb-2">The Response</HandHeading>
                        <ul className="space-y-3 mt-3">
                            <li className="relative pl-4 border-l-2 border-amber-300">
                                <div className="text-xs font-bold text-amber-800">1940: August Offer</div>
                                <div className="text-sm font-bold text-green-700">✓ Accepted in Principle</div>
                            </li>
                            <li className="relative pl-4 border-l-2 border-amber-300">
                                <div className="text-xs font-bold text-amber-800">1942: Cripps Mission</div>
                                <div className="text-sm font-bold text-red-600">✗ Rejected</div>
                                <div className="text-xs opacity-70 leading-tight">Muslim League wanted 2 states.</div>
                            </li>
                            <li className="relative pl-4 border-l-2 border-amber-300">
                                <div className="text-xs font-bold text-amber-800">1946: Cabinet Mission</div>
                                <div className="text-sm font-bold text-green-700">✓ Proceeded</div>
                                <div className="text-xs opacity-70 leading-tight">Rejected 2 assemblies, but satisfied League.</div>
                            </li>
                        </ul>
                    </ArchitectCard>
                </div>

                {/* --- ROW 2: THE MATH OF SEATS --- */}
                <div className="grid md:grid-cols-5 gap-4 pt-4">
                    {/* Left: Total Strength (2/5) */}
                    <ArchitectCard className="md:col-span-2 bg-blue-50 border-blue-200 text-center" color="bg-blue-50">
                        <h4 className="text-sm uppercase tracking-widest font-bold text-blue-800 mb-4">Total Strength</h4>
                        <div className="text-6xl font-black text-blue-900 mb-2 font-sans tracking-tighter">389</div>
                        <div className="flex justify-center gap-1 mb-4">
                            <div className="bg-white px-3 py-1 rounded shadow-sm border border-blue-100">
                                <div className="text-xl font-bold text-indigo-700">296</div>
                                <div className="text-[10px] uppercase font-bold text-indigo-400">British India</div>
                            </div>
                            <div className="flex items-center text-slate-400">+</div>
                            <div className="bg-white px-3 py-1 rounded shadow-sm border border-blue-100">
                                <div className="text-xl font-bold text-amber-700">93</div>
                                <div className="text-[10px] uppercase font-bold text-amber-400">Princely</div>
                            </div>
                        </div>
                    </ArchitectCard>

                    {/* Right: Election Method (3/5) */}
                    <ArchitectCard className="md:col-span-3">
                        <HandHeading>Election Method</HandHeading>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="p-3 bg-slate-100 rounded-lg">
                                <div className="font-bold text-slate-800 mb-1">British India</div>
                                <div className="text-sm font-bold text-indigo-600">Indirect Election</div>
                                <p className="text-xs opacity-70 leading-tight mt-1">
                                    By Provincial Assemblies (Single Transferable Vote).
                                </p>
                            </div>
                            <div className="p-3 bg-slate-100 rounded-lg">
                                <div className="font-bold text-slate-800 mb-1">Princely States</div>
                                <div className="text-sm font-bold text-amber-600">Nominated</div>
                                <p className="text-xs opacity-70 leading-tight mt-1">
                                    By Heads of Princely States.
                                </p>
                            </div>
                        </div>
                        <div className="mt-3 text-center bg-indigo-50 p-2 rounded border border-indigo-100 text-sm font-bold text-indigo-800">
                            Conclusion: Partly Elected & Partly Nominated
                        </div>
                    </ArchitectCard>
                </div>

                {/* --- ROW 3: WORKING OF ASSEMBLY --- */}
                <SectionDivider title="Phase 2: Working & Objectives" />

                <div className="grid md:grid-cols-2 gap-4">
                    {/* Left: First Meeting */}
                    <ArchitectCard className="relative overflow-hidden">
                        <div className="absolute right-0 top-0 bg-yellow-300 px-3 py-1 text-xs font-bold rounded-bl-xl shadow-sm">Dec 9, 1946</div>
                        <HandHeading>First Meeting</HandHeading>
                        <div className="space-y-4 mt-4">
                            <div className="flex items-center gap-3">
                                <Users className="text-slate-400" size={18} />
                                <div>
                                    <span className="font-bold">211 Members</span>
                                    <span className="text-xs ml-2 opacity-60">(Muslim League Boycotted)</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Crown className="text-amber-500 mt-1" size={18} />
                                <div>
                                    <span className="font-bold text-lg block">Dr. Sachchidanand Sinha</span>
                                    <span className="text-sm badge bg-slate-100 px-2 py-0.5 rounded">Temporary President</span>
                                    <div className="text-xs opacity-60 mt-0.5">Oldest Member (French Practice)</div>
                                </div>
                            </div>
                        </div>
                    </ArchitectCard>

                    {/* Right: Permanent Team */}
                    <ArchitectCard className="bg-green-50 border-green-200" color="bg-green-50">
                        <div className="absolute right-0 top-0 bg-green-200 text-green-800 px-3 py-1 text-xs font-bold rounded-bl-xl shadow-sm">Dec 11, 1946</div>
                        <HandHeading className="text-green-900">The Permanent Team</HandHeading>
                        <div className="space-y-3 mt-4">
                            <div className="flex items-center justify-between border-b border-green-200 pb-2">
                                <span className="text-sm font-bold text-green-800">President</span>
                                <span className="text-sm font-bold">Dr. Rajendra Prasad</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-green-200 pb-2">
                                <span className="text-sm font-bold text-green-800">Vice-Presidents</span>
                                <span className="text-sm text-right">H.C. Mukherjee <br /> V.T. Krishnamachari</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-green-800">Advisor</span>
                                <span className="text-sm font-bold">Sir B.N. Rau</span>
                            </div>
                        </div>
                    </ArchitectCard>
                </div>

                {/* --- ROW 4: OBJECTIVES RESOLUTION --- */}
                <div className="grid md:grid-cols-5 gap-4 pt-4">
                    <ArchitectCard className="md:col-span-3 bg-[#fffbf0] border-amber-200" color="bg-[#fffbf0]">
                        <HandHeading>Objectives Resolution (Dec 13)</HandHeading>
                        <div className="flex gap-4 mt-3">
                            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center font-bold text-xs text-center shrink-0">
                                JL Nehru
                            </div>
                            <div>
                                <p className="text-sm font-bold italic mb-2">"Independent Sovereign Republic"</p>
                                <div className="text-xs bg-amber-100 inline-block px-2 py-1 rounded text-amber-800 font-bold border border-amber-200">
                                    Adopted: Jan 22, 1947
                                </div>
                            </div>
                        </div>
                    </ArchitectCard>
                    <div className="md:col-span-2 flex items-center justify-center p-4">
                        <div className="text-center">
                            <div className="text-3xl mb-2">⬇️</div>
                            <div className="font-bold text-indigo-900">Became the PREAMBLE</div>
                            <div className="text-xs opacity-60">(Modified form)</div>
                        </div>
                    </div>
                </div>

                {/* --- ROW 5: INDEPENDENCE ACT --- */}
                <ArchitectCard className="mt-4 border-dashed border-2 border-indigo-300">
                    <HandHeading className="text-center">Changes by Independence Act 1947</HandHeading>
                    <div className="grid md:grid-cols-3 gap-4 mt-4 text-center">
                        <div className="p-3 bg-white shadow-sm rounded-lg">
                            <div className="font-bold text-lg text-indigo-700 mb-1">1. Sovereign</div>
                            <div className="text-xs">Could abrogate any British law.</div>
                        </div>
                        <div className="p-3 bg-white shadow-sm rounded-lg">
                            <div className="font-bold text-lg text-indigo-700 mb-1">2. Legislative</div>
                            <div className="text-xs">
                                Did double duty.<br />
                                <span className="opacity-70">Const? Dr. Prasad. Legis? G.V. Mavalankar.</span>
                            </div>
                        </div>
                        <div className="p-3 bg-white shadow-sm rounded-lg">
                            <div className="font-bold text-lg text-indigo-700 mb-1">3. Reduced</div>
                            <div className="text-xs">389 → 299<br />(Muslim League Withdrew)</div>
                        </div>
                    </div>
                </ArchitectCard>


                {/* --- ROW 6 & 7: COMMITTEES --- */}
                <SectionDivider title="Phase 3: Committees & Drafting" />

                {/* Major Committees */}
                <div className="grid md:grid-cols-2 gap-4">
                    <ArchitectCard>
                        <div className="flex justify-between items-center mb-3">
                            <HandHeading>Nehru & Patel</HandHeading>
                        </div>
                        <div className="space-y-4 text-sm">
                            <div className="border-l-4 border-blue-400 pl-3">
                                <span className="font-bold block text-blue-800">J.L. Nehru</span>
                                <ul className="list-disc pl-4 opacity-80 text-xs mt-1">
                                    <li>Union Powers</li>
                                    <li>Union Constitution</li>
                                    <li>States Committee</li>
                                </ul>
                            </div>
                            <div className="border-l-4 border-orange-400 pl-3">
                                <span className="font-bold block text-orange-800">Sardar Patel</span>
                                <ul className="list-disc pl-4 opacity-80 text-xs mt-1">
                                    <li>Provincial Constitution</li>
                                    <li>Advisory (Rights, Minorities)</li>
                                </ul>
                            </div>
                        </div>
                    </ArchitectCard>
                    <ArchitectCard>
                        <HandHeading>Dr. Rajendra Prasad</HandHeading>
                        <div className="h-full flex flex-col justify-center">
                            <ul className="space-y-2 text-sm font-bold text-slate-700">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-600" /> Rules of Procedure
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-600" /> Steering Committee
                                </li>
                            </ul>
                        </div>
                    </ArchitectCard>
                </div>

                {/* Drafting Committee (Critical Node) */}
                <div className="grid md:grid-cols-5 gap-4 pt-4">
                    <ArchitectCard className="md:col-span-3 bg-[#2d3748] text-slate-100 border-slate-600" color="bg-[#2d3748]">
                        <div className="absolute top-0 right-0 p-4 opacity-10"><PenTool size={80} /></div>
                        <h3 className="text-xl font-bold text-amber-400 mb-1 font-sans uppercase tracking-widest">Drafting Committee</h3>
                        <div className="text-xs opacity-60 mb-4 font-mono">Est. Aug 29, 1947</div>

                        <div className="space-y-4">
                            <div className="bg-slate-700/50 p-2 rounded border border-slate-600">
                                <div className="text-xs uppercase text-slate-400 font-bold">Chairman</div>
                                <div className="text-lg font-bold text-white">Dr. B.R. Ambedkar</div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div>1. N. Gopalaswamy Ayyangar</div>
                                <div>4. Syed Mohammad Saadullah</div>
                                <div>2. Alladi Krishnaswamy Ayyar</div>
                                <div>5. N. Madhava Rau <span className="opacity-50">(B.L. Mitter)</span></div>
                                <div>3. Dr. K.M. Munshi</div>
                                <div>6. T.T. Krishnamachari <span className="opacity-50">(D.P. Khaitan)</span></div>
                            </div>
                        </div>
                    </ArchitectCard>

                    <ArchitectCard className="md:col-span-2 flex flex-col justify-center text-center">
                        <HandHeading>Timeline</HandHeading>
                        <div className="space-y-3 mt-2">
                            <div className="flex justify-between text-xs border-b pb-1">
                                <span className="opacity-70">First Draft</span>
                                <span className="font-bold">Feb 1948</span>
                            </div>
                            <div className="flex justify-between text-xs border-b pb-1">
                                <span className="opacity-70">Second Draft</span>
                                <span className="font-bold">Oct 1948</span>
                            </div>
                            <div className="mt-2 bg-indigo-50 p-2 rounded">
                                <div className="text-2xl font-bold text-indigo-700">141 Days</div>
                                <div className="text-[10px] uppercase font-bold text-indigo-400">Total Sitting</div>
                            </div>
                        </div>
                    </ArchitectCard>
                </div>

                {/* --- ROW 8: ENACTMENT --- */}
                <SectionDivider title="Phase 4: Enactment & Trivia" />

                <div className="grid md:grid-cols-2 gap-4">
                    <ArchitectCard>
                        <Badge className="bg-slate-800 mb-2">Adoption</Badge>
                        <HandHeading>Nov 26, 1949</HandHeading>
                        <div className="text-sm italic opacity-80 mb-3">"Adopted, Enacted and gave to ourselves"</div>
                        <ul className="text-xs space-y-1 bg-slate-100 p-2 rounded">
                            <li><strong>Result:</strong> Constitution Day</li>
                            <li><strong>Active:</strong> Citizenship, Elections, Prov. Parliament.</li>
                        </ul>
                    </ArchitectCard>

                    <ArchitectCard className="border-orange-300 bg-orange-50/50" color="bg-orange-50/50">
                        <Badge className="bg-orange-600 mb-2 hover:bg-orange-700">Commencement</Badge>
                        <HandHeading className="text-orange-900">Jan 26, 1950</HandHeading>
                        <div className="text-sm italic opacity-80 mb-3">Republic Day</div>
                        <div className="text-xs bg-white p-2 rounded border border-orange-100 text-orange-800">
                            <strong>Why?</strong> Anniversary of Purna Swaraj (1930).
                            <br />
                            <strong>Repealed:</strong> Independence Act 1947.
                        </div>
                    </ArchitectCard>
                </div>

                {/* --- ROW 10: OTHERS & HINDI TEXT --- */}
                <SectionDivider title="Phase 5: Other Functions & Hindi Text" />

                {/* Other Functions */}
                <div className="grid md:grid-cols-2 gap-4">
                    {/* Left: National Symbols */}
                    <ArchitectCard>
                        <HandHeading>National Symbols</HandHeading>
                        <div className="space-y-3 mt-3">
                            <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                                <span className="text-2xl">🇮🇳</span>
                                <div>
                                    <div className="font-bold text-slate-800">National Flag</div>
                                    <div className="text-xs opacity-70">Adopted: July 22, 1947</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                                <Music className="text-indigo-600" size={24} />
                                <div>
                                    <div className="font-bold text-slate-800">Anthem & Song</div>
                                    <div className="text-xs opacity-70">Adopted: Jan 24, 1950</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🤵</span>
                                <div>
                                    <div className="font-bold text-slate-800">First President</div>
                                    <div className="text-xs opacity-70">Dr. Rajendra Prasad (Jan 24, 1950)</div>
                                </div>
                            </div>
                        </div>
                    </ArchitectCard>

                    {/* Right: International Status */}
                    <ArchitectCard className="bg-blue-50/50 border-blue-200" color="bg-blue-50/50">
                        <div className="flex justify-between items-start">
                            <HandHeading>Commonwealth</HandHeading>
                            <Globe className="text-blue-300" />
                        </div>
                        <div className="mt-2 space-y-2">
                            <div className="text-sm font-bold text-blue-900">May 1949: Ratified Membership</div>
                            <div className="text-xs bg-white p-2 rounded border border-blue-100 text-blue-800 leading-tight">
                                <strong>Significance:</strong> Accepted British King/Queen as "Symbolic Head". India remained a Sovereign Republic.
                            </div>
                        </div>
                    </ArchitectCard>
                </div>

                {/* Hindi Text & Summary */}
                <div className="grid md:grid-cols-5 gap-4 pt-4">
                    {/* Left: Hindi Text (3/5) */}
                    <ArchitectCard className="md:col-span-3">
                        <HandHeading>The Hindi Text</HandHeading>
                        <div className="flex gap-4 items-start mt-2">
                            <div className="bg-orange-100 text-orange-800 p-3 rounded-lg text-2xl font-bold">अ</div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Badge variant="outline" className="text-xs border-slate-400">58th Amendment, 1987</Badge>
                                    <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-800">Art 394-A</Badge>
                                </div>
                                <p className="text-sm opacity-80 leading-tight">
                                    Authorized the President to publish the translation of the Constitution in Hindi.
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-xs"><Users size={14} /></div>
                                <div className="text-xs">
                                    <strong>15 Women Members</strong><br />
                                    <span className="opacity-60">Sarojini Naidu, Hansa Mehta</span>
                                </div>
                            </div>
                        </div>
                    </ArchitectCard>

                    {/* Right: Sessions Summary (2/5) */}
                    <ArchitectCard className="md:col-span-2 text-center flex flex-col justify-center">
                        <HandHeading>Session Limits</HandHeading>
                        <div className="space-y-2 mt-2 text-xs">
                            <div className="flex justify-between border-b pb-1 border-dashed">
                                <span className="opacity-60">First Session</span>
                                <span className="font-bold">Dec 9, 1946</span>
                            </div>
                            <div className="flex justify-between border-b pb-1 border-dashed">
                                <span className="opacity-60">Last Session (11th)</span>
                                <span className="font-bold">Nov 14-26, 1949</span>
                            </div>
                            <div className="bg-slate-800 text-white p-2 rounded mt-2">
                                <div className="font-bold text-amber-400">Jan 24, 1950</div>
                                <div className="flex justify-center items-center gap-1 mt-1 opacity-80">
                                    <PenTool size={10} /> 284 Signatures
                                </div>
                            </div>
                        </div>
                    </ArchitectCard>
                </div>

                {/* --- ROW 9: TRIVIA MOSAIC --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-slate-200">
                        <div className="text-2xl mb-1">🐘</div>
                        <div className="text-xs font-bold uppercase">Symbol</div>
                        <div className="text-sm font-bold text-indigo-800">Elephant</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-slate-200">
                        <div className="text-2xl mb-1">✍️</div>
                        <div className="text-xs font-bold uppercase">Calligrapher</div>
                        <div className="text-[10px] font-bold leading-tight">Prem Behari Narain Raizada</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-slate-200">
                        <div className="text-2xl mb-1">🎨</div>
                        <div className="text-xs font-bold uppercase">Artist</div>
                        <div className="text-sm font-bold text-pink-700">Nand Lal Bose</div>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg shadow-sm text-center border border-red-100">
                        <div className="text-2xl mb-1">💬</div>
                        <div className="text-xs font-bold uppercase text-red-800">Criticism</div>
                        <div className="text-[10px] leading-tight text-red-700">"Drifting Committee", "Paradise of Lawyers"</div>
                    </div>
                </div>

                {/* FOOTER STATS */}
                <div className="flex justify-center gap-6 mt-8 text-xs font-bold opacity-60 font-mono">
                    <span>⏱️ 2Y 11M 18D</span>
                    <span>💰 ₹64 Lakhs</span>
                    <span>📜 11 Sessions</span>
                </div>

                {/* COMPLETION BUTTON */}
                <div className="flex justify-center pt-12">
                    <Button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
            relative px-8 py-6 text-lg font-bold rounded-full shadow-xl transition-all font-sans
            ${isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-900 hover:bg-blue-800'}
          `}
                    >
                        {isCompleted ?
                            <span className="flex items-center gap-2"><CheckCircle2 /> Architecture Mastered</span> :
                            <span className="flex items-center gap-2"><BadgeCheck /> Mark Architecture Complete</span>
                        }
                    </Button>
                </div>
            </div>
        </div>
    );
}
