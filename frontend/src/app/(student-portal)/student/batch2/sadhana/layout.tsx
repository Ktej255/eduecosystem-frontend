"use client";

import { JourneyNavigation } from "@/components/batch2/sadhana/JourneyNavigation";
import dynamic from 'next/dynamic';

const AmbientSoundscape = dynamic(
    () => import('@/components/batch2/sadhana/AmbientSoundscape'),
    { ssr: false }
);

const SanskritParticles = dynamic(
    () => import('@/components/batch2/sadhana/SanskritParticles'),
    { ssr: false }
);

export default function SadhanaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative w-full h-full min-h-screen">
            <SanskritParticles count={18} />
            <JourneyNavigation />
            {children}
            <AmbientSoundscape />
        </div>
    );
}


