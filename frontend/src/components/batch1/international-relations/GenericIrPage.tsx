"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe } from "lucide-react";
import Link from 'next/link';

export default function GenericIrPage({ title = "Module Coming Soon" }: { title?: string }) {
    return (
        <div className="min-h-screen bg-indigo-50 dark:bg-black p-8 flex flex-col items-center justify-center">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto">
                    <Globe className="h-10 w-10 text-indigo-600" />
                </div>
                <h1 className="text-3xl font-bold text-indigo-900 dark:text-indigo-100">{title}</h1>
                <p className="text-indigo-700 dark:text-indigo-300">
                    Detailed analysis and geopolitical maps for this module are being compiled.
                </p>
                <Link href="/student/batch1/international-relations">
                    <Button variant="outline" className="gap-2 border-indigo-200 hover:bg-indigo-50 text-indigo-700">
                        <ArrowLeft className="h-4 w-4" /> Back to Global Hub
                    </Button>
                </Link>
            </div>
        </div>
    );
}
