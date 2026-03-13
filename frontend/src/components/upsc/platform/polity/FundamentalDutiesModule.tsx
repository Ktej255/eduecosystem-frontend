"use client";

import React, { useState } from "react";
import {
    Shield, Flag, Heart, Leaf, Globe, BookOpen,
    Users, Gavel, Handshake, Microscope, Landmark,
    AlertTriangle, CheckCircle2, Feather, Scroll
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FundamentalDutiesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

// --- Design System: The Citizen's Pledge ---

const PledgeContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fffbeb] min-h-screen p-4 md:p-8 font-sans selection:bg-orange-200 selection:text-orange-900 relative">
        {/* Corkboard / Paper Texture Effect */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
        <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif tracking-tight">{title}</h2>
            {subtitle && <p className="text-sm text-muted-foreground italic mt-1 font-handwriting">{subtitle}</p>}
        </div>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
    </div>
);

const PledgeCard = ({ title, children, icon: Icon, colorClass = "bg-card", borderColor = "border-border", badge }: { title: string, children: React.ReactNode, icon?: any, colorClass?: string, borderColor?: string, badge?: React.ReactNode }) => (
    <div className={`relative ${colorClass} border-2 ${borderColor} rounded-lg p-6 shadow-sm hover:shadow-md transition-all`}>
        {badge && (
            <div className="absolute -right-2 -top-2">
                {badge}
            </div>
        )}
        <div className="flex items-start gap-4 mb-3">
            {Icon && (
                <div className="p-3 bg-card/80 rounded-full border border-black/5 shadow-sm">
                    <Icon size={24} className="opacity-80 text-muted-foreground" />
                </div>
            )}
            <div className="flex-1">
                <h3 className="font-bold text-lg leading-tight text-foreground font-serif">{title}</h3>
            </div>
        </div>
        <div className="text-sm space-y-2 opacity-90 leading-relaxed font-handwriting pl-1">
            {children}
        </div>
    </div>
);

const ClusterHeader = ({ title, color, icon: Icon }: { title: string, color: string, icon: any }) => (
    <div className={`flex items-center justify-center gap-2 py-2 px-6 rounded-t-xl ${color} text-white shadow-sm mx-4`}>
        <Icon size={16} />
        <div className="font-bold uppercase tracking-widest text-sm">{title}</div>
    </div>
);

