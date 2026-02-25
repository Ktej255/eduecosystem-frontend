"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, Sparkles, Moon, Flame, Wind, Target, Eye, Layers, Globe, Radio, Infinity as InfinityIcon } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamic imports to prevent massive initial bundle and SSR issues with 3D/canvas
const IshaImmersive = dynamic(() => import("@/components/batch2/upanishads/IshaImmersiveExperience").then(m => m.IshaImmersiveExperience), { ssr: false });
const KenaImmersive = dynamic(() => import("@/components/batch2/upanishads/KenaImmersiveExperience").then(m => m.KenaImmersiveExperience), { ssr: false });
const KathaImmersive = dynamic(() => import("@/components/batch2/upanishads/KathaImmersiveExperience").then(m => m.KathaImmersiveExperience), { ssr: false });
const PrashnaImmersive = dynamic(() => import("@/components/batch2/upanishads/PrashnaImmersiveExperience").then(m => m.PrashnaImmersiveExperience), { ssr: false });
const MundakaImmersive = dynamic(() => import("@/components/batch2/upanishads/MundakaImmersiveExperience").then(m => m.MundakaImmersiveExperience), { ssr: false });
const MandukyaImmersive = dynamic(() => import("@/components/batch2/upanishads/MandukyaImmersiveExperience").then(m => m.MandukyaImmersiveExperience), { ssr: false });
const TaittiriyaImmersive = dynamic(() => import("@/components/batch2/upanishads/TaittiriyaImmersiveExperience").then(m => m.TaittiriyaImmersiveExperience), { ssr: false });
const AitareyaImmersive = dynamic(() => import("@/components/batch2/upanishads/AitareyaImmersiveExperience").then(m => m.AitareyaImmersiveExperience), { ssr: false });
const ChandogyaImmersive = dynamic(() => import("@/components/batch2/upanishads/ChandogyaImmersiveExperience").then(m => m.ChandogyaImmersiveExperience), { ssr: false });
const BrihadaranyakaImmersive = dynamic(() => import("@/components/batch2/upanishads/BrihadaranyakaImmersiveExperience").then(m => m.BrihadaranyakaImmersiveExperience), { ssr: false });

type ImmersiveId = 'isha' | 'kena' | 'katha' | 'prashna' | 'mundaka' | 'mandukya' | 'taittiriya' | 'aitareya' | 'chandogya' | 'brihadaranyaka';

interface ExperienceMeta {
    id: ImmersiveId;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ElementType;
    color: string;
    component: React.ElementType;
}

const EXPERIENCES: ExperienceMeta[] = [
    {
        id: "isha",
        title: "Isha",
        subtitle: "Inner Light",
        description: "Journey from the illusion of darkness to the blinding inner light of the Self.",
        icon: Sparkles,
        color: "from-amber-400 to-orange-500",
        component: IshaImmersive
    },
    {
        id: "kena",
        title: "Kena",
        subtitle: "Beyond Perception",
        description: "Explore what drives the mind and senses beyond the threshold of ordinary perception.",
        icon: Eye,
        color: "from-blue-400 to-indigo-500",
        component: KenaImmersive
    },
    {
        id: "katha",
        title: "Katha",
        subtitle: "Fire & Death",
        description: "Nachiketa's dialogue with Yama. The eternal fire of consciousness that survives death.",
        icon: Flame,
        color: "from-red-500 to-rose-600",
        component: KathaImmersive
    },
    {
        id: "prashna",
        title: "Prashna",
        subtitle: "Elemental Inquiry",
        description: "Six seekers, six questions. Follow the breath, the mind, and the source of creation.",
        icon: Wind,
        color: "from-cyan-400 to-teal-500",
        component: PrashnaImmersive
    },
    {
        id: "mundaka",
        title: "Mundaka",
        subtitle: "The Archery Simulation",
        description: "Draw the bow of Om, make your soul the arrow, and strike the target of Brahman.",
        icon: Target,
        color: "from-emerald-400 to-green-600",
        component: MundakaImmersive
    },
    {
        id: "mandukya",
        title: "Mandukya",
        subtitle: "Four States",
        description: "Waking, Dreaming, Deep Sleep, and the transcendent Turiya state of AUM.",
        icon: Moon,
        color: "from-purple-400 to-fuchsia-500",
        component: MandukyaImmersive
    },
    {
        id: "taittiriya",
        title: "Taittiriya",
        subtitle: "Pancha Kosha",
        description: "Peel away the five sheaths of existence from physical matter to pure bliss.",
        icon: Layers,
        color: "from-orange-400 to-amber-600",
        component: TaittiriyaImmersive
    },
    {
        id: "aitareya",
        title: "Aitareya",
        subtitle: "Cosmic Consciousness",
        description: "Witness Prajnanam Brahma — Consciousness is the supreme reality underlying all existence.",
        icon: Globe,
        color: "from-sky-400 to-blue-600",
        component: AitareyaImmersive
    },
    {
        id: "chandogya",
        title: "Chandogya",
        subtitle: "Tat Tvam Asi",
        description: "The cosmic sound of Udgitha. You are That eternal essence.",
        icon: Radio,
        color: "from-pink-400 to-rose-500",
        component: ChandogyaImmersive
    },
    {
        id: "brihadaranyaka",
        title: "Brihadaranyaka",
        subtitle: "Neti Neti / The Void",
        description: "Not this, not this. Peel away all labels and concepts until only the Great Forest of the Self remains.",
        icon: InfinityIcon,
        color: "from-slate-400 to-gray-600",
        component: BrihadaranyakaImmersive
    }
];

