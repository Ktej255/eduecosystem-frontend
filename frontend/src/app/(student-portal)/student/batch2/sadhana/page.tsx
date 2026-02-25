'use client';

import dynamic from 'next/dynamic';

const SadhanaPortalV5 = dynamic(
    () => import('@/components/batch2/sadhana/SadhanaPortalV5'),
    { ssr: false }
);

export default function SadhanaPage() {
    return <SadhanaPortalV5 />;
}
