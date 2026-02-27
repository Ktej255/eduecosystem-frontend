"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    Users, MessageSquare, ThumbsUp, ThumbsDown,
    BookOpen, Scale, Landmark, ChevronRight, CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
type AssemblyMember = {
    id: string;
    name: string;
    ideology: string; // e.g. "Socialist", "Conservative", "Liberal Dem"
    avatarColor: string;
};

type DebateArgument = {
    id: string;
    memberId: string;
    stance: 'for' | 'against' | 'amendment';
    argument: string;
    historicalAccuracy: number; // 0-100% how close to real CAD
};

type DraftingIssue = {
    id: string;
    title: string;
    context: string;
    proposedDraft: string;
    arguments: DebateArgument[];
    studentTask: string;
    correctResolution: 'for' | 'against' | 'amendment';
    feedback: {
        for: string;
        against: string;
        amendment: string;
    };
};

const MEMBERS: Record<string, AssemblyMember> = {
    "m1": { id: "m1", name: "Dr. B.R. Ambedkar", ideology: "Chief Architect (Pragmatic Liberal)", avatarColor: "bg-indigo-600" },
    "m2": { id: "m2", name: "Jawaharlal Nehru", ideology: "Socialist & Idealist", avatarColor: "bg-blue-600" },
    "m3": { id: "m3", name: "Sardar Patel", ideology: "Conservative Realist (Integrationist)", avatarColor: "bg-amber-600" },
    "m4": { id: "m4", name: "K.T. Shah", ideology: "Hardline Socialist", avatarColor: "bg-rose-600" }
};

const ISSUES: DraftingIssue[] = [
    {
        id: "issue1",
        title: "The Nature of Fundamental Rights",
        context: "The Assembly is debating whether Fundamental Rights should be absolute or subject to reasonable restrictions by the State.",
        proposedDraft: "Draft Article 13: All citizens shall have the right to freedom of speech and expression, to assemble peaceably... [ABSOLUTE].",
        studentTask: "As the Chairman, listen to the floor debate and decide how to finalize the draft.",
        arguments: [
            {
                id: "a1", memberId: "m4", stance: "for",
                argument: "Rights must be absolute! If we give the State the power to restrict them, what stops a future tyrannical government from crushing dissent?",
                historicalAccuracy: 95
            },
            {
                id: "a2", memberId: "m1", stance: "amendment",
                argument: "What the Draftsman has done is merely to state the rights and then to set out the limitations... What are called Fundamental Rights are not absolute. They are subject to 'reasonable restrictions' in the interest of the general public.",
                historicalAccuracy: 98
            },
            {
                id: "a3", memberId: "m3", stance: "amendment",
                argument: "Without public order and security of the State, rights mean nothing. The Executive must have the power to maintain peace, otherwise the rights themselves will collapse.",
                historicalAccuracy: 90
            }
        ],
        correctResolution: 'amendment',
        feedback: {
            for: "Incorrect. The Assembly rejected absolute rights. Dr. Ambedkar noted that even the US Supreme Court had to invent the 'Police Power' doctrine to restrict rights.",
            against: "Incorrect. The Assembly didn't reject rights entirely; they sought a balance.",
            amendment: "Correct! The Assembly adopted the 'Reasonable Restrictions' model (now Art 19(2)-(6)), striking a balance between individual liberty and social control."
        }
    }
];

