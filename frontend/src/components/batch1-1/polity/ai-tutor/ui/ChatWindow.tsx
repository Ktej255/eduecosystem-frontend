
"use client";

import React, { useRef, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChatMessage } from '../services/ChatService';
import ReactMarkdown from 'react-markdown';
import { Bot, User } from 'lucide-react';

interface ChatWindowProps {
    messages: ChatMessage[];
    isTyping: boolean;
}

export default function ChatWindow({ messages, isTyping }: ChatWindowProps) {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-slate-500 opacity-50">
                    <Bot className="w-16 h-16 mb-4" />
                    <p className="text-sm">Ask Dr. Ambedkar anything about the Constitution.</p>
                </div>
            )}

            {messages.map((msg) => (
                <div
                    key={msg.id}
                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                    <Avatar className={`w-8 h-8 border ${msg.role === 'ai' ? 'border-cyan-500/50' : 'border-slate-700'}`}>
                        <AvatarFallback className={msg.role === 'ai' ? 'bg-cyan-950 text-cyan-400' : 'bg-slate-800 text-slate-300'}>
                            {msg.role === 'ai' ? <Bot size={14} /> : <User size={14} />}
                        </AvatarFallback>
                    </Avatar>

                    <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm
                        ${msg.role === 'user'
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-slate-800 text-slate-200 border border-slate-700/50 rounded-bl-none'}
                    `}>
                        {msg.role === 'ai' ? (
                            <ReactMarkdown className="prose prose-invert prose-sm max-w-none">
                                {msg.content}
                            </ReactMarkdown>
                        ) : (
                            <p>{msg.content}</p>
                        )}

                        {/* Sources Metadata */}
                        {msg.sources && msg.sources.length > 0 && (
                            <div className="mt-2 pt-2 border-t border-slate-700/50 flex gap-2 flex-wrap">
                                {msg.sources.map((src, idx) => (
                                    <span key={idx} className="text-[10px] px-1.5 py-0.5 bg-slate-900/50 rounded text-slate-500 border border-slate-700/30">
                                        Docs: {src}
                                    </span>
                                ))}
                            </div>
                        )}

                        <span className="text-[10px] opacity-40 block mt-1 text-right">
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                    </div>
                </div>
            ))}

            {isTyping && (
                <div className="flex gap-3">
                    <Avatar className="w-8 h-8 border border-cyan-500/50">
                        <AvatarFallback className="bg-cyan-950 text-cyan-400">
                            <Bot size={14} />
                        </AvatarFallback>
                    </Avatar>
                    <div className="bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1 border border-slate-700/50">
                        <div className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full animate-bounce"></div>
                    </div>
                </div>
            )}

            <div ref={bottomRef} />
        </div>
    );
}
