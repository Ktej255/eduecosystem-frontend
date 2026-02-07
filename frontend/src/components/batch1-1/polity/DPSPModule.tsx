"use client";

import React, { useState } from "react";
import {
    Scale, Scroll, Gavel, Building2, UserCheck, Heart,
    Users, Briefcase, Handshake, Ban, Milk, GraduationCap,
    Split, Globe, ArrowRight, CheckCircle2, Factory, Leaf,
    BadgeCheck, BookOpen, AlertTriangle, ShieldCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DPSPModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

// --- Design System: The Governance Blueprint ---

const BlueprintContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0f7ff] min-h-screen p-4 md:p-8 font-sans selection:bg-blue-200 selection:text-blue-900 relative">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
    <div className="border-b-2 border-slate-300 pb-2 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 font-serif tracking-tight">{title}</h2>
        {subtitle && <p className="text-sm text-slate-500 italic mt-1 font-handwriting">{subtitle}</p>}
    </div>
);

const BlueprintCard = ({ title, article, children, icon: Icon, colorClass = "bg-white", borderColor = "border-slate-300", stamp }: { title: string, article?: string, children: React.ReactNode, icon?: any, colorClass?: string, borderColor?: string, stamp?: string }) => (
    <div className={`relative ${colorClass} border-2 ${borderColor} rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow`}>
        {stamp && (
            <div className="absolute -right-2 -top-2 rotate-[15deg] bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm z-20 border-2 border-white">
                {stamp}
            </div>
        )}
        <div className="flex items-start justify-between mb-3 border-b border-black/5 pb-2">
            <div>
                {article && <div className="text-xs font-bold uppercase opacity-60 mb-0.5">{article}</div>}
                <h3 className="font-bold text-lg leading-tight">{title}</h3>
            </div>
            {Icon && (
                <div className="p-2 bg-white/50 rounded-full border border-black/10">
                    <Icon size={18} className="opacity-70" />
                </div>
            )}
        </div>
        <div className="text-sm space-y-2 opacity-90 leading-relaxed font-handwriting">
            {children}
        </div>
    </div>
);

const LaneHeader = ({ title, color, desc }: { title: string, color: string, desc: string }) => (
    <div className={`flex items-center gap-3 py-2 px-4 rounded-full ${color} text-white shadow-sm inline-flex mb-4`}>
        <div className="font-bold uppercase tracking-wide text-sm">{title}</div>
        <div className="h-4 w-[1px] bg-white/30"></div>
        <div className="text-xs opacity-90 italic">{desc}</div>
    </div>
);

