import React, { Suspense } from 'react';
import CurrentAffairsCentral from '@/components/batch1/current-affairs/CurrentAffairsCentral';

export default function CurrentAffairsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50">Loading Dashboard...</div>}>
            <CurrentAffairsCentral />
        </Suspense>
    );
}
