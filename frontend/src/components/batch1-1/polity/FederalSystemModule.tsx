"use client";

import React, { useState } from "react";
import {
    Scale, Landmark, Map, Gavel, FileText, Shield,
    AlertTriangle, CheckCircle2, XCircle, ArrowRight,
    Users, Component, Activity, Lock, Globe
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FederalSystemModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

// --- Design System: The Tilted Scale ---

const ScaleContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0f4f8] min-h-screen p-4 md:p-8 font-sans selection:bg-orange-200 selection:text-orange-900 relative text-slate-800">
        {/* Graph Paper / Balance Sheet Texture */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, icon: Icon, color = "slate" }: { title: string, icon: any, color?: "green" | "orange" | "slate" }) => {
    const colors = {
        green: "text-green-700 border-green-200 bg-green-50",
        orange: "text-orange-700 border-orange-200 bg-orange-50",
        slate: "text-slate-700 border-slate-200 bg-white"
    };

    return (
        <div className="flex items-center gap-4 my-8">
            <div className={`h-[2px] flex-1 bg-gradient-to-r from-transparent to-${color === 'slate' ? 'slate-300' : color + '-300'}`}></div>
            <div className={`flex items-center gap-2 border px-6 py-2 rounded-full shadow-sm ${colors[color]}`}>
                <Icon size={18} />
                <span className="font-bold uppercase tracking-wider text-sm font-serif">{title}</span>
            </div>
            <div className={`h-[2px] flex-1 bg-gradient-to-l from-transparent to-${color === 'slate' ? 'slate-300' : color + '-300'}`}></div>
        </div>
    );
};

