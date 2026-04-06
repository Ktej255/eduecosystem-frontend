'use client';

import { useState } from 'react';
import { Target, Globe2, FlaskConical, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ExamSelectorProps {
  onSelect: (examId: string) => void;
}

export default function ExamSelector({ onSelect }: ExamSelectorProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const exams = [
    {
      id: 'upsc',
      title: 'UPSC Civil Services',
      description: 'The standard of cognitive excellence. Map Environment Foundation to the 3-Stage UPSC Dimension.',
      icon: <Target className="w-8 h-8 text-blue-400" />,
      color: 'from-blue-600 to-indigo-500',
      tag: 'Most Popular'
    },
    {
      id: 'spsc',
      title: 'State PSC (SPSC)',
      description: 'Regional focus with global foundations. Tailored for State Civil Services across India.',
      icon: <Globe2 className="w-8 h-8 text-emerald-400" />,
      color: 'from-emerald-600 to-teal-500',
      tag: 'Specialized'
    },
    {
      id: 'research',
      title: 'Research Assistant',
      description: 'The path of the specialist. Focus on policy analysis and environmental data sci.',
      icon: <FlaskConical className="w-8 h-8 text-amber-400" />,
      color: 'from-amber-600 to-orange-500',
      tag: 'Academic'
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 backdrop-blur-3xl animate-in zoom-in-95 duration-1000">
      <div className="w-full max-w-5xl px-8 py-16 flex flex-col items-center">
        
        <div className="text-center space-y-4 mb-16">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 text-[10px] font-black uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              Environment Foundation Complete
           </div>
           <h2 className="text-5xl font-black text-white tracking-tight">Choose Your Specialization</h2>
           <p className="text-slate-400 max-w-xl mx-auto font-medium">
              You've mastered the 103 foundational topics. <br />
              Now, project that knowledge into a specialized Dimension.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
           {exams.map((exam) => (
             <button
               key={exam.id}
               onClick={() => setSelected(exam.id)}
               className={`
                 relative group p-8 rounded-[40px] text-left transition-all duration-500 border-2
                 ${selected === exam.id 
                    ? `bg-slate-900 border-blue-500 shadow-[0_0_50px_rgba(37,99,235,0.2)]` 
                    : `bg-slate-900/40 border-white/5 hover:bg-slate-900 hover:border-white/10 hover:-translate-y-2`}
               `}
             >
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${exam.color} shadow-lg shadow-blue-900/20 mb-8 w-16 h-16 flex items-center justify-center`}>
                   {exam.icon}
                </div>

                <div className="flex items-center gap-2 mb-2">
                   <h3 className="text-2xl font-black text-white">{exam.title}</h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                   {exam.description}
                </p>

                <div className="flex items-center justify-between">
                   <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{exam.tag}</span>
                   {selected === exam.id ? (
                     <CheckCircle2 className="w-6 h-6 text-blue-400" />
                   ) : (
                     <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-all" />
                   )}
                </div>

                {selected === exam.id && (
                  <div className="absolute inset-0 bg-blue-500/5 rounded-[40px] animate-pulse pointer-events-none" />
                )}
             </button>
           ))}
        </div>

        {selected && (
          <div className="mt-16 animate-in slide-in-from-bottom-4 duration-500">
             <button 
               onClick={() => onSelect(selected)}
               className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-3xl font-black text-xl shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-105 transition-all flex items-center gap-4"
             >
                Activate Dimensional Transport
                <Target className="w-6 h-6" />
             </button>
          </div>
        )}
      </div>
    </div>
  );
}
