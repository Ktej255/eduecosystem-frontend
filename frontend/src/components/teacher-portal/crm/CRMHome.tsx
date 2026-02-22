"use client";

import React from 'react';
import LeadWarmthTracker from './LeadWarmthTracker';
import EmailSequencer from './EmailSequencer';

export default function CRMHome() {
    return (
        <div className="p-6 h-[calc(100vh-64px)] overflow-hidden bg-neutral-50 dark:bg-neutral-950">
            <div className="mb-6">
                <h1 className="text-3xl font-black text-neutral-900">CRM & Automation</h1>
                <p className="text-neutral-500">Manage student leads, track engagement warmth, and automate nurture sequences.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full pb-20">
                {/* Left: Lead Tracker (4 cols) */}
                <div className="lg:col-span-4 h-full">
                    <LeadWarmthTracker />
                </div>

                {/* Right: Sequencer (8 cols) */}
                <div className="lg:col-span-8 h-full">
                    <EmailSequencer />
                </div>
            </div>
        </div>
    );
}
