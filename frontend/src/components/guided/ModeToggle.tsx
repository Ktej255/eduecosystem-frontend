"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Sparkles, Zap, Award, ArrowRight, Star } from 'lucide-react';

type Mode = 'self' | 'guided' | 'premium';

interface ModeToggleProps {
  currentMode: Mode;
  subjectSlug: string;
}

const modes: { id: Mode; label: string; description: string }[] = [
  { id: 'self', label: 'Self Study', description: 'Learn at your own pace' },
  { id: 'guided', label: 'Guided', description: 'Structured daily learning' },
  { id: 'premium', label: 'Premium', description: 'AI-powered mastery' },
];

export default function ModeToggle({ currentMode, subjectSlug }: ModeToggleProps) {
  const router = useRouter();
  const [isPremiumOpen, setIsPremiumOpen] = React.useState(false);

  const handleSelect = (mode: Mode) => {
    if (mode === 'self') {
      router.push(`/student/upsc/${subjectSlug}`);
    } else if (mode === 'guided') {
      router.push(`/student/upsc/${subjectSlug}/guided`);
    } else if (mode === 'premium') {
      setIsPremiumOpen(true);
    }
  };

  return (
    <div className="flex items-center gap-1 p-1 bg-[#F2F2F2] dark:bg-[#0F172A] rounded-xl border border-neutral-200 dark:border-neutral-800">
      {modes.map((mode) => {
        const isActive = currentMode === mode.id;
        const baseClass = 'relative flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer select-none';

        let activeClass = '';
        if (mode.id === 'self') {
          activeClass = isActive
            ? 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white shadow-sm'
            : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300';
        } else if (mode.id === 'guided') {
          activeClass = isActive
            ? 'bg-[#2E75B6] text-white shadow-md shadow-blue-500/20'
            : 'text-neutral-500 hover:text-[#2E75B6] dark:hover:text-blue-400';
        } else {
          activeClass = isActive
            ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
            : 'text-neutral-500 hover:text-amber-600 dark:hover:text-amber-400';
        }

        return (
          <button
            key={mode.id}
            onClick={() => handleSelect(mode.id)}
            className={`${baseClass} ${activeClass}`}
            title={mode.description}
          >
            {mode.id === 'premium' && (
              <span className="text-xs">⭐</span>
            )}
            {mode.label}
            {mode.id === 'premium' && !isActive && (
              <span className="ml-1 text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-1.5 py-0.5 rounded-full">
                SOON
              </span>
            )}
          </button>
        );
      })}

      {/* Premium Landing Side Panel */}
      <Sheet open={isPremiumOpen} onOpenChange={setIsPremiumOpen}>
        <SheetContent side="right" className="w-full sm:max-w-md p-0 overflow-y-auto bg-white dark:bg-[#020617] border-l border-neutral-200 dark:border-neutral-800">
          {/* Header Image/Background */}
          <div className="h-32 bg-gradient-to-br from-amber-500 to-orange-600 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-black rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
               <Star className="w-12 h-12 text-white/50 animate-pulse" />
            </div>
          </div>

          <div className="p-8 space-y-8">
            <SheetHeader className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800 font-bold uppercase tracking-widest text-[10px] px-2 py-0.5">
                  BETA — Limited Seats
                </Badge>
              </div>
              <SheetTitle className="text-3xl font-black text-neutral-900 dark:text-white leading-tight">
                Premium Mode — Coming Soon
              </SheetTitle>
              <SheetDescription className="text-neutral-500 dark:text-neutral-400 text-base">
                The most powerful way to prepare for UPSC. Our AI-driven mastery system is launching soon.
              </SheetDescription>
            </SheetHeader>

            {/* Features List */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">What's Included</h4>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: Sparkles, text: "AI Avatar — Tej's video + voice coaching", desc: "Interactive digital duplicate of the master coach." },
                  { icon: Zap, text: "Personalised Daily Study Plan", desc: "Adaptive schedules tailored to your speed." },
                  { icon: Award, text: "1-on-1 Doubt Sessions (AI-powered)", desc: "Instant conceptual clarity, any time." },
                  { icon: CheckCircle, text: "Predicted Questions for 2026 Exam", desc: "High-probability statement mapping." },
                  { icon: Star, text: "Priority Support & Community", desc: "Direct access to mentors and fast-track help." },
                  { icon: CheckCircle, text: "Everything in Guided Mode included", desc: "Full Foundation Path & Recall system." },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-3 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/10 flex items-center justify-center shrink-0 border border-amber-100 dark:border-amber-900/30">
                      <feature.icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200">{feature.text}</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Section */}
            <div className="p-6 rounded-3xl bg-neutral-900 dark:bg-[#0F172A] text-white shadow-xl shadow-amber-500/10 relative overflow-hidden">
               <div className="relative z-10 space-y-4">
                 <div className="flex justify-between items-end">
                    <div>
                       <div className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1">Early Access Price</div>
                       <div className="text-4xl font-black italic font-serif">₹8,000<span className="text-sm font-normal text-white/50 not-italic">/year</span></div>
                    </div>
                    <div className="text-right">
                       <div className="text-[10px] text-white/40 line-through">Launch Price: ₹15,000</div>
                       <div className="text-xs font-bold text-emerald-400">Save 45% Now</div>
                    </div>
                 </div>
                 <p className="text-[11px] text-white/60 italic leading-relaxed">
                   *Lock in the beta price before we launch. This rate will apply for your entire first year.
                 </p>
                 
                 <button 
                  onClick={() => router.push('/register')}
                  className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-900 font-black flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all active:scale-[0.98]"
                 >
                   Join Waitlist <ArrowRight className="w-5 h-5" />
                 </button>
                 <p className="text-center text-[10px] text-white/40 font-medium uppercase tracking-tight">
                   No payment required now. We will notify you before launch.
                 </p>
               </div>
               
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/20 blur-2xl rounded-full" />
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
