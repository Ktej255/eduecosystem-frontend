"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Flag, Scroll, Users, PenTool, Calendar, BookOpen,
    CheckCircle2, AlertCircle, Gavel, Scale, Globe, Crown,
    ChevronDown, ChevronUp, Star, Map, User, Clock, Brain
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ChapterLevelGame from "./revision/ChapterLevelGame";

// Types
interface MakingConstitutionProps {
    onComplete?: () => void;
    isCompleted?: boolean;
}

export default function MakingConstitutionModule({ onComplete, isCompleted }: MakingConstitutionProps) {
    const [activeSection, setActiveSection] = useState<string>("demand");

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8 pb-20 font-sans">

            {/* HER0 HEADER */}
            <motion.div
                initial="hidden" animate="visible" variants={fadeInUp}
                className="relative bg-[#2c1810] text-[#f4e4bc] p-8 md:p-12 rounded-2xl shadow-2xl overflow-hidden"
            >
                {/* Background texture/pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>

                <div className="relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-[#f4e4bc]/10 px-4 py-1 rounded-full text-xs uppercase tracking-[0.2em] mb-4 border border-[#f4e4bc]/20">
                        <Scale size={14} /> Chapter 2
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-tight">Making of the Constitution</h1>
                    <p className="max-w-2xl mx-auto text-lg opacity-80 font-light italic">
                        "The Assembly has not only to perform the function of a constitution-making body but also that of a Dominion Legislature."
                    </p>
                </div>
            </motion.div>

            {/* SECTION 1: THE DEMAND (Timeline) */}
            <SectionHeader
                icon={<ClockIcon />}
                title="The Demand & Formation"
                subtitle="1934 - 1946: The Road to the Assembly"
            />

            <div className="relative border-l-2 border-dashed border-amber-300 ml-4 md:ml-12 space-y-8 pl-8 md:pl-12 py-4">
                <TimelineItem
                    year="1934"
                    title="The Idea"
                    desc="M.N. Roy (Pioneer of Communist Movement) put forward the idea for the first time."
                    icon={<BrainIcon />}
                />
                <TimelineItem
                    year="1935"
                    title="Official Demand"
                    desc="INC officially demanded a Constituent Assembly for the first time."
                    icon={<Flag size={16} className="text-orange-600" />}
                />
                <TimelineItem
                    year="1938"
                    title="Nehru's Declaration"
                    desc="'Constitution of free India must be framed without outside interference by an Assembly elected on adult franchise.'"
                    icon={<User size={16} className="text-blue-600" />}
                />
                <TimelineItem
                    year="1940"
                    title="August Offer"
                    desc="British Govt accepted the demand in principle."
                    badge="Accepted"
                />
                <TimelineItem
                    year="1942"
                    title="Cripps Mission"
                    desc="Sir Stafford Cripps came with a draft proposal. Rejected by Muslim League (Wanted 2 states)."
                    badge="Rejected"
                    isNegative
                />
                <TimelineItem
                    year="1946"
                    title="Cabinet Mission"
                    desc="Rejected two Assemblies idea but satisfied Muslim League. Scheme for Assembly formulated Nov 1946."
                    highlight
                />
            </div>

            {/* SECTION 2: COMPOSITION (Visual Matrix) */}
            <SectionHeader
                icon={<UsersIcon />}
                title="Composition of The Hall"
                subtitle="Total Strength: 389 (Before Partition)"
            />

            <div className="grid md:grid-cols-2 gap-6">
                {/* The Numbers */}
                <Card className="bg-muted border-border">
                    <CardContent className="p-6">
                        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                            <Users size={20} className="text-blue-600" /> Total Seats: 389
                        </h3>
                        <div className="flex gap-4 items-end mb-6">
                            <div className="flex-1 bg-blue-100 p-4 rounded-xl border border-blue-200 text-center">
                                <div className="text-3xl font-bold text-blue-900">296</div>
                                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">British India</div>
                            </div>
                            <div className="text-2xl text-muted-foreground font-bold">+</div>
                            <div className="flex-1 bg-amber-100 p-4 rounded-xl border border-amber-200 text-center">
                                <div className="text-3xl font-bold text-amber-900">93</div>
                                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">Princely States</div>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground italic text-center">
                            *Princely States decided to stay away initially.
                        </p>
                    </CardContent>
                </Card>

                {/* The Election Result */}
                <Card className="bg-muted border-border">
                    <CardContent className="p-6">
                        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                            <VoteIcon /> Election Results (296 Seats)
                        </h3>
                        <div className="space-y-3">
                            <ResultBar label="Congress" count={208} total={296} color="bg-green-500" />
                            <ResultBar label="Muslim League" count={73} total={296} color="bg-green-700" />
                            <ResultBar label="Others/Ind" count={15} total={296} color="bg-gray-400" />
                        </div>
                        <div className="mt-4 p-3 bg-card rounded border border-slate-100 text-xs text-muted-foreground">
                            <span className="font-bold">Note:</span> Indirect Election by Provincial Assemblies (Limited Franchise).
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* SECTION 3: WORKING (Key Dates) */}
            <SectionHeader
                icon={<GavelIcon />}
                title="Working of the Assembly"
                subtitle="First Meeting to Objectives Resolution"
            />

            <div className="grid md:grid-cols-3 gap-4">
                <DateCard
                    date="Dec 9, 1946"
                    title="First Meeting"
                    desc="Boycotted by Muslim League. Only 211 members attended. Dr. Sachchidananda Sinha (Oldest) = Temporary President (French practice)."
                    color="blue"
                />
                <DateCard
                    date="Dec 11, 1946"
                    title="Permanent President"
                    desc="Dr. Rajendra Prasad elected President. H.C. Mukherjee & V.T. Krishnamachari elected Vice-Presidents."
                    color="green"
                />
                <DateCard
                    date="Dec 13, 1946"
                    title="Objectives Resolution"
                    desc="Moved by Nehru. Laid fundamentals of constitutional structure. Adopted unanimously on Jan 22, 1947."
                    color="amber"
                />
            </div>

            {/* Indian Independence Act Changes */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mt-6">
                <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                    <Globe size={18} /> Impact of Independence Act 1947
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-indigo-800">
                    <div className="bg-card p-3 rounded shadow-sm">
                        <span className="font-bold block mb-1">1. Sovereign Body</span>
                        Could abrogate any British law.
                    </div>
                    <div className="bg-card p-3 rounded shadow-sm">
                        <span className="font-bold block mb-1">2. Legislative Body</span>
                        First Parliament of Free India. (Chaired by G.V. Mavalankar).
                    </div>
                    <div className="bg-card p-3 rounded shadow-sm">
                        <span className="font-bold block mb-1">3. Strength Reduced</span>
                        389 → 299 (Pak members withdrew).
                    </div>
                </div>
            </div>

            {/* SECTION 4: COMMITTEES (The Big 8) */}
            <SectionHeader
                icon={<FolderIcon />}
                title="Major Committees"
                subtitle="The Architects of the Framework"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <CommitteeCard name="Jawaharlal Nehru" roles={["Union Powers", "Union Constitution", "States Committee"]} color="bg-orange-50 border-orange-200 text-orange-900" />
                <CommitteeCard name="Sardar Patel" roles={["Provincial Constitution", "Advisory (Rights, Minorities)"]} color="bg-blue-50 border-blue-200 text-blue-900" />
                <CommitteeCard name="Dr. Rajendra Prasad" roles={["Rules of Procedure", "Steering Committee"]} color="bg-green-50 border-green-200 text-green-900" />
                <CommitteeCard name="Dr. B.R. Ambedkar" roles={["Drafting Committee"]} color="bg-purple-50 border-purple-200 text-purple-900" highlight />
            </div>

            {/* DRAFTING COMMITTEE SPECIAL */}
            <div className="mt-8 bg-[#3e2723] text-orange-50 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10"><PenTool size={100} /></div>
                <h3 className="text-xl font-bold mb-4 border-b border-orange-50/20 pb-2">Drafting Committee (Aug 29, 1947)</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <div className="font-bold text-lg text-amber-300 mb-2 md:col-span-2">Chairman: Dr. B.R. Ambedkar</div>
                    <li>N. Gopalaswamy Ayyangar</li>
                    <li>Alladi Krishnaswamy Ayyar</li>
                    <li>Dr. K.M. Munshi</li>
                    <li>Syed Mohammad Saadullah</li>
                    <li>N. Madhava Rau <span className="text-xs opacity-60">(Replaced B.L. Mitter)</span></li>
                    <li>T.T. Krishnamachari <span className="text-xs opacity-60">(Replaced D.P. Khaitan)</span></li>
                </div>
                <div className="mt-4 pt-4 border-t border-orange-50/20 text-xs opacity-70 flex justify-between">
                    <span>Sat for 141 days</span>
                    <span>Less than 6 months to prepare draft</span>
                </div>
            </div>

            {/* SECTION 5: ENACTMENT */}
            <SectionHeader
                icon={<BookCheckIcon />}
                title="Enactment & Enforcement"
                subtitle="26 Nov 1949 vs 26 Jan 1950"
            />

            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 bg-card border-2 border-border rounded-xl p-6 relative">
                    <div className="absolute top-4 right-4 text-slate-200"><Calendar size={40} /></div>
                    <Badge className="bg-slate-800 mb-2">Date of Adoption</Badge>
                    <h3 className="text-3xl font-bold text-foreground mb-2">Nov 26, 1949</h3>
                    <p className="text-sm text-muted-foreground mb-4">"Adopted, Enacted and gave to themselves."</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Present Members Signed: 284</li>
                        <li>• Preamble + 395 Articles + 8 Schedules.</li>
                        <li>• <strong>Citizenship, Elections (Arts 5, 6, 324 etc)</strong> came into force.</li>
                    </ul>
                </div>

                <div className="flex-1 bg-gradient-to-br from-orange-50 to-green-50 border-2 border-orange-200 rounded-xl p-6 relative">
                    <div className="absolute top-4 right-4 text-orange-200"><Flag size={40} /></div>
                    <Badge className="bg-orange-600 mb-2 hover:bg-orange-700">Date of Commencement</Badge>
                    <h3 className="text-3xl font-bold text-orange-900 mb-2">Jan 26, 1950</h3>
                    <p className="text-sm text-orange-800 mb-4">Republic Day (Purna Swaraj Day 1930)</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Remaining Major Parts came into force.</li>
                        <li>• Indian Independence Act 1947 repealed.</li>
                    </ul>
                </div>
            </div>

            {/* FOOTER: FACTS & CRITICISM */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-muted p-6 rounded-xl border border-border text-sm">
                    <h4 className="font-bold text-foreground mb-3 flex items-center gap-2"><Star size={14} /> Important Facts</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li><strong>Symbol:</strong> Elephant 🐘</li>
                        <li><strong>Legal Advisor:</strong> Sir B.N. Rau</li>
                        <li><strong>Secretary:</strong> H.V.R. Iyengar</li>
                        <li><strong>Calligrapher:</strong> Prem Behari Narain Raizada (Italic Style)</li>
                        <li><strong>Artist:</strong> Nand Lal Bose (Shantiniketan)</li>
                    </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100 text-sm">
                    <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2"><AlertCircle size={14} /> Criticisms</h4>
                    <ul className="space-y-2 text-red-800/80">
                        <li>• "Not a Representative Body" (Indirect Election)</li>
                        <li>• "Not Sovereign" (Created by British)</li>
                        <li>• "Drifting Committee" (Time consuming)</li>
                        <li>• "Body of Hindus" (Viscount Simon)</li>
                    </ul>
                </div>
            </div>

            {/* PRACTICE ARENA */}
            <section className="mb-20">
                <div className="text-center mb-8">
                    <span className="bg-amber-100 text-amber-900 border border-amber-200 px-4 py-1 text-sm font-bold uppercase tracking-widest rounded-full shadow-md inline-flex items-center gap-2">
                        <Star size={14} /> Practice Arena
                    </span>
                </div>
                <ChapterLevelGame topicId={2} />
            </section>

            {/* COMPLETION BUTTON */}
            <div className="flex justify-center pt-8">
                <Button
                    onClick={onComplete}
                    disabled={isCompleted}
                    className={`
                      relative px-8 py-6 text-lg font-bold rounded-full shadow-xl transition-all
                      ${isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-900 hover:bg-blue-800'}
                    `}
                >
                    {isCompleted ? <span className="flex items-center gap-2"><CheckCircle2 /> Chapter Verified</span> : <span className="flex items-center gap-2"><BookOpen /> Mark as Completed</span>}
                </Button>
            </div>
        </div>
    );
}

