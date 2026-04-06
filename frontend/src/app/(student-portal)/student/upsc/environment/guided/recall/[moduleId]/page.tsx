'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AIConversationPanel from '@/components/guided/AIConversationPanel';
import { useActivityLogger } from '@/hooks/useActivityLogger';
import { BrainCircuit, CheckCircle, ArrowRight } from 'lucide-react';

interface Question {
  question: string;
  hint: string;
  concept: string;
}

type SessionState = 'intro' | 'active' | 'done';

export default function RecallPage() {
  const params = useParams();
  const router = useRouter();
  const moduleId = Number(params.moduleId);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionState, setSessionState] = useState<SessionState>('intro');
  const [loading, setLoading] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [activQuestion, setActiveQuestion] = useState<Question | null>(null);
  const { logActivity } = useActivityLogger();

  const startRecall = async () => {
    setLoading(true);
    setSessionState('active');
    try {
      const res = await fetch(`/api/guided/recall/generate?module_id=${moduleId}`, {
        method: 'POST',
      });
      const data = await res.json();
      setQuestions(data.questions || []);
      if (data.questions?.length > 0) {
        setActiveQuestion(data.questions[0]);
        setPanelOpen(true);
      }
    } catch {
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleNextQuestion = () => {
    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);
      setActiveQuestion(questions[next]);
      setPanelOpen(true);
    } else {
      // Log recall completion using the new hook
      logActivity({
        activity_type: 'recall_complete',
        content_id: `module_recall_${moduleId}`,
        score: 100, // Binary completion
        subject_slug: 'environment'
      });
      setSessionState('done');
      setPanelOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex items-center justify-center px-4">
        {sessionState === 'intro' && (
          <div className="text-center max-w-lg">
            <div className="w-20 h-20 rounded-full bg-[#1F3864] flex items-center justify-center mx-auto mb-8">
              <BrainCircuit className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-3xl font-bold mb-3">Day 2 Recall</h1>
            <p className="text-white/50 text-base mb-8 leading-relaxed">
              Before you move forward, let's consolidate what you learnt yesterday.
              This takes 5–7 minutes. Answer naturally — the AI adapts to your responses.
            </p>
            <button
              onClick={startRecall}
              disabled={loading}
              className="px-8 py-4 bg-[#2E75B6] hover:bg-blue-500 rounded-2xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-xl shadow-blue-500/20 disabled:opacity-50"
            >
              {loading ? 'Generating questions...' : 'Start Recall Session →'}
            </button>
          </div>
        )}

        {sessionState === 'active' && (
          <div className="w-full max-w-xl">
            {/* Progress dots */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i < currentIndex
                      ? 'bg-blue-400'
                      : i === currentIndex
                      ? 'bg-white w-6'
                      : 'bg-white/20'
                  }`}
                />
              ))}
            </div>

            {activQuestion && (
              <div className="bg-[#0F172A] rounded-3xl p-8 border border-white/5 text-center mb-6">
                <div className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-4">
                  Question {currentIndex + 1} of {questions.length}
                </div>
                <h2 className="text-xl font-semibold leading-relaxed mb-4">
                  {activQuestion.question}
                </h2>
                <p className="text-white/40 text-sm">
                  💡 {activQuestion.hint}
                </p>
              </div>
            )}

            <div className="flex gap-3">
              {!panelOpen && (
                <button
                  onClick={() => panelOpen ? null : setPanelOpen(true)}
                  className="flex-1 py-3 bg-[#2E75B6] hover:bg-blue-500 rounded-xl font-medium transition-colors"
                >
                  Answer →
                </button>
              )}
              <button
                onClick={handleNextQuestion}
                className="flex-1 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-medium text-white/60 transition-colors"
              >
                Skip
              </button>
            </div>
          </div>
        )}

        {sessionState === 'done' && (
          <div className="text-center max-w-lg">
            <div className="w-20 h-20 rounded-full bg-[#052e16]/60 border border-[#375623] flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-3xl font-bold mb-3">Recall Complete! 🎉</h1>
            <p className="text-white/50 text-base mb-8">
              Great work. Your mastery scores have been updated. The next module
              is now unlocked and ready for you.
            </p>
            <button
              onClick={() => router.push('/student/upsc/environment/guided')}
              className="flex items-center gap-2 mx-auto px-8 py-4 bg-[#375623] hover:bg-green-700 rounded-2xl font-semibold text-lg transition-colors"
            >
              Back to Foundation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* AI panel in recall mode */}
      <AIConversationPanel
        isOpen={panelOpen}
        pausePrompt={activQuestion?.question}
        mode="recall"
        onClose={() => {
          setPanelOpen(false);
          handleNextQuestion();
        }}
        onResume={() => {
          setPanelOpen(false);
          handleNextQuestion();
        }}
      />
    </div>
  );
}
