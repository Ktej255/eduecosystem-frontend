"use client";

import React, { useState } from "react";
import {
    Search, Scroll, Scale, Gavel, Globe,
    Users, Heart, Shield, Flag, Landmark,
    BookOpen, CheckCircle2, ChevronDown, BadgeCheck,
    Feather, AlertTriangle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PreambleModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: number | string;
}

// --- Design System: The ID Card & The Lens ---

const IDCardContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#fdfbf7] min-h-screen p-4 md:p-8 font-serif">
        <div className="max-w-5xl mx-auto space-y-12">
            {children}
        </div>
    </div>
);

const HeroPreamble = () => (
    <div className="relative bg-[#fffdf5] border-[3px] border-double border-amber-300 p-8 md:p-12 shadow-xl rounded-sm max-w-3xl mx-auto text-center relative overflow-hidden">
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-600 rounded-tl-3xl opacity-50"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-600 rounded-tr-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-600 rounded-bl-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-amber-600 rounded-br-3xl opacity-50"></div>

        {/* Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none"></div>

        <div className="relative z-10">
            <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-2 opacity-80">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Emblem" className="w-full h-full grayscale brightness-50 sepia" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-widest text-[#5a4a42] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    THE PREAMBLE
                </h1>
                <div className="text-xs uppercase tracking-[0.3em] text-amber-800 font-bold mb-8">
                    Identity Card of the Constitution
                </div>
            </div>

            <div className="text-lg md:text-xl leading-relaxed text-foreground font-medium space-y-4 font-serif italic text-justify px-4 md:px-12">
                <p>
                    <strong className="text-3xl text-amber-900 block text-center mb-2 not-italic">WE, THE PEOPLE OF INDIA,</strong>
                    having solemnly resolved to constitute India into a
                    <span className="text-amber-800 font-bold mx-1">SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC</span>
                    and to secure to all its citizens:
                </p>
                <div className="py-2 pl-8 border-l-2 border-amber-200 space-y-1 text-base md:text-lg">
                    <div><strong className="text-indigo-900">JUSTICE</strong>, social, economic and political;</div>
                    <div><strong className="text-indigo-900">LIBERTY</strong> of thought, expression, belief, faith and worship;</div>
                    <div><strong className="text-indigo-900">EQUALITY</strong> of status and of opportunity;</div>
                    <div>and to promote among them all</div>
                    <div><strong className="text-indigo-900">FRATERNITY</strong> assuring the dignity of the individual and the unity and integrity of the Nation;</div>
                </div>
                <p className="text-center text-base mt-6">
                    IN OUR CONSTITUENT ASSEMBLY this <span className="font-bold underline decoration-amber-400 decoration-2">twenty-sixth day of November, 1949</span>, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.
                </p>
            </div>
        </div>
    </div>
);

const LensCard = ({ title, icon: Icon, children, color = "bg-card", pyq = false }: { title: string, icon: any, children: React.ReactNode, color?: string, pyq?: boolean }) => (
    <div className={`relative group ${color} border border-border rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
        {/* Lens Effect Visual */}
        <div className="absolute -top-6 left-6 bg-card p-2 rounded-full shadow-lg border border-slate-100 group-hover:scale-110 transition-transform">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-2 rounded-full">
                <Icon size={24} className="text-indigo-800" />
            </div>
            {/* Handle of lens */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-4 bg-slate-300 -z-10 group-hover:h-6 transition-all"></div>
        </div>

        {pyq && (
            <div className="absolute top-2 right-2 flex gap-1">
                <Badge className="bg-red-50 text-red-600 border-red-100 hover:bg-red-100 uppercase text-[10px] font-black tracking-widest">
                    PYQ Hit
                </Badge>
            </div>
        )}

        <h3 className="mt-6 text-xl font-bold text-foreground mb-3 font-serif border-b border-indigo-50 pb-2">
            {title}
        </h3>
        <div className="text-sm text-muted-foreground leading-relaxed font-sans">
            {children}
        </div>
    </div>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <div className="relative flex items-center justify-center my-10">
        <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-amber-200"></div>
        </div>
        <div className="relative bg-[#fdfbf7] px-4">
            <span className="text-sm font-bold uppercase tracking-widest text-[#5a4a42] flex items-center gap-2">
                <Feather size={14} className="text-amber-600" /> {children}
            </span>
        </div>
    </div>
);

export default function PreambleModule({ onComplete, isCompleted }: PreambleModuleProps) {
    return (
        <IDCardContainer>
            {/* HERO */}
            <HeroPreamble />

            {/* --- PHASE 1: INGREDIENTS & SOURCE --- */}
            <SectionHeading>Phase 1: Ingredients & Source</SectionHeading>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Source Card */}
                <LensCard title="The Source" icon={Scroll} pyq>
                    <ul className="space-y-3">
                        <li className="flex gap-2">
                            <span className="font-bold text-indigo-900">Blueprint:</span>
                            <span>Based on <strong>"Objectives Resolution"</strong> moved by Nehru (Dec 13, 1946).</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-indigo-900">Amendment:</span>
                            <span>Amended ONCE by <strong>42nd AA, 1976</strong>.</span>
                        </li>
                        <li className="bg-indigo-50 p-2 rounded text-indigo-800 text-xs font-bold border border-indigo-100">
                            Added 3 Words: Socialist, Secular, Integrity.
                        </li>
                    </ul>
                </LensCard>

                {/* Ingredients Quadrant */}
                <LensCard title="The 4 Ingredients" icon={Users}>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-muted p-2 rounded border border-slate-100">
                            <div className="font-bold text-muted-foreground uppercase text-[10px]">Authority</div>
                            <div className="font-bold text-foreground">We, The People</div>
                        </div>
                        <div className="bg-amber-50 p-2 rounded border border-amber-100">
                            <div className="font-bold text-amber-400 uppercase text-[10px]">Nature</div>
                            <div className="font-bold text-amber-900 leading-tight">Sovereign, Socialist, Secular, Dem, Rep</div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded border border-blue-100">
                            <div className="font-bold text-blue-400 uppercase text-[10px]">Objectives</div>
                            <div className="font-bold text-blue-900">Justice, Liberty, Equality, Fraternity</div>
                        </div>
                        <div className="bg-muted p-2 rounded border border-slate-100">
                            <div className="font-bold text-muted-foreground uppercase text-[10px]">Date</div>
                            <div className="font-bold text-foreground">Nov 26, 1949</div>
                        </div>
                    </div>
                </LensCard>
            </div>

            {/* --- PHASE 2: NATURE OF STATE --- */}
            <SectionHeading>Phase 2: Nature of the State</SectionHeading>

            <div className="grid md:grid-cols-3 gap-6">
                <LensCard title="Sovereign" icon={Flag}>
                    <p className="mb-2">India is neither a dependency nor a dominion. It is an <strong>Independent State</strong>.</p>
                    <ul className="list-disc pl-4 opacity-80 text-xs space-y-1">
                        <li>Can acquire foreign territory.</li>
                        <li>Can cede a part of territory.</li>
                        <li>UN/Commonwealth membership does NOT affect sovereignty.</li>
                    </ul>
                </LensCard>

                <LensCard title="Socialist" icon={Heart} pyq>
                    <div className="mb-2">
                        <Badge variant="outline" className="mb-1 text-[10px] border-amber-400 text-amber-700 bg-amber-50">Added by 42nd AA, 1976</Badge>
                    </div>
                    <p><strong>Brand:</strong> "Democratic Socialism" (Marxism + Gandhism blend, leaning to Gandhism).</p>
                    <p className="mt-2 text-xs opacity-70">
                        <strong>Goal:</strong> End poverty, ignorance, inequality.
                        <br />(Diluted by NEP 1991).
                    </p>
                </LensCard>

                <LensCard title="Secular" icon={Globe} pyq>
                    <div className="mb-2">
                        <Badge variant="outline" className="mb-1 text-[10px] border-amber-400 text-amber-700 bg-amber-50">Added by 42nd AA, 1976</Badge>
                    </div>
                    <p><strong>"Positive Secularism":</strong> All religions have same status and support.</p>
                    <div className="mt-2 bg-muted p-2 rounded text-xs">
                        <strong>Cases:</strong> S.R. Bommai (1994) - "Basic Structure".
                    </div>
                </LensCard>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
                <LensCard title="Democratic" icon={Users}>
                    <p><strong>Type:</strong> Representative Parliamentary Democracy.</p>
                    <div className="mt-2 text-xs text-muted-foreground">
                        <strong>Note:</strong> Tools of Direct Democracy (Referendum, Recall etc.) are NOT used in India.
                    </div>
                </LensCard>
                <LensCard title="Republic" icon={Landmark}>
                    <p><strong>Meaning:</strong> Head of State is <strong>ELECTED</strong> (President), not Hereditary (King).</p>
                    <div className="mt-2 text-xs text-muted-foreground">
                        <strong>Implication:</strong> Political sovereignty in people, no privileged class.
                    </div>
                </LensCard>
            </div>


            {/* --- PHASE 3: OBJECTIVES & AMENABILITY --- */}
            <SectionHeading>Phase 3: Objectives & The Debate</SectionHeading>

            {/* Objectives List */}
            <div className="bg-card rounded-xl shadow-sm border border-border p-6 mb-8">
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="p-3 bg-muted rounded text-center">
                        <Scale className="mx-auto mb-2 text-indigo-700" size={20} />
                        <div className="font-bold text-indigo-900 text-sm">JUSTICE</div>
                        <div className="text-[10px] uppercase font-bold text-muted-foreground mt-1">Russian Rev</div>
                        <div className="text-xs text-muted-foreground mt-1">Social, Econ, Pol</div>
                    </div>
                    <div className="p-3 bg-muted rounded text-center">
                        <Feather className="mx-auto mb-2 text-indigo-700" size={20} />
                        <div className="font-bold text-indigo-900 text-sm">LIBERTY</div>
                        <div className="text-[10px] uppercase font-bold text-muted-foreground mt-1">French Rev</div>
                        <div className="text-xs text-muted-foreground mt-1">Thought, Expr, Faith</div>
                    </div>
                    <div className="p-3 bg-muted rounded text-center">
                        <Users className="mx-auto mb-2 text-indigo-700" size={20} />
                        <div className="font-bold text-indigo-900 text-sm">EQUALITY</div>
                        <div className="text-[10px] uppercase font-bold text-muted-foreground mt-1">French Rev</div>
                        <div className="text-xs text-muted-foreground mt-1">Status, Opportunity</div>
                    </div>
                    <div className="p-3 bg-muted rounded text-center">
                        <Heart className="mx-auto mb-2 text-indigo-700" size={20} />
                        <div className="font-bold text-indigo-900 text-sm">FRATERNITY</div>
                        <div className="text-[10px] uppercase font-bold text-muted-foreground mt-1">French Rev</div>
                        <div className="text-xs text-muted-foreground mt-1">Dignity, Unity</div>
                    </div>
                </div>
            </div>

            {/* The Great Debate & Amenability */}
            <div className="grid md:grid-cols-2 gap-6">
                <LensCard title="Is it Part of Constitution?" icon={Gavel} pyq color="bg-red-50/30">
                    <div className="space-y-4 relative pl-4 border-l-2 border-red-200 custom-timeline">
                        <div className="relative">
                            <div className="text-xs font-bold text-muted-foreground">1960</div>
                            <div className="font-bold text-red-800">Berubari Union Case</div>
                            <div className="text-xs text-red-600">SC: "NOT a part"</div>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[21px] top-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            <div className="text-xs font-bold text-muted-foreground">1973</div>
                            <div className="font-bold text-green-800">Kesavananda Bharati</div>
                            <div className="text-xs text-green-700 font-bold">SC: "IS an integral part"</div>
                        </div>
                        <div className="relative">
                            <div className="text-xs font-bold text-muted-foreground">1995</div>
                            <div className="font-bold text-foreground">LIC of India Case</div>
                            <div className="text-xs text-muted-foreground">SC: "Integral part"</div>
                        </div>
                    </div>
                    <div className="mt-4 p-2 bg-card rounded border border-red-100 text-[10px] text-muted-foreground italic">
                        <strong>Note:</strong> Non-Justiciable & Neither source of power nor prohibition.
                    </div>
                </LensCard>

                <LensCard title="Amenability (Art 368)" icon={CheckCircle2}>
                    <div className="text-center py-6">
                        <div className="text-4xl font-black text-green-600 mb-2">YES</div>
                        <p className="text-sm font-bold text-muted-foreground">It can be amended.</p>
                        <p className="text-xs text-muted-foreground mt-1">Rule: Kesavananda Bharati Case (1973)</p>
                    </div>
                    <div className="bg-amber-100 text-amber-900 p-3 rounded text-xs font-bold text-center border border-amber-200">
                        Condition: Cannot alter "Basic Structure".
                    </div>
                    <div className="text-center mt-4 text-xs text-muted-foreground">
                        Amended only ONCE (42nd AA, 1976).
                    </div>
                </LensCard>
            </div>


            {/* PRACTICE ARENA */}
            <section className="mb-20 max-w-5xl mx-auto">
                <div className="text-center mb-8">
                    <span className="bg-amber-50 text-amber-900 border border-amber-200 px-4 py-1 text-sm font-bold uppercase tracking-widest rounded-full shadow-md inline-flex items-center gap-2">
                        <Flag size={14} /> Practice Arena
                    </span>
                </div>
            </section>

            {/* FOOTER */}
            <div className="mt-12 text-center pb-8">
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`
            relative px-8 py-6 text-lg font-bold rounded-full shadow-xl transition-all font-serif
            ${isCompleted ? 'bg-amber-700 hover:bg-amber-800 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'}
          `}
                >
                    {isCompleted ?
                        <span className="flex items-center gap-2"><BadgeCheck /> Identity Verified</span> :
                        <span className="flex items-center gap-2"><BookOpen /> Verify Preamble Study</span>
                    }
                </Button>
            </div>
        </IDCardContainer>
    );
}
