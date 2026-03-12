import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useStudentActivityStore } from '@/store/studentActivityStore';
import { CheckCircle2, XCircle, Target, ChevronRight, Timer, AlertCircle, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SubTopic } from '@/components/upsc/subjects/polity/data/polity-subtopics';
import { getMCQsForSubtopics, MCQ } from '@/components/upsc/subjects/polity/data/polity-mcqs-data';
import { loadCompiledMCQs } from '@/components/upsc/subjects/history/data/spectrum-mcq-loader';
import { useMCQShortcuts } from '@/hooks/useKeyboardShortcuts';
import KeyboardShortcutsHelp from '@/components/common/KeyboardShortcutsHelp';
import { ConfidenceLevel } from '@/lib/gamification/gamification-types';
import { ActivityLogger } from '@/lib/analytics/ActivityLogger';
import { saveChapterReport } from '@/lib/report-persistence';
import { toast } from 'sonner';
import { PomodoroSubjectId } from './subject-schedule-configs';

// Temporary MCQ generator - will be replaced with actual content
function generateMCQsForSubtopics(subtopics: SubTopic[]): MCQ[] {
    const realMCQs = getMCQsForSubtopics(subtopics.map(s => s.id));
    if (realMCQs.length > 0) return realMCQs;

    const mcqs: MCQ[] = [];

    subtopics.forEach((subtopic, index) => {
        if (index < 5) { // Only 5-7 MCQs per cycle
            const correctIdx = Math.floor(Math.random() * 4);
            mcqs.push({
                id: `mcq_${subtopic.id}`,
                subtopicId: subtopic.id,
                question: `Which of the following best describes "${subtopic.label}"?`,
                options: [
                    'Option A related to constitutional provisions',
                    'Option B related to historical context',
                    'Option C related to practical applications',
                    'Option D related to comparative analysis'
                ],
                correctIndex: correctIdx,
                explanation: `The correct answer explains the key aspects of ${subtopic.label} as defined in the Constitution. [Detailed explanation to be added]`
            });
        }
    });

    return mcqs.slice(0, 7); // Max 7 MCQs per cycle
}

// ConfidenceLevel imported from gamification-types

interface MCQResult {
    questionId: string;
    subtopicId?: string;
    selectedAnswer: number | null;
    correctAnswer: number;
    isCorrect: boolean;
    confidence: ConfidenceLevel | null;
    timeSpent: number; // in seconds
}

interface CycleMCQsProps {
    selectedSubtopics: SubTopic[];
    onComplete: (results: MCQResult[]) => void;
    cycleNumber: number;
    preloadedMCQs?: MCQ[];
    canSkip?: boolean;
    skipsRemaining?: number;
    onSkip?: () => void;
    activityType?: 'MCQ_EVENING' | 'MCQ_POMODORO';
    subject?: PomodoroSubjectId;
}

