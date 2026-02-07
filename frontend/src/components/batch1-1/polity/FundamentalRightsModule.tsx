"use client";

import React, { useState } from "react";
import {
    Shield, Scale, Gavel, Lock, Info, AlertTriangle,
    FileText, CheckCircle2, XCircle, Scroll, Landmark,
    Sword, Eye, Globe, Building2, UserCheck, Flame, BookOpen,
    BadgeCheck, Users, Briefcase as BriefcaseIcon
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

interface FundamentalRightsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

// --- Design System: The Bill of Rights Vault ---

const VaultContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#1e293b] min-h-screen p-4 md:p-8 font-sans text-slate-100 selection:bg-amber-300 selection:text-slate-900">
        <div className="max-w-7xl mx-auto space-y-10">
            {children}
        </div>
    </div>
);

const CaseFileCard = ({ title, icon: Icon, children, color = "blue", badge }: { title: string, icon: any, children: React.ReactNode, color?: string, badge?: string }) => {
    const colorStyles: any = {
        slate: "border-slate-600 bg-slate-800/50",
        blue: "border-blue-700 bg-blue-900/20",
        green: "border-green-700 bg-green-900/20",
        red: "border-red-700 bg-red-900/20",
        orange: "border-orange-700 bg-orange-900/20",
        purple: "border-purple-700 bg-purple-900/20",
        gold: "border-amber-600 bg-amber-900/20",
    };

    const iconColors: any = {
        slate: "text-slate-400",
        blue: "text-blue-400",
        green: "text-green-400",
        red: "text-red-400",
        orange: "text-orange-400",
        purple: "text-purple-400",
        gold: "text-amber-400",
    };

    return (
        <div className={`relative border border-l-4 rounded-r-xl p-5 ${colorStyles[color]} backdrop-blur-sm hover:bg-opacity-30 transition-all group`}>
            {badge && (
                <div className="absolute top-2 right-2">
                    <Badge variant="outline" className={`${iconColors[color]} border-current text-[10px] uppercase font-bold tracking-wider`}>
                        {badge}
                    </Badge>
                </div>
            )}
            <div className="flex items-center gap-3 mb-4 pb-2 border-b border-white/5">
                <Icon size={20} className={iconColors[color]} />
                <h3 className="font-bold text-lg text-slate-100 font-serif tracking-wide">{title}</h3>
            </div>
            <div className="text-sm text-slate-300 space-y-3">
                {children}
            </div>
        </div>
    );
};

const SectionHeader = ({ title, icon: Icon, color = "text-slate-200" }: { title: string, icon: any, color?: string }) => (
    <div className="flex items-center gap-2 mb-6 mt-10 first:mt-0">
        <div className={`p-2 rounded bg-white/5 border border-white/10 ${color}`}>
            <Icon size={20} />
        </div>
        <h2 className={`text-xl font-bold uppercase tracking-widest ${color}`}>{title}</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
    </div>
);

