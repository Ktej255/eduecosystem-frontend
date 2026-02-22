"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cpu } from "lucide-react";
import Link from 'next/link';

export default function GenericSciTechPage({ title = "Module Coming Soon" }: { title?: string }) {
    return (
        <div className="min-h-screen bg-muted dark:bg-black p-8 flex flex-col items-center justify-center">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto">
                    <Cpu className="h-10 w-10 text-indigo-600" />
                </div>
                <h1 className="text-3xl font-bold text-foreground">{title}</h1>
                <p className="text-muted-foreground">
                    Detailed notes and simulations for this module are under development.
                </p>
                <Link href="/student/batch1/science-tech">
                    <Button variant="outline" className="gap-2">
                        <ArrowLeft className="h-4 w-4" /> Back to Dashboard
                    </Button>
                </Link>
            </div>
        </div>
    );
}
