"use client";

import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const QUOTES = [
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
];

export default function SimpleDailyQuote() {
    const [quote, setQuote] = useState(QUOTES[0]);

    useEffect(() => {
        // Random quote on mount
        const index = Math.floor(Math.random() * QUOTES.length);
        setQuote(QUOTES[index]);
    }, []);

    return (
        <Card className="h-full bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border-indigo-200 dark:border-indigo-800 transition-all hover:shadow-md">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="p-3 bg-card dark:bg-indigo-950/50 rounded-full shadow-sm">
                    <Quote className="w-6 h-6 text-indigo-500" />
                </div>
                <blockquote className="italic font-medium text-foreground font-serif text-lg leading-relaxed">
                    "{quote.text}"
                </blockquote>
                <cite className="text-sm font-semibold text-muted-foreground dark:text-muted-foreground not-italic">
                    — {quote.author}
                </cite>
            </CardContent>
        </Card>
    );
}
