import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Sun, Feather } from 'lucide-react';

export default function Batch2LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-orange-50 to-rose-50 dark:from-neutral-900 dark:to-neutral-800">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 text-sm font-bold mb-6">
                        <Layers className="w-4 h-4" /> Batch 2: Sanatana Dharma
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6 leading-tight">
                        Discover the Roots of <br />
                        <span className="text-orange-600 dark:text-orange-400">Indian Wisdom.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        A structured journey through the Vedas, Upanishads, and the Bhagavad Gita. Understand the philosophy that has guided civilizations for millennia.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link href="/login">
                            <Button size="lg" className="rounded-xl px-8 h-12 bg-orange-600 hover:bg-orange-700 text-white font-bold text-base shadow-lg shadow-orange-600/20">
                                Begin the Journey <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                                        <Sun className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Structured Curriculum</h3>
                                        <p className="text-gray-500">From the hymns of Rig Veda to the non-dualism of Vedanta, we organize vast knowledge into digestible modules.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                                        <Feather className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Original Sanskrit & Context</h3>
                                        <p className="text-gray-500">Learn not just translations but the cultural and etymological context of key terms.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/10 p-8 rounded-3xl border border-orange-100 dark:border-orange-900/20 text-center">
                                <p className="text-2xl font-serif italic text-orange-800 dark:text-orange-200 mb-4">
                                    "Knowledge is structured in consciousness."
                                </p>
                                <p className="text-sm font-bold opacity-60">- Maharishi Mahesh Yogi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
