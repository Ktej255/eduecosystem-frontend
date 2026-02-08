"use client";

import React, { useState } from "react";
import {
    Map, Scroll, Gavel, Scale, Flag,
    Globe, BookOpen, AlertTriangle, Wallet,
    Users, Shield, Landmark, Anchor,
    ArrowDown, CheckCircle2, BadgeCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SalientFeaturesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

// --- Design System: The Constitution Pinboard ---

const PinboardGrid = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f0f2f5] min-h-screen p-4 md:p-8 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {children}
        </div>
    </div>
);

const Pin = () => (
    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-red-800 shadow-sm border border-red-900 z-20">
        <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-40"></div>
    </div>
);

const PYQStamp = () => (
    <div className="absolute -top-2 -right-2 rotate-12 border-2 border-red-600 text-red-600 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest bg-white/90 shadow-sm z-10 rounded-sm">
        PYQ Ask
    </div>
);

const HandIcon = ({ icon: Icon, color = "text-slate-700" }: { icon: any, color?: string }) => (
    <div className={`relative inline-flex items-center justify-center w-10 h-10 ${color}`}>
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-20 transform rotate-odd">
            <path d="M50 5 C 20 5, 5 20, 5 50 C 5 80, 20 95, 50 95 C 80 95, 95 80, 95 50 C 95 20, 80 5, 50 5 Z" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
        <Icon size={20} />
    </div>
);

const PinCard = ({ children, className = "", title, icon, isWide = false, hasPYQ = false }: { children: React.ReactNode, className?: string, title?: string, icon?: any, isWide?: boolean, hasPYQ?: boolean }) => (
    <div className={`relative bg-white rounded-lg shadow-sm border border-slate-200 p-5 pt-8 ${isWide ? 'md:col-span-2 lg:col-span-2' : ''} ${className} hover:shadow-md transition-shadow`}>
        <Pin />
        {hasPYQ && <PYQStamp />}
        {title && (
            <div className="flex items-center gap-3 mb-4 pb-2 border-b border-slate-100">
                {icon && <HandIcon icon={icon} />}
                <h3 className="font-bold text-lg text-slate-800">{title}</h3>
            </div>
        )}
        {children}
    </div>
);

const FactItem = ({ children, pyq = false }: { children: React.ReactNode, pyq?: boolean }) => (
    <li className={`relative pl-4 mb-2 text-sm text-slate-700 leading-relaxed ${pyq ? 'font-medium' : ''}`}>
        <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
        {children}
        {pyq && <span className="ml-2 text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold border border-red-200">PYQ</span>}
    </li>
);


