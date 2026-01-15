
"use client";

import React, { use } from "react";
import { notFound, useRouter } from "next/navigation";
import { exams } from "@/data/exams";
import { motion } from "framer-motion";
import { ArrowRight, Book, Calendar, CheckCircle, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

export default function ExamDetailPage({ params }: { params: Promise<{ examId: string }> }) {
    const { examId } = use(params);
    const exam = exams.find((e) => e.id === examId);
    const router = useRouter();

    if (!exam) {
        return notFound();
    }

    return (
        <div className="flex flex-col w-full min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center bg-grapho-ink overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent-green rounded-full blur-[120px] mix-blend-screen" />
                    <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-grapho-gold rounded-full blur-[120px] mix-blend-screen" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm">
                            {exam.category}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                            {exam.shortName} <span className="text-grapho-gold">Revision</span>
                        </h1>
                        <p className="text-lg text-neutral-300 max-w-lg">
                            {exam.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href={`/revision/${exam.id}/onboarding`} className="btn-ink-hover px-8 py-4 bg-white text-grapho-ink font-bold rounded-full text-lg shadow-lg hover:shadow-white/20 flex items-center justify-center gap-2 group">
                                Get Free Access <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-green-400 font-medium">
                            <CheckCircle className="w-4 h-4" />
                            First 30 Days Absolutely Free
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:block relative h-full min-h-[400px]"
                    >
                        {/* Abstract visualization or placeholder for Hero Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8 flex items-end">
                            <div className="space-y-4 w-full">
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-12 h-12 rounded-full bg-grapho-gold flex items-center justify-center text-grapho-ink font-bold text-xl">
                                        A+
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">Success Rate</div>
                                        <div className="text-sm text-neutral-400">Top 100 Ranks</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Info & Syllabus Section */}
            <section className="container mx-auto px-4 md:px-6 py-20">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Left Sidebar: Requirements */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm sticky top-24">
                            <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-grapho-gold" />
                                Requirements
                            </h3>

                            <div className="space-y-6">
                                <RequirementItem label="Qualification" value={exam.requirements.qualification} />
                                <RequirementItem label="Age Limit" value={exam.requirements.ageLimit} />
                                <RequirementItem label="Attempts" value={exam.requirements.attempts} />
                                <RequirementItem label="Nationality" value={exam.requirements.nationality} />
                            </div>
                        </div>
                    </div>

                    {/* Main Content: Subjects & Syllabus */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Overview */}
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-6">Exam Pattern</h2>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {exam.syllabusOverview.map((item, idx) => (
                                    <div key={idx} className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-xl border border-neutral-100 dark:border-neutral-700 font-medium text-center hover:border-grapho-gold transition-colors">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Subjects */}
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-6">Syllabus & Subjects</h2>
                            <div className="space-y-6">
                                {exam.subjects.map((subject) => (
                                    <div key={subject.id} className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-md transition-all">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-primary-indigo dark:text-white group-hover:text-primary-blue transition-colors">
                                                    {subject.name}
                                                </h3>
                                                <p className="text-neutral-500 text-sm mt-1">{subject.description}</p>
                                            </div>
                                            <Link href={`/revision/${exam.id}/onboarding`} className="shrink-0 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 rounded-full text-sm font-medium hover:bg-grapho-gold hover:text-white transition-colors">
                                                Start Learning
                                            </Link>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8 border-t border-neutral-100 dark:border-neutral-800 pt-4">
                                            {/* Chapters */}
                                            <div>
                                                <div className="text-xs font-bold uppercase text-neutral-400 mb-3 tracking-wider">Key Chapters</div>
                                                <ul className="space-y-2">
                                                    {subject.chapters.slice(0, 3).map((chap, i) => (
                                                        <li key={i} className="text-sm text-neutral-600 dark:text-neutral-300 flex items-center gap-2">
                                                            <div className="w-1 h-1 bg-neutral-400 rounded-full" />
                                                            {chap}
                                                        </li>
                                                    ))}
                                                    {subject.chapters.length > 3 && (
                                                        <li className="text-xs text-primary-blue font-medium cursor-pointer">+ {subject.chapters.length - 3} more</li>
                                                    )}
                                                </ul>
                                            </div>

                                            {/* Books */}
                                            <div>
                                                <div className="text-xs font-bold uppercase text-neutral-400 mb-3 tracking-wider flex items-center gap-2">
                                                    <Book className="w-3 h-3" /> Recommended Books
                                                </div>
                                                <ul className="space-y-3">
                                                    {subject.recommendedBooks.slice(0, 2).map((book) => (
                                                        <li key={book.id} className="flex items-center gap-3 bg-neutral-50 dark:bg-neutral-800 p-2 rounded-lg">
                                                            <div className="w-8 h-10 bg-neutral-200 rounded shrink-0" />
                                                            <div>
                                                                <div className="text-sm font-semibold leading-tight">{book.title}</div>
                                                                <div className="text-xs text-neutral-500">{book.author}</div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function RequirementItem({ label, value }: { label: string, value: string }) {
    return (
        <div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">{label}</div>
            <div className="text-neutral-900 dark:text-neutral-100 font-medium leading-snug">{value}</div>
        </div>
    )
}
