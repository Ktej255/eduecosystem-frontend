"use client";

import { useState } from "react";
import {
    Plus,
    BookOpen,
    DollarSign,
    Clock,
    CheckCircle2,
    AlertCircle,
    Sparkles,
    ArrowRight,
    Layout,
    Upload
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useActivityLogStore } from "@/store/activityLogStore";

export default function CourseCreationWizard() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<1 | 2 | 3>(1);

    // Form State
    const [courseName, setCourseName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");

    const [error, setError] = useState<string | null>(null);

    const { addLog } = useActivityLogStore();

    const handleCreate = () => {
        if (!courseName || !category) {
            setError("Please fill in the required fields.");
            return;
        }
        setError(null);
        setStep(2);

        try {
            // Simulate "AI Structuring"
            setTimeout(() => {
                setStep(3);
            }, 1500);
        } catch (err) {
            console.error("Course creation failed:", err);
            setError("Internal error during generation.");
            setStep(1);
        }
    };

    const handleFinalize = () => {
        try {
            // Log to Audit System
            addLog({
                action: 'Course Created',
                description: `Successfully published course: ${courseName}`,
                user: 'Faculty Alpha', // Placeholder, ideally from auth context
                role: 'Instructor', // Placeholder
                status: 'success',
                module: 'content'
            });

            setIsOpen(false);
            // Reset form
            setTimeout(() => {
                setStep(1);
                setCourseName("");
                setCategory("");
                setPrice("");
                setDuration("");
                setDescription("");
                setError(null);
            }, 300);
        } catch (err) {
            setIsOpen(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all hover:scale-105">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Course
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl">
                        {step === 1 && <BookOpen className="h-5 w-5 text-emerald-600" />}
                        {step === 2 && <Sparkles className="h-5 w-5 text-purple-600 animate-pulse" />}
                        {step === 3 && <CheckCircle2 className="h-5 w-5 text-green-600" />}

                        {step === 1 ? "Create New Course" : step === 2 ? "AI Structuring Syllabus..." : "Course Created!"}
                    </DialogTitle>
                    <DialogDescription>
                        {step === 1 && "Fill in the details to launch a new learning journey."}
                        {step === 2 && "Analyze trends and generating optimal module structure..."}
                        {step === 3 && "Your course shell is ready. Start adding content!"}
                    </DialogDescription>
                </DialogHeader>

                <div className="py-6">
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-center gap-2 text-red-600 text-sm animate-in fade-in slide-in-from-top-1">
                            <AlertCircle className="h-4 w-4" />
                            {error}
                        </div>
                    )}
                    {/* Step 1: Details */}
                    {step === 1 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Course Name</Label>
                                <Input
                                    id="name"
                                    placeholder="e.g. Master UPSC Polity 2026"
                                    value={courseName}
                                    onChange={(e) => setCourseName(e.target.value)}
                                    className="focus-visible:ring-emerald-500"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label>Category</Label>
                                    <Select value={category} onValueChange={setCategory}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Subject" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="polity">Polity</SelectItem>
                                            <SelectItem value="history">History</SelectItem>
                                            <SelectItem value="geography">Geography</SelectItem>
                                            <SelectItem value="csat">CSAT</SelectItem>
                                            <SelectItem value="science">Science & Tech</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="duration">Duration</Label>
                                    <div className="relative">
                                        <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                                        <Input
                                            id="duration"
                                            placeholder="e.g. 90 Days"
                                            className="pl-9"
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="price">Price (₹)</Label>
                                <div className="relative">
                                    <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input
                                        id="price"
                                        type="number"
                                        placeholder="4999"
                                        className="pl-9 font-mono"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="desc">Description</Label>
                                <Textarea
                                    id="desc"
                                    placeholder="Brief overview of the course..."
                                    className="h-24 resize-none"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 2: AI Loading */}
                    {step === 2 && (
                        <div className="flex flex-col items-center justify-center py-8 space-y-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                                <Layout className="h-16 w-16 text-emerald-600 animate-bounce relative z-10" />
                            </div>
                            <div className="flex flex-col gap-2 w-full max-w-xs">
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-2/3 animate-[shimmer_1s_infinite]"></div>
                                </div>
                                <div className="text-xs text-center text-slate-500">Generating Syllabus Structure...</div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Success */}
                    {step === 3 && (
                        <div className="flex flex-col items-center justify-center py-4 animate-in zoom-in duration-300">
                            <div className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-emerald-600 flex items-center justify-center text-white text-xl font-bold">
                                        {courseName.charAt(0) || "C"}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800">{courseName}</h3>
                                        <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                                            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 capitalize">{category}</Badge>
                                            <span>•</span>
                                            <span>{duration}</span>
                                            <span>•</span>
                                            <span className="font-mono">₹{price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-slate-600 text-center text-sm max-w-sm">
                                Course created successfully. We've defined the basic structure. You can now start uploading lectures and notes.
                            </p>
                        </div>
                    )}
                </div>

                <div className="flex justify-end gap-2">
                    {step === 1 && (
                        <>
                            <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
                            <Button onClick={handleCreate} disabled={!courseName || !category}>
                                Continue <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </>
                    )}
                    {step === 3 && (
                        <Button className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto" onClick={handleFinalize}>
                            Go to Course Dashboard
                        </Button>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
