"use client";

import React, { useState } from "react";
import {
    Building2, Building, Landmark,
    Map as MapIcon, Compass, Users,
    FileText, Layout, Clock,
    ArrowRight, Info, AlertTriangle,
    Construction, Ruler, Briefcase
} from "lucide-react";

interface MunicipalitiesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: number | string;
}

// --- Design System: The City Skyline ---

const UrbanContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#f1f5f9] text-foreground">
        {/* Blueprint Grid Texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none bg-[size:100px_100px] bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)]"></div>

        <div className="max-w-5xl mx-auto space-y-20 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const BlueprintCard = ({ children, title, icon: Icon, color = "blue", className = "" }: { children: React.ReactNode, title: string, icon?: any, color?: "blue" | "urban" | "green", className?: string }) => {
    const styles = {
        blue: "bg-blue-50 border-blue-400/30 text-blue-900 shadow-blue-500/5",
        urban: "bg-muted border-slate-400/30 text-foreground shadow-slate-500/5",
        green: "bg-emerald-50 border-emerald-400/30 text-emerald-900 shadow-emerald-500/5"
    };

    return (
        <div className={`p-6 border-2 rounded-xl shadow-lg relative bg-card/50 backdrop-blur-sm group transition-all duration-300 hover:border-blue-500/50 ${styles[color]} ${className}`}>
            <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-dashed border-current opacity-40">
                {Icon && <Icon size={22} />}
                <h3 className="text-xl font-bold font-serif uppercase tracking-widest">{title}</h3>
            </div>
            {children}
        </div>
    );
};

export default function MunicipalitiesModule({ onComplete, isCompleted }: MunicipalitiesModuleProps) {
    const [activeBuilding, setActiveBuilding] = useState<number | null>(null);

    const buildings = [
        {
            type: "Nagar Panchayat",
            area: "Transitional Area",
            height: "h-24",
            desc: "For areas transitioning from Rural to Urban.",
            color: "bg-emerald-500",
            icon: Building
        },
        {
            type: "Municipal Council",
            area: "Smaller Urban Area",
            height: "h-40",
            desc: "For established smaller towns and urban centers.",
            color: "bg-blue-500",
            icon: Building2
        },
        {
            type: "Municipal Corporation",
            area: "Larger Urban Area",
            height: "h-64",
            desc: "For major cities. Powerful Mayor-Council system.",
            color: "bg-slate-700",
            icon: Landmark
        }
    ];

    return (
        <UrbanContainer>
            {/* HERO: CITY SKYLINE */}
            <div className="text-center py-12 relative">
                <div className="flex justify-center items-end gap-1 mb-8 opacity-20 group">
                    <div className="w-12 h-24 bg-slate-400 rounded-t"></div>
                    <div className="w-16 h-40 bg-muted-foreground rounded-t"></div>
                    <div className="w-14 h-32 bg-slate-400 rounded-t"></div>
                    <div className="w-12 h-64 bg-slate-600 rounded-t relative">
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-400 blur-xl animate-pulse"></div>
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-foreground font-serif mb-4 tracking-tighter">
                    MUNICIPALITIES
                </h1>
                <div className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl">
                    <Construction size={18} /> 74th Amendment Act
                </div>
            </div>

            {/* PHASE 1: THE BASICS */}
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-slate-300 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-muted-foreground">Phase 1: Urban Blueprint</h2>
                    <div className="h-px bg-slate-300 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { label: "Part Added", value: "Part IX-A", desc: "Articles 243-P to 243-ZG", icon: Layout },
                        { label: "12th Schedule", value: "18 Items", desc: "Functional items of ULBs", icon: FileText },
                        { label: "Force Date", value: "June 1, 1993", desc: "Constitutional Status", icon: Clock }
                    ].map((item, i) => (
                        <div key={i} className="bg-card p-6 rounded-2xl border-2 border-border shadow-sm text-center space-y-2 group hover:border-blue-400 transition-colors">
                            <item.icon size={32} className="mx-auto text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{item.label}</div>
                            <div className="text-2xl font-black text-foreground">{item.value}</div>
                            <div className="text-[10px] text-muted-foreground italic">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* PHASE 2: TYPES of ULBs (BUILDING HEIGHTS) */}
            <div className="space-y-12 mt-20">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-slate-300 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-muted-foreground">Phase 2: The Skyline Three</h2>
                    <div className="h-px bg-slate-300 flex-1"></div>
                </div>

                <div className="flex flex-col md:flex-row items-end justify-center gap-8 md:gap-16 pt-12">
                    {buildings.map((b, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center group cursor-pointer"
                            onClick={() => setActiveBuilding(activeBuilding === i ? null : i)}
                        >
                            <div className={`w-32 ${b.height} ${b.color} rounded-t-xl relative transition-all duration-500 group-hover:brightness-110 shadow-2xl ${activeBuilding === i ? 'scale-105 ring-4 ring-white ring-offset-4 ring-offset-blue-100' : ''}`}>
                                {/* Windows */}
                                <div className="absolute inset-0 p-4 grid grid-cols-2 gap-2 opacity-20">
                                    {[...Array(8)].map((_, idx) => (
                                        <div key={idx} className="w-full h-2 bg-card rounded-sm"></div>
                                    ))}
                                </div>
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                    <b.icon className="text-foreground" size={32} />
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <h4 className="font-bold text-foreground leading-tight">{b.type}</h4>
                                <span className="text-[10px] uppercase font-bold text-muted-foreground">{b.area}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {activeBuilding !== null && (
                    <div className="bg-card p-8 rounded-3xl border-2 border-border shadow-2xl animate-in zoom-in-95 duration-300 relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Zone Details</div>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className={`p-6 rounded-2xl ${buildings[activeBuilding].color} text-white`}>
                                <Landmark size={48} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black text-foreground">{buildings[activeBuilding].type}</h3>
                                <p className="text-muted-foreground italic">"{buildings[activeBuilding].desc}"</p>
                                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                                    <Info size={14} /> Specified by Governor based on Pop/Density
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* PHASE 3: PLANNING COMMITTEES (BLUEPRINTS) */}
            <div className="space-y-12 mt-20">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-blue-500/30 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-blue-600">Phase 3: The Planning Blueprints</h2>
                    <div className="h-px bg-blue-500/30 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* DPC */}
                    <BlueprintCard title="DPC (Art 243-ZD)" icon={MapIcon} color="urban">
                        <div className="space-y-6">
                            <div className="flex justify-between items-center text-xs font-bold">
                                <span>District Planning Committee</span>
                                <span className="text-blue-600">Consolidate Rural+Urban Plans</span>
                            </div>

                            {/* Composition Visual */}
                            <div className="relative h-24 bg-muted rounded-xl overflow-hidden border border-border">
                                <div className="absolute inset-0 flex">
                                    <div className="w-[80%] bg-blue-600 flex items-center justify-center text-white text-[10px] font-black relative group/pop">
                                        4/5th ELECTED
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover/pop:block bg-slate-900 text-white p-2 text-[8px] rounded z-20 w-32">
                                            From members of Zila Parishad & Municipalities.
                                        </div>
                                    </div>
                                    <div className="w-[20%] bg-slate-300 flex items-center justify-center text-muted-foreground text-[10px]">1/5th NOM</div>
                                </div>
                            </div>
                            <p className="text-[10px] text-muted-foreground italic text-center">"PYQ: Must be elected from Zila Parishad & Municipalities."</p>
                        </div>
                    </BlueprintCard>

                    {/* MPC */}
                    <BlueprintCard title="MPC (Art 243-ZE)" icon={Compass} color="blue">
                        <div className="space-y-6">
                            <div className="flex justify-between items-center text-xs font-bold">
                                <span>Metropolitan Planning Comm</span>
                                <span className="text-blue-600">Pop &gt; 10 Lakhs</span>
                            </div>

                            {/* Composition Visual */}
                            <div className="relative h-24 bg-muted rounded-xl overflow-hidden border border-border">
                                <div className="absolute inset-0 flex">
                                    <div className="w-[66.6%] bg-blue-800 flex items-center justify-center text-white text-[10px] font-black relative group/pop2">
                                        2/3rd ELECTED
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover/pop2:block bg-slate-900 text-white p-2 text-[8px] rounded z-20 w-32">
                                            From members of Municipalities & Panchayats.
                                        </div>
                                    </div>
                                    <div className="w-[33.4%] bg-blue-200 flex items-center justify-center text-blue-800 text-[10px]">1/3rd NOM</div>
                                </div>
                            </div>
                            <p className="text-[10px] text-muted-foreground italic text-center">"Trap Alert: DPC is 4/5th, MPC is 2/3rd."</p>
                        </div>
                    </BlueprintCard>
                </div>
            </div>

            {/* WARD MAPS & RESERVATION */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="p-8 bg-card border-2 border-slate-900 rounded-3xl shadow-xl relative overflow-hidden">
                    <div className="absolute -right-8 -bottom-8 opacity-[0.05] rotate-12">
                        <Users size={120} />
                    </div>
                    <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                        <Ruler className="text-blue-600" /> Structure & Wards
                    </h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex gap-2">
                            <ArrowRight size={16} className="text-blue-500 mt-0.5" />
                            <span>**Ward Committees**: Mandatory if pop &gt; 3 Lakhs.</span>
                        </li>
                        <li className="flex gap-2">
                            <ArrowRight size={16} className="text-blue-500 mt-0.5" />
                            <span>**Reservation**: SC/ST (Pop), Women (1/3rd Min).</span>
                        </li>
                        <li className="flex gap-2">
                            <ArrowRight size={16} className="text-blue-500 mt-0.5" />
                            <span>**Term**: 5 Years. Reconstituted body only for REMAINDER. (PYQ)</span>
                        </li>
                    </ul>
                </div>

                <div className="p-8 bg-blue-900 text-white rounded-3xl shadow-xl relative group">
                    <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Urban Bodies Quick-List</h3>
                    <div className="grid grid-cols-2 gap-4 text-xs opacity-80 group-hover:opacity-100 transition-opacity">
                        <div className="bg-card/10 p-2 rounded">**Cantonment Board**: Min. of Defence. (Central Act)</div>
                        <div className="bg-card/10 p-2 rounded">**Port Trust**: Created by Parliament.</div>
                        <div className="bg-card/10 p-2 rounded">**Notified Area**: Fully nominated.</div>
                        <div className="bg-card/10 p-2 rounded">**Town Area**: Semi-municipal.</div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-[10px] text-blue-300">
                        <AlertTriangle size={12} /> PORT TRUSTS are created by Acts of PARLIAMENT.
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="mt-20 text-center border-t-4 border-slate-900 pt-16 pb-12">
                <div className="max-w-xl mx-auto space-y-8">
                    <div className="flex justify-center gap-2 items-end mb-6">
                        <div className="w-8 h-12 bg-slate-900"></div>
                        <div className="w-8 h-20 bg-slate-900"></div>
                        <div className="w-8 h-16 bg-slate-900"></div>
                    </div>
                    <h3 className="text-2xl font-black font-serif uppercase tracking-widest text-foreground">The Power of Cities</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                        "Enabling local self-government in urban areas to manage the engine of economic growth."
                    </p>
                    <button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
                            w-full px-8 py-4 rounded-xl font-black uppercase tracking-[0.3em] transition-all
                            ${isCompleted
                                ? 'bg-slate-200 text-muted-foreground cursor-not-allowed'
                                : 'bg-slate-900 text-white shadow-2xl hover:bg-blue-900 hover:-translate-y-1 active:scale-95'
                            }
                        `}
                    >
                        {isCompleted ? "City Plan Approved" : "Grand City Council Vote"}
                    </button>
                    <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-muted-foreground">
                        <Briefcase size={12} /> Urban Development Authority
                    </div>
                </div>
            </div>
        </UrbanContainer>
    );
}
