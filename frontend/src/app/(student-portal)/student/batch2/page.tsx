"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Library, ArrowRight, LayoutDashboard } from "lucide-react";
import UpanishadProgressSequence from "@/components/batch2/UpanishadProgressSequence";
import UpanishadsLibraryView from "@/components/batch2/upanishads/UpanishadsLibraryView";

export default function Batch2Page() {
    const [showLibrary, setShowLibrary] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-950">
            {/* Header with Library Button */}
            <div className="sticky top-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-amber-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-serif font-bold text-amber-900 dark:text-amber-100">
                            Batch 2: Ancient Wisdom
                        </h1>
                        <p className="text-sm text-amber-700 dark:text-amber-300">
                            108 Upanishads • Journey of Enlightenment
                        </p>
                    </div>
                    <div>
                        {showLibrary ? (
                            <Button
                                variant="outline"
                                onClick={() => setShowLibrary(false)}
                                className="gap-2 border-amber-300 text-amber-800 hover:bg-amber-100"
                            >
                                <LayoutDashboard className="h-4 w-4" />
                                View Progress Map
                            </Button>
                        ) : (
                            <Button
                                variant="outline"
                                onClick={() => setShowLibrary(true)}
                                className="gap-2 border-amber-300 text-amber-800 hover:bg-amber-100"
                            >
                                <Library className="h-4 w-4" />
                                View Library
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            {showLibrary ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <UpanishadsLibraryView onClose={() => setShowLibrary(false)} />
                </div>
            ) : (
                <>
                    {/* Flowchart Progress View */}
                    <div className="p-4 md:p-8">
                        <UpanishadProgressSequence currentUpanishadId="isa" />
                    </div>

                    {/* Info Section */}
                    <div className="max-w-4xl mx-auto px-4 pb-12">
                        <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-amber-200 dark:border-gray-800 p-6 text-center">
                            <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">
                                Your Upanishad Journey
                            </h3>
                            <p className="text-amber-700 dark:text-amber-300 text-sm max-w-2xl mx-auto">
                                Complete each Upanishad in sequence to unlock the next. Click on an unlocked level to begin your study.
                                The flowchart shows your progress through the 108 Upanishads.
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
