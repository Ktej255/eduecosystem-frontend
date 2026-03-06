"use client";

import React, { useState, useEffect } from 'react';
import StandardMCQInterface from '@/components/common/mcq/StandardMCQInterface';
import { GEOGRAPHY_PLACEHOLDER_MCQS } from './data/geography-mcqs-placeholder';
import { GEOGRAPHY_REGISTRY } from './data/geography-registry';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Globe2, Target } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function GeographyDrillInterface() {
    const searchParams = useSearchParams();
    const topicIdStr = searchParams.get('topicId');
    const branch = searchParams.get('branch');

    // Filter MCQs based on selection
    const filteredMCQs = React.useMemo(() => {
        if (topicIdStr) {
            const id = parseInt(topicIdStr);
            return GEOGRAPHY_PLACEHOLDER_MCQS.filter(m => m.topicId === id);
        }
        if (branch) {
            // Find all topic IDs for this branch
            const branchTopicIds = GEOGRAPHY_REGISTRY.filter(t => t.branch === branch).map(t => t.id);
            return GEOGRAPHY_PLACEHOLDER_MCQS.filter(m => m.topicId && branchTopicIds.includes(m.topicId));
        }
        return GEOGRAPHY_PLACEHOLDER_MCQS;
    }, [topicIdStr, branch]);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
                        <Target className="w-6 h-6 text-indigo-600" />
                        Geography Practice Drill
                    </h2>
                    <p className="text-sm text-muted-foreground font-medium">
                        {branch ? `Focused on ${branch}` : topicIdStr ? `Topic ID: ${topicIdStr}` : "All Geography Modules"}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-indigo-50 border-indigo-200 text-indigo-700 font-bold">
                        {filteredMCQs.length} Questions Available
                    </Badge>
                </div>
            </div>

            <StandardMCQInterface
                questions={filteredMCQs}
                subject="Geography"
            />
        </div>
    );
}

import { Badge } from '@/components/ui/badge';
