"use client";

import dynamic from 'next/dynamic';

const MudraGuide = dynamic(
    () => import('@/components/batch2/sadhana/Sadhan/MudraGuide'),
    { ssr: false }
);

export default function MudrasPage() {
    return (
        <div className="min-h-screen bg-[#FDF8F0] pt-20 pb-8">
            <MudraGuide />
        </div>
    );
}