export default function SalientFeaturesModule({ onComplete, isCompleted, chapterNumber = "4" }: SalientFeaturesModuleProps) {
    return (
        <div className="bg-[#e2e8f0] min-h-screen">
            <div className="bg-slate-900 text-white p-6 md:p-12 text-center relative overflow-hidden">
                <div className="relative z-10 max-w-2xl mx-auto">
                    <span className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-700 mb-4 inline-block">Chapter {chapterNumber}</span>
                    <h1 className="text-3xl md:text-5xl font-bold mb-2 font-serif">Salient Features</h1>
                    <p className="text-slate-400 text-sm md:text-lg italic">The Constitution Pinboard</p>
                </div>
            </div>

            <PinboardGrid>

                {/* --- PHASE 1: STRUCTURE & SOURCES --- */}

                {/* Card 1: Elephantine Size */}
                <PinCard title="Elephantine Size" icon={Scale}>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                            <div className="bg-slate-50 p-2 rounded">
                                <span className="block font-bold mt-1">Geography</span>
                                Vastness & Diversity <Map size={12} className="inline ml-1 opacity-50" />
                            </div>
                            <div className="bg-slate-50 p-2 rounded">
                                <span className="block font-bold mt-1">History</span>
                                GoI Act 1935 Legacy <Scroll size={12} className="inline ml-1 opacity-50" />
                            </div>
                        </div>
                        <ul className="space-y-1">
                            <FactItem>Single Constitution (Centre + States)</FactItem>
                            <FactItem>"Paradise of Lawyers" (Sir Ivor Jennings)</FactItem>
                        </ul>
                        <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-500 font-mono">
                            Status: Preamble + 470+ Arts + 12 Schedules
                        </div>
                    </div>
                </PinCard>

                {/* Card 2: The Borrowed Bag (Mega Card) */}
                <PinCard title="The Borrowed Bag" icon={Globe} isWide hasPYQ>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <tbody className="divide-y divide-slate-100">
                                <tr className="group hover:bg-slate-50">
                                    <td className="py-2 font-bold text-slate-800 w-1/4">GoI Act 1935</td>
                                    <td className="py-2 text-slate-600">Federal Scheme, Governor, Judiciary, Public Service Comm, Emergency.</td>
                                    <td className="py-2 text-right"><span className="text-[10px] text-red-600 bg-red-50 px-1 font-bold">PYQ</span></td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <td className="py-2 font-bold text-slate-800">British (UK)</td>
                                    <td className="py-2 text-slate-600">Parliamentary Govt, Rule of Law, Single Citizenship, Cabinet, Writs.</td>
                                    <td className="py-2 text-right"><span className="text-[10px] text-red-600 bg-red-50 px-1 font-bold">PYQ</span></td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <td className="py-2 font-bold text-slate-800">USA</td>
                                    <td className="py-2 text-slate-600">Fundamental Rights, Judicial Independence, Judicial Review, Impeachment.</td>
                                    <td className="py-2 text-right"><span className="text-[10px] text-red-600 bg-red-50 px-1 font-bold">PYQ</span></td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <td className="py-2 font-bold text-slate-800">Ireland</td>
                                    <td className="py-2 text-slate-600">DPSPs, RS Nomination, Prez Election Method.</td>
                                    <td className="py-2 text-right"><span className="text-[10px] text-red-600 bg-red-50 px-1 font-bold">PYQ</span></td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <td className="py-2 font-bold text-slate-800">Canada</td>
                                    <td className="py-2 text-slate-600">Strong Centre, Residuary Powers, SC Advisory Jurisdiction.</td>
                                    <td className="py-2 text-right"><span className="text-[10px] text-red-600 bg-red-50 px-1 font-bold">PYQ</span></td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <td className="py-2 font-bold text-slate-800">Australia</td>
                                    <td className="py-2 text-slate-600">Concurrent List, Joint Sitting, Trade Freedom.</td>
                                    <td className="py-2 text-right"><span className="text-[10px] text-red-600 bg-red-50 px-1 font-bold">PYQ</span></td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <td className="py-2 font-bold text-slate-800">South Africa</td>
                                    <td className="py-2 text-slate-600">Amendment Procedure, RS Member Election.</td>
                                    <td className="py-2 text-right"><span className="text-[10px] text-red-600 bg-red-50 px-1 font-bold">PYQ</span></td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <td className="py-2 font-bold text-slate-800">USSR/France</td>
                                    <td className="py-2 text-slate-600">Duties, Justice (USSR) | Republic, Liberty, Equality (France).</td>
                                    <td className="py-2 text-right opacity-50">--</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Sticky Mnemonic */}
                    <div className="absolute -bottom-3 -right-3 bg-yellow-200 text-yellow-900 p-2 shadow-md rotate-[-2deg] text-xs font-handwriting">
                        "Canada = Centre. Ireland = Directive. British = Parliament."
                    </div>
                </PinCard>

                {/* --- PHASE 2: SYSTEM & SYNTHESIS --- */}

                {/* Card 3: Rigidity vs Flexibility */}
                <PinCard title="Rigidity vs Flexibility" icon={Scale}>
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-center w-1/3">
                            <div className="text-xs font-bold uppercase text-slate-500">USA</div>
                            <div className="font-bold text-red-600">Rigid</div>
                        </div>
                        <div className="text-2xl text-slate-300">⚔️</div>
                        <div className="text-center w-1/3">
                            <div className="text-xs font-bold uppercase text-slate-500">UK</div>
                            <div className="font-bold text-green-600">Flexible</div>
                        </div>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded text-center text-sm font-medium text-indigo-800">
                        Article 368: The Indian Synthesis (Special + Simple Majority mix)
                    </div>
                </PinCard>

                {/* Card 4: Federal System (PYQ) */}
                <PinCard title="Federal with Unitary Bias" icon={Landmark} hasPYQ>
                    <ul className="space-y-2 mb-4">
                        <FactItem><strong>Federal:</strong> 2 Govts, Division of Powers, Written Const, Independent Judiciary.</FactItem>
                        <FactItem><strong>Unitary:</strong> Strong Centre, Single Const, Governor, Emergency.</FactItem>
                    </ul>
                    <div className="bg-slate-100 p-2 rounded text-xs space-y-1">
                        <div className="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1">Direct PYQ Quotes:</div>
                        <div className="flex justify-between"><span>K.C. Wheare</span> <span className="font-bold">"Quasi-Federal"</span></div>
                        <div className="flex justify-between"><span>Morris Jones</span> <span className="opacity-80">"Bargaining Federalism"</span></div>
                        <div className="flex justify-between"><span>Granville Austin</span> <span className="opacity-80">"Co-operative Federalism"</span></div>
                    </div>
                </PinCard>

                {/* Card 5: Parliamentary Form */}
                <PinCard title="Westminster Model" icon={Landmark}>
                    <ul className="space-y-2">
                        <FactItem>Real (PM) & Nominal (Prez) Executives.</FactItem>
                        <FactItem pyq><strong>Collective Responsibility</strong> of Executive to Legislature.</FactItem>
                        <FactItem>Leadership of PM/CM.</FactItem>
                        <FactItem>Dissolution of Lower House.</FactItem>
                    </ul>
                </PinCard>

                {/* Card 6: Sovereignty Synthesis */}
                <PinCard title="Synthesis of Supremacy" icon={Scale}>
                    <div className="space-y-3">
                        <div className="p-2 border border-blue-100 rounded bg-blue-50/50">
                            <div className="text-xs font-bold text-blue-800 uppercase">Judicial Review (Art 13)</div>
                            <div className="text-sm">SC can declare laws void. (like USA)</div>
                        </div>
                        <div className="p-2 border border-purple-100 rounded bg-purple-50/50">
                            <div className="text-xs font-bold text-purple-800 uppercase">Constituent Power (Art 368)</div>
                            <div className="text-sm">Parliament can amend major parts. (like UK)</div>
                        </div>
                    </div>
                </PinCard>

                {/* --- PHASE 3: RIGHTS & VALUES --- */}

                {/* Card 7: Judiciary */}
                <PinCard title="Integrated Judiciary" icon={Gavel} hasPYQ>
                    <div className="flex flex-col items-center mb-4 text-xs font-bold text-slate-600">
                        <div className="bg-white border-2 border-slate-800 rounded px-4 py-1 mb-1 shadow-sm">Supreme Court</div>
                        <ArrowDown size={14} />
                        <div className="bg-white border border-slate-400 rounded px-3 py-1 mb-1 mt-1">High Courts</div>
                        <ArrowDown size={14} />
                        <div className="bg-white border border-slate-200 rounded px-2 py-1 mt-1 opacity-80">District Courts</div>
                    </div>
                    <ul className="list-disc pl-4 text-xs space-y-1 text-slate-700">
                        <li><strong>Integrated:</strong> Enforces Central & State laws.</li>
                        <li><strong>Independent:</strong> Security of tenure, Fixed expenses (Consolidated Fund), Separation (Art 50).</li>
                    </ul>
                </PinCard>

                {/* Card 8: Fundamental Rights */}
                <PinCard title="Fundamental Rights (Part III)" icon={Shield} hasPYQ>
                    <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                        <div className="bg-green-50 text-green-800 px-2 py-1 rounded">Justiciable</div>
                        <div className="bg-orange-50 text-orange-800 px-2 py-1 rounded">Suspension (except 20, 21)</div>
                    </div>
                    <div className="space-y-1 text-sm">
                        <div className="flex justify-between items-center border-b border-dashed pb-1"><span>Equality</span> <span className="font-mono opacity-50">14-18</span></div>
                        <div className="flex justify-between items-center border-b border-dashed pb-1"><span>Freedom</span> <span className="font-mono opacity-50">19-22</span></div>
                        <div className="flex justify-between items-center border-b border-dashed pb-1"><span>Religion</span> <span className="font-mono opacity-50">25-28</span></div>
                        <div className="mt-2 text-xs font-bold text-center text-indigo-700 bg-indigo-50 p-1 rounded">Remedies (Art 32) = Heart & Soul</div>
                    </div>
                </PinCard>

                {/* Card 9: DPSP & Duties */}
                <PinCard title="DPSPs & Duties" icon={BookOpen} hasPYQ>
                    <div className="mb-4">
                        <div className="text-xs font-bold uppercase text-slate-500 mb-1">DPSPs (Part IV)</div>
                        <ul className="text-sm space-y-1">
                            <FactItem>Non-Justiciable.</FactItem>
                            <FactItem pyq>Goal: <strong>Welfare State</strong> (Social/Econ Democracy).</FactItem>
                        </ul>
                    </div>
                    <div className="border-t pt-3">
                        <div className="text-xs font-bold uppercase text-slate-500 mb-1">Fund. Duties (Part IV-A)</div>
                        <ul className="text-sm space-y-1">
                            <FactItem pyq>Added by <strong>42nd AA, 1976</strong> (Swaran Singh).</FactItem>
                            <FactItem>Total: 11 (86th AA 2002 added one).</FactItem>
                        </ul>
                    </div>
                </PinCard>

                {/* Card 10: Secular State */}
                <PinCard title="Secular State" icon={Flag}>
                    <div className="text-center p-3 bg-slate-50 rounded-lg italic text-slate-600 mb-3">
                        "Positive Concept" - All religions protected equally.
                    </div>
                    <ul className="text-sm space-y-1">
                        <FactItem>Added by <strong>42nd AA, 1976</strong>.</FactItem>
                        <FactItem>Articles 25-28 ensure secularism.</FactItem>
                        <FactItem>No State Religion.</FactItem>
                    </ul>
                </PinCard>

                {/* --- PHASE 4: MACHINERY & TIERS --- */}

                {/* Card 11: Universal Adult Franchise */}
                <PinCard title="Adult Franchise" icon={Users} hasPYQ>
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-lg shadow-md mb-2">
                        <div className="text-center">
                            <div className="text-xs opacity-80 uppercase">Old Age</div>
                            <div className="text-xl font-bold line-through opacity-50">21</div>
                        </div>
                        <ArrowDown className="rotate-[-90deg]" />
                        <div className="text-center">
                            <div className="text-xs opacity-80 uppercase">New Age</div>
                            <div className="text-3xl font-black">18</div>
                        </div>
                    </div>
                    <div className="text-center text-xs font-bold text-slate-500">
                        61st Constitutional Amendment Act, 1988
                    </div>
                </PinCard>

                {/* Card 12: Single Citizenship */}
                <PinCard title="Single Citizenship" icon={Globe}>
                    <FactItem>Only Indian Citizenship (No State Citizenship).</FactItem>
                    <FactItem>Unlike USA (Double Citizenship).</FactItem>
                    <FactItem><strong>Purpose:</strong> Promote Fraternity & Unity.</FactItem>
                </PinCard>

                {/* Card 13: Independent Bodies */}
                <PinCard title="Bulwarks of Democracy" icon={Shield} className="md:col-span-2">
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-3 bg-slate-50 rounded border border-slate-100">
                            <div className="font-bold text-slate-800 block mb-1">Election Comm.</div>
                            <div className="text-xs text-slate-500">Free & Fair Elections</div>
                        </div>
                        <div className="p-3 bg-slate-50 rounded border border-slate-100">
                            <div className="font-bold text-slate-800 block mb-1 flex items-center justify-center gap-1">CAG <Wallet size={12} /></div>
                            <div className="text-xs text-slate-500">Guardian of Purse</div>
                        </div>
                        <div className="p-3 bg-slate-50 rounded border border-slate-100">
                            <div className="font-bold text-slate-800 block mb-1">UPSC/SPSC</div>
                            <div className="text-xs text-slate-500">Merit Recruitment</div>
                        </div>
                    </div>
                </PinCard>

                {/* Card 14: Three-Tier Govt */}
                <PinCard title="Three-Tier Govt" icon={Users} hasPYQ>
                    <div className="flex justify-center space-x-1 mb-3">
                        <span className="w-8 h-8 flex items-center justify-center bg-slate-200 rounded-full text-xs font-bold">1</span>
                        <span className="w-8 h-8 flex items-center justify-center bg-slate-200 rounded-full text-xs font-bold">2</span>
                        <span className="w-8 h-8 flex items-center justify-center bg-green-200 text-green-800 rounded-full text-xs font-bold ring-2 ring-green-400">3</span>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="bg-green-50 p-2 rounded border border-green-100">
                            <div className="font-bold text-green-900">73rd AA (1992)</div>
                            <div className="text-xs opacity-80">Panchayats (Part IX, Sch 11)</div>
                        </div>
                        <div className="bg-green-50 p-2 rounded border border-green-100">
                            <div className="font-bold text-green-900">74th AA (1992)</div>
                            <div className="text-xs opacity-80">Municipalities (Part IX-A, Sch 12)</div>
                        </div>
                    </div>
                </PinCard>

                {/* --- PHASE 5: EMERGENCY & SCHEDULES --- */}

                {/* Card 15: Emergency Provisions (Critical) */}
                <PinCard title="Emergency Provisions" icon={AlertTriangle} className="border-l-4 border-l-red-500">
                    <div className="text-xs italic text-slate-500 mb-3">
                        "Constitution turns Unitary without amendment"
                    </div>
                    <table className="w-full text-xs text-left mb-2">
                        <thead>
                            <tr className="bg-slate-100 text-slate-600 uppercase">
                                <th className="p-1">Context</th>
                                <th className="p-1">Art</th>
                                <th className="p-1">Ground</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            <tr>
                                <td className="p-1 font-bold">National</td>
                                <td className="p-1 text-red-600 font-bold">352</td>
                                <td className="p-1">War, Rebellion</td>
                            </tr>
                            <tr>
                                <td className="p-1 font-bold">State</td>
                                <td className="p-1 text-red-600 font-bold">356</td>
                                <td className="p-1">Const Failure</td>
                            </tr>
                            <tr>
                                <td className="p-1 font-bold">Financial</td>
                                <td className="p-1 text-red-600 font-bold">360</td>
                                <td className="p-1">Financial Stability</td>
                            </tr>
                        </tbody>
                    </table>
                </PinCard>

                {/* Card 16: Co-operative Societies */}
                <PinCard title="Co-operative Societies" icon={Users} hasPYQ>
                    <div className="font-bold text-indigo-700 mb-2">97th AA, 2011</div>
                    <ul className="text-sm space-y-1">
                        <FactItem><strong>Right:</strong> Form co-ops (Art 19).</FactItem>
                        <FactItem><strong>DPSP:</strong> Promote co-ops (Art 43-B).</FactItem>
                        <FactItem><strong>Part:</strong> IX-B Added.</FactItem>
                    </ul>
                </PinCard>

                {/* Card 17: Schedules Mnemonic (Wide) */}
                <PinCard title="The 12 Schedules" icon={Scroll} isWide className="bg-[#fffef0]" hasPYQ>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3 flex items-center justify-center">
                            <div className="font-handwriting text-4xl text-slate-800 rotate-[-4deg] text-center leading-tight">
                                "TEARS OF<br /><span className="text-red-600">OLD PM</span>"
                            </div>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs font-mono text-slate-700">
                            <div><span className="font-bold">T</span>erritories (1)</div>
                            <div><span className="font-bold">F</span>ederal Lists (7)</div>

                            <div><span className="font-bold">E</span>moluments (2)</div>
                            <div><span className="font-bold">O</span>fficial Langs (8)</div>

                            <div><span className="font-bold">A</span>ffirmations (3)</div>
                            <div><span className="font-bold">L</span>and Reforms (9)</div>

                            <div><span className="font-bold">R</span>ajya Sabha (4)</div>
                            <div><span className="font-bold">D</span>efection (10)</div>

                            <div><span className="font-bold">S</span>cheduled Areas (5)</div>
                            <div><span className="font-bold">P</span>anchayats (11)</div>

                            <div><span className="font-bold">O</span>ther Areas (6)</div>
                            <div><span className="font-bold">M</span>unicipalities (12)</div>
                        </div>
                    </div>
                </PinCard>

            </PinboardGrid>

            {/* Quality Control Footer */}
            <div className="max-w-7xl mx-auto mt-12 bg-slate-900 rounded-t-lg p-4 flex items-center justify-between text-white">
                <div className="text-sm font-medium opacity-80">
                    Chapter 4 Completed
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="text-red-400 border-red-900 hover:bg-red-900/20 hover:text-red-300">
                        <AlertTriangle size={14} className="mr-2" /> Report Error
                    </Button>
                    <Button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={isCompleted ? "bg-green-600 hover:bg-green-700 text-white" : "bg-white text-slate-900 hover:bg-slate-200"}
                    >
                        {isCompleted ? <span className="flex items-center gap-2"><CheckCircle2 size={16} /> Done</span> : "Mark Complete"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
