import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
    BarChart2, Calendar, CheckCircle2, AlertCircle,
    Brain, StickyNote, PlayCircle, BookOpen, Clock
} from "lucide-react";
import { TOPIC_TITLES } from "@/components/batch1-1/polity/data/polity-types-95";

interface TopicData {
    completed: boolean;
    lastViewed?: string;
    flashcardsDone?: boolean;
    mcqsDone?: boolean;
    score?: number;
}

interface TopicAnalyticsModalProps {
    isOpen: boolean;
    onClose: () => void;
    topicId: number | null;
    data: TopicData | null;
    onAction: (type: 'flashcard' | 'mcq' | 'read') => void;
}

export default function TopicAnalyticsModal({
    isOpen,
    onClose,
    topicId,
    data,
    onAction
}: TopicAnalyticsModalProps) {
    if (!topicId) return null;

    const topic = TOPIC_TITLES.find(t => t.id === topicId);
    if (!topic) return null;

    // Derived Metrics
    const retentionScore = data?.score ? Math.round(data.score * 0.8 + (data.completed ? 20 : 0)) : (data?.completed ? 100 : 0);
    const lastViewedDate = data?.lastViewed ? new Date(data.lastViewed).toLocaleDateString(undefined, {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }) : 'Never';

    // Mock "Gap Analysis" based on score/status
    const getAnalysis = () => {
        if (!data?.completed) return { status: 'Pending', color: 'text-gray-500', msg: 'Start this chapter to build your foundation.' };
        if (data.score && data.score < 50) return { status: 'Critical Gap', color: 'text-red-500', msg: 'Low score detected. Immediate revision recommended.' };
        if (data.score && data.score < 80) return { status: 'Review Needed', color: 'text-amber-500', msg: 'Good progress, but some concepts need reinforcement.' };
        return { status: 'Strong', color: 'text-green-500', msg: 'Excellent command over this topic.' };
    };

    const analysis = getAnalysis();

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                <DialogHeader>
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                                <span className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-sm">
                                    {topicId}
                                </span>
                                {topic.title}
                            </DialogTitle>
                            <DialogDescription className="mt-2">
                                Deep performance analysis and retention tracking.
                            </DialogDescription>
                        </div>
                        {data?.completed && (
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Completed</Badge>
                        )}
                    </div>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                    {/* Left Column: Stats */}
                    <div className="space-y-6">
                        {/* Retention Score */}
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl space-y-2">
                            <div className="flex justify-between items-center text-sm">
                                <span className="font-medium text-gray-500">Retention Score</span>
                                <span className="font-bold text-lg">{retentionScore}%</span>
                            </div>
                            <Progress value={retentionScore} className={`h-2 ${retentionScore < 50 ? 'bg-red-100' : 'bg-green-100'}`} />
                            <p className="text-xs text-gray-400">Calculated based on MCQ performance and revision frequency.</p>
                        </div>

                        {/* Activity Log */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <Clock className="w-4 h-4" /> Activity Log
                            </h4>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm p-2 rounded bg-gray-50 dark:bg-gray-800">
                                    <span className="text-gray-500">Last Studied</span>
                                    <span className="font-medium">{lastViewedDate}</span>
                                </div>
                                <div className="flex justify-between text-sm p-2 rounded bg-gray-50 dark:bg-gray-800">
                                    <span className="text-gray-500">MCQ Score</span>
                                    <span className={`font-medium ${data?.score ? (data.score > 70 ? 'text-green-500' : 'text-amber-500') : 'text-gray-400'}`}>
                                        {data?.score ? `${data.score}%` : 'Not taken'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Insights & Actions */}
                    <div className="space-y-6">
                        {/* Insight Card */}
                        <div className={`p-4 rounded-xl border ${analysis.status === 'Critical Gap' ? 'bg-red-50 border-red-100 text-red-700' : analysis.status === 'Strong' ? 'bg-green-50 border-green-100 text-green-700' : 'bg-blue-50 border-blue-100 text-blue-700'}`}>
                            <div className="flex items-center gap-2 mb-2">
                                <Brain className="w-5 h-5" />
                                <h4 className="font-bold">{analysis.status}</h4>
                            </div>
                            <p className="text-sm opacity-90">{analysis.msg}</p>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-2 gap-3">
                            <Button
                                variant="outline"
                                className="h-auto py-3 flex flex-col gap-1 items-center"
                                onClick={() => onAction('flashcard')}
                            >
                                <StickyNote className="w-5 h-5 text-blue-500" />
                                <span className="text-xs">Revise Cards</span>
                            </Button>
                            <Button
                                variant="outline"
                                className="h-auto py-3 flex flex-col gap-1 items-center"
                                onClick={() => onAction('mcq')}
                            >
                                <PlayCircle className="w-5 h-5 text-green-500" />
                                <span className="text-xs">Take Quiz</span>
                            </Button>
                            <Button
                                variant="outline"
                                className="h-auto py-3 flex flex-col gap-1 items-center col-span-2"
                                onClick={() => onAction('read')}
                            >
                                <BookOpen className="w-5 h-5 text-indigo-500" />
                                <span className="text-xs">Read Chapter</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
