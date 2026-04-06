'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Cpu, Zap } from 'lucide-react';
import FoundationIntro from './FoundationIntro';
import ExamSelector from './ExamSelector';

interface JourneyStatus {
  step: 'intro' | 'studying' | 'selecting' | 'transported';
  completion_percent: number;
  exam_id?: string;
}

export default function GuidedJourneyManager({ subjectSlug }: { subjectSlug: string }) {
  const [status, setStatus] = useState<JourneyStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [isTransporting, setIsTransporting] = useState(false);

  const fetchStatus = async () => {
    try {
      const res = await fetch(`/api/guided/student/status?subject_slug=${subjectSlug}`);
      if (res.ok) {
        const json = await res.json();
        setStatus(json);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, [subjectSlug]);

  const handleStartFoundation = async () => {
    setStatus(prev => prev ? { ...prev, step: 'studying' } : null);
  };

  const handleSelectExam = async (examId: string) => {
    setIsTransporting(true);
    
    // Simulate Neural Mapping delay for high-fidelity feel
    setTimeout(async () => {
      try {
        const res = await fetch(`/api/guided/student/select-exam?exam_id=${examId}`, {
          method: 'POST',
        });
        if (res.ok) {
          setStatus(prev => prev ? { ...prev, step: 'transported', exam_id: examId } : null);
          window.location.reload(); 
        }
      } catch (err) {
        console.error(err);
        setIsTransporting(false);
      }
    }, 3000); // 3-second 'Sync' period
  };

  if (loading || !status) return null;

  return (
    <>
      <AnimatePresence>
         {isTransporting && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center backdrop-blur-3xl"
           >
              {/* Neural Sync Scan Visuals */}
              <div className="relative w-80 h-80 flex items-center justify-center">
                 <motion.div 
                   animate={{ 
                     scale: [1, 1.2, 1],
                     borderWidth: ['2px', '8px', '2px'],
                     opacity: [0.1, 0.4, 0.1]
                   }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="absolute inset-0 rounded-full border-blue-500 shadow-[0_0_80px_rgba(59,130,246,0.3)]"
                 />
                 
                 <motion.div 
                   animate={{ y: [-160, 160, -160] }}
                   transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                   className="absolute w-full h-[2px] bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,1)] z-20"
                 />

                 <div className="text-center space-y-4">
                    <Cpu className="w-16 h-16 text-blue-400 mx-auto animate-pulse" />
                    <div className="text-xs font-black text-blue-400 uppercase tracking-[0.3em]">
                       Neural Mapping
                    </div>
                 </div>
              </div>

              <div className="mt-12 text-center">
                 <h2 className="text-3xl font-black text-white mb-2">Transporting to UPSC Dimension</h2>
                 <p className="text-white/40 text-sm font-bold uppercase tracking-widest flex items-center gap-2 justify-center">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    Synchronizing Knowledge Graph...
                 </p>
              </div>
           </motion.div>
         )}
      </AnimatePresence>

      {status.step === 'intro' && (
        <FoundationIntro onStart={handleStartFoundation} />
      )}
      
      {status.step === 'selecting' && (
        <ExamSelector onSelect={handleSelectExam} />
      )}
    </>
  );
}
