"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, BookOpen, Scroll, Flame, Droplet, Wind, Mountain, Feather } from "lucide-react";
import Link from "next/link";
import { ALL_108_UPANISHADS, VEDA_COLORS, Upanishad108 } from "@/components/batch2/upanishads/upanishads-108-data";

export default function Batch2Page() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedVeda, setSelectedVeda] = useState<string>("All");

    const vedas = ["All", "Rigveda", "Shukla Yajurveda", "Krishna Yajurveda", "Samaveda", "Atharvaveda"];

    const filteredUpanishads = ALL_108_UPANISHADS.filter(u => {
        const matchesSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.nameSanskrit.includes(searchQuery) ||
            u.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesVeda = selectedVeda === "All" || u.veda === selectedVeda;
        return matchesSearch && matchesVeda;
    });

    const getVedaIcon = (veda: string) => {
        switch (veda) {
            case "Rigveda": return <Flame className="h-4 w-4" />;
            case "Shukla Yajurveda": return <Wind className="h-4 w-4" />;
            case "Krishna Yajurveda": return <Mountain className="h-4 w-4" />;
            case "Samaveda": return <Feather className="h-4 w-4" />;
            case "Atharvaveda": return <Droplet className="h-4 w-4" />;
            default: return <BookOpen className="h-4 w-4" />;
        }
    };

    return (
        <div className="space-y-8 p-4 md:p-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-serif font-bold text-amber-900 dark:text-amber-100">
                    The Muktika Canon
                </h1>
                <p className="text-xl text-amber-700 dark:text-amber-300">
                    108 Upanishads • The Essence of Vedanta
                </p>
                <div className="max-w-md mx-auto relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search by name, meaning, or concept..."
                        className="pl-10 bg-white/50 backdrop-blur-sm border-amber-200 focus:ring-amber-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Veda Filters */}
            <div className="flex flex-wrap justify-center gap-2">
                {vedas.map(veda => (
                    <Button
                        key={veda}
                        variant={selectedVeda === veda ? "default" : "outline"}
                        onClick={() => setSelectedVeda(veda)}
                        className={`rounded-full ${selectedVeda === veda ? 'bg-amber-600 hover:bg-amber-700' : 'hover:bg-amber-50'}`}
                    >
                        {veda}
                    </Button>
                ))}
            </div>

            {/* Upanishad Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredUpanishads.map((upanishad) => {
                    const colors = VEDA_COLORS[upanishad.veda] || { bg: "#fff", border: "#ccc", text: "#000" };

                    return (
                        <Link href={`/student/batch2/${upanishad.id}`} key={upanishad.id}>
                            <Card
                                className="group hover:shadow-lg transition-all duration-300 border-t-4 cursor-pointer relative overflow-hidden h-full"
                                style={{ borderTopColor: colors.border }}
                            >
                                <div
                                    className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity"
                                    style={{ color: colors.text }}
                                >
                                    {getVedaIcon(upanishad.veda)}
                                </div>

                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start">
                                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                                            #{upanishad.studyOrder}
                                        </span>
                                        {upanishad.isPrincipal && (
                                            <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                                                Mukhya
                                            </Badge>
                                        )}
                                    </div>
                                    <CardTitle className="text-xl font-serif mt-2 flex items-baseline gap-2">
                                        {upanishad.name}
                                        <span className="text-sm font-normal text-gray-400 font-sans">
                                            {upanishad.nameSanskrit}
                                        </span>
                                    </CardTitle>
                                    <CardDescription className="line-clamp-2">
                                        {upanishad.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mt-2">
                                        <span className="flex items-center gap-1" style={{ color: colors.text }}>
                                            {/* Veda Name */}
                                            {upanishad.veda}
                                        </span>
                                        <span>•</span>
                                        <span>{upanishad.category}</span>
                                        {upanishad.shlokaCount && (
                                            <>
                                                <span>•</span>
                                                <span>{upanishad.shlokaCount} Shlokas</span>
                                            </>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    );
                })}
            </div>

            {filteredUpanishads.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    <Scroll className="h-12 w-12 mx-auto mb-4 opacity-20" />
                    <p>No Upanishads found matching your criteria.</p>
                </div>
            )}
        </div>
    );
}
