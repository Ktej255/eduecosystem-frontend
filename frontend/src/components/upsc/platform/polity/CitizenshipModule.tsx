"use client";

import React, { useState } from "react";
import {
    FileText, Globe, Stamp, Gavel, Scale,
    Briefcase, AlertTriangle, UserCheck, Plane,
    XCircle, CheckCircle2, BadgeCheck, Fingerprint,
    BookOpen, ShieldAlert, Baby
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


interface CitizenshipModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: string;
}

// --- Design System: The Immigration File ---

const ImmigrationContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#eef2f6] min-h-screen p-4 md:p-8 font-sans selection:bg-blue-200 selection:text-blue-900">
        <div className="max-w-5xl mx-auto space-y-8">
            {children}
        </div>
    </div>
);

const PassportCard = ({ title, icon: Icon, children, type = "standard", stamp }: { title: string, icon: any, children: React.ReactNode, type?: "standard" | "alert" | "info" | "success", stamp?: string }) => {
    const styles = {
        standard: "bg-card border-border",
        alert: "bg-red-50 border-red-200",
        info: "bg-blue-50 border-blue-200",
        success: "bg-green-50 border-green-200"
    };

    const iconColors = {
        standard: "text-muted-foreground bg-muted",
        alert: "text-red-600 bg-red-100",
        info: "text-blue-600 bg-blue-100",
        success: "text-green-600 bg-green-100"
    };

    return (
        <div className={`relative ${styles[type]} border rounded-xl p-5 shadow-sm hover:shadow-md transition-all`}>
            {stamp && (
                <div className="absolute -right-2 top-10 rotate-[-15deg] border-4 border-red-500/30 text-red-500/30 font-black text-4xl uppercase px-4 py-1 rounded-lg pointer-events-none select-none z-0">
                    {stamp}
                </div>
            )}
            <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className={`p-2 rounded-lg ${iconColors[type]}`}>
                    <Icon size={20} />
                </div>
                <h3 className="font-bold text-lg text-foreground">{title}</h3>
            </div>
            <div className="text-sm text-muted-foreground space-y-3 relative z-10">
                {children}
            </div>
        </div>
    );
};

