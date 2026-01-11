import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap, Moon } from 'lucide-react';

export default function MeditationLandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-neutral-900 dark:to-neutral-800">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 text-sm font-bold mb-6">
                        <Brain className="w-4 h-4" /> Expand Your Awareness
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6 leading-tight">
                        Stillness is the <br />
                        <span className="text-purple-600 dark:text-purple-400">Ultimate Productivity.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Ancient techniques meet modern neuroscience. Our guided meditation sessions are specifically designed for students to improve focus, memory, and emotional resilience.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link href="/login">
                            <Button size="lg" className="rounded-xl px-8 h-12 bg-purple-600 hover:bg-purple-700 text-white font-bold text-base shadow-lg shadow-purple-600/20">
                                Begin Session <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Laser Focus</h3>
                            <p className="text-gray-500 dark:text-gray-400">Train your attention span to study for longer hours without fatigue.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                                <Moon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Deep Rest</h3>
                            <p className="text-gray-500 dark:text-gray-400">Yoga Nidra sessions to recover 4 hours of sleep in just 20 minutes.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-rose-100 rounded-full flex items-center justify-center text-rose-600 mb-4">
                                <Brain className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Exam Anxiety</h3>
                            <p className="text-gray-500 dark:text-gray-400">Specific breathing techniques to calm nerves before high-stakes tests.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
