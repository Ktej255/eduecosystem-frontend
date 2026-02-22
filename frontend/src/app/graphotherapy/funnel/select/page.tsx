"use client";

import TraitMenu from '@/components/graphotherapy/TraitMenu';

export default function SelectTraitsPage() {
    return (
        <div className="min-h-screen bg-muted">
            {/* Minimal Header */}
            <header className="h-16 bg-card border-b flex items-center justify-between px-4 sticky top-0 z-40">
                <div className="flex items-center gap-2 font-bold text-foreground">
                    GraphoTherapy AI™ <span className="text-purple-600 text-xs uppercase bg-purple-100 px-2 py-0.5 rounded">Premium</span>
                </div>
                <div className="text-sm text-muted-foreground">
                    Step 2 of 3: Customize
                </div>
            </header>

            <main>
                <TraitMenu />
            </main>
        </div>
    );
}