export default function FundamentalRightsModule({ onComplete, isCompleted }: FundamentalRightsModuleProps) {
    return (
        <VaultContainer>
            {/* HERO */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Shield size={240} />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-xs mb-2">
                            <Landmark size={14} /> Part III (Articles 12-35)
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-2 font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">
                            THE VAULT OF RIGHTS
                        </h1>
                        <p className="text-slate-400 text-lg font-mono">
                            The "Magna Carta" of India. Justiciable. Essential.
                        </p>
                    </div>
                </div>
            </div>

            {/* PHASE 1: DEFINITION & SHIELD (12-13) */}
            <SectionHeader title="Phase 1: The Shield" icon={Shield} color="text-slate-400" />
            <div className="grid md:grid-cols-2 gap-6">
                <CaseFileCard title="Article 12: State" icon={Building2} color="slate" badge="Definition">
                    <p><strong>Why?</strong> FRs are claims AGAINST the State.</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs opacity-80">
                        <li>Govt & Parliament (Center).</li>
                        <li>Govt & Legislature (States).</li>
                        <li>Local Authorities (Panchayats, Municipalities).</li>
                        <li><strong>Other Authorities:</strong> LIC, ONGC, SAIL.</li>
                    </ul>
                    <div className="mt-2 bg-slate-900/50 p-2 rounded text-xs border border-slate-700">
                        Judiciary is 'State' ONLY when performing <em>administrative</em> functions.
                    </div>
                </CaseFileCard>

                <CaseFileCard title="Article 13: Judicial Review" icon={Gavel} color="slate" badge="The Shield">
                    <div className="text-lg text-red-400 font-bold text-center border-b border-red-500/20 pb-2 mb-2">
                        Any Law Violating FRs = VOID
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                            <div className="font-bold text-slate-400 mb-1">"Law" Includes</div>
                            <ul className="list-disc pl-3 text-slate-500 space-y-1">
                                <li>Acts, Ordinances</li>
                                <li>Orders, Bye-laws</li>
                                <li>Custom/Usage</li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-bold text-slate-400 mb-1">Amendment?</div>
                            <p className="text-slate-500"><strong>Kesavananda Case (1973):</strong> YES, challengeable if violates <strong>Basic Structure</strong>.</p>
                        </div>
                    </div>
                </CaseFileCard>
            </div>

            {/* PHASE 2: EQUALITY (14-18) */}
            <SectionHeader title="Phase 2: Right to Equality" icon={Scale} color="text-blue-400" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CaseFileCard title="Art 14: Rule of Law" icon={Scale} color="blue">
                    <div className="space-y-3">
                        <div className="bg-blue-950 p-2 rounded border border-blue-900">
                            <div className="text-xs font-bold text-blue-300">Equality Before Law (UK)</div>
                            <div className="text-[10px]">Negative. No special privilege.</div>
                        </div>
                        <div className="bg-blue-950 p-2 rounded border border-blue-900">
                            <div className="text-xs font-bold text-blue-300">Equal Protection (USA)</div>
                            <div className="text-[10px]">Positive. Like treated alike.</div>
                        </div>
                        <div className="text-xs text-red-400 pt-2 border-t border-white/5">
                            <strong>Exceptions:</strong> Prez/Governor (Art 361), MPs/MLAs (Immunity).
                        </div>
                    </div>
                </CaseFileCard>

                <CaseFileCard title="Art 15: No Discrimination" icon={XCircle} color="blue">
                    <p className="font-bold text-xs uppercase tracking-wider mb-2">Grounds (RRCSP):</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                        {['Religion', 'Race', 'Caste', 'Sex', 'Place of Birth'].map(g => (
                            <Badge key={g} variant="secondary" className="bg-slate-800 text-slate-300 text-[10px]">{g}</Badge>
                        ))}
                    </div>
                    <div className="space-y-2 text-xs border-t border-white/5 pt-2">
                        <div className="flex justify-between">
                            <span>Women/Kids</span>
                            <span className="text-green-400">Allowed</span>
                        </div>
                        <div className="flex justify-between">
                            <span>SEBC/SC/ST (Edu)</span>
                            <span className="text-green-400">93rd AA</span>
                        </div>
                        <div className="flex justify-between">
                            <span>EWS (10%)</span>
                            <span className="text-green-400">103rd AA</span>
                        </div>
                    </div>
                </CaseFileCard>

                <CaseFileCard title="Art 16: Public Employment" icon={BriefcaseIcon} color="blue">
                    <p className="text-xs mb-2">RRCSP + <strong>Descent + Residence</strong>.</p>
                    <div className="bg-slate-800 p-2 rounded text-xs space-y-1 border border-slate-700">
                        <div><strong>Mandal (1990):</strong> 27% OBC OK.</div>
                        <div><strong>Indra Sawhney (1992):</strong> 50% Cap. No promo reservation (Overturned by 77th AA).</div>
                    </div>
                    <div className="mt-2 text-[10px] text-amber-400">
                        <strong>PYQ:</strong> Parliament CAN prescribe residence (State cannot).
                    </div>
                </CaseFileCard>

                <CaseFileCard title="Art 17: Untouchability" icon={UserCheck} color="blue" badge="Absolute">
                    <p className="text-xs"><strong>Absolute Right.</strong> No exceptions.</p>
                    <p className="text-xs mt-1"><strong>Law:</strong> Protection of Civil Rights Act, 1955.</p>
                </CaseFileCard>

                <CaseFileCard title="Art 18: Titles" icon={BadgeCheck} color="blue">
                    <p className="text-xs">State cannot confer titles (except Military/Academic).</p>
                    <div className="mt-2 p-2 bg-slate-800 rounded border border-slate-700 text-[10px]">
                        <strong>Balaji Raghavan (1996):</strong> Bharat Ratna / Padma Awards are <strong>NOT</strong> titles.
                    </div>
                </CaseFileCard>
            </div>

            {/* PHASE 3: FREEDOM (19) */}
            <SectionHeader title="Phase 3: Right to Freedom" icon={Globe} color="text-green-400" />
            <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <CaseFileCard title="Article 19: The 6 Freedoms" icon={Globe} color="green" badge="SAAM-RP">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {[
                                { label: "Speech & Expression", sub: "Press, Silence" },
                                { label: "Assembly", sub: "Peaceable, No Arms" },
                                { label: "Association", sub: "Unions, Co-ops" },
                                { label: "Movement", sub: "Anywhere in India" },
                                { label: "Residence", sub: "Settle anywhere" },
                                { label: "Profession", sub: "Any trade/biz" }
                            ].map((f, i) => (
                                <div key={i} className="bg-green-950/30 border border-green-800 p-2 rounded text-center">
                                    <div className="font-bold text-green-300 text-sm">{f.label}</div>
                                    <div className="text-[10px] text-green-500/70">{f.sub}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 text-[10px] text-slate-400 text-center italic">
                            Right to Property (19(1)(f)) deleted by 44th AA.
                        </div>
                    </CaseFileCard>
                </div>
                <CaseFileCard title="Reasonable Restrictions" icon={Lock} color="green" badge="Not Absolute">
                    <p className="text-xs mb-2">Grounds for restriction:</p>
                    <ul className="text-[10px] grid grid-cols-2 gap-1 text-slate-400">
                        <li>Sovereignty</li>
                        <li>Integrity</li>
                        <li>Security</li>
                        <li>Public Order</li>
                        <li>Decency</li>
                        <li>Defamation</li>
                        <li>Court Contempt</li>
                        <li>Incitement</li>
                    </ul>
                </CaseFileCard>
            </div>

            {/* PHASE 4: PROTECTION OF LIFE (20-21) */}
            <SectionHeader title="Phase 4: Protection of Life" icon={Shield} color="text-green-400" />
            <div className="grid md:grid-cols-2 gap-6">
                <CaseFileCard title="Art 20: Conviction" icon={Gavel} color="green">
                    <div className="space-y-4">
                        <div className="border-l-2 border-green-500 pl-3">
                            <div className="font-bold text-sm">1. No Ex-post facto</div>
                            <div className="text-[10px]">No retrospective criminal law.</div>
                        </div>
                        <div className="border-l-2 border-green-500 pl-3">
                            <div className="font-bold text-sm">2. No Double Jeopardy</div>
                            <div className="text-[10px]">Punished twice for same offence.</div>
                        </div>
                        <div className="border-l-2 border-green-500 pl-3">
                            <div className="font-bold text-sm">3. No Self-Incrimination</div>
                            <div className="text-[10px]">Witness against self.</div>
                        </div>
                    </div>
                </CaseFileCard>

                <CaseFileCard title="Art 21: Life & Liberty" icon={Flame} color="green" badge="The Spine">
                    <p className="text-xs mb-3"><strong>Due Process of Law</strong> (Menaka Gandhi, 1978).</p>
                    <div className="flex flex-wrap gap-2 text-[10px] text-slate-300">
                        <span className="bg-slate-800 px-2 py-1 rounded">Privacy (Puttaswamy)</span>
                        <span className="bg-slate-800 px-2 py-1 rounded">Health</span>
                        <span className="bg-slate-800 px-2 py-1 rounded">Shelter</span>
                        <span className="bg-slate-800 px-2 py-1 rounded">Speedy Trial</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5">
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-green-400">Art 21-A: Education</span>
                            <span className="text-[10px] bg-green-900 px-2 py-0.5 rounded text-green-200">86th AA</span>
                        </div>
                        <p className="text-[10px] mt-1">Free & Compulsory (6-14 years).</p>
                    </div>
                </CaseFileCard>
            </div>

            {/* PHASE 5: DETENTION & EXPLOITATION (22-24) */}
            <SectionHeader title="Phase 5: Detention & Exploitation" icon={Lock} color="text-red-400" />
            <div className="grid md:grid-cols-3 gap-6">
                <CaseFileCard title="Art 22: Detention" icon={Lock} color="green">
                    <div className="space-y-2 text-xs">
                        <div className="font-bold text-slate-300">Punitive</div>
                        <ul className="list-disc pl-3 text-[10px] opacity-80">
                            <li>Grounds informed.</li>
                            <li>Legal practitioner.</li>
                            <li>Magistrate in 24h.</li>
                        </ul>
                        <div className="font-bold text-slate-300 pt-2 text-red-400">Preventive</div>
                        <p className="text-[10px]">Max 3 months (w/o Advisory Board).</p>
                    </div>
                </CaseFileCard>

                <CaseFileCard title="Art 23: Trafficking" icon={AlertTriangle} color="red">
                    <p className="text-xs font-bold text-red-300 mb-1">PROHIBITS:</p>
                    <ul className="text-xs space-y-1">
                        <li>Traffic in humans.</li>
                        <li>Begar (Forced Labor).</li>
                    </ul>
                    <p className="text-[10px] mt-2 opacity-70">Exception: Compulsory service for public purpose.</p>
                </CaseFileCard>

                <CaseFileCard title="Art 24: Child Labor" icon={AlertTriangle} color="red">
                    <p className="text-xs font-bold text-red-300 mb-1">PROHIBITS:</p>
                    <p className="text-xs">Employment of children (&lt;14) in factories/mines.</p>
                    <div className="mt-2 bg-red-950/50 p-2 rounded text-[10px] border border-red-900">
                        <strong>2016 Amend:</strong> Complete ban in ALL occupations (Except family).
                    </div>
                </CaseFileCard>
            </div>

            {/* PHASE 6: RELIGION & CULTURE (25-30) */}
            <SectionHeader title="Phase 6: Religion & Culture" icon={BookOpen} color="text-orange-400" />
            <div className="grid md:grid-cols-2 gap-6">
                <CaseFileCard title="Relgion (25-28)" icon={Flame} color="orange">
                    <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                            <span className="font-bold text-orange-300 blocking">Art 25 (Individual)</span>
                            <p className="text-[10px]">Conscience, Practice, Propagate.</p>
                        </div>
                        <div>
                            <span className="font-bold text-orange-300 blocking">Art 26 (Group)</span>
                            <p className="text-[10px]">Manage religious affairs.</p>
                        </div>
                        <div>
                            <span className="font-bold text-orange-300 blocking">Art 27 (Tax)</span>
                            <p className="text-[10px]">No tax for promotion.</p>
                        </div>
                        <div>
                            <span className="font-bold text-orange-300 blocking">Art 28 (School)</span>
                            <p className="text-[10px]">No instruction in State funds.</p>
                        </div>
                    </div>
                </CaseFileCard>

                <CaseFileCard title="Minorities (29-30)" icon={Users} color="purple">
                    <div className="space-y-3 text-xs">
                        <div className="border-b border-purple-800/50 pb-2">
                            <div className="font-bold text-purple-300">Art 29: Conserve Culture</div>
                            <p className="text-[10px]">Right to conserve Language/Script. Available to <strong className="text-white">ANY Section</strong> (Not just minorities).</p>
                        </div>
                        <div>
                            <div className="font-bold text-purple-300">Art 30: Institutions</div>
                            <p className="text-[10px]">Right of <strong className="text-white">Minorities</strong> to estb. edu institutions.</p>
                        </div>
                    </div>
                </CaseFileCard>
            </div>

            {/* PHASE 7: REMEDIES (32) */}
            <SectionHeader title="Phase 7: The Soul (Writs)" icon={Landmark} color="text-amber-400" />

            <div className="bg-amber-950/10 border border-amber-800/50 rounded-xl p-6 mb-8">
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-serif font-bold text-amber-500">Article 32: Constitutional Remedies</h3>
                    <p className="text-amber-300/60 text-sm">"Heart and Soul of the Constitution" — Dr. Ambedkar</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {[
                        { name: "Habeas Corpus", mean: "To have the body", target: "State & Private" },
                        { name: "Mandamus", mean: "We Command", target: "Public Official" },
                        { name: "Prohibition", mean: "To Forbid", target: "Higher -> Lower Court" },
                        { name: "Certiorari", mean: "To be certified", target: "Quash Order" },
                        { name: "Quo-Warranto", mean: "By what authority?", target: "Public Office Usurper" }
                    ].map((w, i) => (
                        <div key={i} className="bg-amber-100 text-amber-900 p-3 rounded-lg text-center shadow-lg hover:-translate-y-1 transition-transform relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Scroll size={20} className="mx-auto mb-2 text-amber-700" />
                            <div className="font-bold text-xs uppercase tracking-tight mb-1">{w.name}</div>
                            <div className="text-[10px] italic opacity-80 mb-2">"{w.mean}"</div>
                            <div className="text-[9px] bg-amber-200/50 p-1 rounded font-bold text-amber-800 border border-amber-300/50">{w.target}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <CaseFileCard title="Art 33: Armed Forces" icon={Sword} color="red">
                    <p className="text-xs">Parliament can restrict/abrogate FRs of Armed Forces, Police, Intel Agencies.</p>
                </CaseFileCard>
                <CaseFileCard title="Art 34: Martial Law" icon={AlertTriangle} color="red">
                    <p className="text-xs">Indemnify acts done during Martial Law.</p>
                    <p className="text-[10px] mt-1 opacity-60">Different from National Emergency.</p>
                </CaseFileCard>
            </div>

            {/* FOOTER */}
            <div className="mt-12 text-center pb-8 border-t border-slate-800 pt-8">
                <div className="flex justify-center gap-6 mb-6 text-sm text-slate-500 font-mono">
                    <span>Foreigners: 14, 20-21A, 22-28</span>
                    <span>Property: Art 300-A (Legal)</span>
                </div>
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`
            relative px-8 py-6 text-lg font-bold rounded-full shadow-xl transition-all border border-amber-600/30
            ${isCompleted ? 'bg-amber-700 hover:bg-amber-800 text-white' : 'bg-slate-900 hover:bg-slate-800 text-amber-500'}
          `}
                >
                    {isCompleted ?
                        <span className="flex items-center gap-2"><BadgeCheck /> Vault Secured</span> :
                        <span className="flex items-center gap-2"><Landmark /> Seal The Vault</span>
                    }
                </Button>
            </div>
        </VaultContainer>
    );
}


