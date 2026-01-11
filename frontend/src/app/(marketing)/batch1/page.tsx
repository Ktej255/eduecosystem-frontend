import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Target, BarChart } from 'lucide-react';

export default function Batch1LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-neutral-900 dark:to-neutral-800">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-bold mb-6">
                        <BookOpen className="w-4 h-4" /> Batch 1: UPSC Foundation
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6 leading-tight">
                        Conquer the Syllabus. <br />
                        <span className="text-blue-600 dark:text-blue-400">One Day at a Time.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        A comprehensive, day-by-day roadmap impacting Polity, History, and Geography. Don't just study hard, study smart with our scientifically designed schedule.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link href="/login">
                            <Button size="lg" className="rounded-xl px-8 h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-600/20">
                                Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="p-8 border rounded-2xl">
                            <Target className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Daily Targets</h3>
                            <p className="text-gray-500">Wake up knowing exactly what chapters to cover. No confusion, just execution.</p>
                        </div>
                        <div className="p-8 border rounded-2xl">
                            <BarChart className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Weekly Tests</h3>
                            <p className="text-gray-500">Assess your retention every Sunday with high-yield MCQs tailored to the week's study.</p>
                        </div>
                        <div className="p-8 border rounded-2xl">
                            <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Smart Notes</h3>
                            <p className="text-gray-500">Concise, exam-oriented summaries for rapid revision before the prelims.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
