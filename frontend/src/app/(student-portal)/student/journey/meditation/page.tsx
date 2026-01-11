"use client";

import MeditationSession from '@/components/journey/MeditationSession';

export default function MeditationPage() {
    return <MeditationSession redirectAfterComplete="/student/graphotherapy" />;
}
