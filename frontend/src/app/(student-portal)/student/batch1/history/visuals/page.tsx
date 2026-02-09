"use client";

import React, { Suspense } from 'react';
import HistoryFeaturePlaceholder from '@/components/batch1/history/HistoryFeaturePlaceholder';
import { Map } from 'lucide-react';

function VisualsContent() {
    return (
        <HistoryFeaturePlaceholder
            title="Interactive Maps Coming Soon"
            description="Immersive visual aids and map work exercises are being developed to enhance your spatial understanding of history."
            icon={Map}
        />
    );
}

export default function HistoryVisualsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <VisualsContent />
        </Suspense>
    );
}
