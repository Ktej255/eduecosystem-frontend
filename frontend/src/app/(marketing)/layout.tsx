import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Brain, Layers, PenTool, Sparkles } from 'lucide-react';

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-card dark:bg-black font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
            {/* Global Navigation */}
            <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 dark:bg-black/80 backdrop-blur-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                    {/* Logo / Brand */}
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                            <span className="text-lg">E</span>
                        </div>
                        <span>Eduecosystem</span>
                    </Link>

                    {/* Desktop Product Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground dark:text-muted-foreground">
                        <Link href="/batch1" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4" /> Batch 1
                        </Link>
                        <Link href="/batch2" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5">
                            <Layers className="w-4 h-4" /> Batch 2
                        </Link>
                        <Link href="/graphotherapy" className="hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center gap-1.5">
                            <PenTool className="w-4 h-4" /> Graphotherapy
                        </Link>
                        <Link href="/meditation" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center gap-1.5">
                            <Brain className="w-4 h-4" /> Meditation
                        </Link>
                        <Link href="/revision" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4" /> Revision
                        </Link>
                    </nav>

                    {/* Auth Button */}
                    <div>
                        <Link href="/login">
                            <Button size="sm" className="rounded-full px-6 font-semibold bg-gray-900 text-white hover:bg-gray-800 dark:bg-card dark:text-black dark:hover:bg-muted">
                                Student Login <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Global Footer */}
            <footer className="border-t border-border bg-muted dark:bg-neutral-900">
                <div className="container mx-auto px-4 py-12 md:py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="col-span-2 md:col-span-1">
                            <div className="flex items-center gap-2 font-bold text-lg mb-4">
                                <div className="w-6 h-6 rounded bg-blue-600"></div>
                                Eduecosystem
                            </div>
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                                Integrated learning platform for holistic growth. Mastering the mind, the pen, and the syllabus.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-sm uppercase tracking-wider text-foreground">Programs</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                                <li><Link href="/batch1" className="hover:underline">UPSC Prelims (Batch 1)</Link></li>
                                <li><Link href="/batch2" className="hover:underline">Sanatana Dharma (Batch 2)</Link></li>
                                <li><Link href="/graphotherapy" className="hover:underline">Graphotherapy</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-sm uppercase tracking-wider text-foreground">Tools</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                                <li><Link href="/revision" className="hover:underline">Revision Portal</Link></li>
                                <li><Link href="/meditation" className="hover:underline">Meditation Center</Link></li>
                                <li><Link href="/student/dashboard" className="hover:underline">Student Dashboard</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-sm uppercase tracking-wider text-foreground">Legal</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Eduecosystem. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
