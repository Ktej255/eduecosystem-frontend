"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Minimal Debug Imports
// We are removing all icons and standard imports to isolate the crash.

// Static Stub for Polity to verify import mechanism
const PolityHome = dynamic(() => import('@/components/batch1/polity/PolityHome'), { loading: () => <div>Loading Polity...</div> });
const FocusPortal = dynamic(() => import('@/components/batch1/FocusPortal'), { loading: () => <div>Loading Focus...</div> });

export default function Batch1Hub() {
    const [view, setView] = useState('safe');

    return (
        <div className="min-h-screen bg-gray-50 p-10 font-sans text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Batch 1 - SAFE MODE</h1>
            <p className="text-gray-600 mb-8">
                If you are seeing this, the standard page layout was causing the crash.
                Please try loading specific sections below.
            </p>

            <div className="flex justify-center gap-4 mb-10">
                <button
                    onClick={() => setView('safe')}
                    className="px-6 py-3 bg-gray-200 rounded-lg font-bold"
                >
                    Reset (Safe)
                </button>

                <button
                    onClick={() => setView('focus')}
                    className="px-6 py-3 bg-orange-100 text-orange-800 rounded-lg font-bold border border-orange-200"
                >
                    Load Focus Area
                </button>
                <button
                    onClick={() => setView('polity')}
                    className="px-6 py-3 bg-blue-100 text-blue-800 rounded-lg font-bold border border-blue-200"
                >
                    Load Polity
                </button>

            </div>

            <div className="border-t pt-8">
                {view === 'safe' && (
                    <div className="p-10 border-2 border-dashed border-gray-300 rounded-xl bg-white">
                        <p className="text-gray-400">Select a module to test loading.</p>
                    </div>
                )}

                {view === 'polity' && <PolityHome />}
                {view === 'focus' && <FocusPortal />}

            </div>

            <div className="mt-10 p-4 bg-yellow-50 text-yellow-800 text-xs text-left font-mono rounded overflow-auto">
                Debug Info: Safe Mode Active. Testing partial imports.
            </div>
        </div>
    );
}
