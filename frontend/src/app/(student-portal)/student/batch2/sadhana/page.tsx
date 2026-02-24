'use client';

import dynamic from 'next/dynamic';

const SadhanaDashboard = dynamic(
    () => import('@/components/batch2/sadhana/SadhanaDashboard'),
    { ssr: false }
);

export default function SadhanaPage() {
    return <SadhanaDashboard />;
}
