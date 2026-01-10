"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft, BookOpen, CheckCircle2, ChevronRight, ChevronLeft,
    FileText, Brain, Target, Clock, Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TOPIC_TITLES, POLITY_PARTS, getPartById, getPartColors, PartId } from "@/components/batch1-1/polity/data/polity-types-95";

export default function TopicViewerPage() {
    const params = useParams();
    const router = useRouter();
    const topicId = parseInt(params.topicId as string);

    const [isCompleted, setIsCompleted] = useState(false);

    // Get topic info
    const topic = TOPIC_TITLES.find(t => t.id === topicId);
    const part = topic ? getPartById(topic.part) : null;
    const colors = part ? getPartColors(part.color) : getPartColors('blue');

    // Load progress
    useEffect(() => {
        const saved = localStorage.getItem('polity_95_progress');
        if (saved) {
            const progress = JSON.parse(saved);
            setIsCompleted(progress[topicId]?.completed || false);
        }
    }, [topicId]);

    // Mark as completed
    const markComplete = () => {
        const saved = localStorage.getItem('polity_95_progress');
        const progress = saved ? JSON.parse(saved) : {};
        progress[topicId] = {
            ...progress[topicId],
            completed: true,
            lastViewed: new Date().toISOString()
        };
        localStorage.setItem('polity_95_progress', JSON.stringify(progress));
        setIsCompleted(true);
    };

    // Navigate to adjacent topics
    const goToTopic = (id: number) => {
        if (id >= 1 && id <= 95) {
            router.push(`/student/batch1-1/polity/${id}`);
        }
    };

    if (!topic || !part) {
        return (
            <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-red-600">Topic not found</h2>
                <Button onClick={() => router.push('/student/batch1-1/polity')} className="mt-4">
                    Back to Topics
                </Button>
            </div>
        );
    }

    const isNew = topicId >= 85;

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-6 space-y-6">
            {/* Navigation Header */}
            <div className="flex items-center justify-between">
                <Button
                    variant="ghost"
                    onClick={() => router.push('/student/batch1-1/polity')}
                    className="flex items-center gap-2"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Topics
                </Button>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => goToTopic(topicId - 1)}
                        disabled={topicId <= 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Prev
                    </Button>
                    <span className="text-sm text-gray-500">{topicId} / 95</span>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => goToTopic(topicId + 1)}
                        disabled={topicId >= 95}
                    >
                        Next
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Topic Header */}
            <Card className={`bg-gradient-to-r ${colors.gradient} text-white border-0 shadow-xl`}>
                <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
                                {part.icon}
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                                        Part {part.number}
                                    </Badge>
                                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                                        Topic {topicId}
                                    </Badge>
                                    {isNew && (
                                        <Badge className="bg-purple-500 text-white">
                                            <Sparkles className="h-3 w-3 mr-1" />
                                            New
                                        </Badge>
                                    )}
                                </div>
                                <h1 className="text-2xl md:text-3xl font-bold">{topic.title}</h1>
                                <p className="text-sm opacity-90 mt-1">{part.title}</p>
                            </div>
                        </div>
                        {isCompleted ? (
                            <div className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-lg">
                                <CheckCircle2 className="h-5 w-5" />
                                <span className="font-medium">Completed</span>
                            </div>
                        ) : (
                            <Button
                                onClick={markComplete}
                                className="bg-white text-gray-800 hover:bg-gray-100"
                            >
                                <CheckCircle2 className="h-4 w-4 mr-2" />
                                Mark Complete
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Content Tabs */}
            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">
                        <FileText className="h-4 w-4 mr-2" />
                        Overview
                    </TabsTrigger>
                    <TabsTrigger value="concepts">
                        <Brain className="h-4 w-4 mr-2" />
                        Key Concepts
                    </TabsTrigger>
                    <TabsTrigger value="prelims">
                        <Target className="h-4 w-4 mr-2" />
                        Prelims Points
                    </TabsTrigger>
                    <TabsTrigger value="practice">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Practice
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileText className="h-5 w-5" />
                                Topic Overview
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                                    Static Focus Area
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Content will be loaded here. You can provide detailed content for this topic including:
                                </p>
                                <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>Core articles and constitutional provisions</li>
                                    <li>Key definitions and concepts</li>
                                    <li>Historical context and evolution</li>
                                    <li>Recent amendments and updates</li>
                                </ul>
                            </div>

                            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                                <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">
                                    Current Affairs
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Recent news and developments related to {topic.title} will be displayed here.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="concepts" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Brain className="h-5 w-5" />
                                Key Concepts
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center py-8 text-gray-500">
                                <Brain className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                <p>Key concepts for <strong>{topic.title}</strong> will be loaded here.</p>
                                <p className="text-sm mt-2">
                                    Content will include term definitions, examples, and explanations.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="prelims" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Target className="h-5 w-5" />
                                Prelims Pointers
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center py-8 text-gray-500">
                                <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                <p>Quick facts and pointers for <strong>{topic.title}</strong> will appear here.</p>
                                <p className="text-sm mt-2">
                                    These are high-yield points for UPSC Prelims preparation.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="practice" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5" />
                                Practice Resources
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Button
                                    variant="outline"
                                    className="h-auto p-6 flex flex-col items-center gap-2"
                                    onClick={() => router.push(`/student/batch1-1/polity/${topicId}/flashcards`)}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                        📚
                                    </div>
                                    <span className="font-medium">Flashcards</span>
                                    <span className="text-sm text-gray-500">Review key concepts</span>
                                </Button>

                                <Button
                                    variant="outline"
                                    className="h-auto p-6 flex flex-col items-center gap-2"
                                    onClick={() => router.push(`/student/batch1-1/polity/${topicId}/mcqs`)}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                                        ✓
                                    </div>
                                    <span className="font-medium">MCQ Practice</span>
                                    <span className="text-sm text-gray-500">Test your knowledge</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* Bottom Navigation */}
            <div className="flex items-center justify-between pt-4 border-t">
                <Button
                    variant="outline"
                    onClick={() => goToTopic(topicId - 1)}
                    disabled={topicId <= 1}
                    className="flex items-center gap-2"
                >
                    <ChevronLeft className="h-4 w-4" />
                    Previous Topic
                </Button>
                <Button
                    onClick={() => goToTopic(topicId + 1)}
                    disabled={topicId >= 95}
                    className={`flex items-center gap-2 bg-gradient-to-r ${colors.gradient} text-white`}
                >
                    Next Topic
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
