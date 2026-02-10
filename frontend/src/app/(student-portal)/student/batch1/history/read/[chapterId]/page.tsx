"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Highlighter, Share2, ZoomIn, ZoomOut, Pencil, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MODERN_HISTORY_CONTENT } from '@/components/batch1/history/data/modern/content-registry';
import HandwrittenChapter1 from '@/components/batch1/history/modern/v2/HandwrittenChapter1';
import HandwrittenChapter2 from '@/components/batch1/history/modern/v2/HandwrittenChapter2';
import HandwrittenChapter3 from '@/components/batch1/history/modern/v2/HandwrittenChapter3';
import HandwrittenChapter4 from '@/components/batch1/history/modern/v2/HandwrittenChapter4';
import HandwrittenChapter5 from '@/components/batch1/history/modern/v2/HandwrittenChapter5';
import HandwrittenChapter6 from '@/components/batch1/history/modern/v2/HandwrittenChapter6';
import HandwrittenChapter7 from '@/components/batch1/history/modern/v2/HandwrittenChapter7';
import HandwrittenChapter8 from '@/components/batch1/history/modern/v2/HandwrittenChapter8';
import HandwrittenChapter9 from '@/components/batch1/history/modern/v2/HandwrittenChapter9';
import HandwrittenChapter10 from '@/components/batch1/history/modern/v2/HandwrittenChapter10';
import HandwrittenChapter11 from '@/components/batch1/history/modern/v2/HandwrittenChapter11';
import HandwrittenChapter12 from '@/components/batch1/history/modern/v2/HandwrittenChapter12';
import HandwrittenChapter13 from '@/components/batch1/history/modern/v2/HandwrittenChapter13';
import HandwrittenChapter14 from '@/components/batch1/history/modern/v2/HandwrittenChapter14';
import HandwrittenChapter15 from '@/components/batch1/history/modern/v2/HandwrittenChapter15';
import HandwrittenChapter16 from '@/components/batch1/history/modern/v2/HandwrittenChapter16';
import HandwrittenChapter17 from '@/components/batch1/history/modern/v2/HandwrittenChapter17';
import HandwrittenChapter18 from '@/components/batch1/history/modern/v2/HandwrittenChapter18';
import HandwrittenChapter19 from '@/components/batch1/history/modern/v2/HandwrittenChapter19';
import HandwrittenChapter20 from '@/components/batch1/history/modern/v2/HandwrittenChapter20';
import HandwrittenChapter21 from '@/components/batch1/history/modern/v2/HandwrittenChapter21';
import HandwrittenChapter22 from '@/components/batch1/history/modern/v2/HandwrittenChapter22';
import HandwrittenChapter23 from '@/components/batch1/history/modern/v2/HandwrittenChapter23';
import HandwrittenChapter24 from '@/components/batch1/history/modern/v2/HandwrittenChapter24';

