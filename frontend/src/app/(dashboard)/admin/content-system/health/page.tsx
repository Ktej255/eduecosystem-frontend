"use client";

import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
    Activity,
    AlertTriangle,
    CheckCircle2,
    Clock,
    FileText,
    Search,
    TrendingUp,
    Filter,
    ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { POLITY_TOPICS, POLITY_MODULES } from '@/components/batch1/polity/data/polity-registry';
import { POLITY_REVISION_CHAPTERS } from '@/components/batch1/polity/data/RevisionRegistry';

export default function ContentHealthCheck() {
    const router = useRouter();

    const stats = useMemo(() => {
        const totalTopics = 95; // Full Laxmikanth Scope
        const implementedTopics = POLITY_TOPICS.length;
        const chaptersWithMCQs = POLITY_REVISION_CHAPTERS.filter(r => r.mcqs.length > 0).length;
        const totalCA = POLITY_TOPICS.reduce((sum, t) => sum + t.currentAffairs.length, 0);

        // Find "Critical Gaps" (High priority topics with < 5 MCQs or 0 CA)
        const criticalGaps = POLITY_TOPICS.filter(t =>
            (t.priority === 'High' && t.currentAffairs.length === 0)
        );

        return {
            implementedTopics,
            totalTopics,
            completionRate: Math.round((implementedTopics / totalTopics) * 100),
            chaptersWithMCQs,
            totalCA,
            criticalGapsCount: criticalGaps.length
        };
    }, []);

    const moduleAverages = useMemo(() => {
        return POLITY_MODULES.map(module => {
            const topics = POLITY_TOPICS.filter(t => t.module === module.id);
            const caCount = topics.reduce((sum, t) => sum + t.currentAffairs.length, 0);
            const [start, end] = module.topicRange;
            const totalInModule = end - start + 1;

            return {
                ...module,
                implemented: topics.length,
                total: totalInModule,
                caCount,
                healthScore: Math.round((topics.length / totalInModule) * 100)
            };
        });
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" onClick={() => router.back()}>
                            <ArrowLeft className="w-4 h-4" />
                        </Button>
                        <h1 className="text-3xl font-bold tracking-tight">Content Health-Check</h1>
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-400">
                        Audit syllabus coverage, practice density, and current affairs staleness.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        <Filter className="w-4 h-4" /> Filter Audit
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                        Generate Report
                    </Button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Syllabus Coverage</CardTitle>
                        <TrendingUp className="w-4 h-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.implementedTopics}/{stats.totalTopics}</div>
                        <Progress value={stats.completionRate} className="mt-2 h-1" />
                        <p className="text-xs text-neutral-500 mt-2">{stats.completionRate}% of topics implemented</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Practice Density</CardTitle>
                        <Activity className="w-4 h-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.chaptersWithMCQs} Chapters</div>
                        <p className="text-xs text-neutral-500 mt-2">With production-ready MCQ sets</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Staleness Alerts</CardTitle>
                        <Clock className="w-4 h-4 text-amber-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.totalCA} Updates</div>
                        <p className="text-xs text-neutral-500 mt-2">Total Current Affairs linked</p>
                    </CardContent>
                </Card>
                <Card className="border-red-200 bg-red-50/10 dark:bg-red-950/10">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Critical Gaps</CardTitle>
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-red-600">{stats.criticalGapsCount} Topics</div>
                        <p className="text-xs text-red-500/80 mt-2">High priority with 0 CA updates</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Module Health Table */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Module Health Deep-Scan</CardTitle>
                        <CardDescription>Performance of each subject module across the 95-chapter roadmap.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {moduleAverages.map(module => (
                                <div key={module.id} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-blue-600">M{module.id}</span>
                                            <span className="font-medium">{module.title}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs text-neutral-500">{module.implemented}/{module.total} Topics</span>
                                            <Badge variant={module.healthScore > 80 ? "default" : "outline"} className={module.healthScore > 80 ? "bg-green-500/10 text-green-600 border-green-500/20" : ""}>
                                                {module.healthScore}% Healthy
                                            </Badge>
                                        </div>
                                    </div>
                                    <Progress value={module.healthScore} className="h-1.5" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Audit Actions */}
                <Card>
                    <CardHeader>
                        <CardTitle>Strategic Actions</CardTitle>
                        <CardDescription>AI-generated priorities for the next content sprint.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/30 dark:bg-amber-950/20 space-y-2">
                            <h4 className="text-sm font-bold flex items-center gap-2 text-amber-700 dark:text-amber-400">
                                <Search className="w-4 h-4" /> Content Enrichment
                            </h4>
                            <p className="text-xs text-amber-600 dark:text-amber-500 leading-relaxed">
                                12 topics in Module 4 (State Govt) are missing detailed current affairs mappings from 2025.
                            </p>
                            <Button size="sm" variant="outline" className="w-full text-xs mt-2 border-amber-200 hover:bg-amber-100">
                                Open CA Manager
                            </Button>
                        </div>

                        <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/30 dark:bg-blue-950/20 space-y-2">
                            <h4 className="text-sm font-bold flex items-center gap-2 text-blue-700 dark:text-blue-400">
                                <FileText className="w-4 h-4" /> Practice Boost
                            </h4>
                            <p className="text-xs text-blue-600 dark:text-blue-500 leading-relaxed">
                                Chapters 70-80 have high "Historical Importance" but low MCQ density (&lt;10 per topic).
                            </p>
                            <Button size="sm" variant="outline" className="w-full text-xs mt-2 border-blue-200 hover:bg-blue-100" onClick={() => router.push('/admin/content-system/mcqs')}>
                                Launch MCQ Generator
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
