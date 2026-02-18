"use client";

import React from 'react';
import PolityUnifiedDashboard from './PolityUnifiedDashboard';

export default function PolityHome({ embedded }: { embedded?: boolean }) {
    return (
        <div className="bg-gray-50 dark:bg-[#0a0a0a] min-h-screen">
            <PolityUnifiedDashboard />
        </div>
    );
}
