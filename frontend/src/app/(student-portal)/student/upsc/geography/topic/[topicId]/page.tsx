"use client";

import { use } from 'react';
import GeographyTopicViewer from '@/components/upsc/subjects/geography/GeographyTopicViewer';
import { getGeographyTopicById } from '@/components/upsc/subjects/geography/data/geography-registry';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Globe } from 'lucide-react';
import Link from 'next/link';

interface TopicPageProps {
    params: Promise<{ topicId: string }>;
}

export default function TopicPage({ params }: TopicPageProps) {
    const { topicId } = use(params);
    const topic = getGeographyTopicById(parseInt(topicId, 10));

    if (!topic) {
        return (
            <div className="min-h-screen bg-card flex flex-col items-center justify-center text-center p-8">
               <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                   <Globe className="w-12 h-12 text-emerald-500 animate-pulse" />
               </div>
               <h1 className="text-4xl font-black text-foreground mb-4 italic tracking-tight">Geographic Anomaly Detected</h1>
               <p className="text-muted-foreground text-xl font-medium max-w-md mb-8 leading-relaxed">
                   The coordinate <strong>[Topic {topicId}]</strong> could not be located in our geocentric database. It might be shifting in the lithosphere.
               </p>
               <Link href="/student/upsc/geography">
                   <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 text-lg rounded-xl font-bold shadow-lg shadow-emerald-500/20 active:scale-95 transition-all">
                       <ArrowLeft className="w-5 h-5 mr-3" /> Retreat to Command Center
                   </Button>
               </Link>
            </div>
        );
    }

    return <GeographyTopicViewer topic={topic} topicId={parseInt(topicId, 10)} />;
}
