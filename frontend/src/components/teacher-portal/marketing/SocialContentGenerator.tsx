"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Sparkles, Linkedin, Twitter, Instagram, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

// Mock Generator Logic
const GENERATE_TIPS = (topic: string) => ({
    linkedin: `🚀 Mastering ${topic}: A Strategic Approach\n\nTo crack UPSC questions on ${topic}, focus on these 3 key dimensions:\n\n1️⃣ Historical Context: What led to this event/concept?\n2️⃣ Current Relevance: How does it impact policy today?\n3️⃣ Comparative Analysis: Relate it to global examples.\n\n💡 Pro Tip: Don't just memorize facts; understand the "Why" and "How".\n\n#UPSC #Education #${topic.replace(/\s/g, '')} #StudySmart`,
    twitter: `⚡ Quick Study Tip: ${topic}\n\nDon't get lost in the details! Focus on:\n✅ Key Dates/Definitions\n✅ Major Impacts\n✅ Recent SC Judgments (if applicable)\n\nKeep it simple. Keep it consistent. 📚\n\n#UPSCPre2026 #${topic.replace(/\s/g, '')}`,
    instagram: `🧠 ${topic} in 60 Seconds!\n\nHere is your daily dose of wisdom:\n\n🔹 Point 1: Core definition.\n🔹 Point 2: Critical analysis.\n🔹 Point 3: Way forward.\n\nSwipe left for the mind map! 👉\n\nSave this for your revision. 📌\n\n#Learning #${topic.replace(/\s/g, '')} #StudentLife`
});

export default function SocialContentGenerator() {
    const [topic, setTopic] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedContent, setGeneratedContent] = useState<{ linkedin: string, twitter: string, instagram: string } | null>(null);
    const [copied, setCopied] = useState<string | null>(null);

    const handleGenerate = () => {
        if (!topic) {
            toast.error("Please enter a topic");
            return;
        }

        setIsGenerating(true);
        setTimeout(() => {
            setGeneratedContent(GENERATE_TIPS(topic));
            setIsGenerating(false);
            toast.success("Content generated!");
        }, 1500);
    };

    const copyToClipboard = (text: string, platform: string) => {
        navigator.clipboard.writeText(text);
        setCopied(platform);
        toast.success(`Copied used for ${platform}`);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <Card className="h-full border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pink-600">
                    <Sparkles className="w-5 h-5" />
                    Social Media AI
                </CardTitle>
                <p className="text-xs text-neutral-500">Auto-generate engaging study tips for your audience.</p>
            </CardHeader>
            <CardContent className="space-y-6">

                <div className="flex gap-2">
                    <Input
                        placeholder="Enter topic (e.g., Monetary Policy)..."
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                    />
                    <Button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="bg-pink-600 hover:bg-pink-700 text-white min-w-[120px]"
                    >
                        {isGenerating ? <Sparkles className="w-4 h-4 animate-spin" /> : "Generate"}
                    </Button>
                </div>

                {generatedContent && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Tabs defaultValue="linkedin" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 mb-4">
                                <TabsTrigger value="linkedin" className="flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</TabsTrigger>
                                <TabsTrigger value="twitter" className="flex items-center gap-2"><Twitter className="w-4 h-4" /> Twitter</TabsTrigger>
                                <TabsTrigger value="instagram" className="flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</TabsTrigger>
                            </TabsList>

                            {Object.entries(generatedContent).map(([platform, content]) => (
                                <TabsContent key={platform} value={platform} className="mt-0">
                                    <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 relative group">
                                        <pre className="whitespace-pre-wrap font-sans text-sm text-neutral-700 dark:text-neutral-300">
                                            {content}
                                        </pre>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-neutral-900 shadow-sm"
                                            onClick={() => copyToClipboard(content, platform)}
                                        >
                                            {copied === platform ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                        </Button>
                                    </div>
                                    <p className="text-[10px] text-neutral-400 mt-2 text-right">
                                        AI-generated draft. Please review before posting.
                                    </p>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </motion.div>
                )}

                {!generatedContent && !isGenerating && (
                    <div className="h-40 flex flex-col items-center justify-center text-neutral-400 text-sm bg-neutral-50/50 rounded-lg border-2 border-dashed">
                        <Sparkles className="w-8 h-8 mb-2 opacity-20" />
                        Enter a topic to generate content
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
