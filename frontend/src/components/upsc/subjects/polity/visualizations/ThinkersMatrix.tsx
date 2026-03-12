"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, BookOpen, User, Star, Search, Filter } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const THINKERS = [
    {
        name: "Socrates",
        era: "Western Philosophy",
        quote: "An unexamined life is not worth living.",
        concept: "Socratic Method & Intellectual Virtue",
        tags: ["Wisdom", "Ethics", "Inquiry"],
        color: "bg-blue-500",
        bio: "Primary focus on ethics and questioning established norms to reach universal truths."
    },
    {
        name: "Mahatma Gandhi",
        era: "Indian Philosophy",
        quote: "The best way to find yourself is to lose yourself in the service of others.",
        concept: "Sarvodaya, Trusteeship, Satyagraha",
        tags: ["Non-violence", "Selflessness", "Probity"],
        color: "bg-orange-500",
        bio: "Moral foundation of politics and administration; emphasis on means-over-ends."
    },
    {
        name: "Immanuel Kant",
        era: "Modern Philosophy",
        quote: "Act only according to that maxim whereby you can at the same time will that it should become a universal law.",
        concept: "Categorical Imperative (Deontology)",
        tags: ["Duty", "Reason", "Universalism"],
        color: "bg-purple-500",
        bio: "Duty-based ethics where the morality of an action is based on rules, not consequences."
    },
    {
        name: "John Stuart Mill",
        era: "Modern Philosophy",
        quote: "It is better to be a human being dissatisfied than a pig satisfied.",
        concept: "Utilitarianism",
        tags: ["Utility", "Liberty", "Consequences"],
        color: "bg-emerald-500",
        bio: "Greatest good for the greatest number; focus on measuring happiness/utility."
    },
    {
        name: "Nelson Mandela",
        era: "Contemporary",
        quote: "Education is the most powerful weapon which you can use to change the world.",
        concept: "Reconciliation & Resilience",
        tags: ["Forgiveness", "Justice", "Equality"],
        color: "bg-rose-500",
        bio: "Transformational leadership and ethical fortitude in the face of structural injustice."
    },
    {
        name: "Swami Vivekananda",
        era: "Indian Philosophy",
        quote: "Arise, awake, and stop not till the goal is reached.",
        concept: "Character Building & Self-Confidence",
        tags: ["Strength", "Service", "Youth"],
        color: "bg-amber-600",
        bio: "Emphasis on man-making education and selfless service (Karma Yoga)."
    }
];

export default function ThinkersMatrix() {
    const [selectedThinker, setSelectedThinker] = useState<any>(null);
    const [search, setSearch] = useState("");

    const filtered = THINKERS.filter(t =>
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Values & Thinkers Matrix</h3>
                    <p className="text-white/40 text-xs font-bold tracking-widest uppercase mt-1">Foundational Ethics Masterlist</p>
                </div>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/30" />
                    <Input
                        placeholder="Search concepts or names..."
                        className="pl-10 bg-card/5 border-white/10 text-white placeholder:text-white/20 h-10 rounded-xl focus-visible:ring-emerald-500/50"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((thinker, i) => (
                    <motion.div
                        key={i}
                        layoutId={thinker.name}
                        onClick={() => setSelectedThinker(thinker)}
                        className="cursor-pointer group relative"
                        whileHover={{ y: -5 }}
                    >
                        <Card className="h-full bg-slate-900 border-white/5 overflow-hidden transition-all hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10">
                            <div className={`h-1.5 w-full ${thinker.color} opacity-50`} />
                            <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-2 rounded-lg bg-card/5 group-hover:bg-card/10 transition-colors`}>
                                        <User className={`w-4 h-4 text-white/60`} />
                                    </div>
                                    <Badge variant="outline" className="text-[9px] uppercase font-black border-white/10 text-white/40">
                                        {thinker.era}
                                    </Badge>
                                </div>

                                <h4 className="text-xl font-bold text-white mb-2">{thinker.name}</h4>
                                <p className="text-xs text-white/50 font-medium leading-relaxed mb-4 italic truncate">
                                    "{thinker.quote}"
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {thinker.tags.map(tag => (
                                        <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-card/5 text-white/40 font-bold uppercase tracking-widest border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedThinker && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedThinker(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="w-full max-w-xl bg-slate-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className={`h-24 relative overflow-hidden flex items-end p-6 ${selectedThinker.color}`}>
                                <div className="absolute top-0 right-0 p-8 opacity-20 rotate-12 scale-150">
                                    <Star className="w-24 h-24 text-white" />
                                </div>
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter">{selectedThinker.name}</h2>
                                    <p className="text-white/80 text-[10px] font-black uppercase tracking-widest">{selectedThinker.era}</p>
                                </div>
                            </div>

                            <div className="p-8 space-y-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-3 text-emerald-400">
                                        <BookOpen className="w-4 h-4" />
                                        <span className="text-xs font-black uppercase tracking-widest">Core Concept</span>
                                    </div>
                                    <p className="text-white font-bold text-lg">{selectedThinker.concept}</p>
                                </div>

                                <div className="p-4 bg-card/5 rounded-2xl border border-white/10 italic text-white/60 leading-relaxed font-serif text-lg">
                                    <Quote className="w-6 h-6 text-white/10 mb-2" />
                                    "{selectedThinker.quote}"
                                </div>

                                <div>
                                    <h5 className="text-[10px] font-black uppercase text-white/30 tracking-[0.2em] mb-3">Historical Context & Legacy</h5>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        {selectedThinker.bio}
                                    </p>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button
                                        onClick={() => setSelectedThinker(null)}
                                        className="px-6 py-2 bg-card text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-colors"
                                    >
                                        Close Portal
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