export default function FundamentalDutiesModule({ onComplete, isCompleted, chapterNumber = "10" }: FundamentalDutiesModuleProps) {
    return (
        <PledgeContainer>
            {/* HERO */}
            <div className="bg-[#fff] p-8 md:p-12 rounded-xl shadow-xl relative overflow-hidden border-8 border-double border-border">
                {/* Tri-color Accent */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-white to-green-600 opacity-80"></div>

                <div className="relative z-10 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="bg-slate-900 text-white p-3 rounded-full shadow-lg">
                            <Feather size={32} />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-muted-foreground font-bold uppercase tracking-widest text-xs mb-2">
                        <Scroll size={14} /> Chapter {chapterNumber} &bull; Part IV-A (Article 51A)
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 font-serif text-foreground">The Citizen's Pledge</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-handwriting italic">
                        "Rights and Duties are correlative and inseparable."
                    </p>
                </div>
            </div>

            {/* PHASE 1: THE ORIGIN */}
            <SectionHeader title="Phase 1: Origin & Amendment" subtitle="The Source Code of Duty" />
            <div className="grid md:grid-cols-2 gap-8">
                {/* Left: History */}
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm relative rotate-[-1deg]">
                    <div className="absolute -top-3 -left-3">
                        <Badge className="bg-slate-800 text-white hover:bg-slate-700">Ref: USSR</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 border-b pb-2">
                        <BookOpen className="text-orange-600" /> The History
                    </h3>
                    <ul className="space-y-4 text-sm font-handwriting text-muted-foreground">
                        <li className="flex gap-3">
                            <span className="font-bold text-foreground min-w-[80px]">Source:</span>
                            <span>USSR (Now Russia). <span className="text-red-500 font-bold text-[10px] ml-1">[PYQ]</span></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-foreground min-w-[80px]">Committee:</span>
                            <span>Swaran Singh Committee (1976).</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-foreground min-w-[80px]">Recs:</span>
                            <span>Recommended 8 duties. Govt enacted 10.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-foreground min-w-[80px]">Rejection:</span>
                            <span className="bg-red-50 text-red-800 px-1 rounded">Penalty/Punishment for non-performance was REJECTED.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-foreground min-w-[80px]">Amendment:</span>
                            <span><strong>42nd AA, 1976</strong> (Mini Constitution). <span className="text-red-500 font-bold text-[10px] ml-1">[PYQ]</span></span>
                        </li>
                    </ul>
                </div>

                {/* Right: The 11th Duty */}
                <div className="bg-green-50 p-6 rounded-xl border border-green-200 shadow-sm relative rotate-[1deg]">
                    <div className="absolute -top-3 -right-3">
                        <div className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm animate-pulse">NEW ARRIVAL</div>
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2 border-b border-green-200 pb-2">
                        <Users className="text-green-700" /> The 11th Duty
                    </h3>
                    <div className="space-y-4 text-sm font-handwriting text-green-800">
                        <div className="bg-card/50 p-3 rounded border border-green-100">
                            <strong>Added By:</strong> 86th Constitutional Amendment Act, 2002. <span className="text-green-600 font-bold text-[10px] ml-1">[PYQ]</span>
                        </div>
                        <p>
                            It shall be the duty of every citizen who is a parent or guardian to provide opportunities for education to his child or ward between the age of <strong>6 and 14 years</strong>.
                        </p>
                    </div>
                </div>
            </div>

            {/* PHASE 2: THE 11 DUTIES (CLUSTERS) */}
            <SectionHeader title="Phase 2: The 11 Duties" subtitle="Grouped by Civic Themes" />

            <div className="space-y-8">
                {/* CLUSTER A: NATION */}
                <div className="bg-orange-50/30 rounded-2xl border border-orange-100 pb-6">
                    <ClusterHeader title="Cluster A: Nation & Freedom" color="bg-orange-600" icon={Flag} />
                    <div className="grid md:grid-cols-2 gap-4 p-4">
                        <PledgeCard title="Ideals & Symbols" icon={Flag} borderColor="border-orange-200"
                            badge={<Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 text-[10px]">PYQ TRAP</Badge>}>
                            <span className="font-bold">(a)</span> To abide by Constitution and respect its ideals, institutions, National Flag and National Anthem. <br />
                            <span className="text-xs text-red-500 mt-2 block font-sans">**Note: Respecting 'National Song' is NOT explicitly mentioned.**</span>
                        </PledgeCard>

                        <PledgeCard title="Freedom Struggle" icon={Feather} borderColor="border-orange-200">
                            <span className="font-bold">(b)</span> To cherish and follow the noble ideals that inspired the national struggle for freedom.
                        </PledgeCard>

                        <PledgeCard title="Sovereignty" icon={Shield} borderColor="border-orange-200">
                            <span className="font-bold">(c)</span> To uphold and protect the Sovereignty, Unity and Integrity of India.
                        </PledgeCard>

                        <PledgeCard title="National Service" icon={Users} borderColor="border-orange-200">
                            <span className="font-bold">(d)</span> To defend the country and render national service when called upon to do so.
                        </PledgeCard>
                    </div>
                </div>

                {/* CLUSTER B: SOCIETY */}
                <div className="bg-card/50 rounded-2xl border border-border pb-6">
                    <ClusterHeader title="Cluster B: Society & Nature" color="bg-slate-700" icon={Globe} />
                    <div className="grid md:grid-cols-2 gap-4 p-4">
                        <PledgeCard title="Harmony & Brotherhood" icon={Handshake} borderColor="border-border">
                            <span className="font-bold">(e)</span> To promote Harmony and spirit of common brotherhood; to renounce practices derogatory to the dignity of women.
                        </PledgeCard>

                        <PledgeCard title="Composite Culture" icon={Landmark} borderColor="border-border">
                            <span className="font-bold">(f)</span> To value and preserve the rich heritage of our Composite Culture.
                        </PledgeCard>

                        <PledgeCard title="Natural Environment" icon={Leaf} borderColor="border-green-300" colorClass="bg-green-50/50">
                            <span className="font-bold">(g)</span> To protect and improve the Natural Environment (forests, lakes, rivers, wildlife) and have compassion for living creatures.
                        </PledgeCard>

                        <PledgeCard title="Scientific Temper" icon={Microscope} borderColor="border-blue-300" colorClass="bg-blue-50/50">
                            <span className="font-bold">(h)</span> To develop the Scientific Temper, humanism and spirit of inquiry and reform.
                        </PledgeCard>
                    </div>
                </div>

                {/* CLUSTER C: CIVIC */}
                <div className="bg-blue-50/30 rounded-2xl border border-blue-100 pb-6">
                    <ClusterHeader title="Cluster C: Civic Responsibility" color="bg-blue-800" icon={Gavel} />
                    <div className="grid md:grid-cols-2 gap-4 p-4">
                        <PledgeCard title="Public Property" icon={AlertTriangle} borderColor="border-blue-200">
                            <span className="font-bold">(i)</span> To safeguard Public Property and to abjure violence.
                        </PledgeCard>

                        <PledgeCard title="Excellence" icon={CheckCircle2} borderColor="border-blue-200">
                            <span className="font-bold">(j)</span> To strive towards Excellence in all spheres of individual and collective activity.
                        </PledgeCard>
                    </div>
                </div>
            </div>


            {/* PHASE 3: STATUS & SIGNIFICANCE */}
            <SectionHeader title="Phase 3: Legal Status" subtitle="Enforceability & Significance" />
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                    <h3 className="font-bold text-lg mb-3">Non-Justiciable</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex gap-2">
                            <span className="text-red-500 font-bold">✖</span>
                            <span><strong>Direct Enforcement:</strong> NO. Courts cannot enforce them directly via writs.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-green-600 font-bold">✔</span>
                            <span><strong>Parliament's Power:</strong> Parliament CAN enforce them by suitable legislation.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">ℹ</span>
                            <span><strong>Applicability:</strong> Confined to Citizens Only. <span className="text-xs text-red-500 font-bold">[PYQ]</span></span>
                        </li>
                    </ul>
                </div>

                <div className="bg-slate-800 text-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg mb-3 text-orange-400">Verma Committee (1999)</h3>
                    <p className="text-xs opacity-70 mb-4">Identified legal provisions for implementation of FDs:</p>
                    <ul className="space-y-2 text-sm opacity-90">
                        <li>• Prevention of Insults to National Honour Act (1971)</li>
                        <li>• Wildlife Protection Act (1972)</li>
                        <li>• Unlawful Activities Prevention Act (UAPA)</li>
                        <li>• Representation of People Act (1951)</li>
                    </ul>
                </div>
            </div>

            {/* FOOTER */}
            <div className="mt-12 bg-card rounded-xl p-8 border-2 border-border shadow-xl text-center">
                <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                        <Heart size={32} fill="currentColor" className="text-blue-600" />
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-2">"Rights and Duties are Correlative"</h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
                    "In the past, people laid too much emphasis on rights... it is necessary to emphasize obligations." <br /> - H.R. Gokhale
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
                        <span className="flex items-center gap-2"><CheckCircle2 /> CHAPTER {chapterNumber} COMPLETED</span> :
                        <span className="flex items-center gap-2"><Feather /> MARK CHAPTER {chapterNumber} COMPLETE</span>
                    }
                </Button>
            </div>
        </PledgeContainer>
    );
}
