"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Flame, Newspaper, Calendar, ExternalLink, BookMarked, Sparkles, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TOPIC_TITLES } from "@/components/upsc/platform/polity/data/polity-types-95";
import { MAJOR_CURRENT_AFFAIRS } from "@/components/upsc/platform/polity/data/MajorCurrentAffairsRegistry";

interface CAPageProps {
    params: Promise<{ topicId: string }>;
}

export default function ChapterCurrentAffairsPage({ params }: CAPageProps) {
    const { topicId: topicIdStr } = use(params);
    const router = useRouter();
    const topicId = Number(topicIdStr);

    const topic = TOPIC_TITLES.find(t => t.id === topicId);
    const relatedAffairs = MAJOR_CURRENT_AFFAIRS.filter(ca => ca.topicIds.includes(topicId));

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50/50 via-white to-orange-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <div className="max-w-4xl mx-auto p-4 md:p-8">
                {/* Back Button */}
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="mb-6 text-slate-600 hover:text-slate-900"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Chapter
                </Button>

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl text-white">
                            <Newspaper className="w-6 h-6" />
                        </div>
                        <Badge className="bg-amber-100 text-amber-700 font-mono border-amber-200">
                            Chapter {topicId}
                        </Badge>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2">
                        Current Affairs
                    </h1>
                    <p className="text-slate-500 text-lg">
                        {topic?.title || `Topic ${topicId}`}
                    </p>
                </div>

                {relatedAffairs.length > 0 ? (
                    <div className="space-y-6">
                        {/* Stats Bar */}
                        <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-amber-100 dark:border-slate-700">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-amber-100 rounded-lg">
                                    <FileText className="w-4 h-4 text-amber-600" />
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">{relatedAffairs.length}</div>
                                    <div className="text-xs text-slate-500">Updates</div>
                                </div>
                            </div>
                            <div className="flex-1 border-l border-slate-200 dark:border-slate-700 pl-4">
                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <Flame className="w-4 h-4 text-red-500" />
                                    {relatedAffairs.filter(ca => ca.importance === 'High').length} High Priority
                                </div>
                            </div>
                        </div>

                        {/* Cards */}
                        {relatedAffairs.map((item) => (
                            <Card key={item.id} className="border-0 shadow-lg bg-white dark:bg-slate-800 overflow-hidden hover:shadow-xl transition-shadow">
                                <div className={`h-1 ${item.importance === 'High' ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-gradient-to-r from-amber-400 to-yellow-400'}`} />
                                <CardHeader className="pb-3">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge variant="outline" className="text-xs font-mono bg-slate-50 dark:bg-slate-700">
                                                    <Calendar className="w-3 h-3 mr-1" />
                                                    {item.date}
                                                </Badge>
                                                {item.importance === 'High' && (
                                                    <Badge className="bg-red-100 text-red-700 border-red-200">
                                                        <Flame size={12} fill="currentColor" className="mr-1" />
                                                        High Priority
                                                    </Badge>
                                                )}
                                            </div>
                                            <CardTitle className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                                                {item.title}
                                            </CardTitle>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        {item.summary}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag, i) => (
                                            <Badge key={i} variant="secondary" className="bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800">
                                                #{tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Source */}
                                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700">
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <ExternalLink className="w-4 h-4" />
                                            Source: <span className="font-medium text-slate-700 dark:text-slate-300">{item.source}</span>
                                        </div>
                                        <Button size="sm" variant="ghost" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50">
                                            <BookMarked className="w-4 h-4 mr-1" />
                                            Bookmark
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    /* Empty State - Premium Design */
                    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-0 shadow-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-5" />
                        <CardContent className="p-12 text-center relative z-10">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 mb-6">
                                <Newspaper className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-black mb-3">
                                No Current Affairs Yet
                            </h3>
                            <p className="text-slate-400 text-lg mb-6 max-w-md mx-auto">
                                This chapter doesn't have any major current affairs updates from the last 24 months.
                            </p>
                            <div className="flex items-center justify-center gap-2 text-amber-400">
                                <Sparkles className="w-5 h-5" />
                                <span className="text-sm font-medium">
                                    We'll update this section when relevant news breaks
                                </span>
                            </div>

                            {/* Suggestion Cards */}
                            <div className="mt-10 grid grid-cols-2 gap-4 max-w-lg mx-auto">
                                <Button
                                    variant="outline"
                                    onClick={() => router.push('/student/upsc/polity/revision')}
                                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                                >
                                    <Flame className="w-4 h-4 mr-2" />
                                    CA Dashboard
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => router.back()}
                                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Chapter
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