export default function DPSPModule({ onComplete, isCompleted }: DPSPModuleProps) {
    return (
        <BlueprintContainer>
            {/* HERO */}
            <div className="bg-[#1e40af] text-white p-8 md:p-12 rounded-xl shadow-xl relative overflow-hidden border-4 border-white ring-4 ring-blue-100">
                <div className="absolute right-0 top-0 opacity-10">
                    <Scroll size={300} />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-2 text-blue-200 font-bold uppercase tracking-widest text-xs mb-2">
                        <Building2 size={16} /> Part IV (Articles 36-51)
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">The Governance Blueprint</h1>
                    <p className="text-blue-100 max-w-2xl text-lg leading-relaxed font-handwriting">
                        "The Conscience of the Constitution" — Instructions to the State for making laws and policies.
                    </p>
                </div>
            </div>

            {/* PHASE 1: THE FOUNDATION */}
            <div className="space-y-6">
                <SectionHeader title="Phase 1: The Foundation" subtitle="Origin Code & Legal Nature" />
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Origin */}
                    <div className="bg-white p-6 rounded-xl border-2 border-slate-200 shadow-sm relative">
                        <div className="absolute top-0 right-0 bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-bl-lg border-b border-l">SOURCE CODE</div>
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Globe className="text-blue-600" /> The Origin Story
                        </h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <div className="min-w-[4px] h-full bg-blue-500 rounded-full"></div>
                                <div>
                                    <div className="font-bold">Borrowed From: Irish Constitution</div>
                                    <div className="text-xs text-slate-500 italic">(Who borrowed from Spain)</div>
                                    <Badge variant="outline" className="mt-1 text-[10px] text-red-600 border-red-200 bg-red-50">PYQ ASKED</Badge>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="min-w-[4px] h-full bg-blue-500 rounded-full"></div>
                                <div>
                                    <div className="font-bold">Instrument of Instructions</div>
                                    <div className="text-xs text-slate-500">Resembles GoI Act, 1935 instructions to Governors.</div>
                                    <Badge variant="outline" className="mt-1 text-[10px] text-red-600 border-red-200 bg-red-50">PYQ ASKED</Badge>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="min-w-[4px] h-full bg-blue-500 rounded-full"></div>
                                <div>
                                    <div className="font-bold">Dr. Ambedkar's View</div>
                                    <div className="text-xs text-slate-500">"Novel Features" of the Constitution.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Nature */}
                    <div className="bg-slate-50 p-6 rounded-xl border-2 border-dashed border-slate-300 relative">
                        <div className="absolute -top-3 -right-3 rotate-12">
                            <div className="border-2 border-red-500 text-red-500 font-black px-3 py-1 rounded text-xs uppercase bg-white">Non-Justiciable</div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Scale className="text-slate-600" /> The Legal Nature
                        </h3>
                        <div className="space-y-4 text-sm">
                            <div className="bg-white p-3 rounded border border-slate-200">
                                <div className="font-bold text-slate-800">Article 37: The Duty</div>
                                <div className="text-slate-600 mt-1">Shall NOT be enforceable by any court, BUT are fundamental in governance.</div>
                            </div>
                            <div className="bg-blue-50 p-3 rounded border border-blue-100 text-blue-900 italic">
                                "DPSP + FR = Conscience of the Constitution" <br /><span className="text-xs not-italic font-bold text-blue-700">- Granville Austin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 2: THE 3 IDEOLOGICAL LANES */}
            <div className="space-y-8">
                <SectionHeader title="Phase 2: The 3 Ideological Lanes" subtitle="Classification of Principles" />

                {/* LANE 1: SOCIALIST */}
                <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100">
                    <LaneHeader title="Socialist Principles" color="bg-[#be123c]" desc="Welfare & Economic Justice" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <BlueprintCard title="Welfare State" article="Art 38" colorClass="bg-white" borderColor="border-red-200">
                            Perform welfare; Minimize inequalities in income/status. <br />
                            <span className="text-[10px] text-red-500 font-bold">(Added by 44th AA)</span>
                        </BlueprintCard>

                        <BlueprintCard title="The Big One" article="Art 39" colorClass="bg-white" borderColor="border-red-200" stamp="HIGH YIELD">
                            <ul className="list-disc pl-4 space-y-1">
                                <li><strong>(b)</strong> Equitable distribution of material resources <span className="text-red-500 font-bold">[PYQ]</span></li>
                                <li><strong>(c)</strong> Prevent concentration of wealth <span className="text-red-500 font-bold">[PYQ]</span></li>
                                <li><strong>(d)</strong> Equal pay for equal work</li>
                            </ul>
                        </BlueprintCard>

                        <BlueprintCard title="Right to Work" article="Art 41" colorClass="bg-white" borderColor="border-red-200" icon={Briefcase}>
                            Right to work, education & public assistance (Old age, sickness).
                        </BlueprintCard>

                        <BlueprintCard title="Humane Conditions" article="Art 42" colorClass="bg-white" borderColor="border-red-200" icon={Heart}>
                            Just conditions of work & Maternity Relief.
                        </BlueprintCard>

                        <BlueprintCard title="Workers in Mgmt" article="Art 43A" colorClass="bg-white" borderColor="border-red-200" icon={Factory}>
                            Participation of workers in management of industries. <br />
                            <span className="text-[10px] text-red-500 font-bold">(42nd AA)</span>
                        </BlueprintCard>
                    </div>
                </div>

                {/* LANE 2: GANDHIAN */}
                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                    <LaneHeader title="Gandhian Principles" color="bg-[#a16207]" desc="Village Reconstruction & Morality" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <BlueprintCard title="Village Panchayats" article="Art 40" colorClass="bg-white" borderColor="border-orange-200" icon={Building2} stamp="PYQ">
                            Organize village panchayats & give them powers.
                        </BlueprintCard>

                        <BlueprintCard title="Cottage Industries" article="Art 43" colorClass="bg-white" borderColor="border-orange-200" icon={Users}>
                            Promote on individual or co-operative basis in rural areas.
                        </BlueprintCard>

                        <BlueprintCard title="Co-operatives" article="Art 43B" colorClass="bg-white" borderColor="border-orange-200" icon={Handshake}>
                            Promote autonomous functioning. <br />
                            <span className="text-[10px] text-orange-600 font-bold">(97th AA, 2011)</span>
                        </BlueprintCard>

                        <BlueprintCard title="Weaker Sections" article="Art 46" colorClass="bg-white" borderColor="border-orange-200" icon={UserCheck}>
                            Promote educational/economic interests of SCs, STs.
                        </BlueprintCard>

                        <BlueprintCard title="Prohibition" article="Art 47" colorClass="bg-white" borderColor="border-orange-200" icon={Ban}>
                            Prohibit intoxicating drinks & drugs injurious to health.
                        </BlueprintCard>

                        <BlueprintCard title="Cattle Slaughter" article="Art 48" colorClass="bg-white" borderColor="border-orange-200" icon={Milk}>
                            Prohibit slaughter of cows, calves & milch draught cattle.
                        </BlueprintCard>
                    </div>
                </div>

                {/* LANE 3: LIBERAL-INTELLECTUAL */}
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                    <LaneHeader title="Liberal Principles" color="bg-[#0369a1]" desc="Modernization & Rights" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <BlueprintCard title="Uniform Civil Code" article="Art 44" colorClass="bg-white" borderColor="border-blue-200" icon={Scale} stamp="PYQ">
                            Secure UCC for citizens. <br />
                            <span className="text-[10px] opacity-70 italic">(Only Goa has UCC)</span>
                        </BlueprintCard>

                        <BlueprintCard title="Early Child Care" article="Art 45" colorClass="bg-white" borderColor="border-blue-200" icon={GraduationCap}>
                            ECCE for children until age 6. <br />
                            <span className="text-[10px] text-blue-600 font-bold">(Subject changed by 86th AA)</span>
                        </BlueprintCard>

                        <BlueprintCard title="Modern Agri" article="Art 48" colorClass="bg-white" borderColor="border-blue-200" icon={Leaf}>
                            Organize agri & animal husbandry on scientific lines.
                        </BlueprintCard>

                        <BlueprintCard title="Environment" article="Art 48A" colorClass="bg-white" borderColor="border-blue-200" icon={Leaf} stamp="42nd AA">
                            Protect & improve environment, forests & wildlife.
                        </BlueprintCard>

                        <BlueprintCard title="Separation of Powers" article="Art 50" colorClass="bg-white" borderColor="border-blue-200" icon={Split} stamp="PYQ">
                            Separate Judiciary from Executive.
                        </BlueprintCard>

                        <BlueprintCard title="Intl Peace" article="Art 51" colorClass="bg-white" borderColor="border-blue-200" icon={Globe}>
                            Promote international peace & security.
                        </BlueprintCard>
                    </div>
                </div>
            </div>

            {/* PHASE 3: THE AMENDMENTS */}
            <SectionCompass title="Phase 3: The Additions Timeline" />
            <div className="relative border-l-4 border-slate-300 ml-4 md:ml-8 space-y-8 pl-8 py-4">
                <TimelineItem year="1976" title="42nd Amendment (Mini Constitution)">
                    Added 4 New: <strong>39(f)</strong> (Children), <strong>39A</strong> (Legal Aid), <strong>43A</strong> (Workers), <strong>48A</strong> (Env).
                </TimelineItem>
                <TimelineItem year="1978" title="44th Amendment (Morarji Desai)">
                    Added <strong>38(2)</strong>: Minimize inequalities in income, status, facilities.
                </TimelineItem>
                <TimelineItem year="2002" title="86th Amendment">
                    Changed <strong>Art 45</strong> subject matter. (Made primary education a FR under 21A).
                </TimelineItem>
                <TimelineItem year="2011" title="97th Amendment">
                    Added <strong>43B</strong>: Co-operative Societies. <span className="text-red-600 font-bold text-xs ml-2">[PYQ]</span>
                </TimelineItem>
            </div>

            {/* PHASE 4: THE CONFLICT */}
            <SectionCompass title="Phase 4: The Legal Battleground" />
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                        <div className="text-xs text-slate-500 font-bold">1951 • Champakam Dorairajan</div>
                        <div className="font-bold">FRs > DPSP</div>
                        <div className="text-sm">FRs are superior. Parliament CAN amend FRs to implement DPSP.</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                        <div className="text-xs text-slate-500 font-bold">1967 • Golaknath</div>
                        <div className="font-bold">FRs = Sacrosanct</div>
                        <div className="text-sm">FRs cannot be amended for DPSP implementation.</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                        <div className="text-xs text-slate-500 font-bold">1971 • 25th Amendment</div>
                        <div className="font-bold">Added Article 31C</div>
                        <div className="text-sm bg-yellow-50 p-2 rounded mt-1">
                            <span className="font-bold text-red-600">RULE:</span> If law implements <strong>39(b) or (c)</strong>, it is VALID even if it violates Art 14 or 19. <Badge variant="outline" className="border-red-200 text-red-600 text-[10px]">PYQ</Badge>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
                    <Scale size={64} className="mb-4 text-blue-300" />
                    <h3 className="text-2xl font-bold mb-2">Minerva Mills (1980)</h3>
                    <p className="text-lg font-serif italic opacity-90 mb-4">"Indian Constitution is founded on the <span className="text-yellow-400 font-bold">Bedrock of Balance</span> between FRs and DPSP."</p>
                    <div className="bg-white/10 p-4 rounded-lg text-sm border border-white/20">
                        <strong>Current Status:</strong> FRs enjoy supremacy, but DPSP guidelines cannot be ignored.
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="mt-12 bg-white rounded-xl p-8 border-2 border-slate-200 shadow-xl text-center">
                <div className="flex justify-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full text-green-700">
                        <ShieldCheck size={32} />
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-6">Utility of DPSP Checklist</h3>
                <div className="grid grid-cols-3 gap-4 text-sm mb-8">
                    <div className="p-3 bg-slate-50 rounded border">Beacon for Courts</div>
                    <div className="p-3 bg-slate-50 rounded border">Yardstick for Opposition</div>
                    <div className="p-3 bg-slate-50 rounded border">Policy Stability</div>
                </div>

                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`
            relative px-8 py-6 text-lg font-bold rounded-full shadow-xl transition-all
            ${isCompleted ? 'bg-green-700 hover:bg-green-800 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'}
          `}
                >
                    {isCompleted ?
                        <span className="flex items-center gap-2"><BadgeCheck /> Policy Adopted</span> :
                        <span className="flex items-center gap-2"><BookOpen /> Approve Governance Blueprint</span>
                    }
                </Button>
            </div>
        </BlueprintContainer>
    );
}

const TimelineItem = ({ year, title, children }: { year: string, title: string, children: React.ReactNode }) => (
    <div className="relative">
        <div className="absolute -left-[45px] top-0 bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded shadow-md w-12 text-center">
            {year}
        </div>
        <div className="absolute -left-[45px] top-3 w-4 h-[2px] bg-slate-300"></div>
        <div>
            <div className="font-bold text-slate-800">{title}</div>
            <div className="text-sm text-slate-600 mt-1">{children}</div>
        </div>
    </div>
);

const SectionCompass = ({ title }: { title: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className="h-[2px] flex-1 bg-slate-300 border-t border-dashed border-slate-400"></div>
        <div className="font-bold uppercase tracking-widest text-sm text-slate-500 bg-white px-4 py-1 rounded-full border border-slate-300 shadow-sm">
            {title}
        </div>
        <div className="h-[2px] flex-1 bg-slate-300 border-t border-dashed border-slate-400"></div>
    </div>
);
