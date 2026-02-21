"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Highlighter, Share2, ZoomIn, ZoomOut, Pencil, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MODERN_HISTORY_CONTENT } from '@/components/batch1/history/data/modern/content-registry';
import { MEDIEVAL_CONTENT_MAP } from '@/components/batch1/history/data/medieval/content-registry';
import { ANCIENT_CONTENT_MAP } from '@/components/batch1/history/data/ancient/content-registry';
import { isHistoryChapterComplete, markHistoryChapterComplete } from '@/lib/history-progress-store';
import ConfidencePoll from '@/components/shared/ConfidencePoll';
import { CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguageStore } from '@/lib/language-store';

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
import HandwrittenChapter25 from '@/components/batch1/history/modern/v2/HandwrittenChapter25';
import HandwrittenChapter26 from '@/components/batch1/history/modern/v2/HandwrittenChapter26';
import HandwrittenChapter27 from '@/components/batch1/history/modern/v2/HandwrittenChapter27';
import HandwrittenChapter28 from '@/components/batch1/history/modern/v2/HandwrittenChapter28';
import HandwrittenChapter29 from '@/components/batch1/history/modern/v2/HandwrittenChapter29';
import HandwrittenChapter30 from '@/components/batch1/history/modern/v2/HandwrittenChapter30';
import HandwrittenChapter31 from '@/components/batch1/history/modern/v2/HandwrittenChapter31';
import HandwrittenChapter32 from '@/components/batch1/history/modern/v2/HandwrittenChapter32';
import HandwrittenChapter33 from '@/components/batch1/history/modern/v2/HandwrittenChapter33';
import HandwrittenChapter34 from '@/components/batch1/history/modern/v2/HandwrittenChapter34';
import HandwrittenChapter35 from '@/components/batch1/history/modern/v2/HandwrittenChapter35';
import HandwrittenChapter36 from '@/components/batch1/history/modern/v2/HandwrittenChapter36';
import HandwrittenChapter37 from '@/components/batch1/history/modern/v2/HandwrittenChapter37';
import HandwrittenChapter38 from '@/components/batch1/history/modern/v2/HandwrittenChapter38';
import HandwrittenChapter39 from '@/components/batch1/history/modern/v2/HandwrittenChapter39';

