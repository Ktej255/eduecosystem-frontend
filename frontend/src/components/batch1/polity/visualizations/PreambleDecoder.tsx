"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, BookOpen, ShieldCheck, Scale, Users, Heart } from 'lucide-react';

const PREAMBLE_KEYWORDS = [
    {
        word: "SOVEREIGN",
        icon: ShieldCheck,
        color: "text-amber-600",
        bg: "bg-amber-100 dark:bg-amber-900/30",
        meaning: "India is neither a dependency nor a dominion of any other nation, but an independent state. There is no authority above it, and it is free to conduct its own affairs.",
        upscNote: "The 42nd Amendment did not change this fundamental status, though it added 'Socialist' and 'Secular'."
    },
    {
        word: "SOCIALIST",
        icon: Users,
        color: "text-rose-600",
        bg: "bg-rose-100 dark:bg-rose-900/30",
        meaning: "Indian brand of socialism is a 'democratic socialism' and not a 'communistic socialism'. It is a blend of Marxism and Gandhism, leaning heavily towards Gandhian socialism.",
        upscNote: "Added by the 42nd Constitutional Amendment Act, 1976."
    },
    {
        word: "SECULAR",
        icon: Scale,
        color: "text-indigo-600",
        bg: "bg-indigo-100 dark:bg-indigo-900/30",
        meaning: "The Indian Constitution embodies the positive concept of secularism—all religions in our country (irrespective of their strength) have the same status and support from the state.",
        upscNote: "Added by the 42nd Amendment. Articles 25-28 (Fundamental Rights) already ensured secular spirit."
    },
    {
        word: "DEMOCRATIC",
        icon: Users,
        color: "text-emerald-600",
        bg: "bg-emerald-100 dark:bg-emerald-900/30",
        meaning: "The Constitution provides for representative parliamentary democracy under which the executive is responsible to the legislature for all its policies and actions.",
        upscNote: "The term 'democratic' is used in the Preamble in the broader sense embracing not only political democracy but also social and economic democracy."
    },
    {
        word: "REPUBLIC",
        icon: Landmark,
        color: "text-blue-600",
        bg: "bg-blue-100 dark:bg-blue-900/30",
        meaning: "India has an elected head called the President. It also means absence of any privileged class and all public offices being opened to every citizen without any discrimination.",
        upscNote: "Sovereignty is vested in the people, not a single individual like a king."
    },
    {
        word: "JUSTICE",
        icon: Scale,
        color: "text-purple-600",
        bg: "bg-purple-100 dark:bg-purple-900/30",
        meaning: "Social, Economic, and Political. Secured through various provisions of Fundamental Rights and Directive Principles.",
        upscNote: "Ideal of justice has been taken from the Russian Revolution (1917)."
    },
    {
        word: "LIBERTY",
        icon: Bird,
        color: "text-sky-600",
        bg: "bg-sky-100 dark:bg-sky-900/30",
        meaning: "Liberty of thought, expression, belief, faith and worship. Liberty does not mean 'license' to do what one likes, and has to be enjoyed within the limitations.",
        upscNote: "Ideals of Liberty, Equality, and Fraternity are taken from the French Revolution (1789-1799)."
    },
    {
        word: "EQUALITY",
        icon: Layers,
        color: "text-teal-600",
        bg: "bg-teal-100 dark:bg-teal-900/30",
        meaning: "Absence of special privileges to any section of the society, and the provision of adequate opportunities for all individuals without any discrimination.",
        upscNote: "This embraces three dimensions of equality—civic, political and economic."
    },
    {
        word: "FRATERNITY",
        icon: Heart,
        color: "text-pink-600",
        bg: "bg-pink-100 dark:bg-pink-900/30",
        meaning: "A sense of brotherhood. The Constitution promotes this feeling of fraternity by the system of single citizenship and Fundamental Duties (Article 51A).",
        upscNote: "Fraternity has to assure two things: the dignity of the individual and the unity and integrity of the nation."
    }
];

import { Bird, Layers, Landmark } from 'lucide-react';

