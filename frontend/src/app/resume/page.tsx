
"use client";

import React from 'react';
import ModernResume from '@/components/resume/ModernResume';
import { SUNITA_RESUME } from '@/components/resume/data/sunita-data';

export default function ResumePage() {
    return (
        <ModernResume data={SUNITA_RESUME} />
    );
}
