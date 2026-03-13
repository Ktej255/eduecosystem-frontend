"use client";

import React from "react";
import {
    Map, MapPin, Landmark,
    Globe, ShieldCheck, Heart,
    Sprout, Handshake, Info,
    History, Ban, Scale,
    CheckCircle2, BookOpen, UserCheck,
    SearchCheck, Sparkles, Zap,
    ArrowRight, MessageSquare,
    Coins, TrendingUp, Target,
    FileText, LayoutGrid, Award,
    Palmtree, Mountain, Umbrella,
    Layers, Compass
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SpecialProvisionsStatesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: number | string;
}

const ScrapbookContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#eff6ff] min-h-screen p-4 md:p-8 font-['Kalam'] selection:bg-blue-100 selection:text-blue-950">
        <div className="max-w-5xl mx-auto space-y-12 bg-[#ffffff] rounded-3xl p-6 shadow-2xl border-4 border-[#2563eb] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
            {/* Hand-drawn SVG Border Overlay (Subtle) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 20 20 L 980 20 L 980 980 L 20 980 Z" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="12 10" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-2 bg-[#2563eb] opacity-40"></div>
            {children}
        </div>
    </div>
);

const RegionalCard = ({ title, children, color = "border-[#2563eb]", className = "" }: { title: string, children: React.ReactNode, color?: string, className?: string }) => (
    <div className={`bg-card border-2 ${color} rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(37,99,235,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
        <div className="absolute top-0 right-0 p-2 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
            <MapPin size={64} className={color.replace('border-', 'text-')} />
        </div>
        <h3 className={`text-xl font-black mb-4 flex items-center gap-2 ${color.replace('border-', 'text-')}`}>
            {title}
        </h3>
        <div className="space-y-4 text-foreground relative z-10 font-bold">
            {children}
        </div>
    </div>
);

const PhaseHeader = ({ number, title, color }: { number: string, title: string, color: string }) => (
    <div className="flex items-center gap-4 my-8">
        <div className={`w-12 h-12 ${color} text-white rounded-lg shadow-xl flex items-center justify-center font-black text-xl rotate-[-2deg] border-2 border-white`}>
            {number}
        </div>
        <h2 className={`text-2xl font-black uppercase tracking-tight ${color.replace('bg-', 'text-')}`}>
            {title}
        </h2>
        <div className={`h-[2px] flex-1 ${color} opacity-20`}></div>
    </div>
);

export default function SpecialProvisionsStatesModule({ onComplete, isCompleted, chapterNumber = "78" }: SpecialProvisionsStatesModuleProps) {
    return (
        <ScrapbookContainer>
            {/* HERO SECTION */}
            <div className="relative bg-[#2563eb] border-4 border-[#1e40af] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(37,99,235,0.3)] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-card/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#1d4ed8] text-white px-4 py-1 text-lg border-2 border-white shadow-md">Chapter {chapterNumber}</Badge>
                        <div className="h-[2px] w-12 bg-card/30"></div>
                        <span className="text-blue-100 font-bold uppercase tracking-widest text-sm italic underline decoration-white">Asymmetric Federalism</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        The Alphabet <br /> <span className="text-[#facc15] italic drop-shadow-md">Map</span> <br />
                        <span className="text-blue-100 drop-shadow-md underline decoration-wavy decoration-[#facc15] italic text-3xl md:text-5xl">Articles 371 to 371-J</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl leading-relaxed italic opacity-90">
                        "Because not all states are equal. Special provisions to preserve unique cultures, handle regional imbalances, and protect tribal rights."
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 rotate-12 translate-y-1/4">
                    <Compass size={250} className="text-white" />
                </div>
            </div>

            {/* PHASE 1: THE ORIGIN */}
            <PhaseHeader number="1" title="Phase 1: The Origin (Development Boards)" color="bg-[#16a34a]" />

            <div className="relative group p-10 bg-emerald-50 border-4 border-[#16a34a] border-dashed rounded-[3rem] shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:opacity-20 transition-opacity"><Layers size={180} className="text-[#16a34a]" /></div>
                <div className="max-w-4xl mx-auto space-y-8 relative z-10 italic">
                    <h4 className="text-2xl font-black text-[#16a34a] italic text-center uppercase mb-6 underline decoration-[#16a34a] underline-offset-8">Article 371: Maharashtra & Gujarat</h4>

                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 space-y-4">
                            <div className="p-6 bg-card border-2 border-[#16a34a] rounded-2xl shadow-md">
                                <h5 className="font-black text-[#16a34a] mb-2 uppercase italic text-sm">Governor's Special Responsibility [PYQ]</h5>
                                <p className="text-xs font-bold text-muted-foreground leading-relaxed">
                                    Establishing separate <span className="text-emerald-700 underline">Development Boards</span> for Vidarbha, Marathwada, Rest of Maharashtra, and Saurashtra, Kutch, Rest of Gujarat.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-64 p-6 bg-[#16a34a] text-white rounded-[2rem] text-center shadow-xl rotate-2">
                            <FileText className="mx-auto mb-4" />
                            <p className="text-[10px] font-black uppercase">Report is placed before State Legislative Assembly <span className="underline">Annually</span>.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHASE 2: THE NORTH EAST */}
            <PhaseHeader number="2" title="Phase 2: The North East (Cultural & Security)" color="bg-[#b91c1c]" />

            <div className="grid md:grid-cols-1 gap-8">
                <RegionalCard title="The Alphabet Soup [High Yield]" color="border-red-600">
                    <div className="overflow-x-auto pt-4 italic">
                        <table className="w-full text-left text-xs font-bold border-collapse">
                            <thead>
                                <tr className="bg-muted text-foreground border-b-2 border-slate-900">
                                    <th className="p-3 uppercase">Article</th>
                                    <th className="p-3 uppercase">State</th>
                                    <th className="p-3 uppercase">Special Feature</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="p-3 text-red-700 font-extrabold">371-A</td>
                                    <td className="p-3 text-blue-700 underline">Nagaland</td>
                                    <td className="p-3 text-muted-foreground">Religious/social practices protected. Governor has L&O responsibility. [PYQ]</td>
                                </tr>
                                <tr className="bg-red-50/30">
                                    <td className="p-3 text-red-700 font-extrabold">371-B</td>
                                    <td className="p-3 text-blue-700 underline">Assam</td>
                                    <td className="p-3 text-muted-foreground">Committee of Assembly members from Tribal Areas.</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-red-700 font-extrabold">371-C</td>
                                    <td className="p-3 text-blue-700 underline">Manipur</td>
                                    <td className="p-3 text-muted-foreground">Committee of Assembly members from Hill Areas.</td>
                                </tr>
                                <tr className="bg-red-50/30">
                                    <td className="p-3 text-red-700 font-extrabold">371-F</td>
                                    <td className="p-3 text-blue-700 underline">Sikkim</td>
                                    <td className="p-3 text-muted-foreground">Assembly min 30 members. 1 seat reserved for Sangha (Monks).</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-red-700 font-extrabold">371-G</td>
                                    <td className="p-3 text-blue-700 underline">Mizoram</td>
                                    <td className="p-3 text-muted-foreground">Similar to Nagaland protector (Religious/Social).</td>
                                </tr>
                                <tr className="bg-red-50/30">
                                    <td className="p-3 text-red-700 font-extrabold">371-H</td>
                                    <td className="p-3 text-blue-700 underline">Arunachal</td>
                                    <td className="p-3 text-muted-foreground">Governor special responsibility for L&O. Min 30 members.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </RegionalCard>
            </div>

            {/* PHASE 3: THE SOUTH & GOA */}
            <PhaseHeader number="3" title="Phase 3: The South & Goa (Work & Study)" color="bg-[#1e40af]" />

            <div className="grid md:grid-cols-2 gap-8 italic">
                <div className="p-8 bg-blue-900 text-white rounded-[3rem] shadow-xl relative overflow-hidden group">
                    <Target className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:rotate-0 transition-transform" size={100} />
                    <h4 className="text-xl font-black mb-4 uppercase underline decoration-blue-400">Andhra & Telangana</h4>
                    <div className="space-y-4 text-xs font-bold leading-relaxed">
                        <p><span className="text-blue-300">371-D:</span> Equitable opportunities in <span className="underline decoration-wavy">Public Employment</span> & Education (Zonal System).</p>
                        <p><span className="text-blue-300">371-E:</span> Establishment of a Central University in AP.</p>
                    </div>
                </div>

                <div className="p-8 bg-amber-50 border-4 border-amber-500 rounded-[3rem] shadow-xl text-amber-900 group">
                    <Palmtree className="text-amber-500 mb-4" size={48} />
                    <h4 className="text-xl font-black mb-2 uppercase">Goa (Art 371-I)</h4>
                    <p className="text-sm font-bold opacity-80 leading-relaxed italic">
                        State Legislative Assembly shall consist of not less than <span className="text-amber-700 underline">30 Members</span>.
                    </p>
                </div>
            </div>

            <div className="p-10 bg-card border-4 border-[#2563eb] rounded-[3rem] shadow-2xl relative overflow-hidden group italic">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:scale-110 transition-transform"><Compass size={120} className="text-[#2563eb]" /></div>
                <h4 className="text-2xl font-black text-[#1e40af] uppercase mb-4 underline decoration-[#2563eb] underline-offset-8">Karnataka (Art 371-J) [98th AA, 2012]</h4>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <Badge className="bg-[#2563eb]">Region: Hyderabad-Karnataka</Badge>
                        <p className="text-xs font-bold text-muted-foreground leading-relaxed">
                            (Renamed Kalyana-Karnataka). Governor creates a separate <span className="text-blue-700 underline">Development Board</span>.
                            <br /><br />
                            Provides reservation in education and gov't posts for local people of this region.
                        </p>
                    </div>
                    <div className="p-6 bg-blue-50 border-2 border-dashed border-[#2563eb] rounded-3xl text-center">
                        <p className="text-xs font-black text-blue-900 italic">"Empowering the backward pockets of the Deccan."</p>
                    </div>
                </div>
            </div>

            {/* FOOTER: ASYMMETRIC FEDERALISM */}
            <div className="mt-8 p-10 bg-[#eff6ff] border-4 border-[#2563eb] rounded-[3rem] relative overflow-hidden shadow-inner group flex flex-col items-center text-center italic">
                <Scale className="text-[#2563eb] mb-6 animate-pulse" size={48} />
                <h4 className="text-3xl font-black text-[#1d4ed8] uppercase mb-4">Asymmetric Federalism</h4>
                <p className="text-sm font-bold text-muted-foreground max-w-2xl leading-relaxed">
                    "Equality of Federation does not mean Uniformity of Federation. India accommodates diversity through special powers for specific states."
                </p>
            </div>

            {/* COMPLETION BUTTON */}
            <div className="mt-16 text-center border-t-4 border-[#2563eb] pt-12 pb-12 font-['Kalam']">
                <Button
                    onClick={onComplete}
                    className={`px-12 py-8 text-2xl font-black rounded-3xl transition-all duration-500 group ${isCompleted
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)]"
                        : "bg-[#2563eb] hover:bg-blue-900 text-white shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)]"
                        }`}
                >
                    {isCompleted ? (
                        <span className="flex items-center gap-4">
                            <CheckCircle2 size={32} className="animate-bounce" />
                            FEDERAL MASTER GRADUATED
                        </span>
                    ) : (
                        <span className="flex items-center gap-4">
                            <Map size={32} className="group-hover:rotate-12 transition-transform" />
                            MARK CHAPTER 78 COMPLETE
                        </span>
                    )}
                </Button>
                <p className="mt-4 text-muted-foreground font-bold italic tracking-widest text-center uppercase">A to J • Regional Autonomy • Diversity.</p>
            </div>
        </ScrapbookContainer>
    );
}
