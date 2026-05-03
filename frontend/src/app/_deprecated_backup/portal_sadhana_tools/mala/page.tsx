'use client';

import dynamic from 'next/dynamic';

const DigitalMala = dynamic(
    () => import('@/components/batch2/sadhana/Sadhan/DigitalMala'),
    { ssr: false }
);

export default function MalaPage() {
    return (
        <div className="min-h-screen bg-[#FDF8F0] p-4 md:p-8">
            <DigitalMala />
        </div>
    );
}
