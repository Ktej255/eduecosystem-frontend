"use client";

import React, { useState } from 'react';
import { MNEMONIC_DATA, MnemonicItem } from '../data/mnemonic-data';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Lightbulb, ChevronDown, ChevronUp, Copy, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MnemonicGallery() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...Array.from(new Set(MNEMONIC_DATA.map(m => m.category)))];

    const filteredData = filter === 'All'
        ? MNEMONIC_DATA
        : MNEMONIC_DATA.filter(m => m.category === filter);

    return (
        <div className="max-w-7xl mx-auto space-y-6 font-['Calibri']">
            {/* Header & Filter */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-card p-4 rounded-2xl border border-border shadow-sm">
                <div className="flex items-center gap-2">
                    <span className="bg-yellow-100 p-2 rounded-lg text-yellow-700">
                        <Lightbulb size={24} />
                    </span>
                    <div>
                        <h2 className="text-xl font-black text-foreground">Mnemonic Cheat Codes</h2>
                        <p className="text-xs text-muted-foreground">Memorize the impossible with these hacks.</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${filter === cat
                                    ? 'bg-slate-800 text-white shadow-md'
                                    : 'bg-muted text-muted-foreground hover:bg-slate-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData.map(item => (
                    <MnemonicCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

function MnemonicCard({ item }: { item: MnemonicItem }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`${item.title}\nMnemonic: ${item.mnemonic}\n${item.explanation}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div layout>
            <Card className="overflow-hidden border-2 border-slate-100 hover:border-border transition-colors h-full flex flex-col">
                <div className={`p-4 ${item.color.split(' ')[0]} border-b border-white/20 flex justify-between items-start`}>
                    <Badge variant="outline" className="bg-card/50 border-white/30 text-foreground font-bold backdrop-blur-sm">
                        {item.category}
                    </Badge>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6 text-muted-foreground hover:bg-card/30 rounded-full"
                        onClick={handleCopy}
                    >
                        {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                    </Button>
                </div>

                <CardContent className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                        {item.title}
                    </h3>

                    <div className="bg-muted p-4 rounded-xl border-l-4 border-yellow-400 mb-4">
                        <p className="text-lg font-medium text-foreground font-mono">
                            "{item.mnemonic}"
                        </p>
                    </div>

                    <div className="mt-auto">
                        <Button
                            onClick={() => setIsExpanded(!isExpanded)}
                            variant="ghost"
                            className="w-full justify-between hover:bg-muted text-muted-foreground text-xs uppercase font-bold tracking-wider"
                        >
                            {isExpanded ? 'Hide Explanation' : 'Decode Mnemonic'}
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </Button>
                    </div>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 text-sm text-muted-foreground space-y-1 whitespace-pre-line border-t border-slate-100 mt-2">
                                    {item.explanation}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>
        </motion.div>
    );
}
