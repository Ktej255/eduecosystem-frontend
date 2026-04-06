'use client';

import { useRouter } from 'next/navigation';

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

  const handleSelect = (mode: Mode) => {
    if (mode === 'self') {
      router.push(`/student/upsc/${subjectSlug}`);
    } else if (mode === 'guided') {
      router.push(`/student/upsc/${subjectSlug}/guided`);
    } else if (mode === 'premium') {
      // Show coming soon — handled via state in parent or modal
      alert('Premium mode is coming soon! You\'ll get AI voice coaching, personalised study plans, and live tutor access.');
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
    </div>
  );
}
