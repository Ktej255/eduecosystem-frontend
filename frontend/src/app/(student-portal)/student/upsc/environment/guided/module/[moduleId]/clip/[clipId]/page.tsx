'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import AIConversationPanel from '@/components/guided/AIConversationPanel';
import { useActivityLogger } from '@/hooks/useActivityLogger';
import { ArrowLeft, ArrowRight, Download, FileText } from 'lucide-react';

// Dynamic import for VideoPlayer (uses browser APIs)
const VideoPlayer = dynamic(() => import('@/components/guided/VideoPlayer'), { ssr: false });

interface PausePoint {
  timestamp: number;
  prompt: string;
}

interface Clip {
  id: number;
  title: string;
  youtube_id: string | null;
  order_index: number;
  notes_markdown: string | null;
  pause_points: PausePoint[];
  node_ids: string[];
}

export default function ClipStudyPage() {
  const params = useParams();
  const router = useRouter();
  const clipId = Number(params.clipId);
  const moduleId = Number(params.moduleId);

  const [clip, setClip] = useState<Clip | null>(null);
  const [allClips, setAllClips] = useState<Clip[]>([]);
  const [loading, setLoading] = useState(true);
  const { logActivity } = useActivityLogger();

  // AI panel state
  const [panelOpen, setPanelOpen] = useState(false);
  const [activePausePoint, setActivePausePoint] = useState<PausePoint | null>(null);
  const [playerRef, setPlayerRef] = useState<any>(null);

  useEffect(() => {
    Promise.all([
      fetch(`/api/guided/clip/${clipId}`).then((r) => r.json()),
      fetch(`/api/guided/module/${moduleId}/clips`).then((r) => r.json()),
    ]).then(([clipData, clipsData]) => {
      setClip(clipData);
      setAllClips(Array.isArray(clipsData) ? clipsData : []);

      // Log video watch activity using the new hook
      logActivity({
        activity_type: 'video_watch',
        content_id: `clip_vid_${clipId}`,
        subject_slug: 'environment'
      });
    }).catch(() => {
      setClip(null);
    }).finally(() => {
      setLoading(false);
    });
  }, [clipId, moduleId, logActivity]);

  const handlePausePoint = (pp: PausePoint) => {
    setActivePausePoint(pp);
    setPanelOpen(true);
  };

  const handleResume = () => {
    setPanelOpen(false);
  };

  const currentIndex = allClips.findIndex((c) => c.id === clipId);
  const prevClip = currentIndex > 0 ? allClips[currentIndex - 1] : null;
  const nextClip = currentIndex < allClips.length - 1 ? allClips[currentIndex + 1] : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="text-white/50 animate-pulse">Loading clip...</div>
      </div>
    );
  }

  if (!clip) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="text-white/50">Clip not found.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Top Nav */}
      <div className="sticky top-0 z-30 bg-[#0F172A]/80 backdrop-blur border-b border-white/5 px-4 h-14 flex items-center gap-4">
        <button
          onClick={() => router.push(`/student/upsc/environment/guided`)}
          className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Foundation
        </button>
        <span className="text-white/20">/</span>
        <span className="text-white/80 text-sm font-medium truncate">{clip.title}</span>
      </div>

      {/* Main layout — video + AI panel */}
      <div className="relative flex">
        {/* Main content */}
        <div className={`flex-1 transition-all duration-300 ${panelOpen ? 'mr-[400px]' : ''}`}>
          <div className="max-w-5xl mx-auto px-4 py-8">
            {/* Video */}
            {clip.youtube_id ? (
              <VideoPlayer
                youtubeId={clip.youtube_id}
                contentId={`clip_vid_${clipId}`}
                pausePoints={clip.pause_points}
                onPausePoint={handlePausePoint}
                onComplete={() => {
                  // Mark module progress on completion
                  if (nextClip) {
                    const banner = document.getElementById('next-clip-banner');
                    if (banner) banner.style.display = 'flex';
                  }
                }}
              />
            ) : (
              <div className="aspect-video bg-[#0F172A] rounded-2xl flex items-center justify-center text-white/30 border border-white/5">
                Video not yet available
              </div>
            )}

            {/* Clip Title */}
            <div className="mt-6 flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">{clip.title}</h1>
                <p className="text-white/40 text-sm mt-0.5">
                  Clip {currentIndex + 1} of {allClips.length}
                </p>
              </div>
              {/* Ask a doubt button */}
              <button
                onClick={() => { setActivePausePoint(null); setPanelOpen(true); }}
                className="flex items-center gap-2 px-4 py-2 bg-[#1F3864] hover:bg-[#2E75B6] rounded-xl text-sm font-medium transition-colors"
              >
                💬 Ask a Doubt
              </button>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 mb-8">
              <button
                onClick={() => prevClip && router.push(`/student/upsc/environment/guided/module/${moduleId}/clip/${prevClip.id}`)}
                disabled={!prevClip}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={() => nextClip && router.push(`/student/upsc/environment/guided/module/${moduleId}/clip/${nextClip.id}`)}
                disabled={!nextClip}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2E75B6] hover:bg-blue-500 disabled:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium transition-colors"
              >
                Next Clip
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Notes Section */}
            {clip.notes_markdown && (
              <div className="bg-[#0F172A] border border-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-400" />
                    Study Notes
                  </h2>
                  <button className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors">
                    <Download className="w-3.5 h-3.5" />
                    Download PDF
                  </button>
                </div>
                <div
                  className="prose prose-invert prose-sm max-w-none text-white/80"
                  dangerouslySetInnerHTML={{ __html: clip.notes_markdown }}
                />
              </div>
            )}
          </div>
        </div>

        {/* AI Panel */}
        <AIConversationPanel
          isOpen={panelOpen}
          pausePrompt={activePausePoint?.prompt}
          clipId={clip.id}
          mode={activePausePoint ? 'pause' : 'doubt'}
          onClose={() => setPanelOpen(false)}
          onResume={handleResume}
        />
      </div>
    </div>
  );
}
