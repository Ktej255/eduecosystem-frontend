import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, Play, CheckCircle, Clock, Trophy } from 'lucide-react';
import { MODERN_MCQS_DATA, MEDIEVAL_MCQS_DATA, ANCIENT_MCQS_DATA } from './data/history-mcqs-data';
import { SPECTRUM_MODERN_HISTORY, HistoryChapter } from './data/spectrum-modern-history';
import { ANCIENT_SCHEDULE } from './data/ancient-schedule-data';
import { MEDIEVAL_SCHEDULE } from './data/medieval-schedule-data';
import { getLearningProgress } from '@/services/progressStorage';

type HistorySection = 'modern' | 'medieval' | 'ancient';

export default function HistoryQuestionBank() {
    const router = useRouter();
    const [activeSection, setActiveSection] = useState<HistorySection>('modern');
    const [solvedCount, setSolvedCount] = useState(0);

    React.useEffect(() => {
        // Load progress
        const progress = getLearningProgress();
        const solved = progress.solvedQuestions || [];
        setSolvedCount(solved.length);
    }, []);

    const getSchedule = (section: HistorySection): HistoryChapter[] => {
        switch (section) {
            case 'modern': return SPECTRUM_MODERN_HISTORY;
            case 'medieval': return MEDIEVAL_SCHEDULE as any as HistoryChapter[]; // Casting if types differ, but assuming specific types match generic roughly or will fix later
            case 'ancient': return ANCIENT_SCHEDULE as any as HistoryChapter[];
            default: return [];
        }
    };

    const getMCQData = (section: HistorySection) => {
        switch (section) {
            case 'modern': return MODERN_MCQS_DATA;
            case 'medieval': return MEDIEVAL_MCQS_DATA;
            case 'ancient': return ANCIENT_MCQS_DATA;
            default: return {};
        }
    };

    const schedule = getSchedule(activeSection);
    const mcqData = getMCQData(activeSection);

    // Filter chapters that have MCQs
    const chaptersWithMCQs = schedule.map((ch: HistoryChapter) => {
        const count = mcqData[ch.id]?.length || 0;
        return {
            ...ch,
            mcqCount: count
        };
    }).filter((ch: HistoryChapter & { mcqCount: number }) => ch.mcqCount > 0);

    const totalQuestions = chaptersWithMCQs.reduce((acc: number, curr: { mcqCount: number }) => acc + curr.mcqCount, 0);

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Question Bank</h1>
                    <p className="text-neutral-500 mt-1">Practice MCQs from all chapters</p>
                </div>

                <div className="flex bg-white dark:bg-neutral-900 p-1 rounded-lg border border-neutral-200 dark:border-neutral-800">
                    {(['modern', 'medieval', 'ancient'] as HistorySection[]).map((section) => (
                        <button
                            key={section}
                            onClick={() => setActiveSection(section)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all capitalize ${activeSection === section
                                ? 'bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200 shadow-sm'
                                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300'
                                }`}
                        >
                            {section} History
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                            <Trophy className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-neutral-500 font-medium">Questions Mastery</p>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{solvedCount}</h3>
                                <span className="text-sm text-neutral-400">/ {totalQuestions}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                            <CheckCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-neutral-500 font-medium">Active Chapters</p>
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{chaptersWithMCQs.length}</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600 dark:text-amber-400">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-neutral-500 font-medium">Est. Practice Time</p>
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{Math.ceil(totalQuestions * 1.5)} mins</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Available Chapters</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {chaptersWithMCQs.map((chapter: HistoryChapter & { mcqCount: number }) => (
                        <div
                            key={chapter.id}
                            className="bg-white dark:bg-neutral-900 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-amber-400 dark:hover:border-amber-600 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <span className="text-xs font-bold text-amber-600 dark:text-amber-500 uppercase tracking-wider bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded">
                                    Chapter {chapter.id}
                                </span>
                                <span className="text-xs text-neutral-400 font-medium flex items-center gap-1">
                                    <FileText className="w-3 h-3" />
                                    {chapter.mcqCount} Qs
                                </span>
                            </div>

                            <h3 className="font-semibold text-neutral-900 dark:text-white mb-4 line-clamp-2 h-12">
                                {chapter.title}
                            </h3>



                            <div className="grid grid-cols-3 gap-2">
                                <button
                                    onClick={() => router.push(`/student/batch1/history/mcq?chapter=${chapter.id}&section=${activeSection}&level=1`)}
                                    className="py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg text-xs font-bold hover:bg-green-100 hover:scale-105 transition-all border border-green-200 dark:border-green-800"
                                >
                                    Level 1
                                </button>
                                <button
                                    onClick={() => router.push(`/student/batch1/history/mcq?chapter=${chapter.id}&section=${activeSection}&level=2`)}
                                    className="py-1.5 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 rounded-lg text-xs font-bold hover:bg-amber-100 hover:scale-105 transition-all border border-amber-200 dark:border-amber-800"
                                >
                                    Level 2
                                </button>
                                <button
                                    onClick={() => router.push(`/student/batch1/history/mcq?chapter=${chapter.id}&section=${activeSection}&level=3`)}
                                    className="py-1.5 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg text-xs font-bold hover:bg-red-100 hover:scale-105 transition-all border border-red-200 dark:border-red-800"
                                >
                                    Level 3
                                </button>
                            </div>
                        </div>
                    ))}

                    {chaptersWithMCQs.length === 0 && (
                        <div className="col-span-full py-12 text-center text-neutral-500 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700">
                            No MCQs available for this section yet.
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}
