"use client";

import { useState, useRef } from "react";
import {
    Upload,
    FileText,
    X,
    CheckCircle2,
    Sparkles,
    Loader2,
    Tag,
    ArrowRight,
    Youtube,
    Lightbulb,
    Copy,
    Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { aiService } from "@/lib/services/aiService";

export default function SmartUploadWizard() {
    const { toast } = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1); // Step 3 is now Snippet Factory, 4 is Success
    const [file, setFile] = useState<File | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [metadata, setMetadata] = useState<any>(null);

    // Form State
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState<string[]>([]);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setFile(e.target.files[0]);
            setStep(2); // Move to AI Analysis step
        }
    };

    const runAIAnalysis = async () => {
        if (!file) return;
        setIsAnalyzing(true);
        try {
            const data = await aiService.analyzeDocument(file);
            setMetadata(data);
            setTitle(data.title);
            setDescription(data.description);
            setTags(data.tags);
            setStep(3); // Move to Snippet Factory after analysis
            toast({
                title: "AI Analysis Complete!",
                description: "Metadata generated successfully.",
                variant: "default"
            });
        } catch (error) {
            console.error("AI Analysis failed:", error);
            toast({
                title: "Analysis failed.",
                description: "Using manual entry fallback.",
                variant: "destructive"
            });
            // Fallback for demo/safety
            const mockTitle = file.name.split('.')[0].replace(/-/g, ' ');
            setTitle(mockTitle.charAt(0).toUpperCase() + mockTitle.slice(1));
            setDescription(`Comprehensive study material regarding ${mockTitle}. Includes key concepts, definitions, and exam-relevant points.`);
            const keywords = ["History", "Polity", "Economy", "Geography", "Science"];
            const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
            setTags(["UPSC", "Prelims 2026", randomKeyword, "Important"]);
            setStep(3); // Still move to next step, but with fallback data
        } finally {
            setIsAnalyzing(false);
            // Remove the rogue setTimeout callback end since there's no setTimeout opening here
        }
    };

    const handleGenerateSnippets = () => {
        setStep(3); // Go to Snippet Factory
    };

    const handlePublish = () => {
        setStep(4);
        // Reset after delay
        setTimeout(() => {
            setIsOpen(false);
            setTimeout(() => {
                setStep(1);
                setFile(null);
            }, 300);
        }, 2000);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast({
            title: "Copied!",
            description: "Snippet copied to clipboard.",
        });
    };


    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-sm transition-all hover:scale-105">
                    <Upload className="mr-2 h-4 w-4" />
                    Smart Upload
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl border-emerald-500/20 bg-card/95 backdrop-blur-xl/95">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl">
                        {step === 1 && <Upload className="h-5 w-5 text-emerald-600" />}
                        {step === 2 && <Sparkles className="h-5 w-5 text-purple-600" />}
                        {step === 3 && <Lightbulb className="h-5 w-5 text-amber-500" />}
                        {step === 4 && <CheckCircle2 className="h-5 w-5 text-green-600" />}

                        {step === 1 ? "Upload Content" : step === 2 ? "AI Enhancement" : step === 3 ? "Snippet Factory" : "Published!"}
                    </DialogTitle>
                    <DialogDescription>
                        {step === 1 && "Drag & drop or select a file to begin."}
                        {step === 2 && "Review AI-generated metadata before publishing."}
                        {step === 3 && "Generate social clips and quick facts."}
                        {step === 4 && "Your content is now live for students."}
                    </DialogDescription>
                </DialogHeader>

                <div className="py-6">
                    {/* Step 1: Upload */}
                    {step === 1 && (
                        <div
                            className="border-2 border-dashed border-border rounded-xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-emerald-400 hover:bg-emerald-50/30 transition-all group"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <input
                                type="file"
                                className="hidden"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                            />
                            <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Upload className="h-8 w-8 text-muted-foreground group-hover:text-emerald-500" />
                            </div>
                            <h3 className="font-semibold text-muted-foreground">Click to upload or drag and drop</h3>
                            <p className="text-sm text-muted-foreground mt-1">PDF, MP4, or DOCX (Max 50MB)</p>
                        </div>
                    )}

                    {/* Step 2: AI Analysis & Edit */}
                    {step === 2 && (
                        <div className="space-y-4">
                            {isAnalyzing ? (
                                <div className="flex flex-col items-center justify-center py-10 space-y-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                                        <Loader2 className="h-12 w-12 text-purple-600 animate-spin relative z-10" />
                                    </div>
                                    <p className="text-sm font-medium text-purple-600 animate-pulse">
                                        Analysis in progress... AI is generating tags
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="grid gap-2">
                                        <Label htmlFor="title">Title</Label>
                                        <Input
                                            id="title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            className="border-purple-200 focus-visible:ring-purple-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="desc">Description</Label>
                                        <Textarea
                                            id="desc"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            className="h-24 border-purple-200 focus-visible:ring-purple-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label>AI Suggested Tags</Label>
                                        <div className="flex flex-wrap gap-2">
                                            {tags.map((tag) => (
                                                <Badge key={tag} variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                                                    <Sparkles className="h-3 w-3 mr-1" />
                                                    {tag}
                                                    <button className="ml-1 hover:text-red-500" onClick={() => setTags(tags.filter(t => t !== tag))}>
                                                        <X className="h-3 w-3" />
                                                    </button>
                                                </Badge>
                                            ))}
                                            <Badge variant="outline" className="cursor-pointer border-dashed border-border text-muted-foreground hover:border-purple-400 hover:text-purple-600">
                                                <Plus className="h-3 w-3 mr-1" /> Add Tag
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 3: Snippet Factory */}
                    {step === 3 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800 flex items-start gap-2">
                                <Lightbulb className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <p>AI has analyzed your content and generated ready-to-use snippets for student engagement.</p>
                            </div>

                            <Tabs defaultValue="facts" className="w-full">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="facts">
                                        <Lightbulb className="h-4 w-4 mr-2" /> Quick Facts
                                    </TabsTrigger>
                                    <TabsTrigger value="shorts">
                                        <Youtube className="h-4 w-4 mr-2" /> Short Script
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="facts" className="space-y-3 mt-4">
                                    {[1, 2, 3].map((i) => (
                                        <Card key={i} className="group hover:border-amber-400 transition-colors">
                                            <CardContent className="p-3 flex items-start gap-3">
                                                <Badge variant="outline" className="mt-0.5 bg-amber-100 text-amber-700 border-amber-200">{i}</Badge>
                                                <p className="text-sm text-muted-foreground flex-grow">
                                                    {i === 1 ? `${title} is crucial for Prelims 2026 because of recent amendments.` :
                                                        i === 2 ? `Key statistic: 45% increase in related cases over the last decade.` :
                                                            `Remember: Article 34 of the constitution directly impacts this concept.`}
                                                </p>
                                                <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => copyToClipboard("Fact content...")}>
                                                    <Copy className="h-3 w-3" />
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </TabsContent>
                                <TabsContent value="shorts" className="mt-4">
                                    <Card className="bg-slate-900 text-slate-100 border-slate-700">
                                        <CardContent className="p-4 space-y-4">
                                            <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                                                <Badge className="bg-red-600 text-white border-0"><Youtube className="h-3 w-3 mr-1" /> Shorts Script</Badge>
                                                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white" onClick={() => copyToClipboard("Script content...")}>
                                                    <Copy className="h-4 w-4 mr-2" /> Copy
                                                </Button>
                                            </div>
                                            <div className="space-y-4 font-mono text-sm opacity-90">
                                                <p><span className="text-green-400">[HOOK]</span>: "Did you know {title} actually changes how we understand the Constitution? 😱"</p>
                                                <p><span className="text-blue-400">[BODY]</span>: "Most students miss this key point: It's not just about the law, it's about the implementation. Here are 3 reasons why..."</p>
                                                <p><span className="text-yellow-400">[CTA]</span>: "Check out the full PDF in the portal for the deep dive! Link in bio. 👇"</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    )}

                    {/* Step 4: Success */}
                    {step === 4 && (
                        <div className="flex flex-col items-center justify-center py-6 animate-in zoom-in duration-300">
                            <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle2 className="h-10 w-10 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-green-800">Published Successfully!</h3>
                            <p className="text-green-600 text-center max-w-xs mt-1">
                                "{title}" is now available to {tags.includes('Batch 1') ? 'Batch 1' : 'all students'}.
                            </p>
                        </div>
                    )}
                </div>

                <div className="flex justify-end gap-2">
                    {step === 2 && !isAnalyzing && (
                        <>
                            <Button variant="outline" onClick={() => { setStep(1); setFile(null); }}>
                                Cancel
                            </Button>
                            <Button variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200" onClick={handleGenerateSnippets}>
                                <Sparkles className="mr-2 h-4 w-4" /> Generate Snippets
                            </Button>
                            <Button className="bg-purple-600 hover:bg-purple-700" onClick={handlePublish}>
                                Publish Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <Button variant="outline" onClick={() => setStep(2)}>
                                Back
                            </Button>
                            <Button className="bg-green-600 hover:bg-green-700" onClick={handlePublish}>
                                <CheckCircle2 className="mr-2 h-4 w-4" /> Confirm & Publish
                            </Button>
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}

// Icon for add tag badge
function Plus({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}