const FeatureCard = ({ title, children, icon: Icon, type = "Federal" }: { title: string, children: React.ReactNode, icon?: any, type?: "Federal" | "Unitary" }) => {
    const isFederal = type === "Federal";
    return (
        <div className={`relative border-2 ${isFederal ? 'border-green-200 bg-green-50/50' : 'border-orange-200 bg-orange-50/50'} rounded-xl p-6 shadow-sm hover:shadow-md transition-all`}>
            <div className={`absolute -top-3 left-4 ${isFederal ? 'bg-green-600' : 'bg-orange-600'} text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm uppercase tracking-widest`}>
                {title}
            </div>
            <div className="mt-4">
                {Icon && (
                    <div className={`float-right ml-4 mb-2 p-2 rounded-lg bg-white shadow-sm border ${isFederal ? 'border-green-100 text-green-600' : 'border-orange-100 text-orange-600'}`}>
                        <Icon size={24} />
                    </div>
                )}
                <div className="text-sm space-y-3 font-handwriting text-slate-700 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};

const WeightItem = ({ title, pyq }: { title: string, pyq?: boolean }) => (
    <div className="bg-white border border-slate-200 p-3 rounded shadow-sm flex items-center justify-between gap-2">
        <span className="font-semibold text-slate-700 text-sm">{title}</span>
        {pyq && <Badge className="bg-red-600 hover:bg-red-700 text-[10px] h-5">PYQ</Badge>}
    </div>
);


export default function FederalSystemModule({ onComplete, isCompleted }: FederalSystemModuleProps) {
    return (
        <ScaleContainer>
            {/* HERO */}
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl relative overflow-hidden border border-slate-200">
                {/* Decorative Scale */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                    <Scale size={300} />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-orange-100 p-3 rounded-full border border-orange-200">
                            <Scale size={32} className="text-orange-600 transform -rotate-12" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black font-serif text-slate-800 tracking-tight">
                            The Tilted Scale
                        </h1>
                    </div>
                    <p className="text-slate-500 max-w-2xl text-lg leading-relaxed font-handwriting italic border-l-4 border-orange-400 pl-4 py-1">
                        "Federal in form but Unitary in spirit. An indestructible Union of destructible States."
                    </p>
                </div>
            </div>

            {/* PHASE 1: THE MODEL & DEFINITION */}
            <SectionHeader title="Phase 1: The Model" icon={Map} />

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Left: Article 1 */}
                <div className="bg-white border-2 border-slate-200 rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center gap-2">
                        <span className="bg-slate-800 text-white px-2 py-0.5 rounded text-xs">Art 1</span> Union of States
                    </h3>
                    <div className="space-y-3 text-sm font-handwriting text-slate-600">
                        <p>Constitution uses "Union of States", NOT "Federation of States".</p>
                        <div className="bg-slate-50 p-3 rounded border border-slate-100">
                            <strong>Dr. Ambedkar's Logic:</strong>
                            <ul className="list-disc pl-4 mt-1 space-y-1">
                                <li>Not result of agreement by states (unlike USA).</li>
                                <li>No right to secede. <Badge variant="outline" className="text-red-500 border-red-200 text-[10px] ml-1">PYQ</Badge></li>
                            </ul>
                        </div>
                        <p className="font-bold text-slate-700">Result: "Indestructible Union of Destructible States".</p>
                    </div>
                </div>

                {/* Right: Canadian Model */}
                <div className="bg-orange-50/50 border-2 border-orange-200 rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-lg text-orange-800 mb-3 flex items-center gap-2">
                        <Globe size={18} /> The Canadian Model
                    </h3>
                    <div className="space-y-3 text-sm font-handwriting text-slate-600">
                        <p>We adopted the <strong>Canadian Model</strong> (Not American). <Badge className="bg-red-600 ml-1 text-[10px]">PYQ</Badge></p>
                        <div className="bg-white p-3 rounded border border-orange-100">
                            <strong>Why?</strong>
                            <ul className="list-disc pl-4 mt-1 space-y-1">
                                <li>Formation by disintegration (Unitary → Federal).</li>
                                <li>Use of term 'Union'.</li>
                                <li><strong>Centralizing tendency</strong> (Strong Centre).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 2: FEDERAL FEATURES (GREEN) */}
            <SectionHeader title="Phase 2: Federal Features (State's Weight)" icon={Component} color="green" />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <FeatureCard title="Dual Polity" type="Federal" icon={Users}>
                    <p><strong>Structure:</strong> Union Govt (Centre) + State Govts (Periphery).</p>
                    <p><strong>Sovereignty:</strong> Each is sovereign in its assigned field.</p>
                </FeatureCard>

                <FeatureCard title="Written & Rigid" type="Federal" icon={FileText}>
                    <p><strong>Written:</strong> Lengthiest written constitution (Defines limits clearly).</p>
                    <p><strong>Rigid:</strong> Amending federal structure requires <span className="text-green-600 font-bold">Special Majority + Ratification</span> by half states. <span className="text-red-500 font-bold">[PYQ]</span></p>
                </FeatureCard>

                <FeatureCard title="Division of Powers" type="Federal" icon={Component}>
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs bg-white p-2 rounded border border-green-100">
                            <span>Union List</span> <strong>100 Subjects</strong>
                        </div>
                        <div className="flex justify-between text-xs bg-white p-2 rounded border border-green-100">
                            <span>State List</span> <strong>61 Subjects</strong>
                        </div>
                        <div className="flex justify-between text-xs bg-white p-2 rounded border border-green-100">
                            <span>Concurrent List</span> <strong>52 Subjects</strong>
                        </div>
                    </div>
                </FeatureCard>

                <FeatureCard title="Supremacy & Judiciary" type="Federal" icon={Shield}>
                    <p><strong>Supremacy:</strong> Constitution is Supreme Law of Land.</p>
                    <p><strong>Independent Judiciary:</strong> SC protects Constitution (Original Jurisdiction). <span className="text-red-500 font-bold">[PYQ]</span></p>
                    <p><strong>Bicameralism:</strong> Rajya Sabha represents the States.</p>
                </FeatureCard>
            </div>


            {/* PHASE 3: UNITARY FEATURES (ORANGE) */}
            <SectionHeader title="Phase 3: Unitary Features (The Heavy Centre)" icon={WeightItem} color="orange" />

            <div className="grid md:grid-cols-12 gap-8 mb-12">
                {/* The Heavy Side (List) */}
                <div className="md:col-span-12 lg:col-span-8">
                    <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 relative overflow-hidden">
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-orange-100/50 to-transparent pointer-events-none"></div>

                        <h3 className="text-xl font-bold text-orange-900 mb-6 flex items-center gap-2">
                            <Scale className="transform rotate-12 text-orange-600" /> The "Non-Federal" Bias
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-white p-3 rounded border border-orange-100 shadow-sm text-sm font-handwriting">
                                <strong className="text-orange-700 block mb-1">1. Strong Centre</strong>
                                Division of powers favours Centre (Union List is longer & more important).
                            </div>
                            <div className="bg-white p-3 rounded border border-orange-100 shadow-sm text-sm font-handwriting">
                                <strong className="text-orange-700 block mb-1">2. States Not Indestructible</strong>
                                Parliament can redraw map/change names unilaterally (Art 3). <Badge className="bg-red-500 scale-75 origin-left">PYQ</Badge>
                            </div>
                            <div className="bg-white p-3 rounded border border-orange-100 shadow-sm text-sm font-handwriting">
                                <strong className="text-orange-700 block mb-1">3. Single Constitution</strong>
                                States don't have their own constitution.
                            </div>
                            <div className="bg-white p-3 rounded border border-orange-100 shadow-sm text-sm font-handwriting">
                                <strong className="text-orange-700 block mb-1">4. Flexibility</strong>
                                Bulk of Constitution amended by Parliament alone.
                            </div>
                            <div className="bg-white p-3 rounded border border-orange-100 shadow-sm text-sm font-handwriting">
                                <strong className="text-orange-700 block mb-1">5. No Equality of Representation</strong>
                                RS seats based on Population (1-31), not equality (like US Senate).
                            </div>
                            <div className="bg-white p-3 rounded border border-orange-100 shadow-sm text-sm font-handwriting">
                                <strong className="text-orange-700 block mb-1">6. Emergency Provisions</strong>
                                Art 352, 356, 360 convert structure to Unitary <strong>without amendment</strong>. <Badge className="bg-red-500 scale-75 origin-left">PYQ</Badge>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Unitary Cards */}
                <div className="md:col-span-12 lg:col-span-4 space-y-4">
                    <FeatureCard title="Integrated Machinery" type="Unitary" icon={Activity}>
                        <p><strong>Single Citizenship:</strong> Only Indian Citizenship.</p>
                        <p><strong>Integrated Judiciary:</strong> Single hierarchy (SC → HC → Dist Court). Contrast with US.</p>
                    </FeatureCard>

                    <FeatureCard title="Control Over States" type="Unitary" icon={Lock}>
                        <p><strong>All-India Services:</strong> IAS/IPS recruited by Centre, work in States. Removal only by President.</p>
                        <p><strong>Governor:</strong> Appointed by President (Agent of Centre). <span className="text-red-500 font-bold">[PYQ]</span></p>
                        <p><strong>Veto:</strong> Governor can reserve bills for President.</p>
                    </FeatureCard>
                </div>
            </div>

            {/* FOOTER: CRITICAL EVALUATION */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                        <p className="text-slate-300 italic text-sm mb-2">"Quasi-Federal"</p>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">— K.C. Wheare <Badge variant="outline" className="ml-1 border-slate-500 text-slate-400 text-[9px]">PYQ</Badge></p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                        <p className="text-slate-300 italic text-sm mb-2">"Bargaining Federalism"</p>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">— Morris Jones</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                        <p className="text-slate-300 italic text-sm mb-2">"Co-operative Federalism"</p>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">— Granville Austin</p>
                    </div>
                </div>

                <div className="text-center">
                    <div className="inline-block bg-green-900/40 border border-green-700 rounded-lg px-6 py-3 mb-6">
                        <h4 className="font-bold text-green-400 text-sm">S.R. Bommai Case (1994)</h4>
                        <p className="text-green-200 text-xs">SC ruled "Federalism is part of Basic Structure". <span className="text-white font-bold">[PYQ]</span></p>
                    </div>

                    <div className="flex justify-center">
                        <Button
                            onClick={onComplete}
                            disabled={isCompleted}
                            className={`
                    relative px-10 py-6 text-lg font-bold rounded-lg shadow-lg transition-all border
                    ${isCompleted ? 'bg-green-700 hover:bg-green-800 border-green-500 text-white' : 'bg-orange-600 hover:bg-orange-700 border-orange-500 text-white'}
                `}
                        >
                            {isCompleted ?
                                <span className="flex items-center gap-2"><CheckCircle2 /> Balance Verified</span> :
                                <span className="flex items-center gap-2"><Scale /> Weigh the Features</span>
                            }
                        </Button>
                    </div>
                </div>
            </div>
        </ScaleContainer>
    );
}
