import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles, Zap, Brain } from 'lucide-react';
import Image from 'next/image';

export default function RevisionLandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-neutral-900 dark:to-neutral-800">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-sm font-bold mb-6 animate-fade-in-up">
                        <Sparkles className="w-4 h-4" /> The Science of Memory
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6 leading-tight">
                        Forget Forgetting. <br />
                        <span className="text-amber-600 dark:text-amber-400">Master Retention.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Our intelligent revision portal uses Spaced Repetition and Active Recall to ensure you never lose a concept. Turn short-term learning into long-term mastery.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link href="/login">
                            <Button size="lg" className="rounded-xl px-8 h-12 bg-amber-600 hover:bg-amber-700 text-white font-bold text-base shadow-lg shadow-amber-600/20">
                                Start Revising Now <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="#features">
                            <Button variant="outline" size="lg" className="rounded-xl px-8 h-12 border-amber-200 text-amber-700 hover:bg-amber-50 dark:border-amber-800 dark:text-amber-400 dark:hover:bg-amber-900/10 font-bold text-base">
                                Explore Features
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section id="features" className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Feature 1 */}
                        <div className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-gray-800">
                            <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 mb-6">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Active Recall</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                Don't just re-read. Test yourself. Our system prompts you to potential exam questions before showing answers, forcing your brain to work.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-gray-800">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 mb-6">
                                <Brain className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Spaced Repetition</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                We schedule reviews at the exact moment you're about to forget, maximizing efficiency and minimizing study time.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-gray-800">
                            <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 mb-6">
                                <CheckCircle className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Topic Mastery</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                Track your confidence on every single topic. Focus only on the 'Red' zones and stop wasting time on what you already know.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
