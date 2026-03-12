"use client";

import React from 'react';
import TempleArchitecture3D from './visuals/TempleArchitecture3D';
import PerformingArtsMatrix from './visuals/PerformingArtsMatrix';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Palette, Landmark, Music, Star, ScrollText, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ArtCultureDashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Header Content */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                        <Palette className="h-8 w-8 text-rose-600" />
                        Art & Culture Hub
                    </h1>
                    <p className="text-muted-foreground dark:text-muted-foreground">Deep dive into India's vast cultural and artistic heritage.</p>
                </div>
                <div className="flex gap-3">
                    <Link href="/student/upsc/art-culture/schedule">
                        <Button className="bg-gradient-to-r from-rose-600 to-pink-700 hover:from-rose-700 hover:to-pink-800 text-white shadow-lg">
                            <Calendar className="mr-2 h-4 w-4" />
                            30-Day Heritage Plan
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard
                    label="UNESCO Sites"
                    value="42"
                    color="text-amber-500"
                    icon={<Landmark className="w-5 h-5" />}
                />
                <StatCard
                    label="Classical Dances"
                    value="8"
                    color="text-rose-500"
                    icon={<Music className="w-5 h-5" />}
                />
                <StatCard
                    label="Languages"
                    value="Classical: 6"
                    color="text-blue-500"
                    icon={<ScrollText className="w-5 h-5" />}
                />
                <StatCard
                    label="Exam Weightage"
                    value="~15 Marks"
                    color="text-emerald-500"
                    icon={<Star className="w-5 h-5" />}
                />
            </div>

            {/* Primary Visualizations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <TempleArchitecture3D />
                <PerformingArtsMatrix />
            </div>

            {/* Syllabus Overview (Secondary) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2 border-border">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Visual Arts Syllabus</CardTitle>
                        <CardDescription>Architecture, Painting, and Sculpture through the ages.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { id: '1', title: 'Ancient Era', desc: 'Indus Valley, Mauryan, Post-Mauryan and Gupta Art.' },
                                { id: '2', title: 'Medieval Era (Nagara)', desc: 'Nagara, Dravida and Vesara Temple Styles.' },
                                { id: '3', title: 'Indo-Islamic Art', desc: 'Delhi Sultanate and Mughal Architectural Excellence.' }
                            ].map((era, i) => (
                                <Link key={i} href={`/student/upsc/art-culture/${era.id}`}>
                                    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-50 hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-all group mb-2 cursor-pointer">
                                        <div className="w-2 h-10 bg-rose-500 rounded-full group-hover:bg-rose-600 transition-colors" />
                                        <div>
                                            <h4 className="font-bold text-foreground group-hover:text-rose-600 transition-colors">{era.title}</h4>
                                            <p className="text-sm text-muted-foreground">{era.desc}</p>
                                        </div>
                                        <ChevronRight className="ml-auto w-5 h-5 text-muted-foreground group-hover:text-rose-500" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-rose-50 border-rose-200 dark:bg-rose-950/20 dark:border-rose-900/50">
                    <CardHeader>
                        <CardTitle className="text-rose-900 dark:text-rose-100">UPSC Focus</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-sm text-rose-800 dark:text-rose-300">
                            Questions frequently focus on the **Evolution** of architecture and the **Philosophical** base of performing arts.
                        </p>
                        <div className="pt-4 border-t border-rose-200 dark:border-rose-900">
                            <Link href="/student/pyq?subject=art-culture">
                                <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                                    Practice PYQs
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function StatCard({ label, value, color, icon }: { label: string, value: string, color: string, icon: React.ReactNode }) {
    return (
        <Card className="overflow-hidden">
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-muted rounded-lg">
                        <div className={color}>{icon}</div>
                    </div>
                </div>
                <div>
                    <h3 className={`text-2xl font-bold mb-1`}>{value}</h3>
                    <p className="text-xs text-muted-foreground dark:text-muted-foreground font-bold uppercase tracking-widest">{label}</p>
                </div>
            </CardContent>
        </Card>
    );
}
