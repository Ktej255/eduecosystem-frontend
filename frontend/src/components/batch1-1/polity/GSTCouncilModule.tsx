"use client";

import React from "react";
import {
    Scale, Landmark, Calculator, PieChart,
    CheckCircle2, Info, Building2, Gavel, Users,
    BadgeCheck, BookOpen, UserCheck, LayoutGrid,
    Target, Weight, Handshake, ScrollText, Timer,
    Receipt, LandmarkIcon, Minus, Plus
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface GSTCouncilModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

const GSTContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f8f6fd] min-h-screen p-4 md:p-8 font-sans selection:bg-purple-100">
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

const GSTCard = ({ title, children, color = "border-purple-700", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute inset-x-0 top-0 h-1 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,#000_10px,#000_11px)] opacity-10"></div>

        <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 font-['Kalam'] ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-700 relative z-10 font-medium">
            {children}
        </div>
    </div>
);

export default function GSTCouncilModule({ onComplete, isCompleted }: GSTCouncilModuleProps) {
    return (
        <GSTContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#7e22ce] border-4 border-slate-900 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(126,34,206,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-white text-purple-700 font-['Kalam'] px-4 py-1 text-lg">Chapter 42</Badge>
                        <div className="h-[2px] w-12 bg-white/30"></div>
                        <span className="text-purple-100 font-bold uppercase tracking-widest text-sm">Pinnacle of Cooperative Federalism</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-['Kalam'] leading-tight">
                        GST Council <br />
                        <span className="text-purple-200">Federal Round Table</span>
                    </h1>
                    <p className="text-xl text-purple-50 max-w-2xl leading-relaxed italic">
                        "The constitutional joint forum of Centre and States, empowered to decide on tax rates, exemptions, and thresholds for the One Nation One Tax system."
                    </p>
                </div>
            </div>

            {/* PHASE 1: CONSTITUTION & COMPOSITION */}
            <SectionHeader title="Phase 1: Constitution & Composition" icon={Users} color="border-purple-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <GSTCard title="Structure (Art 279-A)" color="border-purple-700">
                    <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                            <h4 className="font-black text-purple-900 mb-2 flex items-center gap-2 italic">
                                101st Amendment Act, 2016 [PYQ]
                            </h4>
                            <p className="text-xs text-purple-700 font-bold">
                                Constitutional Body established by President within 60 days.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-slate-50 border rounded-lg text-center">
                                <span className="block text-xs font-bold text-slate-400">QUORUM</span>
                                <span className="text-2xl font-black text-purple-800">50%</span>
                            </div>
                            <div className="p-3 bg-slate-50 border rounded-lg text-center">
                                <span className="block text-xs font-bold text-slate-400">VETO POWER</span>
                                <span className="text-2xl font-black text-purple-800">Shared</span>
                            </div>
                        </div>
                    </div>
                </GSTCard>

                <GSTCard title="The Seats" color="border-purple-900">
                    <div className="relative aspect-video bg-slate-900 rounded-2xl flex items-center justify-center p-4 border-4 border-slate-800">
                        {/* THE ROUND TABLE VISUAL */}
                        <div className="w-32 h-32 rounded-full border-4 border-purple-600 bg-purple-900/50 flex items-center justify-center relative">
                            <div className="p-2 bg-purple-600 rounded-full text-white font-black text-[10px] absolute -top-4">CHAIR</div>
                            <div className="p-1.5 bg-blue-500 rounded-full text-[8px] absolute -left-4 font-bold">MoS</div>
                            <div className="p-1.5 bg-orange-500 rounded-full text-[8px] absolute -right-4 font-bold">STATES</div>
                            <span className="text-[10px] font-black text-white/50">COUNCIL</span>
                        </div>
                    </div>
                    <ul className="text-[10px] space-y-1 font-bold mt-4">
                        <li className="flex gap-2"><span>1.</span><span>Chair: Union Finance Minister. [PYQ]</span></li>
                        <li className="flex gap-2"><span>2.</span><span>Centre: Union MoS (Finance/Revenue).</span></li>
                        <li className="flex gap-2"><span>3.</span><span>States: Finance/Taxation Minister of each State.</span></li>
                    </ul>
                </GSTCard>
            </div>

            {/* PHASE 2: MATHEMATICS OF POWER */}
            <SectionHeader title="Phase 2: Voting Math (Weightage)" icon={Calculator} color="border-blue-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <GSTCard title="The Voting Equation [CRITICAL]" color="border-blue-700">
                    <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 text-center">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="flex flex-col items-center">
                                <Badge className="bg-blue-800">Centre</Badge>
                                <span className="text-2xl font-black text-blue-900">1/3</span>
                            </div>
                            <Plus size={24} className="text-slate-400" />
                            <div className="flex flex-col items-center">
                                <Badge className="bg-orange-600">States</Badge>
                                <span className="text-2xl font-black text-orange-900">2/3</span>
                            </div>
                            <Minus className="text-slate-400 rotate-90" size={24} />
                            <div className="flex flex-col items-center">
                                <Badge className="bg-green-600">Decision</Badge>
                                <span className="text-2xl font-black text-green-700">3/4</span>
                            </div>
                        </div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter italic underline decoration-blue-300 underline-offset-4">
                            Majority of not less than 3/4th weight required. [PYQ]
                        </p>
                    </div>
                </GSTCard>

                <RefereeCard title="Veto Implication" color="border-slate-800">
                    <div className="space-y-4">
                        <div className="flex gap-4 items-center">
                            <div className="p-3 bg-blue-100 rounded-full text-blue-800">
                                <Target size={20} />
                            </div>
                            <p className="text-xs">Centre has a <span className="font-bold">Veto</span> (States cannot pass anything alone as Centre holds 33%).</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="p-3 bg-orange-100 rounded-full text-orange-800">
                                <Weight size={20} />
                            </div>
                            <p className="text-xs">States have a <span className="font-bold">Veto</span> (Centre cannot pass anything alone).</p>
                        </div>
                        <div className="mt-4 p-3 bg-teal-50 border-2 border-teal-200 rounded-xl text-center">
                            <span className="text-xs font-black text-teal-800">FORCED CONSENSUS MODEL</span>
                        </div>
                    </div>
                </RefereeCard>
            </div>

            {/* PHASE 3: FUNCTIONS */}
            <SectionHeader title="Phase 3: Functions (The Mandate)" icon={Receipt} color="border-purple-900" />

            <div className="grid md:grid-cols-2 gap-8">
                <GSTCard title="Decision Power" color="border-purple-900">
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-3 p-2 bg-purple-50 rounded border border-purple-100">
                            <BadgeCheck className="text-purple-700" size={18} />
                            <span>Slab Rates (5%, 12%, 18%, 28%)</span>
                        </li>
                        <li className="flex items-center gap-3 p-2 bg-purple-50 rounded border border-purple-100">
                            <BadgeCheck className="text-purple-700" size={18} />
                            <span>Exemptions (0% items)</span>
                        </li>
                        <li className="flex items-center gap-3 p-2 bg-purple-50 rounded border border-purple-100">
                            <BadgeCheck className="text-purple-700" size={18} />
                            <span>Threshold Turnover Limits</span>
                        </li>
                    </ul>
                </GSTCard>

                <GSTCard title="Special Provisions" color="border-slate-900">
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className="p-4 bg-slate-100 rounded-2xl border-2 border-slate-200 mb-4">
                            <LandmarkIcon size={48} className="text-slate-600" />
                        </div>
                        <p className="text-xs text-center font-bold text-slate-600 italic">
                            Special focus on Himalayan and North-East states. Deciding taxes to be subsumed into GST.
                        </p>
                    </div>
                </GSTCard>
            </div>

            {/* COMPENSATION FOOTER */}
            <div className="bg-slate-900 text-white border-2 border-purple-700 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
                <div className="p-4 bg-purple-900/50 rounded-xl border border-purple-700">
                    <Timer size={48} className="text-purple-400" />
                </div>
                <div>
                    <h5 className="font-black text-purple-400 text-lg flex items-center gap-2">
                        Compensation Cess
                        <Badge className="bg-purple-700 text-white">5 Years</Badge>
                    </h5>
                    <p className="text-sm text-slate-300 mt-2">
                        Designed to compensate states for revenue loss due to GST. Initially for 5 years (ended June 2022), but Cess extended to repay loans taken during the transition.
                    </p>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                            ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                            : "bg-purple-700 hover:bg-purple-800 text-white shadow-[0_10px_40px_-10px_rgba(126,34,206,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            FISCAL COOPERATION ACHIEVED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <LayoutGrid size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 42 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold font-['Kalam']">Signed: One Nation, One Tax, One Council.</p>
            </div>
        </GSTContainer>
    );
}

const RefereeCard = ({ title, children, color = "border-blue-700", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 font-['Kalam'] ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-700 relative z-10 font-medium text-xs">
            {children}
        </div>
    </div>
);
