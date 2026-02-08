"use client";

import React, { useState } from "react";
import {
    Map, Shield, Landmark, Globe, AlertTriangle,
    CheckCircle2, Info, Building2, Gavel, Users,
    BadgeCheck, Compass, MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface UnionTerritoriesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

// --- Design System: The Map & The Badge ---

const AdminContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f8fafc] min-h-screen p-4 md:p-8 font-sans selection:bg-blue-200">
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

const ScrapbookCard = ({ title, children, color = "border-blue-700", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        {/* Crumpled Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

        <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 font-['Kalam'] ${color.replace('border-', 'text-')}`}>
            <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
            {title}
        </h3>
        <div className="space-y-4 text-slate-700 relative z-10 font-medium">
            {children}
        </div>
    </div>
);

export default function UnionTerritoriesModule({ onComplete, isCompleted, chapterNumber = "41" }: UnionTerritoriesModuleProps) {
    return (
        <AdminContainer>
            {/* HERO SECTION */}
            <div className="relative bg-white border-4 border-slate-900 rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(30,58,138,1)] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-blue-700 text-white font-['Kalam'] px-4 py-1 text-lg">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-slate-900"></div>
                        <span className="text-slate-500 font-bold uppercase tracking-widest text-sm">Direct Federal Control</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-['Kalam'] leading-tight">
                        Union Territories <br />
                        <span className="text-blue-700">The Map & The Badge</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed italic">
                        "Unlike States, UTs are units that are under the direct control and administration of the Central Government."
                    </p>
                </div>
            </div>

            {/* PHASE 1: ADMINISTRATION */}
            <SectionHeader title="Phase 1: Administration" icon={Shield} color="border-blue-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <ScrapbookCard title="Article 239: The Rule" color="border-blue-700">
                    <div className="flex items-center justify-center p-4 bg-blue-50 rounded-xl mb-4 border-2 border-dashed border-blue-200">
                        <BadgeCheck size={48} className="text-blue-700" />
                    </div>
                    <p className="text-lg leading-snug">
                        Every UT is administered by the <span className="text-blue-800 font-bold underline">President</span> acting through an <span className="font-bold">Administrator</span>.
                    </p>
                    <div className="space-y-2 mt-4">
                        <div className="font-bold text-slate-900 border-b-2 border-slate-100 pb-1">Designations:</div>
                        <ul className="grid grid-cols-1 gap-2">
                            <li className="flex gap-2 items-start bg-slate-50 p-2 rounded-lg border border-slate-200">
                                <span className="font-bold text-blue-700">LG:</span>
                                <span className="text-sm italic">Delhi, Puducherry, A&N, J&K, Ladakh.</span>
                            </li>
                            <li className="flex gap-2 items-start bg-slate-50 p-2 rounded-lg border border-slate-200">
                                <span className="font-bold text-blue-700">Admin:</span>
                                <span className="text-sm italic">Chandigarh, D&NH+D&D, Lakshadweep.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4 p-3 bg-red-50 border-2 border-red-200 rounded-xl">
                        <p className="text-xs font-bold text-red-800 uppercase flex items-center gap-2">
                            <AlertTriangle size={14} /> PYQ Alert:
                        </p>
                        <p className="text-sm text-red-700 italic">
                            The Administrator is an <span className="font-bold underline">Agent of the President</span>, not a Head of State like a Governor.
                        </p>
                    </div>
                </ScrapbookCard>

                <ScrapbookCard title="The 3 Categories" color="border-blue-700">
                    <div className="relative aspect-video bg-blue-100 rounded-xl border-2 border-blue-200 overflow-hidden mb-4 flex items-center justify-center">
                        <Map size={80} className="text-blue-300 animate-pulse" />
                        <div className="absolute inset-0 flex items-center justify-center text-blue-900 font-black text-4xl opacity-10">8 PINS</div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl border border-green-200 text-green-900 font-bold">
                            <Building2 className="text-green-700" size={20} />
                            With Legislature: Delhi, Puducherry, J&K.
                        </div>
                        <div className="flex items-center gap-2 bg-red-50 p-3 rounded-xl border border-red-200 text-red-900 font-bold">
                            <Gavel className="text-red-700" size={20} />
                            Without Legislature: 5 Others.
                        </div>
                    </div>
                    <div className="mt-4 text-xs font-bold text-slate-500 uppercase">Why Created?</div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] mt-2 font-black">
                        <div className="p-2 border rounded bg-slate-50">ADMIN/POL: <br /><span className="text-slate-400">Delhi, Chandi</span></div>
                        <div className="p-2 border rounded bg-slate-50">CULTURAL: <br /><span className="text-slate-400">Pudu, D&D</span></div>
                        <div className="p-2 border rounded bg-slate-50">STRATEGIC: <br /><span className="text-slate-400">A&N, Laksha</span></div>
                        <div className="p-2 border rounded bg-slate-50">BACKWARD: <br /><span className="text-slate-400">Former NE UTs</span></div>
                    </div>
                </ScrapbookCard>
            </div>

            {/* PHASE 2: SPECIAL PROVISIONS */}
            <SectionHeader title="Phase 2: Special Provisions" icon={Landmark} color="border-green-700" />

            <div className="grid md:grid-cols-2 gap-8">
                <ScrapbookCard title="Puducherry (Art 239A)" color="border-green-700">
                    <div className="flex items-center gap-4 border-b-2 border-green-50 pb-4 mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">14th</div>
                        <p className="text-sm font-bold text-slate-500">Created by 14th Amendment Act (1962)</p>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <div className="w-6 h-6 rounded bg-green-700 text-white flex items-center justify-center text-xs shrink-0 mt-1">1</div>
                            <p className="text-sm">Parliament can create <span className="font-bold underline text-green-800">Legislature / Council of Ministers</span>.</p>
                        </li>
                        <li className="flex gap-3">
                            <div className="w-6 h-6 rounded bg-green-700 text-white flex items-center justify-center text-xs shrink-0 mt-1">2</div>
                            <p className="text-sm">Power to make laws on <span className="font-bold">State List & Concurrent List</span>.</p>
                        </li>
                        <li className="flex gap-3">
                            <div className="w-6 h-6 rounded bg-green-700 text-white flex items-center justify-center text-xs shrink-0 mt-1">3</div>
                            <p className="text-sm">President's regulation power is <span className="font-bold text-red-600 underline">limited</span> when Assembly is active.</p>
                        </li>
                    </ul>
                </ScrapbookCard>

                <ScrapbookCard title="Delhi (Art 239AA) - NCT" color="border-green-700" className="bg-green-50/10">
                    <div className="absolute top-4 right-4 animate-bounce">
                        <Badge className="bg-red-600">CRITICAL</Badge>
                    </div>
                    <div className="bg-white p-4 rounded-xl border-2 border-green-700 shadow-sm">
                        <h4 className="font-black text-green-900 border-b-2 border-green-50 mb-2">69th Amendment (1991)</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="block text-3xl font-black text-green-700">70</span>
                                <span className="text-[10px] uppercase font-bold text-slate-400">Assembly Seats</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-black text-green-700">CM</span>
                                <span className="text-[10px] uppercase font-bold text-slate-400">Appointed by President</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 p-4 bg-white border-2 border-dashed border-red-200 rounded-xl">
                        <p className="text-sm font-bold text-red-900 mb-2">3 LIST EXCEPTIONS (PYQ):</p>
                        <div className="flex gap-2">
                            <Badge variant="outline" className="border-red-500 text-red-700">1. Public Order</Badge>
                            <Badge variant="outline" className="border-red-500 text-red-700">2. Police</Badge>
                            <Badge variant="outline" className="border-red-500 text-red-700">3. Land</Badge>
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-4 italic">
                        "Difference of opinion? LG refers matter to <span className="font-bold text-blue-700">President</span> for final decision."
                    </p>
                </ScrapbookCard>
            </div>

            {/* PHASE 3: J&K REORGANIZATION */}
            <SectionHeader title="Phase 3: J&K Reorganization (2019)" icon={Globe} color="border-slate-900" />

            <div className="grid md:grid-cols-3 gap-8">
                <ScrapbookCard title="The New Map" color="border-slate-900" className="md:col-span-2">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 space-y-4">
                            <div className="p-4 bg-indigo-50 border-2 border-indigo-200 rounded-2xl">
                                <h5 className="font-black text-indigo-900 mb-1 flex items-center gap-2">
                                    <BadgeCheck size={18} /> J&K (UT)
                                </h5>
                                <p className="text-sm">With Legislature. Modelled after Puducherry.</p>
                            </div>
                            <div className="p-4 bg-amber-50 border-2 border-amber-200 rounded-2xl">
                                <h5 className="font-black text-amber-900 mb-1 flex items-center gap-2">
                                    <MapPin size={18} /> LADAKH (UT)
                                </h5>
                                <p className="text-sm">Without Legislature. Direct control.</p>
                            </div>
                        </div>
                        <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white border-2 border-slate-100 rounded-xl shadow-sm">
                                <Compass className="text-slate-400" />
                                <span className="text-xs font-bold italic">Common High Court for both J&K and Ladakh.</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white border-2 border-slate-100 rounded-xl shadow-sm">
                                <Gavel className="text-slate-400" />
                                <span className="text-xs font-bold italic">Ranbir Penal Code replaced by <span className="text-red-700 underline">IPC</span>.</span>
                            </div>
                        </div>
                    </div>
                </ScrapbookCard>

                <div className="space-y-6">
                    <ScrapbookCard title="Advisory Committees" color="border-red-700">
                        <div className="text-center py-4">
                            <Users size={48} className="mx-auto text-red-700 mb-2" />
                            <h5 className="font-bold text-red-900">HMAC</h5>
                            <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Home Minister's Advisory Committee</p>
                        </div>
                        <div className="text-xs space-y-2">
                            <p>● For UTs without legislature.</p>
                            <p>● <span className="font-bold underline">Chair:</span> Union Home Minister.</p>
                            <p>● <span className="font-bold">Goal:</span> General development questions.</p>
                        </div>
                    </ScrapbookCard>
                </div>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-2 border-dashed border-slate-200 pt-12 pb-12">
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
                            UT MASTERY ACHIEVED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Landmark size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold font-['Kalam']">Signed: Collector of Federal Administration</p>
            </div>
        </AdminContainer>
    );
}
