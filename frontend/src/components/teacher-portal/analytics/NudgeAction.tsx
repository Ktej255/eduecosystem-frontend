"use client";

import { useState } from "react";
import {
    MessageSquare,
    Send,
    Smartphone,
    Mail,
    X,
    CheckCircle2,
    Sparkles,
    Copy
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface NudgeTemplate {
    id: string;
    title: string;
    text: string;
    tone: "Friendly" | "Urgent" | "Motivating";
}

const templates: NudgeTemplate[] = [
    {
        id: "t1",
        title: "Missed Class Check-in",
        text: "Hi {name}, we missed you in class today! 🎓 Hope everything is okay. Check out the recording when you can: {link}",
        tone: "Friendly"
    },
    {
        id: "t2",
        title: "Low Score Alert",
        text: "Hey {name}, noticed a dip in your recent Polity score. 📉 Let's schedule a quick 5-min chat to get you back on track?",
        tone: "Urgent"
    },
    {
        id: "t3",
        title: "Kudos (High Score)",
        text: "Awesome work on the Geography quiz, {name}! 🎉 You're crushing it. Keep that streak alive! 🔥",
        tone: "Motivating"
    }
];

interface NudgeProps {
    studentName?: string;
    context?: string;
    onClose?: () => void;
}

export default function NudgeAction({ studentName = "Rohan Das", context, onClose }: NudgeProps) {
    const [selectedStudent, setSelectedStudent] = useState(studentName);
    const [message, setMessage] = useState(templates[0].text.replace("{name}", studentName.split(' ')[0]));
    const [activeTab, setActiveTab] = useState("whatsapp");
    const [isSent, setIsSent] = useState(false);

    const handleTemplateSelect = (template: NudgeTemplate) => {
        let msg = template.text.replace("{name}", selectedStudent.split(' ')[0]);
        if (context) msg += `\n(Ref: ${context})`;
        setMessage(msg);
        setIsSent(false);
    };

    const handleSend = () => {
        setIsSent(true);
        setTimeout(() => {
            setIsSent(false);
            if (onClose) onClose();
        }, 2000);
    };

    return (
        <Card className="w-full max-w-md border-slate-200 dark:border-slate-800 shadow-lg mx-auto md:mx-0">
            <CardHeader className="pb-3 bg-slate-50/50 dark:bg-slate-900/10 border-b border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-center">
                    <CardTitle className="text-base font-bold flex items-center gap-2 text-slate-800 dark:text-slate-100">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        Quick Nudge
                    </CardTitle>
                    <Badge variant="outline" className="text-xs bg-white text-slate-500">
                        To: {selectedStudent}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="p-4 space-y-4">
                {/* Channel Selector */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="whatsapp" className="flex items-center gap-2 data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
                            <Smartphone className="h-4 w-4" /> WhatsApp
                        </TabsTrigger>
                        <TabsTrigger value="email" className="flex items-center gap-2 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                            <Mail className="h-4 w-4" /> Email
                        </TabsTrigger>
                    </TabsList>
                </Tabs>

                {/* Templates Grid */}
                <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Templates</span>
                    <div className="grid grid-cols-1 gap-2">
                        {templates.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => handleTemplateSelect(t)}
                                className={cn(
                                    "text-left p-2 rounded-lg text-xs border transition-all hover:bg-slate-50",
                                    message === t.text.replace("{name}", selectedStudent)
                                        ? "border-indigo-500 bg-indigo-50/50 text-indigo-700 font-medium"
                                        : "border-slate-100 text-slate-600 hover:border-slate-200"
                                )}
                            >
                                <span className={cn(
                                    "inline-block w-2 h-2 rounded-full mr-2",
                                    t.tone === "Friendly" ? "bg-blue-400" : t.tone === "Urgent" ? "bg-red-400" : "bg-green-400"
                                )}></span>
                                {t.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Message Editor */}
                <div className="relative">
                    <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="min-h-[100px] text-sm resize-none bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus-visible:ring-indigo-500"
                    />
                    <Button
                        size="icon"
                        variant="ghost"
                        className="absolute bottom-2 right-2 h-6 w-6 text-slate-400 hover:text-slate-600"
                        onClick={() => navigator.clipboard.writeText(message)}
                    >
                        <Copy className="h-3 w-3" />
                    </Button>
                </div>
            </CardContent>

            <CardFooter className="pt-0 pb-4">
                <Button
                    className={cn(
                        "w-full transition-all duration-300",
                        isSent
                            ? "bg-green-600 hover:bg-green-700"
                            : activeTab === 'whatsapp' ? "bg-[#25D366] hover:bg-[#128C7E] text-white" : "bg-blue-600 hover:bg-blue-700"
                    )}
                    onClick={handleSend}
                    disabled={isSent}
                >
                    {isSent ? (
                        <>
                            <CheckCircle2 className="h-4 w-4 mr-2" /> Sent Successfully!
                        </>
                    ) : (
                        <>
                            <Send className="h-4 w-4 mr-2" />
                            Send via {activeTab === 'whatsapp' ? 'WhatsApp' : 'Email'}
                        </>
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
}
