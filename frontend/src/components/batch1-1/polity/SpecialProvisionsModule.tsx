"use client";

import React, { useState } from "react";
import {
    FolderOpen, Folder, FileText,
    ShieldCheck, Map, Info,
    ArrowRight, Star, AlertCircle,
    BookOpen, Layers, Lock
} from "lucide-react";

interface SpecialProvisionsModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

// --- Design System: The Special Folders (Library Archive) ---

const ArchiveContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen p-4 md:p-8 font-sans relative overflow-hidden bg-[#1e293b] text-slate-100">
        {/* Navy Blue Folder Texture */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>

        <div className="max-w-4xl mx-auto space-y-16 relative z-10 font-handwriting">
            {children}
        </div>
    </div>
);

const FolderCard = ({ children, title, icon: Icon, color = "blue", className = "" }: { children: React.ReactNode, title: string, icon?: any, color?: "blue" | "indigo" | "silver", className?: string }) => {
    const styles = {
        blue: "bg-blue-900/40 border-blue-500/30 text-blue-100 shadow-blue-900/40",
        indigo: "bg-indigo-900/40 border-indigo-500/30 text-indigo-100 shadow-indigo-900/40",
        silver: "bg-slate-800/40 border-slate-500/30 text-slate-100 shadow-slate-900/40"
    };

    return (
        <div className={`p-6 border rounded-xl shadow-2xl backdrop-blur-sm relative overflow-hidden group transition-all duration-300 hover:border-blue-400/50 ${styles[color]} ${className}`}>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {Icon && <Icon size={80} />}
            </div>
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-current opacity-60">
                {Icon && <Icon size={20} />}
                <h3 className="text-xl font-bold font-serif uppercase tracking-widest">{title}</h3>
            </div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default function SpecialProvisionsModule({ onComplete, isCompleted }: SpecialProvisionsModuleProps) {
    const [openFolder, setOpenFolder] = useState<string | null>(null);

    const articles = [
        { id: "371", state: "Maharashtra & Gujarat", desc: "Separate Development Boards (Vidarbha, Marathwada, Saurashtra, Kutch)." },
        { id: "371-A", state: "Nagaland", desc: "Religious/Social practices, Customary law. Governor has special responsibility (Law & Order)." },
        { id: "371-B", state: "Assam", desc: "Committee of Legislative Assembly for Tribal Areas." },
        { id: "371-C", state: "Manipur", desc: "Committee for Hill Areas. Governor reports to President annually." },
        { id: "371-D", state: "Andhra & Telangana", desc: "Equitable opportunities in public employment & education." },
        { id: "371-F", state: "Sikkim", desc: "Protection of rights/interests of different sections of population." },
        { id: "371-G", state: "Mizoram", desc: "Religious/Social practices, Ownership of land. Customary law." },
        { id: "371-H", state: "Arunachal Pradesh", desc: "Governor has special responsibility for Law & Order." },
        { id: "371-I", state: "Goa", desc: "Legislative Assembly to consist of not less than 30 members." },
        { id: "371-J", state: "Karnataka", desc: "Hyderabad-Karnataka region: Development board, reservation in jobs/education." }
    ];

    return (
        <ArchiveContainer>
            {/* HERO */}
            <div className="text-center py-12 relative">
                <div className="inline-block relative">
                    <div className="flex justify-center mb-6">
                        <FolderOpen size={80} className="text-blue-400 animate-pulse" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white font-serif mb-4 tracking-tight">
                        SPECIAL PROVISIONS <br /> <span className="text-blue-400 text-3xl md:text-5xl uppercase tracking-widest">FOR SOME STATES</span>
                    </h1>
                    <div className="bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm inline-block font-bold border border-blue-500/30">
                        Part XXI: Articles 371 to 371-J
                    </div>
                </div>
            </div>

            {/* PHASE 1: THE WHY (PURPOSE) */}
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-blue-500/30 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-blue-400">Phase 1: Why the Folders?</h2>
                    <div className="h-px bg-blue-500/30 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Backward Regions", text: "Meet developmental needs of specific backward regions (e.g., Vidarbha, Kutch).", icon: Layers },
                        { title: "Tribal Rights", text: "Protect economic/cultural interests of tribal people (e.g., Nagaland, Mizoram).", icon: ShieldCheck },
                        { title: "Local Order", text: "Address law & order situations (e.g., Nagaland, Arunachal).", icon: Info }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/20 text-center space-y-3 hover:bg-slate-800 transition-colors">
                            <item.icon size={32} className="mx-auto text-blue-400" />
                            <h4 className="font-bold text-white uppercase text-xs tracking-widest">{item.title}</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* PHASE 2: THE ARCHIVE (ARTICLE LIST) */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-indigo-500/30 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-indigo-400">Phase 2: The Article Archive</h2>
                    <div className="h-px bg-indigo-500/30 flex-1"></div>
                </div>

                <div className="bg-slate-900 shadow-2xl rounded-2xl border border-slate-700 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-slate-700">
                        {articles.map((art) => (
                            <div
                                key={art.id}
                                className={`p-4 transition-all cursor-pointer group hover:bg-slate-800 flex flex-col justify-between ${openFolder === art.id ? 'bg-indigo-900/40' : 'bg-slate-900'}`}
                                onClick={() => setOpenFolder(openFolder === art.id ? null : art.id)}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">Art {art.id}</span>
                                    <Folder size={16} className={openFolder === art.id ? 'text-indigo-400' : 'text-slate-600'} />
                                </div>
                                <h4 className="font-bold text-slate-200 group-hover:text-indigo-300 transition-colors">{art.state}</h4>

                                {openFolder === art.id && (
                                    <div className="mt-3 text-sm text-slate-400 animate-in fade-in slide-in-from-top-1">
                                        {art.desc}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* PHASE 3: THE FOCUS (NAGA NUANCE) */}
            <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-red-500/30 flex-1"></div>
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-widest text-red-400">Phase 3: The Naga Nuance</h2>
                    <div className="h-px bg-red-500/30 flex-1"></div>
                </div>

                <FolderCard title="Special Control (Art 371-A)" icon={Lock} color="silver">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <div className="p-4 bg-red-900/20 border border-red-500/20 rounded-lg">
                                <h4 className="font-bold text-red-400 flex items-center gap-2 mb-2">
                                    <AlertCircle size={16} /> Law & Order
                                </h4>
                                <p className="text-sm text-slate-300">
                                    The **Governor** has special responsibility with respect to Law & Order in Nagaland as long as disturbance continues.
                                </p>
                            </div>
                            <div className="p-4 bg-blue-900/20 border border-blue-500/20 rounded-lg">
                                <h4 className="font-bold text-blue-400 flex items-center gap-2 mb-2">
                                    <ShieldCheck size={16} /> Parliament Act Bypass
                                </h4>
                                <p className="text-sm text-slate-300">
                                    No Act of Parliament applies to Nagaland unless **State Assembly** decides by a resolution (on religious/customary issues).
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-40 h-40 rounded-full border-4 border-dashed border-red-500/30 flex items-center justify-center p-4 relative bg-red-500/5">
                                <Map size={80} className="text-red-400 opacity-80" />
                                <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full">371-A</div>
                            </div>
                            <p className="mt-4 text-xs italic text-slate-400 text-center max-w-[200px]">
                                "Governor's decision on Law & Order is final and cannot be questioned."
                            </p>
                        </div>
                    </div>
                </FolderCard>
            </div>

            {/* FOOTER */}
            <div className="mt-16 text-center border-t border-slate-700/50 pt-12 pb-8">
                <div className="max-w-md mx-auto space-y-6">
                    <Star className="text-yellow-500 mx-auto" size={32} />
                    <p className="text-slate-400 text-sm">
                        "Asymmetrical Federalism: Ensuring that uniformity does not destroy the rich diversity of India."
                    </p>
                    <button
                        onClick={onComplete}
                        disabled={isCompleted}
                        className={`
                            w-full px-8 py-4 rounded-xl font-bold uppercase tracking-[0.2em] transition-all relative overflow-hidden group
                            ${isCompleted
                                ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                                : 'bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_40px_-12px_rgba(59,130,246,0.6)]'
                            }
                        `}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            {isCompleted ? "Access Granted" : "Secure Archives"} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        {!isCompleted && <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>}
                    </button>
                </div>
            </div>
        </ArchiveContainer>
    );
}
