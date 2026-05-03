'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  Loader2, 
  TrendingUp, 
  Download, 
  Star, 
  BookOpen, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  Clock,
  Target,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// ─── Sub-Components ──────────────────────────────────────────────────────────

const ScoreDial = ({ score }: { score: number }) => {
  // Simple semi-circle gauge
  const radius = 80;
  const circumference = Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center">
      <svg width="200" height="120" viewBox="0 0 200 120" className="rotate-0">
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#f1f5f9"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#ff6b35"
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute bottom-4 text-center">
        <span className="text-5xl font-black text-[#1a1a2a]">{score}</span>
        <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">Intelligence Quotient</span>
      </div>
    </div>
  );
};

const MetricBar = ({ label, value, status }: { label: string, value: number, status: string }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
      <span className="text-gray-400">{label}</span>
      <span className={status === 'good' ? 'text-green-600' : status === 'warning' ? 'text-red-500' : 'text-[#ff6b35]'}>
        {value}%
      </span>
    </div>
    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full rounded-full ${
          status === 'good' ? 'bg-green-500' : status === 'warning' ? 'bg-red-500' : 'bg-[#ff6b35]'
        }`}
      />
    </div>
  </div>
);

const ProgressTracker = ({ currentStep }: { currentStep: number }) => {
  const steps = ["Identity", "Traits", "Narrative", "Conflicts", "Roadmap"];
  return (
    <div className="w-full max-w-2xl mx-auto mb-12 no-print">
      <div className="flex justify-between items-center relative">
        <div className="absolute top-4 left-0 w-full h-[2px] bg-gray-100 z-0"></div>
        <div 
          className="absolute top-4 left-0 h-[2px] bg-[#ff6b35] z-0 transition-all duration-500" 
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
        {steps.map((label, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              idx <= currentStep ? 'bg-[#ff6b35] text-white shadow-lg shadow-orange-200' : 'bg-white border-2 border-gray-100 text-gray-300'
            }`}>
              {idx < currentStep ? '✓' : idx + 1}
            </div>
            <span className={`text-[9px] uppercase tracking-widest mt-3 font-black transition-colors ${
              idx <= currentStep ? 'text-[#ff6b35]' : 'text-gray-300'
            }`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Main Content ────────────────────────────────────────────────────────────

function ReportContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [purchaseType, setPurchaseType] = useState<string>("free");
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const email = typeof window !== 'undefined' ? localStorage.getItem("grapho_lead_email") : null;
    const sessionId = typeof window !== 'undefined' ? localStorage.getItem("grapho_session_id") : null;

    const fetchReport = async () => {
        try {
            let url = `${API_URL}/funnel/report/latest?email=${encodeURIComponent(email || "")}`;
            if (sessionId) url += `&session_id=${encodeURIComponent(sessionId)}`;
            const res = await fetch(url);
            if (res.ok) {
                const data = await res.json();
                if (data?.report_data) {
                    setAnalysis(data.report_data);
                    setPurchaseType(data.purchase_type || "free");
                }
            }
        } catch (err) {
            console.error("Fetch report error:", err);
        } finally {
            setLoading(false);
        }
    };

    fetchReport();
  }, []);

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const handleUpgrade = async () => {
    try {
        const email = localStorage.getItem("grapho_lead_email");
        const sessionId = localStorage.getItem("grapho_session_id");
        
        // We use create-guest-order because the user might not be logged in
        // The backend will handle creating the user account if it doesn't exist
        const res = await fetch(`${API_URL}/payments/create-guest-order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                full_name: "Handwriting Analyst", // Placeholder, will be updated from Lead if possible
                email: email || "anonymous@eduecosystem.com",
                whatsapp: "9999999999", // Placeholder
                subject_id: 'report_discounted' // 999 INR
            })
        });

        if (res.ok) {
            const { payment_link } = await res.json();
            window.location.href = payment_link;
        }
    } catch (err) {
        console.error("Upgrade error:", err);
    }
  };

  if (loading) {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center space-y-6 bg-[#fcfcfd]">
              <div className="relative">
                  <Loader2 className="w-16 h-16 text-[#ff6b35] animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-black text-[#1a1a2a] mb-2 tracking-tight">Decrypting Neural Patterns</h2>
                <p className="text-gray-400 text-sm font-medium animate-pulse">Running forensic cross-reference... 47 markers detected</p>
              </div>
          </div>
      );
  }

  const archetype = analysis?.personality?.archetype || { name: "Individual", summary: "Balanced Profile" };
  const metrics = analysis?.metrics || [];
  const narrative = analysis?.narrative_sections || [];
  const conflicts = analysis?.conflicts || [];
  const roadmap = analysis?.roadmap || [];

  const isLocked = (step: number) => {
    return purchaseType !== "full" && step >= 3;
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] pb-24 selection:bg-orange-100 selection:text-orange-900">
      {/* Premium Header */}
      <div className="bg-white/80 backdrop-blur-md border-b px-6 py-4 sticky top-0 z-40 no-print">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1a1a2a] rounded-xl flex items-center justify-center shadow-xl">
                <TrendingUp className="text-[#ff6b35] w-6 h-6" />
            </div>
            <div>
                <span className="block font-black text-[#1a1a2a] leading-none text-lg">SARIT WISDOM</span>
                <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">Intelligence Engine</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <button onClick={() => window.print()} className="hidden md:flex items-center gap-2 text-xs font-black text-gray-400 hover:text-[#ff6b35] uppercase tracking-widest transition-colors">
                <Download className="w-4 h-4" /> Export Blueprint
             </button>
             <div className="h-6 w-px bg-gray-100 hidden md:block"></div>
             <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-full border border-orange-100">
                <div className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black text-[#ff6b35] uppercase tracking-widest">
                    {purchaseType !== "full" ? "Preliminary Analysis" : "Full Intelligence Access"}
                </span>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-12 pb-32">
        <ProgressTracker currentStep={currentStep} />

        <div className="min-h-[500px] relative">
          <AnimatePresence mode="wait">
            {/* STEP 0: IDENTITY */}
            {currentStep === 0 && (
              <motion.div 
                key="step0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12 text-center"
              >
                  <div className="inline-block px-4 py-2 bg-orange-50 text-[#ff6b35] rounded-full text-[10px] font-black tracking-[0.3em] uppercase">
                      Analysis Stage 01: Core Archetype
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black text-[#1a1a2a] leading-none tracking-tighter">
                      {archetype.name}
                  </h1>
                  <p className="text-xl md:text-3xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-serif italic">
                      "{archetype.summary}"
                  </p>
                  <div className="pt-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                          {analysis?.personality?.strengths?.slice(0,3).map((s: string) => (
                              <div key={s} className="group p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-orange-100 transition-all text-sm font-bold text-[#1a1a2a]">
                                  <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-colors">
                                    <Star className="w-5 h-5 text-[#ff6b35]" />
                                  </div>
                                  {s}
                              </div>
                          ))}
                      </div>
                  </div>
              </motion.div>
            )}

            {/* STEP 1: TRAITS */}
            {currentStep === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-16"
              >
                  <div className="text-center">
                      <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                          Analysis Stage 02: Intensity Matrix
                      </div>
                      <h2 className="text-5xl font-black text-[#1a1a2a] tracking-tight">Neuro-Somatic Scoring</h2>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                      <div className="flex justify-center bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl">
                          <ScoreDial score={analysis.overall_score || 84} />
                      </div>
                      <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl">
                          <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Operational Drivers</h3>
                            <div className="flex gap-1">
                              {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-blue-200 rounded-full"></div>)}
                            </div>
                          </div>
                          <div className="space-y-8">
                              {metrics.map((m: any) => (
                                  <MetricBar key={m.label} label={m.label} value={m.score} status={m.status} />
                              ))}
                          </div>
                      </div>
                  </div>
              </motion.div>
            )}

            {/* STEP 2: NARRATIVE */}
            {currentStep === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12 max-w-3xl mx-auto"
              >
                  <div className="text-center mb-16">
                      <div className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                          Analysis Stage 03: Forensic Narrative
                      </div>
                      <h2 className="text-5xl font-black text-[#1a1a2a] tracking-tight">Psychological Deep-Dive</h2>
                  </div>
                  
                  <div className="relative p-10 bg-[#1a1a2a] text-white rounded-[3rem] shadow-2xl overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                          <BookOpen className="w-48 h-48" />
                      </div>
                      <p className="text-2xl md:text-3xl font-serif italic leading-relaxed relative z-10 text-orange-50">
                          "{analysis.hook}"
                      </p>
                  </div>

                  <div className="space-y-12 mt-16">
                      {narrative.map((section: any, idx: number) => (
                          <div key={idx} className="relative pl-10 border-l-[3px] border-orange-100/50 py-4 hover:border-orange-400 transition-colors">
                              <div className="absolute -left-[11px] top-6 w-5 h-5 bg-white rounded-full border-[5px] border-[#ff6b35]"></div>
                              <h4 className="text-[10px] font-black text-[#ff6b35] uppercase tracking-[0.4em] mb-4">{section.title}</h4>
                              <p className="text-[#1a1a2a] leading-relaxed text-xl font-medium">{section.content}</p>
                          </div>
                      ))}
                  </div>
              </motion.div>
            )}

            {/* STEP 3: CONFLICTS (LOCKED) */}
            {currentStep === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12 max-w-3xl mx-auto"
              >
                  <div className="text-center mb-16">
                      <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                          Analysis Stage 04: Friction Matrix
                      </div>
                      <h2 className="text-5xl font-black text-[#1a1a2a] tracking-tight">Internal Conflict Patterns</h2>
                  </div>

                  {isLocked(3) ? (
                    <div className="relative group">
                         <div className="absolute inset-0 bg-white/40 backdrop-blur-md z-10 rounded-[3rem] flex flex-col items-center justify-center p-12 text-center">
                            <div className="w-20 h-20 bg-[#1a1a2a] rounded-full flex items-center justify-center mb-6 shadow-2xl">
                                <Lock className="w-8 h-8 text-[#ff6b35]" />
                            </div>
                            <h3 className="text-3xl font-black text-[#1a1a2a] mb-4">Deeper Psychology Locked</h3>
                            <p className="text-gray-500 max-w-sm mb-8 font-medium">
                                We've identified 3 critical internal conflicts that are currently limiting your growth. Unlock the full report to reveal these neural barriers.
                            </p>
                            <button 
                                onClick={handleUpgrade}
                                className="bg-[#ff6b35] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-orange-200 hover:scale-105 transition-transform flex items-center gap-3"
                            >
                                Unlock Full Report (₹999) <ArrowRight className="w-4 h-4" />
                            </button>
                         </div>
                         <div className="grid grid-cols-1 gap-8 blur-lg opacity-30 select-none pointer-events-none">
                            {[1,2].map(i => (
                                <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100">
                                    <div className="h-8 w-1/3 bg-gray-200 rounded mb-4"></div>
                                    <div className="h-20 w-full bg-gray-100 rounded"></div>
                                </div>
                            ))}
                         </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-8">
                        {conflicts.map((c: any, idx: number) => (
                            <div key={idx} className="group bg-white p-10 rounded-[3rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-black text-[#1a1a2a]">{c.title}</h3>
                                    <div className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                        c.severity === 'high' ? 'bg-red-50 text-red-600' : 'bg-yellow-50 text-yellow-600'
                                    }`}>
                                        {c.severity} Severity Friction
                                    </div>
                                </div>
                                <p className="text-gray-500 text-lg leading-relaxed mb-8 font-medium">{c.deep_insight}</p>
                                <div className="bg-red-50/30 p-8 rounded-[2rem] border border-red-100/50 flex gap-4 items-start">
                                    <ShieldCheck className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                    <div>
                                      <span className="block text-[10px] font-black text-red-600 uppercase tracking-widest mb-2">Social Masking Effect</span>
                                      <p className="text-red-900 font-bold italic text-base">"{c.shadow_hint}"</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                  )}
              </motion.div>
            )}

            {/* STEP 4: ROADMAP (LOCKED) */}
            {currentStep === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12 max-w-3xl mx-auto"
              >
                  <div className="text-center mb-16">
                      <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                          Analysis Stage 05: The Roadmap
                      </div>
                      <h2 className="text-5xl font-black text-[#1a1a2a] tracking-tight">Neural Rewiring Strategy</h2>
                  </div>

                  {isLocked(4) ? (
                     <div className="relative group">
                        <div className="absolute inset-0 bg-white/40 backdrop-blur-md z-10 rounded-[3rem] flex flex-col items-center justify-center p-12 text-center">
                            <div className="w-20 h-20 bg-[#1a1a2a] rounded-full flex items-center justify-center mb-6 shadow-2xl">
                                <Target className="w-8 h-8 text-[#ff6b35]" />
                            </div>
                            <h3 className="text-3xl font-black text-[#1a1a2a] mb-4">Custom Growth Protocol Locked</h3>
                            <p className="text-gray-500 max-w-sm mb-8 font-medium">
                                Your handwriting indicates specific corrections needed to rewire your habits. Unlock the roadmap to start your 21-day transformation.
                            </p>
                            <button 
                                onClick={handleUpgrade}
                                className="bg-[#ff6b35] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-orange-200 hover:scale-105 transition-transform flex items-center gap-3"
                            >
                                Unlock Transformation Roadmap <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="space-y-6 blur-lg opacity-30 select-none pointer-events-none">
                            {[1,2,3].map(i => (
                                <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 flex gap-8 items-center">
                                    <div className="w-16 h-16 rounded-3xl bg-gray-100"></div>
                                    <div className="flex-1 space-y-4">
                                        <div className="h-6 w-1/4 bg-gray-200 rounded"></div>
                                        <div className="h-10 w-3/4 bg-gray-100 rounded"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                     </div>
                  ) : (
                    <>
                    <div className="space-y-6">
                        {roadmap.map((item: any, idx: number) => (
                            <div key={idx} className="group bg-white p-10 rounded-[3rem] border border-gray-100 shadow-md hover:shadow-xl transition-all flex gap-8 items-center">
                                <div className="w-16 h-16 rounded-3xl bg-gray-50 group-hover:bg-purple-50 flex items-center justify-center text-3xl font-black text-gray-200 group-hover:text-purple-200 transition-colors shrink-0">
                                    {idx + 1}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                      <Target className="w-4 h-4 text-purple-500" />
                                      <h4 className="text-[10px] font-black text-purple-500 uppercase tracking-widest">{item.area}</h4>
                                    </div>
                                    <h3 className="text-2xl font-black text-[#1a1a2a] mb-4">{item.action}</h3>
                                    <div className="flex gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                      <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                                      <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                          <span className="font-black text-gray-700 uppercase text-[10px] tracking-widest mr-2">Biological Basis:</span> {item.why}
                                      </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-12 bg-gradient-to-br from-[#1a1a2a] to-[#2d3561] rounded-[4rem] text-white text-center shadow-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
                        
                        <h3 className="text-4xl font-black mb-6 relative z-10 tracking-tight">Initiate Permanent Change</h3>
                        <p className="text-gray-400 mb-12 max-w-xl mx-auto relative z-10 text-lg font-medium">
                            These behavioral shifts will physically restructure your neural pathways over the next 21 days. Don't leave your evolution to chance.
                        </p>
                        <button 
                            onClick={() => router.push('/graphotherapy/funnel/level1')}
                            className="group bg-[#ff6b35] hover:bg-orange-600 text-white px-12 py-6 rounded-3xl font-black text-xl shadow-2xl shadow-orange-900/40 transition-all hover:scale-105 active:scale-95 relative z-10 inline-flex items-center gap-4"
                        >
                            Start Level 1 Protocol <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    </>
                  )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="no-print fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-lg px-6 z-50">
            <div className="bg-white/60 backdrop-blur-2xl border border-white/20 p-3 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] flex justify-between gap-3">
                <button 
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className={`flex-1 py-5 px-8 rounded-3xl font-black text-xs uppercase tracking-widest transition-all ${
                        currentStep === 0 
                        ? 'text-gray-200 cursor-not-allowed' 
                        : 'text-gray-500 hover:bg-white hover:text-[#1a1a2a] hover:shadow-sm'
                    }`}
                >
                    Back
                </button>
                <button 
                    onClick={handleNext}
                    disabled={currentStep === 4}
                    className={`flex-[2] py-5 px-8 rounded-3xl font-black text-xs uppercase tracking-widest transition-all ${
                        currentStep === 4
                        ? 'bg-gray-50 text-gray-300 cursor-not-allowed'
                        : 'bg-[#1a1a2a] text-white hover:bg-black shadow-xl shadow-gray-900/20 active:scale-95'
                    }`}
                >
                    {currentStep === 4 ? "End of Analysis" : "Reveal Next Insight"}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default function ReportGeneration() {
  return (
    <Suspense fallback={
        <div className="min-h-screen flex flex-col items-center justify-center space-y-6 bg-[#fcfcfd]">
            <Loader2 className="w-12 h-12 text-[#ff6b35] animate-spin" />
            <h2 className="text-xl font-black text-[#1a1a2a] tracking-tight">Loading Intelligence Blueprint...</h2>
        </div>
    }>
        <ReportContent />
    </Suspense>
  );
}