export default function InteractiveDraftingCommittee() {
    const [currentIssue, setCurrentIssue] = useState<DraftingIssue>(ISSUES[0]);
    const [visibleArguments, setVisibleArguments] = useState<number>(0);
    const [playerDecision, setPlayerDecision] = useState<'for' | 'against' | 'amendment' | null>(null);

    const revealNextArgument = () => {
        if (visibleArguments < currentIssue.arguments.length) {
            setVisibleArguments(prev => prev + 1);
        }
    };

    const resetSimulation = () => {
        setVisibleArguments(0);
        setPlayerDecision(null);
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6 font-['Calibri'] relative h-[800px] flex flex-col">

            {/* Context Header */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden shrink-0">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-600/10 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <Badge variant="outline" className="border-amber-900 text-amber-500 mb-3 tracking-widest font-bold">
                            <Landmark className="w-3 h-3 mr-2" /> CONSTITUENT ASSEMBLY HALL (1948)
                        </Badge>
                        <h2 className="text-3xl font-black text-white">{currentIssue.title}</h2>
                        <p className="text-slate-400 mt-2 max-w-2xl">{currentIssue.context}</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">

                {/* Left Col: The Draft & Task */}
                <div className="lg:col-span-1 flex flex-col gap-6 h-full">
                    {/* The Draft Document */}
                    <div className="bg-[#fdfbf7] p-6 rounded-2xl border-2 border-[#e6dfd1] shadow-inner relative overflow-hidden flex-1 flex flex-col">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] pointer-events-none"></div>
                        <h3 className="text-sm font-black text-[#8b7a5e] uppercase tracking-widest text-center border-b-2 border-[#e6dfd1] pb-4 mb-4 font-serif">
                            Draft text under consideration
                        </h3>
                        <p className="font-serif text-[#4a4233] leading-relaxed italic text-lg text-center flex-1 flex items-center justify-center">
                            "{currentIssue.proposedDraft}"
                        </p>
                    </div>

                    {/* The Chairman's Task */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shrink-0">
                        <h3 className="text-amber-500 font-bold mb-2 flex items-center gap-2">
                            <Scale className="w-4 h-4" /> Your Directive
                        </h3>
                        <p className="text-slate-300 text-sm">{currentIssue.studentTask}</p>
                    </div>
                </div>

                {/* Right Col: The Floor Debate */}
                <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col shadow-2xl overflow-hidden relative">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-indigo-400" /> Live Floor Debate
                        </h3>
                        <Badge variant="secondary" className="bg-slate-900 text-slate-400">
                            {visibleArguments} / {currentIssue.arguments.length} Arguments Heard
                        </Badge>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
                        <AnimatePresence>
                            {currentIssue.arguments.slice(0, visibleArguments).map((arg, idx) => {
                                const member = MEMBERS[arg.memberId];
                                return (
                                    <motion.div
                                        key={arg.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex gap-4"
                                    >
                                        <div className={`w-12 h-12 rounded-full ${member.avatarColor} border-2 border-slate-950 shrink-0 flex items-center justify-center shadow-lg`}>
                                            <span className="text-white font-bold text-lg">{member.name.charAt(0)}</span>
                                        </div>
                                        <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl rounded-tl-none p-5 relative">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h4 className="font-bold text-slate-200">{member.name}</h4>
                                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">{member.ideology}</p>
                                                </div>
                                                <Badge variant="outline" className={`
                                                    ${arg.stance === 'for' ? 'border-emerald-500/50 text-emerald-400 bg-emerald-950/20' : ''}
                                                    ${arg.stance === 'against' ? 'border-rose-500/50 text-rose-400 bg-rose-950/20' : ''}
                                                    ${arg.stance === 'amendment' ? 'border-blue-500/50 text-blue-400 bg-blue-950/20' : ''}
                                                `}>
                                                    {arg.stance.toUpperCase()}
                                                </Badge>
                                            </div>
                                            <p className="text-slate-300 leading-relaxed text-sm">"{arg.argument}"</p>
                                            <div className="mt-3 flex items-center justify-end">
                                                <span className="text-[10px] text-slate-600 font-mono">Historical Accuracy: {arg.historicalAccuracy}%</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>

                        {visibleArguments < currentIssue.arguments.length && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onClick={revealNextArgument}
                                className="w-full py-4 border-2 border-dashed border-slate-800 hover:border-indigo-500/50 rounded-2xl text-slate-500 hover:text-indigo-400 transition-colors flex flex-col items-center justify-center group"
                            >
                                <Users className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-bold tracking-widest uppercase">Call Next Speaker</span>
                            </motion.button>
                        )}

                        {visibleArguments === currentIssue.arguments.length && !playerDecision && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-6 bg-slate-900 border border-slate-700 rounded-2xl relative mt-8"
                            >
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-950 border border-slate-700 px-4 py-1 rounded-full">
                                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Chairman's Ruling</span>
                                </div>

                                <p className="text-center text-slate-300 mb-6 font-medium">The debate has concluded. How do you rule on the Draft Article?</p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <button onClick={() => setPlayerDecision('for')} className="p-4 rounded-xl border border-emerald-900/50 bg-emerald-950/20 hover:bg-emerald-900/40 text-emerald-400 font-bold flex flex-col items-center gap-2 transition-colors">
                                        <ThumbsUp className="w-5 h-5" /> Adopt As Is
                                    </button>
                                    <button onClick={() => setPlayerDecision('amendment')} className="p-4 rounded-xl border border-blue-900/50 bg-blue-950/20 hover:bg-blue-900/40 text-blue-400 font-bold flex flex-col items-center gap-2 transition-colors">
                                        <BookOpen className="w-5 h-5" /> Impose Restrictions
                                    </button>
                                    <button onClick={() => setPlayerDecision('against')} className="p-4 rounded-xl border border-rose-900/50 bg-rose-950/20 hover:bg-rose-900/40 text-rose-400 font-bold flex flex-col items-center gap-2 transition-colors">
                                        <ThumbsDown className="w-5 h-5" /> Reject Draft
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {playerDecision && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className={`p-6 rounded-2xl mt-8 border ${playerDecision === currentIssue.correctResolution
                                        ? 'bg-emerald-950/30 border-emerald-900/50'
                                        : 'bg-rose-950/30 border-rose-900/50'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 mt-1">
                                        {playerDecision === currentIssue.correctResolution
                                            ? <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                            : <Scale className="w-6 h-6 text-rose-500" />
                                        }
                                    </div>
                                    <div>
                                        <h4 className={`text-lg font-bold mb-2 ${playerDecision === currentIssue.correctResolution ? 'text-emerald-400' : 'text-rose-400'}`}>
                                            {playerDecision === currentIssue.correctResolution ? "Historically Accurate Decision" : "Constitutional Divergence"}
                                        </h4>
                                        <p className="text-slate-300 leading-relaxed">{currentIssue.feedback[playerDecision]}</p>

                                        <button onClick={resetSimulation} className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-bold transition-colors">
                                            Return to Floor
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
