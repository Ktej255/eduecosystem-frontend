"use client";

import React, { useState } from "react";
import {
    Map, Shield, Landmark, Globe, AlertTriangle,
    CheckCircle2, Info, Building2, Gavel, Users,
    BadgeCheck, Compass, MapPin, HandMetal,
    LayoutGrid, BookOpen, Scaling
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ScheduledTribalAreasModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

// --- Design System: The Two Baskets ---

const TribalContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fefce8] min-h-screen p-4 md:p-8 font-sans selection:bg-amber-200">
        <div className="max-w-6xl mx-auto space-y-12">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, icon: Icon, color }: { title: string, icon: any, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`p-3 rounded-xl bg-white shadow-sm border-2 ${color}`}>
            <Icon className={color.replace('border-', 'text-')} size={24} />
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('border-', 'text-')} font-['Kalam']`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color.replace('border-', 'bg-')} opacity-20`}></div>
    </div>
);

const BasketCard = ({ title, children, color = "border-amber-900", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        {/* Tribal Art Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 font-['Kalam'] ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-800 relative z-10 font-medium">
            {children}
        </div>
    </div>
);

export default function ScheduledTribalAreasModule({ onComplete, isCompleted }: ScheduledTribalAreasModuleProps) {
    return (
        <TribalContainer>
            {/* HERO SECTION */}
            <div className="relative bg-white border-4 border-amber-950 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(120,53,15,1)] overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-50 rounded-full -mr-24 -mt-24 opacity-60"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-amber-900 text-white font-['Kalam'] px-4 py-1 text-lg">Chapter 37</Badge>
                        <div className="h-[2px] w-12 bg-amber-950"></div>
                        <span className="text-amber-700 font-bold uppercase tracking-widest text-sm">Special Protection</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-amber-950 mb-6 font-['Kalam'] leading-tight">
                        Scheduled & <br />
                        <span className="text-green-700">Tribal Areas</span>
                    </h1>
                    <p className="text-xl text-slate-700 max-w-2xl leading-relaxed italic">
                        "Indigenous communities require special constitutional protection to preserve their unique culture and facilitate development without assimilation."
                    </p>
                </div>
            </div>

            {/* PHASE 1: THE 5th SCHEDULE */}
            <SectionHeader title="Phase 1: The 5th Schedule (Art 244-1)" icon={Scaling} color="border-amber-900" />

            <div className="grid md:grid-cols-2 gap-8">
                <BasketCard title="Scheduled Areas (General List)" color="border-amber-900">
                    <div className="relative aspect-video bg-amber-50 rounded-xl border-2 border-amber-200 overflow-hidden mb-4 flex items-center justify-center">
                        <Map size={80} className="text-amber-200" />
                        <div className="absolute inset-0 flex items-center justify-center text-amber-900 font-black text-4xl opacity-10">10 STATES</div>
                    </div>
                    <p className="text-sm font-bold text-slate-500 uppercase pb-2 border-b">Coverage:</p>
                    <p className="text-xs text-slate-700 leading-relaxed font-bold italic">
                        AP, Telangana, Chhattisgarh, Gujarat, HP, Jharkhand, MP, Maharashtra, Odisha, Rajasthan.
                    </p>
                    <div className="mt-4 p-3 bg-amber-50 border-l-4 border-amber-900 rounded">
                        <p className="text-xs font-bold text-amber-900 uppercase">Declaration:</p>
                        <p className="text-sm">By <span className="font-bold underline">President</span> (in consultation with Governor). [PYQ]</p>
                    </div>
                    <div className="space-y-1 mt-4">
                        <div className="text-[10px] font-black text-slate-400">CRITERIA:</div>
                        <div className="grid grid-cols-2 gap-2 text-[10px]">
                            <div className="p-1 border rounded bg-white">● Tribal Pop Size</div>
                            <div className="p-1 border rounded bg-white">● Compactness</div>
                            <div className="p-1 border rounded bg-white">● Under-developed</div>
                            <div className="p-1 border rounded bg-white">● Eco Disparity</div>
                        </div>
                    </div>
                </BasketCard>

                <BasketCard title="Administration (The Machinery)" color="border-amber-900">
                    <div className="bg-amber-100 p-4 rounded-xl border-2 border-amber-900/10 mb-4">
                        <h4 className="font-black text-amber-950 mb-2 flex items-center gap-2">
                            <Users size={18} /> Tribal Advisory Council (TAC)
                        </h4>
                        <ul className="text-xs space-y-1 font-bold">
                            <li className="flex justify-between"><span>Max Members:</span> <span className="text-amber-800">20</span></li>
                            <li className="flex justify-between"><span>ST MLAs:</span> <span className="text-amber-800">3/4th [PYQ]</span></li>
                        </ul>
                    </div>
                    <div className="p-4 bg-red-50 border-2 border-red-700 rounded-xl relative">
                        <div className="absolute -top-3 left-4 bg-red-700 text-white text-[10px] px-2 py-0.5 rounded font-bold">CRITICAL</div>
                        <h4 className="font-black text-red-950 mb-1">Governor's Power:</h4>
                        <p className="text-xs leading-snug">
                            Can direct that a Law of Parliament/State does <span className="font-bold underline italic text-red-700">NOT apply</span> or applies with modifications.
                        </p>
                        <div className="mt-2 space-y-1 text-[10px] text-red-900 italic">
                            <p>● Prohibit land transfer.</p>
                            <p>● Regulate money lending.</p>
                            <p>● Annual report to President.</p>
                        </div>
                    </div>
                </BasketCard>
            </div>

            {/* PHASE 2: THE 6th SCHEDULE */}
            <SectionHeader title="Phase 2: The 6th Schedule (Art 244-2)" icon={Landmark} color="border-green-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <BasketCard title="Tribal Areas (Special List)" color="border-green-700">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl font-black text-green-700 font-['Kalam']">AMTM</div>
                        <div className="h-8 w-[2px] bg-green-200"></div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase">
                            Assam, Meghalaya, <br /> Tripura, Mizoram. [PYQ]
                        </div>
                    </div>
                    <div className="p-3 bg-red-100 border-2 border-red-300 rounded-xl text-red-900 font-bold text-xs flex gap-2 items-center">
                        <AlertTriangle size={16} /> TRAP: Manipur NOT included.
                    </div>
                    <p className="text-sm mt-4 bg-green-50 p-4 rounded-xl border border-green-200 italic">
                        "These tribes have distinct culture/customs and have not assimilated much with the mainstream. Hence, they are granted <span className="font-black underline">Autonomy</span>."
                    </p>
                </BasketCard>

                <BasketCard title="Autonomous District Councils (ADCs)" color="border-green-700">
                    <div className="bg-green-700 text-white p-3 rounded-t-xl font-black text-center text-sm">
                        "STATE WITHIN A STATE"
                    </div>
                    <div className="border-2 border-green-700 p-4 rounded-b-xl space-y-3 bg-white">
                        <div className="flex justify-between items-center text-xs font-bold border-b pb-2">
                            <span>TOTAL MEMBERS:</span>
                            <span className="text-green-700 text-lg">30</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[10px] font-black">
                            <div className="p-2 bg-green-50 rounded">4 NOMINATED <br /><span className="text-slate-400">(by Governor)</span></div>
                            <div className="p-2 bg-green-50 rounded">26 ELECTED <br /><span className="text-slate-400">(5 Year Term)</span></div>
                        </div>
                        <div className="bg-slate-50 p-3 rounded text-[10px]">
                            <p className="font-bold text-slate-400 uppercase mb-1">Powers [PYQ]:</p>
                            <p>Land, Forest, Canal water, Shifting cultivation, Marriage, Divorce.</p>
                            <p className="mt-1 text-green-700 italic">● Requires Governor's Assent.</p>
                        </div>
                    </div>
                </BasketCard>
            </div>

            {/* PHASE 3: COMPARISON & JUDICIAL */}
            <div className="grid md:grid-cols-3 gap-8">
                <BasketCard title="Judicial Powers" color="border-slate-900">
                    <div className="text-center py-2">
                        <Gavel size={40} className="mx-auto text-slate-900 mb-2" />
                    </div>
                    <ul className="text-xs space-y-2">
                        <li className="flex gap-2">
                            <CheckCircle2 size={14} className="text-green-600 shrink-0" />
                            <span>Can constitute <span className="font-bold">Village Councils/Courts</span> for suits between tribes.</span>
                        </li>
                        <li className="flex gap-2 border-t pt-2 mt-2">
                            <Info size={14} className="text-blue-600 shrink-0" />
                            <span className="italic">Jurisdiction of <span className="font-bold underline">High Court</span> over these suits is specified by Governor.</span>
                        </li>
                    </ul>
                </BasketCard>

                <BasketCard title="5th vs 6th Comparison" color="border-amber-900" className="md:col-span-2 bg-slate-900 text-white">
                    <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="space-y-4">
                            <Badge className="bg-amber-600 text-white">5th SCHEDULE</Badge>
                            <p>● Deals with Administration of Scheduled Areas.</p>
                            <p>● <span className="text-amber-400 italic">Tribal Advisory Council</span> has advisory role.</p>
                            <p>● Less autonomy, more State control.</p>
                        </div>
                        <div className="space-y-4 border-l border-slate-700 pl-4">
                            <Badge className="bg-green-600 text-white">6th SCHEDULE</Badge>
                            <p>● Deals with Administration of Tribal Areas (4 STATES).</p>
                            <p>● <span className="text-green-400 italic">ADCs</span> have legislative & judicial powers.</p>
                            <p>● High degree of Autonomy.</p>
                        </div>
                    </div>
                </BasketCard>
            </div>

            {/* FOOTER */}
            <div className="bg-white border-2 border-amber-950 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center text-white">
                        <BadgeCheck size={24} />
                    </div>
                    <div>
                        <h5 className="font-black text-amber-950">PESA ACT (1996)</h5>
                        <p className="text-xs text-slate-500 italic">"Self Rule" through Gram Sabha supremacy in 5th Schedule areas.</p>
                    </div>
                </div>
                <Button variant="outline" className="border-amber-900 text-amber-900 hover:bg-amber-50">
                    <BookOpen className="mr-2 h-4 w-4" /> RECALL PESA
                </Button>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-amber-200 pt-12 pb-12">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                            ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                            : "bg-amber-900 hover:bg-amber-800 text-white shadow-[0_10px_40px_-10px_rgba(120,53,15,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            TRIBAL PROTECTION MASTERED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <HandMetal size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 37 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-amber-700 font-bold font-['Kalam']">The Shield of indigenous India.</p>
            </div>
        </TribalContainer>
    );
}
