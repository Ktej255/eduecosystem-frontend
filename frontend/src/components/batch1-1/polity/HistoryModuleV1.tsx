"use client";

import React, { useRef } from "react";
import {
    Scroll, Crown, Landmark, Gavel, Shield, Ban, Users,
    Briefcase, Building, FileText, Lock, Key, Globe,
    CheckCircle2, ArrowDown, Feather
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface HistoryModuleProps {
    onComplete: () => void;
    isCompleted: boolean;
}

// --- Design System Components ---

const Highlighter = ({ children }: { children: React.ReactNode }) => (
    <span className="bg-yellow-200 px-1 mx-0.5 inline-block transform -skew-x-2 rounded-sm shadow-sm decoration-clone">
        {children}
    </span>
);

const Stamp = ({ children }: { children: React.ReactNode }) => (
    <div className="border-2 border-slate-800/60 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-800/80 inline-block transform -rotate-6 mix-blend-multiply opacity-80" style={{ borderRadius: "55% 45% 60% 40% / 40% 60% 50% 50%" }}>
        {children}
    </div>
);

const PaperCard = ({ children, className = "", rotate = 0 }: { children: React.ReactNode, className?: string, rotate?: number }) => (
    <div
        className={`bg-[#fdfbf7] shadow-lg border border-gray-200 relative p-6 md:p-8 ${className}`}
        style={{
            transform: `rotate(${rotate}deg)`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`
        }}
    >
        {children}
    </div>
);

const ActTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 drop-shadow-sm font-[family-name:var(--font-kalam)]">
        {children}
    </h3>
);

const Bullet = () => (
    <span className="inline-block w-2 h-2 rounded-full bg-slate-800 mr-2 mt-2 flex-shrink-0" style={{ borderRadius: "60% 40% 70% 30% / 50% 60% 30% 70%" }}></span>
);

export default function HistoryModule({ onComplete, isCompleted }: HistoryModuleProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={scrollRef} className="w-full bg-[#f3f4f6] dark:bg-[#0a0a0a] min-h-screen py-10 px-4 font-[family-name:var(--font-kalam)]">

            {/* Header Section */}
            <div className="max-w-4xl mx-auto mb-16 text-center relative">
                <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 tracking-tight">
                    Historical Background
                </h1>
                <p className="text-xl md:text-2xl text-slate-700 italic border-b-2 border-dashed border-slate-400 inline-block pb-1">
                    The Evolution of the Constitution
                </p>

                {/* Sticky Note Context */}
                <div className="mt-8 md:absolute md:top-0 md:right-0 bg-yellow-200 p-4 shadow-lg transform rotate-2 w-64 mx-auto md:mx-0 text-left text-sm text-slate-800 font-medium">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-yellow-400/50 opacity-50 block"></div>
                    <p><strong>1600:</strong> EIC comes as Traders (Queen Elizabeth I Charter).</p>
                    <p><strong>1765:</strong> Diwani Rights → Territorial Power starts.</p>
                    <p><strong>1858:</strong> Sepoy Mutiny → Crown assumes responsibility.</p>
                </div>
            </div>

            {/* Main Timeline Container */}
            <div className="max-w-4xl mx-auto relative pl-4 md:pl-0">
                {/* Vertical Dashed Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 border-l-2 border-dashed border-slate-400/50 transform -translate-x-1/2"></div>


                {/* --- PHASE 1: The Foundation --- */}

                {/* ACT 1: 1773 */}
                <div className="mb-20 relative md:w-1/2 md:ml-auto md:pl-10">
                    {/* Connector */}
                    <div className="absolute top-10 -left-6 md:-left-10 w-10 md:w-20 border-t-2 border-slate-400/50 border-dashed"></div>

                    <PaperCard rotate={1} className="ml-8 md:ml-0">
                        <div className="absolute -top-4 -right-4 transform rotate-12">
                            <Stamp>Constitutional Landmark</Stamp>
                        </div>
                        <ActTitle>Regulating Act, 1773</ActTitle>

                        <div className="space-y-4 text-slate-800 leading-relaxed">
                            <div className="flex items-start">
                                <Bullet />
                                <div>
                                    <span className="font-bold">Governor of Bengal</span> → designated <Highlighter>Governor-General of Bengal</Highlighter>
                                    <div className="text-sm text-slate-600 mt-1 pl-2 border-l-2 border-slate-300">
                                        • First Man: Lord Warren Hastings<br />
                                        • Support: Executive Council of 4 Members
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Bullet />
                                <div>
                                    <span className="font-bold text-blue-900">Centralization Step:</span><br />
                                    Governors of Bombay & Madras made <span className="text-red-700 font-bold">subordinate</span> to GG of Bengal.
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Bullet />
                                <div>
                                    <span className="font-bold">Judiciary (SC):</span> Est. at Calcutta (1774).<br />
                                    <span className="text-sm bg-slate-100 px-1 rounded">1 Chief Justice + 3 Judges</span>
                                </div>
                            </div>

                            <div className="flex items-start text-red-700">
                                <Bullet />
                                <div>
                                    <span className="font-bold">Corruption Control:</span><br />
                                    No Private Trade. No Bribes from natives.
                                </div>
                            </div>
                        </div>
                    </PaperCard>
                </div>

                {/* ACT 2: 1781 (Patch Card) */}
                <div className="mb-20 relative md:w-1/2 md:mr-auto md:pr-10 md:text-right">
                    {/* Connector */}
                    <div className="absolute top-10 right-0 md:-right-10 w-10 md:w-20 border-t-2 border-slate-400/50 border-dashed"></div>

                    <div className="bg-[#f0f9ff] p-5 shadow-sm border border-blue-200 transform -rotate-1 relative mx-8 md:mx-0 inline-block text-left max-w-sm">
                        <div className="absolute -top-3 left-4 bg-blue-100 px-2 text-xs font-bold text-blue-800 uppercase tracking-widest border border-blue-200">
                            Patch: Act of Settlement
                        </div>
                        <h4 className="font-bold text-xl text-blue-900 mb-2">Amending Act of 1781</h4>
                        <p className="text-sm italic text-slate-600 mb-3">Purpose: To correct defects of 1773 Act (The Exemptions)</p>
                        <ul className="text-sm space-y-2 text-slate-800 list-disc list-inside">
                            <li><span className="font-bold">Executive Immunity:</span> GG & Council exempted from SC jurisdiction.</li>
                            <li><span className="font-bold">Revenue Separation:</span> Revenue matters excluded from SC.</li>
                            <li><span className="font-bold">Personal Law:</span> Hindus (Hindu Law), Muslims (Mohammedan Law).</li>
                        </ul>
                    </div>
                </div>


                {/* --- PHASE 2: Framework --- */}

                {/* ACT 3: 1784 (Split Card) */}
                <div className="mb-20 relative w-full">
                    <div className="text-center mb-6">
                        <span className="bg-slate-800 text-white px-3 py-1 text-sm font-bold uppercase tracking-widest rounded-full">Phase 2: Double Government</span>
                    </div>

                    <PaperCard className="max-w-2xl mx-auto" rotate={0}>
                        <ActTitle>Pitt's India Act of 1784</ActTitle>

                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                            <div className="bg-amber-50 p-4 rounded border border-amber-200">
                                <div className="flex items-center gap-2 mb-2 text-amber-900 font-bold uppercase text-xs">
                                    <Briefcase className="w-4 h-4" /> Commercial
                                </div>
                                <p className="font-bold text-lg text-slate-800">Court of Directors</p>
                                <p className="text-xs text-slate-500 mt-1">Managed Company's Trade</p>
                            </div>

                            <div className="bg-blue-50 p-4 rounded border border-blue-200">
                                <div className="flex items-center gap-2 mb-2 text-blue-900 font-bold uppercase text-xs">
                                    <Crown className="w-4 h-4" /> Political (New)
                                </div>
                                <p className="font-bold text-lg text-slate-800">Board of Control</p>
                                <p className="text-xs text-slate-500 mt-1">Supervise Civil/Military Govt & Revenue</p>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-dashed border-slate-300 text-sm text-center font-medium text-slate-700">
                            Significance: Territories called <Highlighter>"British Possessions in India"</Highlighter>
                        </div>
                    </PaperCard>
                </div>

                {/* ACT 4: 1786 (Memo Note) */}
                <div className="mb-20 relative md:w-1/3 md:ml-auto md:pl-10">
                    <div className="bg-yellow-100 p-4 shadow-lg border border-yellow-200 transform rotate-2 relative ml-10 md:ml-0">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-800 rounded-full text-white flex items-center justify-center font-serif font-bold shadow-md ring-2 ring-white">C</div>
                        <h4 className="text-center font-bold text-red-900 mt-2 mb-2">Cornwallis Special (1786)</h4>
                        <ul className="text-sm space-y-1 text-red-900/80 list-disc list-inside">
                            <li>Power to <span className="font-bold">Override Council</span>.</li>
                            <li>He would be <span className="font-bold">Commander-in-Chief</span>.</li>
                        </ul>
                    </div>
                </div>

                {/* ACT 5: 1793 (List Card) */}
                <div className="mb-20 relative md:w-1/2 md:mr-auto md:pr-10">
                    <PaperCard rotate={-1} className="mr-8 md:mr-0">
                        <h4 className="font-bold text-lg text-blue-900 border-b border-blue-100 pb-2 mb-3">Charter Act of 1793</h4>
                        <div className="space-y-2 text-slate-800 text-sm">
                            <div className="flex gap-2">
                                <span className="font-bold text-blue-700 min-w-[80px]">Override:</span>
                                <span>Extended to all future GGs/Governors.</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="font-bold text-blue-700 min-w-[80px]">Monopoly:</span>
                                <span>Extended for <Highlighter>20 years</Highlighter>.</span>
                            </div>
                            <div className="flex gap-2 text-red-700 bg-red-50 p-1 -mx-1 rounded">
                                <span className="font-bold min-w-[80px]">Payment:</span>
                                <span>Board of Control paid out of <span className="font-bold">Indian Revenues</span>.</span>
                            </div>
                        </div>
                    </PaperCard>
                </div>


                {/* --- PHASE 3: Centralization Peak --- */}
                <div className="text-center mb-8">
                    <span className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white px-4 py-1 text-sm font-bold uppercase tracking-widest rounded shadow-lg">Phase 3: The Path to Centralization</span>
                </div>

                {/* ACT 6: 1813 (Gateway) */}
                <div className="mb-20 relative md:w-1/2 md:ml-auto md:pl-10">
                    <PaperCard rotate={1} className="ml-8 md:ml-0 overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Globe className="w-24 h-24" />
                        </div>
                        <ActTitle>Charter Act of 1813</ActTitle>

                        <div className="space-y-4 relative z-10">
                            <div className="p-3 border-2 border-red-200 border-dashed rounded bg-red-50/50">
                                <div className="flex items-center gap-2 font-bold text-red-800 mb-1">
                                    <Ban className="w-4 h-4" /> Trade Monopoly ABOLISHED
                                </div>
                                <p className="text-sm text-red-700">Indian trade open to all British merchants.</p>
                                <p className="text-xs text-red-600 mt-1 pl-6">
                                    *Exception: Tea & Trade with China.
                                </p>
                            </div>

                            <div className="text-slate-800 text-sm space-y-2">
                                <p>👑 Asserted <span className="font-bold">Sovereignty of Crown</span>.</p>
                                <p>📖 <Highlighter>Westernization</Highlighter>: Christian Missionaries & Education allowed.</p>
                                <p>💰 <span className="font-bold">Taxation</span>: Local Govts authorized to impose taxes.</p>
                            </div>
                        </div>
                    </PaperCard>
                </div>

                {/* ACT 7: 1833 (Milestone) */}
                <div className="mb-20 relative w-full px-4">
                    <PaperCard className="max-w-3xl mx-auto border-4 border-double border-blue-200" rotate={0}>
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="flex-1">
                                <Stamp>Final Centralization</Stamp>
                                <h3 className="text-4xl font-bold text-blue-900 mt-2 mb-4">Charter Act of 1833</h3>

                                <div className="space-y-4">
                                    <div className="bg-blue-50 p-3 rounded">
                                        <h5 className="font-bold text-blue-800 text-sm uppercase mb-1">Nomenclature Change</h5>
                                        <p className="text-xl font-bold text-slate-800">
                                            GG of Bengal → <Highlighter>GG of INDIA</Highlighter>
                                        </p>
                                        <p className="text-sm text-slate-600">First: Lord William Bentinck</p>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <h5 className="font-bold text-slate-700 text-sm">Legislative</h5>
                                            <p className="text-sm text-slate-600">Bombay/Madras deprived of powers. GG of India gets <span className="font-bold text-red-600">Exclusive</span> powers.</p>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-bold text-slate-700 text-sm">Commercial</h5>
                                            <p className="text-sm text-slate-600">EIC becomes purely <span className="font-bold">Administrative Body</span>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-48 bg-slate-100 p-4 rounded text-center transform rotate-2">
                                <h5 className="font-bold text-slate-400 text-xs uppercase mb-2">Attempts</h5>
                                <p className="text-sm font-bold text-slate-700 mb-1">Open Civil Services?</p>
                                <p className="text-xs text-red-500 font-bold uppercase border-2 border-red-500 inline-block px-1 rounded rotate-[-10deg]">NEGATED</p>
                                <p className="text-[10px] text-slate-500 mt-1">Opposed by Court of Directors</p>
                            </div>
                        </div>
                    </PaperCard>
                </div>

                {/* ACT 8: 1853 (The Blueprint) */}
                <div className="mb-24 relative md:w-2/3 mx-auto">
                    <PaperCard className="bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" rotate={-1}>
                        <ActTitle>Charter Act of 1853</ActTitle>
                        <p className="text-sm text-slate-500 mb-6 font-mono border-b border-slate-200 pb-2">Status: Last of the Charter Acts</p>

                        <div className="grid md:grid-cols-2 gap-8">

                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="bg-blue-100 p-2 rounded h-fit"><Key className="w-5 h-5 text-blue-700" /></div>
                                    <div>
                                        <h5 className="font-bold text-blue-900">Separation of Powers</h5>
                                        <p className="text-sm text-slate-700">Separated Leg. & Exec. functions of GG Council.</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="bg-purple-100 p-2 rounded h-fit"><Users className="w-5 h-5 text-purple-700" /></div>
                                    <div>
                                        <h5 className="font-bold text-purple-900">Mini-Parliament</h5>
                                        <p className="text-sm text-slate-700">Created Indian (Central) Legislative Council (6 Members).</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="bg-green-100 p-2 rounded h-fit"><CheckCircle2 className="w-5 h-5 text-green-700" /></div>
                                    <div>
                                        <h5 className="font-bold text-green-900">Civil Services</h5>
                                        <p className="text-sm text-slate-700">Open Competition Introduced! (Macaulay Committee 1854)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-4 rounded border border-slate-200">
                                <h5 className="font-bold text-slate-800 text-center mb-3 text-sm uppercase tracking-wide">Local Representation</h5>
                                <p className="text-xs text-center text-slate-500 mb-2">4 of 6 members from:</p>
                                <div className="grid grid-cols-2 gap-2 text-center text-sm font-bold text-slate-700">
                                    <span className="bg-white p-1 shadow-sm">Madras</span>
                                    <span className="bg-white p-1 shadow-sm">Bombay</span>
                                    <span className="bg-white p-1 shadow-sm">Bengal</span>
                                    <span className="bg-white p-1 shadow-sm">Agra</span>
                                </div>
                            </div>

                        </div>
                    </PaperCard>
                </div>

                {/* Completion Section */}
                <div className="flex justify-center pb-20">
                    <div className="text-center relative">
                        <div className="absolute inset-0 bg-white/50 blur-xl"></div>
                        <Button
                            onClick={onComplete}
                            disabled={isCompleted}
                            className={`
                 relative px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform transition-all hover:scale-105 active:scale-95
                 ${isCompleted
                                    ? 'bg-green-600 hover:bg-green-700 text-white ring-4 ring-green-200'
                                    : 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white ring-4 ring-blue-200'}
               `}
                        >
                            {isCompleted ? (
                                <span className="flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6" /> Chapter Completed
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <Feather className="w-6 h-6" /> Mark as Revise-Ready
                                </span>
                            )}
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}
