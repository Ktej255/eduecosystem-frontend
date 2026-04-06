'use client';

import { useEffect, useRef, useState } from 'react';
import { useActivityLogger } from '@/hooks/useActivityLogger';

interface PausePoint {
  timestamp: number;
  prompt: string;
}

interface VideoPlayerProps {
  youtubeId: string;
  contentId?: string; // Added for activity tracking
  pausePoints?: PausePoint[];
  onPausePoint?: (point: PausePoint) => void;
  onComplete?: () => void;
}

export default function VideoPlayer({
  youtubeId,
  contentId,
  pausePoints = [],
  onPausePoint,
  onComplete,
}: VideoPlayerProps) {
  const playerRef = useRef<HTMLDivElement>(null);
  const vjsPlayerRef = useRef<any>(null);
  const pausePointsFiredRef = useRef<Set<number>>(new Set());
  const completionLoggedRef = useRef<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { logActivity } = useActivityLogger();

  useEffect(() => {
    let videojs: any;
    let player: any;

    const initPlayer = async () => {
      const vjsModule = await import('video.js');
      videojs = vjsModule.default;

      // Dynamically import the youtube plugin
      await import('videojs-youtube');

      if (!playerRef.current) return;

      // Create a video element inside the container
      const videoEl = document.createElement('video');
      videoEl.className = 'video-js vjs-big-play-centered vjs-fluid';
      videoEl.setAttribute('data-setup', '{}');
      playerRef.current.appendChild(videoEl);

      player = videojs(videoEl, {
        techOrder: ['youtube'],
        sources: [
          {
            type: 'video/youtube',
            src: `https://www.youtube.com/watch?v=${youtubeId}`,
          },
        ],
        youtube: {
          iv_load_policy: 3,  // No annotations
          modestbranding: 1,
          rel: 0,             // No related videos
          showinfo: 0,
        },
        controls: true,
        fluid: true,
        preload: 'auto',
      });

      vjsPlayerRef.current = player;
      setIsLoaded(true);

      // Poll current time for pause points and completion
      player.on('timeupdate', () => {
        const currentTime = player.currentTime();
        const duration = player.duration();

        // 1. Check for pause points
        const roundedTime = Math.floor(currentTime);
        for (const pp of pausePoints) {
          // Fire within ±1 second of the pause timestamp
          if (
            Math.abs(roundedTime - pp.timestamp) <= 1 &&
            !pausePointsFiredRef.current.has(pp.timestamp)
          ) {
            pausePointsFiredRef.current.add(pp.timestamp);
            player.pause();
            onPausePoint?.(pp);
          }
        }

        // 2. Check for 95% completion to log activity automatically
        if (contentId && duration > 0 && !completionLoggedRef.current) {
          const progress = currentTime / duration;
          if (progress >= 0.95) {
            completionLoggedRef.current = true;
            logActivity({
              activity_type: 'video_complete',
              content_id: contentId,
              duration: Math.floor(currentTime)
            });
          }
        }
      });

      player.on('ended', () => {
        onComplete?.();
      });
    };

    initPlayer().catch(console.error);

    return () => {
      if (vjsPlayerRef.current) {
        vjsPlayerRef.current.dispose();
        vjsPlayerRef.current = null;
      }
    };
  }, [youtubeId, contentId, logActivity]);

  // Allow resuming after AI conversation
  const resume = () => {
    if (vjsPlayerRef.current) {
      vjsPlayerRef.current.play();
    }
  };

  return (
    <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
      {/* Video.js CSS */}
      <link
        rel="stylesheet"
        href="https://vjs.zencdn.net/8.6.1/video-js.css"
      />
      <div ref={playerRef} className="w-full h-full" />
    </div>
  );
}
