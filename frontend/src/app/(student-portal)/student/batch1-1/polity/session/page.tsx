"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import SessionTimer, { Topic } from '@/components/shared/SessionTimer';
import { TOPIC_TITLES as TOPIC_TITLES_95 } from '@/components/batch1-1/polity/data/polity-types-95';
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
                router.push('/student/batch1-1/polity');
            }
        } else {
            // Check localstorage fallback
            const saved = localStorage.getItem('current-polity-session-block');
            if (saved) {
                setTopics(JSON.parse(saved));
            } else {
                router.push('/student/batch1-1/polity');
            }
        }
    }, [blockId, router]);

    const handleComplete = (completedTopics: Topic[]) => {
        // Mark as completed in polity_95_progress
        const storageKey = 'polity_95_progress';
        const saved = localStorage.getItem(storageKey);
        let progress = saved ? JSON.parse(saved) : {};

        completedTopics.forEach(t => {
            const id = Number(t.id);
            if (!progress[id]) progress[id] = {};
            progress[id].completed = true;
            progress[id].lastViewed = new Date().toISOString();
        });

        localStorage.setItem(storageKey, JSON.stringify(progress));
        toast.success("Session progress saved!");
        router.push('/student/batch1-1/polity');
    };

    if (topics.length === 0) return null;

    return (
        <SessionTimer
            topics={topics}
            subject="Polity 95"
            accentColor="blue"
            backPath="/student/batch1-1/polity"
            onComplete={handleComplete}
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
