import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
    BarChart2, Calendar, CheckCircle2, AlertCircle, 
    Brain, StickyNote, PlayCircle, BookOpen, Clock, Compass
} from "lucide-react";
import { GEOGRAPHY_REGISTRY } from "./data/geography-registry";

interface TopicData {
    completed: boolean;
    lastViewed?: string;
    flashcardsDone?: boolean;
    mcqsDone?: boolean;
    score?: number;
}

interface GeographyTopicAnalyticsModalProps {
    isOpen: boolean;
    onClose: () => void;
    topicId: number | null;
    data: TopicData | null;
    onAction: (type: 'flashcard' | 'mcq' | 'read') => void;
}

export default function GeographyTopicAnalyticsModal({
    isOpen,
    onClose,
    topicId,
    data,
    onAction
}: GeographyTopicAnalyticsModalProps) {
    if (!topicId) return null;

    const topic = GEOGRAPHY_REGISTRY.find(t => t.id === topicId);
    if (!topic) return null;

    const retentionScore = data?.score ? Math.round(data.score * 0.8 + (data.completed ? 20 : 0)) : (data?.completed ? 100 : 0);
    const lastViewedDate = data?.lastViewed ? new Date(data.lastViewed).toLocaleDateString(undefined, {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }) : 'Never';

    const getAnalysis = () => {
        if (!data?.completed) return { status: 'Not Started', color: 'text-muted-foreground', msg: 'Begin your geological journey today.' };
        if (data.score && data.score < 50) return { status: 'Critical Gap', color: 'text-red-500', msg: 'Low concept retention. Review foundational principles.' };
        if (data.score && data.score < 80) return { status: 'Gaining Traction', color: 'text-amber-500', msg: 'Steady progress. Focused revision will seal the gaps.' };
        return { status: 'Map-Ready', color: 'text-green-500', msg: 'Superior command over this geography block.' };
    };

    const analysis = getAnalysis();

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-xl bg-card border-border">
                <DialogHeader>
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <DialogTitle className="text-xl font-bold flex items-center gap-2">
                                <span className="w-8 h-8 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">
                                    {topicId}
                                </span>
                                {topic.title}
                            </DialogTitle>
                            <DialogDescription className="mt-1">
                                Performance analytics for this geographic domain.
                            </DialogDescription>
                        </div>
                        {data?.completed && (
                            <Badge className="bg-emerald-100 text-emerald-700">Mastered</Badge>
                        )}
                    </div>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                    <div className="space-y-4">
                        <div className="bg-muted/50 p-4 rounded-xl">
                            <div className="flex justify-between items-center text-xs mb-2">
                                <span className="font-medium text-muted-foreground uppercase tracking-wider">Retention Matrix</span>
                                <span className="font-bold text-lg">{retentionScore}%</span>
                            </div>
                            <Progress value={retentionScore} className="h-1.5" />
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                <Clock className="w-3 h-3" /> Historical Log
                            </h4>
                            <div className="text-sm space-y-1">
                                <div className="flex justify-between p-2 rounded bg-muted/30">
                                    <span className="text-muted-foreground">Last Viewed</span>
                                    <span className="font-medium text-xs">{lastViewedDate}</span>
                                </div>
                                <div className="flex justify-between p-2 rounded bg-muted/30">
                                    <span className="text-muted-foreground">Expertise Score</span>
                                    <span className={`font-medium text-xs ${data?.score ? (data.score > 70 ? 'text-emerald-500' : 'text-amber-500') : 'text-muted-foreground'}`}>
                                        {data?.score ? `${data.score}%` : 'N/A'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className={`p-4 rounded-xl border ${analysis.status === 'Critical Gap' ? 'bg-red-50/50 border-red-100 text-red-700' : analysis.status === 'Map-Ready' ? 'bg-emerald-50/50 border-emerald-100 text-emerald-700' : 'bg-amber-50/50 border-amber-100 text-amber-700'}`}>
                            <div className="flex items-center gap-2 mb-1">
                                <Compass className="w-4 h-4" />
                                <h4 className="font-bold text-sm">{analysis.status}</h4>
                            </div>
                            <p className="text-xs opacity-80">{analysis.msg}</p>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            <Button variant="outline" className="justify-start h-9 text-xs" onClick={() => onAction('flashcard')}>
                                <StickyNote className="w-3.5 h-3.5 mr-2 text-blue-500" /> Flashcard Drill
                            </Button>
                            <Button variant="outline" className="justify-start h-9 text-xs" onClick={() => onAction('mcq')}>
                                <Target className="w-3.5 h-3.5 mr-2 text-red-500" /> Take Assessment
                            </Button>
                            <Button className="justify-start h-9 text-xs bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => onAction('read')}>
                                <BookOpen className="w-3.5 h-3.5 mr-2" /> Start Reading
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
