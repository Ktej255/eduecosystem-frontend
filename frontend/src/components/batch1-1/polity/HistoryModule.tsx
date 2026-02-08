"use client";

import React, { useRef } from "react";
import {
    Scroll, Crown, Gavel, Ban, Users,
    Briefcase, Building, Key, Globe,
    CheckCircle2, Feather, Map as MapIcon,
    ArrowDown, Scale, Vote, Flag, BookOpen, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ChapterLevelGame from "./revision/ChapterLevelGame";

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
                                <li className="flex"><Bullet /><span>Gov Bengal → <Highlighter>Gov-Gen Bengal</Highlighter> (Warren Hastings)</span></li>
                                <li className="flex"><Bullet /><span>Exec Council: <span className="font-bold">4 Members</span> (No separate Leg. Council)</span></li>

                                <li className="flex"><Bullet /><span><span className="font-bold">Centralization:</span> Bombay/Madras Govs subordinate</span></li>
                                <li className="flex"><Bullet /><span>SC at Calcutta (1774): 1 CJ + 3 Judges</span></li>
                                <li className="flex mt-1 pt-1 border-t border-dashed border-gray-300"><span className="text-xs text-red-600 font-bold">Prohibited private trade & bribes.</span></li>
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
                                <li>• <span className="font-bold">Exempted:</span> GG & Council, Revenue matters from SC jurisdiction.</li>
                                <li>• <span className="font-bold">Personal Law:</span> Hindus (Hindu Law), Muslims (Mohammedan Law).</li>
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
                                    <span className="font-bold text-amber-900">Commercial</span><br />(Court of Directors)
                                </div>
                                <div className="bg-blue-50 rounded p-1 border border-blue-100">
                                    <Crown size={12} className="mx-auto text-blue-700 mb-1" />
                                    <span className="font-bold text-blue-900">Political</span><br />(Board of Control)
                                </div>
                            </div>
                            <p className="text-xs font-bold text-center bg-slate-100 p-1 rounded">Double Govt • "British Possessions"</p>
                        </PaperCard>
                    </TimelineNode>

                    {/* 1786 & 1793 (Right - Stacked) */}
                    <TimelineNode side="right">
                        <div className="space-y-4">
                            {/* 1786 */}
                            <PaperCard rotate={1} className="py-2 bg-purple-50 border-purple-100">
                                <h4 className="font-bold text-purple-900 text-sm mb-1">Act of 1786 (Cornwallis)</h4>
                                <ul className="text-xs text-purple-900 space-y-1">
                                    <li>1. Power to override Council.</li>
                                    <li>2. Commander-in-Chief.</li>
                                </ul>
                            </PaperCard>

                            {/* 1793 */}
                            <PaperCard rotate={1} className="py-3">
                                <h4 className="font-bold text-slate-800 text-sm mb-1">Charter Act 1793</h4>
                                <p className="text-xs text-slate-700">• Monopoly: +20 Years</p>
                                <p className="text-xs text-slate-700">• B.O.C paid from <span className="text-green-700 font-bold">Indian Revenues</span></p>
                            </PaperCard>
                        </div>
                    </TimelineNode>

                    {/* 1813 (Left) */}
                    <TimelineNode side="left">
                        <PaperCard rotate={-1} className="py-3 bg-red-50 border-red-100">
                            <h4 className="font-bold text-red-900 text-lg mb-1">Charter Act 1813</h4>
                            <p className="text-sm text-slate-800 font-bold underline decoration-red-300 mb-2">Monopoly ENDED*</p>
                            <p className="text-xs text-slate-600 italic mb-2">*Except Tea & China</p>
                            <ul className="text-xs text-slate-800 space-y-1">
                                <li className="flex gap-2"><BookOpen size={12} /> Western Education (1 Lakh)</li>
                                <li className="flex gap-2"><Globe size={12} /> Christian Missionaries Allowed</li>
                                <li>• Local Govts can impose Taxes.</li>
                            </ul>
                        </PaperCard>
                    </TimelineNode>

                    {/* 1833 (Right) */}
                    <TimelineNode side="right">
                        <PaperCard rotate={1}>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Charter Act 1833</h3>
                            <Stamp>Turning Point</Stamp>
                            <div className="mt-2 space-y-1 text-sm text-slate-800">
                                <p>GG Bengal → <Highlighter>GG of INDIA</Highlighter></p>
                                <p className="text-xs text-slate-500 italic mb-2">(Lord William Bentinck)</p>

                                <ul className="text-xs list-disc list-inside space-y-1">
                                    <li><span className="font-bold">Centralization Peak:</span> Bombay/Madras lost legislative power.</li>
                                    <li>EIC = Purely Administrative Body (Trust).</li>
                                    <li>Open Civil Services Attempted (<span className="text-red-500">Failed</span>).</li>
                                    <li>Law Member added (Macaulay).</li>
                                </ul>
                            </div>
                        </PaperCard>
                    </TimelineNode>

                    {/* 1853 (Left) */}
                    <TimelineNode side="left">
                        <PaperCard rotate={-1}>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Charter Act 1853</h3>
                            <p className="text-xs text-slate-500 font-mono mb-2">The Last Charter</p>

                            <div className="space-y-2 text-xs text-slate-800">
                                <div className="p-2 bg-slate-100 rounded">
                                    <p className="font-bold">Sep of Powers (Exec vs Leg)</p>
                                    <p>Central Leg. Council (Mini-Parliament)</p>
                                </div>

                                <p>• <span className="font-bold">Open Competition</span> (Macaulay Committee '54)</p>

                                <div className="border-t pt-1 border-dashed border-slate-300">
                                    <p className="font-bold">Local Representation introduced:</p>
                                    <p className="text-[10px] text-slate-600">4 Members: Madras, Bombay, Bengal, Agra.</p>
                                </div>
                            </div>
                        </PaperCard>
                        <div className={`hidden md:block ${doodleStyle} bottom-0 -right-10 -rotate-12`}><BookOpen size={28} /></div>
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
                            <p className="text-xs text-amber-800/60 mb-2 italic">Post Sepoy Mutiny (1857)</p>
                            <ul className="text-sm text-slate-800 space-y-2">
                                <li className="flex gap-2 items-start"><Crown size={16} className="text-amber-700 mt-0.5" /> <span>Power to Crown (Her Majesty).</span></li>
                                <li className="flex gap-2 items-start"><Users size={16} className="text-amber-700 mt-0.5" /> <span><Highlighter color="bg-amber-200">Viceroy</Highlighter> (Direct Rep) - Lord Canning.</span></li>
                                <li className="flex gap-2 items-start"><Briefcase size={16} className="text-amber-700 mt-0.5" /> <span><span className="font-bold">Secretary of State (SoS)</span><br /><span className="text-xs text-slate-600">Member of British Cabinet + 15-member Council.</span></span></li>
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
                                <ul className="text-xs text-slate-600 list-disc list-inside space-y-1">
                                    <li>Leg. powers restored to Bombay/Madras.</li>
                                    <li><span className="font-bold">Portfolio System</span> (Canning).</li>
                                    <li><span className="font-bold">Ordinance Power</span> (6 months).</li>
                                    <li>3 Indians Nominated: Raja of Benaras, Maharaja of Patiala, Sir Dinkar Rao.</li>
                                </ul>
                            </PaperCard>
                            {/* 1892 */}
                            <PaperCard rotate={1} className="py-3">
                                <h4 className="font-bold text-blue-900 text-sm mb-1">Indian Councils Act 1892</h4>
                                <ul className="text-xs text-slate-600 list-disc list-inside">
                                    <li>Discussions on Budget (Limitied).</li>
                                    <li>Nomination by recommendation (University, Zamindars) = <span className="italic">Indirect Election.</span></li>
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
                                <div className="bg-red-100 p-2 rounded border border-red-200 text-red-900 text-xs shadow-inner">
                                    <span className="font-bold block mb-1">☠️ Separate Electorate</span>
                                    "Legalised Communalism" (Muslims).<br />
                                    Lord Minto = Father of Communal Electorate.
                                </div>
                                <p className="text-xs">• <span className="font-bold">Satyendra Prasad Sinha:</span> First Indian in Viceroy's Exec Council (Law Member).</p>
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
                            <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                                <div className="bg-slate-100 p-2 rounded">
                                    <span className="font-bold block mb-1">Dyarchy (Prov)</span>
                                    Transferred vs Reserved Subjects.
                                </div>
                                <div className="bg-slate-100 p-2 rounded">
                                    <span className="font-bold block mb-1">Bicameralism</span>
                                    Upper + Lower House (Direct Elections).
                                </div>
                            </div>
                            <ul className="text-xs space-y-1 list-disc list-inside text-slate-700">
                                <li>Communal Electorate extended (Sikhs, Christians).</li>
                                <li>High Commissioner for India (London).</li>
                                <li>Public Service Commission (1926) recommended.</li>
                            </ul>
                        </PaperCard>
                    </TimelineNode>

                    {/* Simon Commission Note (Left - Sticky) */}
                    <div className="mb-8 w-full md:w-[48%] md:mr-auto md:text-right relative">
                        <div className="hidden md:block absolute top-8 -right-8 w-8 border-t-2 border-dashed border-gray-300"></div>
                        <div className="bg-yellow-100 p-3 shadow-md transform -rotate-1 text-left text-xs max-w-xs ml-auto border-l-4 border-yellow-400">
                            <p className="font-bold">Simon Commission (1927)</p>
                            <p>7 Members (All White) → Boycotted.</p>
                            <p>Report 1930: Abolish Dyarchy, Extend Federation.</p>
                            <div className="mt-1 pt-1 border-t border-yellow-200 font-bold">Communal Award (1932)</div>
                            <p>Ramsay MacDonald → Sep. Electorate for Depressed Classes.</p>
                            <p>Poona Pact: Gandhi & Ambedkar agreed on Joint Electorate.</p>
                        </div>
                    </div>

                    {/* 1935 The Blueprint (Left - MEGA NODE) */}
                    <TimelineNode side="left">
                        <PaperCard rotate={0} className="border-4 border-double border-slate-200">
                            <div className="absolute -top-3 -left-3 transform -rotate-12"><Stamp>Blueprint</Stamp></div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Govt of India Act, 1935</h3>
                            <p className="text-xs text-slate-500 mb-3">321 Sections, 10 Schedules.</p>

                            <div className="space-y-3 text-sm text-slate-800">
                                <div className="flex gap-2">
                                    <MapIcon size={16} className="text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-bold">All-India Federation</p>
                                        <p className="text-xs text-slate-500">Proposed (Princely states didn't join).</p>
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
                                    Dyarchy Abolished in Provinces (1937-1939).
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-dashed">
                                    <p>• RBI Established</p>
                                    <p>• Federal Court (1937)</p>
                                    <p>• Burma Separated</p>
                                    <p>• 10% Population Voting Right</p>
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
                                    <p className="font-bold text-slate-800">Partition (Mountbatten Plan)</p>
                                    <p className="text-xs text-slate-600">India & Pakistan (Right to secede).</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">Sovereignty</p>
                                    <p className="text-xs text-slate-600">British Paramountcy Lapsed.</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-1">
                                <p>• GG = Constitutional Head (On advice of Ministers).</p>
                                <p>• Constituent Assembly → Sovereign Body.</p>
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

                {/* --- PRACTICE ARENA: LEVEL SYSTEM --- */}
                <section className="mb-20">
                    <div className="text-center mb-8">
                        <span className="bg-violet-100 text-violet-900 border border-violet-200 px-4 py-1 text-sm font-bold uppercase tracking-widest rounded-full shadow-md inline-flex items-center gap-2">
                            <Star size={14} /> Practice Arena
                        </span>
                    </div>
                    <ChapterLevelGame topicId={1} />
                </section>

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
