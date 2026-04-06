'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Brain, ChevronRight, Zap, CheckCircle2, MessageSquare, ArrowLeft, Trophy, Sparkles } from 'lucide-react';
import AIConversationPanel from '@/components/guided/AIConversationPanel';

interface DueNode {
  id: number;
  node_id: string;
  node_name: string;
}

export default function Day2RecallPage() {
  const { subjectSlug } = useParams();
  const router = useRouter();
  const [dueNodes, setDueNodes] = useState<DueNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [masteryScore, setMasteryScore] = useState<number | null>(null);

  useEffect(() => {
    async function fetchDue() {
      try {
        const res = await fetch(`/api/guided/foundation/${subjectSlug}/recall/due`);
        const json = await res.json();
        setDueNodes(Array.isArray(json) ? json : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchDue();
  }, [subjectSlug]);

  const activeNode = dueNodes[currentIndex];

  const handleRecallComplete = async (score: number) => {
    if (!activeNode) return;
    
    // Save mastery update
    try {
      await fetch('/api/guided/foundation/mastery/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          node_id: activeNode.id,
          score: score
        })
      });
    } catch (err) {
      console.error('Failed to update mastery', err);
    }

    if (currentIndex < dueNodes.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsAIOpen(false);
    } else {
      setSessionComplete(true);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (dueNodes.length === 0 && !sessionComplete) return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mb-6">
        <CheckCircle2 className="w-12 h-12 text-emerald-600" />
      </div>
      <h2 className="text-3xl font-black text-slate-800 dark:text-white">All Caught Up!</h2>
      <p className="text-slate-500 mt-4 max-w-sm">
        You've completed all pending recall sessions for this subject. Your knowledge graph is stable.
      </p>
      <button 
        onClick={() => router.back()}
        className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/20 hover:scale-105 transition-all"
      >
        Back to Learning
      </button>
    </div>
  );

  if (sessionComplete) return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mb-6 animate-bounce">
        <Trophy className="w-12 h-12 text-yellow-600" />
      </div>
      <h2 className="text-4xl font-black text-slate-800 dark:text-white">Recall Session Complete</h2>
      <p className="text-slate-500 mt-4 max-w-md">
        Great job! Your retention for these {dueNodes.length} concepts has been strengthened using SM-2 neural spacing.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 w-full max-w-sm">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
          <div className="text-3xl font-black text-blue-600">{dueNodes.length}</div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Nodes Reviewed</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
          <div className="text-3xl font-black text-emerald-500">+150</div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">XP Earned</div>
        </div>
      </div>

      <button 
        onClick={() => router.push(`/student/guided/${subjectSlug}`)}
        className="mt-12 px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[24px] font-black text-lg shadow-2xl hover:scale-105 transition-all"
      >
        Finish Session
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] flex flex-col font-sans transition-all duration-500">
      {/* Header */}
      <header className="px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl z-20">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-slate-400" />
          </button>
          <div>
            <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Active Retention</div>
            <h1 className="text-xl font-black text-slate-800 dark:text-white">Day 2 Neural Recall</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-black text-slate-800 dark:text-white">{currentIndex + 1}</span>
              <span className="text-xs text-slate-400">/</span>
              <span className="text-xs font-bold text-slate-400 uppercase">{dueNodes.length}</span>
            </div>
          </div>
          <div className="w-32 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="bg-blue-600 h-full transition-all duration-700 ease-out" 
              style={{ width: `${((currentIndex + 1) / dueNodes.length) * 100}%` }} 
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-8 py-12 flex flex-col items-center justify-center relative">
        {/* Concept Card */}
        <div className="w-full bg-slate-50 dark:bg-[#0F172A] rounded-[48px] p-12 border border-slate-100 dark:border-slate-800 text-center shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <Brain className="w-64 h-64 -mr-20 -mt-20 transform rotate-12" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-black uppercase tracking-widest mb-8">
              <Sparkles className="w-4 h-4" />
              Active Recall
            </div>
            
            <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              {activeNode.node_name}
            </h2>
            
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              Based on your neural spacing (SM-2), it's time to verify your understanding of this concept. 
              Ready to explain it to the AI Tutor?
            </p>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => setIsAIOpen(true)}
                className="w-full md:w-auto px-10 py-5 bg-blue-600 text-white rounded-[24px] font-black text-xl shadow-2xl shadow-blue-600/30 hover:scale-105 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                <Brain className="w-6 h-6" />
                Start AI Check-in
              </button>
              
              <button 
                className="w-full md:w-auto px-10 py-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-[24px] font-black text-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
              >
                <Zap className="w-6 h-6 text-amber-500" />
                Flashcard Mode
              </button>
            </div>
          </div>
        </div>

        {/* Scoring Panel (Visible after dialogue) */}
        {!isAIOpen && (
          <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-6">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Self-Assessment Scoring</p>
             <div className="flex gap-4">
                <ScoreButton score={20} label="Forgot" onClick={() => handleRecallComplete(20)} />
                <ScoreButton score={50} label="Partial" onClick={() => handleRecallComplete(50)} />
                <ScoreButton score={80} label="Clear" onClick={() => handleRecallComplete(80)} />
                <ScoreButton score={100} label="Mastered" onClick={() => handleRecallComplete(100)} />
             </div>
          </div>
        )}
      </main>

      {/* AI Tutor Overlay */}
      <AIConversationPanel 
        isOpen={isAIOpen}
        onResume={() => setIsAIOpen(false)}
        onClose={() => setIsAIOpen(false)}
        mode="recall"
        pausePrompt={`Conduct a Day 2 recall session for: ${activeNode.node_name}. Ask a fundamental question to test their understanding.`}
      />
    </div>
  );
}

function ScoreButton({ score, label, onClick }: { score: number; label: string; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`
        px-6 py-4 rounded-2xl font-black text-sm transition-all hover:scale-110 active:scale-95 border-2
        ${score === 20 ? 'bg-rose-50 border-rose-100 text-rose-600' : 
          score === 50 ? 'bg-amber-50 border-amber-100 text-amber-600' :
          score === 80 ? 'bg-blue-50 border-blue-100 text-blue-600' :
          'bg-emerald-50 border-emerald-100 text-emerald-600'}
      `}
    >
      {score}%
      <div className="text-[8px] uppercase tracking-widest opacity-60 mt-1">{label}</div>
    </button>
  );
}
