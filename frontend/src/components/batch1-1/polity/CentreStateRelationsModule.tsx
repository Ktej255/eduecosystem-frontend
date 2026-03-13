"use client";

import React from "react";
import {
    Settings, FileText, Globe, Gavel, Shield,
    AlertTriangle, CheckCircle2, XCircle, ArrowRight,
    Landmark, Coins, Briefcase, Activity,
    Network, Scale, Zap, Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CentreStateRelationsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: number | string;
}

// --- Design System: The Federal Gearbox ---

const GearboxContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#0f172a] min-h-screen p-4 md:p-8 font-sans selection:bg-purple-300 selection:text-purple-900 relative text-slate-200">
        {/* Schematic Grid Texture */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
            {children}
        </div>
    </div>
);

const SectionPanel = ({ title, icon: Icon, color, children }: { title: string, icon: any, color: "purple" | "teal" | "gold", children: React.ReactNode }) => {
    const styles = {
        purple: {
            border: "border-purple-500/50",
            bg: "bg-purple-950/20",
            text: "text-purple-300",
            badge: "bg-purple-600",
            title: "text-purple-200"
        },
        teal: {
            border: "border-teal-500/50",
            bg: "bg-teal-950/20",
            text: "text-teal-300",
            badge: "bg-teal-600",
            title: "text-teal-200"
        },
        gold: {
            border: "border-amber-500/50",
            bg: "bg-amber-950/20",
            text: "text-amber-300",
            badge: "bg-amber-600",
            title: "text-amber-200"
        }
    };

    const s = styles[color];

    return (
        <div className={`border-2 ${s.border} ${s.bg} rounded-xl overflow-hidden relative backdrop-blur-sm`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50"></div>

            <div className="p-6 border-b border-white/5 flex items-center gap-3">
                <div className={`p-2 rounded-lg border ${s.border} bg-black/20 ${s.text}`}>
                    <Icon size={24} />
                </div>
                <h2 className={`text-2xl font-serif font-bold ${s.title} tracking-wider`}>{title}</h2>
            </div>

            <div className="p-6 space-y-6">
                {children}
            </div>
        </div>
    );
};

const SchematicCard = ({ title, children, icon: Icon, pyq }: { title: string, children: React.ReactNode, icon?: any, pyq?: boolean }) => (
    <div className="bg-slate-900/50 border border-slate-700 p-4 rounded-lg hover:border-slate-500 transition-all group relative">
        {pyq && <Badge className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-[10px]">PYQ</Badge>}
        <div className="flex items-start gap-3">
            {Icon && <Icon size={20} className="text-muted-foreground mt-1 group-hover:text-white transition-colors" />}
            <div className="flex-1">
                <h3 className="font-bold text-slate-200 mb-2 font-serif text-lg">{title}</h3>
                <div className="text-sm text-muted-foreground font-handwriting leading-relaxed space-y-2">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

const GearChain = () => (
    <div className="flex items-center justify-center gap-2 py-4 opacity-50">
        <Settings size={24} className="animate-[spin_4s_linear_infinite]" />
        <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
        <Settings size={32} className="animate-[spin_4s_linear_infinite_reverse]" />
        <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
        <Settings size={24} className="animate-[spin_4s_linear_infinite]" />
    </div>
);

export default function CentreStateRelationsModule({ onComplete, isCompleted }: CentreStateRelationsModuleProps) {
    return (
        <GearboxContainer>
            {/* HERO */}
            <div className="bg-slate-900/80 border border-slate-700 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                {/* Decorative Gears */}
                <div className="absolute right-0 top-0 p-8 opacity-10">
                    <Settings size={200} className="text-blue-500" />
                </div>
                <div className="absolute left-[-50px] bottom-[-50px] opacity-10">
                    <Settings size={150} className="text-purple-500" />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="bg-slate-800 p-4 rounded-full border-2 border-slate-600 shadow-xl mb-6">
                        <Network size={48} className="text-blue-400" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black font-serif text-white tracking-tight mb-4">
                        The Federal Gearbox
                    </h1>
                    <p className="text-blue-200 max-w-2xl text-lg font-handwriting italic">
                        "Interlocking legislative, administrative, and financial gears driving the Union."
                    </p>
                </div>
            </div>

            {/* PHASE 1: LEGISLATIVE RELATIONS (PURPLE) */}
            <SectionPanel title="Phase 1: Legislative Relations (Art 245-255)" icon={Gavel} color="purple">
                <div className="grid md:grid-cols-2 gap-6">
                    <SchematicCard title="Territorial Extent" icon={Globe}>
                        <p><strong className="text-purple-300">Parliament:</strong> Whole India. Extra-territorial power too.</p>
                        <p><strong className="text-purple-300">State:</strong> Within State only. No extra-territorial power (unless nexus exists).</p>
                    </SchematicCard>

                    <SchematicCard title="The 3 Lists (7th Schedule)" icon={FileText} pyq>
                        <ul className="space-y-1">
                            <li><strong className="text-purple-300">Union List:</strong> 100 Subjects (Defence, Banking).</li>
                            <li><strong className="text-purple-300">State List:</strong> 61 Subjects (Police, Agriculture).</li>
                            <li><strong className="text-purple-300">Concurrent List:</strong> 52 Subjects (Education).</li>
                        </ul>
                        <p className="border-t border-white/10 pt-2 mt-2">
                            <strong className="text-purple-300">Residuary Power:</strong> Vested in Parliament (Art 248). <span className="text-red-400 font-bold">[PYQ]</span>
                        </p>
                    </SchematicCard>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                    <h3 className="text-center font-serif text-purple-200 font-bold mb-4 flex items-center justify-center gap-2">
                        <Zap size={18} /> Parliament's Power Over State List (5 Exceptions)
                    </h3>
                    <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-2 text-center text-xs font-handwriting text-purple-100">
                        <div className="bg-purple-900/40 p-2 rounded border border-purple-500/20">
                            <strong>1. National Interest (Art 249)</strong><br />RS Resolution (2/3rd). <span className="text-red-400 font-bold">[PYQ]</span>
                        </div>
                        <div className="bg-purple-900/40 p-2 rounded border border-purple-500/20">
                            <strong>2. National Emergency (Art 250)</strong><br />During Emergency.
                        </div>
                        <div className="bg-purple-900/40 p-2 rounded border border-purple-500/20">
                            <strong>3. State Request (Art 252)</strong><br />2+ States request.
                        </div>
                        <div className="bg-purple-900/40 p-2 rounded border border-purple-500/20">
                            <strong>4. Int. Agreements (Art 253)</strong><br />To implement treaties. <span className="text-red-400 font-bold">[PYQ]</span>
                        </div>
                        <div className="bg-purple-900/40 p-2 rounded border border-purple-500/20">
                            <strong>5. President's Rule (Art 356)</strong><br />State suspended.
                        </div>
                    </div>
                </div>

                <SchematicCard title="Centre's Control (Veto)" icon={Shield}>
                    <p><strong>Governor's Reservation:</strong> Can reserve state bills for President (Art 200).</p>
                    <p><strong>President's Veto:</strong> Absolute veto over state bills (Art 201).</p>
                </SchematicCard>
            </SectionPanel>

            <GearChain />

            {/* PHASE 2: ADMINISTRATIVE RELATIONS (TEAL) */}
            <SectionPanel title="Phase 2: Administrative Relations (Art 256-263)" icon={Briefcase} color="teal">
                <div className="grid md:grid-cols-2 gap-6">
                    <SchematicCard title="Obligations & Directions" icon={Activity}>
                        <p><strong className="text-teal-300">Rule (Art 256):</strong> State must ensure compliance with Parliament's laws.</p>
                        <div className="bg-red-900/30 p-2 rounded border border-red-500/30 mt-2">
                            <strong className="text-red-300 flex items-center gap-1"><AlertTriangle size={12} /> The Penalty (Art 365):</strong>
                            Failure to comply = Ground for President's Rule (Art 356). <span className="text-red-400 font-bold">[PYQ]</span>
                        </div>
                    </SchematicCard>

                    <div className="space-y-4">
                        <SchematicCard title="All-India Services (Art 312)" icon={Users} pyq>
                            <p>IAS, IPS, IFoS. Recruited by Centre, Posted in States.</p>
                            <p><strong>Creation:</strong> Rajya Sabha can create new AIS by 2/3rd majority.</p>
                        </SchematicCard>

                        <SchematicCard title="Inter-State Council (Art 263)" icon={Network}>
                            <p>Established by President to investigate common interest subjects.</p>
                            <p><strong>First Setup:</strong> 1990 (Sarkaria Comm. recommendation).</p>
                        </SchematicCard>
                    </div>
                </div>
            </SectionPanel>

            <GearChain />

            {/* PHASE 3: FINANCIAL RELATIONS (GOLD) */}
            <SectionPanel title="Phase 3: Financial Relations (Art 268-293)" icon={Coins} color="gold">
                <div className="grid md:grid-cols-2 gap-6">
                    <SchematicCard title="Taxing Powers & GST" icon={Landmark}>
                        <p><strong>Art 265:</strong> No tax without authority of law.</p>
                        <div className="bg-amber-900/30 p-2 rounded border border-amber-500/30 mt-2 space-y-2">
                            <p><strong className="text-amber-300">GST (101st AA):</strong> Concurrent power (Art 246A).</p>
                            <p><strong className="text-amber-300">GST Council (Art 279A):</strong></p>
                            <ul className="list-disc pl-4 text-xs marker:text-amber-500">
                                <li>Chair: Union FM. <span className="text-red-400 font-bold">[PYQ]</span></li>
                                <li>Voting: Centre (1/3), States (2/3). Decision 3/4 majority.</li>
                            </ul>
                        </div>
                    </SchematicCard>

                    <div className="space-y-4">
                        <SchematicCard title="Grants-in-Aid" icon={Coins}>
                            <p><strong className="text-amber-300">Statutory (Art 275):</strong> "Charged" on CFI. Need-based. (FC advises).</p>
                            <p><strong className="text-amber-300">Discretionary (Art 282):</strong> For public purpose. Not binding.</p>
                        </SchematicCard>

                        <SchematicCard title="Finance Commission (Art 280)" icon={Scale} pyq>
                            <p><strong>Appt:</strong> By President every 5 years.</p>
                            <p><strong>Function:</strong> Recommends distribution of taxes (Vertical & Horizontal).</p>
                            <p><strong>Status:</strong> Quasi-judicial. Recommendations are <strong>Advisory</strong>.</p>
                        </SchematicCard>
                    </div>
                </div>
            </SectionPanel>


            {/* FOOTER: THE TENSION POINTS */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-lg border-l-4 border-blue-500">
                            <div className="text-sm">
                                <strong className="text-blue-400 block mb-1">Sarkaria Commission (1983)</strong>
                                <span className="text-slate-300 italic">"Centre should be strong but not authoritarian." Opposed deleting Art 356.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-lg border-l-4 border-purple-500">
                            <div className="text-sm">
                                <strong className="text-purple-400 block mb-1">Punchhi Commission (2007)</strong>
                                <span className="text-slate-300 italic">"Cooperative Federalism". Recommended impeachment of Governor.</span>
                            </div>
                        </div>
                    </div>

                    <div className="shrink-0 text-center">
                        <Button
                            onClick={onComplete}
                            disabled={isCompleted}
                            className={`
                    px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all border-2
                    ${isCompleted ? 'bg-green-700 hover:bg-green-800 border-green-500 text-white' : 'bg-slate-700 hover:bg-slate-600 border-slate-500 text-slate-200'}
                `}
                        >
                            {isCompleted ?
                                <span className="flex items-center gap-2"><CheckCircle2 /> Gears Synced</span> :
                                <span className="flex items-center gap-2"><Settings className="animate-spin" /> Mesh the Gears</span>
                            }
                        </Button>
                    </div>
                </div>
            </div>
        </GearboxContainer>
    );
}
