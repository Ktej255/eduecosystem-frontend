"use client";

import dynamic from 'next/dynamic';

const SankalpaWizard = dynamic(
    () => import('@/components/batch2/sadhana/SankalpaWizard'),
    { ssr: false }
);

export default function SankalpaPage() {
    return (
        <div className="min-h-screen bg-[#FDF8F0] pt-20 pb-8">
            <SankalpaWizard />
        </div>
    );
}
