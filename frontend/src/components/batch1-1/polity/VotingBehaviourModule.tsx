"use client";

import React from "react";
import {
    Vote, Users, Landmark,
    BookOpen, Scale, Gavel,
    ShieldCheck, Heart, UserPlus,
    UserMinus, Mic2, Megaphone,
    TrendingUp, TrendingDown,
    Zap, Flag, Target,
    CircleDashed, GripHorizontal,
    Menu, LayoutGrid, Award,
    Coins, Smartphone, ThumbsUp,
    ThumbsDown, XCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface VotingBehaviourModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f3f4f6] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-purple-100 selection:text-purple-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#7c3aed] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 20 20 L 980 20 L 980 980 L 20 980 Z" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="15 5" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-[#7c3aed] opacity-40"></div>
            {children}
        </div>
    </div>
);

const InfluenceCard = ({ title, icon, color, children, className = "" }: { title: string, icon: React.ReactNode, color: string, children: React.ReactNode, className?: string }) => (
    <div className={`bg-card border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            {icon}
        </div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-foreground relative z-10 font-bold leading-relaxed">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color, subtitle }: { number: string, title: string, color: string, subtitle?: string }) => (
    <div className="flex flex-col gap-2 my-8">
        <div className="flex items-center gap-4">
            <div className={`w-12 h-12 ${color} text-white rounded-lg shadow-xl flex items-center justify-center font-black text-xl rotate-[-2deg] border-2 border-white`}>
                {number}
            </div>
            <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
                {title}
            </h2>
            <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
        </div>
        {subtitle && <p className="text-muted-foreground font-bold italic ml-16">{subtitle}</p>}
    </div>
);

export default function VotingBehaviourModule({ onComplete, isCompleted, chapterNumber = "84" }: VotingBehaviourModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#7c3aed] border-4 border-[#5b21b6] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(124,58,237,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-card/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#5b21b6] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-card/30"></div>
                        <span className="text-purple-100 font-bold uppercase tracking-widest text-sm italic underline decoration-white">Sociology of Politics</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        The Voter's <br /> <span className="text-[#fcd34d] italic drop-shadow-md">Prism</span> <br />
                        <span className="text-purple-100 drop-shadow-md underline decoration-wavy decoration-[#fcd34d] italic text-3xl md:text-5xl">Why We Vote How We Vote</span>
                    </h1>
                    <p className="text-xl text-purple-100 max-w-2xl leading-relaxed italic opacity-90">
                        "Caste, Religion, Language, Money... The 7 colors of the Indian electoral spectrum."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <LayoutGrid size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: SOCIAL DETERMINANTS */}
            <PhaseHeader
                number="1"
                title="The Roots (Social Determinants)"
                color="bg-[#7c3aed]"
                subtitle="Caste, Religion & Language"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <InfluenceCard
                    title="Caste (The Double-Edged Sword)"
                    icon={<GripHorizontal size={120} className="text-purple-600" />}
                    color="border-purple-600"
                    className="bg-purple-50"
                >
                    <p className="text-sm">Parties use "caste banks" to win. Shift from <span className="underline">Upper Caste dominance</span> to <span className="underline">OBC/Dalit assertion</span>.</p>
                    <div className="bg-card p-4 rounded-xl border-l-4 border-purple-600 shadow-sm mt-4">
                        <h5 className="font-black text-purple-700 uppercase mb-2">Rajni Kothari's View</h5>
                        <p className="text-xs font-bold text-muted-foreground italic">"Politics is not just caste-ridden; it is caste that has become politicized." [Mains Quote]</p>
                    </div>
                </InfluenceCard>

                <InfluenceCard
                    title="Religion & Language"
                    icon={<Landmark size={120} className="text-orange-600" />}
                    color="border-orange-600"
                    className="bg-orange-50"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Badge className="bg-orange-600">Religion</Badge>
                            <p className="text-sm font-bold text-muted-foreground">Communal polarization consolidates votes (e.g., Post-Ayodhya).</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Badge className="bg-blue-600">Language</Badge>
                            <p className="text-sm font-bold text-muted-foreground">Identity drives voting in states like Tamil Nadu & Karnataka.</p>
                        </div>
                    </div>
                </InfluenceCard>
            </div>

            {/* PHASE 2: POLITICAL FACTORS */}
            <PhaseHeader
                number="2"
                title="The Game (Political Factors)"
                color="bg-[#2563eb]"
                subtitle="Charisma & Performance"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <InfluenceCard
                    title="Personality Cult (Charisma)"
                    icon={<Award size={120} className="text-blue-600" />}
                    color="border-blue-600"
                    className="bg-blue-50"
                >
                    <p className="text-sm">Voters vote for the <span className="font-black text-blue-700">Leader (PM/CM)</span> rather than the local MP/MLA or Manifesto.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-blue-400 text-blue-700">Nehru</Badge>
                        <Badge variant="outline" className="border-blue-400 text-blue-700">Indira</Badge>
                        <Badge variant="outline" className="border-blue-400 text-blue-700">Vajpayee</Badge>
                        <Badge variant="outline" className="border-blue-400 text-blue-700">Modi</Badge>
                    </div>
                </InfluenceCard>

                <InfluenceCard
                    title="Incumbency Factor"
                    icon={<ThumbsUp size={120} className="text-green-600" />}
                    color="border-green-600"
                    className="bg-green-50"
                >
                    <div className="space-y-4">
                        <div className="bg-card p-3 rounded-lg border border-red-200">
                            <div className="flex items-center gap-2 mb-1 text-red-700 font-black"><ThumbsDown size={16} /> Anti-Incumbency</div>
                            <p className="text-xs">Voting <span className="underline">against</span> ruling party due to dissatisfaction.</p>
                        </div>
                        <div className="bg-card p-3 rounded-lg border border-green-200">
                            <div className="flex items-center gap-2 mb-1 text-green-700 font-black"><ThumbsUp size={16} /> Pro-Incumbency</div>
                            <p className="text-xs">New class of voters <span className="text-green-600 font-black">("Labharthi Varg")</span> voting for welfare delivery.</p>
                        </div>
                    </div>
                </InfluenceCard>
            </div>

            {/* PHASE 3: THE DARK SIDE & NEW AGE */}
            <PhaseHeader
                number="3"
                title="The Dark Side & New Age"
                color="bg-[#1e40af]"
                subtitle="Money, Muscle & Media"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <InfluenceCard
                    title="Money & Muscle Power"
                    icon={<Coins size={120} className="text-green-800" />}
                    color="border-green-800"
                    className="bg-[#dcfce7]"
                >
                    <ul className="list-disc pl-4 space-y-2 text-sm text-green-900 font-bold">
                        <li>Vote Buying: Cash/Liquor distribution.</li>
                        <li>High "Winnability" factor for rich candidates.</li>
                        <li>ADR reports show direct correlation between assets and winning chances.</li>
                    </ul>
                </InfluenceCard>

                <InfluenceCard
                    title="Media & Social Media"
                    icon={<Smartphone size={120} className="text-blue-800" />}
                    color="border-blue-800"
                    className="bg-blue-100"
                >
                    <div className="space-y-2 text-sm text-blue-900 font-bold">
                        <p><strong>Old Media:</strong> Agenda setting (TV/Papers).</p>
                        <p><strong>New Media:</strong> WhatsApp/Twitter "Echo Chambers" & Fake News.</p>
                        <div className="mt-4 pt-4 border-t border-blue-300">
                            <p className="flex items-center gap-2 text-pink-600 font-black"><Users size={16} /> The Silent Voter (Women)</p>
                            <p className="text-xs">Rising independent block often voting differently from men.</p>
                        </div>
                    </div>
                </InfluenceCard>
            </div>

            {/* FOOTER: NOTA */}
            <div className="mt-8 p-8 bg-muted border-4 border-slate-400 rounded-[2rem] relative overflow-hidden flex flex-col items-center text-center">
                <XCircle className="text-muted-foreground mb-4" size={48} />
                <h4 className="text-2xl font-black uppercase mb-2 text-muted-foreground">The NOTA Factor</h4>
                <p className="text-sm font-bold text-muted-foreground max-w-xl mb-4">
                    Expresses systemic dissatisfaction. High usage often seen in reserved constituencies or areas with left-wing extremism.
                </p>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#7c3aed] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_30px_-5px_rgba(124,58,237,0.5)]"
                        : "bg-[#7c3aed] hover:bg-purple-900 text-white shadow-[0_10px_40px_-10px_rgba(124,58,237,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <CheckCircle2 size={32} className="animate-bounce" />
                            PSEPHOLOGIST CERTIFIED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <LayoutGrid size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER {chapterNumber} COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-muted-foreground font-bold italic tracking-widest text-center uppercase">Caste • Religion • Labharthi • Media.</p>
            </div>
        </ScrapbookContainer>
    );
}
