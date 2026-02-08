"use client";

import React from "react";
import {
    Globe, Crown, Award, Landmark, Building2,
    Scale, Gavel, BookOpen, Flag, Map,
    Users, Briefcase, Zap, ShieldCheck,
    CheckCircle2, AlertTriangle, ArrowRight,
    Search, Vote, XCircle, Home
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface WorldConstitutionsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#f3f4f6] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-indigo-100 selection:text-indigo-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#374151] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]">
            {/* Hand-drawn SVG Border Overlay */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <rect x="20" y="20" width="960" height="960" rx="40" ry="40" fill="none" stroke="#374151" strokeWidth="3" strokeDasharray="10 10" />
            </svg>
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-red-500 via-blue-500 to-orange-500 opacity-60"></div>
            {children}
        </div>
    </div>
);

const ComparisonCard = ({ title, country, icon, color, features }: { title: string, country: string, icon: React.ReactNode, color: string, features: { label: string, desc: string }[] }) => (
    <div className={`bg-white border-2 ${color.replace('text-', 'border-')} rounded-2xl p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300`}>
        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            {icon}
        </div>
        <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-full ${color.replace('text-', 'bg-').replace('600', '100')} ${color}`}>
                {icon}
            </div>
            <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">{title}</span>
                <h3 className={`text-2xl font-black ${color}`}>{country}</h3>

            </div>
        </div>

        <div className="space-y-4">
            {features.map((feature, idx) => (
                <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-xs font-black text-slate-500 uppercase mb-1">{feature.label}</p>
                    <p className="text-sm font-bold text-slate-800">{feature.desc}</p>
                </div>
            ))}
        </div>
    </div>
);

const VsBadge = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border-4 border-slate-200">
        <span className="font-black text-slate-400 text-xl block w-8 h-8 flex items-center justify-center">VS</span>
    </div>
);

const PhaseHeader = ({ number, title, color, subtitle }: { number: string, title: string, color: string, subtitle?: string }) => (
    <div className="flex flex-col gap-2 my-10">
        <div className="flex items-center gap-4">
            <div className={`w-12 h-12 ${color} text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg rotate-3`}>
                {number}
            </div>
            <h2 className={`text-3xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
                {title}
            </h2>
            <div className={`h-[4px] flex-1 ${color} opacity-20 rounded-full`}></div>
        </div>
        {subtitle && <p className="text-slate-500 font-bold italic ml-16 text-lg">{subtitle}</p>}
    </div>
);

export default function WorldConstitutionsModule({ onComplete, isCompleted, chapterNumber = "95" }: WorldConstitutionsModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#1f2937] text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden mb-12 border-4 border-slate-900">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -ml-20 -mb-20"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Chapter {chapterNumber}</Badge>
                        <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">Comparative Politics</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        The Global <span className="text-blue-400">Grid</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                        "A comparative analysis of the world's major constitutions: <span className="text-red-400 font-bold">UK</span>, <span className="text-blue-400 font-bold">USA</span>, <span className="text-purple-400 font-bold">France</span>, <span className="text-pink-400 font-bold">Japan</span> & <span className="text-white font-bold">India</span>."
                    </p>
                </div>
                <div className="absolute bottom-6 right-6 opacity-30">
                    <Globe size={160} className="text-slate-600" />
                </div>
            </div>

            {/* PHASE 1: UK vs INDIA */}
            <PhaseHeader
                number="1"
                title="The British Model"
                color="bg-red-600"
                subtitle="Parliamentary Supremacy vs Constitutional Supremacy"
            />

            <div className="relative grid md:grid-cols-2 gap-8 md:gap-12">
                <ComparisonCard
                    title="The Parent"
                    country="United Kingdom"
                    icon={<Crown size={40} />}
                    color="text-red-700"
                    features={[
                        { label: "Constitution", desc: "Unwritten (Evolved). Based on Conventions." },
                        { label: "Supremacy", desc: "Parliamentary Sovereignty (Can make/unmake ANY law)." },
                        { label: "Head of State", desc: "Monarchy (Hereditary)." }
                    ]}
                />

                <div className="hidden md:block"><VsBadge /></div>

                <ComparisonCard
                    title="The Child"
                    country="India"
                    icon={<Landmark size={40} />}
                    color="text-orange-600"
                    features={[
                        { label: "Constitution", desc: "Written (Enacted). Longest in the World." },
                        { label: "Supremacy", desc: "Constitutional Supremacy (Judicial Review limits Parliament)." },
                        { label: "Head of State", desc: "Republic (Elected President)." }
                    ]}
                />
            </div>

            {/* PHASE 2: USA vs INDIA */}
            <PhaseHeader
                number="2"
                title="The American Model"
                color="bg-blue-600"
                subtitle="Due Process vs Procedure Established by Law"
            />

            <div className="relative grid md:grid-cols-2 gap-8 md:gap-12">
                <ComparisonCard
                    title="The Rival"
                    country="USA"
                    icon={<Building2 size={40} />}
                    color="text-blue-700"
                    features={[
                        { label: "Separation of Powers", desc: "Rigid. Executive is NOT part of Legislature." },
                        { label: "Judiciary", desc: "Due Process of Law (Checks fairness of law)." },
                        { label: "Citizenship", desc: "Dual Citizenship (National + State)." }
                    ]}
                />

                <div className="hidden md:block"><VsBadge /></div>

                <ComparisonCard
                    title="The Hybrid"
                    country="India"
                    icon={<Briefcase size={40} />}
                    color="text-orange-600"
                    features={[
                        { label: "Separation of Powers", desc: "Flexible. Ministers MUST be MPs." },
                        { label: "Judiciary", desc: "Procedure Established by Law (Evolving towards Due Process)." },
                        { label: "Citizenship", desc: "Single Citizenship (No State citizenship)." }
                    ]}
                />
            </div>

            {/* PHASE 3: THE OTHERS */}
            <PhaseHeader
                number="3"
                title="The Others"
                color="bg-purple-600"
                subtitle="France, Japan & Switzerland"
            />

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Flag className="text-purple-600" />
                        <h4 className="font-black text-xl text-purple-800">France</h4>
                    </div>
                    <p className="text-sm font-bold text-slate-700 mb-2">Semi-Presidential System</p>
                    <p className="text-sm text-slate-600">Powerful President (Directly Elected) + Prime Minister.</p>
                    <Badge className="mt-4 bg-purple-200 text-purple-800">Admin Courts</Badge>
                </div>

                <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Home className="text-pink-600" /> {/* Cherry Blossom metaphor */}
                        <h4 className="font-black text-xl text-pink-800">Japan</h4>
                    </div>
                    <p className="text-sm font-bold text-slate-700 mb-2">Unitary State</p>
                    <p className="text-sm text-slate-600">Constitutional Monarchy. Article 9: Renunciation of War.</p>
                    <Badge className="mt-4 bg-pink-200 text-pink-800">Diet (Parliament)</Badge>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Vote className="text-green-600" />
                        <h4 className="font-black text-xl text-green-800">Switzerland</h4>
                    </div>
                    <p className="text-sm font-bold text-slate-700 mb-2">Direct Democracy</p>
                    <p className="text-sm text-slate-600">Referendum, Initiative, Recall, Plebiscite.</p>
                    <Badge className="mt-4 bg-green-200 text-green-800">People Power</Badge>
                </div>
            </div>

            {/* CRITIQUE SECTION */}
            <div className="mt-12 bg-slate-100 border-l-8 border-slate-400 p-8 rounded-r-xl italic relative">
                <div className="absolute -left-4 -top-4 bg-slate-800 text-white p-2 rounded-full">
                    <Search size={24} />
                </div>
                <h4 className="font-black text-lg text-slate-800 mb-2">"Bag of Borrowing?"</h4>
                <p className="text-slate-600 mb-4">India is often criticized for borrowing from other constitutions.</p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200 overflow-hidden">
                        {/* Placeholder for Ambedkar Image or Icon */}
                        <span className="font-black text-orange-600">B.R.</span>
                    </div>
                    <div>
                        <p className="font-bold text-slate-800">Dr. B.R. Ambedkar's Defense:</p>
                        <p className="text-sm text-slate-600">"There is nothing to be ashamed of in borrowing. It involves no plagiarism. Nobody holds any patent rights in the fundamental ideas of a Constitution."</p>
                    </div>
                </div>
            </div>


            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center pt-8 pb-12 font-['Kalam'] border-t-4 border-slate-200 border-dashed">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#374151] hover:bg-black text-white shadow-[0_10px_40px_-10px_rgba(55,65,81,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <Award size={32} className="animate-bounce text-yellow-300" />
                            SYLLABUS COMPLETED!
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Globe size={32} className="group-hover:rotate-180 transition-transform duration-700" />
                            COMPLETE FINAL CHAPTER
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-slate-400 font-bold italic tracking-widest text-center uppercase">From UK to Japan • The Global Perspective</p>
            </div>

        </ScrapbookContainer>
    );
}
