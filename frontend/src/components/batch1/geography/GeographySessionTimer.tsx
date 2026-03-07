"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import SessionTimer, { Topic } from '@/components/shared/SessionTimer';
import { GEOGRAPHY_REGISTRY } from './data/geography-registry';
import { toast } from 'sonner';

function GeographySessionContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const blockId = searchParams.get('block');
    const branch = searchParams.get('branch');

    const [topics, setTopics] = useState<Topic[]>([]);

    useEffect(() => {
        if (blockId && branch) {
            const blockTopics = GEOGRAPHY_REGISTRY.filter(t => t.branch === branch && t.blockId === parseInt(blockId));
            setTopics(blockTopics.map(t => ({ id: t.id, title: t.title })));
        } else {
            // Fallback to localstorage
            const saved = localStorage.getItem('current-geo-block');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    setTopics(parsed.map((t: any) => ({ id: t.id, title: t.title })));
                } catch (e) {
                    router.push('/student/batch1/geography');
                }
            } else {
                router.push('/student/batch1/geography');
            }
        }
    }, [blockId, branch, router]);

    const handleClose = () => {
        router.push('/student/batch1/geography');
    };

    if (topics.length === 0) return null;

    return (
        <SessionTimer
            topics={topics}
            subject={branch || "Geography"}
            blockId={blockId || undefined}
            accentColor="indigo"
            progressKey="geography-progress"
            confidenceKey="geography-confidence"
            onClose={handleClose}
        />
    );
}

export default function GeographySessionTimer() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center p-20 text-indigo-600 font-bold">Loading Session...</div>}>
            <GeographySessionContent />
        </Suspense>
    );
}
