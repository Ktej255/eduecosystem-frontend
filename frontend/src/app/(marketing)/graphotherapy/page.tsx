import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, PenTool, Edit3, Wind } from 'lucide-react';

export default function GraphotherapyLandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-neutral-900 dark:to-neutral-800">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-sm font-bold mb-6">
                        <PenTool className="w-4 h-4" /> Rewrite Your Subconscious
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6 leading-tight">
                        Change Your Writing, <br />
                        <span className="text-green-600 dark:text-green-400">Transform Your Life.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Graphotherapy is the scientific practice of altering handwriting strokes to remove negative traits and instill success-oriented patterns in your personality.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link href="/login">
                            <Button size="lg" className="rounded-xl px-8 h-12 bg-green-600 hover:bg-green-700 text-white font-bold text-base shadow-lg shadow-green-600/20">
                                Start Practice <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1 shrink-0">
                                    <Edit3 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Scientific Stroke Analysis</h3>
                                    <p className="text-gray-500">Learn exactly which letter formations are holding you back (like the 't' bar or 'y' loop) and how to fix them.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1 shrink-0">
                                    <Wind className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Daily 15-Minute Drills</h3>
                                    <p className="text-gray-500">Short, focused writing exercises designed to rewire neural pathways over 30 days.</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Placeholder */}
                        <div className="aspect-square rounded-3xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                            <p className="text-gray-400 font-mono text-sm">[Handwriting Sample UI]</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
