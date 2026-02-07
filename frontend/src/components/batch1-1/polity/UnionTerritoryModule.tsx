"use client";

import React, { useState } from "react";
import {
    Map, Compass, Scissors, Handshake, Flag,
    ChevronDown, ArrowRight, Globe, AlertTriangle,
    FileText, CheckCircle2, BadgeCheck, MoveRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface UnionTerritoryModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

// --- Design System: The Cartographer's Desk ---

const CartographerContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0fdf4] min-h-screen p-4 md:p-8 font-sans selection:bg-green-200 selection:text-green-900">
        <div className="max-w-6xl mx-auto space-y-12">
            {children}
        </div>
    </div>
);

const SectionCompass = ({ title }: { title: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className="h-[1px] flex-1 bg-green-300"></div>
        <div className="flex items-center gap-2 text-green-800 font-bold uppercase tracking-widest text-sm border-2 border-green-800 px-4 py-1 rounded-full bg-white shadow-sm">
            <Compass size={16} className="text-orange-600 animate-pulse" /> {title}
        </div>
        <div className="h-[1px] flex-1 bg-green-300"></div>
    </div>
);

const MapCard = ({ title, icon: Icon, children, color = "bg-white", className = "" }: { title: string, icon: any, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`relative ${color} border-2 border-slate-200 rounded-xl p-5 shadow-md hover:shadow-lg transition-all ${className}`}>
        {/* Map Grid Texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-xl"></div>

        <div className="flex items-center gap-3 mb-4 pb-2 border-b border-black/5 relative z-10">
            <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                <Icon size={20} className="text-green-700" />
            </div>
            <h3 className="font-bold text-lg text-slate-800">{title}</h3>
        </div>
        <div className="relative z-10 text-sm text-slate-700 space-y-3">
            {children}
        </div>
    </div>
);

const TimelineNode = ({ year, title, desc, isLeft = false }: { year: string, title: string, desc: string, isLeft?: boolean }) => (
    <div className={`flex items-center gap-4 ${isLeft ? 'flex-row-reverse' : ''} group`}>
        <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
            <div className="font-bold text-slate-800 group-hover:text-green-700 transition-colors">{title}</div>
            <div className="text-xs text-slate-500">{desc}</div>
        </div>
        <div className="w-12 h-12 rounded-full border-4 border-white bg-green-600 shadow-md flex items-center justify-center text-white text-[10px] font-bold shrink-0 z-10 group-hover:scale-110 transition-transform">
            {year}
        </div>
        <div className="flex-1 opacity-0 md:opacity-100"></div>
    </div>
);

export default function UnionTerritoryModule({ onComplete, isCompleted }: UnionTerritoryModuleProps) {
    return (
        <CartographerContainer>
            {/* HERO */}
            <div className="bg-[#1e293b] text-white p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-green-500 rounded-full blur-[100px] opacity-20"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-2 text-green-400 font-bold uppercase tracking-widest text-xs mb-2">
                            <Map size={14} /> Chapter 5
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Union & Its Territory</h1>
                        <p className="text-slate-300 max-w-xl text-lg leading-relaxed">
                            "India, that is Bharat, shall be a Union of States." <br />
                            <span className="text-sm opacity-60 italic">Mapping the evolution of boundaries from 1950 to Today.</span>
                        </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 text-center">
                        <div className="text-xs uppercase text-slate-400 font-bold mb-1">Current Status</div>
                        <div className="flex justify-center gap-6">
                            <div>
                                <span className="block text-3xl font-bold text-green-400">28</span>
                                <span className="text-xs">States</span>
                            </div>
                            <div className="w-[1px] bg-white/20"></div>
                            <div>
                                <span className="block text-3xl font-bold text-orange-400">8</span>
                                <span className="text-xs">UTs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- PHASE 1: THE ARTICLES (1-4) --- */}
            <SectionCompass title="Phase 1: The Constitutional Map" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Article 1 */}
                <MapCard title="Article 1" icon={Flag} className="lg:col-span-2">
                    <div className="text-lg font-serif italic text-center mb-4 text-green-900 bg-green-50 p-3 rounded border border-green-100">
                        "India, that is Bharat, shall be a <strong>Union of States</strong>."
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="space-y-1">
                            <div className="font-bold text-slate-900 border-b border-slate-200 pb-1">Dr. Ambedkar's Logic</div>
                            <ul className="list-disc pl-4 space-y-1 opacity-80">
                                <li><strong>Not</strong> result of agreement.</li>
                                <li><strong>No</strong> right to secede.</li>
                                <li>"Indestructible Union".</li>
                            </ul>
                        </div>
                        <div className="space-y-1">
                            <div className="font-bold text-slate-900 border-b border-slate-200 pb-1">Territory Types</div>
                            <ol className="list-decimal pl-4 space-y-1 opacity-80">
                                <li>Territories of States</li>
                                <li>Union Territories</li>
                                <li>Acquired Territories</li>
                            </ol>
                        </div>
                    </div>
                </MapCard>

                {/* Article 2 & 3 */}
                <MapCard title="Art 2 vs Art 3" icon={Scissors} className="lg:col-span-2">
                    <div className="grid grid-cols-2 h-full">
                        <div className="pr-4 border-r border-slate-200">
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-2">Article 2</Badge>
                            <p className="font-bold text-sm mb-1">Admission of NEW states</p>
                            <p className="text-xs opacity-70">Not previously part of India.</p>
                            <div className="mt-2 text-xs bg-slate-50 p-1 rounded font-mono">Ex: Sikkim (1975)</div>
                        </div>
                        <div className="pl-4">
                            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-2">Article 3</Badge>
                            <p className="font-bold text-sm mb-1">Reorg of EXISTING states</p>
                            <p className="text-xs opacity-70">Alter area, boundaries, name.</p>
                            <div className="mt-2 text-xs bg-slate-50 p-1 rounded font-mono">Ex: Telangana (2014)</div>
                        </div>
                    </div>
                </MapCard>
            </div>

            {/* ART 3 PROCESS & ART 4 */}
            <div className="grid md:grid-cols-3 gap-6 mt-6">
                <MapCard title="The Reorg Process (Art 3)" icon={MoveRight} className="md:col-span-2 bg-[#fffbf0]">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center text-xs">
                        <div className="bg-white p-3 rounded-lg shadow-sm w-full md:w-auto border flex-1">
                            <div className="font-bold text-slate-800">1. President Rec</div>
                            <div className="text-[10px] text-slate-500">Prior recommendation</div>
                        </div>
                        <ArrowRight className="text-slate-400 rotate-90 md:rotate-0" />
                        <div className="bg-white p-3 rounded-lg shadow-sm w-full md:w-auto border flex-1">
                            <div className="font-bold text-slate-800">2. State Legislature</div>
                            <div className="text-[10px] text-slate-500">Views only (Not Bound)</div>
                        </div>
                        <ArrowRight className="text-slate-400 rotate-90 md:rotate-0" />
                        <div className="bg-white p-3 rounded-lg shadow-sm w-full md:w-auto border flex-1 border-green-200 bg-green-50">
                            <div className="font-bold text-green-900">3. Parliament</div>
                            <div className="text-[10px] text-green-700">Simple Majority</div>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <Badge variant="outline" className="text-red-600 bg-red-50 border-red-200 text-[10px]">
                            PYQ Alert: President is NOT bound by State's views.
                        </Badge>
                    </div>
                </MapCard>

                <MapCard title="Article 4: The Loophole" icon={AlertTriangle}>
                    <div className="text-xs space-y-3">
                        <p><strong>Rule:</strong> Laws under Art 2 & 3 are <strong>NOT</strong> amendments under Art 368.</p>
                        <p><strong>Implication:</strong> Can be passed by Simple Majority.</p>
                        <div className="bg-slate-100 p-2 rounded border-l-2 border-red-500">
                            <strong>Berubari Case (1960):</strong> Ceding territory requires <strong>Special Majority</strong> (Art 368).
                        </div>
                    </div>
                </MapCard>
            </div>

            {/* --- PHASE 2: INTEGRATION --- */}
            <SectionCompass title="Phase 2: Integration of Princely States" />

            <div className="grid md:grid-cols-2 gap-6">
                <MapCard title="The Map of 1947" icon={Map} className="bg-slate-50">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl font-black text-slate-300">552</div>
                        <div>
                            <div className="font-bold text-slate-800">Total Princely States</div>
                            <div className="text-xs text-slate-500">within India's geography</div>
                        </div>
                    </div>
                    <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between bg-white p-2 rounded border">
                            <span>549 Joined Easily</span>
                            <CheckCircle2 size={14} className="text-green-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white p-2 rounded border border-orange-200 bg-orange-50">
                            <span className="font-bold text-orange-800">3 Refused Initially</span>
                            <AlertTriangle size={14} className="text-orange-500" />
                        </div>
                    </div>
                </MapCard>

                <MapCard title="The Tough Trio" icon={Handshake}>
                    <ul className="space-y-3">
                        <li className="flex gap-3 items-start">
                            <div className="bg-blue-100 text-blue-700 p-1.5 rounded text-xs font-bold w-24 text-center">Hyderabad</div>
                            <div>
                                <div className="font-bold text-sm">Police Action</div>
                                <div className="text-xs opacity-70">Operation Polo</div>
                            </div>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="bg-purple-100 text-purple-700 p-1.5 rounded text-xs font-bold w-24 text-center">Junagarh</div>
                            <div>
                                <div className="font-bold text-sm">Referendum</div>
                                <div className="text-xs opacity-70">People voted for India</div>
                            </div>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="bg-pink-100 text-pink-700 p-1.5 rounded text-xs font-bold w-24 text-center">Kashmir</div>
                            <div>
                                <div className="font-bold text-sm">Instrument of Accession</div>
                                <div className="text-xs opacity-70">Signed by Hari Singh</div>
                            </div>
                        </li>
                    </ul>
                </MapCard>
            </div>

            <MapCard title="Obsolete: The 1950 Classification" icon={FileText} className="mt-6 opacity-80 border-dashed">
                <div className="grid grid-cols-4 gap-2 text-center text-[10px] md:text-xs">
                    <div className="bg-slate-100 p-2 rounded">
                        <div className="font-bold">Part A</div>
                        <div className="opacity-60">Governor's Prov</div>
                    </div>
                    <div className="bg-slate-100 p-2 rounded">
                        <div className="font-bold">Part B</div>
                        <div className="opacity-60">Princely Legis</div>
                    </div>
                    <div className="bg-slate-100 p-2 rounded">
                        <div className="font-bold">Part C</div>
                        <div className="opacity-60">Comm. Prov</div>
                    </div>
                    <div className="bg-slate-100 p-2 rounded">
                        <div className="font-bold">Part D</div>
                        <div className="opacity-60">Andaman</div>
                    </div>
                </div>
                <div className="text-center mt-2 text-xs font-bold text-red-500">
                    Abolished by 7th Amendment (1956)
                </div>
            </MapCard>


            {/* --- PHASE 3: COMMISSIONS --- */}
            <SectionCompass title="Phase 3: The Battle for Language" />

            <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <MapCard title="Rejection Phase (1948)" icon={Scissors} color="bg-red-50/50">
                        <div className="space-y-4">
                            <div>
                                <div className="font-bold text-red-800 flex justify-between">
                                    Dhar Commission <span className="text-xs opacity-60">June 1948</span>
                                </div>
                                <div className="text-xs mt-1">Rejected Language. Favored "Admin Convenience".</div>
                            </div>
                            <div className="border-t border-red-100 pt-2">
                                <div className="font-bold text-red-800 flex justify-between">
                                    JVP Committee <span className="text-xs opacity-60">Dec 1948</span>
                                </div>
                                <div className="text-xs mt-1 mb-1 font-mono text-red-600">Nehru - Patel - Pattabhi</div>
                                <div className="text-xs">Rejected Language as basis.</div>
                            </div>
                        </div>
                    </MapCard>

                    <MapCard title="Acceptance Phase (1953)" icon={CheckCircle2} color="bg-green-50/50">
                        <div className="space-y-4">
                            <div className="bg-white p-2 rounded border border-green-100 shadow-sm relative">
                                <div className="absolute -right-2 top-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded animate-pulse">Turning Point</div>
                                <div className="font-bold text-green-900">Andhra State Created</div>
                                <div className="text-xs mt-1 opacity-80">Death of Potti Sriramulu (Hunger Strike). First Linguistic State.</div>
                            </div>
                            <div>
                                <div className="font-bold text-green-900 flex justify-between">
                                    Fazl Ali Commission <span className="text-xs opacity-60">Dec 1953</span>
                                </div>
                                <div className="text-xs mt-1 mb-1 font-mono text-green-700">Fazl Ali - Panikkar - Kunzru</div>
                                <div className="text-xs"><strong>Accepted</strong> Language (Broadly).</div>
                                <div className="text-xs mt-1 text-red-600">Rejected "One Language - One State".</div>
                            </div>
                        </div>
                    </MapCard>
                </div>
            </div>

            {/* --- PHASE 4: EVOLUTION TIMELINE --- */}
            <SectionCompass title="Phase 4: Evolution of States (1956 - 2019)" />

            <div className="relative py-8">
                {/* Vertical Line */}
                <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2"></div>

                <div className="space-y-8 pl-12 md:pl-0">
                    <TimelineNode
                        year="1960"
                        title="Maharashtra & Gujarat"
                        desc="Bombay Bifurcated"
                        isLeft
                    />
                    <TimelineNode
                        year="1961"
                        title="Dadra & Nagar Haveli"
                        desc="10th AA (Portuguese)"
                    />
                    <TimelineNode
                        year="1962"
                        title="Goa, Daman & Diu"
                        desc="12th AA (Police Action)"
                        isLeft
                    />
                    <TimelineNode
                        year="1963"
                        title="Nagaland"
                        desc="Separated from Assam"
                    />
                    <TimelineNode
                        year="1966"
                        title="Punjab & Haryana"
                        desc="Shah Commission"
                        isLeft
                    />
                    <TimelineNode
                        year="1971"
                        title="Himachal Pradesh"
                        desc="Statehood"
                    />
                    <TimelineNode
                        year="1972"
                        title="Manipur, Tripura, Meghalaya"
                        desc="NE Reorganization"
                        isLeft
                    />
                    <TimelineNode
                        year="1975"
                        title="Sikkim"
                        desc="36th AA (Full State)"
                    />
                    <TimelineNode
                        year="1987"
                        title="Mizoram, Arunachal, Goa"
                        desc="Statehood"
                        isLeft
                    />
                    <TimelineNode
                        year="2000"
                        title="Chhattisgarh, UK, Jharkhand"
                        desc="New Millennium States"
                    />
                    <TimelineNode
                        year="2014"
                        title="Telangana"
                        desc="Andhra Bifurcated"
                        isLeft
                    />
                    <TimelineNode
                        year="2019"
                        title="J&K and Ladakh"
                        desc="UT Status"
                    />
                </div>
            </div>

            {/* COMPLETION */}
            <div className="mt-12 text-center pb-8">
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`
            relative px-8 py-6 text-lg font-bold rounded-full shadow-xl transition-all
            ${isCompleted ? 'bg-green-700 hover:bg-green-800 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'}
          `}
                >
                    {isCompleted ?
                        <span className="flex items-center gap-2"><BadgeCheck /> Mapping Complete</span> :
                        <span className="flex items-center gap-2"><Map /> Mark Chapter 5 Complete</span>
                    }
                </Button>
            </div>
        </CartographerContainer>
    );
}
