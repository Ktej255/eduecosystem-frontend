"use client";

import DailyDrillMode from '@/components/graphotherapy/DailyDrillMode';
import { GraphotherapyEngine } from '@/lib/graphotherapy/grapho-engine';
import { notFound } from 'next/navigation';
import { use } from 'react';

export default function DrillPage({ params }: { params: Promise<{ day: string }> }) {
    // Correctly unwrap params using React.use for Next.js 15+ compatibility
    const resolvedParams = use(params);
    const day = parseInt(resolvedParams.day, 10);

    const drill = GraphotherapyEngine.getDrillForDay(day);

    if (!drill) {
        notFound();
    }

    return <DailyDrillMode drill={drill} />;
}
