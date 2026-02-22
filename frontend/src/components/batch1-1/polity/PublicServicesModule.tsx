"use client";

import React from "react";
import {
    Shield, Briefcase, Landmark,
    Gavel, Award, History,
    ArrowRight, Sparkles, Zap,
    Info, AlertTriangle, Scale,
    UserCheck, SearchCheck, Globe,
    Target, ScrollText, BadgeCheck,
    CheckCircle2, Ban, ShieldAlert,
    LayoutGrid, Pyramid, HeartHandshake,
    CheckSquare, Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PublicServicesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f1f5f9] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-blue-100 selection:text-blue-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#374151] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-5" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 10 10 L 990 10 L 990 990 L 10 990 Z" fill="none" stroke="#000" strokeWidth="4" strokeDasharray="15 10" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-[#1d4ed8] opacity-30"></div>
            {children}
        </div>
    </div>
);

const BureaucratCard = ({ title, children, color = "border-[#374151]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-card border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(55,65,81,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            <LayoutGrid size={64} className={color.replace('border-', 'text-')} />
        </div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-foreground relative z-10 font-bold">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color }: { number: string, title: string, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`w-12 h-12 ${color} text-white rounded-lg shadow-xl flex items-center justify-center font-black text-xl rotate-3 border-2 border-white`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function PublicServicesModule({ onComplete, isCompleted, chapterNumber = "75" }: PublicServicesModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#374151] border-4 border-[#1f2937] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(55,65,81,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-card/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#1d4ed8] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-card/30"></div>
                        <span className="text-slate-300 font-bold uppercase tracking-widest text-sm italic">The Steel Frame</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Public <br /> <span className="text-blue-300">Services</span> <br />
                        <span className="text-[#ca8a04] drop-shadow-md underline decoration-wavy decoration-white italic">of India</span>
                    </h1>
                    <p className="text-xl text-slate-200 max-w-2xl leading-relaxed italic opacity-90">
                        "The backbone of administration. Understanding the hierarchy, creation, and the constitutional shield for India's civil servants."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Pyramid size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: CLASSIFICATION */}
            <PhaseHeader number="1" title="Phase 1: Classification (The Hierarchy)" color="bg-blue-700" />

            <div className="relative group p-10 bg-muted border-4 border-[#374151] border-dashed rounded-[3rem] shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12 group-hover:opacity-10 transition-opacity"><Pyramid size={200} /></div>
                <div className="max-w-3xl mx-auto space-y-12 relative z-10">
                    <h4 className="text-2xl font-black text-[#1d4ed8] italic text-center underline decoration-[#ca8a04] decoration-4 underline-offset-8 uppercase mb-8">The Three Tiers</h4>

                    <div className="flex flex-col gap-6">
                        {/* THE PYRAMID MOCKUP */}
                        <div className="space-y-4">
                            <div className="p-6 bg-[#1d4ed8] text-white rounded-2xl border-4 border-[#1e3a8a] text-center shadow-lg transform hover:scale-105 transition-transform">
                                <h5 className="font-black text-xl mb-2">All India Services (AIS)</h5>
                                <p className="text-xs opacity-90 italic">Top Tier: Common to Centre & States. (IAS, IPS, IFoS created 1966 [PYQ]).</p>
                            </div>
                            <div className="p-6 bg-slate-400 text-white rounded-2xl border-4 border-slate-600 text-center shadow-lg transform hover:scale-105 transition-transform w-[90%] mx-auto">
                                <h5 className="font-black text-xl mb-2">Central Services</h5>
                                <p className="text-xs opacity-90 italic">Middle Tier: Work under Central Govt (IFS, IRS, IPoS).</p>
                            </div>
                            <div className="p-6 bg-muted text-[#374151] rounded-2xl border-4 border-[#374151] text-center shadow-lg transform hover:scale-105 transition-transform w-[80%] mx-auto">
                                <h5 className="font-black text-xl mb-2">State Services</h5>
                                <p className="text-xs opacity-90 italic">Base Tier: Work under State Govt (PAS, PPS).</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-card border-4 border-[#ca8a04] rounded-3xl relative overflow-hidden shadow-xl italic">
                        <div className="absolute top-0 right-0 p-2 opacity-10"><Landmark size={48} className="text-[#ca8a04]" /></div>
                        <h4 className="font-black text-[#b45309] uppercase text-sm mb-4">Article 312 (New AIS Creation) [PYQ]</h4>
                        <div className="space-y-4 text-sm font-bold text-muted-foreground">
                            <p className="flex items-center gap-2"><ArrowRight className="text-[#b45309]" /> Parliament can create a new All India Service.</p>
                            <div className="p-4 bg-[#ca8a04]/5 border-l-4 border-[#ca8a04] rounded">
                                <span className="text-xs font-black">CRITICAL CONDITION:</span>
                                <p className="text-xs mt-1">Resolution must be passed by <span className="text-[#b45309] underline">Rajya Sabha</span> first with <span className="text-[#b45309] underline">2/3rd Majority</span> of members present and voting. [Federal Power]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 2: DOCTRINE OF PLEASURE */}
            <PhaseHeader number="2" title="Phase 2: Doctrine of Pleasure (Art 310)" color="bg-slate-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <BureaucratCard title="The Rule of Pleasure" color="border-slate-800">
                    <div className="p-5 bg-muted border-x-4 border-slate-600 rounded-3xl relative overflow-hidden group italic">
                        <BadgeCheck className="absolute top-0 right-0 p-2 opacity-10 text-muted-foreground" size={40} />
                        <h4 className="font-black text-muted-foreground uppercase text-xs mb-4">Principle</h4>
                        <p className="text-[12px] leading-relaxed">
                            Civil servants hold office during the pleasure of the <span className="text-blue-700">President</span> (Centre) or <span className="text-blue-700">Governor</span> (State).
                            <br /><br />
                            Meaning: Theoretically, they can be dismissed without cause.
                        </p>
                    </div>
                </BureaucratCard>

                <BureaucratCard title="Constitutional Exceptions" color="border-red-800">
                    <div className="p-6 bg-red-900 text-white rounded-[2rem] relative shadow-xl space-y-4 border-b-8 border-red-950 italic">
                        <Ban className="text-red-300 group-hover:rotate-12 transition-transform" size={32} />
                        <h4 className="text-xs font-black uppercase text-red-200 underline underline-offset-4 tracking-widest">Fixed Tenures</h4>
                        <p className="text-xs font-bold leading-tight opacity-90">
                            The Constitution EXCLUDES the following from the doctrine:
                        </p>
                        <ul className="grid grid-cols-2 gap-2 text-[10px] font-black">
                            <li className="flex items-center gap-1"><Badge variant="outline" className="text-white border-white">JUDGES</Badge></li>
                            <li className="flex items-center gap-1"><Badge variant="outline" className="text-white border-white">CAG</Badge></li>
                            <li className="flex items-center gap-1"><Badge variant="outline" className="text-white border-white">CEC</Badge></li>
                            <li className="flex items-center gap-1"><Badge variant="outline" className="text-white border-white">PSC MEMBERS</Badge></li>
                        </ul>
                    </div>
                </BureaucratCard>
            </div>

            {/* PHASE 3: CONSTITUTIONAL SAFEGUARDS */}
            <PhaseHeader number="3" title="Phase 3: The Shield (Art 311)" color="bg-[#b45309]" />

            <div className="relative p-10 bg-card border-4 border-[#ca8a04] rounded-[3rem] shadow-xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:opacity-25 transition-opacity"><Shield size={180} className="text-[#ca8a04]" /></div>
                <div className="max-w-4xl mx-auto space-y-12 relative z-10 italic">

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 bg-[#ca8a04]/5 border-2 border-[#ca8a04] rounded-3xl relative group shadow-md">
                            <Shield size={32} className="text-[#b45309] mb-4" />
                            <h4 className="text-lg font-black text-[#b45309] mb-2 uppercase">No Subordinate Action [PYQ]</h4>
                            <p className="text-[12px] font-bold text-muted-foreground leading-relaxed">
                                A civil servant cannot be dismissed or removed by an authority <span className="text-red-700 underline">subordinate</span> to that by which he was appointed.
                            </p>
                        </div>
                        <div className="p-6 bg-blue-50 border-2 border-[#1d4ed8] rounded-3xl relative group shadow-md">
                            <Info size={32} className="text-blue-700 mb-4" />
                            <h4 className="text-lg font-black text-blue-900 mb-2 uppercase">Right to be Heard</h4>
                            <p className="text-[12px] font-bold text-muted-foreground leading-relaxed">
                                No dismissal/reduction in rank without an inquiry where he is informed of charges and given a <span className="text-blue-700 underline">reasonable opportunity</span> of being heard.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border-t-8 border-red-600 relative overflow-hidden group">
                        <ShieldAlert className="absolute top-2 right-2 text-red-600 opacity-20" size={80} />
                        <h4 className="text-2xl font-black italic underline decoration-red-600 mb-6">Exceptions: Where Shield Fails [PYQ]</h4>
                        <div className="grid md:grid-cols-3 gap-6 text-[10px] font-black uppercase text-center">
                            <div className="p-4 bg-card/10 rounded-2xl space-y-2">
                                <Gavel className="mx-auto text-red-400" />
                                <p>Convicton on Criminal Charge</p>
                            </div>
                            <div className="p-4 bg-card/10 rounded-2xl space-y-2">
                                <ShieldAlert className="mx-auto text-red-400" />
                                <p>Security of the State (satisfied by President)</p>
                            </div>
                            <div className="p-4 bg-card/10 rounded-2xl space-y-2">
                                <Ban className="mx-auto text-red-400" />
                                <p>Inquiry Not Practicable (Reasons recorded in writing)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER: RECRUITMENT AGENCIES */}
            <div className="mt-8 p-10 bg-[#374151] text-white border-4 border-[#ca8a04] rounded-[3rem] relative overflow-hidden shadow-2xl group text-center italic">
                <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-sm"></div>
                <div className="relative z-10 space-y-6">
                    <Award className="mx-auto text-[#ca8a04] group-hover:scale-110 transition-transform" size={48} />
                    <h4 className="text-3xl font-black italic underline decoration-white decoration-4 underline-offset-8">Recruitment Machinery</h4>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        {['UPSC (AIS & Group A/B)', 'SPSC (State Services)', 'SSC (Lower-level Central)'].map(agency => (
                            <Badge key={agency} className="px-6 py-2 bg-card/10 border-2 border-white/20 text-lg hover:bg-[#ca8a04]/20 transition-colors">
                                {agency}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#374151] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#374151] hover:bg-blue-900 text-white shadow-[0_10px_40px_-10px_rgba(55,65,81,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            STAFFING MASTER GRADUATED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Briefcase size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-muted-foreground font-bold italic tracking-widest text-center uppercase">Classification • Safeguards • Merit.</p>
            </div>
        </ScrapbookContainer>
    );
}
