"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getSubjectStats } from '@/lib/report-persistence';
import Link from 'next/link';

interface WeakTopic {
    subject: string;
    chapterId: number | string;
    accuracy: number;
}

export default function WeakTopicsAlert() {
    const [alerts, setAlerts] = useState<WeakTopic[]>([]);

    useEffect(() => {
        const fetchWeakTopics = async () => {
            const subjects = ['polity', 'history'] as const;
            const allWeak: WeakTopic[] = [];

            for (const sub of subjects) {
                try {
                    const stats = await getSubjectStats(sub);
                    stats.weakAreas.forEach(chapterId => {
                        allWeak.push({
                            subject: sub.charAt(0).toUpperCase() + sub.slice(1),
                            chapterId,
                            accuracy: stats.masteryByChapter[chapterId] || 0
                        });
                    });
                } catch (e) {
                    console.error("Failed to fetch weak topics for", sub, e);
                }
            }

            setAlerts(allWeak.sort((a, b) => a.accuracy - b.accuracy));
        };

        fetchWeakTopics();
    }, []);

    if (alerts.length === 0) return null;

    return (
        <Card className="border-amber-200 bg-amber-50/30 dark:border-amber-900/40 dark:bg-amber-950/20">
            <CardHeader className="pb-2">
                <CardTitle className="text-amber-800 dark:text-amber-400 flex items-center gap-2 text-lg">
                    <AlertTriangle className="h-5 w-5" />
                    Priority Focus Required
                </CardTitle>
                <CardDescription className="text-amber-700/70 dark:text-amber-400/60">
                    Topics where your accuracy is below 50%
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {alerts.slice(0, 6).map((alert, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between p-3 bg-card rounded-xl border border-amber-100 dark:border-amber-900/30 shadow-sm"
                        >
                            <div>
                                <h4 className="font-bold text-foreground">
                                    {alert.subject} Ch {alert.chapterId}
                                </h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-red-500"
                                            style={{ width: `${alert.accuracy}%` }}
                                        />
                                    </div>
                                    <span className="text-xs font-bold text-red-500">{alert.accuracy}%</span>
                                </div>
                            </div>
                            <Link href={
                                alert.subject.toLowerCase() === 'polity'
                                    ? `/student/upsc/polity/${alert.chapterId}`
                                    : `/student/upsc/history/topic/${alert.chapterId}`
                            }>
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/40">
                                    <ArrowRight className="h-4 w-4 text-amber-600" />
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
                {alerts.length > 6 && (
                    <p className="text-xs text-amber-600 mt-4 text-center font-medium">
                        Showing top 6 of {alerts.length} weak topics. Check subject tabs for full details.
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
