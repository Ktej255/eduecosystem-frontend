
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import aiLearningService, { CoachingResponse } from "@/services/aiLearningService";
import { Loader2, Send, Bot, User, RefreshCw } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface Message {
    role: 'assistant' | 'user' | 'system';
    content: string;
}

export default function AICoachChat() {
    const [topic, setTopic] = useState("");
    const [sessionId, setSessionId] = useState<number | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Auto-scroll to bottom
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleStartSession = async () => {
        if (!topic.trim()) {
            toast({
                title: "Topic Required",
                description: "Please enter a topic to start coaching.",
                variant: "destructive"
            });
            return;
        }

        setIsLoading(true);
        try {
            const data = await aiLearningService.startCoachingSession({ topic });
            setSessionId(data.session_id);
            setMessages([
                { role: 'assistant', content: data.message }
            ]);
            toast({
                title: "Session Started",
                description: `Coaching session for "${topic}" is active.`
            });
        } catch (error) {
            console.error("Failed to start session:", error);
            toast({
                title: "Error",
                description: "Could not start coaching session. Please try again.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendMessage = async () => {
        if (!inputText.trim() || !sessionId) return;

        const userMsg = inputText.trim();
        setInputText("");
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setIsLoading(true);

        try {
            const data = await aiLearningService.chatWithCoach({
                session_id: sessionId,
                message: userMsg
            });
            setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
        } catch (error) {
            console.error("Failed to send message:", error);
            toast({
                title: "Error",
                description: "Failed to get response from AI Coach.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const resetSession = () => {
        setSessionId(null);
        setMessages([]);
        setTopic("");
    };

    if (!sessionId) {
        // Start Screen
        return (
            <div className="flex items-center justify-center min-h-[500px]">
                <Card className="w-full max-w-md shadow-lg border-t-4 border-indigo-500">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                            <Bot className="w-8 h-8 text-indigo-600" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-slate-800">AI Coach</CardTitle>
                        <CardDescription>
                            Enter a topic you want to master. I'll quiz you and help you improve.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Topic (e.g., "Indian Polity", "Mughal Empire")
                            </label>
                            <Input
                                placeholder="What do you want to study?"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                className="h-12 text-lg"
                                disabled={isLoading}
                            />
                        </div>
                        <Button
                            className="w-full h-12 text-lg bg-indigo-600 hover:bg-indigo-700"
                            onClick={handleStartSession}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Starting...</>
                            ) : (
                                "Start Coaching Session"
                            )}
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Chat Screen
    return (
        <Card className="w-full h-[600px] flex flex-col shadow-lg border-0 overflow-hidden">
            <CardHeader className="bg-indigo-50 py-3 px-4 flex flex-row items-center justify-between border-b">
                <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                        <Bot className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                        <CardTitle className="text-lg font-semibold text-slate-800">Coach: {topic}</CardTitle>
                        <CardDescription className="text-xs">AI-Powered Personal Tutor</CardDescription>
                    </div>
                </div>
                <Button variant="ghost" size="sm" onClick={resetSession} className="text-slate-500 hover:text-slate-700">
                    <RefreshCw className="w-4 h-4 mr-1" /> New Topic
                </Button>
            </CardHeader>

            <CardContent className="flex-1 p-0 overflow-hidden relative bg-slate-50/50">
                <ScrollArea className="h-full px-4 py-4 pr-6">
                    <div className="space-y-4 pb-4">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                            >
                                <div className={`
                                    flex gap-3 max-w-[80%] 
                                    ${msg.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'}
                                `}>
                                    <div className={`
                                        w-8 h-8 rounded-full flex items-center justify-center shrink-0
                                        ${msg.role === 'assistant' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-600'}
                                    `}>
                                        {msg.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
                                    </div>
                                    <div className={`
                                        p-3 px-4 rounded-2xl text-sm leading-relaxed shadow-sm
                                        ${msg.role === 'assistant'
                                            ? 'bg-white text-slate-800 border-slate-100 border'
                                            : 'bg-indigo-600 text-white'}
                                    `}>
                                        {msg.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="flex gap-3 max-w-[80%]">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-indigo-100 text-indigo-600">
                                        <Bot size={16} />
                                    </div>
                                    <div className="bg-white p-3 px-4 rounded-2xl border border-slate-100 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={scrollRef} />
                    </div>
                </ScrollArea>
            </CardContent>

            <div className="p-4 bg-white border-t">
                <div className="flex gap-2">
                    <Input
                        placeholder="Type your answer or question..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={handleKeyPress}
                        disabled={isLoading}
                        className="flex-1 focus-visible:ring-indigo-500"
                    />
                    <Button
                        onClick={handleSendMessage}
                        disabled={isLoading || !inputText.trim()}
                        className="bg-indigo-600 hover:bg-indigo-700"
                    >
                        <Send className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </Card>
    );
}
