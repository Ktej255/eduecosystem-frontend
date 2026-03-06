"use client";

import React, { Suspense } from 'react';
import GeographyDrillInterface from '@/components/batch1/geography/GeographyDrillInterface';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function GeographyDrillPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4">
                <Link href="/student/batch1/geography">
                    <button className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors font-bold text-sm uppercase tracking-widest mb-8">
                        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                    </button>
                </Link>

                <Suspense fallback={<div className="flex items-center justify-center p-20 text-indigo-600 font-bold">Loading Drill...</div>}>
                    <GeographyDrillInterface />
                </Suspense>
            </div>
        </main>
    );
}
