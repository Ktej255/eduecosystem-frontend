"use client";

import React from "react";
import {
    Activity, Shield, Landmark, Scale, AlertTriangle,
    CheckCircle2, Info, Building2, Gavel, Users,
    BadgeCheck, Compass, MapPin, Hand,
    LayoutGrid, BookOpen, Maximize2, Megaphone,
    Printer, CircleDot, UserCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ElectionCommissionModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const RefereeContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0f4f8] min-h-screen p-4 md:p-8 font-sans selection:bg-blue-200">
        <div className="max-w-6xl mx-auto space-y-12">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, icon: Icon, color }: { title: string, icon: any, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`p-3 rounded-xl bg-card shadow-sm border-2 ${color}`}>
            <Icon className={color.replace('border-', 'text-')} size={24} />
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('border-', 'text-')} font-['Kalam']`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color.replace('border-', 'bg-')} opacity-20`}></div>
    </div>
);

const RefereeCard = ({ title, children, color = "border-blue-700", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-card border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

        <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 font-['Kalam'] ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-muted-foreground relative z-10 font-medium">
            {children}
        </div>
    </div>
);

export default function ElectionCommissionModule({ onComplete, isCompleted, chapterNumber = "43" }: ElectionCommissionModuleProps) {
    return (
        <RefereeContainer>
            {/* HERO SECTION */}
            <div className="relative bg-card border-4 border-blue-900 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(30,58,138,1)] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-blue-700 text-white font-['Kalam'] px-4 py-1 text-lg">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-blue-900"></div>
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">The Umpire of Democracy</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 font-['Kalam'] leading-tight">
                        Election Commission <br />
                        <span className="text-purple-700">Whistle & Cards</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed italic">
                        "The guardian of free and fair elections, ensuring the unbiased conduct of the democratic festival."
                    </p>
                </div>
            </div>

            {/* PHASE 1: COMPOSITION */}
            <SectionHeader title="Phase 1: Composition (The Team)" icon={Users} color="border-blue-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <RefereeCard title="Article 324: The Source" color="border-blue-700">
                    <div className="flex items-center justify-center p-4 bg-blue-50 rounded-xl mb-4 border-2 border-dashed border-blue-200">
                        <BadgeCheck size={48} className="text-blue-700" />
                    </div>
                    <p className="text-lg leading-snug">
                        Superintendence, direction, and control of elections to:
                    </p>
                    <ul className="grid grid-cols-2 gap-2 mt-4 text-sm font-bold">
                        <li className="flex items-center gap-2 bg-muted p-2 rounded-lg border border-border">
                            <Landmark size={16} className="text-blue-700" /> Parliament
                        </li>
                        <li className="flex items-center gap-2 bg-muted p-2 rounded-lg border border-border">
                            <Building2 size={16} className="text-blue-700" /> State Leg.
                        </li>
                        <li className="flex items-center gap-2 bg-muted p-2 rounded-lg border border-border">
                            <UserCheck size={16} className="text-blue-700" /> President
                        </li>
                        <li className="flex items-center gap-2 bg-muted p-2 rounded-lg border border-border">
                            <Users size={16} className="text-blue-700" /> Vice-Pres.
                        </li>
                    </ul>
                    <div className="mt-4 p-3 bg-red-50 border-2 border-red-200 rounded-xl">
                        <p className="text-xs font-bold text-red-800 uppercase flex items-center gap-2">
                            <AlertTriangle size={14} /> TRAP ALERT:
                        </p>
                        <p className="text-sm text-red-700 italic">
                            Elections to <span className="font-bold underline">Panchayats/Municipalities</span> are NOT done by ECI. They are handled by State Election Commission.
                        </p>
                    </div>
                </RefereeCard>

                <RefereeCard title="Evolution of Strength" color="border-purple-700">
                    <div className="relative space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-8 bg-blue-100 rounded flex items-center justify-center text-[10px] font-bold border border-blue-200">1950-89</div>
                            <div className="flex-1 h-[2px] bg-slate-200 relative">
                                <div className="absolute -top-1.5 left-0 w-3 h-3 rounded-full bg-blue-700"></div>
                            </div>
                            <span className="text-xs font-bold">Single Member</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-8 bg-purple-100 rounded flex items-center justify-center text-[10px] font-bold border border-purple-200">1989</div>
                            <div className="flex-1 h-[2px] bg-slate-200 relative">
                                <div className="absolute -top-1.5 left-1/4 w-3 h-3 rounded-full bg-purple-700"></div>
                            </div>
                            <span className="text-xs font-bold">3 Members (Vote Age 18)</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-8 bg-muted rounded flex items-center justify-center text-[10px] font-bold border border-border">1993...</div>
                            <div className="flex-1 h-[2px] bg-slate-200 relative">
                                <div className="absolute -top-1.5 right-0 w-3 h-3 rounded-full bg-green-700"></div>
                            </div>
                            <span className="text-xs font-bold">Present: 3 Members (CEC + 2 ECs)</span>
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-purple-50 rounded-xl border-2 border-purple-200 italic">
                        <p className="text-sm font-bold text-purple-900">Status Check (PYQ):</p>
                        <p className="text-xs text-purple-800 mt-1">
                            All three have <span className="font-bold underline">equal powers and equal salary</span> (same as SC Judge). Decisions are by majority.
                        </p>
                    </div>
                </RefereeCard>
            </div>

            {/* PHASE 2: INDEPENDENCE & FLAWS */}
            <SectionHeader title="Phase 2: Independence & Flaws" icon={Shield} color="border-red-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <RefereeCard title="Security of Tenure (The Removal Trap)" color="border-red-700">
                    <div className="space-y-4">
                        <div className="bg-slate-900 text-white p-4 rounded-xl border-t-4 border-blue-500">
                            <h4 className="font-bold text-blue-400 mb-1">Chief EC (CEC)</h4>
                            <p className="text-xs">Removed in SAME manner as <span className="underline text-blue-200">SC Judge</span>. Requires Special Majority in Parliament.</p>
                            <Badge className="mt-2 bg-blue-500/20 text-blue-300 border-blue-500/30">Stable Tenure</Badge>
                        </div>
                        <div className="bg-slate-900 text-white p-4 rounded-xl border-t-4 border-red-500 relative">
                            <h4 className="font-bold text-red-400 mb-1">Other ECs</h4>
                            <p className="text-xs">Removed by President <span className="underline text-red-200">on recommendation of CEC</span>.</p>
                            <div className="absolute top-2 right-2 animate-pulse">
                                <AlertTriangle className="text-red-500" size={16} />
                            </div>
                            <Badge className="mt-2 bg-red-500/20 text-red-300 border-red-500/30">Less Protected</Badge>
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground italic mt-4">
                        Note: Service conditions cannot be varied to disadvantage after appointment.
                    </p>
                </RefereeCard>

                <RefereeCard title="Constitutional Flaws (The Broken Wall)" color="border-red-700">
                    <div className="space-y-3">
                        <div className="flex gap-3 items-start p-3 bg-red-50 border border-red-100 rounded-lg">
                            <CircleDot size={16} className="text-red-700 shrink-0 mt-1" />
                            <p className="text-sm">No specific <span className="font-bold">qualifications</span> (legal/admin) prescribed in Constitution.</p>
                        </div>
                        <div className="flex gap-3 items-start p-3 bg-red-50 border border-red-100 rounded-lg">
                            <CircleDot size={16} className="text-red-700 shrink-0 mt-1" />
                            <p className="text-sm">No specified <span className="font-bold">term</span> in Constitution (6y/65y is via Act of Parliament).</p>
                        </div>
                        <div className="flex gap-3 items-start p-3 bg-red-50 border border-red-100 rounded-lg">
                            <CircleDot size={16} className="text-red-700 shrink-0 mt-1" />
                            <p className="text-sm">Retiring members are <span className="font-bold text-red-700 underline">NOT debarred</span> from further govt appointments. [PYQ]</p>
                        </div>
                    </div>
                </RefereeCard>
            </div>

            {/* PHASE 3: POWERS & FUNCTIONS */}
            <SectionHeader title="Phase 3: Powers & Functions" icon={Megaphone} color="border-blue-900" />

            <div className="grid md:grid-cols-3 gap-8">
                <RefereeCard title="Administrative" color="border-blue-900">
                    <ul className="text-xs space-y-3">
                        <li className="flex gap-2">
                            <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                            <span>Delimitation of Territorial Areas.</span>
                        </li>
                        <li className="flex gap-2">
                            <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                            <span>Prepare/Revise Electoral Rolls.</span>
                        </li>
                        <li className="flex gap-2">
                            <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                            <span>Recognize Parties & Allot Symbols.</span>
                        </li>
                        <li className="flex gap-2">
                            <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                            <span className="font-bold">Model Code of Conduct.</span>
                        </li>
                    </ul>
                </RefereeCard>

                <RefereeCard title="Quasi-Judicial" color="border-purple-800">
                    <ul className="text-xs space-y-3">
                        <li className="flex gap-2">
                            <Gavel size={14} className="text-purple-600 shrink-0" />
                            <span>Acts as a court for recognition/symbol disputes.</span>
                        </li>
                        <li className="flex gap-2">
                            <Gavel size={14} className="text-purple-600 shrink-0" />
                            <span>Advises President/Governor on <span className="font-bold underline">Disqualification</span>. Opinion is <span className="text-purple-700 font-black">Binding</span>.</span>
                        </li>
                    </ul>
                </RefereeCard>

                <RefereeCard title="Advisory" color="border-blue-500">
                    <ul className="text-xs space-y-3">
                        <li className="flex gap-2">
                            <Info size={14} className="text-blue-500 shrink-0" />
                            <span>Advises President on whether elections can be held during <span className="font-bold">President's Rule</span>.</span>
                        </li>
                    </ul>
                </RefereeCard>
            </div>

            {/* VVPAT FOOTER */}
            <div className="bg-card border-2 border-blue-900 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-md">
                <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                    <Printer size={40} className="text-blue-700" />
                </div>
                <div>
                    <h5 className="font-black text-blue-900 text-lg flex items-center gap-2">
                        VVPAT Note
                        <Badge variant="outline" className="border-blue-700 text-blue-700">Since 2013</Badge>
                    </h5>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        Voter Verifiable Paper Audit Trail allows the voter to verify that their vote was cast correctly. First used in <span className="font-bold">Nagaland (Noksen Assembly)</span>. In 2019 Lok Sabha, it was used in all seats.
                    </p>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-border pt-12 pb-12">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-blue-700 hover:bg-blue-800 text-white shadow-[0_10px_40px_-10px_rgba(30,58,138,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <BadgeCheck size={32} className="animate-bounce" />
                            ELECTION MASTERY ACHIEVED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Megaphone size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 43 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-muted-foreground font-bold font-['Kalam']">Signed: Guardian of the Ballot</p>
            </div>
        </RefereeContainer>
    );
}
