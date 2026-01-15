"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Landmark, Globe, Coins, Leaf, Palette, Atom, BrainCircuit } from 'lucide-react';

const subjects = [
    {
        title: "Indian Polity",
        description: "Constitution, Governance, and Political System.",
        href: "/student/batch1/polity", // We need to ensure this route exists or map it
        // Note: Currently /student/batch1 IS PolityHome in the old setup?
        // Actually, I should probably move PolityHome to /student/batch1/polity/page.tsx or keep logic here.
        // For now, let's point to the planner tab directly or create a specific polity route if needed.
        // Wait, if /student/batch1 IS this page, I can't link to it as 'Polity'.
        // I should PROBABLY move PolityHome to its own subpath if I want a hub here.
        // OR, I can interpret '/student/batch1' as the hub, and '/student/batch1/polity' as the planner.
        // Let's assume I will create /student/batch1/polity/page.tsx for consistency.
        icon: BookOpen,
        color: "blue",
        gradient: "from-blue-500 to-indigo-600"
    },
    {
        title: "Indian History",
        description: "Ancient, Medieval, and Modern History.",
        href: "/student/batch1/history",
        icon: Landmark,
        color: "amber",
        gradient: "from-amber-500 to-orange-600"
    },
    {
        title: "Geography",
        description: "Physical, World, and Indian Geography.",
        href: "/student/batch1/geography",
        icon: Globe,
        color: "emerald",
        gradient: "from-emerald-500 to-teal-600"
    },
    {
        title: "Economy",
        description: "Macroeconomics and Indian Economic Development.",
        href: "/student/batch1/economy",
        icon: Coins,
        color: "indigo",
        gradient: "from-indigo-500 to-purple-600"
    },
    {
        title: "Environment",
        description: "Ecology, Biodiversity, and Climate Change.",
        href: "/student/batch1/environment",
        icon: Leaf,
        color: "green",
        gradient: "from-green-500 to-emerald-600"
    },
    {
        title: "Art & Culture",
        description: "Visual and Performing Arts of India.",
        href: "/student/batch1/art-culture",
        icon: Palette,
        color: "rose",
        gradient: "from-rose-500 to-pink-600"
    },
    {
        title: "Science & Tech",
        description: "General Science and Emerging Technologies.",
        icon: Atom,
        color: "violet",
        gradient: "from-violet-500 to-purple-600",
        href: "/student/batch1/science-tech"
    },
    {
        title: "Focus Room",
        description: "Deep Work Sessions & Daily Targets.",
        icon: BrainCircuit,
        color: "cyan",
        gradient: "from-cyan-500 to-blue-600",
        href: "/student/my-plan"
    }
];

export default function Batch1Hub() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        UPSC Prelims Batch 1
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Select a module to begin your guided study plan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {subjects.map((subject) => (
                        <Link href={subject.href} key={subject.title}>
                            <Card className="h-full hover:shadow-xl transition-all hover:scale-105 border-none overflow-hidden group">
                                <div className={`h-3 w-full bg-gradient-to-r ${subject.gradient}`} />
                                <CardContent className="p-6">
                                    <div className={`w-12 h-12 rounded-xl bg-${subject.color}-100 dark:bg-${subject.color}-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <subject.icon className={`w-6 h-6 text-${subject.color}-600 dark:text-${subject.color}-400`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {subject.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {subject.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
