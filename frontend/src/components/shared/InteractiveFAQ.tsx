"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Send, Sparkles, HelpCircle, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FAQProps {
    lessonId: string;
    context: string;
}

export default function InteractiveFAQ({ lessonId, context }: FAQProps) {
    const [query, setQuery] = useState('');
    const [answers, setAnswers] = useState<{ q: string, a: string }[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        const q = query;
        setQuery('');

        // Mock AI response based on context (In real app, this would hit a RAG endpoint)
        setTimeout(() => {
            let answer = "I'm analyzing the lesson content to provide a precise answer...";

            if (q.toLowerCase().includes('monetary')) {
                answer = "Monetary policy refers to the actions taken by the central bank (RBI in India) to control the supply of money and the cost of borrowing. Key tools include the Repo Rate and Reverse Repo Rate.";
            } else if (q.toLowerCase().includes('inflation')) {
                answer = "Inflation is the rate at which the general level of prices for goods and services is rising. The RBI targets CPI (Consumer Price Index) inflation at 4% with a margin of +/- 2%.";
            } else if (q.toLowerCase().includes('fiscal')) {
                answer = "Fiscal policy is managed by the Government, focusing on taxation and public spending to influence the economy, unlike monetary policy which is handled by the RBI.";
            } else {
                answer = `Based on the ${lessonId} module, this concept is linked to the broader structural framework of Indian Economic stability. Would you like to deep-dive into the related PYQs?`;
            }

            setAnswers(prev => [{ q, a: answer }, ...prev]);
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="mt-12 p-8 rounded-3xl bg-neutral-900 border border-white/10 shadow-inner">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-500/10 rounded-xl">
                    <HelpCircle className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Interactive Lesson FAQ</h3>
                    <p className="text-white/40 text-sm">Ask anything about this module. Our AI analyzes the reading material for you.</p>
                </div>
            </div>

            <form onSubmit={handleSearch} className="relative mb-8">
                <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g., How does high inflation affect the Repo Rate?"
                    className="h-14 pl-12 pr-32 bg-card/5 border-white/10 text-white rounded-2xl focus:ring-purple-500/50"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                <Button
                    type="submit"
                    disabled={loading || !query.trim()}
                    className="absolute right-2 top-2 h-10 bg-purple-600 hover:bg-purple-700 text-white gap-2"
                >
                    {loading ? 'Answering...' : 'Ask AI'}
                    {!loading && <Sparkles className="w-3 h-3" />}
                </Button>
            </form>

            <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                <AnimatePresence>
                    {answers.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="p-5 rounded-2xl bg-card/5 border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <span className="text-xs font-bold text-white/30 uppercase mt-1">Q:</span>
                                <p className="text-sm font-bold text-white/90">{item.q}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xs font-bold text-purple-400 uppercase mt-1">A:</span>
                                <div className="text-sm text-white/60 leading-relaxed">
                                    {item.a}
                                    <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-purple-400/60 uppercase">
                                        <ArrowRight className="w-3 h-3" />
                                        <span>Verified Insight</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {answers.length === 0 && !loading && (
                    <div className="h-40 flex flex-col items-center justify-center text-white/20 border-2 border-dashed border-white/5 rounded-2xl">
                        <HelpCircle className="w-8 h-8 mb-2 opacity-50" />
                        <p className="text-sm">Your questions will appear here</p>
                    </div>
                )}
            </div>
        </div>
    );
}
