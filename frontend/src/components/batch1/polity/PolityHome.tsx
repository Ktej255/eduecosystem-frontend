"use client";

import React from 'react';
// import PolityUnifiedDashboard from './PolityUnifiedDashboard';

export default function PolityHome({ embedded }: { embedded?: boolean }) {
    console.log("DEBUG: PolityHome Rendered");
    return (
        <div className="p-10 text-center bg-blue-50 border-2 border-blue-200 rounded-xl">
            <h1 className="text-2xl font-bold text-blue-800">Polity Home Debug Mode</h1>
            <p className="text-blue-600 mb-4">If you can see this, the crash is inside the Dashboard component.</p>
            {/* <PolityUnifiedDashboard /> */}
        </div>
    );
}
