"use client";

import dynamic from 'next/dynamic';

const PatrasadanaSetup = dynamic(
    () => import('@/components/batch2/sadhana/Sadhan/PatrasadanaSetup'),
    { ssr: false }
);

export default function PatrasadanaPage() {
    return (
        <div className="min-h-screen bg-[#FDF8F0] pt-20 pb-8">
            <PatrasadanaSetup />
        </div>
    );
}
