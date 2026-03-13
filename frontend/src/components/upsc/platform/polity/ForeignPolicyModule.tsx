"use client";

import React from "react";
import {
    Globe, Handshake, Shield,
    Compass, Anchor, Bomb,
    BookOpen, Scale
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ForeignPolicyModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#eff6ff] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-blue-100">
        <div className="max-w-6xl mx-auto space-y-12 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-card/50 rounded-3xl p-6 shadow-inner border-2 border-border">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ title, icon: Icon, color }: { title: string, icon: any, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`p-3 rounded-full ${color} text-white shadow-lg`}>
            <Icon size={24} />
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight text-foreground`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function ForeignPolicyModule({ onComplete, isCompleted, chapterNumber = "73" }: ForeignPolicyModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO */}
            <div className="relative bg-[#020617] border-4 border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl text-white overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#ca8a04] text-foreground px-4 py-1 text-lg font-bold">Chapter {chapterNumber}</Badge>
                        <span className="text-muted-foreground font-bold uppercase tracking-widest text-sm">Foreign Relations</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                        Foreign Policy <br />
                        <span className="text-[#3b82f6]">Strategic Autonomy</span>
                    </h1>
                    <p className="text-xl text-slate-300 italic max-w-2xl">
                        "The Ashoka Chakra on a World Map. From Panchsheel to Act East."
                    </p>
                </div>
                <div className="absolute right-8 bottom-8 opacity-20 animate-pulse">
                    <Globe size={180} />
                </div>
            </div>

            {/* PHASE 1: ROOTS */}
            <SectionHeader title="Phase 1: The Roots (Art 51 & Panchsheel)" icon={BookOpen} color="bg-[#1e40af]" />

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                    <h3 className="font-black text-blue-900 mb-4 flex items-center gap-2">
                        <Scale size={20} /> Article 51 (DPSP)
                    </h3>
                    <ul className="text-sm font-bold text-muted-foreground space-y-2">
                        <li>• International Peace & Security</li>
                        <li>• Just & Honorable Relations</li>
                        <li>• Respect for International Law</li>
                        <li>• Arbitration for Disputes</li>
                    </ul>
                </div>

                <div className="bg-card border-2 border-[#ca8a04] rounded-2xl p-6 shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#ca8a04] text-white px-3 py-1 text-xs font-bold rounded-bl">1954</div>
                    <h3 className="font-black text-yellow-700 mb-4 flex items-center gap-2">
                        <Handshake size={20} /> Panchsheel
                    </h3>
                    <p className="text-xs font-bold text-muted-foreground mb-2">India (Nehru) - China (Zhou Enlai)</p>
                    <div className="bg-yellow-50 p-2 rounded text-xs font-bold text-yellow-800">
                        Mutual Respect • Non-Aggression • Non-Interference • Equality • Co-existence
                    </div>
                </div>
            </div>

            {/* PHASE 2: DOCTRINES */}
            <SectionHeader title="Phase 2: Evolution of Doctrines" icon={Compass} color="bg-[#15803d]" />

            <div className="space-y-4">
                <div className="bg-card p-4 rounded-xl border border-border flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-slate-200 p-2 rounded text-muted-foreground font-bold">NAM</div>
                    <div>
                        <h4 className="font-black text-foreground">Non-Alignment</h4>
                        <p className="text-xs text-muted-foreground font-bold">Independent Judgment (Not Neutrality).</p>
                    </div>
                </div>

                <div className="bg-card p-4 rounded-xl border border-border flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-blue-200 p-2 rounded text-blue-600 font-bold">1996</div>
                    <div>
                        <h4 className="font-black text-foreground">Gujral Doctrine</h4>
                        <p className="text-xs text-muted-foreground font-bold">Non-Reciprocity with neighbors (except Pakistan). "Give without asking."</p>
                    </div>
                </div>

                <div className="bg-card p-4 rounded-xl border border-border flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-green-200 p-2 rounded text-green-600 font-bold">2014</div>
                    <div>
                        <h4 className="font-black text-foreground">Look East {'->'} Act East</h4>
                        <p className="text-xs text-muted-foreground font-bold">Economic + Security Cooperation with East Asia.</p>
                    </div>
                </div>
            </div>

            {/* PHASE 3: NUCLEAR */}
            <SectionHeader title="Phase 3: Nuclear Doctrine (The Shield)" icon={Shield} color="bg-[#b91c1c]" />

            <div className="bg-[#171717] text-white rounded-2xl p-8 border-4 border-slate-800 relative shadow-[8px_8px_0px_#b91c1c]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col items-center">
                        <Bomb size={64} className="text-red-500 mb-2" />
                        <h3 className="font-black text-2xl tracking-wider">NFU</h3>
                        <p className="text-xs font-bold text-muted-foreground">NO FIRST USE</p>
                    </div>
                    <div className="flex-1 space-y-4">
                        <div className="bg-slate-800 p-3 rounded border border-slate-600">
                            <h4 className="font-bold text-yellow-500 text-sm">Credible Minimum Deterrence</h4>
                            <p className="text-xs text-slate-300">Second Strike Capability.</p>
                        </div>
                        <div className="bg-slate-800 p-3 rounded border border-slate-600">
                            <h4 className="font-bold text-blue-400 text-sm">Civilian Control</h4>
                            <p className="text-xs text-slate-300">PM presses the button (NCA).</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center">
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`px-12 py-6 rounded-full text-xl font-black font-['Kalam'] transition-all transform hover:scale-105 ${isCompleted ? 'bg-slate-300 text-muted-foreground' : 'bg-[#1e40af] text-white hover:bg-blue-800'
                        }`}
                >
                    {isCompleted ? "Treaty Signed" : `MARK CHAPTER ${chapterNumber} COMPLETE`}
                </Button>
            </div>
        </ScrapbookContainer>
    );
}
