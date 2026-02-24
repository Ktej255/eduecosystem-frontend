'use client';

import dynamic from 'next/dynamic';

const MantraCompatibility = dynamic(
    () => import('@/components/batch2/sadhana/Sadhan/MantraCompatibility'),
    { ssr: false }
);

export default function CompatibilityPage() {
    return (
        <div className="min-h-screen bg-[#FDF8F0] p-4 md:p-8">
            <MantraCompatibility />
        </div>
    );
}
