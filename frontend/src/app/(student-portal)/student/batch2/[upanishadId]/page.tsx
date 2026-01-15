"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ALL_108_UPANISHADS, VEDA_COLORS, Upanishad108 } from "@/components/batch2/upanishads/upanishads-108-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Share2, Printer, Info, PlayCircle } from "lucide-react";
import { UPANISHAD_REGISTRY } from "@/components/batch2/upanishads/upanishad-registry";
import KenaLayout from "@/components/batch2/upanishads/KenaLayout";
import IshaLayout from "@/components/batch2/upanishads/IshaLayout";

export default function UpanishadReaderPage() {
    const params = useParams();
    const router = useRouter();
    const [upanishad, setUpanishad] = useState<Upanishad108 | null>(null);

    useEffect(() => {
        if (params.upanishadId) {
            const found = ALL_108_UPANISHADS.find(u => u.id === params.upanishadId);
            setUpanishad(found || null);
        }
    }, [params.upanishadId]);

    if (!upanishad) {
        return <div className="p-8 text-center">Loading Upanishad...</div>;
    }

    // Check for Custom Layouts
    const registryEntry = UPANISHAD_REGISTRY[upanishad.id];
    if (registryEntry?.hasCustomLayout) {
        if (upanishad.id === "kena") return <KenaLayout />;
        if (upanishad.id === "isa") return <IshaLayout />;
    }

    const colors = VEDA_COLORS[upanishad.veda] || { bg: "#fff", border: "#ccc", text: "#000" };

    return (
        <div className="min-h-screen bg-[#FDFBF7] pb-20">
            {/* Top Navigation */}
            <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b px-4 py-3 flex items-center justify-between">
                <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-gray-600">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Library
                </Button>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" title="Share" disabled>
                        <Share2 className="h-4 w-4 text-gray-500" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Print" disabled>
                        <Printer className="h-4 w-4 text-gray-500" />
                    </Button>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-3xl mx-auto mt-8 px-4 md:px-0">

                {/* Title Card */}
                <div
                    className="rounded-xl p-8 text-center border-b-4 mb-8 shadow-sm"
                    style={{ backgroundColor: colors.bg, borderColor: colors.border }}
                >
                    <div className="uppercase tracking-widest text-xs font-bold mb-2 opacity-70" style={{ color: colors.text }}>
                        {upanishad.veda} • {upanishad.category}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">
                        {upanishad.name} Upanishad
                    </h1>
                    <h2 className="text-2xl font-serif text-gray-600 mb-6 font-normal">
                        {upanishad.nameSanskrit}
                    </h2>
                    <p className="text-lg opacity-90 max-w-xl mx-auto italic" style={{ color: colors.text }}>
                        "{upanishad.description}"
                    </p>
                </div>

                {/* Metadata Stripe */}
                <div className="flex justify-center gap-6 text-sm text-gray-500 mb-12 border-y py-4">
                    <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{upanishad.shlokaCount ? `${upanishad.shlokaCount} Shlokas` : "Unknown Length"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        <span>Order #{upanishad.studyOrder}</span>
                    </div>
                </div>

                {/* Reader Content Placeholder */}
                <Card className="border-none shadow-none bg-transparent">
                    <CardContent className="space-y-6 text-lg leading-relaxed text-gray-800 font-serif">
                        <div className="p-12 border-2 border-dashed border-gray-200 rounded-lg text-center bg-gray-50">
                            <PlayCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-700">Content Coming Soon</h3>
                            <p className="text-gray-500 mt-2">
                                The full text translation and commentary for the <strong>{upanishad.name} Upanishad</strong> is currently being digitized.
                            </p>
                            <Button className="mt-6" variant="outline">
                                Request Priority Access
                            </Button>
                        </div>

                        {/* Sample Introduction (Static for now) */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-4">Introduction</h3>
                            <p>
                                The {upanishad.name} Upanishad is a significant text belonging to the {upanishad.veda} tradition.
                                It is classified as a {upanishad.category} Upanishad, dealing primarily with {upanishad.description.toLowerCase()}.
                            </p>
                            <p className="mt-4">
                                As part of the Muktika canon (listed at number {upanishad.studyOrder}), it plays a vital role in understanding the specific Vedantic nuances of the {upanishad.veda} school of thought.
                            </p>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
