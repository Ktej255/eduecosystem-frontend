"use client";

import React, { Suspense } from 'react';
import CustomRevisionSession from '@/components/batch1/polity/revision/CustomRevisionSession';

function CustomSessionContent() {
    return <CustomRevisionSession />;
}

export default function CustomRevisionPage() {
    return (
        <Suspense fallback={<div className="p-12 text-center">Loading session...</div>}>
            <CustomSessionContent />
        </Suspense>
    );
}
