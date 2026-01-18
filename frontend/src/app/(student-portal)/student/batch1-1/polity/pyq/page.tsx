"use client";

import PYQExplorer from "@/components/batch1/polity/PYQExplorer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PolityPYQPage() {
    const router = useRouter();

    return (
        <div className="space-y-6 max-w-4xl mx-auto p-4 md:p-6 pb-20">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => router.back()}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                        <BookOpen className="h-6 w-6 text-indigo-600" />
                        Polity PYQ Bank (2013-2023)
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Practice previous year questions topic-wise or year-wise.
                    </p>
                </div>
            </div>

            {/* Content */}
            <PYQExplorer />
        </div>
    );
}
