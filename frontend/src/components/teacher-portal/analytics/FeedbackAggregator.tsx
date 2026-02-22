"use client";

import { useState } from "react";
import {
    Star,
    MessageSquare,
    ThumbsUp,
    Filter,
    Search,
    MoreHorizontal,
    Flag
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import NudgeAction from "./NudgeAction";
import { cn } from "@/lib/utils";

// --- Mock Data ---

interface Review {
    id: string;
    studentName: string;
    studentAvatar?: string;
    rating: number;
    comment: string;
    course: string;
    date: string;
    likes: number;
    sentiment: "positive" | "neutral" | "negative";
}

const mockReviews: Review[] = [
    {
        id: "r1",
        studentName: "Aditi Rao",
        rating: 5,
        comment: "The animation for the Monsoon mechanism really explained it perfectly! Finally understood the ITCZ shift.",
        course: "Geography: Climatology",
        date: "2 hours ago",
        likes: 12,
        sentiment: "positive"
    },
    {
        id: "r2",
        studentName: "Vikram Singh",
        rating: 4,
        comment: "Great content, but the audio volume drops a bit around the 15-minute mark. Please check.",
        course: "Polity: Parliament",
        date: "Yesterday",
        likes: 3,
        sentiment: "neutral"
    },
    {
        id: "r3",
        studentName: "Sneha G.",
        rating: 5,
        comment: "Best explanation of Fundamental Rights I've seen. The mnemonics are super helpful.",
        course: "Polity: FRs",
        date: "2 days ago",
        likes: 8,
        sentiment: "positive"
    },
    {
        id: "r4",
        studentName: "Rahul K.",
        rating: 2,
        comment: "The quiz questions were slightly off-topic compared to the lecture content.",
        course: "History: Modern India",
        date: "3 days ago",
        likes: 1,
        sentiment: "negative"
    }
];

const ratingDistribution = [
    { stars: 5, count: 145, percentage: 72 },
    { stars: 4, count: 42, percentage: 21 },
    { stars: 3, count: 10, percentage: 5 },
    { stars: 2, count: 3, percentage: 1.5 },
    { stars: 1, count: 1, percentage: 0.5 },
];

export default function FeedbackAggregator() {
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");

    const [nudgeOpen, setNudgeOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<{ name: string, cause: string } | null>(null);

    const handleNudge = (name: string, cause: string) => {
        setSelectedStudent({ name, cause });
        setNudgeOpen(true);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
            {/* ... (Overview Panel code unrelated changes skipped for brevity in thought process) ... */}

            {/* Reviews List */}
            <div className="md:col-span-8">
                <Card className="border-border h-full flex flex-col">
                    {/* ... (Header code skipped) ... */}
                    <CardContent className="p-0 flex-1 overflow-y-auto max-h-[600px]">
                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            {mockReviews.map((review) => (
                                <div key={review.id} className="p-6 hover:bg-muted dark:hover:bg-slate-900/50 transition-colors group">
                                    <div className="flex gap-4">
                                        <Avatar className="h-10 w-10 border border-border">
                                            <AvatarImage src={review.studentAvatar} />
                                            <AvatarFallback className="bg-indigo-100 text-indigo-700 font-bold">{review.studentName[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-semibold text-sm text-foreground">{review.studentName}</h4>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        <div className="flex text-amber-400">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    className={cn("h-3 w-3", i < review.rating ? "fill-current" : "text-slate-300 dark:text-muted-foreground")}
                                                                />
                                                            ))}
                                                        </div>
                                                        <span className="text-xs text-muted-foreground">• {review.date}</span>
                                                    </div>
                                                </div>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground opacity-0 group-hover:opacity-100">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </div>

                                            <p className="text-sm text-muted-foreground leading-relaxed py-1">
                                                {review.comment}
                                            </p>

                                            <div className="flex items-center justify-between mt-2 pt-2">
                                                <Badge variant="secondary" className="text-[10px] text-muted-foreground bg-muted hover:bg-slate-200">
                                                    {review.course}
                                                </Badge>
                                                <div className="flex items-center gap-4">
                                                    <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-indigo-600 transition-colors">
                                                        <ThumbsUp className="h-3 w-3" />
                                                        Helpful ({review.likes})
                                                    </button>
                                                    {review.sentiment === "negative" && (
                                                        <Button
                                                            variant="link"
                                                            className="h-auto p-0 text-xs text-amber-600 hover:text-amber-700 flex items-center gap-1.5"
                                                            onClick={() => handleNudge(review.studentName, "addressing your feedback")}
                                                        >
                                                            <MessageSquare className="h-3 w-3" />
                                                            Reply & Resolve
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Nudge Action Dialog */}
            <Dialog open={nudgeOpen} onOpenChange={setNudgeOpen}>
                <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-transparent border-0 shadow-none">
                    <NudgeAction
                        studentName={selectedStudent?.name || "Student"}
                        context={selectedStudent?.cause || "recent activity"}
                        onClose={() => setNudgeOpen(false)}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
}
