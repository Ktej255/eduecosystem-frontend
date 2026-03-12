import React, { Suspense } from 'react';
import CurrentAffairsCentral from '@/components/upsc/subjects/current-affairs/CurrentAffairsCentral';

export default function CurrentAffairsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-muted">Loading Dashboard...</div>}>
            <CurrentAffairsCentral />
        </Suspense>
    );
}
