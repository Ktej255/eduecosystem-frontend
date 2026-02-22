"use client";

import { useState } from "react";
import {
    Magnet,
    Type,
    Link as LinkIcon,
    MousePointerClick,
    Eye,
    Save,
    ArrowRight,
    FileText,
    Download
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function LeadMagnetBuilder() {
    // Form State
    const [headline, setHeadline] = useState("Unlock 50+ Geography Mnemonics");
    const [subheadline, setSubheadline] = useState("Download our exclusive cheat sheet and never forget a river system again. Free for a limited time!");
    const [buttonText, setButtonText] = useState("Send me the PDF");
    const [assetUrl, setAssetUrl] = useState("https://eduecosystem.com/assets/geo-cheat-sheet.pdf");
    const [collectPhone, setCollectPhone] = useState(false);
    const [isPublished, setIsPublished] = useState(false);

    const handlePublish = () => {
        setIsPublished(true);
        setTimeout(() => setIsPublished(false), 3000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
            {/* Editor Panel */}
            <div className="lg:col-span-4 space-y-4">
                <Card className="border-border">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Magnet className="h-5 w-5 text-indigo-500" />
                            Magnet Builder
                        </CardTitle>
                        <CardDescription>Design your signup form.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label className="flex items-center gap-2">
                                <Type className="h-3 w-3 text-muted-foreground" /> Headline
                            </Label>
                            <Input
                                value={headline}
                                onChange={(e) => setHeadline(e.target.value)}
                                placeholder="e.g. Free History Timeline"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="flex items-center gap-2">
                                <FileText className="h-3 w-3 text-muted-foreground" /> Description
                            </Label>
                            <Textarea
                                value={subheadline}
                                onChange={(e) => setSubheadline(e.target.value)}
                                placeholder="Explain the value..."
                                className="resize-none h-24"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="flex items-center gap-2">
                                <MousePointerClick className="h-3 w-3 text-muted-foreground" /> CTA Button Text
                            </Label>
                            <Input
                                value={buttonText}
                                onChange={(e) => setButtonText(e.target.value)}
                                placeholder="e.g. Download Now"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="flex items-center gap-2">
                                <LinkIcon className="h-3 w-3 text-muted-foreground" /> Asset URL (PDF/Link)
                            </Label>
                            <Input
                                value={assetUrl}
                                onChange={(e) => setAssetUrl(e.target.value)}
                                placeholder="https://..."
                                className="font-mono text-xs"
                            />
                        </div>

                        <div className="flex items-center justify-between p-3 bg-muted rounded-lg border border-slate-100">
                            <Label htmlFor="phone-toggle" className="text-sm cursor-pointer">Collect Phone Number?</Label>
                            <Switch
                                id="phone-toggle"
                                checked={collectPhone}
                                onCheckedChange={setCollectPhone}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all"
                            onClick={handlePublish}
                            disabled={isPublished}
                        >
                            {isPublished ? "Published Successfully!" : "Publish Widget"}
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-8 flex flex-col h-full">
                <Card className="flex-1 border-border bg-slate-100/50/50 flex flex-col">
                    <CardHeader className="border-b border-border bg-card py-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <Eye className="h-4 w-4" /> Live Preview
                            </div>
                            <Badge variant="outline" className="bg-muted">Desktop View</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex items-center justify-center p-10">
                        {/* The Lead Magnet Widget Preview */}
                        <div className="w-full max-w-lg bg-card rounded-2xl shadow-xl overflow-hidden border border-border animate-in zoom-in-95 duration-300">
                            {/* Visual Header */}
                            <div className="h-24 bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                                <Download className="h-10 w-10 text-white/90 relative z-10" />
                            </div>

                            <div className="p-8 text-center space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2 leading-tight">
                                        {headline || "Your Headline Here"}
                                    </h3>
                                    <p className="text-muted-foreground dark:text-muted-foreground text-sm leading-relaxed">
                                        {subheadline || "Your subheadline goes here. It should be compelling."}
                                    </p>
                                </div>

                                <div className="space-y-3 max-w-xs mx-auto">
                                    <Input
                                        placeholder="Enter your email address"
                                        className="h-11 bg-muted border-border focus-visible:ring-indigo-500"
                                        readOnly
                                    />
                                    {collectPhone && (
                                        <Input
                                            placeholder="Phone number (WhatsApp)"
                                            className="h-11 bg-muted border-border focus-visible:ring-indigo-500"
                                            readOnly
                                        />
                                    )}
                                    <Button className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-base shadow-lg shadow-indigo-200 dark:shadow-none">
                                        {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>

                                <p className="text-[10px] text-muted-foreground">
                                    We respect your privacy. Unsubscribe at any time.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
