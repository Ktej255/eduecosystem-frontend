"use client";

import React from "react";
import {
    BrainCircuit, Users, Table, ArrowUpCircle,
    Info, BadgeCheck, BookOpen, UserCheck,
    SearchCheck, ShieldAlert, FileText, Landmark,
    ArrowBigUpDash, History, Rocket, Lightbulb,
    Network, Scaling, Target, PieChart,
    ArrowDownCircle, HelpCircle, Layers, Settings,
    UserPlus, FileBadge, Globe
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NITIAayogModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f8fafc] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-teal-100 selection:text-teal-900">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-white/70 rounded-3xl p-6 shadow-2xl border-2 border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0f766e] via-[#ea580c] to-[#374151] opacity-40"></div>
            {children}
        </div>
    </div>
);

const ThinkCard = ({ title, children, color = "border-[#0f766e]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(15,118,110,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10">
            <Lightbulb size={48} className={color.replace('border-', 'text-')} />
        </div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-700 relative z-10 font-bold">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color }: { number: string, title: string, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-black text-xl text-white shadow-lg ${color} rotate-2`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function NITIAayogModule({ onComplete, isCompleted }: NITIAayogModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#0f766e] border-4 border-slate-900 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(15,118,110,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#ea580c] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter 50</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-teal-50 font-bold uppercase tracking-widest text-sm italic">Policy & Strategic Think Tank</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        NITI Aayog <br />
                        <span className="text-[#ea580c] drop-shadow-md underline decoration-wavy decoration-white">The National Think Tank</span>
                    </h1>
                    <p className="text-xl text-teal-50 max-w-2xl leading-relaxed italic opacity-90">
                        From "Planning" to "Federalism". Replacing a 64-year-old top-down model with a bottom-up innovation Engine.
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
                    <BrainCircuit size={180} />
                </div>
            </div>

            {/* PHASE 1: ORIGIN */}
            <PhaseHeader number="1" title="Origin & Nature (The Shift)" color="bg-[#0f766e]" />

            <div className="grid md:grid-cols-2 gap-8">
                <ThinkCard title="The Basics (Jan 1, 2015)" color="border-[#ea580c]">
                    <div className="space-y-4">
                        <div className="p-4 bg-orange-50 border-2 border-[#ea580c] rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#ea580c]"></div>
                            <div className="flex items-center gap-4">
                                <Rocket className="text-[#ea580c]" size={32} />
                                <div>
                                    <p className="text-xs font-black uppercase text-orange-400 font-sans">Full Form</p>
                                    <p className="text-sm font-black italic">National Institution for Transforming India.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-white border-2 border-slate-100 rounded-xl text-center shadow-sm">
                                <p className="text-[10px] font-black text-slate-400 font-sans uppercase">Established [PYQ]</p>
                                <p className="text-sm font-black text-[#0f766e]">Jan 1, 2015</p>
                            </div>
                            <div className="p-3 bg-white border-2 border-slate-100 rounded-xl text-center shadow-sm">
                                <p className="text-[10px] font-black text-slate-400 font-sans uppercase">Replaced</p>
                                <p className="text-[11px] font-black text-[#ea580c]">Planning Commission (1950-2014)</p>
                            </div>
                        </div>
                        <div className="p-4 bg-slate-900 text-white rounded-2xl relative">
                            <BadgeCheck className="text-[#ea580c] absolute top-2 right-2" size={24} />
                            <h4 className="text-xs font-black uppercase text-slate-400 mb-2 font-sans">NATURE: [PYQ TRAP]</h4>
                            <ul className="text-xs space-y-1 font-bold italic">
                                <li className="flex items-center gap-2 decoration-red-500 line-through decoration-2 opacity-50">Constitutional</li>
                                <li className="flex items-center gap-2 decoration-red-500 line-through decoration-2 opacity-50">Statutory</li>
                                <li className="flex items-center gap-2 text-[#ea580c]">EXECUTIVE RESOLUTION</li>
                            </ul>
                        </div>
                    </div>
                </ThinkCard>

                <ThinkCard title="Guiding Principle (The Flip)" color="border-[#0f766e]">
                    <div className="flex flex-col items-center">
                        <div className="relative group perspective-1000">
                            <div className="w-48 h-32 bg-slate-100 border-2 border-dashed border-slate-400 rounded-xl flex items-center justify-center flex-col p-4 mb-4">
                                <ArrowDownCircle className="text-slate-400 mb-1" size={20} />
                                <p className="text-[10px] uppercase font-black text-slate-500">Old: Top-Down</p>
                                <p className="text-[8px] font-bold text-slate-400 text-center uppercase">PC (Planning Commission)</p>
                            </div>
                            <div className="relative z-10 w-48 h-32 bg-teal-50 border-4 border-[#0f766e] rounded-xl flex items-center justify-center flex-col p-4 shadow-xl transform hover:-rotate-2 transition-transform">
                                <ArrowUpCircle className="text-[#0f766e] mb-1" size={24} />
                                <p className="text-[12px] uppercase font-black text-[#0f766e]">New: Bottom-Up</p>
                                <p className="text-[8px] font-black text-slate-600 text-center uppercase">States as Equal Partners</p>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-teal-900 text-white rounded-2xl w-full text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-10"><Globe size={40} /></div>
                            <p className="text-xs font-black uppercase tracking-widest text-teal-400 font-sans mb-1">Motto</p>
                            <p className="text-lg font-black italic">Cooperative Federalism</p>
                            <p className="text-[10px] font-black text-teal-200 mt-2 uppercase tracking-tighter">Leading to "Competitive Federalism"</p>
                        </div>
                    </div>
                </ThinkCard>
            </div>

            {/* PHASE 2: COMPOSITION */}
            <PhaseHeader number="2" title="Composition (Team India)" color="bg-[#ea580c]" />

            <div className="grid md:grid-cols-2 gap-8">
                <ThinkCard title="The Hierarchy" color="border-[#374151]">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl">
                            <UserCheck className="text-[#374151]" size={32} />
                            <div>
                                <p className="text-xs font-black uppercase text-slate-400 font-sans">Chairperson</p>
                                <p className="text-lg font-black italic text-[#374151]">PRIME MINISTER</p>
                            </div>
                        </div>

                        <div className="p-4 bg-orange-50 border-2 border-[#ea580c] rounded-2xl">
                            <h4 className="text-xs font-black text-[#ea580c] uppercase mb-3 flex items-center gap-2 font-sans">
                                <Network size={16} /> Governing Council [PYQ]
                            </h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-[11px] font-black italic shadow-sm bg-white p-2 rounded border border-orange-100">
                                    <BadgeCheck size={14} className="text-[#ea580c]" /> CMs of all States
                                </li>
                                <li className="flex items-center gap-2 text-[11px] font-black italic shadow-sm bg-white p-2 rounded border border-orange-100">
                                    <BadgeCheck size={14} className="text-[#ea580c]" /> CMs of UTs (with Assembly)
                                </li>
                                <li className="flex items-center gap-2 text-[11px] font-black italic shadow-sm bg-white p-2 rounded border border-orange-100">
                                    <BadgeCheck size={14} className="text-[#ea580c]" /> Lt. Governors of UTs
                                </li>
                            </ul>
                        </div>

                        <div className="p-3 bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl">
                            <p className="text-[9px] font-black uppercase text-slate-400 font-sans underline mb-1">Regional Councils:</p>
                            <p className="text-[10px] font-bold italic text-slate-600 leading-tight">For specific issues affecting >1 State. Chaired by PM or nominee.</p>
                        </div>
                    </div>
                </ThinkCard>

                <ThinkCard title="Organizational Framework" color="border-[#0f766e]">
                    <div className="grid grid-cols-1 gap-3">
                        {[
                            { t: "Vice-Chairperson", d: "Appointed by PM. Rank: Cabinet Minister.", i: UserPlus },
                            { t: "CEO", d: "Appointed by PM (Fixed Tenure). Rank: Secretary. [PYQ]", i: Settings },
                            { t: "Members", d: "Full-time (Rank MoS) + Part-time (2 max).", i: Users },
                            { t: "Ex-Officio", d: "Max 4 Union Ministers (Nominated by PM).", i: FileBadge }
                        ].map((org, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 bg-teal-50 border border-teal-100 rounded-xl hover:border-[#0f766e] transition-colors group">
                                <div className="p-2 bg-white rounded-lg shadow-sm text-[#0f766e] group-hover:bg-[#0f766e] group-hover:text-white transition-colors">
                                    <org.i size={18} />
                                </div>
                                <div>
                                    <h5 className="text-[10px] font-black uppercase text-teal-800 font-sans tracking-tight">{org.t}</h5>
                                    <p className="text-[10px] font-bold text-slate-500 italic leading-tight">{org.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ThinkCard>
            </div>

            {/* PHASE 3: COMPARISON */}
            <PhaseHeader number="3" title="NITI vs Planning Commission" color="bg-[#374151]" />

            <div className="bg-white border-4 border-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook-dark.png')] opacity-5 pointer-events-none"></div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50 relative">
                        <div className="absolute top-2 right-4 text-[40px] font-black text-slate-200 select-none">OLD</div>
                        <h4 className="text-xl font-black text-slate-400 mb-6 italic">Planning Commission</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2"></div>
                                <p className="text-[11px] font-bold text-slate-500 italic leading-relaxed">Top-Down approach. States as spectators.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2"></div>
                                <p className="text-[11px] font-bold text-slate-500 italic leading-relaxed">Had power to <span className="text-red-600 underline">allocate funds</span> to States. [PYQ]</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2"></div>
                                <p className="text-[11px] font-bold text-slate-500 italic leading-relaxed">Imposed policies on States (One size fits all).</p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-8 bg-teal-50 relative border-l-4 border-teal-500 border-dashed">
                        <div className="absolute top-2 right-4 text-[40px] font-black text-teal-100 select-none">NEW</div>
                        <h4 className="text-xl font-black text-[#0f766e] mb-6 italic">NITI Aayog</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#0f766e] rounded-full mt-2"></div>
                                <p className="text-[11px] font-black text-slate-900 italic leading-relaxed">Bottom-Up approach. States as equal partners.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#0f766e] rounded-full mt-2"></div>
                                <p className="text-[11px] font-black text-slate-900 italic leading-relaxed">NO power to allocate funds. (Only policy advisor). [HIGH YIELD]</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#0f766e] rounded-full mt-2"></div>
                                <p className="text-[11px] font-black text-slate-900 italic leading-relaxed">Platform for <span className="text-[#ea580c] font-black">National Development Agenda</span>.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* FOOTER: THE PILLARS */}
            <div className="bg-[#ea580c] text-white border-4 border-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <PieChart size={120} />
                </div>
                <div className="relative z-10">
                    <h4 className="text-2xl font-black italic underline decoration-teal-900 mb-6 flex items-center gap-3">
                        <Layers size={28} /> The 7 Pillars & Indices
                    </h4>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black uppercase text-orange-200 font-sans tracking-widest">The 7 Pillars:</p>
                            <div className="flex flex-wrap gap-2">
                                {["Pro-People", "Pro-Activity", "Participation", "Empowering", "Inclusion", "Equality", "Transparency"].map((p, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-black uppercase italic">{p}</span>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-3">
                            <p className="text-[10px] font-black uppercase text-orange-200 font-sans tracking-widest">Key Performance Indices:</p>
                            <div className="grid grid-cols-1 gap-2">
                                <div className="flex items-center gap-3 bg-white/10 p-2 rounded-xl border border-white/20 group hover:bg-white/20 transition-all cursor-default">
                                    <Target className="text-teal-400" size={16} />
                                    <p className="text-[11px] font-black italic">SDG India Index [PYQ]</p>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 p-2 rounded-xl border border-white/20 group hover:bg-white/20 transition-all cursor-default">
                                    <Target className="text-teal-400" size={16} />
                                    <p className="text-[11px] font-black italic">India Innovation Index</p>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 p-2 rounded-xl border border-white/20 group hover:bg-white/20 transition-all cursor-default">
                                    <Target className="text-teal-400" size={16} />
                                    <p className="text-[11px] font-black italic">Export Preparedness Index</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                            ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                            : "bg-[#0f766e] hover:bg-teal-900 text-white shadow-[0_10px_40px_-10px_rgba(15,118,110,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            TRANSFORMATION MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <BrainCircuit size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 50 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest">National Institution for Transforming India.</p>
            </div>
        </ScrapbookContainer>
    );
}
