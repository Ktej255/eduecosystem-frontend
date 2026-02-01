"use client";

import { useState } from "react";
import {
    Rocket,
    Calendar,
    Mail,
    Share2,
    CheckCircle2,
    MoreHorizontal,
    PlayCircle,
    Copy,
    Sparkles
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface CampaignStep {
    day: number;
    type: "email" | "social" | "event";
    title: string;
    description: string;
    status: "pending" | "ready" | "sent";
    content: string;
}

const initialPlan: CampaignStep[] = [
    {
        day: 1,
        type: "email",
        title: "Teaser Announcement",
        description: "Build hype 48 hours before launch.",
        status: "ready",
        content: "Subject: Something Big is Coming... 🤫\n\nHi {name},\n\nWe've been cooking up something special for your UPSC prep. Keep your eyes peeled on this inbox in 48 hours!\n\nHint: It involves Maps 🗺️."
    },
    {
        day: 3,
        type: "social",
        title: "Feature Reveal Post",
        description: "Instagram/LinkedIn post showcasing visuals.",
        status: "pending",
        content: "🚀 Sneak Peek! \n\nSay goodbye to boring maps. Our new 3D River System visualizer drops tomorrow!\n\n#UPSC2026 #Geography #EdTech"
    },
    {
        day: 5,
        type: "event",
        title: "Launch Webinar",
        description: "Live Q&A and Walkthrough.",
        status: "pending",
        content: "Join us Live at 6 PM! We're unveiling the complete Geography Module. Exclusive discount for attendees."
    },
    {
        day: 7,
        type: "email",
        title: "Early Bird Closing",
        description: "Create Scarcity / FOMO.",
        status: "pending",
        content: "Subject: Last Chance for Early Bird Offer ⏳\n\nThe 20% discount expires at midnight. Don't miss out on the new Geography suite!"
    }
];

export default function CampaignBlueprint() {
    const [selectedCourse, setSelectedCourse] = useState<string>("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [plan, setPlan] = useState<CampaignStep[]>([]);
    const [showPlan, setShowPlan] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        // Simulate AI generation delay
        setTimeout(() => {
            setPlan(initialPlan);
            setShowPlan(true);
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto h-[600px]">
            {/* Control Panel */}
            <div className="lg:col-span-4 space-y-4">
                <Card className="border-slate-200 dark:border-slate-800 bg-indigo-50/30 dark:bg-indigo-950/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Rocket className="h-5 w-5 text-indigo-600" />
                            Launchpad
                        </CardTitle>
                        <CardDescription>Generate a complete marketing timeline in seconds.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Select Launch Target</label>
                            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                                <SelectTrigger className="bg-white dark:bg-slate-900">
                                    <SelectValue placeholder="Choose a course..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="geo-mod">Geography Module 2.0</SelectItem>
                                    <SelectItem value="polity-crash">Polity Crash Course</SelectItem>
                                    <SelectItem value="csat-master">CSAT Mastery Series</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Button
                            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-lg shadow-indigo-200 dark:shadow-none"
                            onClick={handleGenerate}
                            disabled={!selectedCourse || isGenerating}
                        >
                            {isGenerating ? (
                                <>
                                    <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                                    Generatng Plan...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    Generate Blueprint
                                </>
                            )}
                        </Button>
                    </CardContent>
                </Card>

                {showPlan && (
                    <Card className="border-slate-200 dark:border-slate-800 animate-in slide-in-from-left-4 duration-500">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm uppercase tracking-wider text-slate-500">Campaign Stats</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg text-center">
                                <span className="block text-2xl font-bold text-slate-700 dark:text-slate-200">7</span>
                                <span className="text-xs text-slate-400">Days Duration</span>
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg text-center">
                                <span className="block text-2xl font-bold text-slate-700 dark:text-slate-200">4</span>
                                <span className="text-xs text-slate-400">Touchpoints</span>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Timeline View */}
            <div className="lg:col-span-8 h-full">
                <Card className="h-full border-slate-200 dark:border-slate-800 flex flex-col">
                    <CardHeader className="pb-4 border-b border-slate-100 dark:border-slate-800">
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-lg font-bold text-slate-800 dark:text-slate-100">
                                {selectedCourse ? `${selectedCourse === 'geo-mod' ? 'Geography Module 2.0' : 'Campaign'} Blueprint` : 'Blueprint Preview'}
                            </CardTitle>
                            {showPlan && <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Draft Ready</Badge>}
                        </div>
                    </CardHeader>

                    <CardContent className="flex-1 p-0 overflow-hidden relative bg-slate-50/50 dark:bg-slate-950/50">
                        {!showPlan ? (
                            <div className="flex flex-col items-center justify-center h-full text-slate-400">
                                <Rocket className="h-16 w-16 mb-4 opacity-20" />
                                <p>Select a course to generate your launch plan</p>
                            </div>
                        ) : (
                            <ScrollArea className="h-full">
                                <div className="p-6 space-y-8 relative">
                                    {/* Timeline Line */}
                                    <div className="absolute left-9 top-8 bottom-8 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

                                    {plan.map((step, index) => (
                                        <div key={index} className="relative flex gap-6 group">
                                            {/* Day Marker */}
                                            <div className="flex flex-col items-center z-10">
                                                <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 text-xs font-bold flex items-center justify-center text-indigo-600 shadow-sm">
                                                    D{step.day}
                                                </div>
                                            </div>

                                            {/* Content Card */}
                                            <div className="flex-1">
                                                <Card className="border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
                                                    <CardHeader className="py-3 px-4 flex flex-row items-center justify-between space-y-0 bg-white dark:bg-slate-900 rounded-t-lg">
                                                        <div className="flex items-center gap-2">
                                                            {step.type === 'email' && <Mail className="h-4 w-4 text-blue-500" />}
                                                            {step.type === 'social' && <Share2 className="h-4 w-4 text-pink-500" />}
                                                            {step.type === 'event' && <PlayCircle className="h-4 w-4 text-red-500" />}
                                                            <h4 className="font-semibold text-sm">{step.title}</h4>
                                                        </div>
                                                        <Badge variant="outline" className="text-[10px] font-normal text-slate-500">
                                                            {step.status}
                                                        </Badge>
                                                    </CardHeader>
                                                    <Separator />
                                                    <CardContent className="p-4 bg-slate-50/30 dark:bg-slate-900/30">
                                                        <p className="text-xs text-slate-500 mb-3">{step.description}</p>
                                                        <div className="bg-white dark:bg-slate-950 p-3 rounded border border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-300 relative group/code">
                                                            <Button
                                                                size="icon"
                                                                variant="ghost"
                                                                className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover/code:opacity-100 transition-opacity"
                                                                onClick={() => navigator.clipboard.writeText(step.content)}
                                                            >
                                                                <Copy className="h-3 w-3 text-slate-400" />
                                                            </Button>
                                                            <div className="whitespace-pre-wrap">{step.content}</div>
                                                        </div>
                                                        <div className="mt-3 flex gap-2">
                                                            <Button size="sm" variant="outline" className="h-7 text-xs">Edit</Button>
                                                            <Button size="sm" className="h-7 text-xs bg-indigo-600 hover:bg-indigo-700">Approve</Button>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
