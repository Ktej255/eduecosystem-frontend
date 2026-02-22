"use client";

import React, { useState } from "react";
import {
    Activity, Globe, Anchor, Ship, Map, Users,
    ArrowRight, CheckCircle2, AlertTriangle, Scale,
    Briefcase, Building2, Gavel, Landmark, BadgeCheck,
    Coins, Zap, Network, Compass
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface InterStateRelationsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

// --- Design System: The Cooperation Bridge ---

const BridgeContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#0f172a] min-h-screen p-4 md:p-8 font-sans selection:bg-blue-300 selection:text-blue-900 relative text-slate-200">
        {/* River Map Texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
            {children}
        </div>
    </div>
);

const SectionPanel = ({ title, icon: Icon, color, children, bridge }: { title: string, icon: any, color: "blue" | "gold" | "green", children: React.ReactNode, bridge?: boolean }) => {
    const styles = {
        blue: {
            border: "border-sky-500/30",
            bg: "bg-sky-900/10",
            title: "text-sky-200",
            iconBg: "bg-sky-500/20 text-sky-300",
            bridgeColor: "bg-sky-700"
        },
        gold: {
            border: "border-amber-500/30",
            bg: "bg-amber-900/10",
            title: "text-amber-200",
            iconBg: "bg-amber-500/20 text-amber-300",
            bridgeColor: "bg-amber-700"
        },
        green: {
            border: "border-emerald-500/30",
            bg: "bg-emerald-900/10",
            title: "text-emerald-200",
            iconBg: "bg-emerald-500/20 text-emerald-300",
            bridgeColor: "bg-emerald-700"
        }
    };

    const s = styles[color];

    return (
        <div className={`relative ${bridge ? 'mt-16' : ''}`}>
            {bridge && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-16 w-1 bg-gradient-to-b from-slate-700 to-transparent opacity-50"></div>
            )}

            <div className={`border-2 ${s.border} ${s.bg} rounded-2xl overflow-hidden backdrop-blur-sm relative`}>
                {/* Bridge Pillar Graphic */}
                {bridge && (
                    <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-32 h-2 rounded-b-xl bg-slate-600/50"></div>
                )}

                <div className="p-6 border-b border-white/5 flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${s.iconBg}`}>
                        <Icon size={24} />
                    </div>
                    <h2 className={`text-2xl font-serif font-bold ${s.title} tracking-wide`}>{title}</h2>
                </div>

                <div className="p-6 md:p-8 space-y-8">
                    {children}
                </div>
            </div>
        </div>
    );
};

