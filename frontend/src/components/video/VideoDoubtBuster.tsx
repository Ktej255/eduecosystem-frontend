"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send, Sparkles, X, User, Bot, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import api from "@/lib/api";

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface VideoDoubtBusterProps {
    lessonId: number;
    segmentKey?: string;
    transcript?: string;
}

export function VideoDoubtBuster({ lessonId, segmentKey, transcript }: VideoDoubtBusterProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hi! I'm your AI Doubt-Buster. Ask me anything about this video!" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMsg }]);
        setIsLoading(true);

        try {
            // Use the AI chat endpoint with transcript context
            const response = await api.post("/ai/chat", {
                message: userMsg,
                history: messages.slice(1).map(m => ({ role: m.role, content: m.content })),
                context: `The student is watching a video lesson. 
                  Video Transcript Context: ${transcript?.substring(0, 2000) || "Context not available."}
                  Please answer based on the video content if possible.`
            });

            setMessages(prev => [...prev, { role: "assistant", content: response.data.response }]);
        } catch (error) {
            console.error("DoubtBuster Error:", error);
            setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting to the AI. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 w-96 h-[500px] bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-gray-800 bg-cyan-950/20 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-cyan-400" />
                                <span className="font-bold text-white">Doubt-Buster AI</span>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-white">
                                <X className="h-4 w-4" />
                            </Button>
                        </div>

                        {/* Chat Area */}
                        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                            <div className="space-y-4">
                                {messages.map((m, i) => (
                                    <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === "user"
                                                ? "bg-cyan-600 text-white rounded-br-none"
                                                : "bg-gray-800 text-gray-200 rounded-bl-none"
                                            }`}>
                                            <div className="flex items-center gap-2 mb-1 opacity-50 text-[10px] uppercase font-bold">
                                                {m.role === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                                                {m.role}
                                            </div>
                                            {m.content}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-gray-800 p-3 rounded-2xl rounded-bl-none">
                                            <Loader2 className="h-4 w-4 animate-spin text-cyan-400" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>

                        {/* Footer */}
                        <div className="p-4 border-t border-gray-800 bg-black/20">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex gap-2"
                            >
                                <Input
                                    placeholder="Ask a doubt..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="bg-gray-800 border-gray-700 text-white"
                                />
                                <Button type="submit" size="icon" disabled={isLoading} className="bg-cyan-600 hover:bg-cyan-500 shrink-0">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={`h-14 w-14 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? "bg-gray-800 rotate-90" : "bg-cyan-600 hover:bg-cyan-500 scale-110"
                    }`}
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
            </Button>
        </div>
    );
}
