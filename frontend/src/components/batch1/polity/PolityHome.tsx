"use client";

import React from 'react';
import PolityUnifiedDashboard from './PolityUnifiedDashboard';

export default function PolityHome({ embedded, registryMode = '50' }: { embedded?: boolean, registryMode?: '50' | '95' }) {
    return (
        <div className="bg-muted dark:bg-[#0a0a0a] min-h-screen">
            <PolityUnifiedDashboard registryMode={registryMode} />
        </div>
    );
}
