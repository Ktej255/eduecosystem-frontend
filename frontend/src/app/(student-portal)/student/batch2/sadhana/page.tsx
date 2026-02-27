'use client';

import dynamic from 'next/dynamic';

const SadhanaJourneyView = dynamic(
    () => import('@/components/batch2/sadhana/SadhanaJourneyView'),
    { ssr: false }
);

export default function SadhanaPage() {
    return <SadhanaJourneyView />;
}
