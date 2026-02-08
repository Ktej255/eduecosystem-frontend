
"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles } from 'lucide-react';

interface QueryInputProps {
    onSend: (message: string) => void;
    isLoading: boolean;
}

export default function QueryInput({ onSend, isLoading }: QueryInputProps) {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim() || isLoading) return;
        onSend(input);
        setInput('');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="p-4 bg-slate-900/50 backdrop-blur border-t border-slate-800">
            <div className="relative flex gap-2 items-end max-w-4xl mx-auto">
                <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask a question about the Constitution..."
                    className="min-h-[50px] max-h-[150px] resize-none bg-slate-950 border-slate-700 focus:border-cyan-500/50 pr-12 rounded-xl text-sm"
                    disabled={isLoading}
                />
                <Button
                    size="icon"
                    className="absolute right-2 bottom-2 h-8 w-8 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 transition-all"
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                >
                    {isLoading ? (
                        <Sparkles className="h-4 w-4 animate-spin" />
                    ) : (
                        <Send className="h-4 w-4" />
                    )}
                </Button>
            </div>
            <p className="text-[10px] text-center text-slate-600 mt-2">
                "AI can make mistakes. Verify important information from the Constitution."
            </p>
        </div>
    );
}
