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
    ArrowRight
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
import { cn } from "@/lib/utils";

export default function SmartUploadWizard() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [file, setFile] = useState<File | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    // Form State
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState<string[]>([]);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            simulateAIAnalysis(selectedFile);
        }
    };

    const simulateAIAnalysis = (file: File) => {
        setStep(2);
        setIsAnalyzing(true);

        // Mock AI Delay
        setTimeout(() => {
            const mockTitle = file.name.split('.')[0].replace(/-/g, ' ');
            setTitle(mockTitle.charAt(0).toUpperCase() + mockTitle.slice(1));
            setDescription(`Comprehensive study material regarding ${mockTitle}. Includes key concepts, definitions, and exam-relevant points.`);
            setTags(["UPSC", "Prelims 2026", "Important", "GS-2"]);
            setIsAnalyzing(false);
        }, 2000);
    };

    const handlePublish = () => {
        setStep(3);
        // Reset after delay
        setTimeout(() => {
            setIsOpen(false);
            setTimeout(() => {
                setStep(1);
                setFile(null);
            }, 300);
        }, 2000);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-sm transition-all hover:scale-105">
                    <Upload className="mr-2 h-4 w-4" />
                    Smart Upload
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl border-emerald-500/20 bg-white/95 backdrop-blur-xl dark:bg-slate-900/95">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl">
                        {step === 1 && <Upload className="h-5 w-5 text-emerald-600" />}
                        {step === 2 && <Sparkles className="h-5 w-5 text-purple-600" />}
                        {step === 3 && <CheckCircle2 className="h-5 w-5 text-green-600" />}

                        {step === 1 ? "Upload Content" : step === 2 ? "AI Enhancement" : "Published!"}
                    </DialogTitle>
                    <DialogDescription>
                        {step === 1 && "Drag & drop or select a file to begin."}
                        {step === 2 && "Review AI-generated metadata before publishing."}
                        {step === 3 && "Your content is now live for students."}
                    </DialogDescription>
                </DialogHeader>

                <div className="py-6">
                    {/* Step 1: Upload */}
                    {step === 1 && (
                        <div
                            className="border-2 border-dashed border-slate-200 rounded-xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-emerald-400 hover:bg-emerald-50/30 transition-all group"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <input
                                type="file"
                                className="hidden"
                                ref={fileInputRef}
                                onChange={handleFileSelect}
                            />
                            <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Upload className="h-8 w-8 text-slate-400 group-hover:text-emerald-500" />
                            </div>
                            <h3 className="font-semibold text-slate-700">Click to upload or drag and drop</h3>
                            <p className="text-sm text-slate-500 mt-1">PDF, MP4, or DOCX (Max 50MB)</p>
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
                                            <Badge variant="outline" className="cursor-pointer border-dashed border-slate-300 text-slate-500 hover:border-purple-400 hover:text-purple-600">
                                                <Plus className="h-3 w-3 mr-1" /> Add Tag
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 3: Success */}
                    {step === 3 && (
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
                            <Button className="bg-purple-600 hover:bg-purple-700" onClick={handlePublish}>
                                Publish Now <ArrowRight className="ml-2 h-4 w-4" />
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