// --- HELPER COMPONENTS ---

function SectionHeader({ icon, title, subtitle }: { icon: any, title: string, subtitle: string }) {
    return (
        <div className="flex items-start gap-4 border-b border-border pb-4 mb-6">
            <div className="p-3 bg-muted rounded-xl text-muted-foreground">
                {icon}
            </div>
            <div>
                <h2 className="text-2xl font-bold text-foreground">{title}</h2>
                <p className="text-sm text-muted-foreground font-medium">{subtitle}</p>
            </div>
        </div>
    );
}

function TimelineItem({ year, title, desc, badge, isNegative, highlight, icon }: any) {
    return (
        <div className="relative mb-8 last:mb-0">
            <div className={`absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full border-4 border-white shadow-sm ${highlight ? 'bg-amber-500' : 'bg-slate-300'}`}></div>
            <div className={`relative p-4 rounded-xl border ${highlight ? 'bg-amber-50 border-amber-200' : 'bg-card border-border shadow-sm'}`}>
                <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold px-2 py-1 rounded ${highlight ? 'bg-amber-200 text-amber-900' : 'bg-muted text-muted-foreground'}`}>
                            {year}
                        </span>
                        <h4 className="font-bold text-foreground">{title}</h4>
                    </div>
                    {badge && <Badge variant="outline" className={isNegative ? 'bg-red-50 text-red-600 border-red-200' : 'bg-green-50 text-green-600 border-green-200'}>{badge}</Badge>}
                </div>
                <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
        </div>
    )
}

function ResultBar({ label, count, total, color }: any) {
    const percentage = (count / total) * 100;
    return (
        <div>
            <div className="flex justify-between text-xs font-bold text-muted-foreground mb-1">
                <span>{label}</span>
                <span>{count}</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full ${color}`}
                />
            </div>
        </div>
    )
}