const InfoCard = ({ title, children, icon: Icon, pyq, badge, color = "slate" }: { title: string, children: React.ReactNode, icon?: any, pyq?: boolean, badge?: string, color?: "slate" | "blue" | "gold" | "green" }) => {
    const borderColors = {
        slate: "border-slate-700 hover:border-slate-500",
        blue: "border-sky-800 hover:border-sky-500",
        gold: "border-amber-800 hover:border-amber-500",
        green: "border-emerald-800 hover:border-emerald-500",
    }

    return (
        <div className={`bg-slate-900/50 border ${borderColors[color]} p-5 rounded-xl transition-all group relative h-full flex flex-col`}>
            {pyq && (
                <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-red-600 hover:bg-red-700 text-white border-2 border-[#0f172a] shadow-lg font-bold">PRELIMS ASKED</Badge>
                </div>
            )}
            {badge && (
                <Badge variant="outline" className="mb-3 w-fit border-white/20 text-white/70 text-[10px] uppercase tracking-wider">
                    {badge}
                </Badge>
            )}

            <div className="flex items-start gap-3 mb-3">
                {Icon && <Icon size={20} className="text-muted-foreground mt-1 shrink-0 group-hover:text-white transition-colors" />}
                <div>
                    <h3 className="font-bold text-lg text-slate-100 font-serif leading-tight">{title}</h3>
                </div>
            </div>

            <div className="text-sm text-muted-foreground font-handwriting leading-relaxed space-y-2 grow">
                {children}
            </div>
        </div>
    );
}

const RiverFlow = ({ rivers }: { rivers: { name: string, states: string, highlight?: boolean }[] }) => (
    <div className="space-y-3">
        {rivers.map((r, i) => (
            <div key={i} className={`relative pl-8 py-2 ${r.highlight ? 'bg-sky-900/20 rounded-r-lg border-r border-sky-500/30' : ''}`}>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[2px] bg-sky-600"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-400 border border-sky-950"></div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                    <span className={`font-bold ${r.highlight ? 'text-sky-300' : 'text-slate-300'}`}>{r.name}</span>
                    <span className="hidden sm:inline text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground font-mono">{r.states}</span>
                    {r.highlight && <BadgeVariant className="ml-2 bg-sky-700/50 text-[10px] text-sky-200 border-0">PYQ</BadgeVariant>}
                </div>
            </div>
        ))}
    </div>
);

// Helper for badge variant to avoid conflict with standard Badge
const BadgeVariant = ({ className, children }: any) => (
    <span className={`px-2 py-0.5 rounded text-xs font-bold inline-flex items-center justify-center ${className}`}>{children}</span>
);


export default function InterStateRelationsModule({ onComplete, isCompleted }: InterStateRelationsModuleProps) {
    const [activeZone, setActiveZone] = useState<string>("Northern");

    const zones = [
        { name: "Northern", hq: "New Delhi", states: "Punjab, Haryana, HP, Raj, J&K, Ladakh, Delhi, Chandigarh", color: "bg-blue-600" },
        { name: "Central", hq: "Allahabad", states: "UP, Uttarakhand, MP, Chhattisgarh", color: "bg-red-600" },
        { name: "Eastern", hq: "Kolkata", states: "Bihar, Jharkhand, WB, Odisha", color: "bg-green-600" },
        { name: "Western", hq: "Mumbai", states: "Gujarat, Maharashtra, Goa, D&NH, D&D", color: "bg-orange-600" },
        { name: "Southern", hq: "Chennai", states: "AP, Telangana, Karnataka, Kerala, TN, Puducherry", color: "bg-purple-600" },
    ];

    return (
        <BridgeContainer>
            {/* HERO */}
            <div className="bg-slate-900/80 border border-slate-700 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group">
                {/* Bridge Graphic */}
                <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                        <Map size={14} /> Part XI (Art 262-263)
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black font-serif text-white tracking-tight mb-4">
                        The Cooperation Bridge
                    </h1>
                    <p className="text-muted-foreground max-w-2xl text-lg font-handwriting italic">
                        "Bridging the divide between states through adjudication and coordination."
                    </p>
                </div>
            </div>

            {/* PHASE 1: WATER DISPUTES (BLUE) */}
            <SectionPanel title="Phase 1: Inter-State Water Disputes (Art 262)" icon={Ship} color="blue">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* LEFT: THE EXCEPTION (SOURCE) */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-sky-400 font-bold uppercase tracking-widest text-xs mb-2">
                            <Anchor size={14} /> The Source (Art 262)
                        </div>
                        <InfoCard title="Power & Exclusion" icon={Gavel} color="blue" pyq>
                            <p className="mb-4"><strong>Parliament</strong> may by law provide for adjudication of any dispute w.r.t. use/control of inter-state rivers.</p>
                            <div className="bg-sky-950/30 p-3 rounded-lg border border-sky-800/30">
                                <strong className="text-sky-300 block mb-1">The Critical Exclusion:</strong>
                                <span className="text-sm">Parliament may provide that <strong>NEITHER Supreme Court NOR any other court</strong> shall exercise jurisdiction.</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2 italic">Exception to Art 131 (Original Jurisdiction).</p>
                        </InfoCard>

                        <InfoCard title="The Mechanism" icon={Briefcase} color="slate">
                            <p className="text-sm"><strong className="text-white">Inter-State Water Disputes Act (1956):</strong></p>
                            <ul className="list-disc pl-4 space-y-1 text-xs mt-2 text-muted-foreground">
                                <li>Central Govt sets up Ad-hoc Tribunal.</li>
                                <li>Verdict is <strong>Final & Binding</strong>.</li>
                                <li><span className="text-amber-400">Note:</span> SC barred, but can hear appeals via Art 136 (SLP).</li>
                            </ul>
                        </InfoCard>
                    </div>

                    {/* RIGHT: THE FLOW (DISPUTES) */}
                    <div className="bg-sky-950/10 border border-sky-800/20 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-sky-200 mb-4 flex items-center gap-2">
                            <Ship size={18} /> Major Disputes
                        </h3>
                        <RiverFlow rivers={[
                            { name: "Krishna", states: "Maha, Kar, AP", highlight: false },
                            { name: "Godavari", states: "Maha, AP, MP, Odisha, Kar", highlight: false },
                            { name: "Narmada", states: "Guj, MP, Maha, Raj", highlight: false },
                            { name: "Cauvery", states: "Kar, TN, Kerala, Puducherry", highlight: true },
                            { name: "Mahadayi", states: "Goa, Kar, Maha", highlight: false },
                            { name: "Vansadhara", states: "Odisha, AP", highlight: false },
                        ]} />
                    </div>
                </div>
            </SectionPanel>

            {/* PHASE 2: INTER-STATE COUNCILS (GOLD) */}
            <SectionPanel title="Phase 2: Inter-State Councils (Art 263)" icon={Users} color="gold" bridge>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* LEFT: ESTABLISHMENT */}
                    <InfoCard title="The Constitutional Bridge" icon={Landmark} color="gold" pyq>
                        <p className="mb-2"><strong>Authority:</strong> Established by <span className="text-amber-300">President</span> at any time (if public interest requires).</p>
                        <div className="space-y-2 mt-4">
                            <div className="flex items-start gap-2 text-xs">
                                <CheckCircle2 size={14} className="text-amber-500 mt-0.5" />
                                <span>Inquire into disputes.</span>
                            </div>
                            <div className="flex items-start gap-2 text-xs">
                                <CheckCircle2 size={14} className="text-amber-500 mt-0.5" />
                                <span>Investigate common interest subjects.</span>
                            </div>
                            <div className="flex items-start gap-2 text-xs">
                                <CheckCircle2 size={14} className="text-amber-500 mt-0.5" />
                                <span>Make recommendations for coordination.</span>
                            </div>
                        </div>
                        <p className="mt-4 text-xs font-bold text-muted-foreground uppercase">Nature: Advisory Body (Not Binding)</p>
                    </InfoCard>

                    {/* RIGHT: COMPOSITION */}
                    <div className="bg-amber-950/10 border border-amber-800/20 rounded-xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Users size={100} />
                        </div>

                        <h3 className="text-lg font-bold text-amber-200 mb-6 flex items-center gap-2">
                            <BadgeCheck size={18} /> Composition (1990)
                        </h3>

                        <div className="space-y-4 relative z-10">
                            <div className="flex items-center gap-4 bg-amber-900/20 p-3 rounded-lg border border-amber-700/30">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-amber-950 font-bold">PM</div>
                                <div>
                                    <div className="font-bold text-amber-100">Chairman</div>
                                    <div className="text-xs text-amber-400">Prime Minister</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-slate-800/50 p-3 rounded border border-slate-700">
                                    <span className="block text-xs text-muted-foreground">Members</span>
                                    <span className="font-bold text-sm">CMs of States</span>
                                </div>
                                <div className="bg-slate-800/50 p-3 rounded border border-slate-700">
                                    <span className="block text-xs text-muted-foreground">Members</span>
                                    <span className="font-bold text-sm">CMs/Admins of UTs</span>
                                </div>
                                <div className="col-span-2 bg-slate-800/50 p-3 rounded border border-slate-700">
                                    <span className="block text-xs text-muted-foreground">Nominated Members</span>
                                    <span className="font-bold text-sm">6 Central Cabinet Ministers</span>
                                </div>
                            </div>

                            <p className="text-xs text-muted-foreground text-center mt-2">
                                Standing Committee chaired by <strong className="text-muted-foreground">Union Home Minister</strong>.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 bg-slate-900 border border-slate-800 p-4 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <BadgeCheck className="text-muted-foreground" />
                        <div>
                            <h4 className="font-bold text-slate-300">Public Acts & Records (Art 261)</h4>
                            <p className="text-xs text-muted-foreground">"Full Faith and Credit" to public acts/records throughout India.</p>
                        </div>
                    </div>
                    <Badge variant="outline" className="border-slate-700 text-muted-foreground font-mono text-[10px]">Civil &ne; Criminal</Badge>
                </div>
            </SectionPanel>

            {/* PHASE 3: ZONAL COUNCILS (GREEN) */}
            <SectionPanel title="Phase 3: Zonal Councils (Statutory)" icon={Map} color="green" bridge>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* LEFT: STATUTORY STATUS */}
                    <InfoCard title="Statutory Body" icon={Building2} color="green" badge="High Yield Trap" pyq>
                        <p className="text-emerald-300 font-bold mb-2">NOT Constitutional.</p>
                        <p className="mb-2">Established by <strong className="text-white">States Reorganization Act, 1956</strong>.</p>
                        <p className="text-xs opacity-70">Goal: Promote emotional integration and resolve inter-state issues.</p>
                    </InfoCard>

                    {/* MIDDLE: COMPOSITION */}
                    <InfoCard title="Composition" icon={Users} color="slate">
                        <div className="space-y-3">
                            <div>
                                <span className="text-xs text-muted-foreground uppercase font-bold">Chairman</span>
                                <div className="font-bold text-emerald-400">Union Home Minister</div>
                                <div className="text-[10px] text-muted-foreground">Common for all 5 zones. [PYQ]</div>
                            </div>
                            <div>
                                <span className="text-xs text-muted-foreground uppercase font-bold">Vice-Chairman</span>
                                <div className="font-bold text-white">CMs (Rotation)</div>
                                <div className="text-[10px] text-muted-foreground">Holds office for 1 year.</div>
                            </div>
                            <div>
                                <span className="text-xs text-muted-foreground uppercase font-bold">Members</span>
                                <div className="text-sm text-slate-300">CM + 2 Ministers from each state.</div>
                            </div>
                        </div>
                    </InfoCard>

                    {/* RIGHT: MAP SELECTOR */}
                    <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 flex flex-col">
                        <h4 className="font-bold text-slate-300 mb-3 text-center text-sm">The 5 Zones (Hover to View)</h4>
                        <div className="flex-1 space-y-1">
                            {zones.map((z) => (
                                <div
                                    key={z.name}
                                    onMouseEnter={() => setActiveZone(z.name)}
                                    className={`
                                        p-2 rounded cursor-pointer transition-all flex justify-between items-center
                                        ${activeZone === z.name ? 'bg-slate-800 border-l-2 border-emerald-500' : 'hover:bg-slate-800/50 text-muted-foreground'}
                                    `}
                                >
                                    <span className="text-sm font-bold">{z.name}</span>
                                    <span className="text-[10px] bg-black/20 px-1.5 rounded">{z.hq}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DYNAMIC ZONE DISPLAY */}
                <div className="mt-6 bg-slate-900/50 border border-slate-700 p-6 rounded-xl text-center animate-in fade-in zoom-in duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{activeZone} Zonal Council</h3>
                    <p className="text-muted-foreground text-sm">
                        {zones.find(z => z.name === activeZone)?.states}
                    </p>
                </div>

                {/* NORTH EASTERN COUNCIL */}
                <div className="mt-8 relative group">
                    <div className="absolute inset-0 bg-green-900/20 blur-xl group-hover:bg-green-900/30 transition-all"></div>
                    <div className="relative bg-emerald-950/30 border border-emerald-500/30 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6">
                        <div className="bg-emerald-900/50 p-4 rounded-full border border-emerald-500/50 text-emerald-300">
                            <Compass size={32} />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold text-emerald-200 mb-1">North-Eastern Council</h3>
                            <p className="text-emerald-400/80 text-sm mb-3">Created by Separate Act: <strong className="text-emerald-300">NEC Act, 1971</strong></p>
                            <p className="text-sm text-slate-300">
                                <strong className="text-emerald-500">The 8 Sisters:</strong> Assam, Manipur, Mizoram, Arunachal, Nagaland, Meghalaya, Tripura + <span className="underline decoration-emerald-500 decoration-2 underline-offset-2">Sikkim</span> (Added in 2002).
                            </p>
                        </div>
                        <Badge className="bg-emerald-700 hover:bg-emerald-600">PYQ TARGET</Badge>
                    </div>
                </div>
            </SectionPanel>


            {/* FOOTER: TRADE & COMMERCE */}
            <div className="mt-16 bg-gradient-to-r from-slate-900 via-blue-950/20 to-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

                <Globe className="mx-auto text-blue-500 mb-6 opacity-80" size={48} />
                <h2 className="text-2xl font-bold text-white mb-4">Trade, Commerce & Intercourse (Art 301)</h2>
                <div className="max-w-xl mx-auto space-y-4">
                    <p className="text-lg text-slate-300 font-serif">
                        "Trade, commerce and intercourse throughout the territory of India shall be <span className="text-blue-400 font-bold">FREE</span>."
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Exception: Parliament can impose restrictions in public interest (Art 302).
                    </p>
                </div>

                <div className="mt-10">
                    <Button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
                            px-8 py-6 text-lg font-bold rounded-full shadow-2xl transition-all border
                            ${isCompleted
                                ? 'bg-emerald-600 hover:bg-emerald-700 border-emerald-400 text-white shadow-emerald-900/50'
                                : 'bg-blue-600 hover:bg-blue-700 border-blue-400 text-white shadow-blue-900/50 hover:scale-105 active:scale-95'
                            }
                        `}
                    >
                        {isCompleted ?
                            <span className="flex items-center gap-2"><CheckCircle2 /> Bridge Constructed</span> :
                            <span className="flex items-center gap-2"><Anchor className="animate-pulse" /> Build The Bridge</span>
                        }
                    </Button>
                </div>
            </div>
        </BridgeContainer>
    );
}
