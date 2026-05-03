"use client";

import dynamic from 'next/dynamic';

const SadhanaSessionTimer = dynamic(
    () => import('@/components/batch2/sadhana/SadhanaSessionTimer'),
    { ssr: false }
);

export default function SessionPage() {
    return (
        <div className="min-h-screen bg-[#FDF8F0] pt-20 pb-8">
            <SadhanaSessionTimer />
        </div>
    );
}
