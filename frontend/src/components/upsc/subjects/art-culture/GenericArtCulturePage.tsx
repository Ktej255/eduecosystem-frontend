"use client";

import React from 'react';
import { getArtCultureContent } from './data/registry';
import ArtCultureTopicViewer from './ArtCultureTopicViewer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";
import Link from 'next/link';

interface GenericArtCulturePageProps {
    topicId: string;
}

export default function GenericArtCulturePage({ topicId }: GenericArtCulturePageProps) {
    const content = getArtCultureContent(topicId);

    if (!content) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-rose-50/20">
                <Card className="max-w-md w-full text-center p-8 border-rose-100 shadow-xl">
                    <Construction className="w-16 h-16 text-rose-300 mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-rose-900 mb-4">Under Construction</h2>
                    <p className="text-rose-700/70 mb-8">
                        Our historians and designers are meticulously crafting the content for topic **{topicId}**. Stay tuned!
                    </p>
                    <Link href="/student/upsc/art-culture">
                        <Button className="bg-rose-600 hover:bg-rose-700 text-white w-full">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Heritage Hub
                        </Button>
                    </Link>
                </Card>
            </div>
        );
    }

    return <ArtCultureTopicViewer content={content} />;
}