export default function CitizenshipModule({ onComplete, isCompleted, chapterNumber = "7" }: CitizenshipModuleProps) {
    return (
        <ImmigrationContainer>
            {/* HERO */}
            <div className="bg-[#1e3a8a] text-white p-8 md:p-10 rounded-t-2xl shadow-xl relative overflow-hidden border-b-8 border-orange-500">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Globe size={180} />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2 text-blue-200 uppercase tracking-widest text-[10px] font-bold">
                        <Fingerprint size={14} /> Chapter {chapterNumber} &bull; Identity Document
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif tracking-wide">
                        CITIZENSHIP
                    </h1>
                    <div className="flex flex-wrap gap-4 text-sm font-medium opacity-90">
                        <span className="bg-blue-800/50 px-3 py-1 rounded border border-blue-700">Part II (Arts 5-11)</span>
                        <span className="bg-blue-800/50 px-3 py-1 rounded border border-blue-700">Citizenship Act, 1955</span>
                        <span className="bg-blue-800/50 px-3 py-1 rounded border border-blue-700">Constitutional Status</span>
                    </div>
                </div>
            </div>

            {/* PHASE 1: CONSTITUTIONAL STATUS */}
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
                        <FileText size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">1950 Status</h2>
                </div>

                <div className="bg-muted p-4 rounded-lg border border-border text-center mb-4">
                    <h3 className="font-bold text-foreground">Part II (Articles 5-11)</h3>
                    <p className="text-xs text-muted-foreground">Note: These articles ONLY identify citizens as of <strong className="text-foreground">Jan 26, 1950</strong>. Future law left to Parliament.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <PassportCard title="Article 5: Domicile" icon={FileText} type="info">
                        <p className="font-bold text-xs uppercase tracking-wide text-blue-800 mb-2">Criteria: Domiciled in India AND:</p>
                        <ol className="list-decimal pl-4 space-y-1 text-sm">
                            <li>Born in India, OR</li>
                            <li>Either parent born in India, OR</li>
                            <li>Resident for 5 years before Constitution.</li>
                        </ol>
                    </PassportCard>

                    <PassportCard title="The Migrants (Pak)" icon={Plane}>
                        <div className="space-y-3 divide-y divide-slate-100">
                            <div>
                                <div className="font-bold text-sm text-green-700">Article 6: From Pak</div>
                                <div className="text-xs">Migrated BEFORE <strong className="bg-yellow-100 px-1">July 19, 1948</strong> → Citizen.</div>
                            </div>
                            <div className="pt-2">
                                <div className="font-bold text-sm text-orange-700">Article 7: To Pak & Back</div>
                                <div className="text-xs">Migrated after Mar 1, 1947 but <strong className="underline">returned</strong> for resettlement.</div>
                            </div>
                        </div>
                    </PassportCard>

                    <PassportCard title="Article 8: PIOs Abroad" icon={Globe}>
                        <p><strong>Target:</strong> Persons of Indian Origin residing outside India.</p>
                        <p className="mt-2 text-xs bg-muted p-2 rounded border"><strong>Condition:</strong> Registered by Diplomatic/Consular rep of India.</p>
                    </PassportCard>

                    <PassportCard title="Article 9: No Dual Citizenship" icon={XCircle} type="alert" stamp="VOID">
                        <p className="font-bold text-red-700">Voluntary Acquisition = Loss</p>
                        <p className="text-xs mt-1">If a person VOLUNTARILY acquires citizenship of a Foreign State, they are <strong>NO LONGER</strong> a citizen of India.</p>
                    </PassportCard>
                </div>

                <div className="bg-slate-800 text-white p-4 rounded-xl flex items-center justify-between shadow-lg">
                    <div>
                        <div className="text-xs text-muted-foreground uppercase font-bold">The Power Article</div>
                        <div className="font-bold text-lg">Article 11</div>
                        <div className="text-sm opacity-80">Parliament regulates citizenship law.</div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs text-muted-foreground uppercase font-bold">Result</div>
                        <div className="font-bold text-lg text-yellow-400">Citizenship Act, 1955</div>
                    </div>
                </div>
            </div>

            {/* PHASE 2: ACQUISITION */}
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pt-8 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-green-100 p-2 rounded-lg text-green-700">
                        <UserCheck size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Acquisition (1955 Act)</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <PassportCard title="By Birth (Jus Soli)" icon={Baby} type="success">
                        <div className="space-y-2 text-xs">
                            <div className="flex justify-between border-b pb-1">
                                <span>1950-1987</span>
                                <span className="font-bold">Anyone born in India</span>
                            </div>
                            <div className="flex justify-between border-b pb-1">
                                <span>1987-2004</span>
                                <span className="font-bold">One parent Indian</span>
                            </div>
                            <div className="flex justify-between bg-green-100 p-1 rounded">
                                <span>2004-Now</span>
                                <span className="font-bold text-right">Both Indian OR<br />1 Indian + 1 Not Illegal</span>
                            </div>
                            <div className="text-[10px] text-muted-foreground italic mt-1">Exception: Children of Foreign Diplomats.</div>
                        </div>
                    </PassportCard>

                    <PassportCard title="By Descent (Jus Sanguinis)" icon={Fingerprint}>
                        <p className="text-xs mb-2">Born <strong>Outside</strong> India.</p>
                        <ul className="text-xs space-y-2 list-disc pl-4">
                            <li><strong>Pre-1992:</strong> Father must be citizen.</li>
                            <li><strong>Post-1992:</strong> Either parent citizen.</li>
                            <li className="font-bold text-blue-700">Dec 2004 onwards: Birth MUST be registered at Consulate within 1 year.</li>
                        </ul>
                    </PassportCard>

                    <PassportCard title="By Registration" icon={UserCheck}>
                        <p><strong>Target:</strong> PIOs, Spouses.</p>
                        <p className="my-2 text-green-700 font-bold bg-green-50 p-2 rounded border border-green-100 text-center">7 Years Residence</p>
                        <p className="text-xs text-muted-foreground">Must take oath of allegiance.</p>
                    </PassportCard>

                    <PassportCard title="By Naturalization" icon={FileText}>
                        <p><strong>Target:</strong> Foreigners.</p>
                        <div className="bg-muted p-2 rounded border mt-2 space-y-1 text-xs">
                            <div>1. Not illegal migrant.</div>
                            <div>2. Renounce previous citizenship.</div>
                            <div className="font-bold text-blue-700">3. Resided 12 Months + 11 Years (Total 12).</div>
                            <div>4. 8th Schedule Language + Good Character.</div>
                        </div>
                    </PassportCard>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-center">
                    <h4 className="font-bold text-blue-800 text-sm uppercase">By Incorporation of Territory</h4>
                    <p className="text-xs text-muted-foreground mt-1">If territory joins India, Govt specifies citizens. (Ex: Pondicherry 1962, Goa).</p>
                </div>
            </div>

            {/* PHASE 3: LOSS & OCI */}
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pt-8 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-red-100 p-2 rounded-lg text-red-700">
                        <XCircle size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Loss & OCI</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <PassportCard title="Voluntary Loss" icon={UserCheck}>
                        <div className="space-y-4">
                            <div>
                                <div className="font-bold text-foreground">1. Renunciation</div>
                                <div className="text-xs text-muted-foreground">Man declares "I give up". Minor child also loses (can resume at 18).</div>
                            </div>
                            <div className="border-t pt-2">
                                <div className="font-bold text-foreground">2. Termination</div>
                                <div className="text-xs text-muted-foreground">Automatic. If citizen acquires another passport.</div>
                            </div>
                        </div>
                    </PassportCard>

                    <PassportCard title="Deprivation (Compulsory)" icon={ShieldAlert} type="alert">
                        <p className="text-xs font-bold text-red-700 mb-2">Government Order for:</p>
                        <ul className="list-disc pl-4 space-y-1 text-xs">
                            <li>Fraud/False Representation.</li>
                            <li>Disloyalty to Constitution.</li>
                            <li>Assisting Enemy in War.</li>
                            <li>Imprisonment for 2 years within 5 years of reg.</li>
                        </ul>
                    </PassportCard>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Globe size={100} />
                    </div>
                    <div className="flex items-center gap-2 mb-4 text-orange-800 font-bold uppercase tracking-widest text-sm">
                        <Briefcase size={16} /> OCI Cardholder
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 relative z-10">
                        <div>
                            <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2"><CheckCircle2 size={16} /> The Rights</h4>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                                <li>Multiple entry, lifelong visa.</li>
                                <li>Parity with NRIs (Fin/Edu/Econ).</li>
                                <li>No police reporting.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2"><XCircle size={16} /> The Restrictions</h4>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                                <li><strong>Cannot Vote</strong>.</li>
                                <li>Cannot hold Constitutional Office.</li>
                                <li><strong>Cannot buy Agri Land</strong>.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-orange-200 text-center text-xs font-bold text-orange-800">
                        Note: NRI = Citizen (Vote, Tax). OCI = Foreigner (No Vote, No Agri Land).
                    </div>
                </div>
            </div>

            {/* PHASE 4: CAA 2019 */}
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pt-8 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-slate-900 p-2 rounded-lg text-yellow-500">
                        <Stamp size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">CAA 2019</h2>
                </div>

                <div className="bg-slate-900 text-slate-200 p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
                    <h3 className="text-2xl font-bold text-white mb-4">Citizenship Amendment Act, 2019</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="text-xs uppercase font-bold text-muted-foreground mb-1">Target Group</div>
                            <div className="text-sm mb-4">
                                Illegal Migrants from <strong className="text-yellow-400">Afghanistan, Bangladesh, Pakistan</strong>.
                            </div>

                            <div className="text-xs uppercase font-bold text-muted-foreground mb-1">Communities (6)</div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Hindu", "Sikh", "Buddhist", "Jain", "Parsi", "Christian"].map(c => (
                                    <Badge key={c} variant="secondary" className="bg-slate-700 text-slate-200 hover:bg-slate-600">{c}</Badge>
                                ))}
                            </div>

                            <div className="text-xs uppercase font-bold text-muted-foreground mb-1">Cut-off Date</div>
                            <div className="text-yellow-400 font-bold">On or before Dec 31, 2014</div>
                        </div>

                        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                            <h4 className="font-bold text-white border-b border-slate-600 pb-2 mb-2">Benefits & Exemptions</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex justify-between">
                                    <span>Naturalization Period:</span>
                                    <span className="font-bold text-green-400">11 Yrs → 5 Yrs</span>
                                </li>
                                <li className="pt-2 border-t border-slate-700">
                                    <span className="block text-xs uppercase font-bold text-red-400 mb-1">Does NOT Apply to:</span>
                                    <ul className="list-disc pl-4 text-xs opacity-80 space-y-1">
                                        <li><strong>6th Schedule Areas:</strong> Assam, Meghalaya, Tripura, Mizoram.</li>
                                        <li><strong>ILP Areas:</strong> Arunachal, Nagaland, Mizoram, Manipur.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMPLETION */}
            <div className="mt-8 text-center pb-8 border-t border-border pt-8">
                <div className="flex justify-center gap-4 mb-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500" /> Single Citizenship (UK)</span>
                    <span className="flex items-center gap-1"><AlertTriangle size={14} className="text-orange-500" /> Parliament can prescribe 'Residence' (Emp)</span>
                </div>
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`
            relative px-8 py-6 text-lg font-bold rounded-full shadow-xl transition-all
            ${isCompleted ? 'bg-blue-900 hover:bg-blue-800 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'}
          `}
                >
                    {isCompleted ?
                        <span className="flex items-center gap-2"><BadgeCheck /> CHAPTER {chapterNumber} COMPLETED</span> :
                        <span className="flex items-center gap-2"><BookOpen /> MARK CHAPTER {chapterNumber} COMPLETE</span>
                    }
                </Button>
            </div>
        </ImmigrationContainer>
    );
}