function DateCard({ date, title, desc, color }: any) {
    const colors: any = {
        blue: "bg-blue-50 border-blue-200 text-blue-900",
        green: "bg-green-50 border-green-200 text-green-900",
        amber: "bg-amber-50 border-amber-200 text-amber-900"
    };
    return (
        <div className={`p-4 rounded-xl border ${colors[color]} flex flex-col h-full`}>
            <div className="text-xs font-bold uppercase opacity-60 mb-1">{date}</div>
            <h4 className="font-bold text-lg mb-2">{title}</h4>
            <p className="text-xs opacity-80 leading-relaxed">{desc}</p>
        </div>
    )
}

function CommitteeCard({ name, roles, color, highlight }: any) {
    return (
        <div className={`p-4 rounded-xl border ${color} ${highlight ? 'shadow-lg scale-105' : ''}`}>
            <h4 className="font-bold mb-2">{name}</h4>
            <ul className="text-xs space-y-1 opacity-90 list-disc list-inside">
                {roles.map((r: string, i: number) => <li key={i}>{r}</li>)}
            </ul>
        </div>
    )
}

// Icons
const ClockIcon = () => <Clock size={24} />;
const UsersIcon = () => <Users size={24} />;
const VoteIcon = () => <CheckCircle2 size={16} className="text-green-600" />;
const GavelIcon = () => <Gavel size={24} />;
const FolderIcon = () => <Map size={24} />;
const BookCheckIcon = () => <BookOpen size={24} />;
const BrainIcon = () => <Brain size={16} className="text-purple-600" />;