export default function PreambleDecoder() {
    const [selectedWord, setSelectedWord] = useState(PREAMBLE_KEYWORDS[0]);

    return (
        <div className="w-full bg-slate-50 dark:bg-neutral-950 rounded-3xl border border-slate-200 dark:border-neutral-800 overflow-hidden shadow-2xl flex flex-col lg:flex-row h-full min-h-[600px]">
            {/* Left Pane: Interactive Preamble Text */}
            <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
                <div className="max-w-xl mx-auto space-y-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-black tracking-tight dark:text-white uppercase">The Preamble</h2>
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Interactive Decoder</p>
                        </div>
                    </div>

                    <div className="relative font-serif text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300 italic border-l-4 border-amber-200 pl-8 py-4">
                        "WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a
                        {PREAMBLE_KEYWORDS.slice(0, 5).map((kw, i) => (
                            <span key={i}>
                                {" "}
                                <button
                                    onClick={() => setSelectedWord(kw)}
                                    className={`transition-all px-1 rounded hover:opacity-80 ${selectedWord.word === kw.word ? kw.bg + " " + kw.color + " not-italic font-bold scale-105" : "underline decoration-dotted decoration-slate-400"}`}
                                >
                                    {kw.word}
                                </button>
                                {i < 4 ? "," : ""}
                            </span>
                        ))}
                        {" "} and to secure to all its citizens:
                        <br /><br />
                        {PREAMBLE_KEYWORDS.slice(5, 6).map((kw, i) => (
                            <span key={i} className="block mt-2">
                                <button
                                    onClick={() => setSelectedWord(kw)}
                                    className={`transition-all px-1 rounded hover:opacity-80 ${selectedWord.word === kw.word ? kw.bg + " " + kw.color + " not-italic font-bold scale-105" : "underline decoration-dotted decoration-slate-400"}`}
                                >
                                    {kw.word}
                                </button>
                                , social, economic and political;
                            </span>
                        ))}
                        {PREAMBLE_KEYWORDS.slice(6, 7).map((kw, i) => (
                            <span key={i} className="block mt-2">
                                <button
                                    onClick={() => setSelectedWord(kw)}
                                    className={`transition-all px-1 rounded hover:opacity-80 ${selectedWord.word === kw.word ? kw.bg + " " + kw.color + " not-italic font-bold scale-105" : "underline decoration-dotted decoration-slate-400"}`}
                                >
                                    {kw.word}
                                </button>
                                {" "} of thought, expression, belief, faith and worship;
                            </span>
                        ))}
                        {PREAMBLE_KEYWORDS.slice(7, 8).map((kw, i) => (
                            <span key={i} className="block mt-2">
                                <button
                                    onClick={() => setSelectedWord(kw)}
                                    className={`transition-all px-1 rounded hover:opacity-80 ${selectedWord.word === kw.word ? kw.bg + " " + kw.color + " not-italic font-bold scale-105" : "underline decoration-dotted decoration-slate-400"}`}
                                >
                                    {kw.word}
                                </button>
                                {" "} of status and of opportunity;
                            </span>
                        ))}
                        and to promote among them all
                        {PREAMBLE_KEYWORDS.slice(8, 9).map((kw, i) => (
                            <span key={i} className="block mt-2">
                                <button
                                    onClick={() => setSelectedWord(kw)}
                                    className={`transition-all px-1 rounded hover:opacity-80 ${selectedWord.word === kw.word ? kw.bg + " " + kw.color + " not-italic font-bold scale-105" : "underline decoration-dotted decoration-slate-400"}`}
                                >
                                    {kw.word}
                                </button>
                                {" "} assuring the dignity of the individual and the unity and integrity of the Nation..."
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Pane: Detailed Explanation */}
            <div className="w-full lg:w-96 bg-white dark:bg-neutral-900 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-neutral-800 p-8 flex flex-col">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedWord.word}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6 flex flex-col h-full"
                    >
                        <div className="flex items-start justify-between">
                            <div className={`p-4 rounded-2xl ${selectedWord.bg} ${selectedWord.color}`}>
                                <selectedWord.icon className="w-8 h-8" />
                            </div>
                            <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest text-slate-400 border-slate-200">
                                Keyword Case Study
                            </Badge>
                        </div>

                        <div>
                            <h3 className={`text-3xl font-black tracking-tighter ${selectedWord.color} mb-1 uppercase`}>
                                {selectedWord.word}
                            </h3>
                            <div className="h-1 w-12 bg-slate-100 dark:bg-neutral-800 rounded-full" />
                        </div>

                        <div className="space-y-4 flex-1">
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Constitutional Meaning</h4>
                                <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed font-medium">
                                    {selectedWord.meaning}
                                </p>
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-neutral-800/50 border border-slate-100 dark:border-neutral-800">
                                <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white">
                                    <Info className="w-4 h-4 text-amber-500" />
                                    <h4 className="text-xs font-bold uppercase tracking-widest">UPSC Perspective</h4>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-neutral-400 leading-relaxed italic">
                                    {selectedWord.upscNote}
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100 dark:border-neutral-800">
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">Related Articles</p>
                            <div className="flex flex-wrap gap-2">
                                {selectedWord.word === "SECULAR" && ["Art 25-28", "Art 44"].map(tag => <Badge key={tag} className="bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-neutral-400 border-none px-3">{tag}</Badge>)}
                                {selectedWord.word === "REPUBLIC" && ["Art 52", "Art 54"].map(tag => <Badge key={tag} className="bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-neutral-400 border-none px-3">{tag}</Badge>)}
                                {selectedWord.word === "DEMOCRATIC" && ["Art 326"].map(tag => <Badge key={tag} className="bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-neutral-400 border-none px-3">{tag}</Badge>)}
                                {selectedWord.word === "JUSTICE" && ["Art 14-18", "Art 38"].map(tag => <Badge key={tag} className="bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-neutral-400 border-none px-3">{tag}</Badge>)}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
