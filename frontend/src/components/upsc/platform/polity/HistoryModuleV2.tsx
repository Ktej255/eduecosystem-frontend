"use client";

import React from "react";
import {
    Scroll, Crown, Landmark, Gavel, Shield, Ban, Users,
    Briefcase, Building, FileText, Key, Globe,
    CheckCircle2, ArrowRight, Feather, Map as MapIcon, Tag
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface HistoryModuleProps {
    onComplete: () => void;
    isCompleted: boolean;
}

const V2Highlighter = ({ children, color = "bg-yellow-200" }: { children: React.ReactNode, color?: string }) => (
    <span className={`${color} px-1 mx-0.5 inline-block transform -skew-x-2 rounded-sm shadow-sm decoration-clone font-bold text-foreground border-b border-black/10`}>
        {children}
    </span>
);

const V2Stamp = ({ children, type = "default" }: { children: React.ReactNode, type?: "default" | "red" }) => (
    <div className={`
    border-2 ${type === 'red' ? 'border-red-800/60 text-red-900' : 'border-slate-800/60 text-foreground'} 
    rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest inline-block 
    transform -rotate-6 mix-blend-multiply opacity-90 shadow-sm
  `}
        style={{ borderRadius: "55% 45% 60% 40% / 40% 60% 50% 50%" }}>
        {children}
    </div>
);

const V2PaperCard = ({ children, className = "", rotate = 0 }: { children: React.ReactNode, className?: string, rotate?: number }) => (
    <div
        className={`bg-[#fdfbf7] shadow-lg border border-border relative p-4 md:p-5 ${className} transition-transform hover:scale-[1.01] duration-300`}
        style={{
            transform: `rotate(${rotate}deg)`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`
        }}
    >
        {children}
    </div>
);

const RowContainer = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 relative ${className}`}>
        {children}
    </div>
);

const TimelineSpine = () => (
    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-gray-400 transform -translate-x-1/2 z-0"></div>
);

const Connector = ({ side, top = "top-6" }: { side: "left" | "right", top?: string }) => (
    <div className={`hidden md:block absolute ${top} ${side === 'left' ? 'right-0 translate-x-[120%]' : 'left-0 -translate-x-[120%]'} w-8 border-t-2 border-dashed border-gray-400`}></div>
);

export default function HistoryModuleV2({ onComplete, isCompleted }: HistoryModuleProps) {
    return (
        <div className="w-full bg-[#f3f4f6] dark:bg-[#0a0a0a] min-h-screen py-8 px-2 md:px-4 font-[family-name:var(--font-kalam)] overflow-hidden">

            {/* Header */}
            <div className="max-w-5xl mx-auto mb-12 text-center relative z-10">
                <div className="inline-block relative">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight relative z-10">Topper's Scrapbook</h1>
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300/50 -rotate-1 skew-x-12 -z-0"></div>
                </div>
                <p className="text-muted-foreground mt-2 font-bold">High-Density Revision Mode</p>
            </div>

            <div className="max-w-5xl mx-auto relative pl-6 md:pl-0 space-y-0 pb-20">
                <TimelineSpine />

                {/* --- ROW 1: 1773 --- */}
                <RowContainer className="mb-8 z-10">
                    <div className="relative">
                        <V2PaperCard rotate={-1} className="md:text-right md:mr-6">
                            <div className="absolute -top-3 -right-3 transform rotate-6 z-20"><V2Stamp>Landmark Act</V2Stamp></div>
                            <h3 className="text-2xl font-bold text-blue-800 mb-2">Regulating Act, 1773</h3>
                            <ul className="text-sm text-foreground space-y-1 leading-tight">
                                <li>Gov of Bengal → <span className="font-bold">Gov-Gen of Bengal</span> (W. Hastings)</li>
                                <li>Exec Council (<span className="font-bold text-red-700">4 Members</span>)</li>
                                <li><span className="bg-blue-100 px-1 rounded font-bold text-blue-800">Centralization:</span> Bombay/Madras subordinate</li>
                                <li><span className="font-bold">SC Est (1774):</span> 1 CJ + 3 Judges</li>
                            </ul>
                            <div className="hidden md:block"><Connector side="left" /></div>
                        </V2PaperCard>
                    </div>
                    <div className="relative mt-2 md:mt-8">
                        <div className="bg-yellow-200 shadow-md p-4 transform rotate-2 md:ml-6 md:max-w-xs border-t-8 border-yellow-300/50 sticky-note relative">
                            <h4 className="font-bold text-xs uppercase text-muted-foreground mb-1">Context</h4>
                            <p className="text-sm font-bold text-foreground leading-tight mb-2">Why? Control EIC corruption.</p>
                            <p className="text-sm font-bold text-red-800 leading-tight">Defect:</p>
                            <p className="text-xs text-red-900">SC vs GG Conflict. (Led to 1781)</p>
                            <div className="hidden md:block"><Connector side="right" top="top-8" /></div>
                        </div>
                    </div>
                </RowContainer>

                {/* --- ROW 2: 1781 --- */}
                <RowContainer className="-mt-4 md:-mt-8 z-20">
                    <div className="relative order-2 md:order-1 mt-2 md:mt-10">
                        <div className="bg-card border-2 border-border border-dashed p-4 md:mr-6 transform -rotate-1 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-5"><MapIcon size={64} /></div>
                            <h4 className="font-bold text-muted-foreground text-xs uppercase mb-2">Concept: Separation</h4>
                            <div className="flex items-center gap-2 justify-center text-xs font-bold text-foreground border-b border-border pb-2 mb-2">
                                <div className="p-1 bg-blue-50">GG Council</div>
                                <div className="h-4 w-0.5 bg-red-500"></div>
                                <div className="p-1 bg-red-50">Supreme Court</div>
                            </div>
                            <p className="text-xs text-center text-muted-foreground italic">"Official Maps & Revenue = NO Court Link"</p>
                            <div className="hidden md:block"><Connector side="left" top="top-10" /></div>
                        </div>
                    </div>
                    <div className="relative order-1 md:order-2">
                        <V2PaperCard rotate={1} className="md:ml-6 bg-[#fffdf0]">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-blue-900">Act of Settlement 1781</h3>
                                <V2Stamp type="red">Patch Work</V2Stamp>
                            </div>
                            <div className="space-y-2 text-sm text-foreground">
                                <p><span className="font-bold">Exempted:</span> GG & Servants from SC.</p>
                                <p><span className="font-bold">Excluded:</span> Revenue matters.</p>
                                <p>Personal Law applied.</p>
                                <p className="border-t pt-1"><span className="font-bold text-muted-foreground text-xs">Appeals go to:</span> GG-in-Council</p>
                            </div>
                            <div className="hidden md:block"><Connector side="right" /></div>
                        </V2PaperCard>
                    </div>
                </RowContainer>

                {/* --- ROW 3: 1784 --- */}
                <RowContainer className="-mt-4 md:-mt-6 z-10">
                    <div className="relative">
                        <V2PaperCard rotate={-2} className="md:mr-6">
                            <h3 className="text-xl font-bold text-blue-900 mb-3 border-b border-border pb-1">Pitt's India Act 1784</h3>
                            <div className="grid grid-cols-2 gap-2 text-center mb-3">
                                <div className="bg-amber-50 rounded p-2 border border-amber-100">
                                    <p className="font-bold text-[10px] uppercase text-amber-800">C.O.D.</p>
                                    <p className="text-[10px] text-muted-foreground">Commercial</p>
                                </div>
                                <div className="bg-blue-50 rounded p-2 border border-blue-100">
                                    <p className="font-bold text-[10px] uppercase text-blue-800">B.O.C.</p>
                                    <p className="text-[10px] text-muted-foreground">Political</p>
                                </div>
                            </div>
                            <p className="text-xs bg-muted p-1 rounded text-center text-muted-foreground font-bold">British Govt → Supreme Control</p>
                            <div className="hidden md:block"><Connector side="left" /></div>
                        </V2PaperCard>
                    </div>
                    <div className="relative mt-2 md:mt-12">
                        <div className="bg-card border text-center p-3 shadow-md transform rotate-3 md:ml-6 md:max-w-[200px] rounded-lg border-t-4 border-t-purple-400">
                            <Tag className="w-4 h-4 mx-auto text-purple-400 mb-1" />
                            <p className="text-[10px] uppercase font-bold text-muted-foreground">Name Change</p>
                            <p className="text-xs line-through text-muted-foreground">Company Territory</p>
                            <ArrowRight className="w-3 h-3 mx-auto text-muted-foreground my-0.5" />
                            <p className="text-sm font-bold text-purple-900 leading-tight">"British Possessions"</p>
                            <div className="hidden md:block"><Connector side="right" top="top-6" /></div>
                        </div>
                    </div>
                </RowContainer>

                {/* --- ROW 4: 1793 --- */}
                <RowContainer className="-mt-4 md:-mt-8 z-20">
                    <div className="relative order-2 md:order-1 mt-2 md:mt-8">
                        <div className="bg-yellow-100 p-3 shadow-md transform -rotate-2 md:mr-6 md:max-w-xs border border-yellow-200 relative">
                            <h4 className="font-bold text-xs text-red-800 text-center mb-2 mt-1">Cornwallis Demands</h4>
                            <ul className="text-xs space-y-1 list-disc list-inside text-red-900/80">
                                <li>Override Council? <span className="font-bold">YES</span></li>
                                <li>C-in-C? <span className="font-bold">YES</span></li>
                            </ul>
                            <p className="text-[10px] text-right mt-1 text-red-700 italic">Accepted 1786</p>
                            <div className="hidden md:block"><Connector side="left" top="top-8" /></div>
                        </div>
                    </div>

                    <div className="relative order-1 md:order-2">
                        <V2PaperCard rotate={1} className="md:ml-6">
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Charter Act of 1793</h3>
                            <ul className="text-sm space-y-2 text-foreground">
                                <li className="flex gap-2"><span><span className="font-bold">Override Power:</span> Extended.</span></li>
                                <li className="flex gap-2"><span>Monopoly: <V2Highlighter>+20 Years</V2Highlighter></span></li>
                                <li className="flex gap-2 bg-green-50/50 p-1 -mx-1 rounded">
                                    <span><span className="font-bold text-green-800">Payment:</span> B.O.C paid from <span className="underline decoration-wavy decoration-green-400">INDIAN REVENUES</span>.</span>
                                </li>
                            </ul>
                            <div className="hidden md:block"><Connector side="right" /></div>
                        </V2PaperCard>
                    </div>
                </RowContainer>

                {/* --- ROW 5: 1813 & 1833 --- */}
                <RowContainer className="mb-0 z-10 mt-8">
                    <V2PaperCard rotate={-1} className="bg-muted border-border">
                        <h3 className="text-lg font-bold text-muted-foreground mb-2">Charter Act 1813</h3>
                        <div className="space-y-1 text-xs text-foreground">
                            <p>🚫 Monopoly <span className="font-bold text-red-600">ENDED</span> (Except Tea/China)</p>
                            <p>👑 Local Govts can tax</p>
                            <p>✝️ Missionaries Allowed</p>
                            <p>🎓 Western Education Fund</p>
                        </div>
                    </V2PaperCard>

                    <V2PaperCard rotate={1} className="bg-blue-50 border-blue-200">
                        <div className="absolute -right-2 -top-2"><V2Stamp>Turning Point</V2Stamp></div>
                        <h3 className="text-lg font-bold text-blue-900 mb-2">Charter Act 1833</h3>
                        <div className="space-y-1 text-xs text-foreground">
                            <p className="font-bold text-sm">GG Bengal → <V2Highlighter color="bg-blue-200">GG of INDIA</V2Highlighter></p>
                            <div className="mt-2 pt-2 border-t border-blue-200">
                                <p>• EIC = Admin Body Only</p>
                                <p>• Open Civil Services? <span className="text-red-500 font-bold">Failed</span></p>
                            </div>
                        </div>
                    </V2PaperCard>
                </RowContainer>

                {/* --- ROW 6: 1853 --- */}
                <div className="max-w-2xl mx-auto mt-8 relative z-20">
                    <V2PaperCard rotate={0} className="border-t-4 border-t-slate-800">
                        <h3 className="text-xl font-bold text-foreground mb-2">Charter Act of 1853</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="font-bold text-foreground">Civil Services Open ✅</p>
                                <p className="text-xs text-muted-foreground mb-2">Macaulay Committee</p>
                                <p className="font-bold text-foreground">Mini-Parliament 🏛️</p>
                                <p className="text-xs text-muted-foreground">Leg/Exec Separated</p>
                            </div>
                            <div className="bg-muted p-2 rounded text-center">
                                <p className="text-xs font-bold uppercase text-muted-foreground mb-2">Local Rep (4/6)</p>
                                <div className="grid grid-cols-2 gap-1 text-[10px] font-bold text-muted-foreground">
                                    <span>Madras</span><span>Bombay</span><span>Bengal</span><span>Agra</span>
                                </div>
                            </div>
                        </div>
                    </V2PaperCard>
                </div>

                {/* Footer */}
                <div className="mt-16 text-center z-30 relative">
                    <Button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
                 relative px-8 py-4 text-lg font-bold rounded-xl shadow-lg transform transition-all hover:scale-105 active:scale-95
                 ${isCompleted
                                ? 'bg-green-600 text-white ring-2 ring-green-200'
                                : 'bg-card text-blue-900 border-2 border-blue-900 hover:bg-blue-50'}
               `}
                    >
                        {isCompleted ? <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Done</span>
                            : <span className="flex items-center gap-2"><Feather className="w-5 h-5" /> Mark Complete</span>}
                    </Button>
                </div>
            </div>
        </div>
    );
}
