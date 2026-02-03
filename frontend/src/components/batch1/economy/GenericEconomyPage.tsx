"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp } from "lucide-react";
import Link from 'next/link';

export default function GenericEconomyPage({ title = "Module Coming Soon" }: { title?: string }) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black p-8 flex flex-col items-center justify-center">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="h-10 w-10 text-emerald-600" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{title}</h1>
                <p className="text-slate-500">
                    Detailed notes and simulations for this Economy module are under development.
                </p>
                <Link href="/student/batch1/economy">
                    <Button variant="outline" className="gap-2 border-emerald-200 hover:bg-emerald-50 text-emerald-700">
                        <ArrowLeft className="h-4 w-4" /> Back to Dashboard
                    </Button>
                </Link>
            </div>
        </div>
    );
}
