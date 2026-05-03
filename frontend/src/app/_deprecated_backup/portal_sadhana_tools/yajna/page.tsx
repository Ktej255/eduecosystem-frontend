'use client';

import dynamic from 'next/dynamic';

const YajnaRitualEngine = dynamic(
    () => import('@/components/batch2/sadhana/Sadhan/YajnaRitualEngine'),
    { ssr: false }
);

export default function YajnaPage() {
    return (
        <div className="min-h-screen bg-[#FDF8F0] p-4 md:p-8">
            <YajnaRitualEngine />
        </div>
    );
}