function HistoryReadContent() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const chapterId = params.chapterId as string;

    // Ensure we handle both string "1" and number 1 just in case, though keys are strings
    const content = MODERN_HISTORY_CONTENT[chapterId] || MODERN_HISTORY_CONTENT[String(chapterId)];

    // V2 Trial Logic
    // Allow toggle via query param ?v=2 or UI
    const [version, setVersion] = useState<'v1' | 'v2'>('v1');
    const [fontSize, setFontSize] = useState(16);

    useEffect(() => {
        if (searchParams.get('v') === '2') {
            const v2Supported = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
            if (v2Supported.includes(chapterId)) {
                setVersion('v2');
            }
        }
    }, [searchParams, chapterId]);

    const handlePrevious = () => {
        const currentId = parseInt(chapterId);
        if (currentId > 1) {
            router.push(`/student/batch1/history/read/${currentId - 1}`);
        }
    };

    const handleNext = () => {
        const currentId = parseInt(chapterId);
        // Assuming max 24 for now based on registry. Ideally check keys.
        if (currentId < 24) {
            router.push(`/student/batch1/history/read/${currentId + 1}`);
        }
    };

    if (!content && chapterId !== '1' && version !== 'v2') {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdfbf7] text-gray-800">
                <h1 className="text-2xl font-bold mb-4">Chapter Content Not Found</h1>
                <Button onClick={() => router.back()}>Go Back</Button>
            </div>
        );
    }

    // Render V2 functionality
    const renderV2Content = () => {
        switch (chapterId) {
            case '1': return <HandwrittenChapter1 />;
            case '2': return <HandwrittenChapter2 />;
            case '3': return <HandwrittenChapter3 />;
            case '4': return <HandwrittenChapter4 />;
            case '5': return <HandwrittenChapter5 />;
            case '6': return <HandwrittenChapter6 />;
            case '7': return <HandwrittenChapter7 />;
            case '8': return <HandwrittenChapter8 />;
            case '9': return <HandwrittenChapter9 />;
            case '10': return <HandwrittenChapter10 />;
            case '11': return <HandwrittenChapter11 />;
            case '12': return <HandwrittenChapter12 />;
            case '13': return <HandwrittenChapter13 />;
            case '14': return <HandwrittenChapter14 />;
            case '15': return <HandwrittenChapter15 />;
            case '16': return <HandwrittenChapter16 />;
            case '17': return <HandwrittenChapter17 />;
            case '18': return <HandwrittenChapter18 />;
            case '19': return <HandwrittenChapter19 />;
            case '20': return <HandwrittenChapter20 />;
            case '21': return <HandwrittenChapter21 />;
            case '22': return <HandwrittenChapter22 />;
            // case '23': return <HandwrittenChapter23 />; // Reverted to V1
            // case '24': return <HandwrittenChapter24 />; // Reverted to V1
            default: return null;
        }
    };

    // Render V2 if active (Support for Chapters 1-22)
    if (version === 'v2' && ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'].includes(chapterId)) {
        return (
            <div>
                <div className="fixed top-4 right-4 z-50 flex gap-2">
                    <Button
                        size="sm"
                        variant="secondary"
                        className="shadow-md bg-white text-slate-800 border-2 border-slate-200 hover:bg-slate-100 font-sans"
                        onClick={() => setVersion('v1')}
                    >
                        <FileText className="w-4 h-4 mr-2" />
                        Switch to Classic (V1)
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        className="shadow-md bg-white text-slate-800 hover:bg-slate-100 font-sans"
                        onClick={() => router.back()}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Exit
                    </Button>
                </div>
                {renderV2Content()}
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
                        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'].includes(chapterId) && version === 'v1' && (
                            <Button
                                size="sm"
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-2 border-white shadow-lg animate-pulse"
                                onClick={() => setVersion('v2')}
                            >
                                <Pencil className="w-4 h-4 mr-2" /> Try Handwritten Mode (V2)
                            </Button>
                        )}
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest hidden sm:inline-block">Master Notes</span>
                        <div className="h-4 w-px bg-gray-300 hidden sm:block"></div>
                        <h1 className="text-lg font-bold text-gray-900 truncate max-w-[200px] sm:max-w-md">Chapter {chapterId}</h1>
                        <div className="flex gap-1">
                            <Button variant="ghost" size="icon" onClick={() => setFontSize(Math.max(14, fontSize - 2))}>
                                <ZoomOut className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => setFontSize(Math.min(24, fontSize + 2))}>
                                <ZoomIn className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-3xl mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Paper Texture Effect */}
                    <div
                        className="bg-white p-8 md:p-12 shadow-[rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.05)_0px_8px_32px] min-h-[800px] relative overflow-hidden"
                        style={{ fontSize: `${fontSize}px` }}
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
                        <div className="absolute left-12 top-0 bottom-0 w-px bg-red-300 hidden md:block"></div>

                        {/* Content */}
                        <div className="md:pl-8 relative z-10">
                            {content && renderContent(content)}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Navigation for Next/Prev Chapter */}
                <div className="mt-8 flex justify-between font-sans">
                    <Button
                        onClick={handlePrevious}
                        disabled={parseInt(chapterId) <= 1}
                        className="bg-stone-100 hover:bg-stone-200 text-stone-800 shadow hover:shadow-md transition-all border border-stone-300 disabled:opacity-50"
                        size="lg"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" /> Previous Chapter
                    </Button>

                    <Button
                        onClick={handleNext}
                        disabled={parseInt(chapterId) >= 22}
                        className="bg-stone-800 hover:bg-stone-700 text-amber-50 shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                        size="lg"
                    >
                        Next Chapter <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default function HistoryReadPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <HistoryReadContent />
        </Suspense>
    );
}
