"use client";

import React from 'react';
import { GeographyDrillInterface } from '@/components/upsc/subjects/geography/GeographyDrillInterface';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function RevisionPage() {
    return (
        <div className="min-h-screen bg-card p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-black tracking-tight text-foreground uppercase italic">Geography <span className="text-emerald-500">Revision Suite</span></h1>
                        <p className="text-muted-foreground font-medium mt-1">High-intensity retention drills and active recall sessions.</p>
                    </div>
                    <Link href="/student/upsc/geography">
                        <Button variant="outline" className="rounded-xl font-bold">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                        </Button>
                    </Link>
                </div>
                
                <div className="bg-muted/30 rounded-[2.5rem] border border-border overflow-hidden shadow-2xl">
                    <GeographyDrillInterface />
                </div>
            </div>
        </div>
    );
}