export default function CycleMCQs({
    selectedSubtopics,
    onComplete,
    cycleNumber,
    preloadedMCQs,
    canSkip = false,
    skipsRemaining = 0,
    onSkip,
    activityType = 'MCQ_EVENING',
    subject = 'polity' as PomodoroSubjectId
}: CycleMCQsProps) {
    const mcqs = useMemo(() => {
        if (preloadedMCQs && preloadedMCQs.length > 0) return preloadedMCQs;
        return generateMCQsForSubtopics(selectedSubtopics);
    }, [selectedSubtopics, preloadedMCQs]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [confidence, setConfidence] = useState<ConfidenceLevel | null>(null);
    const [results, setResults] = useState<Record<string, MCQResult>>({});
    const [isGlobalTimeout, setIsGlobalTimeout] = useState(false);

    // Track time spent per question
    const [questionStartTime, setQuestionStartTime] = useState(Date.now());

    // Dynamic Timer Logic
    const totalTimeSeconds = useMemo(() => {
        const count = mcqs.length;
        if (count >= 100) return 2 * 60 * 60; // 2 hours for 100 questions
        if (count >= 60) return 60 * 60;      // 1 hour for 60-99 questions
        return count * 60;                    // 1 minute per question for < 60
    }, [mcqs.length]);

    // Timer state
    const [timeLeft, setTimeLeft] = useState(totalTimeSeconds);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const currentMCQ = mcqs[currentIndex];
    const progress = ((currentIndex + 1) / mcqs.length) * 100;
    const isLastQuestion = currentIndex === mcqs.length - 1;

    // Timer logic - GLOBAL
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    if (timerRef.current) clearInterval(timerRef.current);
                    setIsGlobalTimeout(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    // Handle Global Timeout
    useEffect(() => {
        if (isGlobalTimeout) {
            handleFinish();
        }
    }, [isGlobalTimeout]);

    const handleAnswerSelect = (optionIndex: number) => {
        if (isGlobalTimeout) return;
        setSelectedAnswer(optionIndex);
    };

    const handleConfidenceSelect = (level: ConfidenceLevel) => {
        if (isGlobalTimeout) return;
        setConfidence(level);
    };

    const { addActivity } = useStudentActivityStore();

    const saveCurrentResult = () => {
        const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
        const isCorrect = selectedAnswer === (currentMCQ.correctIndex ?? currentMCQ.correctAnswer);

        setResults(prev => ({
            ...prev,
            [currentMCQ.id]: {
                questionId: String(currentMCQ.id),
                subtopicId: currentMCQ.subtopicId,
                selectedAnswer,
                correctAnswer: (currentMCQ.correctIndex ?? currentMCQ.correctAnswer) || 0,
                isCorrect,
                confidence,
                timeSpent
            }
        }));

        // Log Activity
        if (selectedAnswer !== null) {
            ActivityLogger.logActivity({
                type: activityType,
                details: {
                    questionId: String(currentMCQ.id),
                    topic: 'Session MCQ',
                    subtopic: currentMCQ.subtopicId,
                    isCorrect,
                    confidence,
                    timeSpent
                }
            });

            // Push to Live Campus Pulse (Teacher Portal)
            addActivity({
                studentName: 'Test Student', // Ideally from auth context
                studentInitials: 'TS',
                action: isCorrect ? 'solved' : 'attempted',
                target: `MCQ: ${currentMCQ.question.substring(0, 30)}...`,
                color: isCorrect ? 'bg-emerald-500' : 'bg-amber-500'
            });
        }
    };

    const handleNext = () => {
        saveCurrentResult();
        if (isLastQuestion) {
            handleFinish();
        } else {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);

            // Restore previous choice if exists
            const existing = results[mcqs[nextIndex].id];
            if (existing) {
                setSelectedAnswer(existing.selectedAnswer);
                setConfidence(existing.confidence);
            } else {
                setSelectedAnswer(null);
                setConfidence(null);
            }
            setQuestionStartTime(Date.now());
        }
    };

    const handlePrevious = () => {
        saveCurrentResult();
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            setCurrentIndex(prevIndex);
            const existing = results[mcqs[prevIndex].id];
            if (existing) {
                setSelectedAnswer(existing.selectedAnswer);
                setConfidence(existing.confidence);
            }
            setQuestionStartTime(Date.now());
        }
    };

    const handleFinish = () => {
        if (timerRef.current) clearInterval(timerRef.current);

        // Current question data
        const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
        const isCurrentCorrect = selectedAnswer === (currentMCQ.correctIndex ?? currentMCQ.correctAnswer);

        // Create the final results object, starting with existing results
        const finalResultsMap: Record<string, MCQResult> = { ...results };

        // Ensure every question from the array is represented
        mcqs.forEach((mcq, idx) => {
            if (idx === currentIndex) {
                // Current question
                finalResultsMap[mcq.id] = {
                    questionId: String(mcq.id),
                    subtopicId: mcq.subtopicId,
                    selectedAnswer,
                    correctAnswer: (mcq.correctIndex ?? mcq.correctAnswer) || 0,
                    isCorrect: isCurrentCorrect,
                    confidence,
                    timeSpent
                };
            } else if (!finalResultsMap[mcq.id]) {
                // Unattempted question (before or after current index)
                finalResultsMap[mcq.id] = {
                    questionId: String(mcq.id),
                    subtopicId: mcq.subtopicId,
                    selectedAnswer: null,
                    correctAnswer: (mcq.correctIndex ?? mcq.correctAnswer) || 0,
                    isCorrect: false,
                    confidence: null,
                    timeSpent: 0
                };
            }
        });

        // Calculate score for report
        const finalResults = Object.values(finalResultsMap);
        const score = finalResults.filter(r => r.isCorrect).length;
        const totalQuestions = finalResults.length;
        const accuracy = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
        const totalTime = finalResults.reduce((sum, r) => sum + r.timeSpent, 0);

        // Calculate detailed stats for TestResult
        const correctCount = finalResults.filter(r => r.isCorrect).length;
        const answeredCount = finalResults.filter(r => r.selectedAnswer !== null).length;
        const incorrectCount = answeredCount - correctCount;
        const unansweredCount = totalQuestions - answeredCount;

        // Save to Universal Report Persistence
        // Use cycle number as chapter identifier for Pomodoro/Evening sessions
        const chapterId = cycleNumber;
        saveChapterReport(subject, chapterId, {
            score,
            totalQuestions,
            accuracy,
            totalTimeTaken: totalTime,
            correctCount,
            incorrectCount,
            unansweredCount,
            questions: finalResults.map(r => ({
                id: parseInt(r.questionId) || 0,
                question: mcqs.find(m => String(m.id) === r.questionId)?.question || '',
                options: mcqs.find(m => String(m.id) === r.questionId)?.options || [],
                correctAnswer: r.correctAnswer,
                userAnswer: r.selectedAnswer,
                isCorrect: r.isCorrect,
                confidence: r.confidence,
                explanation: mcqs.find(m => String(m.id) === r.questionId)?.explanation || '',
                chapter: String(cycleNumber),
                subtopic: mcqs.find(m => String(m.id) === r.questionId)?.subtopicId || '',
                timeSpent: r.timeSpent,
            }))
        }, cycleNumber);

        toast.success(
            `✅ Cycle ${cycleNumber} Complete! Score: ${score}/${totalQuestions} (${accuracy}%) - Report saved to Deep Report Center`,
            { duration: 5000 }
        );

        onComplete(finalResults);
    };

    // Keyboard shortcuts
    useMCQShortcuts(
        (index) => handleAnswerSelect(index),
        () => { }, // No immediate submit
        handleNext,
        !isGlobalTimeout
    );

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    if (mcqs.length === 0) {
        return (
            <Card className="p-8 text-center">
                <p className="text-muted-foreground">No MCQs available for selected subtopics.</p>
                <Button onClick={() => onComplete([])} className="mt-4">Continue</Button>
            </Card>
        );
    }

    return (
        <div className="animate-in fade-in duration-300">
            <Card className="bg-card border-border shadow-xl overflow-hidden flex flex-col min-h-[600px] md:h-auto">
                {/* Header with persistent timer */}
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="bg-indigo-600 p-2 rounded-lg">
                            <Target className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm text-white">Evening MCQ Challenge</h3>
                            <p className="text-[10px] text-muted-foreground">Week {cycleNumber} Session</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] uppercase text-muted-foreground font-bold">Time Remaining</span>
                            <div className={`flex items-center gap-2 text-xl font-mono font-bold ${timeLeft < 300 ? 'text-red-400 animate-pulse' : 'text-indigo-400'}`}>
                                <Timer className="h-5 w-5" />
                                {formatTime(timeLeft)}
                            </div>
                        </div>
                        <div className="h-10 w-[1px] bg-slate-800" />
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] uppercase text-muted-foreground font-bold">Progress</span>
                            <span className="text-xl font-bold text-white">{currentIndex + 1}<span className="text-slate-300 text-sm ml-1">/ {mcqs.length}</span></span>
                        </div>
                    </div>
                </div>

                <div className="p-4 md:p-6 flex-1 flex flex-col">
                    {/* Progress Bar */}
                    <div className="h-1 bg-muted rounded-full mb-6 overflow-hidden shrink-0">
                        <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Main Content Area - Single Column */}
                    <div className="flex-1 space-y-6 overflow-y-auto custom-scrollbar pb-6">
                        {/* Question Text */}
                        <div className="bg-muted/50 rounded-2xl p-6 border border-slate-100">
                            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-4">
                                QUESTION {currentIndex + 1}
                            </span>
                            <div className="text-lg md:text-xl font-medium text-foreground leading-relaxed space-y-3">
                                {currentMCQ.question.split(/(\d+\.\s|(?:\(?[ivx]+\)?)\.\s|(?=Which of the|Select the correct answer))/g).map((part, i, arr) => {
                                    if (!part) return null;

                                    if (/^(\d+\.\s|(?:\(?[ivx]+\)?)\.\s)$/.test(part)) {
                                        return <div key={i} className="flex gap-2">
                                            <span className="font-bold text-indigo-600 dark:text-indigo-400 shrink-0">{part}</span>
                                            <span className="text-foreground">{arr[i + 1]}</span>
                                        </div>;
                                    }
                                    if (i > 0 && /^(\d+\.\s|(?:\(?[ivx]+\)?)\.\s)$/.test(arr[i - 1])) {
                                        return null;
                                    }
                                    const isTrailer = /^(Which of the|Select the correct answer)/.test(part);
                                    return <div key={i} className={isTrailer ? "pt-2 border-t border-slate-100 text-base font-semibold text-muted-foreground dark:text-muted-foreground" : ""}>
                                        {part}
                                    </div>;
                                })}
                            </div>
                        </div>

                        {/* Options List */}
                        <div className="space-y-3">
                            {currentMCQ.options.map((option, index) => {
                                const isSelected = selectedAnswer === index;
                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerSelect(index)}
                                        className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 group ${isSelected
                                            ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 ring-2 ring-indigo-500/10 shadow-md'
                                            : 'bg-card border-border hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm'
                                            }`}
                                    >
                                        <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center font-bold transition-colors ${isSelected ? 'bg-indigo-600 text-white' : 'bg-muted text-muted-foreground dark:text-muted-foreground group-hover:bg-indigo-100 group-hover:text-indigo-700'
                                            }`}>
                                            {String.fromCharCode(65 + index)}
                                        </div>
                                        <span className={`flex-1 text-base ${isSelected ? 'text-indigo-900 dark:text-indigo-100 font-bold' : 'text-foreground font-medium'}`}>
                                            {option}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom Confidence Strip - Fixed or at bottom of flow */}
                    <div className="mt-6 pt-4 border-t border-slate-100 space-y-4 shrink-0">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                                <Brain className="h-4 w-4 text-indigo-500" />
                                Select Confidence
                            </h4>
                            <KeyboardShortcutsHelp context="mcq" compact={true} />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                            {/* Sure Shot */}
                            <button
                                onClick={() => handleConfidenceSelect('sure')}
                                className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${confidence === 'sure'
                                    ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-300 font-bold shadow-sm'
                                    : 'bg-card border-border text-muted-foreground dark:text-muted-foreground hover:border-green-300 hover:bg-green-50/50'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className={`h-4 w-4 ${confidence === 'sure' ? 'text-green-600' : 'text-muted-foreground'}`} />
                                    <span>Sure Shot</span>
                                </div>
                                <span className="text-[10px] opacity-70">100% Certain</span>
                            </button>

                            {/* 50-50 */}
                            <button
                                onClick={() => handleConfidenceSelect('50-50')}
                                className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${confidence === '50-50'
                                    ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-500 text-amber-700 dark:text-amber-300 font-bold shadow-sm'
                                    : 'bg-card border-border text-muted-foreground dark:text-muted-foreground hover:border-amber-300 hover:bg-amber-50/50'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <AlertCircle className={`h-4 w-4 ${confidence === '50-50' ? 'text-amber-600' : 'text-muted-foreground'}`} />
                                    <span>50-50</span>
                                </div>
                                <span className="text-[10px] opacity-70">Confused b/w 2</span>
                            </button>

                            {/* One Option Known */}
                            <button
                                onClick={() => handleConfidenceSelect('one-option')}
                                className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${confidence === 'one-option'
                                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-700 dark:text-blue-300 font-bold shadow-sm'
                                    : 'bg-card border-border text-muted-foreground dark:text-muted-foreground hover:border-blue-300 hover:bg-blue-50/50'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <Target className={`h-4 w-4 ${confidence === 'one-option' ? 'text-blue-600' : 'text-muted-foreground'}`} />
                                    <span>One Option</span>
                                </div>
                                <span className="text-[10px] opacity-70">Eliminated others</span>
                            </button>

                            {/* Blind Guess */}
                            <button
                                onClick={() => handleConfidenceSelect('blind')}
                                className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${confidence === 'blind'
                                    ? 'bg-muted border-slate-500 text-foreground font-bold shadow-sm'
                                    : 'bg-card border-border text-muted-foreground dark:text-muted-foreground hover:border-slate-400 hover:bg-muted'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <BookOpen className={`h-4 w-4 ${confidence === 'blind' ? 'text-muted-foreground' : 'text-muted-foreground'}`} />
                                    <span>Blind Guess</span>
                                </div>
                                <span className="text-[10px] opacity-70">No Idea</span>
                            </button>

                            {/* Other */}
                            <button
                                onClick={() => handleConfidenceSelect('other')}
                                className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${confidence === 'other'
                                    ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-500 text-purple-700 dark:text-purple-300 font-bold shadow-sm'
                                    : 'bg-card border-border text-muted-foreground dark:text-muted-foreground hover:border-purple-300 hover:bg-purple-50/50'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <HelpCircle className={`h-4 w-4 ${confidence === 'other' ? 'text-purple-600' : 'text-muted-foreground'}`} />
                                    <span>Other</span>
                                </div>
                                <span className="text-[10px] opacity-70">Unspecified</span>
                            </button>
                        </div>
                    </div>

                    {/* Navigation Actions */}
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100 shrink-0">
                        <Button
                            variant="outline"
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            className="px-6 h-12 rounded-xl text-muted-foreground"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                        </Button>

                        <div className="flex gap-4">
                            {onSkip && (
                                <Button
                                    variant="ghost"
                                    onClick={onSkip}
                                    disabled={!canSkip}
                                    className="text-muted-foreground hover:text-indigo-600"
                                >
                                    Skip Phase ({skipsRemaining})
                                </Button>
                            )}

                            <Button
                                onClick={handleNext}
                                disabled={selectedAnswer === null || confidence === null}
                                className={`px-10 h-12 rounded-xl font-bold transition-all shadow-lg ${isLastQuestion
                                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                    : 'bg-slate-900 hover:bg-black text-white'
                                    }`}
                            >
                                {isLastQuestion ? 'Submit Test' : 'Save & Next'}
                                {!isLastQuestion && <ChevronRight className="ml-2 h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </Card >
        </div >
    );
}

// Re-add imports that might have been missed or needed
import { ArrowLeft, Brain, BookOpen } from 'lucide-react';

