"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Search, BookOpen, Scroll, Flame, Droplet, Wind, Mountain, Feather, Lock, ArrowLeft, CreditCard, Phone } from "lucide-react";
import Link from "next/link";
import { ALL_108_UPANISHADS, VEDA_COLORS, Upanishad108 } from "@/components/batch2/upanishads/upanishads-108-data";

export default function UpanishadsLibraryPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedVeda, setSelectedVeda] = useState<string>("All");
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedLockedUpanishad, setSelectedLockedUpanishad] = useState<Upanishad108 | null>(null);

    const vedas = ["All", "Rigveda", "Shukla Yajurveda", "Krishna Yajurveda", "Samaveda", "Atharvaveda"];

    // Only Isha Upanishad (first one) is unlocked for free
    const UNLOCKED_UPANISHAD_IDS = ["isa"];

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

    const isUnlocked = (upanishadId: string) => UNLOCKED_UPANISHAD_IDS.includes(upanishadId);

    const handleCardClick = (upanishad: Upanishad108) => {
        if (isUnlocked(upanishad.id)) {
            // Navigate to the upanishad
            window.location.href = `/student/batch2/${upanishad.id}`;
        } else {
            // Show payment modal
            setSelectedLockedUpanishad(upanishad);
            setShowPaymentModal(true);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-950">
            {/* Header */}
            <div className="sticky top-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-amber-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/student/batch2" className="flex items-center gap-2 text-amber-700 hover:text-amber-900">
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back to Journey</span>
                    </Link>
                    <div className="text-center flex-1">
                        <h1 className="text-2xl font-serif font-bold text-amber-900 dark:text-amber-100">
                            📚 Upanishad Library
                        </h1>
                        <p className="text-sm text-amber-700 dark:text-amber-300">
                            Browse all 108 Upanishads
                        </p>
                    </div>
                    <div className="w-24" /> {/* Spacer for centering */}
                </div>
            </div>

            <div className="space-y-8 p-4 md:p-8 max-w-7xl mx-auto">
                {/* Search */}
                <div className="max-w-md mx-auto relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search by name, meaning, or concept..."
                        className="pl-10 bg-white/50 backdrop-blur-sm border-amber-200 focus:ring-amber-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
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

                {/* Free Content Notice */}
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
                    <p className="text-green-800 dark:text-green-200 text-sm">
                        🎁 <strong>Isha Upanishad</strong> — the first and most foundational Upanishad — is available for free!
                        Unlock all 108 Upanishads to continue your spiritual journey.
                    </p>
                </div>

                {/* Upanishad Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredUpanishads.map((upanishad) => {
                        const colors = VEDA_COLORS[upanishad.veda] || { bg: "#fff", border: "#ccc", text: "#000" };
                        const unlocked = isUnlocked(upanishad.id);

                        return (
                            <div key={upanishad.id} onClick={() => handleCardClick(upanishad)}>
                                <Card
                                    className={`group hover:shadow-lg transition-all duration-300 border-t-4 cursor-pointer relative overflow-hidden h-full ${!unlocked ? 'opacity-80' : ''}`}
                                    style={{ borderTopColor: colors.border }}
                                >
                                    {/* Lock overlay for locked content */}
                                    {!unlocked && (
                                        <div className="absolute inset-0 bg-gray-900/10 dark:bg-gray-900/30 flex items-center justify-center z-10">
                                            <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-3 shadow-lg">
                                                <Lock className="h-6 w-6 text-amber-600" />
                                            </div>
                                        </div>
                                    )}

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
                                            {unlocked ? (
                                                <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                                                    Free
                                                </Badge>
                                            ) : (
                                                <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                                                    Premium
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
                                            {unlocked ? upanishad.description : "Unlock to view content..."}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="flex flex-wrap gap-2 text-xs text-gray-500 mt-2">
                                            <span className="flex items-center gap-1" style={{ color: colors.text }}>
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
                            </div>
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

            {/* Payment Modal */}
            <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-serif text-amber-900">
                            🔒 Unlock Premium Content
                        </DialogTitle>
                        <DialogDescription>
                            {selectedLockedUpanishad && (
                                <span>
                                    <strong>{selectedLockedUpanishad.name}</strong> and all 108 Upanishads are part of the premium Ancient Wisdom collection.
                                </span>
                            )}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                            <h4 className="font-bold text-amber-900 mb-2">What you'll get:</h4>
                            <ul className="text-sm text-amber-800 space-y-1">
                                <li>✅ Access to all 108 Upanishads</li>
                                <li>✅ Detailed shloka-by-shloka explanations</li>
                                <li>✅ Sanskrit text with translations</li>
                                <li>✅ Audio recitations</li>
                                <li>✅ Progress tracking & certificates</li>
                            </ul>
                        </div>

                        <div className="text-center">
                            <p className="text-2xl font-bold text-amber-900">₹2,999</p>
                            <p className="text-sm text-gray-500">One-time payment • Lifetime access</p>
                        </div>
                    </div>

                    <DialogFooter className="flex flex-col gap-2 sm:flex-col">
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white gap-2">
                            <CreditCard className="h-4 w-4" />
                            Pay Now
                        </Button>
                        <Button variant="outline" className="w-full gap-2" onClick={() => window.open('https://wa.me/919876543210?text=I%20want%20to%20enroll%20in%20Ancient%20Wisdom%20course', '_blank')}>
                            <Phone className="h-4 w-4" />
                            Contact on WhatsApp
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
