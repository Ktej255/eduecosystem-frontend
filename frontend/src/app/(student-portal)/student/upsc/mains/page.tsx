"use client";

import React from 'react';
import MainsAnswerWorkspace from '@/components/upsc/MainsAnswerWorkspace';

export default function UPSCMainPracticePage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
            {/* Split layout is handled inside the workspace component */}
            <MainsAnswerWorkspace />
        </div>
    );
}
