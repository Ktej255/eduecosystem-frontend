"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Landmark, Globe, Coins, Leaf, Palette, Atom, Sparkles } from 'lucide-react';

const revisionSubjects = [
    {
        id: "polity",
        title: "Indian Polity",
        description: "95 Chapters • Constitutional Framework",
        icon: BookOpen,
        color: "blue",
        gradient: "from-blue-500 to-indigo-600"
    },
    {
        id: "history",
        title: "Indian History",
        description: "65 Chapters • Ancient to Modern",
        icon: Landmark,
        color: "amber",
        gradient: "from-amber-500 to-orange-600"
    },
    {
        id: "geography",
        title: "Geography",
        description: "65 Chapters • Physical & World",
        icon: Globe,
        color: "emerald",
        gradient: "from-emerald-500 to-teal-600"
    },
    {
        id: "economy",
        title: "Economy",
        description: "65 Chapters • Macro & Development",
        icon: Coins,
        color: "indigo",
        gradient: "from-indigo-500 to-purple-600"
    },
    {
        id: "environment",
        title: "Environment",
        description: "55 Chapters • Ecology & Climate",
        icon: Leaf,
        color: "green",
        gradient: "from-green-500 to-emerald-600"
    },
    {
        id: "art-culture",
        title: "Art & Culture",
        description: "55 Chapters • Heritage & Arts",
        icon: Palette,
        color: "rose",
        gradient: "from-rose-500 to-pink-600"
    },
    {
        id: "science-tech",
        title: "Science & Tech",
        description: "55 Chapters • General & Emerging",
        icon: Atom,
        color: "violet",
        gradient: "from-violet-500 to-purple-600"
    }
];

export default function RevisionHub() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4 text-indigo-600 dark:text-indigo-300">
                        <Sparkles className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
                        Revision Portal
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Master your syllabus with Spaced Repetition (SRS), Flashcards, and Rapid MCQs. Select a subject to begin.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {revisionSubjects.map((subject) => (
                        <Link href={`/student/revision/${subject.id}`} key={subject.id}>
                            <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-none overflow-hidden group">
                                <div className={`h-2 w-full bg-gradient-to-r ${subject.gradient}`} />
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`w-12 h-12 rounded-xl bg-${subject.color}-100 dark:bg-${subject.color}-900/30 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            <subject.icon className={`w-6 h-6 text-${subject.color}-600 dark:text-${subject.color}-400`} />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {subject.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
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
