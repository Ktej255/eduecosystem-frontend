"use client";

import React, { useRef } from "react";
import {
    Scroll, Crown, Gavel, Ban, Users,
    Briefcase, Building, Key, Globe,
    CheckCircle2, Feather, Map as MapIcon,
    ArrowDown, Scale, Vote, Flag, BookOpen, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface HistoryModuleProps {
    onComplete: () => void;
    isCompleted: boolean;
}

// --- Design System Components ---

const Highlighter = ({ children, color = "bg-yellow-200" }: { children: React.ReactNode, color?: string }) => (
    <span className={`${color} px-1 mx-0.5 inline-block transform -skew-x-2 rounded-sm shadow-sm decoration-clone font-bold text-slate-900 border-b border-black/10`}>
        {children}
    </span>
);

const Stamp = ({ children, type = "default" }: { children: React.ReactNode, type?: "default" | "red" | "royal" }) => {
    let borderColor = "border-slate-800/60 text-slate-800";
    if (type === "red") borderColor = "border-red-800/60 text-red-900";
    if (type === "royal") borderColor = "border-amber-700/60 text-amber-900 bg-amber-50";

    return (
        <div className={`
      border-2 ${borderColor}
      rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest inline-block 
      transform -rotate-6 mix-blend-multiply opacity-90 shadow-sm
    `}
            style={{ borderRadius: "55% 45% 60% 40% / 40% 60% 50% 50%" }}>
            {children}
        </div>
    );
};

const PaperCard = ({ children, className = "", rotate = 0 }: { children: React.ReactNode, className?: string, rotate?: number }) => (
    <div
        className={`bg-[#fdfbf7] shadow-lg border border-gray-200 relative p-5 md:p-6 ${className} transition-transform hover:scale-[1.01] duration-300`}
        style={{
            transform: `rotate(${rotate}deg)`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`
        }}
    >
        {children}
    </div>
);

const Bullet = () => (
    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-800 mr-2 mt-1.5 flex-shrink-0"></span>
);

const TimelineNode = ({ side, children }: { side: "left" | "right", children: React.ReactNode }) => (
    <div className={`relative mb-8 w-full md:w-[48%] ${side === "left" ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}`}>
        {/* Connector Line */}
        <div className={`hidden md:block absolute top-8 ${side === "left" ? "-right-8 w-8" : "-left-8 w-8"} border-t-2 border-dashed border-gray-300`}></div>
        {children}
    </div>
);

const doodleStyle = "absolute text-slate-300 opacity-40 pointer-events-none transform";

export default function HistoryModule({ onComplete, isCompleted }: HistoryModuleProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={scrollRef} className="w-full bg-[#f3f4f6] dark:bg-[#0a0a0a] min-h-screen py-8 px-2 md:px-4 font-[family-name:var(--font-kalam)]">

            {/* Header */}
            <div className="max-w-3xl mx-auto mb-10 text-center relative z-10">
                <div className="inline-block relative">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight relative z-10">
                        Historical Background
                    </h1>
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300/50 -rotate-1 skew-x-12 -z-0"></div>
                </div>
                <p className="text-slate-600 mt-2 font-bold text-lg">The Evolution of the Constitution</p>

                {/* Context Sticky Note */}
                <div className="mt-6 mx-auto bg-yellow-200 p-3 shadow-md transform rotate-1 max-w-xs text-left text-xs text-slate-800 font-medium border-t-4 border-yellow-300/50">
                    <p className="mb-1"><strong>1600:</strong> EIC comes as Traders (Queen Elizabeth I Charter).</p>
                    <p className="mb-1"><strong>1765:</strong> Diwani Rights → Territorial Power starts.</p>
                </div>
            </div>

            {/* Main Timeline Container - Tight Width */}
            <div className="max-w-3xl mx-auto relative pl-6 md:pl-0 pb-20">

                {/* Central Spine */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-gray-400 transform -translate-x-1/2 z-0"></div>

                {/* --- COMPANY RULE (1773-1858) --- */}
                <div className="mb-8 text-center relative z-10">
                    <span className="bg-slate-800 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded shadow-md">Company Rule (1773-1858)</span>
                </div>

                <div className="flex flex-col relative z-10">
                    {/* 1773 Regulating Act */}
                    <TimelineNode side="left">
                        <PaperCard rotate={-1}>
                            <div className="absolute -top-3 -right-3 transform rotate-6"><Stamp>Landmark</Stamp></div>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Regulating Act, 1773</h3>
                            <ul className="text-sm text-slate-800 space-y-1">
                                <li className="flex"><Bullet /><span>Gov Bengal → <Highlighter>Gov-Gen Bengal</Highlighter> (Hastings)</span></li>
                                <li className="flex"><Bullet /><span>Exec Council (<span className="text-red-700 font-bold">4 Members</span>)</span></li>
                                <li className="flex"><Bullet /><span><span className="font-bold">Centralization:</span> Bombay/Madras subordinate</span></li>
                                <li className="flex"><Bullet /><span>SC Est (1774): 1 CJ + 3 Judges</span></li>
                            </ul>
                        </PaperCard>
                        <div className={`hidden md:block ${doodleStyle} top-10 -left-12 rotate-12`}><Gavel size={32} /></div>
                    </TimelineNode>

                    {/* 1781 Amending Act (Right) */}
                    <TimelineNode side="right">
                        <PaperCard rotate={1} className="bg-[#f0f9ff] border-blue-200">
                            <h4 className="font-bold text-blue-900 mb-1">Amending Act of 1781</h4>
                            <p className="text-xs text-slate-500 mb-2 italic">"Act of Settlement"</p>
                            <ul className="text-xs text-slate-800 space-y-1">
                                <li>• <span className="font-bold">Exempted:</span> GG & Council from SC.</li>
                                <li>• <span className="font-bold">Excluded:</span> Revenue matters.</li>
                                <li>• Personal Law applied (Hindu/Muslim).</li>
                            </ul>
                        </PaperCard>
                    </TimelineNode>

                    {/* 1784 Pitt's India Act (Left) */}
                    <TimelineNode side="left">
                        <PaperCard rotate={-1}>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Pitt's India Act 1784</h3>
                            <div className="grid grid-cols-2 gap-2 text-center text-xs mb-2">
                                <div className="bg-amber-50 rounded p-1 border border-amber-100">
                                    <Briefcase size={12} className="mx-auto text-amber-700 mb-1" />
                                    <span className="font-bold text-amber-900">Commercial</span><br />(Court of Directions)
                                </div>
                                <div className="bg-blue-50 rounded p-1 border border-blue-100">
                                    <Crown size={12} className="mx-auto text-blue-700 mb-1" />
                                    <span className="font-bold text-blue-900">Political</span><br />(Board of Control)
                                </div>
                            </div>
                            <p className="text-xs font-bold text-center bg-slate-100 p-1 rounded">British Govt → Supreme Control</p>
                        </PaperCard>
                    </TimelineNode>

                    {/* 1793 & 1813 (Right - Stacked Compact) */}
                    <TimelineNode side="right">
                        <div className="space-y-4">
                            {/* 1793 */}
                            <PaperCard rotate={1} className="py-3">
                                <h4 className="font-bold text-slate-800 text-sm mb-1">Charter Act 1793</h4>
                                <p className="text-xs text-slate-700">• Monopoly: +20 Years</p>
                                <p className="text-xs text-slate-700">• Payment: B.O.C paid from <span className="text-green-700 font-bold">Indian Revenues</span></p>
                            </PaperCard>
                            {/* 1813 */}
                            <PaperCard rotate={-1} className="py-3 bg-red-50 border-red-100">
                                <h4 className="font-bold text-red-900 text-sm mb-1">Charter Act 1813</h4>
                                <p className="text-xs text-slate-800 underline decoration-red-300">Monopoly ENDED (Except Tea/China)</p>
                                <p className="text-xs text-slate-600 mt-1">• Western Ed (1 Lakh)</p>
                                <p className="text-xs text-slate-600">• Missionaries Allowed</p>
                            </PaperCard>
                        </div>
                        <div className={`hidden md:block ${doodleStyle} bottom-0 -right-10 -rotate-12`}><BookOpen size={28} /></div>
                    </TimelineNode>

                    {/* 1833 (Left) */}
                    <TimelineNode side="left">
                        <PaperCard rotate={1}>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Charter Act 1833</h3>
                            <Stamp>Turning Point</Stamp>
                            <div className="mt-2 space-y-1 text-sm text-slate-800">
                                <p>GG Bengal → <Highlighter>GG of INDIA</Highlighter></p>
                                <p className="text-xs text-slate-500 italic">(Lord William Bentinck)</p>
                                <div className="border-t border-dashed border-slate-300 pt-1 mt-1">
                                    <p>• EIC = Purely Admin Body</p>
                                    <p>• Open Civil Services? <span className="text-red-500 font-bold">Failed</span></p>
                                </div>
                            </div>
                        </PaperCard>
                    </TimelineNode>

                    {/* 1853 (Right) */}
                    <TimelineNode side="right">
                        <PaperCard rotate={-1}>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Charter Act 1853</h3>
                            <p className="text-xs text-slate-500 font-mono mb-2">The Last Charter</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div>
                                    <p className="font-bold">Civil Services ✅</p>
                                    <p className="text-slate-500">(Macaulay Committee)</p>
                                </div>
                                <div>
                                    <p className="font-bold">Mini-Parliament 🏛️</p>
                                    <p className="text-slate-500">Leg/Exec Separated</p>
                                </div>
                            </div>
                        </PaperCard>
                    </TimelineNode>
                </div>

                {/* --- CROWN RULE I (1858-1909) --- */}
                <div className="my-12 text-center relative z-10">
                    <span className="bg-amber-100 text-amber-900 border border-amber-200 px-4 py-1 text-sm font-bold uppercase tracking-widest rounded-full shadow-md flex items-center justify-center gap-2 inline-flex">
                        <Crown size={14} /> The Crown Rule (1858-1909)
                    </span>
                </div>

                <div className="flex flex-col relative z-10">
                    {/* 1858 Govt of India Act */}
                    <TimelineNode side="left">
                        <PaperCard rotate={1} className="bg-amber-50/50 border-amber-200">
                            <div className="absolute -top-3 -right-3"><Stamp type="royal">Good Govt</Stamp></div>
                            <h3 className="text-xl font-bold text-amber-900 mb-2">Govt of India Act, 1858</h3>
                            <ul className="text-sm text-slate-800 space-y-2">
                                <li className="flex gap-2 items-start"><Crown size={16} className="text-amber-700 mt-0.5" /> <span>Company Rule ENDED → Power to Crown</span></li>
                                <li className="flex gap-2 items-start"><Users size={16} className="text-amber-700 mt-0.5" /> <span>GG of India → <span className="font-bold">Viceroy</span> (Lord Canning)</span></li>
                                <li className="flex gap-2 items-start"><Briefcase size={16} className="text-amber-700 mt-0.5" /> <span>New Office: <span className="font-bold">Secretary of State</span><br /><span className="text-xs text-slate-600">(Assisted by 15-member Council)</span></span></li>
                            </ul>
                        </PaperCard>
                    </TimelineNode>

                    {/* 1861 & 1892 Councils Acts (Right) */}
                    <TimelineNode side="right">
                        <div className="space-y-4">
                            {/* 1861 */}
                            <PaperCard rotate={-1} className="py-3">
                                <h4 className="font-bold text-blue-900 text-sm mb-1">Indian Councils Act 1861</h4>
                                <p className="text-xs text-slate-700 font-bold mb-1">Decentralization Begins</p>
                                <ul className="text-xs text-slate-600 list-disc list-inside">
                                    <li>Legislative powers restored to Bombay/Madras.</li>
                                    <li>Portfolio System recognized.</li>
                                    <li>Viceroy nominated 3 Indians (Non-official).</li>
                                </ul>
                            </PaperCard>
                            {/* 1892 */}
                            <PaperCard rotate={1} className="py-3">
                                <h4 className="font-bold text-blue-900 text-sm mb-1">Indian Councils Act 1892</h4>
                                <ul className="text-xs text-slate-600 list-disc list-inside">
                                    <li>Indirect Election (Nomination).</li>
                                    <li>Can Discuss Budget & Ask Questions.</li>
                                </ul>
                            </PaperCard>
                        </div>
                    </TimelineNode>

                    {/* 1909 Morley Minto (Left - CRITICAL) */}
                    <TimelineNode side="left">
                        <PaperCard rotate={-2} className="border-red-200 bg-red-50/20">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold text-red-900 mb-2">Act of 1909 (Morley-Minto)</h3>
                                <Stamp type="red">Communal</Stamp>
                            </div>
                            <div className="space-y-2 text-sm text-slate-800">
                                <p>• Leg Council Size: 16 → 60</p>
                                <p className="bg-red-100 p-1 rounded border border-red-200 text-red-900 text-xs">
                                    ☠️ <span className="font-bold">Separate Electorate</span> for Muslims<br />
                                    (Lord Minto = Father of Communal Electorate)
                                </p>
                                <p>• <span className="font-bold">Satyendra Prasad Sinha:</span> First Indian in Viceroy's Exec Council (Law Member).</p>
                            </div>
                        </PaperCard>
                    </TimelineNode>
                </div>


                {/* --- CROWN RULE II (1919-1947) --- */}
                <div className="my-12 text-center relative z-10">
                    <span className="bg-green-100 text-green-900 border border-green-200 px-4 py-1 text-sm font-bold uppercase tracking-widest rounded-full shadow-md inline-flex items-center gap-2">
                        <Flag size={14} /> Towards Independence (1919-1947)
                    </span>
                </div>

                <div className="flex flex-col relative z-10">
                    {/* 1919 Montagu Chelmsford (Right) */}
                    <TimelineNode side="right">
                        <PaperCard rotate={1}>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Govt of India Act, 1919</h3>
                            <p className="text-xs text-slate-500 mb-2 italic">Montagu-Chelmsford Reforms</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-slate-100 p-2 rounded">
                                    <span className="font-bold block mb-1">Dyarchy (Provinces)</span>
                                    Transferred vs Reserved Subjects.
                                </div>
                                <div className="bg-slate-100 p-2 rounded">
                                    <span className="font-bold block mb-1">Bicameralism</span>
                                    Upper + Lower House at Centre.
                                </div>
                            </div>
                            <p className="text-xs mt-2">• Direct Elections introduced.</p>
                            <p className="text-xs">• Communal Electorate extended (Sikhs etc).</p>
                        </PaperCard>
                    </TimelineNode>

                    {/* 1935 The Blueprint (Left - MEGA NODE) */}
                    <TimelineNode side="left">
                        <PaperCard rotate={0} className="border-4 border-double border-slate-200">
                            <div className="absolute -top-3 -left-3 transform -rotate-12"><Stamp>Blueprint</Stamp></div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Govt of India Act, 1935</h3>
                            <p className="text-xs text-slate-500 mb-3">Lengthy: 321 Sections, 10 Schedules.</p>

                            <div className="space-y-3 text-sm text-slate-800">
                                <div className="flex gap-2">
                                    <MapIcon size={16} className="text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-bold">All-India Federation</p>
                                        <p className="text-xs text-slate-500">Proposed (Never happened due to Princely States).</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Scale size={16} className="text-purple-600 mt-1" />
                                    <div>
                                        <p className="font-bold">3 Lists (Fed, Prov, Concurrent)</p>
                                        <p className="text-xs text-slate-500">Residuary Power → Viceroy.</p>
                                    </div>
                                </div>
                                <div className="bg-green-50 p-2 rounded border border-green-100">
                                    <span className="font-bold text-green-900 block">Provincial Autonomy</span>
                                    Dyarchy Abolished in Provinces → Adopted at Centre.
                                </div>
                            </div>
                        </PaperCard>
                    </TimelineNode>

                    {/* 1947 Independence (Center) */}
                    <div className="relative mb-20 md:w-2/3 mx-auto text-center">
                        <PaperCard rotate={0} className="border-t-4 border-orange-500 bg-gradient-to-b from-orange-50 via-white to-green-50">
                            <Flag className="w-8 h-8 mx-auto text-blue-900 mb-2" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">Indian Independence Act, 1947</h3>
                            <p className="text-sm font-bold text-blue-900 mb-4">August 15, 1947</p>

                            <div className="grid grid-cols-2 gap-4 text-left text-sm">
                                <div>
                                    <p className="font-bold text-slate-800">Partition</p>
                                    <p className="text-xs text-slate-600">India & Pakistan (Two Dominions).</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">Sovereignty</p>
                                    <p className="text-xs text-slate-600">British Rule Ended.</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-1">
                                <p>• Governor General = Nominal Head.</p>
                                <p>• "Emperor of India" title dropped.</p>
                                <p className="font-bold text-slate-800">First GG (Free India): Lord Mountbatten</p>
                                <p className="font-bold text-slate-800">First Indian GG: C. Rajagopalachari</p>
                            </div>
                        </PaperCard>
                    </div>
                </div>

                {/* --- FOOTER: QUICK REVISION MATRIX --- */}
                <div className="mt-12 mb-20">
                    <div className="bg-[#f0e6d2] p-6 shadow-xl transform rotate-1 border-2 border-[#dabba9] relative max-w-2xl mx-auto">
                        {/* Pin */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-800 shadow-sm border border-black/20"></div>

                        <h3 className="text-center font-bold text-amber-900 uppercase tracking-widest mb-4 border-b-2 border-amber-900/10 pb-2">Evolution Matrix</h3>

                        <div className="overflow-x-auto">
                            <table className="w-full text-xs text-left">
                                <thead>
                                    <tr className="text-amber-900 border-b border-amber-900/20">
                                        <th className="pb-2 font-bold">Feature</th>
                                        <th className="pb-2">1773</th>
                                        <th className="pb-2">1833</th>
                                        <th className="pb-2">1858</th>
                                        <th className="pb-2">1935</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-800 font-medium">
                                    <tr className="border-b border-amber-900/10">
                                        <td className="py-2 font-bold text-amber-900">Head</td>
                                        <td className="py-2">GG Bengal</td>
                                        <td className="py-2">GG India</td>
                                        <td className="py-2">Viceroy</td>
                                        <td className="py-2">Viceroy</td>
                                    </tr>
                                    <tr className="border-b border-amber-900/10">
                                        <td className="py-2 font-bold text-amber-900">Trend</td>
                                        <td className="py-2">Centralizing</td>
                                        <td className="py-2 font-bold">Peak Center</td>
                                        <td className="py-2">Good Govt</td>
                                        <td className="py-2">Federation</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-bold text-amber-900">Control</td>
                                        <td className="py-2">Directors</td>
                                        <td className="py-2">EIC (Admin)</td>
                                        <td className="py-2">Sec of State</td>
                                        <td className="py-2">Autonomy</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-center text-[10px] text-amber-900/60 mt-4 italic font-serif">Handwritten with ❤️ for Aspirants</p>
                    </div>
                </div>

                {/* Completion Button */}
                <div className="flex justify-center pb-20">
                    <Button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
                          relative px-8 py-6 text-lg font-bold rounded-full shadow-2xl transform transition-all hover:scale-105 active:scale-95
                          ${isCompleted ? 'bg-green-600 hover:bg-green-700 text-white ring-4 ring-green-200' : 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white ring-4 ring-blue-200'}
                        `}
                    >
                        {isCompleted ? <span className="flex items-center gap-2"><CheckCircle2 /> Chapter Completed</span> : <span className="flex items-center gap-2"><Feather /> Mark as Revise-Ready</span>}
                    </Button>
                </div>

            </div>
        </div>
    );
}