export function UpanishadsImmersiveLauncher() {
    const [activeId, setActiveId] = useState<ImmersiveId | null>(null);

    const ActiveComponent = EXPERIENCES.find(e => e.id === activeId)?.component;

    return (
        <div className="min-h-screen bg-[var(--sp-bg)] text-[var(--sp-text-hi)] font-sans">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-[var(--sp-bg)]/80 backdrop-blur-md border-b border-[var(--sp-border)]">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link
                            href="/student/batch2/sadhana"
                            className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--sp-border)] bg-[var(--sp-surface)] text-[var(--sp-text-lo)] hover:text-[var(--sp-gold)] hover:border-[var(--sp-gold)]/50 transition-all hover:scale-105"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div>
                            <h1 className="text-xl font-serif font-bold text-[var(--sp-gold)]">Immersive Upanishads</h1>
                            <p className="text-xs text-[var(--sp-text-lo)] uppercase tracking-widest font-black">10 Neural Pathways to Brahman</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Gallery Area */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[var(--sp-surface)] text-[var(--sp-gold)] rounded-2xl border border-[var(--sp-border)] shadow-inner shadow-[var(--sp-gold)]/20 mb-6">
                        <Sparkles className="w-7 h-7" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Choose Your Vector</h2>
                    <p className="text-[var(--sp-text-lo)] text-lg leading-relaxed">
                        These full-screen visual journeys use generative ambient effects, binaural tones, and spatial physics to bypass the intellectual mind and invoke direct experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {EXPERIENCES.map((exp) => (
                        <div
                            key={exp.id}
                            className="group relative flex flex-col rounded-3xl bg-[var(--sp-surface)] border border-[var(--sp-border)] overflow-hidden hover:border-[var(--sp-gold)]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(196,163,90,0.1)] hover:-translate-y-1"
                        >
                            {/* Decorative Top Glow */}
                            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${exp.color} opacity-30 group-hover:opacity-100 transition-opacity`} />

                            <div className="p-8 flex-1 flex flex-col items-center text-center relative z-10">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-[var(--sp-bg)] border border-[var(--sp-border)] mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    <exp.icon className="w-8 h-8 text-[var(--sp-text-lo)] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-[var(--sp-text-hi)] mb-1 group-hover:text-[var(--sp-gold)] transition-colors">{exp.title}</h3>
                                <p className="text-xs font-black uppercase tracking-widest text-[var(--sp-text-lo)] mb-4">{exp.subtitle}</p>
                                <p className="text-sm text-[var(--sp-text-lo)]/80 leading-relaxed max-w-[240px]">
                                    {exp.description}
                                </p>
                            </div>

                            <div className="p-4 border-t border-[var(--sp-border)] bg-black/20">
                                <button
                                    onClick={() => setActiveId(exp.id)}
                                    className="w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm bg-[var(--sp-bg)] text-[var(--sp-text-hi)] border border-[var(--sp-border)] group-hover:bg-[var(--sp-gold)] group-hover:text-[var(--sp-bg)] group-hover:border-[var(--sp-gold)] transition-all duration-300"
                                >
                                    <Play className="w-4 h-4" fill="currentColor" /> Enter Experience
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Launch Overlay */}
            <AnimatePresence>
                {activeId && ActiveComponent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="fixed inset-0 z-[100] bg-black"
                    >
                        <ActiveComponent lang="en" onClose={() => setActiveId(null)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
