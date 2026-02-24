"use client";

import dynamic from 'next/dynamic';

const DinacharyaDashboard = dynamic(
    () => import('@/components/batch2/sadhana/Sadhan/DinacharyaDashboard'),
    { ssr: false }
);

export default function DinacharyaPage() {
    return (
        <div className="min-h-screen bg-[#FDF8F0] pt-20 pb-8">
            <DinacharyaDashboard />
        </div>
    );
}
