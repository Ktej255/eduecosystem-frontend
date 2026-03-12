"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import SessionTimer, { Topic } from '@/components/shared/SessionTimer';
import { TOPIC_TITLES as TOPIC_TITLES_95 } from '@/components/upsc/platform/polity/data/polity-types-95';
import { toast } from 'sonner';

function PolitySessionContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const blockId = searchParams.get('block');
    const [topics, setTopics] = useState<Topic[]>([]);

    useEffect(() => {
        if (blockId) {
            const blockTopics = TOPIC_TITLES_95.filter(t => t.blockId === parseInt(blockId));
            if (blockTopics.length > 0) {
                setTopics(blockTopics.map(t => ({ id: t.id, title: t.title, blockId: t.blockId, branch: t.part })));
            } else {
                toast.error("Block not found");
                router.push('/student/upsc/polity');
            }
        } else {
            // Check localstorage fallback
            const saved = localStorage.getItem('current-polity-session-block');
            if (saved) {
                setTopics(JSON.parse(saved));
            } else {
                router.push('/student/upsc/polity');
            }
        }
    }, [blockId, router]);

    const handleClose = () => {
        router.push('/student/upsc/polity');
    };

    if (topics.length === 0) return null;

    return (
        <SessionTimer
            topics={topics}
            subject="Polity 95"
            blockId={blockId || undefined}
            accentColor="amber"
            storagePrefix="polity_95"
            onClose={handleClose}
        />
    );
}

export default function PolitySessionPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Suspense fallback={<div className="flex items-center justify-center p-20 text-indigo-600 font-bold">Loading Session...</div>}>
                <PolitySessionContent />
            </Suspense>
        </div>
    );
}
