"use client";

import { useState } from "react";
import {
    Sparkles,
    Video,
    Play,
    Scissors,
    Share2,
    Copy,
    Check,
    RefreshCw,
    Wand2,
    TrendingUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface SnippetIdea {
    id: number;
    title: string;
    hook: string;
    duration: string;
    viralScore: number;
    platform: "reels" | "shorts" | "tiktok";
    script: string;
}

export default function SnippetGenerator() {
    const [selectedVideo, setSelectedVideo] = useState<string>("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [progress, setProgress] = useState(0);
    const [snippets, setSnippets] = useState<SnippetIdea[]>([]);
    const [copiedId, setCopiedId] = useState<number | null>(null);

    const handleGenerate = () => {
        setIsGenerating(true);
        setProgress(0);
        setSnippets([]);

        // Simulate AI Processing Steps
        let step = 0;
        const interval = setInterval(() => {
            step++;
            setProgress((prev) => Math.min(prev + 15, 90));

            if (step >= 6) {
                clearInterval(interval);
                setProgress(100);
                finalizeGeneration();
            }
        }, 500);
    };

    const finalizeGeneration = () => {
        setTimeout(() => {
            setSnippets([
                {
                    id: 1,
                    title: "The Preamble Secret",
                    hook: "Did you know the Preamble wasn't originally part of the Constitution?",
                    duration: "45s",
                    viralScore: 92,
                    platform: "shorts",
                    script: "Start with the 'We the People' image. Cut to Ambedkar quote. Explain the Amendment. End with 'Subscribe for more Polity facts'."
                },
                {
                    id: 2,
                    title: "Fundamental Rights Hack",
                    hook: "Never forget Article 21 again with this simple trick.",
                    duration: "30s",
                    viralScore: 88,
                    platform: "reels",
                    script: "Show Article 21 text. Overlay 'Right to Life'. Show 3 examples rapid fire. Ask 'What's your favorite right?' in comments."
                },
                {
                    id: 3,
                    title: "UPSC vs Reality",
                    hook: "What they teach you vs What actually happens in the exam hall.",
                    duration: "59s",
                    viralScore: 95,
                    platform: "tiktok",
                    script: "Split screen. Left side: Calm student reading. Right side: Panic mode. Core message: Stress management is key."
                }
            ]);
            setIsGenerating(false);
        }, 500);
    };

    const copyScript = (id: number, text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <Card className="w-full max-w-4xl mx-auto border-purple-100 dark:border-purple-900 shadow-sm">
            <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <Wand2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                        <CardTitle className="text-xl">AI Snippet Generator</CardTitle>
                        <CardDescription>Turn your long-form lectures into viral shorts instantly.</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Input Section */}
                <div className="flex gap-4 items-end">
                    <div className="flex-1 space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Select Source Video</label>
                        <Select value={selectedVideo} onValueChange={setSelectedVideo}>
                            <SelectTrigger className="h-10">
                                <SelectValue placeholder="Choose a lecture..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="polity-ch1">Polity: Making of Constitution (1h 20m)</SelectItem>
                                <SelectItem value="geo-rivers">Geography: Indian River Systems (55m)</SelectItem>
                                <SelectItem value="eco-budget">Economy: Budget 2026 Analysis (2h 10m)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button
                        onClick={handleGenerate}
                        disabled={!selectedVideo || isGenerating}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 h-10 px-6"
                    >
                        {isGenerating ? (
                            <>
                                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                Analysing...
                            </>
                        ) : (
                            <>
                                <Sparkles className="mr-2 h-4 w-4" />
                                Generate Ideas
                            </>
                        )}
                    </Button>
                </div>

                {/* Loading State */}
                {isGenerating && (
                    <div className="space-y-2 animate-in fade-in zoom-in-95 duration-300">
                        <div className="flex justify-between text-xs text-purple-600 font-medium">
                            <span>Scanning transcript...</span>
                            <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2 bg-purple-100 [&>div]:bg-purple-600" />
                        <p className="text-xs text-center text-muted-foreground mt-2">AI is identifying high-engagement moments...</p>
                    </div>
                )}

                {/* Results Grid */}
                {!isGenerating && snippets.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in slide-in-from-bottom-4 duration-500">
                        {snippets.map((snippet) => (
                            <Card key={snippet.id} className="border-border bg-slate-50/50/50 overflow-hidden hover:shadow-md transition-shadow group">
                                <div className="h-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" />
                                <CardContent className="p-4 pt-5 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <Badge variant="outline" className="uppercase text-[10px] tracking-wider border-purple-200 text-purple-700 bg-purple-50">
                                            {snippet.platform}
                                        </Badge>
                                        <div className="flex items-center gap-1 text-green-600 text-xs font-bold">
                                            <TrendingUp className="h-3 w-3" />
                                            {snippet.viralScore}/100
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-foreground leading-tight">{snippet.title}</h3>
                                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                                            <Video className="h-3 w-3" /> {snippet.duration} est.
                                        </p>
                                    </div>

                                    <div className="bg-card p-3 rounded-lg border border-slate-100 shadow-sm">
                                        <p className="text-xs font-semibold text-muted-foreground dark:text-muted-foreground mb-1">Hook:</p>
                                        <p className="text-sm italic text-foreground">"{snippet.hook}"</p>
                                    </div>

                                    <div className="text-xs text-muted-foreground">
                                        <span className="font-semibold text-muted-foreground">Script Idea:</span> {snippet.script}
                                    </div>
                                </CardContent>
                                <CardFooter className="p-3 bg-card border-t border-slate-100 gap-2">
                                    <Button variant="ghost" size="sm" className="w-full text-xs h-8" onClick={() => copyScript(snippet.id, snippet.script)}>
                                        {copiedId === snippet.id ? <Check className="h-3 w-3 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
                                        {copiedId === snippet.id ? "Copied" : "Copy Script"}
                                    </Button>
                                    <Button variant="ghost" size="sm" className="w-full text-xs h-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                        <Scissors className="h-3 w-3 mr-1" /> Create
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
