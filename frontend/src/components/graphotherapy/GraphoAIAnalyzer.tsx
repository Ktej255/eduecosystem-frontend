import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, CheckCircle, AlertCircle, X, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GraphoAIAnalyzerProps {
    file: File;
    onClose: () => void;
}

interface AnalysisResult {
    score: number;
    metrics: {
        label: string;
        value: string;
        status: 'good' | 'warning' | 'neutral';
    }[];
    feedback: string;
}

export default function GraphoAIAnalyzer({ file, onClose }: GraphoAIAnalyzerProps) {
    const [phase, setPhase] = useState<'scanning' | 'computing' | 'result'>('scanning');
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [result, setResult] = useState<AnalysisResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Create preview
    useEffect(() => {
        const url = URL.createObjectURL(file);
        setImagePreview(url);
        return () => URL.revokeObjectURL(url);
    }, [file]);

    // Real AI Analysis Process
    useEffect(() => {
        let mounted = true;

        const analyze = async () => {
            try {
                // Phase 1: Scanning Visual (2s)
                setPhase('scanning');
                await new Promise(r => setTimeout(r, 2000));

                if (!mounted) return;
                setPhase('computing');

                // Call Backend
                // Dynamic import to avoid circular dependencies if any, though service is safe
                const { default: graphotherapyService } = await import('@/services/graphotherapyService');
                const data = await graphotherapyService.analyzeInstant(file);

                if (!mounted) return;

                // Map Backend Response to Frontend Interface
                setResult({
                    score: data.overall_score || 85,
                    metrics: data.metrics || [
                        { label: 'Analysis', value: 'Completed', status: 'good' }
                    ],
                    feedback: data.verdict?.description || data.hook || "Analysis complete."
                });
                setPhase('result');

            } catch (err) {
                console.error("AI Analysis Failed", err);
                if (mounted) {
                    setError("AI Analysis failed. Please try again.");
                    setPhase('result'); // Show error state
                }
            }
        };

        analyze();

        return () => { mounted = false; };
    }, [file]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-neutral-900 border border-neutral-700 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="p-6 border-b border-neutral-800 flex items-center gap-3">
                    <div className="bg-purple-500/20 p-2 rounded-xl">
                        <Brain className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white">AI Stroke Analysis</h3>
                        <p className="text-xs text-neutral-400">Powered by GraphoVision™</p>
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative min-h-[300px]">

                    {/* Image Layer */}
                    {imagePreview && (
                        <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden">
                            <img src={imagePreview} alt="Analysis" className="w-full h-full object-cover opacity-50" />
                        </div>
                    )}

                    {/* Scanning Overlay */}
                    <AnimatePresence>
                        {phase === 'scanning' && (
                            <motion.div
                                initial={{ top: 0 }}
                                animate={{ top: "100%" }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                className="absolute left-0 right-0 h-1 bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)] z-10"
                            />
                        )}
                    </AnimatePresence>

                    {/* Status Text (Scanning/Computing) */}
                    {phase !== 'result' && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                            <div className="bg-black/60 backdrop-blur px-6 py-3 rounded-full border border-white/10 flex items-center gap-3">
                                {phase === 'scanning' ? (
                                    <>
                                        <Scan className="w-5 h-5 text-purple-400 animate-pulse" />
                                        <span className="text-purple-100 font-mono">Scanning strokes...</span>
                                    </>
                                ) : (
                                    <>
                                        <Brain className="w-5 h-5 text-blue-400 animate-bounce" />
                                        <span className="text-blue-100 font-mono">Analyzing patterns...</span>
                                    </>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Result Overlay */}
                    {phase === 'result' && result && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute inset-0 bg-neutral-900/95 backdrop-blur-md p-6 overflow-y-auto"
                        >
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-4 border-green-500 text-green-400 text-2xl font-black mb-2">
                                    {result.score}
                                </div>
                                <div className="text-green-500 font-bold uppercase tracking-wider text-sm">Pass</div>
                            </div>

                            <div className="space-y-3 mb-6">
                                {result.metrics.map((m, i) => (
                                    <div key={i} className="flex justify-between items-center bg-neutral-800 p-3 rounded-xl border border-neutral-700">
                                        <span className="text-neutral-400 text-sm">{m.label}</span>
                                        <div className="flex items-center gap-2">
                                            <span className={`font-mono font-bold text-sm ${m.status === 'good' ? 'text-white' :
                                                m.status === 'warning' ? 'text-yellow-400' : 'text-neutral-300'
                                                }`}>
                                                {m.value}
                                            </span>
                                            {m.status === 'good' && <CheckCircle className="w-4 h-4 text-green-500" />}
                                            {m.status === 'warning' && <AlertCircle className="w-4 h-4 text-yellow-500" />}
                                            {m.status === 'neutral' && <CheckCircle className="w-4 h-4 text-muted-foreground" />}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-xl mb-6">
                                <h4 className="text-purple-400 text-xs font-bold uppercase mb-1">AI Feedback</h4>
                                <p className="text-neutral-300 text-sm leading-relaxed">
                                    {result.feedback}
                                </p>
                            </div>

                            <Button onClick={onClose} className="w-full bg-card text-black hover:bg-neutral-200 font-bold">
                                Continue
                            </Button>
                        </motion.div>
                    )}

                    {/* Error Overlay */}
                    {phase === 'result' && error && (
                        <div className="absolute inset-0 bg-neutral-900 p-6 flex flex-col items-center justify-center text-center">
                            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                            <p className="text-white font-bold mb-2">Analysis Error</p>
                            <p className="text-neutral-400 text-sm mb-6">{error}</p>
                            <Button onClick={onClose} variant="outline" className="text-white border-white/20">
                                Close
                            </Button>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