function HistoryReadContent() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const chapterId = params.chapterId as string;
    const section = searchParams.get('section') || 'modern';
    const { language, setLanguage, t } = useLanguageStore();

    let content = '';

    // Select Content Map based on section
    if (section === 'medieval') {
        const chapterData = MEDIEVAL_CONTENT_MAP[parseInt(chapterId)] || MEDIEVAL_CONTENT_MAP[1]; // Fallback to 1 if not found
        content = chapterData?.content || "Content not found.";
    } else if (section === 'ancient') {
        const chapterData = ANCIENT_CONTENT_MAP[parseInt(chapterId)] || ANCIENT_CONTENT_MAP[1];
        content = chapterData?.content || "Content not found.";
    } else {
        // Default to Modern
        const modernData = MODERN_HISTORY_CONTENT[chapterId] || MODERN_HISTORY_CONTENT[String(chapterId)];
        if (typeof modernData === 'object' && modernData !== null && 'content' in modernData) {
            content = (modernData as any).content;
        } else {
            content = modernData as string;
        }
    }

    // V2 Trial Logic
    // Allow toggle via query param ?v=2 or UI
    // Default to v2 for modern section (handwritten notes) since all 39 chapters have V2 components
    const [version, setVersion] = useState<'v1' | 'v2'>(section === 'modern' ? 'v2' : 'v1');
    const [fontSize, setFontSize] = useState(16);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        setIsCompleted(isHistoryChapterComplete(parseInt(chapterId)));
    }, [chapterId]);

    const handleMarkComplete = () => {
        markHistoryChapterComplete(parseInt(chapterId));
        setIsCompleted(true);
        toast.success("Chapter marked as complete!");
    };

    useEffect(() => {
        if (searchParams.get('v') === '2') {
            const v2Supported = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39'];
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
        if (currentId < 39) {
            router.push(`/student/batch1/history/read/${currentId + 1}`);
        }
    };

    if (!content && chapterId !== '1' && version !== 'v2' && parseInt(chapterId) <= 35) {
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
            case '23': return <HandwrittenChapter23 />;
            case '24': return <HandwrittenChapter24 />;
            case '25': return <HandwrittenChapter25 />;
            case '26': return <HandwrittenChapter26 />;
            case '27': return <HandwrittenChapter27 />;
            case '28': return <HandwrittenChapter28 />;
            case '29': return <HandwrittenChapter29 />;
            case '30': return <HandwrittenChapter30 />;
            case '31': return <HandwrittenChapter31 />;
            case '32': return <HandwrittenChapter32 />;
            case '33': return <HandwrittenChapter33 />;
            case '34': return <HandwrittenChapter34 />;
            case '35': return <HandwrittenChapter35 />;
            case '36': return <HandwrittenChapter36 />;
            case '37': return <HandwrittenChapter37 />;
            case '38': return <HandwrittenChapter38 />;
            case '39': return <HandwrittenChapter39 />;
            default: return null;
        }
    };

    // Simple Markdown Parser ... (reused below)
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
                        onClick={() => router.push(`/student/batch1/history?tab=dashboard&section=${section}`)}
                        className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    >
                        <ArrowLeft className="w-5 h-5 mr-1" /> Back to Dashboard
                    </Button>


                    <div className="flex items-center gap-4">
                        {/* Language Toggle */}
                        <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-300">
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'en' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLanguage('hi')}
                                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'hi' ? 'bg-white shadow-sm text-orange-600' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                हिंदी
                            </button>
                        </div>

                        {/* Toggle Switch */}
                        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39'].includes(chapterId) && section === 'modern' && (
                            <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-300">
                                <button
                                    onClick={() => setVersion('v1')}
                                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${version === 'v1' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                                >
                                    Classic
                                </button>
                                <button
                                    onClick={() => setVersion('v2')}
                                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${version === 'v2' ? 'bg-white shadow-sm text-purple-600' : 'text-gray-500 hover:text-gray-900'}`}
                                >
                                    <Pencil className="w-3 h-3" /> Note Mode
                                </button>
                            </div>
                        )}

                        <div className="hidden sm:block">
                            <h1 className="text-lg font-bold text-gray-900 truncate max-w-[200px]">Chapter {chapterId}</h1>
                        </div>

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
                    {version === 'v2' ? (
                        <div className="min-h-[800px]">
                            {renderV2Content()}
                        </div>
                    ) : (
                        /* Paper Texture Effect */
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
                                {language === 'hi' ? (
                                    <div className="flex flex-col items-center justify-center h-64 text-center">
                                        <p className="text-xl font-bold text-orange-600 mb-2">{t('coming_soon_hindi')}</p>
                                        <p className="text-gray-500">We are working on translating this chapter.</p>
                                        <button
                                            onClick={() => setLanguage('en')}
                                            className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 font-medium"
                                        >
                                            Switch to English
                                        </button>
                                    </div>
                                ) : (
                                    content && renderContent(content)
                                )}
                            </div>
                        </div>
                    )}
                </motion.div>

                {/* Completion Section */}
                <div className="mt-8 max-w-2xl mx-auto">
                    {isCompleted ? (
                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 text-center animate-in zoom-in duration-300">
                            <div className="flex flex-col items-center gap-4">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 rounded-full font-bold text-sm">
                                    <CheckCircle className="w-5 h-5" />
                                    {t('chapter_completed')}
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Assess your confidence to finalize this session.
                                </p>
                                <div className="w-full max-w-sm">
                                    <ConfidencePoll chapterId={chapterId} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center">
                            <Button
                                onClick={handleMarkComplete}
                                size="lg"
                                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold shadow-lg text-lg px-8 py-6 h-auto rounded-xl"
                            >
                                <CheckCircle className="w-6 h-6 mr-2" />
                                {t('mark_complete')}
                            </Button>
                        </div>
                    )}
                </div>

                {/* Bottom Navigation for Next/Prev Chapter */}
                <div className="mt-8 flex justify-between font-sans">
                    <Button
                        onClick={handlePrevious}
                        disabled={parseInt(chapterId) <= 1}
                        className="bg-stone-100 hover:bg-stone-200 text-stone-800 shadow hover:shadow-md transition-all border border-stone-300 disabled:opacity-50"
                        size="lg"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" /> {t('previous_chapter')}
                    </Button>

                    <Button
                        onClick={handleNext}
                        disabled={parseInt(chapterId) >= 39}
                        className="bg-stone-800 hover:bg-stone-700 text-amber-50 shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                        size="lg"
                    >
                        {t('next_chapter')} <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
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
