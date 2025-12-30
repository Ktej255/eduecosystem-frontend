"use client";

import { use } from 'react';
import TopicViewer from '@/components/batch1/history/TopicViewer';
import { getTopicById } from '@/components/batch1/history/data/history-registry';
import Link from 'next/link';

interface TopicPageProps {
    params: Promise<{ topicId: string }>;
}

export default function TopicPage({ params }: TopicPageProps) {
    const { topicId } = use(params);
    const topic = getTopicById(parseInt(topicId, 10));

    if (!topic) {
        return (
            <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a] flex items-center justify-center">
                <div className="text-center p-8">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Topic Not Found
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Day {topicId} is coming soon or does not exist.
                    </p>
                    <Link
                        href="/student/batch1/history"
                        className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
                    >
                        Back to History
                    </Link>
                </div>
            </div>
        );
    }

    return <TopicViewer topic={topic} />;
}
