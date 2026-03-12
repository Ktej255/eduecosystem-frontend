"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Landmark, Search, ChevronDown, CheckCircle } from "lucide-react";
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { MINISTRY_REGISTRY, Ministry, Scheme } from './data/ministries';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

export default function GovernancePage() {
    const [search, setSearch] = useState('');
    const [activeMinistry, setActiveMinistry] = useState<string | null>(null);

    const filteredMinistries = MINISTRY_REGISTRY.filter(m =>
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.schemes.some(s => s.name.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-muted dark:bg-black p-4 md:p-8 text-foreground">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/student/value-addition">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold flex items-center gap-2">
                                <Landmark className="h-6 w-6 text-amber-600" />
                                Governance Registry
                            </h1>
                            <p className="text-sm text-muted-foreground">Ministry-wise Schemes & Policies Database.</p>
                        </div>
                    </div>
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search Ministry or Scheme..."
                            className="pl-10 bg-card focus-visible:ring-amber-500"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* Registry List */}
                <div className="space-y-4">
                    {filteredMinistries.map(ministry => (
                        <div key={ministry.id} className="bg-card dark:bg-[#0a0a0a] border border-border rounded-xl overflow-hidden">
                            <div
                                className="p-6 cursor-pointer hover:bg-muted dark:hover:bg-slate-900 transition-colors flex justify-between items-center"
                                onClick={() => setActiveMinistry(activeMinistry === ministry.id ? null : ministry.id)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">
                                        {ministry.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{ministry.name}</h3>
                                        <p className="text-xs text-muted-foreground uppercase tracking-widest">{ministry.minister}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Badge variant="secondary" className="bg-muted text-muted-foreground">
                                        {ministry.schemes.length} Schemes
                                    </Badge>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${activeMinistry === ministry.id ? 'rotate-180' : ''}`} />
                                </div>
                            </div>

                            <AnimatePresence>
                                {activeMinistry === ministry.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="border-t border-slate-100 bg-muted dark:bg-[#111]"
                                    >
                                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {ministry.schemes.map(scheme => (
                                                <Card key={scheme.id} className="border-border hover:shadow-md transition-all">
                                                    <CardHeader className="pb-2">
                                                        <div className="flex justify-between items-start">
                                                            <CardTitle className="text-base font-bold text-amber-600">{scheme.name}</CardTitle>
                                                            <Badge variant={scheme.status === 'Active' ? 'default' : 'secondary'} className={scheme.status === 'Active' ? 'bg-emerald-500 hover:bg-emerald-600' : ''}>
                                                                {scheme.status}
                                                            </Badge>
                                                        </div>
                                                    </CardHeader>
                                                    <CardContent className="text-sm space-y-2">
                                                        <p className="text-muted-foreground">{scheme.description}</p>
                                                        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mt-2 pt-2 border-t border-slate-100">
                                                            <div>YEAR: <span className="font-mono text-muted-foreground">{scheme.launchYear}</span></div>
                                                            <div>BUDGET: <span className="font-mono text-muted-foreground">{scheme.budget}</span></div>
                                                            <div className="col-span-2">BENEFICIARIES: <span className="font-mono text-muted-foreground">{scheme.beneficiaries}</span></div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}

                    {filteredMinistries.length === 0 && (
                        <div className="text-center py-20 text-muted-foreground">
                            No Ministries found matching your search.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
