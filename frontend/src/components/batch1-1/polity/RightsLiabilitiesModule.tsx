"use client";

import React from "react";
import {
    Scale, Crown, Briefcase, Gavel,
    Shield, FileText, Scroll, Landmark,
    ShoppingCart, PenTool, AlertTriangle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface RightsLiabilitiesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f3f4f6] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-amber-100">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-white/50 rounded-3xl p-6 shadow-inner border-2 border-slate-200">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, icon: Icon, color }: { title: string, icon: any, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`p-3 rounded-full ${color} text-white shadow-lg`}>
            <Icon size={24} />
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight text-slate-800`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 bg-slate-800 opacity-20`}></div>
    </div>
);

const HandwrittenCard = ({ title, children, color = "border-slate-800", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-white border-2 ${color} rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 text-slate-900`}>
            {title}
        </h3>
        <div className="space-y-4 text-slate-700 relative z-10 font-medium">
            {children}
        </div>
    </div>
);

export default function RightsLiabilitiesModule({ onComplete, isCompleted, chapterNumber = "76" }: RightsLiabilitiesModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO */}
            <div className="relative bg-[#171717] border-4 border-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-3 mb-4">
                            <Badge className="bg-[#ca8a04] text-slate-900 px-4 py-1 text-lg font-bold">Chapter {chapterNumber}</Badge>
                            <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">Part XI: Working of the Constitution</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                            Rights & Liabilities <br />
                            <span className="text-[#ca8a04]">The Legal Crown</span>
                        </h1>
                        <p className="text-xl text-slate-300 italic max-w-2xl">
                            "The Sovereign vs The Citizen. Can the King be sued?"
                        </p>
                    </div>
                    <div className="absolute top-4 right-4 opacity-10">
                        <Crown size={180} />
                    </div>
                </div>
            </div>

            {/* PHASE 1: PROPERTY & SUCCESSION */}
            <SectionHeader title="Phase 1: Property & Inheritance" icon={Landmark} color="bg-[#ca8a04]" />

            <div className="grid md:grid-cols-2 gap-8">
                <HandwrittenCard title="Succession (Art 294-295)" color="border-[#ca8a04]">
                    <div className="flex items-center gap-4 mb-4">
                        <Crown className="text-slate-400" size={32} />
                        <span className="text-2xl font-bold">→</span>
                        <div className="w-10 h-10 rounded-full bg-[#ca8a04] flex items-center justify-center text-white font-bold">
                            <Landmark size={20} />
                        </div>
                    </div>
                    <p className="text-sm font-bold">
                        All property, assets, rights, and liabilities users of the <span className="text-[#ca8a04]">Dominion of India (British)</span> devolved to the Union or the States.
                    </p>
                    <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                        <h4 className="font-black text-slate-800 text-sm mb-2">High Yield Concepts:</h4>
                        <ul className="text-xs space-y-2">
                            <li className="flex gap-2 items-start">
                                <span className="bg-[#ca8a04] text-white px-1 rounded text-[10px]">Art 296</span>
                                <span><strong>Escheat:</strong> Property with no rightful owner vests in the State.</span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="bg-[#ca8a04] text-white px-1 rounded text-[10px]">Art 297</span>
                                <span><strong>Sea Wealth:</strong> All value in territorial waters vests in the Union.</span>
                            </li>
                        </ul>
                    </div>
                </HandwrittenCard>

                <HandwrittenCard title="Acquisition power (Art 298)" color="border-[#1e40af]">
                    <div className="absolute top-2 right-2 opacity-10">
                        <ShoppingCart size={64} />
                    </div>
                    <p className="mb-4 text-sm font-bold">Executive power extends to:</p>
                    <ul className="space-y-3">
                        {['Carrying on trade/business', 'Acquisition & Disposal of Property', 'Making Contracts'].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm bg-blue-50 p-2 rounded border border-blue-100">
                                <span className="w-2 h-2 bg-[#1e40af] rounded-full" />
                                <span className="text-[#1e40af] font-bold">{item}</span>
                            </li>
                        ))}
                    </ul>
                </HandwrittenCard>
            </div>

            {/* PHASE 2: CONTRACTS */}
            <SectionHeader title="Phase 2: Contracts (Art 299)" icon={PenTool} color="bg-[#1e40af]" />

            <div className="bg-white border-2 border-[#1e40af] rounded-2xl p-8 relative shadow-lg">
                <div className="absolute -top-4 left-8 bg-[#1e40af] text-white px-4 py-1 rounded shadow text-sm font-bold">CRITICAL ART 299</div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="bg-blue-100 p-2 rounded-full text-[#1e40af] font-bold">1</div>
                            <p className="font-bold">Expressed to be made by <span className="text-[#1e40af]">President/Governor</span>.</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-blue-100 p-2 rounded-full text-[#1e40af] font-bold">2</div>
                            <p className="font-bold">Executed on <span className="text-[#1e40af]">behalf</span> of President/Governor.</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-blue-100 p-2 rounded-full text-[#1e40af] font-bold">3</div>
                            <p className="font-bold">Executed by <span className="text-[#1e40af]">authorized person</span>.</p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
                        <Shield size={48} className="mx-auto text-slate-400 mb-2" />
                        <h4 className="font-black text-lg text-slate-800">Personal Immunity</h4>
                        <p className="text-xs text-slate-500 font-bold italic mt-2">
                            Neither President nor Governor is personally liable.
                        </p>
                        <div className="mt-4 bg-red-50 text-red-700 text-xs p-2 rounded font-bold border border-red-200">
                            Failure = Void Contract
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 3: SUITS & LIABILITY */}
            <SectionHeader title="Phase 3: Suits & Liability (Art 300)" icon={Gavel} color="bg-[#b91c1c]" />

            <div className="grid md:grid-cols-2 gap-8">
                <HandwrittenCard title="Can you sue the Govt?" color="border-[#b91c1c]">
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                            <span className="text-xs font-bold uppercase text-slate-400">Legal Name</span>
                            <p className="font-bold text-slate-800">Union of India / State of XYZ</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-green-50 p-2 rounded border border-green-200">
                                <h5 className="font-bold text-green-800 text-xs">Modern Trend</h5>
                                <p className="text-[10px] leading-tight mt-1 text-green-700">Expanding Liability (Rudul Sah Case - Compensation).</p>
                            </div>
                            <div className="bg-red-50 p-2 rounded border border-red-200">
                                <h5 className="font-bold text-red-800 text-xs">Act of State</h5>
                                <p className="text-[10px] leading-tight mt-1 text-red-700">Defense NOT available against Citizens.</p>
                            </div>
                        </div>
                    </div>
                </HandwrittenCard>

                <div className="bg-[#fff1f2] border-2 border-dashed border-[#b91c1c] rounded-2xl p-6 relative">
                    <h3 className="text-xl font-black text-[#b91c1c] mb-4 flex items-center gap-2">
                        <Scale size={24} /> Vicarious Liability
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm">
                            <span className="font-bold text-sm">Sovereign Functions</span>
                            <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-1 rounded">NO Liability</span>
                        </div>
                        <p className="text-xs text-right text-slate-500 italic pr-2">e.g. Defense, War (Kasturi Lal)</p>

                        <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm">
                            <span className="font-bold text-sm">Non-Sovereign</span>
                            <span className="text-xs font-bold bg-red-100 text-red-800 px-2 py-1 rounded">GOVT IS LIABLE</span>
                        </div>
                        <p className="text-xs text-right text-slate-500 italic pr-2">e.g. Transport, Trade (Vidhyawati)</p>
                    </div>
                </div>
            </div>

            {/* COMPLETION */}
            <div className="mt-16 text-center">
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`px-12 py-6 rounded-full text-xl font-black font-['Kalam'] transition-all transform hover:scale-105 ${isCompleted ? 'bg-green-600 text-white' : 'bg-[#171717] text-white hover:bg-slate-800'
                        }`}
                >
                    {isCompleted ? "Brief Filed!" : "Sign the Contract"}
                </Button>
            </div>
        </ScrapbookContainer>
    );
}
