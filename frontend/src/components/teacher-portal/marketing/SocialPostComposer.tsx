"use client";

import React, { useState } from "react";
import { 
    Calendar, Image as ImageIcon, Video, Sparkles, 
    Send, Clock, Paperclip, X, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { format } from "date-fns";
import { aiService } from "@/lib/services/aiService";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// Fallback Generator (used when AI API is unavailable)
const GENERATE_TIPS_LOCAL = (topic: string) => 
    `🚀 Mastering ${topic}: A Strategic Approach\n\nTo crack UPSC questions on ${topic}, focus on these 3 key dimensions:\n\n1️⃣ Historical Context: What led to this event/concept?\n2️⃣ Current Relevance: How does it impact policy today?\n3️⃣ Comparative Analysis: Relate it to global examples.\n\n💡 Pro Tip: Don't just memorize facts; understand the "Why" and "How".\n\n#UPSC #Education #${topic.replace(/\s/g, '')} #StudySmart`;

interface SocialPostComposerProps {
    onPostCreated?: () => void;
}

export default function SocialPostComposer({ onPostCreated }: SocialPostComposerProps) {
    const [content, setContent] = useState("");
    const [topic, setTopic] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [scheduledDate, setScheduledDate] = useState<Date>();
    const [isPosting, setIsPosting] = useState(false);
    const [attachedMedia, setAttachedMedia] = useState<string | null>(null);

    const handleGenerateAI = async () => {
        if (!topic) {
            toast.error("Enter a topic for the AI to write about.");
            return;
        }

        setIsGenerating(true);
        try {
            const generated = await aiService.generateSocialContent(topic);
            setContent(generated.linkedin); // Defaulting to the longer format
            toast.success("AI draft generated!");
        } catch (err) {
            console.log("AI API unavailable, falling back to local generation");
            setContent(GENERATE_TIPS_LOCAL(topic));
            toast.success("Draft generated (local template)");
        } finally {
            setIsGenerating(false);
        }
    };

    const handlePublish = () => {
        if (!content) {
            toast.error("Post content cannot be empty.");
            return;
        }

        setIsPosting(true);
        // Simulate API call for scheduling/posting
        setTimeout(() => {
            toast.success(scheduledDate ? `Post scheduled for ${format(scheduledDate, 'PPP')}` : "Post published successfully!");
            setContent("");
            setTopic("");
            setScheduledDate(undefined);
            setAttachedMedia(null);
            setIsPosting(false);
            if (onPostCreated) onPostCreated();
        }, 1500);
    };

    const handleAttachMedia = () => {
        // Simulate picking an image
        setAttachedMedia("https://images.unsplash.com/photo-1546410531-df4cb71576d3?w=800&q=80");
        toast.info("Media attached from library.");
    };

    return (
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col h-full animate-in fade-in duration-300">
            {/* Header / AI Topic */}
            <div className="bg-slate-50 dark:bg-slate-900 border-b border-border p-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="flex-1 w-full flex relative">
                    <Input 
                        placeholder="Draft about..." 
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="pr-24 bg-background"
                        onKeyDown={(e) => e.key === 'Enter' && handleGenerateAI()}
                    />
                    <Button 
                        size="sm" 
                        variant="secondary" 
                        className="absolute right-1 top-1 h-7 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900"
                        onClick={handleGenerateAI}
                        disabled={isGenerating || !topic}
                    >
                        {isGenerating ? <Loader2 className="w-3 h-3 animate-spin mr-1"/> : <Sparkles className="w-3 h-3 mr-1" />}
                        AI Write
                    </Button>
                </div>
            </div>

            {/* Composer Area */}
            <div className="flex-1 p-4 flex flex-col gap-4 relative">
                <Textarea 
                    placeholder="What do you want to share with your students?" 
                    className="flex-1 min-h-[150px] resize-none border-none focus-visible:ring-0 text-base shadow-none p-0 bg-transparent"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                
                {/* Media Preview */}
                {attachedMedia && (
                    <div className="relative w-max rounded-lg overflow-hidden border border-border group">
                        <img src={attachedMedia} alt="Attached" className="h-32 object-cover rounded-lg" />
                        <button 
                            onClick={() => setAttachedMedia(null)}
                            className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>

            {/* Footer Toolbar */}
            <div className="border-t border-border p-3 bg-muted/30 flex items-center justify-between">
                <div className="flex items-center gap-1 text-muted-foreground">
                    <Button variant="ghost" size="icon" onClick={handleAttachMedia} title="Attach Image">
                        <ImageIcon className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={handleAttachMedia} title="Attach Video">
                        <Video className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Link Resource">
                        <Paperclip className="w-4 h-4" />
                    </Button>
                </div>

                <div className="flex items-center gap-2">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button 
                                variant={scheduledDate ? "secondary" : "ghost"} 
                                size="sm" 
                                className={cn(scheduledDate ? "text-indigo-600 bg-indigo-50" : "")}
                            >
                                <Calendar className="w-4 h-4 mr-2" />
                                {scheduledDate ? format(scheduledDate, 'MMM d') : "Schedule"}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="end">
                            <CalendarUI
                                mode="single"
                                selected={scheduledDate}
                                onSelect={setScheduledDate}
                                initialFocus
                                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                            />
                        </PopoverContent>
                    </Popover>

                    <Button 
                        onClick={handlePublish} 
                        disabled={isPosting || !content}
                        className={scheduledDate ? "bg-indigo-600 hover:bg-indigo-700 text-white" : "bg-[#1877F2] hover:bg-[#1864D9] text-white"}
                    >
                        {isPosting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : 
                         scheduledDate ? <Clock className="w-4 h-4 mr-2" /> : <Send className="w-4 h-4 mr-2" />
                        }
                        {scheduledDate ? "Set Schedule" : "Post Now"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
