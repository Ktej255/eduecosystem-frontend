
"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ChatWindow from '@/components/batch1-1/polity/ai-tutor/ui/ChatWindow';
import QueryInput from '@/components/batch1-1/polity/ai-tutor/ui/QueryInput';
import { ChatMessage, sendMessageToDrAmbedkar } from '@/components/batch1-1/polity/ai-tutor/services/ChatService';
import { Sparkles, BookOpen, Scale, History, ChevronLeft } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { TOPIC_TITLES } from '@/components/batch1-1/polity/data/polity-types-95';

export default function AITutorPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const topicIdParam = searchParams.get('topicId');
    const topicId = topicIdParam ? parseInt(topicIdParam) : undefined;

    // Resolve topic context
    const currentTopic = topicId ? TOPIC_TITLES.find(t => t.id === topicId) : undefined;

    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isTyping, setIsTyping] = useState(false);

    const handleSendMessage = async (text: string) => {
        // 1. Add User Message
        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: text,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        // 2. Call Service with Context
        const context = currentTopic ? {
            topicId: currentTopic.id,
            topicTitle: currentTopic.title
        } : undefined;

        const aiMsg = await sendMessageToDrAmbedkar(text, messages, context);

        // 3. Add AI Message
        setMessages(prev => [...prev, aiMsg]);
        setIsTyping(false);
    };

    const handleSuggestionClick = (text: string) => {
        handleSendMessage(text);
    };

    return (
        <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
            {/* Left Sidebar: Context & Suggestions */}
            <aside className="w-80 border-r border-slate-800 bg-slate-900/50 p-6 hidden md:flex flex-col gap-6">
                <div>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-slate-400 hover:text-white px-0 mb-4 hover:bg-transparent"
                        onClick={() => router.back()}
                    >
                        <ChevronLeft className="w-4 h-4 mr-1" /> Back to Dashboard
                    </Button>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
                        <Scale className="w-5 h-5 text-cyan-500" />
                        Ask Dr. Ambedkar
                    </h1>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        Your personal AI Constitutional Advisor. Trained on the Constitution of India, Laxmikanth, and DD Basu.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Suggested Queries</h3>
                    {[
                        "What is the Basic Structure Doctrine?",
                        "Can the President veto a Constitutional Amendment?",
                        "Explain Article 21 with examples.",
                        "Difference between Article 32 and 226?",
                    ].map((query, i) => (
                        <button
                            key={i}
                            onClick={() => handleSuggestionClick(query)}
                            className="w-full text-left p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500/30 text-xs text-slate-300 transition-all flex justify-between items-center group"
                        >
                            {query}
                            <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity" />
                        </button>
                    ))}
                </div>

                <div className="mt-auto p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
                    <div className="flex items-center gap-2 text-amber-400 mb-2">
                        <History className="w-4 h-4" />
                        <span className="text-xs font-bold">Today in History</span>
                    </div>
                    <p className="text-[10px] text-slate-400">
                        On this day in 1949, the Constituent Assembly debated the language provisions (Part XVII).
                    </p>
                </div>
            </aside>

            {/* Main Chat Area */}
            <main className="flex-1 flex flex-col relative">
                <header className="h-14 border-b border-slate-800 flex items-center px-6 justify-between backdrop-blur-sm bg-slate-900/80 z-10">
                    <span className="text-xs font-medium text-slate-500 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Neural Network Online
                    </span>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                        Clear Chat
                    </Button>
                </header>

                <ChatWindow messages={messages} isTyping={isTyping} />

                <div className="absolute bottom-0 left-0 right-0 z-20">
                    <QueryInput onSend={handleSendMessage} isLoading={isTyping} />
                </div>
            </main>
        </div>
    );
}
