"use client";

import ReportGeneration from '@/components/graphotherapy/ReportGeneration';

export default function AnalysisPage() {
    return (
        <div className="min-h-screen bg-muted flex flex-col">
            <header className="h-16 bg-card border-b flex items-center justify-center px-4">
                <div className="flex items-center gap-2 text-foreground font-bold">
                    GraphoTherapy AI™
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8 md:py-16">
                <ReportGeneration />
            </main>
        </div>
    );
}
