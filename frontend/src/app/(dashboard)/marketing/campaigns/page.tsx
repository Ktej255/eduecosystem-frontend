"use client";

import React, { useState } from "react";
import {
    Mail, Plus, Trash2, GripVertical, Calendar, Users, Send,
    Clock, Sparkles, Save, ArrowLeft, CheckCircle2, Loader2,
    ChevronDown, ChevronUp, Eye
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import api from "@/lib/api";

interface EmailStep {
    id: string;
    day: number;
    subject: string;
    body: string;
    cta: string;
    ctaLink: string;
    isExpanded: boolean;
}

const DEFAULT_STEPS: EmailStep[] = [
    {
        id: "step-1",
        day: 0,
        subject: "Welcome to {{course_name}}! Here's what to expect",
        body: "Hi {{name}},\n\nWelcome aboard! We're thrilled to have you in our {{course_name}} batch.\n\nHere's what you can expect:\n• Daily study materials and video lectures\n• Weekly live doubt-clearing sessions\n• Curated PYQ practice sets\n\nLet's get started!",
        cta: "Start Learning →",
        ctaLink: "/dashboard",
        isExpanded: true,
    },
    {
        id: "step-2",
        day: 3,
        subject: "Your Day 3 progress report is ready 📊",
        body: "Hi {{name}},\n\nYou've been with us for 3 days now! Here's a quick check-in:\n\n📚 Lessons completed: {{lessons_done}}\n⏱️ Time spent: {{time_spent}}\n🎯 Next milestone: Complete Module 1\n\nKeep up the momentum!",
        cta: "View My Progress",
        ctaLink: "/progress",
        isExpanded: false,
    },
    {
        id: "step-3",
        day: 7,
        subject: "🎁 Exclusive offer: Upgrade your plan",
        body: "Hi {{name}},\n\nYou've been an incredible student this week! As a token of our appreciation, here's an exclusive 20% discount to upgrade to the Premium plan.\n\nPremium includes:\n• 1-on-1 mentorship sessions\n• Answer writing practice with AI evaluation\n• Priority doubt resolution\n\nThis offer expires in 48 hours!",
        cta: "Claim 20% Off",
        ctaLink: "/upgrade",
        isExpanded: false,
    }
];

export default function CampaignsPage() {
    const [campaignName, setCampaignName] = useState("Welcome Series — New Batch Onboarding");
    const [audience, setAudience] = useState("batch1");
    const [steps, setSteps] = useState<EmailStep[]>(DEFAULT_STEPS);
    const [isSaving, setIsSaving] = useState(false);
    const [isLaunching, setIsLaunching] = useState(false);
    const [previewStep, setPreviewStep] = useState<EmailStep | null>(null);

    const addStep = () => {
        const lastDay = steps.length > 0 ? steps[steps.length - 1].day : 0;
        const newStep: EmailStep = {
            id: `step-${Date.now()}`,
            day: lastDay + 3,
            subject: "",
            body: "",
            cta: "Learn More",
            ctaLink: "/dashboard",
            isExpanded: true,
        };
        // Collapse all existing steps
        setSteps([...steps.map(s => ({ ...s, isExpanded: false })), newStep]);
    };

    const removeStep = (id: string) => {
        if (steps.length <= 1) {
            toast.error("A campaign needs at least one email step.");
            return;
        }
        setSteps(steps.filter(s => s.id !== id));
        toast.success("Step removed.");
    };

    const updateStep = (id: string, field: keyof EmailStep, value: any) => {
        setSteps(steps.map(s => s.id === id ? { ...s, [field]: value } : s));
    };

    const toggleExpand = (id: string) => {
        setSteps(steps.map(s => s.id === id ? { ...s, isExpanded: !s.isExpanded } : s));
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await api.post("/marketing/campaigns", {
                name: campaignName,
                audience,
                steps: steps.map(({ isExpanded, ...rest }) => rest),
            });
            toast.success("Campaign draft saved!");
        } catch (err) {
            toast.error("Failed to save. Backend may be unavailable.");
        } finally {
            setIsSaving(false);
        }
    };

    const handleLaunch = async () => {
        const emptySubjects = steps.filter(s => !s.subject.trim());
        if (emptySubjects.length > 0) {
            toast.error(`${emptySubjects.length} step(s) have empty subjects. Fill them in before launching.`);
            return;
        }
        setIsLaunching(true);
        try {
            await api.post("/marketing/campaigns/launch", {
                name: campaignName,
                audience,
                steps: steps.map(({ isExpanded, ...rest }) => rest),
            });
            toast.success("🚀 Campaign launched! Emails will be sent on schedule.");
        } catch (err) {
            toast.error("Failed to launch campaign.");
        } finally {
            setIsLaunching(false);
        }
    };

    return (
        <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
            <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
            </Link>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                            <Mail className="h-5 w-5 text-white" />
                        </div>
                        Email Campaigns
                    </h1>
                    <p className="text-muted-foreground mt-1 text-sm">
                        Build multi-step email drip sequences to nurture and convert students.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handleSave} disabled={isSaving}>
                        {isSaving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
                        Save Draft
                    </Button>
                    <Button
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                        onClick={handleLaunch}
                        disabled={isLaunching}
                    >
                        {isLaunching ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Send className="w-4 h-4 mr-2" />}
                        Launch Campaign
                    </Button>
                </div>
            </div>

            {/* Campaign Config */}
            <Card className="border-border shadow-sm">
                <CardContent className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label className="text-sm font-medium">Campaign Name</Label>
                        <Input
                            value={campaignName}
                            onChange={(e) => setCampaignName(e.target.value)}
                            placeholder="e.g. Welcome Series"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                            <Users className="w-4 h-4 text-muted-foreground" /> Target Audience
                        </Label>
                        <Select value={audience} onValueChange={setAudience}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Students</SelectItem>
                                <SelectItem value="batch1">UPSC Batch 1</SelectItem>
                                <SelectItem value="ras">RAS Batch</SelectItem>
                                <SelectItem value="new_leads">New Leads (Not Enrolled)</SelectItem>
                                <SelectItem value="inactive">Inactive Students (7+ days)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            {/* Timeline Visual */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground px-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Drip Timeline: {steps.length} emails over {steps[steps.length - 1]?.day || 0} days</span>
                <div className="flex-1 h-px bg-border" />
                <Button variant="ghost" size="sm" className="h-7 text-xs text-indigo-600" onClick={addStep}>
                    <Plus className="w-3 h-3 mr-1" /> Add Step
                </Button>
            </div>

            {/* Email Steps */}
            <div className="space-y-3">
                {steps.map((step, index) => (
                    <Card key={step.id} className="border-border shadow-sm overflow-hidden animate-in fade-in duration-200">
                        {/* Step Header (always visible) */}
                        <div
                            className="flex items-center gap-3 p-4 cursor-pointer hover:bg-muted/30 transition-colors"
                            onClick={() => toggleExpand(step.id)}
                        >
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex-shrink-0">
                                {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="text-xs bg-muted">
                                        <Calendar className="w-3 h-3 mr-1" /> Day {step.day}
                                    </Badge>
                                    <span className="text-sm font-medium truncate">
                                        {step.subject || <span className="text-muted-foreground italic">Untitled email</span>}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <Button
                                    variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-blue-600"
                                    onClick={(e) => { e.stopPropagation(); setPreviewStep(step); }}
                                >
                                    <Eye className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-600"
                                    onClick={(e) => { e.stopPropagation(); removeStep(step.id); }}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                                {step.isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                            </div>
                        </div>

                        {/* Step Body (expandable) */}
                        {step.isExpanded && (
                            <CardContent className="pt-0 pb-5 px-5 space-y-4 border-t border-border animate-in slide-in-from-top-2 duration-200">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
                                    <div className="space-y-1">
                                        <Label className="text-xs">Send on Day</Label>
                                        <Input
                                            type="number" min={0}
                                            value={step.day}
                                            onChange={(e) => updateStep(step.id, "day", parseInt(e.target.value) || 0)}
                                        />
                                    </div>
                                    <div className="md:col-span-3 space-y-1">
                                        <Label className="text-xs">Subject Line</Label>
                                        <Input
                                            value={step.subject}
                                            onChange={(e) => updateStep(step.id, "subject", e.target.value)}
                                            placeholder="e.g. Welcome to {{course_name}}!"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-xs">Email Body</Label>
                                    <Textarea
                                        value={step.body}
                                        onChange={(e) => updateStep(step.id, "body", e.target.value)}
                                        placeholder="Write your email content here... Use {{name}}, {{course_name}} as merge fields."
                                        className="min-h-[120px] resize-none text-sm"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <Label className="text-xs">CTA Button Text</Label>
                                        <Input
                                            value={step.cta}
                                            onChange={(e) => updateStep(step.id, "cta", e.target.value)}
                                            placeholder="e.g. Start Learning"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label className="text-xs">CTA Link</Label>
                                        <Input
                                            value={step.ctaLink}
                                            onChange={(e) => updateStep(step.id, "ctaLink", e.target.value)}
                                            placeholder="/dashboard"
                                            className="font-mono text-xs"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        )}
                    </Card>
                ))}
            </div>

            {/* Email Preview Dialog */}
            <Dialog open={!!previewStep} onOpenChange={() => setPreviewStep(null)}>
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Eye className="w-5 h-5 text-indigo-500" /> Email Preview
                        </DialogTitle>
                        <DialogDescription>
                            This is how the email will appear to students.
                        </DialogDescription>
                    </DialogHeader>
                    {previewStep && (
                        <div className="border border-border rounded-lg overflow-hidden">
                            {/* Email Header */}
                            <div className="bg-muted px-4 py-3 border-b border-border space-y-1">
                                <p className="text-xs text-muted-foreground">From: EduEcosystem &lt;noreply@eduecosystem.com&gt;</p>
                                <p className="text-xs text-muted-foreground">To: student@example.com</p>
                                <p className="text-sm font-semibold">{previewStep.subject.replace(/\{\{.*?\}\}/g, '[Student Name]')}</p>
                            </div>
                            {/* Email Body */}
                            <div className="p-4 bg-card text-sm whitespace-pre-wrap leading-relaxed">
                                {previewStep.body.replace(/\{\{name\}\}/g, 'Rahul').replace(/\{\{course_name\}\}/g, 'UPSC Foundation').replace(/\{\{.*?\}\}/g, '...')}
                            </div>
                            {/* CTA */}
                            {previewStep.cta && (
                                <div className="px-4 pb-4 bg-card">
                                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-2">
                                        {previewStep.cta}
                                    </Button>
                                </div>
                            )}
                        </div>
                    )}
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setPreviewStep(null)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
