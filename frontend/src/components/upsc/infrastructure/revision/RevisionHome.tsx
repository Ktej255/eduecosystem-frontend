"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    History,
    Trees
} from 'lucide-react';
import RevisionPortalPage from '@/app/(student-portal)/student/revision/page';

/**
 * RevisionHome
 * Wrapper component to integrate the Global Revision Portal into the Batch 1 / UPSC Hub
 */
export default function RevisionHome() {
    // We can reuse the entire page logic or just mount the page component
    // effectively embedding the Revision Portal here.
    return (
        <div className="min-h-screen bg-transparent">
            <RevisionPortalPage />
        </div>
    );
}
