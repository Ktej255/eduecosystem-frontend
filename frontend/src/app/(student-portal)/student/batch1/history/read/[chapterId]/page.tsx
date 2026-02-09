"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Highlighter, Share2, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MODERN_HISTORY_CONTENT } from '@/components/batch1/history/data/modern/content-registry';

export default function HistoryReadPage() {
    const params = useParams();
    const router = useRouter();
    const chapterId = params.chapterId as string;
    console.log('[DEBUG] HistoryReadPage params:', params);
    console.log('[DEBUG] HistoryReadPage chapterId:', chapterId);

    // Ensure we handle both string "1" and number 1 just in case, though keys are strings
    const content = MODERN_HISTORY_CONTENT[chapterId] || MODERN_HISTORY_CONTENT[String(chapterId)];
    console.log('[DEBUG] HistoryReadPage content found:', !!content);

    const [fontSize, setFontSize] = useState(16);

    if (!content) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdfbf7] text-gray-800">
                <h1 className="text-2xl font-bold mb-4">Chapter Content Not Found</h1>
                <Button onClick={() => router.back()}>Go Back</Button>
            </div>
        );
    }

    // Simple Markdown Parser for the specific format we used
    const renderContent = (text: string) => {
        const lines = text.split('\n');
        return lines.map((line, index) => {
            // Block Headers
            if (line.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold text-red-800 mt-8 mb-4 border-b-2 border-red-800 pb-2 font-[family-name:var(--font-kalam)]">{line.replace('# ', '')}</h1>;
            }
            if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold text-blue-800 mt-6 mb-3 font-[family-name:var(--font-kalam)]">{line.replace('## ', '')}</h2>;
            }
            // Bullet points
            if (line.trim().startsWith('* ')) {
                const content = line.trim().replace('* ', '');
                const parts = content.split('**');
                return (
                    <li key={index} className="ml-6 mb-2 list-disc text-gray-800 leading-relaxed font-[family-name:var(--font-kalam)]">
                        {parts.map((part, i) =>
                            i % 2 === 1 ? <strong key={i} className="font-bold text-black">{part}</strong> : part
                        )}
                    </li>
                );
            }
            // Bold keys
            if (line.includes('**')) {
                const parts = line.split('**');
                return (
                    <p key={index} className="mb-2 text-gray-800 leading-relaxed font-[family-name:var(--font-kalam)]">
                        {parts.map((part, i) =>
                            i % 2 === 1 ? <strong key={i} className="font-bold text-black">{part}</strong> : part
                        )}
                    </p>
                );
            }
            // Blockquotes/Alerts
            if (line.startsWith('> ')) {
                const alertContent = line.replace('> ', '');
                if (alertContent.includes('[!WARNING]')) return null; // Skip wrapper line
                if (alertContent.includes('[!TIP]')) return null; // Skip wrapper line
                if (alertContent.includes('[!NOTE]')) return null; // Skip wrapper line

                return (
                    <div key={index} className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4 rounded-r-lg italic text-gray-700 font-[family-name:var(--font-kalam)]">
                        {alertContent}
                    </div>
                );
            }

            return <p key={index} className="min-h-[1rem] mb-2 font-[family-name:var(--font-kalam)]">{line}</p>;
        });
    };

    return (
        <div className="min-h-screen bg-[#fdfbf7] text-gray-900 font-[family-name:var(--font-kalam)] selection:bg-yellow-200">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-50 bg-[#fdfbf7]/90 backdrop-blur-sm border-b border-gray-200 px-4 py-3 shadow-sm font-sans">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => router.push('/student/batch1/history')}
                        className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    >
                        <ArrowLeft className="w-5 h-5 mr-1" /> Back to Dashboard
                    </Button>

                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest hidden sm:inline-block">Master Notes</span>
                        <div className="h-4 w-px bg-gray-300 hidden sm:block"></div>
                        <h1 className="text-lg font-bold text-gray-900 truncate max-w-[200px] sm:max-w-md">Chapter {chapterId}</h1>
                    </div>

                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" onClick={() => setFontSize(Math.max(14, fontSize - 1))}>
                            <ZoomOut className="w-4 h-4 text-gray-600" />
                        </Button>
                        <span className="text-xs text-gray-500 w-8 text-center">{fontSize}px</span>
                        <Button variant="ghost" size="icon" onClick={() => setFontSize(Math.min(24, fontSize + 1))}>
                            <ZoomIn className="w-4 h-4 text-gray-600" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content: The Notebook Paper */}
            <div className="max-w-4xl mx-auto p-4 sm:p-8 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-white shadow-xl rounded-lg overflow-hidden min-h-[80vh]"
                >
                    {/* Paper Texture Lines - CSS Pattern */}
                    <div className="absolute inset-0 pointer-events-none opacity-50"
                        style={{
                            backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)',
                            backgroundSize: '100% 2.5rem',
                            marginTop: '2.5rem'
                        }}
                    ></div>

                    {/* Left Margin Line */}
                    <div className="absolute left-4 sm:left-16 top-0 bottom-0 w-px bg-red-200 pointer-events-none"></div>

                    {/* Notebook Holes */}
                    <div className="absolute left-2 sm:left-4 top-0 bottom-0 flex flex-col gap-12 pt-8 pointer-events-none hidden sm:flex">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="w-4 h-4 rounded-full bg-gray-100 shadow-inner border border-gray-200"></div>
                        ))}
                    </div>

                    {/* Content Container */}
                    <div
                        className="relative z-10 p-4 sm:pl-24 pt-12"
                        style={{ fontSize: `${fontSize}px`, lineHeight: '2.5rem' }}
                    >
                        {/* Rendering the Markdown Content */}
                        {renderContent(content)}
                    </div>
                </motion.div>

                {/* Bottom Navigation for Next Chapter */}
                <div className="mt-8 flex justify-end">
                    {MODERN_HISTORY_CONTENT[String(Number(chapterId) + 1)] && (
                        <Button
                            onClick={() => router.push(`/student/batch1/history/read/${Number(chapterId) + 1}`)}
                            className="bg-stone-800 hover:bg-stone-700 text-amber-50 font-sans shadow-lg hover:shadow-xl transition-all"
                            size="lg"
                        >
                            Next Chapter <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
