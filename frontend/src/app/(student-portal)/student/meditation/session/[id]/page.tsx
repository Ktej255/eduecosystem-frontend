"use client";

import SessionPlayer from '@/components/meditation/SessionPlayer';
import { MeditationEngine } from '@/lib/meditation/meditation-engine';
import { notFound } from 'next/navigation';
import { use } from 'react';

export default function MeditationSessionPage({ params }: { params: Promise<{ id: string }> }) {
    // Determine the session from dynamic ID
    const resolvedParams = use(params);
    const session = MeditationEngine.getSessionById(resolvedParams.id);

    if (!session) {
        notFound();
    }

    return <SessionPlayer session={session} />;
}
