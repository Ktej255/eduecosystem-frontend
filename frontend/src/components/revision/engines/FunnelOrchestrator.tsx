import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap,
    Target,
    Brain,
    BarChart,
    ChevronRight,
    Sparkles,
    Clock,
    BookOpen,
    PlayCircle,
    Mic,
    ListTodo
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import RevisionLoading from '../ui/RevisionLoading';

// Lazy Load Engines for Performance
const CycleEngine = React.lazy(() => import('./CycleEngine'));
const AdvancedRecallEngine = React.lazy(() => import('./AdvancedRecallEngine'));
const IntermediatePDFSession = React.lazy(() => import('./IntermediatePDFSession'));



interface FunnelOrchestratorProps {
    examId: string;
    examName: string;
}

type FunnelStep = 'diagnostic' | 'config' | 'cycle';
type StudentLevel = 'beginner' | 'intermediate' | 'advanced' | null;

export default function FunnelOrchestrator({ examId, examName }: FunnelOrchestratorProps) {
    const [step, setStep] = useState<FunnelStep>('diagnostic');
    const [level, setLevel] = useState<StudentLevel>(null);

    const levels = [
        {
            id: 'beginner',
            title: 'Beginner',
            subtitle: 'New to the subject',
            icon: Zap,
            description: 'Focused on conceptual clarity through 25-minute cycles (Video -> Recall -> MCQ).',
            color: 'blue'
        },
        {
            id: 'intermediate',
            title: 'Intermediate',
            subtitle: 'Have basic understanding',
            icon: Target,
            description: 'Intensive practice with integrated PDF access and mock-based revision.',
            color: 'emerald'
        },
        {
            id: 'advanced',
            title: 'Advanced',
            subtitle: 'Revision Ready',
            icon: Brain,
            description: 'Active Recall First: Explain what you know first, then identify gaps with AI.',
            color: 'purple'
        }
    ];

    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <AnimatePresence mode="wait">
                {step === 'diagnostic' && (
                    <motion.div
                        key="diagnostic"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-center"
                    >
                        <header className="mb-12">
                            <h2 className="text-3xl font-black mb-4">How well do you know {examName}?</h2>
                            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium">
                                Customize your flow based on your current level. Our AI will adjust the methodology to maximize your retention.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {levels.map((l) => (
                                <Card
                                    key={l.id}
                                    onClick={() => setLevel(l.id as StudentLevel)}
                                    className={`relative cursor-pointer group transition-all duration-300 border-2 overflow-hidden ${level === l.id
                                        ? `border-${l.color}-500 bg-${l.color}-50/50 dark:bg-${l.color}-950/20`
                                        : 'border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800'
                                        }`}
                                >
                                    <CardContent className="p-8">
                                        <div className={`w-14 h-14 rounded-2xl bg-${l.color}-100 dark:bg-${l.color}-900/30 flex items-center justify-center text-${l.color}-600 dark:text-${l.color}-400 mb-6 group-hover:scale-110 transition-transform`}>
                                            <l.icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-1">{l.title}</h3>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">{l.subtitle}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                            {l.description}
                                        </p>

                                        {level === l.id && (
                                            <motion.div
                                                layoutId="active-check"
                                                className={`absolute top-4 right-4 text-${l.color}-500`}
                                            >
                                                <Zap className="w-5 h-5 fill-current" />
                                            </motion.div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Button
                            size="lg"
                            className="h-14 px-12 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-xl shadow-indigo-500/20"
                            disabled={!level}
                            onClick={() => setStep('config')}
                        >
                            Configure My Plan <ChevronRight className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>
                )}

                {step === 'config' && (
                    <motion.div
                        key="config"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <BeginnerSessionConfig
                            level={level!}
                            examName={examName}
                            onStart={() => setStep('cycle')}
                            onBack={() => setStep('diagnostic')}
                        />
                    </motion.div>
                )}

                {step === 'cycle' && (
                    <motion.div
                        key="cycle"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        {level === 'advanced' ? (
                            <Suspense fallback={<RevisionLoading />}>
                                <AdvancedRecallEngine
                                    topicName="Fundamental Rights"
                                    onRecallComplete={(data) => {
                                        console.log("Advanced Recall Complete", data);
                                        // Move to next phase: showing content for gaps
                                        // setStep('diagnostic');
                                    }}
                                />
                            </Suspense>
                        ) : level === 'intermediate' ? (
                            <Suspense fallback={<RevisionLoading />}>
                                <IntermediatePDFSession
                                    topicName="Fundamental Rights"
                                    onComplete={(data) => {
                                        console.log("PDF Session Complete", data);
                                        setStep('diagnostic');
                                    }}
                                />
                            </Suspense>
                        ) : (
                            <Suspense fallback={<RevisionLoading />}>
                                <CycleEngine
                                    subjectId="polity"
                                    topicName="Fundamental Rights"
                                    durationMinutes={25}
                                    onComplete={(data) => {
                                        console.log("Cycle Complete", data);
                                        setStep('diagnostic');
                                    }}
                                />
                            </Suspense>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function BeginnerSessionConfig({ level, examName, onStart, onBack }: { level: string, examName: string, onStart: () => void, onBack: () => void }) {
    const [duration, setDuration] = useState(2);
    const [subject, setSubject] = useState('polity');

    const subjects = [
        { id: 'polity', label: 'Indian Polity', icon: BookOpen },
        { id: 'history', label: 'History', icon: Landmark },
        { id: 'geography', label: 'Geography', icon: Globe },
        { id: 'economy', label: 'Economy', icon: Coins },
    ];

    return (
        <div className="max-w-3xl mx-auto">
            <Button variant="ghost" onClick={onBack} className="mb-8 group hover:bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="font-bold">Change Level</span>
            </Button>

            <header className="mb-12">
                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-slate-900 dark:text-white">Setup Your Session</h2>
                <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                    Defining parameters for your <span className="text-indigo-600">{level}</span> study path in {examName}
                </p>
            </header>

            <Card className="border-none bg-slate-50 dark:bg-slate-900/40 overflow-hidden mb-8 rounded-[2rem]">
                <CardContent className="p-10 space-y-12">
                    {/* Duration Selection */}
                    <div>
                        <div className="flex items-center gap-2 mb-6 text-slate-400">
                            <Clock className="w-5 h-5" />
                            <span className="font-bold uppercase tracking-widest text-xs">Step 1: Intensity</span>
                        </div>
                        <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">How much time do you have today?</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {[2, 4, 6].map((h) => (
                                <button
                                    key={h}
                                    onClick={() => setDuration(h)}
                                    className={`h-24 rounded-2xl flex flex-col items-center justify-center transition-all border-2 ${duration === h
                                        ? 'border-indigo-600 bg-white dark:bg-slate-800 shadow-xl shadow-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                                        : 'border-white dark:border-slate-800 bg-white/50 dark:bg-slate-800/50 hover:border-slate-200 text-slate-500'
                                        }`}
                                >
                                    <span className="text-3xl font-black">{h}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Hours</span>
                                </button>
                            ))}
                        </div>
                        <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 font-medium bg-white dark:bg-slate-800/50 p-4 rounded-xl inline-block border border-slate-100 dark:border-slate-800">
                            💡 {duration} hours will consist of <strong>{duration * 2} cycles</strong> of 25-minute high-yield blocks.
                        </p>
                    </div>

                    {/* Subject Selection */}
                    <div>
                        <div className="flex items-center gap-2 mb-6 text-slate-400">
                            <Target className="w-5 h-5" />
                            <span className="font-bold uppercase tracking-widest text-xs">Step 2: Focus Area</span>
                        </div>
                        <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Which subject are you starting with?</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {subjects.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => setSubject(s.id)}
                                    className={`px-6 py-5 rounded-2xl flex items-center gap-4 transition-all border-2 ${subject === s.id
                                        ? 'border-indigo-600 bg-white dark:bg-slate-800 shadow-xl shadow-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                                        : 'border-white dark:border-slate-800 bg-white/50 dark:bg-slate-800/50 hover:border-slate-200 text-slate-500'
                                        }`}
                                >
                                    <div className={`p-3 rounded-xl transition-colors ${subject === s.id
                                        ? 'bg-indigo-100 dark:bg-indigo-900/30'
                                        : 'bg-slate-100 dark:bg-slate-700'
                                        }`}>
                                        <s.icon className="w-5 h-5" />
                                    </div>
                                    <span className="font-bold">{s.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Button
                onClick={onStart}
                className="w-full h-16 rounded-2xl bg-indigo-600 text-white text-lg font-black hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-indigo-500/30 hover:bg-indigo-700"
            >
                Launch {duration}h Adaptive Engine
            </Button>
        </div>
    );
}
