"use client";

import React, { Suspense } from 'react';
import HistoryFeaturePlaceholder from '@/components/batch1/history/HistoryFeaturePlaceholder';
import { Target } from 'lucide-react';

function MCQContent() {
    return (
        <HistoryFeaturePlaceholder
            title="MCQ Module Coming Soon"
            description="Our team is finalizing the Level 1, 2, and 3 question banks for this chapter. The rigorous testing interface will be live soon."
            icon={Target}
        />
    );
}

export default function HistoryMCQPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MCQContent />
        </Suspense>
    );
}
