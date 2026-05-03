"use client";

import React from 'react';
import SriSuktamPrep from '@/components/batch2/sadhana/Sadhan/SriSuktamPrep';
import { TranceToggle } from "@/components/batch2/context/TranceToggle";

export default function SriSuktamToolPage() {
    return (
        <div className="relative">
            <SriSuktamPrep />
            <div className="absolute top-6 right-6 z-50">
                <TranceToggle />
            </div>
        </div>
    );
}
