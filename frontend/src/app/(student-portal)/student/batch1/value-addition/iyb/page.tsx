"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookMarked } from "lucide-react";
import Link from 'next/link';

export default function Page() {
    return (
        <div className="p-4 max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center gap-4">
                <Link href="/student/batch1/value-addition">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <BookMarked className="h-6 w-6 text-rose-600" />
                        India Year Book 2026
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Chapter-wise summary coming soon.
                    </p>
                </div>
            </div>
            <div className="h-64 flex items-center justify-center bg-muted border border-dashed rounded-xl">
                <p className="text-muted-foreground">Content under preparation.</p>
            </div>
        </div>
    );
}
