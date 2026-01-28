
import React from 'react';
import PYQExplorer from '@/components/batch1/polity/PYQExplorer';

export default function PYQPage() {
    return (
        <div className="w-full h-full min-h-screen bg-slate-50 dark:bg-black">
            <div className="max-w-[1920px] mx-auto pt-4 md:pt-8">
                <PYQExplorer />
            </div>
        </div>
    );
}
