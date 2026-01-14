"use client";

import TraitMenu from '@/components/graphotherapy/TraitMenu';

export default function SelectTraitsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            {/* Minimal Header */}
            <header className="h-16 bg-white dark:bg-gray-900 border-b flex items-center justify-between px-4 sticky top-0 z-40">
                <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
                    GraphoTherapy AI™ <span className="text-purple-600 text-xs uppercase bg-purple-100 px-2 py-0.5 rounded">Premium</span>
                </div>
                <div className="text-sm text-gray-500">
                    Step 2 of 3: Customize
                </div>
            </header>

            <main>
                <TraitMenu />
            </main>
        </div>
    );
}
