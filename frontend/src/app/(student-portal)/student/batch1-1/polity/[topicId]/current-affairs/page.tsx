"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Flame, Target, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TOPIC_TITLES } from "@/components/batch1-1/polity/data/polity-types-95";
import { MAJOR_CURRENT_AFFAIRS } from "@/components/batch1-1/polity/data/MajorCurrentAffairsRegistry";

export default function ChapterCurrentAffairsPage() {
    const params = useParams();
    const router = useRouter();
    const topicId = Number(params.topicId);

    const topic = TOPIC_TITLES.find(t => t.id === topicId);
    const relatedAffairs = MAJOR_CURRENT_AFFAIRS.filter(ca => ca.topicIds.includes(topicId));

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            <Button
                variant="ghost"
                onClick={() => router.back()}
                className="mb-6"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
            </Button>

            <div className="mb-8">
                <Badge className="mb-2 bg-amber-100 text-amber-700">Chapter {topicId}</Badge>
                <h1 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
                    Current Affairs: {topic?.title || `Topic ${topicId}`}
                </h1>
                <p className="text-gray-500 mt-1">Relevant current affairs updates for this chapter</p>
            </div>

            {relatedAffairs.length > 0 ? (
                <div className="grid gap-6">
                    {relatedAffairs.map((item) => (
                        <Card key={item.id} className="border-l-4 border-l-amber-500">
                            <CardHeader className="pb-3 bg-slate-50 dark:bg-slate-900">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <Badge variant="outline" className="mb-2 text-xs font-mono">{item.date}</Badge>
                                        <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
                                    </div>
                                    {item.importance === 'High' && (
                                        <Badge className="bg-red-100 text-red-700 border-red-200">
                                            <Flame size={12} fill="currentColor" className="mr-1" />
                                            Hot
                                        </Badge>
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent className="pt-4 space-y-3">
                                <p className="text-sm text-gray-700 dark:text-gray-300">{item.summary}</p>
                                <div className="flex flex-wrap gap-1">
                                    {item.tags.map((tag, i) => (
                                        <Badge key={i} variant="secondary" className="text-[10px]">#{tag}</Badge>
                                    ))}
                                </div>
                                <div className="text-xs text-gray-400">Source: {item.source}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <Card className="bg-gray-50 dark:bg-gray-900 text-center p-12">
                    <Lock className="mx-auto mb-4 text-gray-400" size={48} />
                    <h3 className="text-lg font-bold text-gray-600 dark:text-gray-300 mb-2">
                        No Current Affairs Yet
                    </h3>
                    <p className="text-gray-500 text-sm">
                        There are no major current affairs updates linked to this chapter yet.
                        <br />Check back after major news or updates.
                    </p>
                </Card>
            )}
        </div>
    );
}
