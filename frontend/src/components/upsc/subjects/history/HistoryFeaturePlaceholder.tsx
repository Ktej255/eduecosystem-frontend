"use client";

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { LucideIcon, ArrowLeft, Construction, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HistoryFeaturePlaceholderProps {
    title: string;
    description: string;
    icon?: any;
}

export default function HistoryFeaturePlaceholder(props: HistoryFeaturePlaceholderProps) {
    return (
        <React.Suspense fallback={<div className="min-h-screen bg-muted flex items-center justify-center p-6 text-center">Loading Feature...</div>}>
            <HistoryFeaturePlaceholderContent {...props} />
        </React.Suspense>
    );
}

function HistoryFeaturePlaceholderContent({
    title,
    description,
    icon: Icon = Construction
}: HistoryFeaturePlaceholderProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const chapterId = searchParams.get('chapter');

    return (
        <div className="min-h-screen bg-muted flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-card p-8 rounded-3xl shadow-xl max-w-md w-full border border-border">
                <div className="bg-amber-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {Icon && <Icon className="w-10 h-10 text-amber-500" />}
                </div>

                <h1 className="text-2xl font-black text-foreground mb-2">{title}</h1>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                    {description}
                </p>

                {chapterId && (
                    <div className="bg-muted p-4 rounded-xl mb-8 border border-border">
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Target Chapter</div>
                        <div className="text-lg font-bold text-foreground">Chapter {chapterId}</div>
                    </div>
                )}

                <div className="space-y-3">
                    <Button
                        onClick={() => router.back()}
                        className="w-full h-12 rounded-xl"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Go Back
                    </Button>
                    <p className="text-[10px] text-muted-foreground">
                        This feature is currently under active development.
                    </p>
                </div>
            </div>
        </div>
    );
}
