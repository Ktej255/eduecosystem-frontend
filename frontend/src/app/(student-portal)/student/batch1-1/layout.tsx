import React from 'react';
import MoodTracker from '@/components/batch1-1/mood/MoodTracker';

export default function Batch1_1Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen">
            {children}
            <MoodTracker />
        </div>
    );
}
