"use client";

import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllTopicPerformances } from '@/lib/analytics/WeakTopicAnalyzer';

interface RadarDataPoint {
    subject: string;
    score: number;
    fullMark: number;
}

export default function TopicRadar() {
    const [data, setData] = useState<RadarDataPoint[]>([]);

    useEffect(() => {
        const topics = getAllTopicPerformances();

        // If no data, show sample or empty
        if (topics.length === 0) {
            setData([
                { subject: 'History', score: 60, fullMark: 100 },
                { subject: 'Geography', score: 70, fullMark: 100 },
                { subject: 'Polity', score: 40, fullMark: 100 }, // Sample weak
                { subject: 'Economy', score: 80, fullMark: 100 },
                { subject: 'Science', score: 50, fullMark: 100 },
                { subject: 'Environment', score: 65, fullMark: 100 },
            ]);
            return;
        }

        // Map real data
        // Limit to 6 most recent or significant topics to avoid clutter
        const recentTopics = topics
            .sort((a, b) => new Date(b.lastAttempted || 0).getTime() - new Date(a.lastAttempted || 0).getTime())
            .slice(0, 6)
            .map(t => ({
                subject: t.topicName.substring(0, 10) + (t.topicName.length > 10 ? '..' : ''), // Truncate name
                score: t.accuracy,
                fullMark: 100
            }));

        setData(recentTopics.length >= 3 ? recentTopics : [
            ...recentTopics,
            // Fill with placeholders if less than 3 for valid radar shape
            { subject: 'Topic A', score: 0, fullMark: 100 },
            { subject: 'Topic B', score: 0, fullMark: 100 },
            { subject: 'Topic C', score: 0, fullMark: 100 }
        ].slice(0, 6));

    }, []);

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-lg">Topic Proficiency Radar</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} />
                            <Radar
                                name="Accuracy"
                                dataKey="score"
                                stroke="#f97316" // Orange-500
                                fill="#f97316"
                                fillOpacity={0.6}
                            />
                            <Tooltip />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
