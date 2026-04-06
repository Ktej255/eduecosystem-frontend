import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Video } from 'remotion';

export const VideoTextOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const text = "Planet Earth is one system.";
  const letters = text.split("");

  // Entire text should finish appearing by 2 seconds (60 frames at 30fps)
  const APPEAR_DURATION = 60;
  // A single letter takes 15 frames to fade in smoothly
  const FADE_DURATION = 15;
  // Calculate delay per letter so the last letter finishes its fade exactly at frame 60
  const staggerDelay = (APPEAR_DURATION - FADE_DURATION) / Math.max(1, letters.length - 1);

  return (
    <AbsoluteFill style={{ backgroundColor: '#000000' }}>
      {/* Background Video Layer */}
      {/* Suppressing error if "scene20.mp4" is missing locally by using a relative path 
          rather than staticFile() which throws a hard fatal build error. */}
      <Video
        src="/scene20.mp4"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.8, // Slightly dimmed to ensure white text pops
        }}
        loop
        muted
        onError={(e) => console.warn('Missing video asset /scene20.mp4 - using black fallback instead.', e)}
      />

      {/* Text Overlay Layer */}
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500, // Medium weight
            fontSize: '80px',
            color: '#FFFFFF',
            whiteSpace: 'pre', // Preserves spaces in the array map
            textShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)', // Slight shadow for legibility over video
          }}
        >
          {letters.map((char, i) => {
            const startFrame = i * staggerDelay;
            const endFrame = startFrame + FADE_DURATION;

            const opacity = interpolate(
              frame,
              [startFrame, endFrame],
              [0, 1],
              {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              }
            );

            return (
              <span key={i} style={{ opacity }}>
                {char}
              </span>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
